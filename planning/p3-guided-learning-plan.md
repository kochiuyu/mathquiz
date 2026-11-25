# P3 guided learning plan

**23 November 2026 update:** [Separate P3 application review](../p3-review.html) published and verified: 16 bilingual tasks, nine practical stations and inquiry evidence. See the [release and objective map](p3-review-release.md). First attempts, supported retries and original records remain separate. **P4 planning is now complete:** follow the [P4 plan](p4-guided-learning-plan.md), starting with multiplication by two digits. Actual readiness remains a human evidence review, not a score gate. Earlier dated contracts below are historical.

Prepared 22 November 2026 from the published P2 readiness handoff (`2a3e7123647dccd55749d57bbafb0b06734c9ad5`). **Updated after the first implementation:** the [five-digit pathway](../p3-learn.html?path=numbers) now supplies the five lessons specified below. Other P3 units remain planned unless explicitly recorded as implemented below. Multiplication by one digit is also now implemented as [six guided lessons](../p3-learn.html?path=multiply), with [separate evidence](p3-multiply-guided-evidence.json). The parallel [kilometre/millimetre route](../p3-learn.html?path=length) is now implemented as five lessons with [separate evidence](p3-length-guided-evidence.json). Division by one digit and fraction foundations (3N5.1–2) are now implemented. Parallel lines/quadrilateral properties (3S1.1–6) are also implemented. Triangle reasoning and construction (3S2.1–4) are implemented too. Capacity (3M3.1–7) is implemented too. Weight (3M5.1–7) is implemented too. Time (III), 3M2.1–3, is implemented too. Time (IV), 3M4.1–2, is implemented too. Bar charts (3D1.1–3) are implemented too. Mixed calculations (3N4.1–4) are implemented too. Fraction comparison and pictured operations (3N5.3–4) are implemented too. Whole-P3 coverage and inquiry have now been reviewed; next is a separate application review. See the [current review](p3-coverage-review.md). [Release evidence](p3-numbers-guided-evidence.json).

## Decision and source basis

Plan **13 numbered-content units (54 objectives), plus integrated inquiry 3F1**: 14 curriculum units altogether. Organise teaching into open branches, not a compulsory one-way checklist. A pupil may revisit selected [P2 review tasks](../p2-review.html) without a pass score or access lock.

Authority: [EDB primary curriculum supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=43) and [Key Stage 1 explanatory notes, P3 begins at PDF page 49](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49). The notes were rechecked for all P3 units on this date; curriculum rows are not a prescribed teaching order. The unit audits linked below retain detailed supplement references. A repeat targeted retrieval of the supplement timed out; this planning pass uses the successfully retrieved official explanatory notes for the numbered scope and boundaries, rather than claiming a new full supplement reread.

The order below is a MathQuiz teaching proposal. It is not an EDB-endorsed timetable or measured pupil-readiness finding. Suggested lesson groupings are adjustable after classroom evidence. Keep concrete actions, diagrams, language and symbols connected.

## What already exists

The current [P3 skill directory](../p3-skill-levels.html) has **50 skills and 1,800 bilingual tasks** in its source module. This includes the original **35 curriculum skills / 1,260 levelled tasks** and **15 TSA-informed additions / 540 tasks**. Easy/Normal/Difficult often reuse a context; these are not 1,800 independent unseen contexts or guided lessons. The module's 14 labels include `3R1`, a cumulative-review grouping, **not an extra EDB unit**. Inquiry is separately teacher-observed.

Existing [source classification](p3-source-classification.md) separates EDB scope, HKEAA assessment references and MathQuiz extensions. Do not make symbolic fraction scaling, expanded pictogram/chart scales or cumulative TSA coverage compulsory P3 prerequisites merely because they appear in this bank. Preserve all IDs, payloads, scoring contracts, links and source labels. The lesson journey should teach first, then link to selected existing practice with its limits clear.

There are existing practical activities for all 14 curriculum units; these are resources, not recorded delivery or pupil performance. At the planning audit, no `p3-learn.html` entry existed. The first implementation now adds that isolated guided entry and progress record; the practice-bank inventory above remains unchanged.

## Learning branches and prerequisites

```mermaid
flowchart TD
  P2N[P2 thousands and exchanges] --> N1[Five-digit numbers]
  P2F[P2 groups and facts] --> N2[Multiplication by one digit]
  N2 --> N3[Division by one digit]
  P2D[P2 sharing and remainders] --> N3
  P2A[P2 add/subtract] --> N4[Brackets and mixed calculations]
  N2 --> N4
  P2D --> N5[Equal parts, wholes and fractions]
  P2G[P2 angles and quadrilaterals] --> S1[Parallel lines and quadrilaterals]
  P2G --> S2[Triangle properties and construction]
  P2M[P2 metres and equal-unit experience] --> M1[Kilometres and millimetres]
  P2M --> M3[Capacity]
  P2M --> M5[Weight]
  P2T[P2 clocks and day context] --> M2[Seconds and missing times]
  P2T --> M4[24-hour notation]
  P2C[P2 pictograms and counting] --> D1[Bar charts and new data]
```

- **First release is 3N1**, establishing a consistent P3 entry and grade-isolated progress. This is a delivery choice, not a requirement to finish five-digit counting before every other branch.
- **Number operations:** meaningful partial products and carrying before column multiplication; place-value sharing before column division. Multiplication grouping may change; successive division remains left-to-right. Mixed calculations need multiplication meaning and earlier addition/subtraction, not completion of every division lesson.
- **Fractions:** bring them in once equal sharing and identifying a whole are secure. Do not postpone this concrete branch until all written algorithms are completed. Equal partitions → object/set wholes → notation → modelled equivalence → comparisons → pictured operations.
- **Geometry:** revisit P2 angles, lengths and square/rectangle properties. Parallel lines precede new quadrilateral classifications. Triangle work can run alongside; it does not require advanced quadrilateral completion. Keep real models/drawing in the route. There is no new P3 solids unit and no reason to undo P1's solids-to-outlines sequence.
- **Measures, time and data:** open parallel routes with useful-first links. Standard scales need appropriate counting, not completion of all arithmetic. Time (III) and (IV) share P2 prerequisites; seconds arithmetic must not be mixed into the time-problem requirement. P2 pictograms lead into bar charts, with counting in twos/fives revisited where needed.
- Inquiry belongs within these routes, from the first release onward. It is not a final optional reward after all quizzes or proof that ten teaching hours were delivered.

## Unit routes and resources

The labels below paraphrase the planning focus; use the cited objective numbers and detailed unit audits when implementing.

| Unit | Useful first | Suggested teaching route | Existing resources |
| --- | --- | --- | --- |
| 3N1 · Five-digit numbers | P2 thousands | Build 10000 → read/write zero places → cross boundaries → parity → compare | [Source audit](p3-5digit-numbers.md) · [Activity](../activities/p3-5digit-numbers.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49) |
| 3N2 · Multiplication | P2 equal groups, facts and exchanges | Two-digit products → carrying → three-digit products → helpful grouping → stories and reasonableness | [Source audit](p3-multiplication-i.md) · [Activity](../activities/p3-multiplication-i.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=50) |
| 3N3 · Division | P2 sharing/grouping and 3N2 inverse checks | Place-value sharing → exchanges/quotient zeros → remainders → successive division → contextual decisions | [Source audit](p3-division-i.md) · [Activity](../activities/p3-division-i.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=51) |
| 3N4 · Mixed calculations | P2 addition/subtraction and 3N2 | Four-digit add/subtract → brackets → multiplication first → concrete equalities → comparison then total | [Source audit](p3-four-operations-i.md) · [Activity](../activities/p3-four-operations-i.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=52) |
| 3N5 · Fractions | P1 parts/whole and P2 equal sharing | Equal parts and whole → notation including 0/1 → set fractions → equivalence → comparisons → pictured operations | [Source audit](p3-fractions-i.md) · [Activity](../activities/p3-fractions-i.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=54) |
| 3M1 · Kilometres and millimetres | P1 centimetres, P2 metres and number scales | Need for km → km comparisons → need for mm → actual ruler use → estimates and records | [Source audit](p3-length-distance-iv.md) · [Activity](../activities/p3-length-distance-iv.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=56) |
| 3M2 · Seconds and time problems | P2 minutes and day context | Experience seconds → actual timing → finish/elapsed revisit → unknown starting time → explain/check | [Source audit](p3-time-iii.md) · [Activity](../activities/p3-time-iii.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=58) |
| 3M3 · Capacity | P2 equal units, counting/scales and thousands | Container/maximum → intuitive/direct comparisons → equal units → L/mL → tools → estimate/record | [Source audit](p3-capacity.md) · [Activity](../activities/p3-capacity.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=59) |
| 3M4 · Twenty-four-hour time | P2 clock reading, day parts and midnight | Ambiguity → hour/minute pairs → relate both notations → noon and named-day endpoints | [Source audit](p3-time-iv.md) · [Activity](../activities/p3-time-iv.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=61) |
| 3M5 · Weight | P2 equal units, counting/scales and thousands | Handle/predict → balance → equal units → g/kg → scale use → estimate/record | [Source audit](p3-weight.md) · [Activity](../activities/p3-weight.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=62) |
| 3S1 · Parallel lines and quadrilaterals | P2 angles, perpendiculars and quadrilateral properties | Parallel/not parallel → tool construction → two parallel pairs → inclusive names → one pair → draw/make | [Source audit](p3-quadrilaterals-ii.md) · [Activity](../activities/p3-quadrilaterals-ii.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=64) |
| 3S2 · Triangles | P1 triangles, P2 angles/lengths; 3S1 naming helps | Sides versus angles → overlapping names → side feasibility → varied drawings/models | [Source audit](p3-triangles.md) · [Activity](../activities/p3-triangles.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=66) |
| 3D1 · Bar charts | P2 pictograms and counting in 1/2/5 | Pictogram bridge → bars and scale → both orientations → tallies/table → choose scale and construct | [Source audit](p3-bar-charts-extension.md) · [Activity](../activities/p3-bar-charts-i.html) · [EDB notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=68) |

## Objective ledger

Every numbered objective is assigned below; this is planned teaching coverage, not a completion claim. Practical evidence is assessed separately from screen responses.

| Objective | Guided focus | Required application evidence for its unit |
| --- | --- | --- |
| 3N1.1 | Read, write and count five-digit quantities | Model exchange, unseen oral reading/dictation and comparison explanation |
| 3N1.2 | Explain the ten-thousands place | Model exchange, unseen oral reading/dictation and comparison explanation |
| 3N1.3 | Compare values | Model exchange, unseen oral reading/dictation and comparison explanation |
| 3N2.1 | Multiply by one digit | Construct partial products and write own columns; explain a chosen grouping |
| 3N2.2 | Group three factors | Construct partial products and write own columns; explain a chosen grouping |
| 3N2.3 | Solve multiplication situations | Construct partial products and write own columns; explain a chosen grouping |
| 3N3.1 | Divide by one digit | Share materials, write quotient places and interpret a leftover in context |
| 3N3.2 | Divide successively | Share materials, write quotient places and interpret a leftover in context |
| 3N3.3 | Solve division situations | Share materials, write quotient places and interpret a leftover in context |
| 3N4.1 | Use brackets to show intended order | Select operations without an operation heading; explain intermediate quantities |
| 3N4.2 | Combine three addition/subtraction terms | Select operations without an operation heading; explain intermediate quantities |
| 3N4.3 | Combine multiplication with addition or subtraction | Select operations without an operation heading; explain intermediate quantities |
| 3N4.4 | Solve linked calculation situations | Select operations without an operation heading; explain intermediate quantities |
| 3N5.1 | Describe part of an object or set | Fold/partition, identify the whole set, overlay equal wholes, explain before writing |
| 3N5.2 | Show equal fractional amounts | Fold/partition, identify the whole set, overlay equal wholes, explain before writing |
| 3N5.3 | Compare with a shared numerator or denominator | Fold/partition, identify the whole set, overlay equal wholes, explain before writing |
| 3N5.4 | Add or subtract like-denominator fractions | Fold/partition, identify the whole set, overlay equal wholes, explain before writing |
| 3M1.1 | Develop a kilometre reference | Choose real tools, record a reference then an estimate before measuring |
| 3M1.2 | Compare kilometre lengths/distances | Choose real tools, record a reference then an estimate before measuring |
| 3M1.3 | Develop a millimetre reference | Choose real tools, record a reference then an estimate before measuring |
| 3M1.4 | Measure and compare in millimetres | Choose real tools, record a reference then an estimate before measuring |
| 3M1.5 | Choose suitable length records | Choose real tools, record a reference then an estimate before measuring |
| 3M2.1 | Develop a sense of a second | Real timing and pupil-generated timelines; distinguish measurement from word problems |
| 3M2.2 | Measure and compare in seconds | Real timing and pupil-generated timelines; distinguish measurement from word problems |
| 3M2.3 | Find a missing start, finish or duration | Real timing and pupil-generated timelines; distinguish measurement from word problems |
| 3M3.1 | Explain capacity | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M3.2 | Predict clear capacity differences | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M3.3 | Compare by direct transfer | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M3.4 | Compare using a repeated nonstandard unit | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M3.5 | Recognise L and mL | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M3.6 | Measure and compare with standard units | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M3.7 | Choose suitable capacity records | Safe containers, full-to-empty transfer, equal fills and eye-level reading |
| 3M4.1 | Explain why 24-hour notation is useful | Read/write actual schedules and explain 00:00 versus the stated day-end 24:00 |
| 3M4.2 | Read and express 24-hour times | Read/write actual schedules and explain 00:00 versus the stated day-end 24:00 |
| 3M5.1 | Explain heavier and lighter | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3M5.2 | Predict clear weight differences | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3M5.3 | Compare on a balance | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3M5.4 | Compare using equal-weight units | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3M5.5 | Recognise g and kg | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3M5.6 | Measure and compare with scales | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3M5.7 | Choose suitable weight records | Check zero, centre objects, swap pans, choose scale and estimate after experience |
| 3S1.1 | Identify parallel lines | Ruler/set-square construction and separate physical models with explicit criteria |
| 3S1.2 | Construct parallel lines | Ruler/set-square construction and separate physical models with explicit criteria |
| 3S1.3 | Use parallelogram properties | Ruler/set-square construction and separate physical models with explicit criteria |
| 3S1.4 | Include squares and rectangles as parallelograms | Ruler/set-square construction and separate physical models with explicit criteria |
| 3S1.5 | Identify trapeziums | Ruler/set-square construction and separate physical models with explicit criteria |
| 3S1.6 | Draw and make the quadrilaterals | Ruler/set-square construction and separate physical models with explicit criteria |
| 3S2.1 | Recognise the five specified triangle categories | Sort with all applicable names, predict/test strips including equality boundary |
| 3S2.2 | Reason about overlapping categories | Sort with all applicable names, predict/test strips including equality boundary |
| 3S2.3 | Test whether side lengths can form a triangle | Sort with all applicable names, predict/test strips including equality boundary |
| 3S2.4 | Draw and make triangles | Sort with all applicable names, predict/test strips including equality boundary |
| 3D1.1 | Explain a bar chart representation | Collect new data, tally it and make both chart orientations with own labels |
| 3D1.2 | Read and compare bar-chart data | Collect new data, tally it and make both chart orientations with own labels |
| 3D1.3 | Collect, organise and chart data | Collect new data, tally it and make both chart orientations with own labels |

**3F1 (unnumbered integrated statement):** each topic includes a pupil question or choice, retained prediction, actual trial, noticed result, explanation and a changed example or counterexample. Use the [existing investigation resource](../activities/p3-inquiry.html) and [audit](p3-inquiry.md) as models. Preserve failed trials and record support; do not fabricate observations, auto-award inquiry mastery or claim hours from clicks.

## Scope boundaries that must shape the lessons

- **3N1:** up to five digits, with movement back across 10000 into four digits. Read/write/count, internal zeros, place value, odd/even from ones, comparison symbols. Ten thousand represented by ten groups valued at 1,000 each; do not demand 10000 loose objects. No new arithmetic algorithm or estimation objective is added here.
- **3N2/3N3:** two/three-digit by one-digit calculations, including exchanges and remainders where appropriate; written steps must connect to values. Teach estimation after calculation experience. Quotient zeros and the meaning of leftover quantities need explicit attention. No zero divisor or multi-digit divisor.
- **3N4:** three-number addition/subtraction through four-digit numbers; multiplication combined with addition or subtraction with at most four numbers. Brackets may occur in separate pairs, not nested levels. Recognise the four concrete product/sum/difference relations; procedural expansion/factoring belongs later. Comparison-then-total stories extend P2. The title does not require a mixed-division bank.
- **3N5:** fractions of one object and one set, equal parts and consistent whole. Include zero and one. Comparisons share numerator or denominator. Equivalence uses models, not a required expand/reduce algorithm. Pictured addition OR subtraction of up to three like-denominator fractions; all intermediate values/results stay between zero and one. No forced simplest form, unlike denominators or improper/mixed-number work. Preserve earlier count-specific fraction marking rather than silently broadening it.
- **Length/capacity/weight:** direct and equal-unit experience before standard recording, then estimate before measuring a new case. Choose actual tools and meaningful references. Compound-to-single unit records are included; reverse conversion and decimal records are not required. Capacity concerns maximum contents, not current fill. Weight uses ordinary language and balanced equal units; avoid turning this into a mass/force physics lesson.
- **3M2:** actual seconds measurement is reasonable but has no fixed curricular maximum. The separate start/finish/duration word problems use whole hours up to 12 or whole minutes up to 60, not seconds arithmetic. Missing start is the new P3 demand; preserve the two existing unknown types too.
- **3M4:** relate 12/24-hour notation, hour/minute pairs, noon, and named-day start/end (00:00/24:00). Do not require interval arithmetic in 24-hour notation; that is later learning.
- **3S1:** parallel lines lie in the same plane; non-intersection must not be judged just from two short visible segments. Discuss perpendicular separation, draw/make parallels, then two parallel pairs and exactly one pair. Squares and rectangles count as parallelograms. This does not introduce the later square-within-rectangle teaching requirement. Avoid single-name questions without specified criteria; drawing tasks say whether a non-right-angled example is required.
- **3S2:** five named categories, including isosceles-right; equilateral is also isosceles. Allow all valid names. Side-sum feasibility is strict, including failure at equality, and is applied in making models. No degree measures, angle sums, Pythagoras, formal proof or advanced classification added.
- **3D1:** horizontal/vertical charts with scale 1, 2 or 5. Collect data, tally/frequency table, choose a scale, label and construct with equal bar widths/spaces. Reading a provided endpoint does not prove constructing a chart. Other scales in extension practice stay labelled extensions.

## Delivery batches

1. **Five-digit numbers and P3 foundation infrastructure** — five lessons below; separate grade storage and map entry. Include a small practical investigation immediately.
2. **Multiplication and a parallel measurement route** — first multiplication meaning/columns, then kilometre/millimetre lessons. Release each verified topic separately.
3. **Division plus fractions foundations** — develop column sharing and remainder reasoning; open concrete whole/part fraction lessons without an algorithm-completion lock.
4. **Parallel lines/quadrilaterals and triangle reasoning** — separate topic releases, with instruments and construction observations.
5. **Capacity and weight** — each follows its comparison-to-tool sequence; reusable observation patterns, not reused results.
6. **Time (III), Time (IV) and bar charts** — each has its own prerequisite links and scope; these can be brought forward for a pupil/class ready for them.
7. **Complete mixed calculations and fraction applications, then whole-P3 review** — ensure no objective is left merely in the practice bank. Audit sequence, fresh application, oral/practical evidence and navigation before moving to P4 guided teaching.

This is an implementation queue, not a compulsory pupil schedule. Later objectives may be taught earlier through the open branches. Each topic release updates the objective ledger, names any intentionally partial scope and leaves no false whole-unit completion badge.

## First implementation contract: five-digit numbers

Implemented entry `p3-learn.html?path=numbers`, with EN/Traditional Chinese, three existing learner slots, useful-first links to [P2 thousands](../p2-learn.html?path=thousands) and [P2 review](../p2-review.html?session=number). Keep P2 Continue independent. The new IDs below were collision-checked against the pre-release runtime:

| Proposed lesson | Teaching/practical task | Focused response/application |
| --- | --- | --- |
| `p3-tenthousand` | Exchange ten labelled 1000 units for one 10000 model; explain unchanged total | Distinguish digit from its ten-thousands value |
| `p3-readfive` | Five-column records including internal zeros; unseen oral reading and dictation | Repair a dropped-zero record; write the numeral |
| `p3-crossfive` | Count forward/back in ones and larger equal steps, including four/five-digit boundaries | Complete and explain a changed sequence |
| `p3-oddevenfive` | Pairing/ones link; challenge a leading-digit argument | Determine parity and explain the deciding place |
| `p3-comparefive` | Compare the highest differing place, including equality and near boundaries | Select symbols/order and justify a comparison |

Planned teaching pattern per lesson: concise explanation and controllable model → two guided examples → three Easy, three Normal and three Difficult practice items → practical prompt and separate notes. This inventory is implemented: 45 practice items and ten guided examples. Add a small ten-item topic check with different contexts from guided/practice; audit repetitions explicitly and preserve first attempts separately from supported retries. Do not call it a mastery certificate. Include a number-card investigation that preserves a prediction before testing and keeps evidence outside scores.

Reuse the style and sound interaction patterns of P2, but **do not load the P2 topic loader and change its global data in place**. Choose explicit grade configuration or isolated P3 modules. The current P2 renderer whitelists `maxAnswer` values 1000/9999 and otherwise falls back to 999; setting 99999 on a new data object alone would silently reject legitimate five-digit answers. Add bounded five-digit support in the P3 contract, with tests at 9999/10000/99999 and rejection of 100000. Keep lower-grade limits unchanged.

Use a separate versioned P3 guided record per learner and topic, and separate test keys. Never migrate bank scores into lesson completion, infer mastery from existing practice, or overwrite P1/P2 keys. Cover malformed/future/oversized records, unavailable storage, stale tabs, reload, language/learner changes, scoped reset and record size. Define numeric-answer normalisation deliberately (including full-width digits if supported); oral writing/dictation is separate evidence from numerical equivalence.

Inputs, label text, diagrams and phone layouts must support five places without crowding. A diagram's accessible description should convey the task without simply announcing the answer. Notes should record actual words/actions and help; paper drawings and adult transcription remain legitimate. Do not equate a rendered model with real manipulative experience.

## Acceptance and release checklist

- Trace every lesson, practice/check item and practical prompt to 3N1.1–3; audit numerical answers with an independent place-value/counting/comparison oracle and both language texts.
- Test blank/wrong/correct attempts, allowed numeric forms, malformed inputs, five-place bounds, stable IDs, first/retry distinction, targeted revisits and all route parameters.
- Compare check contexts with worked/guided/practice examples and the existing activity keys. Document remaining scaffolding rather than claiming novelty from a different ID.
- Test P3 storage isolation and preservation of P1/P2 lesson scores, cursors, observations, inquiries and existing P3 bank/Smart-practice records. Verify boundary learners and stale-tab/reset behaviour.
- Exercise keyboard input/focus, EN/Traditional Chinese, narrow and wide views, diagram labels, linked practical materials and independent Continue routes. Run appropriate shared regressions locally and publicly; report original failures and exact reruns without inflating distinct counts.
- Publish runtime and documentation, verify deployment and exact content readbacks, update README with the next unfinished topic. Test records use owned test keys and are restored; close only task-owned tabs/servers.
- Keep source/resource checks separate from pupil trials, independent translation, screen-reader listening, physical printing and observed practical skills. Those remain pending and inform subsequent revision, not a false claim that P3 has been fully validated.

## Verification of this planning release

The original planning evidence records objective/unit counts, source inventory, relative links and runtime preservation for that documentation-only checkpoint. The separate first-pathway release report now records implementation checks. Neither evidence file claims pupil results or teaching delivery. Historical test totals are not new execution results.

## Kilometre/millimetre implementation checkpoint — 22 November 2026

Five lessons implement 3M1.1–5 as guided materials: kilometre reference, compare km, millimetre intervals, measure mm, and suitable records/estimation. Real reference measurement precedes estimates of new specimens. The notebook preserves original estimates separately from later measurements and observations. Existing activity sheets supply actual strip and dot-pair work. Model-scale reading is not actual measurement evidence. Compound-to-single cm/mm conversion is included; reverse conversion and decimal notation are not required. No kilometre walk or scale-map calculation is required. See the [release report](p3-length-guided-release.md) for checks and remaining manual limits.

## Division implementation checkpoint — 22 November 2026

[Six division lessons](../p3-learn.html?path=division) implement guided materials for 3N3.1–3: value sharing; exchanges and zero quotient places; remainders/checks; left-to-right three-number division; context-sensitive leftovers; estimation after calculation. The interactive column shows place alignment, amounts removed and exchanges. Counter grouping contrasts two orders. Two-field answers retain roles, and all check tuples differ from worked/practice tuples. Notes, estimates and inquiry predictions stay separate from scores and earlier topics. See the [release report](p3-division-guided-release.md). Actual column work, practical actions and pupil understanding require observation. Next: fraction foundations for one object and one set, followed by model-based equivalence; keep this branch open independently of division results.

## Fraction-foundation checkpoint — 22 November 2026

[Five fraction-foundation lessons](../p3-learn.html?path=fractions) supply guided materials for **3N5.1–2 only**: equal quantities and named wholes, object fractions and vocabulary, outlined set fractions, zero/one, and equivalence through matching same-sized strip coverage. All lessons are open independently of division scores. Picture-count entries explicitly request numerator and denominator counts; equivalent amount feedback distinguishes that task contract from conceptual equivalence. Real folds, oral reading, writing and set handling require separate observations. A prediction-led investigation keeps the marked amount while partitioning further. No simplest-form or symbolic expansion/reduction algorithm is required. See [release evidence](p3-fractions-guided-evidence.json).

**Still unfinished:** 3N5.3 same-numerator/denominator comparisons and 3N5.4 pictured like-denominator addition/subtraction. Retain these in release-queue step 7. The next implementation step is the parallel-lines/quadrilateral branch in step 4; this is an authoring queue, not a compulsory pupil order.

## Parallel-line and quadrilateral checkpoint — 22 November 2026

[Six lessons](../p3-learn.html?path=quads) implement guided resources for **3S1.1–6**: recognise parallel lines beyond finite strokes; draw and separately make them; check both parallel opposite-side pairs and equal opposite lengths; include squares and rectangles as parallelograms; identify exactly one pair and bases for trapeziums; draw/make to explicit ANY versus NO-right-angle requests. The blank construction grid accepts four ordered vertices and gives unscored feedback, with square cells preserving angles. Separate practical notes record actual ruler/set-square work and physical models. Predict before changing a shape, retain the prediction, then record trials and a counterexample. Existing activity sheets remain available. [Release](p3-quads-guided-release.md) · [Evidence](p3-quads-guided-evidence.json).

**Next in step 4:** triangle concepts, overlapping names, side feasibility and drawing/making. This remains an authoring queue, not a compulsory pupil sequence. Fraction comparison and pictured operations stay unfinished until step 7. No classroom mastery or independent manual-validation claim is made.

## Triangle checkpoint — 22 November 2026

[Five triangle lessons](../p3-learn.html?path=triangles) provide guided resources for **3S2.1–4**. Equal-side properties precede right-angle checks; pupils retain every applicable name, including equilateral→isosceles and isosceles-right→both groups. Strict side sums reject equality and too-short combinations, and are applied before making. A blank length builder supports prediction/testing; actual drawing and making are separately observed. Existing bilingual activity sheets remain linked and unchanged. First answers, retries, observations and inquiry predictions are isolated from earlier topics. [Release](p3-triangles-guided-release.md) · [Evidence](p3-triangles-guided-evidence.json).

**Next in step 5:** capacity, following direct comparison → improvised units → standard units → real tools. Then weight. This is the authoring queue, not a compulsory pupil order. Mixed calculations and fraction comparisons/pictured operations remain explicitly unfinished until step 7; classroom and independent manual validation remain pending.

## Capacity checkpoint — 22 November 2026

[Six capacity lessons](../p3-learn.html?path=capacity) provide guided resources for **3M3.1–7**, from maximum contents and pairwise comparison through equal improvised units, L/mL, actual tool use and estimates/records. Full-to-empty transfer with no spill is distinguished from invalid trials. Equal cups and fill levels are required before counts can be compared. A new two-container notebook retains original estimates after measured results are added; actual technique needs separate observation. Existing activities and practice banks remain unchanged. [Release](p3-capacity-guided-release.md) · [Evidence](p3-capacity-guided-evidence.json).

**Next in step 5: weight**, then time and bar charts. Mixed calculations and fraction comparisons/pictured operations remain unfinished until step 7. This authoring queue is not a compulsory pupil sequence. Classroom and independent manual validation remain pending.

## Weight checkpoint — 22 November 2026

[Six weight lessons](../p3-learn.html?path=weight) provide guided resources for **3M5.1–7**. Handling and prediction precede a centred, freely moving, zero-checked equal-arm balance; equal-weight improvised units precede g/kg, actual scales and estimate-before-measure records. Side swapping preserves the object comparison, and invalid setup is distinguished from a valid result. The two-object notebook preserves original estimates, while technique and help require separate observation. Earlier capacity/length notebooks and activity sheets remain intact. [Release](p3-weight-guided-release.md) · [Evidence](p3-weight-guided-evidence.json).

**Next in step 6: Time (III)**, beginning with real experience of seconds and then starting/finishing/elapsed times. Time (IV) and bar charts follow. Mixed calculations and fraction comparisons/pictured operations remain unfinished until step 7. This is the authoring queue, not a compulsory pupil order. Classroom and independent manual validation remain pending.

## Time (III) checkpoint — 22 November 2026

[Six time lessons](../p3-learn.html?path=time) address **3M2.1–3**. One-second experience and actual timing precede forward finish, elapsed minutes, inverse start and whole-hour contexts. The original timing prediction/plan stays separate from actual readings and uncertainty. Clock problems are limited to whole minutes ≤60 or whole hours ≤12; actual practical seconds measurements have no fixed curricular maximum. No seconds word-problem arithmetic or 24-hour conversion is required. Existing P2 minutes and its measurement/time review are optional prerequisites. Earlier topics and practical notebooks remain intact. [Release](p3-time-guided-release.md) · [Evidence](p3-time-guided-evidence.json).

**Next in step 6: Time (IV)**, relating twelve-hour and twenty-four-hour notation with day context. Then bar charts. Mixed calculations and fraction comparisons/pictured operations remain unfinished until step 7. This is the authoring queue, not a compulsory pupil order. Classroom and independent manual validation remain pending.

## Time (IV) guided checkpoint · 22 November 2026

[Five 24-hour lessons](../p3-learn.html?path=clock24) cover **3M4.1–2**: day-part ambiguity, digit pairs, writing and reading both notations, noon and named-day endpoints. The same-day 00:00/24:00 distinction and adjacent-day equivalent midnight are explicit. HH:MM responses preserve leading zeros. Practical reading/writing and inquiry remain separate from sampled check answers. Earlier topics and records are preserved. [Release](p3-clock24-guided-release.md) · [Evidence](p3-clock24-guided-evidence.json).

**Next in step 6: bar charts.** Then step 7 mixed calculations and fraction comparison/pictured operations. This authoring queue is not a compulsory pupil sequence. Classroom and independent manual validation remain pending.

## Bar-chart guided checkpoint · 22 November 2026

[Six bar-chart lessons](../p3-learn.html?path=bars) cover **3D1.1–3**: pictogram bridge, chart features, scales 1/2/5, both orientations, comparisons, raw-response tallying and construction. Two blank builders use explicitly simulated tables with a choice of sample sizes. Equal widths and gaps, exact endpoints and zero-origin axes are built into the drawing tool; real collection, own labels and independent drawing need separate observation. Inquiry retains a first prediction and raw-response/tally/chart trials. Earlier topics and records are preserved. [Release](p3-bars-guided-release.md) · [Evidence](p3-bars-guided-evidence.json).

**Next in step 7: mixed calculations**, then fraction comparison and pictured operations. The authoring queue does not restrict pupil access. Classroom and independent manual validation remain pending.

## Mixed-calculation guided checkpoint · 22 November 2026

[Six lessons](../p3-learn.html?path=mixed) provide guided materials for **3N4.1–4**. Four-digit, three-number addition/subtraction includes exchanges across zero and all sign patterns. Brackets, including two separate pairs, precede multiplication before addition/subtraction with at most four numbers. All four supplied equalities are recognised with counted groups, without requiring symbolic expansion/factoring. More/fewer-than with altogether keeps the other amount and total in separate fields. Exact-method practice precedes unscored original estimates and reflections. Actual written columns, chosen expressions, counter handling and explanations require separate observations. Earlier topics and records are preserved. [Release](p3-mixed-guided-release.md) · [Evidence](p3-mixed-guided-evidence.json).

**Next in step 7: fraction comparison and pictured like-denominator addition/subtraction (3N5.3–4).** Integrated inquiry and a whole-P3 review remain later queue items. This authoring queue does not restrict pupil access; classroom and independent manual validation remain pending.

## Fraction comparison and operations checkpoint · 22 November 2026

[Five lessons](../p3-learn.html?path=fractionops) provide guided materials for **3N5.3–4**, completing the fraction sequence with the existing foundations. Comparisons have a shared denominator or numerator and same-sized whole diagrams. Pictured operations use two or three like-denominator fractions, pure addition or pure subtraction, with all intermediate amounts in [0,1]. Oral explanation precedes the model's written equation; the acknowledgement is self-report, not assessed observation. Letter/cross marks preserve meaning without colour. Equivalent written amounts are accepted in practical work; no simplest-form requirement or symbolic combined-numerator algorithm is introduced. The new namespace preserves older foundation records and strict picture-count questions. [Release](p3-fractionops-guided-release.md) · [Evidence](p3-fractionops-guided-evidence.json).

**Next: whole-P3 coverage, inquiry and readiness review.** Audit all objectives, fresh application, oral/practical evidence and the existing topic investigations before deciding further resources or starting P4. Earlier checkpoint next-step statements are historical. Classroom and independent manual validation remain pending.

## Whole-P3 review checkpoint · 22 November 2026

The [completed review](p3-coverage-review.md) maps all 54 numbered objectives to actual teaching/practical prompts. Fourteen routes contain 78 lessons, 702 practice tasks, 156 guided examples and 156 checks. There are fourteen integrated topic investigations plus two existing paper investigations; no new isolated inquiry course is required. Open learning branches remain appropriate. No pupil attainment or delivered-hours claim is made.

Eleven checks repeat earlier visible tasks after introductory labels are removed. Full payload equality alone misses these repeats. The [source evidence](p3-coverage-evidence.json) lists matches and method limits. Existing attempts and IDs are preserved.

**Next: implement the separate P3 application review before P4**, using the linked contract's 16 fresh screen tasks/eight sessions, nine practical stations and inquiry evidence review. Include a narrow bilingual sample-check wording clarification. This checkpoint supersedes all historical next-step statements above. Classroom and independent manual validation remain pending.
