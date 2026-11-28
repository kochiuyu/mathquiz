# P4 decimal meaning: guided release

29 November 2026. [Open lessons](../p4-learn.html?path=decimals). [Evidence](p4-decimals-guided-evidence.json).

Six English/Traditional Chinese lessons add **12 together tasks, 54 practice tasks and 12 sample checks**. P4 now has **75 lessons across twelve topics**. The longest question prompt has eight English words. Required quantities and diagrams remain visible; hints, optional writing and adult notes open separately.

## Curriculum and teaching

The [EDB notes, PDF pages 18–19](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=18), checked for this release, specify four objectives: decimal meaning, four fractional places, comparison and daily uses. The [earlier unit audit](p4-decimals-i.md), [physical activity](../activities/p4-decimals-i.html) and existing practice bank remain available. [P3 fractions](../p3-learn.html?path=fractions) are the prerequisite link.

| Lesson | Objective | Teaching and response | Physical evidence |
| --- | --- | --- | --- |
| Meet tenths | 4N7.1 | Equal whole strips, tenths, fractions and decimal notation, including zero and amounts beyond one | Fold an equal strip; show and name its parts |
| Meet hundredths | 4N7.1 | Hundred-square wholes, decimal fractions, inside zeros and digit-by-digit reading | Shade a grid and read an unseen card aloud |
| Read four decimal places | 4N7.2 | Digit versus value through ten-thousandths; magnify one part into ten smaller parts | Make a place-value chart and read every decimal digit |
| Keep the zeros in place | 4N7.2 | End-zero equivalence, inside zeros and explicitly written decimal-place counts | Make equal-value cards with different written places |
| Compare decimal amounts | 4N7.3 | Decimals, whole numbers and fractions whose denominators divide 100 | Order new cards and explain equal-place comparisons |
| Use decimals every day | 4N7.4 | Money, metres/centimetres and litres/millilitres, in both directions | Record a real price or measurement, its source and units |

This release keeps value and written notation distinct. A value task accepts equivalent end zeros. A task explicitly asking for four decimal places requires four written digits after the point; a whole-digit/count response has its own form rule. Wrong-form feedback distinguishes an equal numerical value from the requested representation. The original written answer remains visible beside a supported retry.

Decimal syntax reuses the existing exact integer-ratio parser and scorer without changing them. Full-width digits and point, outer spaces and leading zeros are accepted. Inputs require digits on both sides of a decimal point. Signs, exponents, expressions, fractions, units, missing sides and oversized components are rejected. Arithmetic equality avoids binary floating-point rounding. The course teaches up to four decimal places; bounded extra terminal zeros can still express an equal value unless a written-place count is requested.

## Models and records

Equal-area grids show ten or one hundred cells per whole. Zero still has a visible whole; amounts beyond one use equal-sized wholes. Fine decimal places use a clearly labelled enlargement of one part into ten smaller parts, rather than pretending that a hundred-cell grid directly displays ten-thousandths.

The optional decimal builder starts at zero. Pupils choose ones, tenths, hundredths, thousandths or ten-thousandths and add or remove one unit. Exchanges use exact integer ten-thousandths; zero and 9.9999 bound the model. It keeps keyboard focus, resets on navigation and awards no marks. Step controls and example choices connect grids, fractions, place-value charts, oral readings and comparisons.

Each lesson retains a separate practical observation. Reading a displayed text choice does not establish actual oral reading. A unit conversion answer does not establish real measurement: the practical prompt asks for an actual instrument or label, quantity and original/converted units. Inquiry retains the first prediction about zeros beside later tests, including changed explanations and help received. Blank help does not establish independence.

The three pupils have separate topic records. First responses, retries, practical observations and inquiry remain distinct. Existing safeguards protect malformed, oversized, future and stale records; blocked storage is described as temporary. Confirmed reset affects the selected pupil/topic only. Earlier lessons, models, practice-bank payloads, grading and badge-store logic are unchanged.

No decimal addition/subtraction algorithm, complicated multi-unit conversion or time conversion is introduced. Decimal calculations are the next separate release. These sample checks differ from this topic's teaching/practice situations but are not a fresh whole-P4 transfer assessment or mastery certificate.

## Verification

**All 1,602 selected local browser cases are verified:** 1,286 core, 107 interface, seven badge and 202 shared wording/navigation cases. Final full runs had one interface navigation timeout and one shared-navigation timeout; both passed exact reruns. Earlier run outcomes are retained in the evidence. Public verification and deployment are pending.

Phone preview prompted removal of a height cap that made two-whole labels too small; the final labels measured 18.5 pixels. Answer-box guidance now distinguishes whole-digit counts, values and requested written decimal places. Focused bilingual checks cover both refinements.

Seventeen static gates independently check all 78 answers with rational arithmetic and bilingual reading rules, inspect actual equal-area grid cells, compare task signatures and verify preserved sources. The browser core combines all twelve P4 suites. Interface checks cover both languages, all lesson stages/examples, diagram bounds, all sample checks, decimal input/form feedback, original precision through retry/reload, exact model exchanges, draft preservation, observations, inquiry, storage failures, scoped reset, prerequisites and all eleven earlier topics. Shared wording/navigation and badge suites exercise the shared assets.

The initial new static badge assertion incorrectly compared the whole registry as though it were only rule code. It was corrected to permit exactly the new topic/check entries and require every other byte to match. Badge rules themselves were unchanged. The inherited independent decimal suite passes: 2,355 predecessor payloads and the marking prefix remain frozen, with 40,000 exact parser properties, all 60 existing decimal response contracts and bilingual handler/geometry checks. Eleven badge static gates pass.

Classroom trials, independent content/translation review, screen-reader listening, printing, actual oral reading and observed measurement remain pending.

## Next

**P4 decimal addition and subtraction**, followed by larger bar charts, mixed calculations and whole-P4 coverage/application review. Continue with P5 and P6 afterwards; general P1–P3 revision remains deferred.
