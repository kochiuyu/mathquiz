# P3 Division (I) · 3N3

**Unpublished later-grade local draft.** Sequence after P2 completion and QA. No global edits/publication, mastery claim or released-ID changes.

## Inventory and source audit

Current `full-curriculum-plan.md` records 3N3 as “No task”; current builder has no 3N3 family. Released P3 tasks are fractions, capacity and bar charts, not this division scope. P2 `share2a`/2N6 families concern basic division and do not establish column exchanges, three-number division or these larger dividends. This draft does not duplicate the concurrent 3N2 authoring assignment.

Checked 16 November 2026: [EDB supplement PDF 45–46, printed 42–43](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=45); [KS1 notes PDF 51, printed 45](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=51).

Three objectives: simple division; division of three numbers; problems. Simple division is two-/three-digit dividends divided by one-digit divisors, including borrowing/exchange and remainders. Column method and place-value reasoning are required, not merely final answers. Three-number division is left-to-right; concrete counterexamples show regrouping changes results, without requiring the term “associative property”. Estimation follows mastery of calculation skills. Stories must have meaningful quantities/remainders.

No zero divisor, two-digit divisor, decimal/fractional quotient, four-digit calculation bank or formal bracket lesson. Concrete order language handles the non-associative contrast before 3N4 brackets. Three-number bank examples are exact at both stages; this deliberate selection does not claim that every potential division story is covered.

## Activity evidence

[English pupils](../activities/p3-division-i.html?lang=en) · [Chinese pupils](../activities/p3-division-i.html?lang=zh) · [English key](../activities/p3-division-i.html?lang=en&key=1) · [Chinese key](../activities/p3-division-i.html?lang=zh&key=1)

| Objective/remark | Observable evidence |
|---|---|
| 1 · column principles | Task 1 models 68÷2 as 60÷2 and 8÷2, writes column work and explains quotient alignment. |
| 1 · exchanges/zero quotient places | Task 2 models/writes 72÷3=24 and 432÷4=108, explains exchanging tens and preserving the quotient tens zero. |
| 1 · remainders/checks | Task 3 writes column work for 257÷6 (42 remainder5) and 305÷5 (61 remainder0), explains remainder bound and multiplication check. |
| 2 · three-number order | Task 4 records intermediates for 24÷6÷2=2, 96÷4÷2=12, 72÷3÷4=6. Twenty-four counters demonstrate six groups then splitting each in two, compared with first finding 6÷2 then sharing 24 into three groups (8). |
| 3 · stories | Task 5 contrasts sharing137÷6 (22 each,5 retained), packing125÷4 (31 full,1 unpacked), seating185÷8 (24 buses, not quotient23). Column work, units and remainder explanations required. |
| Estimation after skills | Task 6 estimates248÷5 near250÷5=50, then exact49 remainder3;398÷4 near400÷4=100, then99 remainder2. Other justified estimates accepted, recorded before exact work. |

Three pupil/two hidden teacher sheets per language. Reusable materials: four hundred pieces, forty tens, fifty ones, six group circles,24 large counters and paper/pencil. Enough tens must exist for exchanging hundreds (e.g.398 needs39 tens before sharing); counts were checked rather than assuming nine tens suffice. Mark half-spaces inside groups when splitting each among two. Models, column work and spoken explanations are separate rubric evidence. No final numeric answer proves a written method. Record assistance and independent/prompted/not-yet/not-observed status.

## External screen proposals and scoring

`mathquiz-3n3-families.js` / `.test.js` propose36 variants:
- `dividecolumns3a`12: quotient and remainder, two labelled fields/two marks. The ID labels the companion skill, but screen answers alone do NOT assess column work; metadata flags `columnMethodRequiredOffline:true`.
- `dividechain3a`12: first quotient and final quotient, two fields/two marks; exact integer intermediates.
- `divisionstory3a`12: four sharing, four packing and four seating contexts. Sharing/packing have two fields/two marks; seating has one field/one mark. Labels explicitly say what each answer counts.

Current P3 generic scoring gives one point per numeric field and permits equivalent numeric aliases. All labels are nonempty bilingual strings and mirrored in `answerUnitLabels` before initial hashes; no borrowed special-score flags. Top-level `practiceHint` and `division3N3` metadata require practice wiring. Answer keys must show “quotient”, “remainder”, intermediate roles or story units, never ambiguous slash pairs. No new figures required. Preserve existing IDs and test builder/pupil/practice/paper/code/PDF and multilingual mobile paths before release.

Independent repeated-subtraction oracle validates all36, checking nonzero single-digit divisors before loops, two-/three-digit starting dividends, exact chain intermediates and minimal seating capacity. Mark/field/label and existing-ID collision checks pass. Static activity arithmetic/hidden sections/script checks pass. Independent source/mathematics/translation review and browser/print/classroom validation remain pending. No publication.

## Independent draft review · 16 November 2026

Supplement PDF45–46 includes the continued nonassociativity and estimation remarks; KS1 PDF51 confirms column reasoning, exchanges, remainders and left-to-right order. All36 generated cases pass independent arithmetic and contextual minimal-capacity tests; explicit zero quotient-place cases108,202,100 and all bilingual/key labels are checked. Whole quotient zero is not expected for these two-/three-digit dividends divided by one digit. Four hundreds/forty tens/fifty ones suffice for the actual model trials, reused. Added explicit two spaces per group circle for the concrete24÷6÷2 demonstration. Browser/print and classroom evidence remain unverified.

## Local integrated-candidate evidence

The reviewed families above are now integrated into the local builder, bilingual pupil/paper/key routes and grade-aware practice. All 1,641 previous payloads remain unchanged. The full candidate has 108 families / 1,785 variants; the independent P3 gate checks all 144 new variants. `tests/static.cjs`, `tests/p2-later-static.cjs` and `tests/p3-static.cjs` pass. The 326 browser checks are authored, not passed live. This unit is not yet verified resource complete; publication and deployed QA remain pending. Teacher-led observation, concrete materials and explanation tasks remain necessary. Manual downloaded-PDF visual inspection, print pagination, classroom, independent translation, physical-printer and screen-reader validation are unperformed.
