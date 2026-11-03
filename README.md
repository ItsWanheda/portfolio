# ItsWanheda — Personal Platform

<p align="center">
  <strong>Cybersecurity · Backend Engineering · Networks · Research</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs" alt="Next.js 16">
  <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express-5-FFFFFF?style=for-the-badge&logo=express&logoColor=black" alt="Express 5">
  <img src="https://img.shields.io/badge/MongoDB-Data-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Redis-Sessions-DC382D?style=for-the-badge&logo=redis" alt="Redis">
</p>

> **Beyond a résumé. A personal platform for systems, experiments, research, and ideas.**

The site is evolving from a single-page portfolio into a brand-first digital home. The opening screen introduces the identity; scrolling reveals the actual platform: selected work, a technical journal, background, and contact. Members can manage a profile and save articles. Administrators have a protected content studio for the public journal.

The migration is intentionally incremental. The original HTML/CSS/JavaScript implementation and its assets remain in the repository while the Next.js experience is introduced, giving us a reference point for visual parity and a safe way to migrate content.

---

## ✦ Platform map

| Area | Purpose |
| --- | --- |
| **Intro / Landing** | Full-screen brand introduction with a Three.js scene and scroll-led transition |
| **Projects** | Live public repository feed from the existing GitHub integration |
| **Journal** | Published technical articles stored in MongoDB |
| **Member space** | Registration, sign-in, profile editing, and saved articles |
| **Admin workspace** | Create, edit, draft, publish, unpublish, and delete journal posts |
| **About / Contact** | Brand story, focus areas, and direct contact channels |

## 🧱 Technology

| Layer | Technology |
| --- | --- |
| Web application | Next.js App Router, React, TypeScript |
| UI foundation | Bootstrap 5, custom CSS, Lucide React |
| 3D / motion | Three.js, Intersection Observer, CSS transitions |
| API | Node.js, Express 5, TypeScript |
| Data | MongoDB with Mongoose |
| Sessions / rate limits | Redis |
| Validation | Zod |
| Authentication | bcrypt password hashing, short-lived JWT access cookie, rotating opaque refresh token |
| Deployment | Vercel frontend + independently hosted Express API |

## 🗂️ Repository structure

```text
.
├── app/                       # Next.js App Router pages and components
│   ├── admin/                 # Admin dashboard and article editor
│   ├── auth/                  # Shared login/register form
│   ├── components/            # Site header, 3D scene, reveal motion
│   ├── dashboard/             # Member profile and bookmarks
│   ├── journal/               # Public article index and detail
│   ├── lib/                   # Browser API client
│   ├── projects/              # GitHub-powered project directory
│   ├── about/
│   ├── contact/
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── server/
│   ├── src/
│   │   ├── middleware.ts      # Authentication, roles, CSRF
│   │   ├── models/            # User and Post schemas
│   │   ├── routes/            # Auth, public posts, users, admin
│   │   ├── scripts/           # Explicit administrator bootstrap
│   │   ├── app.ts
│   │   ├── config.ts
│   │   ├── db.ts
│   │   └── index.ts
│   └── package.json
├── app/api/github/route.ts    # Next.js GitHub data route
├── api/github.js              # Legacy handler retained during migration
├── src/                       # Original visual/source implementation kept for reference
├── docs/
├── .github/workflows/
├── next.config.ts
├── package.json
└── vercel.json
```

## 🚀 Run locally

### Requirements

- Node.js 22 or newer
- npm 10 or newer
- MongoDB
- Redis

### 1. Install dependencies

From the repository root:

```bash
npm install
```

### 2. Configure the API

Copy `server/.env.example` to `server/.env` and provide local MongoDB and Redis connection details.

PowerShell:

```powershell
Copy-Item server/.env.example server/.env
```

The API refuses to start without a valid `JWT_SECRET` (at least 32 characters), MongoDB URI, and Redis URI. Do not commit environment files.

### 3. Configure the frontend

Copy `.env.example` to `.env.local`. For local development, keep:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

### 4. Start both applications

```bash
npm run dev
```

- Web: http://localhost:3000
- API: http://localhost:4000
- Liveness: http://localhost:4000/health/live
- Readiness: http://localhost:4000/health/ready

You can also start each side separately with `npm run dev:web` and `npm run dev:api`.

## 🔐 Create the first administrator

Public registration always creates a **member** account. A client cannot select or submit the administrator role.

Create the first administrator using the one-time server-side CLI. Set a unique email and a strong password of at least 16 characters in the API environment, then run:

PowerShell:

```powershell
$env:ADMIN_EMAIL = "admin@example.com"
$env:ADMIN_PASSWORD = "use-a-unique-password-of-at-least-16-characters"
$env:ADMIN_NAME = "Site Administrator"
npm --workspace @itswanheda/api run admin:create
Remove-Item Env:ADMIN_EMAIL, Env:ADMIN_PASSWORD, Env:ADMIN_NAME
```

The command refuses to create another administrator if one already exists. It does not create a default account or embed credentials in source code.

Sign in at `/login`. Administrator accounts are routed to `/admin`; members are routed to `/dashboard`.

## 🧭 API overview

All API routes are versioned under `/api/v1`.

| Method | Endpoint | Access |
| --- | --- | --- |
| POST | `/auth/register` | Public, rate limited |
| POST | `/auth/login` | Public, rate limited |
| POST | `/auth/refresh` | Refresh cookie |
| POST | `/auth/logout` | Session cookie |
| GET | `/auth/me` | Authenticated |
| GET | `/posts` | Public, published only |
| GET | `/posts/:slug` | Public, published only |
| GET / PATCH | `/users/me` | Authenticated |
| GET | `/users/me/bookmarks` | Authenticated |
| PUT / DELETE | `/users/me/bookmarks/:postId` | Authenticated + CSRF |
| GET | `/admin/posts` | Administrator |
| GET | `/admin/posts/:id` | Administrator |
| POST / PATCH / DELETE | `/admin/posts[/:id]` | Administrator + CSRF |

## ☁️ Deployment

### Frontend — Vercel

Keep the repository root as the Vercel project root. The repository is now configured as a Next.js application.

Set these Vercel environment variables:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | `/api/v1` |
| `API_SERVER_URL` | Public origin of the deployed Express API, without a trailing slash |

The Next.js rewrite proxies `/api/v1/*` to the Express service. This keeps browser requests on the website's own origin and avoids relying on cross-site authentication cookies.

### Backend — Node hosting

Deploy the repository's `server` workspace as a persistent Node.js service. Build and start it from the repository root:

```bash
npm install
npm --workspace @itswanheda/api run build
npm --workspace @itswanheda/api start
```

Set these server environment variables in the API host:

- `NODE_ENV=production`
- `PORT` (provided by the host)
- `MONGODB_URI`
- `REDIS_URL`
- `WEB_ORIGIN=https://itswanheda.vercel.app` (or the final custom domain)
- `JWT_SECRET` (a cryptographically random secret, 32+ characters)
- `COOKIE_SECURE=true`
- `COOKIE_SAME_SITE=lax` when using the same-origin Vercel rewrite

Do not expose database URLs, Redis credentials, or signing secrets through `NEXT_PUBLIC_*` variables. Configure the API host's health check to use `/health/ready`.

### Existing GitHub integration

The Next.js App Router handler at `app/api/github/route.ts` serves the Projects page feed. The original `api/github.js` handler is retained during the migration but is no longer the active route. Keep `GITHUB_TOKEN` server-side in Vercel environment variables. The token should have the minimum read-only permissions needed for the public profile and repository feed.

## 🛡️ Security model

- Passwords are hashed with bcrypt; the raw password is never stored.
- Access tokens are short-lived and held in HttpOnly cookies.
- Refresh tokens are random opaque values, stored only as SHA-256 hashes in Redis, and consumed atomically during rotation.
- Each session has a CSRF token; authenticated state-changing routes validate it.
- The API enforces an exact configured browser origin and credentialed CORS.
- Public registration cannot assign roles.
- Admin endpoints verify the current database role on each authenticated request.
- Draft articles are not returned by public journal routes.
- Request bodies and article fields have bounded sizes and Zod validation.
- Security headers, generic error responses, and API rate limits are enabled.

## 🧪 Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

GitHub Actions runs the type-check and production build on pushes and pull requests. A generated dependency lockfile should be committed once the dependency installation has been performed in the project environment.

## 🗺️ Next milestones

See [Platform roadmap](./docs/PLATFORM_ROADMAP.md) for the implementation phases, deployment checklist, and the remaining production requirements.

## 📄 License

See [LICENSE](./LICENSE).
