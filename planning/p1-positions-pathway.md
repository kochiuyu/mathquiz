# P1 teaching pathway: where are things?

20 November 2026. Thirteenth pathway, with original English and Traditional Chinese teaching.

[Start Where are things?](https://kochiuyu.github.io/mathquiz/learn.html?path=positions) · [Evidence](p1-positions-evidence.json)

## Scope and teaching choices

The [EDB Key Stage 1 explanatory notes, printed page 17](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=23) define 1S3 using seven positional terms from the observer's viewpoint. Simple pictures and real-object experiences are both needed. This release keeps left/right anchored to the pupil looking at the page, without facing-person reversals, compass directions, turns or complicated relationship puzzles.

| Lesson | Teaching | Easy → Normal → Difficult |
|---|---|---|
| Left and right / 左和右 | Own viewpoint; name both objects; swap and describe again. | Select a position; change the reference object; check a pupil's claim. |
| Over and under / 上和下 | Above/below in a vertical arrangement; reverse the description; check a changed scene. | Select a position; describe the other object; accept or reject a claim. |
| In front, behind and between / 前、後和中間 | Nearer/farther from the marked observer; distinguish floor distance from height; between two named neighbours. | Read a simple floor plan or row; switch the target; check between and endpoint claims. |

Three teaching steps, two guided items and nine levelled practice items per lesson give **27 new practice items**. Totals are **13 pathways, 39 lessons and 351 levelled practice items**. The separate check has six questions, two per lesson. Its three deterministic, overlapping retake configurations are not independent assessments. Practice can complete after correction; the 5/6 next-step recommendation remains provisional, not calibrated mastery.

## Pictures and practical work

Original SVGs show a labelled ball, book and cup, using shape and text as well as colour. Horizontal and vertical pictures have distinct arrangements. Front/behind uses a floor plan with an observer arrow at the bottom, a visible caption and accessible text specifying near/far; it is explicitly not a vertical height diagram. Between tasks stay in a simple row of three objects. Alternative descriptions convey the visual relationships; independent screen-reader listening remains pending. Plan-view comprehension should be checked with pupils during trials.

The preceding flat-shape pathway now leads here. A collapsed practical section and the final successful result open the existing [P1 directions activity](../activities/p1-directions.html) in the selected language, with its teacher key initially hidden. Children describe real arrangements from a marked viewing spot; an adult observes expressive use of all seven terms. Multiple-choice answers cannot certify this practical ability. No unrelated Smart skill is substituted for this activity.

## Compatibility

Path `positions`, lessons `leftright`, `overunder`, `frontbetween`, separate check and saved path cursor. All earlier complete question payloads are hashed against the previous release. Three separate pupils retain version-1 device-local storage; they are not speed or difficulty profiles. No account, tracking cookies or cross-device synchronisation are added. Adult tools and the separate 270 curriculum-linked + 30 TSA-informed type counts are unchanged.

The schema-based read cap is **76,480 characters**; the fully populated three-pupil fixture is **43,129 characters**. Tests cover earlier scores, zero/100, malformed and boundary records, language changes, reset isolation and unavailable storage. Reading an unreadable record does not overwrite it.

## Verification

All **188 local browser cases are verified**: 187 passed in the final full run; one timeout passed its exact rerun. Fifteen static gates passed. All **188 public browser cases are verified**: 186 passed in the full run; two timeouts passed exact reruns. Runtime deployment succeeded and all twenty-two changed runtime/test files matched their tested hashes.

Fifteen static gates cover all pathways and shared resource/UI boundaries. New answer checks independently derive relations from coordinates, test 216 generated items, all 27 practice items and twelve checks, including all seven terms and not-between. The 188-case student browser suite retains 173 earlier cases and adds 15 covering both languages, blank/wrong answers, retakes, four widths, mobile actions, continued learning, denied storage, scene descriptions and the activity link. Exact timeout failures and retries are recorded, rather than representing a partial run as a pass.

Development checks caught an incorrect lesson ID in copied test routes and an English mobile layout that placed actions too low. The routes were corrected, a literal-route guard was added, and the title, claim prompt and observer caption spacing were shortened. The final full suite was then run on the corrected version. Public hash comparison also identified connector line-ending normalisation; all22 collected public hashes match canonical LF source, with unchanged text. Exact development failures and network retries remain in the evidence.

The broader 267-case shared UI/activity browser suite is not repeated. Pupil calibration, independent translation review, screen-reader listening, physical printing and observed real-object descriptions remain pending. This is not a claim of full P1 completion.

## Next phase and repeatable workflow

Next: **integrated P1 inquiry (1F1)**. The [notes, printed page 18](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=24) treat inquiry as activities embedded in other units, not a disconnected subject. Link investigation opportunities to the existing pathways and distinguish digital records from adult observation.

Workflow: verify official scope; author original bilingual teaching and models; independently derive answers from the models; protect old payloads and records; test both languages, responsive layouts, failure states and practical links; inspect sample visuals; publish with an expected-head check; verify deployed hashes and exact documents; record all failures, retries and outstanding human checks.
