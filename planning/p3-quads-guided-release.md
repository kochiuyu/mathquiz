# P3 parallel lines and quadrilaterals — guided release

22 November 2026. [Open the pathway](../p3-learn.html?path=quads). Baseline: `e06fd18cd2045504822e793094a4a272cfbadc5b`.

## Scope and sequence

The [EDB explanatory notes, PDF pages 64–65 / printed 58–59](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=64) were checked again. The six 3S1 objectives require parallel-line recognition and construction, parallelogram properties and square/rectangle inclusion, trapeziums, and drawing/making. Assessments state which property or construction restriction applies. The [existing bilingual practical sheets](../activities/p3-quadrilaterals-ii.html) remain unchanged and are linked from the pathway.

| Lesson | Digital teaching | Separate actual pupil evidence |
|---|---|---|
| Parallel lines | Extend short segments, contrast later intersection, turn a pair and inspect equal perpendicular gaps | Extend lines on paper, check multiple perpendicular gaps and explain |
| Draw and make parallels | Fixed guide and sliding set-square demonstration; procedural choices | Draw horizontal/sloping examples and separately fix straight strips or taut strings |
| Parallelogram properties | Inspect both opposite pairs, compare lengths, distinguish adjacent sides | Mark parallel pairs and measure/overlay opposite lengths |
| Inclusive names | Square, rectangle and non-right parallelogram cards, including rotation | Select every parallelogram and justify each card |
| Trapezium bases | Exactly one parallel pair, labelled bases retained under rotation | Draw different sizes/orientations and verify the other pair is not parallel |
| Draw and make quadrilaterals | Blank square-cell grid; add/undo/clear four boundary points; classify or revise invalid examples | Draw and separately make non-right parallelograms and trapeziums; explain ANY versus NO-right-angle requests |

Six lessons supply 54 practice tasks, twelve guided examples and twelve sample checks. All lessons are open, with optional P2 angles/perpendicular and shape-review links. This supplies guided resources, not proof that a pupil has met practical objectives. Trapeziums use exactly one pair; squares and rectangles remain parallelograms. No exclusive single-name answer is demanded. The grid gives positions, not calibrated centimetres. Labelled-length tasks explicitly state their diagrams are not to scale.

## Models, records and inquiry

Models are temporary and unscored. The builder begins empty, rejects duplicate points, and reports crossed/concave/straight-corner cases for revision into the simple convex examples used here. Square cells keep right-angle feedback consistent with the drawing. It distinguishes zero/one/two parallel pairs and counts right angles. Instrument demonstrations and model classification do not award practical competence.

First answers and one supported retry stay separate. Observation notes require actual task/date for observed statuses. The inquiry keeps the original prediction and plan before accepting later trials, a counterexample and explanations. Storage is isolated by topic and learner; damaged/future/oversized records are protected, stale tabs cannot overwrite, and unavailable storage is described as temporary. Earlier banks, IDs and scores are unchanged.

## Verification and repairs

Twelve static gates include independent direction and opposite-length checks for every task; SVG-coordinate inspection; fresh check data; exhaustive classification of 3,024 ordered distinct four-point arrangements on a 3×3 grid; square-cell geometry; six-topic/three-learner isolation; immutable records, damaged/stale storage and capacity. The focused browser suite exercises both languages, all tasks and models, blank/invalid entries, saved-state boundaries, mobile layouts and construction restrictions. Five inherited P3 suites are rerun separately.

The first static run found an incorrectly generated parallel-line check: the second line lost the first line's rise. Its endpoint was corrected. A renderer-coordinate test initially treated floating-point rounding as an exact parallelism failure; it now checks rendered pixel cross-products with a small tolerance while source geometry remains exact integer arithmetic. Inspection also found rectangular grid spacing that could distort diagonal angles; both cell dimensions were made equal and a new gate added. The first browser run passed 90/91, exposing English duplicate-point feedback on the zh-HK page. Locale-prefix handling was fixed, and the complete focused run then passed. A native keyboard check also led to retaining focus on Undo after the fourth corner, since Add becomes disabled; the focused suite checks that behaviour. Original failures and later navigation-timeout reruns remain in the evidence; reruns do not inflate distinct totals.

Final local/public results, native keyboard/mobile observations and deployed hashes are recorded in the [evidence](p3-quads-guided-evidence.json). Browser suites restore their owned test records and check unrelated storage.

## Remaining work

Classroom trials, independent translation, screen-reader listening, physical printing and observed drawing/making/tool handling remain pending. Nonvisual SVG descriptions provide reconstructable positions, but usability with actual pupils needs review. Next: P3 triangles, including overlapping names, side feasibility and separate construction evidence. Fraction comparison and pictured operations remain queued.
