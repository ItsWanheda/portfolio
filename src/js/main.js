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

export const BLOG_DATA = [
  // =================================================================
  // BLOG 01 — JWT SECURITY
  // =================================================================
  {
    num: '01',
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
  // BLOG 04 — DNS (Already expanded in previous message)
  // =================================================================
  {
    num: '04',
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
  // BLOG 05 — OWASP Top 10 (Already expanded in previous message)
  // =================================================================
  {
    num: '05',
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
  // BLOG 06 — GO PORT SCANNER (Already expanded in previous message)
  // =================================================================
  {
    num: '06',
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
];

const CONTACT_DATA = [
  { icon: '⚡', label: 'GitHub', value: 'https://github.com/ItsWanheda', href: 'https://github.com/ItsWanheda', copyValue: 'https://github.com/ItsWanheda' },
  { icon: '📧', label: 'Email', value: 'wanheda.work@gmail.com', href: 'mailto:wanheda.work@gmail.com', copyValue: 'wanheda.work@gmail.com' },
  { icon: '🎮', label: 'Discord', value: 'ItsWanheda', href: null, copyValue: 'ItsWanheda' },
];

async function fetchGithubStats() {
  const repos = REPOS_DATA; // your existing array
  const enriched = await Promise.all(repos.map(async r => {
    try {
      // Extract owner/repo from the github URL
      const match = r.github.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!match) return r;
      const [, owner, repo] = match;
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!res.ok) return r;
      const data = await res.json();
      return { ...r, stars: data.stargazers_count, forks: data.forks_count };
    } catch { return r; }
  }));
  // Re-render with real data
  REPOS_DATA.length = 0;
  REPOS_DATA.push(...enriched);
  renderGithub();
}

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .catch(err => console.log('SW registration failed:', err));
    });
  }
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

function initClickParticles() {
  document.addEventListener('click', e => {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'click-particle';
      const angle = (Math.PI * 2 * i) / count;
      const distance = 30 + Math.random() * 30;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      p.style.setProperty('--x', x + 'px');
      p.style.setProperty('--y', y + 'px');
      p.style.left = e.clientX + 'px';
      p.style.top = e.clientY + 'px';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
  });
}
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
   Theme Toggle
============================================================ */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-theme');
    btn.textContent = '☀️';
  }
  btn?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    btn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

function toggleTheme() { // Now the palette can call this
  document.getElementById('theme-toggle')?.click();
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
  if (!blog) return;

  document.getElementById('modal-number').textContent = blog.num;
  document.getElementById('modal-tag').textContent = blog.tag;
  document.getElementById('modal-title').textContent = blog.title;

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="blog-progress-bar">
      <div class="blog-progress-fill" id="blog-progress"></div>
    </div>
    ${blog.content}
  `;

  const modal = document.getElementById('blog-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Track scroll progress
  const progressBar = document.getElementById('blog-progress');
  body.onscroll = () => {
    const pct = (body.scrollTop / (body.scrollHeight - body.clientHeight)) * 100;
    progressBar.style.width = pct + '%';
  };
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
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = form?.querySelector('.form-submit');
  if (!form) return;

  const FORM_ENDPOINT = 'https://formspree.io/f/xeebvwpq';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'SENDING...';
    status.textContent = '';
    status.className = 'form-status';

    try {
      const data = new FormData(form);
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = '✓ Message sent successfully!';
        status.classList.add('success');
        form.reset();
      } else {
        throw new Error('Send failed');
      }
    } catch (err) {
      status.textContent = '✗ Failed to send. Email me directly.';
      status.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
    }
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
  updateLearningDaysStat();
  initCounters();
  fetchGithubStats();
  initTheme();
  initContactForm();
  initClickParticles();
  initPWA();
}