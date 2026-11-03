import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Network, ShieldCheck, Terminal } from "lucide-react";
import { SceneCanvas } from "./components/SceneCanvas";
import { Reveal } from "./components/Reveal";

const disciplines = [
  { icon: ShieldCheck, code: "01", title: "Security engineering", text: "Threat-aware systems, application security, authentication, and defensive design." },
  { icon: Terminal, code: "02", title: "Backend systems", text: "APIs, data models, service architecture, and the engineering behind reliable products." },
  { icon: Network, code: "03", title: "Networks & protocols", text: "How systems communicate, where they fail, and how to make those boundaries safer." },
  { icon: Code2, code: "04", title: "Tools & experiments", text: "Practical software, developer utilities, reverse engineering, and ideas worth testing." },
];

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero-stage" id="intro">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-layout container-fluid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> INDEPENDENT ENGINEERING / DIGITAL FIELD NOTES</div>
              <p className="hero-kicker">A PERSONAL PLATFORM BY ITS WANHEDA</p>
              <h1>
                Beyond<br />
                the <span className="word-outline">portfolio.</span>
              </h1>
              <p className="hero-description">
                A place for systems, security, experiments, and ideas.
                Built to document the process — not just display the result.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#platform">Explore the platform <ArrowDown size={17} /></a>
                <Link className="button-quiet" href="/projects">View selected work <ArrowUpRight size={16} /></Link>
              </div>
              <div className="hero-signature"><span>SECURE BY DESIGN</span><i /> <span>BUILT WITH INTENT</span></div>
            </div>
            <div className="hero-art">
              <SceneCanvas />
              <div className="orbit-label orbit-label-top"><span>FIG. 001</span> SYSTEM CORE</div>
              <div className="orbit-label orbit-label-bottom">ENGINEERED / NOT ASSEMBLED</div>
              <div className="hero-coordinate">45° 27' N<br />09° 11' E</div>
            </div>
          </div>
          <a href="#platform" className="scroll-cue" aria-label="Scroll to explore">
            <span>SCROLL TO ENTER</span>
            <span className="scroll-line"><i /></span>
          </a>
          <div className="hero-index">01 <span>/</span> 04</div>
        </section>

        <section className="platform-section section-shell" id="platform">
          <div className="container">
            <Reveal className="section-heading">
              <div>
                <div className="eyebrow">THE SPACE AFTER THE INTRO</div>
                <h2>A living record of<br /><span>curiosity in motion.</span></h2>
              </div>
              <p className="section-heading-copy">
                This is the working space behind the name: projects, technical writing,
                research trails, and the lessons hidden between releases.
              </p>
            </Reveal>

            <div className="discipline-grid">
              {disciplines.map((item) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.code} className="discipline-card">
                    <div className="card-topline"><span>{item.code} / 04</span><Icon size={20} strokeWidth={1.5} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="card-index">FIELD {item.code}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="work-section section-shell">
          <div className="container">
            <Reveal className="section-heading compact-heading">
              <div>
                <div className="eyebrow">SELECTED DIRECTIONS</div>
                <h2>Work with<br /><span>a point of view.</span></h2>
              </div>
              <Link href="/projects" className="text-link">Explore projects <ArrowUpRight size={16} /></Link>
            </Reveal>
            <div className="work-showcase">
              <Reveal className="work-feature work-feature-large">
                <span className="work-number">PROJECT / 001</span>
                <div className="work-feature-symbol"><ShieldCheck size={54} strokeWidth={1} /></div>
                <div>
                  <div className="work-category">SECURITY / ENGINEERING</div>
                  <h3>Build things that<br />hold up under pressure.</h3>
                  <p>Security tooling, authentication flows, and systems that make complexity understandable.</p>
                </div>
              </Reveal>
              <div className="work-feature-stack">
                <Reveal className="work-feature">
                  <span className="work-number">PROJECT / 002</span>
                  <div className="work-feature-symbol"><Terminal size={36} strokeWidth={1.2} /></div>
                  <div className="work-category">DEVELOPER TOOLS</div>
                  <h3>Make the invisible<br />observable.</h3>
                </Reveal>
                <Reveal className="work-feature">
                  <span className="work-number">PROJECT / 003</span>
                  <div className="work-feature-symbol"><Network size={36} strokeWidth={1.2} /></div>
                  <div className="work-category">NETWORKS / RESEARCH</div>
                  <h3>Understand the<br />space between.</h3>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="journal-section section-shell">
          <div className="container journal-band">
            <Reveal>
              <div className="eyebrow">OPEN NOTEBOOK / 001</div>
              <h2>Thinking out loud.<br /><span>Writing it down.</span></h2>
              <p>Technical articles, breakdowns, notes from experiments, and things learned the hard way.</p>
            </Reveal>
            <Reveal className="journal-action">
              <Link href="/journal" className="button-primary">Enter the journal <ArrowRight size={17} /></Link>
              <span>FIELD NOTES · RESEARCH · ENGINEERING</span>
            </Reveal>
          </div>
        </section>

        <section className="contact-section section-shell">
          <div className="container contact-inner">
            <Reveal>
              <div className="eyebrow">THE NEXT CONNECTION</div>
              <h2>Have something<br /><span>interesting in mind?</span></h2>
            </Reveal>
            <Reveal className="contact-cta">
              <p>Ideas become better when they leave the notebook. Open to thoughtful collaborations and technical conversations.</p>
              <Link href="/contact" className="button-primary">Start a conversation <ArrowUpRight size={17} /></Link>
              <a href="https://github.com/ItsWanheda" target="_blank" rel="noreferrer" className="github-inline"><Code2 size={16} /> GitHub / ItsWanheda</a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link href="/" className="footer-brand">ITS<span>WANHEDA</span></Link>
          <span>SECURE BY DESIGN. BUILT WITH INTENT.</span>
          <span>© {new Date().getFullYear()} ITSWANHEDA</span>
        </div>
      </footer>
    </>
  );
}
