# P1 six-question exit ticket · item brief

Status: authored against the EDB objectives; the counting and other-part families are implemented. Assembly of the six-item preset, the remaining families, and teacher review are the next work.

## Curriculum bounds

- [1N1 Numbers to 20](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=7): count at most 20 objects; count onwards by one; compose and decompose numbers 2–18 from two one-digit parts. Rows of five organise the picture; the pupil may count each counter by one.
- [1N2 Basic addition and subtraction](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=9): use those two-part number pairs, mainly with diagrams, and record addition horizontally. The proposed set uses addends 1–9 and totals 2–18. It excludes two-digit addends such as 12 + 5 and column arithmetic.

Each item is one mark unless a later teacher review changes the rubric. Do not change the meaning of released `add1` and `next1` IDs. New families use their own IDs.

## Ordered item briefs

| Item and skill | English pupil prompt | 繁體中文題目 | Values, working and marking |
|---|---|---|---|
| 1. Count pictured counters · 1N1 | How many counters are shown? | 圖中有多少粒圓片？ | 1–20 counters, arranged in rows of up to five. Count each once. One whole-number response, equal to the number drawn. Implemented as `count20a-0` through `count20a-19`. |
| 2. Continue a sequence · 1N1 | What comes next? `a, a+1, a+2, ___` | 順數下去：`a、a+1、a+2、___。` | Start `a` from 1–17 so the answer is at most 20. Count onwards by one; enter the next whole number in the sequence. The released `next1` family covers starts 1–12. |
| 3. Write an addition sentence for two pictured groups · 1N2 | Write an addition sentence for the red and blue counters. | 看圖中的紅色和藍色圓片，寫出一道加法算式。 | Two pictured groups of `a` and `b` counters, each 1–9; total at most 18. Record `a + b = total` horizontally. Accept either addend order with the correct total. Diagram and online equation input remain to implement. |
| 4. Find the other part · 1N1 | The whole has `total` counters. One part has `a` counters. How many counters are in the other part? | 整體有`total`粒圓片，其中一部分有`a`粒。另一部分有多少粒？ | `a` and missing part `b` are each 1–9; `total = a + b` is 2–18. Two-part diagram shows total, known part and question mark; neither diagram nor prompt gives `b`. Mark the single whole-number response `b`. Implemented as `parts18a-0` through `parts18a-80`. |
| 5. Solve an addition story · 1N2 | There are `a` counters. `b` more are added. How many counters are there now? | 原有`a`粒圓片，再加上`b`粒。現在共有多少粒？ | `a,b` each 1–9, total at most 18. Show the starting and added groups in the picture. Work `a + b = total`; mark the total as one whole number. Picture and family remain to implement. |
| 6. Show another way to make the same total · 1N1 | The picture shows `a + b = total`. Show another way to make `total` with two groups. | 圖中顯示`a + b = total`。用兩組圓片表示`total`的另一種組合方法。 | Total 6–16; both parts must be 1–9. Accept any pair summing to the total whose unordered pair differs from the given pair. On paper, accept a clearly labelled drawing or a correct equation; online, use two number fields and accept either order. The diagram, family and marking remain to implement. |

## Diagram and boundary checks

- Grouped-counter picture: one filled circle per counter, no numeral giving away the count. `count20a-0` has one circle; `count20a-19` has four complete rows of five. The accessible description repeats “counter” once per object so a pupil using a screen reader can count without hearing the total.
- Two-part diagram: top box is the whole, bottom left the known part, bottom right a question mark. `parts18a-0` shows 2 over 1 and ?, answer 1. `parts18a-80` shows 18 over 9 and ?, answer 9. The accessible description identifies the known quantities and leaves the other part unknown.
- For every variant, the diagram values, prompt values, answer and explanation must come from the same parameters. Review the smallest and largest variants in English and Chinese on screen, paper and key.
