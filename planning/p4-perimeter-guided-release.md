# P4 perimeter: guided release

28 November 2026. [Open the lessons](../p4-learn.html?path=perimeter). [Evidence](p4-perimeter-guided-evidence.json).

Six English/Traditional Chinese lessons provide 12 together tasks, 54 practice tasks and a separate 12-item sample check. P4 now contains **43 lessons across seven topics**. English question prompts contain at most 11 words; dimensions and required units appear with the diagrams and answer controls. Optional explanations remain collapsed.

## Scope and sources

This release covers **4M1.1–3**: boundary meaning, measuring/comparing perimeters, and square/rectangle rules including joined shapes and problems. See the [EDB explanatory notes, PDF pages 21–22](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=21), checked for this release; the [existing unit audit](p4-perimeter-i.md) retains the earlier assessment-bank scope. Estimation supports measurement; it is not a fourth numbered objective.

| Lesson | Teaching and practice | Practical evidence |
| --- | --- | --- |
| Trace the whole boundary | Whole outline, single edge, inside and open path; length units | Thread around a card, straightened and measured |
| Measure and compare | Supplied edge lengths; longer, shorter and equal perimeters | Familiar measurement followed by two new estimated/measured outlines |
| Find a square’s perimeter | Four equal edges, 4 × side, missing side | Measure and record three squares to explain the rule |
| Find a rectangle’s perimeter | Opposite edge pairs, 2 × (length + width), missing width | Measure three rectangles and explain the paired sides |
| Trace joined shapes | L-shaped unions, missing edges and exterior notches | Join real rectangles and exclude the internal seam |
| Solve perimeter stories | Full boundary, a gate needing no fence, two laps | Draw and explain a labelled garden and gate |

The models reveal one boundary edge and running total at a time. Question diagrams use an equal scale within a comparison; missing dimensions remain question marks. A notched outline demonstrates why its bounding rectangle can give the wrong perimeter. Screen sizes are not physical centimetres. No crossed, self-touching or holed outlines, circle formulae or area calculations are required.

## Records and learner controls

The separate perimeter namespace uses the existing three pupil slots. It preserves first answers and one retry, lesson position, adult observation notes and inquiry records. Existing P1–P4 records and practice banks are retained.

The measurement lesson has two initially blank records: a square/rectangle and an irregular outline. Pupils first record a previous actual measurement, identify the new target and keep an estimate with its unit. Only then can they enter the tool/method, measured result, comparison and optional help. The original estimate, reference and target cannot be rewritten by later results. Result notes can be revised. These bounded text fields are self-reports; the site neither verifies a physical measurement nor grades its accuracy.

The investigation uses 24 cm of string to make different rectangles. Original questions, predictions and plans are preserved before trial notes and explanations. Practical notes, self-reported lesson completion, estimates and inquiry do not certify mastery or earn quiz marks. Badges retain the existing 16 definitions and rules; perimeter contributes through the same lesson/check rules as earlier topics.

Measurement and formula discovery require paper, thread and a real ruler. Optional useful-first links lead to P3 lengths. [Activity sheets](../activities/p4-perimeter-i.html) remain available, including adult prompts. Area will be a separate release and will compare boundary with surface.

## Verification

**1,032 distinct local browser cases verified**: 746 core, 87 perimeter interface, seven badge and 192 shared wording/navigation cases. The final interface and shared runs each needed one successful exact navigation-timeout rerun. Public verification and deployment are pending.

The new core suite independently checks all 78 task answers using vertex distances and exposed unit-cell edges. It also checks model steps, hidden labels, same-scale comparison, measurement sequencing, immutable originals, separate retries, pupil/topic isolation, stale writes, malformed/future/oversized records, temporary storage and badge integration. Generated geometry checks are aggregate gates, not additional pupil tasks.

Twelve new static gates, eleven inherited badge gates and both inherited perimeter suites passed. The original comparison generator omitted an equal-perimeter choice: the coverage gate caught it, and the set was corrected to include A-longer, B-longer and equal cases. The first local interface run had one navigation timeout (English rectangle normal); final verification and exact reruns are recorded in the evidence. A phone visual check also caught overlapping notch labels; these were separated and a browser overlap assertion was added. No failed run is relabelled as a full-run pass.

The twelve sample checks assess the same concepts with related diagrams; they are not twelve independent practical-transfer tasks. Further fresh applications belong in the whole-P4 review.

Classroom trials, independent translation/content review, screen-reader listening, paper/print scale checks and observed tool use remain pending.

## Next

**P4 area**: covering and comparison before formulas, square units, real measurement records, compound rectangles and explicit perimeter/area contrasts. Follow the [P4 delivery queue](p4-guided-learning-plan.md#delivery-queue), complete P4 coverage and application review, then P5 and P6. General P1–P3 revisions remain deferred.
