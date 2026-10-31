# F25 Report Study — Integrations + Audit

Source: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` (MD wins).

## Findings
- Integrations route is **webhook-first** (016): health strip, delivery prefs, 12-event catalog, endpoint list (empty in capture).
- Audit route (065) is **trust ledger**: security aggregates + multiple audit tables; capture shows **3 tables / 132 rows / 4 Clear groups** — lab splits **4 logical sections** (user admin + impersonation sessions) per operator prompt freeze.
- Row detail (193) expects actor, session, resource, IP, UA, timestamp — deep-link honesty when actor is not a user profile.
- Secrets must stay masked; integration power actions need confirm + audit visibility.

## CHANGE
| ID | Report intent | Lab response |
|---|---|---|
| C4 | One filter grammar; avoid duplicate table DOM | One `<table>` per section + CSS card rows on narrow (not 3 copies) |
| C13 | Audit row detail + saved views/export (report) | **Detail drawer** on row click; export → **A7 CSV** (ID verified Gate R) |
| C19 | Pagination honesty | “Showing 1–20 of 50” per section |
| C3 | AA-safe text | Muted lede + status badges with text |
| C5 | Teal-only | `shared/tokens.css` |
| C9 | Mono IDs | Actor/session/resource in `--mono` |
| C12 | Display counts | 50/50/33/ session counts in headings |
| C18 | Dark parity | `?theme=` + toggle |
| C20 | Logo alt | Nestlancer mark |

## ADD
| ID | Priority | Lab response |
|---|---|---|
| A7 | P2 · ≥3/5 | Demo-labelled **Export CSV** on audit sections |
| A12 | P3 · ≥3/5 (target 5/5) | **Delivery log** + Test + Retry replay on demo webhook fixture |

## KEEP
- Immutable audit tone; masked secrets; microcopy from captures.

## GATE R (F25)
```
## GATE R (F25) · MD: YES · XLSX: 10/10 · C4/C13/A7/A12 verified: YES · C: 9/9 · A: 2/2 · Gate: PASS
```
**ID note:** Prompt §6 listed A12 as “audit export” — report/manifest maps **A7 → audit CSV**, **A12 → webhook delivery/replay**. Implemented per verified IDs.
