> **Historical revision 1 evidence.** The owner requested a research-led functional/data refresh. Current designs, workflows and fresh validation are documented in [revision 2 delivery](revision-2/DELIVERY-REPORT.md), [research](revision-2/RESEARCH-AND-PLAN.md) and [case data](revision-2/CASE-DATA.md). Original counts/claims below describe the earlier pass, not new verification.

# F04 · Concepts — before any implementation

All: Inter fallback, 6px primitives, existing locked teal tokens, 232→68px desktop shell, persisted nl-sidebar/nl-theme; mobile drawer; route nav (not fake ARIA tabs). Counts historic and never summed into a business KPI. No F04 mutations. Every card has direct destination; inspection optional. No queue invented: triage story = identify the appropriate stage then jump to its destination queue in one click, regardless of 100 items downstream.

## V1 · Atlas / minimal ground truth
User: new operator. Verdict: understand the platform without learning a new interface.
Keeps: exact three operational sections and captured content. Fixes C11/C3/C5/C9/C12/C18/C20; adds A11.
Axes: A three-column card map; B destination-first; C static grouped browse; D airy minimal; E native progressive disclosure.
Signature: native reference disclosure stays completely out of the way; direct jump anchors open honest in-page receipts.
API: contact, requests/stats, quotes/stats, projects/stats, payments/stats; users list. References Stripe + Basecamp.
Sketch:
```
[sidebar][header---------------------------]
         [title / route nav / local states]
         [degraded historical count notice]
         [inquiries][requests][quotes     ]
         [projects ][payments][messages   ]
         [users    ][moderation][audit    ]
         [standalone tools grid----------]
         [> API reference----------------]
```
Dark/mobile: same order, 3→2→1 cols; warm status uses dark tint, no white status tile. Risk: repetitive cards → eliminate decorative metric totals, emphasize ordered stage numbers. Triage: 16 visible direct destination links.

## V2 · Current / flow-led
User: operator orienting along the client journey. Verdict: “Where does this work go next?”
Axes A split six-step vertical chain + sticky inspector; B stage-order-first; C selected-step walkthrough; D structured split; E roving arrows/Home/End local stage inspector.
Same KEEP/C/A. Signature: choose any stage with arrows, inspection updates while a separate jump stays one click. Selected ≠ completed. API same verified count reads; refs GitLab, Pipedrive, Ant Steps.
```
[sidebar][title / route nav---------------]
         [01 Inquiries  23][selected stage]
         [02 Requests   46][job / guidance]
         [03 Quotes     36][path / source ]
         [04 Projects   ND][direct jump   ]
         [05 Payments   48][              ]
         [06 Messages    —][              ]
         [trust strip][tools][>reference ]
```
Mobile chain then inspector; no horizontal process scroll. Risk: selection mistaken for status → explicitly “Inspect stage; not completion”. Triage: direct link on every stage and inspector.

## V3 · Fieldguide / narrative-led
User: new admin learning platform responsibilities. Verdict: “Deliver work. Protect trust. Run the platform.”
Axes A sticky chapter margin + long-form ledger; B purpose-first; C chapter-anchor navigation with current chapter observation; D editorial reading; E IntersectionObserver chapter-follow, native hash links.
Same KEEP/C/A. References Notion wiki + Linear + Asana. API same reads plus dashboard overview, audit stats.
```
[sidebar][title / route nav---------------]
         [01 delivery][01 CLIENT DELIVERY]
         [02 trust   ][six numbered rows ]
         [03 consoles][02 USERS & TRUST  ]
         [04 reference][three account rows]
         [            ][03 CONSOLES       ]
         [            ][04 > REFERENCE    ]
```
Mobile chapter rail becomes wrapping links; body width fluid, paragraphs measure bounded only internally. Risk: page feels long → sticky chapter links and concise job/guidance. Triage: whole journey readable; jump in every ledger row.

## V4 · Switchboard / dense power console
User: experienced admin checking route and integration reference. Verdict: “Every route, with the reference alongside.”
Axes A operational register + complementary right reference dock; B route-first; C register-and-reference; D dense tabular; E keyboard destination-name filter and reference dock toggle.
Same KEEP/C/A. References Stripe, Linear details sidebar, GitLab. API endpoints in API-MAP; no execution buttons.
```
[sidebar][title / route nav---------------]
         [filter destination][docs toggle]
         [# stage  count  job→][API DOCK  ]
         [6 delivery rows     ][16 native ]
         [3 trust rows        ][accordions]
         [7 standalone cells  ][spec links]
```
Mobile rows become cards, dock falls below; no hidden first column. Risk: dense reference competes with operations → closed by default, dedicated disclosure control. Filter applies destination names only; count of matching destinations announced; unmatched explicit reset, not a fake zero count. Triage: narrow to destination in ≤few keystrokes, click one jump.

## V5 · Passage / motion signature
User: operator who already understands the map. Verdict: “One continuous route, every destination close.”
Axes A panoramic milestone index + layered 2-column stage panels; B topology-first; C synchronized milestone-to-preview; D layered bento; E IO+rAF count reveal, animated route stroke and selected-stage preview.
Same KEEP/C/A. References GitLab + monday dashboard + Asana. API same read endpoints; Projects never animates to a number.
```
[sidebar][title / route nav---------------]
         [01---02---03---04---05---06     ]
         [selected stage / route preview ]
         [Inquiries 23   ][Requests 46    ]
         [Quotes 36      ][Projects ND   ]
         [Payments 48    ][Messages —    ]
         [trust / consoles / > reference ]
```
Mobile milestones 3×2, stage panels one column. Reduced motion disables route-draw/transforms and jumps directly to final count; accessible static numbers remain. Risk: motion conveys live data → historical snapshot label always visible, animated visual duplicate aria-hidden, real count unchanged. Triage: select milestone for context or jump directly from any card.

## Table 1 · retention, fixes, feature boundaries
| Variant | Keeps | Fixes C# | Adds A# | Axes | Signature | API endpoints |
|---|---|---|---|---|---|---|
| Atlas | 6 delivery + 3 trust + 7 consoles +16 ref | C11 C3 C5 C9 C12 C18 C20 | A11 | A/B/C/D/E | native reference | GET contact, requests/stats |
| Current | same, exact source order | all seven | A11 | A/B/C/D/E | roving inspector | GET quotes/stats, projects/stats |
| Fieldguide | same, verbatim microcopy | all seven | A11 | A/B/C/D/E | observed chapters | GET users, audit/stats |
| Switchboard | same, no hidden API loss | all seven | A11 | A/B/C/D/E | destination filter + dock | GET payments/stats; JSON specs |
| Passage | same, no fabricated missing count | all seven | A11 | A/B/C/D/E | IO+rAF route reveal | GET messages/stats; dashboard/overview |

## Table 2 · distinctness
| Variant | A geometry | B hierarchy | C narrative | D surface | E interaction |
|---|---|---|---|---|---|
| V1 | 3-column grid | destination | grouped browse | airy minimal | native disclosure |
| V2 | vertical chain + inspector | stage order | walkthrough | structured split | roving steps |
| V3 | chapter margin + ledger | purpose | chapter anchors | editorial | observed chapter |
| V4 | register + dock | routes | register/reference | dense console | filter/dock |
| V5 | panorama + layered 2col panels | topology | milestone-preview | bento | count/reveal/draw |

Every pair differs on ≥3 axes (all five in this matrix); no pair shares A+C. Required minimal/dense/flow/narrative/motion coverage achieved without new stages, live counts or queues.

## Table 3 · coverage
| Item | Priority | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|---|
| C11 truthful route grammar | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| C3 AA | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| C5 locked teal | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| C9 mono counts/refs | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| C12 display counts | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| C18 dark parity | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| C20 logo alt | required | ✓ | ✓ | ✓ | ✓ | ✓ |
| A11 degraded | P2 ≥3/5 | ✓ | ✓ | ✓ | ✓ | ✓ |
| Targeted P1 ADD | none | n/a | n/a | n/a | n/a | n/a |
| zero/loading/error; drawer; full width | required | ✓ | ✓ | ✓ | ✓ | ✓ |

**Gate 1 PASS · Cards 5/5 · sketches 5/5 · difference PASS · C all 5/5 · P1 n/a · A11 5/5 planned.**
