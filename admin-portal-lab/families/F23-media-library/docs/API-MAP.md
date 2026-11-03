# F23 · Media Library — API map (Gate A)

**Spec:** `backend-api-swagger/media.openapi.json` — "Nestlancer Media Service", v1.0, **50 paths / 57 operations**, 15 schemas, one `bearer` security scheme. `backend-api-swagger/README.md` read (17 specs, media = 140,191 bytes, downloaded 2026-10-15).

## Endpoint groups

**Admin library**
`GET /api/v1/admin/media` (list) · `GET /admin/media/quarantine` · `GET /admin/media/analytics` · `GET /admin/media/storage-usage` · `/storage-stats` (alias) · `/stats` (alias) · `GET /admin/media/orphans` · `GET /admin/media/browse` · `GET /admin/media/users/{userId}`
`POST /admin/media/cleanup?dryRun={boolean}` (required) · `/bulk-delete` · `/backfill-context` · `/promote-to-portfolio` · `PATCH /admin/media/settings`

**Admin per-asset**
`GET /admin/media/{id}` · `PATCH /admin/media/{id}` · `DELETE /admin/media/{id}?force={boolean}` · `GET /{id}/download` · `GET /{id}/references` · `GET /{id}/shares` · `POST /{id}/share` · `DELETE /{id}/share` · `DELETE /{id}/shares/{shareLinkId}` · `POST /{id}/reprocess` · `POST /{id}/replace?force={boolean}`

**Admin quarantine**
`POST /admin/media/quarantine/{id}/release` · `DELETE /admin/media/quarantine/{id}?force={boolean}` (purge)

**Client / upload / sharing**
`GET /media`, `GET /media/{id}`, `PATCH`, `DELETE`, `GET /{id}/status`, `GET /{id}/download`, `POST /{id}/copy`, `POST /{id}/move`, `POST /{id}/regenerate-thumbnail`, `GET /{id}/versions`, `POST /upload/request`, `POST /upload/confirm`, `POST /upload/direct`, `POST /upload`, `GET /stats`, `GET /health`, chunked `init / {uploadId}/part / {uploadId}/complete / {uploadId}/status / {uploadId}/abort`, `GET|POST|DELETE /media/{id}/share*`, `GET|POST /share/{token}`.

## Query contract (list + quarantine)

`page` (default 1), `limit` (1–100, default 20), `pageSize` (alias), `sort` ("field:order"), `fileType`, `status`, `search` ("filename, mime type, or UUID"), `uploaderId`, `visibility`, `contextType` (project / thread / message / folder; `ungrouped` for orphans), `contextId`, `scope` (`library` | `owned`), `relatedToUserId`, `includeUrls` (default false — "list responses skip presigned S3 URLs").

**Enums:** `status = PENDING | PROCESSING | UPLOADING | READY | FAILED | QUARANTINED` · `fileType = IMAGE | DOCUMENT | ARCHIVE | VIDEO` · `visibility = PUBLIC | PRIVATE`.
`GET /admin/media/browse` requires `visibility`, `uploaderId` **and** `search` — it is not a folder-tree endpoint.

## DTOs (verbatim essentials)

- `RequestUploadDto`: filename, mimeType, size (1…524288000), fileType (required); optional projectId / threadId / messageId.
- `ConfirmUploadDto`: uploadId (required). `DirectUploadDto`: fileType + optional context / projectId / threadId / messageId.
- `InitChunkUploadDto`: filename, mimeType, totalSize (required); `UploadChunkDto`: uploadId, partNumber, etag; `CompleteChunkUploadDto`: uploadId, parts.
- `ShareMediaDto`: **purpose required** (≤500 chars), `expiresInSeconds` (min 3600 / max 7776000; example 604800 = 7 days), `passwordProtected`, `password`, `allowedEmails`.
- `AdminUpdateMediaDto`: filename, description, customMetadata, `visibility` (PRIVATE|PUBLIC), `originalFilename`, `metadataPatch`.
- `BulkDeleteMediaDto`: `ids` (required), `force` (optional).
- `PromotePortfolioMediaDto`: sourceMediaId, portfolioItemId, projectId, role (thumbnail|gallery), alt, caption.
- `ApiSuccessEnvelopeDto`: `status: "success"`, `data: object` (**additionalProperties: true**), `metadata`.

## Corrections to the pre-run prompt

1. **No bulk tag, bulk move or bulk quarantine endpoint.** Only `POST /admin/media/bulk-delete {ids, force}`. The prompt's "A1: tag/move/quarantine/delete-gated" is therefore corrected to count + Clear + local-prep Tag/Move + Delete.
2. **No endpoint lets an operator put an asset into quarantine.** Quarantine is produced by security scanning, matching the captured microcopy. "Quarantine" is never a bulk or per-card action.
3. **Status `PENDING` exists in the spec but not in the captured status select** — UI labels stay frozen.
4. **"Deliveries" and "Uploads only" are captured UI filters with no documented `contextType` enum value** — no per-filter rows are asserted.
5. **"Display name" (shot 076) plausibly maps to `originalFilename` but this is unverified** — treated as a UI field only.
6. **`cleanup?dryRun` is a required boolean** — "Preview cleanup" = `true`, "Run cleanup" = `false`; no result payload is documented.
7. **No multipart/binary request body is declared anywhere** — upload progress is a local staged simulation, never a claimed server write.
8. **Every admin 200 response is `data: object, additionalProperties: true`** — field names are not documented in Swagger; every API panel in the variants prints that sentence.
9. `allowedEmails` exists in `ShareMediaDto` but appears in no capture, so it is documented, not drawn.

## Demo-only surfaces (6)

1. Upload progress / confirm / done (no captured shot; request→progress→confirm→done staged locally).
2. Folder rows (shot 020 is a "Loading…" state only).
3. Quarantine review rows (captured count 0; two LOCAL DEMO rows are labelled).
4. Created share-link record / resolved URL ("No active share links." captured).
5. Cleanup dry-run result payload (no response fields documented).
6. Bulk Tag / Move preparation (no endpoint; staged locally only).

All surfaces are labelled "Local prototype / no production writes". No variant issues an HTTP request.
