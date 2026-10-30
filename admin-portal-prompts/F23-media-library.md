# Nestlancer Admin Portal Lab — F23 · Media Library — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F23 · Media Library.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F23-media-library/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the media library exactly (storage, quarantine, analytics, filters, upload) first. 2. **Research analyst** — quote every F23 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `media` spec. 4. **Design-template researcher** — ≥8 media libraries/DAMs **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsper
son** — self-contained, offline, no CDN (generated placeholder art only). 7. **Harsh critic** — reject unclickable cards, quarantine-blind libraries, preview-less deletes.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F23 shots + HTML + metadata | Tabs + cards + dialogs frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F23-media-library/docs/REPORT-STUDY.md` |
| 2 · API | `media` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** find any asset in seconds — and quarantine the bad ones without fear.

## 1.3 Manual craft rule — summary

Hand-write each `families/F23-media-library/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F23 screenshots (9):** `018-media.webp` (library) · `019-media-analytics.webp` · `020-media-folders.webp` · `021-media-quarantine.webp` · `073-media-asset-details-and-preview.webp` · `074-media-browse-all-files.webp` · `075-media-create-share-link-dialog.webp` · `076-media-edit-asset-metadata-dialog.webp` · `077-media-list-view.webp`. 3. `nestlancer-admin-pages-html/README.md`, F23 HTML (§4) + `audit-metadata.json` (`/media` filter — Storage/Quarantine/Analytics + type/source filters; cards unclickable live). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `media.openapi.json` (50 paths — assets, upload, quarantine, analytics). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F23 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F23 · Media Library

The asset room: **Storage** (asset grid with type/source filters), **Quarantine** (held assets + review), **Analytics** (usage/storage), **upload** flow, and the asset **detail drawer**. Live capture is thin — cards matched 0 click selectors and the dialogs are report §2.2 gaps — so the baseline = captured tabs + filters + shot-transcribed cards/drawer/upload + `media` spec. Your variants make every card open its drawer, every quarantine item reviewable, and every delete previewed + confirmed.

> **Business weight:** 🟡 brand safety + storage cost — quarantine discipline is the feature.

| | |
|---|---|
| Routes | `/media` (+ storage/quarantine/analytics tabs; drawer + upload in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **grid + drawer + quarantine + upload + analytics** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `119-media-index.html` · `178-media-index-go-media.html` | `/media` — library | `018-media.webp` |
| `120-media-index-tab-storage.html` · `177-media-index-state-browse-files.html` | Storage tab + browse state | `074-media-browse-all-files.webp` + `077-media-list-view.webp` |
| `121-media-index-tab-quarantine.html` · `187-media-index-go-quarantine.html` | Quarantine tab | `021-media-quarantine.webp` |
| `122-media-index-tab-analytics.html` | Analytics tab | `019-media-analytics.webp` |
| *(shot+spec baseline)* | Folders view | `020-media-folders.webp` |
| *(shot+spec baseline)* | Asset details + preview | `073-media-asset-details-and-preview.webp` |
| *(shot+spec baseline)* | Share-link dialog · edit-metadata dialog | `075-…-share-link-dialog.webp` + `076-…-edit-asset-metadata-dialog.webp` |
| *(spec baseline)* | Upload flow (no shot — verify at Gate A) | — |

**Must include (every variant):** asset grid (type/source filters frozen) with **clickable cards → detail drawer** (C14-adjacent: the click must work) · drawer (preview, metadata, usage, actions) · quarantine tab with review craft (C17) · upload flow (spec-backed, no shot) · analytics (frozen metrics) · bulk bar (A1: tag/move/delete-gated) · deletes previewed + confirmed · dark + 375px.
**Content lock:** freeze tab/filter labels, card anatomy, drawer fields, quarantine columns, upload copy, analytics metrics at Gate S. Placeholder art is generated (SVG/CSS) — never hotlinked.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + upload-progress states · grid keyboard-complete (roving + drawer trap).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F23 scope

### CHANGE — every item in **all 5 variants**
- **C17** — Quarantine review craft (context + reason + confirm) + clickable cards (no dead cards). *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/hashes. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (P1 → **5/5**)
- **A1** — Bulk bar (tag/move/quarantine/delete-gated).

### KEEP — present in every variant
- Library structure (storage + quarantine + analytics). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F23 scope: Gate S freezes tabs/filters + transcribes drawer/dialogs/quarantine + spec-backed upload; Gate R quotes F23 rows + §2.2; Gate A maps `media` 50 paths; Gate T ≥8 media libraries/DAMs **after** S/R/A.

```
## GATE S (F23) · Shots: 9/9 · HTML: <n>/7 · Dialogs transcribed: YES · Gate: PASS/FAIL
## GATE R (F23) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F23) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F23) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 grid-led · ≥1 quarantine-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured library, working cards, guarded deletes |
| V2 | Grid-spine: the asset wall owns the screen, drawer docks |
| V3 | Quarantine-first: trust review leads, library below |
| V4 | Dense console: compact DAM + analytics rail for media ops |
| V5 | Motion-signature: upload/drawer choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F23-media-library/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F23 primaries:** library tabs, filters, asset grid + cards, detail drawer, quarantine review, upload flow, analytics, bulk bar.
States: asset ok/quarantined/flagged · drawer open · upload progress/done/failed · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F23) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F23) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F23 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C17/C3/C5/C9/C12/C18/C20 in 5/5; A1 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead asset card — FAIL, drawer or demo-label." · "Preview-less delete — FAIL." · "F23-V1 approved — never regenerate it."

---

*End of prompt F23. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
