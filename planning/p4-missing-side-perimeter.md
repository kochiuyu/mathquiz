# P4 missing rectangle side · family brief

Status: **live** as `permissing4a`. Source checked 16 November 2026. This is a second representation of rectangle perimeter under 4M1 objective 3, not coverage of the whole unit. Manual language, pupil, physical print and screen-reader review remain deferred.

The [EDB 2020 Key Stage 2 explanatory notes, 4M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=21) require pupils to recognise and use perimeter formulae for squares and rectangles to solve problems. The notes do not prescribe a missing-side format; the inverse task here is this project's interpretation of using the rectangle formula. Pupils need to know that half the perimeter equals one long plus one short side, then subtract the given side. It is distinct from `per1`, which gives both sides and asks for the perimeter.

Twelve frozen IDs (`permissing4a-0` to `permissing4a-11`) use lengths 14–25 cm and widths 5–11 cm. Six hide a long side and six hide a short side. The diagram labels both equal long sides and both equal short sides, with `?` on the missing pair, and states the perimeter in the prompt. It is schematic, not a measurement drawing. The answer comes from `perimeter ÷ 2 − known side` and is always a positive whole number.

| Part | English | 繁體中文 |
|---|---|---|
| Prompt example | A rectangle has a perimeter of 46 cm. One long side is 18 cm. What is the length of the missing short side? | 一個長方形的周界是46厘米。一條長邊長18厘米。求未知的短邊長。 |
| Answer and worked step | 5 cm. Half the perimeter is 46 ÷ 2 = 23 cm. Subtract the known side: 23 − 18 = 5 cm. | 5厘米。周界的一半是46 ÷ 2 = 23厘米。減去已知邊長：23 − 18 = 5厘米。 |
| Hint | A long side and a short side make half the perimeter. Divide by two, then subtract the known side. | 一長一短兩條邊合起來是周界的一半。先除以二，再減去已知邊長。 |

One mark requires the exact whole-number numeral. Full-width digits and surrounding spaces are accepted; decimals, fractions, calculations and typed units are not, because `cm` is printed beside the answer field. A blank field asks the pupil to complete it. Practice starts with a hidden short side, gives a targeted hint for entering half the perimeter or perimeter minus the known side, permits one retry, then shows the worked step. Follow-ups include a hidden long side and another hidden short side; first-try results stay separate from success after a hint. An error hypothesis is subtracting the known side from the full perimeter without halving it. This is a design hypothesis, not observed pupil evidence.

Automated release checks enumerate all variants, recompute the answer independently, check both missing-side orientations, format marking, old IDs and bilingual builder, pupil, paper, key and practice routes. Hands-on pupil and printer checks are deferred.
