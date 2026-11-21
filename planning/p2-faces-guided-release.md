# P2 solid faces and bases · guided release

Date: 21 November 2026. Baseline `30779520765bcf46f021602188c0432f874a7d07`; runtime `735f8eea4160d6e4ba21067693aaa51b5e55ded8`.

[Open the pathway](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=faces) · [Traditional Chinese](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=faces&lang=zh) · [Evidence](p2-faces-guided-evidence.json)

## Learning sequence and scope

This third P2 topic alternates into the shapes branch. It revisits P1 real solids and flat outlines without requiring arithmetic completion. The sequence is touch → trace → locate selected bases and lateral faces → name by base → turn and explain. Later angle teaching still precedes formal quadrilateral properties.

Rechecked against [EDB 2017 supplement, PDF page 37 / printed 34](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=37) and [EDB KS1 notes, PDF page 41 / printed 35](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=41). These specify faces/surfaces and prism/pyramid names. The examples use right solids and familiar base outlines; cube/cuboid subdivisions, nets, edge/vertex counting, surface area and volume are outside this slice.

| Lesson | Objective and pupil action |
| --- | --- |
| Touch flat and curved surfaces | 2S1.1: distinguish flat faces from curved surfaces; cylinder has two flat circular bases, cone one, sphere none; trace a face without confusing its outline with the whole solid. |
| Find a prism’s bases and lateral faces | 2S1.1: match the selected base pair; identify lateral faces intuitively as rectangles/squares or quadrilaterals; retain the chosen pair when turning. |
| Find a pyramid’s base and lateral faces | 2S1.1: locate the selected base and triangular lateral faces, including turned models. |
| Name solids from their bases | 2S1.2: all eight triangular/quadrilateral/pentagonal/hexagonal prism/pyramid names. |
| Turn, compare and explain | Both objectives: test whether turning changes a name; challenge “table face means base” and “triangular lateral face means triangular pyramid.” |

Five bilingual lessons contain 15 teaching explanations, 10 guided tasks, 45 practice tasks and a separate ten-question check. P2 totals: three guided topics, 16 lessons and 144 practice tasks. Earlier P1 lessons and all existing practice banks are unchanged.

## Diagrams and practical evidence

Code-native SVG diagrams mark bases B/B′, a lateral face L or curved surface C. The marks and descriptions supplement colour. Solid and separate traced outline are explicitly distinguished. The Turn model button rotates the picture in quarter-turns, retains the labelled base, announces the action and keeps keyboard focus. It is a rotated drawing, not a freely manipulable three-dimensional simulation. Turning does not alter answers or marks.

The solid viewing angle shows multiple visible faces where possible. Hidden geometry uses dashed lines; labels use the largest visible lateral face. A marked base pair avoids ambiguity for prisms permitting another valid choice. A pyramid’s selected base remains fixed throughout each task.

Some questions supply the solid family and an outlined base. Their marks demonstrate naming from supplied information, not independent recognition of an unfamiliar real solid. Text alternatives describe the model, including base side counts where relevant; screen-reader users may therefore answer through verbal facts. This is not evidence of equivalent visual or tactile attainment.

Every lesson links the existing bilingual [2S1 practical activity](../activities/p2-3d-shapes-ii.html) and inquiry resource. Practical prompts require touching, tracing, matching, turning and naming without supplied family hints. The final investigation asks pupils to predict, try and explain. Optional observations and explanations are saved separately from marks; assistance should be recorded. No automatic score certifies practical skill or full curriculum mastery.

## Compatibility

The topic uses `mathquiz-p2-faces-v1-0`, `-1` and `-2`, independently of the number/arithmetic topic keys and P1. Older tabs cannot erase unknown shapes fields. Each topic has its own Continue route, answers, notes and check. Reset affects only the current topic and learner. Original P2 number data, arithmetic data and shared store bytes are unchanged.

The shared app now selects three topics and derives the test-only key from each topic’s storage key. The arithmetic map test was updated only for the additional topic link. Browser suites preserve and restore test keys; production learner records are not used by the suites. The existing bounded store retains corruption/future-version protection, stale-tab updates and storage-failure fallback.

## Verification

Local: **596 distinct cases verified**. The initial new suite had ten test-script errors (`const` variables reassigned during reload verification); the initial exact reruns reproduced them. After changing those test variables to `let`, the complete 92-case faces suite passed. The 504 inherited cases were verified, including one exact rerun of `Money layout zh 768` after a navigation timeout. One result-inspection call timed out; the later read returned complete results. These events are retained in the evidence rather than treated as first-run passes.

All 22 static suites passed: the inherited 21 suites plus ten faces gates. Checks include an independent check-answer list, all eight naming combinations, convex polygon side counts/bounds, bilingual fields, topic/pupil isolation, full records, malformed/future records, preserved earlier data hashes and script/resource links.

Manual inspection covered English solid/base comparisons on desktop and Chinese turned-pyramid teaching on a 375-pixel viewport, including rotation focus and absence of horizontal overflow. The environment initially reported 360 pixels; actual `innerWidth` after navigation was 375, which is the recorded manual measurement. Automated layout checks also covered 320, 375, 768 and 1280 pixels in both languages.

Public: **596 distinct cases verified**, with 3 exact successful timeout rerun(s). The full run and original failures are recorded in the evidence. Runtime deployment [44864681709](https://github.com/kochiuyu/mathquiz/actions/runs/44864681709) succeeded; all eleven deployed runtime/test files matched SHA-256 readback. An early read during deployment returned old files/404s; the complete post-deployment read matched. Browser navigation/status-observer timeouts are recorded separately from test failures.

## Remaining review and next step

Classroom trials, difficulty calibration, independent translation, screen-reader listening, physical printing and observed real-object performance remain pending. Existing printed activities were linked; this release does not claim a new print-layout review.

Next: multiplication meaning through equal groups and arrays (2N3), followed by its staged facts practice and the planned metres/pictogram branches. Preserve the later connections 2N4 → money → subtraction/change and angles → quadrilateral properties.
