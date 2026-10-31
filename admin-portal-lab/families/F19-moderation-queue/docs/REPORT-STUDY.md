# F19 Report Study — Moderation Queue

## GATE R (F19)
```
## GATE R (F19) · MD: YES · XLSX: 10/10 (lab) · C: 7/7 · A: 3/3 · KEEP: YES · Gate: PASS
```

### Findings (F19 scope)
| ID | Finding | Lab response |
|---|---|---|
| F19-1 | Queue/history are button toggles without strong selected semantics | `aria-pressed` on tabs + filter chips |
| F19-2 | Empty queue is positive (“nothing flagged”) but KPIs still read 0 | Frozen KPI copy + celebration empty state |
| F19-3 | Judgments need context before power | C17 guarded review panel on every variant |
| F19-4 | History is trust surface — immutable tone | Who / when / why columns; no inline edit |
| F19-5 | Media flags cross-link quarantine (F23) | Quarantine deep-link in item context |

### CHANGE (5/5 variants)
| ID | Item |
|---|---|
| C3 | AA-safe text on status tints |
| C5 | Teal-only brand |
| C9 | Mono message IDs + timestamps |
| C12 | Tabular KPI counts |
| C17 | Preview + reason + confirm on every judgment |
| C18 | Dark parity via `?theme=` + `.dark` |
| C20 | Logo `aria-labelledby` |

### ADD (P1 — 5/5)
| ID | Item |
|---|---|
| A1 | Bulk bar — dismiss + export only |
| A4 | Age badges + escalation visual |
| A5 | Review → confirm → next item loop |

### KEEP
History immutability microcopy · teal identity · empty-queue helper text (frozen).

### Demo discipline
Lab toggle **“Preview demo flagged items (lab)”** injects 2–3 fixtures labelled **DEMO** — never presented as live production data.
