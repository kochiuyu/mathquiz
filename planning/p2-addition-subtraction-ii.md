# P2 Addition and subtraction (II): complete source audit and proposed first release

**Status:** bilingual activity and six proposed digital families authored, not integrated or released. Independent review and browser/print verification pending. No complete-unit or pupil-attainment claim.

## Verified scope

Checked 16 November 2026: [EDB 2017 supplement, 2N2, PDF pp.25–27](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=25), including its continuation remarks; [KS1 explanatory notes, PDF pp.26–27](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=26).

Four objectives: addition, helpful reordering/regrouping of addition, subtraction, and problem solving. Addition uses up to three addends, each at most three digits, with carrying and sums below 1000. Subtraction uses up to three numbers, **each at most two digits**, with borrowing and left-to-right evaluation. Learners explain problem calculations with statements. Concrete examples contrast subtraction groupings; property names are not required. Estimation follows carrying/borrowing experience. Combined comparison-and-total stories are later work.

Do not import three-digit subtraction or mixed addition/subtraction from 2N5. Negative results, formal algebra, required parentheses notation and formal rounding rules are not added here.

## Delivered activity

[English pupil sheets](../activities/p2-addition-subtraction-ii.html?lang=en) · [Chinese pupil sheets](../activities/p2-addition-subtraction-ii.html?lang=zh) · [English worked key](../activities/p2-addition-subtraction-ii.html?lang=en&key=1) · [Chinese key](../activities/p2-addition-subtraction-ii.html?lang=zh&key=1)

Three pupil sections: arithmetic/strategy; concrete subtraction contrast/stories; estimation. Two hidden teacher sections provide worked answers, specific error feedback, observable process criteria and scope limits. Actual printed page count needs verification, particularly the long worked-key table. Pupil use of extra paper is explicit. Statements may be spoken with adult transcription, recording support rather than inferring independent writing.

| Numbered objective / remark | Actual pupil evidence | Digital proposal and limit |
|---|---|---|
| 1 · Addition | Task 1 calculates 248+176 and 126+237+148 vertically; explains a carry with models/drawing/words. Includes carrying two tens from a three-addend ones column. | `addcarry2a` has six two-addend and six three-addend variants, all with carrying. Numeric results do not assess column setup or exchange explanation. |
| 2 · Helpful addition order/grouping | Task 2 chooses a method for 198+37+2, checks original order and transfers to 49+126+51. | `smartadd2a` asks for a convenient pair subtotal and total. It scaffolds the pair explicitly; the activity supplies independent strategy selection. |
| 3 · Subtraction, borrowing and conventional order | Task 3 computes 52−27, 80−46 and 82−37−18, modelling exchange and recording intermediate result. | `subborrow2a` and `subchain2a`; the latter marks intermediate and final results separately. All operands at most99, nonnegative intermediates/results. |
| Subtraction grouping remark | Task 4 physically removes5 then3 from12, contrasts with removing only the result of5−3, and explains why results differ. | No numeric answer alone is claimed as conceptual evidence. Does not require formal property names. |
| 4 · Solve problems and explain calculations | Task 5 has a three-delivery addition, two successive removals and a simple comparison. Pupil writes an expression plus meaningful explanation statement. | `addstory2a`/`substory2a` mark numerical story answers only. Metadata flags the separate explanation requirement; do not auto-credit it. |
| Estimate results after skill experience | Task 6 predicts rough answers before exact results and rejects883 for287+196 using a reasonableness argument. | Teacher assessment only in this release. Fixed-error auto-marking or an answer obtained after exact calculation would not establish prior estimation. |

Every objective and relevant continuation remark has an authored assessment mode. Teacher observation remains unperformed until actual use. No attempt to certify all modes from worksheet totals or digital answer counts.

## Separate integration fragments

Outside the repository, prepared for the parent integration:

- `mathquiz-2n2-families.js`: proposed new permanent IDs `addcarry2a`, `smartadd2a`, `subborrow2a`, `subchain2a`, `addstory2a`, `substory2a`; 12 variants each, total72.
- `mathquiz-2n2-tests.cjs`: independent finite checks, run with Node.

Each family supplies English/Traditional Chinese prompts, field labels, numeric answers, marks, worked explanations and `arithmetic2N2` metadata with hints. No new drawing renderer is needed. `smartadd2a` and `subchain2a` use two answer fields; all other items use one. Story metadata includes `explanationRequiredOffline:true`. All future recorded item meanings must remain stable after release.

A generic practice route must support both one- and two-field answers, use these exact generators, show specific hints and keep first-try scoring. Integrate into builder/quiz/paper/key; add coverage links, font glyphs/cache versions and immutable digest fixtures. Confirm numeric marking accepts intended equivalent numerals but rejects omissions/wrong fields. No global files were changed by this task.

## Verified mathematics

Independent BigInt calculations passed for all72 variants. Tests verify operand counts/digit limits, sums below1000, nonnegative subtraction intermediates, actual carry/borrow cases, helpful whole-ten pairs, bilingual text presence, field/answer counts, intermediate answers and unique proposed IDs. These tests are not a substitute for engine/route integration tests.

Activity results independently checked:

- 248+176=424; 126+237+148=511.
- 198+2=200; +37=237; original order235+2=237. 49+51=100; +126=226.
- 52−27=25; 80−46=34; 82−37=45; 45−18=27.
- Concrete contrast:12−5−3=4, whereas5−3=2 then12−2=10.
- Stories125+236+147=508;72−28−19=25;63−38=25.
- Estimates around500 and40 are defensible; exact results483 and42. Since287 is below300 and196 below200, their sum is below500, excluding883 without relying only on recalculation.

All subtraction tasks stay within two-digit operands; no mixed-operation expression is presented as a 2N2 calculation. Alternative defensible estimates/efficient methods are accepted with reasons, not graded against one prescribed strategy.

## Pending release gates

Independent math/source/translation review; both languages and hidden-key routes; phone layout; keyboard control; grayscale and print pagination; full digital integration and every finite variant in real marking/practice/paper/key; previous-ID regression; live deployment checks. Font/PDF support must be tested through the site rather than inferred from browser text. Classroom observations, physical printing and screen-reader evaluation remain separate unperformed checks.

## Integrated release-5 candidate

`addcarry2a`, `smartadd2a`, `subborrow2a`, `subchain2a`, `addstory2a`, `substory2a` are integrated in builder, pupil, paper/key and bilingual practice (72 finite variants). Independent arithmetic checks and previous-payload preservation pass. New P2 numeric entries retain the existing numeric-expression/full-width compatibility; multi-field tasks award one mark per correct field, unlike earlier all-or-nothing P1 tasks. Labels identify each intermediate or ordered answer.

The full candidate suite contains241 authored browser checks. It has not yet been run on the deployed candidate. Unit completion remains pending exact deployment and applicable bilingual route/PDF/layout checks. Practical/oral evidence is supplied by the linked teacher activity, not inferred from a correct digital total.
