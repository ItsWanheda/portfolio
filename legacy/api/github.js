/* ============================================================
   GITHUB API
   VERCEL SERVERLESS FUNCTION
============================================================ */

const GITHUB_USERNAME = 'ItsWanheda';
const GITHUB_API = 'https://api.github.com';
const GITHUB_API_VERSION = '2026-03-10';

const CACHE_SECONDS = 300;
const REPOSITORY_LIMIT = 30;

// Defense-in-depth rate limit. Vercel Firewall should remain the
// primary distributed control; this protects warm function instances.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const requestBuckets = new Map();

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const bucket = requestBuckets.get(ip);

  if (!bucket || now - bucket.startedAt >= RATE_LIMIT_WINDOW_MS) {
    requestBuckets.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  bucket.count += 1;

  if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error('GITHUB_TOKEN is not configured.');
  }

  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': GITHUB_API_VERSION,
    Authorization: `Bearer ${token}`
  };
}

async function githubRequest(endpoint) {
  const response = await fetch(`${GITHUB_API}${endpoint}`, {
    method: 'GET',
    headers: githubHeaders()
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GitHub API ${response.status}: ${error}`);
  }

  return response.json();
}

async function githubGraphQL(query, variables = {}) {
  const response = await fetch(`${GITHUB_API}/graphql`, {
    method: 'POST',
    headers: {
      ...githubHeaders(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL ${response.status}: ${JSON.stringify(data)}`
    );
  }

  if (data.errors?.length) {
    throw new Error(
      `GitHub GraphQL error: ${JSON.stringify(data.errors)}`
    );
  }

  return data.data;
}

async function getTotalCommits() {
  const query = `
    query GetUserContributions($login: String!) {
      user(login: $login) {
        contributionsCollection {
          totalCommitContributions
        }
      }
    }
  `;

  const data = await githubGraphQL(query, {
    login: GITHUB_USERNAME
  });

  return data?.user?.contributionsCollection?.totalCommitContributions || 0;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://itswanheda.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (isRateLimited(getClientIp(req))) {
    res.setHeader('Retry-After', '60');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(429).json({
      error: 'Too many requests. Please try again later.'
    });
  }

  if (!process.env.GITHUB_TOKEN) {
    console.error('[GitHub API] GITHUB_TOKEN is not configured.');
    return res.status(500).json({
      error: 'GitHub integration is not configured.'
    });
  }

  try {
    const [profile, allRepos, totalCommits] = await Promise.all([
      githubRequest(`/users/${GITHUB_USERNAME}`),
      githubRequest(
        `/users/${GITHUB_USERNAME}/repos?per_page=${REPOSITORY_LIMIT}&sort=updated`
      ),
      getTotalCommits()
    ]);

    const repositories = allRepos
      .filter(repo => !repo.fork)
      .map(repo => ({
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
        created_at: repo.created_at
      }));

    const totalStars = repositories.reduce(
      (total, repo) => total + Number(repo.stargazers_count || 0),
      0
    );

    const totalForks = repositories.reduce(
      (total, repo) => total + Number(repo.forks_count || 0),
      0
    );

    res.setHeader(
      'Cache-Control',
      `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=600`
    );

    return res.status(200).json({
      profile: {
        login: profile.login,
        avatar_url: profile.avatar_url,
        bio: profile.bio,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following
      },
      repositories,
      stats: {
        totalStars,
        totalForks,
        totalCommits
      }
    });
  } catch (error) {
    console.error('[GitHub API] Request failed:', error);
    return res.status(500).json({
      error: 'Failed to load GitHub data.'
    });
  }
}
