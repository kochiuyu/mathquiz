# P2 Quadrilaterals (I) · 2S4

**Integrated local candidate.** Source and finite mathematics/geometry independently reviewed. Live browser verification and publication pending; no unit-completion, pupil-mastery or delivered-inquiry-hours claim.

## Exact official scope

Checked 16 November 2026: [EDB supplement PDF 39–40, printed 36–37](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=39); [KS1 notes PDF 45–46, printed 39–40](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=45).

Four objectives: line segments; quadrilaterals; square/rectangle concepts and basic properties; drawing and making them. A segment is the shortest connection between two given points; “endpoint” terminology is not required. Quadrilateral sides are connected segments, with adjacent/opposite-side concepts. Square properties: four right angles and four equal sides. Rectangle properties: four right angles and equal opposite sides.

**Avoid using squares as examples to teach rectangle properties. Inclusion is deferred to 4S1.** This is a teaching boundary, not a false assertion that squares fail the rectangle criteria. No mutually exclusive square-versus-rectangle choice items. No later quadrilateral classification, diagonals, area or perimeter introduced.

## Activity evidence

[English](../activities/p2-quadrilaterals-i.html?lang=en) · [Chinese](../activities/p2-quadrilaterals-i.html?lang=zh) · [English key](../activities/p2-quadrilaterals-i.html?lang=en&key=1) · [Chinese key](../activities/p2-quadrilaterals-i.html?lang=zh&key=1)

| Objective | Actual task and observable evidence |
|---|---|
| 1 · line segments | Task 1 fits non-stretch string along straight/bent/curved connections sharing points, straightens to compare, draws another curve and identifies the segment as shortest. No formal proof required. |
| 2 · quadrilateral sides | Task 2 makes a flat non-crossing four-strip figure and identifies four segment sides; on labelled ABCD identifies AB opposite CD and adjacent to BC/DA, then rotates. |
| 3 · square properties | Task 3 checks rotated S with ruler/paper-strip and set square: all sides equal, all corners right. |
| 3 · rectangle properties | Task 4 checks non-square R: four right angles and opposite equal pairs. T has equal opposite sides but non-right angles; reject based on failed property without naming a later class. |
| 4 · draw AND make | Task 5 draws two sizes of each type; task 6 makes two sizes of each using actual materials. Both require ruler/set-square checks and retained evidence. Rectangle examples have unequal adjacent lengths. |
| Reasoning/repair | Tasks 6–7 deform models while preserving side lengths, identify lost right-angle condition and repair; explain rotation/enlargement invariance without a formal transformation lesson. |

Three pupil sheets and two hidden teacher sheets per language. Provide non-stretch string, safe strips/straws, tape, ruler/set square, grid/dot/plain paper; adults handle cutting. Diagrams scale, so no fixed centimetre answer. Record independent/prompted/not-yet/not-observed and actual tool use, words, drawings and models separately. Assistance is not independent evidence. Visual/tactile accessibility and print usability still require verification.

## Proposed screen evidence

External `mathquiz-2s4-families.js` / `.test.js` propose `quadproperties2a`, 24 one-mark yes/no items checking explicitly stated properties, not exclusive category names. First 12 test four equal sides plus right angles; last 12 test opposite equal pairs plus right angles and never use squares. Nonexamples include unequal-side right-angle figures and equal-side non-right-angle figures. Rotations vary, no right-angle/equality symbols leak answers.

New figure kind `quadrilateralProperties2` needs exported `quadrilateralSvg2` adapter before registration. Metadata `quadrilateral2S4` supplies kind, bilingual hints and `toolEvidenceRequiredOffline:true`. Paper can support actual ruler/set-square checks, but a digital yes/no cannot prove measurement, drawing or making. Integrator must verify all renderer, hint, pupil/practice/paper/code/PDF paths and keep released payloads unchanged.

Tests recover vectors from rounded rendered polygon coordinates and check right angles, side equalities, convexity and viewport bounds for all 24. They verify no square occurs in rectangle group. Static HTML/script checks pass. Independent source/math/translation review and browser/mobile/print checks remain pending. No global edits/publication.

## Integrated candidate checkpoint · 16 November 2026

The design/proposal sections above retain the original audit history. The reviewed later-P2 activities are now registered locally, and eight new digital families are integrated where appropriate. Existing pictogram tasks remain unchanged; inquiry is teacher-mediated, not a new automated attainment score.

The zero-dependency static gates pass 97 permanent families / 1,641 variants and all 112 new arithmetic/geometry cases. All 1,529 previously released payloads are preserved. The suite contains 298 authored browser checks, **not a passed live result**. Shared routes, partial scoring, labelled keys, visual practice, bilingual PDF exports and phone layouts await deployed verification.

Classroom observations, independent translation certification, teacher print-preview pagination/key isolation, physical printing, screen-reader testing and manual downloaded-PDF visual inspection remain unperformed. Resource completeness does not certify practical performance, pupil mastery or delivery of the full allocated inquiry time.

## Cross-engine payload hotfix candidate

Live3cf13d8 passed297 checks but failed the quadrilateral immutable-payload digest. Node reproduced the original expected digest. Raw trigonometric coordinates are implementation-dependent in their last bits. The proposed fix stores the exact released canonical coordinate numbers and returns fresh copies, preserving all24 canonical payloads, their original digest and every three-decimal SVG. Independent geometry and mutation checks pass; the browser suite adds a deterministic-coordinate check (299 authored). This is a runtime determinism repair, not a changed mathematical item or an updated fixture. Live rerun is required; this unit remains pending.
