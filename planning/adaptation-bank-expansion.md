# Substantial adaptation-bank expansion · 20 November 2026

## What pupils gain

**16 new levelled practice collections, containing 576 bilingual questions.** Each collection has twelve seed contexts at each of Easy, Normal and Difficult. These are 192 contexts developed into three different demands, not 576 unrelated source ideas; translations are not counted twice.

Fourteen collections (504 questions) draw on Hong Kong sources. One collection (36 questions) draws on UK NRICH and one (36) on a Singapore school teaching example. Twelve of the Hong Kong collections extend already published single examples; four collections come from newly reviewed sources. All wording, values, diagrams and worked solutions are original MathQuiz adaptations. Source links remain visible in expandable details; no source endorsement is implied.

The directory now contains **28 levelled collections + 20 single examples = 48 resources**. Across these resources there are 995 task records: 991 automatically marked tasks and four teacher prompts. There are 2,322 marked answer fields. The additions contribute 576 tasks and 1,224 fields. The original single examples remain useful introductions and link to their full banks; full banks link back. The curriculum catalogue remains **270 curriculum-linked + 30 TSA-informed types**, separate from adaptations. No new official curriculum skills are claimed. Smart practice and the mixed-quiz builder are unchanged.

## Progression and boundaries

Each row supplies 12 questions per level, with practice, saved session answers, pupil papers and worked keys. Suggested HK years follow prerequisites, not overseas age labels. These are optional extensions; none establishes a new official objective or validated mastery threshold.

| Collection | HK year / nearest unit | Easy | Normal | Difficult |
| --- | --- | --- | --- | --- |
| HK001 finite wallet | P2 / 2N5 | Wallet value and change | Fewest coins within available stock | Count every minimum denomination combination |
| HK002 basket budget | P2 / 2N5 | One basket and change | All affordable pairs | Minimum budget permitting at least three pairs |
| HK004 timetable | P2 / 2M2 | Arrival time | Arrival and waiting | Latest departure and available delay |
| HK014 holders | P2 / 2N6 | Guided remainder | Minimum holders and empty spaces | Distinguish full holders; threshold for another |
| HK015 chart audit | P2 / 2D1 | Read a one-to-one chart | Tally original unordered records | Repair category errors that preserve the total |
| HK011 grid repair | P3 / 3N1 | Repair a specified cell | Locate and repair the cell | Verify the diagonal as well |
| HK008 palindrome digits | P3 / 3N1 | Fix the outer digit | Enumerate all three-digit reversals | Add a different-middle-digit constraint |
| HK007 overlapping multiples | P4 / 4N3 | Count separate sets | Count union and intersection | Count exactly one set |
| HK017 rearranged rectangles | P4 / 4M2 | Compare equal areas | Calculate both perimeters | Judge perimeter preservation, including equal cases |
| HK009 measuring gaps | P1 / 1M1 | Fill equal-unit gaps | Correct an underestimate | Change to half-length units without changing the strip |
| HK010 unknown start | P1 / 1N2 | Result unknown | Starting quantity unknown | Reject keyword-driven addition; select a valid check |
| HK019 budget sectors | P6 / 6D3 | Calculate angles from amounts | Repair a proposed angle | Audit the total and relate 30 degrees to money |
| HK020 recurring costs — new | P5 / 5N4 | Six-month component costs | Combine charges and a recurring saving | Diagnose applying six payments to every frequency |
| HK021 offer order — new | P6 / 6N4 | Percentage reduction | Percentage then fixed coupon | Compare both orders and the difference |
| UK003 whole packs — new | P4 / 4N3 | Guided pack total | Minimum packs and count combinations | Exhaust all reachable totals in a bounded range |
| SG002 equality — new | P3 / 3N4 | Product then subtraction | Select a valid complete equality | Judge alternating valid/invalid lines and repair them |

New-question distribution: P1 72; P2 180; P3 108; P4 108; P5 36; P6 72. Finite wallets explicitly limit stock; identical coins are indistinguishable. Pack tasks allow unlimited whole packs and bound the search to at most 31. Every palindrome states repetition rules. Rectangles use the same drawing scale and exclude the internal seam from perimeter. Measurement pictures are schematics, not physical measuring tasks. Financial examples are fictional. Percentage reduction means a stated percentage off; coupon order is explicit. No real household spending is collected.

## Four additional sources actually reviewed

Reviewed on 20 November 2026. Existing twelve candidates retain their source and depth notes in [the earlier release report](research-to-practice-release.md); an index-level source is not retrospectively described as a reviewed worksheet. In particular, HK004 uses an itinerary format from an index; its mathematical timetable is original.

| Source | Evidence read | What the new bank uses |
| --- | --- | --- |
| [CUHK-hosted 基華小學（九龍塘）小數乘法](https://fls.fed.cuhk.edu.hk/?download_id=22138&sdm_process_download=1) | Six-page 2019–20 lesson/worksheet PDF; lesson pp.2–3 and worksheet pp.5–6 | Different billing periods over six months. MathQuiz uses invented club costs and adds a frequency-error check. |
| [CUHK-hosted 將軍澳官立小學 折扣](https://fls.fed.cuhk.edu.hk/?download_id=22175&sdm_process_download=1) | Five-page 2019–20 lesson plan, pp.2–5; referenced hotel/milk worksheets are not included | Comparing offers and changing conditions. Coupon order is a new MathQuiz extension, not a reproduced source question. |
| [Cambridge NRICH: How Much Can We Spend?](https://nrich.maths.org/problems/how-much-can-we-spend) | Task and introductory/teacher guidance | Which totals can be made using two denominations. Reframed as small whole packs; source age 11–14 and unbounded generalisation are not imported into HK P4. |
| [Henry Park Primary 2025 P4 Mathematics briefing](https://www.henryparkpri.moe.edu.sg/files/2025_P4_Mathematics.pdf) | Fourteen-page PDF, especially equal-sign example p.10 and strategy summary p.11 | Meaning of equality and repair of a chained calculation. Original quantities and context; HK P3 placement follows mixed-operation prerequisites. |

These resources are references, not blanket reuse licences. No worksheet text or artwork was copied. A removed EDB gifted-education booklet returned 404 and was excluded. General strategy pages and search snippets were not counted as collected questions. The shared source register gains four reviewed entries; the candidate register gains four candidates and updates the twelve expanded candidates instead of duplicating them.

## Implementation and verification

New generation and pictures are isolated in `adaptation-banks.js` and `adaptation-bank-pictures.js`. Existing marking is reused. Independent checking uses different calculations: exhaustive wallet enumeration, threshold scans, UTC clock arithmetic, holder-capacity loops, raw-record tallies, grid correction search, brute-force palindrome tests, Boolean set membership, unit-cell boundary counts, inverse-operation checks, sector calculations, a payment calendar, integer-cent discounts, dynamic programming for pack totals and separate equality evaluation.

All 576 questions, 1,224 fields, 192 seed contexts and 16 independent answer oracles pass. All seed contexts within a bank are distinct. Correct sets accept reordered answers and reject duplicates. Blanks, non-finite/malformed input, out-of-range answers and altered answers are rejected. Every picture renders in both languages and all three views. The original 399 records and 20 single examples retain passing static checks; resource and shared-UI static gates also pass.

Local browser verification: **233/233 levelled-collection cases + 85/85 single-example/compatibility cases passed**, zero failures. Narrow English/Chinese routes, source/search filters, counts, marking, retry, draft continuity, paper/key content and all old collection routes are covered. The final HK020 wording refinement passed its exact Chinese Difficult browser case (1/1). Visual samples inspected: Chinese recurring-cost practice and tally practice, English rectangle key and budget-sector key. No horizontal overflow was observed in these samples. Browser automation does not substitute for pupil trials or independent language review.

**Published and verified:** [runtime ea87116e](https://github.com/kochiuyu/mathquiz/commit/ea87116eec2cd6fd2330ffb3e6ed85cfe6aa801f). Pages deployment 44679485689 succeeded; all 21 published files matched the tested bytes. Public collection checks passed **233/233**. All **85 distinct single-example/compatibility cases** are verified: the full run passed 83/85, and exact reruns passed `hk007/en/paper-key` and `hk017/zh/practice` after navigation timeouts. Thus **318 distinct browser cases are verified locally and publicly**; the public run was not a flawless single pass. Supplemental English/Chinese sample↔bank link readback passed. The [release evidence](adaptation-bank-evidence.json) preserves original failures, successful reruns and tool-level navigation/evaluate timeouts.

## Limits and next batches

Classroom difficulty calibration, independent human translation review, physical printing, screen-reader use and cross-device checks remain pending. The source review is selective, not exhaustive. In particular, the four new source collections should not be described as hundreds of newly discovered source questions. More sources can now be screened using the [updated workflow](question-research-workflow.md), while candidates already covered by the core catalogue should link to existing practice instead of inflating counts.
