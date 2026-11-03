import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">OPEN CHANNEL / LET'S CONNECT</div>
          <h1 className="page-title">Start a conversation<span className="text-danger">.</span></h1>
          <p className="page-description">For thoughtful collaborations, security research, backend engineering, or a technical idea worth exploring.</p>
        </header>
        <div className="row g-3">
          <div className="col-md-6">
            <Reveal className="workspace-panel h-100">
              <Mail className="text-danger mb-4" size={24} />
              <div className="meta-mono mb-2">EMAIL / DIRECT</div>
              <h2 className="h4 mb-3">Wanheda.work@gmail.com</h2>
              <p className="text-secondary small lh-lg">The most direct way to reach me. Include enough context for me to understand what you are working on.</p>
              <a className="text-link mt-3" href="mailto:Wanheda.work@gmail.com?subject=Hello%20ItsWanheda">Send an email <ArrowUpRight size={15} /></a>
            </Reveal>
          </div>
          <div className="col-md-6">
            <Reveal className="workspace-panel h-100">
              <Github className="text-danger mb-4" size={24} />
              <div className="meta-mono mb-2">GITHUB / OPEN SOURCE</div>
              <h2 className="h4 mb-3">ItsWanheda</h2>
              <p className="text-secondary small lh-lg">Explore current projects, inspect the source, report an issue, or start a discussion around a repository.</p>
              <a className="text-link mt-3" href="https://github.com/ItsWanheda" target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={15} /></a>
            </Reveal>
          </div>
        </div>
        <p className="text-secondary small mt-4">Looking for the public work first? <Link href="/projects" className="text-white text-decoration-underline">Explore selected projects</Link>.</p>
      </div>
    </main>
  );
}
