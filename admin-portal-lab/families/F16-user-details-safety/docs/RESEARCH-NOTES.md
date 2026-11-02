# F16 — preliminary research and gate status

## Status
Work in progress, not a delivery report. Gates S → R → A → T remain **incomplete**; reconcile all required HTML snapshots, fully study the report and workbook, map all relevant endpoints, then conduct the required eight-reference research. The exploratory searches below took place before completion of S/R/A and do not count toward Gate T. No concepts or variants are claimed as delivered.

## Screenshot observations
Correction after individually reopening each screenshot: `002` displays Riya Kapoor, ADMIN, zero requests/projects, ₹0 and eight devices, with the only-administrator safeguard; `111` displays Arjun Mehta, USER, 26 requests, 5 projects, ₹81,500 and six devices. An earlier analysis reversed the filenames after parallel image results arrived out of order. Preserve the identity distinction. `108` is a deactivation confirmation, `109` an edit dialog, `110` an impersonation reason dialog, `112` a single-session revoke confirmation, and `113` a password dialog. Captures `114`–`119` show the separate user pipeline hub with six category tabs. `156` is a third record, Karthik Menon, not either screenshot identity.

Verbatim captured safety text: “This soft-deletes the account (sets deletedAt). The user can be restored later.” “This will sign the user out of this device.” “Minimum 8 characters. Updating the password ends all sessions.” Impersonation screenshot specifies a reason, a new client tab after confirmation, a 60-minute session, and auditing; a static prototype must not claim any of those side effects actually happened. Sole-admin warning blocks role demotion, suspension and deletion; the captured admin account also cannot be impersonated. Production must independently enforce protections and authorization server-side.

## Initial API observations
`users.openapi.json` documents GET/PATCH/DELETE `/api/v1/admin/users/{userId}`, PATCH role/status, POST force-password-reset and reset-password, GET sessions, POST terminate-all-sessions, DELETE `/api/v1/admin/users/sessions/{sessionId}`, POST export, GET activity, and POST restore. Reset-password DTO requires a newPassword with minimum length 8. `admin.openapi.json` has impersonation and user audit paths. This is a path inventory, not evidence of runtime semantics or complete permissions.

The research report's A15 is **per-operator action permissions**, not the action-audit strip described by the original family prompt. The strip is a separate proposed enhancement; no prototype must claim it persisted an audit record.

## Exploratory enterprise references (not Gate T)
- [GOV.UK warning button](https://design-system.service.gov.uk/components/button/) — separate confirmation for destructive action.
- [GOV.UK summary list](https://design-system.service.gov.uk/components/summary-list/) — metadata and cautiously presented card actions.
- [Carbon dialogs](https://www.carbondesignsystem.com/building-blocks/core/patterns/dialogs) — dialog accessibility and simple decision-making.
- [Atlassian panels](https://atlassian.design/components/panel/usage) — context, close affordance and when a full page is more appropriate.
- [Atlassian components](https://atlassian.design/components) — dense activity tables.
- [GOV.UK notification banner](https://design-system.service.gov.uk/components/notification-banner/) — communicating action outcomes.

These are guidance, not evidence that Nestlancer supports a behavior or permission. Eight relevant trust-and-safety references still need to be collected after the preceding gates.
