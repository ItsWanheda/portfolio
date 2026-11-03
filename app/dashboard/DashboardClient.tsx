"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Bookmark, LogOut, Save, UserRound } from "lucide-react";
import { api, clearClientSession } from "../lib/api";

type Member = { id: string; name: string; email: string; role: string; bio: string; avatarUrl: string };
type SavedPost = { _id: string; title: string; slug: string; excerpt: string; category: string };

export function DashboardClient() {
  const router = useRouter();
  const [user, setUser] = useState<Member | null>(null);
  const [bookmarks, setBookmarks] = useState<SavedPost[]>([]);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<{ user: Member }>("/auth/me")
      .then(async (auth) => {
        const [profile, saved] = await Promise.all([
          api<{ user: Member }>("/users/me"),
          api<{ posts: SavedPost[] }>("/users/me/bookmarks"),
        ]);
        setUser(profile.user);
        setName(profile.user.name);
        setBio(profile.user.bio || "");
        setBookmarks(saved.posts);
        if (auth.user.role === "admin") router.replace("/admin");
      })
      .catch(() => router.replace("/login"))
      .finally(() => setLoading(false));
  }, [router]);

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    try {
      const result = await api<{ user: Member }>("/users/me", {
        method: "PATCH",
        body: JSON.stringify({ name, bio }),
      });
      setUser(result.user);
      setMessage("Your profile has been updated.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Profile update failed.");
    }
  }

  async function removeBookmark(id: string) {
    try {
      await api("/users/me/bookmarks/" + id, { method: "DELETE" });
      setBookmarks((items) => items.filter((item) => item._id !== id));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not remove the saved article.");
    }
  }

  async function logout() {
    try { await api("/auth/logout", { method: "POST" }); } catch { /* Clear local state even if the session expired. */ }
    clearClientSession();
    router.replace("/");
  }

  if (loading) return <main className="page-shell"><div className="container"><div className="empty-state">Opening your member space…</div></div></main>;
  if (!user) return null;

  return (
    <main className="page-shell">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">MEMBER SPACE / PERSONAL SETTINGS</div>
          <h1 className="page-title">Your space<span className="text-danger">.</span></h1>
          <p className="page-description">Manage your member profile and keep useful writing close at hand.</p>
        </header>

        <div className="row g-4">
          <div className="col-lg-5">
            <section className="workspace-panel h-100">
              <div className="workspace-title"><h2><UserRound size={17} className="me-2 text-danger" /> Profile</h2><span className="status-pill">MEMBER</span></div>
              <form onSubmit={saveProfile}>
                <label className="field-label" htmlFor="member-name">Display name</label>
                <input id="member-name" className="form-control" minLength={2} maxLength={80} required value={name} onChange={(event) => setName(event.target.value)} />
                <label className="field-label" htmlFor="member-email">Email</label>
                <input id="member-email" className="form-control" value={user.email} disabled />
                <label className="field-label" htmlFor="member-bio">About you</label>
                <textarea id="member-bio" className="form-control" maxLength={500} rows={4} value={bio} onChange={(event) => setBio(event.target.value)} />
                <button type="submit" className="button-primary"><Save size={15} /> Save profile</button>
              </form>
              {message && <div className="form-note text-success">{message}</div>}
              {error && <div className="form-error" role="alert">{error}</div>}
              <button className="action-link mt-4" type="button" onClick={logout}><LogOut size={14} className="me-2" /> Sign out</button>
            </section>
          </div>

          <div className="col-lg-7">
            <section className="workspace-panel h-100">
              <div className="workspace-title"><h2><Bookmark size={17} className="me-2 text-danger" /> Saved writing</h2><span className="status-pill">{bookmarks.length} SAVED</span></div>
              {bookmarks.length === 0 ? (
                <div className="empty-state">No saved articles yet. Explore the <Link href="/journal" className="text-white text-decoration-underline">journal</Link> and bookmark something useful.</div>
              ) : (
                <div className="d-grid gap-3">
                  {bookmarks.map((post) => (
                    <div key={post._id} className="d-flex justify-content-between align-items-start gap-3 border-bottom pb-3" style={{ borderColor: "var(--line)" }}>
                      <div>
                        <span className="meta-mono">{post.category}</span>
                        <h3 className="fs-6 mt-2 mb-1"><Link href={"/journal/" + post.slug}>{post.title}</Link></h3>
                        <p className="text-secondary small mb-0">{post.excerpt}</p>
                      </div>
                      <button className="action-link danger" type="button" onClick={() => void removeBookmark(post._id)}>Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
