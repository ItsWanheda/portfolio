/* ============================================================
   GITHUB API
   VERCEL SERVERLESS FUNCTION
============================================================ */

const GITHUB_USERNAME = 'ItsWanheda';
const GITHUB_API = 'https://api.github.com';
const GITHUB_API_VERSION = '2026-03-10';

const CACHE_SECONDS = 300;


/* ============================================================
   GITHUB REST REQUEST
============================================================ */

async function githubRequest(endpoint) {
  const response = await fetch(
    `${GITHUB_API}${endpoint}`,
    {
      method: 'GET',

      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
        Authorization:
          `Bearer ${process.env.GITHUB_TOKEN}`
      },

      cache: 'no-store'
    }
  );

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `GitHub API ${response.status}: ${error}`
    );
  }

  return response.json();
}


/* ============================================================
   GITHUB GRAPHQL REQUEST
============================================================ */

async function githubGraphQL(query, variables = {}) {
  const response = await fetch(
    `${GITHUB_API}/graphql`,
    {
      method: 'POST',

      headers: {
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
        Authorization:
          `Bearer ${process.env.GITHUB_TOKEN}`
      },

      body: JSON.stringify({
        query,
        variables
      }),

      cache: 'no-store'
    }
  );

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


/* ============================================================
   TOTAL COMMITS
============================================================ */

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

  const data = await githubGraphQL(
    query,
    {
      login: GITHUB_USERNAME
    }
  );

  return (
    data?.user?.contributionsCollection
      ?.totalCommitContributions || 0
  );
}


/* ============================================================
   VERCEL HANDLER
============================================================ */

export default async function handler(req, res) {

  /* ==========================================================
     CORS
  ========================================================== */

  res.setHeader(
    'Access-Control-Allow-Origin',
    '*'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, OPTIONS'
  );

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type'
  );


  /* ==========================================================
     OPTIONS
  ========================================================== */

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }


  /* ==========================================================
     METHOD CHECK
  ========================================================== */

  if (req.method !== 'GET') {

    return res.status(405).json({
      error: 'Method Not Allowed'
    });

  }


  /* ==========================================================
     TOKEN CHECK
  ========================================================== */

  if (!process.env.GITHUB_TOKEN) {

    console.error(
      '[GitHub API] GITHUB_TOKEN is not configured.'
    );

    return res.status(500).json({
      error: 'GitHub integration is not configured.'
    });

  }


  try {

    /* ========================================================
       PROFILE
    ======================================================== */

    const profile =
      await githubRequest(
        `/users/${GITHUB_USERNAME}`
      );


    /* ========================================================
       REPOSITORIES
    ======================================================== */

    const allRepos =
      await githubRequest(
        `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
      );


    /* ========================================================
       REMOVE FORKS
    ======================================================== */

    const repositories =
      allRepos.filter(
        repo => !repo.fork
      );


    /* ========================================================
       TOTAL STARS
    ======================================================== */

    const totalStars =
      repositories.reduce(
        (total, repo) =>
          total +
          Number(
            repo.stargazers_count || 0
          ),
        0
      );


    /* ========================================================
       TOTAL FORKS
    ======================================================== */

    const totalForks =
      repositories.reduce(
        (total, repo) =>
          total +
          Number(
            repo.forks_count || 0
          ),
        0
      );


    /* ========================================================
       TOTAL COMMITS
    ======================================================== */

    const totalCommits =
      await getTotalCommits();


    /* ========================================================
       RESPONSE
    ======================================================== */

    const responseData = {

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

    };


    /* ========================================================
       VERCEL EDGE CACHE
    ======================================================== */

    res.setHeader(
      'Cache-Control',
      `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=600`
    );


    /* ========================================================
       RESPONSE
    ======================================================== */

    return res.status(200).json(
      responseData
    );

  } catch (error) {

    console.error(
      '[GitHub API] Request failed:',
      error
    );


    return res.status(500).json({
      error: 'Failed to load GitHub data.'
    });

  }

}