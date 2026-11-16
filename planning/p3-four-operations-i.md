# P3 Four arithmetic operations (I) · 3N4

**Current status: publication candidate, NOT resource complete.** Source/code/static review passed; original R9 private browser regression passed359/359. The publication overlay includes the reviewed framefix2 readiness helper and requires fresh359-check live verification. All1,785 prior payloads are unchanged. Earlier first-three P3 pending references below are historical:3N1–3N3 closed publicly under741d1b6/9d6b319. Manual visuals/PDF, printing, classroom, independent translation and accessibility remain unverified.

## Historical source, draft and integration record

**Unpublished later-grade draft.** Hold until P2 completion, review and route QA. Owner approval for remaining curriculum releases exists; no extra approval blocker is asserted. No global registration/publication or existing payload changes.

## Exact source and current coverage

Checked 16 November 2026: [supplement PDF 46–48, printed 43–45](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=46), [KS1 notes PDF 52–53, printed 46–47](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=52). PDF46 contains four numbered objectives,47 the four concrete relations and first comparison story,48 continues the second story, bracket and estimation remarks before3N5. Do not cite46alone.

README orders P3 arithmetic after P2 and3N1. Existing builder has no3N4 family. P2 `mixed3steps2a`/`mixedstory3digit2a` are three-digit sequential changes: they do not cover four-digit range, brackets, multiplication precedence or comparison-plus-altogether. Local3N2 multiplication drafts are complementary, not substitutes.

Four objectives: recognise/use brackets; three-number addition/subtraction (including all-addition/all-subtraction) through four-digit numbers; addition/multiplication and subtraction/multiplication of at most four numbers; problems. Multiple separate bracket pairs are permitted; nested levels are not required. No division mixed-operation bank is imported merely because of the unit title.

All four supplied relations must be recognised concretely: a×(b+c), (a+b)×c, a×(b−c), (a−b)×c equal their corresponding separated products. **Conversion/expansion/factoring and application of distributivity belong to4N5**, not required here. More/fewer-than combined with altogether is newly required. Estimate only after learners have mastered relevant exact calculations. Draft operands, intermediates and answers stay nonnegative and within9999 conservatively; multiplication factors remain within already-taught single-digit by two-/three-digit work.

## Activity and evidence

[English](../activities/p3-four-operations-i.html?lang=en) · [Chinese](../activities/p3-four-operations-i.html?lang=zh) · [English teacher](../activities/p3-four-operations-i.html?lang=en&key=1) · [Chinese teacher](../activities/p3-four-operations-i.html?lang=zh&key=1)

| Objective/remark | Pupil action |
|---|---|
| 1 · recognise/use brackets | Task1 compares12+8×3 with(12+8)×3; inserts brackets for a concrete box story; computes two separate bracket pairs; explains what bracketed result counts. |
| 2 · three-number addition/subtraction | Task2 supplies four patterns at four-digit range, requires first/final results and compares a changed grouping. |
| 3 · multiplication priority, ≤4 numbers | Task3 calculates both operation combinations, including two multiplication terms and brackets, and diagnoses a left-to-right misconception. |
| 4 · solve problems | Tasks5/6 model both directions of a comparison and altogether, contextual addition/multiplication and a linked subtraction follow-up, with meaningful intermediates. The linked problem is two questions, not a required five-number expression. |
| Four relation patterns | Task4 uses3trays,12counters of one type and6of another; adds or removes2per tray. Both sides of all four relationships are supplied for recognition against the collection, never requested as transformations. |
| Estimation | Task7 chooses convenient approximations, records them before exact calculation and evaluates reasonableness; no fixed rounding algorithm imposed. |

Four pupil and two hidden teacher sheets per language. Real grouping, drawings, written operation order and explanation distinguish process evidence from numeric totals. Reuse/reset18counters; supplied amounts match the four equalities. Teacher rubric records independent/prompted/not-yet/not-observed with actual work, not automatic mastery. No answers prefilled in pupil tasks; optional support is recorded separately.

## External digital proposals

`mathquiz-3n4-families.js` and `.test.js`, outside repository:
- `addsub4digit3a`:12three-number four-digit calculations covering all four sign patterns.
- `mixedmultiply3a`:12precedence items, three or four numbers.
- `bracketorder3a`:12items including two nonnested bracket pairs, multiplication with addition/subtraction, and grouping-sensitive subtraction.
- `comparetotal3a`:12comparison-plus-altogether stories, six each “Andy has more”/“Andy has fewer”; same reference amount reverses the needed operation.

Every item has one numeric field/one mark and bilingual targeted hints in `operations3N4`. Integrator must wire hint and answer labels, input handling, practice, pupil/paper/key/PDF routes. No figure adapter needed. Numeric bracket evaluation does not by itself prove the pupil can choose/use brackets or recognise the four concrete relationships; activities retain these tasks. No expression-conversion question is proposed.

Independent recursive-descent arithmetic parser (not eval) checks all36expression answers from syntax; independent increment/decrement story oracle checks12totals. Tests enforce nonnested brackets, no division, ≤4numbers, three numbers for addition/subtraction, digit bounds, whole nonnegative results, bilingual metadata and field/mark contract. Activity arithmetic, HTML/key/JS checked locally. Independent maths/source review, native translation, browser/mobile/print and classroom verification remain pending. P3 publication stays gated by P2 completion.

## Integrated local candidate checkpoint

This reviewed unit is now registered in the next-four P3 candidate, separate from the earlier three-unit release. All 1,785 prior payloads are unchanged. Full static validation passes121 families/1,941 variants; independent new-unit oracles pass156 cases. Independent actual-renderer/marking checks also passed936 bilingual pupil/paper/key renders and480 marking calls. These are source/runtime-static checks, not real browser or printer use.

The359 authored browser checks remain unrun for this candidate. Source and mathematics review passed. Live routes, responsive layouts, practice interaction and PDF export require deployed verification; manual downloaded-PDF visuals, print-preview/pagination, physical printing, classroom observation, independent translation and screen-reader checks remain unperformed. No unit-completion or pupil-mastery claim. Earlier proposal sections retain design history.

## Integrated next-four candidate evidence

The reviewed digital proposals and bilingual teacher activity are included in the local next-four P3 snapshot:121 permanent families /1,941 variants,120 selectable /1,926. All1,785 earlier payloads remain unchanged; all156 new cases pass independent oracles and regenerate byte-identically with sin/cos/sqrt disabled. Four static gates pass. The359 browser checks are authored, not passed live. This unit remains pending deployed QA; all27 P1/P2 checkpoints are unchanged, and the first-three P3 live326 checks are also pending. No later P3 draft is included in this snapshot. Manual visual/PDF/print/classroom/translation/accessibility limits remain unverified.
