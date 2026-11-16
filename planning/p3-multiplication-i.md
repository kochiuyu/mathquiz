# P3 Multiplication (I) · 3N2

**Unpublished later-grade draft, held until P2 completion.** This draft still needs integration and browser/print verification. No globals changed.

## Source and existing coverage audit

Read README grade-by-grade order and `planning/full-curriculum-plan.md`: P3 follows P2, with 3N1 before arithmetic batch 3N2/3N3/3N4. Current builder has no `3N2` family. P2 `multfact2a`/`multstory2a` remain within the 0–10 table; those do not supply two-/three-digit multiplication or column reasoning. No existing payload is changed.

[Official supplement PDF 43–45, printed 40–42](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=43) and [KS1 notes PDF 50, printed 44](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=50), checked 16 November 2026. Objective 1 starts at the bottom of PDF 43 and its digit limits/column remarks continue on 44, with objectives 2–3; the estimation note continues at the top of PDF 45. Scope includes carrying, two-/three-digit times one-digit in either order; principles of column calculation; three factors and concrete regrouping for convenient calculation; problems. Notes add estimation after mastery of exact multiplication skills. No requirement to use the term associative property. No two-digit-by-two-digit algorithm imported.

[English activity](../activities/p3-multiplication-i.html?lang=en) · [Chinese activity](../activities/p3-multiplication-i.html?lang=zh) · [English key](../activities/p3-multiplication-i.html?lang=en&key=1) · [Chinese key](../activities/p3-multiplication-i.html?lang=zh&key=1)

| Objective/remark | Genuine pupil evidence |
|---|---|
| 1 · simple multiplication, either order, carrying | Tasks 1–2: two-digit concrete 43×2 and 27×3; column calculations 126×4,308×3,467×3,3×126. Four-digit products allowed; source limits factors, not product to three digits. |
| Column principle, not memorised procedure | Model tens/ones separately; explain why eight tens in 86 sits under the 4 in 43; exchange 21 ones for two tens and one one; explain zero position and carried tens in 308×3. |
| 2 · three numbers | Task 3 real two trays × three cups × four counters, with two differently interpreted intermediate products; Task 4 compares both groupings of 4×25×3 and discusses convenience. Neither grouping requires two-digit-by-two-digit computation. |
| 3 · problems | Task 5: pencil/album problems plus shelves/boxes/books. Three-factor story can use 4×18 then3×72; another mathematically valid route using12×18 is accepted but not required/taught as a new algorithm. |
| Estimation remark | Task 6 follows exact work: choose convenient approximations for198×4 and302×3, predict direction of difference, compute and check reasonableness. Approximation choices are not prefilled in pupil text. |

Ten tens-rods and thirty ones suffice for each separate Task1 trial; reset between models. Two trays, six cups and 24 counters supply Task3 exactly. Hidden teacher script/rubric separates model use, column reasoning, calculation, regrouping explanation, contextual interpretation and estimation. Pupils do not see worked answers before attempting; teaching support is recorded separately from independent evidence. Three pupil and two teacher sheets per language; classroom demonstration and actual written working are not inferred from numeric responses.

## External digital proposals

Outside repository: `mathquiz-3n2-families.js` and `.test.js` propose 48 items:
- `multdigit3a`: 24 products, twelve factor pairs in both orders, six two-digit and six three-digit pairs, including carrying and internal zero.
- `multthree3a`: 12 three-factor products, with both groupings staying within one-digit by two-/three-digit calculations.
- `multstory3a`: 12 one-step contextual products requiring operation selection, unlike a displayed multiplication expression.

One numeric field/one mark avoids any unverified multi-field P3 partial-credit assumption. Metadata `multiplication3N2` supplies bilingual practice hints and explicitly flags offline reasoning where relevant. Integrator must confirm P3 input normalisation and wire hints/labels/practice/paper/key/PDF. Fixed IDs are proposals only. Products sample calculation/context objectives, not column construction, estimation strategy or physical regrouping. No figure adapter required.

Independent repeated-addition oracle checks all 48 outcomes, both regrouping routes, factor bounds, bilingual metadata and field/mark contract. Static HTML/key/JS and activity arithmetic checks pass locally. Native translation, independent source/mathematics review, browser/mobile/print and classroom evidence remain pending. No unit closure or pupil mastery claim.

## Independent draft review · 16 November 2026

Official supplement PDF43–45 and KS1 PDF50 rechecked, including the continued estimation note. All48 finite products, both factor orders and both triple-grouping routes pass independent arithmetic checks. Activity answers and material quantities agree; ten tens-rods/thirty ones are reused between trials. Neither triple grouping requires a two-digit-by-two-digit algorithm. These checks do not establish rendered browser/print quality or classroom evidence.

## Local integrated-candidate evidence

The reviewed families above are now integrated into the local builder, bilingual pupil/paper/key routes and grade-aware practice. All 1,641 previous payloads remain unchanged. The full candidate has 108 families / 1,785 variants; the independent P3 gate checks all 144 new variants. `tests/static.cjs`, `tests/p2-later-static.cjs` and `tests/p3-static.cjs` pass. The 326 browser checks are authored, not passed live. This unit is not yet verified resource complete; publication and deployed QA remain pending. Teacher-led observation, concrete materials and explanation tasks remain necessary. Manual downloaded-PDF visual inspection, print pagination, classroom, independent translation, physical-printer and screen-reader validation are unperformed.
