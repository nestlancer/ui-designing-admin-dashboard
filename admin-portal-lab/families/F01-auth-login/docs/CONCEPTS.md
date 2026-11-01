# GATE 1 — F01 · Auth · CONCEPTS (5 cards, printed before code)

```
## GATE 1 (F01) · Cards: 5/5 · Sketches: 5/5 · Difference test: PASS (no two siblings share A+C; none differ by colour only) · C coverage 5/5: YES (C3 C5 C9 C12 C15 C18 C20) · P1 A coverage 5/5: n/a (no P1 for F01) · P2–P3 ≥3/5: YES (A11 in 5/5) · Gate: PASS
```

## Table 1 — variant | keeps | fixes | adds | axes | signature | API
| Variant | Keeps (Gate S) | Fixes | Adds | Axes | Signature interaction | API |
|---|---|---|---|---|---|---|
| V1 Gatehouse | policy rail + sign-in card IA, frozen labels | C3 C5 C9 C12 C15 C18 C20 | A11 | A + C + D | demo-state chips switch honest notices | login / verify-2fa / refresh / health |
| V2 Split console-door | same card content | same C-set | A11 | A + B + C | full-viewport split; panel stacks on mobile | login / verify-2fa |
| V3 Security-first minimal | narrow card, frozen labels | same C-set | A11 | A + B + E | session-honesty line up front; 2FA step | login / verify-2fa |
| V4 Dense ops console | compact card + posture tiles | same C-set | A11 | A + D + C | status bar w/ health dot; 13px ops density | login / health / verify-2fa |
| V5 Motion-signature | centered card, frozen labels | same C-set | A11 | E + C + B | staggered entrance + crossfading panels + focus pulse | login / verify-2fa |

## Table 2 — distinctness (axes A layout · B hierarchy · C narrative · D density · E interaction)
| Variant | A | B | C | D | E |
|---|---|---|---|---|---|
| V1 | 2-col rail+card | verdict-first (policy) | static sections | airy | chips |
| V2 | viewport split | brand-first | split narrative | airy | chips |
| V3 | single centered col | security-first | minimal | airy-minimal | step swap |
| V4 | card + tile grid | status-first | console | dense | chips |
| V5 | single centered col | action-first | choreographed | airy | motion |
No shared A+C pair; colour is never an axis. Coverage: minimal (V3) · dense (V4) · action-led (V5) · narrative-led (V1/V2) · motion-led (V5) — satisfied.

## Table 3 — coverage
- C3/C5/C9/C12/C15/C18/C20: **5/5 variants** ✓
- A11 (P2): **5/5** (≥3/5 required) ✓ — manifest-recorded
- KEEP (operator tone, honesty, teal+Inter+6px): 5/5 ✓

## Concept cards (creative pass 2026-11-01 — "top-grade" art direction, as shipped)
```
F01 · V1 "MONOLITH" — deep-teal full-bleed canvas, drifting contour lines + masked dot grid, floating light card
  with top accent bar and 3-step progress segments. Sketch: [canvas fixed][ centered card 440px, radius-xl ].
  Signature: contour drift (transform) + step segments. Motion: transform/opacity only. API: login/verify-2fa/refresh/health.
F01 · V2 "TIDE" — asymmetric 46/54 split: teal panel with animated wave lines (single dashoffset draw), vertical
  wordmark, mono posture ledger; right stage two-step card. Sketch: [panel 46% | stage][ card 420px ].
  Risk: <860px panel collapses to header block, waves hidden. API: login/verify-2fa/forgot-password.
F01 · V3 "OPS TERMINAL" — console card: window chrome (3 dots + mono title), prompt line `./enter-console --admin`
  with blinking caret, scan-dot backdrop, status readout (healthy · TLS · TTL · ADMIN · audited); single-form.
  Sketch: [scan fixed][ console 520px: bar 40px | body ]. API: login/verify-2fa/forgot-password.
F01 · V4 "EDITORIAL INDEX" — light spread: oversized display headline + outlined ghost "OPS", ruled mono posture
  footer; right: paper form with hard offset shadow (teal) + "FORM 01 / SIGN-IN" index tag. Sketch: [left 1.15fr | right .85fr].
  API: login/verify-2fa/forgot-password.
F01 · V5 "CHOREOGRAPHY" — centered card over pointer-parallax teal glow + concentric rings; animated step line
  (dashoffset stepper: 100→66→33→0), sliding panels, entrance stagger, one-time focus pulse.
  Sketch: [glow/rings fixed][ masthead ][ card 440px: prog + panels ]. API: login/verify-2fa/forgot-password.
```
Difference test: V1 canvas-centered · V2 split-panel · V3 console-card · V4 editorial split · V5 glow-centered — five distinct A+C combinations; colour never an axis. All share tokens, frozen labels, enterprise states.
