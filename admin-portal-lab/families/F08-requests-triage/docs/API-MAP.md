# F08 API Map

## GATE A (F08)
```
## GATE A (F08) · Specs: 3/3 (requests + users assignees + quotes entry) · Endpoints: 25+ · Demo-only: capacity save / assign / status · Gate: PASS
```

| UI | Spec |
|---|---|
| Queue list | GET `/api/v1/admin/requests` |
| Stats / strip | GET `/api/v1/admin/requests/stats` |
| Capacity dashboard | GET `/api/v1/admin/requests/capacity/dashboard` |
| Capacity settings | `/api/v1/admin/requests/settings/capacity` |
| Detail | GET `/api/v1/admin/requests/{id}` |
| Status | PATCH `/api/v1/admin/requests/{id}/status` |
| Assign | POST `/api/v1/admin/requests/{id}/assign` |
| Notes | `/api/v1/admin/requests/{id}/notes` |
| Quote prefill / entry | `/api/v1/admin/requests/{id}/quotes` · `…/prefill` → F10 |
| Attachments | download paths |
| Assignees | users admin list |
