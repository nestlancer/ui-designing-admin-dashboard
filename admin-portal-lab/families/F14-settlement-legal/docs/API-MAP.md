# F14 payments contract — initial mapping

Source: `backend-api-swagger/payments.openapi.json`. Contract evidence only; this does not establish production availability, authorization behavior or successful writes.

| Surface | Contract |
|---|---|
| Active client-facing accounts | `GET /api/v1/payments/platform-accounts` |
| Admin accounts | `GET` / `POST /api/v1/admin/payments/accounts` |
| Edit / disable account | `PATCH` / `DELETE /api/v1/admin/payments/accounts/{id}`; delete summary says soft delete |
| Legal profiles | `GET` / `POST /api/v1/admin/payments/company-legal` |
| Edit / remove profile | `PATCH` / `DELETE /api/v1/admin/payments/company-legal/{id}` |

Account create DTO requires `label` and `type`; type is BANK, UPI or BOTH. Capture labels map to `accountHolderName`, `bankName`, `accountNumber`, `ifsc`, `upiVpa`, `instructions`, `isPrimary`, `isActive`. Create also has `accountType`, `currency`, `sortOrder`; `accountName` and `isDefault` are deprecated aliases. Do not infer validation rules beyond the contract; length limits are in the DTO.

Legal create DTO requires only `label`; capture labels map to `legalName`, `tradeName`, `gstin`, `pan`, `cin`, `state`, `stateCode`, `email`, `phone`, `website`, `address`, `isPrimary`, `isActive`. The update schema types `gstin` and `pan` as objects, unlike the string types in the create schema: this mismatch requires backend clarification and should not be silently resolved.

No account-verification endpoint is present in the relevant paths. Verification must not be represented as a real operation. Similarly, who/when audit and successful saved states require real integration and must be labelled local prototype interactions. Gate A is not yet declared complete.
