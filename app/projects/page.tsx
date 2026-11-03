"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";

type Repository = {
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
};

type GithubPayload = {
  repositories: Repository[];
  stats: { totalStars: number; totalForks: number; totalCommits: number };
};

export default function ProjectsPage() {
  const [data, setData] = useState<GithubPayload | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("The live GitHub project feed is not available.");
        return response.json() as Promise<GithubPayload>;
      })
      .then(setData)
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : "Could not load projects."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page-shell">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">BUILDS / EXPERIMENTS / OPEN SOURCE</div>
          <h1 className="page-title">Selected work<span className="text-danger">.</span></h1>
          <p className="page-description">A live window into the repositories and experiments behind the platform. Project details stay connected to the source rather than becoming a second, stale copy.</p>
        </header>

        {data && (
          <div className="row g-3 mb-4">
            <div className="col-4"><div className="workspace-panel"><div className="meta-mono">STARS</div><div className="h2 fw-bold mt-2 mb-0">{data.stats.totalStars}</div></div></div>
            <div className="col-4"><div className="workspace-panel"><div className="meta-mono">FORKS</div><div className="h2 fw-bold mt-2 mb-0">{data.stats.totalForks}</div></div></div>
            <div className="col-4"><div className="workspace-panel"><div className="meta-mono">CONTRIBUTIONS</div><div className="h2 fw-bold mt-2 mb-0">{data.stats.totalCommits}</div></div></div>
          </div>
        )}

        {loading && <div className="empty-state">Connecting to the public build log…</div>}
        {!loading && error && (
          <div className="empty-state">
            {error}<br />
            <a className="text-white text-decoration-underline d-inline-block mt-3" href="https://github.com/ItsWanheda" target="_blank" rel="noreferrer">Open GitHub profile</a>
          </div>
        )}
        {data && (
          <div className="content-grid">
            {data.repositories.map((repo) => (
              <article className="content-card" key={repo.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="meta-mono">{repo.language || "EXPERIMENT"}</span>
                  <Github size={17} className="text-danger" />
                </div>
                <h2>{repo.name}</h2>
                <p>{repo.description || "An open-source project. Explore the repository for implementation details and current status."}</p>
                <div className="card-foot">
                  <span className="d-flex gap-3"><span><Star size={12} className="me-1" />{repo.stargazers_count}</span><span><GitFork size={12} className="me-1" />{repo.forks_count}</span></span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={"Open " + repo.name}><ArrowUpRight size={16} /></a>
                </div>
                {repo.topics?.length > 0 && <div className="d-flex flex-wrap gap-2 mt-3">{repo.topics.slice(0, 4).map((topic) => <span key={topic} className="status-pill">{topic}</span>)}</div>}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
