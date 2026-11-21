# P2 multiplication facts, one and zero

21 November 2026. [Open the lessons](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=facts).

## What pupils can do

Seven bilingual lessons continue from equal groups and arrays: build 3/4 facts; double to form 6/8; use nearby facts for 7/9; construct the 2–10 table; explore one; explore zero; explain and revisit. Each paired family is explicitly spread over short sessions. All lessons remain open, with recommended preparation rather than score locks.

The release adds **21 teaching explanations, 14 guided tasks, 63 practice tasks and a 12-question sample check**. The separate workshop offers **121 ordered fact entries**, covering every pair from 0 through 10. These are construction opportunities, not 121 new practice-bank families. P2 now has **five guided topics, 28 lessons and 252 practice tasks**. P1's 45 lessons and all existing question banks are preserved.

## Sequence and mathematical meaning

The [EDB explanatory notes, printed pages 22–23](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=28) ground multiplication in repeated addition, allow both factor orders and place construction of the 2–10 table before the one/zero cases. The app follows this sequence. Grouped lessons, split-array strategies and the workshop interface are MathQuiz teaching choices.

The core workshop contains 81 cells with both factors 2–10. The one workshop adds 19 cells with a factor of one, excluding zero; the zero workshop adds 21 cells. These disjoint sets cover all 121 pairs. A final workshop makes the whole set available. Rows begin blank and can be completed over several visits.

Pictures distinguish seven groups split into five and two, and ten groups with a whole group removed to leave nine. Text and dashed boundaries supplement colour. One group of seven and seven groups of one are linked; four empty groups are distinguished from zero groups of four. Multiplication by zero is explicitly contrasted with adding zero, and 0 × 0 is included.

Story fields accept both relevant factor orders while rejecting unrelated factor pairs with the same product, including unrelated zero pairs. Split-part fields remain ordered. Formal property terminology, multi-digit algorithms, division and timed recall thresholds are not introduced.

## Construction, recall and observations

Each workshop answer is saved with an optional self-recorded method: counted, derived, recalled or looked up/received help. Method selections cannot change correctness or check scores. The workshop reports entries and answers currently matching; it labels this as construction evidence, not proof of unaided recall. Changing an answer or method does not certify a skill.

The check samples 12 fixed questions and routes errors to relevant lessons. It does not examine all 121 facts or certify fluency. Written explanations and adult practical observations remain separate. The real-object activity and inquiry resource are linked from every lesson. Later paper/oral sampling should record the exact facts tried and support received.

## Compatibility and accessibility

The independent `mathquiz-p2-facts-v1` record has one slot per learner. The shared store and the four earlier P2 data files are byte-for-byte unchanged. Earlier tabs cannot clean new fact IDs out of their own topic records. Resets affect only the current learner and topic. The existing store protects corrupt/future records and supports in-memory work when persistence fails.

Table answers and methods survive reload; selecting a row and changing language preserve the learner and row route. Continue returns to the saved lesson/stage; the workshop row can be selected again. Notes are escaped, full-width digits are normalised, zero is a valid answer, and all fields have labels. Native row selectors have a 44-pixel minimum height. Diagram descriptions and keyboard behaviour are supported; no screen-reader listening or tactile-attainment claim is made.

## Verification

Local: **828/828 distinct browser cases passed**, with no case reruns. All **24 static suites passed**, including eleven new gates. Arithmetic is checked independently by repeated addition, alongside the exact sample key, all 121 pairs, split diagrams, preserved older hashes, full records and storage errors.

The new browser suite has 137 cases. It covers every table cell in both languages, seven lesson flows, all levels, sample marking/revisits, row navigation, method/score separation, factor orders, zero input, persistence, learner/topic isolation, corruption and widths 320/375/768/1280. The other 691 cases cover prior P1/P2 teaching flows. Tests use isolated test keys and restore pre-existing test values.

Manual local inspection covered English split-array teaching, the Chinese zero workshop at `innerWidth=375`, and Enter submission retaining input focus. A small post-run selector-height refinement was checked at 44 pixels without overflow. Public tests verify the final CSS.

Public: **828 distinct cases verified**, including 1 exact successful timeout rerun(s). Original failures and exact reruns are retained in the [evidence](p2-facts-guided-evidence.json). All thirteen deployed runtime/test files matched SHA-256 readback. A browser navigation timeout while opening the running suite is recorded separately from its test results.

Source baseline: `3e6d2fddfcfc779f8ffd9d77811e8ee2d389cd76`. Runtime: `718e3847ba42cfcc73fa0617a774726e548339ee`. The [runtime Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44873334905) completed successfully. Public API status lookup was rate-limited; the public Actions run page supplied the commit and success readback.

## Remaining work

The two multiplication topics now provide guided materials for the five 2N3 objectives. This does not establish pupil mastery, independent whole-table recall, delivered teaching time or classroom effectiveness. Classroom trials, difficulty calibration, independent translation, screen-reader listening, physical printing and observed practical performance remain pending.

Next implement the **metres and distance branch (2M1)**, followed by pictograms as another early parallel branch. Keep four-digit numbers before money and subtraction/change, and angles before quadrilateral properties.
