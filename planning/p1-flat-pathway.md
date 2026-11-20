# P1 teaching pathway: explore 2-D shapes

20 November 2026. Twelfth student pathway; original English and Traditional Chinese teaching.

[Start Explore 2-D shapes](https://kochiuyu.github.io/mathquiz/learn.html?path=flat) · [Evidence](p1-flat-evidence.json)

## Scope

The [EDB Key Stage 1 explanatory notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=21), printed pages 15–16, describe 1S2. It includes points, straight lines and curves; drawing/making lines; recognising, drawing and making triangles, quadrilaterals, pentagons, hexagons and circles; and composing shapes. Dot size and ink thickness are distinguished from mathematical points and lines. Turning preserves type. Simple indented shapes are allowed without teaching formal concave/convex vocabulary.

This release teaches recognition and interpretation digitally and links the existing practical packet for drawing, making and free composition. It does not claim that answering online demonstrates those physical actions. No equal-side requirement, angle measurement, regular-polygon terminology, perimeter or area calculation is imposed. All teaching, diagrams and questions are original; curriculum references set the scope rather than supplying copied exercises.

## Lessons

| Lesson | Teaching | Easy → Normal → Difficult |
|---|---|---|
| Points and lines / 點和線 | Marks represent locations; straight versus curved; one straight line through two fixed points and different curves. | Classify a line; count marked locations and distinguish numbered lines; reject size/thickness/orientation misconceptions. |
| Name flat shapes / 認識平面圖形 | Trace closed boundaries; recognise the five types; count each straight side once. | Name shapes; count sides, including zero straight sides for circles; recognise indented, turned and unequal-sided examples. |
| Put shapes together / 拼合圖形 | Pieces meet without gaps or overlap; distinguish internal joins and outside boundaries; try a design with real pieces. | Name the combined outline; distinguish piece count from outside-side count; ignore internal joins and reject “two triangles always make a quadrilateral.” |

Three teaching steps, two guided items and nine levelled practice items per lesson give **27 new practice items**. Totals become **12 pathways, 36 lessons and 324 levelled practice items**. A separate six-question check samples two generated questions per lesson. Retakes use three overlapping deterministic configurations; they are not independent assessments. Practice can finish after correction. The 5/6 recommendation is provisional, not calibrated mastery.

## Figures and practical continuation

Original SVGs use semantic accessible descriptions, numbered alternatives, visible outlines and supplementary colour. Eight simple figure models include a narrow triangle and indented pentagon/hexagon. Six composition configurations use two pieces each; the union is a triangle, quadrilateral, pentagon or hexagon. Colour never determines the answer. Each union is checked mathematically for matching area and boundary, with internal edges removed and straight boundary sections merged. These calculations are developer verification, not pupil requirements.

Alternative descriptions necessarily provide information that a sighted pupil obtains from the drawing; independent screen-reader listening remains pending. Drawn dots and strokes are visual representations, not assertions that mathematical points have size or lines have breadth.

The collapsed practical section opens [P1 2-D shapes](../activities/p1-2d-shapes.html) in the selected language. It supports drawing, making with materials, and freely arranging pieces with adult observation. The key is hidden initially. No digital award claims that these practical actions were observed.

The preceding 3-D shape path now leads to this one. The final successful check opens existing `triangle1` Smart practice; that old bank skill is triangle recognition only, not a substitute for this whole pathway. Adult resources and the separate catalogue counts are unchanged.

## Compatibility

Path `flat`; lesson IDs `pointlines`, `flatnames`, `joinshapes`; separate `checks.flat` and path cursor. Earlier question IDs and complete payloads are hashed against the solid-shape release. Three pupil slots retain version-1 browser-local storage. No tracking cookies, account or cross-device synchronisation are introduced.

The schema-based storage cap is 70,912 characters. The full three-pupil fixture is 39,796 characters. Tests cover near-limit and malformed storage, preserving zero/100 answers, language switching, reset isolation, unavailable storage and all older check results. Reading/probing an unreadable record does not overwrite it.

## Verification

All **173 local browser cases are verified**: 172 passed in the final full run; one timeout case passed its exact rerun. Fourteen static gates passed. Public verification is pending.

Fourteen static gates cover existing pathways, new content, storage, resource routes and shared UI boundaries. The new gate checks 216 generated answers, all 27 practice answers, twelve check attempts, polygon validity and six exact composition unions. The three check rotations collectively cover all five flat-shape types. The browser suite contains **173 cases**, retaining all 158 earlier cases and adding 15 for bilingual completion, wrong/blank answers, retakes, four widths, mobile actions, saved continuation, denied storage, diagrams and the practical link. Exact failures and reruns are recorded. The development run found a test that rejected valid short Chinese descriptions; its excessive length threshold was corrected. Check sampling was expanded before the final full run, and an explicit five-type coverage assertion was added.

The broader 267-case shared UI/activity browser suite is not repeated. Pupil calibration, independent translation review, screen-reader listening, physical printing and actual drawing/making observations remain pending. This is partial P1 teaching coverage, not full curriculum completion.

## Next phase and workflow

Next unfinished phase: **P1 relative positions (1S3)**, then inquiry (1F1). Use simple observer-viewpoint examples and verify the official scope before authoring.

Repeatable process: verify scope; author original bilingual teaching and figures; independently check answers and geometry; preserve old IDs and records; test both languages, mobile actions, storage failures and activity routes; inspect representative visuals; publish against the expected branch head; compare deployed hashes; document exact outcomes and outstanding human checks.
