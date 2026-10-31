# F16 API Map — User Details + Safety

## GATE A (F16)
```
## GATE A (F16) · Specs: 2/2 · Endpoints: 18 mapped · Demo-only: 11 · Gate: PASS
```

Specs: `backend-api-swagger/users.openapi.json` · `backend-api-swagger/admin.openapi.json` (impersonation + audit links)

### Profile & directory context
| UI surface | Method | Path | Notes |
|---|---|---|---|
| User detail load | GET | `/api/v1/admin/users/{userId}` | Karthik `01a10a2b-1039-77dd-90c9-2793dd606216` |
| Edit profile Save | PATCH | `/api/v1/admin/users/{userId}` | firstName, lastName, email |
| Role change | PATCH | `/api/v1/admin/users/{userId}/role` | USER/ADMIN — sole-admin guard |
| Status change | PATCH | `/api/v1/admin/users/{userId}/status` | ACTIVE/SUSPENDED/DELETED/PENDING DELETION |

### Safety actions
| UI action | Method | Path | Lab |
|---|---|---|---|
| Set password | POST | `/api/v1/admin/users/{userId}/reset-password` | Confirm + ends sessions copy |
| Force password reset | POST | `/api/v1/admin/users/{userId}/force-password-reset` | Email/link flow — demo toast |
| End all sessions | POST | `/api/v1/admin/users/{userId}/terminate-all-sessions` | Confirm → Sessions terminated |
| List sessions | GET | `/api/v1/admin/users/{userId}/sessions` | Empty 0 devices in capture |
| Terminate one session | DELETE | `/api/v1/admin/users/sessions/{sessionId}` | N/A when empty |
| Export data | POST | `/api/v1/admin/users/{userId}/export` | GDPR queue — demo receipt |
| Impersonate | POST | `/api/users/{userId}/impersonate` | **admin.openapi** · reason required |
| End impersonation | POST | `/api/v1/auth/end-impersonation` | After client tab open |
| Deactivate (soft delete) | PATCH | `/api/v1/admin/users/{userId}/status` | deletedAt honesty in dialog |

### Activity & audit
| UI surface | Method | Path |
|---|---|---|
| Activity log table | GET | `/api/v1/admin/users/{userId}/activity` |
| Platform admin logs | GET | `/api/v1/admin/users/logs` |
| Security stats (context) | GET | `/api/v1/admin/users/logs/security-stats` |

### Pipeline tabs (per-user context — shot baseline, actions spec-verified)
| Tab | Representative admin routes (not live-called in lab) |
|---|---|
| messages | User-scoped messaging / moderation threads |
| payments | `/api/v1/admin/payments` filtered by client |
| projects | `/api/v1/admin/projects` filtered by owner |
| quotes | `/api/v1/admin/quotes` |
| requests | `/api/v1/admin/requests` |
| trust-account | Trust/verification ledger (users spec extensions) |

### Demo-only (static lab — no network)
- View media · Pipeline hub navigation stubs
- Sole-administrator lab persona preview
- Skeleton / error state toggles
- A15 audit strip entries (local who/when/why receipts)
- Impersonate “open client tab” (window.open blocked — demo announce)

### Audit fields (A15 strip)
Every safety confirm writes: **actor** (admin@nestlancer.com lab) · **timestamp** (ISO local) · **reason** (when required) · **endpoint** label
