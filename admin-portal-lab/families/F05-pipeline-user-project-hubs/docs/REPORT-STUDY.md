# F05 · Gate R · report study

Sources: reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md (all sections), workbook all10 sheets (complete row extraction WORKBOOK-STUDY.json). Markdown wins. Workbook shortens wording; no substantive F05 count conflict resolved by it. Captures resolve filename/selected-tab contradictions documented in BASELINE-MAP.

## Quoted findings and gaps

- #1: “Projects data is down in production — again, and worse than on the client side.” 26failed calls/8captures; report hypothesizes handler crash. We preserve the **historical observed failure**, not claim a new health check or prove backend causation.
- #3: “Admin sessions are unstable.” 409/503 refresh failures; prototype cannot fix sessions. Entity/view context survives local navigation; no simulated authentication success.
- #5: “Success + info badges fail WCAG AA”; shared corrected status text ramps + icon/text used, both themes tested.
- #8: “Dead routes reveal IA drift”; canonical drill grammar and explicit integration handoffs, not 404 links.
- #9: “Dark mode exists in CSS but never engaged”; real persisted theme + before-paint URL override.
- #10: “The type scale is compressed and ID-hostile”; mono full references, wrapping, accessible money/count display.
- §2.2: project details/delivery blocked; user pipeline tabs did not change state during crawl. Screenshots remain intended baseline, not proof of current runtime correctness.
- Inventory: “Pipeline |19|Partial|044,045,047 … Project hub empty (API); API reference is dev-tool in ops clothing.” F04 owns stage/reference; F05 prioritizes entity context, developer contracts secondary.
- Users+safety weight: “Add bulk bar, fix ‘New this month’, verify pipeline tabs.” F05 verifies hub navigation, not rebuild directory, safety dialogs or unrequested bulk mutations.

## Family requirements — every variant

| Item | Report language / concrete implementation |
|---|---|
| C9 | “Add mono face for IDs / refs / versions”: full wrap-capable IDs, raw references in inspector, ISO/date labels, optional clipboard with honest failure fallback |
| C11 | “Unify creation routes”: stable in-page grammar ?hub=users&userId=… / ?hub=projects&projectId=… / section=…; browser Back/Forward and origin→project→user drills; unbuilt destination families use labelled canonical-route receipts |
| C3 | “Fix badge text contrast”: icon+text+theme-aware token badges; no colour-only status, hover/disabled/transient contrast checked |
| C5 | “Rename tokens + purge colour leaks”: immutable shared admin teal; no client-blue or replacement brand values |
| C12 | “Use display type for money / counts”: H1 32–40desktop/28–32phone, tabular amounts; paise→INR explicit, no revenue aggregate or unsafe inferred balance |
| C18 | “Repair dark mode or remove toggle”: actual nl-theme persistence / URL override, both hub states checked |
| C20 | “Logo alt text”: supplied light/dark mark pair, alt and fixed dimensions |
| A11 P2 | “System-status/degraded banner”: dismissible source-coverage banner and independent section loading/empty/error/degraded + retry, not fake global recovery |
| A13 P3 | “Ops-health mini-grid”: per-hub coverage strip, clickable section status; **reference availability**, never fictitious live API health |

C-items7/7 in5/5; A11 and A13 planned5/5 (≥3/5required). No F05-targeted P1 additions; no bulk approve, AI summary, SLA, fake audit or real financial write.

## KEEP / tokens / benchmarks

Keep 360° mental model and honest microcopy; source evidence separated from partial data. Existing source safety dialogs remain in their owner families, reached as read-only handoff—not stripped into one-click unsafe controls. Keep admin teal / system Inter fallback / 6px ops radius / mono references. No alteration to immutable shared token/base files; report’s historic --brand-violet misname is not imported. Shared status-text tokens fix original success/info contrast. Captured essential-cookie banner not added to this internal surface; footer carries ©2026, Terms/Privacy, actual preview transport caveat.

Benchmark carry-forward: source1whose-move/per-client scope;2one dominant question and expertise-appropriate density;7semantic tables/cardfallback;9work queue/progressive disclosure;10Assembly hub modules;12keyboard/44px/reduced motion;13financial lineage, not a global balance card. Fresh primary hub/profile research is added AFTER GateA, not replaced by the generic benchmark list.

## Roadmap and acceptance adaptation

P0source and refresh faults remain production work. P1accessible foundations implemented. P2queue engine belongs to destination families; hub exposes record context and actor handoffs, not unsupported bulk actions. P3mini-coverage adds honest source availability. P4payment lineage as context, no actual recording/refund. P5pipeline gap closure is this family’s core. P6responsive drawer/cards and per-section recovery. P7quiet motion only; AI/PWA/RBAC not invented.

Report §7.1 checklist adapted for all5: hierarchy one selected entity + next review; triage keyboard-only selection/drill/back; queues show captured scope not fakeSLAs; search/filter/sort/pagination only loaded subset with totals explicitly qualified; hub-grouped navigation + F03 link; contrast/icon/text; mono/INR units; dark parity; keyboard tabs/dialogs/drawer; independent empty/skeleton/error/degraded; reason-sensitive financial/security work handed to owner family without execution;360/375/390/414/768–2560no page overflow; no async layout shift or external dependencies. FCP/INP/session stability in production, legal/audit completion and human <60s comprehension are NOT claimed by a static lab.

**Gate R PASS — MD read, workbook10/10, C7/7, A2/2, KEEP and checklist mapped.**
