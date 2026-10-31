# F15 Baseline Map — Users Directory

## GATE S (F15)
```
## GATE S (F15) · Shots: 1/1 · HTML: 1/1 · Freshness flags: YES · Content frozen: YES · Gate: PASS
```

### Routes
| Route / state | Primary HTML | Screenshot |
|---|---|---|
| `/users` — directory | `79-users-index.html` | `064-users.webp` |

### Frozen chrome
- **H1 path:** User management · Users directory
- **Lede:** Manage system access, roles, and security status for all internal and client accounts.
- **Primary CTA:** Add new user (+ honesty: new accounts come from client registration — operators cannot create users here)

### Frozen KPIs (C16 — identical 34s flagged, never corrected)
| Label | Value |
|---|---|
| Total users | **34** |
| Active | **34** |
| New this month | **34** |
| Suspended | **0** |

Freshness honesty: as-of timestamp from capture (`2026-10-30T13:43:22Z` audit) + stale-metric flag when Total = Active = New.

### Filters (capture)
- **Status:** All statuses · ACTIVE
- **Role:** All roles · USER · ADMIN
- **Search** (text)
- **Clear**

### Table columns
User · Role · Status · Created · Actions (View →)

### Pagination (C19)
- Page 1: **Showing 1–20 of 34** · Prev (disabled) · **1 / 2** · Next
- Page 2: **Showing 21–34 of 34** · honesty only (14 rows not in HTML row dump — no invented identities)

### Frozen page-1 rows (20) — Role User · Status Active unless noted
| # | Name | Email | Created |
|---|---|---|---|
| 1 | Audit AUDIT-A01-20261007-1 | audit.a01.20261007@nestlancer.com | Oct 7, 2026 |
| 2 | Audit AUDIT-A01-20261006-1 | audit.a01.20261006@nestlancer.com | Oct 6, 2026 |
| 3 | Audit P15C | audit-p15c-202610060427-69a1af@maxxspace.com | Oct 6, 2026 |
| 4 | Audit P03 | audit-p03-muw65gpu@maxxspace.com | Oct 6, 2026 |
| 5 | Audit Repro | audit.repro.1791223371@nestlancer.com | Oct 5, 2026 |
| 6 | Audit AUDIT-A01-20261005-3 | audit.a01.20261005@nestlancer.com | Oct 5, 2026 |
| 7 | Audit TwoFA | audit-p03-2fa-muvhcg2f@maxxspace.com | Oct 5, 2026 |
| 8 | Audit P03 | audit-p03-muvh8h57@maxxspace.com | Oct 5, 2026 |
| 9 | Audit P15TwoFA | audit-p15-2fa-muvdpoq9-cb59ab@maxxspace.com | Oct 5, 2026 |
| 10 | Audit TwoFA | audit-p03-2fa-muv0fey0@maxxspace.com | Oct 5, 2026 |
| 11 | Audit TwoFA | audit-p03-2fa-muuz498f@maxxspace.com | Oct 5, 2026 |
| 12 | Audit P03 | audit-p03-muuyzqtn@maxxspace.com | Oct 5, 2026 |
| 13 | Audit P15Delete | audit-p15-delete-muuv7cgo-c928fb@maxxspace.com | Oct 5, 2026 |
| 14 | Audit P15TwoFA | audit-p15-2fa-muuv6fom-19e4f9@maxxspace.com | Oct 5, 2026 |
| 15 | Audit TwoFA | audit-p03-2fa-muuuq95i@maxxspace.com | Oct 5, 2026 |
| 16 | Audit P15C | audit-p15c-202610050548-ce9b51@maxxspace.com | Oct 5, 2026 |
| 17 | Audit TwoFA | audit-p03-2fa-muutk7sb@maxxspace.com | Oct 5, 2026 |
| 18 | Audit P03 | audit-p03-muutg2le@maxxspace.com | Oct 5, 2026 |
| 19 | Sandeep Chopra | sandeep.chopra@nestlancer.com | Oct 5, 2026 |
| 20 | Karthik Menon | karthik.menon@nestlancer.com | Oct 5, 2026 |

**Admin row:** Not on page-1 capture (all User). Dashboard elsewhere may cite Admin:1 — do not invent `admin@` on directory page 1.

### Add-user (honesty)
- Production UI exposes Add new user; lab must **not** simulate create-user success.
- `users.openapi.json`: `GET /api/v1/admin/users` only on collection — **no POST create** on admin list (registration path is client-side, not operator create).

### Deep links
- View → F16 user details (`../../../index.html#f16` + demo toast)

### Metadata (`audit-metadata.json`)
- `/users` index: 24 inputs, 21-row table anatomy in DOM, Add / Search / Clear / Prev / Next present; checkboxes without bulk bar in capture (A1 fixes in lab).
