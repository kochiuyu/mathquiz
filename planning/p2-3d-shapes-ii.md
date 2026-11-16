# P2 3-D shapes (II) · 2S1

**Integrated local candidate.** Source and finite mathematics/geometry independently reviewed. Live browser verification and publication pending; no unit-completion, pupil-mastery or delivered-inquiry-hours claim.

## Exact source scope

Checked 16 November 2026: [EDB supplement PDF 37, printed 34](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=37) and [KS1 notes PDF 41, printed 35](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=41).

Two objectives: recognise faces of solids, and recognise names of different prisms/pyramids. The new structure is bases and lateral faces of prisms/pyramids; bases and curved surfaces of cylinders/cones; the sphere's curved surface. Names derive from bases. Notes suggest hands-on outlining and avoid oblique examples. Vocabulary includes triangular, quadrilateral, pentagonal and hexagonal prisms/pyramids.

**Cubes and cuboids are explicitly deferred to 5S2.** This release must not import those labels as a required subdivision of quadrilateral prisms. Formal edge/vertex counts, nets, Euler relations, volume and surface area are not objectives here. Rectangle/square lateral faces may be recognised intuitively or described as quadrilaterals; their formal properties belong to 2S4. P1 broad solid-family recognition alone is insufficient evidence for these new objectives.

## Activity map

[English pupils](../activities/p2-3d-shapes-ii.html?lang=en) · [Chinese pupils](../activities/p2-3d-shapes-ii.html?lang=zh) · [English key](../activities/p2-3d-shapes-ii.html?lang=en&key=1) · [Chinese key](../activities/p2-3d-shapes-ii.html?lang=zh&key=1)

| Source requirement | Genuine pupil action/evidence |
|---|---|
| Objective 1: face concepts | Task 1 touches, traces and matches base/lateral-face outlines on real prism/pyramid models. |
| Bases/lateral faces and orientation | Task 2 identifies a prism's matching pair of bases and lateral faces, then a pyramid's base and triangular lateral faces; rotates models without redefining “base” as the face on the table. |
| Cylinder/cone/sphere surfaces | Task 3 points to bases and curved surfaces; traces circular flat bases where they exist, identifies no flat base on a sphere. Rolling alone is not enough. |
| Objective 2: different names by base | Task 4 identifies and traces the base, counts its sides, then says/writes all eight names for 3–6-sided bases. |
| Classification and transfer | Task 5 pairs by base shape, separates prism/pyramid, compares surfaces and reclassifies after rotation. Different-looking quadrilateral prisms retain the source-appropriate name. |
| Explanation and misconception evidence | Task 6 uses an actual rotated model against “table face must be base” and a pentagonal pyramid against “all pyramids are triangular because side faces are triangles.” |

Provide right, non-oblique models for all eight names, plus a cylinder/cone/sphere and a second quadrilateral prism. Models may rotate between groups. Provide removable labels for task 2. Safe, full models with traceable faces are preferable to incomplete packaging. A valid consistently selected base pair is acceptable where a prism permits alternatives; marking a pair can avoid ambiguity. No pupil construction of nets or models required.

Teacher script and observable rubric separate identification, tracing/matching, oral/written names and explanation. Record independent/prompted/not-yet/not-observed and actual words/actions. Stabilisation or transcription assistance must be recorded, not mistaken for independent performance. Three pupil sheets plus two hidden teacher sheets per language.

## External digital proposal

`mathquiz-2s1-families.js` / `.test.js` propose `solidbasename2a`, 16 variants covering eight names twice with rotated **flat base outlines**. The prompt explicitly supplies prism versus pyramid and states the outline is not the full solid. It assesses naming from the base, not independent 3-D recognition or physical face location. All options name the same supplied family but different base polygons; one mark, four equally distributed correct-option positions.

New figure kind `baseOutline2` needs an adapter using exported `baseOutlineSvg2`; do not register the family before the renderer exists. Figure has a code-native convex polygon with 3–6 vertices and no answer-revealing text label. Accessible equivalent assessment remains manual: the SVG description identifies an outline but does not encode a counted answer. Metadata `solid2S1` includes kind, baseSides, bilingual practice hint and `realFaceIdentificationRequiredOffline:true`. Integrator must wire hints, labels, pupil/practice/paper/code/PDF paths and check bilingual printing; no existing payloads changed.

Tests verify all 16 answer-name pairs, four unique options, eight types each appearing twice, balanced answer positions, bilingual metadata, convex polygon vertex counts and viewport bounds. Static HTML checks cover hidden keys/language, unique IDs and syntax. Browser geometry, mobile/print pagination, accessibility and independent translation review remain pending. No completion claim.

## Integrated candidate checkpoint · 16 November 2026

The design/proposal sections above retain the original audit history. The reviewed later-P2 activities are now registered locally, and eight new digital families are integrated where appropriate. Existing pictogram tasks remain unchanged; inquiry is teacher-mediated, not a new automated attainment score.

The zero-dependency static gates pass 97 permanent families / 1,641 variants and all 112 new arithmetic/geometry cases. All 1,529 previously released payloads are preserved. The suite contains 298 authored browser checks, **not a passed live result**. Shared routes, partial scoring, labelled keys, visual practice, bilingual PDF exports and phone layouts await deployed verification.

Classroom observations, independent translation certification, teacher print-preview pagination/key isolation, physical printing, screen-reader testing and manual downloaded-PDF visual inspection remain unperformed. Resource completeness does not certify practical performance, pupil mastery or delivery of the full allocated inquiry time.
