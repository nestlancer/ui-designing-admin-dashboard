# GATE R — F01 · Auth · Operator sign-in — REPORT STUDY

```
## GATE R (F01) · MD read: YES · XLSX: 10/10 sheets reviewed (md wins conflicts) · C-items mapped: 7/7 · A-items mapped: 1/1 · KEEP listed: YES · Gate: PASS
```

Source: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` (+ `.xlsx`, 10 sheets).

## Findings touching F01 (quoted)
- **Finding #3 — "Admin sessions are unstable."** `/api/auth/refresh` returned **409 and 503** mid-crawl and the console bounced to *Operator sign-in* three times in ~25 minutes of light, read-only use. → drives the **A11 expired-session honesty state** on the sign-in page.
- **Finding (chrome) — cookie-consent banner** (`Dismiss / Accept`) on every page: "an internal tool asking operators for cookie consent" → **C15**.
- Shell measurement rows: `--header-height 52px`, sidebar `#f3f4f7` + teal-10% active, `--radius-xl 20` — the lab keeps the measured 52px header height and teal identity.

## CHANGE items in F01 scope (each in all 5 variants)
| ID | Report §6.1 text (abridged) | F01 implementation |
|---|---|---|
| C3 | Fix success/info badge contrast; status ≠ colour | PASS/PENDING badges = icon + tint + darkened AA text tokens |
| C5 | Rename + purge token leaks; document admin-teal vs client-blue split | one teal ramp; no blue anywhere on auth |
| C9 | Mono + full IDs on hover | session id `auth_sess_…` in mono |
| C12 | Display 32–40px for weight-carrying titles | H1 at 32px (28–30px on mobile) |
| C15 | Remove the cookie banner for operators | banner not rendered in any variant |
| C18 | Repair dark mode or remove the toggle | working dark parity + `?theme=` boot in 5/5 |
| C20 | Logo alt text | inline SVG `role="img"` + `<title>` + aria-label in 5/5 |

## ADD items in F01 scope
- **A11 (P2 → ≥3/5):** expired-session/degraded honesty — "session expired — sign back in" state with retry, reflecting finding #3. Shipped **5/5** (manifest-recorded).

## KEEP (present in every variant)
- Operator tone + honesty notes (never marketing copy on a console door) · teal + Inter + 6px ops identity (§6.3)
- Frozen labels: Work email / Password / Show / Keep me signed in / Enter console / Client sign-in / host · admin.nestlancer.com / Terms · Privacy

## Roadmap / acceptance checklist applied as QA (report §7)
- hierarchy <2s · colour AA · type scale · dark parity · keyboard · empty/loading/error states · no cookie banner · honest session copy
