# P4 multiples and factors

26 November 2026. [Learner entry](../p4-learn.html?path=factors). Six bilingual lessons, 12 guided examples, 54 practice tasks and 12 sample checks. Covers 4N3.1–4 with integrated inquiry. P4 now has nineteen lessons across three topics. Common multiples/factors, HCF/LCM and short division remain the next unit, 4N4.

| Lesson | Objective | Practical evidence |
| --- | --- | --- |
| Make multiples | 4N3.1 | Build equal groups and explain the repeated addition |
| Find factor pairs | 4N3.2 | Arrange counters into rectangles and keep original pairs |
| Find every factor | 4N3.2 | Exhaustive blank-paper list; square factor occurs once |
| Factors and multiples | 4N3.3 | Both directions and exact division; 1 and self-relations |
| Prime, composite or neither | 4N3.4 | Factor counts; 1 neither, 2 even prime, odd composites |
| Make a sieve to 100 | 4N3.4 | Pupil marks each number; original and corrected charts retained |

## Responses and models

This unit uses positive integers. Multiples start at the number, not at zero. Complete factor lists use a single comma-separated field with no supplied factor count. Any order is accepted; full-width digits/commas normalize and factors sort numerically. Repeated factors, zero, missing tokens, decimals, signs, scientific notation and out-of-range tokens are rejected. A syntactically valid incomplete list is retained as an incorrect response, with a supported retry kept separately. Lists require exact completeness, not a selection from a supplied answer set.

The rectangle model tests row counts 1–10 for numbers 1–100. Every factor pair in this range has a smaller member at most 10. Reversed pairs are not duplicated; a square pair keeps one factor in the complete list. Long rows are explicitly sent to paper rather than squeezed into illegible dots. The visual pair collection is temporary; original paper work is recorded separately in practical observations.

Prime/composite decisions use all factors. There are 25 primes through 100. One is neither prime nor composite; two is prime; odd numbers such as 49 and 77 are composite. No odd/even shortcut is used to classify primes.

The sieve starts with 100 unmarked cells. Each mark is a pupil action, not an automatic crossing-out operation. A mode selects circle/prime, cross-out/composite, neither or unmarked; text labels accompany visual marks. The working chart saves on every change. A complete first chart and one corrected chart are immutable separate snapshots, with optional help notes. Incomplete charts can be retained as a working draft but cannot be submitted as a full chart. Feedback identifies a number to reconsider; there is no automatic fill or mastery score. A collapsed Saved charts view lists the original and corrected classifications and help notes for comparison without opening extra lesson text. Paper crossing-out and explanations still need observation. Five columns on narrow phones retain 44px touch targets; wider screens use ten columns.

The twelve sample checks use number situations different from authored guided/practice tasks. Classification checks nevertheless use numbers already present in the 1–100 sieve; they are familiar application, not wholly unseen evidence. The wider generated bank is not audited as entirely novel, and revisiting repeats the same sample.

## Records and scope

The new namespace is `mathquiz-p4-guided-v1-factors-0` through `-2`, with isolated test keys. P4 multiplication and division data/models are unchanged. Existing schema/version and limits remain compatible for those topics. Sieve records exist only in the factors topic. Topic/pupil cursors, first answers, one retry, observations and inquiry remain independent. Reset clears this topic's chart and records only after explicit confirmation.

Malformed/future/oversized records remain protected; stale writes are blocked; unavailable/quota-limited storage is labelled temporary. Maximum valid records with working/first/second sieve charts are checked against the existing 524288-character bound. Test harnesses restore prior test records and verify normal records unchanged.

Inquiry saves an original question, prediction and plan about numbers with odd counts of factors before recording paper trials. This is an optional investigation, not a required square-number theorem or an extra numbered objective. Notes and observed practical work never add automatic marks.

The shared catalogue adds factors. Earlier HTML changes refresh catalogue cache tokens; the shared P4 app/store dispatches explicitly by topic. Existing multiplication/division response and model checks are retained. A lesson-only factors link selects the right topic; explicit topic paths remain authoritative.

## Verification and limits

[Evidence](p4-factors-guided-evidence.json) separates core, interface and shared navigation cases, original failures and reruns. Independent repeated addition/subtraction and parsed bilingual relationship statements verify all 78 authored answers. Factor lists and prime classifications are checked exhaustively through 100. Selected previous-topic interface cases and all existing P4 core cases run alongside the new route checks; this is not a claim that every historical suite was rerun.

**566 distinct local and 566 public browser cases verified (1,132 combined)**: 307 core, 75 interface and 184 shared wording/navigation per environment. Each interface and shared run needed one exact timeout rerun. The added saved-chart view passed the same sieve case locally and publicly after correcting a numeric CSS selector in the test and refreshing two public lesson URLs that still served cached pre-viewer HTML; original failures are retained and reruns are not counted as new cases. Twelve static gates passed, 75 documentation links resolved, 947 inherited files stayed byte-for-byte unchanged, and all 34 runtime files plus 13 versioned asset URLs matched. The final documentation deployment/readback is recorded in the completion report.

Classroom trials, independent translation review, screen-reader listening and observed paper/practical work remain pending. Correct screen responses do not establish independence or mastery.

Sources: [EDB KS2 PDF11–12](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=11), [supplement PDF62–63](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=62), [unit audit](p4-multiples-factors.md), [guided plan](p4-guided-learning-plan.md).
