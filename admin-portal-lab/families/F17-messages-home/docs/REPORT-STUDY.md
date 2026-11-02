# F17 · Report study

## Report and workbook reviewed

Read `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` end-to-end and opened all 10 workbook sheets: Executive Findings, Design Tokens, Page Inventory, Benchmark Patterns, CHANGE list, ADD list, KEEP list, Roadmap, Acceptance checklist, Sources. Where formatted workbook wording is shortened, the Markdown report governs.

## Findings touching F17

- Finding 6: queues are visible but not workable; header shows **99+ notifications / 21 messages**, and the console lacks broad keyboard/bulk triage.
- Finding 8: `/messages/new/group` is a captured 404, while `/messages/new-direct` is valid; creation URL grammar is inconsistent.
- Finding 9: dark-mode toggle exists but failed to engage in the captured test; every family must make both themes real.
- Finding 10: compressed operational type and no mono face make IDs/timestamps hostile.
- Inventory §4.1: Messages has 13 captured states; inbox, thread, reply/edit/mark-read and new-direct exist; group creation is broken; group-members panel was not live-verified.

## Applicable CHANGE items — all 5 variants

- **C3:** status badges require AA-safe text plus non-colour cue.
- **C5:** one locked admin-teal token system; no blue/violet brand leakage.
- **C9:** mono for references/timestamps where present; no invented UUIDs.
- **C11:** one consistent creation-route grammar; group route fixed locally as `/messages/new-group`.
- **C12:** keep body at readable ops density, elevate queue counts with display typography.
- **C18:** actual dark parity and URL boot, not a decorative toggle.
- **C20:** every logo image has a useful alt.

## ADD / KEEP / roadmap

F17 has no family-specific P1 ADD. Do not add the global bulk-action bar or saved views because this family prompt says none are targeted and message/thread mutation safety is not established by those suggestions. Keep inbox honesty, source copy, overview/inbox counts, teal + Inter identity, truthful empty/loading/error states. The report's P2 foundations and P6 responsive work support dark mode, mobile drawer, skeleton and error states. C11 is the main family correction.

## Acceptance checklist translated to F17

- One operator can identify the inbox route and the next reading action immediately.
- Home and inbox retain distinct captured totals; source snapshot label is visible.
- Search and captured filters work locally; no-match and reset are usable. Unverified row-level unread data is not fabricated.
- Direct and group compose are complete forms with validation; local submit shows “Preview only — nothing sent.”
- Thread and moderation links resolve to the F18 and F19 lab families.
- Status is text + icon + color, focus is visible, keyboard operates state navigation, responsive view has no page-level horizontal scroll.
- Empty/skeleton/error states exist; no network dependency or invented live freshness.

## Source-specific limitations

The report records unread badge **21**, whereas inbox capture `168` records unread **20** and waiting **10**. This is a capture discrepancy, not an error to “fix” by adjusting counts. Screenshots differ from HTML on displayed age (5 vs 25 days). New-group screenshot is intended-flow evidence; HTML is a production 404. These constraints are incorporated in every variant.

## Gate R

`Markdown YES · workbook 10/10 sheets · 7 C items mapped · A items mapped (no F17-targeted ADD) · KEEP YES · acceptance checklist adapted YES · Gate: PASS.`
