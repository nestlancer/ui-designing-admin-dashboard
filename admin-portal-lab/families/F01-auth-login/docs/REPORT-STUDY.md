# F01 · Auth · Operator Sign-in — Gate R Report Study

## Sources studied

- `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` — read cover to cover, §§1–8.
- `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` — all **10/10 sheets** opened: Executive Findings; Design Tokens; Page Inventory; Benchmark Patterns; CHANGE list; ADD list; KEEP list; Roadmap; Acceptance checklist; Sources.
- The Markdown report remains the tie-breaker. No F01-relevant conflict was found between the two artifacts. The XLSX condenses some prose (for example `Rs` rather than the ₹ symbol and `up new` rather than `↑ new`); these are formatting condensations, not different requirements.

## Executive findings touching F01 (quoted)

- **Finding #3:** “Admin sessions are unstable. `/api/auth/refresh` returned **409 and 503** mid-crawl and the console bounced to *Operator sign-in* three times in ~25 minutes of light, read-only use.” Verdict: “Operators get signed out mid-triage; any queue work loses context.”
- **Finding #4:** “The admin console is teal + Inter; the client portal is blue/violet + Outfit.” It also identifies `--brand-violet` (actually teal), `--article-accent`, and Tailwind-blue ring leaks inside admin.
- **Finding #5:** “Success + info badges fail WCAG AA (2.59:1 and 3.63:1 vs white).” F01 applies the corrected AA-safe status tokens to all error/session notices.
- **Finding #9:** “Dark mode exists in CSS but never engaged.” F01 must not repeat the dead-toggle pattern.
- **Finding #10:** “The type scale is compressed and ID-hostile.” F01 gives the brand H1 display weight and uses mono for host/session/reference strings.
- Page inventory, Auth row: “Operator sign-in, Show pw, Enter console”; principal issue: “No SSO/passkey; fine for v1.” No SSO or passkey feature is to be invented.

## Token study and F01 application

| Report observation | F01 decision |
|---|---|
| Admin primary/accent/ring = `168 82% 26%` teal | Use the master shared `--brand-600` / `--primary`; no separate auth palette |
| Client blue vs admin teal | Preserve the documented product split; do not “harmonise” the console to blue |
| `--brand-violet` is misnamed teal; blue article/ring tokens leak | Do not import or reproduce those tokens; use only `shared/tokens.css` |
| Inter and compact ops density | Keep Inter/system fallback and readable 13–15px body; no webfont request |
| Base radius 6px (4/8/20 variants) | Use the shared radii, especially 6px controls/cards |
| Success/info text fail AA | Use `--status-*-text` with icon + text; never colour alone |
| H1 24/30 and no mono | Use a 32–40px brand H1 where space allows; mono for host/policy/session IDs |
| Dark rules exist but toggle is ineffective | Implement a real persisted toggle plus `?theme=dark|light` boot before paint |
| Cookie banner on every capture | Remove it under C15 |

## Benchmark patterns applied

| Report source | Pattern borrowed for F01 | Boundary |
|---|---|---|
| [2] AdminLTE dashboard design examples | One dominant thing; density follows expertise; status is not colour alone | Sign-in remains the dominant action; policy detail is secondary |
| [6] AdminLTE free/premium templates | Production auth including 2FA and RBAC | Only the spec-backed TOTP challenge is shown; no SSO/RBAC features invented |
| [7] Tailwind Admin templates | One accent, matching dark mode, responsive/accessibility QA | Applied to the Gate 3 checklist |
| [12] TailGrids React dashboards | Auth production-readiness, ARIA/keyboard, session robustness | Loading, errors, expired session, keyboard/focus and retry are first-class |
| Report §5.2 honest empty/loading/error pattern | Explain what happened and the next action | Expired state never claims unsubmitted work was saved |

## CHANGE coverage — all required items in 5/5

| ID | Exact report intent | F01 implementation requirement |
|---|---|---|
| **C3** | Fix status contrast; status = icon + colour + text | Error, expired, pending and success notices use shared AA text tokens and visible text/icons |
| **C5** | Rename/purge token leaks; document teal/blue split | One shared teal file; no blue auth accent, violet name, or Tailwind-blue focus ring |
| **C9** | Mono for IDs/references/timestamps | Host, policy, request/session references use `var(--mono)`; no secrets are shown |
| **C12** | Display scale where brand/count/money weight exists; retain dense body | `Nestlancer Admin` is 32–40px desktop and 28–32px phone; form body stays ops-readable |
| **C15** | Remove operator cookie banner | No banner or consent controls in any variant |
| **C18** | Repair dark mode or remove toggle | Full dark parity and a working toggle in every variant |
| **C20** | Logo alt text | Inline logo has an accessible name; decorative paths are hidden |

## ADD coverage

| ID | Priority / coverage | F01 implementation requirement |
|---|---|---|
| **A11** | P2; at least 3/5, adopted in **5/5** | Expired-session/degraded honesty: `Session expired — sign back in`, a retry/sign-in action, and no data-loss scare. Refresh 409/503 is explained without exposing sensitive internals. |

No P1 ADD is assigned to F01. Gate 1 therefore records P1 as **not applicable**, not as a failed queue-coverage item.

## KEEP list applied to F01

- **Microcopy honesty:** keep the direct operator-only language, rate-limit/audit note, and clear client sign-in alternative. Never use marketing claims on the console door.
- **Teal + Inter + 6px ops identity:** preserve the documented distinction from the client product.
- The other KEEP items belong to other families and are not fabricated on auth: Needs-attention strip; safety dialogs; payments tabs/installments/settlement; quote stepper/library; Requests capacity card; ⌘K palette.

## Roadmap mapping

- **P0 — Fix production:** stabilise `/api/auth/refresh`; provide degraded/expired-state and retry affordances. The static lab demonstrates the UI state only; it cannot fix the backend.
- **P1 — Foundations:** badge contrast, token purge, type/mono, logo alt, cookie-banner removal, and working dark mode.
- **P6 — Responsive & PWA:** F01 delivers responsive auth at 360–1440px; no installability feature is invented.
- **P7 — Polish:** V5 may add restrained focus/entrance choreography with reduced-motion parity.

## Acceptance checklist converted to F01 QA

1. **Hierarchy:** the operator can identify the sign-in action and operator-only boundary in under two seconds.
2. **Triage speed / queues / tables / navigation:** not applicable to a single auth form; no fake queue or table is added.
3. **Colour:** one teal ramp; icon + text status; text contrast at least 4.5:1 in both themes.
4. **Typography:** Inter/system stack; mono host/policy/reference strings; display H1 without oversized marketing hero treatment.
5. **Dark mode:** verified parity, no dead toggle.
6. **Accessibility:** native labels, visible focus, sensible tab order, `aria-pressed` Show/theme controls, live errors, keyboard-operable 2FA and state controls, useful logo accessible name.
7. **Empty/loading/error:** required-field and email-format validation; disabled/progress submit; invalid-credential and service errors; expired-session retry; spec-backed 2FA challenge.
8. **Safety:** no account enumeration, no password in URLs/logs, no real credentials submitted by the static demo, no invented SSO/passkey.
9. **Mobile:** 360/390/768/1024/1440; no page-level horizontal scroll or clipped controls.
10. **Performance:** local assets only, no framework/CDN/font request, stable form dimensions, reduced-motion behaviour.
11. **Legal/ops:** Terms/Privacy/client sign-in remain real links; audit/rate-limit copy remains honest; no claim that the lab performs an audited login.

## GATE R (F01)

MD read: **YES** · XLSX sheets: **10/10** · C-items mapped: **7/7** · A-items mapped: **1/1**  
KEEP listed: **YES** · Checklist copied as QA: **YES**  
Gate: **PASS**
