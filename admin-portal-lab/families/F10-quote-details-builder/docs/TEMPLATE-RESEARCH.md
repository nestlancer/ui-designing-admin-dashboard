# F10 quote-composer research (Gate T)

## Eight quote/CPQ products compared
Reviewed two current comparison pages and extracted composition/workflow patterns from eight specific quoting products. These are secondary-source summaries, not a hands-on teardown of each vendor UI; use as workflow references, never as evidence that Nestlancer has these features.

1. **Salesforce Revenue Cloud** — quote, subscription and billing continuity in a CRM data model; useful reference for keeping quote context tied to the source record.
2. **HubSpot Quotes / Revenue Hub** — quote created from a deal record; useful reminder to preserve customer/source context and avoid duplicate entry.
3. **PandaDoc CPQ** — document-led quote with catalog/pricing and signature workflow; useful for the final customer-facing review boundary.
4. **Proposify** — proposal composition and brand-controlled templates; useful for separating the editable quote from its customer presentation.
5. **Qwilr** — interactive quote/proposal and buyer engagement; useful as a reference for clear buyer-facing progression, not imported as analytics.
6. **QuoteWerks** — centralized quotes, product catalog, version and downstream handoff; reinforces exact reference/version treatment.
7. **DealHub** — guided configuration and approval workflow; reinforces staged validation and ownership of next action.
8. **Oracle CPQ** — complex pricing/configuration and approval; reinforces guardrails around calculated totals, without importing enterprise pricing rules.

Sources opened:
- Guideflow, “8 best quoting software tools for 2026” (workflow/control/version patterns; comparisons include QuoteWerks, PandaDoc, Salesforce, Conga, Zuora, DealHub, Oracle and Qwilr): https://www.guideflow.com/blog/quoting-software
- Albato, “Best CPQ Software in 2026” (opened; Salesforce Revenue Cloud, DealHub, HubSpot, PandaDoc, Proposify, Conga, Epicor, Zuora): https://albato.com/blog/publications/best-cpq-software
- monday.com, “Quote management software” (opened; 15 platform matrix and quote-flow features): https://monday.com/blog/crm-and-sales/quote-management/
- AdminLTE SaaS dashboard patterns: https://adminlte.io/blog/saas-admin-dashboard-templates/
- RV Grid enterprise dashboards: https://rv-grid.com/blog/building-enterprise-dashboards
- Lazarev dashboard UX: https://www.lazarev.agency/articles/dashboard-ux-design
- Polado operational admin screens: https://polado.io/en/blog/admin-dashboard-ux-design-operational-screens
- Digital Elliptical admin UI patterns: https://digitalelliptical.com/blog/dashboard-ui-design-best-practices/

## Applied, bounded design lessons
Keep the source request and quote reference visible; separate scope, line items, price/schedule, terms and review; persist calculated total in view; keep approved standard terms read-only; distinguish optional project terms/internal notes; mark margin unknown if cost basis is absent; clearly gate sending and show a non-persistent preview receipt. Avoid feature invention: no CRM sync, e-signature analytics, real approval route, version creation, external PDF, or margin rule is simulated.
