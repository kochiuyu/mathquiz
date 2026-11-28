# P4 area: guided release

28 November 2026. [Open area](../p4-learn.html?path=area). [Evidence](p4-area-guided-evidence.json).

Eight English/Traditional Chinese lessons add **16 together tasks, 72 practice tasks and 16 sample checks**. P4 now contains **51 lessons across eight topics**. Question prompts use at most eight English words; dimensions, clues and required units stay with the task. The shared learner controls and short Learn → Try together → Practise route remain in use.

## Source and coverage

The release covers all **seven 4M2 objectives**. The [EDB explanatory notes, PDF pages 23–24](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=23), checked for this release, distinguish intuitive, direct and indirect comparison, improvised and standard units, measurement and formulas. The [existing area audit](p4-area-i.md) records the original assessment-bank boundaries.

| Lesson | Objective | Teaching | Practical evidence |
| --- | --- | --- | --- |
| See the covered surface | 1–2 | Surface versus boundary; clearly different same-scale areas | Touch a surface, trace its edge and compare real objects |
| Compare by overlapping | 3 | Strict containment, exact match and incomplete overlap | Move paper shapes without folding or resizing |
| Cover with equal tiles | 4 | Equal tiles, no gaps or overlaps; blank covering model | Select suitable equal tiles and cover a card |
| Compare through another shape | 4 | Link two area clues; retain genuinely unknown comparisons | Compare through a third physical shape |
| Build square units | 5 | 1 cm squares and 1 m squares; appropriate area units | Construct both references with a real ruler and adult support |
| Measure and estimate area | 6 | Count standard squares; regular/irregular same-unit comparisons | Familiar measurement followed by two new estimate/measurement records |
| Find square and rectangle areas | 7 | Equal rows, length × width, square cases and missing width | Measure and record three rectangles to explain the rule |
| Split and compare areas | 7 | L/U outlines, non-overlapping rectangles, area versus perimeter | Decompose paper shapes and record both measures with their units |

There are 29 selectable teaching examples. Models reveal one explanation or partition at a time. The tile workshop starts blank, supports adding/removing 18 equal tiles and is keyboard accessible. It resets on leaving and does not write measurement records, marks or badges.

All diagrams use mathematical coordinates. Paired and overlaid shapes share one scale; no resizing is used to justify an overlay comparison. Direct comparison requires complete containment or an exact match; partial overlap alone is not enough. Every improper tiling example has one specified defect, so its answer choices are unambiguous. Indirect conclusions were checked against every satisfying assignment in a bounded independent enumeration.

Standard grids label each cell as 1 cm² or 1 m². Screen pixels are never claimed to be physically calibrated. No cm²–m² conversion, triangle-area or circle-area formula is required. Composite polygons are formed from non-overlapping rectangles; seams have zero area. Inverse-side answers use cm, while area answers use cm². A pair of rectangles with equal perimeter and different area explicitly separates the two measures.

## Records and compatibility

The area topic uses its own namespace for each of the existing three pupils. First answers, one retry, cursor, practical observations and inquiry remain separate. Old P1–P4 records, assessment banks and the sixteen badge definitions/rules are preserved; area contributes through existing lesson/check criteria.

Two practical records start blank: a square/rectangle and an irregular paper shape. The pupil records a prior measured area, new target and estimate with its unit before entering the measuring method, result, comparison and optional help. Original references, targets and estimates are immutable; later result notes may be revised. These are bounded text self-reports, not verified tool use or automatically graded measurements. They are isolated from the perimeter notebook even when the record names match.

The inquiry asks pupils to make rectangles with a 24 cm boundary, predict their areas and test on grid paper. Original predictions/plans remain alongside later trials, explanations and changed examples. Adult observations and help records stay separate from quiz scores. Blank help fields do not certify independence.

[Physical activities](../activities/p4-area-i.html) remain available. A useful-first link returns to [perimeter](../p4-learn.html?path=perimeter). The sampled checks reuse the taught concepts and related figures; fresh transfer tasks belong in the whole-P4 application review.

## Verification

The first local/browser release checks are retained in the evidence. Final checks cover 878 core, 113 area interface, seven badge and 194 shared wording/navigation cases per environment. Public verification and deployments are pending.

The new core suite independently checks all 104 task answers with cell inclusion, a separate shoelace calculation, exposed-edge counting and logical assignment enumeration. It checks unique tile defects, exact rectangle partitions, hidden dimensions, shared scales, distinct units, storage protection, original estimates, isolated resets and badges. Generated sweeps count as aggregate gates, not additional pupil tasks.

Fifteen new static gates, eleven inherited badge gates and both inherited area suites passed. Before verification, content review removed an ambiguous overlap example that also left a gap and balanced grid comparisons across A-larger, B-larger and equal. The teaching selector was expanded so all four overlay and tile cases, both square-unit references and a notched decomposition can be demonstrated. Original run outcomes and any exact reruns remain in the evidence.

A late encoding check found question marks replacing four area comparison feedback lines and four inherited perimeter Chinese feedback lines. These exact lines were restored with UTF-8-safe file edits; new checks assert actual displayed Chinese and square-unit symbols. No earlier task prompts, answers or geometry changed. The square model now states “area = side × side” explicitly in both languages.

Phone previews of partial overlay and three-part notch decomposition were inspected. Classroom trials, independent content/translation review, screen-reader listening, actual printed scale and observed covering/measurement remain pending.

## Next

**P4 rhombuses and shape families**, followed by cut-and-build shapes and eight directions as separate releases. Follow the [P4 queue](p4-guided-learning-plan.md#delivery-queue), finish whole-P4 coverage/application review, then implement P5 and P6. General P1–P3 revisions remain deferred.
