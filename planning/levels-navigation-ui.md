# UI for the P1–P4 difficulty rollout

## Problem and design

The four difficulty banks cover 165 skills, but entry links accumulated below the Home page's quick-start area. Each bank opened a default skill, offered a long dropdown and placed the full setup form before the first question. Switching grade meant returning to the resource library. Papers and keys were at the bottom of a question set.

This release makes the decision sequence explicit: **year → level → skill → three-question set**. It uses the existing green/cream MathQuiz styling and English/Traditional Chinese labels. A searchable directory is a navigation layer over the published banks; it contains labels and routes, not question or answer payloads.

## Implemented plan

1. **One practice entrance.** Home's primary practice action and a single summary panel open `skill-levels.html`. The main navigation gains “Practise by level”. The resource library uses one contextual panel; it follows the selected P1–P4 grade and disappears for P5/P6.
2. **Visible year selection.** P1, P2, P3 and P4 show their exact 38/41/35/51 skill counts. The page links to the wider library for P5/P6 and hands-on resources without implying those grades already have difficulty banks.
3. **Explain the learning demand before starting.** Three native radio choices show Easy with guidance, Normal independent application, and Difficult checking/reasoning. They select the level for every displayed skill link. These remain provisional teaching options, not pupil ability labels.
4. **Search within a grade.** Search matches either language, skill IDs, unit names and unit codes. An optional unit selector, result count, empty state and clear action support finding a specific skill. Results are grouped by unit; each card starts the exact skill, chosen level and first stable set of three.
5. **Shareable navigation.** Grade, level, unit, search and language are represented in the URL. Back/Forward restore filters. Language changes retain them. Clearing search retains the chosen grade and level.
6. **Questions earlier on the page.** Every P1–P4 session has the same compact heading and a collapsed “Change skill, level or set” panel. Opening it reveals the original skill/set selectors and clearer level radio choices. Changing settings takes effect only on “Start this set”. Original marking code and response fields are preserved.
7. **Consistent views.** Practise, Pupil paper and Worked key appear above the questions with an active-state label. Printed papers and keys have an explicit document-type heading. View/set changes retain their original fresh-page behaviour; the on-page note explains that language switching retains answers.
8. **A useful next step.** A labelled progress bar accompanies the answered count. After marking, pupils can retry, move to the next of the four sets, change level, or choose another skill. No nonexistent fifth set is offered. This does not automatically promote a pupil or infer mastery.
9. **Responsive and accessible controls.** Native radios, labels, visible focus, a question skip link, semantic navigation, live result counts, wrapping cards and reduced-motion support work at narrow widths and enlarged text. Shared print rules hide navigation and retain the original question/answer content.
10. **Verify and publish.** Check the exact directory against each bank, all 165 skill pages at phone width, representative bilingual marking/paper/key flows at every level, draft and marked language retention, filters/history, enlarged text, and the existing shared UI suite. Freeze all question-bank and marking files. Record actual results and any failures rather than overwriting their history.

## Boundaries

- P1–P4 question IDs, answers, content, marking, stable sets and core curriculum flags are unchanged.
- These skill banks remain separate from the mixed-quiz builder. Browser Print / Save as PDF is available; direct PDF export is not added here.
- No accounts, tracking, ability ratings, cross-device progress or persistent pupil records are introduced.
- The original P1 unit collections and teacher-observed inquiry activities remain in the resource library.
- This release does not claim pupil calibration, classroom usability trials, independent translation review, physical-print review or a full assistive-technology audit.

## Verification

The [runtime release](https://github.com/kochiuyu/mathquiz/commit/70766782b308f2e39b0d8016342edc17be983791) is deployed. All 228 distinct level-navigation/session cases and 193 shared UI cases are verified locally and publicly. Both level-UI full runs had one page-load timeout; exact isolated reruns passed. The shared UI full runs passed 193/193 without failures. Seven static gates passed, and all thirteen changed runtime assets match the deployed site. See [the evidence record](levels-navigation-evidence.json) for the original failures, reruns, exact case scope and limitations.
