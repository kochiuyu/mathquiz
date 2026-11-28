# P4 fractions beyond one — guided release

28 November 2026. Published and verified locally and on the public site.

[Open lessons](../p4-learn.html?path=fractions) · [Evidence](p4-fractions-guided-evidence.json) · [P4 plan](p4-guided-learning-plan.md)

## Teaching scope

Six bilingual lessons provide 12 Try together tasks, 54 practice tasks and 12 sample checks for **4N6.1–4**. P4 now has 31 lessons across five topics. **4N6 is only partly implemented in guided learning:** addition, subtraction and stories (4N6.5–7) are the next separate release. Existing whole-unit practice and practical sheets remain available.

The [EDB KS2 explanatory notes, PDF pages 16–17](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=16) define proper/improper/mixed forms, conversion, expansion/reduction (including lowest terms), and comparison with like denominators, whole and mixed numbers. The teaching order and small example values here are design choices, not invented curriculum ceilings.

| Lesson | Main task | Objective |
| --- | --- | --- |
| Fractions and mixed numbers | Name written forms, including improper fractions with whole-number values | 4N6.1 |
| Group parts into wholes | Convert improper fractions to mixed or whole numbers | 4N6.2 |
| Write an improper fraction | Count all parts in mixed or whole numbers | 4N6.2 |
| Split into smaller parts | Expand both numerator and denominator without changing the amount | 4N6.3 |
| Reduce to lowest terms | Group parts and use the highest common factor | 4N6.3 |
| Compare equal-sized parts | Compare like-denominator forms on one number line | 4N6.4 |

The models show one step at a time. All whole bars have the same width; part widths change with the denominator. Expansion/reduction compare equal amounts. The shared number line has equal subdivisions and explicit whole boundaries. Pupils can change examples and add parts across a whole. Digital models earn no marks. Six practical prompts invite paper strips, regrouping and number-line work; adult observations remain separate from answers.

The inquiry asks whether adding one to both numerator and denominator preserves a fraction. Pupils keep a prediction and plan before recording trials with 1/2, 3/2 and a chosen fraction. Original predictions cannot be overwritten by later conclusions. Observed independence, explanation quality and paper work require human review.

## Pupil wording and answers

English question prompts contain at most ten words. Each lesson opens with one teaching line. Required answers and requested forms stay visible; hints and optional explanations stay collapsed. Pupil slots and Easy/Normal/Difficult remain separate.

The existing exact fraction parser and scorer are reused. Accepted forms are a whole number, a fraction, or a mixed number with a positive proper fractional part. Full-width input is normalized. A right value in the wrong requested form receives “Same amount. Use the requested form or denominator.” An equivalent unreduced answer receives “Same amount. Reduce to lowest terms.” Expansion may intentionally require an unreduced fraction with the stated denominator. First answers and one retry remain separate; malformed syntax creates no first attempt.

The twelve sample prompts differ from this topic's teaching/practice prompts. They are a fixed sample, not an unseen-item guarantee or mastery certificate. Some mathematical values are deliberately revisited in new representations.

## Saved work and badges

The new topic uses the existing P4 record contract and a separate key for each pupil. Earlier P1–P4 banks, topic data, observation records and method notebooks are preserved. Common-factor listing and short-division work remain available. Reset affects only the current topic and pupil. Corrupt, future-version and oversized records stay protected; unavailable storage retains temporary work with a notice.

This release starts from the newly merged 16-badge feature. Fractions join the existing catalogue and generic badge checks; no badge or reward rule is added. The badge reader previously ignored valid P3/P4 lesson records larger than 64 KiB. It now uses each guided store's declared limit (P4: 512 KiB) while the badge record keeps its own 64 KiB limit. A regression case fills the new topic beyond 64 KiB and verifies that completed lessons still count. The badge page loads the new data and exact fraction scorer.

## Verification

Local browser verification covers 546 core cases (all five P4 topics), 82 focused fraction/interface cases, seven badge cases and 188 shared navigation/wording cases. Exact reruns and original failures are recorded in the evidence. The Node core runner independently repeats the same 546 cases; these are not added to browser totals.

Fourteen new static gates independently recompute all 78 answers with Python rational arithmetic, check bilingual numbers, short prompts, partial curriculum coverage, catalogue counts, dependency order and unchanged protected files. Eleven inherited badge gates and three inherited fraction suites also pass, including exact fraction boundary and geometry checks. Aggregate generated arithmetic fixtures are not counted as separate browser cases.

Development findings: a geometry test initially matched the SVG stroke-width attribute instead of its width; the test selector was corrected. The long-record badge failure required the size-limit repair described above. Two earlier-topic interface tests initially requested a notebook on the introductory common-multiples lesson; they were corrected to target the short-division lesson and passed exact reruns. Badge tests now compare normal records by key/value rather than object insertion order, retain pre-existing production badge records, and restore their test-only session toast state.

All **823 local and 823 public cases** are verified (1,646 selected cases); reruns are not counted again. The public fraction interface had one navigation timeout (`en p4-fractionimproper normal`) and passed its exact rerun. The public shared suite had one navigation timeout (`Topic en P1 numberstart`) and passed its exact rerun. The local shared suite had one navigation timeout (`Topic en P1 partstart`) and passed its exact rerun.

Runtime deployment succeeded. All 45 changed public files and 23 exact versioned asset URLs matched; six repository readbacks matched. All 69 relative handoff/report links resolved. 960 inherited files remain byte-identical, with none deleted. Both local and public phone inspection checked the Chinese expansion model, equal whole widths and no horizontal overflow. Classroom trials, independent translation/content review, screen-reader listening and observed practical work remain pending.

## Next

Build **P4 fraction calculations and stories (4N6.5–7)** as a separate topic: at most three same-denominator fractional/whole quantities, mixed addition/subtraction, and interpreted story results. Continue P4 before P5 and P6, following the [cross-year sequence](p4-p6-guided-sequence.md).
