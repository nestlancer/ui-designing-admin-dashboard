# F21 · Content · Blog + Editor — API MAP (Gate A)

Spec: `backend-api-swagger/blog.openapi.json` — **Nestlancer Blog Service 1.0 · 69 paths · 12 schemas** (`ResponseMetadataDto`, `ApiSuccessEnvelopeDto`, `CreateCommentDto`, `UpdateCommentDto`, `CreatePostDto`, `UpdatePostDto`, `SchedulePostDto`, `CreateCategoryDto`, `UpdateCategoryDto`, `CreateTagDto`, `UpdateTagDto`, `MergeTagsDto`). `servers: []`. Read-only study: no request was made; the lab never executes an operation. Every endpoint shown in the UI is prefixed **`DEMO`** and described as "documented contract — not called by this page".

**Spec-wide facts that shape the UI**
- Every `200` is the envelope `{status:"success", data:{…additionalProperties:true}, metadata}` → **no response field is documented** for any list, detail, revision, author or analytics call. The UI prints "field names not documented in Swagger" beside every table/list that would be fed by one.
- `UpdatePostDto` and `UpdateCategoryDto` have **`properties: {}`** → the editor's Save maps to `PATCH /admin/posts/{id}` with an undocumented body; the UI says so in the save receipt.
- `GET /api/v1/admin/posts` and `GET /api/v1/admin/comments` document **no query parameters** although the console searches, filters by status and paginates → chip "query parameters undocumented". `…/comments/pending` and `…/comments/reported` require `page` and `limit` (type string).
- No batch/bulk operation exists anywhere in the 69 paths → no bulk bar is drawn as a product claim.

## 1. Surface → endpoint map (admin tag group · 44 paths)

| Surface (captured) | Operation | Body / params (documented) | UI treatment |
|---|---|---|---|
| Posts list (hub) | `GET /api/v1/admin/posts` — "comprehensive paginated list of all blog posts, including drafts, scheduled, and deleted entries" | none documented | table source; chips: `shot` values, "query parameters undocumented" |
| New post → Create | `POST /api/v1/admin/posts` — "Status defaults to DRAFT upon creation" | `CreatePostDto`: **title*** (≤200) · slug (auto from title) · **excerpt*** (≤500) · **content*** (≤100 000) · contentFormat `MARKDOWN|HTML` (default MARKDOWN) · featuredImageId · categoryId · tags[] · authorId (defaults to current user) · seo {} · commentsEnabled | field limits enforced as `maxlength` + counters; create receipt says "status: DRAFT (documented default)" |
| Edit → Save changes | `PATCH /api/v1/admin/posts/{id}` — "partial updates to post content, taxonomy, or configuration" | `UpdatePostDto` = **{}** | receipt line "body fields not documented in Swagger" |
| Post detail | `GET /api/v1/admin/posts/{id}` | path id | preview drawer source (V4) |
| Publish | `POST /api/v1/admin/posts/{id}/publish` — "Immediately transition … to PUBLISHED and record the timestamp" | none | confirm → receipt → undo (undo maps to `unpublish`) |
| Unpublish | `POST /api/v1/admin/posts/{id}/unpublish` — "Transition a published **or scheduled** post back to DRAFT" | none | row overflow; confirm + undo; also the documented way to cancel a schedule |
| **Schedule** | `POST /api/v1/admin/posts/{id}/schedule` — "Define the future date and time for automated post publication" | `SchedulePostDto`: **scheduledAt*** (string; format not documented; time zone not documented) | date-time input + "Schedule" button; receipt prints the ISO string that *would* be sent; chip "time zone not documented — browser local shown" |
| Feature / Unfeature | `POST …/{id}/feature` · `POST …/{id}/unfeature` | none | row overflow (reversible pair; undo = inverse call) |
| Archive | `POST …/{id}/archive` — "**Permanently archive** a post, removing it from active management queues" | none | destructive group; confirm prints the documented wording |
| Delete | `DELETE /api/v1/admin/posts/{id}` — "Perform a **soft-deletion** of the blog post, archival only" | none | destructive group, last; confirm prints **both** sentences and the note "the spec's archive/delete semantics are inverted relative to their names — unconfirmed" |
| Revisions (Taxonomy → Revision recovery) | `GET /api/v1/admin/posts/{id}/revisions` — "audit trail and content history" · `POST …/revisions/{revisionId}/restore` — "Roll back a post to a previously saved content state" | path ids | revisions list rendered only as **DEMO** rows (no revision was captured); restore = confirm → receipt |
| Comments (All) | `GET /api/v1/admin/comments` | none documented | table source |
| Pending | `GET /api/v1/admin/comments/pending` | `page*`, `limit*` (string) | queue source; captured empty |
| Reported | `GET /api/v1/admin/comments/reported` | `page*`, `limit*` (string) | queue source; captured empty |
| Approve / Reject / Spam | `POST /api/v1/admin/comments/{id}/approve` · `/reject` · `/spam` | none (no reason body) | confirm → receipt → undo; **no reason field drawn** |
| Delete comment | `DELETE /api/v1/admin/comments/{id}` — "Permanently remove a comment from the database" | none | destructive, last, confirm; undo window is local only and says so ("after 10 s this cannot be undone") |
| Categories | `GET /api/v1/admin/blog/categories` · `POST` (`CreateCategoryDto`: **name*** ≤100 · slug · description) · `PATCH …/{id}` (`UpdateCategoryDto` = {}) · `DELETE …/{id}` | — | "New category" input maps to POST; delete is not in the capture → not drawn |
| Tags | `GET /api/v1/admin/blog/tags` · `POST` (`CreateTagDto`: **name*** ≤50 · slug ≤80) · `PATCH …/{id}` (`UpdateTagDto`: **name***) · `DELETE …/{id}` | — | "New tag" input → POST with `maxlength=50` |
| Merge tags | `POST /api/v1/admin/blog/tags/merge` — "Consolidate multiple tags into one and update all associated blog posts" | `MergeTagsDto`: **fromTagId*** · **toTagId*** | Source/Destination selects (captured) → confirm names both tags + the documented effect; button stays disabled until both differ (captured disabled state) |
| Authors | `GET /api/v1/admin/blog/authors` | none | "1 publishing accounts · Riya Kapoor" |
| Analytics KPIs | `GET /api/v1/admin/blog/analytics` — "aggregated performance data for the entire blog service" | none | Total views / Total likes; no `period` param documented although the UI shows "Last 30 days" → chip "period parameter undocumented on this call" |
| Top content | `GET /api/v1/admin/blog/analytics/top-posts` | **period***, **limit*** (strings) | the "10" KPI is `limit`; UI re-labels it |
| Engagement | `GET /api/v1/admin/blog/analytics/engagement` | **from***, **to*** | not captured as a surface → listed only in the popover |
| Per-post analytics | `GET /api/v1/admin/blog/analytics/{id}` | path id | V4 drawer "performance" line (DEMO-labelled, values from the captured top list only) |

## 2. Documented but NOT captured → not drawn (owner questions)

| Operation | Why it is not in the UI |
|---|---|
| `featuredImageId` (CreatePostDto) | no media picker in any editor capture; drawing one would invent a Media Library hand-off (F23) |
| `commentsEnabled`, `contentFormat: HTML`, `seo{}` sub-fields, `authorId` | not in the captured form; the captured SEO block has only meta title + meta description |
| `POST …/{id}/pin` · `/unpin` (posts) · `POST /admin/comments/{id}/pin` · `/unpin` | no pin affordance captured |
| `POST …/{id}/duplicate` | not captured |
| `POST /admin/posts/import` · `/export` | no import/export control captured; CSV is therefore **not** offered on F21 (unlike F20 where it was captured) |
| `PATCH /admin/posts/settings` | no settings surface captured |
| `POST /admin/comments/{id}/reply` | no admin reply composer captured |
| `DELETE /admin/blog/categories/{id}` · `DELETE /admin/blog/tags/{id}` · `PATCH` on both | taxonomy capture shows add + merge only |

## 3. Public endpoints (25 paths) — context only

`/api/v1/posts*` (list/search/detail/related/view/like/engagement/bookmark/views/share, comments post/reply/update/delete/report/like), `/api/v1/categories*`, `/api/v1/tags*`, `/api/v1/authors*`, `/api/v1/feed/rss|atom`, `/api/v1/comments/{commentId}*` (standalone), `/api/v1/bookmarks`. The console's "View live" / "Open live post ↗" links point at the public post route; the lab renders them as mono `https://nestlancer.com/blog/{slug}` labels with `rel="noopener"` and a `DEMO` chip (host not captured in the console DOM).

## 4. Status model as documented vs captured

| Source | Vocabulary |
|---|---|
| Spec (descriptions) | DRAFT (create default) → PUBLISHED (publish) · scheduled (schedule; unpublish returns it to DRAFT) · archived (archive) · deleted = soft (delete) |
| Capture — list filter | All statuses · Published · Draft · Scheduled · Archived |
| Capture — editor select | DRAFT · PUBLISHED · ARCHIVED |
| Capture — comment filter | All · Pending · Approved · Rejected · Spam |
| Lab rule | SCHEDULED is never a select option; it is the result of the Schedule action, shown only on DEMO rows. The confirm dialog prints the spec sentence for the chosen transition. |

## GATE A (F21) · Specs: 1/1 · Endpoints: 69 read (44 admin mapped, 25 public context) · Drawn from spec only (not captured): 3 (schedule, revisions list/restore, create-field limits) · Demo-only affordances: 4 (DEMO scheduled rows, DEMO revisions, local undo window, prepared-request receipts) · Not drawn (owner questions): 8 groups · Gate: PASS
