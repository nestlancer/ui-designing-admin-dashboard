# F25 Delivery Report — Integrations + Audit

**Result:** PASS — 5 variants · webhooks + keys + audit explorer  
**Winner:** **V2 Explorer spine** — audit query owns the screen with integrations dock; best operator flow for “prove who did what” without losing webhook test/retry context.

| V | Name | Signature |
|---|---|---|
| V1 | Ground truth | Tabbed capture-faithful webhooks / keys / audit |
| V2 | Explorer spine | Audit default + section jumps + integrations dock |
| V3 | Integration-first | Single-scroll hero webhooks → keys → audit |
| V4 | Dense ledger | Compact tables + delivery/endpoints split rail |
| V5 | Motion | Panel fade + retry pulse + drawer choreography |

## Coverage
- **Gates:** S/R/A/T + Gate 1 + Gate 3 PASS (this folder).
- **C4:** One DOM table per audit section + narrow card fallback — 5/5.
- **C13:** Row detail drawer (actor, session, resource, IP, UA, timestamp) + deep-link honesty — 5/5.
- **C19:** “Showing 1–20 of N” pagination copy — 5/5.
- **C3/C5/C9/C12/C18/C20:** 5/5.
- **A7:** Demo CSV export CTA on audit sections — 5/5.
- **A12:** Delivery log + Test + Retry replay on lab demo endpoint — 5/5.

## Verify matrix (lab static)
| Variant | 1440 light | 1440 dark | 390 light | 390 dark |
|---|---|---|---|---|
| V1–V5 | OK | OK (`?theme=dark`) | OK | OK |

```
## GATE 3 (F25) · Hand-built: 5/5 · Generators: 0 · Widths×themes: 5×4 · Checklist: 5/5 · Blockers: 0 · Gate: PASS
```

Preview: `admin-portal-lab/` on `:8131` → `families/F25-integrations-audit/V#/index.html`
