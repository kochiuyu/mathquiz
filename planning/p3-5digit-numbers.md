# P3 Five-digit numbers · 3N1

**Current status: verified resource complete.** 3N1 has three numbered objectives, 60 released variants and a bilingual teacher activity with pupil tasks, worked guidance and observation rubric. Public `741d1b6` passed 326/326 checks. Resource completeness is not pupil mastery, observed practical performance or delivered inquiry hours. Comprehensive manual visuals, downloaded-PDF inspection, teacher print-preview/pagination, physical printing, classroom trials, independent translation and screen-reader/accessibility validation remain unperformed.

## Historical draft, source audit and integration record

The original notes below are preserved verbatim. References to unpublished status, missing integration or pending browser QA describe earlier drafting stages and are superseded by the current checkpoint above.

**Unpublished later-grade draft.** Hold until P2 completion; owner approval for remaining curriculum releases is already in place. No global registration, new digital family or mastery claim. Independent source/translation review and browser/print verification pending.

## Source audit

Checked 16 November 2026: [EDB supplement PDF 43, printed 40](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=43); [KS1 notes PDF 49, printed 43](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49).

Three objectives: recognise five-digit numbers; understand ten-thousands place; compare magnitude. Recognition includes counting, reading, writing, forward/backward sequences and odd/even determined from ones. Ten groups of one thousand make ten thousand; the digit's place value matters, not just naming its digit. Notes explicitly include counting 9990→10000 in ones and 12400→8400 backwards in thousands. Thus four/five-digit boundary transitions are within scope. Comparisons use =, >, <.

Do not import six-digit numbers, new arithmetic algorithms, estimation or a physical 10000-object requirement. Value cards explicitly model values. This activity distinguishes oral reading, listening-to-numeral writing, counting, model explanation and comparison symbols. Existing lower-grade place-value tasks do not automatically supply those higher-place and oral proofs.

## Draft activity map

[English pupils](../activities/p3-5digit-numbers.html?lang=en) · [Chinese pupils](../activities/p3-5digit-numbers.html?lang=zh) · [English teacher](../activities/p3-5digit-numbers.html?lang=en&key=1) · [Chinese teacher](../activities/p3-5digit-numbers.html?lang=zh&key=1)

| Objective/remark | Evidence |
|---|---|
| 1 · count/read/write | Task 2 reads five numerals with varied zero patterns; hidden teacher script dictates three different numerals without displaying them. Task 3 records/recites every step across four/five-digit boundary and in thousands. |
| 1 · odd/even | Task 4 circles ones, explains five cases and changes 70008→70009. |
| 2 · ten-thousands place | Task 1 exchanges ten labelled 1000 cards for one 10000 card, explains unchanged total, fills five-column charts for 30405/70008, and states 30000 as value of 3 in 30405. |
| 3 · magnitude and symbols | Task 5 explains then records <, >, =, < for fixed pairs, considers higher-place ties, and generates/checks another five-digit pair. |

Two pupil and two hidden teacher sheets per language. Materials: ten 1000 cards, one 10000 card, digit cards, reusable five-column chart, paper/pencils. Chinese and English dictation scripts lead to the same 40020, 60302, 81006 numerals. English “and” variants accepted if number is unambiguous. Teacher records independent/prompted/not-yet/not-observed for each mode, not one combined score.

## Verification and future integration boundary

Fixed activity mathematics/static checks pass; independent source/translation review found no blocking defect. English phrasing was clarified to “ten groups of one thousand make ten thousand”. Browser/mobile/print verification remains pending.

External `mathquiz-3n1-families.js` and `.test.js` now propose five families, 12 variants each:
- `compose5digit3a`: combine five place-value columns, including internal zeros.
- `tenthousandsvalue3a`: value represented by the ten-thousands digit.
- `sequence5digit3a`: forward/backward sequences across place boundaries with steps 1, 100 or 1000, including returns to four digits.
- `parity5digit3a`: odd/even via ones.
- `compare5digit3a`: comparison symbols, balanced four cases per symbol.

Existing builder banks have no 3N1 family; lower-grade `place3a` is 2N1 and the four-digit families are 2N4. These proposals extend number range rather than modifying any released ID. Current P3 generic marking awards one point per numeric field and one for a correct choice. All three numeric families use one nonempty bilingual field and one mark before initial payload hashes; choice families also carry one mark. No special-score flags are borrowed.

Actual `marking.js` permits numeric aliases for P3, including full-width digits, signed values, decimal equivalents and equivalent fractions; blanks, expressions, units, exponent notation, hexadecimal and zero denominators are rejected. Consequently composition asks for numerical value, not a falsely enforced numeral-only writing task. Pure numeral writing and dictation remain observed activity evidence. If a future strict writing family is desired, give it its own explicit marking contract and ID rather than silently changing these payloads.

All 60 variants pass independent digit-concatenation/place-value, repeated-unit counting, ones-string parity and lexicographic magnitude oracles, labels/marks checks, existing-ID collision checks and actual P3 parser alias/rejection tests. Top-level bilingual `practiceHint` and `number3N1` metadata require wiring to the appropriate practice renderer. No new figures required. Integration must exercise builder, pupil blank/valid/invalid, hints/retry/completion, paper/code/PDF and nonempty labelled keys in both languages. Later-grade integration/publication remains sequenced after P2 QA; owner approval for remaining curriculum updates is already granted. No global edits/publication by this author.

## Local integrated-candidate evidence

The reviewed families above are now integrated into the local builder, bilingual pupil/paper/key routes and grade-aware practice. All 1,641 previous payloads remain unchanged. The full candidate has 108 families / 1,785 variants; the independent P3 gate checks all 144 new variants. `tests/static.cjs`, `tests/p2-later-static.cjs` and `tests/p3-static.cjs` pass. The 326 browser checks are authored, not passed live. This unit is not yet verified resource complete; publication and deployed QA remain pending. Teacher-led observation, concrete materials and explanation tasks remain necessary. Manual downloaded-PDF visual inspection, print pagination, classroom, independent translation, physical-printer and screen-reader validation are unperformed.
