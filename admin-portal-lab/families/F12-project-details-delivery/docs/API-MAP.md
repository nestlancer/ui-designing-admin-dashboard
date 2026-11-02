# F12 API map — initial contract review

Sources: bundled `projects.openapi.json`, `progress.openapi.json`, `payments.openapi.json`. Contract listing does not prove service health, permissions, response shape or mutation success. All existing prototypes are offline and non-mutating.

| Surface | Contract |
|---|---|
| Admin project detail/status/analytics | `GET /api/v1/admin/projects/{id}`, `PATCH /api/v1/admin/projects/{id}/status`, `GET /api/v1/admin/projects/{id}/analytics` |
| Timeline / progress | `GET/POST /api/v1/admin/progress/projects/{projectId}`; `GET /api/v1/admin/progress/projects/{projectId}/timeline`; `GET .../analytics`; entry update/delete under `/api/v1/admin/progress/{id}` |
| Deliverables | `GET/POST /api/v1/admin/projects/{projectId}/deliverables`; `PATCH/DELETE /api/v1/admin/deliverables/{id}` |
| Milestones | `POST /api/v1/admin/projects/{id}/milestones` in projects spec; `POST /api/v1/admin/projects/{projectId}/milestones` in progress spec; `PATCH /api/v1/admin/milestones/{id}` and `POST .../complete` in progress spec |
| Project payments / manual entry | `GET /api/v1/payments/projects/{projectId}`; `POST /api/v1/admin/payments/manual`; `POST /api/v1/admin/payments/{id}/manual-payment`; verify authentication and role in integration. |
| Project export | `POST /api/v1/admin/projects/{id}/export`; `GET /api/v1/admin/projects/{id}/export/download` |

## Contract conflict requiring backend clarification

The two milestone POSTs normalize to the same path pattern but document different request DTOs: projects' `CreateMilestonesAdminDto` requires a `milestones` array; progress' `CreateMilestoneDto` requires `name`, `startDate`, `endDate`, and describes amount in the smallest currency unit. Do not pick one silently, infer the deployed handler or submit writes based on these conflicting descriptions.

## Source separation

Razorpay detail screenshot 053 and Khandesh screenshots 086/089/090 are different records. Their metrics, milestones and client data must not be joined. Full screenshot-to-field/error mapping and all 13 screenshot transcriptions remain incomplete; Gate A has not been passed.
