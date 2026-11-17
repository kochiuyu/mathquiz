**Verified resource-complete checkpoint: 40/85 units.** All P1/P2 units and P3 through 3D1 have source-reviewed assessment resources, covering 158 numbered objectives plus two integrated inquiry statements. Public Bar charts (I) release `21bd72c` passed **381/381 curriculum checks and 155/155 UI checks**, with zero failures. All 2,037 variant contracts and eleven static gates pass. This unit adds three objectives and 12 variants; all 2,025 prior payloads remain unchanged. Inventory: 129 permanent families / 2,037 variants; 128 selectable families / 2,022 variants; 47 selectable units / 51 resource units, with 11 resource-bearing units still open. Resource completeness is not pupil mastery. Manual PDF/print pagination, physical printing, classroom trials, independent translation and screen-reader validation remain unperformed.

# 3D1 Bar charts (I): closure draft

17 November2026. Closure prepared, not yet published. Existing `bar3a` remains untouched. New `barcompare3a` adds12 variants; all2,025 predecessor payload hashes are preserved. Inventory129 families/2,037 variants,128 selectable/2,022;47 selectable units/51 resource units;40 activities. The draft stages 40 complete units, including 3D1, from the verified 39-unit Triangles checkpoint.

## Source audit and evidence

Read EDB [primary supplement printed54–55/PDF57–58](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=57) and [KS1 notes printed62/PDF68](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=68). Three objectives concern recognising, interpreting and constructing charts. Scope includes both orientations and scales1/2/5. Construction includes collecting observations, frequency-table tallying and an appropriate scale choice. Earlier pictograms provide the comparison context; bars need consistent widths and gaps.

| Objective | Candidate evidence |
|---|---|
|3D1.1 Recognition|Activity1 compares pictogram/bar-chart information and identifies features.|
|3D1.2 Interpretation|Existing12 named-bar readings plus12 new comparisons; activity2 includes orientation/scale reading.|
|3D1.3 Construction|Activity3 real anonymous collection or explicitly simulated fallback; activity4 tally/table; activities5–6 scale choice and actual charts in both orientations, with practice across1/2/5.|

Actual collection and original construction are teacher-observed, not established by quiz scores. Supplied-card work alone does not prove real collection. Accept reasonable scale choices that fit the data and grid; do not impose a unique optimum without stated constraints. Do not round frequencies to fit a scale.

## Question/marking contract

`barcompare3a-0` through`-11` use ordinary labelled numeric fields, not the legacy `barChart` response flag. The existing generic numeric normalisation therefore accepts equivalent forms such as `3.0` and full-width digits, rejects blanks/units and awards one mark. This deliberate new-family contract leaves `bar3a`'s stricter count-input contract unchanged. The `figure.kind` is the existing `barChart`; no renderer redesign.

Within each scale, four profiles include zero bars, a zero difference, and a bar at the highest grid line. Each scale has two horizontal and two vertical charts. Both names are explicit; difference is nonnegative and equality is meaningful. All12 variants appear in practice, with actual catalogue registration, hint/retry, paper/key and PDF checks.

## Verification scope

- All permanent payload hashes, including `bar3a` and `bar4a`, must remain frozen.
- Independent oracle expected differences:3,6,0,5,6,12,0,10,15,30,0,25.
- Static SVG inspection checks actual rect coordinates, orientation, widths/gaps, all seven tick values and bilingual category labels for every new variant.
- All six orientation/scale combinations have exactly two variants. Numeric accepted/rejected inputs are exercised under the documented new-family contract.
- Actual practice catalogue callbacks, exact sample indices, selected paper IDs, bounded12-item/300-character batching and paper bar geometry are checked.
- Font cmap coverage must include the complete new activity and quiz text; regenerate from the verified source and use unique cache tokens before browser validation.

Browser/PDF runtime review, visual print pagination, actual collection/classroom trials, independent translation and screen-reader validation remain pending. No resource-completion or public-success claim follows merely from static checks alone.

## Historical development checks (before release verification)

All11 static gates passed, including actual rect/tick geometry for24 localized new-question renderings and6 printable charts; six scale/orientation pairs; response-list recount2/4/6,total12; comparison keys8/20; four original-construction grids perlanguage. All2,025 prior frozen payloads passed unchanged. Rebuilt font subset214,732bytes covers812 collected source characters with nonzero glyph IDs; build source now includes the bilingual bar activity. UI/main suite iframe nonces retained; asset/font tokens `barcharts-r1`. Full variable font source is excluded. Browser/PDF runtime results remain pending.
