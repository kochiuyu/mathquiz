# P2 multiplication meaning · first guided slice

Date: 21 November 2026. Baseline `1c3cf5cc484646bc46db7e2e3efe8c8fd568359b`; runtime `8f5c04b5927d1bc40c39aa29abdfcb0467040186`.

[Open multiplication](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=multiply) · [Traditional Chinese](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=multiply&lang=zh) · [Evidence](p2-multiply-guided-evidence.json)

## Sequence and curriculum boundaries

The fourth P2 topic starts 2N3 through equal groups and repeated addition, then arrays, initial 2/5/10 facts and one-step stories. It revisits P1 grouping and parts/addition. All branches remain open; no arithmetic or shape-topic entry score is imposed.

Rechecked [EDB KS1 notes, PDF pages 28–29 / printed 22–23](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=28). The five objectives address the concept, the 0–10 table, calculation, swapped factors and problems. EDB accepts either factor order for a given equal-group quantity. This slice initially models “group count × group size”, then shows why the reversed order also gives the total. It does not add a three-factor property or formal terminology requirement.

**This is not completion of guided 2N3.** Complete table construction, remaining facts, multiplication by 1 and 0, and later varied recall/derivation sessions remain unfinished. Existing whole-unit practice and printable activities remain available, but their earlier resource-complete status is separate from this guided-teaching checkpoint.

| Lesson | Pupil action and evidence |
| --- | --- |
| Look for equal groups | Distinguish equal/unequal groups; identify group count, group size and total; contrast equal totals with different arrangements. |
| From repeated addition to × | Choose one addend per pictured tray; write multiplication; recognise the multiplication sign and product. |
| Turn rows and columns | Describe rows/columns, turn an array, track unchanged counters and explain both factor orders. |
| Build facts with 2, 5 and 10 | Count groups, add another equal group and derive adjacent facts; examples extend to 10 × 10 without a timed fluency claim. |
| Explain equal-group stories | Write the relevant factors and total, then explain with a unit; reject unequal-group descriptions. |

Five bilingual lessons contain 15 teaching explanations, ten guided tasks, 45 practice tasks and a ten-question check. P2 totals: four topics, 21 guided lessons and 189 practice tasks. P1 lessons, earlier P2 data and existing practice banks are unchanged.

## Answer meaning and marking

Multiplication statements use three labelled fields: first number, second number and product. Both relevant factor orders are accepted, including full-width digits after normalisation. A different factor pair with the same product is rejected: for two groups of six, `2,6,12` and `6,2,12` are valid; `1,12,12` is not evidence of modelling those groups.

Group identification has different labels—group count, number in each group, total—and remains ordered. Swapping those labelled answers changes their meaning. Repeated-addition questions explicitly request one addend per tray: another arrangement can produce the same total without representing those trays as drawn. These distinctions are taught and separately tested.

One task receives one automatic mark only when all its numeric fields match. Explanations and practical notes do not add automatic marks. The ten-question check samples this slice; it is neither a course certificate nor evidence of recall of the complete table.

## Representation and practical work

Tray diagrams retain a visible boundary around each group, including deliberately unequal examples. Array diagrams show aligned rows/columns; a ringed counter supports visual tracking. Turning swaps the orientation while preserving every counter identity, the total, answers and notes. The native button retains keyboard focus and announces the change. The written row/column counts update with the picture.

Text alternatives describe tray quantities or rows and columns; they support access to the stated quantities without claiming equivalent visual counting or tactile attainment. Real-object work remains necessary. Every lesson links the existing [multiplication practical activity](../activities/p2-basic-multiplication.html) and inquiry sheet. The array investigation asks pupils to predict, turn and explain; story work asks them to invent and model an example. Adults can record counted, derived or recalled strategies and any help given. No speed threshold is imposed.

## Storage and compatibility

New records use `mathquiz-p2-multiply-v1-0`, `-1` and `-2`. Older number, arithmetic, faces and P1 tabs cannot erase the multiplication records. Each topic/learner keeps its own Continue route, answers, check and notes; reset remains limited to the current topic and pupil.

The common marker now accepts an explicitly authored list of equivalent field sequences where a question supplies one. Ordered arithmetic answers and labelled group fields retain their existing rules. The store and all three earlier P2 data files remain byte-for-byte unchanged. The common map adds a fourth topic and uses relevant P1 prerequisite links; faces links are limited to solids/flat outlines. Existing map tests were adjusted for the fourth topic link.

Browser checks use test-only keys, save their previous contents and restore them on completion. They do not operate on production learner records.

## Verification

Local: **691 distinct browser cases verified**. The new multiplication suite passed 95/95. The inherited suites were verified, including one exact successful rerun of `Measurement mobile teaching zh` after a page-load timeout. Browser-open inspection reported a detached child frame during rapid navigation, and one result read timed out; a later read returned the completed result. These observation errors are separate from test assertions.

All **23 static suites passed**, including eleven new gates. Independent repeated-addition arithmetic checks cover every numeric answer and accepted factor order; other gates cover the check-answer list, equal/unequal grouping, repeated-addition choices, all field labels, counter identities, topic/pupil isolation, full/corrupt/future records, preserved predecessor hashes, syntax and resource links.

Manual inspection covered the English array lesson on desktop and Chinese multiplication-entry fields at an actual 375-pixel viewport, with no horizontal overflow. Enter activated the array button, changed three rows of four to four rows of three, retained 12 counters and restored button focus. Automated layout cases cover 320, 375, 768 and 1280 pixels in both languages.

Public: **691 distinct cases verified**, with 2 exact successful timeout rerun(s). Original results and reruns are preserved in the evidence. Runtime deployment [44869664690](https://github.com/kochiuyu/mathquiz/actions/runs/44869664690) succeeded; all twelve deployed runtime/test files matched SHA-256 readback. Test-observer navigation/read errors are recorded separately from failed assertions.

## Remaining work

Next: build the remaining 2–10 facts across short sessions, then teach multiplication by 1 and 0. Keep fact construction, recall/derivation evidence and story modelling distinct. Metres and pictograms remain early parallel branches; later four-digit/money and angle/quadrilateral connections are unchanged.

Classroom trials, difficulty calibration, independent translation, screen-reader listening, physical printing and observed practical performance remain pending. The existing printable activity was linked, not newly print-validated.
