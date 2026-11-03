"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FilePlus2, Pencil, Trash2 } from "lucide-react";
import { api } from "../lib/api";

type AdminUser = { role: string; name: string };
type AdminPost = { _id: string; title: string; slug: string; status: "draft" | "published"; updatedAt: string; views: number };

export function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function initialize() {
      try {
        const result = await api<{ user: AdminUser }>("/auth/me");
        if (result.user.role !== "admin") {
          router.replace("/dashboard");
          return;
        }
        const postResult = await api<{ posts: AdminPost[] }>("/admin/posts");
        if (!active) return;
        setUser(result.user);
        setPosts(postResult.posts);
      } catch (reason) {
        if (active) {
          setError(reason instanceof Error ? reason.message : "Could not load the admin workspace.");
          router.replace("/login");
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    void initialize();
    return () => { active = false; };
  }, [router]);

  async function deletePost(id: string) {
    if (!window.confirm("Permanently delete this article? This cannot be undone.")) return;
    try {
      await api("/admin/posts/" + id, { method: "DELETE" });
      setPosts((items) => items.filter((post) => post._id !== id));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not delete the article.");
    }
  }

  if (loading) return <main className="page-shell"><div className="container"><div className="empty-state">Verifying administrator access…</div></div></main>;
  if (!user) return null;

  const published = posts.filter((post) => post.status === "published").length;
  const drafts = posts.length - published;

  return (
    <main className="page-shell">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">CONTROL ROOM / CONTENT OPERATIONS</div>
          <h1 className="page-title">Admin workspace<span className="text-danger">.</span></h1>
          <p className="page-description">Welcome, {user.name}. Manage the public journal, prepare drafts, and control what is published.</p>
        </header>

        <div className="row g-3 mb-4">
          <div className="col-md-4"><div className="workspace-panel"><div className="meta-mono">TOTAL ARTICLES</div><div className="display-5 fw-bold mt-2">{posts.length}</div></div></div>
          <div className="col-md-4"><div className="workspace-panel"><div className="meta-mono">PUBLISHED</div><div className="display-5 fw-bold mt-2">{published}</div></div></div>
          <div className="col-md-4"><div className="workspace-panel"><div className="meta-mono">DRAFTS</div><div className="display-5 fw-bold mt-2">{drafts}</div></div></div>
        </div>

        <section className="workspace-panel">
          <div className="workspace-title">
            <h2>Journal content</h2>
            <Link href="/admin/posts/new" className="button-primary"><FilePlus2 size={15} /> New article</Link>
          </div>
          {error && <div className="form-error mb-3" role="alert">{error}</div>}
          {posts.length === 0 ? (
            <div className="empty-state">Your content library is empty. Create a draft to start the journal.</div>
          ) : (
            <table className="workspace-table">
              <thead><tr><th>Article</th><th>Status</th><th>Last updated</th><th>Views</th><th>Actions</th></tr></thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td><strong>{post.title}</strong><div className="text-secondary mt-1">/{post.slug}</div></td>
                    <td><span className={"status-pill " + post.status}>{post.status}</span></td>
                    <td>{new Date(post.updatedAt).toLocaleDateString()}</td>
                    <td>{post.views || 0}</td>
                    <td><div className="inline-actions">
                      <Link className="action-link" href={"/admin/posts/" + post._id + "/edit"} aria-label={"Edit " + post.title}><Pencil size={15} /></Link>
                      <button className="action-link danger" type="button" onClick={() => void deletePost(post._id)} aria-label={"Delete " + post.title}><Trash2 size={15} /></button>
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </main>
  );
}
