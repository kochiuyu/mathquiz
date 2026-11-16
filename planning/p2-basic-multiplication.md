# P2 · 2N3 Basic multiplication

Status: source audit and bilingual pupil activity authored; two digital families proposed externally, not integrated or released. Independent review, browser/print QA and live verification pending. No unit-completion or universal fact-recall claim.

## Source and scope

Checked 16 November 2026 against [EDB 2017 supplement, PDF pages 27–28](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=27) and [2018 KS1 notes, PDF pages 28–29 / printed pages 22–23](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=28).

The five objectives cover the multiplication concept, the 0–10 table, basic calculation, commutativity and problem solving. Repeated addition grounds the concept. Hands-on counting with 2/5/10 may lead into construction of the 2–10 tables, followed by 1 and 0. Pupils recognise multiplying by one preserves the number and multiplying by zero produces zero. Both factor orders are valid for an equal-group situation; product names the multiplication result. Formal property terminology is not required.

The notes contain a passing reference to “associative property” while discussing factor order; the explicit objective and surrounding discussion concern commutativity. This resource does not turn that wording into an extra three-factor or associative-property requirement. The stories here each need one multiplication within the 0–10 table, not later mixed operations, multi-digit algorithms or division.

## Existing family audit

`groups2a` has 16 variants: every ordered pair of group count and group size from 2–5 (the 3-by-4 case is placed first). Pupils enter factors and total from an equal-group picture. Its key connects repeated addition and both factor orders. This is useful concept/representation evidence, but not the entire 0–10 table, independent product performance, practical commutativity discovery or varied one-step story modelling. A key explaining repeated addition is not evidence the pupil generated or explained it.

## Objective map

[English activity](../activities/p2-basic-multiplication.html?lang=en) · [Traditional Chinese](../activities/p2-basic-multiplication.html?lang=zh) · [Teacher key](../activities/p2-basic-multiplication.html?key=1).

| Objective | Existing evidence | Authored pupil task and rubric |
| --- | --- | --- |
| 1. Multiplication concept | `groups2a` equal-group factors/product | A: build three trays of four, generate repeated addition and a multiplication statement, name × and product. Contrast unequal trays without confusing same total with equal grouping. |
| 2. Understand table 0–10 | `groups2a` samples only factors 2–5 | B: construct all 121 ordered cells in two manageable continuation tables, across sessions. Begin 2/5/10, then remaining 2–10 rows, then 1/0 and zero column. C supplies concrete one/zero properties. Teacher key has a complete independently calculable reference. |
| 3. Basic multiplication | `groups2a` evaluates pictured products, not unpictured facts across the table | E: four unpictured facts, recording recalled/derived/looked-up strategy separately. External `multfact2a` proposal supplies every ordered 0–10 fact as available practice content. Neither four samples nor an authored bank proves full learner recall. |
| 4. Commutativity | Key mentions reverse order; no pupil exploration | D: build and turn a 3-by-4 array, record both products, show no counters added/removed; repeat with chosen factors. Both orientations accepted, property name not required. |
| 5. Solve problems | `groups2a` is one fixed pictured equal-group context | E: stickers and cups stories; write multiplication, result/unit and explain factors with a model. Both factor orders accepted. Proposed `multstory2a` adds 30 numeric-total stories but does not certify the pupil's chosen operation or explanation by itself. |

All rows are authored or proposed, pending independent review and release QA.

## Genuine table coverage versus recall

B exposes all 121 cells for factors 0 through 10, including 0 × 0 and 10 × 10. Teacher checks completed rows and support across sessions. This is a complete construction opportunity, not a claim of unaided recall. E samples only four facts. Later shuffled factor-card checks can log the precise pairs a pupil has recalled or derived; no timed threshold or pass percentage is attributed to EDB. Physical demonstrations, oral explanations, table construction, unaided calculation and story modelling remain separate evidence modes.

## External digital proposal

Files supplied outside the repository:
- `mathquiz-2n3-families.js`: `multfact2a` (121 ordered facts, numeric product) and `multstory2a` (30 one-step contextual numeric totals; 15 factor pairs in each of two contexts).
- `mathquiz-2n3-families.test.js`: enumerates all variants; checks factor range, all 121 unique pairs, repeated-addition arithmetic oracle, answer/schema and bilingual prompt/key/hint fields.

The fact family covers table products without adding a duplicate “table answer” family. Product vocabulary remains a direct action in A. Story totals cannot prove operation selection, so the teacher task retains full equation/model evidence. Existing `groups2a` remains the picture-to-factors family. No global renderer, marker, practice route, cache, font subset, coverage, README or digest fixtures are changed by this proposal.

Before integration, preserve IDs; verify schema with the app, numeric input/marking, bilingual unit labels, practice hints and retries, builder inclusion, fixed digests, paper/key/PDF rendering and mixed-paper behaviour. Finite proposal tests are not end-to-end acceptance.

## Preparation and review gates

100 large counters and ten trays suffice when reused. Teacher notes include setup, full key and observable per-action rubric; key is hidden by default and printing is pupil-only until revealed. Tables have deliberately split columns for small screens and print. Independently check all table entries, factor-order acceptance, both languages, mobile dimensions, language switching, key toggles, keyboard and print page-fit before publication. Classroom, independent translation, physical-printer and screen-reader validations remain separately pending. No P1 resource or global code is altered.

## Integrated release-5 candidate

`multfact2a`, `multstory2a` are integrated in builder, pupil, paper/key and bilingual practice (151 finite variants). Independent arithmetic checks and previous-payload preservation pass. New P2 numeric entries retain the existing numeric-expression/full-width compatibility; multi-field tasks award one mark per correct field, unlike earlier all-or-nothing P1 tasks. Labels identify each intermediate or ordered answer.

The full candidate suite contains241 authored browser checks. It has not yet been run on the deployed candidate. Unit completion remains pending exact deployment and applicable bilingual route/PDF/layout checks. Practical/oral evidence is supplied by the linked teacher activity, not inferred from a correct digital total.
