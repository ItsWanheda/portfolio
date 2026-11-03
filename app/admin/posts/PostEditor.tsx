"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { api } from "../../lib/api";

type EditablePost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  status: "draft" | "published";
};

const blankPost = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Engineering",
  tags: "",
  coverImage: "",
  status: "draft" as "draft" | "published",
};

export function PostEditor({ postId }: { postId?: string }) {
  const router = useRouter();
  const [form, setForm] = useState(blankPost);
  const [loading, setLoading] = useState(Boolean(postId));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api<{ user: { role: string } }>("/auth/me")
      .then(async (authResult) => {
        if (authResult.user.role !== "admin") throw new Error("Administrator access is required.");
        if (!postId) return;
        const articleResult = await api<{ post: EditablePost }>("/admin/posts/" + postId);
        setForm({
          title: articleResult.post.title,
          slug: articleResult.post.slug,
          excerpt: articleResult.post.excerpt,
          content: articleResult.post.content || "",
          category: articleResult.post.category,
          tags: (articleResult.post.tags || []).join(", "),
          coverImage: articleResult.post.coverImage || "",
          status: articleResult.post.status,
        });
      })
      .catch((reason: unknown) => {
        if (reason instanceof Error && reason.message.includes("Administrator")) router.replace("/dashboard");
        else if (reason instanceof Error && reason.message.includes("not found")) setError(reason.message);
        else router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [postId, router]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const payload = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 12),
    };
    try {
      await api(postId ? "/admin/posts/" + postId : "/admin/posts", {
        method: postId ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      });
      router.push("/admin");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The article could not be saved.");
    } finally {
      setBusy(false);
    }
  }

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  if (loading) return <main className="page-shell"><div className="container"><div className="empty-state">Opening editor…</div></div></main>;

  return (
    <main className="page-shell">
      <div className="container">
        <Link href="/admin" className="text-link mb-4"><ArrowLeft size={15} /> Back to admin</Link>
        <header className="page-header">
          <div className="page-eyebrow">CONTENT STUDIO / {postId ? "EDIT ARTICLE" : "NEW ARTICLE"}</div>
          <h1 className="page-title">{postId ? "Refine the story" : "Create a story"}<span className="text-danger">.</span></h1>
          <p className="page-description">Write in Markdown. Save as a draft while it is in progress, then publish when it is ready.</p>
        </header>
        <section className="workspace-panel">
          {error && <div className="form-error mb-3" role="alert">{error}</div>}
          <form onSubmit={submit}>
            <div className="editor-grid">
              <div className="editor-full">
                <label className="field-label" htmlFor="post-title">Title</label>
                <input id="post-title" className="form-control" minLength={3} maxLength={180} required value={form.title} onChange={(event) => update("title", event.target.value)} />
              </div>
              <div>
                <label className="field-label" htmlFor="post-slug">URL slug (optional)</label>
                <input id="post-slug" className="form-control" maxLength={200} placeholder="generated-from-title" value={form.slug} onChange={(event) => update("slug", event.target.value)} />
              </div>
              <div>
                <label className="field-label" htmlFor="post-category">Category</label>
                <input id="post-category" className="form-control" minLength={2} maxLength={60} required value={form.category} onChange={(event) => update("category", event.target.value)} />
              </div>
              <div className="editor-full">
                <label className="field-label" htmlFor="post-excerpt">Excerpt</label>
                <textarea id="post-excerpt" className="form-control" rows={2} minLength={10} maxLength={320} required value={form.excerpt} onChange={(event) => update("excerpt", event.target.value)} />
              </div>
              <div className="editor-full">
                <label className="field-label" htmlFor="post-content">Article body (Markdown)</label>
                <textarea id="post-content" className="form-control font-monospace" rows={18} minLength={20} maxLength={50000} required value={form.content} onChange={(event) => update("content", event.target.value)} placeholder={"## A clear heading\n\nWrite your article here…"} />
              </div>
              <div>
                <label className="field-label" htmlFor="post-tags">Tags (comma separated)</label>
                <input id="post-tags" className="form-control" value={form.tags} onChange={(event) => update("tags", event.target.value)} placeholder="security, backend, research" />
              </div>
              <div>
                <label className="field-label" htmlFor="post-cover">Cover image URL (optional)</label>
                <input id="post-cover" className="form-control" type="url" value={form.coverImage} onChange={(event) => update("coverImage", event.target.value)} />
              </div>
              <div className="editor-full">
                <label className="field-label" htmlFor="post-status">Publishing state</label>
                <select id="post-status" className="form-select" value={form.status} onChange={(event) => update("status", event.target.value as "draft" | "published")}>
                  <option value="draft">Draft — only visible to administrators</option>
                  <option value="published">Published — visible in the public journal</option>
                </select>
              </div>
            </div>
            <div className="form-actions mt-4">
              <button className="button-primary" type="submit" disabled={busy}><Save size={15} /> {busy ? "Saving…" : form.status === "published" ? "Save & publish" : "Save draft"}</button>
              <Link href="/admin" className="button-secondary">Cancel</Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
