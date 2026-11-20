# Integrated P1 investigations

20 November 2026. Thirteen optional bilingual investigations, one within each existing teaching pathway.

[Try an investigation](https://kochiuyu.github.io/mathquiz/learn.html?path=measure&investigate=1) · [Evidence](p1-integrated-inquiry-evidence.json)

## Curriculum and pupil experience

The [EDB Key Stage1 explanatory notes, printed page18](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=24) describe 1F1 as inquiry integrated into other mathematics units, rather than an isolated subject. The new activities therefore sit inside the13 existing pathways. They do not add a fourteenth path, a quiz pass condition or a claim that the prescribed learning time has been completed.

Each investigation asks pupils to predict, try and notice, then explain or extend. Ideas can be spoken, drawn on paper or typed with help. The main Start/Continue action remains first. A secondary “Investigate this topic” button opens the relevant activity. The same optional panel is available below lesson content and results, hidden during understanding checks, with its supporting-adult notes collapsed initially. `investigate=1` opens and focuses the panel for direct links.

| Pathway | Investigation | Evidence to discuss |
|---|---|---|
| Numbers and addition to20 | Rearrange8 counters without adding/removing | Count each once; distinguish arrangement and quantity. |
| Number bonds/subtraction | Split8 between labelled non-empty trays | Keep the rule fixed, organise attempts, avoid duplicates; extend to6. |
| Numbers to100 | Regroup24 sticks | Distinguish bundles from individual sticks; check the same quantity. |
| Group counting | Count20 in twos and fives | Compare methods and totals without a speed contest. |
| Positions, pairs, differences | Pair8/9, then10/11 | Reorder without changing whether a counter remains. |
| Calculation | Add8+7+2 in two groupings | Explain a useful pair and check the total with objects. |
| Length/distance | Measure one strip with two unit sizes | Keep strip/start fixed; report both unit and count. |
| Centimetres | Use a measured personal reference | Keep estimate and real measurement; improve the next estimate. |
| Money | Make$5 with different coins | Distinguish number of coins from total value; stay within P1 dollars. |
| Time/calendar | Compare same-weekday dates | Use column headings and repeated examples within one month. |
| Solid shapes | Turn a cylinder and test again | Record actual behaviour; placement changes, family does not. |
| Flat shapes | Join two matching triangle pieces | Distinguish pieces, outside boundary and internal join. |
| Relative positions | Swap objects from a fixed viewpoint | Explain clearly enough for a partner to recreate the arrangement. |

All prompts are original. Adult guidance offers preparation and checking cues without placing conclusions in the initial pupil prompts. Practical observations remain essential: a pupil's tick or note cannot certify what an adult saw. The existing bilingual [printable inquiry sheet](../activities/p1-inquiry.html) remains unchanged and is linked from the adult panel.

## Notes and continuity

Three optional fields—prediction, actual observation and explanation/next question—hold up to240 characters each. “I tried this activity” is explicitly a pupil self-report, not an assessment. Notes are saved independently for each pathway and each of the three existing pupils. Language changes retain the same notes; the site does not translate pupils' own words. Clearing one pupil's progress also clears that pupil's notes, with the existing confirmation text updated to say so.

No inquiry scores, automatic correctness checks, mastery badges, mandatory writing or minimum speed are added. Notes never change quiz scores, lesson completion or the saved lesson cursor. The teaching totals remain **13 pathways,39 lessons and351 levelled practice items**. Curriculum/assessment banks and adult tools are unchanged.

Storage retains the version1 device-local key. Old records migrate with empty inquiry notes. No accounts, analytics submission or cross-device sync are introduced. Typed notes are escaped before rendering, restricted to known pathway keys and bounded on both input and read. Control characters and lone surrogate fragments are removed; valid multilingual text and emoji are retained. The cap increases to236,224 characters; the fully populated three-pupil fixture with worst-case escaped notes occupies101,968 characters. Tests cover boundaries, unavailable storage, language changes, reset isolation and stale-tab writes.

## Verification

All **204 local browser cases are verified**:16/16 inquiry cases, plus187/188 student-flow cases in the final full run and1 successful exact timeout rerun(s). Sixteen static gates passed. Public verification is pending.

The new16-case browser suite checks all13 pathways in both languages, four viewport widths, direct opening, saved notes, separate pupils, reset, text injection,240-character limits, unavailable storage, stale-tab protection and the existing packet. The188-case student suite checks previous teaching/practice/check flows. Sixteen static gates check earlier content, numeric scope, storage and resource routes. Earlier complete lesson/question payloads are hashed against the positions release.

Development regression checks found the optional guidance appearing during a quiz. Investigations are now hidden during all13 pathway checks and restored with saved notes on results; a dedicated regression case verifies this.

Representative English and Chinese mobile panels were visually inspected. The broader267-case adult/shared-UI browser suite is not repeated. Classroom usability, independent translation, screen-reader listening and physical printing remain pending. No full-P1-completion or observed-inquiry claim is made.

## Next phase and reusable workflow

Next: **P1 journey and coverage review**. Map each official objective to teaching, practice and required practical evidence; resolve any gaps and improve how pupils find their next topic before expanding guided teaching into P2. Human trials remain a separate open item.

For further investigations: select a concept already taught; choose a manageable change with something held fixed; write a prediction, concrete trial and evidence-based explanation prompt; provide an extension; check numeric/curriculum limits; keep adult conclusions collapsed; preserve records and grades; verify both languages, mobile and failure states; publish with an expected-head check; read back deployed assets and record exact results.
