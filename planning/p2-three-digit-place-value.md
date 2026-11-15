# P2 three-digit place-value family · item brief

Status: **draft for implementation**. This family is not yet available in the builder or pupil site. Classroom and hands-on accessibility checking remain deferred at the user's request.

## Curriculum match

- **Year and unit:** Primary 2, 2N1 “3-digit numbers”. The [2017 EDB primary supplement, 2N1 objectives 1–2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=24) covers recognising three-digit numbers and the concept and value of the hundreds place. The same unit also covers comparison, group counting and estimation; this family does not assess those objectives.
- The [2018 Key Stage 1 explanatory notes, 2N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=25) connect the P1 tens and units places to hundreds: ten tens make one hundred; a unit cube, ten-cube rod and hundred plate are example representations. Pupils read and write a three-digit numeral from such objects. A place-value picture followed by a numeral is therefore a direct, bounded task for objectives 1–2.
- **Prerequisite:** P1 1N3 objective 2, the meaning of tens and units. The brief is a project interpretation of the EDB sources, not EDB approval or evidence of mastery.

## Proposed item

| Element | English | 繁體中文 |
|---|---|---|
| Pupil prompt | These blocks show a number. Write the three-digit number. | 這些積木表示一個數。寫出這個三位數。 |
| Place labels | Hundreds · Tens · Ones | 百位 · 十位 · 個位 |
| Example key, 304 | 3 hundreds, 0 tens and 4 ones make **304**. The 0 keeps the tens place. | 3個百、0個十和4個一合起來是**304**。十位的0不可省略。 |
| First wrong-answer hint, 304 | Read the columns from hundreds to ones. There are no tens; what digit belongs in the middle? | 由百位讀到個位。沒有十，十位應填哪個數字？ |

Display three labelled columns in that order. One hundred plate represents 100, one ten rod represents 10, and one unit square or cube represents 1. Give a small bilingual legend beside the diagram; keep the symbolic blocks visibly different in size, not only colour. Use the same drawn block counts in online quiz, paper, worked key and practice. A zero column shows an explicit empty space or “0” count under that column, so the absence is visible. Do not display the target numeral beside the pupil diagram.

**Parameter bounds:** The hundreds digit is 1–9; tens and ones digits are 0–9. The target is always 100–999, with no more than nine blocks of any type. Include zero tens (for example 304), zero ones (for example 230), both zeros (for example 500), and nonzero digits throughout (for example 426). Also include a repeated-digit case (for example 242) so a pupil must attend to column value. Do not generate a tenth rod or ten unit blocks; exchanging ten of one kind for one of the next is teaching context, not the answer to this first task. Avoid using an unlabelled pile whose pieces overlap or become hard to count.

**Item record:** Store the three digits or counts and the target value together, with a permanent item ID once variants are chosen. Build the diagram and worked key from those counts, and freeze the released records so an old share link reproduces its original question. Do not reuse or change existing IDs. The first released family should contain distinct digit patterns rather than many cosmetic variants of one number.

## Marking, access and release checks

- **Online:** one mark for exactly the intended three-digit numeral; normalise full-width digits to ASCII, then require three digits with the first digit nonzero. Trim outer spaces. An equivalent calculation or decimal is not a three-digit numeral for this task. A blank entry asks for completion. Apply this rule only to new P2 items; existing links retain their current marking.
- **Paper and key:** leave room for one three-digit response. The key gives the count in each column and the composition, for example `3 × 100 + 0 × 10 + 4 = 304`. The worked text must match the blocks and the displayed answer.
- **Practice:** start with a zero-column item, give one targeted hint after a wrong first answer, allow one retry, then show the composition. Follow-ups should use different digit patterns and values; count first-try success separately.
- **Keyboard and screen reader:** label the answer field and each column. Give a text alternative with block counts (“3 hundred plates, 0 ten rods, 4 unit cubes”) but no completed numeral; the pupil should still make the place-value decision. Preserve visible keyboard focus and readable grayscale A4 diagrams.
- **Automated release checks:** enumerate every permanent ID; compare counts, diagram, target, key and bilingual prompt; test zero tens, zero ones, both zeros, repeated digits, 100 and 999 if those bounds are released; check accepted and rejected formats, blank submission, practice hint/retry, phone width, paper/key layout and old links. Classroom and hands-on screen-reader checks are deferred and must not be marked complete.

**Scope limit:** This picture-to-numeral family does not directly assess counting forwards/backwards, odd/even, comparison symbols, group counting, estimation, or exchanging physical blocks. The worked composition supports understanding; a single correct numeral does not prove a pupil can explain the value of the hundreds digit.
