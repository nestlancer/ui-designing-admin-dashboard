# F14 Concepts — Settlement + Legal

## GATE 1 (F14)
```
## GATE 1 (F14) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS · C 5/5: YES · P1 5/5: YES · P2-P3 ≥3/5: YES · Gate: PASS
```

### Table 1 — roster
| V | Name | Keeps | Fixes | Adds | Axes | Signature | API |
|---|---|---|---|---|---|---|---|
| V1 | Ground Truth | frozen fields + lists | C9 C17 C3 C5 C12 C18 C20 | P1 save+audit | A tabs · B form-first · D calm · E confirm | Transcribed dual-tab forms + save bar | accounts + company-legal CRUD |
| V2 | Section Progress | same | same | P1 | A vertical sections · C guided · D airy | Step rail across bank + tax blocks | POST/PATCH both |
| V3 | Verify Wizard | same | same | P1 | A wizard overlay · C verify narrative · E steps | Add account → verify IFSC/UPI → activate | create + patch |
| V4 | Dense Audit Console | same | same | P1 | A 2-col + rail · D dense · B audit-first | Compact tables + sticky audit rail | list + patch |
| V5 | Save Choreography | same | same | P1 | E motion · C calm validation · A split | Animated save bar + field success ticks | patch demo |

### Table 2 — distinctness (A–E)
| | A Layout | B Hierarchy | C Narrative | D Density | E Interaction |
|---|---|---|---|---|---|
| V1 | single column tabs | forms under list | static dual surface | airy ops | confirm disable |
| V2 | section stack + progress | guided chunks | “finish payout setup” | medium | section jump links |
| V3 | list + wizard sheet | verify-first | step story | balanced | stepper next/back |
| V4 | table + form + rail | audit rail primary | finance console | dense | rail filters |
| V5 | split form/preview | save bar hero | “saved safely” | balanced | motion save states |

No two siblings share A+C. Colour is not an axis.

### Table 3 — coverage
- C9/C17/C3/C5/C12/C18/C20 → **5/5**
- P1 save honesty + audit (Riya Kapoor demo) → **5/5**

---

### V1 · Ground Truth
```
[tab: Accounts | Legal]
[list table]
[inline add/edit form]
[sticky save bar + audit]
```
Risk: long form on 375 — stacks single column.

### V2 · Section Progress
```
[progress: Bank details | UPI | Flags | Legal tax | Address]
[one section visible]
[save bar]
```
Risk: progress a11y — uses aria-current on steps.

### V3 · Verify Wizard
```
[list stays]
[wizard: Details → Verify → Primary flags]
[legal: Entity → Tax → Contact]
```
Risk: focus trap in sheet — Esc closes.

### V4 · Dense Audit Console
```
[compact tables | form column | audit rail]
[mono masked details]
```
Risk: horizontal scroll at 360 — rail drops below.

### V5 · Save Choreography
```
[form | live PDF preview stub]
[save bar anim: dirty→saving→saved]
```
Risk: motion — respects prefers-reduced-motion.
