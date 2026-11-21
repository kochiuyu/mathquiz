# P2 guided squares and rectangles · 2S4

Runtime published 21 November 2026; local/public verification completed 22 November 2026 (Hong Kong).

[Open the topic](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=quads) · [Evidence](p2-quads-guided-evidence.json) · [Plan](p2-guided-learning-plan.md) · [Existing resources](p2-quadrilaterals-i.md).

## Scope and sequence

Checked against [EDB KS1 notes, printed pages 39–40 / PDF pages 45–46](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=45). The four objectives cover line segments, quadrilaterals, square/rectangle properties, and drawing/making these shapes. The shortest connection between two fixed points is a segment. Adjacent and opposite sides precede property checks. All four right angles and the relevant side equalities must be checked.

The shapes route is real solids → outlines and faces → angles and perpendiculars → square/rectangle properties. The angles map links directly to this topic; the new map links back for revision. This is an open branch, without an arithmetic entry requirement. Generic number prerequisites were removed from the angle and quadrilateral maps. A native expandable topic chooser starts closed so lesson headings remain near the top on phones; all thirteen topic links remain available.

Following the EDB teaching boundary, rectangle examples have unequal adjacent sides. No task forces a mutually exclusive square-versus-rectangle choice or claims that a square fails the rectangle criteria. The inclusion relationship is deferred to P4. No later quadrilateral names, parallel-line classification, diagonals, perimeter or area are introduced.

## Six lessons

| Lesson | Teaching and practical evidence |
| --- | --- |
| Line segments join two points | Compare straight, bent and curved connections sharing P/Q; use non-stretch string and draw segments in different directions. |
| Four sides: adjacent and opposite | Close four connected segments, including an indented example; find neighbouring/opposite sides in labelled, rotated outlines. |
| Check square properties | Four equal sides AND four right angles; tilted examples, unequal-side and equal-side/non-right-angle counterexamples. |
| Check rectangle properties | Both opposite pairs equal AND all corners right; non-square rectangles and pushed models with equal opposite sides but incorrect angles. |
| Draw with a ruler and set square | Base → perpendicular sides of equal height → closing segment and full tool check; draw two sizes of each on grid/dot/blank paper. |
| Make, test and repair shapes | Make two sizes of each, predict a deformation, push joints while preserving strip lengths, check, repair and retain the model. |

Adds 18 teaching steps, 12 guided tasks, 54 practice tasks and a separate 12-item sample check. P2 now has **13 topics, 73 lessons and 657 practice tasks**. Earlier data, the 121-item multiplication workshop and original question banks are unchanged.

## Geometry, models and assessment

Original SVGs vary orientation, side length and corner openings. Independent tests recover vectors from actual rendered line endpoints to check side equality and right-angle conditions. Side-pair answers are independently derived from shared corner labels. The line-segment renderer permutes route labels across straight/bent/curved connections. Construction diagrams show a six-by-three grid-step rectangle, not calibrated centimetres.

Keyboard-operable strip models can push joints, restore right angles, rotate, resize, inspect properties and reset. Pushing preserves all strip lengths. Rotation preserves lengths and angles; resizing preserves shape proportions. Model actions award no marks and reset on leaving, as disclosed on the page. Focus returns to the control after redrawing. Notes persist separately.

Practice diagrams have neutral accessible labels and no equality/right-angle markings that reveal answers. These labels alone do not make visual geometry accessible without sight. Tactile models, real tools or adult-supported alternatives remain necessary; screen-reader listening and independent accessibility review remain pending.

Screen choices assess recognition and reasoning about properties and procedures. They cannot demonstrate actual drawing, making or tool handling. Every lesson links the existing [practical activity](../activities/p2-quadrilaterals-i.html). Retain drawings, models, explanations and adult observations separately from marks; record any help. A repeated sample check uses the same questions and is not a course certificate.

## Saved progress

The topic uses a separate `mathquiz-p2-quads-v1` record for each learner. Sixteen earlier data/support files are frozen by hashes, including all twelve previous topic data files, the shared store, metre notebook and division/angle visuals. Existing answer limits and marking behaviour remain unchanged. Topic reset preserves other topics and learners. Tests cover full long-note records, stale saves, future-format protection and blocked storage.

## Verification

All **1,648 distinct local and public browser cases verified** on the final implementation. The final local run had 2 successful exact timeout reruns; the public run had 3. Initial failures are retained: a Chinese feedback test incorrectly assumed English text length, and nineteen phone heading checks exposed the expanded topic navigation. The feedback assertion now checks meaning; the topic chooser starts collapsed with native keyboard expansion. The complete suite was rerun after the shared navigation repair. All **32 static suites passed**, including nine new quadrilateral gates. All **22 changed runtime/test files** matched deployed SHA-256 hashes. Runtime commit `b734709124191f7eb7839f48bbed285b19e6ab95`; [successful deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44921328821).

Author checks at 320px used native Enter to restore/check a square, confirmed focus and property feedback, and visually inspected the Chinese construction diagram. No horizontal overflow was observed. These are author checks, not independent pupil or accessibility evidence.

## Next step and pending validation

Next: **Time (II), 2M2**. Begin with reading minutes and experiencing/measuring time; keep the ten-objective unit staged if needed. Compass directions and integrated inquiry remain planned. Classroom trials, observed real drawing/making/tool use, independent translation, physical printing and screen-reader review remain pending.
