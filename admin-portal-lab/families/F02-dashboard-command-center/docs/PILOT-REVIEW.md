# F02 V1 · Gate 2a pilot review

V1 Northstar was hand-written before V2–V5. It imports the unchanged shared tokens/base and the F02 hand-written shell/interaction helpers; it is a complete document, not the output of a generator.

## Browser pilot (Chromium headless, served over localhost)
- Rendered and checked document/body width at **360, 390, 768, 1024 and 1440 px**, in **both light and dark** (10 configurations). Zero page overflow detected. Full-page screenshots of 1440 light/dark and 390 light were actually inspected.
- Exercised queue preview, ⌘/Ctrl-K search, filter → arrow → Enter, Escape, range suppression of unrelated 30-day figures, loading/empty/error/restricted/degraded demos, retry, theme toggle and persistence (without a query override), sidebar collapse, CSV export, mobile drawer and Escape, and no-JS snapshot/gallery access. No page errors or failed local asset requests in the pilot.
- Historical state is labelled; chart draws only the captured latest-zero point and explicitly says daily series is unavailable. Health checks and digest remain unverified. All six queue cells open local contextual previews.
- **Self-critique:** the page has a lot of captured content and requires scrolling; V2–V5 should change the reading order rather than remove evidence. The demo controls wrap on phones; they remain reachable. No production API, payment action or authorization was tested.

**Gate 2a: PASS** — complete pilot, all required demo states, 5 widths × 2 themes checked, keyboard path and no-JS fallback exercised. This is prototype QA, not production acceptance.

Post-pilot cross-family QA led to shared-shell accessibility refinements (52px header, coarse-pointer sizing, error focus, dismissible degraded notice, stronger active-nav/primary-button contrast) and preservation of every captured table column. V1 was re-tested with the full final suite after those edits; the original pilot results above describe the state before that regression pass.
