# Original reasoning collection · 20 November 2026

This release implements all twelve candidates from the first web-research collection as optional MathQuiz enrichment. It contains **nine challenge structures, two existing-skill extensions and one teacher-reviewed discussion**. It adds **396 automatically marked bilingual tasks** (11 collections × 3 levels × 12) and **three discussion prompts** (one per level). Languages do not double the task count.

[Open the collection](https://kochiuyu.github.io/mathquiz/reasoning.html) · [繁體中文](https://kochiuyu.github.io/mathquiz/reasoning.html?lang=zh) · [Repeatable research workflow](question-research-workflow.md).

## Scope and discovery

The homepage, Find resources and practice directory link to the collection. Main-library search includes challenge titles, units and source names; its resource and source filters can isolate reasoning collections. The original **270 curriculum-linked + 30 TSA-informed practice types** remain separately counted. The 85 official units, 85 existing activities, mixed-quiz builder and Smart progression retain their previous records. These new challenges use a separate practice/paper/key page and do not yet join mixed quizzes or Smart progression.

Grades are teaching suggestions based on prerequisites, not source-provider year equivalence or official assessment levels. These are optional combinations and reasoning extensions, not additional EDB requirements. Unit links are navigation anchors; they are not claims that all extension demands appear in that unit's official objectives.

## Content and source map

| Candidate / route | Grade and prerequisites | Distinct task demand | Source idea |
| --- | --- | --- | --- |
| C001 `tower` | P1, 1N2; non-negative subtraction within 20 | Calculate linked differences; find every bounded missing value | [NRICH: Find the Difference](https://nrich.maths.org/problems/find-difference) |
| C002 `shapes` | P1, 1S2; plane-shape boundaries | Give different valid reasons; teacher judgement | [MLC: Shapes in My Neighborhood](https://mathathome.mathlearningcenter.org/activity/1538) |
| C003 `digits` | P2, 2N2 and place value | Construct the closest two-number sum; accept every tied optimum | [NRICH: Dicey Operations](https://nrich.maths.org/games/dicey-operations) |
| C004 `sort` | P2, 2N1 and prior odd/even knowledge | Classify by two properties, including the boundary case | [NRICH: Carroll Diagrams](https://nrich.maths.org/problems/carroll-diagrams) |
| C005 `clues` | P3, 3N4; add/subtract and distinct-number constraints | Recover an adjacent-sum chain; enumerate possible starts | [NRICH: Fifteen Cards](https://nrich.maths.org/problems/fifteen-cards) |
| C006 `whole` | P3, 3N5 | Identify the whole before naming/comparing fractions | [IM: Naming the Whole for a Fraction](https://tasks.illustrativemathematics.org/content-standards/3/NF/A/1/tasks/833) |
| C007 `garden` | P4, 4M1 perimeter and 4M2 area | Compare all integer rectangles with a fixed perimeter | [NRICH: Changing Areas, Changing Perimeters](https://nrich.maths.org/problems/changing-areas-changing-perimeters) |
| C008 `chain` | P4, 4N3 | Satisfy both factor/multiple links within a finite range | [NRICH: Factors and Multiples Game](https://nrich.maths.org/games/factors-and-multiples-game) |
| C009 `operations` | P5, 5N2 subtraction and 5N3 multiplication | Distinguish a fraction of current water from a fraction of capacity | [IM: To Multiply Or Not to Multiply, Variation 2](https://tasks.illustrativemathematics.org/content-standards/5/NF/A/tasks/2077) |
| C010 `cube` | P5, 5S2; optional spatial inference | Fold an original labelled net; infer opposite/adjacent faces | [NRICH: A Puzzling Cube](https://nrich.maths.org/problems/puzzling-cube) |
| C011 `mean` | P6, 6D1; existing-skill extension | Construct every permitted missing pair for a target mean | [NRICH: Hunting for Averages](https://nrich.maths.org/problems/hunting-averages) |
| C012 `match` | P6, 6N3; existing-skill extension | Match representations and diagnose a mismatch | [NRICH: Doughnut Percents](https://nrich.maths.org/problems/doughnut-percents) |

The research compared current catalogue labels and related formats; it is not an exhaustive novelty proof over every historical activity. “New” here denotes this collection's challenge structures, not newly invented mathematics or new official skills. Mean construction and representation matching are deliberately labelled extensions.

## Originality and rights approach

Sources were reviewed on 20 November 2026. MathQuiz independently wrote all prompts, Chinese text, numbers, solutions and SVG diagrams. No source text, worksheet, photograph or illustration is reproduced. Source links identify the mathematical inspiration, not endorsement. NRICH and MLC public access was not treated as permission to republish their materials; no exact IM content was reused. Recheck current terms when collecting future material.

## Teaching levels and marking

Easy supplies cues or candidate cases; Normal asks for independent application; Difficult adds completeness, constraints or explanation choices. Set selection offers four short sets of three or all twelve. The shapes collection has three discussion prompts, not 36 nominal variants, and never assigns an automatic score.

The digit-arrangement grader accepts all optimal arrangements and either order. Number-list answers accept any order but reject repeated numbers. Fraction answers accept equivalent rational forms. Blank responses cannot pass. Retry retains answers for editing; language changes retain session drafts. Written feedback remains available with optional existing sound effects. Printed pupil papers contain no answers; worked-key views include solutions. Long choice explanations use lettered options so their full text wraps on mobile.

## Verification record

Published runtime: [`ccd5f38`](https://github.com/kochiuyu/mathquiz/commit/ccd5f38f61ec0d27860062326f4fb64d3d68473c). All **105 collection cases were verified locally and publicly** (the final local run used one exact timeout rerun), and unchanged main UI checks passed **96/96 locally and publicly**. The public main UI runner retried one page-load timeout successfully. All 19 published-file hashes matched before this final documentation update. Home-link language and equal-tile fraction-diagram refinements were followed by local and public collection verification. The fresh-page runner avoids mixing cached older HTML with current assertions.

See [machine-readable release evidence](reasoning-release-evidence.json) for the final local/live runs and deployment identifiers. Independent checks cover all 399 task records, 1,032 answer fields, 11 mathematical answer models, tied digit arrangements and 3D folding of the displayed cube net. The browser suite has 105 distinct cases covering both languages and all topic/level routes, paper/key views, filtering, old totals and draft continuity.

The first local browser run exposed four narrow-screen choice overflows and two test-selector errors; these were corrected. A corrected full run and any navigation-timeout reruns are recorded explicitly. Existing resource/UI static gates are also run; a stale asset-version assertion was updated to the new release version.

Manual classroom calibration, independent translation, screen-reader use, cross-device listening and physical printing remain unverified. The collection does not certify pupil mastery. The recorded workflow makes these limits explicit for subsequent batches.
