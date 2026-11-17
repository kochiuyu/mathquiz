# 4D1 Bar charts (II): private candidate, incomplete

Four numbered objectives, not three. Published coverage is 51 units, 200 numbered objectives plus three inquiry statements; private work does not promote completion. New families add36 variants; all172 predecessor families/2625variants remain frozen. The combined private browser run now passes 549/549 curriculum and 187/187 UI checks; public deployment verification remains pending.

## Official scope and evidence

[EDB KS2 printed22/PDF28](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=28) and [supplement printed71–72/PDF74–75](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=74) specify recognition, interpretation, approximate values and construction. Both orientations and scales10/50/100 are required. Rounding here is to tens/hundreds, not nearest50; no half-step requirement was found. Classification, frequency tables, magnitude-appropriate scale and rounding support construction. Supplying a chart is not evidence a pupil constructed one.

| Objective | Digital evidence | Teacher-observed evidence |
|---|---|---|
|1 Recognise greater-frequency charts|barscale4a: smallest fitting permitted scale under an explicit six-interval constraint; frozenbar4a|Explain why unit-scale is inconvenient; justify a scale for actual data|
|2 Interpret|frozenbar4a single-bar readings;barcompare4a differences/totals at all three scales and both orientations|Read peer charts and check category/table/bar agreement|
|3 Approximate values|barapprox4a: rounding to tens/hundreds, ties, carry, exact multiples and rounding tozero|Record exact and approximate counts separately; explain information lost|
|4 Construct|No claim that choice questions establish construction|Classify supplied and actual anonymous data; frequency tables; original horizontal and vertical charts, teacher rubric|

[Bilingual practical activity](../activities/p4-bar-charts-ii.html) has eight task groups. Supplied examples are not claimed as collected data. Actual pupil observations remain blank and the teacher key hidden. Accept multiple defensible scales in an unconstrained physical task; the digital smallest-fitting rule applies only to its stated six-interval grid.

## Isolation and independent checks

Three new12-variant choice families preserve legacybar3a,barcompare3a andbar4a payloads/scoring. Existing chart renderer is reused unchanged with pupil-count units and short bilingual labels. bar4a practice sampling is unchanged. New practice enumerates all12 of each family with retry. Choices are exact, uniquely labelled counts, not numeric free-text marking changes.

Independent tests pin the full172-family/2625-variant predecessor hash and marking bytes, enumerate all36 new fixtures, check actual rendered24 bilingual SVGs, exact ticks/endpoints/equal widths and origins, rounding via adjacent-multiple distances (2000cases), and capacity constraints by enumerating allowed scales. Initial proposed350 count was replaced with400 so chosen100 scales retain whole-tick endpoints; no fractional-grid interpretation is smuggled in.

All 36 new variants passed bilingual actual assessment/practice and bounded paper/key/PDF checks in the final 549/549 private curriculum run; UI passed 187/187. Deployed verification remains required. Physical printing, classroom trials, independent translation, screen-reader validation and actual pupil performance remain unverified. No completion email is warranted by this private candidate.

## Current private integration checks

Integrated over published measures closure `7c98f40`, preserving all 51 completed flags and all predecessor payloads. All 35 CJS suites and actual font glyph coverage pass in an isolated standalone copy. Font subset: 279,960 bytes / 1,016 source characters. The final combined private browser run passed **549/549 curriculum checks and 187/187 UI checks**, with zero failures, as verified by the release coordinator. Public deployment verification remains pending; all five remaining P4 units stay incomplete and the 51 published completion flags are unchanged.

## Private rerun provenance

The first complete private run recorded 544 passes and five failures, with UI 187/187 passing. Two failures came from inherited 171-family expectations instead of the independently verified 174 selectable families. Three came from new 4D1 routes using a test-helper default sequence [0,6,11] instead of the actual full [0..11] practice sequence. Exact counts, new-ID sample maps and static guards were corrected without changing computational runtime or weakening assertions. The subsequent full 549/549 and 187/187 private rerun passed. The first run is retained as failed test-harness provenance, not a release pass.
