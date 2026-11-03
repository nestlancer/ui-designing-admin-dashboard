# External research · F25

Exploratory searches began during source review, before the formal Gate A write-up; this was out of the specified gate order. After source/API examination, the following eight product documentation references were opened. Patterns inform hierarchy only, not claims about Nestlancer.

1. [GitHub delivery history](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries): endpoint → delivery → request/response detail; avoid inventing payloads.
2. [GitHub redelivery](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/redelivering-webhooks): select exact delivery before retry; confirm locally.
3. [GitHub testing](https://docs.github.com/en/webhooks/testing-and-troubleshooting-webhooks/testing-webhooks): distinguish test events from actual deliveries.
4. [Stripe webhooks](https://docs.stripe.com/webhooks): event-delivery status and endpoint context; Nestlancer statuses come from its own spec.
5. [Stripe API keys](https://docs.stripe.com/keys?locale=en-GB): key and signing secret are separate concepts; no unsupported key management claims.
6. [Cloudflare audit explorer](https://developers.cloudflare.com/logs/changelog/audit-logs/): query facets and record context; do not copy Cloudflare retention.
7. [Datadog audit trail](https://docs.datadoghq.com/account_management/audit_trail/): inspect actor/action/resource as facets; use only supported fields.
8. [Vercel audit logs](https://vercel.com/academy/optimize-your-vercel-account/audit-logs): disclose what an export does; Nestlancer async behavior differs.
