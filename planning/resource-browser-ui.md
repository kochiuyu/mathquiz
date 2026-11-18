# Find resources UI improvement · 18 November 2026

## Goal

Help a pupil, parent or teacher find the right resource after the addition of three difficulty levels. Keep the existing cream/green visual style, but reduce the space before results and explain the available actions clearly.

## Implemented plan

| Area | Change | Acceptance evidence |
| --- | --- | --- |
| Page hierarchy | Compact heading and one contextual link to the P1–P4 level directory; desktop filters sit beside results. | Both library entry routes show the first unit above 620 px at 1024/1440 px widths in both languages. |
| Year choice | All / P1–P6 buttons are visible without opening advanced filters. | Exact year counts, active state and resource routes checked for six grades and both languages. |
| Resource choice | All resources, Levelled practice, Quiz questions and Teacher activities shortcuts; Quick practice and Planned units remain in advanced filters. | Each type selects the intended resources and primary card action. |
| Search and filters | Search either language, a skill ID, a topic or unit code; removable chips; narrower strand/unit filters; clear and useful empty states. | Search, combinations, unit invalidation, chip removal, clear and rapid typing followed by another action. |
| Difficulty | One Easy / Normal / Difficult choice controls each exact skill link. Default is Normal; no assumption that existing quizzes are Easy. | All 165 P1–P4 routes checked at all three levels; actual selected bank navigation checked for each grade. |
| Card actions | Short labels distinguish Practise at the selected level, Quick practice and Use in a quiz. Accessible names retain the full skill. | Existing core routes remain valid, and the correct action leads in each resource mode. |
| Counts | Show separate skill, unit and unique activity counts; distinguish 12 questions per difficulty level from core quiz variants. | All 187 selectable families, 85 units and 59 unique activity paths represented; cross-unit activities counted once in the total. |
| Reading density | Cards / List toggle; expand/collapse all shown units; lazy question previews. | Layout state is shareable, unit expansion survives layout changes, and previews match their skill without revealing answers. |
| Mobile | Single-column filters, seven compact year buttons and a Show results jump. Navigation wraps when text is enlarged. | 320, 375, 768, 1024 and 1440 px checks in both languages; 200% text checks; result jump and visible control labels. |
| State | Shareable URLs retain grade, strand, unit, type, search, level and layout. Back/Forward and language changes keep them. | Navigation and pending search input checked. No new local storage or pupil tracking. |
| Alternate entry | `coverage.html` uses the same library and is excluded from quiz-only enhancements. | It receives no answered-question counter or decimal search keyboard and retains the library layout. |

## Scope and boundaries

- The library covers P1–P6. Levelled practice remains P1–P4 only; a P5/P6 level filter explains the limit and offers that grade's existing resources.
- All-years results begin with collapsed unit headings; a selected year, unit or search opens matching units. Expansion controls affect the shown units only.
- Teacher activities retain their own cards and practical evidence. Curriculum source links and resource-completion badges remain available.
- The level selector changes **levelled practice links**. It does not change the difficulty of original quick practice or quiz-builder items. These resources keep separate labels.
- The mixed builder, marking, diagrams, question banks, stable item IDs, papers and worked keys are not redesigned in this release.
- No new curriculum coverage or pupil mastery is claimed.

## Verification

Run `tests/resources-ui-static.cjs`, the existing core/UI/level-navigation static gates, `tests/resources-ui-regression.html` (97 cases), `tests/ui-regression.html` (193 cases), and the existing level-navigation case named “Home and library level entries”.

The dedicated suite checks both entry points, both languages, all grade/resource filters, all difficulty links, navigation state, responsive controls and enlarged text. The shared suite checks the existing home, builder, pupil and print-related interface contracts. Release results and any failed attempts are recorded in [resource-browser-evidence.json](resource-browser-evidence.json). The full historical mathematics browser suite is outside this UI-only change; frozen core hashes and unchanged bank files establish content preservation.

Automated checks and screenshot inspection do not replace pupil usability sessions, independent translation review, physical printing or a full screen-reader assessment. Those remain deferred.
