# P4 division by two digits

25 November 2026. [Learner entry](../p4-learn.html?path=division). Seven English/Traditional Chinese lessons, 14 guided examples, 63 practice tasks (three at each difficulty per lesson), and 16 separate sample checks. Covers 4N2.1–3 with integrated inquiry; no extra numbered objective is claimed. P4 now has 13 lessons across multiplication and division. Next: multiples and factors, then common multiples and factors.

## Learning sequence

| Lesson | Objective | Evidence beyond the final answer |
| --- | --- | --- |
| Choose a trial digit | 4N2.1 | Try too-small/too-large digits and check a product against the working part |
| Divide in columns | 4N2.1 | Multiply, subtract with actual exchanges, then bring down by place value |
| Keep zeros and leftovers | 4N2.1 | Zero in a two-digit quotient; explicit remainder and its bound |
| Divide exactly by 2, 5 or 10 | 4N2.2 | Last-digit tests, whole number zero and even/odd connection |
| Divide exactly by 3 | 4N2.2 | Digit sum, not a last-digit rule; zero and multi-digit examples |
| Full packs and leftovers | 4N2.3 | Whole full-pack count and leftover items with separate units |
| Enough for everyone | 4N2.3 | Capacity rounded up only when needed; independent estimate before exact work |

The split divisibility lessons keep the immediate pupil action short. Hints and optional writing open separately; required quotient/remainder fields and estimate reasoning remain visible. Models, paper tasks and practical observation records accompany every lesson. Actual column writing and pupil explanations require human observation.

## Mathematical contracts

Required division tasks use two-/three-digit dividends and two-digit divisors. Exact/nonexact cases, subtraction borrowing and a trailing zero quotient occur. There is no claim of an internal zero or three-digit quotient in these ranges. A small-dividend example is explained as a permissible boundary, not an extra curriculum requirement.

Model rows align the working part, subtraction and remainder in original place-value columns. The 736 ÷ 23 trace exchanges a hundred for ten tens in 73 − 69; 825 ÷ 24 also includes a chained exchange in 105 − 96. Each quotient digit has a multiplication check. Recomposition and 0 ≤ remainder < divisor are both required. A check explicitly rejects 807 ÷ 40 = 19 remainder 47 even though it recomposes correctly.

Divisibility is limited to 2, 3, 5 and 10. The interactive rule model accepts whole numbers 0–9999, explains 0 as even and exactly divisible by each positive test divisor, and never offers division by zero. No proof or tests for 4/6/8/9 are required. Choice answers store a stable code but display translated labels.

Numeric response fields accept whole digits 0–999, including full-width digits and leading zeros. Blank remainder is not zero; signs, decimals, commas, exponents and out-of-range values are rejected. A complete quotient/remainder pair is one first-response match; this guided sample does not change the bank's per-field scoring. Wrong but syntactically valid remainders remain recorded as wrong, rather than being silently corrected.

Pack questions use floor quotient plus leftover items. Capacity questions use ceiling only for a nonzero remainder. Exact and nonexact examples occur in both modes. The separate 863 ÷ 28 estimate task keeps the pupil's own estimate (0–999) and easy-number reasoning before revealing 30 remainder 23, after confirmation of paper work. Estimates have no hidden target mark. Answers exist in client code; this is a learning sequence, not an anti-cheating mechanism.

The sixteen checks use different numerical situations from the guided/practice sets and model examples; numerical division pairs are also checked against exposed activity calculations. All four divisibility rules occur in the sample. The wider generated bank is not claimed to be entirely unseen. Revisiting repeats the sample; it is not a mastery certificate.

## Records and compatibility

Division uses `mathquiz-p4-guided-v1-division-0` through `-2`, with separate test keys. The multiplication namespace, task IDs and schema remain compatible. Both topics preserve their own cursor, first responses, one retry, original estimates, practical observations and inquiry. Inquiry starts with a saved original question/prediction/plan for 672 ÷ 21, then paper trials and explanations. Its new numerical situation is not exposed in the freely available model examples; pupils may revisit the trial-digit method with other examples.

Stale writes are blocked. Malformed/future/oversized records are protected; unavailable/quota-limited storage is labelled temporary. Topic reset requires an explicit confirmation and does not reset multiplication, other pupils, earlier grades or bank scores. The existing 524288-character limit is retained and maximum valid division records are tested. Normal records and prior test records are checked/restored by the harnesses.

The shared catalogue adds division. Existing HTML edits refresh catalogue cache tokens; P1–P3 content and stores are unchanged. Explicit multiplication/division paths win; a lesson-only division link selects the right data and topic. An invalid lesson falls back to the selected topic's first lesson. No unbuilt P4 application review is advertised.

## Verification and limits

Local checkpoint: 546 distinct selected cases verified (115 division core, 99 multiplication core, 83 division interface, 67 multiplication interface and 182 shared wording/navigation). Two navigation timeouts passed their exact reruns. Sixteen static gates and 71 relative links pass; 942 inherited files are byte-unchanged. The same 546 cases are verified publicly: **1092 distinct local/public cases**, with original navigation timeouts and exact passing reruns retained in the evidence. All 31 runtime-release repository/public files and eleven exact versioned asset URLs matched. The runtime deployment succeeded; final documentation deployment/readbacks are recorded in the completion report.

[Evidence](p4-division-guided-evidence.json) separates local/public cases, original failures, exact reruns, static arithmetic checks and deployment readbacks. Independent repeated subtraction verifies every authored response; division traces are swept across the supported ranges and all four divisibility criteria across 0–9999. Existing multiplication and shared P1–P3 navigation/wording suites are retained.

Classroom trials, independent translation review, screen-reader listening and observed practical/paper work remain pending. Automated matching, software tests and self-recorded lesson visits do not establish pupil independence or understanding.

Sources: [EDB KS2 notes PDF9–10](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=9), [supplement PDF61–62](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=61), [unit audit](p4-division-ii.md), and [P4 guided plan](p4-guided-learning-plan.md).
