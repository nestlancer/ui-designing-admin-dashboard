# F25 API Map — Webhooks + Admin audit

Specs: `backend-api-swagger/webhooks.openapi.json` · `backend-api-swagger/admin.openapi.json`

```
## GATE A (F25) · Specs: 2/2 · Endpoints: 14 mapped · Demo-only: 14 · Gate: PASS
```

| Surface | Method | Path | UI |
|---|---|---|---|
| Webhook health | GET | `/admin/webhooks/health` | Integration health card |
| Webhook events | GET | `/admin/webhooks/events` | Event catalog (12) |
| Webhooks list | GET | `/admin/webhooks` | Endpoints table / empty |
| Create webhook | POST | `/admin/webhooks` | Add form (017) |
| Delivery log | GET | `/admin/webhooks/{id}/deliveries` | A12 log + retry |
| Test delivery | POST | `/admin/webhooks/{id}/test` | Test button |
| Retry delivery | POST | `/admin/webhooks/deliveries/{id}/retry` | Retry replay |
| System audit | GET | `/admin/audit` | Section 1 |
| Auth audit | GET | `/admin/logs` | Section 2 |
| User admin audit | GET | `/admin/audit` (admin actions) | Section 3 |
| Impersonation sessions | GET | `/admin/impersonation/sessions` | Section 4 |
| Audit export | GET | `/admin/audit/export` | A7 CSV (demo) |
| API keys list | GET | `/admin/api-keys` | Keys table (demo-labelled) |
| Issue / rotate / revoke | POST | `/admin/api-keys*` | Confirm-gated demo |

**Demo-only:** No bearer token; mutations show receipt toasts only.
