# F20 API Map — Analytics hub slice

## GATE A (F20)
```
## GATE A (F20) · Specs: 2/2 · Endpoints: 8 · Demo-only: CSV blob · Gate: PASS
```

**Specs read:** `backend-api-swagger/admin.openapi.json` · `backend-api-swagger/health.openapi.json` (uptime/perf panels referenced in prompt).

| UI surface | HTTP | Notes |
|---|---|---|
| Revenue KPI + over-time + by category | `GET /api/dashboard/revenue` | Query `period` enum TODAY…YEAR; optional `from`/`to`; 200 `data` object (open schema) |
| Users KPI + activity series | `GET /api/dashboard/users` | Same `period` |
| Users analytics alias | `GET /api/dashboard/analytics/users` | PIPE-001 alias of `/dashboard/users` |
| Projects KPI + status mix | `GET /api/dashboard/projects` | Same `period` |
| Projects analytics alias | `GET /api/dashboard/analytics/projects` | Alias of `/dashboard/projects` |
| Overview cross-metrics | `GET /api/dashboard/overview` | Hub summary when wired |
| Ops-health / perf panel (optional) | `GET /api/dashboard/performance` | Static preview only in lab |
| Health probe (system) | Health spec routes | Label “Not probed” unless response supplied |

**Requests tab:** No dedicated `/analytics/requests` in admin.openapi — request totals/conversion in UI align with captured DOM + requests list family; lab uses **frozen static series** (46 total, 36/10 volume) without inventing a new endpoint.

**Demo-only:** Download CSV builds a client-side blob from frozen tables; no `fetch()` in variants.

**Period mapping (UI → API):** 7d→WEEK · 30d→MONTH · 90d→QUARTER · 1y→YEAR (conceptual; static capture ignores live aggregation).
