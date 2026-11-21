# P2 organise and make pictograms

21 November 2026. [Open the lessons](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=pictograms).

## Sequence and scope

Five bilingual lessons move from organising a model collection to title/category/key recognition, horizontal reading, vertical reading and construction in both forms. Each lesson includes three teaching steps, two guided responses, three practice levels and a practical prompt. The release adds **45 practice tasks, 10 guided tasks, a 10-question sample check and two separate chart constructions**. P2 now has seven topics, 39 guided lessons and 351 practice tasks. P1's 45 lessons and existing practice banks are preserved.

The [EDB KS1 explanatory notes, printed page 41](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=47) specify recognising, interpreting and constructing pictograms. They recommend concrete organisation examples, familiar small collections, both horizontal and vertical forms, and one-to-one representation. The new lessons follow those limits. Six-symbol category capacity, two builder datasets and lesson grouping are MathQuiz design choices.

| Objective | Guided response | Further observation |
| --- | --- | --- |
| Recognise | Organise mixed cards; identify title, category labels and one-card key | Explain why organisation helps and what missing labels obscure |
| Interpret | Count categories, zero, total, difference and ties; read both orientations | Explain a comparison using matching counters |
| Construct | Start with blank rows and columns; add/remove one symbol at a time; write a title and check against source cards | Independently draw both forms with self-written labels and key |

Charts represent **model object cards**, not invented class-survey results. The source cards are labelled pencil, book and ball. Each complete circle represents exactly one card. No scaled keys, fractional symbols, bar charts or large datasets are introduced. Empty categories retain their labels. The key's demonstration circle is not a data symbol.

## Construction and assessment

Two builders use different source collections: horizontal 3/1/4 and vertical 2/4/0. The pupil sees mixed source cards, starts with no graph symbols and adds or removes symbols in each labelled category. The app never fills in the correct graph. Both graphs retain the fixed one-card key; category labels and alignment are supplied. Titles are entered freely, saved as escaped text, and reviewed by an adult rather than marked automatically.

The comparison button reports whether all symbol counts match, without revealing the correct counts. It prompts the learner to match source cards to symbols and revise. A count match is not evidence of independent title choice, drawing, data collection or explanation. The [existing practical sheet](../activities/p2-pictograms.html) supports real sorting and paper construction, including writing one's own title, labels and key. Its earlier resource verification remains historical; it was not reprinted in this release.

Ten fixed screen-check items sample concepts and reading and suggest relevant lesson revisits. They do not certify construction mastery. Builder records, screen-check answers and practical observations remain distinct. The branch is open alongside number and shape learning; arithmetic completion is not an entry condition.

## Compatibility and access

`mathquiz-p2-pictograms-v1` is a new topic record with three separate learner slots. Construction counts and titles use distinct IDs, separate from check questions. The six earlier P2 topic data files, metre notebook and shared store are unchanged. Topic reset does not affect P1, other P2 topics or other learners. Existing damaged/future-record protection, stale-tab merging and in-memory storage fallback remain in place.

Repeated symbols each have an accessible one-card name, rather than a numeric answer embedded in the chart alternative. Categories have text labels; colour is not necessary. Vertical symbols stack upward from a common baseline, horizontal symbols begin at the same left edge, and cells have equal sizes. Zero categories explicitly say that there are no cards. Controls support keyboard activation, retain focus after changes and move to feedback after comparison. Mobile controls are at least 44 pixels high. Screen-reader listening and classroom accessibility trials remain pending.

## Verification

All **26 static suites passed**, including nine new gates: independent counts and complete response keys, one-to-one symbol rendering, bilingual fields, blank starts, bounded construction, escaping, persistence, learner/reset isolation, corrupt/blocked storage and frozen predecessor files.

Local **1,034 distinct browser cases verified**, with two exact successful retries of prior P1 page-load timeouts. The new suite contributes 94 cases across English/Chinese teaching, all practice levels, checks/revisits, both constructions, reload/language/learner isolation, upper bounds, full-width zero, future records, storage refresh and widths 320/375/768/1280. Suites restore prior test keys. No production learner answers were entered.

A pre-browser syntax check caught an extra parenthesis in the test script and it was corrected before browser execution. Manual review then refined one teaching comparison to retain the same dataset across orientations and clarified feedback when a protected record prevents changes. All 94 pictogram cases and nine static gates passed again after these refinements. The other 940 cases are unaffected by those topic-specific changes.

Manual inspection covered English vertical-chart teaching and a Chinese phone-width builder. At an actual width of 375 pixels, click and Enter constructed 2/4/0, title text persisted, the common baseline and empty category were clear, feedback received focus and no horizontal overflow occurred. The inputs were synthetic software-test data, not pupil performance evidence.

Public **1,034 distinct browser cases verified**, including 3 exact successful reruns (two page-load timeouts and one app-missing result). The app-missing case passed a second exact rerun as well; its original cause was not reproduced. All sixteen runtime/test files matched deployed SHA-256 readback. Original failures, successful exact retries and observer timeouts are retained in the [evidence](p2-pictograms-guided-evidence.json). Local line endings were normalised to the submitted LF text before the final byte comparison.

Baseline: `d2a303839d2323f75db8a430e906785938988e18`. Runtime: `e38d347102558d64018d352fd0570f70585804ad`. The [runtime Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44883010342) succeeded with the matching commit.

## Next

The early number, shape, measurement and data branches now have guided materials. Next implement **four-digit numbers (2N4)**, followed by money (2M3) and later subtraction/change (2N5), preserving the planned prerequisites. Division and angles/quadrilaterals remain subsequent connected branches.

Classroom trials, difficulty calibration, independent translation review, screen-reader listening, physical printing and observed practical performance remain pending. Guided-resource coverage is not pupil mastery or classroom validation.
