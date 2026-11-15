# P1 flat-shapes family · item brief

Status: **live**. Nine `triangle1` variants are available in the P1 builder, pupil quiz, paper, worked key and [three-question practice](https://kochiuyu.github.io/mathquiz/?lang=en&p=1&view=practice&skill=triangle1). Classroom checking remains deferred at the user's request.

## Curriculum match

- **Year and unit:** Primary 1, 1S2 “2-D shapes”. The [2017 EDB supplement, objective 3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=21) asks pupils to recognise the basic concepts of triangles, quadrilaterals, pentagons, hexagons and circles. Objective 1 covers intuitive recognition of straight lines and curves; use that as a prerequisite, not as a claim that this item assesses the whole objective.
- The [2018 EDB explanatory notes, pages 15–16](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=21) say pupils may identify a 2-D shape by counting sides, should work with simple shapes, and should know its type stays the same when its orientation changes. The first family therefore tests triangle recognition across orientations.
- **Scope limit:** Selecting a pictured triangle checks part of objective 3. It does not assess drawing or making shapes (objectives 4–5), all five listed shape types, formal angle or side-length classification, or 3-D shapes. The source match is not EDB endorsement or evidence of pupil mastery.

## Released item

| Element | English | 繁體中文 |
|---|---|---|
| Pupil prompt | Which shape is a triangle? Choose one. | 哪個圖形是三角形？請選一個。 |
| After a wrong first try | Count the straight sides of each closed shape. A triangle has three; turning it does not change that. | 數一數每個封閉圖形的直邊。三角形有三條直邊；轉了方向仍是三角形。 |
| Worked feedback for example B | B has three straight sides joined to make a closed shape. Its tilted position does not change that. | B由三條直邊連成封閉圖形。它雖然傾斜，仍是三角形。 |

Show three separate, equally sized outline drawings labelled A, B and C. Exactly one is a simple closed triangle. Draw the other two from a four-sided shape and a circle or another unmistakably curved outline. All outlines use the same stroke, fill and visual weight; do not signal the answer with colour, size or position. A rotated square or quadrilateral is a useful straight-sided distractor. Keep corners visible and lines clean at phone and print sizes. Do not use open outlines, self-intersections, overlapping shapes or a nearly straight curve.

**Released variants:** Permanent IDs `triangle1-0` through `triangle1-8` use triangle rotations of 25°, 90°, 155°, 0°, 45°, 115°, 215°, 300° and 340°. Correct letters cycle A, B and C. Each item has one triangle, one quadrilateral and one circle, with the distractors' orientation varied independently. In `triangle1-1`, A is a circle, B a rotated triangle and C a quadrilateral; answer B. The fixed `shapes` example and all older family IDs are unchanged.

## Marking, access and release checks

- **Online:** one mark for selecting exactly the triangle's letter. A blank selection asks the pupil to choose before submission. A wrong choice receives feedback after submission; in practice mode, give the targeted straight-side hint and one retry, then the worked explanation. Count first-try success separately.
- **Paper and key:** print the same three drawings and labels as the pupil view; the key names the correct letter and explains the three straight sides. Include enough space and contrast for grayscale A4 printing.
- **Keyboard and screen reader:** each choice has a visible focus state and an accessible outline description that states observable edges or curves without naming the shape. The pupil can move among choices and submit without a pointer. Check that the description gives comparable information to the picture and does not say “triangle” for the correct option.
- **Release verification:** all nine variants were checked for one triangle, distinct distractors, answer position and bilingual text. The local and public browser regression runner passed **56/56**, including builder, pupil marking, paper, key, practice hints and older links. The 375-pixel phone layout had no horizontal overflow. The live practice page was reopened after deployment. A classroom trial and hands-on screen-reader check remain deferred and must not be recorded as done.

[Release commit](https://github.com/kochiuyu/mathquiz/commit/ebb041cea19669b82321a8700e2c4ecb57e6188b).
