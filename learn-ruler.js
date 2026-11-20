/* Original P1 1M3 examples. Screen scales illustrate readings; they are not physical rulers. */
((root)=>{'use strict';
const pair=(en,zh)=>[en,zh],pic=(values,extra={})=>({kind:'ruler',mode:'scale',values,...extra}),ref=(unit,repeats,extra={})=>({kind:'ruler',mode:'reference',unit,repeats,...extra}),item=(id,lesson,en,zh,answer,whyEn,whyZh,visual)=>({id,lesson,prompt:pair(en,zh),answer,why:pair(whyEn,whyZh),visual});
const lessons=[
 {id:'readcm',title:pair('Read centimetres','讀取厘米'),goal:pair('Start at zero and count centimetre spaces.','由零開始，數厘米的間隔。'),steps:[
  {title:pair('One centimetre','一厘米'),text:pair('The space from 0 to 1 is one centimetre, written 1 cm. Equal centimetre spaces let people compare measurements. Use a real ruler to feel this size.','0至1的間隔是一厘米，寫作1 cm。相同的厘米單位讓大家比較量度結果。用真正的尺認識這個長度。'),visual:pic([1])},
  {title:pair('Use the zero mark','對準零刻度'),text:pair('Place the left end at 0, not at the ruler’s edge. The other end meets 4, so the strip is 4 cm long.','把左端對準0，不是尺的邊緣。另一端對着4，所以紙條長4厘米。'),visual:pic([4])},
  {title:pair('Count the spaces','數間隔'),text:pair('From 0 to 3 there are three spaces, but four marks. Measure spaces, not marks: this strip is 3 cm long.','0至3有三個間隔，卻有四條刻度線。量長度要數間隔，不是數刻度線。紙條長3厘米。'),visual:pic([3])}
 ]},
 {id:'comparecm',title:pair('Compare in centimetres','用厘米比較'),goal:pair('Read the same unit to compare lengths and straight distances.','讀取相同單位，比較長度及直線距離。'),steps:[
  {title:pair('Read both lengths','讀出兩個長度'),text:pair('Strip 1 is 4 cm long. Strip 2 is 7 cm long. Both use centimetres, so strip 2 is longer.','紙條1長4厘米，紙條2長7厘米。兩者都用厘米，所以紙條2較長。'),visual:pic([4,7])},
  {title:pair('Measure straight','量直線距離'),text:pair('Start at S and measure straight to each point. Point 1 is 8 cm away; point 2 is 5 cm away. Point 2 is nearer.','由S起，沿直線量至各點。點1距離8厘米，點2距離5厘米，所以點2較近。'),visual:pic([8,5],{gap:true})},
  {title:pair('Choose a useful tool','選合適的工具'),text:pair('For a 40 cm straight gap, a 60 cm tape can cover it in one placement. A 15 cm ruler would need moving. Keep the tool straight.','量40厘米的直線距離，用60厘米捲尺可一次量到；15厘米直尺需要移動。量度時把工具放直。'),visual:{kind:'ruler',mode:'tools'}}
 ]},
 {id:'estimatecm',title:pair('Estimate, then check','先估計，再核對'),goal:pair('Use a measured reference, estimate first, then measure.','用量過的參考長度，先估計，再量度。'),steps:[
  {title:pair('Know your reference','認識參考長度'),text:pair('First measure your own thumb width or hand span. In this example, a pupil’s hand span is about 10 cm. Yours may be different.','先量自己的拇指闊度或手掌跨度。例子中，一位學生的手掌跨度約10厘米。你的可能不同。'),visual:ref(10,1)},
  {title:pair('Estimate first','先作估計'),text:pair('The target looks about three reference lengths long. With a 2 cm reference, think 2 + 2 + 2: about 6 cm. This is an estimate.','目標看來約等於三個參考長度。每個參考長2厘米，想想2 + 2 + 2，估計約6厘米。'),visual:ref(2,3,{offset:.15})},
  {title:pair('Measure to check','用尺核對'),text:pair('Record your estimate before using the ruler. Then measure and compare. Keep your hand position consistent; do not assume another person has the same span.','用尺前先記下估計，再量度比較。手掌姿勢要一致，不要假定別人的跨度和自己相同。'),visual:ref(5,2,{offset:-.15})}
 ]}
];
const lengths=[4,7,1,6,9,10,3,8,5,2,1,6],pairs=[[4,7],[8,5],[6,6],[3,8],[9,4],[5,5],[8,3],[4,9],[7,7],[2,8],[9,3],[5,5]],refs=[2,5,10,1,2,5,10,2,1,5,2,10],repeats=[3,2,3,4,4,3,2,5,6,4,2,4];
function question(lesson,index,seed=0){const k=(index+seed)%12;
 if(lesson==='readcm'){const n=lengths[k];return item('readcm-'+k,lesson,'The strip starts at 0. How long is it in cm?','紙條由0開始，長多少厘米？',n,`There are ${n} centimetre spaces from zero to the endpoint. The length is ${n} cm.`,`由0至終點共有${n}個厘米間隔，長度是${n}厘米。`,pic([n]));}
 if(lesson==='comparecm'){const [a,b]=pairs[k],near=k%2===1,answer=a===b?0:(near?a<b:a>b)?1:2;return item('comparecm-'+k,lesson,`Which ${near?'point is nearer to S':'strip is longer'}? Write 1 or 2; write 0 if equal.`,`哪${near?'一點距離S較近':'條紙條較長'}？寫1或2，相同寫0。`,answer,`Read the centimetre scales: 1 is ${a} cm; 2 is ${b} cm. ${a===b?'They are equal.':`Choose ${answer}.`}`,`讀厘米刻度：1是${a}厘米，2是${b}厘米。${a===b?'兩者相同。':`選${answer}。`}`,pic([a,b],{gap:near}));}
 const u=refs[k],r=repeats[k],a=u*r,other=a*2,opts=k%2?[other,a]:[a,other];return item('estimatecm-'+k,'estimatecm',`The reference was measured as ${u} cm. Choose the better estimate: ${opts[0]} or ${opts[1]} cm.`,`參考長度已量得${u}厘米。哪個估計較合理：${opts[0]}還是${opts[1]}厘米？`,a,`The target looks about ${r} references long. ${Array(r).fill(u).join(' + ')} gives about ${a} cm. Measure afterwards to check.`,`目標看來約等於${r}個參考長度。${Array(r).fill(u).join(' + ')}，估計約${a}厘米，之後再量度核對。`,ref(u,r,{offset:k%2?.15:-.15}));
}
const tasks={
 readcm:{normal:[
  ['Read the endpoint. How long is the strip in cm?','讀取終點刻度，紙條長多少厘米？',8,'The strip starts at 0 and ends at 8: 8 cm.','紙條由0至8，長8厘米。',pic([8])],
  ['Do not count the 0 mark as one centimetre. How long is the strip? Write the number of cm.','不要把0刻度當作一厘米。紙條長多少厘米？',10,'The ten spaces from 0 to 10 give 10 cm, not eleven.','0至10共有十個間隔，是10厘米，不是11厘米。',pic([10])],
  ['How far is the point from S in cm? Read the straight distance.','這點距離S多少厘米？讀取直線距離。',5,'S is at 0 and the point at 5. The straight distance is 5 cm.','S對準0，另一點對準5，直線距離是5厘米。',pic([5],{gap:true})]
 ],difficult:[
  ['Which setup starts the strip at the ZERO mark? Write 1 or 2.','哪個擺法把紙條起點對準零刻度？寫1或2。',2,'Setup 1 uses the edge before zero. Setup 2 correctly starts at the zero mark.','擺法1由尺邊開始，不是零刻度；擺法2正確對準零刻度。',pic([5,5],{starts:[-1,0]})],
  ['A pupil counts eight marks from 0 to 7 and says 8 cm. What is the correct length in cm?','有學生數0至7的八條刻度線，說長8厘米。正確長度是多少厘米？',7,'There are seven spaces between eight marks. The strip is 7 cm long.','八條刻度線之間有七個間隔，紙條長7厘米。',pic([7])],
  ['This drawing is enlarged. Read its scale, not its size on your screen. How long is the strip in cm?','圖放大了。讀刻度，不是量螢幕上的大小。紙條長多少厘米？',6,'The labelled scale still runs from 0 to 6 at the strip ends: 6 cm.','紙條兩端仍對着0和6，表示長6厘米。',pic([6],{zoom:true})]
 ]},
 comparecm:{normal:[
  ['Which strip is shorter? Write 1 or 2.','哪條紙條較短？寫1或2。',1,'4 cm is shorter than 9 cm. Choose strip 1.','4厘米比9厘米短，選紙條1。',pic([4,9])],
  ['Which point is farther from S? Write 1 or 2.','哪一點距離S較遠？寫1或2。',2,'The distances are 3 cm and 8 cm. Point 2 is farther.','兩個距離是3厘米和8厘米，點2較遠。',pic([3,8],{gap:true})],
  ['Write 0 if the lengths are equal; otherwise write the longer strip number.','長度相同寫0，否則寫較長紙條的號碼。',0,'Both readings are 6 cm, so the strips are equally long.','兩者都讀6厘米，表示一樣長。',pic([6,6])]
 ],difficult:[
  ['For a 40 cm straight gap, which tool covers it in ONE placement? Write 1 or 2.','量40厘米直線距離，哪件工具可一次量到？寫1或2。',2,'Tool 2 is a 60 cm tape. Tool 1 is a 15 cm ruler and needs moving.','工具2是60厘米捲尺，可一次量到；工具1是15厘米尺，需要移動。',{kind:'ruler',mode:'tools'}],
  ['The drawings have different zoom sizes. Read the cm labels. Which strip is longer? Write 1 or 2.','兩幅圖的放大比例不同。讀厘米刻度，哪條紙條較長？寫1或2。',2,'Strip 1 reads 4 cm; strip 2 reads 7 cm. Screen size does not change those readings.','紙條1讀4厘米，紙條2讀7厘米。螢幕上的大小不改變讀數。',pic([4,7],{differentZoom:true})],
  ['A pupil says point 1 is nearer. Check the cm scales. Which point is really nearer to S? Write 1 or 2.','有學生說點1較近。檢查厘米刻度，哪一點真正距離S較近？寫1或2。',2,'The straight distances are 9 cm and 5 cm. Point 2 is nearer.','直線距離分別是9厘米和5厘米，點2較近。',pic([9,5],{gap:true})]
 ]},
 estimatecm:{normal:[
  ['A measured reference is 5 cm. Which is a better estimate for the target: 15 or 45 cm?','參考長度量得5厘米。目標估計15厘米還是45厘米較合理？',15,'About three reference lengths: 5 + 5 + 5 gives about 15 cm. Check by measuring afterwards.','約三個參考長度：5 + 5 + 5，估計約15厘米，之後再量度核對。',ref(5,3,{offset:.15})],
  ['This pupil measured their hand span as about 10 cm. Choose a reasonable estimate: 20 or 60 cm.','這位學生量得自己的手掌跨度約10厘米。合理估計是20還是60厘米？',20,'The target looks about two spans: about 20 cm. Other pupils may have different spans.','目標看來約兩個跨度，估計約20厘米。其他人的跨度可能不同。',ref(10,2,{offset:-.15})],
  ['Use the measured 2 cm reference. Is 8 or 24 cm the better estimate?','使用已量得的2厘米參考長度。估計8還是24厘米較合理？',8,'About four reference lengths: 2 + 2 + 2 + 2 gives about 8 cm.','約四個參考長度：2 + 2 + 2 + 2，估計約8厘米。',ref(2,4,{offset:.15})]
 ],difficult:[
  ['Before using the ruler on the target, choose: 1 record an estimate; 2 copy a measured answer. Write 1 or 2.','用尺量目標前，應先：1記下估計；2抄下量度答案。寫1或2。',1,'Record an estimate first. Then measure and compare; a copied measurement is not a prior estimate.','先記下估計，再量度比較。抄量度答案不算事前估計。',ref(5,2,{offset:.15})],
  ['A 2 cm reference fits about three times. A pupil says about 18 cm. Choose a better estimate: 6 or 18 cm.','2厘米參考長度看來約放三次。有學生估計約18厘米。較合理是6還是18厘米？',6,'Think 2 + 2 + 2: about 6 cm. An estimate uses the measured reference; then check it.','想想2 + 2 + 2，估計約6厘米。用量過的參考長度估計，再核對。',ref(2,3,{offset:-.15})],
  ['Which reference should YOU use? 1 your own measured span; 2 assume everyone has a 10 cm span. Write 1 or 2.','你應用哪個參考？1自己量過的跨度；2假定人人跨度都是10厘米。寫1或2。',1,'Measure your own reference and keep its position consistent. Different hands can have different spans.','先量自己的參考長度，保持姿勢一致。每個人的手掌跨度可能不同。',ref(10,2,{offset:.15})]
 ]}
};
function practice(lesson,level){return ['normal','difficult'].includes(level)?tasks[lesson][level].map((x,i)=>item(lesson+'-'+level+'-'+i,lesson,...x)):[2,3,4].map(i=>question(lesson,i));}
root.MathQuizLearnRuler={lessons,question,practice};if(typeof module!=='undefined')module.exports=root.MathQuizLearnRuler;
})(typeof window!=='undefined'?window:globalThis);
