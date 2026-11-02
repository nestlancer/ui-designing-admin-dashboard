# F11 API map — initial contract review

Source: bundled `backend-api-swagger/projects.openapi.json`; contracts do not prove current service availability or actual permissions. The 2026-10-30 failure is historical, not a current check.

| Surface | Contract | Parameters / caveats |
|---|---|---|
| Admin list | `GET /api/v1/admin/projects` | `page`, `limit`, `search`, `status`, `clientId`, `userId`; page/limit represented as strings in this spec. |
| Headline counts | `GET /api/v1/admin/projects/stats` | No filters documented in the operation. |
| Detail handoff | `GET /api/v1/admin/projects/{id}` | Requires path `id`; links should carry a verified ID, not title-based guesses. |
| Archive | `POST /api/v1/admin/projects/{id}/archive` | Mutation; current static prototypes do not send it. |
| Template | `GET /api/v1/admin/projects/{id}/duplicate-preview`, `POST /api/v1/admin/projects/from-template` | The old `/duplicate` route is marked deprecated; confirm the actual flow rather than assuming a single-click mutation. |

Status filter UI and cached screenshot rows are historical. Search, retry and state switching in prototypes are local only; no actual API call, persisted saved view, bulk mutation or recovery is asserted. Complete response-schema and error/auth mapping is still required before Gate A can pass.
