# 5N4 Decimals (III): private candidate

**Current resource status: complete.** 5N4: 4 numbered objectives and0 inquiry statements. Code release `504a2ea0a383b34fc5fe76f037860bb4a88bea23` passed the linked live checks. This marks resource availability, not pupil achievement. [Verification](p5-live-closure-evidence.json).

## Historical implementation record

**Private 5N4 candidate, incomplete:** Adds72 bilingual decimal multiplication variants and a six-task practical activity covering4 numbered objectives. Static/browser results must be recorded separately; no new completion is claimed. Current inventory193 permanent families/2925 variants;192 selectable/2910;61 selectable units/67 resource units;60 activities;56 resource-complete and11 open resource-bearing units. All2853 predecessor payloads and marking.js remain frozen. First-threeP5 units also remain incomplete pending their independent release. Physical printing, classroom trials, independent translation and screen-reader validation are unperformed.

# 5N4 Decimals (III): official-source and legacy plan

18 November 2026. **Historical plan only.** At this stage, remaining-P4 live verification had passed 549 curriculum and 187 UI checks; the 56-unit closure was the prerequisite baseline for P5 integration and browser QA. This plan itself did not change completion or claim a released P5 unit.

## Official scope and pages

Verified [EDB KS2 notes, printed28–29 / PDF34–35](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=34) and [supplement, printed77–78 / PDF80–81](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=80).

Four objectives: multiply by10/100/1000; multiply by0.1/0.01/0.001; multiply two numbers; solve problems. Scaling may start with whole or decimal numbers. Ordinary products include decimal×whole in either order and decimal×decimal. Except for the two scaling objectives, decimal operands have one or two decimal places, and the underlying whole-number multiplication is no more than3-digit×2-digit. The excluded examples are0.124×3.9,12.4×3.42 and12.41×2.6. Pupils locate the decimal point, round to tenths/hundredths when needed, use≈for approximation and estimate products. Whole-number and fraction multiplication provide conceptual foundations. Decimal division and general three-factor decimal products are not this unit's target.

## Existing resources and frozen contracts

The inspected predecessor bank had 2,853 variants and no 5N4 family or activity. Integration required freezing the actual reconciled baseline rather than assuming that this historical count would remain unchanged.

P4 decimalmeaning4a12, decimalplace4a24, decimalcompare4a12 and decimalunits4a12 cover4N7. Decimaladdsub4a24, decimalmixed4a12 and decimalstory4a12 cover4N8. Preserve all108 payloads, written-place distinctions, trailing-zero handling, measurement conversions, response specs and practice sample maps. Preserve5N1 multi-digit rounding and4D1 tens/hundreds rounding: new decimal rounding must use its own stable IDs. Freeze all P3–P5 fraction families and entire marking.js.

`parseDecimal4N7` represents a decimal as a BigInt coefficient and power-of-ten scale; `scoreDecimal4N7` supports value/integer/places modes. Reuse unchanged exact value mode for multiplication. Use places mode only when the prompt explicitly demands a written number of decimal places. Equivalent values such as1.2 and1.20 are not automatically wrong merely because a rounded value is requested. If formatting is itself assessed, make that requirement explicit and separately test it. No global decimal-parser relaxation, binary-float comparison, or acceptance of arithmetic expressions.

## Proposed additions: five collision-free IDs /72 variants

The following IDs were checked absent in the current bank. Recheck before implementation. All are short enough for unchanged300-character,12-item shared-link limits.

- `decscaleup5a`12: four cases for each multiplier10,100,1000. Whole/decimal inputs, internal and trailing zeros, crossing whole boundaries, and a small value. Require value reasoning, not just “append zeros.”
- `decscaledown5a`12: four cases for each multiplier0.1,0.01,0.001. Whole/decimal inputs, zero padding, trailing-zero equivalence and nonzero small results. Explain the value of each digit becoming one/two/three places smaller. Do not present this as a decimal-division family.
- `decproduct5a`24: eight decimal×whole, eight whole×decimal, eight decimal×decimal. Carrying, internal zero, below-one factors, zero/one checks, and exact products up to four decimal places. Include operand-order pairs as a deliberate commutativity check, not accidental duplicate questions.
- `decround5a`12: calculate a valid two-factor product then round, six to tenths and six to hundredths. Each place has below-half, exact-half, above-half, already-exact, carry and near-zero outcomes. Keep exact product separate from approximate answer; show≈only for the requested approximation and never silently round an intermediate operand.
- `decstory5a`12: multiplication of equal measured quantities or quantity×unit-price, with units explicit. Some exact answers, some explicitly requested nearest-tenth/hundredth estimates. Avoid covert division, unit conversion or financial accounting assumptions. A rounded price is a mathematical exercise, not a claim about merchant rounding policy.

Scaling families are exempt from ordinary-product operand limits, but remain deliberately manageable. For ordinary products, check decimal places and the canonical unscaled integer coefficients against3-digit×2-digit in either order; avoid ambiguous gratuitous leading-zero forms. Include guards rejecting the three source-excluded examples. Proposed moderate fixtures:1.25×8,3.4×2.6,0.12×3.4; exact0.65×0.5=0.325 rounded to hundredths is0.33. Audit all proposed examples independently before implementation.

Estimation is supported by a separate pupil-produced activity and worked benchmark reasoning; an exact calculation bank alone is insufficient. No arbitrary grading of an open estimate as a single exact answer.

## Independent decimal arithmetic contracts

Production may multiply integer coefficients and combine scales. The independent oracle should use a different representation, e.g. rational BigInt numerator/denominator reduction or repeated addition for whole factors. Parse actual displayed operand strings independently. Check every printed aligned/partial-product step if column work is shown.

Rounding oracle: compare exact rational product distances to adjacent multiples of0.1 or0.01; nonnegative ties upwards. Do not call the production rounding helper, Number.toFixed or a floating epsilon. Include0.325→0.33,0.995→1.00,0.049→0.0 at tenths and exact multiples. Ensure input products generating these cases satisfy scope; examples in a pure oracle property test are not automatically authored curriculum questions. Preserve the difference between numerical value and required written precision.

Properties: commutative products, identity/zero, multiplication by powers of ten, inverse scaling as an oracle identity only, trailing-zero input invariance, exact equality to fraction representation, rounding monotonicity/idempotence/error≤half a unit, carry across9s, and no premature operand rounding. Scaling0.1/0.01/0.001 must retain leading fractional zeros. Distinguish zero coefficient from missing answer.

Response tests: canonical and equivalent zeros, full-width digits, supported whitespace, exact products, requested precision, wrong value, expressions, commas/units, exponent notation, multiple points, negative/out-of-range forms and length limits. Use inherited accepted/rejected forms rather than broadening them for new examples. All predecessor numeric, fraction and decimal response tests remain required.

## Practical evidence and bilingual design

Six proposed task groups:
1. Move digit cards on a place-value chart to explain multiplication by10/100/1000, recording original and resulting values.
2. Model one-tenth/one-hundredth/one-thousandth of a quantity with labelled equal partitions or place-value counters; record leading zeros and explain their purpose.
3. Connect a simple decimal product with equal groups or a fraction model; explain why multiplication need not increase a positive quantity.
4. Work an ordinary two-factor product in columns and explain the decimal point using a magnitude estimate or fraction conversion, not a memorized rule alone.
5. Compare exact and rounded results at both required places; retain original estimate, exact product and approximation with the correct symbol.
6. Choose and solve a realistic measurement/price problem, state units, justify a benchmark estimate and revise it after checking.

Four blank objective rows request independent/prompted/not-yet/not-observed, original work, pupil explanation, help and next step. Hidden model solutions cannot prefill pupil observations. These sources call for concrete examples, but do not mandate a unique physical apparatus; offer cards, strips or a labelled drawing. Do not imply actual classroom work occurred.

## Integration and release gates

New optional renderer only if conceptual models materially need it; keep earlier decimal SVGs untouched. Any place-value chart must have readable headings and meaningful zero positions on mobile/paper, not a cramped table. Diagram oracles should recover values from actual labels/coordinates rather than metadata alone. Verify≈glyph in the actual subset cmap and extracted PDF text.

All72 exact IDs, both languages, runtime AND browser-helper full sample lists, correct/wrong/blank/malformed/repeated submission, retry/navigation, bounded complete paper/key/PDF batches and mobile layout are required. Bind script cache tokens AND the embedded font URL to the current font release. Preserve old hashes, marking bytes, completed-unit flags and historical verification claims. Browser tests authored are not browser tests passed.

Planned deltas: +5 families / +72 variants, +1 selectable unit, +1 resource unit and +1 activity. Completion requires reviewed local and live verification against the verified P5 baseline. Physical-print, independent-translation, screen-reader and classroom limitations remain.


## Authored scope and proof limits

Five families12+12+24+12+12, exact coefficient/scale multiplication. Numeric value-mode scoring is reused unchanged. Four objectives are supported by digital tasks plus pupil-produced models, estimates, column work and contextual problems; no digital outcome substitutes for original observations. Browser tests are authored, not passed.

## Private static verification, 18 November 2026

All 45 CJS suites and actual PDF-font coverage passed in the candidate and an independent standalone copy. New coverage includes 72 independent rational-product and nearest-rounding-distance fixtures, 10,201 production/oracle input pairs, and actual assessment/practice handlers on 144 bilingual fixtures with malformed rejection, retries and repeated-submit locking. Minimal-DOM handler tests are not browser/layout verification. All 2,853 inherited payloads and marking.js remain frozen against the supplied private first-three baseline. Current inventory: 193 permanent families / 2,925 variants; 192 selectable families / 2,910 variants; 61 selectable units, 67 resource units and 60 activities. Exactly 56 completed-unit flags remain; 5N1–5N4 remain incomplete.

The inherited 5N3 SVG label CSS override fix and product-labels-r2 cache token are included. The first-three baseline is still undergoing browser review, including a newly identified 5N2 raw-order-label HTML display correction. This candidate must be rebased onto that reviewed baseline and its eventual 59-unit closure before release. Its predecessor hash will need an intentional reviewed update for those private 5N2 corrections, while preserving all published predecessor content. Authored browser checks, expected main/UI/P1 counts 641/195/248, have NOT been run for this candidate. No preview, publication, live verification or completion email was performed.

## Corrected first-three runtime carry-forward

Carried the reviewed six private 5N2 fraction-order display corrections into this candidate: raw stable choice IDs remain unchanged; localized spaced choice labels and explanations prevent relation chains becoming HTML. Carried the final all-key-shape browser assertion and 180 production-HTML parse cases (144 keys and 36 relation surfaces). The 5N3 inline 12px renderer fix remains identical to the corrected first-three baseline. This candidate uses its own decimal-product-p5-r2 bundle/font cache and p5-ui-counts-r2 UI-runner cache.

All 2,853 inherited payloads now match the corrected first-three runtime exactly. The explicitly private predecessor SHA256 changes from b3c8cbecc8c2988c49d15ce3d97cc9558ebd4830843dca3e0111393cc0245f81 to 41d0bbd8808e4e74a5eb58fbf8c404c02858417007f5184e9526d5dc0fd0ced1. The six corrected private payloads are intentional, not changes to the 2,661 published predecessors. The published predecessor gates and marking.js checksum remain unchanged. All 72 new 5N4 payloads retain their original golden hashes. Completion remains 56; later verified 59-unit metadata rebase and this candidate's actual browser/live verification are still required. Previous statements about uncorrected private payload preservation describe the earlier snapshot, not this carry-forward.

## Pedagogical correction: integer-place zeros

Independent review identified ambiguous wording about deleting terminal zeros. New 5N4 explanations now permit omission only of trailing fractional-part zeros after the decimal point, explicitly preserving integer-place zeros. Scale-zero products instead say to retain all integer-place zeros and contain no removal instruction. A strict bilingual regression checks that 30 × 10 remains 300, never 3. Updated only the five new family golden digests; all corrected first-three predecessor digests and marking remain frozen. Rebuilt the subset font and advanced this candidate's bundle/font token to decimal-product-p5-r3. This is private wording validation, not a browser/live verification claim.
