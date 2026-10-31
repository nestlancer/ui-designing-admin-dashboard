# F24 API Map — System slice

Specs: `backend-api-swagger/admin.openapi.json` · `backend-api-swagger/gateway.openapi.json`

## GATE A (F24)
```
## GATE A (F24) · Specs: 2/2 · Endpoints: 18 mapped · Demo-only: 18 · Gate: PASS
```

| Tab / UI | Method | Path | Notes |
|---|---|---|---|
| Health · Gateway | GET | `/api/v1/health/system` | gateway.openapi — diagnostics payload (demo-labelled in lab) |
| Health · Service | GET | `/api/health` | admin service health |
| Config list/save | GET/PATCH | `/api/system/config` | `UpdateSystemConfigDto` key + value |
| Features list | GET | `/api/system/features` | |
| Feature toggle | PATCH | `/api/system/features/{flag}` | `ToggleFeatureDto` enabled + rolloutPercentage |
| Jobs list | GET | `/api/system/jobs` | query `status`, `queue` |
| Job retry | POST | `/api/system/jobs/{id}/retry` | confirm-gated demo |
| Job cancel | DELETE | `/api/system/jobs/{id}/retry` | confirm-gated demo |
| Email templates | GET | `/api/system/email-templates` | 10 in capture |
| Email get/update | GET/PATCH | `/api/system/email-templates/{id}` | |
| Email preview | POST | `/api/system/email-templates/preview` | editor preview |
| Email test send | POST | `/api/system/email-templates/{id}/test` | guarded |
| Maintenance | POST | `/api/system/maintenance` | `ToggleMaintenanceDto` |
| Cache clear | POST | `/api/system/cache/clear` | `ClearCacheDto` |
| Cache key | POST | `/api/system/cache/clear/{key}` | |
| Logs | GET | `/api/system/logs` | filter level/service |
| Logs download | GET | `/api/system/logs/download` | CSV |
| Announcement | POST | `/api/system/announcements` | `SendAnnouncementDto` |

**Out of F24 (F25):** `/api/webhooks*` · audit log explorer — link only.

**Demo-only:** All lab actions emit receipt copy; no bearer token, no live mutations.
