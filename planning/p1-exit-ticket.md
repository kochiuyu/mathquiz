# P1 six-question exit ticket · item brief

Status: all six question types, the ordered editable builder preset, homepage links and bilingual paper/phone release checks are live. A P1 teacher reviewed the paper and reported a small pupil trial; see the [README checkpoint](../README.md#resume-work-here). The [live P1 objective map](primary-mathematics.md#live-p1-family-to-objective-map) records source-checked curriculum scope. Further classroom trials remain useful.

[Pupil example](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3) · [A4 paper](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3&view=paper) · [Worked key](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3&view=key). The six permanent IDs appear in the intended order in every view. Switch to Traditional Chinese with the page link.

## Curriculum bounds

- [1N1 Numbers to 20](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=7): count at most 20 objects; count onwards by one; compose and decompose numbers 2–18 from two one-digit parts. Rows of five organise the picture; the pupil may count each counter by one.
- [1N2 Basic addition and subtraction](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=9): use those two-part number pairs, mainly with diagrams, and record addition horizontally. The proposed set uses addends 1–9 and totals 2–18. It excludes two-digit addends such as 12 + 5 and column arithmetic.

Each item is one mark unless a later teacher review changes the rubric. Do not change the meaning of released `add1` and `next1` IDs. New families use their own IDs.

**Online numeric format:** New `v=3` P1 links mark the counting, sequence, missing-part and story answers as whole-number numerals made of digits only. Full-width digits are accepted. Equivalent fractions, decimals, signs, units and words do not earn the mark. Older `v=2` links keep their original value-based marking, so previously shared links remain usable with the same scoring. This version rule also applies to the older `add1` numeric family; it does not change the pictured-equation or alternative-pair rubrics below. Printed responses remain for teacher marking.

## Ordered item briefs

| Item and skill | English pupil prompt | 繁體中文題目 | Values, working and marking |
|---|---|---|---|
| 1. Count pictured counters · 1N1 | How many counters are shown? | 圖中有多少粒圓片？ | 1–20 counters, arranged in rows of up to five. Count each once. One whole-number response, equal to the number drawn. Implemented as `count20a-0` through `count20a-19`. |
| 2. Continue a sequence · 1N1 | What comes next? `a, a+1, a+2, ___` | 順數下去：`a、a+1、a+2、___。` | Start `a` from 1–17 so the answer is at most 20. Count onwards by one; enter the next whole number in the sequence. The released `next1` family covers starts 1–12. |
| 3. Write an addition sentence for two pictured groups · 1N2 | Write an addition sentence for the red and blue counters. | 看圖中的紅色和藍色圓片，寫出一道加法算式。 | Two pictured groups of `a` and `b` counters, each 1–9; total at most 18. Record `a + b = total` horizontally. Accept either addend order with the correct total. Implemented as `pictureadd1-0` through `pictureadd1-80`. |
| 4. Find the other part · 1N1 | The whole has `total` counters. One part has `a` counters. How many counters are in the other part? | 整體有`total`粒圓片，其中一部分有`a`粒。另一部分有多少粒？ | `a` and missing part `b` are each 1–9; `total = a + b` is 2–18. Two-part diagram shows total, known part and question mark; neither diagram nor prompt gives `b`. Mark the single whole-number response `b`. Implemented as `parts18a-0` through `parts18a-80`. |
| 5. Solve an addition story · 1N2 | There are `a` red counters. `b` blue counters are added. How many counters are there now? | 原有`a`粒紅色圓片，再加上`b`粒藍色圓片。現在共有多少粒？ | `a,b` each 1–9, total at most 18. The picture shows the starting and added groups. Work `a + b = total`; mark the total as one whole number. Implemented as `storyadd1-0` through `storyadd1-80`. |
| 6. Show another way to make the same total · 1N1 | The picture shows one way to make `total`. Show another way to make `total` with two groups. | 圖中顯示`total`的一種組合方法。用兩組圓片表示`total`的另一種組合方法。 | Total 6–16; both parts must be 1–9. Accept any pair summing to the total whose unordered pair differs from the given pair. On paper, accept a clearly labelled drawing or a correct equation; online, use two number fields and accept either order. Implemented as `otherway1-0` through `otherway1-10`. |

## Marking the two open-response items

- **Question 3:** Enter one horizontal addition sentence in the form `number + number = total`. Full-width digits and signs are normalised. Either order of the two pictured groups earns one mark; a different pair with the same total does not.
- **Question 6 online:** Enter one positive one-digit whole number in each box. Award one mark when their sum is the target and the unordered pair differs from the pictured pair. Reversing the pictured pair does not count as another way. Accept either order of a new valid pair.
- **Question 6 on paper:** Award one mark for two clearly separate groups with readable labels for each count, or a horizontal addition sentence, if both parts are 1–9, sum to the target and form a different unordered pair. Do not require the colours or arrangement to match the example. An unlabeled drawing whose counts cannot be determined does not earn the mark. The worked key gives one example; other valid pairs earn the same mark.

## Diagram and boundary checks

- Grouped-counter picture: one filled circle per counter, no numeral giving away the count. `count20a-0` has one circle; `count20a-19` has four complete rows of five. The accessible description repeats “counter” once per object so a pupil using a screen reader can count without hearing the total.
- Two-part diagram: top box is the whole, bottom left the known part, bottom right a question mark. `parts18a-0` shows 2 over 1 and ?, answer 1. `parts18a-80` shows 18 over 9 and ?, answer 9. The accessible description identifies the known quantities and leaves the other part unknown.
- For every variant, the diagram values, prompt values, answer and explanation must come from the same parameters. Review the smallest and largest variants in English and Chinese on screen, paper and key.

