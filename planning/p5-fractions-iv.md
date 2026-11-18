# 5N3 · Fractions (IV): source and practical audit

**Current resource status: complete.** 5N3: 2 numbered objectives and0 inquiry statements. Code release `504a2ea0a383b34fc5fe76f037860bb4a88bea23` passed the linked live checks. This marks resource availability, not pupil achievement. [Verification](p5-live-closure-evidence.json).

## Historical implementation record

**Private 5N1–5N3 candidate; incomplete:** Rebased onto the verified 56-unit P1–P4 closure. Thirteen new families add 192 variants (60 for 5N1, 72 for 5N2, 60 for 5N3), preserving all 175 predecessor families / 2,661 variants. Current inventory: 188 permanent families / 2,853 variants; 187 selectable / 2,838; 60 selectable units / 66 resource units; 59 activities; 56 complete and 10 open resource-bearing units. Verified totals remain 211 numbered objectives plus four inquiry statements. 5N1, 5N2 and 5N3 remain incomplete. Private verification completed: **616/616 curriculum, 193/193 UI and 248/248 dedicated P1 checks passed**, with zero failures. This is private evidence only; deployed candidate verification is pending. All 56 inherited completion flags remain unchanged, and 5N1, 5N2 and 5N3 remain incomplete. The later P1 skill release `2b3521f` has now been preserved in this private candidate; core computational bytes are unchanged. Fresh integrated checks passed **193/193 UI, 248/248 P1 unit and 251/251 P1 skill checks**, with zero failures. All44 static gates and actual font coverage passed locally and in an isolated copy. Live P5 verification remains pending.

## Historical source-development and independent evidence

Earlier baseline counts and pending P4 status below are historical and superseded by the inherited 56-unit closure above. Source scope and practical/manual limitations remain unchanged.


Private incomplete candidate. Browser, print, translation, screen-reader and classroom verification pending. No completion flag or earlier question is changed by these activity assets. The inherited51-complete baseline and later P4 rebase remain the coordinator's responsibility.

## Scope

[EDB KS2 notes, printed27/PDF33](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=33) and [supplement, printed76–77/PDF79–80](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=79): two objectives cover multiplication of at most three numbers and problems. Whole factors are included; three-factor tasks contain at most one mixed number. Conversion, reduced results and estimation support the work. The source does not impose5N2's denominator≤12 rule on5N3. Avoid complicated products; fraction division belongs later.

## Pupil evidence

`activities/p5-fractions-iv.html` contains six bilingual task groups, five sheet articles per language, a hidden teacher key and two blank objective records. Fourteen evidence fields per language remain empty.

1. Actual equal-sized fractional strips connect three groups of2/3 to repeated addition.
2. Actual folding/ruling creates equal thirds and fourths of the same whole; two marking patterns identify3/4 of2/3. Pupils retain their model and explain overlap. No supplied diagram pretends to be their work.
3. Mixed conversion and uncancelled products precede justified numerator-to-denominator cancellation; an invalid two-numerator cancellation is challenged.
4. One mixed number appears in a three-factor product. Pupils compare two groupings and choose a manageable example within the same constraint.
5. Ribbon-length and water-amount situations require correct reference quantities and units, followed by an original partner problem.
6. Pupils retain a first estimate before exact work, justify an interval and investigate below-one/one/above-one multipliers, with zero considered separately.

The two objective records request independent/prompted/not-yet/not-observed, date, original work, pupil words, assistance and next step. Choice answers do not prove construction or oral reasoning. Separate paper is allowed. No attainment or observed classroom performance is prefilled.

## Independent model checks

`node tests/p5-fractions-product-activity-static.cjs` passes. It parses actual visible teacher rows into independent BigInt rational products, verifies conversion equations and strict bounds, confirms at most three factors and at most one displayed mixed number in three-factor models, and counts overlap cells independently. It checks the false cancellation claim and growth/shrinkage only for positive starting values, with zero separately verified. It also enforces both-language task/objective structure,28 empty evidence fields, source links, shared controls and syntactically valid inline script.

Teacher examples are models, not pupil observations. The broad interval5/2 <35/12 <7/2 is justified independently by monotonic multiplication with positive5/6; other sound estimates are acceptable. Four ribbon pieces total3metres and2/3 of1 1/2litres is1litre, not a squared unit.

Only static asset checks are claimed here. Runtime registration, font rebuilding and full browser/paper/PDF checks are integration work; physical pagination, printing, independent translation, screen-reader testing and classroom use remain unperformed.

## Integrated private candidate verification

Four families add60 variants: fractionmeaning5b12, fractionproduct5b24, productstory5b12 and productestimate5b12. The final two IDs are shortened from the plan so twelve-item family links stay inside the unchanged300-character decoder bound; no predecessor IDs are renamed. Current inventory:188 permanent families/2,853 variants;187 selectable/2,838;60 selectable units/66 resource units;59 activities;51 complete/15 open resource units. All85 flags equal the inherited baseline. A later verified P4 rebase is still needed;5N1/5N2/5N3 browser verification is not claimed.

All2,793 predecessor payloads and all marking.js bytes are pinned. General fraction-response grading is reused unchanged; reduced improper/mixed results, whole numerals and n/1 retain their established meaning. New diagrams use a dedicated fractions5.js renderer; no old fraction SVG is edited.

Standalone private verification: **41 CJS gates passed**, plus actual PDF cmap coverage for **1,033 characters**, subset **285,080 bytes**. Independent exact rational checks cover60 variants,48 response contracts and2,704 finite-cell/algebra properties.24 bilingual SVGs have exact cell positions/sizes, region intersections, X marks and hatch counts checked;72 altered geometry/mark mutations are rejected. Three-factor displayed mixed-number counts are at most one. Practical hidden models have an independent oracle;28 observation fields stay blank.

Both script and embedded font URL caches use product-p5-r1; static assertions bind them. Runtime and browser helper practice sequences match in full. Browser tests cover bilingual routes, all60 assessments, full practice, blank/malformed/wrong/repeated actions, exact bounded paper/key/PDF batches, actual diagram cells, label bounds and mobile/activity toggles. These tests are authored, **not yet browser-executed**. Physical print, independent translation, screen-reader and classroom checks remain unperformed.

## Private predecessor correction provenance

The integrated browser run exposed an HTML-interpretation bug in six new, unpublished 5N2 relation fixtures. Safe visible labels and explanation spacing were added while preserving raw answer IDs and grading. Consequently the private 2,793-variant predecessor hash is now `d25b574ac47884d082403db19ecf1647a7e2c7a75b8d2ca9d741292c3a72ac27`; the published 2,661-variant baseline remains unchanged. This is an intentional reviewed private-content correction, not relaxation of the frozen published baseline. Fresh browser verification remains required.

## Current private verification and rerun provenance

The first complete private curriculum run recorded 614 passes and two failures: a real HTML interpretation defect in six new 5N2 relation labels and a real 5N3 SVG font-size override that clipped labels. The scoped fixes preserved all 2,661 published predecessor payloads. The second run recorded 615 passes and one failure caused by the test’s expected-key fallback for plain choices, not an additional runtime defect. After that test-only correction, the final full run passed 616/616. The first private UI run recorded 191 passes and two failures from stale catalogue/activity counters; corrected exact-count tests passed 193/193. Dedicated P1 checks passed 248/248 on the same corrected runtime. Earlier failed runs are retained as provenance, not counted as passing verification. All 43 static gates, actual font coverage and isolated-copy checks passed, including 144 production key HTML parses. No live P5 verification, classroom observation, physical printing, independent translation or screen-reader validation is claimed.
