# P2 · 2N1 Three-digit numbers

Status: source audit and bilingual supplementary activity authored. Independent review, browser/print QA, deployment and live verification pending; no verified-complete claim.

## Official sources and scope

Checked 16 November 2026: [EDB 2017 supplement, PDF pages 24–25](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=24) and [2018 KS1 notes, PDF page 25 / printed page 19](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=25).

Five objectives cover three-digit number recognition, hundreds-place understanding, magnitude comparison, counting in groups of 20/25/50/100, and quantity estimation. Recognition includes counting/reading/writing, forwards/backwards sequences and odd/even recognition using the ones digit. Ten tens form a hundred; pupils interpret digit values, not merely positional labels. Comparisons are spoken before recording with =, >, <. Group counting requires no calculation expression. Estimation follows counting experience and uses collections below 1000. These are source constraints; the particular task values and materials below are assessment choices.

## Existing `place3a` evidence

Inspected current `builder.js`: twelve values are 304, 230, 500, 426, 242, 100, 999, 507, 680, 909, 115, 370. Each asks pupils to write a numeral from pictured hundreds/tens/ones. It samples recognition and place-value representation, including zeros and endpoints. It does not ask for oral reading, dictation, physical counting, an explicit individual digit value, exchanging ten tens, parity, sequence, comparison, group counting or estimation. The worked key explains expanded value using multiplication, but that is not scored pupil evidence and is not a prerequisite for the new teacher tasks.

## Objective inventory

Use the [bilingual activity](../activities/p2-3digit-numbers.html) and [hidden teacher script/rubric](../activities/p2-3digit-numbers.html?key=1). The six sections map all five objectives and remarks; every row remains **pending independent review and release QA**.

| Objective | Existing digital evidence | Supplementary pupil action / observed evidence |
| --- | --- | --- |
| 1. Recognise three-digit numbers | `place3a` pictured representation to numeral | A: count and write an unlabelled 134-object collection, read 100/105/240/402/680/999 aloud, write dictated 307/590/816. C: forwards/backwards by ones across hundred boundaries and at 100/999; classify 105/240/402/999 with ones-digit reasons. |
| 2. Understand hundreds place | `place3a` number construction from depicted groups, but no independent digit-value response | B: build ten groups of ten and recognise one hundred; construct 242 and identify 200/40/2; construct 304 and explain 300 and absent tens. Rubric separates representation, individual digit meaning and zero placeholder. |
| 3. Compare number magnitude | None in this unit | D: speak relationships, then use all three symbols; compare 305/350, equal 628s, 700/699; order 340/403/430 and record 223 > 124 > 56. Teacher distinguishes magnitude understanding from symbol direction. |
| 4. Count groups of 20, 25, 50, 100 | None | E: six real/visible-unit groups at each size, check a group's quantity and point while saying running totals; final totals 120/150/300/600. Do not substitute a multiplication answer for the counting action. |
| 5. Estimate collections below 1000 | None | F after counting: estimate 138 against a reference 50, then 275 against a reference 100, explain reference use before counting, check and discuss revision. Record process, not merely final accuracy. |

## Materials and access

Up to 600 large counters, reusable trays/bags, paper and genuine base-ten materials, reused across short sessions. Countable grouped units may replace loose objects when preparing hundreds; labels alone must not pretend to be a counted collection. Teacher hides setup numbers from pupils. Groups of ten/hundred must expose their unit structure. Oral reading, writing and hands-on counting are recorded separately so a response adaptation is not mistaken for evidence of the original mode. No fixed percentage tolerance for estimates, invented pass score or speed threshold.

These are representative assessment samples, not exhaustive mastery of every number. Both estimate targets are three-digit and below 1000; counting sequences avoid inadvertently requiring four-digit numbers. The mixed three-/two-digit comparison follows the source's illustrative progression.

## Screen-capable next steps, not new files or released claims

No digital fragment is added in this pass, to avoid premature duplicates. Appropriate future families would assess: digit value (not repeat `place3a`), forward/backward missing terms across hundred boundaries, ones-based parity, pair comparison with all three symbols, ordered triples, and pictured grouped counts with 20/25/50/100. Each should receive stable IDs, bilingual figures/keys, finite-variant checks, retry practice and print tests before release. A digital estimate choice can supplement but cannot by itself prove estimation before counting. Oral reading/dictation and the observed handling/counting/reference-use tasks remain teacher-mediated even after such families exist.

## Verification gates

Independently check source-to-task scope, both languages, all expected sequences/comparisons and preparation quantities. Test language switching, teacher-key hiding/reveal, keyboard use, responsive tables, pupil-only/key printing and site navigation; verify exact deployed release before reporting live evidence. Classroom trials, independent translation, physical-printer and screen-reader validation remain separate pending work. This audit changes no P1 resource, existing family, global coverage or release status.

## Integrated release-5 candidate

`digitvalue2a`, `sequence999a`, `parity999a`, `compare999a`, `order999a` are integrated in builder, pupil, paper/key and bilingual practice (60 finite variants). Independent arithmetic checks and previous-payload preservation pass. New P2 numeric entries retain the existing numeric-expression/full-width compatibility; multi-field tasks award one mark per correct field, unlike earlier all-or-nothing P1 tasks. Labels identify each intermediate or ordered answer.

The full candidate suite contains241 authored browser checks. It has not yet been run on the deployed candidate. Unit completion remains pending exact deployment and applicable bilingual route/PDF/layout checks. Practical/oral evidence is supplied by the linked teacher activity, not inferred from a correct digital total.
