# F21 · Content · Blog + Editor — REPORT STUDY (Gate R)

Sources read in full: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` (353 lines; `.md` wins on conflict) and `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` (10 sheets: Executive Findings · Design Tokens · Page Inventory · Benchmark Patterns · CHANGE · ADD · KEEP · Roadmap · Acceptance checklist · Sources). Only rows that touch Content / Blog / the editor / cross-cutting shell rules are quoted; nothing is paraphrased into a new requirement.

## 1. Rows that name Content directly

| Where | Quote (verbatim) | F21 consequence |
|---|---|---|
| §1 Finding #8 | "**Dead routes reveal IA drift:** `/messages/new/group` → 404, **`/content/new` → 404 (canonical is `/content/posts/new`)**, `/payments/transactions` → 404 … Creation flows have no consistent URL grammar" (Medium) | C11 — one creation/edit grammar: `/content/posts/new`, `/content/posts/{id}/edit`; printed in mono on the New post button, the editor header and the row Edit link |
| §2.2 | "Operator profile (051), contact reply (008), group members (079), quote custom-schedule (097), quote-new-from-request (058), **content card view (071)** — No route / no state change via automation — Documented as gaps; screenshots remain baseline" | Card view is a `shot`-only state; kept as the grid toggle with provenance |
| §2.2 | "`/messages/new/group`, **`/content/new`**, `/payments/transactions` — **404 — routes don't exist** — 404 states captured as evidence of IA drift (§1.8)" | same as C11 |
| §3.1 | "**CONTENT** · Blog · `/content` (+ `/content/posts/[id]`, `/content/posts/new`) · 6 tabs; Write/Split/Preview editor" | baseline IA confirmed; note the report writes `/content/posts/[id]` while the capture's edit route is `/content/posts/{id}/edit` |
| §4.1 row Content | "Content · 17 · ✅ OK · 009–014, 066–069 · 6 tabs, editor Write/Split/Preview, new-post page · `/content/new` 404 (use `/posts/new`); card view + template editors unverified" | 17 report states vs 18 captures (192 `/content/posts/new` was a top-up); "template editors" belong to System, not F21 |
| XLSX 3 · A13 | "/content (+posts/*) · 17 · OK · 009-014, 066-069 · 6 tabs, Write/Split/Preview editor, new-post · /content/new 404; card view + template editors unverified" | agrees with §4.1 |
| XLSX 1 · #8 | "Dead routes: /messages/new/group, /content/new, /payments/transactions = 404 · 3 verified 404 captures · 167/171/184 · MEDIUM" | capture `171` is the F21 404 |

## 2. CHANGE items applied to F21 (report §6.1 / XLSX sheet 5)

| # | Quote | Target in report | How F21 applies it (5/5 unless stated) |
|---|---|---|---|
| **C11** | "**Unify creation URL grammar** — Messages, Content, Payments — `/messages/new-group` or dialog-only (pick one); **redirect `/content/new` → `/posts/new`**; kill `/transactions` guess — Finding #8; IA integrity" (P1) | Content | New post / Edit / Back links all use `/content/posts/new` and `/content/posts/{id}/edit`; the 404 is shown in the provenance popover as the reason |
| **C17** | "**Give destructive rows an undo window** — **Portfolio, Moderation, Media** — 10s undo toast for Unpublish/Remove/Delete/Dismiss — Safety net; [9]" (P5) | *not Content* | Applied **by analogy** and labelled so: Unpublish / Archive / Delete (posts) and Reject / Spam / Delete (comments) → confirm → receipt → 10 s local undo. No API rationale field is invented (approve/reject/spam take no body) |
| C3 | "Fix success/info badge contrast — All pages — Darken text like warning was … keep dot + text" (P1) | all | tokens' AA status text; status = icon + colour + text |
| C5 | "Rename + purge token leaks — `--brand-violet` → `--brand-teal`; delete/rescope `--article-accent`, `--tw-ring-color`" (P1) | design system | teal-only art, no blue anywhere (the live preview's `--article-accent` blue is not reproduced) |
| C9 | "Mono + full IDs on hover — `font-mono` for IDs/refs/timestamps; full value on hover; click-to-copy keeps working" (P1) | Requests/Users/Payments/Audit | post IDs, slugs, category IDs, endpoints and timestamps in mono; full UUID on hover/expanded; copy kept where the capture had it (none in F21 → copy button only on IDs, labelled) |
| C12 | "Compress type for ops, hero for money — Keep 12–14px density; add 32–40px display for ₹ amounts + queue counts" (P1) | all | hero count (posts / queue) at display size; table body 12.5–13 px |
| C15 | "Remove the cookie banner for operators" (P1) | shell | Dismiss/Accept banner present in every DOM capture is not drawn |
| C18 | "Repair dark mode or remove the toggle" (P1) | shell | real dark parity + `?theme=` boot |
| C20 | "Logo alt text — every page currently reports 1 missing-alt image" (P1) | shell | logo pair with `alt` |
| C4 | "One table per page — single table + CSS card-fallback" (P1) | lists | one `<table>` + CSS card fallback under 620 px (no duplicated tables) |
| C19 | "Add table pagination info everywhere — 'Showing 1–20 of N' + page size + total" (P1) | lists | posts list prints "Showing 1–20 of 110 · 20 per page"; comments list prints "4 rows captured · total not shown by the product" |
| C8 (by analogy) | "Tame the 152-stop focus page — Roving tabindex on rows; actions in an overflow menu" | Notifications | the posts list's 120 controls/page is the same disease → Edit + overflow, roving focus on comment rows (V3 keyboard triage) |

## 3. ADD items (report §6.2 / XLSX sheet 6)

No ADD row names Content. Two cross-queue P1 rows are applied where F21 has a queue, declared as *family craft, not a report target*:

| # | Quote | F21 use |
|---|---|---|
| A2 | "**Keyboard triage** (`j/k` move, `x` select, `e` advance, `/` search, `?` help) — All queues — P1" | V3 (comments queue) implements j/k + a/r/s with confirm + `?` help; other variants keep tab/arrow keyboard completeness only |
| A5 | "**Queue → detail → advance loop** (next-item after action, stays in flow) — Requests, Verification, Contact, Moderation — P1" | V3 advances focus to the next comment after a decision |
| A1 | "**Bulk-action bar** … checkboxes already exist" | **not applied** — F21 has no checkboxes in the capture and no batch endpoint in `blog.openapi.json`; where V4 offers multi-select it says "prepares N single requests" |
| A10 | "Density toggle (comfortable/compact) — Shell — P2" | V4 only (3 of 5 not required: P2 coverage rule met by V1 provenance popovers, V4 density, V5 receipt) |

## 4. KEEP rows that bind F21 (report §6.3)

- "**Microcopy honesty** … keep the voice" → all captured ledes, placeholders, tips and empty headings are frozen.
- "**Teal + Inter + 6px radii ops identity** … document the split, don't merge blindly" → locked tokens.
- "**⌘K command palette + keyboard hints**" → topbar search link to F03 + `?` shortcuts dialog.
- "**Reason-required safety dialogs**" is a Users KEEP; for F21 the confirm dialog keeps the *pattern* (what will happen + which endpoint) without inventing a reason field the blog API cannot carry.

## 5. Pattern library + acceptance rows used (report §5.2, §7.1)

| Pattern / gate | Report wording | F21 reading |
|---|---|---|
| Verdict-first strip | "Extend to every queue page" | hero line: "110 published · 0 drafts · 0 pending comments · 0 reported" with provenance |
| Explain every number | "Add deltas + plain-English why" | no deltas are captured → none invented; "why" = provenance popover + tie-out notes |
| Status ≠ colour alone | "Fix success/info text tokens" | badges with icon + text |
| Destructive confirmations | "Keep; add undo window where feasible" | confirm + undo |
| Empty/loading/error states | "Design skeletons + sparse-chart + degraded banners" | shaped skeletons; honest empties; `role=alert` error |
| §7.1 Tables | "Search, filter, status badge, sort, pagination + totals, bulk select, mobile card-fallback — one table per page" | all except bulk select (no endpoint) |
| §7.1 Safety | "Destructive actions reason-confirmed + audited + undoable where feasible" | confirm + receipt + undo; *audited* is not claimed (no audit endpoint in the blog spec) |
| §7.1 Navigation | "live badges on queue-bearing items" | sidebar badges only for counts the captures carry (Inquiries 14, Notifications 99+, Requests 11, Messages 21); Blog has no captured count → no badge |

## 6. Conflicts between report and capture (recorded, not resolved)

1. Report §3.1 route `/content/posts/[id]` vs captured `/content/posts/{id}/edit` → the lab follows the capture.
2. Report counts 17 Content states; the repo holds 18 (`192` top-up) → 18 used.
3. C17's target list excludes Content → applied by analogy and labelled in UI and docs.
4. Report §3.3 "Buttons 12–57 per page" was measured on pre-data DOM; the populated screenshot shows 120+ on `/content` → the F21 row-action finding is new evidence from this run, not a report claim.

## GATE R (F21) · MD: YES · XLSX: 10/10 · C: 11/11 applied (C11, C17-by-analogy, C3, C5, C9, C12, C15, C18, C20, C4, C19; C8 by analogy) · A: 2/2 cross-queue P1 declared as craft (A2, A5), A1 explicitly not applied (no endpoint), A10 in V4 · KEEP: YES · Gate: PASS
