# MathQuiz · Hong Kong primary mathematics

Teachers can build a quiz in English or Traditional Chinese, share it with pupils, and print the matching A4 paper and worked answer key. Pupils can also practise a skill without signing in.

[Open MathQuiz](https://kochiuyu.github.io/mathquiz/) · [English builder](https://kochiuyu.github.io/mathquiz/?v=3&lang=en&p=1&view=build) · [繁體中文出卷工具](https://kochiuyu.github.io/mathquiz/?v=3&lang=zh&p=1&view=build) · [Browse available skills](https://kochiuyu.github.io/mathquiz/coverage.html)

## Curriculum completion

**The goal is to give teachers usable assessment material for every objective across all 85 P1–P6 learning units.** On 16 November 2026, 24 units have at least one selectable task, 61 have none, and 0 have been verified complete. The builder offers 50 question families and 818 variants. One retired family with 15 variants remains available through older links. Adding variants to an existing exercise can improve practice, but only adds curriculum coverage when pupils demonstrate a previously unassessed objective.

| Year | Units | With a selectable task | Without a selectable task | Verified complete |
|---|---:|---:|---:|---:|
| P1 | 12 | 6 | 6 | 0 |
| P2 | 15 | 4 | 11 | 0 |
| P3 | 14 | 3 | 11 | 0 |
| P4 | 15 | 3 | 12 | 0 |
| P5 | 13 | 5 | 8 | 0 |
| P6 | 16 | 3 | 13 | 0 |
| **Total** | **85** | **24** | **61** | **0** |

The [unit inventory](planning/full-curriculum-plan.md) gives each unit's title, source and status. The [curriculum map](planning/primary-mathematics.md) suggests tasks, and the [family ledger](planning/live-family-audit.md) documents released question types. Use the [EDB primary supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf) for the numbered objectives and the [EDB curriculum documents page](https://www.edb.gov.hk/en/curriculum-development/kla/ma/curr/index2.html) for the Key Stage 1 and 2 explanatory notes and updates.

**Latest release · P1 length and distance (1M1):** Four pictured question families compare aligned lengths and straight distances, directly and with equal improvised units (48 variants). The [bilingual printable activity](activities/p1-length-distance-i.html) supplies real-object tasks and an observation rubric; the [unit brief](planning/p1-length-distance-i.md) maps evidence and remaining teacher checks. The [public regression suite](tests/regression.html) passed 165/165 after [release `0a3e008`](https://github.com/kochiuyu/mathquiz/commit/0a3e008d2f52741acdb64f510a16cf152d94c63b). Classroom observation is outstanding, so 1M1 is not marked complete.

[Immediate priorities](#next-three-deliverables) · [Priority rules](#how-to-choose-the-next-release) · [P1–P6 delivery plan](#grade-by-grade-delivery-plan) · [Milestones](#milestones-and-handoff) · [Release procedure](#author-verify-and-hand-off-a-release)

## Next three deliverables

1. **Audit P1 addition and subtraction (1N4).** Map its nine released families to all six numbered objectives in the [unit brief](planning/p1-addition-subtraction-i.md). The table below gives the starting evidence. For each row, record what the pupil actually does, which EDB remarks apply and any missing evidence. For example, the subtraction key demonstrates an addition check. See whether any task asks the pupil to recognise a valid check. Build the smallest task needed for an identified gap, then record the closure decision.
2. **Finish the oral and listening review for numbers to 100 (1N3).** Its eight families already cover written and pictured work. For the spoken objectives, prepare an English and a Traditional Chinese teacher script, pupil instructions and observable marking criteria. Link these beside the digital tasks in the [unit brief](planning/p1-numbers-to-100.md). A pupil reading printed number words demonstrates a different skill from a pupil writing a number heard aloud.
3. **Continue measurement with centimetres (1M3).** Build ruler-reading tasks that place the object beside a clear scale and include nonzero starting marks. Add a real-object activity for estimating, choosing a suitable tool and measuring to the nearest centimetre. Map pupil evidence against the [1M3 objectives](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=17); carry forward the teacher observation still needed for 1M1.

| 1N4 objective | Released evidence to review |
|---|---|
| 1 · Add two numbers | `carryadd1a`, with additional no-carry examples in `storyadd1a` |
| 2 · Add three numbers | `threeadd1a` |
| 3 · Recognise how regrouping addends preserves the sum | `groupadd1a`, `group10p1a` |
| 4 · Subtract two numbers | `noborrow1a`, with addition checks in worked solutions |
| 5 · Recognise column forms | `columnadd1a`, `columnsub1a` |
| 6 · Solve simple problems | `storyadd1a`, `storysub1a` |

## How to choose the next release

Use this order when two pieces of work compete for time.

| Priority | When to choose it | What to ship |
|---|---|---|
| 1 · Correct a mathematical or marking error | A released question teaches an incorrect relationship, rejects a valid answer or disagrees with its paper key. | Fix the affected route, check older links and document which quizzes are affected. |
| 2 · Finish the current objective | Existing material almost covers an objective, or a missing prerequisite blocks the next unit. | The missing pupil action and its marking evidence. The first example is checking subtraction by addition in P1. |
| 3 · Open the next gap in the grade | The active unit has usable material and its outstanding objectives are recorded. | Start the next batch below. Give an untouched objective precedence over additional variants of an already assessed calculation. |
| 4 · Build support shared by several objectives | A specific task needs a drawing grid, instrument, oral script or teacher rubric. | Implement the simplest usable form with the first real task. Reuse it for later grades after checking their different limits. |

Work from P1 through P6. The batches below give the proposed development order; teachers can assign the finished materials in their own order. Release a usable objective as soon as it is ready. A blocked practical task stays visible in its unit brief while work continues on the next objective. Defer general interface changes, accounts and larger item counts when they do not close a curriculum gap.

## Grade-by-grade delivery plan

Each of the 85 units has one home in the following 24 batches. Each row describes a first classroom deliverable or a meaningful extension to an existing task. Its unit links open the relevant EDB source. Before signing off a unit, check **every** objective and remark in its brief. Inquiry activities use the mathematics of the same grade and can be introduced alongside the corresponding topic.

### P1 · Establish number sense and practical measurement

| Batch | EDB units | Pupil work and assessment to deliver |
|---|---|---|
| 1. Check the existing number work | [1N4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=13), [1N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=11) | Carry out the first two deliverables above. A subtraction-check item should reveal whether the pupil can select an addition sentence that recovers the starting number. The oral sheet should distinguish counting aloud, reading a numeral aloud and writing a dictated number. |
| 2. Compare, then measure | [1M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=15), [1M3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=17) | Move from aligning two strips to measuring an object with repeated equal units, then a centimetre ruler. Provide a real-object activity for choosing the tool and estimating before measuring. For screen questions, draw the scale beside the object so browser zoom preserves the answer. |
| 3. Use number, money and time | [1N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=7), [1N2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=9), [1M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=16), [1M4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=18) | Audit counting, composition, zero and inverse operations against the existing number tasks. Pair coin recognition with reading a Hong Kong price tag and counting a permitted amount. Pair an hour or half-hour clock with a calendar question so clock reading cannot stand in for calendar use. |
| 4. Describe and investigate shapes | [1S1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=20), [1S2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=21), [1S3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=23), [1F1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=24) | Handle and sort real solids, draw straight and curved lines, recognise flat shapes in different orientations, and describe position from the pupil’s viewpoint. For inquiry, let pupils predict which objects will roll, test them and explain a revised grouping. Supply an observation rubric. |

### P2 · Extend place value and connect operations

| Batch | EDB units | Pupil work and assessment to deliver |
|---|---|---|
| 1. Build from hundreds to thousands | [2N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=24), [2N2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=26), [2N4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=30), [2N5](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=31) | Audit the existing three-digit block pictures. Pair a place-value representation with addition and subtraction at each unit’s permitted range. Include zero places and examples where pupils must decide whether to regroup. Use a story with an unknown quantity to check interpretation. |
| 2. Connect groups, sharing and inquiry | [2N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=27), [2N6](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=30), [2F1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=48) | Use the same counters for a multiplication array and a division story. Vary whether the pupil knows group size or group count. Ask pupils to arrange a fixed collection in different equal groups and explain how they know each arrangement works. |
| 3. Measure and read everyday quantities | [2M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=35), [2M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=37), [2M3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=39) | Introduce the metre through a classroom measuring activity. Read analogue and digital times to the minute, then use a calendar to find a missing date. Move from recognising Hong Kong banknotes to counting notes and coins against a marked price. |
| 4. Construct, navigate and display data | [2S1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=41), [2S2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=42), [2S3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=44), [2S4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=45), [2D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=40) | Identify faces on solids, compare angles, draw perpendicular lines, follow a cardinal direction and classify quadrilaterals. Extend the one-symbol pictogram from reading a count to constructing a chart from a small tally. Include a printable grid and a key. |

### P3 · Choose operations and interpret measurements

| Batch | EDB units | Pupil work and assessment to deliver |
|---|---|---|
| 1. Choose arithmetic operations | [3N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49), [3N2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=50), [3N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=51), [3N4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=52) | Order five-digit numbers before asking pupils to multiply, divide or combine operations in context. Pair a division calculation with a story requiring an interpretation of the remainder. In a two-step problem, the key should explain what the intermediate result counts. |
| 2. Connect fractions to shapes | [3N5](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=48), [3S1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=64), [3S2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=66) | Extend the shaded-bar family with equal parts of a collection and comparison where the objective permits. Use rotated examples for quadrilaterals and triangles. Add a drawing or sorting task in which the pupil must use a property to decide. |
| 3. Choose instruments and time units | [3M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=56), [3M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=58), [3M3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=51), [3M4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=61), [3M5](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=62) | Choose a suitable length unit, compare short intervals in seconds, read a 24-hour timetable, measure capacity and weigh an object. Pair the existing pictured jug with a practical pouring task. Provide scales with different tick intervals and mark the unit as well as the reading. |
| 4. Collect and represent data | [3D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=57), [3F1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=69) | Have pupils investigate a class question, tally responses, choose an allowed bar-chart scale, construct the chart and answer a comparison. Score the choice of scale separately from the plotted counts. |

### P4 · Link calculations to structure and diagrams

| Batch | EDB units | Pupil work and assessment to deliver |
|---|---|---|
| 1. Develop written arithmetic and factors | [4N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=7), [4N2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=9), [4N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=11), [4N4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=13), [4N5](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=14) | Build multiplication and division at the specified digit limits. Extend factor-pair tasks to finding all factors, then compare two lists to locate common factors or multiples. Finish with mixed-operation problems where changing the order changes the result. |
| 2. Compare fractions and operate on decimals | [4N6](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=16), [4N7](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=18), [4N8](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=20) | Ask pupils to represent equivalent fractions, compare values, identify decimal places and add or subtract decimals. Include equivalent representations and a place-alignment error in the marking review. |
| 3. Distinguish boundary from surface | [4M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=21), [4M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=23), [4S1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=25), [4S2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=26), [4F1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=29) | Reuse rectangles from perimeter practice to count enclosed squares and find area. Ask pupils to build two rectangles with equal perimeter and compare their areas. Include rhombus construction and a dissection sheet whose pieces reassemble into the target polygon. |
| 4. Use direction and scaled charts | [4S3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=27), [4D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=28) | Read the eight compass directions and use a physical compass in a teacher-led activity. Extend the scaled-bar family to choosing a suitable scale and constructing a chart. Include both chart orientations and check the labels on the printed key. |

### P5 · Move from arithmetic to algebra and spatial reasoning

| Batch | EDB units | Pupil work and assessment to deliver |
|---|---|---|
| 1. Extend number and fraction operations | [5N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=30), [5N2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=31), [5N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=33), [5N4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=34), [5N5](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=36) | Read, round and estimate with large numbers. Audit the fraction-addition family against comparison and subtraction, then build multiplication and division problems with diagrams showing the whole. Develop decimal multiplication with place-value and estimation checks. |
| 2. Build expressions before equations | [5A1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=38), [5A2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=39) | Translate a verbal relationship into an expression, substitute a value, then use an equation to solve a purchase story. Audit the existing equation families for which unknowns and forms they assess. Verify how equivalent answers and bilingual variable descriptions are marked. |
| 3. Relate diagrams to area, volume and solids | [5M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=41), [5M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=43), [5S1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=45), [5S2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=46), [5F1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=49) | Match bases to perpendicular heights, then calculate areas. Build cuboids from unit cubes and account for hidden layers. Teach circle features before cross-sections and nets. For inquiry, keep a triangle’s base and height fixed, move its top vertex, and ask pupils to predict and explain what happens to its area. |
| 4. Compare series in a chart | [5D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=48) | Use a two-series table to construct and interpret a compound bar chart. Include horizontal and vertical charts. Ask for a within-category comparison and a comparison across categories. Check that both series remain distinguishable in grayscale. |

### P6 · Integrate proportional reasoning, measurement and data

| Batch | EDB units | Pupil work and assessment to deliver |
|---|---|---|
| 1. Connect decimals, percentages and equations | [6N1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=50), [6N2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=52), [6N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=53), [6N4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=54), [6A1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=55) | Sequence decimal division, fraction–decimal conversion, percentage representation, percentage problems and equations. A hundred-square diagram can establish the whole before a pupil identifies a percentage in a story. Place original-quantity problems in the equation unit and check the EDB exclusions when writing contexts. |
| 2. Measure angles and work with circles and volume | [6M1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=56), [6M2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=58), [6M3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=59), [6M5](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=62), [6S1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=64) | Read and use a protractor, relate volume to capacity, and distinguish the distance around a circle from the area it encloses. Include a symmetry construction with an explicit line of symmetry. Give teachers a marking overlay for drawn answers and supply the approximation of π used by the key. |
| 3. Relate speed, time and distance | [6M4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=60) | Extend the existing minutes-to-hours task with a comparison at equal times or distances and interpretation of a travel graph. Ask what a horizontal segment means. Check time units across prompt, diagram, answer and worked key. |
| 4. Choose, construct and critique displays | [6D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=65), [6D2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=66), [6D3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=67), [6D4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=68), [6F1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=69) | Start with a small data set and its mean. Use time-ordered data for a broken-line graph and parts of one whole for a pie chart. For inquiry, give pupils two displays of the same data, ask which better answers a stated question and require evidence for their choice. Include a rubric for more than one defensible explanation. |

## Milestones and handoff

| Milestone | Exit evidence |
|---|---|
| First unit closure | Publish the six-row 1N4 review with working evidence for each row. Record which gaps needed a new task and which existing families already met the objective. |
| P1 ready | All 12 units pass the objective review. A teacher can find oral number work, practical measurement, geometry and inquiry alongside the digital number questions. |
| Lower primary ready | All 41 P1–P3 units pass. Trace the progression from comparing strips to using instruments, and from counting objects to constructing pictograms and bar charts. Check that later-grade number ranges and scales have not appeared prematurely. |
| Upper primary ready | All 44 P4–P6 units pass. Trace fraction and decimal operations into percentages, shape properties into measurement, and chart reading into construction and critique. |
| Full curriculum ready | Reconcile 85 verified units with their numbered objectives and live evidence. Open each grade from the public coverage page, follow the English and Chinese routes, and retrieve its pupil materials and keys or rubrics. Record outstanding manual validation separately. |

At each release update three counts: units with any usable task (digital or teacher-led), verified objectives out of the objectives inventoried, and verified units out of 85. Also retain the selectable-builder count shown above so a printable-only unit is easy to identify. While the objective inventory is incomplete, report the number of units audited alongside the objective count and leave the whole-curriculum objective percentage pending.

For continuity, end the active unit brief with **last verified release, objectives closed, remaining gap, next pupil task, and where to verify it**. For example: “1N4 objective 4 · subtraction is live; addition verification appears in the key. Check whether the pupil must choose the matching addition sentence. Record the item ID or add that response.” Replace the example with the actual result after review.

## How to decide that a unit is complete

Keep one row per numbered objective in the unit brief. Record the EDB reference and limits, the action the pupil takes, the live family or printable activity, the answer rule or rubric, and the review outcome. A teacher should be able to follow the link and use the material in either language.

| Review outcome | Evidence required |
|---|---|
| Open | Identify the missing pupil task, representation, assessment mode or unverified requirement. |
| Covered online | Link a released task and worked answer. Check the objective's range, boundary cases and applicable representations across its variants. |
| Covered by teacher assessment | Link a usable activity or script, materials and marking criteria for oral work, construction, practical measurement or investigation. Identify what the teacher observes. |

Mark a unit complete when every objective has linked evidence and all applicable remarks have been checked. An explanation in the answer key, a proposed question or a note that a teacher must assess a skill can identify a gap. Each still needs a pupil task before it counts toward completion.

## Author, verify and hand off a release

1. Select the next open objective from the queue. In its brief, record the assessed action, permitted number range, exclusions, bilingual prompt, worked solution and a likely error worth addressing. Reuse an existing family if its task already supplies the evidence.
2. For a new digital family, add a permanent ID in [builder.js](builder.js). Use [quiz.js](quiz.js) for figures, views and the practice catalogue, and [marking.js](marking.js) for answer rules. Keep earlier IDs, variant outputs and versioned marking reproducible. Use a new ID for a changed mathematical task.
3. Check every finite variant, expected answer, diagram and marking boundary. Exercise the builder, pupil quiz, practice hint and retry, A4 paper and worked key in both languages. For a teacher-marked activity, check the pupil sheet and rubric together. Verify units, grayscale legibility, writing space and Chinese PDF text.
4. Add relevant checks in [tests/regression.js](tests/regression.js). Review the mathematics before recording a new digest. Update changed asset cache versions and rebuild the text font with [tools/build-pdf-font.py](tools/build-pdf-font.py) when new glyphs are needed.
5. Serve the repository with `python -m http.server 8000`. Run the [local regression page](http://localhost:8000/tests/regression.html), including old shared-link fixtures. After deploying changed application files, run the [public regression page](https://kochiuyu.github.io/mathquiz/tests/regression.html) and open the released material.
6. Update the unit brief, inventory, curriculum map, family ledger and [coverage page](coverage.html) as applicable. Refresh this README's counts and replace the finished next action. Keep detailed change notes in the release commit. Record automated verification separately from manual classroom, translation, physical-printer and screen-reader checks, which remain deferred.

The account-free pilot, teacher workflow, sample papers, technical file guide and earlier release results are preserved in the [previous README](https://github.com/kochiuyu/mathquiz/blob/7ab981853d1977f258202241416a0c76b227f971/README.md). The last recorded application regression was **159/159** locally and on the public site. The [five-minute P1 warm-up](https://kochiuyu.github.io/mathquiz/?v=3&lang=en&p=1&items=count20a-10.next1-5.pictureadd1-21&view=build) is a short starting point for trying the existing workflow.
