# P2 equal-groups multiplication family · item brief

Status: **live**. Sixteen `groups2a` variants are available in the P2 builder, pupil quiz, paper, worked key and [three-question practice](https://kochiuyu.github.io/mathquiz/?lang=en&p=2&view=practice&skill=groups2a). Classroom and hands-on accessibility checks remain deferred at the user's request.

## Curriculum match

- **Year and unit:** Primary 2, 2N3 “Basic multiplication”. The [2017 EDB primary supplement, objective 1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=27) asks pupils to recognise the basic concept of multiplication; objective 3 covers performing basic multiplication. A picture of equal groups, followed by a multiplication sentence and total, targets those two objectives within a limited number range.
- The [2018 Key Stage 1 explanatory notes, 2N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=28) explain multiplication as repeated addition and use hands-on group counting. They give two groups of three as an example that can be written either `3 × 2 = 6` or `2 × 3 = 6`. The [2017 supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=28) also permits both orders in that example. Do not reject a mathematically equivalent reversal of the pictured factors.
- **Prerequisites:** counting objects and simple addition from P1 1N1/1N2. This mapping is the project's interpretation of EDB sources, not EDB approval or evidence of pupil mastery.

## Proposed item

| Element | English | 繁體中文 |
|---|---|---|
| Pupil prompt | Each box has 4 counters. There are 3 boxes. Complete the multiplication sentence for all the counters. | 每個盒子有4粒圓片，共有3個盒子。完成表示圓片總數的乘法算式。 |
| Answer layout | `[ ] × [ ] = [ ]` | `[ ] × [ ] = [ ]` |
| Worked key | 4 + 4 + 4 = 12, so 3 × 4 = 12 or 4 × 3 = 12. | 4 + 4 + 4 = 12，所以3 × 4 = 12或4 × 3 = 12。 |
| First wrong-answer hint | Count the equal boxes, then count the counters in one box. Add the same number once for each box. | 先數盒子，再數每盒的圓片。每個盒子都加上相同的數量。 |

Draw three clearly separated, identical boxes, each with exactly four counters in a tidy row or grid. Use the same diagram in pupil, builder preview, paper, key and practice. The two factors are the number of boxes and the number in each box; their order may be reversed. Do not label a drawn box with the total, and do not use colour as the only way to distinguish groups. The text alternative states the number of boxes and counters in each, without giving the total or completed sentence.

**Released variants:** Permanent IDs `groups2a-0` through `groups2a-15` cover every ordered pair with 2–5 boxes and 2–5 counters per box (products 4–25). `groups2a-0` is three boxes of four; the remaining IDs enumerate the other pairs in box-count order, then per-box-count order. Both three groups of four and four groups of three are present: they share a product but represent different grouped pictures and repeated additions. No existing ID or shared link was changed.

## Marking, access and release checks

- **Online:** all three blanks are required. Normalize full-width digits and surrounding spaces, then accept only whole-number numerals. Award one mark when the two factor fields contain exactly the pictured box count and per-box count in either order, and the result field equals their product. A correct product paired with unrelated factors, or correct factors with a wrong product, scores zero. Do not treat a written addition sentence as a response to this specific multiplication-sentence layout. Existing quiz versions retain their own answer rules.
- **Paper and key:** print the same boxes and counters beside the three blanks. The key shows the repeated addition and both accepted factor orders. Keep the entire drawing and response line together on an A4 page, in English and Chinese.
- **Practice:** start with a small pictured example, give a group-counting hint after one wrong first attempt, allow one retry, then show the repeated addition and both multiplication orders. Use two distinct follow-up pictures and count first-try success separately.
- **Accessibility:** associate each blank with its role (first factor, second factor, total); expose the grouping information in the diagram's accessible description without saying the answer. Use visible keyboard focus, a logical reading order and adequate contrast in grayscale.
- **Automated release checks:** enumerate all permanent variants and verify equal group sizes, picture counts, product, bilingual wording, both factor orders, incorrect factors/products, blank-field prompting, practice hint/retry, paper/key agreement, phone width, A4 layout and older links. The local and public browser regression runners passed **67/67** checks, including every variant, both factor orders, builder, pupil marking, paper, key, practice, Chinese text, direct PDF and older links. A five-box phone paper had no horizontal overflow; its Chinese PDF was one A4 page with a selectable text layer. Classroom and hands-on screen-reader checks are deferred and must not be marked complete.

**Scope limit:** One pictured equal-groups sentence does not establish mastery of the full 0–10 multiplication table, word problems without pictures, the commutative property as a named concept, or the whole 2N3 unit. The key's repeated addition makes the intended relationship visible; a correct response alone does not show how a pupil reasoned.

[Release commit](https://github.com/kochiuyu/mathquiz/commit/f73a43c16fc07126900b79d7f46103bd1eaab75b).

## Current full-unit review

This historical family brief remains unchanged in scope. See the [current full-unit source audit and resource checkpoint](p2-basic-multiplication.md) for objective-wide evidence and the verified 41891f6 / 242-check release. A single family does not establish the whole unit on its own.
