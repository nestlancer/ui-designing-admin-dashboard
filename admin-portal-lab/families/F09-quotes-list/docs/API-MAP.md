# F09 API Map — quotes list slice

## GATE A (F09)
```
## GATE A (F09) · Specs: 1/1 · Endpoints: list/filter/paginate (+stats) · Demo-only: bulk · Gate: PASS
```

| UI | Spec |
|---|---|
| List | GET `/api/v1/admin/quotes` |
| Stats KPIs | GET `/api/v1/admin/quotes/stats` |
| Row → detail | GET `/api/v1/admin/quotes/{id}` (F10) |
| Duplicate | POST `…/{id}/duplicate` (row action demo) |
| Send/resend | F10 surface |

Builder/templates/line-items belong to F10 — not invented here.
