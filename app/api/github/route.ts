import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GITHUB_USERNAME = "ItsWanheda";
const GITHUB_API = "https://api.github.com";
const GITHUB_API_VERSION = "2026-03-10";
const CACHE_SECONDS = 300;
const REPOSITORY_LIMIT = 30;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const requestBuckets = new Map<string, { startedAt: number; count: number }>();

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = requestBuckets.get(ip);
  if (!bucket || now - bucket.startedAt >= RATE_LIMIT_WINDOW_MS) {
    requestBuckets.set(ip, { startedAt: now, count: 1 });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX_REQUESTS;
}

function headers(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GitHub integration is not configured.");
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
    Authorization: "Bearer " + token,
  };
}

async function githubRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(GITHUB_API + endpoint, {
    method: "GET",
    headers: headers(),
    next: { revalidate: CACHE_SECONDS },
  });
  if (!response.ok) throw new Error("GitHub API request failed with status " + response.status);
  return response.json() as Promise<T>;
}

async function githubGraphQL<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(GITHUB_API + "/graphql", {
    method: "POST",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: CACHE_SECONDS },
  });

  const data = await response.json() as { data?: T; errors?: unknown[] };
  if (!response.ok || data.errors?.length || !data.data) {
    throw new Error("GitHub contribution query failed.");
  }
  return data.data;
}

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "60", "Cache-Control": "no-store" } },
    );
  }

  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub integration is not configured." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const contributionQuery = `
      query GetUserContributions($login: String!) {
        user(login: $login) {
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
    `;

    type Profile = {
      login: string;
      avatar_url: string;
      bio: string | null;
      public_repos: number;
      followers: number;
      following: number;
    };
    type GithubRepository = {
      id: number;
      name: string;
      full_name: string;
      description: string | null;
      html_url: string;
      homepage: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      topics: string[];
      updated_at: string;
      created_at: string;
      fork: boolean;
    };
    type ContributionData = {
      user: { contributionsCollection: { totalCommitContributions: number } } | null;
    };

    const [profile, allRepos, contributionData] = await Promise.all([
      githubRequest<Profile>("/users/" + GITHUB_USERNAME),
      githubRequest<GithubRepository[]>(
        "/users/" + GITHUB_USERNAME + "/repos?per_page=" + REPOSITORY_LIMIT + "&sort=updated",
      ),
      githubGraphQL<ContributionData>(contributionQuery, { login: GITHUB_USERNAME }),
    ]);

    const repositories = allRepos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics,
        updated_at: repo.updated_at,
        created_at: repo.created_at,
      }));

    const totalStars = repositories.reduce((total, repo) => total + Number(repo.stargazers_count || 0), 0);
    const totalForks = repositories.reduce((total, repo) => total + Number(repo.forks_count || 0), 0);

    return NextResponse.json(
      {
        profile: {
          login: profile.login,
          avatar_url: profile.avatar_url,
          bio: profile.bio,
          public_repos: profile.public_repos,
          followers: profile.followers,
          following: profile.following,
        },
        repositories,
        stats: {
          totalStars,
          totalForks,
          totalCommits: contributionData.user?.contributionsCollection.totalCommitContributions || 0,
        },
      },
      {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=" + CACHE_SECONDS + ", stale-while-revalidate=600" },
      },
    );
  } catch (error) {
    console.error("[GitHub route] request failed", error);
    return NextResponse.json(
      { error: "Failed to load GitHub data." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
