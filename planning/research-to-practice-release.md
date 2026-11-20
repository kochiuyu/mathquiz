# Research drafts to live MathQuiz examples

20 November 2026. This release resolves all 22 remaining research candidates: **20 original bilingual single examples** and **two links to existing equivalent skill practice**. It does not add 22 official curriculum objectives or manufacture repeated question variants.

## What pupils can use

[MathQuiz adaptations](../reasoning.html) now contains the existing 12 levelled collections plus 20 worked examples: **17 Hong Kong, two UK, one Singapore**. Nineteen new tasks have 66 automatically marked answer fields; the story-writing task is teacher-assessed. The existing 399 records remain intact: in total there are 419 adaptation records (415 marked tasks and four teacher prompts), separate from **270 curriculum-linked + 30 TSA-informed practice types**.

Each example has English and Traditional Chinese text, method hints, worked feedback, retry, session draft continuity, pupil paper and worked-answer views. Choice alternatives are now visible on printed papers, including older collections. Twelve original diagram/table presentations cover coins, time, length gaps, part–whole, grids, calendar, pictograms, rectangle rearrangement, budgets, place value, paired counters and comparison bars (twelve visual kinds; the budget adds a corrected pie only in its key). Source details remain expandable.

Single examples have **no invented Easy/Normal/Difficult ladder** and are excluded from the levelled-practice filter. They are searchable in the main resource library by title, source, year and region, including 香港, 英國 and 新加坡. Homepage, curriculum page and practice-directory links use consistent counts. These examples remain outside mixed quiz building and Smart progression.

## Candidate decisions and prerequisites

Suggested years are navigation guidance, not pupil labels or source-country grade equivalence. Existing skill definitions, generated explanations and the repository curriculum objectives were used for the mapping. No exhaustive novelty claim is made.

| Candidate | Outcome / suggested year | Prerequisites and overlap |
| --- | --- | --- |
| HK001 | Limited-wallet example · P2 | Dollar arithmetic and finite coin inventory; 2N5, existing money calculation work |
| HK002 | Affordable-basket example · P2 | Compare sums against a budget; 2N5 |
| HK003 | Teacher story task · P3 | Equal groups plus an extra quantity, compatible units; 3N2. Teacher evaluates the story, not a keyword score |
| HK004 | Arrival/waiting example · P2 | Whole minutes; 2M2, timefinish2a/timeelapsed2a. Times are fictional |
| HK005 | Sharing correction · P2 | Equal sharing and remainder smaller than divisor; 2N6 |
| HK006 | Offer comparison · P6 | Money and interpreting complete-group offer conditions; 6N4 application. No real shop claims |
| HK007 | Overlapping multiples · P4 extension | Multiples/common multiples; 4N3. List sets; formal inclusion–exclusion notation is not required |
| HK008 | Reversible numbers · P3 extension | Three-digit place value and systematic listing; 3N1 number work, not an additional objective |
| HK009 | Measurement gaps · P1 | Equal length units, no gaps/overlaps; 1M1. Source's directional explanation was corrected independently |
| HK010 | Unknown starting amount · P1 | Part–whole and addition/subtraction within 20; 1N2. Reject keyword-only methods |
| HK011 | Repair grid · P3 extension | Addition and row/column constraints; 3N1 optional number investigation. No algebra required |
| HK012 | Recurring calendar · P1 extension | Dates/weekdays, reading a supplied calendar; 1M4. Adult reading support may help |
| HK013 | **Resolved as already covered** | Link to P2 `divgroup2a`, Difficult, which explicitly checks quotient units. No duplicate question or extra count |
| HK014 | Minimum holders · P2 extension | Grouping/remainders, capacity for every item; 2N6. Distinguish full groups from all containers needed |
| HK015 | Pictogram audit · P2 extension | One-to-one symbols and category counts; 2D1. Check the original unordered records, not just the total |
| HK016 | **Resolved as already covered** | Link to P5 `heightmatch5a`, Difficult, which checks perpendicular height and rejects parallel/sloping alternatives. No new diagram claimed |
| HK017 | Area/perimeter rearrangement · P4 | Rectangle area and perimeter; 4M2 plus 4M1. Original proportional diagram. Screen calculations do not certify physical cutting |
| HK018 | Rounded-data example · **P4**, revised from draft P5 | Nearest-hundred chart values, matching existing `barapprox4a` in 4D1; P5's thousands-to-hundred-millions range is unnecessary here. Fictional nonmedical data |
| HK019 | Budget/pie repair · P6 extension | Part/whole and pie sectors; 6D3 with 6N4 proportions. Invalid proposal shown as a table, corrected pie only in the key |
| UK001 | Counter transfer · P1 extension | Tens/ones within 100; 1N3. Six allocations and a change of nine, not the UK's grade label |
| UK002 | Pairing two odd groups · P1 extension | Pairing, odd/even and addition to 18; 1N3. The selected explanation is checked, but general oral proof needs a teacher |
| SG001 | Unknown smaller quantity · P2 | Three-digit subtraction/addition; 2N2. Original comparison bar, not a copied school diagram |

The two overlap links are on the adaptation directory. They resolve those candidates without pretending that unchanged existing practice is new content.

## Sources and originality

Each example retains its named provider and exact URL. Review depths and access limitations remain in [Hong Kong research](hong-kong-source-expansion.md), [regional sources](hk-uk-singapore-sources.md), and [earlier HK findings](../README.md). HK003/HK004 use only a school index's task-format lead, not an unseen worksheet. Commercial source errors were checked rather than endorsed. Source grade labels are not transplanted to Hong Kong grades.

All pupil wording, data, worked solutions and vector drawings are MathQuiz originals inspired by the mathematical ideas. No source worksheet, textbook artwork, pupil record or branding is reproduced; no general reuse licence or endorsement is claimed. Data about money, travel and library records is fictional.

## Verification

Implementation correctness checks: **20/20** independent task checks, covering bounded coin subsets, basket enumeration, time arithmetic, maximal equal shares, offer conditions, set unions, digit enumeration, grid repairs, calendar enumeration, capacities, frequency counts, unit-square area/perimeter, rounding, rational angles, place-value allocations and comparison equations. Nineteen tasks check 66 numeric/set/choice fields, including blank and malformed values, reversed lists and duplicate rejection. The open story deliberately returns no automatic score.

Existing independent checks still cover all **399 prior records / 1,032 fields**, including alternative valid solutions and cube folding. Resource and UI static checks preserve 270 core types, 30 TSA types, 85 official units and 85 activity links. All changed JavaScript is syntax-checked.

Browser suites: 85 new-example cases (both languages, marking, retry, paper/key, source links, mobile overflow, session continuity, regional discovery and overlap routes) plus 105 existing-collection cases. Final local/deployed outcomes and commit identity are recorded in the accompanying release evidence.

During development, the first example browser run was 83 passed / 2 failed: the library test's selector also counted the result-count element carrying a `data-reasoning` attribute. The resource cards were correct. The selector was narrowed to cards; the complete corrected suite passed. A static check caught an obsolete cache-version expectation; both curriculum-page script versions and the expected version were updated. These failures are retained rather than described as an uninterrupted first-pass success.

Visual inspection sampled the Chinese mobile pictogram and calendar and the English rectangle/budget key. This is not an exhaustive device or assistive-technology audit. Independent human translation review, screen-reader testing, physical printing, real-object observation and pupil difficulty calibration remain unperformed. No pupil-mastered claim is made.

## Repeatable workflow

Follow the [research workflow](question-research-workflow.md): retrieve a real source, record review depth, check answers independently, compare existing payloads, map prerequisites, write original bilingual examples, create required figures, choose honest marking, test both languages and paper/key routes, publish with a branch-head check, then verify deployed assets and update the candidate status. A well-reviewed single example is acceptable; expand into a levelled bank only when genuinely different learning demands have been designed and checked.


## Completed release results

Runtime commit [`b1e888f3`](https://github.com/kochiuyu/mathquiz/commit/b1e888f3f642b636bcefd3a8b5aa21376f452b4b), Pages run 44676628396: **success**. All 25 deployed release files matched local bytes; the committed tree changed exactly the 25 intended paths.

- New browser suite: **85 distinct cases verified locally and publicly**. Final local run 85/85; public full run 84 passed and one key-page navigation timeout, followed by an exact `hk005/en/paper-key` rerun passing 1/1.
- Existing suite: **105 distinct cases verified locally and publicly**. Initial local full run 105/105; final local full run 104 passed and one `shapes/zh/easy` navigation timeout, followed by its exact rerun passing 1/1. Public full run 105/105.
- Total: **190 distinct browser cases verified at each location**. Public curriculum-page readback also showed 32 adaptation resources, including 20 worked examples.
- Four static suites passed: new independent answers, existing independent answers, resource integration and shared UI. All changed scripts passed syntax checks. The previous eight draft-answer checks also still pass; they are not counted as extra runtime cases.

The initial public runner navigation itself timed out at the browser-control layer; the page had loaded and continued running, so its result was read without restarting it. All exact case failures and reruns are retained in [the evidence](research-to-practice-evidence.json). The research register now marks 20 candidates published and two resolved as covered; human review limitations above remain explicit.
