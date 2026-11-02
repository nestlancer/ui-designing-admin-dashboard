# F21 · Content · Blog + Editor — BASELINE MAP (Gate S)

Run: 2 November 2026 · scoped F21 run (owner-directed). Sources: 11 screenshots in `Nestlancer-admin-screenshots/admin/`, 18 HTML snapshots in `nestlancer-admin-pages-html/` + their `audit-metadata.json` entries, `nestlancer-admin-pages-html/README.md` route table. Nothing here was repaired or completed from memory; every value carries the source it came from.

**Provenance vocabulary used in this family (UI chips and this document):**
`shot` = visible only in a screenshot · `DOM` = present in an HTML snapshot · `spec` = documented in `blog.openapi.json` but not captured · `DEMO` = synthetic lab data, prefixed in the UI · `derived` = computed here from captured values, formula printed.

---

## 1. Capture inventory (18 HTML states · 11 screenshots)

| # | HTML snapshot | Route / state (title) | Screenshot | Data state in DOM |
|---|---|---|---|---|
| 101 | `101-content-index.html` | `/content` ("Content · Admin") | `009-content.webp` | **pre-data**: KPI values "—", list = empty state |
| 102 | `102-content-index-tab-posts.html` | Posts tab | `071-content-card-view.webp` (card toggle never captured in HTML) | pre-data |
| 103 | `103-content-index-tab-comments.html` | Comments tab | `011-content-comments.webp` | pre-data (empty) |
| 104 | `104-content-index-tab-pending.html` | Pending tab | `012-content-pending.webp` | empty ("Moderation queue clear") |
| 105 | `105-content-index-tab-reported.html` | Reported tab | `013-content-reported.webp` | empty ("No reported comments") |
| 106 | `106-content-index-tab-analytics.html` | Analytics tab | `010-content-analytics.webp` | pre-data (empty body) |
| 107 | `107-content-index-tab-taxonomy.html` | Taxonomy tab | `014-content-taxonomy.webp` | pre-data ("0 publishing groups / 0 discovery labels / 0 publishing accounts") |
| 108 | `108-content-sub-content-posts-01a10a1e-e219-73d9-855c-cf690f3b2b25.html` | `/content/posts/{id}/edit` | — | pre-load, no inputs |
| 109 | `109-…-01a10a21-b705-70d0-992f-e96647543650.html` | edit · *Product-Led Growth Playbook for 2026* | — | **full form values** |
| 110 | `110-…-01a10a23-b389-716c-a2eb-e5479eb081d6.html` | edit · *Retainer vs Project Pricing Models* | — | full form values |
| 111 | `111-…-01a10a25-e1d8-71c0-911a-16db76a5980c.html` | edit · *Empty State UX Patterns That Guide Users* | — | full form values |
| 112 | `112-…-01a10a27-429b-76dd-9069-d255e0ece571.html` | edit · *Design Ops for Growing Product Teams* | — | full form values |
| 171 | `171-content-new-post.html` | `/content/new` → **"Page not found"** | — | 404 page (C11 evidence) |
| 172 | `172-content-editor.html` | `/content/posts/01a10a1e-e219-…/edit` ("Edit post · Admin") | `069-blog-editor-write-mode.webp` | full form · *Agentic CI/CD with GitHub Actions* |
| 173 | `173-content-editor-state-write.html` | editor · Write | `069` | full form + markdown body (1 612 chars) |
| 174 | `174-content-editor-state-split.html` | editor · Split | `068-blog-editor-split-mode.webp` | form + rendered preview |
| 175 | `175-content-editor-state-preview.html` | editor · Preview | `067-blog-editor-preview-mode.webp` | rendered preview |
| 192 | `192-content-new-post-direct.html` | `/content/posts/new` ("New post · Admin") | `066-blog-editor-new-post-form.webp` | empty form, placeholders captured |

Audit metadata, all 18: `failedRequests: []`; `consoleErrors` = one CSP inline-style violation (nonce) on every page except 192 — a production note, not a UI item. Tabs use `role=tablist/tab` ×6; the search field has `role=search`; the posts tab carries a `role=status` region.

Fixtures copied for the build: `docs/fixtures/captured-editor-posts.json` (the 5 editor captures: title, excerpt, body, slug, tags, meta title/description, words, est. read, excerpt length) and `docs/fixtures/agentic-ci-cd-body.md` (the complete markdown body of the canonical DOM post).

---

## 2. Frozen content (Gate S content lock)

### 2.1 Hub (`009`, `071` — shot; `101` — DOM)
- Breadcrumb **Home › Content › Blog** · eyebrow **CONTENT OPERATIONS** · `h1` **Blog** · lede *"Publish stories, moderate reader discussion, and manage content performance and taxonomy."* · buttons **View live blog** (secondary) · **New post** (primary).
- KPI cards (shot): **Total posts 110** "Across all publishing states" · **Published 110** "Visible on the public blog" · **Drafts 0** "Still in editorial workflow" · **Pending comments 0** "Queue is clear". (DOM: all four "—".)
- Tabs (DOM + shot): **Posts · Comments · Pending · Reported · Analytics · Taxonomy**.
- Posts toolbar: search placeholder *"Search posts by title…"* · Status select **All statuses · Published · Draft · Scheduled · Archived** (DOM) · list/grid toggle.
- Posts table columns: **POST** (title + `/slug` + green "live" link) · **CATEGORY** · **STATUS** (● PUBLISHED) · **PUBLISHED** · **STATS** ("N min · M views") · **ACTIONS**.
- Row actions, captured verbatim and in order: **Edit · View live · Unpublish · Unfeature/Feature · Archive · Delete** (Delete = filled red). Rows 1–14 show *Unfeature* (featured), rows 15–20 *Feature*.
- Footer of list: **"Page 1 of 6 (110 total)"**, 20 rows per page · page footer "© 2026 Nestlancer Admin".
- Card view (`071`): same 20 posts as 3-column cards, **FEATURED** label, six stacked buttons per card.
- Empty state (DOM): *"No posts match your filters / Adjust the search text or status filters."*

Page-1 rows (shot `009`; category · min · views; all **Published Oct 5, 2026**):

| # | Title | Category | min | views | featured |
|---|---|---|---|---|---|
| 1 | Cutting Deploy Time from 45 Minutes to Five | Case Studies | 2 | 4 | yes |
| 2 | Kubernetes Migration Cost Analysis | Case Studies | 3 | 1 | yes |
| 3 | Reliable Notification Workers at Scale | Case Studies | 3 | 1 | yes |
| 4 | Netflix: Seven Years from Monolith to Microservices | Case Studies | 3 | 1 | yes |
| 5 | Empty State UX Patterns That Guide Users | Design | 1 | 1 | yes |
| 6 | WCAG 2.2 Accessibility Compliance Guide | Design | 1 | 1 | yes |
| 7 | Market Research for Freelance Niches | Business | 1 | 1 | yes |
| 8 | Building Lean AI-Native Startup Teams | Business | 1 | 1 | yes |
| 9 | SaaS Metrics Every Founder Must Track | Business | 1 | 1 | yes |
| 10 | Secrets Management with Infisical and Vault Patterns | Technology | 1 | 1 | yes |
| 11 | Hardening Docker Compose for Production-Like Dev | Technology | 1 | 1 | yes |
| 12 | Kubernetes Cost Optimization in 2026 | Technology | 2 | 0 | yes |
| 13 | Building Production-Ready Microservices with NestJS (`/nestjs-microservices-production-guide`) | Case Studies | 2 | 0 | yes |
| 14 | AI-First Development Workflows in 2026 | Technology | 2 | 0 | yes |
| 15 | Scaling a Freelance Marketplace Architecture | Case Studies | 3 | 1 | no |
| 16 | GDPR Compliance Platform Rebuild | Case Studies | 2 | 1 | no |
| 17 | Migrating from WebSockets to SSE | Case Studies | 2 | 2 | no |
| 18 | Elasticsearch Migration for Search Features | Case Studies | 2 | 1 | no |
| 19 | API Versioning Without Breaking Mobile Clients | Case Studies | 2 | 1 | no |
| 20 | Multi-Region Deployment Case Study | Case Studies | 2 | 1 | no |

Slugs: only one is legible in the shot (row 13); all others are rendered in the lab as `derived` kebab-case of the title and chipped as such.

### 2.2 Comments (`011` shot; `103` DOM)
Heading **All comments** — *"Review reader discussion across every published post."* · search *"Search comment, post, or reader…"* · status filter **All statuses · Pending · Approved · Rejected · Spam** (DOM) · columns **COMMENT · POST · STATUS · ACTIONS** · 4 rows, author **Arjun Mehta**, **Oct 6, 2026 9:36 / 9:35 AM**, ● **APPROVED**, actions **Reject · Spam · Delete** (red). Bodies are AUDIT-SEED demo text on *GDPR Compliance Platform Rebuild*, *Scaling a Freelance Marketplace Architecture*, *Cutting Deploy Time…* (×2). No total, no pagination.

### 2.3 Pending (`012`, `104`) · Reported (`013`, `105`)
**Pending review** — *"Approve legitimate contributions before they appear publicly."* → empty **"Moderation queue clear / The moderation queue is clear."**
**Reported comments** — *"Investigate comments flagged by readers and take action."* → empty **"No reported comments / No comments are currently reported."**
Both empties lack *why* and *next* (completed in the lab with provenance: "why" = captured count 0; "next" = link to All comments).

### 2.4 Analytics (`010` shot; `106` DOM empty)
**Content performance** — *"Engagement for posts published during the selected period."* · period select **Last 30 days** · KPIs **Total views 107** · **Total likes 0** · **Top-performing posts 10** "Period: 30d" · table **TOP CONTENT** (VIEWS · LIKES · PUBLISHED · STATE):

| Post | Views | Likes | Published | State |
|---|---|---|---|---|
| Cutting Deploy Time from 45 Minutes to Five | 4 | 0 | Oct 5, 2026 | Published |
| Migrating from WebSockets to SSE | 2 | 0 | Oct 5, 2026 | Published |
| Building an Incident Response Culture | 2 | 0 | Oct 5, 2026 | Published |
| Prisma Read/Write Replica Patterns | 2 | 0 | Oct 5, 2026 | Published |
| Product-Led Growth Playbook for 2026 | 2 | 0 | Oct 5, 2026 | Published |
| Networking Strategies for Remote Founders | 1 | 0 | Oct 5, 2026 | Published |
| Design Ops for Growing Product Teams | 1 | 0 | Oct 5, 2026 | Published |
| Agentic CI/CD with GitHub Actions | 1 | 0 | Oct 5, 2026 | Published |
| CDN Migration to Cloudflare: Lessons Learned | 1 | 0 | Oct 5, 2026 | Published |
| Market Research for Freelance Niches | 1 | 0 | Oct 5, 2026 | Published |

### 2.5 Taxonomy (`014` shot; `107` DOM pre-data)
**Taxonomy & governance** — *"Manage discoverability, consolidate duplicate tags, and recover post revisions."* · **Categories** "4 publishing groups": Business · Case Studies · Design · Technology (+ "New category" input + Add) · **Tags** "6 discovery labels": JavaScript · NestJS · Next.js · Node.js · React · TypeScript (+ "New tag" + Add) · **Authors** "1 publishing accounts": Riya Kapoor · **Merge duplicate tags** (Source / Destination selects, disabled "Merge tags") · **Revision recovery** ("Select a post").
Category IDs (DOM, editor select): Business `01a10a1d-4f78-771a-9d9a-86843067dbba` · Case Studies `01a10a1d-4fd6-76ec-af10-9991222706ff` · Design `01a10a1d-4f2e-7069-b105-bc8f481d5fc1` · Technology `01a10a1d-4ee5-771a-939d-cf7e3bf79496`.

### 2.6 Editor — new (`066` shot; `192` DOM)
Eyebrow **BLOG** · `h1` **New post** · lede *"Start with a strong title and excerpt — readers discover you through both."* · **← Back to blog** · **Create post** (disabled until a title exists) · *"Editor view — Preview updates instantly from unsaved fields."* + **Write / Split / Preview**.
**Post content:** Title* (ph *"e.g. How we cut checkout drop-off"*) · Excerpt (ph *"1–2 sentences for cards and SEO"*) · Content (Markdown) (ph *"Write your post in Markdown…"*).
**Settings:** Category* (default Business) · Slug (ph *"auto-generated-from-title"*) · Tags (comma-separated) (ph *"design, nextjs, tips"*).
**SEO & discovery:** Meta title (ph *"SEO title for search results"*) · Meta description (ph *"155 characters that sell the click in Google"*, counter **0 / 160 characters**).
**Writing stats:** Words 0 · Est. read 1 min · Excerpt length 0 chars · tip *"Lead with a clear promise in the title. Keep excerpts under 200 characters for cards and social previews."* · sticky **Cancel · Create post**.
Help buttons (DOM): aria-label "Help for Title / Excerpt / Content / Slug / Tags / Status" — tooltip text not captured.

### 2.7 Editor — edit (`069`/`068`/`067` shots; `172–175` DOM)
`h1` **Edit post** · lede *"Refine the story, tune SEO, and publish when it reads well."* · **← Back to blog** · **Open live post ↗** · **Save changes** · Status select **DRAFT / PUBLISHED / ARCHIVED** (DOM) · **Instant preview — Unsaved draft · not public** · **Responsive** badge · device toggles (aria-label "Desktop preview width" `aria-pressed=true` / "Mobile preview width") · preview article shows "← Back to articles", category chip, title (rendered as a **second `h1`** in the capture — demoted in the lab), "Nestlancer · N min read", tags `#NestJS #Node.js`.
Three different posts appear across the editor evidence — a variant states which one it loads:

| Source | Post | Words | Est. read | Meta counter |
|---|---|---|---|---|
| `069` shot (Write) | Netflix: Seven Years from Monolith to Microservices | 411 | 3 min | 97 / 160 |
| `068` / `067` shots (Split / Preview) | Cutting Deploy Time from 45 Minutes to Five · Case Studies · 2 min read · #NestJS #Node.js | 383 | 2 min | 80 / 160 |
| `172–175` DOM (canonical, full body) | Agentic CI/CD with GitHub Actions · `/agentic-ci-cd-with-github-actions` · tags NestJS, Node.js · Technology | 230 | 2 min | 105 / 160 (excerpt 105 chars) |

Other captured edit forms (`109–112`): Product-Led Growth Playbook for 2026 (188 w · JavaScript, Node.js) · Retainer vs Project Pricing Models (144 w · TypeScript, JavaScript, Node.js) · Empty State UX Patterns That Guide Users (136 w · JavaScript, React, Next.js) · Design Ops for Growing Product Teams (127 w · React, Next.js). React controlled selects do not serialise their chosen option, so **category and status of these forms are unknown from the DOM** (category inferred only where the preview chip shows it).

---

## 3. Tie-out audit (R1) — captured totals vs their own parts

| # | Check | Result | Verdict | UI device |
|---|---|---|---|---|
| T1 | Total posts 110 = Published 110 + Drafts 0 | 110 = 110 ✔ | **ties** | — |
| T2 | KPI strip covers the filter's five states? | strip has no Scheduled / Archived cell | **uncounted states** ⚠ | chip "Scheduled · Archived not counted in the strip" |
| T3 | "Page 1 of 6 (110 total)" at 20/page | ⌈110 ÷ 20⌉ = 6 ✔ | **ties** | pagination prints "Showing 1–20 of 110" |
| T4 | Analytics Total views 107 vs top-10 list | 4+2+2+2+2+1+1+1+1+1 = **17**; 107 − 17 = **90 (84.1 %)** outside the list | **does not tie by design** ⚠ | note under the table: "Top 10 shows 17 of 107 views — 90 views sit on posts not listed" |
| T5 | "Top-performing posts 10" | equals the list length (`limit`), not a measurement | **trap** ✗ | KPI re-labelled "Rows in top list · 10 (limit)" with the original label kept in the popover |
| T6 | List STATS views vs analytics VIEWS (same post visible in both) | Cutting Deploy Time 4 = 4 ✔ · WebSockets→SSE 2 = 2 ✔ · Market Research 1 = 1 ✔ | **ties where checkable** | — |
| T7 | Analytics rows not on page 1 | Incident Response, Prisma, PLG Playbook, Networking, Design Ops, Agentic CI/CD, CDN Migration (7 rows) | **unverifiable** ✗ | chip "not on captured page 1" |
| T8 | Page-1 views sum | 21 of 107 views on page 1 (`derived`) | informative | popover line |
| T9 | Total likes 0 vs per-row likes | all 0 ✔ | **ties** | — |
| T10 | Categories "4 publishing groups" / Tags "6 discovery labels" / Authors "1 publishing accounts" | 4 names · 6 names · 1 name ✔ | **ties** | — |
| T11 | List CATEGORY values ⊂ the 4 categories | Case Studies · Design · Business · Technology ✔ | **ties** | — |
| T12 | Pending comments 0 vs Pending tab | empty tab ✔ | **ties** | — |
| T13 | Comments tab total | no total, no pagination, 4 visible | **cannot tie** ✗ | footer "4 rows captured · total not shown by the product" |
| T14 | Published dates | every post Oct 5, 2026; comments Oct 6, 2026 | seeding signature | chip "demo corpus · single publish day" — never shown as cadence |
| T15 | Est. read formula | ⌈411/200⌉=3 ✔ ⌈383/200⌉=2 ✔ ⌈230/200⌉=2 ✔ ⌈188/200⌉=1 ✔ ⌈144/200⌉=1 ✔ ⌈136/200⌉=1 ✔ ⌈127/200⌉=1 ✔ | **derived formula holds 7/7** | calc popover "Est. read = ⌈words ÷ 200⌉" |
| T16 | Meta description = excerpt on captured posts | Agentic: 105 = 105 ✔ (identical text) | **ties** | hint "meta description currently mirrors the excerpt" |
| T17 | Editor evidence consistency | three different posts across Write / Split / Preview shots + DOM | **do not blend** | each variant names its loaded post |
| T18 | DOM vs shot | DOM pre-data everywhere; shot populated | **provenance split** | every populated number chipped `shot` |

---

## 4. Discrepancies and documented traps (R3)

1. **Status vocabulary split** — list filter: All · Published · Draft · Scheduled · Archived; editor Status select: DRAFT · PUBLISHED · ARCHIVED (no SCHEDULED). Spec: `POST /api/v1/admin/posts/{id}/schedule` with `scheduledAt`. Consequence: Schedule is an action with a date-time; SCHEDULED badge only on `DEMO` rows.
2. **C11 route grammar** — `/content/new` → 404 "The operator route you requested does not exist…"; canonical `/content/posts/new` and `/content/posts/{id}/edit`. Every link in the lab uses the canonical grammar and prints it in mono.
3. **Row-action farm** — 6 controls × 20 rows = 120 per page + 20 one-click filled-red Deletes; card view repeats the six per card; no confirmation, no undo, no bulk bar, no "Showing x–y of N".
4. **Second `h1`** inside the preview article (`174`/`175`) — demoted to a styled `h2`.
5. **Weak empties** — Pending/Reported empties state *what* only.
6. **Analytics KPI "Top-performing posts 10"** is the request `limit`.
7. **Cookie banner** Dismiss/Accept present on every DOM capture — dropped (C15).
8. **CSP console error** on every page — production note.
9. **Card view** (`071`) is a shot-only state (no DOM) — kept as a toggle with `shot` provenance.
10. **Preview copy** "Instant preview — Unsaved draft · not public" is captured; no autosave is captured or documented → the lab says "not saved" honestly and never claims autosave.

---

## GATE S (F21) · Shots: 11/11 · HTML: 18/18 · Modes verified: YES (Write `173`/`069`, Split `174`/`068`, Preview `175`/`067`) · Content frozen: YES · Tie-out: 18 checks (9 tie · 3 trap/uncounted · 3 cannot tie · 3 provenance notes) · Gate: PASS
