# Nestlancer Admin Portal Lab — F21 · Content · Blog + Editor — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F21 · Content · Blog + Editor.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F21-content-blog/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## Run revision — 2 November 2026 (owner-directed: analyse captures → research → update prompt → then run)

This revision supersedes the orientation-only brief below where the two differ. It was produced by viewing all **11** F21 screenshots individually, parsing all **18** F21 HTML snapshots + their `audit-metadata.json` entries, reading the report (§1 Finding #8, §2.2, §3.3, §4.1 Content row, §5.2, C3/C5/C9/C11/C12/C15/C17/C18/C20, A2/A5, KEEP) and the full `blog.openapi.json` (69 paths, 12 schemas), then studying **15 public CMS / editorial-ops references** *after* S/R/A and *before* any concept was drawn. Evidence lives in `admin-portal-lab/families/F21-content-blog/docs/` (BASELINE-MAP incl. tie-out, REPORT-STUDY, API-MAP, TEMPLATE-RESEARCH, CONCEPTS, fixtures/). The pre-revision prompt is archived verbatim at `docs/PROMPT-ARCHIVE-pre-run.md`.

**R1 · Tie-out audit is mandatory and its results are UI devices.** Recorded for F21: Total posts 110 = Published 110 + Drafts 0 ✔ — but the KPI strip has no Scheduled/Archived cell although the filter offers both → "two states uncounted" chip · "Page 1 of 6 (110 total)" at 20/page = ⌈110÷20⌉ = 6 ✔ · Analytics "Total views 107" vs the top-10 list summing to **17** → **90 views (84%) sit outside the shown rows** ⚠ · "Top-performing posts 10" is the list **limit**, not a metric ✗ trap · Posts-list STATS views agree with the analytics list where the same post is visible (Cutting Deploy Time 4, WebSockets→SSE 2, Market Research 1) ✔, seven analytics rows are not on page 1 and cannot be cross-checked ✗ · Categories 4 / Tags 6 / Authors 1 — each count equals its listed items ✔ · Pending comments 0 = empty Pending tab ✔; the Comments tab prints no total and no pagination so its 4 rows cannot be tied to anything ✗ · every captured post is "Published Oct 5, 2026" → a seeding signature, printed as **demo corpus**, never as a cadence · Editor "Est. read" = ⌈words ÷ 200⌉ on every captured post (411→3, 383→2, 230→2, 188→1, 144→1, 136→1, 127→1) ✔ — printed in the calc popover · the three editor screenshots show **three different posts** (Netflix 411 w · Cutting Deploy Time 383 w · DOM: Agentic CI/CD 230 w) — a variant states which one it loads and never blends them. Never repair a captured number; never print a figure the capture does not contain.

**R2 · Provenance at the point of use.** All `/content*` DOM captures are **pre-data** (KPIs "—", lists empty); only the screenshots are populated. Every value therefore carries `shot` / `DOM` / `spec` / `DEMO` provenance where it is shown. Each surface discloses its documented endpoint in mono (prefixed `DEMO` because no request is made), and — since **every** admin list/analytics response in the blog spec is `additionalProperties:true` and `UpdatePostDto`/`UpdateCategoryDto` have **no properties** — the line "field names not documented in Swagger" appears wherever a list or an update is drawn. A "how is this computed / where does this come from" popover is required in every variant.

**R3 · Documented traps are shown, not hidden.** (a) **Status vocabulary split:** the list filter offers All · Published · Draft · Scheduled · Archived; the editor's Status select offers only DRAFT · PUBLISHED · ARCHIVED; the API has `POST /admin/posts/{id}/schedule {scheduledAt}` — so *Schedule* is an **action with a date-time**, never a status option, and a SCHEDULED badge appears only on rows marked `DEMO`. (b) **C11:** `/content/new` is a live 404; the canonical routes are `/content/posts/new` and `/content/posts/{id}/edit` — one link grammar everywhere, printed in mono. (c) **Verb inversion in the spec:** `DELETE /admin/posts/{id}` is documented as "soft-deletion, archival only" while `POST …/archive` reads "permanently archive… removing from active queues" — the confirm dialog prints this ambiguity instead of guessing. (d) `GET /admin/posts` and `GET /admin/comments` document **no** query parameters although the UI searches, filters and paginates → "query parameters undocumented" chip; `pending`/`reported` require `page`+`limit` (strings). (e) The report's **C17** targets Portfolio/Moderation/Media; for F21 it is applied *by analogy* and said so.

**R4 · Control-density safety is the F21 core finding.** The captured list renders **6 buttons × 20 rows = 120 controls per page, including 20 filled-red one-click Deletes, with no confirmation, no undo and no bulk bar**; the card view stacks the same six under every card. Rule for all five variants: one visible constructive action per row (Edit) + at most one status-aware secondary, everything else in an overflow menu labelled "Actions for {title}" with the destructive group last and separated; Unpublish / Archive / Delete / Reject / Spam always **confirm → receipt → 10 s local undo** (C17 by analogy, as in F19: a local preview safeguard, never an API rationale field — approve/reject/spam take no body). No batch endpoint exists, so no bulk bar is drawn as a product claim; multi-select, where present, is labelled "prepares N single requests".

**R5 · Nothing outside the captures + the blog spec.** Drawn: 6 tabs, the posts table/cards, comments table, pending/reported queues, analytics period + KPIs + top list, taxonomy (categories/tags/authors/merge/revision recovery), editor Write/Split/Preview with the captured fields and writing stats, Schedule (spec), Revisions list + restore (captured affordance + spec). **Not drawn** (documented but never captured): featured image picker, `commentsEnabled`, `contentFormat HTML`, pin/unpin, duplicate, import/export, blog settings, admin reply — listed in API-MAP as owner questions. No autosave claim, no collaboration, no AI assist, no block editor, no editorial calendar.

**R6 · State rules (carried from the 2026-11-01/02 reviews).** Skeleton shaped like the coming table/editor; empty = what / why / next (the captured empties "Moderation queue clear" / "No reported comments" are kept as headings and completed with why + next); error = `role="alert"` + focus + retry; dark parity designed; 360–2560 with no page-level horizontal scroll; tables own their scroll region with a card fallback under 620 px; 44 px coarse targets; tabular numerals; reduced-motion kills animation; `<noscript>` keeps the captured figures and the captured post readable; exactly **one `h1`** per page (the capture renders a second `h1` inside the preview article — demoted here).

**R7 · Cross-family consistency.** Same shell as F19/F20: full-available-width canvas beside a 248 px sidebar that becomes a named 64 px icon rail ≤ 1180 px and a drawer < 620 px, state persisted in `localStorage`; hero verdict + compact strip (C1/C12); mono refs/slugs/IDs (C9); status = icon + colour + text (C3); provenance chips; footer with © 2026 Nestlancer · Terms · Privacy · mono host · Secured · HTTPS. Each variant is **one self-contained HTML file** (tokens, base, family CSS, runtime, icon sprite and logo pair inlined) so the sandboxed preview renders the full shell; the ≤ 70 KB soft budget is therefore exceeded knowingly, as recorded for F20.

### §8.3 roster — revised for this run (same tokens; ≥3/5 axes between any two; neighbours never share A + C)

| Variant | Working title | Axis A · layout | Axis C · narrative | What makes it a different page |
|---|---|---|---|---|
| V1 | **Ground-truth desk** | captured hub order: head → KPI strip → tabs → table | "the capture, corrected" | the 6 captured tabs as they are, with the row-action farm replaced by Edit + overflow, confirm/undo, provenance popovers; editor opens in-page below the desk |
| V2 | **Editor spine** | 3-column: posts rail · writing surface · settings/SEO/stats column | "one post, start to finish" | the editor owns the viewport; desk reduced to a docked list; Write/Split/Preview as a segmented control; Schedule + Revisions live in the right column |
| V3 | **Review desk** | queue lanes left (Pending · Reported · All) · context pane right | "clear the discussion, then publish" | comments-first; keyboard triage j/k + a/r/s with confirm; posts and analytics stacked below as secondary |
| V4 | **Dense console** | compact bento: 4-cell strip · dense table with a preview drawer · taxonomy side | "everything on one screen" | 12 px type density, drawer preview of the captured post, taxonomy + merge + revisions beside the table |
| V5 | **Publish choreography** | centred stage: stepper Draft → Review → Schedule → Publish with the desk folded beneath | "a guarded publish, step by step" | motion-led (transform/opacity, one dashoffset progress line); every step prints its endpoint and its receipt; undo window is the final step |

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the content surface exactly (posts, comments, pending, reported, analytics, taxonomy, editor) first. 2. **Research analyst** — quote every F21 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `blog` spec. 4. **Design-template researcher** — ≥8 editorial CMS UIs **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject editor-less CMS, unmoderated comments, one-click publishes.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F21 shots + HTML + metadata | Tabs + editor modes frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F21-content-blog/docs/REPORT-STUDY.md` |
| 2 · API | `blog` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** ship a correct post in one sitting — draft, review, schedule, publish, all guarded.

## 1.3 Manual craft rule — summary

Hand-write each `families/F21-content-blog/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F21 screenshots (11):** `009-content.webp` (hub) · `010-content-analytics.webp` · `011-content-comments.webp` · `012-content-pending.webp` · `013-content-reported.webp` · `014-content-taxonomy.webp` · `066-blog-editor-new-post-form.webp` · `067-blog-editor-preview-mode.webp` · `068-blog-editor-split-mode.webp` · `069-blog-editor-write-mode.webp` · `071-content-card-view.webp`. 3. `nestlancer-admin-pages-html/README.md`, F21 HTML (§4) + `audit-metadata.json` (`/content*` filter — 18 states). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `blog.openapi.json` (69 paths — posts, editor, comments, pending, reported, schedule, analytics, taxonomy). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F21 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F21 · Content · Blog + Editor

The editorial desk: **Posts · Comments · Pending · Reported · Analytics · Taxonomy** tabs + post details + the **article editor** (modes, new-post, preview) + **scheduled publish**. Broadest capture in the console (18 states, 11 shots); editor modes are shot-backed (`067`/`068`/`069`) AND live-verified (`173`/`174`/`175`); scheduled publish is spec-backed (no dedicated shot — verify at Gate A). Publish/schedule/delete stay confirm-gated; comments/pending/reported get review craft (C17).

> **Business weight:** 🟡 the public voice — every publish guarded, every report reviewed.

| | |
|---|---|
| Routes | `/content` (+ posts/comments/pending/reported/analytics/taxonomy; editor in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **all tabs + editor + schedule** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `101-content-index.html` | `/content` — hub | `009-content.webp` |
| `102-content-index-tab-posts.html` | Posts tab | `071-content-card-view.webp` |
| `103-content-index-tab-comments.html` | Comments tab | `011-content-comments.webp` |
| `104-content-index-tab-pending.html` | Pending tab | `012-content-pending.webp` |
| `105-content-index-tab-reported.html` | Reported tab | `013-content-reported.webp` |
| `106-content-index-tab-analytics.html` | Analytics tab | `010-content-analytics.webp` |
| `107-content-index-tab-taxonomy.html` | Taxonomy tab | `014-content-taxonomy.webp` |
| `108…112-content-sub-content-posts-*.html` (5 posts) | Post details (reconcile) | — (post states) |
| `171-content-new-post.html` · `192-content-new-post-direct.html` | New-post editor | `066-blog-editor-new-post-form.webp` |
| `172-content-editor.html` | Editor shell | `069-blog-editor-write-mode.webp` |
| `173/174/175-content-editor-state-write/split/preview.html` | Editor modes (live-verified) | `069` + `068` + `067` |
| *(spec baseline)* | Scheduled publish (no shot — verify at Gate A) | — |

**Must include (every variant):** all 6 tabs (frozen columns/counts) · post details · editor (modes per shots `067`–`069` + live `173`–`175`: write/split/preview, fields, media entry) · new-post · scheduled publish (spec-backed, no shot) · publish/schedule/delete confirm-gated · comments/pending/reported review craft (C17) · taxonomy management · C11-clean editor routes · dark + 375px.
**Content lock:** freeze tab labels, table columns, editor fields/controls, schedule copy, status vocabulary at Gate S. Editor features ONLY from shots + `blog` spec — never a generic block-editor wishlist.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + publish-receipt states · editor + tabs keyboard-complete.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F21 scope

### CHANGE — every item in **all 5 variants**
- **C11** — Unified editor/creation route grammar (new-post, edit, preview links). *(§6.1)*
- **C17** — Review craft on comments/pending/reported (context + reason + confirm). *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/slugs/timestamps. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F21-targeted P1 ADDs; spec-backed scheduled publish + shot+live editor modes ship as family craft — 5/5.
**Coverage:** manifest records.

### KEEP — present in every variant
- Editorial structure (6 tabs + editor + schedule). · Guarded publishing. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F21 scope: Gate S freezes 6 tabs + editor + modes + spec-backed schedule; Gate R quotes F21 rows + §2.2; Gate A maps `blog` 69 paths; Gate T ≥8 editorial CMS UIs **after** S/R/A.

```
## GATE S (F21) · Shots: 11/11 · HTML: <n>/18 · Modes verified: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F21) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F21) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F21) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 editor-led · ≥1 desk-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured desk + editor, guarded publishes, calm |
| V2 | Editor-spine: the writing surface owns the screen, desk docked |
| V3 | Desk-first: editorial queue (pending/reported) leads, editor below |
| V4 | Dense console: compact CMS + preview drawer for content ops |
| V5 | Motion-signature: draft→publish choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Publish/schedule/delete MUST be confirm-gated in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F21-content-blog/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F21 primaries:** desk tabs, post tables, post details, editor + modes + preview, schedule control, review panels, taxonomy manager.
States: post draft/pending/published/scheduled/reported · editor edit/preview · publish confirm/receipt · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F21) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F21) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F21 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C11/C17/C3/C5/C9/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click publish — FAIL." · "Generic block-editor wishlist — FAIL, shots + spec only." · "F21-V1 approved — never regenerate it."

## Enterprise-standards addendum (2026-11-01 review)

Added after studying **12 live enterprise/operator login pages** (AWS Console, Google Cloud, Azure/M365, Salesforce, Cloudflare, Datadog, Stripe Dashboard, Vercel, GitHub, Atlassian, DigitalOcean, Heroku) and rebuilding F01 to enterprise standard — full extraction in master `admin-portal-prompt.md` **§5.4** and `admin-portal-lab/families/F01-auth-login/docs/TEMPLATE-RESEARCH.md` (Gate T-2). From now on, EVERY variant of EVERY family follows:

- **Errors:** a top-of-surface `role="alert"` region that receives focus on failure; per-field `aria-invalid` + `aria-describedby`. Status/notice = icon + colour + text, never colour alone (C3).
- **Notices** (expired session, undo windows, receipts, degraded banner) are **dismissible** and announced via a polite live region.
- **Password fields** (auth door, set-password dialogs) get Show/Hide (`aria-pressed` + label swap) + a **Caps Lock hint**; any keep-me-signed-in/remember control gets a shared-device honesty hint.
- **Forms** carry the consent/legal line where the product has one ("By continuing, you agree to our Terms and Privacy Policy.") and pages carry a footer with **© 2026 Nestlancer** · Terms · Privacy · host in mono · "Secured · HTTPS" chip.
- **Progressive disclosure** (one field → Next) is allowed for auth/creation flows when it speeds the operator; single-page forms are equally valid — choose per page job, keep frozen labels.
- **Autofocus** the first field on standalone surfaces; skip link everywhere; **44px targets on coarse pointers**; `?theme=` boot + real dark parity (C18).
- **Trust signals stay honest:** host in mono, AA status badges, no invented SSO/passkey/region/language pickers — Gate-A endpoints or demo-labelled in DECISIONS.md only.
- **Creative bar (master §5.5, 2026-11-01):** every variant is art-directed with one strong idea (canvas / split+motion / console metaphor / editorial spread / choreographed center) — background art inside the teal ramp only, motion = transform/opacity + at most one stroke-dashoffset element, display type with tight tracking, 8px rhythm. If it could be any SaaS page, rebuild axis A/C, never the colour. Also (2026-11-01): brand canvases/panels must be theme-aware via CSS vars (light AND dark both work — no hardcoded green), and every page uses the shared client-lab logo pair from `admin-portal-lab/assets/` (`logo-mark-light/dark.svg` swapped by `.dark`, `alt` required, `favicon.svg` as icon) — see master §5.5 items 8–9. Pass 3 (2026-11-01): auth-style pages follow the production-mindset rules — editorial split with product proof, live signals (ping/PASS/PENDING), mono eyebrows, kinetic display type, aurora/scanline ambience, theme-aware canvases (master §5.5 item 10). Pass 4 (2026-11-01 owner review #4): pages must read hand-crafted (scribbles, stickers, offset layers, annotations), never clone a live production layout, form boxes get real presence (offset shadow + top bar + focus-within), and owner-approved ambient variants may use the green-on-dark-blue scheme (#e9f0f8/#081426) via local vars only — master §5.5 item 11. Pass 5 (2026-11-01 owner review #5): auth forms are SINGLE combined email+password panels (one submit, no step-wise disclosure) — master §5.5 item 12.


---

*End of prompt F21. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*


---

## Owner review — source-complete data and differentiated design (2026-11-02)

When a reviewer says demo data is incomplete or designs resemble the production screenshot, re-inspect the applicable captures individually, reconcile every identity and visible record with the related Swagger contracts, and document missing or conflicting data. Do not substitute one account’s data for another, invent unseen pages, claim a simulated action was executed, or claim a server permission/audit result. Search and inspect relevant public design examples, then change information architecture and visual hierarchy as appropriate — not just colours or small spacing changes. Preserve approved work unless the user asks for revisions; this review explicitly requests changes to both F15 and F16. Test the revised pages and report actual coverage and unresolved gaps. Follow the shared master and relevant family scope; do not mark gates passed merely because an initial mock exists.

## Run record — 2–3 November 2026 (F21 executed after the revision above)

Executed scope: **F21 only**, as authorised. Evidence: `admin-portal-lab/families/F21-content-blog/docs/` (`BASELINE-MAP.md` incl. the 18-check tie-out, `REPORT-STUDY.md`, `API-MAP.md` for all 69 blog paths, `TEMPLATE-RESEARCH.md` with 17 refs, `CONCEPTS.md` with the difference test, `fixtures/captured-editor-posts.json` — the five DOM editor posts extracted by script and inlined into every page as `window.NL_CAPTURED`, and `DELIVERY-REPORT.md` with the GATE 3 block). Gallery, `manifest.json` and `DECISIONS.md` carry the F21 records; no shared file outside the family changed.

Gate results: S PASS (11/11 shots, 18/18 snapshots, modes verified) · R PASS (md + 10/10 xlsx, 11 C-items) · A PASS (1/1 spec, 69 paths) · T PASS (11 queries, 17/≥8 refs, after S/R/A) · GATE 1 PASS (5/5 cards + sketches, difference ≥ 4 axes) · **GATE 3 PASS — Hand-built 5/5 · Generators 0 · 7 widths × 2 themes = 70 cells clean · Checklist 5/5 · Blockers 0.** Browser verification on the final build: Playwright/Chromium, 107 interaction checks, axe-core 4.14.0 0 violations across default and stateful pages. Pages are 171–184 KB raw / 46–49 KB gzip — over the 70 KB soft budget for the same self-containment reason as F20, disclosed in the report.

Two findings worth carrying into every later family: (1) **never retype captured text** — two hand-typed strings had drifted from the DOM and were caught only by a tie-out test; the fix is to inline the extracted fixture; (2) **do not default what the capture did not serialise** — three DOM edit forms have no recoverable category, and the editor says so.

Open questions handed back to the owner for the review pass: (1) single-file portability vs the 70 KB budget; (2) which verb the product should expose given the spec's Delete/Archive inversion; (3) whether Scheduled/Archived get KPI cells or leave the filter; (4) whether the analytics hub should show the 90-view long tail; (5) the category of the PLG / Retainer / Design Ops posts; (6) which documented-but-uncaptured features belong to F21. **F21-V1 is the recommended winner**; V2/V3/V4/V5 are situational picks (writing / moderation / dense scan / guarded publish).

