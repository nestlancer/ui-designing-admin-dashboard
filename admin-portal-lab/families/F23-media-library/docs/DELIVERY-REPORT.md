# F23 · Media Library — Delivery report (3 November 2026)

**Scope:** F23 only. F01–F22 lab results were preserved untouched; F24/F25 were not run. Prompt updates for this run are F23-only; revising the F01–F22 HTML pages and all AI prompts waits for the owner's review, as instructed.

## What was done, in order

1. Read `admin-portal-prompt.md` end-to-end and all 25 family prompts + pack README.
2. **Gate S** — opened all 9 F23 screenshots, parsed all 7 HTML DOM states and their `audit-metadata.json` rows; transcribed exact labels, figures, dialogs and conflicts.
3. **Gate R** — read the 353-line research report and all 10 XLSX sheets; quoted C17/C19/C3/C5/C9/C12/C18/C20, A1, KEEP and §2.2.
4. **Gate A** — studied `media.openapi.json` (50 paths / 57 operations), all DTOs, enums, query params and responses; recorded missing endpoints and undocumented response fields.
5. **Gate T** — 6 searches, 12 references opened after S/R/A; mapped patterns to variants and listed rejected features.
6. Printed all four gate blocks, then updated `admin-portal-prompts/F23-media-library.md` with a dated evidence-led Run revision (R1–R7) plus corrected §4/§6/§7 lines.
7. Wrote 5 concept cards **before** code, then hand-authored V1–V5 one by one.
8. Merged F23 into the gallery, `manifest.json` and `DECISIONS.md`; started preview on `:8131`.
9. Ran a **simple smoke test** only (owner instruction: "only test it simple … we will review it manually").

## Files

```
admin-portal-lab/families/F23-media-library/
  boot.js  media.css  media.js  fixtures.js                 shared, hand-authored family runtime
  V1/…V5/ index.html + theme.css                          5 hand-authored variants
  docs/ BASELINE-MAP.md  REPORT-STUDY.md  API-MAP.md
        TEMPLATE-RESEARCH.md  CONCEPTS.md  GATE-EVIDENCE.md  DELIVERY-REPORT.md
```

No generator script produced any variant HTML or CSS. `media.js` is shared runtime behaviour (shell, tabs, filters, drawer, dialogs, staged upload, bulk bar, undo, keyboard, states); it never writes files and never issues an HTTP request. `fixtures.js` is hand-transcribed captured data with per-item provenance. Every variant imports `shared/tokens.css` and `shared/base.css` **AS-IS** — no token edits.

## Simple smoke test (actually run)

Playwright/Chromium against `http://127.0.0.1:8131`, 1440×900, `?theme=light`:

```
V1: http=200 cards=8  tabs=3 panels=3 rail=18 drawer=1 darkToggle=true jsErrors=0
V2: http=200 cards=10 tabs=3 panels=3 rail=18 drawer=1 darkToggle=true jsErrors=0
V3: http=200 cards=8  tabs=3 panels=3 rail=18 drawer=1 darkToggle=true jsErrors=0
V4: http=200 cards=10 tabs=3 panels=3 rail=18 drawer=1 darkToggle=true jsErrors=0
V5: http=200 cards=8  tabs=3 panels=3 rail=18 drawer=1 darkToggle=true jsErrors=0
```

Checked: HTTP 200, card render, 3 tabs, 3 panels, 18-item shell rail, first card opens the drawer, Escape closes it, theme toggle adds `.dark`, zero page/console errors. `?theme=dark` boot was also opened. All 16 distinct sidebar/topbar/footer links resolve with HTTP 200 inside the offline lab, and the gallery returns the F23 section. **Not run:** full 360–2560 width matrix, axe-core audit, exhaustive interaction matrix, cross-browser checks. Those are deferred to the owner's manual review; **no unrun QA is claimed**.

## Coverage in all 5 variants

- Storage / Quarantine / Analytics tabs with frozen labels; type + source chips, search, status + sort selects, grid/list toggle, "Select page", C19 "Showing 1–N of 146 · page 1 of 7".
- Clickable cards → detail drawer with captured metadata, 2 references warning, share links, actions, mono IDs and "field names not documented in Swagger".
- Captured share-link (075) and edit-metadata (076) dialogs with required-purpose validation and a labelled local receipt.
- Quarantine default = exact captured empty state; two LOCAL DEMO review rows exercise Release / Reprocess / Purge with reason + preview + confirm + **10-second local Undo** (C17).
- Staged upload (no shot): request → progress → confirm → done / abort / failure, printing the documented endpoints; no bytes are sent.
- Analytics: 146 / 19.3 MB / 0 / 0, four type rows, an honest sparse "Uploads (last 30 days)" note, Preview cleanup (`dryRun=true`) and Run cleanup with confirmation.
- A1 corrected bulk bar: count, Clear, local-prep Tag/Move, Delete (N) behind preview + confirm + undo. No Quarantine bulk action.
- Empty / skeleton / error / upload-progress / undo states; light + dark; `?theme=` boot; collapsible full-width shell; roving grid keyboard + drawer focus trap; reduced-motion; no-JS summary.
- C3/C5/C9/C12/C18/C20/C17/C19 in 5/5; KEEP library structure + microcopy + teal in 5/5.

## Size (disclosed)

Shared runtime + tokens = 91,715 B raw / 24,934 B gzip. Per-variant own files 23.6–26.1 KB. **Total page weight ≈115.3–117.8 KB raw / ≈30.8–31.3 KB gzip**, above the prompt's ≤70 KB/variant soft budget because the family shares one full shell + dialogue runtime. Disclosed rather than hidden; no image assets or CDN requests are used.

## Provenance & honesty

Captured figures (146 files, 19.3 MB, 0 quarantined, 118/28 buckets, four MIME rows) are historical 30 Oct 2026 captures, not live telemetry. Conflicts (309.1 KB vs 30.91 KB; 145 vs 146; badge 21 vs 20; PENDING; "Display name") are surfaced in the Source-details dialog and `BASELINE-MAP.md`, never repaired. No folder rows, no quarantined assets, no real thumbnails, no 30-day series, no scan verdict, no bulk tag/move endpoint, no server response, permission, audit or undo result is invented. The four dialogs are report §2.2 gaps; shots 073/075/076/077 are the baseline, not live DOM. Four demo-only surfaces plus two local-prep controls are labelled. No production data was modified; no push/commit/branch; no input captures edited.

## Winner (for owner review)

**V1 · Ground-truth desk** — it keeps the captured tab/filter/bucket order, surfaces the numeric conflicts in a ledger, and adds working card→drawer, guarded deletes and a 10-second undo without inventing a dataset. V2 is the strongest visual alternative; V3 the strongest trust-first alternative. Owner may override.

## Preview & limits

Live preview: `http://localhost:8131/` → gallery → **F23 · Media Library** (server bound to `0.0.0.0`). Pages must be opened through the server (relative `shared/`, `assets/` and family paths); a standalone `file://` open will lose the shared tokens and scripts. Manual review requested before any F01–F22 HTML or all-prompt revisions.
