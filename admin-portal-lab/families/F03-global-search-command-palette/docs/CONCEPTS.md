# F03 · Five concept cards / Gate 1

All five keep **Command menu**, **Search or jump to…**, four captured groups, all 26 unique captured actions, eight completeness additions, footer hints. All fix C3 C5 C9 C12 C18 C20 and ship the completeness audit 5/5. Same token file, no recolours. Integration references are in API-MAP; every route handoff is local-only.

## V1 · Compass — ground-truth / minimal
Keeps: entire frozen command catalogue. Fixes/adds: six C-items + eight additions.
Axes: A centered bounded overlay; B familiar pages first; C grouped browse; D calm comfortable list; E live filtering + recent switch.
```
[shell / full-width dashboard context]
        [Command menu    esc]
        [Search or jump to… ]
        [All · Recent       ]
        [Operations / rows  ]
        [Content / System   ]
        [keyboard hints     ]
```
Signature: restrained, single-column grouped results with explicit recent-history empty state. Triage: type queue name, Enter, return to same query. API: GET /api/v1/admin/requests?status=inbox, GET /api/v1/admin/users/search. References: cmdk, shadcn, Notion. Shell: F02 visual language, collapsible sidebar. Dark/mobile: tinted selection; bottom sheet. Risk: excessive list length; bounded scroll.

## V2 · Dispatch — action-led / dense
Axes: A narrow domain rail + command register; B queue/action first; C domain-filtered drill-down; D compact rows; E scope selection + back-to-all.
```
[Command menu / Dispatch]
[search                  ]
[domains | result rows   ]
[Queues  | queue jumps   ]
[People  | ...           ]
[Money   | ...           ]
[hints / selected result ]
```
Signature: category rail cuts a long catalogue into a keyboard-reachable working set. Same full action set; base group headings remain within scopes. Triage: Queues → Awaiting verification. API: GET /api/v1/admin/payments status=PENDING_VERIFICATION. References: GitHub scope, kbar nested context, Slack parity. Mobile: rail becomes horizontal chips. Risk: selected scope must be disclosed in no-results.

## V3 · Dossier — narrative-led / preview
Axes: A broad list/detail split; B identity and destination first; C inspect-before-jump; D editorial, generous receipt; E crossfade highlighted context.
```
[Command menu / search                  ]
[groups + results | selected destination]
[                 | route / API         ]
[                 | historical context  ]
[hints            | open handoff        ]
```
Signature: highlight a result to inspect its destination and provenance before Enter. Triage: distinguish a person from a payment without leaving palette. API: users/{userId}, payments?projectId. References: Raycast information pane, GitHub context. Mobile: compact selected preview below search, details scroll. Risk: avoid announcing whole preview on every arrow; combobox announces selection, separate preview stays quiet.

## V4 · Needle — instant / minimal chrome
Axes: A slim horizontal launch bar + ungrouped result register; B exact-match relevance; C query-led; D minimal dense ledger; E typeahead ranked matches + Home/End.
```
[Command menu] [search        ] [esc]
[All/Recent / scopes               ]
[icon label              group ↵ ]
[icon label              route ↵ ]
[hints / local catalogue           ]
```
Signature: compact exact-match-biased search, no decorative panels. Captured group names move to row meta, no action lost. Triage: a few characters and Enter. API: local route catalogue with real mapped destinations. References: cmdk custom ranking, VS Code quick-open geometry, Notion recent. Dark/mobile: strong outlined selection, sheet. Risk: primary label must remain 14px despite density.

## V5 · Relay — motion-signature / destination chapters
Axes: A docked command window with left narrative spine; B next destination first; C staged search → selected handoff; D layered paper/console; E staggered entry + animated handoff receipt.
```
[01 FIND | Command menu / search        ]
[02 JUMP | groups and searchable results]
[        |                              ]
[mono note / hint footer                ]
```
Signature: a restrained transform/opacity handoff transitions from catalogue to route receipt. Triage: selection stays in flow; back restores query, recents remember command IDs only. API: same read endpoint set. References: Raycast action footer, kbar back-navigation, Slack shortcut help. Dark/mobile: local brand-paper vars, narrative spine shrinks; reduced-motion removes choreography. Risk: motion must not delay keyboard input.

## Table 1 — coverage / interactions / endpoints
| Variant | Keeps | Fixes | Adds | Interaction | Representative API |
|---|---|---|---|---|---|
| V1 | 26 actions + frozen copy | C3/5/9/12/18/20 | 8 missing jumps | Filter/recent | admin/users/search |
| V2 | Same | Same | Same | Domain drill-down | admin/payments |
| V3 | Same | Same | Same | Highlight preview | admin/users/{userId} |
| V4 | Same | Same | Same | Ranked query | admin/requests |
| V5 | Same | Same | Same | Choreographed handoff | admin/payments/{id} (reference only) |

## Table 2 — distinctness
| V | A geometry | B hierarchy | C narrative | D density | E interaction |
|---|---|---|---|---|---|
| 1 | Center list | Familiar pages | Grouped browse | Comfortable | Recent/live filter |
| 2 | Domain rail | Queue/action | Scope drill | Compact | Scope selection |
| 3 | Two-pane | Destination | Inspect/jump | Editorial | Highlight preview |
| 4 | Launch bar | Exact match | Query register | Minimal dense | Ranked Home/End |
| 5 | Spine+dock | Next step | Staged receipt | Layered | Stagger/handoff |
All ten sibling pairs differ on ≥3 axes including A/C; no colour difference counted. Native safety/focus controls are intentionally consistent.

## Table 3 — implementation coverage
C3 C5 C9 C12 C18 C20: 5/5 planned. Completeness: 5/5. P1 queue mutation work: outside F03. Recent, no-results, skeleton, error+retry, dark, mobile, focus trap/restore, keyboard all 5/5.

**Gate 1: PASS · cards 5/5 · sketches 5/5 · distinctness PASS · C 5/5 YES · family additions 5/5 YES.**
