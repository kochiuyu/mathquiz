# P2 · 2N4 Four-digit numbers

**Status:** integrated release candidate, independently reviewed for source scope and finite mathematics. Publication and live browser verification pending; no completed-unit or pupil-mastery claim.

## Official scope and numbering

Checked 16 November 2026: [EDB 2017 supplement, PDF pages 28–29](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=28) and [2018 KS1 notes, PDF page 30 / printed page 24](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=30).

The four numbered objectives, in source order, are:
1. Recognise four-digit numbers.
2. Understand the thousands place.
3. Count in groups of 200, 250, 500 and 1000.
4. Compare number magnitude.

Recognition includes counting, reading, writing, forward/backward counting and parity using the ones digit. Ten hundreds form a thousand. Crossing from three to four digits and back is explicit in the notes; examples include 990→1000 by ones and 1240→540 by hundreds. Comparisons are spoken before symbols. Group counting does not require calculation expressions. Teaching sequence: 2N4 → 2M3 Money (II) → 2N5. Thus 2N4 is a prerequisite for 2M3, not the reverse. Future money, beaker and scale uses are context, not additional required objectives for this worksheet.

## Differences from 2N1, not a renamed duplicate

| Change | Evidence provided |
| --- | --- |
| Range extends to 1000–9999 | Reading includes 1000/1008/2040/4072/9000/9999; dictation includes internal zeros; model counting total 1326. |
| Thousands value and regrouping, rather than hundreds alone | Match ten hundreds to a thousand; compare the digit 2 in 2034 (2000) and 3204 (200), with distinct zero hundreds/zero tens. |
| Explicit three-/four-digit crossing | Pupil recites 990→1000 by ones and 1240→540 by hundreds; proposed sequence family makes every variant cross 1000. |
| Group sizes increase tenfold | Pupil counts six actual represented groups of each required size, ending at 1200/1500/3000/6000. |
| Comparison now includes four-digit place values | Equal thousands with different hundreds/tens/ones, equality, and boundary comparison 1000 versus 999. |
| Objective order differs | Group counting is objective 3 and comparison objective 4 in 2N4. In 2N1 comparison is 3 and group counting 4. |
| No estimation objective in this unit | No estimation task or new estimation criterion is invented; 2N1's fifth objective is not copied. |

## Existing evidence and actual tasks

No 2N4 family was present in inspected `builder.js`/`questions.js`. The existing `place3a` belongs to 2N1 and never reaches a four-digit quantity, so it cannot substitute for this unit.

[Pupil activity](../activities/p2-4digit-numbers.html) · [Hidden teacher script and rubric](../activities/p2-4digit-numbers.html?key=1). All evidence below is authored, pending review/release QA.

| Objective | Pupil action | Teacher criteria |
| --- | --- | --- |
| 1. Four-digit recognition | A: count represented collection, read six numbers, write three dictated numbers. C: forward/backward boundary crossing and parity. | Setup total 1326; dictation 3006/5080/7612. Separate reading, writing and counted structure. Complete sequences and ones-digit explanations required, not isolated final answers. |
| 2. Thousands place | B: physically match ten hundreds with a thousand; construct 2034/3204 and explain digits/zeros. | The quantity remains unchanged; 2000 versus 200 demonstrates changed digit value. Naming a place without its value is incomplete evidence. |
| 3. Larger-group counting | D: point to each of six groups and say running totals for 200/250/500/1000. | Check one group's unit structure first. Record full running totals as well as final quantity; multiplication alone is not this process. |
| 4. Comparison | E: oral comparisons, then =/>/< and ascending triple. | Correct relationships and symbol orientation recorded separately; compare lower places when thousands match. |

## Practical preparation

Use 60 visible hundred grids/plates, six 50-unit half-grids, ten tens rods and ten ones, reused across stations. Group ten hundred grids to make each thousand; verify the unit structure. This supports six simultaneous 500 groups or six 1000 groups without pretending ten hundred plates alone suffice. A thousand block may substitute if its hundred-layer structure is verifiable. Models represent countable units; an arbitrary token bearing “1000” is not physical quantity-counting evidence. Pupils need not construct materials or count thousands of loose objects individually.

The key includes full sequences, model values, preparation counts, language scripts and per-action independent/supported/not-yet/unassessed records. It does not equate a teacher's reading with pupil reading. Keep prepared totals hidden until responses are recorded. No pass percentage or speed criterion.

## External screen proposals

`mathquiz-2n4-families.js` and `mathquiz-2n4-families.test.js` remain outside the repository. Five families, 12 variants each:

- `thousandvalue2a`: explicit value of thousands digit; not another block-to-total task.
- `cross1000seq2a`: missing next term in a sequence crossing the three-/four-digit boundary, by ones or hundreds in both directions. Every four-term sequence genuinely crosses 1000.
- `parity4digit2a`: four-digit odd/even classification including ones zero; explanation identifies ones digit.
- `compare4digit2a`: magnitude using all three symbols, equalities, tied higher places and the 1000/999 boundary.
- `groupcount4digit2a`: running counts in exactly 200/250/500/1000, six to eight groups, totals four-digit. It is sequence/counting rehearsal, not a claim that a final numeric entry demonstrates real-object pointing or every spoken intermediate total.

Finite tests independently verify digit value via remainder, parity via divisibility by two, comparisons via signed difference, sequences by iterative stepping, and totals by repeated addition. They verify all 60 records, range, actual boundary crossings, choice membership, bilingual field shape and unique variants. These checks are not app integration tests. Before integration add permanent fixtures, localized choice labels, hints/retries and marking/render/print/PDF coverage; preserve existing IDs. Generic schema in an external proposal does not make a family live.

Oral reading, dictation, represented-quantity counting, matching ten hundreds and explaining spoken comparisons remain teacher-mediated. Screen questions supplement rather than replace those modes.

## Validation and publication limits

Independently review source fidelity, both languages, all model preparations and numbers. Check narrow-screen tables, key hiding/reveal, keyboard interaction, pupil-only versus key printing and page-fit. Publish only through parent release workflow and verify exact live version. Classroom, independent translation, physical-printer and screen-reader checks remain separate pending evidence. No global code, P1 resource or release metadata is changed by this task.

## Integrated candidate checkpoint · 16 November 2026

The proposal sections above retain the original design and review history. This candidate now registers the families, bilingual pupil/key/practice routes, targeted hints, retries, explicit numeric labels, per-field scoring for new items, permanent payload digests, and PDF/font coverage. Existing released payloads and historical scoring remain unchanged.

The full repository static gate (`node tests/static.cjs`) passes all 89 permanent families and 1,529 variants, including stable-link round trips and frozen-payload checks. The browser suite contains 280 authored checks; those new checks have **not yet been run live**. Independent source and finite-mathematics review is complete, not independent translation certification.

Exact deployment, browser marking/practice/layout/PDF checks remain pending. Classroom observation, independent translation, physical printing, teacher print-preview pagination/key isolation, screen-reader use and manual downloaded-PDF visual inspection remain unverified. Resource completeness will be recorded only after the agreed live gates; it does not certify pupil mastery or completion of practical activities.
