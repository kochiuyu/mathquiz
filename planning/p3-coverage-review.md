# P3 coverage, inquiry and readiness review

**23 November update:** the separate application review specified below is now [implemented](../p3-review.html); see its [release, sampling map and limits](p3-review-release.md). This dated coverage audit remains a record of the pre-implementation findings.

22 November 2026 · baseline `df1b011406c91e0adc6349202fa7454519034162`. [Evidence and repeat pairs](p3-coverage-evidence.json) · [Reproducible source audit](../tests/p3-coverage-audit.cjs) · [Learning plan](p3-guided-learning-plan.md).

## Decision

All **54 numbered objectives in 13 content units**, plus the integrated **3F1 inquiry statement**, have teaching resources. The guided site has **14 routes, 78 lessons, 702 practice tasks, 156 guided examples and 156 sample-check items**. Fractions uses two routes; fourteen routes do not mean fourteen numbered-content units. Keep the open learning branches. No missing whole-topic teaching release was identified by this review.

There are already **14 topic investigations** with retained predictions and separate trial/explanation notes, plus **two existing paper investigations** linked to triangle construction and chart design. A further standalone inquiry course is not required before reviewing application. These are opportunities, not evidence of pupil investigation or delivered hours.

**Next unfinished step: implement a separate P3 application review before P4**, with fresh task contexts, unprompted operation choices and independently observed practical work. Existing scores cannot establish readiness. Eleven check items become identical to earlier guided/practice tasks when introductory example/trial/record labels are removed; new labels are not new mathematical tasks. Do not erase or relabel pupils' existing first attempts.

This release changes documentation and adds a source-audit script only. Lessons, models, activities, banks, scoring and saved-record code are unchanged. It does not implement the application review yet.

## Source and review method

Reread the retained official [EDB KS1 explanatory notes, PDF49–69 / printed43–63](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49), including continuation pages and restrictions. No fresh PDF download or curriculum revision claim is made. Rendered PDF68–69 were visually checked to confirm the chart-scale/tally requirements and the integrated status of inquiry. The first text-console output hit a character-encoding error; the saved UTF-8 extraction was read successfully. The renderer emitted a platform warning but produced both inspected images.

The [earlier source plan](p3-guided-learning-plan.md) links the supplement and individual unit audits. This review uses the official notes for scope, then reads the actual teaching/practical prompts in all fourteen data modules, shared inquiry/observation handling and the existing [3F1 activity](../activities/p3-inquiry.html). Objective tags help locate content; they are not sufficient evidence by themselves. The mapping below is an authored content judgement, cross-checked mechanically for missing objectives and missing bilingual prompts. English teaching content was reviewed for scope; this is not an independent translation review or a fresh numerical audit of every question.

## Learning sequence

Keep number, measures, time, geometry and data as open branches. Within multiplication and division, connect place-value models to written columns; division benefits from multiplication inverse checks. Mixed calculations need earlier addition/subtraction and multiplication meaning. Equal-sharing/fraction work need not wait for written division mastery. Parallel-line construction precedes new quadrilateral properties; triangle work can proceed alongside. Capacity and weight keep intuitive/direct comparison → equal improvised units → standard units/tools → estimate a new object after reference experience. Both time routes build on P2 clocks; seconds measurement and word-problem arithmetic remain distinct. Pictograms lead into bar scales and independent construction.

The links below identify teaching opportunities, not access gates. No total score, badge or completed-lesson count should lock a learner out of another branch.

## Objective coverage and evidence still required

Every row has bilingual teaching and a practical prompt. **Application remains unobserved for every row in this review**: no pupil records were inspected. P1–P9 below are proposed practical-station identifiers, not school grades; they are defined in the implementation contract.

### 3N1 · Five-digit numbers

[Official notes, PDF49](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49). Useful first: P2 thousands, exchanges and comparison.

Required fresh evidence: P1: exchange value cards, oral reading and hidden-card dictation; compare and explain zero places.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3N1.1 | Read, write and count five-digit quantities | [Read, write and keep zero places](../p3-learn.html?path=numbers&lesson=p3-readfive&stage=learn); [Count across ten thousand](../p3-learn.html?path=numbers&lesson=p3-crossfive&stage=learn); [Use ones to decide odd or even](../p3-learn.html?path=numbers&lesson=p3-oddevenfive&stage=learn) |
| 3N1.2 | Explain the ten-thousands place | [Build ten thousand](../p3-learn.html?path=numbers&lesson=p3-tenthousand&stage=learn) |
| 3N1.3 | Compare values | [Compare from the highest place](../p3-learn.html?path=numbers&lesson=p3-comparefive&stage=learn) |

### 3N2 · Multiplication

[Official notes, PDF50](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=50). Useful first: P2 equal groups, facts and exchanges.

Required fresh evidence: P2: make partial products; write own columns; explain three-factor grouping and an estimate.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3N2.1 | Multiply by one digit | [Split into tens and ones](../p3-learn.html?path=multiply&lesson=p3-splitproduct&stage=learn); [Exchange while multiplying](../p3-learn.html?path=multiply&lesson=p3-carryproduct&stage=learn); [Three digits, zeros and new places](../p3-learn.html?path=multiply&lesson=p3-threeproduct&stage=learn) |
| 3N2.2 | Group three factors | [Choose a helpful grouping](../p3-learn.html?path=multiply&lesson=p3-groupfactors&stage=learn) |
| 3N2.3 | Solve multiplication situations | [Choose a calculation for the story](../p3-learn.html?path=multiply&lesson=p3-productstories&stage=learn); [Estimate, calculate and explain](../p3-learn.html?path=multiply&lesson=p3-estimateproducts&stage=learn) |

### 3N3 · Division

[Official notes, PDF51](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=51). Useful first: P2 sharing/remainders and multiplication inverse checks.

Required fresh evidence: P2: share place values, write quotient zeros/remainders and interpret leftovers; contrast successive divisions.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3N3.1 | Divide by one digit | [Share tens and ones](../p3-learn.html?path=division&lesson=p3-shareplaces&stage=learn); [Exchange and keep zero places](../p3-learn.html?path=division&lesson=p3-exchangequotient&stage=learn); [Remainders and a check](../p3-learn.html?path=division&lesson=p3-divisionremainders&stage=learn) |
| 3N3.2 | Divide successively | [Divide from left to right](../p3-learn.html?path=division&lesson=p3-divisionchain&stage=learn) |
| 3N3.3 | Solve division situations | [What happens to the leftovers?](../p3-learn.html?path=division&lesson=p3-divisionstories&stage=learn); [Estimate after exact division](../p3-learn.html?path=division&lesson=p3-estimatedivision&stage=learn) |

### 3N4 · Mixed calculations

[Official notes, PDF52](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=52). Useful first: P2 add/subtract and P3 multiplication meaning.

Required fresh evidence: P2: choose expressions without an operation heading, write columns and explain brackets/intermediate quantities.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3N4.1 | Use brackets to show intended order | [Use brackets to say what comes first](../p3-learn.html?path=mixed&lesson=p3-brackets&stage=learn) |
| 3N4.2 | Combine three addition/subtraction terms | [Add and subtract through four digits](../p3-learn.html?path=mixed&lesson=p3-fouradd&stage=learn) |
| 3N4.3 | Combine multiplication with addition or subtraction | [Multiply before adding or subtracting](../p3-learn.html?path=mixed&lesson=p3-mixedpriority&stage=learn); [See equal totals in real groups](../p3-learn.html?path=mixed&lesson=p3-concreterelations&stage=learn) |
| 3N4.4 | Solve linked calculation situations | [Find the other amount, then altogether](../p3-learn.html?path=mixed&lesson=p3-comparetotals&stage=learn); [Estimate after learning exact methods](../p3-learn.html?path=mixed&lesson=p3-estimatemixed&stage=learn) |

### 3N5 · Fractions

[Official notes, PDF54](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=54). Useful first: Equal sharing and an explicitly identified whole.

Required fresh evidence: P3: fold/partition and frame sets, read/write fractions, overlay equivalents, compare, explain pictured operations before notation.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3N5.1 | Describe part of an object or set | [Name the whole and equal parts](../p3-learn.html?path=fractions&lesson=p3-equalparts&stage=learn); [Read and write parts of one object](../p3-learn.html?path=fractions&lesson=p3-objectfractions&stage=learn); [One whole can be a set](../p3-learn.html?path=fractions&lesson=p3-setfractions&stage=learn); [None and all: zero and one](../p3-learn.html?path=fractions&lesson=p3-fractionbounds&stage=learn) |
| 3N5.2 | Show equal fractional amounts | [Different partitions, same fraction](../p3-learn.html?path=fractions&lesson=p3-modelequivalence&stage=learn) |
| 3N5.3 | Compare with a shared numerator or denominator | [Compare equal-sized parts](../p3-learn.html?path=fractionops&lesson=p3-samedenominator&stage=learn); [Compare the same number of parts](../p3-learn.html?path=fractionops&lesson=p3-samenumerator&stage=learn) |
| 3N5.4 | Add or subtract like-denominator fractions | [Join pictured shares](../p3-learn.html?path=fractionops&lesson=p3-pictureadd&stage=learn); [Remove pictured shares](../p3-learn.html?path=fractionops&lesson=p3-picturesubtract&stage=learn); [Explain three pictured shares](../p3-learn.html?path=fractionops&lesson=p3-threefractions&stage=learn) |

### 3M1 · Kilometres and millimetres

[Official notes, PDF56](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=56). Useful first: P1 centimetres and P2 metres/equal-unit comparison.

Required fresh evidence: P4: choose a km reference; measure two real strips and two dot-pair distances; estimate new lengths then record units.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3M1.1 | Develop a kilometre reference | [Kilometres: a longer unit](../p3-learn.html?path=length&lesson=p3-kilometre&stage=learn) |
| 3M1.2 | Compare kilometre lengths/distances | [Compare lengths and distances](../p3-learn.html?path=length&lesson=p3-comparekm&stage=learn) |
| 3M1.3 | Develop a millimetre reference | [Meet the millimetre](../p3-learn.html?path=length&lesson=p3-millimetre&stage=learn) |
| 3M1.4 | Measure and compare in millimetres | [Measure from the starting mark](../p3-learn.html?path=length&lesson=p3-measuremm&stage=learn) |
| 3M1.5 | Choose suitable length records | [Choose units, estimate, then check](../p3-learn.html?path=length&lesson=p3-lengthrecords&stage=learn) |

### 3M2 · Seconds and time problems

[Official notes, PDF58](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=58). Useful first: P2 minutes, clocks and day context.

Required fresh evidence: P5: establish a second, use real start/stop signals and compare timed intervals; explain own timelines for all three unknowns.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3M2.1 | Develop a sense of a second | [Feel a second](../p3-learn.html?path=time&lesson=p3-secondsense&stage=learn) |
| 3M2.2 | Measure and compare in seconds | [Estimate and time real activities](../p3-learn.html?path=time&lesson=p3-realtiming&stage=learn) |
| 3M2.3 | Find a missing start, finish or duration | [Find the finishing time](../p3-learn.html?path=time&lesson=p3-finishtime&stage=learn); [Find the elapsed minutes](../p3-learn.html?path=time&lesson=p3-elapsedtime&stage=learn); [Work back to the starting time](../p3-learn.html?path=time&lesson=p3-starttime&stage=learn); [Choose the unknown: whole hours](../p3-learn.html?path=time&lesson=p3-hourproblems&stage=learn) |

### 3M3 · Capacity

[Official notes, PDF59](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=59). Useful first: Equal units, counting and scale reading.

Required fresh evidence: P6: predict, transfer full-to-empty without spill, compare equal cupfuls, use L/mL tools and preserve an estimate.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3M3.1 | Explain capacity | [Capacity: how much can it hold?](../p3-learn.html?path=capacity&lesson=p3-capacitymeaning&stage=learn) |
| 3M3.2 | Predict clear capacity differences | [Capacity: how much can it hold?](../p3-learn.html?path=capacity&lesson=p3-capacitymeaning&stage=learn) |
| 3M3.3 | Compare by direct transfer | [Compare by pouring](../p3-learn.html?path=capacity&lesson=p3-capacitypour&stage=learn) |
| 3M3.4 | Compare using a repeated nonstandard unit | [Measure with equal cupfuls](../p3-learn.html?path=capacity&lesson=p3-capacityunits&stage=learn) |
| 3M3.5 | Recognise L and mL | [Litres and millilitres](../p3-learn.html?path=capacity&lesson=p3-capacitylitres&stage=learn) |
| 3M3.6 | Measure and compare with standard units | [Read, measure and compare](../p3-learn.html?path=capacity&lesson=p3-capacityscales&stage=learn); [Estimate, measure and record](../p3-learn.html?path=capacity&lesson=p3-capacityrecords&stage=learn) |
| 3M3.7 | Choose suitable capacity records | [Estimate, measure and record](../p3-learn.html?path=capacity&lesson=p3-capacityrecords&stage=learn) |

### 3M4 · 24-hour time

[Official notes, PDF61](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=61). Useful first: P2 clocks, day parts and midnight.

Required fresh evidence: P5: read/write an unseen notice in both notations; label the same midnight on adjacent named days, without interval arithmetic.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3M4.1 | Explain why 24-hour notation is useful | [Why name the part of the day?](../p3-learn.html?path=clock24&lesson=p3-daycontext&stage=learn); [Read and write the digit pairs](../p3-learn.html?path=clock24&lesson=p3-hourminutepairs&stage=learn) |
| 3M4.2 | Read and express 24-hour times | [From day parts to 24-hour time](../p3-learn.html?path=clock24&lesson=p3-twelve24&stage=learn); [Read 24-hour times aloud](../p3-learn.html?path=clock24&lesson=p3-twentyfour12&stage=learn); [Noon and named-day boundaries](../p3-learn.html?path=clock24&lesson=p3-dayends&stage=learn) |

### 3M5 · Weight

[Official notes, PDF62](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=62). Useful first: Equal units, counting and scale reading.

Required fresh evidence: P7: handle/predict, zero a balance, centre/swap objects, use equal units and g/kg scales, preserve an estimate.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3M5.1 | Explain heavier and lighter | [Heavier and lighter](../p3-learn.html?path=weight&lesson=p3-weightmeaning&stage=learn) |
| 3M5.2 | Predict clear weight differences | [Heavier and lighter](../p3-learn.html?path=weight&lesson=p3-weightmeaning&stage=learn) |
| 3M5.3 | Compare on a balance | [Compare on a beam balance](../p3-learn.html?path=weight&lesson=p3-weightbalance&stage=learn) |
| 3M5.4 | Compare using equal-weight units | [Compare with equal-weight units](../p3-learn.html?path=weight&lesson=p3-weightunits&stage=learn) |
| 3M5.5 | Recognise g and kg | [Grams and kilograms](../p3-learn.html?path=weight&lesson=p3-weightgrams&stage=learn) |
| 3M5.6 | Measure and compare with scales | [Choose and read weighing scales](../p3-learn.html?path=weight&lesson=p3-weightscales&stage=learn); [Estimate, weigh and record](../p3-learn.html?path=weight&lesson=p3-weightrecords&stage=learn) |
| 3M5.7 | Choose suitable weight records | [Estimate, weigh and record](../p3-learn.html?path=weight&lesson=p3-weightrecords&stage=learn) |

### 3S1 · Parallel lines and quadrilaterals

[Official notes, PDF64](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=64). Useful first: P2 angles/perpendiculars, squares and rectangles.

Required fresh evidence: P8: extend lines, draw/make parallels with tools; classify inclusively; draw and separately make non-right parallelograms and trapeziums.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3S1.1 | Identify parallel lines | [Parallel lines keep the same distance](../p3-learn.html?path=quads&lesson=p3-parallellines&stage=learn) |
| 3S1.2 | Construct parallel lines | [Draw and make parallel lines](../p3-learn.html?path=quads&lesson=p3-makeparallels&stage=learn) |
| 3S1.3 | Use parallelogram properties | [Two parallel pairs and equal opposite sides](../p3-learn.html?path=quads&lesson=p3-parallelogramproperties&stage=learn) |
| 3S1.4 | Include squares and rectangles as parallelograms | [Squares and rectangles are parallelograms](../p3-learn.html?path=quads&lesson=p3-inclusivenames&stage=learn) |
| 3S1.5 | Identify trapeziums | [Exactly one parallel pair: trapeziums](../p3-learn.html?path=quads&lesson=p3-trapeziumbases&stage=learn) |
| 3S1.6 | Draw and make the quadrilaterals | [Draw, make and check quadrilaterals](../p3-learn.html?path=quads&lesson=p3-constructquads&stage=learn) |

### 3S2 · Triangles

[Official notes, PDF66](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=66). Useful first: P2 angles/lengths and P1 triangle experience.

Required fresh evidence: P8: choose all applicable names, test feasible/equal-sum/too-short strips, then independently draw and make triangles.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3S2.1 | Recognise the five specified triangle categories | [Equal sides and different sides](../p3-learn.html?path=triangles&lesson=p3-trianglesides&stage=learn); [Right angles and equal sides together](../p3-learn.html?path=triangles&lesson=p3-triangleright&stage=learn) |
| 3S2.2 | Reason about overlapping categories | [Keep every applicable name](../p3-learn.html?path=triangles&lesson=p3-trianglenames&stage=learn) |
| 3S2.3 | Test whether side lengths can form a triangle | [Can three lengths close?](../p3-learn.html?path=triangles&lesson=p3-trianglefeasibility&stage=learn) |
| 3S2.4 | Draw and make triangles | [Draw, make and check triangles](../p3-learn.html?path=triangles&lesson=p3-maketriangles&stage=learn) |

### 3D1 · Bar charts

[Official notes, PDF68](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=68). Useful first: P2 pictograms and counting in ones/twos/fives.

Required fresh evidence: P9: collect anonymous data, retain raw responses/tallies/table, choose scale 1/2/5 and independently construct both orientations.

| Objective | Scope paraphrase | Teaching and practical prompt |
| --- | --- | --- |
| 3D1.1 | Explain a bar chart representation | [From pictures to bars](../p3-learn.html?path=bars&lesson=p3-barparts&stage=learn) |
| 3D1.2 | Read and compare bar-chart data | [Read one unit per interval](../p3-learn.html?path=bars&lesson=p3-barone&stage=learn); [Read scales of two and five](../p3-learn.html?path=bars&lesson=p3-barscales&stage=learn); [Compare the data](../p3-learn.html?path=bars&lesson=p3-barcompare&stage=learn) |
| 3D1.3 | Collect, organise and chart data | [Collect, tally and make a table](../p3-learn.html?path=bars&lesson=p3-bartally&stage=learn); [Choose a scale and construct](../p3-learn.html?path=bars&lesson=p3-barbuild&stage=learn) |

## Boundaries retained

- Numbers include internal zeros, forward/backward crossings of 10000 and parity from the ones. Products/dividends use two/three digits and one-digit multiplication/division; actual written columns and remainder meanings need observation.
- Mixed calculations use three-number addition/subtraction through four digits, or multiplication with addition/subtraction of at most four numbers. Separate bracket pairs are allowed; nested brackets and a formal expansion/factoring algorithm are not required. Comparison-and-total stories require choosing operations.
- Fraction comparisons share a numerator or denominator and use equal-sized wholes. Equivalence is modelled. Diagram-led addition OR subtraction has at most three like-denominator fractions, with intermediate amounts/results from zero to one. Oral explanation precedes written notation; no simplest-form rule. A picture-count question may deliberately ask for shown counts, while an amount question must not reject a justified equivalent fraction.
- Length, capacity and weight use appropriate real tools and original estimate records. Compound-to-single records are included; reverse conversions and decimal records are not required. Capacity means maximum contents, not current fill. Standard-unit screen readings are not actual measurements.
- Actual seconds measurements may exceed 60 seconds when reasonable. Time word problems use whole minutes up to 60 or whole hours up to 12. Twenty-four-hour lessons concern notation/day context, not interval arithmetic in that notation.
- Same-plane parallel lines must stay apart when extended. Squares and rectangles are included as parallelograms; trapeziums have exactly one parallel pair. Construction requests specify ANY versus NO-right-angle parallelograms. Triangles use all applicable names, including equilateral as isosceles, and strict side-sum feasibility. Drawing and making are separate actions.
- Bar charts require both orientations and scales 1, 2 and 5, with original data, tallies and tables. Built-in equal bar widths/gaps and supplied labels cannot establish independent chart construction. Extra scales in the separate practice bank remain extensions.

## Check reuse and readiness limits

The audit compared all **156 checks** with all **858 guided/practice items**, across topics, using canonical field comparisons:

1. Full question payload, omitting only ID, lesson and objective: **0 exact repeats**.
2. Response contract plus bilingual prompt and every diagram/raw-data input used by the renderer: **0 exact repeats**. Feedback and internal metadata are excluded.
3. The second comparison after stripping only the listed introductory Example/Trial/New record/New investigation record/New application number labels in both languages: **11 repeats**. Mathematical quantities, pictures, options and answers still match.

| Route | Checks | Repeats after label removal | Check IDs |
| --- | ---: | ---: | --- |
| numbers | 10 | 0 | None detected |
| multiply | 12 | 0 | None detected |
| division | 12 | 0 | None detected |
| mixed | 12 | 0 | None detected |
| fractions | 10 | 0 | None detected |
| fractionops | 10 | 0 | None detected |
| length | 10 | 0 | None detected |
| time | 12 | 3 | `p3-timecheck-1`, `p3-timecheck-2`, `p3-timecheck-4` |
| capacity | 12 | 4 | `p3-ccheck-1`, `p3-ccheck-3`, `p3-ccheck-4`, `p3-ccheck-12` |
| clock24 | 10 | 0 | None detected |
| weight | 12 | 4 | `p3-wcheck-2`, `p3-wcheck-3`, `p3-wcheck-4`, `p3-wcheck-12` |
| quads | 12 | 0 | None detected |
| triangles | 10 | 0 | None detected |
| bars | 12 | 0 | None detected |

Examples include the time-start signal and late-start timing judgement, container height versus capacity, a transfer into an already-filled container, balance comparisons and bucket/rice unit choices. The evidence lists every matching guided/practice ID. This is a conservative detected count, not a claim that the other 145 items are wholly unfamiliar. Similar numbers, reworded stories, worked examples, activity sheets and practice-bank exposure are outside this equality test. Changing dimensions or rotating a diagram can produce a fresh representation while retaining the same scaffold.

The audit's first draft omitted topic-specific visual fields and falsely flagged 19 visible matches; a partial correction left one. All twelve renderer visual/raw-data inputs were then included and the full audit rerun. Those preliminary counts are invalid and are not published as findings.

Even genuinely new numbers do not remove operation headings, supplied options, fixed field roles or model scaffolding. The shared renderer calls these a sample check, separates first response from one supported retry and says explanations need human review. Its blanket “New examples” wording must not be read as a validated unseen-task claim. **Queue a narrow wording clarification with the application-review release**: examples can revisit familiar tasks, and first-response matches are not a readiness certificate. Preserve existing task IDs and records.

## Integrated inquiry audit

The shared notebook requires a question, prediction and plan before trials. It retains the original prediction; later fields record trials (including unsuccessful ones), noticed changes, explanation, changed examples and help. Predictions are saved separately from scores. Notes are self/observer records, not automatically verified reasoning. One notebook per topic is a continuing investigation record, not a history of every inquiry attempt.

| Topic | Existing investigation | Evidence to inspect |
| --- | --- | --- |
| numbers | [Investigate: move a digit card](../p3-learn.html?path=numbers&stage=investigate) | Move five digit cards 0, 2, 4, 6, 8; choose what changes and stays the same. |
| multiply | [Investigate: regroup the same collection](../p3-learn.html?path=multiply&stage=investigate) | Use 2 trays, 3 cups per tray and 5 counters per cup. Ask which grouping is easier to count and why. Predict before moving objects. Then change one quantity (keep factors small), test both routes and explain intermediate units. You may choose a different question. |
| division | [Investigate: change the grouping](../p3-learn.html?path=division&stage=investigate) | Choose 24, 36 or 48 counters. Predict whether dividing first into 6 groups then splitting each in 2 gives the same amount as first finding 6 ÷ 2 and then sharing into that many groups. Keep a prediction, try both, and explain who receives each share. Extend to another total. |
| mixed | [Investigate: can brackets change a total?](../p3-learn.html?path=mixed&stage=investigate) | Choose three small number cards and +, − or × cards. Predict how placing one pair of brackets could change the result, then test at least two placements. Keep nonnegative results, unsuccessful predictions and a case that stays equal. Explain each grouping with a drawing or objects. Do not nest brackets. |
| fractions | [Investigate: keep the marked amount](../p3-learn.html?path=fractions&stage=investigate) | Use equal-sized strips. Choose a marked fraction and predict whether extra equal folds can change its counts while keeping the marked amount. Record a plan before trying. Overlay to check, include a non-matching example, explain the fixed whole and try a new fraction. |
| fractionops | [Investigate: different shares, same total](../p3-learn.html?path=fractionops&stage=investigate) | Divide a whole strip into eight equal parts. Predict which two non-overlapping shares can cover six parts altogether. Try several pairs, including zero, and explain what changes and what stays fixed. Then try three shares or a subtraction picture. Keep the original prediction and unsuccessful trials; do not mix addition and subtraction in one equation. |
| length | [Investigate: a reference helps?](../p3-learn.html?path=length&stage=investigate) | After measuring reference strips, choose a question: does using a known strip help you estimate NEW strips or dot-pair distances? Predict, plan a fair comparison, keep every first estimate, then measure with a real ruler. Change your reference or question and test again. Do not measure the screen. |
| time | [Investigate: how close are our time estimates?](../p3-learn.html?path=time&stage=investigate) | Choose a safe seated activity. Agree start/finish actions and a tool. Save a prediction and plan before timing. Keep actual readings, display precision and any late starts; repeat fairly and explain differences without erasing your original estimate. No running, breath-holding or speed competition. |
| capacity | [Investigate: does the taller container always hold more?](../p3-learn.html?path=capacity&stage=investigate) | Choose two clean unbreakable containers. Record your prediction and fair comparison plan before testing with cool water over a tray. Record capacity, not just current water. Keep spills and repeat invalid trials. Try another pair and explain whether height alone decides. Adult supervision; never use hot water, glass, medicines or chemicals. |
| clock24 | [Investigate: which labels prevent confusion?](../p3-learn.html?path=clock24&stage=investigate) | Predict which timetable labels a partner will read without asking for clarification. Make paired 12/24-hour cards with dates, noon and adjacent-day midnight. Keep the prediction, record actual readings and corrections, then explain which missing labels caused confusion. Do not calculate elapsed time. |
| weight | [Investigate: is the bigger object always heavier?](../p3-learn.html?path=weight&stage=investigate) | Choose two safe light objects. Record your prediction and a fair balance plan before testing. Check zero, centre the objects, wait and swap sides. Keep unsuccessful or invalid trials. Try another pair and explain whether size alone decides. An adult checks tool limits; no heavy lifting, people or pets. |
| quads | [Investigate: keep the parallel pairs](../p3-learn.html?path=quads&stage=investigate) | Predict which changes to a four-corner model will keep two parallel pairs, and which will leave exactly one. Plan before trying. Draw or make several examples, turn them, check both pairs and record a counterexample. Explain what changed and test a new construction. |
| triangles | [Investigate: when can three strips close?](../p3-learn.html?path=triangles&stage=investigate) | Keep two strip lengths fixed and predict which third lengths can form a triangle. Record your plan before trying. Test shorter, equal-sum and longer cases; keep failures, explain the boundary and try a different fixed pair. Use real strips as well as the screen model. |
| bars | [Investigate: which chart makes our data clear?](../p3-learn.html?path=bars&stage=investigate) | Choose a familiar anonymous collection question and categories. Predict which scale/orientation will help a partner read the results. Keep raw responses, tallies and frequencies in your trials; label simulated fallback data clearly. Make both orientations from the same data, record your partner’s actual reading and revise the presentation without changing frequencies. Keep the first prediction and any help. |

The [existing paper resource](../activities/p3-inquiry.html) adds triangle-strip total investigations (12 then 15) and chart-scale choices for supplied datasets, including counterexamples, partner response and a changed case. Its chart grids impose six intervals and integer endpoints as explicit task constraints, not universal curriculum rules. Supplied data is labelled; independent collection remains a separate task. Its [source audit](p3-inquiry.md) explains the scope. Reuse these resources within topic teaching; do not create a final compulsory inquiry course or infer that ten suggested hours were delivered.

## Next implementation contract: separate P3 application review

Build **16 fresh screen tasks across eight short, freely chosen sessions**, plus **nine practical stations and an inquiry evidence review**. The screen inventory is a sampling design, not full assessment of 54 objectives. Allow oral responses, drawings and adult transcription with the actual help recorded. No time limit, automatic pass score, mastery badge or P4 access lock.

| Session | Two proposed task purposes | Practical link |
| --- | --- | --- |
| Number records | Repair an unseen zero-place record; count/compare with an explanation of the deciding place | P1 |
| Multiplication | Choose a calculation from an unlabelled context; explain a three-factor grouping | P2 |
| Division | Interpret a quotient/remainder in a new situation; distinguish successive divisions from regrouping | P2 |
| Linked calculations | Write/select brackets for a story; solve more/fewer-than and altogether without operation hints | P2 |
| Fraction amounts | Compare or justify matching amounts from new equal-whole pictures; explain a new pictured operation before notation | P3 |
| Measurement decisions | Choose and justify a length record/tool; diagnose capacity/weight comparison evidence | P4/P6/P7 |
| Time and dates | Find an unknown time with a pupil-generated timeline; interpret a dated 24-hour notice and midnight boundary | P5 |
| Shapes and data | Justify all applicable shape names or a construction condition; read and explain an unfamiliar chart | P8/P9 |

P1: value exchange, oral reading and hidden-card dictation. P2: independently written multiplication/division/mixed columns, meaningful intermediates, remainders and original estimates. P3: object/set wholes, folding/overlay, fraction reading/writing and oral-before-written operations. P4: km reference and real mm length/distance measurement. P5: real seconds timing, three time-problem unknowns and oral/written 12/24-hour context. P6: capacity comparisons and tools. P7: weight comparisons and tools. P8: parallel-line, quadrilateral and triangle drawing AND making. P9: new data collection, tally/frequency table and both chart orientations across suitable scales 1/2/5. Split these stations across multiple visits; they are not nine timed tests.

For inquiry, let the pupil choose/adapt an existing topic question. Review their prediction, actual trials, unsuccessful case, explanation and changed example, noting who decided, manipulated, recorded and prompted. Use independent / prompted / not yet / unobserved statuses with dates, evidence and help. Preserve disagreements and failed predictions; correct conclusions alone do not show inquiry.

### Storage and validation contract

- Use a new versioned, per-learner P3 review namespace; do not copy bank scores or guided attempts into it. First responses and optional supported retries remain separate. Never infer independence from a blank help field.
- Do not reveal answers, worked solutions or scoring cues before the first response. Avoid operation labels on application questions. Saved original estimates precede measurements or exact results. Keep original predictions after trials disagree.
- Map each task/station to objectives and explicitly identify what is sampled only through observation. New prompt/number labels do not count as novelty. Compare visible stems, all rendered pictures/data, response contracts and represented tuples against guided examples, practice, checks and activity keys; record remaining parallels. Review freshness against the bank too without promising unseen exposure for a particular pupil.
- Preserve earlier IDs, score contracts and all existing pupil records. Keep practical statuses independent of screen correctness. Test blank/wrong/correct responses, supported retries, equivalent-fraction amount handling, date context, malformed/future/oversized/unavailable storage, stale tabs, per-learner isolation, reload and scoped reset.
- Include bilingual wording clarification for the guided sample checks without deleting old attempts. Review keyboards, focus, phone/desktop layouts, appropriate mathematical diagrams and links back to specific lessons. Publish, verify exact public files and record test failures/reruns separately from distinct cases.

## Verification and limits of this review

The source audit regenerated the 54-row map, confirmed the 78 lesson prompts and 14 investigations, counted 156 checks and recorded the eleven label-only repeats. All 358 relative documentation links resolve locally; all 916 inherited files outside the two edited documents remain byte-for-byte unchanged. Only the README and plan changed among inherited files; the review, evidence and audit script are new. Exact repository/public readbacks and deployment are checked separately at publication. No fresh whole-site browser regression was run because runtime did not change; historical topic-release counts remain historical. No pupil data or observed achievement is assessed. Classroom trials, independent translation, screen-reader listening, physical printing and actual tool/manipulative work remain pending.

The review is complete as a resource/sequence audit. **P3 independent readiness remains undetermined; the separate application review is the next implementation step.**
