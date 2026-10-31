# F17 Report Study

## GATE R (F17)
```
## GATE R (F17) · MD: YES · XLSX: 10/10 · C: C9 C11 C3 C5 C12 C18 C20 · A: (none P1) · KEEP: YES · Gate: PASS
```

### Findings (Messages scope)
| # | Quote | Source |
|---|---|---|
| **8** | Dead routes reveal IA drift: `/messages/new/group` → 404; `/messages/new-direct` (dash) is the real pattern | Report §1.8 |
| **—** | Messages coverage OK: inbox, threads, new-direct; `/new/group` 404s | Coverage table |
| **—** | Header badge **21** unread on dashboard shell | F02 baseline |

### CHANGE (this family)
| ID | Quote |
|---|---|
| C9 | Mono refs/timestamps; full ID on hover; click-to-copy |
| C11 | Unify creation URL grammar — lab uses `/messages/new-group` (dash) + in-page routes |
| C3 | AA-safe text on status tints |
| C5 | Teal-only brand |
| C12 | Display counts for KPIs (18 / 21 / 11) |
| C18 | Dark parity via `?theme=` + `.dark` |
| C20 | Logo `aria-labelledby` alt |

### ADD
No F17-targeted P1 ADDs — route entries + unread honesty ship as craft (**5/5**).

### KEEP
- Inbox honesty (frozen snippets, ages, types).
- Microcopy + teal identity.
- Flagged count **0** (do not invent queue depth).
