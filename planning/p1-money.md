# P1 money (I): objective evidence and release plan

**Status:** all three objectives are resource complete. Published digital and teacher-led evidence, verification results and remaining validation caveats are recorded in the checkpoint below.

## Source verification

Checked 16 November 2026: [EDB KS1 explanatory notes, 1M2, printed page 10 / PDF page 16](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=16), [2017 supplement, 1M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=16), and [HKMA Hong Kong currency](https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/).

The three numbered objectives concern recognising Hong Kong coins, reading marked prices and using coins. Prices and counted totals are at most HK$10. Pupils read currency amounts; writing price notation, explaining decimal place value and writing calculation expressions are not required. Exchanges stay within either {10¢,20¢,50¢,$1} or {$1,$2,$5,$10}; do not combine these into unrestricted cross-group exchanges. Giving change is later work, not a task for this unit. HKMA lists the seven denominations used here.

## Usable teacher activity

- [English pupil sheet](../activities/p1-money.html?lang=en)
- [Traditional Chinese pupil sheet](../activities/p1-money.html?lang=zh)
- [English preparation and key](../activities/p1-money.html?lang=en&key=1)
- [Traditional Chinese preparation and key](../activities/p1-money.html?lang=zh&key=1)

The pupil sheet has no printed coin substitutes. A teacher supplies actual coins, varies their order and lets pupils inspect both sides. The key is hidden on the default pupil route. Its materials list, tray setup and observation rubric are separate from the pupil prompts. Speaking, pointing and moving coins are valid responses; the teacher records responses in the spaces. This is a practical assessment resource, not proof that a class has completed the activity.

| Objective | Pupil action and authored evidence | Marking evidence | Remaining work |
|---|---|---|---|
| 1 · Recognise coins | Task 1: identify all seven real denominations, inspect inscriptions and compare physical features. | Record each denomination separately and one actual feature observation; do not infer value from size alone. | Bilingual route/print review; optional digital recognition using faithful, distinguishable depictions rather than labels alone. |
| 2 · Read marked prices | Task 2: read $2.50, $3.00, $0.80 and $10.00 aloud and identify the ten-dollar tag. | Accept correct currency wording, including equivalent Chinese colloquial forms. A bare decimal reading does not demonstrate the requested currency reading. | Digital price-to-words matching family and its finite-variant checks. |
| 3 · Use coins | Task 3: count three prepared trays and construct exactly $8. Task 4: physically exchange coins while preserving value. | Teacher key gives each total, alternative permitted compositions, and a checklist separating counting from exchange. | Digital counting and permitted exchange families; verification of actual routes and rubric. |

## Digital family briefs

Use permanent new IDs and preserve existing generated variants.

1. **Price readings:** match a two-decimal-place price tag to its correct currency description in either language. Include zero cents, cents-only, mixed dollars/cents and exactly $10.00. Distractors should probe denomination confusion, not unfamiliar language. No typed decimal calculation required.
2. **Count a coin collection:** show denominations clearly and ask for the total using dollars/cents fields or choices. Include repeated coins and varied arrangements. Compute internally in integer cents; keep totals within 1000 cents. Text alternatives must communicate every coin. A labelled token can test counting value but cannot alone certify recognition of real coins.
3. **Equal-value exchange:** show a coin or allowed group and select another collection with equal value from the same permitted exchange group. Check denominations and values programmatically. No purchase-and-change scenarios or exchange from $5 into 50¢ coins.

Do not treat these planned families as released. Record their final IDs, variant counts, answer rules and practice routes here after implementation. The real-coin activity remains the evidence for tactile observation and spoken reading even when the digital tasks are available.

## Mathematical and scope checks already performed

- Tray A: 100 + 50 + 20 + 10 = 180 cents; tray B: 500 + 200 + 100 + 100 = 900 cents; tray C: 1000 cents.
- Exactly $8: 500 + 200 + 100 = 800 cents; other available $1/$2/$5 combinations are accepted if they total 800.
- Exchange a: five 20¢ coins = 100 cents.
- Exchange b: two 20¢ plus one 10¢ = 50 cents; one 20¢ plus three 10¢ also works if extra 10¢ coins are supplied.
- Exchange c: one $5 plus $2/$1 coins totalling $5. The key lists all three possible counts of $2 coins: two, one or zero.
- All fixed tasks are at or below $10. Every exchange remains within one permitted group. No question asks for change.

## Release gates and continuity

**Last verified release:** see checkpoint below. **Objectives newly closed:** all three for assessment-resource coverage. **Next pupil task:** physically identify a coin and read its value, then read a price tag and count an amount.

Before sign-off, verify EN/ZH pupil and key routes, key hiding/toggling, keyboard operation, printing without answer leakage, readable grayscale layout and complete instructions. For digital families, check every finite variant, expected answer, marking boundary, practice, builder, pupil quiz, paper/key and existing-link regression. The parent release process must update global counts and ledgers only after the relevant evidence is actually available.

Teacher observation criteria are ready for review; actual classroom use, independent translation review, screen-reader and physical-printer validation remain unperformed. Those deferred checks must be reported separately from whether a usable activity has been delivered.

## Integrated digital tasks

`coinvalue1a`, `priceword1a` and `coincount1a` each contain12 variants. They are integrated in builder, quiz, practice and paper/key with bilingual labels and integer-cent exact choices. The real-coin teacher activity supplies physical recognition, spoken reading and exchanges. Authored evidence exists for all three objectives, with publication, independent review and route verification now recorded below.

## Verified resource-completion checkpoint · 16 November 2026

**Resource complete.** Every numbered objective and applicable remark has linked released digital evidence or a usable bilingual teacher-led pupil task with materials, script and observable criteria. This describes assessment-resource coverage, not pupil attainment.

**Last verified release:** `49ffb20d5deec81619e3cf66d69a6b38b77f7c45`; GitHub Pages run `43902703454` succeeded. The public browser regression passed **181/181**, including immutable historical variants, bilingual routes, key isolation, phone layout and explicit mixed-money/inverse-check EN/ZH paper/key PDF generation with page images and selectable text. Independent source and mathematics review passed.

**Manual evidence:** EN/ZH number-sense and addition/subtraction pupil sheets and teacher-key toggles were inspected; Chinese column alignment was legible. Money pupil paper and EN/ZH worked keys were inspected with spoken-value labels and matching codes.

**Not performed:** teacher-sheet print-preview/pagination and manual visual inspection of downloaded PDFs. Classroom trials, independent translation review, physical printing and screen-reader testing remain deferred. These are not represented as passed or as evidence of pupil mastery.

**Remaining objective gap:** none identified in the source-to-task audit. Continue layout/accessibility validation and classroom feedback separately; retain permanent task IDs.

**Objectives closed:** 3. Evidence: three digital families (36 variants), genuine recognition of all seven Hong Kong coins, spoken price/total readings and exchanges within permitted denomination groups. Labelled digital schematics are not treated as proof of real-coin recognition.
