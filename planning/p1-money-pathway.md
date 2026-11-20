# P1 teaching pathway: Hong Kong money

20 November 2026. Ninth student learning pathway; original bilingual teaching and questions.

[Start the pathway](https://kochiuyu.github.io/mathquiz/learn.html?path=money) · [Evidence](p1-money-evidence.json)

## Scope and sources

The [EDB Key Stage 1 explanatory notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=16), printed page 10, define 1M2. Pupils recognise circulating coins, read marked prices up to $10, count coins totalling no more than $10, and make equal-value exchanges. Prices appear with two digits after the dot, but pupils are not required to write prices, explain decimal place value or write calculation expressions. Exchanges stay within {10¢,20¢,50¢,$1} or {$1,$2,$5,$10}; giving change belongs later in 2N5.

The [HKMA Coins page](https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/coins/), checked 20 November 2026, confirms the seven everyday denominations and that older portrait coins remain valid. No single design is required as the only correct appearance. The official page is linked from the practical disclosure. No source exercises, photographs or coin designs are copied: all teaching text, questions and labelled tokens are original. The page's factual list of denominations informs the tokens.

## Teaching and progression

| Lesson | Teaching | Easy → Normal → Difficult |
|---|---|---|
| Meet Hong Kong coins / 認識香港硬幣 | Seven values; dollar and cent units; observe real coins with an adult. | Match a named value to a label; read the value and unit independently; correct unit confusion and reject drawing size as a value cue. |
| Read prices and count coins / 讀價錢、數硬幣 | Read prices aloud in dollars/cents; recognise zero-dollar and zero-cent tags; count each coin once. | Choose a reading for a price or tray; count mixed dollar/cent groups; check a mistaken reading and distinguish coin count from value. |
| Exchange coins / 換幣，總值不變 | Two permitted coin groups; count value before/after; conserve value despite changing coin count. | Find the number of one stated denomination; complete a partly supplied exchange; correct an insufficient exchange and identify what remains unchanged. |

Each lesson has 3 teaching steps, 2 guided questions and 3 questions per difficulty. The 27 new practice items bring the teaching collection to **9 pathways, 27 lessons and 243 levelled practice items**. A separate 6-question understanding check samples 2 generated questions per lesson. Three overlapping deterministic retake configurations are available, not independent standardised assessments. Practice can be completed after correction. The 5/6 next-step recommendation remains provisional, not calibrated mastery.

## Diagrams, response format and practical work

Tokens clearly display the value and currency unit, with a visible reminder that they are not real coin photographs. One comparison deliberately enlarges the lower-value token. Text descriptions include the same values, and numbered alternatives do not rely on colour. Price readings are presented as two numbered choices; pupils enter 1 or 2, not a decimal price. Exchange answers are whole coin counts. The answer field does not assess oral reading, physical recognition or writing money notation.

A collapsed “Try with real coins” section links to the existing bilingual [P1 money activity](../activities/p1-money.html), whose teacher key stays hidden initially. An adult observes real coin features, oral readings, counting and manipulation. The online pathway never awards physical-observation credit. The activity is unchanged. Pupils can say prices using suitable local terms, including 元、角、分 or 毫; the automatic choices use consistent 元/分 labels.

## Compatibility

New path `money`; lesson IDs `coinvalues`, `pricetags`, `coinequal`; separate `checks.money` and path cursor. All earlier question payloads and IDs are checked against the preceding release's hash, preserving the meaning of prior scores. The existing version 1 browser-local record and 3 separate pupil slots remain. No account, cookie tracking or cross-device sync is added. Schema-based read capacity is 54,208 characters; the new full-record fixture is 29,896 and the largest prior fixture 29,911. Invalid/oversized reads remain visibly reported without overwriting stored work during the read/probe.

## Verification

All **128 local cases are verified**: the final full run passed 126/128; `Subtraction layout en 320` and `Measurement layout zh 768` each passed an exact retry after a page-load timeout. Eleven static gates passed. The English exchange teaching sample at 320 × 812 had no overflow and its next action ended at pixel 728.15. All **128 public cases are verified**: 125 passed in the full run; 3 page-load timeout cases passed exact reruns. Runtime deployment succeeded and all eighteen changed runtime/test files matched their tested hashes. [Runtime 658cf8de](https://github.com/kochiuyu/mathquiz/commit/658cf8de1599ae7bd3f27f04b8aa5073fc6e815e) deployed successfully in Pages run 44721955733. The public Chinese Difficult price sample also had no overflow at 320 ? 812; its first answer ended at pixel 710.89. The first local run passed 127/128; the remaining case found an English exchange teaching action below the 320 × 812 screen. Shorter wording was applied in two steps; the first targeted retry exposed the next teaching step, which was also shortened. Exact development and final results are retained in the evidence file. Compact token spacing and shorter English headings completed the correction. A subsequent test run stalled at a completed blank-frame reset; the runner now bounds that wait and checks the actual reset state. Later navigation timeouts and exact reruns are retained in the evidence. No question answers changed during these layout corrections.

The static checks cover 216 independently derived generated answers, all 27 practice answers, 12 check configurations, permitted denominations, prices/totals/exchange groups, prior content, record capacity, old scores, zero/100 values and pupil isolation. The 128-case browser suite retains 113 prior cases and adds 15 money cases: complete bilingual paths, wrong/blank responses, retakes, separate continuation, unavailable storage, four widths, every new teaching step and first practice input at 320 pixels, units/price notation, the drawing-size trap, and both activity languages.

Pupil trials, independent translation review, screen-reader listening and real-coin classroom observation remain pending. The broader 267-case shared UI/activity browser suite is not repeated; focused teacher gateways and shared static gates are included. This release extends partial P1 teaching coverage, not full curriculum completion. Catalogue totals and the adult resource/builder banks remain unchanged.

## Next work and repeatable workflow

1. Time (1M4): hours/half-hours, whole-hour intervals up to 12 hours, week/month/calendar reading, within the EDB limits.
2. Shapes and spatial position, then investigation and classroom follow-up.
3. Use pupil responses to refine explanations and difficulty.

Workflow: check official scope and current factual sources; author original bilingual teaching; add diagrams and guided/levelled questions; independently derive answers; preserve old IDs and stored records; verify languages, mobile actions, unavailable storage and activity routes; inspect visuals; publish and compare deployed hashes; document exact failures/reruns and outstanding human checks.
