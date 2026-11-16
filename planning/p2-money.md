# P2 · 2M3 Money (II)

**Status:** integrated release candidate, independently reviewed for source scope and finite mathematics. Publication and live browser verification pending; no completed-unit or pupil-mastery claim.

## Sources, sequence and exact scope

Checked 16 November 2026: [EDB 2017 supplement, PDF pages 35–36](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=35), [KS1 notes, PDF pages 39–40 / printed pages 33–34](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=39), [HKMA notes](https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/) and [HKMA currency/coins](https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/).

Three numbered objectives: recognise circulating notes; read higher marked prices; recognise everyday money use. The explicit teaching order is **2N4 → 2M3 → 2N5**. Four-digit numbers are the prerequisite for this unit, not vice versa.

Prices and counted totals are **at most HK$1000**. Use two-digit cent notation on teacher-written price tags, read currency amounts in words, and do not require price writing, decimal-place explanations or calculation expressions. Counting includes notes and coins. Exchanges are restricted to notes within either set:
- $10, $20, $50, $100;
- $100, $500, $1000.

Sharing $100 does not permit cross-set exchanges such as $500 for ten $50 notes. Giving change belongs to 2N5; decimal operations are later content. No coin exchange or unrestricted note/coin exchange is added to the 2M3 exchange tasks.

## Current currency evidence

HKMA lists everyday note denominations $10/$20/$50/$100/$500/$1000, and coins $10/$5/$2/$1/50c/20c/10c. The three note-issuing banks are HSBC, Bank of China (Hong Kong) and Standard Chartered; government $10 notes include paper and polymer forms. The official page also states older series continue alongside newer notes. Therefore, do not demand one latest design as the sole valid appearance. Same-denomination examples from different issuers are expressly part of the curriculum; issuer-name memorisation is not.

HKMA distinguishes uncommon commemorative notes from everyday circulation. This resource uses the six everyday denominations, not an added commemorative-note syllabus. The activity links to official references but reproduces no note artwork. A labelled rectangle is never treated as authentic recognition evidence.

## Objective mapping and pupil evidence

No 2M3 family was present in inspected `builder.js` or `questions.js`. Existing 1M2 tasks stop at $10 and coin work and cannot stand in for higher prices, note recognition or the new exchange groups.

[English pupil activity](../activities/p2-money.html?lang=en) · [Traditional Chinese](../activities/p2-money.html?lang=zh) · [Hidden teacher key](../activities/p2-money.html?key=1).

| Objective | Pupil task | Observable criteria |
| --- | --- | --- |
| 1. Recognise notes | A: inspect both sides of all six real denominations, name values, point out features, compare size/appearance, group differently designed same-value notes | Record each denomination and actual observation separately. Teacher supplies equal-denomination examples across issuers; labels alone or one design per value do not establish this mode. |
| 2. Read marked prices | B: book $23.50, bag $205.00, bicycle $999.90, desk $1000.00 | Pupil reads dollars/cents, including zero cents and the ceiling. A bare decimal reading is not the requested currency reading. No copied notation demanded. |
| 3. Use money: count and make exact amount | C: count sequential trays of real notes/coins, then construct exactly $23.50 | Hidden teacher setups total $133.80, $687.50 and $1000.00. Record each piece counted once and spoken total; accept another correct supplied construction. No change. |
| 3. Use money: permitted exchanges | D: $100 ↔ $50 + two $20 + $10; $1000 ↔ two $500; $500 ↔ five $100 | Physically preserve value in each direction, keeping each exchange entirely in its permitted set. Equation text here describes teacher setup, not required pupil working. |

The $10 coin/note comparison supports value recognition without turning it into a coin-to-note exchange assessment. All evidence is authored and pending review, not a claim that pupils have performed it.

## Materials and access

Teacher-owned working notes: one $10, two $20, one $50, five $100, two $500, one $1000, reused across stations; add same-value issuer examples. Provide one of each coin denomination listed above. Teacher retains custody and may move notes at a pupil's direction; no real purchase, money transfer or taking money home. This is a classroom-material requirement, not an instruction for the assistant to acquire cash.

If a denomination/issuer example is absent, mark that observation unassessed. Viewing the linked official page is a separately recorded visual adaptation, not physical handling. Labelled counters may support counted-value/exchange reasoning, not authentic note recognition. The hidden rubric records actual responses and adaptations with independent/supported/not-yet/unobserved codes. No pass score is invented.

## External digital proposal and limits

Outside-repository files: `mathquiz-2m3-families.js` and `mathquiz-2m3-families.test.js`.
- `price1000read2a`, 12 variants: match a higher price to bilingual currency words. Supports reading interpretation, not oral production. Correct choices rotate across four positions.
- `moneycount1000a`, 12 variants: count an explicitly labelled textual list of notes/coins; enter separate dollar and cent quantities. This is numeric counted-value rehearsal, not writing a price tag, evaluating a decimal expression or recognising an authentic image.
- `noteexchange2a`, 12 variants: select the required number of notes, sometimes alongside specified fixed notes, within one permitted set. Whole-note arithmetic only; no change or crossing groups.

Every amount is represented in integer cents internally; display notation does not introduce decimal calculation. Finite tests validate denominations, total caps, exact received value, positive integer note counts, same-set exchanges, unique price options and correct option mapping. These 36 checks do not cover app rendering, marking, practice retries, localization/fonts, permanent digests or PDF layout. Those integration gates remain required. Teacher-mediated authentic recognition and manipulation remain necessary after screen integration.

## Review/release gates

Independently verify source scope, amount sums, issuer evidence and both language versions. Check narrow layouts, key hiding/toggle/keyboard, pupil-only/key printing, links and exact deployment. Classroom use, independent translation, screen-reader and physical-printer checks remain distinct from browser QA. No global code, P1 resource or publication state is changed.

## Integrated candidate checkpoint · 16 November 2026

The proposal sections above retain the original design and review history. This candidate now registers the families, bilingual pupil/key/practice routes, targeted hints, retries, explicit numeric labels, per-field scoring for new items, permanent payload digests, and PDF/font coverage. Existing released payloads and historical scoring remain unchanged.

The full repository static gate (`node tests/static.cjs`) passes all 89 permanent families and 1,529 variants, including stable-link round trips and frozen-payload checks. The browser suite contains 280 authored checks; those new checks have **not yet been run live**. Independent source and finite-mathematics review is complete, not independent translation certification.

Exact deployment, browser marking/practice/layout/PDF checks remain pending. Classroom observation, independent translation, physical printing, teacher print-preview pagination/key isolation, screen-reader use and manual downloaded-PDF visual inspection remain unverified. Resource completeness will be recorded only after the agreed live gates; it does not certify pupil mastery or completion of practical activities.
