/* ============================================================
   DATA
============================================================ */
const SKILLS_DATA = [
  { name: 'HTML5', icon: '🌐', cat: 'frontend', level: 85, desc: 'Semantic markup and modern web standards for accessible, structured content.' },
  { name: 'CSS3', icon: '🎨', cat: 'frontend', level: 80, desc: 'Responsive layouts, animations, and custom properties for dark, cyberpunk-styled UIs.' },
  { name: 'JavaScript', icon: '⚡', cat: 'frontend', level: 75, desc: 'DOM manipulation, event-driven interactivity, and vanilla scripting.' },
  { name: 'HTTP/S', icon: '🌐', cat: 'networking', level: 80, desc: 'Request/response cycles, headers, status codes, and secure transport.' },
  { name: 'TLS/SSL', icon: '🔏', cat: 'networking', level: 72, desc: 'Handshake mechanics, certificate validation, and cipher suite hardening.' },
  { name: 'API Security', icon: '🔒', cat: 'security', level: 75, desc: 'Rate limiting, input validation, and defense-in-depth for REST APIs.' },
  { name: 'JWT', icon: '🔑', cat: 'security', level: 80, desc: 'Stateless auth tokens, claim validation, and attack-vector hardening.' },
  { name: 'RBAC', icon: '🛡️', cat: 'security', level: 72, desc: 'Role-based access control patterns for enforcing authorization.' },
  { name: 'OAuth', icon: '🔐', cat: 'security', level: 65, desc: 'Delegated authorization flows, grant types, and PKCE.' },
  { name: 'Bash', icon: '💻', cat: 'languages', level: 60, desc: 'Shell scripting for automation, tooling, and system tasks.' },
  { name: 'C++', icon: '⚙️', cat: 'languages', level: 75, desc: 'Low-level systems programming and performance-critical logic.' },
  { name: 'Python', icon: '🐍', cat: 'languages', level: 85, desc: 'CLI tools, network scanners, and security scripting.' },
  { name: 'Go', icon: '🐹', cat: 'languages', level: 70, desc: 'High-concurrency backend services and network utilities.' },
  { name: 'TypeScript', icon: '🟦', cat: 'languages', level: 75, desc: 'Strongly typed JS for safer, more maintainable backend code.' },
  { name: 'React', icon: '⚛️', cat: 'frontend', level: 82, desc: 'Component-based UIs with hooks and shared state.' },
  { name: 'Next.js', icon: '▲', cat: 'frontend', level: 78, desc: 'React framework for routing, SSR, and production builds.' },
  { name: 'Tailwind CSS', icon: '🌊', cat: 'frontend', level: 85, desc: 'Utility-first styling for fast, consistent UI development.' },
  { name: 'Node.js', icon: '🟢', cat: 'backend', level: 75, desc: 'Server-side JavaScript runtime for APIs and tooling.' },
  { name: 'Express.js', icon: '🚀', cat: 'backend', level: 72, desc: 'Minimal routing and middleware framework for Node APIs.' },
  { name: 'Git', icon: '🌲', cat: 'tools', level: 88, desc: 'Version control, branching strategies, and collaborative workflows.' },
  { name: 'GitHub', icon: '🐙', cat: 'tools', level: 85, desc: 'Repository hosting, issue tracking, and CI/CD workflows.' },
  { name: 'Void Linux', icon: '🐧', cat: 'tools', level: 70, desc: 'Lightweight, independent Linux distro for daily driving.' },
  { name: 'TCP/IP', icon: '📡', cat: 'networking', level: 70, desc: 'Packet-level networking, sockets, and protocol fundamentals.' },
  { name: 'BlackArch', icon: '🐉', cat: 'tools', level: 50, desc: 'Arch-based penetration testing distro with security tooling.' },
  { name: 'Kali Linux', icon: '🐉', cat: 'tools', level: 80, desc: 'Security-focused distro for testing and network analysis.' },
  { name: 'VS Code', icon: '💙', cat: 'tools', level: 90, desc: 'Primary editor — extensions, debugging, and workflow tuning.' },
  { name: 'Docker', icon: '🐳', cat: 'tools', level: 74, desc: 'Containerization for consistent, portable dev environments.' },
  { name: 'Windows', icon: '🖥', cat: 'tools', level: 95, desc: 'Primary desktop OS for development and daily workflows.' },
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

export const BLOG_DATA = [
  // =================================================================
  // BLOG 01 — JWT SECURITY
  // =================================================================
  {
    num: '01',
    slug: 'jwt-security-deep-dive',
    tag: 'Authentication & Identity',
    title: 'JWT Security Deep Dive: Exploiting Misconfigurations and Implementation Flaws',
    excerpt: 'Beyond the basics: A forensic analysis of JWT architecture, cryptographic pitfalls, advanced attack vectors like Algorithm Confusion and Key Injection, with battle-tested defensive patterns.',
    date: 'Jun 2026',
    readTime: '14 min',
    content: `
      <p>JSON Web Tokens (JWT) have become the <strong>de-facto standard</strong> for stateless authentication in modern web architectures. However, the ease of implementation often masks profound security vulnerabilities that can lead to complete account takeover (ATO). According to industry research, <strong style="color: #ff0055;">~70% of JWT implementations</strong> contain at least one critical flaw exploitable by attackers.</p>
      
      <h3 style="color: #ff0055;">1. The Anatomy: More Than Just Three Parts</h3>
      <p>A JWT consists of a <strong>Header</strong>, <strong>Payload</strong>, and <strong>Signature</strong>, encoded in <code>Base64Url</code>. But from a security perspective, the distinction between <em>encoding</em> and <em>encryption</em> is where most vulnerabilities reside.</p>
      
      <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
        <code><strong style="color: #00ff41;">HEADER</strong>.<strong style="color: #ffaa00;">PAYLOAD</strong>.<strong style="color: #ff0055;">SIGNATURE</strong></code><br>
        <small style="color: #888;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</small>
      </div>

      <h4 style="color: #00ff41;">Standard Claims Reference</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 8px; border: 1px solid #333;">Claim</th>
            <th style="padding: 8px; border: 1px solid #333;">Full Name</th>
            <th style="padding: 8px; border: 1px solid #333;">Purpose</th>
            <th style="padding: 8px; border: 1px solid #333;">Validation</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>iss</code></td><td style="padding: 8px; border: 1px solid #333;">Issuer</td><td style="padding: 8px; border: 1px solid #333;">Token creator</td><td style="padding: 8px; border: 1px solid #333;">Must match expected issuer</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>sub</code></td><td style="padding: 8px; border: 1px solid #333;">Subject</td><td style="padding: 8px; border: 1px solid #333;">User identifier</td><td style="padding: 8px; border: 1px solid #333;">Look up user in DB</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>aud</code></td><td style="padding: 8px; border: 1px solid #333;">Audience</td><td style="padding: 8px; border: 1px solid #333;">Intended recipient</td><td style="padding: 8px; border: 1px solid #333;">Must match your service</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>exp</code></td><td style="padding: 8px; border: 1px solid #333;">Expiration</td><td style="padding: 8px; border: 1px solid #333;">When token expires</td><td style="padding: 8px; border: 1px solid #333; color: #ff0055;">MANDATORY</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>iat</code></td><td style="padding: 8px; border: 1px solid #333;">Issued At</td><td style="padding: 8px; border: 1px solid #333;">Creation timestamp</td><td style="padding: 8px; border: 1px solid #333;">Recommended</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>nbf</code></td><td style="padding: 8px; border: 1px solid #333;">Not Before</td><td style="padding: 8px; border: 1px solid #333;">Token valid from</td><td style="padding: 8px; border: 1px solid #333;">Recommended</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>jti</code></td><td style="padding: 8px; border: 1px solid #333;">JWT ID</td><td style="padding: 8px; border: 1px solid #333;">Unique token identifier</td><td style="padding: 8px; border: 1px solid #333;">For revocation lists</td></tr>
        </tbody>
      </table>

      <h3 style="color: #ff0055;">2. Critical Attack Vectors</h3>
      
      <h4 style="color: #00ff41;">A. The "none" Algorithm Attack</h4>
      <p>The most infamous flaw occurs when a backend accepts the <code style="color: #ff0055;">"alg": "none"</code> header. An attacker can modify the payload and strip the signature entirely. If the server is poorly configured, it may treat the token as valid without verification.</p>
      
      <p><strong style="color: #ff0055;">Exploit Example:</strong></p>
      <pre><code># Original token
{"alg":"HS256","typ":"JWT"}.{"sub":"user1","role":"user"}.&lt;signature&gt;

# Attacker crafts malicious token
Header:  {"alg":"none","typ":"JWT"}
Payload: {"sub":"admin","role":"superuser"}
Sig:     &lt;empty&gt;

# Result: eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJzdXBlcnVzZXIifQ.</code></pre>

      <h4 style="color: #00ff41;">B. RS256 → HS256 Algorithm Confusion</h4>
      <p>This is a sophisticated attack where an attacker switches the algorithm from asymmetric <strong>RS256</strong> (Public/Private key) to symmetric <strong>HS256</strong> (Shared secret). By using the server's <em>public key</em> as the <em>HS256 secret</em>, the attacker can forge valid signatures that the server will trust.</p>
      
      <p><strong style="color: #ff0055;">Exploit Example:</strong></p>
      <pre><code>// 1. Attacker downloads server's public key
$ curl https://target.com/.well-known/jwks.json | jq -r '.keys.x5c'

// 2. Uses it as HS256 secret to forge admin token
const jwt = require('jsonwebtoken');
const pubKey = require('fs').readFileSync('server-pub.pem');
const malicious = jwt.sign(
  { sub: 'victim', role: 'admin' }, 
  pubKey, 
  { algorithm: 'HS256' }  // ← Algorithm Confusion!
);

// 3. Server trusts RS256 normally but accepts this HS256 token</code></pre>

      <h4 style="color: #00ff41;">C. Weak Secret Brute-Forcing</h4>
      <p>Using HS256 with a weak, predictable secret (e.g., <code>"secret123"</code>) makes the token vulnerable to offline brute-force attacks using tools like <strong>Hashcat</strong> or <strong>John the Ripper</strong>.</p>
      
      <pre><code># Hashcat command for JWT HS256 cracking
$ hashcat -m 16500 jwt.txt rockyou.txt
# Found: 'super_secret_2023' — cracked in 2 minutes</code></pre>

      <h4 style="color: #00ff41;">D. JWK/JKU Header Injection</h4>
      <p>Some libraries (older versions of <code>jsonwebtoken</code>, <code>jose4j</code>) trust a <code>jku</code> (JWK Set URL) header that points to attacker's server. The library fetches and uses attacker's keys to verify the signature — perfect forgery.</p>

      <h3 style="color: #ff0055;">3. Vulnerable vs. Secure Implementation</h3>
      
      <p><strong style="color: #ff0055;">❌ Vulnerable (Node.js):</strong></p>
      <pre><code>const jwt = require('jsonwebtoken');

// ❌ Algorithm read from header — DANGEROUS
function verifyToken(token) {
  return jwt.verify(token, SECRET);  // accepts any algorithm
}

// ❌ No expiration check
app.get('/api/admin', (req, res) => {
  const decoded = jwt.decode(req.headers.authorization);  // no verification at all!
  if (decoded.role === 'admin') {
    return res.json(adminData);
  }
});</code></pre>

      <p><strong style="color: #00ff41;">✅ Secure (Node.js):</strong></p>
      <pre><code>const jwt = require('jsonwebtoken');

// ✅ Explicit algorithm whitelist
function verifyToken(token) {
  return jwt.verify(token, SECRET, {
    algorithms: ['RS256'],            // strict allowlist
    issuer: 'https://auth.yoursite.com',
    audience: 'api.yoursite.com',
    maxAge: '15m',                    // enforce expiration
    clockTolerance: 5                 // small skew tolerance
  });
}

// ✅ Full middleware with revocation check
app.get('/api/admin', authenticate, requireRole('admin'), async (req, res) => {
  // Check token hasn't been revoked
  const isRevoked = await redis.sismember('revoked_tokens', req.user.jti);
  if (isRevoked) return res.status(401).json({ error: 'Token revoked' });
  
  return res.json(adminData);
});</code></pre>

      <h3 style="color: #ff0055;">4. Hardening the Implementation (The Defensive Blueprint)</h3>
      <p>To build a resilient authentication layer, follow these non-negotiable principles:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="text-align: left; padding: 8px; border: 1px solid #333;">Control</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #333;">Implementation Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid #333;"><strong>Algorithm Strictness</strong></td>
            <td style="padding: 8px; border: 1px solid #333;">Explicitly whitelist allowed algorithms (e.g., only <code>RS256</code>). Reject any token using <code>"none"</code>.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #333;"><strong>Key Management</strong></td>
            <td style="padding: 8px; border: 1px solid #333;">Use high-entropy keys (≥256 bits) stored in a Hardware Security Module (HSM) or a secure Secret Manager (AWS KMS, Vault).</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #333;"><strong>Claim Validation</strong></td>
            <td style="padding: 8px; border: 1px solid #333;">Mandatory validation of <code style="color: #00ff41;">exp</code>, <code style="color: #00ff41;">iat</code>, <code style="color: #00ff41;">nbf</code>, <code style="color: #00ff41;">iss</code>, <code style="color: #00ff41;">aud</code>.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #333;"><strong>Storage Strategy</strong></td>
            <td style="padding: 8px; border: 1px solid #333;">Avoid <code style="color: #ff0055;">localStorage</code> (XSS). Prefer <code style="color: #00ff41;">HttpOnly; Secure; SameSite=Strict</code> cookies.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #333;"><strong>Short Lifetimes</strong></td>
            <td style="padding: 8px; border: 1px solid #333;">Access tokens: 5–15 minutes. Use refresh token rotation for longer sessions.</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #333;"><strong>Revocation</strong></td>
            <td style="padding: 8px; border: 1px solid #333;">Maintain a <code>jti</code> blocklist in Redis for emergency invalidation.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="color: #ff0055;">5. Penetration Testing Toolkit</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 8px; border: 1px solid #333;">Tool</th>
            <th style="padding: 8px; border: 1px solid #333;">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>jwt_tool</strong></td><td style="padding: 8px; border: 1px solid #333;">Swiss army knife for JWT attacks (algorithm confusion, key injection)</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Hashcat (-m 16500)</strong></td><td style="padding: 8px; border: 1px solid #333;">Brute-force HS256 secrets offline</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Burp Suite JWT Editor</strong></td><td style="padding: 8px; border: 1px solid #333;">Manual token crafting during web app pentests</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>jwt.io</strong></td><td style="padding: 8px; border: 1px solid #333;">Quick decode/verify for reconnaissance</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>c-jwt-cracker</strong></td><td style="padding: 8px; border: 1px solid #333;">Lightweight HS256 brute-forcer</td></tr>
        </tbody>
      </table>

      <div style="border: 1px dashed #00ff41; padding: 15px; margin-top: 20px;">
        <h4 style="margin-top: 0; color: #00ff41;">💡 Pro Tip: The "Kid" Header Injection</h4>
        <p style="margin-bottom: 0;">A lesser-known attack: if your JWT library reads a <code>kid</code> (Key ID) header and uses it in a SQL/file path lookup without sanitization, attackers can perform <strong>SQL injection</strong> or <strong>path traversal</strong> through the kid header. Always validate and allowlist kid values.</p>
      </div>

      <h3 style="color: #ff0055;">Conclusion</h3>
      <p>Authentication is not a "set and forget" feature. As protocols evolve, so do the methods to circumvent them. A true security engineer doesn't just implement JWT; they implement it with an <strong>adversarial mindset</strong>, constantly testing their own systems for the very flaws outlined above.</p>
    `
  },

  // =================================================================
  // BLOG 02 — REST API HARDENING
  // =================================================================
  {
    num: '02',
    slug: 'rest-api-hardening',
    tag: 'API Security & Hardening',
    title: 'Hardening RESTful Architectures: Defense-in-Depth Against Automated Exploits',
    excerpt: 'A technical deep-dive into neutralizing API-centric attack vectors through strategic header implementation, sophisticated rate-limiting algorithms, and strict schema enforcement.',
    date: 'May 2026',
    readTime: '13 min',
    content: `
      <p>In a microservices-driven ecosystem, the API is the <strong>primary attack surface</strong>. According to OWASP API Security Top 10, broken APIs are responsible for the majority of modern data breaches. Securing an API is not merely about authentication; it is about building a resilient perimeter that can withstand automated reconnaissance, brute-force attempts, and injection-based payloads.</p>

      <h3 style="color: #ff0055;">1. The First Line of Defense: HTTP Security Headers</h3>
      <p>Security headers are the "silent sentinels" of the web. They instruct the browser/client on how to behave, effectively reducing the surface area for client-side attacks.</p>
      
      <h4 style="color: #00ff41;">Essential Security Headers Reference</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0;">
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">Strict-Transport-Security (HSTS)</strong><br>
          <small>Forces HTTPS, preventing SSL Stripping attacks.</small><br>
          <code style="color: #ffaa00; font-size: 0.85em;">max-age=31536000; includeSubDomains; preload</code>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">Content-Security-Policy (CSP)</strong><br>
          <small>Mitigates XSS by restricting resource origins.</small><br>
          <code style="color: #ffaa00; font-size: 0.85em;">default-src 'self'; script-src 'self'</code>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">X-Content-Type-Options</strong><br>
          <small>Prevents MIME-sniffing vulnerabilities.</small><br>
          <code style="color: #ffaa00; font-size: 0.85em;">nosniff</code>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">X-Frame-Options</strong><br>
          <small>Defends against Clickjacking attempts.</small><br>
          <code style="color: #ffaa00; font-size: 0.85em;">DENY</code>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">Referrer-Policy</strong><br>
          <small>Controls referrer information leakage.</small><br>
          <code style="color: #ffaa00; font-size: 0.85em;">strict-origin-when-cross-origin</code>
        </div>
        <div style="background: #1a1a1a; padding: 10px; border: 1px solid #333;">
          <strong style="color: #00ff41;">Permissions-Policy</strong><br>
          <small>Disables unused browser features.</small><br>
          <code style="color: #ffaa00; font-size: 0.85em;">geolocation=(), camera=()</code>
        </div>
      </div>

      <p><strong style="color: #00ff41;">Implementation (Express.js with Helmet):</strong></p>
      <pre><code>import express from 'express';
import helmet from 'helmet';

const app = express();

// ✅ Single line — applies all best-practice headers
app.use(helmet());

// ✅ Custom CSP for fine-grained control
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'nonce-{NONCE}'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.yoursite.com"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: []
  }
}));

// ✅ Disable X-Powered-By (don't advertise your stack)
app.disable('x-powered-by');</code></pre>

      <h3 style="color: #ff0055;">2. Mitigating DoS & Brute-Force: Rate Limiting Algorithms</h3>
      <p>Simple rate limiting is easily bypassed by distributed botnets. To defend against sophisticated automated tools, you must choose the right algorithm for your traffic pattern.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 10px; border: 1px solid #333;">Algorithm</th>
            <th style="padding: 10px; border: 1px solid #333;">Mechanism</th>
            <th style="padding: 10px; border: 1px solid #333;">Use Case</th>
            <th style="padding: 10px; border: 1px solid #333;">Security Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Fixed Window</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Resets at specific time intervals (e.g., 100 req/min).</td>
            <td style="padding: 10px; border: 1px solid #333;">Simple internal APIs</td>
            <td style="padding: 10px; border: 1px solid #333; color: #ff0055;">Low — burstable at edges</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Sliding Window</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Tracks requests across a moving time frame.</td>
            <td style="padding: 10px; border: 1px solid #333;">Public APIs</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">High — edge-burst resistant</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Token Bucket</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Tokens added at fixed rate; consumed per request.</td>
            <td style="padding: 10px; border: 1px solid #333;">APIs with bursty traffic</td>
            <td style="padding: 10px; border: 1px solid #333; color: #ffaa00;">Medium</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Leaky Bucket</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Packets processed at constant rate (smooths traffic).</td>
            <td style="padding: 10px; border: 1px solid #333;">Rate-limiting outbound calls</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">High</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>GCRA (Generic Cell Rate)</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Theoretical arrival time tracking.</td>
            <td style="padding: 10px; border: 1px solid #333;">High-precision systems</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">Highest</td>
          </tr>
        </tbody>
      </table>

      <p><strong style="color: #00ff41;">Production-Grade Rate Limiter (Redis-backed sliding window):</strong></p>
      <pre><code>import Redis from 'ioredis';
import { RateLimiterRedis, RateLimiterMemory } from 'rate-limiter-flexible';

const redis = new Redis(process.env.REDIS_URL);

// Per-IP rate limiter: 100 req / 15 min sliding window
const ipLimiter = new RateLimiterRedis({
  storeClient: redis,
  points: 100,        // requests
  duration: 15 * 60,  // 15 minutes
  blockDuration: 60 * 60,  // block for 1 hour if exceeded
  keyPrefix: 'rl_ip'
});

// Stricter limiter for auth endpoints: 5 attempts / 15 min
const authLimiter = new RateLimiterRedis({
  storeClient: redis,
  points: 5,
  duration: 15 * 60,
  blockDuration: 24 * 60 * 60,  // block for 24 hours
  keyPrefix: 'rl_auth'
});

// ✅ Apply different limits per route risk profile
app.use('/api/*', async (req, res, next) => {
  try {
    await ipLimiter.consume(req.ip);
    next();
  } catch (rejRes) {
    res.status(429).json({
      error: 'Too many requests',
      retryAfter: Math.ceil(rejRes.msBeforeNext / 1000)
    });
  }
});

app.use('/api/auth/*', async (req, res, next) => {
  try {
    await authLimiter.consume(req.ip);
    next();
  } catch (rejRes) {
    // Log potential brute-force attempt
    logger.warn('Auth rate limit exceeded', { ip: req.ip, path: req.path });
    res.status(429).json({ error: 'Too many login attempts' });
  }
});</code></pre>

      <h3 style="color: #ff0055;">3. Input Validation: The Zero-Trust Paradigm</h3>
      <p>In a secure API, <strong>all</strong> input is considered malicious until proven otherwise. Relying on client-side validation is a critical failure.</p>
      
      <p>Effective validation requires a two-pronged approach:</p>
      <ol>
        <li><strong>Schema Enforcement:</strong> Use strict typing and structure validation. If the payload doesn't match the exact schema, the request must be rejected <em>before</em> it reaches the business logic.</li>
        <li><strong>Sanitization & Parameterization:</strong> To prevent SQLi (SQL Injection), never concatenate strings to build queries. Always use <strong>Parameterized Queries</strong> or ORMs. For XSS prevention, sanitize all string inputs.</li>
      </ol>

      <p><strong style="color: #00ff41;">Schema Validation with Zod (TypeScript):</strong></p>
      <pre><code>import { z } from 'zod';

// ✅ Strict schema definition
const UserRegistrationSchema = z.object({
  email: z.string().email().max(254).toLowerCase().trim(),
  password: z.string()
    .min(12, 'Password must be at least 12 chars')
    .regex(/[A-Z]/, 'Must contain uppercase')
    .regex(/[a-z]/, 'Must contain lowercase')
    .regex(/[0-9]/, 'Must contain digit')
    .regex(/[^A-Za-z0-9]/, 'Must contain special char'),
  username: z.string().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/),
  age: z.number().int().min(13).max(120).optional(),
  terms: z.literal(true, { errorMap: () => ({ message: 'Must accept terms' }) })
});

// ✅ Middleware
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.flatten()
      });
    }
    req.validated = result.data;
    next();
  };
}

app.post('/api/register', validate(UserRegistrationSchema), async (req, res) => {
  const user = await db.user.create({ data: req.validated });
  res.status(201).json({ id: user.id });
});</code></pre>

      <p><strong style="color: #ff0055;">❌ Vulnerable SQL:</strong></p>
      <pre><code>// NEVER DO THIS
const query = \`SELECT * FROM users WHERE email = '\${req.body.email}'\`;
db.query(query);</code></pre>

      <p><strong style="color: #00ff41;">✅ Safe SQL (Parameterized):</strong></p>
      <pre><code>const query = "SELECT * FROM users WHERE email = $1";
db.query(query, [req.body.email]);</code></pre>

      <h3 style="color: #ff0055;">4. Defense-in-Depth: API Security Checklist</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 8px; border: 1px solid #333;">Layer</th>
            <th style="padding: 8px; border: 1px solid #333;">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Transport</strong></td><td style="padding: 8px; border: 1px solid #333;">TLS 1.3, HSTS, certificate pinning (mobile)</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Identity</strong></td><td style="padding: 8px; border: 1px solid #333;">OAuth 2.1 / OIDC, short-lived JWTs, MFA for sensitive ops</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Authorization</strong></td><td style="padding: 8px; border: 1px solid #333;">RBAC/ABAC enforced server-side on every request</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Validation</strong></td><td style="padding: 8px; border: 1px solid #333;">Schema validation (Zod, Pydantic), input length limits</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Rate Limiting</strong></td><td style="padding: 8px; border: 1px solid #333;">Per-IP, per-user, per-endpoint (Redis-backed)</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Headers</strong></td><td style="padding: 8px; border: 1px solid #333;">Helmet.js or equivalent, strict CSP</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>CORS</strong></td><td style="padding: 8px; border: 1px solid #333;">Strict allowlist, never <code>*</code> with credentials</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Error Handling</strong></td><td style="padding: 8px; border: 1px solid #333;">Generic responses to clients, verbose logs internally</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Logging</strong></td><td style="padding: 8px; border: 1px solid #333;">Structured logs, PII redaction, immutable audit trail</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><strong>Monitoring</strong></td><td style="padding: 8px; border: 1px solid #333;">Anomaly detection, alerting on 4xx/5xx spikes</td></tr>
        </tbody>
      </table>

      <div style="border: 1px dashed #ff0055; padding: 15px; margin-top: 20px;">
        <h4 style="margin-top: 0; color: #ff0055;">🚨 Pro-Tip: The "Fail-Fast" Principle</h4>
        <p style="margin-bottom: 0;">Implement your security layers as early as possible in the request lifecycle (Middleware). The sooner you reject a malformed or malicious request, the fewer resources your application wastes processing it.</p>
      </div>
    `
  },

  // =================================================================
  // BLOG 03 — TLS 1.3
  // =================================================================
  {
    num: '03',
    slug: 'tls-1-3',
    tag: 'Protocol Analysis & Networking',
    title: 'TLS 1.3 Deep Dive: The Cryptographic Handshake that Powers the Secure Web',
    excerpt: 'Deconstructing the mechanics of TLS 1.3: From Diffie-Hellman key exchanges to the elimination of legacy vulnerabilities and the transition to 1-RTT efficiency.',
    date: 'Apr 2026',
    readTime: '11 min',
    content: `
      <p>In the era of pervasive surveillance and Man-in-the-Middle (MitM) attacks, <strong style="color: #00ff41;">TLS (Transport Layer Security)</strong> is the bedrock of internet privacy. While TLS 1.2 was a workhorse, <strong style="color: #00ff41;">TLS 1.3</strong> (RFC 8446, finalized in 2018) represents a paradigm shift — optimizing for both extreme low latency and aggressive security hardening.</p>

      <h3 style="color: #ff0055;">1. The Core Objective: Establishing a Trusted Channel</h3>
      <p>The handshake is not just about encryption; it is about solving three fundamental problems in a single exchange:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="margin-bottom: 10px;">🛡️ <strong style="color: #00ff41;">Authentication:</strong> How do I know the server is who they claim to be? (Certificates & PKI)</li>
        <li style="margin-bottom: 10px;">🔑 <strong style="color: #00ff41;">Key Exchange:</strong> How do we agree on a secret without an eavesdropper learning it? (Diffie-Hellman)</li>
        <li style="margin-bottom: 10px;">🔒 <strong style="color: #00ff41;">Confidentiality:</strong> How do we ensure that even if the handshake is recorded, the data remains unreadable? (Forward Secrecy)</li>
      </ul>

      <h4 style="color: #00ff41;">TLS 1.2 vs TLS 1.3: A Side-by-Side Comparison</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 10px; border: 1px solid #333;">Property</th>
            <th style="padding: 10px; border: 1px solid #333;">TLS 1.2</th>
            <th style="padding: 10px; border: 1px solid #333;">TLS 1.3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Round Trips</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">2-RTT</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">1-RTT (0-RTT with resume)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Key Exchange</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">RSA, DHE, ECDHE</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">Only (EC)DHE — no RSA key transport</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Cipher Suites</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">~37 supported</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">5 suites (all AEAD)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Handshake Encryption</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Plaintext (after ServerHello)</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">Encrypted extensions + certificate</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Forward Secrecy</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Optional</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">Mandatory</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Weak Algorithms</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">RC4, 3DES, CBC modes, MD5, SHA-1</td>
            <td style="padding: 10px; border: 1px solid #333; color: #00ff41;">All removed</td>
          </tr>
        </tbody>
      </table>

      <h3 style="color: #ff0055;">2. The TLS 1.3 Handshake: A High-Speed Execution</h3>
      <p>Unlike its predecessors, TLS 1.3 reduces the handshake to a single Round Trip Time (1-RTT). Let's trace the packet flow:</p>

      <div style="background: #1a1a1a; border: 1px solid #333; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <div style="margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">
          <strong style="color: #00ff41;">[Step 1] ClientHello + Key Share</strong><br>
          <small>The client doesn't just send supported ciphers; it proactively sends its <code style="color: #ffaa00;">Key Share</code> (pre-calculated Diffie-Hellman parameters). This "guesswork" — picking the most likely cipher suite the server will choose — is what enables 1-RTT.</small>
        </div>
        <div style="margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">
          <strong style="color: #00ff41;">[Step 2] ServerHello + Encrypted Extensions + Certificate + Finished</strong><br>
          <small>The server selects the cipher, provides its <code style="color: #ffaa00;">Certificate</code> (encrypted), and sends its own <code style="color: #ffaa00;">Key Share</code>. At this point, the shared secret is already computable by both sides. <strong style="color: #00ff41;">The certificate is encrypted</strong> — hiding server identity from passive observers.</small>
        </div>
        <div>
          <strong style="color: #00ff41;">[Step 3] Encrypted Application Data</strong><br>
          <small>Encryption begins immediately. The client verifies the server's Finished message and starts transmitting data without waiting for an explicit ACK.</small>
        </div>
      </div>

      <h4 style="color: #00ff41;">0-RTT Mode (Resumption):</h4>
      <p>For repeat connections, TLS 1.3 offers <strong>0-RTT</strong>: the client sends encrypted application data in the very first flight, using a pre-shared key (PSK) from a previous session. This is fast but has a <strong style="color: #ff0055;">replay attack risk</strong> — non-idempotent requests (like POST /transfer) should never use 0-RTT.</p>

      <h3 style="color: #ff0055;">3. The Death of Legacy: Why TLS 1.3 is a Security Necessity</h3>
      <p>The most significant contribution of TLS 1.3 is not just speed, but the aggressive removal of "cryptographic debt."</p>

      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 10px; border: 1px solid #333;">Removed Feature/Algorithm</th>
            <th style="padding: 10px; border: 1px solid #333;">Reason for Removal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>RSA Key Transport</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Lacks <em style="color: #ff0055;">Perfect Forward Secrecy (PFS)</em>. If the server's private key is stolen later, all past sessions can be decrypted.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Static Diffie-Hellman</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Vulnerable to various mathematical attacks and lacks modern key rotation.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>CBC Mode Ciphers</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Susceptible to <em style="color: #ff0055;">BEAST</em> and <em style="color: #ff0055;">Lucky13</em> padding oracle attacks.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>RC4, DES, 3DES</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Broken or weak ciphers, vulnerable to brute force and statistical attacks.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>MD5, SHA-1 in Signatures</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">Collision attacks demonstrated (e.g., SHAttered, 2017).</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #333;"><strong>Compression</strong></td>
            <td style="padding: 10px; border: 1px solid #333;">CRIME/BREACH attacks leverage compression side-channels.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="color: #ff0055;">4. Engineering Perspective: Perfect Forward Secrecy (PFS)</h3>
      <p>If you are building secure systems, you must understand PFS. By using <strong>Ephemeral Diffie-Hellman (DHE/ECDHE)</strong>, TLS 1.3 ensures that every single session uses a unique, one-time-use key. Even if an attacker compromises the server's long-term identity key (the one in the certificate), they <strong>cannot</strong> go back in time and decrypt the traffic they captured months ago.</p>

      <h4 style="color: #00ff41;">Supported Cipher Suites (TLS 1.3)</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
        <thead>
          <tr style="background: #222; color: #00ff41;">
            <th style="padding: 8px; border: 1px solid #333;">Cipher Suite</th>
            <th style="padding: 8px; border: 1px solid #333;">Key Exchange</th>
            <th style="padding: 8px; border: 1px solid #333;">Cipher</th>
            <th style="padding: 8px; border: 1px solid #333;">Hash</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>TLS_AES_256_GCM_SHA384</code></td><td style="padding: 8px; border: 1px solid #333;">(EC)DHE</td><td style="padding: 8px; border: 1px solid #333;">AES-256-GCM</td><td style="padding: 8px; border: 1px solid #333;">SHA-384</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>TLS_CHACHA20_POLY1305_SHA256</code></td><td style="padding: 8px; border: 1px solid #333;">(EC)DHE</td><td style="padding: 8px; border: 1px solid #333;">ChaCha20-Poly1305</td><td style="padding: 8px; border: 1px solid #333;">SHA-256</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>TLS_AES_128_GCM_SHA256</code></td><td style="padding: 8px; border: 1px solid #333;">(EC)DHE</td><td style="padding: 8px; border: 1px solid #333;">AES-128-GCM</td><td style="padding: 8px; border: 1px solid #333;">SHA-256</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #333;"><code>TLS_AES_128_CCM_SHA256</code></td><td style="padding: 8px; border: 1px solid #333;">(EC)DHE</td><td style="padding: 8px; border: 1px solid #333;">AES-128-CCM</td><td style="padding: 8px; border: 1px solid #333;">SHA-256</td></tr>
        </tbody>
      </table>

      <h4 style="color: #00ff41;">Hardened TLS Configuration (Nginx Example):</h4>
      <pre><code>ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305';

# ✅ TLS 1.3 specific (only 5 valid suites)
ssl_conf_command Ciphersuites TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256;

ssl_ecdh_curve X25519:secp384r1;  # Modern curves only
ssl_session_timeout 1d;
ssl_session_cache shared:SSL:50m;
ssl_session_tickets off;

# ✅ OCSP Stapling — checks cert revocation without leaking to CA
ssl_stapling on;
ssl_stapling_verify on;

# ✅ Security headers
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;</code></pre>

      <div style="border: 1px dashed #00ff41; padding: 15px; margin-top: 20px;">
        <h4 style="margin-top: 0; color: #00ff41;">🔍 Analyst's Note</h4>
        <p style="margin-bottom: 0;">When performing network forensics or MITM testing with tools like <strong style="color: #ffaa00;">Wireshark</strong>, look for the <code style="color: #ffaa00;">ClientHello</code>. In TLS 1.3, the transition from plaintext to encrypted traffic happens much faster than in 1.2 — making the "visibility window" for attackers significantly smaller. Also note that TLS 1.3 connections in Wireshark often appear as <code>TLS 1.3</code> rather than the actual cipher suite name, because the ServerHello is encrypted.</p>
      </div>
    `
  },

  // =================================================================
  // BLOG 04 — DNS
  // =================================================================
  {
    num: '04',
    slug: 'dns-deep-dive',
    tag: 'Networking',
    title: 'DNS: The Internet\'s Phone Book (And Its Security Flaws)',
    excerpt: 'A deep dive into DNS resolution, DNSSEC, DNS over HTTPS/TLS, and common DNS-based attacks like cache poisoning and typosquatting — with mitigation strategies.',
    date: 'Mar 2026',
    readTime: '9 min',
    content: `
      <h3>What is DNS?</h3>
      <p>The <strong>Domain Name System (DNS)</strong> is often called the "phone book of the internet." It translates human-readable domain names (e.g., <code>google.com</code>) into machine-readable IP addresses (e.g., <code>142.250.190.46</code>). Without DNS, we'd have to memorize IP addresses for every website we visit.</p>

      <h3>The DNS Hierarchy</h3>
      <p>DNS is a <strong>distributed, hierarchical database</strong> structured as an inverted tree:</p>

      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Level</th><th>Example</th><th>Managed By</th></tr>
        </thead>
        <tbody>
          <tr><td>Root Server</td><td><code>.</code></td><td>13 root server operators (ICANN)</td></tr>
          <tr><td>TLD Server</td><td><code>.com</code>, <code>.org</code>, <code>.io</code></td><td>TLD registries (Verisign, PIR, etc.)</td></tr>
          <tr><td>Authoritative Server</td><td><code>ns1.cloudflare.com</code></td><td>Domain owner / DNS provider</td></tr>
          <tr><td>Recursive Resolver</td><td><code>8.8.8.8</code> (Google)</td><td>ISP or public DNS provider</td></tr>
        </tbody>
      </table>

      <h3>DNS Resolution Process (Step-by-Step)</h3>
      <p>When you type <code>example.com</code> into your browser:</p>
      <ol>
        <li><strong>Local Cache Check:</strong> The OS checks its resolver cache.</li>
        <li><strong>Recursive Resolver Query:</strong> If not cached, the query goes to a recursive resolver (e.g., ISP or <code>1.1.1.1</code>).</li>
        <li><strong>Root Server Query:</strong> The resolver asks a root server → returns the <code>.com</code> TLD server address.</li>
        <li><strong>TLD Server Query:</strong> The resolver asks the <code>.com</code> TLD server → returns the authoritative server for <code>example.com</code>.</li>
        <li><strong>Authoritative Query:</strong> The resolver asks the authoritative server → returns the IP address.</li>
        <li><strong>Response Cached:</strong> The IP is returned to the client and cached for the TTL duration.</li>
      </ol>

      <h3>Common DNS Record Types</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Record</th><th>Purpose</th><th>Example</th></tr>
        </thead>
        <tbody>
          <tr><td><code>A</code></td><td>Maps domain → IPv4</td><td><code>example.com → 93.184.216.34</code></td></tr>
          <tr><td><code>AAAA</code></td><td>Maps domain → IPv6</td><td><code>example.com → 2606:2800:220:1::1</code></td></tr>
          <tr><td><code>CNAME</code></td><td>Alias to another domain</td><td><code>www.example.com → example.com</code></td></tr>
          <tr><td><code>MX</code></td><td>Mail exchange server</td><td><code>mail.example.com (priority 10)</code></td></tr>
          <tr><td><code>TXT</code></td><td>Free-form text (SPF, DKIM, verification)</td><td><code>v=spf1 include:_spf.google.com ~all</code></td></tr>
          <tr><td><code>NS</code></td><td>Authoritative name servers</td><td><code>ns1.cloudflare.com</code></td></tr>
          <tr><td><code>SOA</code></td><td>Start of Authority (zone metadata)</td><td>Primary NS, admin email, TTL</td></tr>
        </tbody>
      </table>

      <h3>Security Vulnerabilities in Traditional DNS</h3>
      <p>Standard DNS uses <strong>port 53 over plain UDP/TCP</strong> — meaning queries and responses are unencrypted and unauthenticated. This creates several attack vectors:</p>

      <h4>1. DNS Cache Poisoning (Spoofing)</h4>
      <p>The attacker injects forged DNS records into a resolver's cache, redirecting users to malicious IPs.</p>
      <pre><code># Kaminsky-style attack (simplified)
attacker.com.  IN  A  6.6.6.6     # attacker forges response before real server replies
www.bank.com.  IN  A  6.6.6.6     # redirects bank's domain to attacker server</code></pre>

      <h4>2. DNS Tunneling</h4>
      <p>Attackers exfiltrate data by encoding it inside DNS queries (<code>exfil.attacker.com</code>) — bypasses firewalls because DNS traffic is rarely blocked.</p>

      <h4>3. DDoS / DNS Amplification</h4>
      <p>Attackers send small queries (<code>ANY</code> requests) with a spoofed source IP. Open resolvers respond with large replies to the victim's IP — amplification factor up to <strong>50x–70x</strong>.</p>

      <h4>4. Typosquatting</h4>
      <p>Registering domains like <code>go0gle.com</code>, <code>paypa1.com</code>, or <code>microsft.com</code> to phish users who mistype URLs.</p>

      <h3>Modern DNS Security Solutions</h3>

      <h4>DNSSEC (DNS Security Extensions)</h4>
      <p>DNSSEC adds <strong>cryptographic signatures</strong> to DNS records, allowing resolvers to verify that responses are authentic and unmodified.</p>
      <ul>
        <li>Uses <strong>public-key cryptography</strong> (RSA/ECDSA).</li>
        <li>Builds a chain of trust from root → TLD → authoritative server.</li>
        <li>Does <strong>NOT</strong> encrypt traffic — only authenticates it.</li>
        <li>Protects against cache poisoning, not against eavesdropping.</li>
      </ul>

      <h4>DoH and DoT (Encrypted DNS)</h4>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Feature</th><th>DoT (DNS over TLS)</th><th>DoH (DNS over HTTPS)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Port</strong></td><td>853</td><td>443 (HTTPS)</td></tr>
          <tr><td><strong>Protocol</strong></td><td>TLS over TCP</td><td>HTTP/2 + TLS</td></tr>
          <tr><td><strong>Encrypted</strong></td><td>✅ Yes</td><td>✅ Yes</td></tr>
          <tr><td><strong>Disguised as web traffic</strong></td><td>❌ No (easily blocked)</td><td>✅ Yes (blends with HTTPS)</td></tr>
          <tr><td><strong>Standard</strong></td><td>RFC 7858</td><td>RFC 8484</td></tr>
          <tr><td><strong>Performance</strong></td><td>Faster (lower overhead)</td><td>Slightly slower</td></tr>
          <tr><td><strong>Example Provider</strong></td><td>Cloudflare <code>1.1.1.1:853</code></td><td>Cloudflare <code>https://cloudflare-dns.com/dns-query</code></td></tr>
        </tbody>
      </table>

      <h3>Quick Reference: Useful DNS Commands</h3>
      <pre><code># Query A record
dig example.com A +short

# Trace full resolution path
dig example.com +trace

# Query specific DNS server
dig @1.1.1.1 example.com

# Check DNSSEC validation
delv example.com

# Reverse DNS lookup
dig -x 8.8.8.8</code></pre>

      <h3>Key Takeaways</h3>
      <ul>
        <li>Use <strong>DNSSEC</strong> on your authoritative zones to prevent spoofing.</li>
        <li>Use <strong>DoH or DoT</strong> on clients to prevent eavesdropping and manipulation.</li>
        <li>Monitor for <strong>typosquatting domains</strong> related to your brand.</li>
        <li>Block outbound DNS to non-approved resolvers to prevent tunneling.</li>
        <li>Rate-limit and filter DNS at the edge to mitigate amplification DDoS.</li>
      </ul>
    `
  },

  // =================================================================
  // BLOG 05 — OWASP Top 10
  // =================================================================
  {
    num: '05',
    slug: 'owasp-top-10',
    tag: 'Cybersecurity',
    title: 'OWASP Top 10 for Backend Developers: Real Code, Real Fixes',
    excerpt: 'A practical walkthrough of each OWASP Top 10 (2021) vulnerability with real TypeScript/Node.js examples showing vulnerable vs secure implementations.',
    date: 'Feb 2026',
    readTime: '14 min',
    content: `
      <h3>What is OWASP?</h3>
      <p>The <strong>Open Web Application Security Project (OWASP)</strong> is a nonprofit foundation that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of application security. The <strong>OWASP Top 10</strong> represents a broad consensus about the most critical security risks to web applications, last updated in <strong>2021</strong>.</p>

      <h3>The OWASP Top 10 (2021) at a Glance</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>#</th><th>Vulnerability</th><th>Core Issue</th></tr>
        </thead>
        <tbody>
          <tr><td>A01</td><td>Broken Access Control</td><td>Users can act outside their intended permissions</td></tr>
          <tr><td>A02</td><td>Cryptographic Failures</td><td>Weak/missing encryption of sensitive data</td></tr>
          <tr><td>A03</td><td>Injection (SQL, NoSQL, OS, LDAP)</td><td>Untrusted data sent to interpreter</td></tr>
          <tr><td>A04</td><td>Insecure Design</td><td>Flaws in design patterns & business logic</td></tr>
          <tr><td>A05</td><td>Security Misconfiguration</td><td>Default configs, open cloud storage, verbose errors</td></tr>
          <tr><td>A06</td><td>Vulnerable & Outdated Components</td><td>Using libraries with known CVEs</td></tr>
          <tr><td>A07</td><td>Identification & Authentication Failures</td><td>Weak passwords, broken session handling</td></tr>
          <tr><td>A08</td><td>Software & Data Integrity Failures</td><td>Insecure deserialization, untrusted updates</td></tr>
          <tr><td>A09</td><td>Security Logging & Monitoring Failures</td><td>Insufficient detection & response</td></tr>
          <tr><td>A10</td><td>Server-Side Request Forgery (SSRF)</td><td>Fetching remote resources without validation</td></tr>
        </tbody>
      </table>

      <hr/>

      <h3>A01: Broken Access Control</h3>
      <p>Users can access resources or perform actions they shouldn't be allowed to.</p>

      <p><strong>❌ Vulnerable Code:</strong></p>
      <pre><code>// No ownership check — any logged-in user can delete any account
app.delete('/api/users/:id', authenticate, async (req, res) => {
  await db.user.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});</code></pre>

      <p><strong>✅ Secure Code:</strong></p>
      <pre><code>app.delete('/api/users/:id', authenticate, async (req, res) => {
  const targetUser = await db.user.findUnique({ where: { id: req.params.id } });
  
  // Verify ownership OR admin role
  if (targetUser.id !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  
  await db.user.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});</code></pre>

      <hr/>

      <h3>A02: Cryptographic Failures</h3>
      <p>Sensitive data (passwords, PII, payment info) is stored or transmitted in plain text or with weak algorithms.</p>

      <p><strong>❌ Vulnerable:</strong></p>
      <pre><code>import crypto from 'crypto';

// MD5 is broken — never use for passwords
const hash = crypto.createHash('md5').update(password).digest('hex');
db.users.insert({ email, password: hash });</code></pre>

      <p><strong>✅ Secure:</strong></p>
      <pre><code>import bcrypt from 'bcrypt';

// Adaptive, salted, slow — designed for passwords
const saltRounds = 12;
const hash = await bcrypt.hash(password, saltRounds);
db.users.insert({ email, passwordHash: hash });

// Verification
const ok = await bcrypt.compare(plaintextInput, user.passwordHash);</code></pre>

      <hr/>

      <h3>A03: Injection (SQL Injection)</h3>
      <p>Untrusted input is concatenated into queries or commands, allowing attackers to execute arbitrary code.</p>

      <p><strong>❌ Vulnerable:</strong></p>
      <pre><code>const query = \`SELECT * FROM users WHERE email = '\${req.body.email}'\`;
const user = await db.raw(query);</code></pre>
      <p>Input: <code>' OR '1'='1</code> → returns <strong>all users</strong>.</p>

      <p><strong>✅ Secure (Parameterized Query):</strong></p>
      <pre><code>const user = await db.user.findUnique({
  where: { email: req.body.email }
});</code></pre>

      <p><strong>✅ Secure (Raw with Parameter Binding):</strong></p>
      <pre><code>const query = "SELECT * FROM users WHERE email = ?";
const user = await db.raw(query, [req.body.email]);</code></pre>

      <p><strong>✅ ORM Safety:</strong></p>
      <pre><code>// Prisma, TypeORM, Sequelize — all use parameterization by default
const user = await prisma.user.findFirst({
  where: { email: { equals: req.body.email } }
});</code></pre>

      <hr/>

      <h3>A04: Insecure Design</h3>
      <p>Security flaws introduced at the <strong>architecture level</strong> — missing rate limits, no threat modeling, business logic abuse.</p>

      <p><strong>❌ Vulnerable Design (Password Reset):</strong></p>
      <pre><code>// Sends password directly — no token, no expiry
app.post('/reset-password', async (req, res) => {
  const user = await db.user.findByEmail(req.body.email);
  await sendEmail(user.email, \`Your password is: \${user.password}\`);
});</code></pre>

      <p><strong>✅ Secure Design:</strong></p>
      <pre><code>import crypto from 'crypto';

app.post('/reset-password', async (req, res) => {
  const user = await db.user.findByEmail(req.body.email);
  if (!user) return res.status(200).json({ ok: true }); // no enumeration
  
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 min
  
  await db.passwordReset.create({ userId: user.id, token, expiresAt });
  await sendEmail(user.email, \`https://app.com/reset?token=\${token}\`);
  
  res.status(200).json({ ok: true });
});</code></pre>

      <hr/>

      <h3>A05: Security Misconfiguration</h3>
      <ul>
        <li>Default credentials left unchanged (<code>admin/admin</code>).</li>
        <li>Verbose error stack traces exposed in production.</li>
        <li>Unnecessary HTTP methods enabled (<code>PUT</code>, <code>DELETE</code> on read-only endpoints).</li>
        <li>CORS misconfigured to <code>Access-Control-Allow-Origin: *</code> on authenticated APIs.</li>
      </ul>

      <p><strong>✅ Secure Configuration Checklist:</strong></p>
      <pre><code>// Use Helmet.js for security headers
import helmet from 'helmet';
app.use(helmet());

// Disable X-Powered-By
app.disable('x-powered-by');

// Restrict CORS
import cors from 'cors';
app.use(cors({
  origin: ['https://myapp.com'],
  credentials: true
}));

// Generic error responses
app.use((err, req, res, next) => {
  console.error(err); // log internally
  res.status(500).json({ error: 'Internal server error' }); // no stack to client
});</code></pre>

      <hr/>

      <h3>A07: Authentication Failures</h3>
      <p><strong>❌ Vulnerable Login:</strong></p>
      <pre><code>app.post('/login', async (req, res) => {
  const user = await db.user.findByEmail(req.body.email);
  if (user.password === req.body.password) {
    req.session.userId = user.id; // no rate limit, no lockout
    res.json({ token: 'static-hardcoded-token' });
  }
});</code></pre>

      <p><strong>✅ Secure Login:</strong></p>
      <pre><code>import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts, try again later'
});

app.post('/login', loginLimiter, async (req, res) => {
  const user = await db.user.findByEmail(req.body.email);
  
  // Constant-time comparison prevents timing attacks
  if (!user || !(await bcrypt.compare(req.body.password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  if (user.mfaEnabled) {
    return res.json({ step: 'mfa', challengeId: createChallenge(user.id) });
  }
  
  const token = jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m', algorithm: 'HS256' }
  );
  
  res.json({ token });
});</code></pre>

      <hr/>

      <h3>A10: Server-Side Request Forgery (SSRF)</h3>
      <p>Attacker tricks the server into making requests to internal resources (cloud metadata, internal services).</p>

      <p><strong>❌ Vulnerable:</strong></p>
      <pre><code>app.post('/fetch-url', async (req, res) => {
  const response = await fetch(req.body.url); // attacker sends http://169.254.169.254/
  res.send(await response.text());
});</code></pre>

      <p><strong>✅ Secure:</strong></p>
      <pre><code>app.post('/fetch-url', async (req, res) => {
  const url = new URL(req.body.url);
  
  // Allowlist of safe domains
  const ALLOWED_HOSTS = ['api.trusted.com', 'cdn.trusted.com'];
  if (!ALLOWED_HOSTS.includes(url.hostname)) {
    return res.status(400).json({ error: 'Disallowed host' });
  }
  
  // Block private IP ranges
  if (isPrivateIP(url.hostname)) {
    return res.status(400).json({ error: 'Private IPs blocked' });
  }
  
  const response = await fetch(url.toString());
  res.send(await response.text());
});

function isPrivateIP(host) {
  const privateRanges = ['10.', '172.16.', '192.168.', '169.254.'];
  return privateRanges.some(p => host.startsWith(p));
});</code></pre>

      <hr/>

      <h3>Defense-in-Depth Summary</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Layer</th><th>Control</th></tr>
        </thead>
        <tbody>
          <tr><td>Input</td><td>Validate, sanitize, parameterize</td></tr>
          <tr><td>Output</td><td>Encode contextually (HTML, JS, URL)</td></tr>
          <tr><td>AuthN</td><td>Multi-factor, strong hashing (bcrypt/argon2)</td></tr>
          <tr><td>AuthZ</td><td>Server-side enforcement on every request</td></tr>
          <tr><td>Transport</td><td>TLS 1.3, HSTS, secure cookies</td></tr>
          <tr><td>Storage</td><td>Encrypt at rest, key management (KMS)</td></tr>
          <tr><td>Logging</td><td>Centralized, immutable, monitored</td></tr>
          <tr><td>Dependencies</td><td>Automated SCA, SBOM, frequent updates</td></tr>
        </tbody>
      </table>
    `
  },

  // =================================================================
  // BLOG 06 — GO PORT SCANNER
  // =================================================================
  {
    num: '06',
    slug: 'go-port-scanner',
    tag: 'Go',
    title: 'Writing Network Tools in Go: A Port Scanner From Scratch',
    excerpt: 'Building a concurrent, production-grade TCP port scanner in Go — goroutines, channels, worker pools, rate limiting, and banner grabbing explained.',
    date: 'Jan 2026',
    readTime: '11 min',
    content: `
      <h3>Why Go for Network Tools?</h3>
      <p><strong>Go (Golang)</strong> is the language of choice for network tooling — used by Docker, Kubernetes, Caddy, Consul, and countless security tools. Its strengths:</p>
      <ul>
        <li><strong>Compiled to native binaries</strong> → single-file deployment, no runtime needed.</li>
        <li><strong>First-class concurrency</strong> via goroutines and channels.</li>
        <li><strong>Rich standard library</strong> for networking (<code>net</code>, <code>net/http</code>).</li>
        <li><strong>Strong typing</strong> catches bugs at compile time.</li>
        <li><strong>Cross-platform</strong> with simple <code>GOOS</code>/<code>GOARCH</code> builds.</li>
      </ul>

      <h3>Key Go Concurrency Concepts</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Concept</th><th>Purpose</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Goroutine</strong></td><td>Lightweight concurrent function</td><td>~2KB stack, multiplexed onto OS threads by Go scheduler</td></tr>
          <tr><td><strong>Channel</strong></td><td>Typed communication pipe</td><td>Use <code>make(chan T)</code>; send/receive blocks by default</td></tr>
          <tr><td><strong>WaitGroup</strong></td><td>Wait for goroutines to finish</td><td>Call <code>wg.Add(n)</code>, <code>wg.Done()</code>, <code>wg.Wait()</code></td></tr>
          <tr><td><strong>Mutex</strong></td><td>Protect shared state</td><td><code>sync.Mutex</code> with <code>Lock()</code>/<code>Unlock()</code></td></tr>
          <tr><td><strong>Context</strong></td><td>Cancellation & timeouts</td><td>Propagate cancellation through call chain</td></tr>
        </tbody>
      </table>

      <h3>Project Structure</h3>
      <pre><code>portscan/
├── main.go         # CLI entry point, flag parsing
├── scanner.go      # Core scanning logic
├── scanner_test.go # Unit tests
└── go.mod</code></pre>

      <h3>1. The Core Scanning Function</h3>
      <pre><code>package main

import (
    "fmt"
    "net"
    "time"
)

func scanPort(host string, port int, timeout time.Duration) (bool, string) {
    address := fmt.Sprintf("%s:%d", host, port)
    conn, err := net.DialTimeout("tcp", address, timeout)
    if err != nil {
        return false, ""
    }
    conn.Close()
    return true, ""
}</code></pre>

      <h3>2. Concurrent Scanner with Worker Pool</h3>
      <p>A naïve approach spawning one goroutine per port can overwhelm the system. A <strong>worker pool pattern</strong> is better — it limits concurrency to a fixed number of workers consuming from a job queue.</p>

      <pre><code>package main

import (
    "fmt"
    "net"
    "sort"
    "sync"
    "time"
)

type ScanResult struct {
    Port    int
    Open    bool
    Banner  string
    Service string
}

type Scanner struct {
    Host      string
    Timeout   time.Duration
    Workers   int
    results   chan ScanResult
    jobs      chan int
}

func NewScanner(host string, workers int, timeout time.Duration) *Scanner {
    return &Scanner{
        Host:    host,
        Timeout: timeout,
        Workers: workers,
        results: make(chan ScanResult),
        jobs:    make(chan int, 100),
    }
}

func (s *Scanner) worker(wg *sync.WaitGroup) {
    defer wg.Done()
    for port := range s.jobs {
        if isOpen, banner := s.tryConnect(port); isOpen {
            s.results <- ScanResult{
                Port:    port,
                Open:    true,
                Banner:  banner,
                Service: guessService(port),
            }
        }
    }
}

func (s *Scanner) tryConnect(port int) (bool, string) {
    address := fmt.Sprintf("%s:%d", s.Host, port)
    conn, err := net.DialTimeout("tcp", address, s.Timeout)
    if err != nil {
        return false, ""
    }
    defer conn.Close()

    // Banner grabbing — read initial response if available
    conn.SetReadDeadline(time.Now().Add(2 * time.Second))
    buffer := make([]byte, 1024)
    n, _ := conn.Read(buffer)
    return true, string(buffer[:n])
}

// Scan ports in range and returns sorted open ports
func (s *Scanner) Scan(start, end int) []ScanResult {
    var wg sync.WaitGroup
    var openResults []ScanResult
    var mu sync.Mutex

    // Start workers
    for i := 0; i < s.Workers; i++ {
        wg.Add(1)
        go s.worker(&wg)
    }

    // Result collector
    done := make(chan struct{})
    go func() {
        for result := range s.results {
            mu.Lock()
            openResults = append(openResults, result)
            mu.Unlock()
        }
        close(done)
    }()

    // Send jobs
    go func() {
        for port := start; port <= end; port++ {
            s.jobs <- port
        }
        close(s.jobs)
    }()

    wg.Wait()
    close(s.results)
    <-done

    // Sort results by port
    sort.Slice(openResults, func(i, j int) bool {
        return openResults[i].Port < openResults[j].Port
    })
    return openResults
}

// Port → common service mapping (subset)
func guessService(port int) string {
    services := map[int]string{
        21:    "FTP",
        22:    "SSH",
        23:    "Telnet",
        25:    "SMTP",
        53:    "DNS",
        80:    "HTTP",
        110:   "POP3",
        143:   "IMAP",
        443:   "HTTPS",
        3306:  "MySQL",
        5432:  "PostgreSQL",
        6379:  "Redis",
        8080:  "HTTP-Alt",
        27017: "MongoDB",
    }
    return services[port]
}</code></pre>

      <h3>3. CLI Entry Point with Flag Parsing</h3>
      <pre><code>package main

import (
    "flag"
    "fmt"
    "os"
    "time"
)

func main() {
    var (
        host      = flag.String("host", "127.0.0.1", "Target host")
        start     = flag.Int("start", 1, "Start port")
        end       = flag.Int("end", 1024, "End port")
        workers   = flag.Int("workers", 100, "Concurrent workers")
        timeout   = flag.Duration("timeout", 1*time.Second, "Connection timeout")
    )
    flag.Parse()

    fmt.Printf("Scanning %s ports %d-%d with %d workers\n", *host, *start, *end, *workers)
    startTime := time.Now()

    scanner := NewScanner(*host, *workers, *timeout)
    results := scanner.Scan(*start, *end)

    fmt.Printf("\n%-10s %-15s %s\n", "PORT", "SERVICE", "BANNER")
    fmt.Println("--------------------------------------------------")
    for _, r := range results {
        fmt.Printf("%-10d %-15s %s\n", r.Port, r.Service, truncate(r.Banner, 60))
    }

    fmt.Printf("\n✅ Scan complete: %d open ports in %v\n", len(results), time.Since(startTime))
}

func truncate(s string, n int) string {
    if len(s) <= n { return s }
    return s[:n] + "..."
}</code></pre>

      <h3>4. Sample Output</h3>
      <pre><code>$ go run . -host scanme.nmap.org -start 1 -end 1000 -workers 200
Scanning scanme.nmap.org ports 1-1000 with 200 workers

PORT       SERVICE         BANNER
--------------------------------------------------
22         SSH             SSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.13
80         HTTP            HTTP/1.1 200 OK...

✅ Scan complete: 2 open ports in 4.231s</code></pre>

      <h3>5. Testing</h3>
      <pre><code>package main

import "testing"

func TestGuessService(t *testing.T) {
    cases := []struct {
        port int
        want string
    }{
        {22, "SSH"},
        {80, "HTTP"},
        {443, "HTTPS"},
        {99999, ""},
    }
    for _, c := range cases {
        got := guessService(c.port)
        if got != c.want {
            t.Errorf("port %d: got %q, want %q", c.port, got, c.want)
        }
    }
}

func TestScanner_Localhost(t *testing.T) {
    // Spin up a test server
    ln, _ := net.Listen("tcp", "127.0.0.1:0")
    defer ln.Close()

    port := ln.Addr().(*net.TCPAddr).Port
    scanner := NewScanner("127.0.0.1", 10, 500*time.Millisecond)
    results := scanner.Scan(port, port)

    if len(results) != 1 {
        t.Fatalf("expected 1 open port, got %d", len(results))
    }
}</code></pre>

      <h3>Advanced Enhancements</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Feature</th><th>How</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>UDP scanning</strong></td><td>Send UDP packets, measure ICMP unreachable responses</td></tr>
          <tr><td><strong>SYN scan (stealth)</strong></td><td>Use <code>raw sockets</code> + libpcap — requires root</td></tr>
          <tr><td><strong>CIDR ranges</strong></td><td>Parse <code>192.168.1.0/24</code> and iterate hosts</td></tr>
          <tr><td><strong>JSON output</strong></td><td>Use <code>encoding/json</code> for machine-readable results</td></tr>
          <tr><td><strong>Progress bar</strong></td><td>Use libraries like <code>schollz/progressbar/v3</code></td></tr>
          <tr><td><strong>Service detection</strong></td><td>Send protocol-specific probes (HTTP GET, SSH banner)</td></tr>
          <tr><td><strong>Rate limiting</strong></td><td>Token bucket via <code>golang.org/x/time/rate</code></td></tr>
        </tbody>
      </table>

      <h3>Performance Comparison</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Approach</th><th>Time to scan 1000 ports</th></tr>
        </thead>
        <tbody>
          <tr><td>Sequential</td><td>~1000s (1s timeout per port)</td></tr>
          <tr><td>1000 goroutines (unbounded)</td><td>~1.5s (but risks resource exhaustion)</td></tr>
          <tr><td>Worker pool (100 workers)</td><td>~10s (balanced)</td></tr>
          <tr><td>Worker pool (500 workers)</td><td>~2s (aggressive)</td></tr>
        </tbody>
      </table>

      <h3>Legal & Ethical Reminder</h3>
      <p>⚠️ <strong>Only scan systems you own or have explicit written permission to test.</strong> Unauthorized port scanning can violate laws like the <strong>Computer Fraud and Abuse Act (CFAA)</strong> in the US, the <strong>Computer Misuse Act</strong> in the UK, and similar laws worldwide. Use <code>scanme.nmap.org</code> for practice — it's provided by the Nmap project specifically for testing.</p>
    `
  },

  // =================================================================
  // BLOG 07 — API ATTACK SURFACE
  // =================================================================
  {
    num: '07',
    slug: 'api-attack-surface',
    tag: 'Internet & Networking',
    title: 'HTTP Under the Hood: What Really Happens When You Open a Website',
    excerpt: 'A deep technical journey through DNS, TCP, TLS, HTTP, headers, cookies, caching, and the complete lifecycle of a browser request — from typing a URL to rendering a webpage.',
    date: 'Aug 2026',
    readTime: '16 min',
    content: `
    <p>When you type <code>https://example.com</code> into your browser and press Enter, it feels almost instantaneous. Within a fraction of a second, a webpage appears on your screen. But behind that simple action is a surprisingly complex chain of network operations involving <strong>DNS resolution</strong>, <strong>TCP connections</strong>, <strong>TLS encryption</strong>, <strong>HTTP requests</strong>, caching layers, servers, databases, and finally the browser's rendering engine.</p>

    <p>Understanding this lifecycle is one of the most important foundations for anyone working in <strong>web development, backend engineering, networking, DevOps, or cybersecurity</strong>. If you understand what happens between the browser and server, debugging performance problems and security issues becomes significantly easier.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        <strong style="color: #00ff41;">URL</strong>
        →
        <strong style="color: #ffaa00;">DNS</strong>
        →
        <strong style="color: #ff0055;">TCP</strong>
        →
        <strong style="color: #00ff41;">TLS</strong>
        →
        <strong style="color: #ffaa00;">HTTP</strong>
        →
        <strong style="color: #ff0055;">SERVER</strong>
        →
        <strong style="color: #00ff41;">RESPONSE</strong>
        →
        <strong style="color: #ffaa00;">BROWSER</strong>
      </code>
    </div>

    <h3 style="color: #ff0055;">1. It Starts With a URL</h3>

    <p>Everything begins with a URL, or <strong>Uniform Resource Locator</strong>. Consider this example:</p>

    <pre><code>https://api.example.com:443/users?id=42#profile</code></pre>

    <p>A URL contains several different components, and each one has a specific purpose.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Component</th>
          <th style="padding: 8px; border: 1px solid #333;">Example</th>
          <th style="padding: 8px; border: 1px solid #333;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Protocol</code></td>
          <td style="padding: 8px; border: 1px solid #333;">https</td>
          <td style="padding: 8px; border: 1px solid #333;">Defines how communication occurs</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Hostname</code></td>
          <td style="padding: 8px; border: 1px solid #333;">api.example.com</td>
          <td style="padding: 8px; border: 1px solid #333;">Identifies the destination server</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Port</code></td>
          <td style="padding: 8px; border: 1px solid #333;">443</td>
          <td style="padding: 8px; border: 1px solid #333;">Identifies the network service</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Path</code></td>
          <td style="padding: 8px; border: 1px solid #333;">/users</td>
          <td style="padding: 8px; border: 1px solid #333;">Identifies the requested resource</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Query</code></td>
          <td style="padding: 8px; border: 1px solid #333;">?id=42</td>
          <td style="padding: 8px; border: 1px solid #333;">Provides additional parameters</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Fragment</code></td>
          <td style="padding: 8px; border: 1px solid #333;">#profile</td>
          <td style="padding: 8px; border: 1px solid #333;">Client-side document location</td>
        </tr>
      </tbody>
    </table>

    <p>One important detail is that the <code>#profile</code> fragment is normally <strong>not sent to the server</strong>. It is interpreted by the browser after the resource has been retrieved.</p>

    <h3 style="color: #ff0055;">2. DNS: Turning a Domain Into an IP Address</h3>

    <p>Computers communicate across IP networks using addresses such as <code>142.250.72.14</code> or IPv6 addresses. Humans, however, prefer names such as <code>google.com</code>.</p>

    <p>DNS, or <strong>Domain Name System</strong>, bridges this gap.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        example.com
        →
        DNS Resolver
        →
        Root Server
        →
        TLD Server
        →
        Authoritative Server
        →
        IP Address
      </code>
    </div>

    <p>The browser does not necessarily perform the entire DNS lookup every time. DNS information can be cached at several levels:</p>

    <ul>
      <li>Browser DNS cache</li>
      <li>Operating system cache</li>
      <li>Local network or router cache</li>
      <li>Recursive DNS resolver cache</li>
      <li>Authoritative DNS infrastructure</li>
    </ul>

    <p>This caching system dramatically reduces lookup latency and network traffic.</p>

    <h4 style="color: #00ff41;">Checking DNS From the Command Line</h4>

    <pre><code># Linux / macOS
$ dig example.com

# Windows
&gt; nslookup example.com

# Alternative
$ host example.com</code></pre>

    <p>A typical DNS response can contain records such as:</p>

    <pre><code>A       → IPv4 address
AAAA    → IPv6 address
CNAME   → Canonical name
MX      → Mail server
TXT     → Text / verification records
NS      → Authoritative name server</code></pre>

    <p>From a security perspective, DNS is extremely important. Incorrect DNS configuration can result in problems such as <strong>subdomain takeover, DNS spoofing, cache poisoning, and traffic redirection</strong>.</p>

    <h3 style="color: #ff0055;">3. The Browser Establishes a Connection</h3>

    <p>Once the browser knows the destination IP address, it needs a way to communicate with that server.</p>

    <p>For traditional HTTPS connections, this historically means establishing a <strong>TCP connection</strong>.</p>

    <h4 style="color: #00ff41;">The TCP Three-Way Handshake</h4>

    <p>TCP establishes a reliable connection using a three-way handshake:</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ffaa00; margin: 15px 0;">
      <code>
        CLIENT → SYN → SERVER<br>
        CLIENT ← SYN-ACK ← SERVER<br>
        CLIENT → ACK → SERVER
      </code>
    </div>

    <p>The first packet contains a <code>SYN</code> flag indicating that the client wants to establish a connection.</p>

    <p>The server responds with <code>SYN-ACK</code>, acknowledging the request and indicating that it is also ready to communicate.</p>

    <p>The client then sends <code>ACK</code>, completing the handshake.</p>

    <p>At this point, the TCP connection is established.</p>

    <h4 style="color: #00ff41;">Why TCP Matters</h4>

    <p>TCP provides several important guarantees:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Feature</th>
          <th style="padding: 8px; border: 1px solid #333;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Reliability</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Lost data can be retransmitted</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Ordering</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Data is reconstructed in the correct order</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Flow Control</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Prevents overwhelming the receiver</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Congestion Control</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Adapts transmission to network conditions</td>
        </tr>
      </tbody>
    </table>

    <h3 style="color: #ff0055;">4. TLS: Encrypting the Connection</h3>

    <p>TCP provides reliable transport, but it does <strong>not</strong> provide encryption.</p>

    <p>This is where <strong>TLS — Transport Layer Security</strong> enters the picture.</p>

    <p>HTTPS is essentially HTTP transported through a secure TLS connection.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        HTTP + TLS = HTTPS
      </code>
    </div>

    <p>During the TLS handshake, the client and server negotiate cryptographic parameters and establish keys used to protect the session.</p>

    <h4 style="color: #00ff41;">TLS Provides Three Major Properties</h4>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Property</th>
          <th style="padding: 8px; border: 1px solid #333;">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Confidentiality</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Attackers cannot easily read encrypted traffic</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Integrity</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Tampering can be detected</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Authentication</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Certificates help verify the server identity</td>
        </tr>
      </tbody>
    </table>

    <p>The server presents a certificate containing information about the domain and its public key. The browser validates the certificate chain against trusted Certificate Authorities.</p>

    <p>If certificate validation fails, modern browsers will usually display a security warning rather than silently continuing.</p>

    <h3 style="color: #ff0055;">5. HTTP: The Actual Request</h3>

    <p>After the connection has been established, the browser can finally send the HTTP request.</p>

    <p>A simplified HTTP request might look like this:</p>

    <pre><code>GET /users?id=42 HTTP/1.1
Host: api.example.com
Accept: application/json
User-Agent: Mozilla/5.0
Accept-Language: en-US
Connection: keep-alive</code></pre>

    <p>Each component has a purpose.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Part</th>
          <th style="padding: 8px; border: 1px solid #333;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>GET</code></td>
          <td style="padding: 8px; border: 1px solid #333;">HTTP method</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>/users?id=42</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Requested resource</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Host</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Target hostname</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Accept</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Preferred response format</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>User-Agent</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Client identification information</td>
        </tr>
      </tbody>
    </table>

    <h3 style="color: #ff0055;">6. HTTP Methods</h3>

    <p>HTTP provides several methods for interacting with resources.</p>

    <pre><code>GET      → Retrieve data
POST     → Create / submit data
PUT      → Replace a resource
PATCH    → Partially modify a resource
DELETE   → Remove a resource
HEAD     → Retrieve headers without the response body
OPTIONS  → Discover supported communication options</code></pre>

    <p>One of the most important concepts in API development is understanding that these methods communicate <strong>intent</strong>.</p>

    <p>For example, a REST API might expose:</p>

    <pre><code>GET    /api/users
GET    /api/users/42
POST   /api/users
PATCH  /api/users/42
DELETE /api/users/42</code></pre>

    <p>This predictable structure makes APIs easier to consume, document, test, and maintain.</p>

    <h3 style="color: #ff0055;">7. HTTP Headers: The Metadata of Communication</h3>

    <p>Headers carry metadata about the request and response.</p>

    <p>Some important request headers include:</p>

    <pre><code>Authorization
Content-Type
Accept
Cookie
Origin
Referer
User-Agent
Cache-Control</code></pre>

    <p>Servers also return their own headers:</p>

    <pre><code>Content-Type
Content-Length
Set-Cookie
Cache-Control
ETag
Location
Content-Security-Policy
Strict-Transport-Security</code></pre>

    <p>Security headers are particularly important for modern web applications.</p>

    <h4 style="color: #00ff41;">Example Security Headers</h4>

    <pre><code>Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=()</code></pre>

    <p>These headers can significantly reduce the impact of certain browser-based attacks when configured correctly.</p>

    <h3 style="color: #ff0055;">8. Cookies and Sessions</h3>

    <p>HTTP itself is fundamentally stateless. A server does not automatically remember that two requests came from the same user.</p>

    <p>Cookies provide one mechanism for maintaining state between requests.</p>

    <pre><code>Set-Cookie: session_id=abc123;
HttpOnly;
Secure;
SameSite=Lax</code></pre>

    <p>The browser stores the cookie and sends it on subsequent matching requests.</p>

    <p>Several cookie attributes are particularly important from a security perspective:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Attribute</th>
          <th style="padding: 8px; border: 1px solid #333;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>HttpOnly</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Prevents JavaScript from directly reading the cookie</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Secure</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Restricts transmission to secure connections</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>SameSite</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Controls cross-site cookie behavior</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Path</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Controls where the cookie is sent</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>Max-Age</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Controls cookie lifetime</td>
        </tr>
      </tbody>
    </table>

    <h3 style="color: #ff0055;">9. The Server Receives the Request</h3>

    <p>The request has now traveled across the network and reached the server infrastructure.</p>

    <p>But the web server may not be the application itself.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        Browser
        →
        CDN
        →
        Load Balancer
        →
        Reverse Proxy
        →
        Application Server
        →
        Database
        →
        Response
      </code>
    </div>

    <p>Modern applications are often composed of multiple layers.</p>

    <h4 style="color: #00ff41;">Reverse Proxy</h4>

    <p>A reverse proxy such as Nginx or another edge proxy can handle TLS termination, routing, compression, caching, rate limiting, and other responsibilities before forwarding traffic to the application.</p>

    <h4 style="color: #00ff41;">Application Server</h4>

    <p>The application server executes business logic.</p>

    <p>For example, a Node.js API might receive:</p>

    <pre><code>GET /api/users/42</code></pre>

    <p>and execute logic similar to:</p>

    <pre><code>app.get('/api/users/:id', async (req, res) => {
  const user = await db.users.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    });
  }

  return res.json(user);
});</code></pre>

    <p>The application may then query a database before constructing the HTTP response.</p>

    <h3 style="color: #ff0055;">10. Database Communication</h3>

    <p>If the requested data is dynamic, the application may need to communicate with a database.</p>

    <pre><code>Client
  ↓
API
  ↓
Application Logic
  ↓
Database Query
  ↓
Database
  ↓
Result
  ↓
API Response</code></pre>

    <p>This is one reason backend performance can become complicated. The network request itself might be fast while the database query takes hundreds of milliseconds.</p>

    <p>Developers therefore monitor things such as:</p>

    <ul>
      <li>Database query latency</li>
      <li>Connection pool utilization</li>
      <li>CPU usage</li>
      <li>Memory usage</li>
      <li>Cache hit ratio</li>
      <li>API response time</li>
      <li>Error rates</li>
    </ul>

    <h3 style="color: #ff0055;">11. HTTP Status Codes</h3>

    <p>Once the server has processed the request, it returns an HTTP response containing a status code.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Code</th>
          <th style="padding: 8px; border: 1px solid #333;">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>200</code></td>
          <td style="padding: 8px; border: 1px solid #333;">OK</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>201</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Created</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>204</code></td>
          <td style="padding: 8px; border: 1px solid #333;">No Content</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>301</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Permanent Redirect</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>304</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Not Modified</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>400</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Bad Request</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>401</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Unauthorized</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>403</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Forbidden</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>404</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Not Found</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>429</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Too Many Requests</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>500</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Internal Server Error</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>503</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Service Unavailable</td>
        </tr>
      </tbody>
    </table>

    <h3 style="color: #ff0055;">12. The Response</h3>

    <p>A complete HTTP response could look like this:</p>

    <pre><code>HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: private, max-age=60
Content-Length: 86

{
  "id": 42,
  "username": "wanheda",
  "role": "developer"
}</code></pre>

    <p>The browser receives the response and determines what to do with it based on the headers, status code, content type, and requested resource.</p>

    <h3 style="color: #ff0055;">13. Caching: Avoiding Unnecessary Work</h3>

    <p>One of the biggest performance improvements available to web applications is caching.</p>

    <p>Without caching, the same resource might repeatedly travel from the browser to the server even when nothing has changed.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ffaa00; margin: 15px 0;">
      <code>
        First Request → Server → Resource<br>
        Second Request → Cache → Resource<br>
        Third Request → Cache → Resource
      </code>
    </div>

    <p>HTTP supports mechanisms such as:</p>

    <pre><code>Cache-Control
ETag
Last-Modified
Expires
If-None-Match
If-Modified-Since</code></pre>

    <p>For example:</p>

    <pre><code>ETag: "abc123"</code></pre>

    <p>The browser can later send:</p>

    <pre><code>If-None-Match: "abc123"</code></pre>

    <p>If the resource has not changed, the server can respond with:</p>

    <pre><code>304 Not Modified</code></pre>

    <p>This allows the browser to reuse its cached copy instead of downloading the entire resource again.</p>

    <h3 style="color: #ff0055;">14. HTTP/1.1 vs HTTP/2 vs HTTP/3</h3>

    <p>The web has evolved significantly since the early versions of HTTP.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Version</th>
          <th style="padding: 8px; border: 1px solid #333;">Transport</th>
          <th style="padding: 8px; border: 1px solid #333;">Important Feature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>HTTP/1.1</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">TCP</td>
          <td style="padding: 8px; border: 1px solid #333;">Persistent connections</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>HTTP/2</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">TCP</td>
          <td style="padding: 8px; border: 1px solid #333;">Multiplexing and header compression</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>HTTP/3</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">QUIC / UDP</td>
          <td style="padding: 8px; border: 1px solid #333;">Reduced connection latency and improved transport behavior</td>
        </tr>
      </tbody>
    </table>

    <p>HTTP/2 introduced multiplexing, allowing multiple streams to share a single connection instead of requiring separate connections for every resource.</p>

    <p>HTTP/3 goes further by using <strong>QUIC</strong>, which operates over UDP while implementing modern transport features at the protocol level.</p>

    <h3 style="color: #ff0055;">15. What Happens After the Response?</h3>

    <p>Receiving HTML is not the end of the process.</p>

    <p>The browser must parse the document and construct the structures required to display the page.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        HTML
        →
        DOM
        <br>
        CSS
        →
        CSSOM
        <br>
        DOM + CSSOM
        →
        Render Tree
        →
        Layout
        →
        Paint
        →
        Composite
      </code>
    </div>

    <p>The browser may discover additional resources during HTML parsing:</p>

    <pre><code>&lt;link rel="stylesheet" href="/style.css"&gt;
&lt;script src="/app.js"&gt;&lt;/script&gt;
&lt;img src="/hero.webp"&gt;</code></pre>

    <p>Each of these resources can trigger additional network requests.</p>

    <p>This is why a webpage is rarely just "one request." A single HTML document can lead to dozens or even hundreds of additional requests for stylesheets, JavaScript, fonts, images, API calls, analytics, and third-party resources.</p>

    <h3 style="color: #ff0055;">16. Security: Where Things Can Go Wrong</h3>

    <p>Every layer of this process introduces potential security risks.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Layer</th>
          <th style="padding: 8px; border: 1px solid #333;">Potential Risk</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>DNS</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Spoofing, poisoning, misconfiguration</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>TLS</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Certificate or configuration failures</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>HTTP</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Header injection, insecure transport, request manipulation</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Cookies</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Session theft and CSRF-related issues</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Application</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Injection, broken authorization, logic flaws</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Database</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Unauthorized access and injection vulnerabilities</td>
        </tr>
      </tbody>
    </table>

    <h3 style="color: #ff0055;">17. Useful Developer Tools</h3>

    <p>You do not need to guess what is happening on the network. Modern tools allow developers to inspect almost every stage.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Tool</th>
          <th style="padding: 8px; border: 1px solid #333;">Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>curl</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Manual HTTP requests</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>dig</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">DNS investigation</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>ping</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Basic network reachability testing</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>traceroute</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Inspecting network paths</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Wireshark</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Packet analysis</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Browser DevTools</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">HTTP requests, timing, storage and rendering inspection</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Burp Suite</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Web traffic inspection and security testing</td>
        </tr>
      </tbody>
    </table>

    <h4 style="color: #00ff41;">Inspecting an HTTP Request</h4>

    <pre><code>$ curl -I https://example.com

HTTP/2 200
content-type: text/html
cache-control: max-age=0
server: ...
strict-transport-security: ...</code></pre>

    <p>The <code>-I</code> option asks curl to retrieve the response headers without downloading the complete response body.</p>

    <h3 style="color: #ff0055;">18. Performance: Measuring the Journey</h3>

    <p>When a website feels slow, simply saying "the server is slow" is not enough.</p>

    <p>The delay could originate from several different stages:</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ffaa00; margin: 15px 0;">
      <code>
        DNS Lookup
        + TCP Connection
        + TLS Handshake
        + Server Processing
        + Database Query
        + Response Transfer
        + Browser Rendering
      </code>
    </div>

    <p>A useful performance investigation therefore asks:</p>

    <ul>
      <li>How long did DNS resolution take?</li>
      <li>Was the connection reused?</li>
      <li>How long did TLS negotiation take?</li>
      <li>How long until the server began responding?</li>
      <li>How large was the response?</li>
      <li>Was the resource served from cache?</li>
      <li>How much JavaScript blocked rendering?</li>
      <li>Were additional requests unnecessarily expensive?</li>
    </ul>

    <h3 style="color: #ff0055;">19. The Complete Lifecycle</h3>

    <p>We can now summarize the entire journey.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        01. User enters URL<br>
        ↓<br>
        02. Browser checks local caches<br>
        ↓<br>
        03. DNS resolves hostname<br>
        ↓<br>
        04. Browser obtains destination IP<br>
        ↓<br>
        05. TCP connection is established<br>
        ↓<br>
        06. TLS handshake secures the connection<br>
        ↓<br>
        07. Browser sends HTTP request<br>
        ↓<br>
        08. Request reaches edge infrastructure<br>
        ↓<br>
        09. Reverse proxy / load balancer routes request<br>
        ↓<br>
        10. Application processes request<br>
        ↓<br>
        11. Database/cache may be queried<br>
        ↓<br>
        12. Server generates response<br>
        ↓<br>
        13. HTTP response travels back<br>
        ↓<br>
        14. Browser parses the response<br>
        ↓<br>
        15. Additional resources are requested<br>
        ↓<br>
        16. Browser constructs the render tree<br>
        ↓<br>
        17. Layout → Paint → Composite<br>
        ↓<br>
        18. User sees the final interface
      </code>
    </div>

    <h3 style="color: #ff0055;">20. Defensive Blueprint</h3>

    <p>Understanding the request lifecycle also gives developers a practical security checklist.</p>

    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="text-align: left; padding: 8px; border: 1px solid #333;">Control</th>
          <th style="text-align: left; padding: 8px; border: 1px solid #333;">Recommended Practice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>HTTPS</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Use HTTPS everywhere and redirect insecure HTTP traffic</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>TLS</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Use modern TLS configurations and valid certificates</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Cookies</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Use Secure, HttpOnly and appropriate SameSite settings</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Headers</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Deploy appropriate security headers</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Validation</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Validate all untrusted input on the server</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Rate Limiting</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Limit abusive or excessive requests</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Logging</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Monitor authentication, errors and suspicious traffic</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Dependencies</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Keep server and application dependencies maintained</td>
        </tr>
      </tbody>
    </table>

    <div style="border: 1px dashed #00ff41; padding: 15px; margin-top: 20px;">
      <h4 style="margin-top: 0; color: #00ff41;">💡 Pro Tip: Use DevTools Like a Network Engineer</h4>
      <p style="margin-bottom: 0;">Open your browser's Network panel and reload a website. Instead of looking only at the final page, inspect the individual requests. Look at DNS timing, connection timing, TLS negotiation, request headers, response headers, transferred size, caching behavior, status codes, and waterfall timing. Learning to read this panel is one of the fastest ways to understand how the modern web actually works.</p>
    </div>

    <h3 style="color: #ff0055;">Conclusion</h3>

    <p>Opening a website is one of those everyday actions that looks simple only because modern browsers hide almost all of the complexity.</p>

    <p>Behind a single URL is an entire chain of systems: <strong>DNS, IP routing, TCP, TLS, HTTP, proxies, load balancers, application servers, databases, caches, and browser rendering engines</strong>.</p>

    <p>For frontend developers, this knowledge explains why some resources load slowly and why certain browser behaviors exist. For backend developers, it explains how requests reach their applications and how responses travel back to clients. For network engineers, it provides the foundation for understanding traffic flow. And for security engineers, every layer represents another place where trust must be established and carefully enforced.</p>

    <p>The next time you type a URL and a webpage appears almost instantly, remember what actually happened:</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
      <code>
        <strong style="color: #00ff41;">URL</strong>
        →
        <strong style="color: #ffaa00;">DNS</strong>
        →
        <strong style="color: #ff0055;">NETWORK</strong>
        →
        <strong style="color: #00ff41;">TLS</strong>
        →
        <strong style="color: #ffaa00;">HTTP</strong>
        →
        <strong style="color: #ff0055;">BACKEND</strong>
        →
        <strong style="color: #00ff41;">DATABASE</strong>
        →
        <strong style="color: #ffaa00;">RESPONSE</strong>
        →
        <strong style="color: #ff0055;">BROWSER</strong>
      </code>
    </div>

    <p>That invisible pipeline is the foundation of the modern Internet.</p>
  `
  },

  // =================================================================
  // BLOG 08 — WEAK BACKEND
  // =================================================================
  {
    num: '08',
    slug: 'weak-backend-risks',
    tag: 'API Security & Penetration Testing',
    title: 'API Attack Surface: How Pentesters Discover, Access, and Test APIs',
    excerpt: 'A practical deep dive into API reconnaissance, authentication, authorization, endpoint discovery, tokens, HTTP methods, common security weaknesses, and the defensive mindset behind modern API penetration testing.',
    date: 'Aug 2026',
    readTime: '18 min',
    content: `
  <p>Modern applications rarely exist as a single webpage. Behind almost every dashboard, mobile application, SaaS platform, and interactive interface is an <strong>API</strong> responsible for exchanging data between clients and backend systems.</p>

  <p>This creates an important security question: <strong>how does a penetration tester discover an API, understand how it works, and determine whether access controls are actually enforcing security?</strong></p>

  <p>API penetration testing is not simply about sending random requests and hoping something breaks. A professional assessment starts by understanding the application's architecture, identifying its attack surface, mapping authentication mechanisms, and testing whether the server correctly enforces authorization.</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
    <code>
      <strong style="color: #00ff41;">DISCOVER</strong>
      →
      <strong style="color: #ffaa00;">MAP</strong>
      →
      <strong style="color: #ff0055;">AUTHENTICATE</strong>
      →
      <strong style="color: #00ff41;">AUTHORIZE</strong>
      →
      <strong style="color: #ffaa00;">TEST</strong>
      →
      <strong style="color: #ff0055;">REPORT</strong>
    </code>
  </div>

  <h3 style="color: #ff0055;">1. What Exactly Is an API?</h3>

  <p>An API, or <strong>Application Programming Interface</strong>, provides a structured way for software components to communicate.</p>

  <p>A browser frontend might request:</p>

  <pre><code>GET /api/users/me</code></pre>

  <p>The backend processes the request and returns structured data:</p>

  <pre><code>{
  "id": 42,
  "username": "wanheda",
  "role": "user"
}</code></pre>

  <p>The frontend does not need to know how the database works internally. It only needs to understand the API contract.</p>

  <p>This separation is useful for development, but it also creates an important security boundary:</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
    <code>
      CLIENT = untrusted<br>
      <br>
      API = security boundary<br>
      <br>
      DATABASE = protected resource
    </code>
  </div>

  <p>The server must never assume that a request is trustworthy simply because it came from an official frontend.</p>

  <h3 style="color: #ff0055;">2. The First Step: Define the Scope</h3>

  <p>A real penetration test begins before technical testing.</p>

  <p>The tester needs clearly defined authorization and scope.</p>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <thead>
      <tr style="background: #222; color: #00ff41;">
        <th style="padding: 8px; border: 1px solid #333;">Question</th>
        <th style="padding: 8px; border: 1px solid #333;">Why It Matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>What domains are in scope?</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Prevents testing unrelated systems</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Which API environments?</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Production and staging may differ significantly</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Which accounts are provided?</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Allows authorization testing</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>What actions are prohibited?</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Prevents destructive testing</td>
      </tr>
    </tbody>
  </table>

  <p>Without authorization, security testing against systems you do not own or have permission to test can cross legal and ethical boundaries.</p>

  <h3 style="color: #ff0055;">3. Discovering the API</h3>

  <p>One of the first questions during an assessment is:</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
    <strong style="color: #00ff41;">"Where is the API?"</strong>
  </div>

  <p>The answer is not always obvious.</p>

  <p>A modern web application may communicate with:</p>

  <pre><code>https://example.com/api/
https://api.example.com/
https://api.example.com/v1/
https://api.example.com/v2/
https://graphql.example.com/
https://auth.example.com/
https://upload.example.com/</code></pre>

  <p>Endpoints can often be identified through authorized application traffic, documentation, frontend JavaScript, API specifications, and browser developer tools.</p>

  <h4 style="color: #00ff41;">Browser Network Inspection</h4>

  <p>One of the most useful techniques is simply observing what the application itself does.</p>

  <p>Open the browser's Network panel, perform an action inside the application, and inspect the resulting request.</p>

  <pre><code>POST /api/auth/login
Content-Type: application/json

{
  "email": "tester@example.com",
  "password": "********"
}</code></pre>

  <p>The tester can then document the endpoint, method, parameters, response, authentication requirements, and security controls.</p>

  <h3 style="color: #ff0055;">4. Building an API Map</h3>

  <p>Random testing is inefficient. Professional testers build an <strong>endpoint inventory</strong>.</p>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
    <thead>
      <tr style="background: #222; color: #00ff41;">
        <th style="padding: 8px; border: 1px solid #333;">Method</th>
        <th style="padding: 8px; border: 1px solid #333;">Endpoint</th>
        <th style="padding: 8px; border: 1px solid #333;">Auth</th>
        <th style="padding: 8px; border: 1px solid #333;">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>POST</code></td>
        <td style="padding: 8px; border: 1px solid #333;"><code>/api/auth/login</code></td>
        <td style="padding: 8px; border: 1px solid #333;">No</td>
        <td style="padding: 8px; border: 1px solid #333;">Authenticate user</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>GET</code></td>
        <td style="padding: 8px; border: 1px solid #333;"><code>/api/users/me</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Yes</td>
        <td style="padding: 8px; border: 1px solid #333;">Current user</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>GET</code></td>
        <td style="padding: 8px; border: 1px solid #333;"><code>/api/users/:id</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Yes</td>
        <td style="padding: 8px; border: 1px solid #333;">User information</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>PATCH</code></td>
        <td style="padding: 8px; border: 1px solid #333;"><code>/api/users/:id</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Yes</td>
        <td style="padding: 8px; border: 1px solid #333;">Update user</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>DELETE</code></td>
        <td style="padding: 8px; border: 1px solid #333;"><code>/api/users/:id</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Admin</td>
        <td style="padding: 8px; border: 1px solid #333;">Delete account</td>
      </tr>
    </tbody>
  </table>

  <p>This map becomes the foundation of the assessment.</p>

  <h3 style="color: #ff0055;">5. Authentication vs Authorization</h3>

  <p>These two concepts are frequently confused.</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ffaa00; margin: 15px 0;">
    <code>
      <strong style="color: #00ff41;">Authentication</strong>
      = Who are you?
      <br><br>
      <strong style="color: #ff0055;">Authorization</strong>
      = What are you allowed to do?
    </code>
  </div>

  <p>A user can be successfully authenticated while still being unauthorized to access a particular resource.</p>

  <p>For example:</p>

  <pre><code>Authentication:
User #42 is logged in.

Authorization:
User #42 is allowed to access their own profile.

User #42 is NOT automatically allowed
to modify User #43's profile.</code></pre>

  <p>This distinction is at the center of many serious API security issues.</p>

  <h3 style="color: #ff0055;">6. How APIs Give Clients Access</h3>

  <p>APIs can use several authentication mechanisms.</p>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <thead>
      <tr style="background: #222; color: #00ff41;">
        <th style="padding: 8px; border: 1px solid #333;">Mechanism</th>
        <th style="padding: 8px; border: 1px solid #333;">Typical Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Session Cookie</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Traditional web applications</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>JWT</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Stateless authentication systems</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>OAuth 2.0</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Delegated authorization</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>API Key</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Service-to-service or developer APIs</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>mTLS</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">High-trust service communication</td>
      </tr>
    </tbody>
  </table>

  <h3 style="color: #ff0055;">7. Bearer Tokens</h3>

  <p>A common API pattern is the HTTP Authorization header.</p>

  <pre><code>GET /api/users/me HTTP/1.1
Host: api.example.com
Authorization: Bearer &lt;access-token&gt;</code></pre>

  <p>The server validates the token and determines which identity and permissions are associated with it.</p>

  <p>A secure implementation should validate more than simply checking whether a token exists.</p>

  <pre><code>Token Present
      ↓
Signature Valid?
      ↓
Issuer Valid?
      ↓
Audience Valid?
      ↓
Expiration Valid?
      ↓
User Exists?
      ↓
Permission Valid?
      ↓
Allow Request</code></pre>

  <p>Skipping one of these checks can create unexpected security gaps.</p>

  <h3 style="color: #ff0055;">8. Authorization Testing</h3>

  <p>Once a tester has two authorized test accounts, authorization controls can be evaluated safely.</p>

  <p>Imagine:</p>

  <pre><code>Account A → User ID 1001
Account B → User ID 1002</code></pre>

  <p>Account A should normally be prevented from accessing resources belonging to Account B unless the application explicitly permits it.</p>

  <p>The security question is therefore:</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
    <strong style="color: #ff0055;">
      Does the server check ownership and permissions,
      or does it trust the identifier supplied by the client?
    </strong>
  </div>

  <p>This class of weakness is commonly associated with <strong>Broken Object Level Authorization (BOLA)</strong>.</p>

  <h3 style="color: #ff0055;">9. The Dangerous Assumption</h3>

  <p>Consider this backend logic:</p>

  <pre><code>app.get('/api/users/:id', authenticate, async (req, res) => {

  const user = await db.user.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });

  return res.json(user);
});</code></pre>

  <p>The user is authenticated, but the code does not demonstrate that the requested resource belongs to the authenticated user.</p>

  <p>A safer design explicitly checks authorization:</p>

  <pre><code>app.get('/api/users/:id', authenticate, async (req, res) => {

  const requestedId = Number(req.params.id);

  if (requestedId !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({
      error: 'Forbidden'
    });
  }

  const user = await db.user.findUnique({
    where: {
      id: requestedId
    }
  });

  return res.json(user);
});</code></pre>

  <p>The important lesson is that <strong>authentication middleware does not automatically provide authorization</strong>.</p>

  <h3 style="color: #ff0055;">10. Testing HTTP Methods</h3>

  <p>An API may expose several methods for the same resource.</p>

  <pre><code>GET    /api/profile
POST   /api/profile
PATCH  /api/profile
DELETE /api/profile</code></pre>

  <p>A tester verifies whether each method is intentionally exposed and correctly protected.</p>

  <p>For example:</p>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <thead>
      <tr style="background: #222; color: #00ff41;">
        <th style="padding: 8px; border: 1px solid #333;">Endpoint</th>
        <th style="padding: 8px; border: 1px solid #333;">Expected Access</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>GET /profile</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Authenticated user</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>PATCH /profile</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Profile owner</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><code>DELETE /profile</code></td>
        <td style="padding: 8px; border: 1px solid #333;">Owner + additional controls</td>
      </tr>
    </tbody>
  </table>

  <h3 style="color: #ff0055;">11. Input Validation</h3>

  <p>Authentication and authorization are not the only concerns.</p>

  <p>Every API accepts input, and that input should be treated as untrusted.</p>

  <pre><code>POST /api/users

{
  "username": "wanheda",
  "email": "user@example.com",
  "role": "user"
}</code></pre>

  <p>The backend should define exactly which fields the client is allowed to control.</p>

  <p>For example, a client should not normally be able to assign itself administrative privileges simply by adding:</p>

  <pre><code>{
  "username": "wanheda",
  "role": "admin"
}</code></pre>

  <p>This type of problem is related to <strong>mass assignment</strong> and improper object binding.</p>

  <p>A safer implementation uses an explicit allowlist:</p>

  <pre><code>const allowedFields = {
  username: body.username,
  email: body.email
};</code></pre>

  <p>Security should be based on what the server explicitly permits, not on what the client happens to send.</p>

  <h3 style="color: #ff0055;">12. Rate Limiting</h3>

  <p>APIs frequently expose sensitive operations such as login, password reset, verification, and account recovery.</p>

  <p>These endpoints should have appropriate abuse protections.</p>

  <pre><code>Request
   ↓
Rate Limiter
   ↓
Authentication
   ↓
Validation
   ↓
Application Logic</code></pre>

  <p>Example policy:</p>

  <pre><code>Login:
5 failed attempts
→ temporary throttling

Password Reset:
Limited requests per account/IP

Public API:
Requests limited per client</code></pre>

  <p>Rate limiting should be designed around the application's threat model rather than blindly applying the same limit everywhere.</p>

  <h3 style="color: #ff0055;">13. API Keys Are Not User Authentication</h3>

  <p>API keys are useful, but they should not automatically be treated as proof of a human user's identity.</p>

  <pre><code>Authorization: ApiKey abc123...</code></pre>

  <p>An API key may identify an application, integration, or developer account.</p>

  <p>For sensitive user operations, additional authentication and authorization controls may be required.</p>

  <p>API keys should also be:</p>

  <ul>
    <li>Kept out of public repositories</li>
    <li>Rotated when compromised</li>
    <li>Scoped to the minimum required permissions</li>
    <li>Stored securely</li>
    <li>Monitored for suspicious usage</li>
  </ul>

  <h3 style="color: #ff0055;">14. Common API Security Weaknesses</h3>

  <p>A professional API assessment commonly evaluates several categories of weaknesses.</p>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <thead>
      <tr style="background: #222; color: #00ff41;">
        <th style="padding: 8px; border: 1px solid #333;">Category</th>
        <th style="padding: 8px; border: 1px solid #333;">Security Question</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Authentication</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Can unauthenticated users reach protected resources?</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Authorization</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Can users access resources they do not own?</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Validation</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Does the server validate all input?</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Rate Limiting</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Can sensitive endpoints be abused?</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Data Exposure</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Does the API return unnecessary sensitive information?</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Configuration</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Are debug endpoints or insecure settings exposed?</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Business Logic</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Can workflows be manipulated?</td>
      </tr>
    </tbody>
  </table>

  <h3 style="color: #ff0055;">15. Excessive Data Exposure</h3>

  <p>An API may technically enforce authorization correctly while still returning more information than the client needs.</p>

  <p>For example:</p>

  <pre><code>{
  "id": 42,
  "username": "wanheda",
  "email": "user@example.com",
  "role": "user",
  "internalFlags": "...",
  "accountMetadata": "...",
  "createdByAdmin": true
}</code></pre>

  <p>If the frontend only needs the username and profile picture, returning unnecessary internal fields increases the application's attack surface.</p>

  <p>A better API response exposes only what the client actually needs.</p>

  <h3 style="color: #ff0055;">16. Error Messages Can Reveal Architecture</h3>

  <p>Error responses are another useful area to inspect.</p>

  <p>A production API should avoid leaking unnecessary implementation details.</p>

  <p>Instead of returning:</p>

  <pre><code>{
  "error": "PrismaClientKnownRequestError:
  relation users_internal does not exist"
}</code></pre>

  <p>a production API should return a controlled response such as:</p>

  <pre><code>{
  "error": "Internal server error",
  "requestId": "req_7f92a"
}</code></pre>

  <p>Detailed diagnostics should remain in server-side logs rather than being exposed directly to clients.</p>

  <h3 style="color: #ff0055;">17. API Documentation Is Part of the Attack Surface</h3>

  <p>Many APIs use OpenAPI or Swagger documentation.</p>

  <p>A specification might describe:</p>

  <pre><code>GET /api/users/{id}

Parameters:
  id → integer

Responses:
  200 → User
  401 → Unauthorized
  403 → Forbidden
  404 → Not Found</code></pre>

  <p>Documentation is extremely valuable to developers and testers because it describes the intended API contract.</p>

  <p>However, documentation should not accidentally expose private administrative endpoints, internal services, credentials, or development infrastructure.</p>

  <h3 style="color: #ff0055;">18. Testing With Interception Proxies</h3>

  <p>During an authorized assessment, an interception proxy can help the tester understand and replay application traffic.</p>

  <p>A simplified workflow looks like:</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
    <code>
      Browser
      →
      Proxy
      →
      API
      →
      Backend
      <br><br>
      Backend
      →
      Proxy
      →
      Browser
    </code>
  </div>

  <p>Tools such as Burp Suite and OWASP ZAP are commonly used for this type of authorized testing.</p>

  <p>The goal is not simply to generate traffic. The tester is trying to understand:</p>

  <ul>
    <li>Which endpoint is being called?</li>
    <li>Which authentication mechanism is used?</li>
    <li>Which parameters are trusted?</li>
    <li>Which response fields are exposed?</li>
    <li>Which permissions are enforced?</li>
    <li>How does the application behave when requests are invalid?</li>
  </ul>

  <h3 style="color: #ff0055;">19. A Safe API Testing Methodology</h3>

  <p>A structured assessment can be organized into phases.</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ffaa00; margin: 15px 0;">
    <code>
      Phase 01 → Scope<br>
      Phase 02 → Discovery<br>
      Phase 03 → API Mapping<br>
      Phase 04 → Authentication Review<br>
      Phase 05 → Authorization Review<br>
      Phase 06 → Input Validation<br>
      Phase 07 → Business Logic<br>
      Phase 08 → Rate Limiting<br>
      Phase 09 → Error Handling<br>
      Phase 10 → Reporting
    </code>
  </div>

  <p>This approach prevents testers from becoming overly focused on a single vulnerability category.</p>

  <h3 style="color: #ff0055;">20. What a Good Finding Looks Like</h3>

  <p>A professional penetration test does not simply say:</p>

  <pre><code>"API is vulnerable."</code></pre>

  <p>A useful finding explains the issue clearly.</p>

  <pre><code>Title:
Broken Object Level Authorization

Severity:
High

Affected Endpoint:
GET /api/users/{id}

Description:
The API authenticates the requesting user but does
not verify that the requested object belongs to that user.

Impact:
An authenticated user may access another user's
authorized resources.

Evidence:
Controlled test accounts demonstrated that Account A
could request resources belonging to Account B.

Recommendation:
Perform server-side ownership and role authorization
checks before returning the resource.</code></pre>

  <p>The report should give developers enough information to understand and reproduce the issue safely within the authorized environment.</p>

  <h3 style="color: #ff0055;">21. Defensive Blueprint for API Developers</h3>

  <p>The best API security strategy is to assume that every request is potentially hostile.</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <thead>
      <tr style="background: #222; color: #00ff41;">
        <th style="text-align: left; padding: 8px; border: 1px solid #333;">Control</th>
        <th style="text-align: left; padding: 8px; border: 1px solid #333;">Implementation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Authentication</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Use well-tested authentication protocols and validate credentials correctly.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Authorization</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Enforce ownership and role checks on every protected resource.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Validation</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Validate type, format, length and allowed values server-side.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Least Privilege</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Give identities only the permissions they actually need.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Rate Limiting</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Protect authentication and resource-intensive endpoints.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Logging</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Record security-relevant events without exposing secrets.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Secrets</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Never hard-code API keys, credentials, or signing secrets.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Error Handling</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Return safe errors while keeping diagnostics server-side.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;"><strong>Monitoring</strong></td>
        <td style="padding: 8px; border: 1px solid #333;">Detect unusual authentication and API activity.</td>
      </tr>
    </tbody>
  </table>

  <div style="border: 1px dashed #00ff41; padding: 15px; margin-top: 20px;">
    <h4 style="margin-top: 0; color: #00ff41;">💡 Pro Tip: Never Trust the Frontend</h4>
    <p style="margin-bottom: 0;">A hidden button is not authorization. A disabled input is not validation. A JavaScript role check is not access control. Anything running in the browser can potentially be modified by the client. Real authorization must happen on the server, at the point where the protected resource is accessed.</p>
  </div>

  <h3 style="color: #ff0055;">Conclusion</h3>

  <p>API penetration testing is fundamentally an exercise in understanding <strong>trust boundaries</strong>.</p>

  <p>The tester asks where trust is established, what information is trusted, which identity is associated with the request, and whether the server actually verifies that the requested action is permitted.</p>

  <p>The most important mindset is simple:</p>

  <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
    <code>
      <strong style="color: #00ff41;">Never ask only:</strong>
      "Can I reach this endpoint?"
      <br><br>
      <strong style="color: #ff0055;">Also ask:</strong>
      "Should this identity be able to perform this action?"
    </code>
  </div>

  <p>A secure API does not depend on the client behaving correctly. It assumes that requests can be modified, parameters can be changed, and clients can be completely untrusted.</p>

  <p>That is why strong API security comes down to a few fundamentals: <strong>authenticate identities, authorize every sensitive action, validate every input, minimize exposed data, enforce least privilege, monitor suspicious behavior, and continuously test the implementation.</strong></p>

  <p>For a penetration tester, the objective is to prove where those controls fail. For a backend developer, the objective is to make sure they never fail in the first place.</p>
`
  },
  {
    id: '9x4p7m',
    num: '09',
    tag: 'Backend Security',
    title: 'The Hidden Risks of a Weak Backend',
    excerpt: 'A backend can look perfectly functional while quietly exposing an application to data leaks, account takeover, privilege escalation, insecure APIs, and complete system compromise.',
    date: 'Aug 2026',
    readTime: '16 min',
    content: `
    <p>A modern application can have a beautiful interface, smooth animations, responsive layouts, and an impressive user experience. But none of that matters if the backend behind it is poorly designed or insecure.</p>

    <p>The backend is where authentication, authorization, business logic, database operations, file processing, payments, API communication, and sensitive data handling usually happen.</p>

    <p>When the backend is weak, the consequences can go far beyond a simple bug.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
      <code>
        <strong style="color: #00ff41;">Weak Backend</strong>
        →
        <strong style="color: #ffaa00;">Weak Controls</strong>
        →
        <strong style="color: #ff0055;">Data Exposure</strong>
        →
        <strong style="color: #ff0055;">Account Abuse</strong>
        →
        <strong style="color: #ff0055;">System Impact</strong>
      </code>
    </div>

    <p>This article explores why backend security matters, what makes a backend weak, and how seemingly small implementation mistakes can become serious security problems.</p>

    <h3 style="color: #ff0055;">1. The Backend Is the Real Security Boundary</h3>

    <p>One of the most important concepts in web security is understanding that the frontend should never be considered trustworthy.</p>

    <p>HTML, CSS, and JavaScript execute on the user's device.</p>

    <p>That means a user can inspect the application, modify requests, disable JavaScript, change parameters, or communicate directly with the API.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        Browser
        →
        API
        →
        Backend
        →
        Database
      </code>
    </div>

    <p>The backend therefore has to assume that every incoming request may be manipulated.</p>

    <p>A secure application does not ask:</p>

    <pre><code>"Would a normal user send this request?"</code></pre>

    <p>It asks:</p>

    <pre><code>"Should this request be allowed regardless of what the client sends?"</code></pre>

    <h3 style="color: #ff0055;">2. What Makes a Backend Weak?</h3>

    <p>A weak backend is not necessarily one that crashes or produces obvious errors.</p>

    <p>Sometimes everything appears to work normally while the underlying security model is fundamentally broken.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Weakness</th>
          <th style="padding: 8px; border: 1px solid #333;">Potential Risk</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Broken Authorization</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Unauthorized access to resources</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Weak Authentication</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Account compromise</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Poor Input Validation</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Injection and logic problems</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Excessive Data Exposure</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Sensitive information leakage</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Hardcoded Secrets</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Credential compromise</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Weak Session Handling</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Session hijacking</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Missing Rate Limits</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Abuse and automated attacks</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Unsafe File Handling</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Malicious uploads and data exposure</td>
        </tr>
      </tbody>
    </table>

    <h3 style="color: #ff0055;">3. Broken Authentication</h3>

    <p>Authentication answers one fundamental question:</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <strong style="color: #00ff41;">Who are you?</strong>
    </div>

    <p>A weak authentication system may rely on predictable tokens, poor password handling, missing expiration, insecure recovery mechanisms, or incorrectly implemented login logic.</p>

    <p>For example, a backend should never store passwords directly:</p>

    <pre><code>{
  "email": "user@example.com",
  "password": "MyPassword123"
}</code></pre>

    <p>Instead, passwords should be processed using a modern password hashing algorithm designed for password storage.</p>

    <p>The database should contain a password hash rather than the original password.</p>

    <pre><code>{
  "email": "user@example.com",
  "passwordHash": "$argon2id$..."
}</code></pre>

    <p>If the database is compromised, properly hashed passwords are significantly harder to recover than plaintext credentials.</p>

    <h3 style="color: #ff0055;">4. Weak Password Recovery</h3>

    <p>Password reset functionality is often overlooked during development.</p>

    <p>A secure reset flow might look like:</p>

    <pre><code>
User requests reset
        ↓
Server generates random token
        ↓
Short expiration
        ↓
Token delivered through trusted channel
        ↓
User creates new password
        ↓
Token becomes invalid
        ↓
Existing sessions may be reviewed/revoked
    </code></pre>

    <p>A dangerous implementation could use predictable reset values or tokens that never expire.</p>

    <p>The password reset mechanism effectively becomes another authentication system, so it deserves the same security attention as the login endpoint.</p>

    <h3 style="color: #ff0055;">5. Authentication Does Not Mean Authorization</h3>

    <p>This is one of the most common backend security mistakes.</p>

    <p>Imagine a user successfully logs in.</p>

    <pre><code>
User ID: 42
Role: user
Authenticated: true
</code></pre>

    <p>The backend may correctly identify the user, but that does not mean the user should have access to every resource.</p>

    <p>For example:</p>

    <pre><code>
GET /api/admin/users
</code></pre>

    <p>Authentication answers:</p>

    <pre><code>
"Is this user logged in?"
</code></pre>

    <p>Authorization answers:</p>

    <pre><code>
"Is this user allowed to access the admin endpoint?"
</code></pre>

    <p>A secure backend must enforce both.</p>

    <h3 style="color: #ff0055;">6. Broken Access Control</h3>

    <p>Consider an API that returns user profiles:</p>

    <pre><code>
GET /api/users/:id
</code></pre>

    <p>A weak implementation might only check whether the requester is authenticated.</p>

    <pre><code>
if (!req.user) {
  return res.status(401).json({
    error: 'Unauthorized'
  });
}

return getUser(req.params.id);
</code></pre>

    <p>The problem is that the code verifies identity but not ownership.</p>

    <p>A stronger implementation verifies whether the requesting identity has permission to access the requested resource.</p>

    <pre><code>
if (
  req.user.id !== requestedUserId &&
  req.user.role !== 'admin'
) {
  return res.status(403).json({
    error: 'Forbidden'
  });
}
</code></pre>

    <p>This distinction can prevent entire classes of unauthorized data access.</p>

    <h3 style="color: #ff0055;">7. Trusting Client-Side Values</h3>

    <p>One of the biggest mistakes a backend developer can make is trusting values that come from the client.</p>

    <p>Imagine a frontend sends:</p>

    <pre><code>
{
  "username": "wanheda",
  "role": "admin"
}
</code></pre>

    <p>The backend should never assume that because the frontend normally sends <code>role: user</code>, nobody can change it.</p>

    <p>The browser belongs to the client.</p>

    <p>The client controls the request.</p>

    <p>Therefore:</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
      <strong style="color: #ff0055;">
        Never use frontend restrictions as backend security controls.
      </strong>
    </div>

    <h3 style="color: #ff0055;">8. Mass Assignment</h3>

    <p>Consider this backend code:</p>

    <pre><code>
await User.update({
  where: { id: userId },
  data: req.body
});
</code></pre>

    <p>This may look convenient, but it can be dangerous.</p>

    <p>The developer may only expect users to update:</p>

    <pre><code>
{
  "username": "newName",
  "bio": "Hello"
}
</code></pre>

    <p>But the backend potentially accepts every property provided by the client.</p>

    <p>A safer approach is to explicitly select allowed fields:</p>

    <pre><code>
const updateData = {
  username: req.body.username,
  bio: req.body.bio
};
</code></pre>

    <p>Security improves when the backend explicitly defines what the client is allowed to control.</p>

    <h3 style="color: #ff0055;">9. Database Security</h3>

    <p>The backend is often directly connected to the application's most valuable asset: the database.</p>

    <p>A weak database architecture can turn a small API vulnerability into a much larger incident.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ffaa00; margin: 15px 0;">
      <code>
        API Vulnerability
        →
        Database Access
        →
        Sensitive Data
        →
        Large-Scale Impact
      </code>
    </div>

    <p>Database security should include:</p>

    <ul>
      <li>Strong authentication</li>
      <li>Least-privilege database accounts</li>
      <li>Encrypted connections</li>
      <li>Secure secret management</li>
      <li>Parameterized queries or safe ORM usage</li>
      <li>Regular backups</li>
      <li>Monitoring and auditing</li>
    </ul>

    <h3 style="color: #ff0055;">10. SQL Injection</h3>

    <p>When user-controlled data is directly combined with SQL queries, attackers may be able to manipulate the query's meaning.</p>

    <p>Unsafe code conceptually looks like:</p>

    <pre><code>
query = "SELECT * FROM users WHERE email = '" + email + "'";
</code></pre>

    <p>The fundamental problem is mixing data with executable query syntax.</p>

    <p>Modern applications should use parameterized queries or properly designed database abstractions.</p>

    <pre><code>
SELECT *
FROM users
WHERE email = ?
</code></pre>

    <p>The database then treats the supplied value as data rather than query syntax.</p>

    <h3 style="color: #ff0055;">11. Sensitive Data Exposure</h3>

    <p>A backend may accidentally expose information that the frontend never needed.</p>

    <pre><code>
{
  "id": 42,
  "username": "wanheda",
  "email": "user@example.com",
  "role": "user",
  "internalNotes": "...",
  "lastLoginIp": "...",
  "passwordHash": "...",
  "securityFlags": "..."
}
</code></pre>

    <p>Even if the user is authorized to access their profile, returning unnecessary internal fields creates additional risk.</p>

    <p>A secure API should follow the principle of <strong>data minimization</strong>.</p>

    <p>Return what the client needs, not everything the database happens to contain.</p>

    <h3 style="color: #ff0055;">12. Hardcoded Secrets</h3>

    <p>Another common backend mistake is putting credentials directly into source code.</p>

    <pre><code>
const DB_PASSWORD = "super-secret-password";
const JWT_SECRET = "my-secret-key";
const API_KEY = "abc123...";
</code></pre>

    <p>Source code frequently ends up in Git repositories, backups, CI logs, container images, or developer machines.</p>

    <p>A better approach is to use environment variables or a dedicated secret-management system.</p>

    <pre><code>
const jwtSecret = process.env.JWT_SECRET;
</code></pre>

    <p>Secrets should also be rotated when exposure is suspected.</p>

    <h3 style="color: #ff0055;">13. Poor Session Management</h3>

    <p>After authentication, the application needs a secure way to maintain the user's authenticated state.</p>

    <p>Depending on the architecture, this could involve secure cookies, server-side sessions, or access and refresh tokens.</p>

    <p>A weak session implementation might suffer from:</p>

    <ul>
      <li>Very long-lived sessions</li>
      <li>Missing expiration</li>
      <li>Insecure cookie configuration</li>
      <li>Failure to revoke sessions</li>
      <li>Predictable session identifiers</li>
      <li>Improper token validation</li>
    </ul>

    <p>Session security becomes especially important when the application handles sensitive accounts.</p>

    <h3 style="color: #ff0055;">14. JWT Misconfiguration</h3>

    <p>JSON Web Tokens can be useful, but simply using JWT does not automatically make an authentication system secure.</p>

    <p>The backend should properly validate important token properties such as:</p>

    <pre><code>
Signature
Issuer
Audience
Expiration
Not-Before
Required Claims
</code></pre>

    <p>The server should also carefully control which algorithms and signing keys are accepted.</p>

    <p>Authentication libraries should be configured deliberately rather than relying on assumptions about their defaults.</p>

    <h3 style="color: #ff0055;">15. Missing Rate Limiting</h3>

    <p>Some endpoints are naturally more sensitive to automation than others.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Endpoint</th>
          <th style="padding: 8px; border: 1px solid #333;">Risk</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>/login</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Credential abuse</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>/password-reset</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Recovery abuse</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>/verify</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Automated verification attempts</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><code>/search</code></td>
          <td style="padding: 8px; border: 1px solid #333;">Resource exhaustion</td>
        </tr>
      </tbody>
    </table>

    <p>Rate limiting should be combined with monitoring and appropriate account protections.</p>

    <h3 style="color: #ff0055;">16. Unsafe File Uploads</h3>

    <p>File uploads introduce another security boundary.</p>

    <p>A backend should not blindly trust:</p>

    <pre><code>
filename
extension
MIME type
file size
file contents
</code></pre>

    <p>A secure upload pipeline can include:</p>

    <pre><code>
Upload
  ↓
Size Validation
  ↓
Type Validation
  ↓
Content Inspection
  ↓
Safe Storage
  ↓
Randomized Filename
  ↓
Controlled Access
</code></pre>

    <p>Uploaded files should ideally be stored separately from executable application code and served using appropriate security controls.</p>

    <h3 style="color: #ff0055;">17. Weak Error Handling</h3>

    <p>Backend errors can reveal useful information about the application's internal architecture.</p>

    <p>Development environments may produce errors such as:</p>

    <pre><code>
DatabaseError:
Connection refused at postgres://...
File:
/var/www/backend/src/controllers/user.ts

Stack trace:
...
</code></pre>

    <p>This information may be useful to developers but should not normally be exposed to public users.</p>

    <p>Production systems should return controlled error messages while keeping detailed diagnostics in protected server-side logs.</p>

    <h3 style="color: #ff0055;">18. Debug Mode in Production</h3>

    <p>Debugging features are useful during development.</p>

    <p>They can become dangerous when accidentally enabled in production.</p>

    <p>Debug configurations may expose:</p>

    <ul>
      <li>Stack traces</li>
      <li>Environment information</li>
      <li>Internal routes</li>
      <li>Database errors</li>
      <li>Framework information</li>
      <li>Configuration details</li>
    </ul>

    <p>Production deployments should use hardened configuration and explicitly disable development-only functionality.</p>

    <h3 style="color: #ff0055;">19. The Risk of Overpowered Service Accounts</h3>

    <p>Not every component needs full access to everything.</p>

    <p>Imagine an API server connecting to a database using an account with permissions to:</p>

    <pre><code>
READ
WRITE
DELETE
ALTER
CREATE
DROP
</code></pre>

    <p>If the application is compromised, the attacker may inherit the privileges of that database account.</p>

    <p>Least privilege reduces the blast radius.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <strong style="color: #00ff41;">
        Give every component only the permissions it actually needs.
      </strong>
    </div>

    <h3 style="color: #ff0055;">20. Dependency Risk</h3>

    <p>Backend applications rarely consist entirely of custom code.</p>

    <p>They depend on frameworks, libraries, database drivers, authentication packages, logging systems, and other third-party components.</p>

    <pre><code>
Application
    ↓
Framework
    ↓
Authentication Library
    ↓
Database Driver
    ↓
Database
</code></pre>

    <p>A vulnerability in a dependency can potentially affect the entire application.</p>

    <p>That is why dependency management should include:</p>

    <ul>
      <li>Regular updates</li>
      <li>Dependency auditing</li>
      <li>Lockfiles</li>
      <li>Removing unused packages</li>
      <li>Monitoring security advisories</li>
    </ul>

    <h3 style="color: #ff0055;">21. Logging Is Not Optional</h3>

    <p>A secure backend needs visibility.</p>

    <p>Important security events may include:</p>

    <pre><code>
Login success
Login failure
Password reset
Permission changes
Token refresh
Administrative actions
Suspicious request patterns
Account lockouts
</code></pre>

    <p>However, logging itself must be designed carefully.</p>

    <p>Never casually log sensitive information such as:</p>

    <pre><code>
Passwords
Access tokens
Refresh tokens
API secrets
Private keys
</code></pre>

    <p>Logs should help defenders investigate incidents without becoming another source of sensitive data exposure.</p>

    <h3 style="color: #ff0055;">22. What Happens When the Backend Fails?</h3>

    <p>A weak backend can produce several levels of impact.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      <thead>
        <tr style="background: #222; color: #00ff41;">
          <th style="padding: 8px; border: 1px solid #333;">Level</th>
          <th style="padding: 8px; border: 1px solid #333;">Possible Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Low</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Information disclosure</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Medium</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Unauthorized account actions</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>High</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Sensitive data exposure</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #333;"><strong>Critical</strong></td>
          <td style="padding: 8px; border: 1px solid #333;">Large-scale compromise or infrastructure impact</td>
        </tr>
      </tbody>
    </table>

    <p>The final severity depends on the actual vulnerability, affected assets, required privileges, exploitability, and business impact.</p>

    <h3 style="color: #ff0055;">23. Defense-in-Depth</h3>

    <p>A strong backend should not rely on a single security mechanism.</p>

    <p>Instead, multiple independent controls should work together.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        HTTPS
        ↓
        Authentication
        ↓
        Authorization
        ↓
        Input Validation
        ↓
        Rate Limiting
        ↓
        Business Logic
        ↓
        Database Permissions
        ↓
        Logging & Monitoring
      </code>
    </div>

    <p>If one control fails, another layer can potentially limit the damage.</p>

    <h3 style="color: #ff0055;">24. Security Starts With Architecture</h3>

    <p>Security should not be something added after the backend is finished.</p>

    <p>It should influence architectural decisions from the beginning.</p>

    <p>Before writing an endpoint, developers should ask:</p>

    <ul>
      <li>Who can call this endpoint?</li>
      <li>What data does it expose?</li>
      <li>Which fields can the client modify?</li>
      <li>What permissions are required?</li>
      <li>What happens if the request is manipulated?</li>
      <li>What happens if the database is unavailable?</li>
      <li>What information should be logged?</li>
      <li>How will suspicious activity be detected?</li>
    </ul>

    <p>Security becomes much easier when these questions are answered before vulnerabilities become production incidents.</p>

    <h3 style="color: #ff0055;">25. A Secure Backend Checklist</h3>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #00ff41; margin: 15px 0;">
      <code>
        [✓] HTTPS enforced<br>
        [✓] Passwords securely hashed<br>
        [✓] Authentication properly implemented<br>
        [✓] Authorization enforced server-side<br>
        [✓] Input validated<br>
        [✓] Database queries parameterized<br>
        [✓] Secrets stored securely<br>
        [✓] Sensitive data minimized<br>
        [✓] Rate limiting implemented<br>
        [✓] Sessions/tokens expire appropriately<br>
        [✓] File uploads restricted<br>
        [✓] Production debugging disabled<br>
        [✓] Dependencies monitored<br>
        [✓] Security events logged<br>
        [✓] Least privilege enforced<br>
        [✓] Errors safely handled<br>
        [✓] Security testing performed
      </code>
    </div>

    <h3 style="color: #ff0055;">Conclusion</h3>

    <p>A backend can be technically functional and still be dangerously insecure.</p>

    <p>The biggest backend vulnerabilities often come from simple assumptions:</p>

    <pre><code>
"The frontend won't send that."

"The user won't change this value."

"They already authenticated."

"Nobody knows this endpoint."

"This API key is only in the code."

"The database account needs full access."

"Nobody will see this error."

"It's only a development endpoint."
</code></pre>

    <p>Security engineering means designing the system under the assumption that these assumptions are wrong.</p>

    <div style="background: #1a1a1a; padding: 15px; border-left: 4px solid #ff0055; margin: 15px 0;">
      <strong style="color: #ff0055;">
        Never trust the client. Never assume authorization. Never expose what you do not need to expose.
      </strong>
    </div>

    <p>The backend is the part of the application responsible for protecting the data, enforcing the rules, and maintaining trust.</p>

    <p>When it is weak, every frontend feature built on top of it inherits that weakness.</p>

    <p>When it is designed correctly, tested continuously, and protected with multiple layers of security, the backend becomes something much more valuable than a collection of API routes.</p>

    <p>It becomes the security foundation of the entire application.</p>
  `
  },
];

const CONTACT_DATA = [
  { icon: '⚡', label: 'GitHub', value: 'https://github.com/ItsWanheda', href: 'https://github.com/ItsWanheda', copyValue: 'https://github.com/ItsWanheda' },
  { icon: '📧', label: 'Email', value: 'wanheda.work@gmail.com', href: 'mailto:wanheda.work@gmail.com', copyValue: 'wanheda.work@gmail.com' },
  { icon: '🎮', label: 'Discord', value: 'ItsWanheda', href: null, copyValue: 'ItsWanheda' },
];


/* ============================================================
   PWA / SERVICE WORKER
   ============================================================ */

function initPWA() {

  if (!('serviceWorker' in navigator)) {
    console.warn('[PWA] Service Workers are not supported.');
    return;
  }

  window.addEventListener('load', async () => {

    try {

      const registration =
        await navigator.serviceWorker.register('/sw.js');

      console.log(
        '[PWA] Service Worker registered:',
        registration.scope
      );


      /* --------------------------------------------------------
         Check for updates
         -------------------------------------------------------- */

      registration.addEventListener(
        'updatefound',
        () => {

          const newWorker =
            registration.installing;

          if (!newWorker) {
            return;
          }

          console.log(
            '[PWA] New Service Worker found.'
          );


          newWorker.addEventListener(
            'statechange',
            () => {

              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {

                console.log(
                  '[PWA] New version available. Activating...'
                );

                newWorker.postMessage({
                  type: 'SKIP_WAITING'
                });

              }

            }
          );

        }
      );

    } catch (error) {

      console.error(
        '[PWA] Service Worker registration failed:',
        error
      );

    }

  });


  /* ----------------------------------------------------------
     Reload when the new Service Worker takes control
     ---------------------------------------------------------- */

  let refreshing = false;

  navigator.serviceWorker.addEventListener(
    'controllerchange',
    () => {

      if (refreshing) {
        return;
      }

      refreshing = true;

      console.log(
        '[PWA] New Service Worker activated. Reloading...'
      );

      window.location.reload();

    }
  );

}

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
   BACK TO TOP
   ============================================================ */

function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');

  if (!backToTop) {
    console.warn('[Back To Top] Button not found.');
    return;
  }

  const toggleBackToTop = () => {
    const shouldShow = window.scrollY > 400;

    backToTop.classList.toggle('show', shouldShow);
  };

  window.addEventListener('scroll', toggleBackToTop, {
    passive: true
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Set correct state immediately on page load
  toggleBackToTop();
}

/* ============================================================
   DEVIL CURSOR
   ============================================================ */

function initDevilCursor() {

  const cursor =
    document.getElementById('devil-cursor');

  if (!cursor) return;

  if (
    window.matchMedia(
      '(pointer: coarse)'
    ).matches
  ) {
    return;
  }

  const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    currentX: window.innerWidth / 2,
    currentY: window.innerHeight / 2
  };

  let animationId;


  /* --------------------------------------------------------
     MOVE
     -------------------------------------------------------- */

  const onMouseMove = event => {

    mouse.x = event.clientX;
    mouse.y = event.clientY;

    cursor.style.opacity = '1';
  };


  /* --------------------------------------------------------
     HOVER
     -------------------------------------------------------- */

  const onMouseOver = event => {

    const target =
      event.target.closest(
        'a, button, input, textarea, select, [role="button"]'
      );

    if (target) {
      document.body.classList.add(
        'cursor-hover'
      );
    }
  };


  const onMouseOut = event => {

    const target =
      event.target.closest(
        'a, button, input, textarea, select, [role="button"]'
      );

    if (
      target &&
      !target.contains(
        event.relatedTarget
      )
    ) {
      document.body.classList.remove(
        'cursor-hover'
      );
    }
  };


  /* --------------------------------------------------------
     CLICK
     -------------------------------------------------------- */

  const onMouseDown = () => {

    document.body.classList.add(
      'cursor-click'
    );
  };


  const onMouseUp = () => {

    document.body.classList.remove(
      'cursor-click'
    );
  };


  /* --------------------------------------------------------
     SMOOTH MOVEMENT
     -------------------------------------------------------- */

  function animate() {

    animationId =
      requestAnimationFrame(
        animate
      );

    mouse.currentX +=
      (
        mouse.x -
        mouse.currentX
      ) * 0.2;

    mouse.currentY +=
      (
        mouse.y -
        mouse.currentY
      ) * 0.2;

    cursor.style.transform =
      `translate3d(
                ${mouse.currentX}px,
                ${mouse.currentY}px,
                0
            ) translate3d(-50%, -50%, 0)`;
  }


  /* --------------------------------------------------------
     EVENTS
     -------------------------------------------------------- */

  window.addEventListener(
    'mousemove',
    onMouseMove,
    { passive: true }
  );

  document.addEventListener(
    'mouseover',
    onMouseOver
  );

  document.addEventListener(
    'mouseout',
    onMouseOut
  );

  window.addEventListener(
    'mousedown',
    onMouseDown
  );

  window.addEventListener(
    'mouseup',
    onMouseUp
  );


  animate();


  /* --------------------------------------------------------
     CLEANUP
     -------------------------------------------------------- */

  window.addEventListener(
    'beforeunload',
    () => {

      cancelAnimationFrame(
        animationId
      );

    },
    { once: true }
  );
}

/* ============================================================
   MINIMAL CLICK EFFECT
   ============================================================ */

function initClickParticles() {

  document.addEventListener('click', (event) => {

    /* Ignore clicks on the scrollbar */
    if (
      event.clientX >= document.documentElement.clientWidth ||
      event.clientY >= document.documentElement.clientHeight
    ) {
      return;
    }

    /* --------------------------------------------------------
       Ripple
       -------------------------------------------------------- */

    const ripple = document.createElement('span');

    ripple.className = 'click-ripple';

    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;

    document.body.appendChild(ripple);

    ripple.addEventListener(
      'animationend',
      () => ripple.remove(),
      { once: true }
    );


    /* --------------------------------------------------------
       Small particle burst
       -------------------------------------------------------- */

    const particleCount = 6;

    for (let i = 0; i < particleCount; i++) {

      const particle =
        document.createElement('span');

      particle.className = 'click-particle';

      const angle =
        (Math.PI * 2 * i) / particleCount;

      const distance =
        18 + Math.random() * 16;

      particle.style.left =
        `${event.clientX}px`;

      particle.style.top =
        `${event.clientY}px`;

      particle.style.setProperty(
        '--x',
        `${Math.cos(angle) * distance}px`
      );

      particle.style.setProperty(
        '--y',
        `${Math.sin(angle) * distance}px`
      );

      document.body.appendChild(particle);

      particle.addEventListener(
        'animationend',
        () => particle.remove(),
        { once: true }
      );
    }

  });

}

initClickParticles();

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
   THEME TOGGLE
   ============================================================ */

function initTheme() {

  const btn =
    document.getElementById('theme-toggle');

  if (!btn) return;


  /* ----------------------------------------------------------
     LOAD SAVED THEME
     ---------------------------------------------------------- */

  const savedTheme =
    localStorage.getItem('theme');

  const prefersLight =
    window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches;

  const isLight =
    savedTheme === 'light' ||
    (!savedTheme && prefersLight);


  applyTheme(isLight, false);


  /* ----------------------------------------------------------
     TOGGLE
     ---------------------------------------------------------- */

  btn.addEventListener('click', () => {

    const currentlyLight =
      document.body.classList.contains(
        'light-theme'
      );

    applyTheme(
      !currentlyLight,
      true
    );

  });


  /* ----------------------------------------------------------
     APPLY THEME
     ---------------------------------------------------------- */

  function applyTheme(isLight, animate) {

    if (animate) {
      document.body.classList.add(
        'theme-changing'
      );
    }

    document.body.classList.toggle(
      'light-theme',
      isLight
    );

    localStorage.setItem(
      'theme',
      isLight ? 'light' : 'dark'
    );


    /* Accessibility */

    btn.setAttribute(
      'aria-pressed',
      String(isLight)
    );

    btn.setAttribute(
      'aria-label',
      isLight
        ? 'Switch to dark theme'
        : 'Switch to light theme'
    );


    if (animate) {
      requestAnimationFrame(() => {
        document.body.classList.remove(
          'theme-changing'
        );
      });
    }

  }
}


/* ============================================================
   EXTERNAL THEME CONTROL
   ============================================================ */

function toggleTheme() {

  document
    .getElementById('theme-toggle')
    ?.click();

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

window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (window.scrollY / h) * 100;
  document.getElementById('scroll-progress').style.width = pct + '%';
}, { passive: true });

const btt = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  btt.classList.toggle('show', window.scrollY > 500);
}, { passive: true });
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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

// ============================================================
//  SKILLS — render + category filter + click-to-expand
// ============================================================

const grid = document.getElementById('skills-grid');
const catContainer = document.getElementById('skill-cats');

let activeCategory = 'all';

// ---------- Render ----------
function renderSkills() {
  const list = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.cat === activeCategory);

  grid.innerHTML = list.map(s => `
    <article class="skill-card"
             data-name="${s.name}"
             style="--level: ${s.level}%"
             tabindex="0"
             role="button"
             aria-haspopup="dialog">
      <div class="skill-icon" aria-hidden="true">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level"><div class="skill-level-fill"></div></div>
    </article>
  `).join('');

  requestAnimationFrame(() => {
    [...grid.children].forEach((card, i) => {
      setTimeout(() => card.classList.add('animated'), 60 + i * 25);
    });
  });
}

// ---------- Skill Modal ----------
const skillModalOverlay = document.getElementById('skill-modal-overlay');
let lastSkillFocused = null;

function openSkillModal(name) {
  const skill = SKILLS_DATA.find(s => s.name === name);
  if (!skill) return;

  document.getElementById('skill-modal-icon').textContent = skill.icon;
  document.getElementById('skill-modal-name').textContent = skill.name;
  document.getElementById('skill-modal-badge').textContent = skill.cat;
  document.getElementById('skill-modal-desc').textContent = skill.desc || '';
  document.getElementById('skill-modal-pct').textContent = skill.level + '%';

  const fill = document.getElementById('skill-modal-level-fill');
  fill.style.width = '0%';

  lastSkillFocused = document.activeElement;
  skillModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // animate the bar in after the modal is visible
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { fill.style.width = skill.level + '%'; });
  });

  skillModalOverlay.querySelector('.skill-modal-close').focus();
}

function closeSkillModal() {
  skillModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastSkillFocused && typeof lastSkillFocused.focus === 'function') {
    lastSkillFocused.focus();
  }
}

skillModalOverlay.querySelector('.skill-modal-close')
  .addEventListener('click', closeSkillModal);

skillModalOverlay.addEventListener('click', e => {
  if (e.target === skillModalOverlay) closeSkillModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && skillModalOverlay.classList.contains('open')) {
    closeSkillModal();
  }
});

// ---------- Events ----------
grid.addEventListener('click', e => {
  const card = e.target.closest('.skill-card');
  if (!card) return;
  openSkillModal(card.dataset.name);
});

grid.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.skill-card');
  if (!card) return;
  e.preventDefault();
  openSkillModal(card.dataset.name);
});

// Category filter buttons
catContainer.addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;

  catContainer.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  activeCategory = btn.dataset.cat;
  renderSkills();
});

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
   LEARNING DAYS COUNTER (Dynamic)
============================================================ */
const LEARNING_START_DATE = new Date('2022-01-12');

function calculateLearningDays() {
  const today = new Date();
  // Normalize to midnight to avoid hour/timezone drift
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startMidnight = new Date(
    LEARNING_START_DATE.getFullYear(),
    LEARNING_START_DATE.getMonth(),
    LEARNING_START_DATE.getDate()
  );

  const diffMs = todayMidnight - startMidnight;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return Math.max(0, diffDays);
}

function updateLearningDaysStat() {
  const days = calculateLearningDays();
  const statCards = document.querySelectorAll('.stat-card');

  statCards.forEach(card => {
    const label = card.querySelector('.stat-label');
    if (label && label.textContent.trim() === 'Days Learning') {
      const numberEl = card.querySelector('.stat-number');
      if (numberEl) {
        numberEl.dataset.target = days;
        numberEl.textContent = days;
      }
    }
  });

  setTimeout(updateLearningDaysStat, 60 * 60 * 1000);
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

const GITHUB_USERNAME = 'ItsWanheda';
const GITHUB_API = '/api/github';


/* ============================================================
   GITHUB API REQUEST
============================================================ */

async function githubRequest() {

  const response = await fetch(
    GITHUB_API,
    {
      method: 'GET',

      headers: {
        Accept: 'application/json'
      },

      cache: 'no-store'
    }
  );


  if (!response.ok) {

    const error =
      await response.text();

    throw new Error(
      `GitHub API ${response.status}: ${error}`
    );

  }


  return response.json();

}


/* ============================================================
   FORMAT NUMBERS
============================================================ */

function formatGithubNumber(value) {

  if (typeof value !== 'number') {
    return '0';
  }


  if (value >= 1000000) {

    return `${(
      value / 1000000
    ).toFixed(1)}M`;

  }


  if (value >= 1000) {

    return `${(
      value / 1000
    ).toFixed(1)}K`;

  }


  return value.toString();

}


/* ============================================================
   ESCAPE HTML
============================================================ */

function escapeGithubHTML(value = '') {

  return String(value)
    .replace(
      /&/g,
      '&amp;'
    )
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    );

}


/* ============================================================
   RENDER PROFILE
============================================================ */

function renderGithubProfile(profile) {

  const avatar =
    document.getElementById(
      'gh-avatar'
    );

  const username =
    document.getElementById(
      'gh-username'
    );

  const bio =
    document.getElementById(
      'gh-bio'
    );

  const reposCount =
    document.getElementById(
      'gh-repos-count'
    );

  const followersCount =
    document.getElementById(
      'gh-followers-count'
    );

  const followingCount =
    document.getElementById(
      'gh-following-count'
    );


  /* ==========================================================
     AVATAR
  ========================================================== */

  if (avatar) {

    avatar.src =
      profile.avatar_url;

    avatar.alt =
      `${profile.login} GitHub avatar`;

  }


  /* ==========================================================
     USERNAME
  ========================================================== */

  if (username) {

    username.textContent =
      `@${profile.login}`;

  }


  /* ==========================================================
     BIO
  ========================================================== */

  if (bio) {

    bio.textContent =
      profile.bio ||
      'Cybersecurity enthusiast & backend developer.';

  }


  /* ==========================================================
     REPOSITORIES
  ========================================================== */

  if (reposCount) {

    reposCount.textContent =
      formatGithubNumber(
        profile.public_repos
      );

  }


  /* ==========================================================
     FOLLOWERS
  ========================================================== */

  if (followersCount) {

    followersCount.textContent =
      formatGithubNumber(
        profile.followers
      );

  }


  /* ==========================================================
     FOLLOWING
  ========================================================== */

  if (followingCount) {

    followingCount.textContent =
      formatGithubNumber(
        profile.following
      );

  }

}


/* ============================================================
   RENDER REPOSITORIES
============================================================ */

function renderGithubRepositories(
  repositories
) {

  const reposGrid =
    document.getElementById(
      'repos-grid'
    );


  if (!reposGrid) {

    console.warn(
      '[GitHub] #repos-grid was not found.'
    );

    return;

  }


  if (!repositories.length) {

    reposGrid.innerHTML = `
      <div class="github-empty">
        No public repositories found.
      </div>
    `;

    return;

  }


  reposGrid.innerHTML =
    repositories
      .map(repo => {

        const language =
          repo.language ||
          'Other';

        const description =
          repo.description ||
          'No description available.';


        return `
          <article class="repo-card">

            <div class="repo-card-header">

              <div class="repo-icon">
                <i class="fa-brands fa-github"></i>
              </div>

              <div class="repo-title-wrapper">

                <h3 class="repo-name">
                  ${escapeGithubHTML(
          repo.name
        )}
                </h3>

                <span class="repo-visibility">
                  ${repo.archived
            ? 'Archived'
            : 'Public'
          }
                </span>

              </div>

            </div>


            <p class="repo-description">
              ${escapeGithubHTML(
            description
          )}
            </p>


            <div class="repo-meta">

              <span class="repo-language">
                ${escapeGithubHTML(
            language
          )}
              </span>

              <span class="repo-stars">
                ★ ${formatGithubNumber(
            Number(
              repo.stargazers_count ||
              0
            )
          )
          }
              </span>

              <span class="repo-forks">
                ⑂ ${formatGithubNumber(
            Number(
              repo.forks_count ||
              0
            )
          )
          }
              </span>

            </div>


            <a
              href="${escapeGithubHTML(
            repo.html_url
          )}"
              target="_blank"
              rel="noopener noreferrer"
              class="repo-link"
            >
              View Repository →
            </a>

          </article>
        `;

      })
      .join('');

}


/* ============================================================
   MAIN GITHUB RENDER
============================================================ */

export async function renderGithub() {

  const reposGrid =
    document.getElementById(
      'repos-grid'
    );


  if (!reposGrid) {

    console.warn(
      '[GitHub] #repos-grid does not exist.'
    );

    return;

  }


  /* ==========================================================
     LOADING
  ========================================================== */

  reposGrid.innerHTML = `
    <div class="github-loading">
      Loading GitHub repositories...
    </div>
  `;


  try {

    console.log(
      `[GitHub] Loading @${GITHUB_USERNAME}...`
    );


    /* ========================================================
       SINGLE REQUEST
    ======================================================== */

    const data =
      await githubRequest();


    const profile =
      data.profile;

    const repositories =
      Array.isArray(
        data.repositories
      )
        ? data.repositories
        : [];

    const stats =
      data.stats || {};


    /* ========================================================
       PROFILE
    ======================================================== */

    renderGithubProfile(
      profile
    );


    /* ========================================================
       REPOSITORIES
    ======================================================== */

    renderGithubRepositories(
      repositories
    );


    /* ========================================================
       STATS
    ======================================================== */

    const totalStars =
      Number(
        stats.totalStars || 0
      );

    const totalForks =
      Number(
        stats.totalForks || 0
      );

    const totalCommits =
      Number(
        stats.totalCommits || 0
      );


    /* ========================================================
       COMMIT COUNTER
    ======================================================== */

    const commitsCount =
      document.getElementById(
        'gh-commits-count'
      );


    if (commitsCount) {

      commitsCount.textContent =
        formatGithubNumber(
          totalCommits
        );

    }


    /* ========================================================
       DEBUG
    ======================================================== */

    console.log(
      '[GitHub] Profile loaded:',
      profile
    );

    console.log(
      '[GitHub] Repositories:',
      repositories.length
    );

    console.log(
      '[GitHub] Total stars:',
      totalStars
    );

    console.log(
      '[GitHub] Total forks:',
      totalForks
    );

    console.log(
      '[GitHub] Total commits:',
      totalCommits
    );


  } catch (error) {

    console.error(
      '[GitHub] Failed to load data:',
      error
    );


    reposGrid.innerHTML = `
      <div class="github-error">

        <strong>
          GitHub data unavailable
        </strong>

        <span>
          Could not load GitHub information right now.
        </span>

        <a
          href="https://github.com/${GITHUB_USERNAME}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open GitHub Profile →
        </a>

      </div>
    `;

  }

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

  if (!grid) return;

  grid.innerHTML = BLOG_DATA.map((b, i) => `
    <div
      class="blog-card reveal reveal-d${Math.min(i % 3 + 1, 5)}"
      data-blog-slug="${b.slug}"
    >

      <div class="blog-header">

        <div class="blog-number">
          ${b.num}
        </div>

        <div class="blog-tag">
          <span class="tag">${b.tag}</span>
        </div>

        <div class="blog-title">
          ${b.title}
        </div>

      </div>

      <div class="blog-body">

        <div class="blog-excerpt">
          ${b.excerpt}
        </div>

        <div class="blog-meta">

          <span class="blog-date">
            ${b.date} · ${b.readTime}
          </span>

          <a
            href="#blog-${b.slug}"
            class="blog-read"
            data-index="${i}"
            aria-label="Read ${b.title}"
          >
            Read more
          </a>

        </div>

      </div>

    </div>
  `).join('');


  /* ==========================================================
     READ MORE
  ========================================================== */

  document.querySelectorAll('.blog-read').forEach(link => {

    link.addEventListener('click', (e) => {

      e.preventDefault();
      e.stopPropagation();

      const index = Number(
        link.getAttribute('data-index')
      );

      openBlogModal(index);

    });

  });


  /* ==========================================================
     ENTIRE CARD
  ========================================================== */

  document.querySelectorAll('.blog-card').forEach(card => {

    card.addEventListener('click', (e) => {

      if (e.target.closest('.blog-read')) {
        return;
      }

      const link = card.querySelector('.blog-read');

      if (!link) return;

      const index = Number(
        link.getAttribute('data-index')
      );

      openBlogModal(index);

    });

  });


  /* ==========================================================
     INTERSECTION OBSERVER
  ========================================================== */

  const obs = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.1
    }
  );


  grid
    .querySelectorAll('.blog-card')
    .forEach(card => obs.observe(card));
}


/* ============================================================
   BLOG MODAL
============================================================ */

function openBlogModal(index, updateUrl = true) {

  const blog = BLOG_DATA[index];

  if (!blog) return;


  /* ==========================================================
     MODAL ELEMENTS
  ========================================================== */

  const modal = document.getElementById('blog-modal');
  const modalNumber = document.getElementById('modal-number');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  if (
    !modal ||
    !modalNumber ||
    !modalTag ||
    !modalTitle ||
    !body
  ) {
    return;
  }


  /* ==========================================================
     MODAL HEADER
  ========================================================== */

  modalNumber.textContent = blog.num;
  modalTag.textContent = blog.tag;
  modalTitle.textContent = blog.title;


  /* ==========================================================
     MODAL CONTENT
  ========================================================== */

  body.innerHTML = `
    <div class="blog-progress-bar">
      <div
        class="blog-progress-fill"
        id="blog-progress"
      ></div>
    </div>

    ${blog.content}
  `;


  /* ==========================================================
     OPEN MODAL
  ========================================================== */

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';


  /* ==========================================================
     UPDATE URL
  ========================================================== */

  if (updateUrl) {

    const newUrl =
      `${window.location.pathname}` +
      `${window.location.search}` +
      `#blog-${blog.slug}`;

    history.pushState(
      {
        blog: blog.slug
      },
      '',
      newUrl
    );

  }


  /* ==========================================================
     RESET MODAL SCROLL
  ========================================================== */

  body.scrollTop = 0;


  /* ==========================================================
     BLOG SCROLL PROGRESS
  ========================================================== */

  const progressBar =
    document.getElementById('blog-progress');

  if (progressBar) {

    body.onscroll = () => {

      const maxScroll =
        body.scrollHeight - body.clientHeight;

      const percentage =
        maxScroll > 0
          ? (body.scrollTop / maxScroll) * 100
          : 0;

      progressBar.style.width =
        `${Math.min(100, Math.max(0, percentage))}%`;

    };

  }

}


/* ============================================================
   CLOSE BLOG MODAL
============================================================ */

function closeBlogModal(updateUrl = true) {

  const modal =
    document.getElementById('blog-modal');

  if (!modal) return;


  /* ==========================================================
     CLOSE MODAL
  ========================================================== */

  modal.classList.remove('active');

  document.body.style.overflow = '';


  /* ==========================================================
     REMOVE SCROLL HANDLER
  ========================================================== */

  const body =
    document.getElementById('modal-body');

  if (body) {
    body.onscroll = null;
  }


  /* ==========================================================
     REMOVE BLOG HASH
  ========================================================== */

  if (
    updateUrl &&
    window.location.hash.startsWith('#blog-')
  ) {

    const cleanUrl =
      window.location.pathname +
      window.location.search;

    history.pushState(
      {},
      '',
      cleanUrl
    );

  }

}


/* ============================================================
   OPEN BLOG FROM URL HASH
============================================================ */

function openBlogFromHash() {

  const hash =
    window.location.hash;

  if (!hash.startsWith('#blog-')) {
    return;
  }


  const slug =
    decodeURIComponent(
      hash.substring('#blog-'.length)
    );


  const index =
    BLOG_DATA.findIndex(
      blog => blog.slug === slug
    );


  if (index === -1) {
    return;
  }


  openBlogModal(
    index,
    false
  );

}


/* ============================================================
   HASH CHANGE
============================================================ */

window.addEventListener(
  'hashchange',
  () => {
    openBlogFromHash();
  }
);


/* ============================================================
   BROWSER BACK / FORWARD
============================================================ */

window.addEventListener(
  'popstate',
  () => {

    if (
      window.location.hash.startsWith('#blog-')
    ) {

      openBlogFromHash();

    } else {

      closeBlogModal(false);

    }

  }
);


/* ============================================================
   INITIALIZE BLOG MODAL
============================================================ */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    /* ========================================================
       CLOSE BUTTON
    ======================================================== */

    const modal =
      document.getElementById('blog-modal');

    const closeBtn =
      modal?.querySelector('.modal-close');


    if (closeBtn) {

      closeBtn.addEventListener(
        'click',
        () => {
          closeBlogModal();
        }
      );

    }


    /* ========================================================
       CLICK OUTSIDE MODAL
    ======================================================== */

    if (modal) {

      modal.addEventListener(
        'click',
        (e) => {

          if (e.target === modal) {
            closeBlogModal();
          }

        }
      );

    }


    /* ========================================================
       ESCAPE KEY
    ======================================================== */

    document.addEventListener(
      'keydown',
      (e) => {

        if (e.key === 'Escape') {
          closeBlogModal();
        }

      }
    );


    /* ========================================================
       OPEN BLOG FROM DIRECT URL
    ======================================================== */

    openBlogFromHash();

  }
);

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
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = form?.querySelector('.form-submit');
  const emailInput = form?.querySelector('input[name="_replyto"]');

  if (!form || !status || !submitBtn || !emailInput) return;

  const FORM_ENDPOINT = 'https://formspree.io/f/xeebvwpq';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    status.textContent = '';
    status.className = 'form-status';

    /* =========================
       Gmail Validation
       ========================= */

    const email = emailInput.value.trim();

    const gmailRegex =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

    if (!gmailRegex.test(email)) {
      status.textContent =
        '✗ Please enter a valid Gmail address.';

      status.classList.add('error');

      emailInput.focus();
      return;
    }

    /* =========================
       Submit
       ========================= */

    submitBtn.disabled = true;

    const btnText = submitBtn.querySelector('.btn-text');

    if (btnText) {
      btnText.textContent = 'SENDING...';
    }

    try {
      const data = new FormData(form);

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });

      if (res.ok) {
        status.textContent =
          '✓ Message sent successfully!';

        status.classList.add('success');

        form.reset();
      } else {
        throw new Error('Send failed');
      }

    } catch (err) {
      console.error('Contact form error:', err);

      status.textContent =
        '✗ Failed to send. Email me directly.';

      status.classList.add('error');

    } finally {
      submitBtn.disabled = false;

      if (btnText) {
        btnText.textContent = 'Send Message';
      }
    }
  });
}

/* ============================================================
   COMMAND PALETTE (Ctrl+K)
   ============================================================ */
function initPalette() {
  const overlay = document.getElementById('palette-overlay');
  const input = document.getElementById('palette-input');
  const results = document.getElementById('palette-results');
  if (!overlay || !input) return;

  // Build searchable index from existing data
  const ITEMS = [
    { icon: '🏠', title: 'Home', sub: 'Section', action: () => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '👤', title: 'About', sub: 'Section', action: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '🛠️', title: 'Skills', sub: 'Section', action: () => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '📂', title: 'Projects', sub: 'Section', action: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '💼', title: 'Experience', sub: 'Section', action: () => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '⚡', title: 'GitHub Activity', sub: 'Section', action: () => document.getElementById('github').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '🎓', title: 'Certifications', sub: 'Section', action: () => document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '📝', title: 'Blog', sub: 'Section', action: () => document.getElementById('blog').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '📧', title: 'Contact', sub: 'Section', action: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) },
    { icon: '⚡', title: 'GitHub: @ItsWanheda', sub: 'External', action: () => window.open('https://github.com/ItsWanheda', '_blank') },
    { icon: '📧', title: 'Email: wanheda.work@gmail.com', sub: 'Contact', action: () => window.open('mailto:wanheda.work@gmail.com') },
    { icon: '⬆️', title: 'Back to Top', sub: 'Action', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: '🌙', title: 'Toggle Theme', sub: 'Action', action: () => toggleTheme() },
    // Dynamic items from projects
    ...PROJECTS_DATA.map(p => ({
      icon: p.emoji,
      title: p.name,
      sub: 'Project',
      action: () => openProjectModal(p.id)
    })),
    // Dynamic items from blog
    ...BLOG_DATA.map(b => ({
      icon: '📄',
      title: b.title,
      sub: `Blog · ${b.tag}`,
      action: () => openBlogModal(BLOG_DATA.indexOf(b))
    }))
  ];

  let activeIndex = 0;
  let filtered = ITEMS;
  let lastFocused = null;

  // ---------- Core functions ----------
  function render(query = '') {
    const q = query.trim().toLowerCase();
    filtered = q
      ? ITEMS.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.sub.toLowerCase().includes(q)
      )
      : ITEMS;
    activeIndex = 0;

    if (!filtered.length) {
      results.innerHTML = `
        <div class="palette-empty">
          No results for "<strong>${escapeHtml(query)}</strong>"
        </div>`;
      return;
    }

    results.innerHTML = filtered.map((item, i) => `
      <div class="palette-item ${i === 0 ? 'active' : ''}" data-index="${i}">
        <div class="icon">${item.icon}</div>
        <div class="text">
          <div class="title">${escapeHtml(item.title)}</div>
          <div class="sub">${escapeHtml(item.sub)}</div>
        </div>
      </div>
    `).join('');

    results.querySelectorAll('.palette-item').forEach((el, i) => {
      el.addEventListener('click', () => execute(filtered[i]));
      el.addEventListener('mouseenter', () => {
        activeIndex = i;
        updateActive();
      });
    });
  }

  function updateActive() {
    const items = results.querySelectorAll('.palette-item');
    if (!items.length) return;
    // Wrap around
    if (activeIndex < 0) activeIndex = items.length - 1;
    if (activeIndex >= items.length) activeIndex = 0;
    items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    const active = items[activeIndex];
    if (active) {
      active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function execute(item) {
    if (!item || typeof item.action !== 'function') return;
    closePalette();
    // Defer slightly so the modal/close animation doesn't conflict
    setTimeout(() => {
      try { item.action(); }
      catch (err) { console.error('Palette action failed:', err); }
    }, 50);
  }

  function openPalette() {
    lastFocused = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    input.value = '';
    render('');
    // Wait a tick so the focus doesn't fight the transition
    setTimeout(() => input.focus(), 10);
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  function isOpen() {
    return overlay.classList.contains('open');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---------- Event listeners ----------
  // Open / close on Ctrl+K (or Cmd+K on Mac)
  document.addEventListener('keydown', (e) => {
    const isToggle = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
    if (isToggle) {
      e.preventDefault();
      isOpen() ? closePalette() : openPalette();
      return;
    }
    if (!isOpen()) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex++;
      updateActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex--;
      updateActive();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      execute(filtered[activeIndex]);
    } else if (e.key === 'Home') {
      e.preventDefault();
      activeIndex = 0;
      updateActive();
    } else if (e.key === 'End') {
      e.preventDefault();
      activeIndex = filtered.length - 1;
      updateActive();
    }
  });

  // Live search
  input.addEventListener('input', (e) => render(e.target.value));

  // Click outside the palette box to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });
}
/* ============================================================
   INIT ALL
============================================================ */
function initAll() {
  typeLoop();
  initNav();
  initReveal();
  initDevilCursor();
  initBackToTop();

  renderProjects();
  renderGithub();
  renderTimeline();
  renderCerts();
  renderBlog();
  renderContact();
  renderSkills();

  updateLearningDaysStat();
  initCounters();
  initTheme();
  initContactForm();
  initClickParticles();
  initPWA();
}