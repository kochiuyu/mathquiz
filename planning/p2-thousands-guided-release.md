# P2 thousands and four-digit numbers

21 November 2026. [Open the lessons](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=thousands).

## Learning route

Five bilingual lessons teach ten hundreds as a thousand, reading/writing four-digit numbers, boundary counting and odd/even reasoning, larger-group counting, and comparison/ordering. Each has three teaching steps, two guided tasks, nine practice tasks across three levels, a practical prompt and observation notes. The release adds **45 practice tasks, ten guided tasks and a ten-question sample check**. P2 now has **eight topics, 44 guided lessons and 396 practice tasks**. Earlier P1 and P2 data are preserved.

The [EDB KS1 explanatory notes, printed page 24](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=30) describe four objectives: recognising four-digit numbers, thousands place, counting in groups of 200/250/500/1000, and comparison. They include three/four-digit boundary crossing, ones-digit parity and speaking comparisons before symbols, and place this unit before Money (II). The five-lesson grouping is a MathQuiz teaching choice. No estimation objective, five-digit range or four-digit written calculation algorithm is added.

| Objective | Screen materials | Separate pupil evidence |
| --- | --- | --- |
| Recognise four-digit numbers | Models, written words to digits, zeros, forward/backward crossings, odd/even choices | Read aloud, write unseen dictation and demonstrate counting |
| Thousands place | Ten hundred grids grouped as a thousand; 2034 versus 3204; zero hundreds/tens | Match actual models and explain both digit and value |
| Count in 200/250/500/1000 | Grouped-unit diagrams and every running total in separate fields | Point to each group and speak every intermediate count |
| Compare magnitude | Spoken relationship prompt, all three symbols, equal values and ordered triples | Explain the first differing place before writing a symbol |

## Models and practical work

A hundred is drawn as a ten-by-ten grid. A thousand visibly groups ten such hundreds. Tens and ones are separately represented. A 250 group contains two hundreds and a fifty half-grid; 200, 500 and 1000 groups expose their corresponding hundred structure. Labels identify each model's known unit value rather than supplying the whole collection's answer. The diagrams are compact representations; linked physical models support inspecting units with help.

Group tasks require three to six running totals, rather than only a product or final total. A six-group thousand answer preserves all six entries: 1000, 2000, 3000, 4000, 5000, 6000. No multiplication expression is required. Oral pointing and counting still need observation; typing the totals cannot establish those actions.

Recognition includes 1000, 1008, 2040, 3006, 4072, 5080, 9000 and 9999. Every short boundary-count question actually crosses 1000. Teaching also gives the full 1240-to-540 backward-hundreds sequence. Odd/even reasoning uses the ones digit, including zero. Comparisons include equality, tied higher places and 1000 versus 999.

Each lesson links the [existing four-digit activity](../activities/p2-4digit-numbers.html) and inquiry resource. Its preparation list provides enough hundred and fifty-unit models for larger-group work. Reading and hidden dictation are adult-mediated. No audio recognition, automatic oral assessment or newly performed physical-model trial is claimed.

## Compatibility and input limits

Only the new topic opts into a 0–9999 answer limit. Other topics retain three-character numeric fields and their existing 0–999 validation limit. Four-digit numeric and ordered/part fields accept up to four digits; full-width digits normalise before checking. Five-digit values, negative numbers, decimals, exponents and comma-separated numerals in a single field are rejected.

The existing shared store is unchanged: each answer string allows 32 characters, sufficient for the longest six-part answer of 29 characters. The separate `mathquiz-p2-thousands-v1` record preserves earlier topic work and three-learner isolation. All seven predecessor data files, the metre notebook and shared store remain byte-identical. Reload, language switching, cursor, notes, future-record protection, stale merging and session-only fallback are checked. The sampled check and practical observations remain separate.

## Verification

All **27 static suites passed**, including eight new gates for four-digit content, independent answers, models, storage compatibility and syntax.

The final isolated local run passed **1,126 distinct browser cases without retries**. The discarded initial attempt and exact test-fix rerun are recorded below and in the evidence.

The new browser suite has **92 cases** covering English/Chinese routes, all lesson stages, sample scoring/revisits, four-character and six-part inputs, 9999/full-width input, zero, earlier-topic limits, learners/reset, future records, storage events and widths 320/375/768/1280. The existing learning-flow suites provide the other 1,034 cases. Tests use test keys and restore earlier values.

During initial authoring, Python syntax errors in the generator were corrected before any data was generated or tested. An initial browser test incorrectly assumed every older topic had a numeric question; faces uses choices. The test now uses a numeric validation probe where necessary. Its exact rerun passed. A focused probe overlapped the first regression run, so that partial run was discarded as final evidence and the entire local suite restarted alone. Manual QA then used the separate localhost origin to avoid shared test storage.

Manual inspection covered the English ten-hundreds exchange and Chinese input at an actual 375-pixel viewport. Full-width 9999 submitted correctly with keyboard focus retained; all six thousand-group entries submitted and remained intact without horizontal overflow. Model grids, group boundaries and wrapped fields were visually checked. No pupil participation or screen-reader listening occurred.

All **1,126 distinct public browser cases verified**, with five exact successful timeout reruns; original failures are retained in the evidence. All seventeen deployed runtime/test files matched SHA-256 readback. The [evidence](p2-thousands-guided-evidence.json) preserves the original outcomes and retries. Public map navigation and lesson links were inspected.

Baseline: `ededa599443b8b2be706bcfaa9370a8e80d43b28`. Runtime commit: `86461673cc8551ed449503cec4ac216c567b26fa`. The [runtime Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44892977751) succeeded with the matching commit.

## Next and limits

Next implement **Money (II), 2M3**, before later subtraction/change (2N5), preserving the official sequence. Classroom trials, difficulty calibration, independent translation, screen-reader listening, physical printing and observed practical performance remain pending. Guided-material coverage does not establish mastery or classroom validation.
