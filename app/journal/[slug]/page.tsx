import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { BookmarkButton } from "../../components/BookmarkButton";

export const dynamic = "force-dynamic";

type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string | null;
};

async function getArticle(slug: string): Promise<Article | null> {
  const apiOrigin = process.env.API_SERVER_URL?.replace(/\/+$/, "");
  if (!apiOrigin) return null;
  try {
    const response = await fetch(apiOrigin + "/api/v1/posts/" + encodeURIComponent(slug), { cache: "no-store" });
    if (!response.ok) return null;
    const data = await response.json() as { post?: Article };
    return data.post || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt || undefined,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) notFound();

  return (
    <main className="page-shell">
      <div className="container article-shell">
        <Link href="/journal" className="text-link mb-5"><ArrowLeft size={15} /> Back to journal</Link>
        <article>
          <div className="page-eyebrow">{post.category} / TECHNICAL JOURNAL</div>
          <h1 className="page-title">{post.title}</h1>
          <p className="page-description">{post.excerpt}</p>
          <div className="article-meta">
            <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en", { dateStyle: "long" }) : "FIELD NOTE"}</span>
            <span>{post.readTime} MIN READ</span>
            {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </div>
          <BookmarkButton postId={post._id} />
          <div className="article-content">
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
