# P2 one-to-one pictogram family · item brief

Status: **draft, not live**. This brief defines a small bilingual interpretation family for the next implementation step. Manual pupil and hands-on screen-reader checks remain deferred at the user's request.

## Curriculum match

- **Year and unit:** Primary 2, 2D1 “Pictograms”. The [2017 EDB primary supplement, 2D1 objective 2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=40) asks pupils to interpret pictograms. Objectives 1 and 3 cover recognising and constructing them; the proposed answer to a given chart directly assesses interpretation, not construction.
- The [2018 Key Stage 1 explanatory notes, 2D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=47) limit P2 interpretation and construction to **one-to-one representation**, require both horizontal and vertical forms, and recommend familiar contexts with few items and little data. Every complete symbol in this family stands for exactly one pupil. Do not use a scale of 2, 5 or 10, partial symbols, or fractional values.
- **Prerequisite:** count small whole-number sets (P1 1N1). This mapping is the project's interpretation of EDB sources, not EDB approval or evidence of pupil mastery.

## Proposed item

Use a chart of favourite fruit in a class. The category labels are Apple, Banana and Pear (蘋果、香蕉、梨). In the first example, show four identical pupil symbols beside Apple, two beside Banana and three beside Pear, with no printed totals beside the rows.

| Element | English | 繁體中文 |
|---|---|---|
| Chart title | Favourite fruit in our class | 本班最喜愛的水果 |
| Key | Each pupil picture stands for 1 pupil. | 每個學生圖案代表1名學生。 |
| Pupil prompt | How many pupils chose bananas? | 有多少名學生選擇香蕉？ |
| Answer layout | `[ ] pupils` | `[ ]名學生` |
| Worked key | Banana has 2 pupil pictures. Each picture stands for 1 pupil, so **2 pupils** chose bananas. | 香蕉一行有2個學生圖案。每個圖案代表1名學生，所以有**2名學生**選擇香蕉。 |
| First wrong-answer hint | Find the Banana row, then count only its pupil pictures. | 找出香蕉的一行，只數這一行的學生圖案。 |

**Diagram contract:** Use one consistent, recognisable outlined pupil symbol throughout a chart; use position and category labels rather than colour to distinguish categories. Include a title, the one-to-one key and clearly separated labelled categories. Horizontal and vertical variants use the same chart data and question rule, with symbols aligned in equal-size cells. In vertical form, category labels sit below their columns and symbols stack upward from a common baseline. The question and chart must stay together in pupil, builder, paper, key and practice views. No row total, axis number or decorative symbol may reveal or confuse the answer.

**Variant plan:** Freeze permanent IDs before release. Start with 12 deterministic charts: six horizontal and six vertical, each with three familiar categories and 0–6 pupils per category. Include target counts of 0, 1 and 6, equal counts across two categories, and a non-target category with more pictures than the target. Keep the number of categories and pictures small enough to read on a phone and one A4 page. Each record stores orientation, ordered categories, each count, target category, title, one-to-one key, bilingual prompt, answer and worked step; every view derives from that record. The release must preserve existing item IDs and shared links.

## Marking, access and release checks

- **Online:** One mark for the exact whole-number numeral that matches the target category's symbol count. Trim outer spaces and normalise full-width digits. Reject decimals, expressions and a count from the wrong category, even when it is a valid chart count. An empty field asks for completion. The unit appears beside the field and is not typed. Apply this rule only to this new family.
- **Paper and key:** Leave space for a numeral; repeat the same complete chart and key. The worked key points to the target category, counts its symbols and states that each symbol represents one pupil. Check English and Traditional Chinese A4 output in both orientations.
- **Practice:** Begin with a small nonzero count, give the category-specific counting hint after a wrong first attempt, allow one retry, then show the worked count. Follow with two distinct charts, including a zero count or vertical chart, and track first-try success separately.
- **Accessibility:** The chart has a text alternative with its title, one-to-one key, category names and a sequence of one spoken “pupil symbol” per drawn symbol, including an explicit empty category. It must not state the target's numeric total before the pupil answers. Give the input a visible label; preserve keyboard operation, focus, contrast and reading order. A screen reader user should be able to count the same symbols as a sighted user.
- **Automated release checks:** Enumerate every ID; assert the drawn and accessible symbol counts equal the record, the key is one-to-one, both orientations and boundary counts appear, and English/Chinese prompts, answer, hint and worked step agree. Test correct, wrong-category, decimal, expression, full-width and blank responses; builder, pupil, paper, key and practice; phone width, A4/PDF layout and older links. Manual pupil and hands-on screen-reader checks remain deferred and must not be marked complete.

**Scope limit:** Reading one category's count from a supplied chart does not test constructing a pictogram, collecting data, comparing categories, or mastery of all three 2D1 objectives. Those are separate future item designs.
