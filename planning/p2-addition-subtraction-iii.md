# P2 · 2N5 Addition and subtraction (III)

**Status:** integrated release candidate, independently reviewed for source scope and finite mathematics. Publication and live browser verification pending; no completed-unit or pupil-mastery claim.

## Source and scope

Checked 16 November 2026: [EDB 2017 supplement, PDF pages 29–31](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=29) and [2018 KS1 notes, PDF pages 31–32 / printed pages 25–26](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=31).

The three numbered objectives are (1) subtract two numbers, (2) addition/subtraction of three numbers, and (3) solve problems. Borrowing is included; the operands now extend to three digits. Mixed work includes both mixed signs and three-number all-addition/all-subtraction forms. Follow left-to-right. Intermediate calculations must not extend to four-digit numbers: 567 + 489 − 123 is excluded because its first result is 1056, regardless of its final result.

Money problems are required, including giving change, without decimal operations. Use explicit dollars and cents, with value-preserving regrouping or counting on. Comparison-plus-altogether stories remain later 3N4 content; the stories here use sequential receiving/using or borrowing/returning events instead. After exact addition/subtraction experience, teach estimation of results; estimation is a remark attached to the unit, not an invented fourth numbered objective.

Teaching sequence is **2N4 → 2M3 → 2N5**. The earlier 2N2 unit permits subtraction of up to three numbers with at most two digits; 2N5 extends two-number subtraction to three digits and introduces three-number mixed work with three-digit bounds. Existing `subborrow2a`/`subchain2a` must not be relabelled as new-range evidence.

## Existing evidence

No 2N5 family was present in the inspected builder. Current 2N2 candidates cover lower-range borrowing, subtraction chains, addition, strategies and simple stories. They provide prerequisites but not the new three-digit subtraction range, mixed-sign intermediate recording or dollars/cents change task. 2M3 explicitly excludes giving change; its counting/exchange questions do not certify this unit's money problems.

## Objective map and actual pupil tasks

[Pupil activity](../activities/p2-addition-subtraction-iii.html) · [Hidden teacher script/key](../activities/p2-addition-subtraction-iii.html?key=1).

| Objective / remark | Pupil action | Observable evidence |
| --- | --- | --- |
| 1. Two-number subtraction to three digits with borrowing | A: 432 − 187 and 500 − 268; show working, explain regrouping and check one answer by addition | Correct 245/232; conserved starting value despite changed grouping. Teacher accepts correct alternative strategies, not one compulsory borrowing notation. |
| 2. Three-number operations, left-to-right | B: four patterns +−, −+, ++, −−; say first operation, record first and final results; diagnose an incorrect start | 423/227, 335/482, 363/678, 574/389. First-result field makes order an actual pupil response rather than a key-only explanation. |
| 3. Basic mixed-operation stories | C: library borrowed/returned and stickers received/used | Choose operations, record intermediate meaning and explain final quantity/unit; neither story is comparison-plus-altogether. |
| 3. Money problems without decimal operations | D: 10 dollars less 3 dollars 80 cents; then sequential spending from 20 dollars | 6 dollars 20 cents change; intermediate 13 dollars 30 cents and final 8 dollars 80 cents. Explain 1 dollar/100 cents regrouping or counting on, with labelled units. |
| Estimation remark | E after exact practice: estimate using chosen nearby numbers, then calculate and compare | Approximate 500/300 are illustrative; exact 502/305. Observe estimation before exact calculation and reference-number reasoning; accept other sensible estimates without a mandated rounding rule. |

All rows are authored evidence pending review/QA. Model manipulation and explanations are chosen assessment methods, not new numbered curriculum requirements. A numeral alone cannot certify the reasoning these prompts request. Estimation is not replaced by picking an exact answer from a screen.

## Materials and rubric

Place-value mat, ten hundreds/twenty tens/twenty ones or equivalent drawings, paper and clearly labelled dollar/cent value cards suffice. Money is a pretend context, not a purchase or payment instruction. Authentic note recognition belongs to 2M3 and is not claimed from these value cards. The hidden teacher key supplies conserved-value examples, all answers, event meanings, monetary regrouping and estimate alternatives. A per-action independent/supported/not-yet/unassessed record captures methods, prompts and response adaptations. No invented pass mark or speed threshold.

## External screen proposals

Files outside the repository: `mathquiz-2n5-families.js`, `mathquiz-2n5-families.test.js`.
- `sub3borrow2a`: 12 three-digit minuends, every item requiring borrowing, including zeros and very small differences. One numeric field/mark; key supplies addition check.
- `mixed3steps2a`: 24 variants, six of each ++/−−/+−/−+ pattern. First and final results are separate fields and marks.
- `mixedstory3digit2a`: 12 sequential-change stories with intermediate and final quantities. Both fields scored separately; teacher task still supplies operation explanation evidence not recoverable from totals alone.
- `moneychange2a`: 12 change problems in separate dollar/cent language. Two integer fields/marks, explicit answer-unit labels, targeted unit-regrouping hint. Integer-cent storage is internal; no decimal operation is displayed to pupils.

All multi-field items follow the existing one-mark-per-numeric-field contract, so one correct field earns partial credit. Key adapters must preserve `answerUnitLabels`. Each family includes bilingual targeted hints and keys, but these are proposals until routed into the app.

Finite tests enumerate all 60 variants. A separate decimal-column borrowing algorithm checks subtraction; BigInt arithmetic independently checks each mixed step and money conservation; all operands/intermediates/results in whole-number items stay 0–999; all four operation patterns appear. Tests also enforce positive valid change, cent remainder 0–99, bilingual metadata and per-field marks. These tests are not renderer/marking/practice/PDF end-to-end tests.

## Review and release gates

Independently review both languages, source bounds, every generated intermediate and teacher answer; explicitly test zero regrouping, field partial credit and key unit labels. Check language switching, hidden-key controls, keyboard/mobile layouts, print page-fit and exported paper/key PDFs before integration/release. Verify the exact deployed version before claiming live evidence. Classroom, independent translation, physical-printer and screen-reader validation remain separate pending work. No global code or publication state is altered by this task.

## Integrated candidate checkpoint · 16 November 2026

The proposal sections above retain the original design and review history. This candidate now registers the families, bilingual pupil/key/practice routes, targeted hints, retries, explicit numeric labels, per-field scoring for new items, permanent payload digests, and PDF/font coverage. Existing released payloads and historical scoring remain unchanged.

The full repository static gate (`node tests/static.cjs`) passes all 89 permanent families and 1,529 variants, including stable-link round trips and frozen-payload checks. The browser suite contains 280 authored checks; those new checks have **not yet been run live**. Independent source and finite-mathematics review is complete, not independent translation certification.

Exact deployment, browser marking/practice/layout/PDF checks remain pending. Classroom observation, independent translation, physical printing, teacher print-preview pagination/key isolation, screen-reader use and manual downloaded-PDF visual inspection remain unverified. Resource completeness will be recorded only after the agreed live gates; it does not certify pupil mastery or completion of practical activities.
