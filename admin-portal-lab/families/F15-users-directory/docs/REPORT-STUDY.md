# F15 Report Study — Users Directory

## GATE R (F15)
```
## GATE R (F15) · MD: YES · XLSX: 10/10 · C: 7/7 · A: 2/2 P1 · KEEP: YES · Gate: PASS
```

### Executive findings touching F15
- **Finding #6:** Queues visible but not workable — Users rows have checkboxes with **no bulk-action bar** (metadata: 24 inputs, 0 bulk UI).
- **Finding S5 / inventory Users row:** Directory + filters + pagination OK; **no bulk bar**; pipeline tabs unverified on detail; **all-34 “New this month” suspect**.
- **Business weight (prompt):** 🟠 Identity is access — stale counts erode trust in every user action downstream.
- **Roadmap P2 — Triage engine:** Bulk bar + keyboard shortcuts on Users/Requests/Verification/Contact.

### CHANGE — F15 mapped (all → 5/5)
| ID | Specifics for users directory |
|---|---|
| **C16** | Surface data-freshness on KPIs; freeze 34/34/34/0; flag identical Total/Active/New — never fabricate corrected counts |
| **C9** | Mono emails, created timestamps; full email on hover / copy |
| **C19** | “Showing 1–20 of 34” + page index + Prev/Next on directory |
| **C3** | AA-safe status/role badges (`--status-*-text`) |
| **C5** | Teal-only lab tokens |
| **C12** | Display-scale KPI counts (tabular-nums) |
| **C18** | Dark parity for KPIs, filters, table, dialogs |
| **C20** | Logo alt “Nestlancer Admin” |

### ADD — F15
| ID | Priority | Coverage |
|---|---|---|
| **A1** Bulk bar (tag / verify / export / suspend-gated confirm) | P1 | **5/5** |
| **A2** Keyboard triage j/k/x/e/ | P1 | **5/5** |

### KEEP
- Directory honesty (frozen anatomy + captured rows)
- Microcopy + teal identity
- Add-new-user entry with **registration honesty** (no fake success)
- View → user detail navigation concept (F16 owns safety)

### Report quote — C16
> “Verify counting (**34/34/34 + 0 suspended** smells like test data or a bug).” — `NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` §6.1 C16

### MD vs XLSX
MD wins; no Payments-style KPI conflict for Users. XLSX sheets 1–10 referenced for completeness gate; Users directory slice aligns with MD Finding #6 and Users inventory row.
