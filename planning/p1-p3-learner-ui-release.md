# P1–P3 learner interface alignment

23 November 2026. User-requested interface work before P4 planning.

## Learner-facing changes

- One bilingual header across P1, P2 and P3: year, language and the current learner are visible in the same places.
- Lessons, Application review and Practice bank have consistent names and links. The older practice banks explicitly say their results are separate from lesson records.
- A compact, searchable topic chooser covers all 45 guided topics and 213 lessons. It opens on demand; current topic and lesson position remain visible.
- Lesson stages use **Learn → Try together → Practise**, with separate **Easy / Normal / Difficult** practice choices. Difficulty is never presented as a pupil profile.
- Shared typography, spacing, buttons, focus outlines and phone layouts make the year groups feel related. P3 prerequisite links are grouped below its main action, and the next practice set is named explicitly.
- Saved work and reset settings remain available. Existing P1 quiz requirements, P2 checks, P3 first-response/retry rules and practical observations retain their native behavior.

Entry pages: `index.html` (learner home), `learn.html`, `p2-learn.html`, `p3-learn.html`, all three application-review pages, `p2-investigate.html`, and all three practice-bank menus. Teacher tools, generated quizzes, printable activities and papers keep their existing interfaces; this release does not redesign those tools.

## Compatibility

The shared layer changes presentation and navigation only. It does not access browser storage, replace answer forms, alter question data or add a new progress schema. Existing native learner selectors retain their bound handlers. P1 and P2 selectors call the original switching controls.

P1 application review previously ignored an explicit `learner` URL parameter. It now selects that existing pupil before displaying records, matching other learner routes. This uses the current store, preserves other profiles, and changes only the active selection. No saved work is migrated or deleted.

Normal learning records are not touched by the test harness. It backs up, isolates and restores the separate test records. Eighty-two existing content, storage, model and notebook files have exact byte/hash preservation checks. Topic catalog labels are checked independently, including the P2 numbers metadata supplied by its topic loader.

## Verification and limitations

**All 166 focused browser cases passed in the final local run and all 166 passed live, without retries in either final run.** Eight current static suites passed, including five shared-interface gates. All 22 runtime/test files matched the repository and deployed content, and all eight exact versioned asset URLs matched. The runtime deployment succeeded.

Detailed results, original failures and exact reruns are recorded in [the evidence](p1-p3-learner-ui-evidence.json). The focused browser suite covers both languages, every topic, native answer submission/reload, pupil isolation, review selection, search, invalid-link fallback and 320/768/1280-pixel layouts. Static checks cover the shared assets and existing grade stores and review contracts.

During development the P2 catalog omitted the numbers topic label because that label is normally supplied by a separate loader. The full local browser run exposed it; the catalog was corrected and a label-inventory gate added. A preservation test initially assumed more than 100 files; the explicit manifest records the actual 82. Two new answer-isolation tests initially expected pupil switching to stay on the answer form; the native action returns to the topic map. They now reopen the same lesson before inspecting the other pupil's answer. An older P3 release audit compares the entire site with its historical snapshot and flags the intentional P1 review edit; its thirteen mathematical/storage checks pass, and current preservation is verified by the new scoped manifest.

Visual inspection samples P1 English teaching, P2 Chinese teaching and P3 English practice on a phone, with a desktop sample. Automated viewport checks cover all three grades in both languages. These checks demonstrate navigation and compatibility, not that pupils find the interface intuitive. Classroom usability, independent translation review and screen-reader listening remain pending.

## Handoff

P4 planning follows this interface release. Use the common learner navigation for new guided pages, preserve the three separate pupil records, and keep difficulty within each skill. Gather pupil feedback on finding a topic, resuming a lesson, choosing difficulty and distinguishing review from practice; adjust from observations without changing earlier assessment claims.
