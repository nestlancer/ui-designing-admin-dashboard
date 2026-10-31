# F13 Report Study — Payments Money-Ops

## GATE R (F13)
```
## GATE R (F13) · MD: YES · XLSX: 10/10 · C: 7/7 · A: 3/3 P1 (+A6/A7 noted P2) · KEEP: YES · Gate: PASS
```

### Executive findings touching F13
- **Finding #8 / C11:** `/payments/transactions` 404; tab grammar is canonical.
- **Finding #12 (F-pattern density):** Payments is peak density — dead-end buttons/headings per capture; C3/C12 fix legibility; A1/A4/A5 fix operability.
- **Inventory (report §2):** Payments 🟢 Best-in-console (5 tabs, installment bars, settlement/legal). Gaps: payment-detail depth + reconciliation verify + statement export.
- **Money locale:** ₹7,08,160.00 Indian grouping kept (report money row).
- **Roadmap P4 — Money depth:** Payment-detail, reconciliation verify, statement export, verification/disputes as SLA queues.

### CHANGE — F13 mapped (all → 5/5)
| ID | Specifics for money-ops |
|---|---|
| **C9** | Mono truncated IDs with full value on hover; click-to-copy; tabular ₹ |
| **C12** | Display-scale KPI ₹ (32–40 desktop); body stays 13–15 ops |
| **C19** | “Showing x–y of N” + page size on project/tx/reconcile tables |
| **C3** | Status badges icon + colour + AA `--status-*-text` |
| **C5** | Teal-only; no blue brand drift |
| **C18** | Dark parity for strip, tabs, tables, dialogs |
| **C20** | Logo alt “Nestlancer Admin” |

### ADD — F13
| ID | Priority | Coverage |
|---|---|---|
| **A1** Bulk verify/reject/export | P1 | **5/5** |
| **A4** Age/priority badges + escalation | P1 | **5/5** |
| **A5** Verify → next loop | P1 | **5/5** |
| A6 Payment-detail lineage | P2 | ≥3/5 (detail pane in all 5) |
| A7 Statement export | P2 | ≥3/5 (demo export CTA) |

### KEEP
- Payments **5-tab** money-ops model + installment progress bars
- Settlement/legal entry points (F14 owns pages)
- Honest empty states for verification + disputes
- Teal + Inter + 6px ops identity · KPI honesty · receipt strings

### Acceptance checklist (report §7.1) → QA
Hierarchy <2s · triage speed · queue ergonomics · tables · nav · colour AA · type · dark · keyboard · empty/loading/error · safety (confirm on verify/reject/refund) · mobile · performance · legal/ops transparency

### MD vs XLSX
No conflict found for Payments KPI figures; MD wins if future drift appears.
