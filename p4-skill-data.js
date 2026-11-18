/* P4: released contexts with guided, independent and reasoning demands. */
((root)=>{
const source=typeof P4SkillSeeds!=='undefined'?P4SkillSeeds:require('./p4-skill-seeds.js');
const graders=typeof module!=='undefined'?require('vm').runInNewContext(require('fs').readFileSync(__dirname+'/marking.js','utf8')+';({scoreFraction4N6,scoreDecimal4N7})'):root;
const levels={easy:['Easy · guided','容易 · 有引導'],normal:['Normal · apply','一般 · 應用'],difficult:['Difficult · reason','較難 · 推理']},questions=[];
const N=(label,n)=>({label,answer:String(n)}),C=(options,answer,i,label=['Check / explain','核對／解釋'])=>{const order=options.map((_,j)=>j),shift=i%options.length;order.push(...order.splice(0,shift));return{label,options:order.map(j=>options[j]),answer:String(order.indexOf(answer))};};
const reasons={
barcompare4a:['Use the scale to read both bars before adding or subtracting.','先按刻度讀兩條棒，才相加或相減。','Each grid step always means one pupil.','每格永遠代表一人。'],
barapprox4a:['Compare distances to neighbouring multiples; round a midpoint upward. The exact count stays unchanged.','比較與相鄰倍數的距離，中點向上取值；確切人數不變。','Rounding changes the original exact count.','四捨五入會改變原來確切人數。'],
barscale4a:['Check maximum count against interval count × step; choose the smallest allowed step that fits.','比較最大數量與格數×刻度，選最小而能容納的指定刻度。','Always choose the largest available step.','永遠選最大的刻度。'],
directionrelative4a:['Use the marked north and the stated reference; reversing the reference gives the opposite direction.','按指北箭頭和指定參照物判斷；交換參照物得相反方向。','The top of every map must be north.','每幅地圖的上方一定是北。'],
compassroute4a:['Turn from the initial facing direction, then match the road; north does not turn with the person.','從原本面向的方向轉身，再對照道路；北方不隨人轉動。','A body turn changes the map’s north direction.','身體轉向會改變地圖北方。'],
dissectproperties4a:['Follow every specified cut and check all resulting pieces; turning a piece preserves its properties.','依每條指定分割線檢查所有塊，轉動不改變其性質。','Every cut of a rectangle produces two rectangles.','長方形無論如何切都得兩個長方形。'],
formpolygons4a:['The shown pieces must fill the target exactly with no gap, overlap or part outside.','圖示各塊須剛好填滿目標，沒有空隙、重疊或超出。','Equal total area alone guarantees that this placement fits.','總面積相等就保證圖示擺法符合。'],
rhombusproperties4a:['Four equal sides define a rhombus; a square also satisfies this condition.','四邊相等是菱形的條件，正方形也符合。','A square cannot be a rhombus.','正方形不可能是菱形。'],
quadrelations4a:['Always means no exception; one counterexample disproves a claim, but one example cannot prove every case.','「總是」不容例外，一個反例可推翻說法，一個例子不能證明所有情況。','One matching example proves a statement about every quadrilateral.','一個符合的例子就證明關於所有四邊形的說法。'],
areaconcept4a:['Area measures the covered surface, not the length of its boundary.','面積量度所覆蓋表面，不是邊界長度。','Area and perimeter always measure the same thing.','面積與周界永遠量度同一樣東西。'],
areaunits4a:['Use equal units without gaps or overlaps; different-sized units give different counts.','用相同單位無縫無重疊地覆蓋，不同大小單位的數目會不同。','Any collection of unequal tiles can be counted as equal area units.','任何大小不等的磚都可當相同面積單位數。'],
areacompare4a:['Compare using the same area unit or an overlay without resizing.','用相同面積單位比較，或不縮放地重疊比較。','The longer-looking outline always encloses the larger area.','邊界看似較長就一定圍出較大面積。'],
areaformula4a:['Rectangle area is length × width; square area is side × side, in square units.','長方形面積是長×闊，正方形面積是邊長×邊長，使用平方單位。','Add all side lengths to find area.','相加所有邊長就是面積。'],
perimeterconcept4a:['Trace the entire outside boundary once; internal seams are not part of the perimeter.','沿整個外邊界走一圈，內部接縫不屬周界。','Add internal seams to the outside boundary.','把內部接縫加進外邊界。'],
perimetercompare4a:['Add every outside edge once in the same unit, then compare.','用相同單位把每條外邊相加一次，再比較。','Compare only the longest edge of each shape.','只比較每個圖形最長的一邊。'],
perimeterformula4a:['Use all outside lengths; a shared internal seam is excluded.','計所有外邊長度，不計共用的內部接縫。','A shared internal edge is counted twice in the combined perimeter.','合成圖形周界須把共用內邊計兩次。'],
decimalmeaning4a:['Say each decimal digit after the point, including zeros; equal parts refer to one whole.','小數點後每個數字都要讀，包括零；等份以一個整體為準。','Zeros after the point may always be skipped when reading the written numeral.','讀出所寫數字時，小數點後的零永遠可以省略。'],
decimalplace4a:['Digit value depends on its place; written decimal places include trailing zeros.','數字的值由數位決定，寫出的小數位數包括末尾零。','The digit and its value are always equal.','數字與它表示的值永遠相等。'],
decimalcompare4a:['Align place values; appending trailing zeros preserves value.','對齊位值，末尾加零不改變值。','More written decimal places always means a larger number.','寫出的小數位數較多就一定較大。'],
decimalunits4a:['Use the stated unit relationship; place value depends on which unit is the whole.','按指定單位關係換算，位值取決於以哪個單位作整體。','A decimal point can be placed anywhere without changing the amount.','小數點可任意放而不改變數量。'],
decimaladdsub4a:['Align decimal points and equal place values before adding or subtracting.','加減前先對齊小數點及相同數位。','Align the last written digits even when their places differ.','即使數位不同也只對齊最後寫出的數字。'],
decimalmixed4a:['Calculate addition and subtraction in order; subtraction cannot be regrouped arbitrarily.','加減按次序計算，減法不可任意改分組。','Subtract the last two numbers first in every mixed calculation.','混合計算永遠先減末兩數。'],
decimalstory4a:['Identify increases and decreases in the same unit; use place-value addition or subtraction.','以相同單位辨別增加或減少，再按位值加減。','The word problem always requires addition.','文字題永遠都要用加法。'],
fractionkind4a:['Classify the written form; an improper fraction may have the same value as a whole number.','分類按寫出的形式，假分數的值可以等於整數。','Any fraction equal to a whole number is written in whole-number form.','值等於整數的分數都已寫成整數形式。'],
fractionconvert4a:['Regroup complete wholes without changing the amount; use the requested form and lowest terms.','重新組合完整整體而不改份量，按要求形式並約至最簡。','Changing between mixed and improper forms changes the amount.','帶分數與假分數互換會改變份量。'],
fractionscale4a:['Multiply or divide numerator and denominator by the same nonzero whole number; keep a requested denominator.','分子分母同乘或同除一個非零整數，並保留指定分母。','Add the same number to numerator and denominator to preserve value.','分子分母同加一數就能保持值不變。'],
fractioncompare4a:['Use equal-sized wholes and common-sized parts; include the whole-number portions.','用同大小整體和相同大小等份比較，並計算整數部分。','Ignore whole-number portions when comparing mixed numbers.','比較帶分數可不理整數部分。'],
fractioncalc4a:['Add or subtract counts of equal parts, then reduce the result to lowest terms.','相同等份的份數相加或相減，最後把結果約至最簡。','Add or subtract denominators along with numerators.','分母也跟分子一樣相加或相減。'],
fractionstory4a:['Model the story with equal-sized units, combine or remove parts, and reduce the result.','按故事用同大小單位合併或取走等份，再把結果約至最簡。','A metre can change size between the two quantities.','兩個數量的一米可用不同大小。'],
distribute4a:['Multiply both parts by the common factor, keeping the addition or subtraction sign.','兩部分都乘共同因數，保留加或減號。','Multiply only the first part inside brackets.','只乘括號內第一部分。'],
divisionmixed4a:['Do brackets first; multiply/divide left to right before remaining addition/subtraction.','先括號，乘除由左至右，再做餘下加減。','Always do every multiplication before every division.','所有乘法永遠先於所有除法。'],
mixedfive4a:['Respect brackets and equal-precedence left-to-right order.','依括號及同級運算由左至右的次序。','Calculate whichever pair is easiest, ignoring order.','不理次序，任選較容易的一對先算。'],
unitary4a:['Find the cost of one item first; the constant price links the other quantity and total.','先求一件的價錢，再用不變單價聯繫另一數量和總額。','Use this rule even when the problem states a quantity discount.','即使題目有數量折扣也可用同一不變單價。'],
commonfactors4a:['A common factor divides both numbers exactly; include every such positive factor once.','公因數須整除兩數，每個正公因數計一次。','Being a factor of just one number is enough.','只是一個數的因數便足夠。'],
commonmultiples4a:['Each listed number must be a positive multiple of both given numbers.','每個列出的數都須是兩數的正倍數。','List multiples of only the larger given number.','只列較大數的倍數即可。'],
lcmhcf4a:['The L.C.M. is the least positive common multiple; the H.C.F. is the greatest common factor.','最小公倍數是最小的正公倍數，最大公因數是最大的公因數。','L.C.M. and H.C.F. always equal the product of the numbers.','最小公倍數和最大公因數永遠都等於兩數的積。'],
multiples4a:['Multiply by 1, 2, 3 and so on; this question asks for positive multiples.','依次乘1、2、3等，本題只問正倍數。','Start this positive-multiple list at zero.','這個正倍數列表要從零開始。'],
allfactors4a:['Use factor pairs and include 1 and the number itself; when both factors in a pair are equal, list that factor once.','用因數對，包括1及本數；若一對因數相同，該因數只列一次。','Every factor must be smaller than the number itself.','每個因數都必須小於本數。'],
factorrelation4a:['An exact multiplication sentence shows that each factor divides the product, and the product is a multiple of each factor.','整數乘法算式顯示每個因數都能整除積，而積是每個因數的倍數。','Factor and multiple can always be interchanged in the same sentence.','同一句中的因數和倍數永遠可以互換。'],
primeclass4a:['A prime has exactly two positive factors; 1 is neither prime nor composite.','質數恰有兩個正因數，1既非質數也非合成數。','Every odd number is prime.','每個單數都是質數。'],
dividecolumns4a:['Divisor × quotient + remainder must recover the dividend; remainder is smaller than divisor.','除數×商＋餘數須回到被除數，餘數小於除數。','The remainder may equal the divisor.','餘數可以等於除數。'],
divisibility4a:['Divisible means a whole-number quotient with zero remainder, including zero divided by a nonzero divisor.','整除指商是整數而餘數為零，包括零除以非零除數。','Zero can never be divisible by a positive whole number.','零永遠不能被正整數整除。'],
divisionstory4a:['Interpret the quotient and remainder in the situation; decide whether leftovers require another container.','按情境解釋商和餘數，判斷餘下是否需多一個容器。','Always add one to every quotient, even when the remainder is zero.','即使餘數是零也永遠把商加一。'],
multproduct4a:['The tens partial product counts tens, so retain its place value when combining partial products.','十位部分積以十為單位，合併部分積時保留位值。','Treat the tens digit as if it were a ones digit.','把十位數字當成個位數字。'],
multstrategy4a:['Keep every factor once; reorder and group convenient factors without changing the product.','每個因數用一次，調次序並組合方便的因數而不改積。','Omit the inconvenient factor after making a round number.','算得整十整百後可省略不方便的因數。'],
multstory4a:['Equal groups require group count × amount per group, with the answer in the requested unit.','相同組用組數×每組數量，答案使用指定單位。','Add the group count to the amount per group.','把組數加每組數量。'],
bar4a:['Read the stated scale before reading a bar endpoint.','讀棒末端前先看指定刻度。','Every grid step represents one pupil.','每格代表一人。'],
per1:['A rectangle has two lengths and two widths; add all four sides.','長方形有兩條長及兩條闊，四邊都要相加。','Length × width gives the perimeter.','長×闊就是周界。'],
permissing4a:['Half the perimeter is one length plus one width; subtract the known side.','周界的一半是長加闊，再減已知邊。','Subtract the known side directly from the full perimeter.','把已知邊直接從整個周界減去。'],
factor1:['Test every listed number for exact division, including both selected and rejected candidates.','每個選項都要測試能否整除，包括選取及排除的數。','Select only the first factor you notice.','只選首先看見的一個因數。'],
factorpair4a:['The whole-number partner must complete a product equal to the target.','整數伙伴須使乘積等於目標數。','Use subtraction to find the other factor.','用減法求另一因數。']};
const fallback={per1:['Add the two lengths and two widths.','把兩條長及兩條闊相加。'],factor1:['Divide the target by each candidate; a factor leaves no remainder.','以每個選項除目標數，因數須沒有餘數。'],factorpair4a:['Use the related division to find the missing partner.','用相關除法找欠缺的伙伴。'],bar4a:['Read the value of one grid interval first.','先讀每格代表的數量。']};
function numericExtras(id,q){const out=[],add=(en,zh,v)=>out.push(N([en,zh],v));
 if(id==='bar4a'||id==='barcompare4a'){const f=q.figure;add('Total pupils across all categories','所有類別的總人數',f.steps.reduce((s,n)=>s+n*f.scale,0));}
 if(id==='barapprox4a'){const m=q.bar4D1;add('Distance from the exact count to your rounded count','確切人數與近似人數相差',Math.abs(m.n-Number(q.answer[0])));}
 if(id==='barscale4a')add('Highest count that this chosen scale can display','所選刻度可顯示的最高數量',q.bar4D1.intervals*Number(q.answer[0]));
 if(id==='dissectproperties4a'||id==='formpolygons4a')add('Number of separate pieces shown','圖示分塊數目',q.figure.pieces.length);
 if(id==='multproduct4a'||id==='multstory4a'){const m=q.multiplication4N1,tens=Math.floor(m.b/10)*10;add('Partial product: '+m.a+' × '+tens,'部分積：'+m.a+' × '+tens,m.a*tens);}
 if(id==='multstrategy4a'){const m=q.multiplication4N1;add('Product of all three factors','三個因數的積',m.factors.reduce((a,b)=>a*b,1));}
 if(id==='dividecolumns4a'||id==='divisionstory4a'){const m=q.division4N2;add('Amount in complete groups before any leftover','未計餘下前完整組內的數量',m.n-m.n%m.d);}
 if(id==='divisibility4a'){const m=q.division4N2;add('Remainder when divided by the stated divisor','除以指定除數的餘數',m.n%m.d);}
 if(id==='multiples4a')add('Fourth positive multiple','第四個正倍數',q.factors4N3.n*4);
 if(id==='allfactors4a'||id==='primeclass4a'){const n=q.factors4N3.n;add('Number of positive factors','正因數個數',Array.from({length:n},(_,i)=>i+1).filter(x=>n%x===0).length);}
 if(id==='factorrelation4a'){const m=q.factors4N3;add('Whole-number partner: given factor × partner = target','整數伙伴：已知因數×伙伴＝目標數',m.n/m.a);}
 if(id==='commonmultiples4a')add('Fourth positive common multiple','第四個正公倍數',Number(q.answer[0])*4);
 if(id==='commonfactors4a')add('Number of common factors','公因數個數',q.answer.length);
 if(id==='lcmhcf4a'){const m=q.common4N4;add('How many copies of the FIRST number make the L.C.M.?','第一個數乘多少會得最小公倍數？',Number(q.answer[0])/m.a);}
 if(id==='permissing4a')add('Half the perimeter (cm)','周界的一半（cm）',q.missingSide.perimeter/2);
 if(id==='factorpair4a')add('Target divided by the missing partner','目標數除以欠缺的伙伴',q.factorPair.factor);
 return out;
}
for(const [skill,s]of Object.entries(source.skills))for(const level of Object.keys(levels))for(const [i,seed]of source.seeds.filter(x=>x.skill===skill).entries()){
 const q=seed.q,reason=reasons[skill];if(!reason)throw Error('Missing progression '+skill);const h=q.practiceHint||fallback[skill]||reason.slice(0,2);
 const fields=q.multi?q.choices.map(k=>C([['Yes','是'],['No','否']],q.answer.includes(k)?0:1,i,['Is '+k+' a factor?',''+k+'是因數嗎？'])):q.choices?[C(q.choices.map(k=>q.choiceLabels?.[k]||[k,k]),q.choices.indexOf(q.answer[0]),i,['Answer','答案'])]:q.answer.map((n,j)=>({...N(q.fields?.[j]?.every(Boolean)?q.fields[j]:['Answer','答案'],n),fractionSpec:q.fraction4N6Answer||null,decimalSpec:q.decimal4N7?.[j]||null}));
 const baseFields=fields.length,prompt=q.prompt.slice(),why=q.why?.slice()||h.slice();
 if(level==='easy'){prompt[0]+=' Guided step: '+h[0];prompt[1]+=' 引導：'+h[1];}
 if(level==='difficult'){prompt[0]+=' Complete the answer and the extra checks below.';prompt[1]+=' 完成答案及下方的額外核對。';fields.push(...numericExtras(skill,q),C([reason.slice(0,2),reason.slice(2,4)],0,i));why[0]+=' '+reason[0];why[1]+=' '+reason[1];}
 questions.push({id:`p4s-${skill}-${level}-${i+1}`,skill,unit:s.unit,level,prompt,fields,baseFields,why,guide:h,visual:{type:'frozen',pictures:seed.pictures},meta:{coreId:skill+'-'+seed.index,source:q,adaptation:seed.adaptation}});
}
const norm=s=>String(s).normalize('NFKC').trim(),num=s=>/^\+?\d+(?:\.0+)?$/.test(norm(s))?Number(norm(s)):NaN;
const matches=(f,v)=>f.options?norm(v)===f.answer:f.fractionSpec?graders.scoreFraction4N6(String(v),f.fractionSpec).correct:f.decimalSpec?graders.scoreDecimal4N7(String(v),f.decimalSpec).correct:Number.isFinite(num(v))&&num(v)===+f.answer;
const assess=(q,v)=>q.fields.map((f,i)=>matches(f,v[i])),pick=(skill,level,set)=>questions.filter(q=>q.skill===skill&&q.level===level).filter((_,i)=>set==='all'||i%4===+set);
root.P4Skills={version:1,skills:source.skills,units:source.units,levels,questions,pick,matches,assess,reasons};if(typeof module!=='undefined')module.exports=root.P4Skills;
})(typeof globalThis!=='undefined'?globalThis:this);
