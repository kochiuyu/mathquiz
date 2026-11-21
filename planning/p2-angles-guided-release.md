# P2 guided angles and perpendicular lines · 2S2

21 November 2026. Published and verified locally and publicly.

[Open the topic](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=angles) · [Evidence](p2-angles-guided-evidence.json) · [Plan](p2-guided-learning-plan.md) · [Existing unit resources](p2-angles.md).

## Scope and order

Checked against [EDB KS1 notes, printed pages 36–37 / PDF pages 42–43](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=42). The six objectives concern angle concepts, comparison, right angles and perpendicular lines, making/drawing perpendiculars, acute/obtuse angles and making/drawing different angle sizes. Side length does not determine opening. Construction includes a point on a line and a point off it; the perpendicular length defines the shortest distance to the line.

The shapes branch links P1 points/straight lines and P2 faces/bases to angles. Square/rectangle properties follow this topic. Arithmetic is not an entry requirement. Pupil pages do not display degree measurements or teach protractor use or later angle categories.

## Six lessons

| Lesson | Guided experience and practical evidence |
| --- | --- |
| An angle is an opening | Move joined strips; change opening independently of rotation and side length; make and draw two sizes. |
| Compare openings, not side lengths | Trace and align common points and one side; compare unequal and equal openings with different arm lengths and orientations. |
| Check a right angle | Align a set-square corner and one edge; check upright and tilted examples and real objects. |
| Make acute, right and obtuse angles | Compare against a right-angle reference; fold or join strips, draw and check each kind. |
| Make and draw perpendicular lines | Check intersections, fold perpendicular creases and draw through supplied on-line and off-line points using a ruler/set square. |
| The shortest connection to a line | Compare perpendicular and sloping connections on both sides; identify the point-to-line distance, including turned drawings. |

Adds 18 teaching steps, 12 guided tasks, 54 practice tasks and a 12-question sample check. P2 now has **12 guided topics, 67 lessons and 603 practice tasks**. Earlier topic data, the 121-item multiplication workshop and original practice banks are unchanged.

## Models and assessment limits

The opening model has keyboard-operable controls for opening, closing, rotating, changing drawn side length, showing a right-angle reference and resetting to its initial configuration. Comparison models can align and separate A/B; solid/dashed lines distinguish them without relying only on colour. These demonstrations reset on leaving, award no marks and disclose that behaviour. Notes persist separately.

SVG diagrams are original code-generated geometry. Independent tests recover arm vectors from the actual rendered endpoints and compare their dot products, rather than trusting the answer field. Distance tests recover the rendered connections and compare their lengths. Teaching diagrams show references; classification questions have neutral accessible labels and no right-angle marker revealing the answer. Neutral labels alone do not make visual classification independently accessible; tactile or adult-supported alternatives remain necessary for pupils who cannot inspect diagrams.

The automated tasks assess recognition, comparison and reasoning about diagrams. They **do not assess actual making or drawing**. Each lesson links the existing [practical activity](../activities/p2-angles.html), including on/off-line constructions, real overlay and shortest-distance exploration. Adult observations, written explanations and retained models/drawings stay separate from quiz marks. Repeating the sample check reuses its questions; it is not a course certificate.

## Saved progress

The new `mathquiz-p2-angles-v1` record is separate for each learner. Eleven earlier topic data files, the shared store, metre notebook and division visuals are frozen by hash. Topic reset preserves other topics and learners. Full records with long explanations/notes, stale updates, future-format protection and blocked storage are checked. The shared answer limits and earlier marking behaviour are unchanged.

## Verification

All **1,543 distinct local and public browser cases verified**. The full local run had 1 successful exact timeout reruns; the public run had 8. Original failures and reruns are retained in the evidence. After clarifying the physical folding instruction to overlap two distinct marked points, all 105 angle cases were verified again on the final text, including one successful exact timeout rerun. All **31 static suites passed**, including eight angle gates. All **21 changed runtime/test files** matched deployed SHA-256 hashes. Runtime commit `910485255130de7ee893097740556aa499a1d4b7`; [successful deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44917243149).

Manual checks at 320px confirmed no horizontal overflow and a lesson heading at 378.15px. Native opening/rotation/length controls changed the intended geometry only; Enter aligned an equal pair and kept focus on its overlay button. Chinese off-line construction diagrams were visually inspected. These author checks do not replace screen-reader listening or independent accessibility review.

## Next step and outstanding validation

Next: **square and rectangle properties (2S4)**, building on the new angle and perpendicular work. Time, compass directions and integrated inquiry remain planned. Classroom trials, observed tool handling/drawing, independent translation, physical printing and screen-reader review remain pending.
