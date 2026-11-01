# F05 · V6/V7 detailed-data extension · Delivery

**Completed:** 2 November 2026. **User policy:** captured evidence only. No synthetic records or inferred completion of missing fields.

## Open the designs

| Design | Repository version | Self-contained HTML |
|---|---|---|
| **V6 · Evidence desk** | [V6/index.html](../../V6/index.html) | [V6-complete.html](../../V6/V6-complete.html) |
| **V7 · Client casebook** | [V7/index.html](../../V7/index.html) | [V7-complete.html](../../V7/V7-complete.html) |

Both contain User and Project hubs and all ten required sections. V6 suits exact-record investigation with a persistent evidence pane; V7 suits complete-case reading with independently open chapters. These are different manually authored structures, not generated layout variations.

The standalone files embed the locked tokens, new styles, data, controller, logos and favicon. They work without an API or external scripts/styles/fonts/images and can export the complete captured JSON locally. Original source files, documentation and linked designs still require this repository or the live preview. Packaging preserves the independently authored designs; it does not generate their layouts.

**Live preview:** the separately named `serve-v67.py` binds to 0.0.0.0:8132 and redirects `/` to V6. V7 is reachable from its version switch. The approved 8131 preview script was not changed.

## What the new evidence model contains

- **15 request IDs:** ten visible hub rows and five exact source-request links. Two linked requests have complete visible briefs, budgets, requirements, dates and status histories.
- **14 quote records:** ten hub rows and four additional captured drafts. Ten captured amounts; five visible one-phase/one-line pricing details, including quantities, unit prices, subtotal/tax, validity and exact request links.
- **18 project references:** all captured selector/billing UUIDs, names, client emails and separately labelled selector/billing fields. Arjun's user hub has only its five captured project rows.
- **11 evidenced Arjun payment IDs:** ten visible user-hub rows plus an additional Pending ₹30,000 payment from the project table. Nine amounts are captured; two remain unknown. Six fixture project links and three exact Khandesh REF → milestone associations are retained.
- **Seven ID-bearing Khandesh milestones.** Their hub status is not overwritten. Seven separate F12 phase observations retain due dates/statuses/types; phase IDs are not visible in F12, so these fields are **not title-joined** onto the hub UUIDs.
- **Six Arjun session UUIDs.** Device, IP and session times remain unknown.
- **22 authentication observations across three snapshots:** Arjun has two separate six-row snapshots; Karthik has ten visible rows of 24 reported. Repeated timestamps are not invented unique events or matched to sessions.
- **All seven F12 progress entries**, full text and captured timestamps, separate from the empty hub timeline.
- **One F12 Approved deliverable reference**, with submitted time and filename, but no fictitious file download or signed URL.
- **Two separate user profiles** and the available Razorpay overview details, without copying Khandesh or Arjun records into other scopes.

The dataset has **101 primary rows/observations + seven unjoined F12 phase observations + two user profiles**. This is an evidence inventory, not a production record count. Reported totals remain separate: 26 requests, 22 quotes, four active projects, 11 payments and six sessions in Arjun's hub. No missing rows are manufactured to reconcile totals.

## Files and analysis

- [ANALYSIS.md](ANALYSIS.md): detailed strengths, weaknesses and data deficiencies for each of V1–V5, before/after coverage, source corrections and the two design hypotheses.
- [DATA-AUDIT.md](DATA-AUDIT.md): exact sources, full-ID inventories, unknowns and reference boundaries.
- [SWAGGER-REVIEW.md](SWAGGER-REVIEW.md) / [CONTRACTS.json](CONTRACTS.json): fresh inspection of eight service specifications and 22 unique GET contracts. No runtime requests or inferred response fields.
- [evidence-v67.json](../../evidence-v67.json): complete structured captured evidence.
- `evidence-v67.js`, `workspace-v67.js`, `evidence-v67.css`: additive model, local controller and styles; no dependency on the approved F05 runtime.
- `collect-evidence.py`: offline evidence transcription/exact-ID DOM enrichment; does not generate HTML designs.
- `package-standalone.py`: bundles the two existing designs for offline viewing.

Source corrections include selector 045 versus selected project 046; Payments 115 / Quotes 117 / Requests 118 / Trust 119; third fixture `uk6ic`; Razorpay overview 053; and the admin deliverables route's definition in **Progress**, not Projects. Approved historical files remain unchanged.

## Executed verification · final files

| Suite | Result | Checks | Automated axe scans |
|---|---|---:|---:|
| Responsive/section matrix · `QA-MATRIX.json` | PASS | 1,122 | 160 |
| Interaction/scope/keyboard/touch/no-JS · `QA-INTERACTIONS.json` | PASS | 831 | 32 |
| Offline standalone files & JSON export · `QA-PORTABLE.json` | PASS | 82 | 16 |
| **Browser total** | **PASS** | **2,035** | **208** |
| Preservation/data/link/payload static checks · `QA-STATIC.json` | **PASS** | **1,001** | — |

**208 axe scans reported zero violations** for the tested WCAG 2 A/AA and 2.1 AA tags. This is automated test coverage, not WCAG certification or a substitute for human assistive-technology review.

### Matrix and interactions actually exercised

- Both designs × both themes × 390/768/1440/2560 widths × all ten sections: 160 section configurations.
- Additional 320/375/430/1024/1920 widths in both themes; no document horizontal overflow. Medium rail actually expands/collapses, rather than merely changing a stored flag.
- 232→68 desktop rail, mobile focus trap/Escape/return, 44px coarse controls, persistent theme and sidebar state, reduced-motion contexts.
- All 18 project selections; exact payment membership; no Khandesh rows in other projects; Karthik profile isolation, ten visible activity rows and no borrowed Arjun session/IP data.
- Search, no results, clear, status filtering, four sort modes, real five-row paging, captured-source toggle, independent per-entity/section query state.
- All ten sections through empty/loading/error/degraded/permission-denied local previews and capture restoration. These are labelled simulations, not asserted server states or ACLs.
- Exact source-request navigation, record/project navigation, full-ID record deep links and browser Back restoration.
- Native modal opening/Escape/focus return; section Home/End/arrow navigation; literal `<img … onerror=…>` quote text rendered inert rather than executed.
- Deposit's Pending hub record versus separately displayed Paid F12 observation; raw paise and exact payment REF values; all seven source-separated progress entries; both six-row Arjun login snapshots.
- Both portable files over `file://`, both themes, both hubs, 390/1440 widths; no external requests; local JSON download validated against the complete evidence inventory.
- No-JavaScript summaries/full-data links and no nonfunctional visible buttons when scripting is off.
- No runtime errors or external requests in the final responsive/portable checks. No production integration or mutation tests were attempted.

### Visual inspection and fixes

The final source was also checked visually in desktop/mobile and light/dark captures. Sixteen final matrix screenshots plus four modal record sheets are in `qa/`. Pilot captures are separate and not final evidence.

An early interaction run found a V7 focus race: asynchronous native-details toggle events rebuilt the chapter index while keyboard navigation was moving focus. The final implementation updates the index from explicit summary/navigation actions and preserves connected focus. Another early failure was a test synchronization issue: an old quote already contained the target request ID as a relationship field. The final test waits for the **selected record ID**, not any occurrence of that ID. Diagnostic failures are retained; only final PASS outputs are counted above. Currency sizing was refined so V6's narrow identity rail does not split decimal fragments.

## Preservation and additive merge

**669 pre-existing files are SHA-256 unchanged**, including all approved V1–V5 HTML files, their data/controller/styles, earlier families, shared tokens/logos and source inputs. No Git repository or commit was created.

The gallery has only bounded V6/V7 cards/notes added. Removing those blocks reproduces the previous gallery exactly. The manifest's previous family values and five approved F05 variant entries are unchanged; two new variant entries are appended. `DECISIONS.md` receives a new extension entry; its previous content remains an exact prefix. The original six research/delivery documents are historical and unchanged.

## Payload budget and limitations

| Design | Raw load incl. shared tokens and images | Gzip estimate incl. images | Standalone HTML |
|---|---:|---:|---:|
| V6 | 131,475 bytes | 34,975 bytes | 133,507 bytes |
| V7 | 135,856 bytes | 35,929 bytes | 137,896 bytes |

Both pass the **250KB hard cap**. The 70KB soft target is exceeded, disclosed rather than hidden: the richer captured evidence is approximately 51KB before the controller, styles and page structure. Gzip values are estimates, not claims that the simple preview server compresses responses. No UI framework, remote font or CDN is loaded.

Remaining limits are intentional: records behind screenshot totals are not fabricated; two payment amounts and many record dates/assignees/device fields remain unknown; source snapshots may disagree; a missing request origin is not inferred; client-specific messages require a verified authorized integration; phase observations with no IDs are not joined by title; owner routes are read-only integration references rather than duplicate action consoles. No live health, settlement, authority, throughput or production readiness claim is made.
