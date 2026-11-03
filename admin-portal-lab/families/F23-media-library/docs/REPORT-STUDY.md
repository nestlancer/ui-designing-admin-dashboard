# F23 · Media Library — Report study (Gate R)

**Read:** `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` (353 lines, full) and all 10 sheets of `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` (`1. Executive Findings`, `2. Design Tokens`, `3. Page Inventory`, `4. Benchmark Patterns`, `5. CHANGE list`, `6. ADD list`, `7. KEEP list`, `8. Roadmap`, `9. Acceptance checklist`, `10. Sources`). `.md` wins on conflict.

## F23-specific report rows

| Where | Row | Verbatim / meaning |
|---|---|---|
| §2.2 | Media dialogs | "Media asset details / share-link / metadata / list view (073, 075–077) — No asset links in index DOM (JS grid/cards) — Index + Storage/Quarantine/Analytics + Browse-files captured; dialogs flagged for manual QA" |
| §3.1 | IA | "Media Library · `/media` · Storage/Quarantine/Analytics + type/source filters" |
| §3.3 | Component census | "Contact chips, moderation queue/history, **media filters are plain buttons** — ⚠️ Works, but no `aria-pressed`/selected semantics" |
| §4.1 | Media | "6 · ⚠️ Partial · 018, 019, 021, 074 · Storage/Quarantine/Analytics, type+source filters, Browse-files · Asset open/share/metadata/list-view all unverified (JS grid)" |
| §4.3 | Verification | "83/119 reproduced live … 36 unmatched: … 4 media dialogs … No contradictions found" |
| XLSX sheet 3 | A15 | `/media` · 6 · PARTIAL · 018, 019, 021, 074 · "Asset open/share/metadata/list-view unverified" |
| §7 roadmap | P5 | "template/media/user-pipeline gap closure, undo windows" |

## CHANGE items in F23 scope (7/7)

| ID | Report text | F23 implementation |
|---|---|---|
| **C17** | "Give destructive rows an undo window — Portfolio, Moderation, **Media** — **10s undo toast** for Unpublish/Remove/Delete/Dismiss" | All 5 variants: preview + confirm for Delete / Release / Purge / Run cleanup, reason for review decisions, and a 10-second local Undo toast. **Correction:** the F23 prompt's original "context + reason + confirm" reading is not what C17 says; both layers are now present. |
| C3 | AA-safe success/info badge contrast | Locked `--status-*-text` tokens from `shared/tokens.css`; status badges use dot + colour + text. |
| C5 | Rename/purge token leaks, teal only | One locked token file, no local colour overrides; no violet/blue tokens. |
| C9 | Mono for IDs/refs/timestamps | Drawer metadata, media ID, references, endpoints and pagination use `var(--mono)`. |
| C12 | Display size for counts | V1 ledger, V3 trust band, V4 status strip, V5 choreography use display-scale captured counts. |
| C18 | Repair dark mode | `?theme=` boot + real `.dark` parity + theme toggle; both themes smoke-tested. |
| C20 | Logo alt | Shared lab logo pair with `alt` on every variant. |
| **C19** (additional) | "Add table pagination info everywhere — Requests, Quotes, Audit, **Media** — 'Showing 1–20 of N' + page size + total" | All 5 variants print "Showing 1–N of 146 · page 1 of 7" plus honest conflict annotation. **Not in the F23 prompt's CHANGE list**; added from the report. |

## ADD items in F23 scope (1/1)

- **A1 — Bulk-action bar.** Report §6.2 targets **Requests, Users, Contact, Verification, Audit** — *Media is not listed*. The XLSX sheet 6 repeats that target list. Applying A1 to F23 is therefore an **extension**, justified by the captured "Select page" checkbox (074 / 077) and `POST /api/v1/admin/media/bulk-delete`; it is not a report mandate. Corrected implementation: count + Clear + "Tag…"/"Move…" explicitly labelled *local preparation (no bulk endpoint)* + "Delete (N)" behind preview/confirm/undo. **No "Quarantine" bulk action** (see API-MAP).

## KEEP

- "Library structure (storage + quarantine + analytics)" — preserved in all 5 variants as three tabs with the same labels.
- "Microcopy honesty" and "Teal + Inter + 6px radii ops identity" — exact captured strings and locked tokens preserved.
- Reason-required safety dialogs, ⌘K hints, one dominant accent, matching dark mode — respected.

## Findings that constrain the build

Finding #5 badge contrast, #6 queues visible but not workable (checkboxes with no bulk bar), #9 dark mode unreachable, #10 compressed type / no mono, #13 charts with no sparse-data treatment, #14 no nav badges. §7.1 acceptance checklist: one table per page, status = icon+colour+text, text ≥ 4.5:1, mono IDs, empty/loading/error states, destructive actions reason-confirmed + undoable where feasible, 375/414/768 pass, no dead controls.

## Honesty constraints adopted

§2.2 dialogs were never captured live; no server result, permission check, audit outcome, scan verdict or operator identity may be claimed. §4.3 says "No contradictions found" for reproducible screens, but the shots and DOM captures do contain the numeric conflicts listed in `BASELINE-MAP.md` — those are documented, not silently corrected.
