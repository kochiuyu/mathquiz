# 5N5 Fractions (V): source and private implementation audit

**Current resource status: complete.** 5N5: 4 numbered objectives and0 inquiry statements. Code release `504a2ea0a383b34fc5fe76f037860bb4a88bea23` passed the linked live checks. This marks resource availability, not pupil achievement. [Verification](p5-live-closure-evidence.json).

## Historical implementation record

**Private 5N5 candidate; incomplete:** Five families add84 variants plus a bilingual six-group practical resource for four numbered objectives. Inventory198 permanent families/3009variants;197 selectable/2994;62 selectable units/68resource units;61activities;56complete/12open. All2925 predecessor payloads and P1 releases are preserved. 5N1–5N5 remain incomplete pending verified publication; completed totals remain211 numbered objectives plus four inquiry statements. Static and browser results are separate; browser verification is pending.

## Historical source-reviewed plan retained as design evidence

# 5N5 Fractions (V): private source and implementation plan

18 November 2026. Historical plan only; this plan made no implementation or deployment changes. Its recorded prerequisites were the corrected 5N2 baseline, preservation of the 5N4 additions and verification of the planned 59-unit closure. The actual predecessor baseline must be frozen for implementation; the counts below describe the planning snapshot, not a verified 59-unit completion claim.

## Verified official scope

[EDB KS2 explanatory notes, printed 30–31 / PDF pages 36–37](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=36): four objectives cover fraction meaning, division using at most three operands, mixed operations using exactly three operands, and problems. Meaning includes fractions as whole-number quotients and comparisons of two whole-number quantities. Whole operands are included. Division connects to whole-number division and fraction multiplication; conventional precedence applies. Three-fraction division and three-fraction multiplication/division expressions permit at most one mixed-number operand. Problems include remainders and unitary-method proportional situations with non-integer arithmetic. Lowest-term improper or mixed answers are acceptable. Estimation is part of learning. Avoid cumbersome arithmetic.

[EDB supplement, printed 79–81 / PDF pages 82–84](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=82) confirms these objectives and restrictions. Ratio colon notation and the term direct proportion need not be introduced. Exclude inverse-original-quantity problems (a given fraction of an unknown amount is known), fractional relative difference and fractional increase/decrease. The latter exclusion is broader than merely avoiding percentages. No denominator ceiling is specified for this unit; do not import 5N2's bounds as a curriculum rule. These exclusions do not prohibit straightforward whole-number division by a fraction or finding a unit price from a stated total and item count.

Source pages and exact conditions were checked through the official PDFs, not inferred from existing question generators. The supplement's exclusions continue onto printed page 81, so stopping at printed page 79 would miss them.

## Existing contracts and preservation

Read the private 5N4 candidate's builder.js and marking.js. There are currently no 5N5 families. Current candidate has 193 families / 2,925 permanent variants, but is not a released baseline.

Preserve the P3 fraction families (60 variants), P4 4N6 families (84), legacy fracadd5a (12), five new 5N2 families (72), and all four 5N3 families (60): fractionmeaning5b, fractionproduct5b, productstory5b and productestimate5b. Preserve 5N4's 72 decimal variants, all other predecessors, stable IDs and practice samples. Reconcile the intentional private 5N2 HTML-label correction before hashing; preserve the published 2,661 predecessors and the concurrent P1 difficulty release. Do not perpetuate the uncorrected private 5N2 hash merely to make a gate pass.

fractionResponse4 creates a single-field fraction4N6Answer specification. parseFraction4N6 accepts whole numerals, fractions and conventional mixed numbers using bounded non-negative BigInts; scoreFraction4N6 supports general/whole/mixed/improper/denominator modes and lowest-term feedback. General mode accepts equivalent reduced improper and mixed forms. Decimal entries and arithmetic expressions are not fraction answers. Reuse these unchanged helpers and pin marking.js bytes. Whole-piece counts should use whole mode, not general mode; a general-mode remainder may be a reduced fraction, mixed number or zero. Do not add a permissive generic evaluator or weaken old form-sensitive P4 tasks.

## Proposed additions: five collision-free families / 84 variants

Checked the following IDs absent from the current private bank; recheck at implementation. Counts and small-number bounds are authoring choices.

1. `fracquotient5c` (12). Six equal-sharing whole-number quotient cases and six comparisons of two explicitly named whole-number quantities. Example: 3 equal loaves shared among 4 people gives 3/4 loaf each; 3 red counters for every 4 blue counters makes the number of red counters 3/4 of the number of blue counters. Clearly distinguish this comparison from the red fraction of all 7 counters. Include a comparison greater than one. No colon notation, reciprocal ambiguity or implicit part-of-total assumption.
2. `fracdivision5c` (24). Sixteen two-operand and eight three-operand exercises. Include fraction÷whole, whole÷fraction, fraction÷fraction, improper/mixed operands, zero dividend, divisor one, and proper/integer/improper outcomes. Three-number division follows left-to-right unless brackets explicitly change grouping; use at most one displayed mixed number. Never divide by zero. Include paired expressions demonstrating that division is not associative rather than asserting a false cancellation rule.
3. `fracmixedops5c` (24). Exactly three operands, two operations. Cover +/− with ×/÷, × then ÷, ÷ then ×, and deliberately bracketed sums/differences used as numerator or nonzero divisor. At least six paired bracket/no-bracket examples expose precedence; subtract only where all relevant intermediate quantities remain non-negative. Adopt at most one mixed operand throughout for a manageable subset, while documenting that the official restriction specifically names three-fraction division and multiplication/division. Denominators typically 2–12 and small whole parts are authored bounds, not official ceilings. Avoid tasks requiring four displayed operands disguised by an unexpanded mixed number.
4. `fracremainder5c` (12). Six concrete scenarios, each with two separately stable variants: maximum complete pieces/items and leftover quantity. E.g. 5 m ribbon cut into 3/4 m lengths gives 6 complete lengths and 1/2 m left. Each variant asks one clearly specified question; the explanation gives both related results. Use whole mode for counts and general fraction mode for remainder. Include an exact fit, insufficient amount and a nonzero fractional remainder. Do not round the quotient to the nearest whole number or report its fractional part as the physical leftover. Paired questions avoid adding a new multi-field grader solely for this family.
5. `fracunitary5c` (12). Given a quantity and its stated total, find one unit, then another amount under an explicitly constant rate. Use whole item counts with fractional cost/length/mass per item, plus simple continuous quantities where fractional requested amounts make sense. Show the unitary intermediate. Avoid a story in the excluded form “some fraction of an unknown original is given; recover the original.” Examples: 4 identical notebooks cost $7, so 6 cost $10 1/2; 3 equal ribbon lengths total 2 m, so 5 lengths total 3 1/3 m. These are mathematical models, not purchasing promises.

Estimation gets explicit worked benchmark reasoning and pupil-produced activity, not an arbitrary exact grade for an open estimate. For positive dividend, division by a value below one increases the result and division by a value above one decreases it; isolate zero as a boundary case. A quotient greater than one is not automatically an error.

## Independent oracles and mutation gates

Production may use reduced numerator/denominator arithmetic. Tests must reconstruct operands from authored displayed strings independently, not simply trust answer metadata or call production helpers.

- Division oracle: independently construct rational equation q × divisor = dividend by cross-products; for two operands also derive a common-denominator unit-count model. For three operands evaluate the declared grouping explicitly and verify each intermediate. Check divisor nonzero and identity/zero/inverse-scale properties over bounded independently generated pairs. Do not test only properties of the oracle itself: compare every production result.
- Mixed-operation oracle: use a separate small token parser/shunting-yard evaluator over displayed fractions and unambiguous mixed-number tokens. No JavaScript eval and no reuse of production expression trees. Confirm exactly three operands, legal operations, nonzero evaluated divisors, and precedence/bracket structure. Check every displayed solution line against exact rational equality. Mutation examples must catch treating division as associative, doing addition first, dropping brackets, inverting the wrong operand and cancelling across addition.
- Remainder oracle: find integer k by bounded repeated subtraction or integer inequalities, then independently assert amount = k × piece + remainder, 0 ≤ remainder < piece and k maximal. Validate units: count is dimensionless; leftover carries the original quantity's unit. For the example above, 5 = 6 × 3/4 + 1/2. Test exact-fit and fewer-than-one cases.
- Unitary oracle: verify constant-rate cross-products, unit value and final value separately. Dimensional checks guard multiplying by the wrong ratio. An independent review of wording must distinguish permitted unitary contexts from excluded inverse-fraction problems; a regex alone is not sufficient.
- Meaning oracle: reconstruct named set sizes or equal shares from diagram labels/counts. Test whole/reference identity, including red:blue versus red:all distractors, without using colon notation in pupil-facing prompts.
- Scoring: all variants, both languages, reduced improper/mixed/whole equivalents where permitted, unreduced feedback, zero, fullwidth input, malformed slash, zero denominator, wrong whole count, decimals, expressions, negatives, overflow/long input. Exercise actual mark and practice submit handlers with blank/wrong/correct/retry/repeated-submit flows. Keep exact units outside numeric answer fields.

## Practical evidence supporting all four objectives

One new bilingual activity, provisionally activities/p5-fractions-v.html, with six task groups and five printable sheets:

1. Share equal paper strips among people and record quotient, fraction and explanation. Compare two named counter sets, explicitly contrast comparison-to-blue with fraction-of-total.
2. Measure how many fractional lengths fit a stated strip; connect equal-unit counting with division and multiplication. Include a leftover and state its unit.
3. Learners generate a whole/fraction and fraction/fraction example, predict whether the quotient grows or shrinks, model it and verify by multiplication. Do not substitute a prefilled model for pupil work.
4. Arrange three operand/two-operation cards; predict order, then add brackets and compare. Record two genuinely different outcomes and justify precedence.
5. Shop/packing simulation: choose complete-item count, show remainder, and verify total = used + left. Include an exact-fit and an amount insufficient for one item.
6. Constant-rate table: derive one-unit value and another quantity; pupils estimate and write an original suitable context. Explain why the chosen rate is constant, and contrast with a deliberately unsuitable nonconstant-rate situation without inventing real prices.

Four blank objective observation rows: independent/prompted/not yet/not observed, original work, explanation, assistance, next step. Separate hidden model answers from pupil work and observations. Require original estimates, manipulatives/drawings and explanations; generated worksheets cannot establish classroom completion. Ratio notation, fractional change and inverse-original-number tasks must not leak into extension prompts.

## Display and release safeguards

Render all comparison signs and expression strings safely. The preceding private 5N2 raw A<B<C display bug requires actual visible text checks for prompts, options, solutions and keys; matching source HTML is insufficient. Use escaped or textContent rendering, not untrusted interpolation. Preserve raw stable answer IDs separately from localized labels. Fraction/mixed spacing, brackets and ÷ must survive bilingual screen, paper, key and extracted PDF text. If a new SVG is justified, use scoped inline label styles and test actual browser bounding boxes rather than presentation attributes alone.

Full variant sample maps are required in both runtime practice and browser helper, with matching actual registered callbacks. Bound 12-item/300-character paper/key/PDF batches for every new stable ID; test EN/繁中 URLs, reload/back and completion. Font coverage must check actual nonzero cmap glyphs and cache-bust the font URL as well as changed scripts. Verify catalogue, clear, practice, resource and activity counts in the actual UI runner and add strict static guards; derive from the final baseline rather than copying today's 192/60 literals.

Expected delta if these five families are approved: +84 permanent/selectable variants, +5 families, +1 selectable/resource unit and +1 activity. The historical plan required 5N5 to remain incomplete pending review, browser testing and live verification. Implementation had not begun at that planning stage. Physical print, independent translation, screen-reader and classroom observation remain separate limitations.


## Implemented scope

Five families84variants, no new SVG renderer or grader. Sixteen two-number and eight three-number divisions;24three-number mixed expressions; six paired remainder contexts; twelve constant-rate models. All figures/marking and P1assets frozen. Activity has6groups,5sheets perlanguage,4blankobjective records and10blankfields. Whole-piece counts use whole response mode; leftover uses general reduced fractions. No inverse-original/fractional-change problems. Browser and manual/classroom validation remain pending.

## Actual private static evidence

All48 CJS gates and actual font cmap check pass locally and from an isolated copy. New independent checks cover84 answers,48 displayed-expression parses,12 remainders,12 constant-rate problems,4608 cross-product properties,504 actual production HTML parses and12 bilingual model keys. All2925 prior payloads and existing marking/P1assets remain unchanged. Browser checks authored for every new variant, full practice sequences, bounded12item/300character paper/key/PDF batches and activity controls have NOT run. Projected full-suite counts666curriculum/197UI, plus preservedP1248/P1skills251, are targets only.
