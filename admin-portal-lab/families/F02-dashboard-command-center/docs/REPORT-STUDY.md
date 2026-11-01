# F02 · Report study — Gate R

Read `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` in full and opened all 10 sheets of `Nestlancer_Admin_Console_UI_Research_Report.xlsx`: Executive Findings, Design Tokens, Page Inventory, Benchmark Patterns, CHANGE, ADD, KEEP, Roadmap, Acceptance checklist, Sources. The Markdown wins any prose discrepancy; the capture wins for time-dependent values. Crucially, the Markdown's C1 example says 7 quotes; later snapshot 02 says 0 (see BASELINE-MAP). Spreadsheet page inventory calls the request strip non-drilling, while 02 actually has links; improve destination/age clarity rather than asserting the links are absent.

## Findings relevant to F02 (report §1)
1. Projects API failure; provide honest degraded rather than pretend data is fresh.
3. Refresh instability; do not silently imply a real authenticated session.
4. Admin teal + Inter vs client blue/violet; document separation.
5. Success/info badge text lacks AA contrast.
6. Queues visible but not workable; header 99+/21.
7. “Needs attention” is verdict-first done right; identical “↑ new” KPIs have no explanation.
9. Dark-mode CSS exists but toggle did not engage.
10. Compressed typography and no mono for IDs.
12. Duplicated responsive tables elsewhere; avoid duplicate tables.
13. Sparse dashboard charts collapse to a single spike.
14. 17 sidebar entries have no nav badges.

## F02 CHANGE coverage (11 items, each applies to every variant)
| ID | Requirement |
|---|---|
| C1 | One dominant hero: the **16 pending payments / ₹2,60,790.00 awaiting** from the later capture, plus compact supporting metrics. |
| C2 | All six attention cells must open the correct queue-context preview; mark unverified age as unavailable, never invent `oldest 6d`. |
| C3 | Status always has text and shape/icon; readable in both themes. |
| C5 | Reuse `shared/tokens.css` unchanged; admin teal versus client blue is deliberate. |
| C6 | Hub-grouped navigation and count badges; preserve 99+/21. |
| C9 | Monospace IDs / timestamps; full value available. |
| C10 | Label both chart axes/units, surface points/latest and an honest sparse state. |
| C12 | 32–40px display figure for the dominant ₹ or count. |
| C15 | Drop cookie-consent banner in this essential-only static console. |
| C18 | Actual light/dark control with query boot and persistence. |
| C20 | Shared Nestlancer mark with meaningful alt. |

## ADD / KEEP
A9 (P2): operator action/handover digest — `not available in this snapshot` rather than invented counts; A11 (P2): reachable degraded banner with retry/clear explanation; A13 (P3): ops-health mini-grid — unverified per-area statuses say `Not checked`. Each targeted ADD is intended in 5/5 variants, exceeding ≥3/5. No targeted P1 additions specific to F02. KEEP: Needs-attention strip, ⌘K and keyboard hints, honest microcopy, teal/Inter/6px identity, settlement awaiting amount. Safety dialogues, quote stepper, payment tabs and capacity card are preserved by their own families; F02 must not claim to implement them.

## Benchmark patterns and roadmap
Report §5.2: one dominant metric [2]; explain each number [1]; labels + sparse charts [7]; density follows expertise [2]; health grid [2]; dark parity [7]. Report §7: P0 production fixes, P1 accessible foundations, P2 triage, P3 dashboard, P4 money depth, P5 trust/handover, P6 responsive, P7 polish. The static lab does not repair production.

## Acceptance checklist — apply to each variant
- [ ] Hierarchy: immediately see priority queue and amount awaiting.
- [ ] Triage: real queue work is deferred to other families; preview is honestly labelled and keyboard-operable.
- [ ] Queues: no fabricated ages, assignees, saved views, or escalation.
- [ ] Tables: one semantic table per dataset; responsive without duplicating DOM; labelled status, IDs, row targets.
- [ ] Navigation: grouped, queue badges, search/palette with keyboard; no broken local routes.
- [ ] Colour: one teal ramp, status icon/text, adequate contrast.
- [ ] Typography: Inter/system stack, mono references, display money/count.
- [ ] Dark parity, skip link, focus visibility, keyboard / dialog focus, alt.
- [ ] Honest empty, skeleton, error, sparse, degraded states.
- [ ] Safety: no real mutations in static preview.
- [ ] Mobile: no page overflow or clipped controls at 360/390/768/1024/1440.
- [ ] Performance: local assets only; production session and FCP requirements cannot be asserted from static mock.
- [ ] Legal/ops: footer, scope and historical-data honesty.

**Gate R: PASS** — 10/10 sheets, 11/11 F02 C items, 3/3 targeted ADDs, KEEP and checklist recorded.
