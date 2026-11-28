# P4 rhombuses and shape families: guided release

28 November 2026. [Open lessons](../p4-learn.html?path=shapes). [Evidence](p4-shapes-guided-evidence.json).

Six English/Traditional Chinese lessons add **12 together tasks, 54 practice tasks and 12 sample checks**. P4 now has **57 lessons across nine topics**. Prompts use at most eight English words. Required geometry and answer controls remain visible; hints, optional writing and adult notes use the existing concise learner interface.

## Curriculum and teaching

The [EDB notes, PDF page 25](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=25), checked for this release, specify rhombus properties, drawing/making and relationships among quadrilaterals. The [earlier unit audit](p4-quadrilaterals-iii.md) and [physical activity sheets](../activities/p4-quadrilaterals-iii.html) remain available.

| Lesson | Objective | Teaching and response | Physical evidence |
| --- | --- | --- | --- |
| Spot a rhombus | 4S1.1 | Four equal sides, varied orientations, squares and non-examples | Ruler checks on actual paper shapes |
| Check its properties | 4S1.1 | Parallel opposite pairs, right-angle cases, turning | Check opposite sides with ruler/set square |
| Draw different rhombuses | 4S1.2 | Complete a fourth corner; blank seven-by-seven dot board | Draw on dot, grid and blank paper, varying size/shape |
| Make a rhombus | 4S1.2 | Four equal strips; hinged model includes flat non-example | Make actual strip, straw or string models |
| Choose every shape name | 4S1.3 | Independent checkboxes for all five applicable names | Sort and explain multiple names |
| Test a shape claim | 4S1.3 | True family relationships and genuine counterexamples | Draw and explain a counterexample |

Squares count as rectangles, rhombuses, parallelograms and quadrilaterals. Non-square rhombuses, non-square rectangles, other parallelograms and other quadrilaterals remain distinguishable. Every all-name question requires the complete set, without imposing an exclusive classification. A correct set may be selected in any order. False converse claims have exactly one valid counterexample among their two pictures.

Figures use exact integer coordinates and uniform scaling. Side labels are integer lengths; right-angle marks are calculated from perpendicular edges. Reflections, translations and quarter-turns preserve classifications. Screen drawings are schematic, not calibrated physical templates. No diagonal theorem, rhombus-area formula, protractor, degree measure or pupil-built Venn/tree diagram is required. Earlier trapezium conventions and assessment-bank payloads remain unchanged.

The blank drawing board checks four ordered corners, distinguishes equal from unequal sides, and rejects crossed, collinear, duplicate and incomplete outlines. Undo and restart are available, with keyboard focus retained. Its drawing resets on navigation and is explicitly temporary. The equal-strip model moves through non-square rhombuses and a square; a flattened line is excluded. Neither model awards marks or records physical construction.

## Records and limitations

The new topic uses the existing three pupil profiles and its own storage namespace. First answers and one supported retry remain separate. Checkbox selections in another question survive rerendering. Stale edits are blocked; malformed, future and oversized records remain protected. Reset requires confirmation and affects this pupil/topic only.

Physical drawing and making have separate lesson observation records. Both start unobserved, require actual evidence, and remain separate from screen scores. The inquiry preserves an original question, prediction and plan before trials with equal strips. Later contradictory evidence never replaces the original prediction. Blank help fields do not establish independence.

The sample checks repeat taught concepts and related figures; they do not constitute a fresh whole-P4 transfer review. Classroom trials, independent translation/content review, screen-reader listening and observed physical construction remain pending.

## Verification

Local verification is recorded in the evidence. Public verification and deployment are pending.

The core suite checks all 78 answers using separate edge calculations and tests the family implications over an independent bounded lattice enumeration. It covers every complete name set, rejected inputs, construction choices, transformed figures, storage protection, separate practical records and badges. Generated sweeps count as aggregate checks, not additional pupil tasks. Browser cases cover both languages, stages, all teaching examples and label bounds, actual checkboxes, retries, drawing/strip controls, observations, inquiry, reset and the eight earlier P4 routes.

Fifteen new static gates and eleven badge gates passed. Both inherited quadrilateral suites passed after correcting a stale homepage script-version expectation: the unchanged baseline failed the same old assertion, while the homepage already used the verified examples release. The correction retains exact version checking and does not change any old assessment content. An initial browser harness omitted the new core script because the inherited HTML had no closing body tag; explicit inclusion was added and all nine suites were then checked in the browser.

The prerequisite link was corrected to the existing P3 quadrilateral route after a late link audit. A dedicated browser case opens that destination and checks its topic and heading. Its first assertion incorrectly expected an uppercase heading; the corrected test passed.

## Next

**P4 cut-and-build shapes**, then eight directions. Follow the [P4 delivery queue](p4-guided-learning-plan.md#delivery-queue), finish whole-P4 coverage/application review, then implement P5 and P6. General P1–P3 revisions remain deferred.
