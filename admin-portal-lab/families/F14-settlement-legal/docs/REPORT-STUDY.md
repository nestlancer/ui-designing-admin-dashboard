# F14 Report Study — Settlement Accounts + Company Legal

## GATE R (F14)
```
## GATE R (F14) · MD: YES · XLSX: 10/10 · C: 7/7 · A: 1/1 P1 · KEEP: YES · Gate: PASS
```

### Executive findings touching F14
- **Inventory (report §2):** Payments 🟢 includes settlement accounts (`182`) + company legal (`183`) as first-class money-ops surfaces — extend form craft, don’t rebuild IA.
- **Finding #12 (F-pattern density):** Finance settings need labelled helpers + inline validation; silent saves are unsafe for payout plumbing.
- **KEEP (report §6.3):** **Razorpay trust strips / settlement transparency** — honest microcopy that money routes are visible and stored in DB not env.
- **Roadmap P4 — Money depth:** Settlement/legal correctness gates invoice PDFs and offline transfer matching.

### CHANGE — F14 mapped (all → 5/5)
| ID | Specifics for settlement + legal |
|---|---|
| **C9** | Mono account numbers, IFSC, GSTIN; mask secrets in lists; full reveal only in edit with discipline |
| **C17** | Form craft: every field labelled, helper’d, validated inline (IFSC/GSTIN/PAN demos) |
| **C3** | AA-safe text on badges (Primary · Active) and error lines |
| **C5** | Teal-only tokens; no blue brand drift |
| **C12** | Display section titles (Settlement accounts · Company legal identity) |
| **C18** | Dark parity for forms, tables, save bar, modals |
| **C20** | Logo alt “Nestlancer Admin” |

### ADD — F14
| Item | Priority | Coverage |
|---|---|---|
| Save honesty + audit copy (who/when on payout changes — demo **Riya Kapoor**) | P1 | **5/5** |

### KEEP
- Settlement transparency + honest microcopy + teal identity
- Primary account/profile semantics from capture
- Confirm before Disable/Remove destructive rows

### MD vs XLSX
No conflict on settlement/legal field labels; frozen strings follow HTML `182`/`183` + user content lock.
