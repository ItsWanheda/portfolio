
# Portfolio — Cybersecurity & Backend Engineering

**Cybersecurity Enthusiast · Backend Developer · Networking Explorer**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Maintained](https://img.shields.io/badge/Maintained-Yes-FF003C?style=for-the-badge)](https://github.com/ItsWanheda/portfolio/commits/main)
[![GitHub Stars](https://img.shields.io/github/stars/ItsWanheda/portfolio?style=for-the-badge&logo=github&color=FF003C)](https://github.com/ItsWanheda/portfolio/stargazers)

· [Report Bug](https://github.com/ItsWanheda/portfolio/issues) · [Request Feature](https://github.com/ItsWanheda/portfolio/issues)

</div>

---

## 📑 Table of Contents

- [About](#-about)
- [✨ Features](#-features)
- [🖥️ Live Demo](#-live-demo)
- [🛠️ Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Configuration](#-configuration)
- [🎨 Customization](#-customization)
- [📸 Screenshots](#-screenshots)
- [🔒 Security](#-security)
- [🐛 Known Issues](#-known-issues)
- [🗺️ Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📞 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📸 Screenshots
<p align="center">
  <img src="./src/images/preview.png/>
</p>

---

## 🧠 About

A **cybersecurity-themed personal portfolio** built with vanilla web technologies. This isn't just a résumé — it's a demonstration of my engineering philosophy: **secure by design, performant by default, beautiful by intention**.

The project showcases my journey through:
- 🔐 **Cybersecurity** — protocol analysis, attack vectors, defensive programming
- ⚙️ **Backend Engineering** — REST APIs, authentication systems, data modeling
- 🌐 **Network Infrastructure** — TCP/IP, TLS, DNS, packet analysis
- 💻 **Software Craftsmanship** — clean code, type safety, modular architecture

> *\"Building secure systems one project at a time.\"*

---

## ✨ Features

### 🎨 Design & UX
- **Cyberpunk-themed UI** with red (#FF003C) accent palette and dark mode
- **Custom animated cursor** with hover effects
- **Canvas-based network background** with interactive node connections
- **Typewriter effect** in the hero section
- **Smooth scroll reveals** using Intersection Observer API
- **Fully responsive** — mobile, tablet, desktop, and ultrawide
- **Accessibility-first** — ARIA labels, keyboard navigation, reduced-motion support

### ⚡ Performance
- **Zero runtime dependencies** — pure HTML/CSS/JS
- **Lazy rendering** for off-screen sections
- **Optimized canvas animations** using `requestAnimationFrame`
- **Mobile-aware** — custom cursor disabled on touch devices
- **Print stylesheet** for clean resume printing

### 🛡️ Security
- **No external trackers** or analytics
- **Strict CSP-ready** markup (no inline event handlers except where minimal)
- **HTTPS-only assets** for fonts and CDNs
- **Open source transparency** — every line of code is auditable

### 📑 Content Sections
| Section | Description |
|---------|-------------|
| **Hero** | Animated introduction with avatar and CTAs |
| **About** | Bio, focus areas, and learning stats |
| **Skills** | Filterable tech stack with proficiency bars |
| **Projects** | Featured work with detailed modal views |
| **GitHub** | Live repo showcase with language stats |
| **Experience** | Interactive learning timeline |
| **Certifications** | Credentials and badges |
| **Blog** | Technical writeups with full-article modals |
| **Contact** | Click-to-copy email and social links |

---

## 🖥️ Live Demo

> **Coming soon** — deployed via GitHub Pages
> 
> Once deployed, the link will be: `https://ItsWanheda.github.io/portfolio/`

To deploy your own:
1. Fork this repository
2. Go to **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)`
4. Save and wait ~2 minutes

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Markup** | HTML5 (semantic) | Structure & accessibility |
| **Styling** | CSS3 (Grid, Flexbox, Custom Properties) | Theme, layout, animations |
| **Logic** | Vanilla JavaScript (ES6 Modules) | Interactivity, rendering |
| **Animation** | Canvas API + CSS Keyframes | Background, transitions |
| **Typography** | Google Fonts (Syne, DM Sans, Share Tech Mono) | Display, body, monospace |
| **Version Control** | Git + GitHub | Source control & CI |

**Why no frameworks?** This portfolio is intentionally framework-free to demonstrate mastery of web fundamentals. Every animation, every interaction, every responsive breakpoint is hand-crafted.

---

## 📂 Project Structure
```text
portfolio/
├── index.html # Main entry point (semantic HTML5)
├── README.md # You are here
├── SECURITY.md # Vulnerability disclosure policy
├── LICENSE #  License
└── src/
├── css/
│ └── style.css # Single stylesheet (~1500 lines, organized)
├── js/
│ └── main.js # Module-based JS (ES6, no bundler needed)
└── images/
   └── Profile.jpg # Profile avatar
```

---

## 🚀 Quick Start

### Prerequisites
- A modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- That's literally it. No build tools. No Node. No npm.

### Installation

```bash
# Clone the repository
git clone https://github.com/ItsWanheda/portfolio.git

# Navigate into the directory
cd portfolio

# Open in your default browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html

# OR use any local server (recommended for module support)
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# Then visit http://localhost:8000
```

---

## ⚙️ Configuration
All content is driven by JavaScript data objects at the top of src/js/main.js. No JSON imports, no CMS, no database.

* **Personal Info**
Update these constants in src/js/main.js:
```bash
// Hero section
const TYPED_STRINGS = [
  'Building Secure Systems...',
  // ... add your own phrases
];

// GitHub username (used in repo links)
const GITHUB_USERNAME = 'ItsWanheda';

// Contact info
const CONTACT_DATA = [
  { icon: '⚡', label: 'GitHub', value: 'github.com/ItsWanheda', ... },
  { icon: '📧', label: 'Email',  value: 'your@email.com', ... },
  // ... add Discord, LinkedIn, etc.
];
```
* **Theme Colors**
Edit CSS custom properties in src/css/style.css:
```bash
:root {
  --black:  #0A0A0A;   /* Main background */
  --red:    #FF003C;   /* Accent color */
  --white:  #F5F5F5;   /* Primary text */
  --muted:  #888888;   /* Secondary text */
  /* ... */
}
```
To create a different color scheme, change only these variables — every component will adapt automatically.

---

## 🎨 Customization
* **Adding a New Project**
Open src/js/main.js and append to PROJECTS_DATA:
```bash
{
  id: 'my-new-project',
  name: 'Project Name',
  emoji: '🛡️',
  desc: 'Short description (1-2 sentences).',
  tags: ['Tag1', 'Tag2'],
  features: [
    'Feature one',
    'Feature two',
  ],
  arch: 'Technical architecture explanation.',
  github: 'https://github.com/ItsWanheda/project-repo',
  live: 'https://demo.example.com',  // or null
  status: 'Active',
}
```
> The card, modal, and detail view will render automatically.

* **Adding a Blog Post**
Append to BLOG_DATA:
```bash
{
  num: '07',                              // Sequential number
  tag: 'Category Name',
  title: 'Your Article Title',
  excerpt: '1-2 sentence preview.',
  date: 'Jun 2025',
  readTime: '5 min',
  content: `
    <p>Your HTML content here...</p>
    <h3>Section</h3>
    <pre><code>// code blocks work too</code></pre>
  `,
}
```
* **Adding a Skill**
Append to SKILLS_DATA:
```bash
{ name: 'Rust', icon: '🦀', cat: 'languages', level: 40 }
```
For rich details (description, experience, projects), add to SKILL_DETAILS:
```bash
'Rust': {
  desc: 'Memory-safe systems programming language.',
  exp: 'Currently exploring for security tooling.',
  projects: ['Memory-safe port scanner'],
}
```

---

## 🔒 Security
This portfolio takes security seriously. For details on:
* **How to report a vulnerability** → see SECURITY.md
* **Security headers implemented** → see security section in code
* **Dependencies and supply chain** → zero external runtime dependencies

**Security Features Baked In**
* ✅ No third-party analytics or tracking scripts
* ✅ All external resources loaded over HTTPS
* ✅ Click-to-copy contact info (no email harvesting by bots)
* ✅ Print stylesheet disables interactive elements
* ✅ Reduced-motion preference respected
* ✅ No eval(), Function(), or unsafe DOM sinks

## 🐛 Known Issues

* **Custom cursor** may stutter on low-end devices with the canvas background running
* **Safari iOS** has minor differences in backdrop-filter rendering (cosmetic only)
* **Long blog content** in modals requires scrolling — keyboard arrow keys don't auto-scroll the modal body

---

## 🤝 Contributing
Contributions are welcome! Whether it's a bug fix, new feature, or documentation improvement — I appreciate your help.

**How to Contribute**
1. Fork the repository
2.Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

**Code Style**
* 2-space indentation
* Single quotes for JS strings
* Semantic HTML (use <section>, <article>, <nav>, etc.)
* Mobile-first CSS (write base styles for mobile, then layer @media for larger)
* Comment non-obvious logic

---

## 📜 License
See LICENSE for the full text.

---

## 📞 Contact
> ItsWanheda — Cybersecurity Enthusiast & Backend Developer
- github:
- Email:Wanheda.work@gmail.com
> Project Link: https://github.com/ItsWanheda/portfolio

---

## 🙏 Acknowledgments
This portfolio was built with knowledge and inspiration from:
* **MDN Web Docs** — the truth source for web standards
* **CSS-Tricks** — Flexbox and Grid tutorials
* **TryHackMe & HackTheBox** — hands-on cybersecurity training
* **OWASP Foundation**  — web security best practices
* The open-source community — for tools, fonts, and inspiration