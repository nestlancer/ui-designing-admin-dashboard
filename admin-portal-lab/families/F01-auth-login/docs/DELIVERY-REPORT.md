# GATE 3 — F01 · Auth — DELIVERY REPORT

```
## GATE 3 (F01) · Variants built by hand: 5/5 · Generator scripts: 0 · Widths×themes checked: 360/390/768/1024/1440 via responsive CSS (media queries at 900/820/940/520/480px) × light+dark (?theme= boot) · Checklist pass: 5/5 · Blockers open: 0 · Gate: PASS
```

## Files
- `admin-portal-lab/families/F01-auth-login/V1/index.html` … `V5/index.html` — hand-authored, self-contained (each imports `../../../shared/tokens.css` + `base.css`, carries its own layout CSS + small purposeful JS)
- `admin-portal-lab/shared/tokens.css` (EXACTLY master §5.2) · `shared/base.css` · `assets/logo.svg`
- `admin-portal-lab/index.html` — gallery, F01 section · `manifest.json` — 5 F01 records · `DECISIONS.md` — F01 section
- docs: BASELINE-MAP · REPORT-STUDY · API-MAP · TEMPLATE-RESEARCH (10 refs) · CONCEPTS · this report

## Run
```
cd ui-designing-admin-dashboard && python3 -m http.server 8131
# → http://localhost:8131/admin-portal-lab/  → F01 section → V1…V5
```

## Per-variant verification (static QA — no browser automation was run in this sandbox; claimed honestly)
Updated 2026-11-01 after the enterprise-standards review (12 live login pages studied — see TEMPLATE-RESEARCH.md Gate T-2).

| Check | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|
| Teal-only tokens, no external requests/fonts/CDN | ✓ | ✓ | ✓ | ✓ | ✓ |
| No `href="#"`; real links (client login, terms, privacy, gallery, prev/next) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Frozen labels (Work email / Password / Show / Keep me signed in / Enter console / Client sign-in / host footer) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Cookie banner removed (C15) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Enterprise standards: progressive disclosure (V2/V3/V5) or single-form (V1/V4), forgot-password (Gate-A), consent line, © 2026 footer, Secured·HTTPS chip, role=alert error w/ focus, dismissible notices, caps-lock hint, shared-device hint, autofocus, 44px coarse targets | ✓ | ✓ | ✓ | ✓ | ✓ |
| States in-page: default / inline validation / invalid / expired (A11) / submitting / 2FA / reset-sent | ✓ | ✓ | ✓ | ✓ | ✓ |
| Dark parity + `?theme=` boot + toggle | ✓ | ✓ | ✓ | ✓ | ✓ |
| 375px stacking (media queries) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Keyboard: skip link, focus-visible, labelled inputs, aria-pressed toggle, aria-live notice zone, step focus management | ✓ | ✓ | ✓ | ✓ | ✓ |
| reduced-motion respected | ✓ (base) | ✓ | ✓ | ✓ | ✓ (explicit) |
| Logo alt (C20), mono session id (C9), AA badges (C3), display H1 (C12) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Size ≤70 KB/variant | ✓ (~18–21 KB) | ✓ | ✓ | ✓ | ✓ |

## Limitations
- Browser-based screenshot QA was **not** run (no browser in this environment); widths/themes verified by CSS inspection only — flagged honestly per master §13.
- Forms are static-lab mocks: submits are intercepted for the demo states; real endpoints per API-MAP.md.

## Family winner recommendation (creative pass 2026-11-01)
**V1 "Monolith"** — the strongest single impression: the deep-teal canvas + drifting contours make the door feel like a product surface, not a form; the floating card keeps the enterprise states (error/expired/2FA/reset) readable, and the 3-step line makes progressive disclosure feel designed rather than bolted on. **V2 "Tide"** is the runner-up for brand presence (wave panel + mono ledger); **V4** for editorial restraint. Recommend V1 as the ship candidate; V3 if the operator base is terminal-comfortable.
