# 5A1: source and private implementation audit

**Current resource status: complete.** 5A1: 2 numbered objectives and0 inquiry statements. Code release `504a2ea0a383b34fc5fe76f037860bb4a88bea23` passed the linked live checks. This marks resource availability, not pupil achievement. [Verification](p5-live-closure-evidence.json).

## Historical implementation record

**Private 5A1–5A2 candidate; incomplete:** Six new families add96variants and two bilingual practical resources for2+3 numbered objectives. Inventory204permanent families/3105variants;203selectable/3090;63selectable units/69resource units;63activities;56complete/13open. All3009predecessor payloads and P1–P4 difficulty/Smart assets are preserved. Algebra units remain incomplete; browser verification is pending. Completed totals stay211numbered plus four inquiry statements.

## Official scope

2 numbered objectives verified in [EDB KS2 notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=38) and [supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=85). 5A1 uses one unknown and represents quantities/relations, including multiplication/division notation. 5A2 covers equation meaning, eight specified forms and contextual use; coefficients/constants whole, coefficient/divisor nonzero; balance and substitution checks. No unknown on both sides, variable denominators, quadratic operations or negative-solution requirement. Authored solutions here are manageable whole numbers, an authoring choice rather than a stated curriculum restriction.

## Implementation and boundaries

New scoped algebra5.js parses at most80characters/31tokens/three nested levels into exact rational linear forms; no eval, arbitrary identifiers or global grading changes. Expression answers accept equivalent linear forms. Context equations require the directly stated expressions on opposite sides (either orientation), rather than accepting a solved value only. Other eight-form solving uses the unchanged fraction grader. Existing marking.js and all3009prior payloads remain frozen. Two activities supply six groups/five sheets each and blank objective evidence. Actual manipulation, classroom observation, physical printing, independent translation and screen-reader validation remain unperformed. Browser checks are authored but pending.

## Actual private static verification

All56 CJS gates and actual font cmap pass locally and in an isolated copy. Independent checks cover96newanswers, all8equationforms,576actualHTML parses,24bilingual teacher-model paragraphs, bounded96IDs and named3009predecessor payloads. Browser tests are authored but not run; predicted totals are not evidence. Earlier private authoring label-map bug was caught by HTML parsing and fixed before browser QA.
