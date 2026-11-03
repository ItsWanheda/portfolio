"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { api } from "../lib/api";

type SavedPost = { _id: string };

export function BookmarkButton({ postId }: { postId: string }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        await api("/auth/me");
        const result = await api<{ posts: SavedPost[] }>("/users/me/bookmarks");
        if (!active) return;
        setAuthenticated(true);
        setSaved(result.posts.some((post) => post._id === postId));
      } catch {
        if (active) setAuthenticated(false);
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, [postId]);

  async function toggle() {
    setBusy(true);
    setError("");
    try {
      await api("/users/me/bookmarks/" + postId, { method: saved ? "DELETE" : "PUT" });
      setSaved((current) => !current);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The bookmark could not be updated.");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return null;
  if (!authenticated) {
    return <Link href="/login" className="button-secondary"><Bookmark size={15} /> Sign in to save</Link>;
  }

  return (
    <div className="d-flex flex-column align-items-start gap-2 my-4">
      <button type="button" className="button-secondary" onClick={() => void toggle()} disabled={busy}>
        {saved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
        {busy ? "Saving…" : saved ? "Saved to your space" : "Save article"}
      </button>
      {error && <span className="text-danger small" role="status">{error}</span>}
    </div>
  );
}
