# F03 · Delivery report

**2026-11-02 · Ready for owner review.** Five hand-authored command-palette designs, same locked teal tokens. F01/F02 HTML/CSS/JS untouched. No prompt edits yet: apply the owner's upcoming feedback to pages and AI prompts afterward.

## Files / preview

- `admin-portal-lab/families/F03-global-search-command-palette/V1/index.html` — **Compass**
- `…/V2/index.html` — **Dispatch**
- `…/V3/index.html` — **Dossier**
- `…/V4/index.html` — **Needle**
- `…/V5/index.html` — **Relay**
- Family primitives: `palette.css`; interaction-only controller: `palette.js`.
- Six required study/delivery documents in `docs/`; QA JSON and 20 desktop/mobile, light/dark screenshots accompany them.
- Gallery section and five manifest records merged; DECISIONS F03 section appended. Existing family records preserved.

Run from repo root:
```sh
python3 -m http.server 8131 --bind 0.0.0.0
```
Open `/admin-portal-lab/#F03-global-search-command-palette`. Current live preview uses the same port and static paths, with `/` redirected to that gallery section for convenience. F03 pages open the palette automatically; use `?palette=closed` to inspect the shell or `?theme=dark|light` for explicit theme boot.

## Delivered behavior

34 commands = 26 unique captured actions + 8 endpoint-backed completeness additions. Duplicate Inquiries consolidated. Captured four groups and input/footer wording retained. Full mouse/keyboard filtering, ↑/↓, Enter, Escape/back, Ctrl/Cmd K, / focus (outside fields), Ctrl Home/End, shortcut help, theme command. Native modal with explicit focus restoration and boundary handling. Recent IDs persist locally, initially genuinely empty. Loading skeleton, focused alert+retry, no-results, empty-recents and local route/record/creation handoffs are reachable. Two fixture records are labelled historical; no individual payment ID invented. No real API call or production mutation.

## Gate results

- **S PASS:** screenshot 1/1; HTML 1/1 + corresponding metadata; 27 captured rows / 26 unique actions; one known dead group route repaired with demo handoff.
- **R PASS:** MD + all ten workbook sheets; C3/C5/C9/C12/C18/C20 and KEEP mapped; applicability and source discrepancies documented.
- **A PASS:** six core specs plus seven supporting service mappings; all 34 actions mapped or demo-disclosed; no global fan-out endpoint assumed.
- **T PASS:** eight working references opened after S/R/A; failed Linear/Framer links excluded.
- **1 PASS:** five cards/sketches, three comparison tables, ≥3-axis pairwise difference including geometry/narrative.
- **2a PASS:** V1 pilot in Chromium, initial 14 width/theme checks and screenshot inspection before siblings.
- **2b PASS:** V2–V5 individually re-authored from one copied skeleton at a time; no page-generation script.
- **3 PASS for tested prototype scope:** 384/384 functional/geometry checks, 0 runtime errors; 80 axe state scans with 0 detected WCAG A/AA violations; 20/20 wide-shell expand/collapse measurements.

## Empirical verification

Environment: headless Playwright Chromium 156, Linux. `docs/verify.cjs` only reads/exercises designs and writes QA evidence. It never creates/overwrites page HTML/CSS/JS.

| Check | Coverage / result |
|---|---|
| Functional + responsive suite | `QA-RESULTS.json`: 384 passed / 384, 0 failed, 0 JS runtime errors |
| Widths | 360, 375, 390, 414, 768, 1024, 1440, 1920, 2560; all five × light/dark; no page overflow or settled-dialog clipping |
| Command completeness | Every one of 34 actions clicked in every variant; handoff or real local theme action; no dead CTA |
| Search/records/queues | User fixture, payment-context honesty, approval queue mapping, invalid query, no dangling active descendant |
| State loop | Empty recent, populated recent, skeleton, focused error, retry, help, back, focus restore |
| Shell | Desktop collapse + reload persistence; mobile drawer + Escape/focus return; shared F02 storage keys |
| Wide-shell geometry | `WIDE-SHELL-QA.json`: 1920/2560 × both themes × all five; expanded width = viewport−232, collapsed = viewport−68; 20/20 |
| Accessibility scanner | `AXE-RESULTS.json`: 80 scans = five × two themes × 390/1440 × palette/handoff/error/closed-shell; no detected violations |
| Motion | Reduced-motion emulation removes animation; transform/opacity only; screenshots captured after settling |
| Offline/no-JS | 0 external requests while exercising pages; no-JS fallback exposes full baseline/API-map documents + real dashboard/gallery links |
| Static integrity | No missing local href/src targets, no `href="#"`, no remote assets, no duplicate IDs; valid manifest retains F01/F02 |
| Size | HTML ~10–14 KB each; family CSS+JS ~35 KB combined; each below 70KB budget including imported shared files (excluding logos) |

Screenshots: `V1…V5-{390,1440}-{light,dark}.png`. Representative desktop and mobile screenshots were opened and visually inspected; automated geometry covers the remaining widths. Original V1 pilot screenshot retained.

## Self-critique / winner

| Variant | Strength | Trade-off | Severity remaining |
|---|---|---|---|
| V1 Compass | Closest to capture; predictable and minimal | More scrolling before users/money records | Minor / intentional |
| V2 Dispatch | Fast queue access and domain filtering | Additional scope control; scope must be cleared when broadening | Minor / intentional |
| V3 Dossier | Destination + provenance visible before jump | Wider desktop footprint; compact preview on phone | Minor / intentional |
| V4 Needle | Least chrome; exact-label-biased search | No group section headings; original group names carried in row meta | Minor / intentional |
| V5 Relay | Strongest authored signature + contextual back flow | Narrative spine costs 44px on phone | Minor / intentional |

**Recommended winner: V3 Dossier.** It reduces ambiguous jumps by showing route, API reference and historical-fixture limitations before selection. V1 Compass is the safest minimal default. Owner choice takes precedence.

Fixed during QA: Chromium native cancellation could escalate a repeated Escape into closing rather than returning; explicit keydown suppression now makes back/close deterministic. Dark selected-chip text initially measured 4.26:1; fixed with existing brand-200 token. Closed-shell active links/avatars had marginal contrast; fixed with brand-700 light / brand-200 dark, without modifying shared tokens. Animation-in-progress geometry false positives were removed by measuring after the entrance settles.

## Acceptance / limitations

Hierarchy, navigation, type, colour, dark, keyboard, states, mobile, offline and scoped performance pass tested checks. Queue bulk mutations, GST exports, permissions, real session survival and real API health are destination/backend concerns, not simulated accomplishments. No operator speed study, 30-minute authenticated session test, real screen-reader session, Safari/Firefox pass or production API verification performed. Automated accessibility scanning is not a WCAG certification. No claim of current backend health or live search. No open known blockers in the delivered prototype scope.

## Review next

Review F01/F02 and these F03 variants in the live gallery. Provide comments by family/variant and viewport/theme where relevant. Only then revise the corresponding HTML and propagate the agreed rules through the master + all family AI prompts + README. No further families built in this run.
