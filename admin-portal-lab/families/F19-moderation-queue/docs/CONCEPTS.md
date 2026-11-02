# F19 — Five concepts (revision 2, source-reconciled)

## Shared source and truth boundary

Default: exact captured empty queue/history from `027/028` and captures 91/169/170. Optional workflow demo: six captured Nestlancer message excerpts with synthetic flags, no reporter/reason/age/rationale fields, no seeded history, no production execution. History starts empty and records only local session actions. Project chats remain zero because no captured project-chat transcript was available. Shared behavior is an offline runtime, not a page generator; each variant HTML/layout is authored separately.

Shared controls: captured search/status/chat filters, Clear, summary drilldowns, source/demo disclosure, loading/error/empty previews, selection, safe bulk-dismiss preparation, keyboard help, guarded two-step review, local receipt, ten-second local undo for dismiss/remove, session history. No sort/saved-view/age-preset UI is claimed.

## V1 · Queue workspace

- **Keeps:** captured labels/empty copy; chat-only actions; history separation.
- **Fixes/adds:** C17 local undo; C3/C5/C9/C12/C18/C20; A1/A2/A5; A11 error preview.
- **Axes:** A split workset/evidence · B workset-first · C parallel scan-and-review · D comfortable · E inline selection.
- **Sketch:** `[summary] [tabs] [captured filters] [queue table | evidence + action dock] [session history]`.
- **Signature:** selecting a row replaces the evidence pane without losing the workset; review opens a named two-step dialog.
- **Triage story:** scan, open evidence, prepare a guarded decision, advance; reviewed non-escalated flags can enter a bulk-dismiss workset.
- **API:** documented individual dismiss/remove/escalate/restore; queue/history DTO gaps remain visible.
- **Refs:** T3 Zendesk split; T6 evidence-first; T13 table grammar.
- **Shell/dark/mobile:** full captured nav; fluid canvas; mobile stacks workset before evidence.
- **Risk:** sticky rail must not trap mobile scrolling; long IDs wrap.

## V2 · Context review

- **Keeps:** same source/demo boundary and action semantics.
- **Fixes/adds:** same C/P1 coverage; bounded captured surrounding messages; guidance rail.
- **Axes:** A three-pane · B evidence-first · C context-to-verdict · D compact · E keyboard-first.
- **Sketch:** `[case rail] [reported message + captured context] [review guidance]`.
- **Signature:** J/K changes the case spine; the reported bubble stays anchored in bounded context.
- **Triage story:** read context without leaving the queue; Enter opens the guard, never a direct mutation.
- **API:** thread context/messages documented; demo context is not linked to a live F18 record.
- **Refs:** T9 conversation context; T11 quiet triage; T3 detail rail.
- **Shell/dark/mobile:** panes collapse to stacked case selector/context/guidance.
- **Risk:** focus stays visible when the selected case changes; transcript is explicitly a snippet.

## V3 · Chat-type triage

- **Keeps:** same cases and source zero state; no invented SLA.
- **Fixes/adds:** full C/P1 coverage; lanes use the captured Project/Direct/Group filter vocabulary.
- **Axes:** A three chat-type lanes · B source-first · C grouped sweep · D cards · E bulk workset.
- **Sketch:** `[summary] [filters] [Project | Direct | Group] [selection dock] [detail] [session history]`.
- **Signature:** cards group by chat type, never by fabricated age or severity; no drag-to-status illusion.
- **Triage story:** identify the chat surface, inspect each card, select only reviewed non-escalated flags, prepare dismissal with explicit per-case confirmation.
- **API:** no batch endpoint; the board prepares a local workset only.
- **Refs:** T11 quiet hierarchy; T12 population drilldown; T7 visible filters/reset.
- **Shell/dark/mobile:** lanes stack by chat type; selection dock remains reachable.
- **Risk:** empty Project lane is honest; card and table counts must agree.

## V4 · Decision register

- **Keeps:** source vocabulary, restore eligibility, session-only history.
- **Fixes/adds:** full C/P1 coverage; one semantic table per view; explicit totals and page boundaries.
- **Axes:** A guidance rail + register · B record-density-first · C query-to-expanded-record · D dense · E filter/expand.
- **Sketch:** `[guidance rail] [dense active table; selected row expands evidence] [session/source note]`.
- **Signature:** a row expands in place; History changes the register rather than opening a disconnected product.
- **Triage story:** power users combine captured search/status/chat filters, page, select and review without decorative charts.
- **API:** local filtering is not passed off as documented server query support.
- **Refs:** T13 shadcn Tasks; T7 visible filters; T1 history revisit.
- **Shell/dark/mobile:** rail stacks; table uses one DOM and contained horizontal scroll.
- **Risk:** no duplicate mobile table; expanded evidence and selection controls need distinct accessible names.

## V5 · Focused reader

- **Keeps:** same evidence, action consequences and history; no decision skipped for motion.
- **Fixes/adds:** full C/P1 coverage; reduced-motion parity; receipt and next-item continuity.
- **Axes:** A focal folio + case strip · B narrative-first · C read→decide→confirm · D airy · E motion-signature/next.
- **Sketch:** `[case strip] [large evidence folio | margin steps] [session history]`.
- **Signature:** a short transform/opacity transition marks the next case; numbers never count through fabricated intermediate states.
- **Triage story:** deliberate review for sensitive cases; previous/next preserves the workset while the same guard and history remain available.
- **API:** same individual operations; optional restored-text edit previews a described but incompletely specified body.
- **Refs:** T6 content-first detail; T2 proportionate action; T9 next-item flow.
- **Shell/dark/mobile:** folio is a reading column inside a fluid console; margins stack below evidence.
- **Risk:** animation cannot delay access to controls; reduced motion removes it completely.

## Difference test

| Pair | Distinct axes | A+C unique? |
|---|---|---|
| V1 / V2 | A, B, C, D, E | YES |
| V1 / V3 | A, B, C, D, E | YES |
| V1 / V4 | A, C, D, E | YES |
| V1 / V5 | A, B, C, D, E | YES |
| V2 / V3 | A, B, C, D, E | YES |
| V2 / V4 | A, B, C, D, E | YES |
| V2 / V5 | A, B, C, D, E | YES |
| V3 / V4 | A, B, C, D, E | YES |
| V3 / V5 | A, B, C, D, E | YES |
| V4 / V5 | A, B, C, D, E | YES |

## Coverage

- C17/C3/C5/C9/C12/C18/C20: 5/5. C4/C19 applied to table layouts.
- A1/A2/A5: 5/5. A11 loading/error/retry preview: 5/5.
- A3 saved views and A4 age are explicitly **not claimed**; they lack captured/typed support.
- Minimal: V1/V5; dense: V4; queue-led: V2/V3; review-led: V5; motion-led: V5.
- Blog/media remain separate families.

```
GATE 1 (F19, revision 2)
Concept cards: 5/5 · Sketches: 5/5 · Difference test: PASS
C coverage planned: 5/5 · Implemented P1: A1/A2/A5 · Not claimed: A3/A4
Gate: PASS — source-reconciled concepts locked before HTML/CSS rewrite
```
