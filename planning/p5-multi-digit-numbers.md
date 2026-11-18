# 5N1 · Multi-digit numbers: source and activity audit

**Current resource status: complete.** 5N1: 4 numbered objectives and0 inquiry statements. Code release `504a2ea0a383b34fc5fe76f037860bb4a88bea23` passed the linked live checks. This marks resource availability, not pupil achievement. [Verification](p5-live-closure-evidence.json).

## Historical implementation record

**Private 5N1–5N3 candidate; incomplete:** Rebased onto the verified 56-unit P1–P4 closure. Thirteen new families add 192 variants (60 for 5N1, 72 for 5N2, 60 for 5N3), preserving all 175 predecessor families / 2,661 variants. Current inventory: 188 permanent families / 2,853 variants; 187 selectable / 2,838; 60 selectable units / 66 resource units; 59 activities; 56 complete and 10 open resource-bearing units. Verified totals remain 211 numbered objectives plus four inquiry statements. 5N1, 5N2 and 5N3 remain incomplete. Private verification completed: **616/616 curriculum, 193/193 UI and 248/248 dedicated P1 checks passed**, with zero failures. This is private evidence only; deployed candidate verification is pending. All 56 inherited completion flags remain unchanged, and 5N1, 5N2 and 5N3 remain incomplete. The later P1 skill release `2b3521f` has now been preserved in this private candidate; core computational bytes are unchanged. Fresh integrated checks passed **193/193 UI, 248/248 P1 unit and 251/251 P1 skill checks**, with zero failures. All44 static gates and actual font coverage passed locally and in an isolated copy. Live P5 verification remains pending.

## Historical source-development and independent evidence

Earlier baseline counts and pending P4 status below are historical and superseded by the inherited 56-unit closure above. Source scope and practical/manual limitations remain unchanged.


Private candidate, 17 November 2026. **Incomplete. Browser verification pending.** No public completion is claimed by this file. Existing predecessor completion flags are unchanged. This audit concerns the new resource; the release coordinator records final runtime inventory and verification separately.

## Source scope

- [EDB KS2 explanatory notes, printed 24 / PDF 30](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=30).
- [EDB primary supplement, printed 74 / PDF 77](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=77).

Four numbered objectives: multi-digit concepts; magnitude comparison; rounding to approximate values; estimating large quantities. Concept includes counting, reading/writing, forward/backward counting and odd/even, with ten-for-one exchanges through hundred millions. The six rounding places are thousands, ten thousands, hundred thousands, millions, ten millions and hundred millions. Estimation requires methods and consideration of accuracy, not only rounding a supplied exact total. The sources do not state a hard nine-digit maximum; a bounded fixture range is an authoring decision, not a curriculum restriction. No scientific notation or formal mean formula is required here.

## Actual evidence in the bilingual activity

`activities/p5-multi-digit-numbers.html` has six pupil task groups, three pupil sheets, a hidden teacher key and a separate observation sheet per language. All 16 evidence fields per language are empty. Teacher answers are hidden by default and controllable with the established activity controls.

| Objective | Pupil action | Required evidence and limit |
|---|---|---|
| 1 concepts | Exchange labelled values, read numbers aloud, write two unseen dictated numerals, count across boundaries, explain parity | Original written numerals and spoken reading recorded separately; actual model/explanation and help needed. Digital numeral matching is not oral performance. |
| 2 comparison | Compare unequal and equal numbers, identify first differing place, construct a counterexample | Original symbols, reasoning and partner correction; count of zeros is not a magnitude rule. |
| 3 rounding | Round at all six places using adjacent multiples; investigate below/tie/above/exact hundred-million cases | Chosen place, interval, distances and approximate-value explanation. Schematic number lines must not pretend pixel precision. |
| 4 estimation | Choose and count actual samples, justify representative count/range, compare a second method, validate feasible parts and revise | Actual sample data, selection, units, assumptions, possible bias, checking limits and revision. Without a known total, do not claim measured error or prove one method more accurate. |

Four blank objective records request independent / prompted / not yet / not observed, date, original work, pupil words, help and next step. Teacher must not fill achievement without observation. Separate paper is expressly allowed. No completed classroom observations or delivered lesson hours are asserted.

## Language and mathematical review

English million/thousand grouping and Chinese 億/萬 grouping are separately authored, not literal comma-group translation. Examples: 100010001 is one hundred million, ten thousand and one / 一億零一萬零一; 203004050 is two hundred and three million, four thousand and fifty / 二億零三百萬四千零五十. Hidden dictation uses different numbers 400020006 and 70000300. Accept conventional accurate oral variants, including optional English “and”; use place-value explanations rather than exact-string oral grading. Independent human translation review remains unperformed.

The hidden fictional book model has actual *supplied model* sample counts 240, 250, 260, total 750. Under the explicit representative-page assumption, 80 × 250 gives an estimate 20000; 80 × 240 and 80 × 260 give a conditional estimated range 19200–20800. A second method 8 × 2400 gives 19200. The 800 difference is between estimates, **not** measured error. Three sampled pages do not establish a whole-book bound. Pupils must gather their own evidence; this model cannot substitute for it.

## Verification

Run `node tests/p5-multi-digit-activity-static.cjs` from the candidate root. It checks both language task/record structures, 32 empty evidence fields, hidden keys, source links, scripts, visible model values, independent repeated-addition model products, exact sample totals, sequence stepping, bilingual named-value fixtures and all ten key rounding rows in each language using BigInt distances to adjacent multiples. This is independent of runtime question generation and has no sibling-workspace dependency.

Runtime family registration, preservation of all 2661 predecessor payloads, font rebuilding and actual cmap coverage, all-suite static results, bounded-paper/key/PDF browser flows and final private browser evidence are owned by the integration coordinator and must be verified separately. This activity-only test does not imply those stages passed. No preview or public files are changed by activity authoring.

Manual PDF/print pagination, physical printing, classroom trials, independent translation and screen-reader validation remain unperformed. Resource completeness is not pupil mastery.

## Integrated private verification

The final private candidate adds four stable families and 60 variants: `multidigitplace5a` (12), `multidigitsequence5a` (12), `multidigitcompare5a` (12), and `multidigitround5a` (24). Six rounding places each have below-half, exact-half, above-half and exact-multiple fixtures. Four explicit bilingual name meanings are independently checked; oral variants remain teacher-observed, not exact-string graded.

All 2,661 predecessor payloads and marking.js bytes are pinned by an independent SHA-256 gate. All 85 completion flags match the 51-complete baseline, including incomplete remaining P4 and 5N1. Current inventory: 179 permanent families / 2,721 variants; 178 selectable / 2,706 variants; 59 selectable units, 65 resource units, 57 activities and 14 open resource units.

Private standalone verification: **37 CJS gates passed**, plus actual PDF cmap coverage for all **1,025 source characters**. Subset size: **282,804 bytes**. New exact arithmetic gates include 60 fixtures, 324 BigInt-distance rounding properties, decimal-string comparisons, word/numeral semantics, route registration and full practice sample maps. The activity adds independent model calculations with empty pupil records.

Full bilingual routes, all 60 assessment items, full practice sequences, blank/wrong retry, submit locking, bounded exact paper/key/PDF batches, narrow-screen checks and activity/key toggles are authored in browser regression, **not yet executed for 5N1**. Old coverage assertions derive the current selectable family count, rather than preserving stale 171/174 expectations. Browser/live, physical print, independent translation, screen-reader and classroom verification remain unperformed for this unit.

Route-helper reconciliation: full0–11 sequences for all three new4D1 families and full sequences for all four5N1 families now match runtime, with independent guards. Browser test cache is multidigit-p5-r2. All37 standalone gates and font coverage re-passed after this test-only correction.

## Current private verification and rerun provenance

The first complete private curriculum run recorded 614 passes and two failures: a real HTML interpretation defect in six new 5N2 relation labels and a real 5N3 SVG font-size override that clipped labels. The scoped fixes preserved all 2,661 published predecessor payloads. The second run recorded 615 passes and one failure caused by the test’s expected-key fallback for plain choices, not an additional runtime defect. After that test-only correction, the final full run passed 616/616. The first private UI run recorded 191 passes and two failures from stale catalogue/activity counters; corrected exact-count tests passed 193/193. Dedicated P1 checks passed 248/248 on the same corrected runtime. Earlier failed runs are retained as provenance, not counted as passing verification. All 43 static gates, actual font coverage and isolated-copy checks passed, including 144 production key HTML parses. No live P5 verification, classroom observation, physical printing, independent translation or screen-reader validation is claimed.
