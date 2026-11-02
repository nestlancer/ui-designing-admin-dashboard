# F21 · Content · Blog + Editor — CONCEPTS (5 cards before code)

Written after Gates S/R/A/T passed. All five share the locked teal tokens and the same shell contract (full-width canvas beside a collapsible sidebar; 248 px → 64 px named rail ≤ 1180 px → drawer < 620 px; state in `localStorage`). All five contain the same frozen content: 6 tabs, the 20 captured page-1 posts, the 4 captured comments, the captured empties, the analytics KPIs + top-10, the taxonomy lists, and the editor with the captured fields, placeholders and writing stats. What differs is the page.

Axes (master §8.2): **A** layout · **B** hierarchy · **C** narrative · **D** density · **E** interaction. Rule: any two variants differ on ≥ 3 axes; neighbours never share A + C.

---

## V1 · Ground-truth desk — "the capture, corrected"

```
┌ eyebrow CONTENT OPERATIONS · h1 Blog · lede        [View live blog] [New post ▸ /content/posts/new]
│ HERO  110 published · 0 drafts · 0 pending · 0 reported   ← verdict line   (shot · 2026-10-30)
│ STRIP  Total posts 110 | Published 110 | Drafts 0 | Pending comments 0 | [Scheduled·Archived not counted]
│ TABS  Posts · Comments · Pending · Reported · Analytics · Taxonomy
│ toolbar: search · status · list/grid · (provenance ⓘ)
│ TABLE  POST | CATEGORY | STATUS | PUBLISHED | STATS | [Edit] ⋮
│ Showing 1–20 of 110 · 20 per page
│ ▼ editor opens in-page beneath the desk (Write/Split/Preview)
└ footer © 2026 Nestlancer · Terms · Privacy · host · Secured·HTTPS
```
- **A** captured order (head → hero/strip → tabs → table), single column. **B** hero verdict > strip > table. **C** "what the product shows today, made safe and honest". **D** comfortable (13 px rows, 48 px row height). **E** overflow menus, confirm dialogs, undo toasts, provenance popovers.
- Art direction: a faint teal "proof grid" (dot grid + one hairline rule) behind the hero, like a desk blotter; tie-out chips as stickers on the strip.
- Editor: loads the DOM-canonical post (Agentic CI/CD, 230 w) — states it.

## V2 · Editor spine — "one post, start to finish"

```
┌ topbar
│ ┌ posts rail (20) ┐ ┌ WRITING SURFACE ───────────────────────┐ ┌ right column ─────────┐
│ │ search          │ │ h1 Edit post · ← Back to blog           │ │ Status · Save changes │
│ │ ● Cutting…  4v  │ │ [Write][Split][Preview]                 │ │ Publish… / Schedule…  │
│ │   Kubernetes…   │ │ Title / Excerpt / Content (Markdown)    │ │ Settings: category…   │
│ │   …             │ │   or split: editor | Instant preview    │ │ SEO: meta + counter   │
│ └ desk tabs ↓     ┘ │                                          │ │ snippet (derived)     │
│   Comments · Pending│                                          │ │ Writing stats         │
│   Reported · Analyt.│                                          │ │ Revisions (DEMO)      │
│   Taxonomy (stack)  └──────────────────────────────────────────┘ └───────────────────────┘
```
- **A** three columns (rail · surface · settings), desk tabs stacked under the rail. **B** the text field is the biggest object on screen; the desk is secondary. **C** "ship one correct post". **D** dense rail, comfortable surface. **E** segmented modes, sticky save bar, publish/schedule confirm with recap, revision restore confirm.
- Art direction: a paper-margin rule and line numbers along the writing surface; a kinetic word counter (transform only).
- Editor: loads the Split/Preview shot post (Cutting Deploy Time, 383 w, 2 min, 80/160) — states it; body is marked "body text not captured for this post — DEMO placeholder paragraphs" (only the title/category/tags/stats are captured).

## V3 · Review desk — "clear the discussion, then publish"

```
┌ h1 Blog · verdict: 4 approved comments · 0 pending · 0 reported · 110 published
│ ┌ LANES ───────────────┐ ┌ CONTEXT PANE ───────────────────────────┐
│ │ Pending (0)          │ │ Post: GDPR Compliance Platform Rebuild   │
│ │   queue clear        │ │ Comment by Arjun Mehta · Oct 6 9:36 AM   │
│ │ Reported (0)         │ │ "…AUDIT-SEED text…"                      │
│ │   none               │ │ [Approve][Reject][Spam] ⋮ Delete         │
│ │ All comments (4)     │ │ keys: j k · a r s · z undo · ? help      │
│ │   ▸ row (focus)      │ └──────────────────────────────────────────┘
│ └──────────────────────┘
│ ▼ secondary: Posts table (compact) · Analytics · Taxonomy as collapsed sections
```
- **A** two-pane master-detail (lanes left 38 % · context right). **B** queue counts first, post list demoted. **C** "moderation before publication". **D** compact lanes, roomy context. **E** roving tabindex + keyboard triage (A2), next-item advance (A5), confirm + undo, `?` dialog.
- Art direction: lane headers as teal index tabs (offset layers); focus row carries a hand-drawn teal bracket.

## V4 · Dense console — "everything on one screen"

```
┌ strip: 110 | 110 | 0 | 0  · density [comfortable|compact] · period
│ ┌ dense table (12 px) ───────────────────────────┐ ┌ side ─────────────┐
│ │ ☐ POST | CAT | STATUS | PUBLISHED | min | views | │ │ Taxonomy (4/6/1)  │
│ │ … 20 rows · row click → preview drawer           │ │ Merge tags        │
│ └──────────────────────────────────────────────────┘ │ Revision recovery │
│ Comments (4) · Pending (0) · Reported (0) · Analytics top-10  as tab strip under the table
│ ▶ drawer: captured post (title, meta, stats, body) + per-post performance (DEMO) + actions
```
- **A** bento: table + side column + bottom tab strip; drawer overlays from the right. **B** the table is the hero; no big display numbers except the 4-cell strip. **C** "operate the whole blog from one screen". **D** compact by default (A10 density toggle). **E** multi-select that "prepares N single requests", drawer, density toggle, column visibility persisted.
- Art direction: console chrome — mono labels, hairline grid, a teal "cursor" indicator on the active row.

## V5 · Publish choreography — "a guarded publish, step by step"

```
┌ h1 Blog · stage for ONE post (selectable from the folded desk)
│   ●──────●──────●──────●      Draft → Review → Schedule → Publish   (one dashoffset line)
│   step panel: what changes · which endpoint · what the receipt will say
│   [Back] [Next]          final: receipt + 10 s undo window (counts down)
│ ▸ folded desk: Posts · Comments · Pending · Reported · Analytics · Taxonomy (details/summary)
```
- **A** centred stage (max 960 px reading column, allowed by §9.2a for reading/dialog content) over a folded desk. **B** the step panel dominates; numbers reduced to the receipt. **C** "every publish is a ceremony with a paper trail". **D** sparse. **E** motion-led: panel transitions (transform/opacity), progress line (the single stroke-dashoffset element), countdown undo; reduced-motion removes all of it.
- Art direction: teal stage lights (radial gradients inside the ramp), stamped receipt.

---

## Difference test (axes that differ)

| pair | A | B | C | D | E | count | A+C both differ? |
|---|---|---|---|---|---|---|---|
| V1–V2 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V2–V3 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V3–V4 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V4–V5 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V1–V3 | ✔ | ✔ | ✔ | – | ✔ | 4 | yes |
| V1–V4 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V1–V5 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V2–V4 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |
| V2–V5 | ✔ | ✔ | ✔ | – | ✔ | 4 | yes |
| V3–V5 | ✔ | ✔ | ✔ | ✔ | ✔ | 5 | yes |

Coverage: minimal = V5 · dense = V4 · editor-led = V2 · desk-led = V1/V3 · motion-led = V5.

## Coverage of CHANGE items (5/5 each)

C11 canonical routes in mono · C17-by-analogy confirm → receipt → undo · C3 AA badges with icon + text · C5 teal-only · C9 mono IDs/slugs/timestamps · C12 display count in hero/strip · C15 no cookie banner · C18 dark parity · C20 logo alt · C4 one table + card fallback · C19 "Showing 1–20 of 110".

## States every variant renders

Ready (captured) · Loading (shaped skeleton) · Empty (captured empties completed with why/next; posts "No posts match your filters") · Error (`role=alert`, focus, retry) · Publish/Schedule/Unpublish/Archive/Delete confirm · Receipt + undo window · Editor Write/Split/Preview · New post (disabled Create until title) · dark · 360–2560 · no-JS figures.

## GATE 1 (F21) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS (min 4 axes, neighbours never share A+C) · C 5/5: YES · P1 5/5: n/a (no F21-targeted P1 ADD; A2/A5 declared craft in V3) · P2-P3 ≥3/5: YES (provenance popovers 5/5, density V4, receipts 5/5) · Gate: PASS
