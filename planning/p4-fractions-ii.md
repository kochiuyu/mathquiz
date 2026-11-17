# 4N6 Fractions (II): verified resource closure

**Verified resource complete.** All numbered objectives below have linked digital and teacher-assessed resources. Public batch `64335b9` passed 435/435 curriculum and 169/169 UI checks; twenty static gates passed. Current checkpoint47/85,183numbered objectives plus three inquiry statements;152permanent families/2355variants,151selectable/2340,52selectable57resource units,47activities,10open. Completion denotes resources, not pupil mastery. Manual print/PDF pagination, classroom trials, independent translation and screen-reader validation remain unperformed.

## Historical implementation record

The following record describes earlier private candidate stages; its former inventories and pending-browser statements are historical, not current release evidence.

Six families/84variants: fractionkind4a12, fractionconvert4a12, fractionscale4a12, fractioncompare4a12, fractioncalc4a24, fractionstory4a12. All2,271 predecessor payloads preserved.152families/2,355variants;151selectable/2,340;52selectable57resourceunits;47activities;42inheritedcomplete15open. No public release or completion promotion.

## Official scope and evidence

[EDB supplement printed62–64/PDF65–67](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=65) and [KS2 printed10–11/PDF16–17](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=16) define seven objectives: types; improper/mixed/whole conversion; expansion/reduction; comparison; addition/subtraction up to three operands; mixed addition/subtraction of three operands; problems. Fractional operands have common denominators; whole/mixed quantities included. Lowest terms required for calculation results; both reduced improper and mixed forms accepted. Estimation is supporting evidence, not an eighth objective. Small denominators are a resource choice, not an invented curriculum ceiling.

|Objective|Digital evidence|Actual teacher evidence|
|---|---|---|
|4N6.1|Written-form classification, proper/improper/equalnumerator/mixed/whole; equalwhole diagrams|Original equalunit partitioning and explanation; no zerofractionclassification requirement|
|4N6.2|Requested mixed/improper/whole or specifieddenominator conversion|Regroup7thirds,9quarters,6halves in both directions|
|4N6.3|Expansion to requesteddenominator and reductionincluding>1|Model invariance, reject adding1to numeratoranddenominator|
|4N6.4|Same-denominator comparisons withwhole/mixed/equalvalues|Commonunitnumberline and explanations|
|4N6.5|12pureaddition/subtraction2–3operands|Original steps, whole-unit regrouping andoutputreduction|
|4N6.6|12mixedplus/minus exactlythreeoperands|Original mixedwork, zeroandwhole results|
|4N6.7|12metrecontexts|NEW3m−1 3/8m−3/8m=1 1/4m; estimatebeforeexactwork, actual modelandunits|

## Exact new response contract

The existing3,245-byte legacy marking prefix is unchanged. New4N6functions are append-only and selected only by q.fraction4N6Answer. Legacyfrac3a partition-count scoring andfracadd5a canonicalpair grading remain unchanged.

Input is bounded to80characters and12digits percomponent after NFKC normalization. Leadingzeros accepted; spaces aroundslash accepted. Exact BigInt parsing supports whole, n/d and w n/d only; noeval, decimals, exponents, negativevalues, arbitraryexpressions, unitsuffixes or zerodenominator. Mixed wholepart≥1 and0<n<d. Numericinputs use inputmode=text, maxlength80, preserving slash/space mobile entry.

General mode accepts reducedproper/improper/mixed/integer forms;5/2and2 1/2equivalent andcorrect. Unreduced10/4has feedback explicitly saying valueequivalent butnotlowestterms, ratherthan calling itsvaluewrong. General0and0/1valid; integer3and3/1valid. Mixed mode acceptswhole syntax onlywhen targetintegral, otherwisegenuine mixedform; improper mode requiresfraction syntax withn≥d; whole mode requiresintegersyntax. Specifieddenominator mode requiresfraction syntax andexactdenominator, explicitlynotlowestterms so6/2isacceptedwhenrequested. Onefractionanswer earnsone mark, never numerator-onlypartialcredit.

## Separate whole-unit renderer

NewfractionUnits4renderer creates equal300unit-widebars, each withdequalparts; nmarkedparts distributedacrossceil(n/d)wholes. Zero retainsoneunshadedreferencewhole. Newfigurekindonly; legacybar/P3renderersunchanged. Twozerocalculationfixtures exerciseactualzerodiagrams. Canonicalgeometry hasboundedSVGviewBox andexplicitwhole/partdataattributes; phone/PDF visualverification remains separate.

## Independent review and tests

Independent reviewer didnotauthor scorer/renderer. Found mixed-mode integralanswers rejected contraryto intendedcontract; coordinatedfixnowacceptswholeanswersforintegraltargets while rejectingimproperform. No questionpayload orlegacygraderchange was required. Added separate parsing/form/BigInt/legacy-prefix/600SVGgeometry gate. Implementationworker gate independently covers51,984 rational comparisons,100SVGcases, actualassessment/practicehandler stubs andall84canonicalanswers. Parentgate independently derivesrationalanswers, classificationwrittenforms, requestedconversionvalues, same-denominatoroperandbounds, nonnegativeintermediates andunitlabels. No remaining concrete defect reported.

Browser tests preserveall84IDs inboundedpaperbatches, preciseSVGwholes/parts/shadingcoordinates, allpracticefixtures, accepted/rejectedscoring and bilingualequivalent-unreducedfeedback. Updatedinherited4N5route typo divisionmixed4a andasserteddeclaredbrowserfamilyIDs exist. Runtimebrowser, manualprint, classroom, independenttranslation andscreenreader validation stillpending. Sevennumberedobjectives onlyafterverifiedrelease; noinquiry statement.

## Final source-scope correction and executed checks

A final independent scope check caught a story-display reduction:20/8was being shown as2 1/2before subtractionof3/8. The authored4N6story now retains2 4/8as its input, ensuring common denominators; only the resultisreduced. Added a visible-premise denominatorassertion. All2271predecessorpayload hashes remainunchanged. Bothreviewfixes are new4N6-only. Font248384bytes covers916sourcecharacters. Allstaticgates pass; precise84fixturepaper/runtime testsareauthoredbutnotyetbrowserverified. Currentinventory152/2355permanent,151/2340selectable,52selectable57resource,47activities42complete15open. Candidateonly; no7-objectivecompletionpromotion.
