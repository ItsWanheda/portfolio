/* ============================================================
   DATA
============================================================ */
const SKILLS_DATA = [
  { name: 'HTML5', icon: '🌐', cat: 'frontend', level: 85 },
  { name: 'CSS3', icon: '🎨', cat: 'frontend', level: 80 },
  { name: 'JavaScript', icon: '⚡', cat: 'frontend', level: 75 },
  { name: 'HTTP/S', icon: '🌐', cat: 'networking', level: 80 },
  { name: 'TLS/SSL', icon: '🔏', cat: 'networking', level: 72 },
  { name: 'API Security', icon: '🔒', cat: 'security', level: 75 },
  { name: 'JWT', icon: '🔑', cat: 'security', level: 80 },
  { name: 'RBAC', icon: '🛡️', cat: 'security', level: 72 },
  { name: 'OAuth', icon: '🔐', cat: 'security', level: 65 },
  { name: 'Bash', icon: '💻', cat: 'languages', level: 60 },
  { name: 'C++', icon: '⚙️', cat: 'languages', level: 75 },
  { name: 'Python', icon: '🐍', cat: 'languages', level: 85 },
  { name: 'Go', icon: '🐹', cat: 'languages', level: 70 },
  { name: 'JavaScript', icon: '🟨', cat: 'languages', level: 80 },
  { name: 'TypeScript', icon: '🟦', cat: 'languages', level: 75 },
  { name: 'React', icon: '⚛️', cat: 'frontend', level: 82 },
  { name: 'Next.js', icon: '▲', cat: 'frontend', level: 78 },
  { name: 'Tailwind CSS', icon: '🌊', cat: 'frontend', level: 85 },
  { name: 'Node.js', icon: '🟢', cat: 'backend', level: 75 },
  { name: 'Express.js', icon: '🚀', cat: 'backend', level: 72 },
  { name: 'Git', icon: '🌲', cat: 'tools', level: 88 },
  { name: 'GitHub', icon: '🐙', cat: 'tools', level: 85 },
  { name: 'Void Linux', icon: '🐧', cat: 'tools', level: 70 },
  { name: 'TCP/IP', icon: '📡', cat: 'networking', level: 70 },
  { name: 'BlackArch', icon: '🐉', cat: 'tools', level: 50 },
  { name: 'Kali Linux', icon: '🐉', cat: 'tools', level: 80 },
  { name: 'VS Code', icon: '💙', cat: 'tools', level: 90 },
  { name: 'Docker', icon: '🐳', cat: 'tools', level: 74 },
  { name: 'Windows', icon: '🪟', cat: 'tools', level: 95 },
];

const SKILL_DETAILS = {
  'TypeScript': { desc: 'Strongly typed superset of JavaScript. My primary language for building backend APIs and type-safe applications.', exp: '6 months of active use in backend projects.', projects: ['Auth Service', 'API Security Analyzer'] },
  'Go': { desc: 'Fast, compiled language built for backend services and system-level programming.', exp: 'Currently learning — building CLI tools and microservices.', projects: ['Network Scanner'] },
  'JWT': { desc: 'JSON Web Tokens for stateless authentication between client and server.', exp: 'Implemented in multiple auth systems with refresh token rotation.', projects: ['Enterprise Auth Service'] },
  'TLS/SSL': { desc: 'Transport Layer Security — the backbone of secure web communication.', exp: 'Deep study of TLS handshake, certificate validation, and cipher suites.', projects: ['HTTP Security Analyzer'] },
  'TCP/IP': { desc: 'The fundamental protocol stack governing internet communication.', exp: 'Studied OSI model, packet analysis with Wireshark, and raw socket programming.', projects: ['Network Scanner'] },
};

const PROJECTS_DATA = [
  {
    id: 'sni-spoofing',
    name: 'SNI-Spoofing Tool',
    emoji: '🎭',
    desc: 'A highperformance Python tool for bypassing DPI via IP/TCP-Header manipulation and SNI spoofing, designed for network analysis and privacy testing.',
    tags: ['Python', 'Networking', 'DPI-Bypass', 'TCP/IP', 'Security-Testing'],
    features: [
      'Advanced IP/TCP-Header manipulation',
      'Dynamic spoofI (Server Name Indication) spoofing',
      'DPI (Deep Packet Inspection) evasion techniques',
      'Configurable packet crafting for network analysis',
      'High-performance packet processing'
    ],
    arch: 'Python-based network utility utilizing low-level socket manipulation and packet crafting for protocol-level bypass.',
    github: 'https://github.com/ItsWanheda/SNI-SPOOFING',
    license: 'MIT',
    platform: 'Windows',
    status: 'Active'
  }, {
    id: 'http-header-analyzer',
    name: 'HTTP Header Analyzer',
    emoji: '🛡️',
    desc: 'A high-performance Go-based security tool that inspects HTTP headers, TLS configurations, and redirect chains with a focus on deep vulnerability detection.',
    tags: ['Go', 'Golang', 'CyberSecurity', 'TLS/SSL', 'SSRF-Protection', 'Web-Security'],
    features: [
      'Deep Security Header & Cookie Audit (CSP, HSTS, SameSite)',
      'Advanced TLS/SSL Inspection (Cipher Suites & Metadata)',
      'Full Redirect Chain Tracking & Visualization',
      'Hardened SSRF Protection (Internal Network Blocking)',
      'Automated Security Scoring (A+ to F) & Remediation Engine',
      'Cyberpunk-themed Responsive UI with Dark/Light modes'
    ],
    arch: 'High-concurrency Go backend with a REST API. Secure TLS inspection engine with built-in SSRF mitigation and modular security parsers.',
    github: 'https://github.com/ItsWanheda/http-header-analyzer',
    live: null,
    license: 'Go-based (Specify your license, e.g., MIT)',
    status: 'Active'
  }, {
    id: 'scanner', name: 'SpectraScan', emoji: '📡',
    desc: 'A lightweight network reconnaissance tool written in Go. Discovers hosts, open ports, and service banners on local networks.',
    tags: ['Go', 'Networking', 'TCP/IP', 'CLI'],
    features: ['CIDR range host discovery via ICMP', 'Multi-threaded TCP port scanning', 'Service banner grabbing', 'OS fingerprinting hints', 'JSON/CSV output formats'],
    arch: 'Go CLI with goroutine pool for concurrent scanning. Raw sockets for ICMP, standard net for TCP.',
    github: 'https://github.com/ItsWanheda/SpectraScan', live: null
  },
  {
    id: 'SystemBreach-Preloader',
    name: 'Hacker-ish Preloader',
    emoji: '📟',
    desc: 'A high-en, cyberpunk-style preloader animation featuring glitch aesthetics, CRT effects, and realistic terminal-style loading logic.',
    tags: ['Vanilla JS', 'CSS3', 'Cyberpunk-UI', 'Glitch-Effects', 'UX-Design'],
    features: [
      'Advanced CSS Glitch & Chromatic Aberration',
      'Gritty CRT Scanline & Digital Noise Simulation',
      'Variable Loading Logic (Latency & Burst Simulation)',
      'Dynamic Threat Level Status Indicators',
      'Interactive Keyboard Shortcuts (Enter/Esc) & Skip Function',
      'Responsive, Mobile-First Cyber-Aesthetic Design'
    ],
    arch: 'Pure Vanilla JavaScript & CSS-heavy implementation. Optimized for high-performance rendering with zero external dependencies.',
    github: 'https://github.com/ItsWanheda/SystemBreach-Preloader',
    live: null,
    license: 'MIT',
    status: 'Active'
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    emoji: '💰', desc: 'A versatile personal finance management tool with dual interfaces (CLI & Web) for tracking expenses, managing budgets, and visualizing spending habits.',
    tags: ['Python', 'Flask', 'SQLite', 'Data Visualization'],
    features: [
      'Dual-mode interface: Rich-powered CLI and responsive Flask Web UI',
      'Comprehensive CRUD operations for expenses and custom categories',
      'Budget management: Set monthly or per-category spending limits',
      'Data visualization: Interactive Chart.js web charts & Matplotlib CLI bar charts',
      'Data portability: Exportable CSV reports and local SQLite storage'
    ],
    arch: 'Python backend using Flask for web and Click for CLI. SQLite for local data persistence. Integrated with Rich for terminal styling and Matplotlib/Chart.js for analytics.',
    github: 'https://github.com/ItsWanheda/expense-tracker',
    live: null,
    license: 'MIT',
    status: 'Active'
  },
];

const REPOS_DATA = [
  { name: 'SNI-Spoofing Tool', desc: 'A high-performanc Python tool for bypassing DPI via IP/TCP-Header manipulation and SNI spoofing, designed for network analysis and privacy testing.', lang: 'Python,DPI-Bypass,Networking', stars: 0, forks: 0, github: 'https://github.com/ItsWanheda/SNI-SPOOFING' },
  { name: 'http-header-analyzer', desc: 'A high-performance Go-based security tool that inspects HTTP headers, TLS configurations, and redirect chains.', lang: 'Go,CyberSecurity,TLS/SSL', stars: 0, forks: 0, github: 'https://github.com/ItsWanheda/http-header-analyzer' },
  { name: 'SpectraScan', desc: 'A lightweight network reconnaissance tool written in Go for discovering hosts, ports, and services.', lang: 'Python,Networking', stars: 0, forks: 0, github: 'https://github.com/ItsWanheda/SpectraScan' },
  { name: 'Expense Tracker', desc: 'A versatile personal finance management tool with dual interfaces (CLI & Web) for tracking expenses and visualizing spending.', lang: 'Python,SQLite', stars: 0, forks: 0, github: 'https://github.com/ItsWanheda/expense-tracker' },
];

const TIMELINE_DATA = [
  { date: '2022 · Q1', title: 'The Genesis: Web Fundamentals', desc: 'Embarked on the journey of understanding the web. Mastered HTML, CSS, and JavaScript, focusing on the core mechanics of how browsers render and interact with web technologies.' },
  { date: '2022 · Q3', title: 'Type Safety & Software Craftsmanship', desc: 'Transitioned to TypeScript. This was a turning point; moving from dynamic scripting to disciplined, type-safe development, which fundamentally changed my approach to building reliable software architecture.' },
  { date: '2023 · Q1', title: 'Backend Mastery & Data Persistence', desc: 'Deep dive into server-side engineering. Developed robust RESTful APIs, mastered PostgreSQL for relational data modeling, and learned the nuances of scalable backend systems and database optimization.' },
  { date: '2023 · Q3', title: 'The Shift to Cybersecurity', desc: 'Curiosity turned into a mission. Started analyzing the OWASP Top 10, studying JWT vulnerabilities, and understanding the critical importance of TLS/SSL and API hardening in modern web ecosystems.' },
  { date: '2024 · Q1', title: 'Networking & Protocol Engineering', desc: 'Moving down the OSI model. Deep-seated study of TCP/IP, DNS, and HTTP/S. Started working with low-level packet manipulation and understanding how network traffic can be intercepted, analyzed, and secured.' },
  { date: '2024 · Q3', title: 'Systems Programming & High-Performance Tools', desc: 'Leveraging Go and Python for security tooling. Focused on building high-concurrency network scanners and protocol-level manipulation tools (like SNI spoofing) to test network resilience and DPI evasion.' },
  { date: '2025 · Present', title: 'Advanced Security Research & Engineering', desc: 'Currently focused on deep-dive security engineering: exploring advanced evasion techniques, contributing to security-centric open-source projects, and pursuing formal industry certifications to solidify my expertise.' },
];

const CERTS_DATA = [
  { icon: '🛡️', name: 'Penetration Testing Fundamentals', provider: 'TryHackMe / HackTheBox', date: 'Active Learning' },
  { icon: '🐍', name: 'Advanced Python for Security', provider: 'Self-Paced', date: '2025' },
  { icon: '🌐', name: 'Network Security & Protocols', provider: 'Cisco Networking Academy', date: 'In Progress' },
  { icon: '🐹', name: 'Backend Development with Go', provider: 'Self-Paced', date: '2024' },
  { icon: '🔍', name: 'OSINT & Threat Intelligence', provider: 'Practical Application', date: 'Ongoing' },
];

const BLOG_DATA = [
  {
    num: '01',
    tag: 'Authentication & Identity',
    title: 'JWT Security Deep Dive: Exploiting Misconfigurations and Implementation Flaws',
    excerpt: 'Beyond the basics: An analytical look at JWT architecture, common cryptographic pitfalls, and advanced attack vectors like Algorithm Confusion and Key Injection.',
    date: 'May 2025',
    readTime: '5 min',
    content: `
      <p>JSON Web Tokens (JWT) have become the de-facto standard for stateless authentication in modern web architectures. However, the ease of implementation often masks profound security vulnerabilities that can lead to complete account takeover (ATO).</p>
      
      <h3 style="color: #ff0055;">1. The Anatomy: More Than Just Three Parts</h3>
      <p>A JWT consists of a Header, Payload, and Signature, encoded in Base64Url. But from a security perspective, the distinction between <em>encoding</em> and <em>encryption</em> is where most vulnerabilities reside.</p>
      
      <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
        <code><code>BASE64URL(Header)</code>.<code>BASE64URL(Payload)</code>.<code>Signature</code></code>
      </div>

      <h3 style="color: #ff0055;">2. Critical Attack Vectors</h3>
      
      <h4 style="color: #00ff41;">A. The "None" Algorithm Attack</h4>
      <p>The most infamous flaw occurs when a backend accepts the <code style="color: #ff0055;">"alg": "none"</code> header. An attacker can modify the payload and strip the signature entirely. If the server is poorly configured, it may treat the token as valid without verification.</p>

      <h4 style="color: #00ff41;">B. RS256 to HS256 Algorithm Confusion</h4>
      <p>This is a sophisticated attack where an attacker switches the algorithm from an asymmetric <strong>RS256</strong> (Public/Private key) to a symmetric <strong>HS256</strong> (Shared secret). By using the server's <em>public key</em> as the <em>HS256 secret</em>, the attacker can forge valid signatures that the server will trust.</p>

      <h4 style="color: #00ff41;">C. Weak Secret Brute-Forcing</h4>
      <p>Using HS256 with a weak, predictable secret (e.g., "secret123") makes the token vulnerable to offline brute-force attacks using tools like <strong>Hashcat</strong> or <strong>John the Ripper</strong>.</p>

      <h3 style="color: #ff0055;">3. Hardening the Implementation (The Defensive Blueprint)</h3>
      <p>To build a resilient authentication layer, follow these non-negotiable principles:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="border-bottom: 1px solid #333;">
          <th style="text-align: left; padding: 8px;">Control</th>
          <th style="text-align: left; padding: 8px;">Implementation Detail</th>
        </tr>
        <tr>
          <td style="padding: 8px;"><strong>Algorithm Strictness</strong></td>
          <td style="padding: 8px;">Explicitly whitelist allowed algorithms (e.g., only <code>RS256</code>). Reject any token using <code>"none"</code>.</td>
        </tr>
        <tr>
          <td style="padding: 8px;"><strong>Key Management</strong></td>
          <td style="padding: 8px;">Use high-entropy keys stored in a Hardware Security Module (HSM) or a secure Secret Manager.</td>
        </tr>
        <tr>
          <td style="padding: 8px;"><strong>Claim Validation</strong></td>
          <td style="padding: 8px;">Mandatory validation of <code style="color: #00ff41;">exp</code> (Expiration), <code style="color: #00ff41;">iat</code> (Issued At), and <code style="color: #00ff41;">nbf</code> (Not Before).</td>
        </tr>
        <tr>
          <td style="padding: 8px;"><strong>Storage Strategy</strong></td>
          <td style="padding: 8px;">Avoid <code style="color: #ff0055;">localStorage</code> to mitigate XSS. Prefer <code style="color: #00ff41;">HttpOnly; Secure; SameSite=Strict</code> cookies.</td>
        </tr>
      </table>

      <h3 style="color: #ff0055;">Conclusion</h3>
      <p>Authentication is not a "set and forget" feature. As protocols evolve, so do the methods to circumvent them. A true security engineer doesn't just implement JWT; they implement it with an adversarial mindset.</p>
    `
  },
  {
    num: '02',
    tag: 'API Security & Hardening',
    title: 'Hardening RESTful Architectures: Defense-in-Depth Against Automated Exploits',
    excerpt: 'A technical deep-dive into neutralizing API-centric attack vectors through strategic header implementation, sophisticated rate-limiting algorithms, and strict schema enforcement.',
    date: 'Apr 2025',
    readTime: '5 min',
    content: `
      <p>In a microservices-driven ecosystem, the API is the primary attack surface. Securing an API is not merely about authentication; it is about building a resilient perimeter that can withstand automated reconnaissance, brute-force attempts, and injection-based payloads.</p>

      <h3 style="color: #ff0055;">1. The First Line of Defense: HTTP Security Headers</h3>
      <p>Security headers are the "silent sentinels" of the web. They instruct the browser/client on how to behave, effectively reducing the surface area for client-side attacks.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0;">
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">HSTS</strong><br>
          <small>Forces HTTPS, preventing SSL Stripping attacks.</small>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">CSP</strong><br>
          <small>Mitigates XSS by restricting resource origins.</small>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">X-Content-Type</strong><br>
          <small>Prevents MIME-sniffing vulnerabilities.</small>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">X-Frame-Options</strong><br>
          <small>Defends against Clickjacking attempts.</small>
        </div>
      </div>

      <h3 style="color: #ff0055;">2. Mitigating DoS & Brute-Force: Rate Limiting Algorithms</h3>
      <p>Simple rate limiting is easily bypassed by distributed botnets. To defend against sophisticated automated tools, you must choose the right algorithm for your traffic pattern.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 10px; border: 1px solid #333;">Algorithm</th>
          <th style="padding: 10px; border: 1px solid #333;">Mechanism</th>
          <th style="padding: 10px; border: 1px solid #333;">Security Profile</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #333;"><strong>Fixed Window</strong></td>
          <td style="padding: 10px; border: 1px solid #333;">Resets at specific time intervals.</td>
          <td style="padding: 10px; border: 1px solid #333; color: #ff0055;">Low. Vulnerable to "bursting" at window edges.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #333;"><strong>Token Bucket</strong></td>
          <td style="padding: 10px; border: 1px solid #333;">Tokens added to a bucket at a fixed rate.</td>
          <td style="padding: 10px; border: 1px solid #333; color: #ffaa00;">Medium. Allows controlled bursts of traffic.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #333;"><strong>Sliding Window</strong></td>
          <td style="padding: 10px; border: 1px solid #333;">Tracks requests across a moving time frame.</td>
          <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">High. Most resilient against edge-burst attacks.</td>
        </tr>
      </table>

      <h3 style="color: #ff0055;">3. Input Validation: The Zero-Trust Paradigm</h3>
      <p>In a secure API, <strong>all</strong> input is considered malicious until proven otherwise. Relying on client-side validation is a critical failure.</p>
      
      <p>Effective validation requires a two-pronged approach:</p>
      <ol>
        <li><strong>Schema Enforcement:</strong> Use strict typing and structure validation (e.g., <code style="color: #00ff41;">Zod</code> for TS, <code style="color: #00ff41;">Pydantic</code> for Python). If the payload doesn't match the exact schema, the request must be rejected <em>before</em> it reaches the business logic.</li>
        <li><strong>Sanitization & Parameterization:</strong> To prevent SQLi (SQL Injection), never concatenate strings to build queries. Always use <strong>Parameterized Queries</strong> or ORMs that handle abstraction. For XSS prevention, sanitize all string inputs to strip out potentially executable <code style="color: #ff0055;">&lt;script&gt;</code> tags.</li>
      </ol>

      <div style="border: 1px dashed #ff0055; padding: 15px; margin-top: 20px;">
        <h4 style="margin-top: 0; color: #ff0055;">🚨 Pro-Tip: The "Fail-Fast" Principle</h4>
        <p style="margin-bottom: 0;">Implement your security layers as early as possible in the request lifecycle (Middleware). The sooner you reject a malformed or malicious request, the fewer resources your application wastes processing it.</p>
      </div>
    `
  },
  {
    num: '03',
    tag: 'Protocol Analysis & Networking',
    title: 'TLS 1.3 Deep Dive: The Cryptographic Handshake that Powers the Secure Web',
    excerpt: 'Deconstructing the mechanics of TLS 1.3: From Diffie-Hellman key exchanges to the elimination of legacy vulnerabilities and the transition to 1-RTT efficiency.',
    date: 'Mar 2025',
    readTime: '4 min',
    content: `
      <p>In the era of pervasive surveillance and Man-in-the-Middle (MitM) attacks, <strong style="color: #00ff41;">TLS (Transport Layer Security)</strong> is the bedrock of internet privacy. While TLS 1.2 was a workhorse, <strong style="color: #00ff41;">TLS 1.3</strong> represents a paradigm shift, optimizing for both extreme low latency and aggressive security hardening.</p>

      <h3 style="color: #ff0055;">1. The Core Objective: Establishing a Trusted Channel</h3>
      <p>The handshake is not just about encryption; it is about solving three fundamental problems in a single exchange:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="margin-bottom: 10px;">🛡️ <strong style="color: #00ff41;">Authentication:</strong> How do I know the server is who they claim to be? (Certificates & PKI)</li>
        <li style="margin-bottom: 10px;">🔑 <strong style="color: #00ff41;">Key Exchange:</strong> How do we agree on a secret without an eavesdropper learning it? (Diffie-Hellman)</li>
        <li style="margin-bottom: 10px;">🔒 <strong style="color: #00ff41;">Confidentiality:</strong> How do we ensure that even if the handshake is recorded, the data remains unreadable? (Forward Secrecy)</li>
      </ul>

      <h3 style="color: #ff0055;">2. The TLS 1.3 Handshake: A High-Speed Execution</h3>
      <p>Unlike its predecessors, TLS 1.3 reduces the handshake to a single Round Trip Time (1-RTT). Let's trace the packet flow:</p>

      <div style="background: #1a1a1a; border: 1px solid #333; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <div style="margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">
          <strong style="color: #00ff41;">[Step 1] Client Hello + Key Share</strong><br>
          <small>The client doesn't just send supported ciphers; it proactively sends its <code style="color: #ffaa00;">Key Share</code> (pre-calculated Diffie-Hellman parameters). This "guesswork" is what enables 1-RTT.</small>
        </div>
        <div style="margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">
          <strong style="color: #00ff41;">[Step 2] Server Hello + Certificate + Finished</strong><br>
          <small>The server selects the cipher, provides its <code style="color: #ffaa00;">Certificate</code>, and sends its own <code style="color: #ffaa00;">Key Share</code>. At this point, the shared secret is already computable by both sides.</small>
        </div>
        <div>
          <strong style="color: #00ff41;">[Step 3] Encrypted Application Data</strong><br>
          <small>Encryption begins immediately. The handshake itself is partially encrypted, shielding metadata from passive observers.</small>
        </div>
      </div>

      <h3 style="color: #ff0055;">3. The Death of Legacy: Why TLS 1.3 is a Security Necessity</h3>
      <p>The most significant contribution of TLS 1.3 is not just speed, but the aggressive removal of "cryptographic debt."</p>

      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <tr style="background: #222;">
          <th style="padding: 10px; border: 1px solid #333;">Removed Feature/Algorithm</th>
          <th style="padding: 10px; border: 1px solid #333;">Reason for Removal</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #333;"><strong>RSA Key Transport</strong></td>
          <td style="padding: 10px; border: 1px solid #333;">Lacks <em style="color: #ff0055;">Perfect Forward Secrecy (PFS)</em>. If the server's private key is stolen later, all past sessions can be decrypted.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #333;"><strong>Static Diffie-Hellman</strong></td>
          <td style="padding: 10px; border: 1px solid #333;">Vulnerable to various mathematical attacks and lacks modern key rotation.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #333;"><strong>Weak Ciphers (RC4, DES, CBC)</strong></td>
          <td style="padding: 10px; border: 1px solid #333;">Susceptible to attacks like <em style="color: #ff0055;">BEAST</em>, <em style="color: #ff0055;">LUCKY13</em>, and brute-force.</td>
        </tr>
      </table>

      <h3 style="color: #ff0055;">4. Engineering Perspective: Perfect Forward Secrecy (PFS)</h3>
      <p>If you are building secure systems, you must understand PFS. By using <strong>Ephemeral Diffie-Hellman (DHE/ECDHE)</strong>, TLS 1.3 ensures that every single session uses a unique, one-time-use key. Even if an attacker compromises the server's long-term identity key (the one in the certificate), they <strong>cannot</strong> go back in time and decrypt the traffic they captured months ago.</p>

      <div style="border: 1px dashed #00ff41; padding: 15px; margin-top: 20px;">
        <h4 stylmargin-top: 0; color: #00ff41;">🔍 Analyst's Note</h4>
        <p style="margin-bottom: 0;">When performing network forensics or MITM testing with tool like <strong style="color: #ffaa00;">Wireshark</strong>, look for the <code style="color: #ffaa00;">Client Hello</code>. In TLS 1.3, the transition from plaintext to encrypted traffic happens much faster than in 1.2, making the "visibility window" for attackers significantly smaller.</p>
      </div>
    `
  },
  {
    num: '04',
    tag: 'Networking',
    title: 'DNS: The Internet\'s Phone Book (And Its Security Flaws)',
    excerpt: 'Understanding DNS resolution, DNSSEC, DNS over HTTPS, and common DNS-based attacks like cache poisoning and typosquatting.',
    date: 'Feb 2025',
    readTime: '5 min',
    content: `
      <h3>How DNS Works</h3>
      <p>The Domain Name System (DNS) translates human-readable domain names (like google.com) into IP addresses. It’s a hierarchical, distributed database.</p>

      <h3>Security Vulnerabilities</h3>
      <p>Traditional DNS is unencrypted and vulnerable to:</p>
      <ul>
        <li><strong>Cache Poisoning:</strong> Injecting false data into a DNS resolver’s cache.</li>
        <li><strong>Man-in-the-Middle:</strong> Intercepting and altering DNS responses.</li>
        <li><strong>DDoS:</strong> Overloading DNS servers to take down websites.</li>
      </ul>

      <h3>Modern Solutions</h3>
      <p><strong>DNSSEC</strong> adds cryptographic signatures to DNS data. <strong>DoH (DNS over HTTPS)</strong> and <strong>DoT (DNS over TLS)</strong> encrypt DNS queries to prevent snooping and manipulation.</p>
    `
  },
  {
    num: '05',
    tag: 'Cybersecurity',
    title: 'OWASP Top 10 for Backend Developers: Real Code, Real Fixes',
    excerpt: 'Working through each OWASP Top 10 vulnerability with real TypeScript code examples showing vulnerable vs secure implementations.',
    date: 'Jan 2025',
    readTime: '2 min',
    content: `
      <h3>What is OWASP?</h3>
      <p>The Open Web Application Security Project (OWASP) maintains a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.</p>

      <h3>Example: Injection (A01)</h3>
      <p><strong>Vulnerable Code:</strong></p>
      <pre><code>const query = "SELECT * FROM users WHERE name = '" + userInput + "'";</code></pre>
      
      <p><strong>Secure Code (Parameterized Query):</strong></p>
      <pre><code>const query = "SELECT * FROM users WHERE name = ?";
db.execute(query, [userInput]);</code></pre>

      <h3>Example: Broken Access Control (A01)</h3>
      <p>Always verify that the authenticated user has permission to access the requested resource. Never rely on client-side checks.</p>
    `
  },
  {
    num: '06',
    tag: 'Go',
    title: 'Writing Network Tools in Go: A Port Scanner From Scratch',
    excerpt: 'Building a concurrent TCP port scanner in Go from first principles — goroutines, channels, and raw socket patterns explained.',
    date: 'Dec 2024',
    readTime: '1 min',
    content: `
      <h3>Why Go for Network Tools?</h3>
      <p>Go (Golang) is ideal for network programming due to its high performance, built-in concurrency model (goroutines), and standard library.</p>

      <h3>Building the Scanner</h3>
      <p>We’ll use the <code>net</code> package to attempt TCP connections to a range of ports. To make it fast, we’ll use goroutines to scan multiple ports concurrently.</p>

      <h4>Key Concepts</h4>
      <ul>
        <li><strong>Goroutines:</strong> Lightweight threads managed by the Go runtime.</li>
        <li><strong>Channels:</strong> For safe communication between goroutines.</li>
        <li><strong>WaitGroup:</strong> To wait for all goroutines to finish.</li>
      </ul>

      <pre><code>func scanPort(host string, port int, wg *sync.WaitGroup, results chan<- int) {
    defer wg.Done()
    conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", host, port), time.Second)
    if err == nil {
        conn.Close()
        results <- port
    }
}</code></pre>
    `
  },
];

const CONTACT_DATA = [
  { icon: '⚡', label: 'GitHub', value: 'https://github.com/ItsWanheda', href: 'https://github.com/ItsWanheda', copyValue: 'https://github.com/ItsWanheda' },
  { icon: '📧', label: 'Email', value: 'wanheda.work@gmail.com', href: 'mailto:wanheda.work@gmail.com', copyValue: 'wanheda.work@gmail.com' },
  { icon: '🎮', label: 'Discord', value: 'ItsWanheda', href: null, copyValue: 'ItsWanheda' },
];

/* ============================================================
   PRELOADER
============================================================ */
const preTexts = [
  'INITIALIZING SECURITY MODULES...',
  'LOADING PORTFOLIO...',
  'VERIFYING CREDENTIALS...',
  'AUTHENTICATION SUCCESSFUL.',
];
let preIdx = 0;
const preTextEl = document.getElementById('pre-text');
const preBar = document.getElementById('pre-bar');
const prePercent = document.getElementById('pre-percent');

function cyclePreText() {
  preTextEl.style.opacity = 0;
  setTimeout(() => {
    preIdx = (preIdx + 1) % preTexts.length;
    preTextEl.textContent = preTexts[preIdx];
    preTextEl.style.opacity = 1;
  }, 200);
}
const preInterval = setInterval(cyclePreText, 700);

setTimeout(() => { preBar.style.width = '100%'; }, 100);

let pct = 0;
const pctInterval = setInterval(() => {
  pct = Math.min(pct + Math.random() * 4 + 1, 100);
  prePercent.textContent = Math.floor(pct) + '%';
  if (pct >= 100) clearInterval(pctInterval);
}, 60);

setTimeout(() => {
  clearInterval(preInterval);
  preTextEl.textContent = 'AUTHENTICATION SUCCESSFUL.';
  setTimeout(() => {
    document.getElementById('preloader').classList.add('fade-out');
    document.body.classList.remove('loading');
    initAll();
  }, 600);
}, 3000);

/* ============================================================
   CURSOR
============================================================ */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let cx = 0, cy = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
});
setInterval(() => {
  rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12;
  cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
}, 16);

document.addEventListener('mouseover', e => {
  if (e.target.matches('a,button,.proj-card,.skill-card,.contact-card,.repo-card,.blog-card,.cert-card,.stat-card'))
    document.body.classList.add('cursor-hover');
});
document.addEventListener('mouseout', () => document.body.classList.remove('cursor-hover'));

/* ============================================================
   CANVAS BACKGROUND
============================================================ */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, nodes, mouse = { x: 0, y: 0 };

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createNodes() {
    nodes = [];
    const count = Math.min(Math.floor(w * h / 14000), 80);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // grid
    ctx.strokeStyle = 'rgba(255,0,60,0.03)';
    ctx.lineWidth = 0.5;
    const gs = 60;
    for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

    const t = Date.now() * 0.001;
    nodes.forEach(n => {
      n.x += n.vx + (mouse.x - w / 2) * 0.00002;
      n.y += n.vy + (mouse.y - h / 2) * 0.00002;
      if (n.x < 0) n.x = w; if (n.x > w) n.x = 0;
      if (n.y < 0) n.y = h; if (n.y > h) n.y = 0;
      n.pulse += 0.02;
    });

    // connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x, dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const alpha = (1 - dist / 160) * 0.25;
          ctx.strokeStyle = `rgba(255,0,60,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
        }
      }
    }

    // mouse connections
    nodes.forEach(n => {
      const dx = mouse.x - n.x, dy = mouse.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        const alpha = (1 - dist / 200) * 0.5;
        ctx.strokeStyle = `rgba(255,0,60,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    });

    // nodes
    nodes.forEach(n => {
      const pulse = Math.sin(n.pulse) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,0,60,${0.4 + pulse * 0.4})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); createNodes(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize(); createNodes(); draw();
}

/* ============================================================
   TYPING EFFECT
============================================================ */
const typedStrings = [
  'Building Secure Systems...',
  'Exploring Network Infrastructure...',
  'Developing Modern APIs...',
  'Analyzing Security Headers...',
  'Learning Every Day...',
];
let tIdx = 0, tChar = 0, tDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const str = typedStrings[tIdx];
  if (!tDeleting) {
    typedEl.textContent = str.slice(0, ++tChar);
    if (tChar === str.length) { tDeleting = true; setTimeout(typeLoop, 2000); return; }
  } else {
    typedEl.textContent = str.slice(0, --tChar);
    if (tChar === 0) { tDeleting = false; tIdx = (tIdx + 1) % typedStrings.length; }
  }
  setTimeout(typeLoop, tDeleting ? 40 : 70);
}

/* ============================================================
   NAV
============================================================ */
function initNav() {
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('nav-mobile');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
    });
  });

  // active link
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  function setActive() {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navAs.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ============================================================
   STAT COUNTER
============================================================ */
function initCounters() {
  const cards = document.querySelectorAll('.stat-card[data-target]') || [];
  document.querySelectorAll('[data-target]').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const target = parseInt(el.dataset.target);
        let n = 0; const inc = target / 60;
        const t = setInterval(() => {
          n = Math.min(n + inc, target);
          el.querySelector('.stat-number') ? el.querySelector('.stat-number').textContent = Math.floor(n) : el.textContent = Math.floor(n);
          if (n >= target) { el.textContent = target + ''; clearInterval(t); }
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el.closest('.stat-card') || el);
  });

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const target = parseInt(el.dataset.target);
        let n = 0; const inc = target / 60;
        const t = setInterval(() => {
          n = Math.min(n + inc, target);
          el.textContent = Math.floor(n);
          if (n >= target) { el.textContent = target; clearInterval(t); }
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ============================================================
   SKILLS
============================================================ */
function renderSkills(cat = 'all') {
  const grid = document.getElementById('skills-grid');
  const data = cat === 'all' ? SKILLS_DATA : SKILLS_DATA.filter(s => s.cat === cat);
  grid.innerHTML = data.map(s => `
    <div class="skill-card reveal" data-skill="${s.name}" onclick="openSkillModal('${s.name}')">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level"><div class="skill-level-fill" style="--level:${s.level}%"></div></div>
    </div>
  `).join('');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible', 'animated');
      }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.skill-card').forEach(c => obs.observe(c));
}

function initSkills() {
  renderSkills();
  document.getElementById('skill-cats').addEventListener('click', e => {
    if (!e.target.classList.contains('cat-btn')) return;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderSkills(e.target.dataset.cat);
  });
}

function openSkillModal(name) {
  const s = SKILLS_DATA.find(x => x.name === name);
  const d = SKILL_DETAILS[name];
  const body = `
    <div class="modal-section">
      <div class="modal-section-title">About</div>
      <div class="modal-section-content">${d ? d.desc : 'Core technology in my stack — actively used in projects and ongoing learning.'}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Proficiency</div>
      <div style="display:flex;align-items:center;gap:16px;margin-top:8px">
        <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden">
          <div style="height:100%;width:${s.level}%;background:var(--red);border-radius:2px;transition:width 1s var(--ease-out)"></div>
        </div>
        <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--red)">${s.level}%</div>
      </div>
    </div>
    ${d && d.exp ? `<div class="modal-section"><div class="modal-section-title">Experience</div><div class="modal-section-content">${d.exp}</div></div>` : ''}
    ${d && d.projects ? `<div class="modal-section"><div class="modal-section-title">Used In</div><div class="modal-tags">${d.projects.map(p => `<span class="tag">${p}</span>`).join('')}</div></div>` : ''}
    <div class="modal-section"><div class="modal-section-title">Category</div><span class="tag">${s.cat.toUpperCase()}</span></div>
  `;
  openModal(s.name, body, s.icon + ' Skill Details');
}

/* ============================================================
   PROJECTS
============================================================ */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS_DATA.map(p => `
    <div class="proj-card reveal" onclick="openProjectModal('${p.id}')">
      <div class="proj-img">
        <div class="proj-img-grid"></div>
        <div style="font-size:4rem;position:relative;z-index:1">${p.emoji}</div>
        <div class="proj-img-overlay"></div>
      </div>
      <div class="proj-body">
        <div class="proj-name">${p.name}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="proj-actions">
          <a href="${p.github}" target="_blank" class="btn btn-ghost" onclick="event.stopPropagation()">GitHub ↗</a>
          ${p.live ? `<a href="${p.live}" target="_blank" class="btn btn-ghost" onclick="event.stopPropagation()">Live ↗</a>` : ''}
          <button class="btn btn-ghost" onclick="event.stopPropagation();openProjectModal('${p.id}')">Details →</button>
        </div>
      </div>
    </div>
  `).join('');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.proj-card').forEach(c => obs.observe(c));
}

function openProjectModal(id) {
  const p = PROJECTS_DATA.find(x => x.id === id);
  const body = `
    <div class="modal-section">
      <div class="modal-section-title">Overview</div>
      <div class="modal-section-content">${p.desc}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Key Features</div>
      <ul class="modal-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Architecture</div>
      <div class="modal-section-content">${p.arch}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Technologies</div>
      <div class="modal-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <div class="modal-actions">
      <a href="${p.github}" target="_blank" class="btn btn-primary">View Repository →</a>
      ${p.live ? `<a href="${p.live}" target="_blank" class="btn btn-outline">Live Demo →</a>` : ''}
    </div>
  `;
  openModal(p.name, body, p.emoji + ' Project');
}

/* ============================================================
   GITHUB
============================================================ */
export function renderGithub() {
  const reposGrid = document.getElementById('repos-grid');

  // Map through your data and inject r.github into the onclick
  reposGrid.innerHTML = REPOS_DATA.map(r => `
    <div class="repo-card reveal" onclick="window.open('${r.github}', '_blank', 'noopener,noreferrer')">
      <div class="repo-name">📁 ${r.name}</div>
      <div class="repo-desc">${r.desc}</div>
      <div class="repo-meta">
        <!-- Note: 'GO , JS' isn't a single color, so we default to gray or pick the first one -->
        <div class="repo-lang">
          <div class="repo-lang-dot" style="background:${getLangColor(r.lang)}"></div>
          ${r.lang}
        </div>
        <div class="repo-stars">⭐ ${r.stars}</div>
        <div class="repo-stars">🍴 ${r.forks}</div>
      </div>
    </div>
  `).join('');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  reposGrid.querySelectorAll('.repo-card').forEach(c => obs.observe(c));
}

// Helper function to handle multi-language strings like 'GO , JS'
function getLangColor(lang) {
  if (!lang) return '#888';

  // If it contains a comma/space, pick the first language
  const primaryLang = lang.split(/[, ]+/)[0].trim();

  const colors = {
    'TypeScript': '#3178C6',
    'Go': '#00ADD8',
    'Python': '#3572A5',
    'JavaScript': '#f1e05a',
    'HTML': '#e34c26',
    'CSS': '#563d7c'
  };

  return colors[primaryLang] || '#888';
}

/* ============================================================
   TIMELINE
============================================================ */
function renderTimeline() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = TIMELINE_DATA.map((item, i) => `
    <div class="timeline-item reveal reveal-d${Math.min(i + 1, 5)}">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-card">
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  tl.querySelectorAll('.timeline-item').forEach(c => obs.observe(c));
}

/* ============================================================
   CERTIFICATIONS
============================================================ */
function renderCerts() {
  const grid = document.getElementById('certs-grid');
  grid.innerHTML = CERTS_DATA.map((c, i) => `
    <div class="cert-card reveal reveal-d${Math.min(i % 3 + 1, 5)}">
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-provider">${c.provider}</div>
      <div class="cert-date">${c.date}</div>
    </div>
  `).join('');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.cert-card').forEach(c => obs.observe(c));
}

/* ============================================================
   BLOG
============================================================ */
function renderBlog() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = BLOG_DATA.map((b, i) => `
    <div class="blog-card reveal reveal-d${Math.min(i % 3 + 1, 5)}">
      <div class="blog-header">
        <div class="blog-number">${b.num}</div>
        <div class="blog-tag"><span class="tag">${b.tag}</span></div>
        <div class="blog-title">${b.title}</div>
      </div>
      <div class="blog-body">
        <div class="blog-excerpt">${b.excerpt}</div>
        <div class="blog-meta">
          <span class="blog-date">${b.date} · ${b.readTime}</span>
          <span class="blog-read" data-index="${i}">Read more →</span>
        </div>
      </div>
    </div>
  `).join('');

  // Add event listeners to "Read more" links
  document.querySelectorAll('.blog-read').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const index = parseInt(link.getAttribute('data-index'));
      openBlogModal(index);
    });
  });

  // Also allow clicking the entire card to open the modal
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If the click was on the "Read more" link, let its handler take care of it
      if (e.target.closest('.blog-read')) return;

      const index = parseInt(card.querySelector('.blog-read').getAttribute('data-index'));
      openBlogModal(index);
    });
  });

  // Intersection Observer for animations
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.blog-card').forEach(c => obs.observe(c));
}

// Modal Functions
function openBlogModal(index) {
  const blog = BLOG_DATA[index];
  if (!blog) {
    console.error('Blog post not found at index:', index);
    return;
  }

  // Populate modal
  document.getElementById('modal-number').textContent = blog.num;
  document.getElementById('modal-tag').textContent = blog.tag;
  document.getElementById('modal-title').textContent = blog.title;
  document.getElementById('modal-body').innerHTML = blog.content; // Full content

  // Show modal
  const modal = document.getElementById('blog-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent body scrolling
}

function closeBlogModal() {
  const modal = document.getElementById('blog-modal');
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore body scrolling
}

// Initialize Modal Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Close modal when clicking close button
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeBlogModal);
  }

  // Close modal when clicking outside content
  const modal = document.getElementById('blog-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBlogModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBlogModal();
    }
  });
});
/* ============================================================
   CONTACT
============================================================ */
function renderContact() {
  const links = document.getElementById('contact-links');
  links.innerHTML = CONTACT_DATA.map(c => {
    const isLink = !!c.href;
    const infoWrapper = isLink
      ? `<a href="${c.href}" target="_blank" rel="noopener noreferrer" class="contact-link-info">`
      : `<div class="contact-static-info">`;
    const closeInfoWrapper = isLink ? `</a>` : `</div>`;

    return `
      <div class="contact-item">
        ${infoWrapper}
          <div class="contact-icon">${c.icon}</div>
          <div class="contact-info">
            <div class="contact-label">${c.label}</div>
            <div class="contact-value">${c.value}</div>
          </div>
        ${closeInfoWrapper}
        
        <button class="contact-copy" 
                data-copy="${c.copyValue}" 
                aria-label="Copy ${c.label}">
          COPY
        </button>
      </div>
    `;
  }).join('');

  // Attach event listeners directly to each copy button
  document.querySelectorAll('.contact-copy').forEach(button => {
    button.addEventListener('click', function (e) {
      // Prevent any parent link from opening
      e.preventDefault();
      e.stopPropagation();

      const valueToCopy = this.getAttribute('data-copy');
      if (!valueToCopy) return;

      // Copy to clipboard
      navigator.clipboard.writeText(valueToCopy).then(() => {
        const originalText = this.textContent;
        this.textContent = 'COPIED!';
        this.classList.add('copied');

        setTimeout(() => {
          this.textContent = originalText;
          this.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy:', err);
        this.textContent = 'ERROR';
        setTimeout(() => {
          this.textContent = 'COPY';
        }, 2000);
      });
    });
  });
}
/* ============================================================
   MODAL
============================================================ */
function openModal(title, bodyHTML, label = '') {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-label').textContent = label;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   INIT ALL
============================================================ */
function initAll() {
  initCanvas();
  typeLoop();
  initNav();
  initReveal();
  initSkills();
  renderProjects();
  renderGithub();
  renderTimeline();
  renderCerts();
  renderBlog();
  renderContact();
  initCounters();
}