# API map · offline prototype

Admin `GET /api/audit`, `/api/audit/logs` alias: page, limit (1–100), pageSize alias, sort, userId, resourceType, action, from, to; `GET /api/audit/{id}`, `/stats`, `/user/{userId}`, `/resource/{type}/{id}`. `POST /api/audit/export` starts a background CSV or JSON export; required format, optional userId/resourceType/action/from/to. Response shape is an open object; no job lifecycle or PDF documented.

Admin `/api/webhooks`: GET/POST, health, events, item GET/PATCH/DELETE, test POST (`event` required), delivery list/detail GET, retry POST, enable/disable POST, stats GET. Delivery status filter `PENDING`, `DELIVERED`, `FAILED`, page/limit/pageSize/sort. Create requires name (max 100), url, events; optional headers, secret, enabled, retryPolicy (`maxRetries`, `backoffSeconds`). Update DTO is empty in the spec; do not infer update fields.

Webhooks service `/api/v1/webhooks/health`, Razorpay, Cloudflare, GitHub, Stripe and `{provider}` POST are inbound receivers, not outbound administration. No API key lifecycle endpoint found in the 17 supplied specs. Capture route labels `/admin/...` differ from OpenAPI `/api/...`; gateway routing must be verified. All actions here are local only; permissions, data types of open response bodies, redaction and retention remain unverified.
