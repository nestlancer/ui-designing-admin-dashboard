# F06 API Map

## GATE A (F06)

```
## GATE A (F06) · Specs: 1/1 · Endpoints: 7 · Demo-only: 5 · Gate: PASS
```

| UI | Method/path |
|---|---|
| List/filter chips | `GET /api/v1/admin/contact` |
| Read inquiry | `GET /api/v1/admin/contact/{id}` |
| Status update | `PATCH /api/v1/admin/contact/{id}/status` |
| Reply / send | `POST /api/v1/admin/contact/{id}/respond` |
| Mark spam | `POST /api/v1/admin/contact/{id}/spam` |
| Delete | `DELETE /api/v1/admin/contact/{id}` |
| Archive | status patch / demo-labelled if not distinct path |
| Health | `GET /api/v1/contact/health` |

Demo-only: local filter/bulk/keyboard, undo toast window, next-item advance, pagination slice, no real email send.
