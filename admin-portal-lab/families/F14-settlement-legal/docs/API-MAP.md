# F14 API Map — Settlement Accounts + Company Legal

## GATE A (F14)
```
## GATE A (F14) · Specs: 4/4 · Endpoints: 8 · Demo-only: 4 · Gate: PASS
```

### Endpoints (admin payments slice)
| Method | Path | Operation |
|---|---|---|
| GET | `/api/v1/admin/payments/accounts` | List platform settlement accounts |
| POST | `/api/v1/admin/payments/accounts` | Create account |
| PATCH | `/api/v1/admin/payments/accounts/{id}` | Update account |
| DELETE | `/api/v1/admin/payments/accounts/{id}` | Remove/disable account |
| GET | `/api/v1/admin/payments/company-legal` | List legal profiles |
| POST | `/api/v1/admin/payments/company-legal` | Create profile |
| PATCH | `/api/v1/admin/payments/company-legal/{id}` | Update profile |
| DELETE | `/api/v1/admin/payments/company-legal/{id}` | Remove profile |

Spec source: `backend-api-swagger/payments.openapi.json` — `PlatformPaymentAccountsAdminController_*`, `CompanyLegalProfileAdminController_*`.

### UI field → DTO map

**CreatePlatformPaymentAccountDto / UpdatePlatformPaymentAccountDto**
| UI label | JSON field | Notes |
|---|---|---|
| Label | `label` | required on create |
| Type | `type` | enum `BANK` · `UPI` · `BOTH` (UI: Bank / UPI / Bank + UPI) |
| Account holder | `accountHolderName` | |
| Bank name | `bankName` | |
| Account number | `accountNumber` | mask in list UI |
| IFSC | `ifsc` | pattern validated client-side demo |
| UPI VPA | `upiVpa` | |
| Instructions for clients | `instructions` | |
| Primary (invoices) | `isPrimary` | |
| Active | `isActive` | default true |
| — | `currency` | INR default (spec) |
| — | `sortOrder` | optional |

**CreateCompanyLegalProfileDto / UpdateCompanyLegalProfileDto**
| UI label | JSON field |
|---|---|
| Label | `label` |
| Legal name | `legalName` |
| Trade / brand name | `tradeName` |
| Registered address | `address` |
| State | `state` |
| State code | `stateCode` |
| GSTIN | `gstin` |
| PAN | `pan` |
| CIN | `cin` |
| Billing e-mail | `email` |
| Phone | `phone` |
| Website | `website` |
| Primary (used on PDFs) | `isPrimary` |
| Active | `isActive` |

### Demo-only (static lab)
1. Save bar “saved” + audit line — no network; maps to POST/PATCH above
2. Disable account / Remove profile — confirm modal only
3. Skeleton/error preview toggles — not production controls
4. Reveal account number — UI discipline demo, not an API field

### Error / loading contract
- Inline field errors before submit; save bar `invalid` blocks primary
- Skeleton on list load; honest empty when zero rows
- Failed save shows retry copy (demo banner)
