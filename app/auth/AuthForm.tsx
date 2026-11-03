"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { api } from "../lib/api";

type AuthUser = { role: "member" | "admin" };

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const isRegister = mode === "register";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const result = await api<{ user: AuthUser }>(
        isRegister ? "/auth/register" : "/auth/login",
        {
          method: "POST",
          body: JSON.stringify(isRegister ? { name, email, password } : { email, password }),
        },
      );
      router.replace(result.user.role === "admin" ? "/admin" : "/dashboard");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Authentication failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <div className="page-eyebrow"><ShieldCheck size={14} className="me-2" /> MEMBER IDENTITY / {isRegister ? "CREATE" : "SIGN IN"}</div>
        <h1>{isRegister ? "Join the platform." : "Welcome back."}</h1>
        <p>{isRegister ? "Create a member account to manage your profile and save articles for later." : "Sign in to your member space. Administrator accounts are routed to the control room."}</p>
        <form onSubmit={submit}>
          {isRegister && (
            <>
              <label className="field-label" htmlFor="name">Display name</label>
              <input id="name" className="form-control" autoComplete="name" minLength={2} maxLength={80} required value={name} onChange={(event) => setName(event.target.value)} />
            </>
          )}
          <label className="field-label" htmlFor="email">Email address</label>
          <input id="email" className="form-control" type="email" autoComplete="email" maxLength={254} required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label className="field-label" htmlFor="password">Password</label>
          <input id="password" className="form-control" type="password" autoComplete={isRegister ? "new-password" : "current-password"} minLength={isRegister ? 12 : 1} maxLength={72} required value={password} onChange={(event) => setPassword(event.target.value)} />
          {isRegister && <small className="d-block mt-2 text-secondary">Use at least 12 characters. Never reuse a password from another service.</small>}
          {error && <div className="form-error" role="alert">{error}</div>}
          <button className="button-primary" type="submit" disabled={busy}>
            {busy ? "Please wait…" : isRegister ? "Create member account" : "Sign in"} <ArrowRight size={16} />
          </button>
        </form>
        <div className="form-note">
          {isRegister ? <>Already have an account? <Link href="/login">Sign in</Link></> : <>New to the platform? <Link href="/register">Create a member account</Link></>}
        </div>
      </section>
    </main>
  );
}
