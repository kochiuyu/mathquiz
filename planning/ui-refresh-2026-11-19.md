# Whole-site UI refresh

This implements the approved 19 November 2026 UI review while retaining the existing green/beige identity and mathematical assessment rules.

## Discovery and counts

The main resource library now includes the same 300 practice types as the level directory: 270 curriculum-linked types and 30 original MathQuiz adaptations informed by HKEAA P3/P6 assessment materials. The source filter, bilingual search, grade choices and links use shared catalogue metadata. Searching TSA, HKEAA, 考評局, an item reference or a verified BC reference can find the corresponding additions.

The curriculum inventory remains 85 official units and 85 activities. The two local review groups are displayed and counted separately. TSA additions have levelled practice, Smart practice and paper routes; they are not falsely offered through the older mixed-quiz builder. Each retains its assessment attribution, optional extension label and, for P6, the supplied materials’ voluntary-participation context.

Year pages start with collapsed topic summaries. Searching or choosing a specific unit opens relevant results. Expand/collapse controls remain available. Homepage year choices precede the secondary sections and illustrations are removed from the narrow-screen hero. The six grade counts and the site-wide count come from the same manifest.

## Practice and navigation

The main navigation consistently offers Home, Practise, Create a quiz and Activities. Curriculum information remains linked from the footer and topic reference panels. The level directory remains a direct alternative for choosing a level; fixed-level practice and Smart practice use a lighter pupil header.

Question content appears before practice settings and explanatory panels. Sound remains an optional control below the exercise and survives Smart rerenders. Question IDs and full HKEAA references remain available in disclosures; a visible summary identifies HKEAA as the assessment reference and MathQuiz as the adaptation or extension author. Before printing, source disclosures open; afterwards their screen state is restored.

## Worksheets and notation

All 85 activity pages load the common presentation assets and provide English/Traditional Chinese controls. Language changes preserve the teacher-key state and return links retain the unit and grade. Two P6 pupil instructions were rewritten as pupil actions; teacher observation guidance remains in the keys.

Display fractions have stacked numerators and denominators with an accessible spoken label. Multiplication in numeric algebra expressions uses × rather than programming-style asterisks. This is presentation only: inputs, expected answers, parsers and question payloads are unchanged. Dates, URLs, grade pairs and zero-denominator strings are excluded from fraction formatting.

Example quizzes retain their topic names in pupil, paper and key views. Paper/key switching is explicit. Browser printing is the main export action; the existing beta PDF download remains under additional export options.

## Verification

Published runtime: `7f5abce4920332debbaa0bedb73fe3386f1b4ab1`. Nine static suites pass. Browser coverage has **911 passing cases and zero unresolved failures**: 267 dedicated whole-site cases, 156 P6 TSA cases, 101 resource-library cases and 387 level-navigation/session cases. The final grade sweep includes phone layouts for all 300 practice types, all six grades, language transfer and 200% text. [Detailed evidence and scope](ui-refresh-live-evidence.json).

The initial whole-site run found seven failed cases: duplicate paper/key switches, the legacy P1 oral-number activity lacking a teacher-key control, and long teacher text overflowing on two P4 worksheets. The two paper-language cases and six affected activity-language cases, plus activity-manifest setup, passed after correction. Other passing cases are carried forward; this does not claim all 911 were rerun on the final commit. The complete 387-case level sweep ran on the final runtime.

At a 375×812px viewport, the sampled Chinese homepage year section moved from approximately y=1,843px to y=458px, and the English P3 five-digit composition answer field moved from approximately y=950px to y=531px. These are measurements of those sampled pages, not universal height guarantees.

`tests/ui-refresh-static.cjs` checks catalogue identity, official/local unit separation, existing core routes, notation boundaries, shared assets and all 85 activity integrations. Existing resource/navigation and P3/P6/Smart static checks are retained. Earlier UI browser runners were aligned with the expanded catalogue and compact year summaries; their original mathematical assertions remain intact.

The dedicated [browser harness](https://kochiuyu.github.io/mathquiz/tests/ui-refresh.html) checks both languages, all six grades, 320/375/768/1280px layouts, search/source/reset behaviour, paper/key correspondence, Smart marking and progress, and every activity’s language/key behaviour. Use `scope=main` or `scope=activities` for separate runs. Live results are recorded after verification. These are browser-view and functional checks, not a claim of physical printing or classroom trials.
