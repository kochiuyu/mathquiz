# 5N2 · Fractions (III): source and activity audit

**Private 5N1–5N3 candidate; incomplete:** Rebased onto the verified 56-unit P1–P4 closure. Thirteen new families add 192 variants (60 for 5N1, 72 for 5N2, 60 for 5N3), preserving all 175 predecessor families / 2,661 variants. Current inventory: 188 permanent families / 2,853 variants; 187 selectable / 2,838; 60 selectable units / 66 resource units; 59 activities; 56 complete and 10 open resource-bearing units. Verified totals remain 211 numbered objectives plus four inquiry statements. 5N1, 5N2 and 5N3 remain incomplete. Private verification completed: **616/616 curriculum, 193/193 UI and 248/248 dedicated P1 checks passed**, with zero failures. This is private evidence only; deployed candidate verification is pending. All 56 inherited completion flags remain unchanged, and 5N1, 5N2 and 5N3 remain incomplete. The later P1 skill release `2b3521f` has now been preserved in this private candidate; core computational bytes are unchanged. Fresh integrated checks passed **193/193 UI, 248/248 P1 unit and 251/251 P1 skill checks**, with zero failures. All44 static gates and actual font coverage passed locally and in an isolated copy. Live P5 verification remains pending.

## Historical source-development and independent evidence

Earlier baseline counts and pending P4 status below are historical and superseded by the inherited 56-unit closure above. Source scope and practical/manual limitations remain unchanged.


Private candidate, 17 November 2026. **Incomplete; browser verification pending.** This activity does not change any completion flag or legacy question. Existing baseline51 flags, remaining P4 status and unverified5N1 browser state remain the coordinator's responsibility. Runtime integration and its final inventory are recorded separately.

## Source

Verified scope comes from [EDB KS2 explanatory notes, printed25–26 / PDF31–32](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=31) and [primary supplement, printed75–76 / PDF78–79](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=78). Four objectives concern comparison, addition/subtraction, three-term mixed addition/subtraction, and problems. Whole numbers are included. Three-fraction tasks have denominators at most12; calculations should remain manageable. Reduced mixed or improper answers are acceptable. Estimation and common-denominator reasoning matter; a formal three-number LCM algorithm is not required.

## Practical evidence, not recognition alone

`activities/p5-fractions-iii.html` contains six bilingual task groups and five sheets per language: three pupil sheets, a hidden model/key sheet and a hidden objective-observation sheet. Each language has16 genuinely empty evidence fields, including four objective records. Separate paper is allowed. No observations or classroom success are fabricated.

1. Pupils construct three equal-length strips, partition into halves/thirds/sixths and preserve their own model. An unequal-whole or unequal-part drawing is discussed rather than accepted by appearance.
2. Pupils compare three labelled values with a tie, compare with a whole number, and invent a new equal pair. The key uses C<A=B; it never forces a strict permutation of equal values.
3. Pupils solve the same addition with sixths and twelfths, explaining equivalence and rejecting addition of denominators. Both common denominators are valid;10/12 is labelled an intermediate form, not a final simplified answer.
4. Pupils exchange one whole before subtracting and check by inverse addition, then add three unlike fractions. Original steps and borrowing evidence are retained.
5. Pupils write and interpret a three-term water-volume calculation, retain litres and the same unit throughout, and invent a related story.
6. Pupils record an estimate before exact work and use it to detect an unreasonable answer. Alternative defensible estimates are allowed; the first estimate remains visible, with reasons for revision.

Four blank objective records ask for independent/prompted/not-yet/not-observed, date, original evidence and pupil words, help and next step. Objective completion cannot be inferred from a copied teacher key.

## Independent model checks

The isolated activity gate parses actual displayed model expressions and results into BigInt rational pairs, with cross-product equality independent of runtime helpers. It checks all14 bilingual visible table rows, including the intentionally unreduced intermediate10/12. Four visible order chains are checked with equality preserved. Four strict estimate bounds are checked against exact values and visible endpoints. Three-term input denominators are checked against12. Additional assertions reject2/5 as the sum of1/2 and1/3, verify the borrowed-whole exchange, and recover2 1/4 by adding5/6 to17/12.

The exact story is2−3/4+1/6=17/12 litres. The estimate task7/8+5/6 has exact value41/24 strictly between3/2 and2. A second mixed example3−1 1/4+2/3 is29/12, strictly between9/4 and11/4. These are authored models, not actual pupil observations.

Run `node tests/p5-fractions-activity-static.cjs`. This gate passes locally. Registration, runtime bank, full static suite, font subset, standalone integration and browser checks are handled by the parent. No preview or public writes were made for this activity. Physical printing, manual PDF pagination, independent translation, screen-reader and classroom validation remain unperformed. Resource completeness is not pupil mastery.

## Integrated private verification

Five new families add72 variants: fractionorder5a12, fractionaddsub5a24, fractionmixed5a12, fractionstory5a12, fractionestimate5a12. The legacy fracadd5a12 remains unchanged. Current inventory:184 permanent families/2,793 variants;183 selectable/2,778;59 selectable units/65 resource units;58 activities;51 complete/14 open resource-bearing units. All85 completion flags match the inherited baseline. 5N1 remains browser-unverified;5N2 and remaining P4 stay incomplete.

All2,721 predecessor payloads and the entire marking.js remain SHA-256 pinned. New calculation responses reuse unchanged general fraction4N6Answer mode with lowest terms: reduced improper or mixed notation, whole numerals and n/1 are accepted; unreduced equivalent fractions receive reduction feedback. No P4 form-specific specification or legacy field is changed.

Private standalone checks:39 CJS gates plus actual PDF cmap coverage passed. Font:1,033 source characters,285,080 bytes. Independent BigInt rational checks cover72 fixtures,48 response contracts and7,744 arithmetic properties;84 actual worked pairwise common-denominator steps are independently reconstructed, with nonnegative intermediates and displayed-operand binding. All original three-term denominators are at most12. Relation choices are checked for exactly one true answer, including ties.

The bilingual practical test separately checks hidden model arithmetic, order and estimate bounds;32 actual-observation fields are blank. Full bilingual routes,72 actual assessment questions, full practice, malformed/blank retries, submit locking, bounded exact paper/key/PDF and mobile/activity checks are authored but **not yet browser-executed**. Physical printing, independent translation, screen-reader checks and classroom use are unperformed.

## Browser-discovered relation rendering correction

The first integrated browser run failed the 5N2 paper/key check. This was a real display bug, not fraction-answer normalization: compact relation strings such as `A<B<C` were inserted as HTML, so the parser swallowed the text after `<B`. Six new three-fraction ordering fixtures were affected in assessment/practice choices, paper choices, key answers and key explanations. Raw internal choice IDs and grading stay unchanged. Those new fixtures now provide visibly spaced bilingual labels (`A < B < C`) and spaced explanations, avoiding HTML tag interpretation without changing shared rendering of older intentional markup.

Exact visible option/key/explanation assertions now cover assessment, practice, paper and keys. A static check parses actual production-renderer HTML for all six fixtures in both languages and all three rendering surfaces, and rejects the prior raw-chain mutation. All published 2,661 predecessor payloads and grading bytes remain unchanged. Only the later private 5N3 predecessor hash is intentionally updated to include this correction. Fresh full browser verification is required; this paragraph does not claim that rerun passed.

### Complete key-shape regression coverage

The next browser run passed 615/616 main checks, with all 193 UI and 248 P1 checks passing. The remaining main failure was a test-oracle exception, not a new runtime defect: its exact-key expectation assumed all questions without localized choice labels had `answerUnitLabels`, but ordering fixtures 0–5 use plain choice answers. The oracle now handles plain answers, localized choice labels, and labeled fraction answers explicitly without relaxing exact visible-text equality. Production `item()` output is independently HTML-parsed for all 72 questions in both languages (12 plain-choice, 36 localized-choice, 96 labeled-response keys), in addition to the 36 relation-surface cases. Every key's visible answer and full worked explanation must survive HTML interpretation. Runtime files remain unchanged by this test-only correction. A fresh main browser run is still required.

## Current private verification and rerun provenance

The first complete private curriculum run recorded 614 passes and two failures: a real HTML interpretation defect in six new 5N2 relation labels and a real 5N3 SVG font-size override that clipped labels. The scoped fixes preserved all 2,661 published predecessor payloads. The second run recorded 615 passes and one failure caused by the test’s expected-key fallback for plain choices, not an additional runtime defect. After that test-only correction, the final full run passed 616/616. The first private UI run recorded 191 passes and two failures from stale catalogue/activity counters; corrected exact-count tests passed 193/193. Dedicated P1 checks passed 248/248 on the same corrected runtime. Earlier failed runs are retained as provenance, not counted as passing verification. All 43 static gates, actual font coverage and isolated-copy checks passed, including 144 production key HTML parses. No live P5 verification, classroom observation, physical printing, independent translation or screen-reader validation is claimed.
