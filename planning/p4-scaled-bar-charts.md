# P4 scaled bar charts · family brief

Status: **live since 16 November 2026** as `bar4a`. Source checked on the same date. This is one interpretation task within 4D1, not full unit coverage or evidence of pupil mastery. Manual language, pupil, physical print and screen-reader checks are deferred.

## Curriculum and task

[EDB 2020 Key Stage 2 explanatory notes, 4D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=28) list objective 2 as interpreting bar charts of greater frequency counts. The notes limit representations in this unit to one-to-ten, one-to-fifty and one-to-hundred, and require horizontal and vertical forms. They separately cover approximate values and construction. Pupils need to identify a named category, read the scale from zero and multiply the number of steps by 10, 50 or 100. This family does not test rounding, chart construction or comparing two bars.

Show a titled chart of three activities, with zero, regular labelled ticks, equal-width bars and the unit “pupils” / “名學生”. Ask for one named bar's pupil count. Include zero and a bar reaching the top grid line. The chart's accessible text gives orientation, scale, categories and endpoints in *steps*, leaving the scale multiplication to the pupil.

| Item part | English | 繁體中文 |
|---|---|---|
| Prompt | How many pupils chose music? Use the scale on the chart. | 有多少名學生選擇音樂？請按棒形圖的刻度讀取人數。 |
| Worked example | The music bar reaches 5 steps from zero. Each step is 10 pupils, so 5 × 10 = 50 pupils. | 「音樂」的棒形由零起到第5格。每格代表10人，所以5 × 10 = 50人。 |
| First hint | Find the named bar. Check what one axis step represents, then count the steps from zero to its end. | 找出題目指定的棒形。先看數軸每格代表多少，再由零數到棒形末端。 |

## Versioned items and marking

Twelve permanent IDs, `bar4a-0` through `bar4a-11`, cover all three scales, both orientations and all three target positions. Bar lengths are whole grid steps from 0 to 6. The source record stores the scale, orientation, three bar lengths, categories, target and parallel prompt/worked step; the drawing and answer derive from that one record. The family reuses the P3 chart renderer but does not alter P3 questions or links.

One mark requires the exact whole-number pupil count. Spaces and full-width digits work. A step count, decimal, calculation or typed unit is not accepted; the unit is printed beside the input. Practice begins with the scale-of-10 example, gives a scale-reading hint, permits one retry, shows the worked step, then uses distinct scale-of-50 and scale-of-100 charts. First-try success is tracked separately.

Automated checks enumerate every item, independently recompute `steps × scale`, check coverage, answer formats, stable links, bilingual builder/pupil/paper/key/practice routes, paper/key code and phone width. Human review remains separately deferred.
