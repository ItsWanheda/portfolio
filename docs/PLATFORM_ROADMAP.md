# Platform transformation roadmap

The goal is to evolve the portfolio into a durable personal brand and publishing platform without throwing away the identity or working integrations already in place.

## Product direction

**The landing screen is the introduction, not the entire website.**

1. A cinematic, full-viewport introduction establishes the ItsWanheda identity.
2. Scrolling reveals the platform itself: Projects, Journal, About, and Contact.
3. Dedicated routes make the site navigable, linkable, and search-friendly.
4. Members can maintain a profile and save articles.
5. Administrators can manage the journal through a protected content studio.

## Implemented foundation on this branch

### Experience
- Next.js App Router with React and TypeScript.
- Brand-first landing page, full-height hero, scroll-led reveal, and a Three.js animated system core.
- Existing dark, charcoal, white, and red visual identity carried into a more structured design system.
- Responsive navigation and reduced-motion support.
- Dedicated Projects, Journal, About, and Contact routes.
- GitHub repository data remains sourced from the existing server-side Vercel function.
- Dynamic sitemap and robots routes.

### Member experience
- Public member registration and sign-in.
- Member profile editing.
- Saved article/bookmark management.
- Members cannot choose or self-assign an administrator role.

### Admin experience
- Protected admin workspace.
- Article create, edit, and delete.
- Draft and published states.
- Article title, slug, excerpt, Markdown body, category, tags, and cover image URL.
- Public journal routes expose published articles only.
- First administrator is created through an explicit server-side CLI command.

### API and data
- Standalone Express 5 TypeScript API.
- MongoDB/Mongoose User and Post models.
- Redis-backed sessions and refresh-token rotation.
- HttpOnly cookies, CSRF checks, exact-origin CORS, Zod validation, rate limits, and security headers.
- Health liveness and dependency readiness endpoints.
- Next.js same-origin rewrite to the independently hosted API.

## Production activation checklist

The code foundation is not a live production system until the required services and environment variables are configured.

- [ ] Provision MongoDB and Redis for the API service.
- [ ] Deploy the Express API as a persistent Node service.
- [ ] Configure `WEB_ORIGIN`, `MONGODB_URI`, `REDIS_URL`, `JWT_SECRET`, and secure cookie settings on the API host.
- [ ] Configure Vercel `API_SERVER_URL` and `NEXT_PUBLIC_API_URL=/api/v1`.
- [ ] Confirm `/health/ready` returns HTTP 200 with both MongoDB and Redis connected.
- [ ] Run the administrator bootstrap command once.
- [ ] Verify register, login, refresh rotation, logout, profile updates, bookmarks, and role denial from a browser.
- [ ] Verify draft articles remain private and published articles are indexed in the sitemap.
- [ ] Add and test a production dependency lockfile.
- [ ] Run CI and perform a mobile, keyboard, and reduced-motion review before merging.

## Recommended next capabilities

These are deliberate follow-up milestones, not hidden assumptions in the first implementation.

### 1. Account lifecycle
- Email verification and password-reset flow through a configured email provider.
- Session/device management and a "sign out all sessions" action.
- Admin user directory, account deactivation/reactivation, and audited role changes.
- Account deletion/export and a documented retention policy.

### 2. Content operations
- Image upload and managed media storage (choose an object-storage provider before implementation).
- Draft preview, scheduled publishing, revisions/version history, and autosave.
- Rich Markdown preview, table of contents, reading progress, related articles, and canonical redirects when a slug changes.
- Article SEO fields, structured Article JSON-LD, and social preview images.

### 3. Community and communication
- Optional comments with moderation, spam controls, and abuse reporting.
- Contact form stored in a protected inbox with notification delivery.
- Newsletter signup only after selecting a mailing-list provider and adding consent/unsubscribe handling.

### 4. Insights and reliability
- Privacy-conscious traffic and article analytics.
- Admin activity/audit log for publishing, account, and settings changes.
- Automated MongoDB backups, restore drills, Redis persistence/availability policy, and alerting.
- API integration tests and end-to-end browser tests for member and administrator journeys.

### 5. Experience polish
- Full content migration from the old JavaScript data arrays into MongoDB.
- Review every existing interaction and page against the new implementation before removing legacy files.
- Fine-tune the 3D scene on low-end mobile devices; provide a still visual fallback.
- Add custom-domain, Open Graph image, favicon, and search-console verification checks.

## Architecture note

The frontend and API are separate deployable services. Vercel serves the Next.js application and proxies `/api/v1/*` to the Express API. The API owns all access to MongoDB and Redis. The browser never receives database credentials, Redis credentials, or JWT signing secrets.
