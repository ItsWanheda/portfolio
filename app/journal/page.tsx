import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal",
  description: "Technical articles, cybersecurity research notes, backend engineering breakdowns, and lessons from experiments.",
};
export const dynamic = "force-dynamic";

type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string | null;
};

async function getPosts(): Promise<PostSummary[]> {
  const apiOrigin = process.env.API_SERVER_URL?.replace(/\/+$/, "");
  if (!apiOrigin) return [];
  try {
    const response = await fetch(apiOrigin + "/api/v1/posts?limit=30", { cache: "no-store" });
    if (!response.ok) return [];
    const data = await response.json() as { posts?: PostSummary[] };
    return data.posts || [];
  } catch {
    return [];
  }
}

export default async function JournalPage() {
  const posts = await getPosts();
  return (
    <main className="page-shell">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">FIELD NOTES / RESEARCH / WRITING</div>
          <h1 className="page-title">The journal<span className="text-danger">.</span></h1>
          <p className="page-description">Technical breakdowns, notes from experiments, security research, and the reasoning behind the systems I build.</p>
        </header>

        {posts.length === 0 ? (
          <div className="empty-state">
            <BookOpen size={25} className="mb-3 text-danger" />
            <div>No published articles yet, or the journal API is temporarily unavailable.</div>
            <small className="d-block mt-2">New writing will appear here when it is ready to leave the draft room.</small>
          </div>
        ) : (
          <div className="content-grid">
            {posts.map((post, index) => (
              <Link href={"/journal/" + post.slug} className="content-card" key={post._id}>
                <span className="meta-mono">{post.category} / {String(index + 1).padStart(2, "0")}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="card-foot">
                  <span>{post.readTime} MIN READ</span>
                  <span><ArrowUpRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
