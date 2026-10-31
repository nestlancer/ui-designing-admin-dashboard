# F13 Concepts — Payments Money-Ops

## GATE 1 (F13)
```
## GATE 1 (F13) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS · C 5/5: YES · P1 5/5: YES · P2-P3 ≥3/5: YES · Gate: PASS
```

### Table 1 — roster
| V | Name | Keeps | Fixes | Adds | Axes | Signature | API |
|---|---|---|---|---|---|---|---|
| V1 | Ground Truth | KPIs ₹7,08,160 / ₹2,60,790 / 16 / 18 · 5 tabs · empties | C9 C12 C19 C3 C5 C18 C20 | A1 A4 A5 A6 A7 | A tabs+table · B money strip · D calm · E confirm | Guarded verify dialog + receipt toast | stats, payments, verify, reject, refund, receipt |
| V2 | Approval Spine | same | same | A1 A4 A5 A6 | A queue-led · B action-first · C queue narrative · E next-loop | Verification queue owns viewport; ledger docked | approve-transfer, reject, verify |
| V3 | Ledger First | same | same | A1 A4 A5 A6 A7 | A ledger tables · B money-first · C tab-led · D dense-print | Transactions/reconcile lead; approvals float | payments list, reconciliation, export |
| V4 | Dense Settlement Day | same | same | A1 A4 A5 A7 | A compact board · B action · C accordion tabs · D dense | Compact ops board + bulk | bulk verify/export |
| V5 | Verify Choreography | same | same | A1 A4 A5 A6 | A split detail · C stepper · E motion count-up | Verify→next with KPI count-up | verify + next |

### Table 2 — distinctness (A–E)
| | A Layout | B Hierarchy | C Narrative | D Density | E Interaction |
|---|---|---|---|---|---|
| V1 | single column tabs+table | money strip | static tabs | airy | confirm dialogs |
| V2 | 2-col queue+ledger dock | action-first | queue-led | ops | keyboard next-loop |
| V3 | full-bleed ledger | money-first | tab-led | ledger/print | filter chips + export |
| V4 | compact multi-metric board | action | accordion | dense console | bulk bar primary |
| V5 | split list+detail | verdict amount | chapter/step | balanced | motion count-up + focus |

No two siblings share A+C. Colour is not an axis.

### Table 3 — coverage
- C9/C12/C19/C3/C5/C18/C20 → **5/5**
- A1/A4/A5 → **5/5**
- A6 detail → **5/5**; A7 export → **≥3/5** (V1,V3,V4)

---

### V1 · Ground Truth
```
[KPI strip ₹ ×4]
[tabs: By project | Tx | Verify | Disputes | Recon]
[table / empty / detail drawer]
[confirm modal]
```
Triage: select → bulk bar → confirm verify → next. Dark + 375 card fallback. Risk: table overflow at 375 — cards.

### V2 · Approval Spine
```
[VERIFY QUEUE | ledger dock]
[age badges][bulk][j/k]
[detail sheet]
```
Triage story: queue owns first screen; ledger secondary. Risk: dock collapse on mobile.

### V3 · Ledger First
```
[hero ₹ collected/outstanding]
[transactions ledger full width]
[floating verify chip]
[reconcile range]
```
Triage: filter Payment due → select → verify float. Risk: floating CTA focus order.

### V4 · Dense Settlement Day
```
[compact KPI row]
[accordion: verify | tx | projects | recon]
[bulk always visible when selection]
```
Triage: settlement-day density; keyboard x/e. Risk: accordion a11y.

### V5 · Verify Choreography
```
[list | detail]
[amount count-up]
[verify → advance focus]
```
Triage: Stripe-like previous/next after confirm. Risk: motion vs reduced-motion.
