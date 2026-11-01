# F02 · Concepts — Gate 1 (before implementation)

All five retain the frozen canonical 30-Oct dashboard story and the same teal token file. Primary financial figure is **₹2,60,790.00 awaiting across 16 pending payments**; the brief's older 7-quote figure is not mixed with the later 0-quote snapshot. All have attention strip, revenue and request-volume panels with honest sparse states, metrics, two recent tables, project mix, moderation, digest/health placeholders, full shell, ⌘K, state controls, mobile and dark. Ages and per-service telemetry are unavailable, not invented.

## V1 · Northstar — ground-truth, refined
```
[nav][header · search · bells]
[nav][title             snapshot]
[nav][₹ awaiting   | 16 pending payments]
[nav][six horizontal attention cells     ]
[nav][five supporting metrics             ]
[nav][revenue        | mix + health       ]
[nav][requests       | recent payments    ]
```
Axes: A standard two-column, B money-first, C section-led, D airy, E queue preview. Keeps all captures; fixes C1/C2/C3/C5/C6/C9/C10/C12/C15/C18/C20; adds A9/A11/A13. Signature: focusable strip cells open contextual queue preview. API: dashboard overview/revenue, health, unread-count. Research: Tabler [1], Carbon [5]. At 375px cards stack and shell becomes a drawer. Risk: table overflow; use one semantic table with mobile row styling.

## V2 · The Brief — verdict / narrative first
```
[nav][title · shift note       | snapshot]
[nav][₹ awaiting / 16          | digest  ]
[nav][six compact queue cells  | health  ]
[nav][chronology: charts → tables → mix  ]
```
Axes: A editorial asymmetric rail, B verdict first, C narrative/section, D editorial ruled, E contextual preview. Signature: collapsible brief / handover. Same C/A coverage; API dashboard overview/activity and health. Research: finance [3][6], decision-first [8]. Dark uses token surfaces; rail stacks at phone widths. Risk: no false handover; label missing activity.

## V3 · Queue spine — work first
```
[nav][title / ₹ and 16]
[nav][priority spine      | metrics, mix]
[nav][6 vertical queues   | revenue     ]
[nav][attention drill     | digest      ]
[nav][tables              | request vol ]
```
Axes: A split priority rail, B queue-first, C queue-led, D compact list, E keyboard queue-to-preview. Signature: queue selection opens a local detail preview. Same C/A coverage; API overview/notifications/messages. Research [4][6][9]. Mobile puts full-width queue before supporting panels; no live action. Risk: readability if narrow; retain labels and tab targets.

## V4 · Signal board — health-grid operations map
```
[nav][title · compact hero / ₹ awaiting]
[nav][health grid: captured / not checked]
[nav][six attention cells]
[nav][metric strip   | digest]
[nav][revenue        | project mix]
[nav][requests       | payments / volume]
```
Axes: A bento matrix, B status-first, C dashboard chapters, D modular grid, E state simulation. Signature: switch snapshot/degraded/error/loading/empty with clear lab labels. Same C/A coverage; API health/overview/alerts. Research Grafana [7], shadcn [10]. Mobile flattens grid; never style unverified health as healthy. Risk: colour-only status; use text.

## V5 · Ledger — dense shift console
```
[nav][title  | ₹ awaiting | 16 pending]
[nav][queue strip · compact metrics     ]
[nav][REQUESTS TABLE | PAYMENTS TABLE   ]
[nav][revenue / request volume | mix    ]
[nav][health | moderation | digest       ]
```
Axes: A two ledgers side by side, B records-first, C table-led, D compact ledger, E range + row detail. Signature: inline row-detail preview plus range change. Same C/A coverage; API dashboard overview/revenue/activity. Research [1][3][10]. Mobile row-card fallback uses the same tables, never duplicates them. Risk: long UUIDs wrap, not clip.

## Difference / coverage review
| Variant | A geometry | B hierarchy | C narrative | D density | E interaction |
|---|---|---|---|---|---|
| V1 | standard split | money | section-led | airy | strip preview |
| V2 | asymmetrical side rail | verdict | editorial brief | ruled | brief/handover |
| V3 | queue rail | queue | queue-led | compact list | keyboard queue |
| V4 | bento matrix | status | health chapters | modular | state simulation |
| V5 | paired ledgers | records | table-led | dense | row/range detail |

Each pair changes at least three axes and has a distinct A/C combination; difference is not colour. Minimal V1; narrative V2; queue-led V3; status/motion V4; dense V5. All eleven F02 CHANGE items and A9/A11/A13 target 5/5; no F02 P1 ADD is applicable. Diagram cards printed before code.

## Concept summary and traceability
| Variant | Keeps | Fixes | Adds | Axes / signature | API references |
|---|---|---|---|---|---|
| V1 | attention, search, settlement, charts, tables | C1 C2 C3 C5 C6 C9 C10 C12 C15 C18 C20 | A9 A11 A13 | balanced / section / queue preview | overview, revenue, activity, health |
| V2 | same frozen evidence | same 11 changes | A9 A11 A13 | editorial / narrative / expandable handover note | overview, activity, revenue, health |
| V3 | same frozen evidence | same 11 changes | A9 A11 A13 | queue spine / triage / arrow-key navigation | overview, unread counts, health |
| V4 | same frozen evidence | same 11 changes | A9 A11 A13 | bento / health chapters / state simulation | overview, alerts, health |
| V5 | same frozen evidence | same 11 changes | A9 A11 A13 | paired ledgers / records / inline row preview | overview, revenue, activity, health |

## Coverage table
| Requirement | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|
| C1 C2 C3 C5 C6 C9 C10 C12 C15 C18 C20 | ✓ | ✓ | ✓ | ✓ | ✓ |
| A9 digest / handover | unavailable | unavailable | unavailable | unavailable | unavailable |
| A11 degraded banner | demo | demo | demo | demo | demo |
| A13 ops-health grid | not checked | not checked | not checked | not checked | not checked |

No targeted P1 ADD applies to F02. Checks indicate design coverage, not verified production integration. The fuller summary table was added to make the original pre-build concept cards easier to audit.

**Gate 1: PASS** — 5/5 cards, 5/5 sketches, difference matrix and coverage recorded.
