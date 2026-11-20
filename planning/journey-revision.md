# Learning journey revision: identity and difficulty

20 November 2026

## Published behaviour

Start / Continue learning remains the primary homepage action, with the lesson and (when relevant) difficulty shown directly below it. The three animal learner slots are now a collapsed **Switch learner** control below the pathway. They represent separate pupils using the same browser, not speeds, ability labels or accounts. Parent/teacher tools remain accessible.

Within each of the three P1 pilot lessons, the journey is **Learn → Try together → Practise (Easy → Normal → Difficult) → pathway quiz**. Each level has three questions: 27 independent-practice items across the pathway, including 18 newly written bilingual Normal/Difficult items. Easy retains the previous pictured practice. Normal removes support or changes the representation. Difficult asks pupils to check a claim, preserve a total, count on, or find a missing part. Values remain within 20, with counting tasks within 10. Difficulty is provisional, not a measure of speed or a pupil's identity.

Pupils may revisit or explore any level. Correcting all three answers completes that level; mistakes provide explanations and do not complete it. Completion after correction is practice completion, not a first-attempt or long-term mastery claim. Continue remembers the next unfinished level or lesson even if a pupil leaves before pressing Next. All nine level sets are required for a new six-question pathway check. The existing check samples the core lesson goals; it is not a certification of Difficult-level mastery. No timer, new account, new cookie or external tracking was added.

## Saved progress compatibility

The existing browser-local key and version-1 record are extended with per-lesson `levels` (Easy/Normal/Difficult answers and completion) and cursor `level`. On reading an older record, its previous independent-practice answers and completion become Easy answers/completion. Teaching steps, guided answers, active learner, other learner slots, quiz drafts and submitted quiz results remain. An old quiz draft is retained but a new submission requires the added levels; previous submitted results can still be opened from the pathway. A previous result is not erased merely by continuing the new levels. Retaking remains available after their completion. Older practice completion does not automatically imply completing new Normal/Difficult content.

The three learner records remain separate across all difficulty levels. Switching level never switches pupil; changing language preserves both. Reset affects the selected learner only. Storage-denied journeys work in memory during one visit. Existing cross-tab conflict handling prevents stale edits. Browser data clearing still removes progress; there is no cross-device sync. Other Smart practice tools retain their separate storage, explicitly labelled on the result screen.

## Verification

Local final focused suite: **18/18 composite browser cases passed**, including full English/Chinese journeys through all nine level sets, wrong and blank answers, quiz/review/retake, migration, per-level draft separation, next-level resume, three learner slots, reset isolation, invalid routes, cross-tab conflict and a complete storage-denied journey. Layout cases cover 320, 375, 768 and 1280 pixels in both languages. Chinese mobile homepage and Difficult practice were visually inspected; the first answer remained in the first screen.

Three static gates passed: student content/storage, resource routes and shared UI structure. These include the existing 162 generation cases and 12 quiz-attempt configurations plus all 27 levelled items; independent arithmetic expectations cover all 18 new items. Existing 270 curriculum + 30 TSA routes and 85 units/activities remain unchanged.

Development history: an initial local run passed 17/18 with a next-level-resume assertion failure; the isolated case and next full run passed. The test harness now clears the prior iframe before case setup to isolate its storage observer. The final complete run passed 18/18. Two initial static checks rejected an unnecessarily bumped cache tag for unchanged shared scripts; the unchanged script tags were restored and both gates passed. These were not hidden as clean first-run results.

Public verification: **all 18 distinct cases verified**. The full public run passed 17 and had one page-load timeout in `Layout en 375` at `learn.html?lesson=tens&stage=learn&lang=en`; the exact case rerun passed 1/1. The initial browser navigation call also timed out while the runner continued; it was read without reloading. All ten changed runtime/test assets matched their uploaded UTF-8/LF SHA-256 content. [Runtime commit 4897472](https://github.com/kochiuyu/mathquiz/commit/489747201d94b1812c1da3e11ae5a73b03d9ba97) deployed successfully (Pages run 44687192397). Exact results and limitations are recorded in [the evidence](journey-revision-evidence.json).

## Continuing the revision plan

This revision improves the existing three-lesson P1 pilot; it does not add full P1 teaching or change every existing skill bank. Next content work should add a prerequisite-sized P1 pathway using the same teaching, guided practice, difficulty progression and short-check structure. Review the teaching with pupils before treating thresholds or difficulty labels as calibrated. Preserve existing saved records with explicit migration, use one record per learner across levels, and test language changes, mobile first-action placement, resumes and storage failures before publication.

Pupil trials, independent translation review, assistive-technology listening and cross-device manual testing remain pending. The broader 267-case shared browser suite was not rerun for this revision; this release ran the focused student journeys, teacher gateway cases and the two relevant shared static gates.
