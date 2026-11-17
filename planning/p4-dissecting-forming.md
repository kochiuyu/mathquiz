# 4S2 Dissecting and forming shapes: candidate audit

Private candidate; incomplete. No live or practical verification is claimed.

## Official source and scope

[EDB KS2 printed 20 / PDF 26](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=26) and [supplement printed 71 / PDF 74](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=74) specify two objectives: split polygons into smaller polygons, and assemble smaller polygons into a polygon. Reason about source/component/result properties. Rectangle corner cuts yield right triangles, whereas square corner cuts yield isosceles right triangles. Matching right-angled trapeziums can form a rectangle. No formal diagonal vocabulary, polygon area formula, angle-sum proof or third recognition objective is required.

## Objective evidence

| Objective | Digital support | Physical evidence |
|---|---|---|
| 4S2.1 | `dissectproperties4a` 12 variants | Tasks 2–4: actual rectangle/square cutting and two different polygon dissections, all original pieces and property checks |
| 4S2.2 | `formpolygons4a` 12 variants | Tasks 5–6: actual trapezium assembly, another polygon and repair of incorrect fitting |

[Activity](../activities/p4-dissecting-forming.html): six tasks, four pupil sheets plus hidden teacher key, two blank objective rows per language. Task 1 traces polygon boundaries and distinguishes seams, open paths and curves. Digital recognition does not demonstrate cutting or forming. Adults prepare safe materials and supervise suitable blunt scissors. Original drawings, cutouts, tools, assistance, dates and next steps remain blank until observed.

## Independent activity anchors

Rectangle (0,0),(6,0),(6,4),(0,4), cut to opposite corner: component squared sides 16,36,52, so right and not isosceles. Square side 4 gives 16,16,32, both right and isosceles. Pentagon (0,0),(6,0),(6,4),(3,6),(0,4) splits at y=4 into rectangle and roof triangle with squared sides 13,13,36: not right. Rectangle (0,0),(8,0),(8,4),(0,4) splits from (3,0) to (5,4) into matching right-angled trapeziums, each with exactly one parallel pair. A half-turn maps one to the other. The invalid diagram translates its second piece by (2,0), creating a gap and protrusion without changing piece size. Equal total area is explicitly insufficient.

Diagrams have source outline, dashed cut and A/B piece polygons in one uniform scale. They are schematic, not calibrated physical templates. Verify zero interior overlap and exact source coverage, not just equal areas. Valid partitions must reconstruct the same split/cancelled outer boundary. Actual browser bounding-box checks are included in the later private run below. Physical print, classroom, translation and screen-reader validation remain unperformed.

## Preservation and inventory

Do not change P1 polygon activities, P3 triangle properties or the exactly-one-parallel-pair trapezium convention. All 2,577 predecessor payloads and marking remain frozen. Historical unit-only inventory: 170 permanent / 2,601 variants; 169 selectable / 2,586; 57 selectable units / 62 resource-bearing units; 53 activities; 49 complete / 13 open resource-bearing units. The two new objectives do not change the verified 190 numbered plus three inquiry total. Keep 4S1 and 4S2 incomplete pending separate verified closure.

## Private verification checkpoint

All 30 CJS static suites and actual PDF-font cmap coverage pass: 984 source characters, 270,312-byte subset. The independent runtime gate verifies 24 fixtures, 48 bilingual SVGs and 90 rejected missing-piece/duplicate/gap/shear mutations with exact rational clipping, outer-boundary cancellation, rigid piece preservation and independently fixed bilingual answers. The separate activity gate verifies 10 bilingual source/cut/assembly diagrams. All 2,577 predecessor payloads and marking remain frozen. Private 4S2 browser verification passed **519/519 curriculum checks and 181/181 UI checks**, zero failures, as reported by the release coordinator on 17 November 2026. This verifies the private candidate, not a public release; completion flags are unchanged.

Private 4S1 browser verification passed **508/508 curriculum checks and 179/179 UI checks**, zero failures, as reported by the release coordinator on 17 November 2026. These are private-candidate results, not live publication evidence; 4S1 remains incomplete pending its later reviewed public closure. The inherited measures candidate passed private 497/497 curriculum and 177/177 UI checks. Predecessor results were not substituted for the separate 4S2 browser run, and no private test substitutes for live verification.

## Current reconciled private packet

Rebased on published measures closure `7c98f40`: 51 complete units, 200 numbered objectives plus three inquiry statements. Current private inventory: 175 permanent families / 2,661 variants; 174 selectable / 2,646; 58 selectable units / 64 resource units; 56 activities; 13 open resource-bearing units. 4S1, 4S2, 4S3, 4D1 and 4F1 remain incomplete. All 35 CJS static suites and actual font coverage pass in an isolated standalone copy (279,960-byte subset, 1,016 source characters). The final combined private browser run passed **549/549 curriculum checks and 187/187 UI checks**, with zero failures, as verified by the release coordinator. Public deployment verification remains pending; all five remaining P4 units stay incomplete and the 51 published completion flags are unchanged.

## Private rerun provenance

The first complete private run recorded 544 passes and five failures, with UI 187/187 passing. Two failures came from inherited 171-family expectations instead of the independently verified 174 selectable families. Three came from new 4D1 routes using a test-helper default sequence [0,6,11] instead of the actual full [0..11] practice sequence. Exact counts, new-ID sample maps and static guards were corrected without changing computational runtime or weakening assertions. The subsequent full 549/549 and 187/187 private rerun passed. The first run is retained as failed test-harness provenance, not a release pass.
