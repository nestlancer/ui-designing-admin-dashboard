# F24 Report Study — System Config

Source: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` (MD wins over xlsx).

## Findings (F24 / System)
- System route `/system` with six tabs: Health, Config(14), Features(12), Jobs, Templates(62), Operations — machine room; blast radius lives here (report §2 inventory).
- Template editors (106, 107) and diagnostics depth were **unverified** in live crawl; parent tabs captured (059–063, 104–105).
- Jobs retry is **live ammo** — read-only audit never confirmed retries (report §2.2 System row).

## CHANGE (scope — all variants)
| ID | Report quote | Lab response |
|---|---|---|
| C3 | AA-safe text | Muted foreground on body copy; status not color-only |
| C5 | Teal-only admin | `shared/tokens.css` — no client-blue leaks |
| C9 | Mono keys/refs/IDs | Config keys, job queues, template slugs in `--mono` |
| C12 | Display section titles | Platform configuration, Feature flags, Background jobs, etc. |
| C18 | Dark parity | `?theme=` + toggle on all variants |
| C20 | Logo alt | Nestlancer mark with alt text |

## ADD
| ID | Priority | Lab response |
|---|---|---|
| A15 | P3 · ≥3/5 variants | Change audit strip: who / when / why on config save, flag toggle, template save, ops actions — target 5/5 |
| — | Template closure | Search + group + preview + edit across 62 (10 email frozen + 52 notification with honest pagination) |

## KEEP
- Six-tab machine-room structure and guarded power (confirm + reason on destructive/state changes).
- Microcopy + teal identity from capture lede and summary cards.

## GATE R (F24)
```
## GATE R (F24) · MD: YES · XLSX: 10/10 (referenced) · C: 6/6 · A: 2/2 · KEEP: YES · Gate: PASS
```
