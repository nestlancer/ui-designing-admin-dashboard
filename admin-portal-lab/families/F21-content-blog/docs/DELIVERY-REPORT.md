# F21 · Content · Blog + Editor — GATE 3 · Delivery report

> **2026-11-04:** Sibling `blog.*`, `parts/`, `variants/`, and `build-f21.js` were removed after migration. **Edit `V#/index.html` only.** Open via `file://` (no server). Historical build steps below describe authorship, not current layout.

Run: 2–3 November 2026 · scope **F21 only** (owner-authorised) · family folder `admin-portal-lab/families/F21-content-blog/`.
Everything below was measured on the files as committed; nothing is carried over from another family's report.

---

## GATE 3 (F21) · Hand-built: 5/5 · Generators: 0 · Widths×themes: 7×2 = 14 per variant (70 cells) · Checklist: 5/5 · Blockers: 0 · Gate: PASS

Earlier gates (recorded in their own files): GATE S PASS (`BASELINE-MAP.md`), GATE R PASS (`REPORT-STUDY.md`), GATE A PASS (`API-MAP.md`), GATE T PASS (`TEMPLATE-RESEARCH.md`, 17 refs), GATE 1 PASS (`CONCEPTS.md`).

---

## 1. Files — one self-contained HTML per variant

| Variant | Working title | File | Raw | gzip | sha256 |
|---|---|---|---|---|---|
| V1 | Ground-truth desk | `V1/index.html` | 175 614 B (171.5 KB) | 45.8 KB | `52e3b12a27acfec7ec8958164c5c685ea2f57297dc0807e59b873409b5c7949c` |
| V2 | Editor spine | `V2/index.html` | 182 869 B (178.6 KB) | 47.4 KB | `dbe9581b8a6d761737a40d2b7ce406e88d70a369c5a37318422293f9efe350c8` |
| V3 | Review desk | `V3/index.html` | 184 036 B (179.7 KB) | 48.0 KB | `3b7cbb377753af1ae394e4a1ef7a10b7c80b0b07d986109f937aff64f54fa48c` |
| V4 | Dense console | `V4/index.html` | 188 726 B (184.3 KB) | 48.7 KB | `7394196e9d4d1d0501384245708126ea545245acbf018a808ec89571888df731` |
| V5 | Publish choreography | `V5/index.html` | 187 678 B (183.3 KB) | 49.2 KB | `f8a88dbbc49638f10308a4f3c55e2f19c4cd8acb42d2928c5e7e3d8116d566f7` |

**Size budget — stated, not hidden.** The master's ≤ 70 KB soft budget is exceeded, as it was for F20 (~107–112 KB). F21 pages are larger again because the inlined payload now also carries (a) a full editor + Markdown preview + revision/schedule/confirm layer (`blog.js` + `blog-blocks.js` ≈ 88 KB minified), (b) `shared/tokens.css` + `shared/base.css` + `blog.css` ≈ 53 KB, (c) the five captured DOM editor posts **including their full Markdown bodies** (`docs/fixtures/captured-editor-posts.json`, ≈ 7 KB) inlined as `window.NL_CAPTURED`, and (d) the icon sprite and both logo marks. Over the wire this is 45.8–49.2 KB gzipped. The alternative — splitting the shared files back out — would break the sandboxed preview that the owner reported as broken for F20. Owner call; see §7.

**Authorship.** Source of record is the un-minified set: `blog.css` (544 lines), `blog.js` (658), `blog-blocks.js` (338), `parts/V1…V5-panel.js` (27 / 72 / 98 / 109 / 114 lines), `variants/V1…V5/design.css` (20 / 47 / 28 / 37 / 50 lines). Shell markup, runtime and decision layer were written once; every variant's page composition, its panel script and its `design.css` were written separately and tuned by eye against Playwright screenshots (eleven review/fix rounds — see §3.4). `build-f21.js` only concatenates, inlines the sprite/logos/fixture and runs `terser`; it generates no markup. Generators: 0.

**Zero sub-resources.** Every page was rendered with every non-`file://` request aborted and a request listener attached: external requests observed = 0 for all 70 cells.

---

## 2. What is on every variant (content lock + C-items)

- **Captured hub, frozen.** Hero verdict (110 published · 0 drafts · 0 pending · 0 reported · shot 2026-10-30) → KPI strip with the tie-out devices from GATE S (Total 110 = 110 + 0 ✔; **"Scheduled · Archived not counted"** chip; analytics **"90 of 107 views (84 %) outside the top-10"**; "Top-performing posts 10 is the list limit, not a metric") → the six captured tabs Posts · Comments · Pending · Reported · Analytics · Taxonomy → the captured 20-row page 1 (`Showing 1–20 of 110 · page 1 of 6`), 4 captured comments, both captured empty queues with their captured headings completed by *why* + *next*, analytics period + KPIs + top-10, taxonomy 4 / 6 / 1 with merge and revision recovery.
- **Editor = the capture, not a retyping.** The five DOM editor posts (`nestlancer-admin-pages-html/109–112, 172–175`) are read from `window.NL_CAPTURED`, which `build-f21.js` inlines verbatim from `docs/fixtures/captured-editor-posts.json`. The DOM-canonical post (Agentic CI/CD with GitHub Actions, `01a10a1e-…`) renders with the captured 1 612-character body and the writing stats recompute to the captured **230 words · 2 min · 105/160 meta · 105-char excerpt · Technology**. The other four (PLG 188 w, Retainer 144 w, Empty State 136 w, Design Ops 127 w) tie out the same way. Where the DOM did not serialise a value — the React category select for PLG / Retainer / Design Ops — the select shows **"— not captured for this post —"** with help text instead of a silent default (see §3.4 for why this rule exists).
- **Entry points to every captured form.** Because Agentic CI/CD, PLG and Design Ops appear only in the analytics top-10 and not on captured page 1, each variant exposes the five DOM forms explicitly: a **"Captured edit forms"** strip under the posts table, an **Edit** button on matching analytics rows, and (V2) a "DOM edit forms (5)" rail group.
- **C11** one route grammar, mono everywhere: `/content/posts/new`, `/content/posts/{id}/edit`; the captured `/content/new` 404 is named as a trap. **C17 (by analogy)** every Unpublish / Archive / Delete / Reject / Spam → confirm (with the documented transition **and** the Delete-vs-Archive verb inversion printed) → receipt → **10 s local undo**; approve/reject/spam take no body, so no reason field is invented. **C3/C5** AA text on the locked teal tokens only (axe colour-contrast 0 violations light + dark). **C9** mono slugs, IDs, timestamps, endpoints. **C12** every count rendered with provenance (`shot` / `DOM` / `spec` / `DEMO`). **C18** dark parity designed per variant (not inverted). **C20** logo marks carry alt text; sprite icons are `aria-hidden` with text labels.
- **Control-density repair (R4).** 120 captured row controls (6 × 20, incl. 20 one-click red Deletes) → one visible Edit + one status-aware secondary + an overflow menu "Actions for {title}" with the destructive group last and separated, in all five variants. No bulk bar is drawn as a product claim; V4's multi-select is labelled "prepares N single requests".
- **Status honesty (R3).** Schedule is an **action with a date-time** (`POST …/schedule {scheduledAt}`), never a status option; a SCHEDULED badge appears only on rows marked `DEMO`.
- **Provenance popover** ("how is this computed / where does this come from") on every KPI and on the analytics list, in every variant.
- **Shell.** Same shell as F19/F20: 248 px sidebar → 64 px named icon rail ≤ 1180 px → drawer < 620 px; state in `localStorage` (`nl-nav`, `nl-theme`; F21 adds `nl-f21-view` for list/grid and, in V4, `nl-f21-v4-cols` for the column chooser). Breadcrumb Home › Content › Blog, Blog active. Footer © 2026 Nestlancer · Terms · Privacy · mono host · Secured · HTTPS with real `#terms` / `#privacy` targets.
- **`<noscript>`** (2 043 characters) keeps the captured figures, the queue texts and the captured post summary readable without JavaScript.

---

## 3. Verified in a real browser (Playwright / Chromium headless, final build)

### 3.1 Responsive + resource matrix — 70 / 70
5 variants × 360 / 390 / 768 / 1024 / 1440 / 1920 / 2560 × light / dark. Per cell: exactly **one `h1`**, **no page-level horizontal scroll** (`scrollWidth ≤ innerWidth`), **0 console / page errors**, **0 external requests** (all non-`file://` routes aborted). Tables own their scroll region and fall back to cards under 620 px; the captured-forms strip wraps; the sticky save bar becomes static ≤ 620 px.

### 3.2 Interaction suite — 107 / 107
`interact.py` (kept outside the repo; re-runnable) drives every variant through its real controls:
- **V1** tab roving (Arrow / End), list ↔ grid with persistence, search + clear, status filter, row overflow menu (ArrowDown / End / Escape, "Actions for {title}"), Unpublish → confirm text → receipt → undo, Delete confirm prints the Archive/Delete inversion, Schedule prefill, approve comment confirm, provenance popover, `?` shortcuts dialog, lab states (skeleton / empty / error with `role="alert"` + focus + retry), mobile drawer open / Escape / focus return, editor open from a row, from the captured-forms strip and from an analytics row; Write / Split / Preview; dirty indicator; Save → receipt; Back to blog restores focus.
- **V2** posts rail → editor, vertical tab list (ArrowDown), segmented modes, right-column Schedule + Revisions (DEMO) + restore confirm, "DOM edit forms (5)" rail group, category "not captured" help text.
- **V3** lanes as `listbox`/`option` with `aria-activedescendant`, **j / k / a / r / s / z** triage with confirm + undo, approve advances to the next item, demo state populates the queues and selects the first item, `?` lists the keys.
- **V4** compact density default, column chooser (persisted), peek drawer (`role="dialog"`, Escape returns focus), multi-select bar wording, table search through `api.postsBody`, taxonomy merge + revisions beside the table.
- **V5** stepper Draft → Review → Schedule → Publish, each step printing its endpoint and receipt; checklist recomputed from the captured body (230 words, 105/160); fold-away desk (`details`) without re-render loops; reduced-motion path.

### 3.3 Accessibility — axe-core 4.14.0, 0 violations
Rules: `wcag2a`, `wcag2aa`, `wcag21aa`, `best-practice`. Pages: 5 variants × light / dark at 1440 (10 runs) **plus** stateful runs — V1 menu open, confirm open, toast visible, editor Write, editor Split; V4 drawer open; V3 demo lanes. All report **0 violations**. Four findings from the first axe pass were fixed in source rather than suppressed: V3 lanes restructured so `option`s are direct children of a per-lane `listbox` (and lane headings promoted to `h2`); V4's two `role="search"` toolbars given distinct labels; V5 stepper buttons no longer carry `role="listitem"`; V4 drawer is a `div[role=dialog]` instead of an `aside`; rendered Markdown `<pre>` blocks are focusable (`tabindex="0"`, labelled) so keyboard users can scroll code.

### 3.4 Defects found by QA and fixed before delivery (disclosed)
1. **`openConfirm` crashed when opened from a row menu without extras** (`extra.when` on `undefined`) → Schedule from the overflow menu never opened. Fixed; covered by the suite.
2. **Transcription drift.** Two captured strings had been retyped by hand into the runtime and drifted from the DOM ("…human-in-the-loop **gates**." became "…controls."; "…without sales **friction**." became "…a sales team."), and four of the five captured bodies were missing. Root-cause fix: the runtime no longer contains any retyped capture — it reads `window.NL_CAPTURED`, inlined by the build from the fixture extracted by script from the HTML snapshots. Writing stats now tie to the DOM exactly. Rule recorded in `DECISIONS.md`: *never retype captured text; inline the fixture.*
3. **V5 render loop** — the fold toggle re-rendered on every `toggle` event. Fixed with an idempotent handler.
4. **Category default** — an earlier draft defaulted un-serialised categories to "Business". Removed; the select now says "not captured".
5. Visual rounds (eleven screenshot passes): post-title buttons inheriting button chrome, V4 default density, V5 fold default, V2 rail spacing, mobile wrapping of the captured-forms strip, duplicate arrow glyph on "Back to blog".

---

## 4. What is *not* claimed
- No request is made to any Nestlancer endpoint; every endpoint string is a documented contract shown with a `DEMO` prefix. Save, publish, schedule, archive, delete, approve, reject, spam, merge and restore all end in a **local receipt**, never a network call.
- Field names for list/analytics responses and for `UpdatePostDto` / `UpdateCategoryDto` are **not documented in Swagger** (`additionalProperties: true` / no properties); the pages print this at the point of use rather than inventing a schema.
- Category for the PLG, Retainer and Design Ops DOM posts is unknown (React controlled selects do not serialise). Not guessed.
- Documented-but-never-captured features are **not drawn**: featured image picker, `commentsEnabled`, `contentFormat: HTML`, pin/unpin, duplicate, import/export, blog settings, admin reply (listed in `API-MAP.md` §2 as owner questions).
- No autosave, collaboration, AI assist, block editor or editorial calendar is implied.
- Screen-reader testing was automated (axe + semantics review), not manual NVDA/VoiceOver.
- Skeleton / empty / error are lab states, not captured product behaviour (the two captured empties — Pending, Reported — are the exception and are reproduced verbatim as headings).

---

## 5. Acceptance checklist (report §7.1) applied per variant

| # | Item | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|---|
| 1 | Hierarchy < 2 s at 1440: verdict + strip + primary surface without scrolling | ✔ | ✔ (editor) | ✔ (queues) | ✔ | ✔ (stepper) |
| 2 | One visible constructive action per row; destructive actions behind confirm → receipt → undo | ✔ | ✔ | ✔ | ✔ | ✔ |
| 3 | Every count carries provenance; tie-out devices rendered; popover "how is this computed" | ✔ | ✔ | ✔ | ✔ | ✔ |
| 4 | Real `<table>` + `<caption>`, scoped headers, tabular numerals; card fallback < 620 px | ✔ | ✔ | ✔ | ✔ | ✔ |
| 5 | Shell intact, Blog active, breadcrumb Home › Content › Blog; footer with legal targets | ✔ | ✔ | ✔ | ✔ | ✔ |
| 6 | Colour AA on teal tokens only (axe 0 violations, both themes) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 7 | Editor: Write / Split / Preview, captured fields, writing stats tie to the DOM | ✔ | ✔ | ✔ | ✔ | ✔ |
| 8 | Dark parity designed | ✔ | ✔ | ✔ | ✔ | ✔ |
| 9 | Keyboard complete (tabs, menus, dialogs, Esc, `?`, variant keys) | ✔ | ✔ | ✔ j/k/a/r/s/z | ✔ | ✔ |
| 10 | Empty / skeleton / error (`role="alert"`, focus, retry) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 11 | Safety: Schedule is an action not a status; no one-click destructive control; no fake "live" | ✔ | ✔ | ✔ | ✔ | ✔ |
| 12 | 360 / 390: no page scroll, strip and toolbars wrap, tables card/scroll | ✔ | ✔ | ✔ | ✔ | ✔ |
| 13 | Performance: 0 external requests, single file, 45.8–49.2 KB gzip (raw 171–184 KB, over the 70 KB soft budget — §1) | ✔ | ✔ | ✔ | ✔ | ✔ |
| 14 | `<noscript>` keeps captured figures + post readable; reduced-motion honoured | ✔ | ✔ | ✔ | ✔ | ✔ |

---

## 6. Family winner

**V1 · Ground-truth desk** — recommended general-purpose winner. It is the captured page made safe: same six tabs, same table, same figures, with the row-action farm replaced by Edit + overflow, confirm/undo on every destructive verb, tie-out chips on the strip, and the captured editor opening in place.
Situational picks: **V2 · Editor spine** when the day is mostly writing (the editor owns the viewport, the desk is a rail); **V3 · Review desk** when comments back up (keyboard triage with receipts); **V4 · Dense console** for a single-screen scan on large monitors; **V5 · Publish choreography** when publishing must be walked, not clicked.

---

## 7. Open questions for the owner's review
1. **Size vs portability.** Keep the single-file build (171–184 KB raw / ~46–49 KB gzip, renders in the sandboxed preview) or split tokens/base/runtime back out to meet the 70 KB budget and accept that the preview loses the shell?
2. **Delete vs Archive.** The spec documents `DELETE /admin/posts/{id}` as *soft-deletion, archival only* and `POST …/archive` as *permanently archive… removing from active queues*. The confirm dialogs print both; which verb should the product expose?
3. **Scheduled / Archived counts.** The KPI strip never counts them though the filter offers both — add two cells, or drop the filter options?
4. **Analytics coverage.** 90 of 107 views sit outside the top-10. Should the hub show a "long tail" row, or is the top-10 enough?
5. **Un-serialised categories.** Three captured edit forms have no recoverable category; a fresh capture with the live value, or confirmation that the default is Business, would let the "not captured" option go.
6. **Undrawn documented features** (featured image, `commentsEnabled`, HTML content format, pin, duplicate, import/export, settings, admin reply): in or out of F21?
