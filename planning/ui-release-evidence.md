# UI release evidence · 17 November 2026

**Evidence scope:** the UI release at `3f4fcc0444aaf0b3b40f755d04d95d92255a59f8`. All inventory counts, byte comparisons, measurements and test totals below describe that release. The later P3 Weight candidate in `00eb0d42b82fa3adcd72ffb0c7c30af6c0d796b8` was published separately while this record was being finalized; its changes are preserved and its additional checks are not covered by this UI verification record.

This release implements the interface workstream at the end of the README. It does not add curriculum coverage: the audited total remains **36/85 resource-complete units**, with 123 permanent families / 1,965 variants, 122 selectable families, and 36 teacher activity files.

**Published implementation:** [568d474](https://github.com/kochiuyu/mathquiz/commit/568d4745793ed278e954a3489b110aab10b86ca9), followed by [3f4fcc0](https://github.com/kochiuyu/mathquiz/commit/3f4fcc0444aaf0b3b40f755d04d95d92255a59f8) for three Traditional Chinese labels and cache versions. GitHub Pages deployment succeeded. The local and public full runners passed **365/365**, and the dedicated UI runners passed **145/145**, all with zero failures.

## Delivered behaviour

- A compact homepage with three task entry points, equal P1–P6 choices, existing P1 presets and example links.
- A bilingual resource browser covering all 85 units, all 122 selectable families and all 36 teacher activities. Grade, strand, unit, mode and text filters round-trip through URLs and browser Back. Whole-catalogue unit groups start collapsed; grade/unit/search results open their matching groups. Sample diagrams render only when opened.
- A grouped, searchable builder with explicit zero quantities, a persistent draft, Choose / Review / Share stages, reorder, replace, remove and undo controls. Reviewed item IDs and ordering flow to pupil, paper and key links without regeneration. Original v2 links retain their marking version.
- A reduced pupil header, progress and answered counts, labelled result states, duplicate-action guards and language switching that retains answers, attempts, score and practice position. A seeded practice sequence makes the language transfer reproducible. Transfer state is stored in session storage only when the pupil switches language; it is consumed on arrival and accepted only within one minute. An abandoned transfer remains in that tab's session storage until overwritten or cleared by the browser. No answers are sent to a server.
- Shared screen navigation and styling on every teacher activity, with original pupil sheets, teacher criteria, keys and print rules retained. Paper screens distinguish browser printing from the existing beta PDF download.
- Visible focus, labelled controls, generous primary targets, recoverable empty/error states, a selectable link when clipboard permission is denied, and an asset-load reload message.

## Compatibility baseline and boundaries

The baseline is [`af3274a`](https://github.com/kochiuyu/mathquiz/commit/af3274aa50c2f79686afdc4141115db2f8efddff). Its complete browser runner passed **365/365 before integration**. Existing payload digests and mathematical acceptance rules were retained.

These files are byte-identical to that baseline: `builder.js`, `questions.js`, `marking.js`, `pdf-export.js` and `fonts/mathquiz-text.ttf`. The interface calls their existing generation, scoring and export paths. `quiz.js` changes are routing plus the random-number source used for retaining a practice session across languages.

Reference cases include:

| Contract | Repeatable route / evidence |
|---|---|
| Fixed example | `?lang=en&p=1` and the existing v1 fixtures |
| Versioned marking | `?v=2&lang=en&p=1&items=count20a-2&view=build` |
| Reviewed ordering | `?v=3&lang=en&p=1&items=count20a-1.next1-2&view=build` |
| Multiple fields and partial credit | Existing P1–P6 browser fixtures, including column forms and 2N2 families |
| Randomized practice | `?lang=en&p=4&view=practice&skill=factor1` plus language transfer checks |
| Practice progression | `?lang=en&p=3&view=practice&skill=write24hour3a` |
| Source and resource discovery | `coverage.html?lang=zh` and `?view=browse&lang=en&q=3M4` |
| Teacher task / key separation | `activities/p3-time-iv.html?lang=en` and all activity pages at 320px |
| Paper / PDF | Existing bilingual paper/key, glyph, numbering and PDF export fixtures |

Targeted desktop/mobile views were inspected. A comprehensive before/after screenshot archive for every screen/language combination was **not** produced; that part of UI-01 remains open with the deferred visual review. Automated geometry checks are separate from visual validation.

## Automated verification

| Gate | Result |
|---|---|
| Original six static suites | Pass: all 1,965 variant contracts, frozen hashes, stable links, unit-specific oracles and teacher-resource structures |
| New `tests/ui-static.cjs` | Pass: 85 unique bilingual units, 36 activity paths, every selectable family mapped, local asset existence, JS parsing, checked foreground/background contrast pairs |
| New `tests/ui-regression.html` | **145/145 locally and publicly**, zero failures |
| Existing browser regression | **365/365 locally and publicly**, zero failures on the final full runs |
| Public release | GitHub Pages deployment succeeded; new navigation and corrected Chinese labels verified live |

The final public run completed on 17 November 2026 at `tests/regression.html?ui=568d474`: `window.regressionResult` reported `{passed: 365, failed: 0}`, the summary agreed, all 365 result rows were present, and no failure rows were present. The browser had unloaded the earlier unfinished page, so this result comes from a fresh complete run against the deployed release, not the earlier partial count.

The 145 UI checks cover search, filters, Back, language context, empty states, lazy previews, builder limits/ordering/undo/sharing, v2 preservation, clipboard denial, responses and results across language switches, repeated submissions, practice progression, load failure recovery and labelled focus. Layout samples use **320, 375, 768, 1024 and 1440 CSS pixels in English and Traditional Chinese**, plus a 200% text-enlargement case. Every one of the 36 teacher activity files is checked in both languages at 320px. They do not constitute a WCAG conformance audit.

The full local regression initially reported three obsolete UI expectations: a `#coverage` container replaced by the resource browser, and two builder tests waiting for a navigation where the new builder opens its review stage in place. The readiness selector and stage expectation were updated; all **three targeted reruns passed**. No question payload, scoring assertion or frozen digest was changed to obtain those results. The offscreen layout helper also stopped relying on animation callbacks that Chromium can suspend; its existing width assertions run after a bounded layout read. The final full local and public runs both passed 365/365. A final static scan caught three replacement-character labels; those strings were corrected in 3f4fcc0 and the new gate now rejects that defect.

## Size and timing observations

Measured on the same local server, Chromium environment and 1440×1000 viewport (1425px content width), comparing the exact baseline files against the implementation. Asset bytes below are **uncompressed source bytes including the entry HTML**, computed from the actual stylesheet/script files. Cached browser transfer sizes were inconsistent and are not presented as page weight.

| Screen | Before | After | Interpretation |
|---|---:|---:|---|
| Home height | 8,788px | 1,735px | About 80% less vertical scrolling; the 122-link list moves into filtered browsing |
| Home DOM elements | 183 | 137 | No full practice catalogue in the homepage DOM |
| Home / builder initial source bytes | 353,821 | 439,666 | +85,845 bytes (~24%): bilingual unit metadata, shared styling, filtering, staged builder and session continuity |
| Entry requests, including HTML | 7 | 13 | Six small local additions; no new external service, framework or font |
| Coverage / browser content | Old flat coverage list | 85 expandable unit groups | More complete resource metadata; filters reduce the rendered result set |

Three warm/local navigation samples produced these DOM-ready times (milliseconds): home **310/77/59 → 240/65/541**; coverage/browser **122/59/497 → 238/174/235**; builder **155/84/53 → 169/96/84**. These samples were taken during regression execution, show substantial scheduling variation and support **no loading-speed claim**. The new browser also loads the existing question renderer for its on-demand examples, so its initial payload is larger than the former standalone coverage page. A future route-specific bundle split is a performance opportunity, not an unrecorded regression.

The PDF library and font still load only when export is requested. No preview figure is generated in a closed sample disclosure. No external tracking or account requirement was added.

## Maintenance and deferred review

- Change unit/resource availability in the audited curriculum inventory, then run `python tools/build-resource-data.py` to regenerate `resources.js`. Family IDs, titles and counts come from the existing family catalogue. Do not append homepage links by hand.
- New styles are in `ui.css` and `activity-ui.css`, isolated from print media. Shared rendering is in `ui.js`, `builder-ui.js`, `pupil-ui.js`, `session-ui.js` and `activity-ui.js`.
- Run the existing six static gates, the UI static gate and both browser runners when changing shared rendering. Keep legacy fixture digests frozen.
- Roll back by reverting the interface release to the baseline above; retain subsequent curriculum changes if any have landed since release.

Still deferred: teacher/pupil walkthroughs, independent Traditional Chinese wording review, full keyboard/zoom and screen-reader review on real device/browser combinations, comprehensive screenshot review, downloaded-PDF visual inspection, print-preview pagination and physical A4 output. Automated passes do not establish classroom success, accessibility conformance, physical measurement accuracy or pupil mastery.
