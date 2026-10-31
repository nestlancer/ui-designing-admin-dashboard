# F10 API Map

## GATE A (F10)
```
## GATE A (F10) · Specs: 2/2 · Endpoints: 27 quotes (+requests origin) · Demo-only: send/duplicate · Gate: PASS
```

| UI | Spec |
|---|---|
| Detail | GET `/api/v1/admin/quotes/{id}` |
| Save | PATCH `/api/v1/admin/quotes/{id}` |
| Send | POST `…/{id}/send` (confirm) |
| Duplicate | POST `…/{id}/duplicate` |
| Library | GET `/api/v1/admin/quotes/line-item-library` |
| Presets | GET `/api/v1/admin/quotes/payment-schedule-presets` |
| History | GET `…/{id}/history` |
| Origin request | requests admin detail |
