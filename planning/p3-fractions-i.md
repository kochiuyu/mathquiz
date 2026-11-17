# P3 Fractions (I) · 3N5

**Current status: verified resource complete.** Public `8d75a7f` passed 359/359 browser checks with zero failures, including all 1,941 variant contracts. All 4 numbered objectives and applicable remarks have linked digital or teacher-assessed pupil evidence below. All 1,785 earlier payloads are unchanged. The four static gates pass. Resource completeness is not pupil mastery, observed practical performance or delivered inquiry hours. Comprehensive manual visuals, downloaded-PDF inspection, teacher print-preview/pagination, physical printing, classroom trials, independent translation and screen-reader/accessibility validation remain unperformed.

## Historical source, draft and integration record

The draft-stage and pending-test statements below record the earlier development sequence. They are superseded by the verified status above; they do not describe a current publication or live-QA blocker. Original source limits and assessment requirements remain applicable.

**Local later-grade draft**, sequenced after P2 completion and QA. No publication/global integration by this author. Independent review and mobile/print checks pending.

## Current inventory and preserved evidence

3N5 exists after 3N4 and before 3M1. Inventory says `frac3a` live, objective audit needed. Its twelve permanent variants assess fractions of a pre-partitioned single bar, including zero/full bars, using exact pictured numerator/denominator counts with one all-or-none mark. Its occasional equivalent-fraction feedback is not independent equivalence evidence. It does not assess a set, unequal-part decisions, comparisons, operations or actual oral/manipulative reasoning. Preserve all released IDs, payloads and strict count-based scorer; see [existing brief](p3-shaded-fractions.md).

## Full sources including continuation

Checked 16 November 2026: [supplement PDF 48–49, printed 45–46](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=48); [KS1 notes PDF 54–55, printed 48–49](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=54). Both continuation pages are included: zero fractions, comparison limits, oral-before-horizontal operations and no simplest-form requirement occur in the continued notes.

Four objectives: fraction concepts; equivalence; comparison with same denominator OR numerator; addition/subtraction of at most three like-denominator fractions. Whole means one object OR one set; equal parts essential; read/write numerator, denominator and fraction line. Fractions stay between0 and1 inclusive; equal numerator/denominator represents1 and zero numerator represents0. Equivalence is grounded in objects/diagrams, not expansion/reduction algorithms (4N6). Operations are diagram-based, orally solved before written equations; only addition OR subtraction, not a mixed-operation expression. Operands, intermediate values and results do not exceed1. No simplest-form demand, improper/mixed fractions, unlike-denominator operations or combined-numerator calculation algorithm.

## Activity evidence

[English](../activities/p3-fractions-i.html?lang=en) · [Chinese](../activities/p3-fractions-i.html?lang=zh) · [English key](../activities/p3-fractions-i.html?lang=en&key=1) · [Chinese key](../activities/p3-fractions-i.html?lang=zh&key=1)

| Objective/remark | Observable task |
|---|---|
| 1 · object, equal parts and vocabulary | Task1 folds fourths, reads/writes1/4 and identifies numerator/denominator/line; rejects unequal-two-piece “half” claim. |
| 1 · set and boundaries | Task2 circles12 counters as one whole; selects3, none and all; draws/reads/writes3/12,0/12=0,12/12=1. |
| 2 · equivalence | Task3 overlays equal-sized strips with1/2,2/4,3/6, explains same covered amount; full-strip fractions equal1. No procedural expanding/reducing. |
| 3 · permitted comparisons | Task4 includes same denominators and same numerators, equal-sized diagrams and oral reasons before symbols; answers<,>,>,=. |
| 4 · diagram addition | Task5 letter-marked non-overlapping shares:2/8+3/8=5/8;1/6+2/6+2/6=5/6. Oral explanation precedes equation. Task6 designs another valid diagram. |
| 4 · diagram subtraction | Task7 uses original seven eighths with two A parts and three B parts removed:7/8−2/8−3/8=2/8;4/5−4/5=0/5=0. Task8 explains why denominator keeps the same partition. |

Four pupil/two hidden teacher sheets per language. At least six equal-sized reusable strips,12 identical large counters,paper/pencils. Provide checked thirds/sixths or record help rather than demanding accurate thirds by eye. Letter marks preserve meaning in monochrome print. Same whole size is explicit for every comparison. Equivalent valid written answers accepted when supported by reasoning; simplification never required. Record independent/prompted/not-yet/not-observed with actual models,oral reasoning and equations; digital answers alone do not prove these processes.

## External digital proposal and marking

`mathquiz-3n5-families.js` / `.test.js` propose48 variants:
- `fractionset3a`12: fraction of an outlined set, including0 and1.
- `fractionequivalent3a`12: equal-sized bar comparison for equivalent amounts, six yes/six no.
- `fractioncompare3a`12: same numerator/denominator only; four each<,=,>.
- `fractionoperation3a`12: diagram-based pure addition/subtraction,2–3 operands, all results in[0,1].

All new questions are single-choice/one mark. Fraction-valued options are pairwise distinct rational values, so there are no two equivalent correct choices and no hidden demand to simplify. Operations offer answers with the diagram's denominator but do not reject a reduced written response because there is no free-written response in these items. Actual fraction reading/writing/oral solving remains in activity and released bar task. No special scoring branch is needed; preserve `frac3a`'s existing count-specific two-field one-mark exception.

New figure kind `fractionsEvidence3` requires exported `fractionsEvidenceSvg3` adapter before registration. Figures include equal-width whole bars or an outlined full set; X/letters identify selections independently of colour. Metadata `fraction3N5` and top-level bilingual `practiceHint` require wiring. New choice labels must render fraction strings clearly in pupil/paper/PDF; accessible alternatives remain manual where needed. Test all builder/pupil/practice/paper/code/PDF paths, not only mathematical factories.

Independent tests recover displayed set/tag counts, use common equal-cell partitions for equivalence/comparison and exact rational cross-products for choice uniqueness; verify bounded intermediate arithmetic, bilingual hints/labels and absence of ID collisions. All48 pass. Static HTML/script and fixed arithmetic pass. Independent review, browser/print pagination, native translation and classroom observation remain pending. No global edits/publication.

## Independent source/activity review · 16 November 2026

Read both full supplement pages48–49 and both explanatory pages54–55, including continuation restrictions. All four objectives are addressed. Comparisons use a common numerator or denominator; operation diagrams use one operation type and at most three like-denominator fractions with every intermediate/result in[0,1]. Concrete equivalence, oral-before-horizontal recording, both object/set wholes and zero/one boundaries are explicit. No expansion/reduction algorithm or simplest-form requirement is introduced. English/Chinese task values and keys agree; materials and prepared-partition support are adequate. All48 external tests pass. Existing `frac3a` scoring remains separate and unchanged. No source/math blocker found; actual browser/mobile/PDF/print/native-translation/classroom validation remains pending.

## Integrated local candidate checkpoint

This reviewed unit is now registered in the next-four P3 candidate, separate from the earlier three-unit release. All 1,785 prior payloads are unchanged. Full static validation passes121 families/1,941 variants; independent new-unit oracles pass156 cases. Independent actual-renderer/marking checks also passed936 bilingual pupil/paper/key renders and480 marking calls. These are source/runtime-static checks, not real browser or printer use.

The359 authored browser checks remain unrun for this candidate. Source and mathematics review passed. Live routes, responsive layouts, practice interaction and PDF export require deployed verification; manual downloaded-PDF visuals, print-preview/pagination, physical printing, classroom observation, independent translation and screen-reader checks remain unperformed. No unit-completion or pupil-mastery claim. Earlier proposal sections retain design history.

## Integrated next-four candidate evidence

The reviewed digital proposals and bilingual teacher activity are included in the local next-four P3 snapshot:121 permanent families /1,941 variants,120 selectable /1,926. All1,785 earlier payloads remain unchanged; all156 new cases pass independent oracles and regenerate byte-identically with sin/cos/sqrt disabled. Four static gates pass. The359 browser checks are authored, not passed live. This unit remains pending deployed QA; all27 P1/P2 checkpoints are unchanged, and the first-three P3 live326 checks are also pending. No later P3 draft is included in this snapshot. Manual visual/PDF/print/classroom/translation/accessibility limits remain unverified.

## Verified unit handoff

Last verified release: `8d75a7f`, live 359/359 with zero failures. Objectives closed: all 4 numbered 3N5 objectives and applicable remarks, mapped to the pupil actions above. Remaining gap: no resource-coverage gap identified; manual visual/PDF/print, classroom, independent translation and accessibility validation remain unperformed. Next pupil task: use the linked bilingual activity and its teacher rubric; the development queue proceeds to 3M3 Capacity. Verify the [public regression suite](../tests/regression.html) and the activity links above. This checkpoint records usable assessment resources, not demonstrated pupil mastery.
