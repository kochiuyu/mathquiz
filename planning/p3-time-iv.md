# P3 Time (IV) · 3M4

**Local candidate, not resource complete.** Prepared 17 November 2026 after R9 closure with the capacity candidate retained. Two new families add 24 variants: `write24hour3a` and `read24hour3a`, 12 each. All 1,941 previous payloads retain their original digests. Totals: 123 permanent families /1,965 variants,122 selectable /1,950;44 selectable units and48 resource units. Completion counts remain the integrated predecessor's verified checkpoint.

## Source audit and limits

Read [EDB supplement PDF53, printed50](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=53) and [KS1 notes PDF61, printed55](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=61). Two objectives: recognise 24-hour time and tell time using it. Notes include HH:MM pairs, day-start 00:00/day-end24:00, and connection to12-hour notation. Elapsed-time problems using24-hour notation are deferred to6M4 and are excluded here.

## Pupil evidence

[English](../activities/p3-time-iv.html?lang=en) · [Chinese](../activities/p3-time-iv.html?lang=zh) · [English key](../activities/p3-time-iv.html?lang=en&key=1) · [Chinese key](../activities/p3-time-iv.html?lang=zh&key=1)

| Objective | Pupil action and marking evidence |
|---|---|
| 1 Recognise24-hour time | Activity1 explains ambiguity of7:30 without morning/evening; activity2 identifies hour/minute pairs and zero padding; activities3–4 distinguish noon, midnight and named-day start/end. Teacher listens and checks annotations. |
| 2 Tell time | Activities5–6 require written24-hour times, oral12-hour equivalents and corrections of noon/midnight errors. The two digital families ask for equivalent representations in both directions; choice answers award one mark. |

The12 cases per direction span midnight start,00:05,06:30,09:07,11:59,noon,12:15,13:05,16:45,20:08,23:59 and midnight end. Midnight options explicitly identify start/end of the stated day, preventing00:00 and24:00 from being ambiguous alternatives. All distractors use valid time pairs; each of four answer positions occurs three times. Bilingual worked answers explain the digit pairs and day boundaries. Practice hints retain grade3/language routes and six targeted samples per family. Choice scoring remains exact; no numeric parsing or existing marks changed.

Three pupil sheets and two teacher sheets per language supply written and oral evidence separately. No elapsed-time calculations, practical timing tasks or pupil-mastery claims. Teacher recording distinguishes independent, prompted, not yet and not observed performance.

## Verification and handoff

Six static gates pass: existing static/P2/P3/next-four/capacity plus `node tests/p3-time-iv-static.cjs`. The new gate uses explicit independent time-answer tables, validity/uniqueness of options, balanced positions and bilingual activity structure. Existing digest gates prove all prior variants unchanged. PDF text font rebuilt with new glyphs; font and script cache versions incremented.

**365 authored browser checks, not a passed browser result.** The suite adds two dynamic family checks, two full bilingual route checks and a unit-specific oracle/activity check. Existing wrong-choice/retry, practice and paper/key/PDF gates now include the new IDs; teacher route tests include the new activity. Confirm final observed test count when run. Manual downloaded-PDF pagination, physical printing, classroom use, independent translation and accessibility remain unperformed.

Last verified release: predecessor checkpoint, not this unit. Objectives closed: none newly claimed. Independent review passed with no blockers; explicit Chinese-answer oracles and a reverse-direction practice hint were added after review. Remaining gap: local/deployed verification. Next pupil task: recognition and telling time via the linked activity and families. After closure continue3M5 Weight.

## Private browser checkpoint · 17 November 2026

The corrected integrated candidate passed **365/365 private browser checks, zero failures**, following all six static gates. A prior run had 363 passes and two retry-feedback assertion failures because the test helper used three default samples while each new practice uses six. The fixture now lists the actual six samples and asserts the displayed prompt before answering; all hint, retry, repeated-submission and completion assertions remain. No question payload or app behavior changed for this fix. Earlier authored-only wording records the pre-run stage. Public deployment and a fresh live suite are still required before unit completion.
