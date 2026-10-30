# Nestlancer Admin Portal Lab — F25 · Integrations + Audit Logs — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F25 · Integrations + Audit Logs.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F25-integrations-audit/V1…V5/`** — webhooks + API keys + audit explorer (F24 owns system tabs). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct integrations + audit exactly (webhooks, keys, 3 audit tables, 4 filter groups) first. 2. **Research analyst** — quote every F25 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `webhooks` + `admin` (audit) specs. 4. **Design-template researcher** — ≥8 dev-consoles + audit explorers **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject unmasked secrets, unauditable admins, filter-less 132-row tables.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F25 shots + HTML + metadata | Webhooks + keys + audit frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F25-integrations-audit/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** connect anything safely, then prove who did what, when.

## 1.3 Manual craft rule — summary

Hand-write each `families/F25-integrations-audit/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F25 screenshots (3):** `016-integrations.webp` (hub) · `017-integrations-add-webhook.webp` (add-webhook form) · `065-audit-logs-overview.webp` (audit explorer). 3. `nestlancer-admin-pages-html/README.md`, F25 HTML (§4) + `audit-metadata.json` (audit filter — 3 tables, 132 rows, 4 Clear-filter groups; integrations captures). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `webhooks.openapi.json` (6 paths) · `admin.openapi.json` (audit `/api/audit*` + webhooks-mgmt `/api/webhooks*`). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F25 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F25 · Integrations + Audit Logs

The trust ledger: **webhooks** (endpoints, events, deliveries, add-form per shot `017` + spec), **API keys** (issue/rotate/revoke, masked — no dedicated shot; verify endpoints at Gate A), and the **audit explorer** (3 tables, 132 rows, 4 filter groups: actor/action/entity/time + Clear). Secrets stay masked with reveal discipline; every integration action is audit-visible; the audit explorer gets the full query treatment (C4 filter grammar + C13 saved audit views? — verify IDs against report at Gate R; record any mismatch).

> **Business weight:** 🟠 the answer to "who changed what" — completeness + searchability is the feature.

| | |
|---|---|
| Routes | Integrations + audit routes (freeze exact paths at Gate S) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **webhooks + keys + audit** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `130-integrations-index.html` | Integrations hub | `016-integrations.webp` |
| `180-integrations-index-state-add-webhook.html` | Add-webhook state | `017-integrations-add-webhook.webp` |
| `131-audit-index.html` | Audit explorer | `065-audit-logs-overview.webp` |
| `193-audit-row-click.html` | Audit row detail | — (detail state) |

**Must include (every variant):** webhook endpoints + deliveries + inline form (shot 006 + spec) · API keys lifecycle (issue/rotate/revoke, masked, reveal discipline) · audit explorer (3 tables, 4 filter groups + Clear, row detail) · C4 filter grammar + C13 (verify at Gate R) · A7 delivery/test tooling? + A12 audit export? (verify IDs at Gate R — record mismatches, implement the report's intent) · dark + 375px.
**Content lock:** freeze webhook/key/audit labels, columns, filter groups, event names at Gate S. Event/action vocabulary from captures + specs only.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + action-receipt states · explorer keyboard-complete.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F25 scope

### CHANGE — every item in **all 5 variants** (verify C4/C13 IDs at Gate R — record mismatches)
- **C4** — Unified filter grammar on the audit explorer. *(§6.1)*
- **C13** — (Verify: audit saved views / export affordance per report.) *(§6.1)*
- **C19** — Pagination info on audit tables. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono keys/hashes/IDs. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (verify A7/A12 IDs at Gate R — record mismatches)
- **A7** — (Verify: webhook delivery/test tooling.) · **A12** — (Verify: audit export.) Coverage per report priority (manifest).

### KEEP — present in every variant
- Audit completeness (132-row honesty, immutable tone). · Masked secrets. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F25 scope: Gate S freezes webhooks/keys/audit; Gate R verifies C4/C13/A7/A12 IDs; Gate A maps webhooks + admin slices; Gate T ≥8 dev-consoles + audit explorers **after** S/R/A.

```
## GATE S (F25) · Shots: 3/3 · HTML: <n>/4 · Explorer frozen: YES · Gate: PASS/FAIL
## GATE R (F25) · MD: YES · XLSX: 10/10 · C4/C13/A7/A12 verified: YES · C: <n>/<n> · A: <n>/<n> · Gate: PASS/FAIL
## GATE A (F25) · Specs: 2/2 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F25) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 explorer-led · ≥1 integration-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured surfaces, masked secrets, calm |
| V2 | Explorer-spine: the audit query owns the screen, integrations docked |
| V3 | Integration-first: webhooks + keys lead, audit below |
| V4 | Dense console: compact trust ledger + delivery rail |
| V5 | Motion-signature: delivery/audit choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Key/secret actions MUST be masked + confirm-gated + audit-visible in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F25-integrations-audit/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F25 primaries:** webhook endpoints + deliveries + inline form, API keys lifecycle, audit explorer (filters + 3 tables + row detail).
States: webhook active/failing/disabled · delivery ok/failed/retry · key active/rotated/revoked · audit filtered/row-open · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F25) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F25) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F25 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C4/C13/C19/C3/C5/C9/C12/C18/C20 in 5/5; A7/A12 per report coverage (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Unmasked secret — FAIL." · "Unaudited power — FAIL." · "F25-V1 approved — never regenerate it."

---

*End of prompt F25. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
