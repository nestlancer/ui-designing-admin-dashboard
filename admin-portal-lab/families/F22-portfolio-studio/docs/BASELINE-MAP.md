# F22 baseline lock · 3 November 2026

Inspected all four original WebP screenshots individually (048, 049, 050, 082); extracted text/fields from all eight portfolio DOM snapshots and the `/portfolio` audit entries. Read the master, family pack and example discipline references. F01–F21 are preservation scope, not rerun scope.

## Reconciliation
- 113 index → 048 listing. Eight items, eight published, zero draft, four featured. Exact public order: B2B Client Portal UX; Fitness Tracking App; Marketplace Redesign; Brand Identity System; Fintech Payments Hub; SaaS Analytics Platform; E-Commerce Mobile App; HealthTech Dashboard.
- Screenshot 048/082: 11 global views, 0 likes, 8 top items. Views respectively B2B 4, SaaS 1, E-Commerce 1, HealthTech 1, Fintech 1, Brand 1, Fitness 1, Marketplace 1. Updated 10/8/2026.
- DOM 113/176: 25 global views, 0 likes; B2B 7, E-Commerce 4, SaaS 3, Fintech 3, HealthTech 2, Fitness 2, Marketplace 2, Brand 2. Sum = 25. Updated 10/28/2026. Use this later DOM snapshot by default; separately labelled screenshot comparison, never merged.
- 114 HealthTech edit → 049; 115 E-Commerce; 116 SaaS edit has no loaded fields; 117 Fintech; 118 Brand. Four loaded editors, not five. Preserve full descriptions/testimonials verbatim through extracted `fixtures.js`.
- 186 new → 050 (the tools may display returned images in a different order). Empty creation form with no preview-file section until an item exists.
- 176 analytics → 082: selected-item identity not captured; 0 views/0 likes, “No engagement data yet.” Never assign that anonymous zero to a named item. Display this as a separate captured state.

## Frozen taxonomy and form
Categories: Web Development, Mobile App, UI/UX Design, E-Commerce. No serialized category IDs or per-item mappings; do not infer from titles. The HealthTech screenshot alone proves Web Development / featured checked / review enabled / 5 stars / Markdown. Other checkbox/select values are unknown where DOM failed to serialize them. Four featured total does not identify four items.

Editor sections: Content (Title*, Slug, Short description*, Content format, Full description*); Classification (Category, Tags, Featured on homepage); Client (marketing only) (Client name, Industry, Website); Client review (Show on public showcase, Review quote*, Reviewer name, Reviewer role/title, Star rating); Project details (Duration, Technologies); Links (Live URL, GitHub URL); Preview files (edit only); SEO (Meta title, Meta description). Preserve privacy warning: “Curate the public case study. Client project data stays private.” Do not substitute account-private project data.

No thumbnail binary is present in these captures: use typographic case-study covers explicitly marked “Title cover · not project imagery”, not stock imagery pretending to be the shipped work. Thumbnail names for HealthTech and Brand are captured; E-Commerce/Fintech media is loading. Shell: Riya Kapoor, admin@nestlancer.com, Administrator; 99+ notifications / DOM 20 messages versus earlier screenshot 21; header figures historical, not live.

## Scope lock
All five variants expose eight items, full taxonomy, ordering, editor/create, global + anonymous-item analytics, preview, guarded publish/unpublish/feature/delete, receipts and 10-second local undo. No extra portfolio entities, fake conversion metrics, inferred ratings, scheduled releases, RBAC results or audit-success assertions.

Gate S: PASS with explicit missing-data treatment (4/4 shots, 8/8 HTML inspected; one edit unloaded).
