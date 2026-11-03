import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">THE PERSON BEHIND THE SYSTEMS</div>
          <h1 className="page-title">Curiosity, made<br />practical<span className="text-danger">.</span></h1>
          <p className="page-description">ItsWanheda is a personal engineering platform focused on cybersecurity, backend development, networking, and building useful software.</p>
        </header>
        <div className="row g-4">
          <div className="col-lg-7">
            <Reveal className="workspace-panel h-100">
              <div className="eyebrow mb-4">01 / APPROACH</div>
              <h2 className="mb-3">Understand the system before changing it.</h2>
              <p className="page-description mb-0">The work starts with investigation: understand the constraints, map the failure modes, make the smallest safe change, and verify the result. This site is the public record of that process.</p>
            </Reveal>
          </div>
          <div className="col-lg-5">
            <Reveal className="workspace-panel h-100">
              <div className="eyebrow mb-4">02 / FOCUS</div>
              <ul className="list-unstyled mb-0 text-secondary lh-lg">
                <li>— Application and API security</li>
                <li>— Backend architecture and data systems</li>
                <li>— Networking and protocol exploration</li>
                <li>— Developer tools and practical automation</li>
                <li>— Writing, documenting, and sharing findings</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
