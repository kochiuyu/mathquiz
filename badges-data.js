/* Guided-lesson practice souvenirs. No names, scores as grades, or network. */
((root)=>{
'use strict';
const pair=(en,zh)=>[en,zh];
const CHECKS={
  '3:numbers':{prefix:'p3-check-',n:10},
  '3:multiply':{prefix:'p3-mcheck-',n:12},
  '3:length':{prefix:'p3-lcheck-',n:10},
  '3:division':{prefix:'p3-dcheck-',n:12},
  '3:fractions':{prefix:'p3-fcheck-',n:10},
  '3:fractionops':{prefix:'p3-fopscheck-',n:10},
  '3:quads':{prefix:'p3-qcheck-',n:12},
  '3:triangles':{prefix:'p3-tcheck-',n:10},
  '3:capacity':{prefix:'p3-ccheck-',n:12},
  '3:weight':{prefix:'p3-wcheck-',n:12},
  '3:time':{prefix:'p3-timecheck-',n:12},
  '3:clock24':{prefix:'p3-clock24check-',n:10},
  '3:bars':{prefix:'p3-barscheck-',n:12},
  '3:mixed':{prefix:'p3-mixedcheck-',n:12},
  '4:multiply':{prefix:'p4-mcheck-',n:12},
  '4:division':{prefix:'p4-dcheck-',n:16},
  '4:factors':{prefix:'p4-fcheck-',n:12},
  '4:common':{prefix:'p4-ccheck-',n:12},
  '4:fractions':{prefix:'p4-frcheck-',n:12},
  '4:fractionops':{prefix:'p4-focheck-',n:12},
  '4:perimeter':{prefix:'p4-pecheck-',n:12},
  '4:area':{prefix:'p4-archeck-',n:16}
};
const P2=[{topic:'numbers',key:'mathquiz-p2-learning-v1',global:'MathQuizP2Data'},{topic:'arithmetic',key:'mathquiz-p2-arithmetic-v1',global:'MathQuizP2Arithmetic'},{topic:'faces',key:'mathquiz-p2-faces-v1',global:'MathQuizP2Faces'},{topic:'multiply',key:'mathquiz-p2-multiply-v1',global:'MathQuizP2Multiply'},{topic:'facts',key:'mathquiz-p2-facts-v1',global:'MathQuizP2Facts'},{topic:'metres',key:'mathquiz-p2-metres-v1',global:'MathQuizP2Metres'},{topic:'pictograms',key:'mathquiz-p2-pictograms-v1',global:'MathQuizP2Pictograms'},{topic:'thousands',key:'mathquiz-p2-thousands-v1',global:'MathQuizP2Thousands'},{topic:'money',key:'mathquiz-p2-money-v1',global:'MathQuizP2Money'},{topic:'change',key:'mathquiz-p2-change-v1',global:'MathQuizP2Change'},{topic:'division',key:'mathquiz-p2-division-v1',global:'MathQuizP2Division'},{topic:'angles',key:'mathquiz-p2-angles-v1',global:'MathQuizP2Angles'},{topic:'quads',key:'mathquiz-p2-quads-v1',global:'MathQuizP2Quads'},{topic:'minutes',key:'mathquiz-p2-minutes-v1',global:'MathQuizP2Minutes'},{topic:'calendar',key:'mathquiz-p2-calendar-v1',global:'MathQuizP2Calendar'},{topic:'directions',key:'mathquiz-p2-directions-v1',global:'MathQuizP2Directions'}];
const P3GLOBAL={numbers:'MathQuizP3Data',multiply:'MathQuizP3MultiplyData',length:'MathQuizP3LengthData',division:'MathQuizP3DivisionData',fractions:'MathQuizP3FractionsData',fractionops:'MathQuizP3FractionopsData',quads:'MathQuizP3QuadsData',triangles:'MathQuizP3TrianglesData',capacity:'MathQuizP3CapacityData',weight:'MathQuizP3WeightData',time:'MathQuizP3TimeData',clock24:'MathQuizP3Clock24Data',bars:'MathQuizP3BarsData',mixed:'MathQuizP3MixedData'};
const P4GLOBAL={multiply:'MathQuizP4Data',division:'MathQuizP4DivisionData',factors:'MathQuizP4FactorsData',common:'MathQuizP4CommonData',fractions:'MathQuizP4FractionsData',fractionops:'MathQuizP4FractionOpsData',perimeter:'MathQuizP4PerimeterData',area:'MathQuizP4AreaData'};
const GROUPS={
  'addition-explorer':[[1,'first'],[1,'calculate']],
  'subtraction-explorer':[[1,'subtract']],
  'numbers-to-100':[[1,'hundred']],
  'shape-explorer':[[1,'solids'],[1,'flat'],[1,'positions']],
  'everyday-maths':[[1,'measure'],[1,'ruler'],[1,'money'],[1,'time']],
  'p2-multiplier':[[2,'multiply'],[2,'facts']],
  'p3-fractions':[[3,'fractions'],[3,'fractionops']],
  'p4-factors':[[4,'factors'],[4,'common']]
};
const LINKS={
  'first-steps':['learn.html',{path:'first',lesson:'count',stage:'practice',level:'easy'}],
  'try-together':['learn.html',{path:'first',lesson:'count',stage:'together'}],
  'lesson-complete':['learn.html',{path:'first',lesson:'count',stage:'practice',level:'easy'}],
  'ten-lessons':['learn.html',{}],
  'first-check':['learn.html',{path:'first',lesson:'add',stage:'quiz'}],
  'careful-check':['learn.html',{path:'first',lesson:'add',stage:'quiz'}],
  'solid-check':['learn.html',{path:'first',lesson:'add',stage:'quiz'}],
  'inquiry-starter':['learn.html',{path:'first',lesson:'count',stage:'learn',investigate:'1'}],
  'addition-explorer':['learn.html',{path:'first'}],
  'subtraction-explorer':['learn.html',{path:'subtract'}],
  'numbers-to-100':['learn.html',{path:'hundred'}],
  'shape-explorer':['learn.html',{path:'solids'}],
  'everyday-maths':['learn.html',{path:'measure'}],
  'p2-multiplier':['p2-learn.html',{path:'multiply',stage:'map'}],
  'p3-fractions':['p3-learn.html',{path:'fractions',stage:'map'}],
  'p4-factors':['p4-learn.html',{path:'factors',stage:'map'}]
};
function icon(kind){
  const pen='fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
  const shapes={
    'first-steps':`<circle cx="20" cy="44" r="4" ${pen}/><circle cx="32" cy="32" r="4" ${pen}/><circle cx="44" cy="20" r="4" ${pen}/><path ${pen} d="M23 41l6-6M35 29l6-6"/>`,
    'try-together':`<circle cx="24" cy="28" r="7" ${pen}/><circle cx="40" cy="28" r="7" ${pen}/><path ${pen} d="M30 28h4"/>`,
    'lesson-complete':`<rect x="20" y="16" width="24" height="32" rx="3" ${pen}/><path ${pen} d="M26 26h12M26 32h12M26 38h8"/>`,
    'ten-lessons':`<g fill="currentColor">${[0,1,2,3,4].map(r=>[0,1].map(c=>`<circle cx="${22+c*20}" cy="${20+r*7}" r="2.2"/>`).join('')).join('')}</g>`,
    'first-check':`<rect x="18" y="16" width="28" height="32" rx="3" ${pen}/><path ${pen} d="M24 28l4 4 8-9"/>`,
    'careful-check':`<circle cx="30" cy="30" r="10" ${pen}/><path ${pen} d="M37 37l8 8"/><path ${pen} d="M26 30l3 3 6-7"/>`,
    'solid-check':`<rect x="18" y="16" width="28" height="32" rx="4" ${pen}/><path ${pen} d="M24 33l5 5 11-12"/>`,
    'inquiry-starter':`<path ${pen} d="M24 40h16"/><path ${pen} d="M32 18a8 8 0 0 1 4 14c-2 2-4 3-4 6"/><circle cx="32" cy="44" r="1.4" fill="currentColor" stroke="none"/>`,
    'addition-explorer':`<circle cx="22" cy="38" r="4" ${pen}/><circle cx="32" cy="38" r="4" ${pen}/><circle cx="42" cy="38" r="4" ${pen}/><path ${pen} d="M32 16v12M26 22h12"/>`,
    'subtraction-explorer':`<circle cx="22" cy="40" r="4" ${pen}/><circle cx="34" cy="40" r="4" ${pen}/><path ${pen} d="M24 22h16"/>`,
    'numbers-to-100':`<rect x="16" y="20" width="32" height="24" rx="3" ${pen}/><path ${pen} d="M24 28h4l-4 10h6M36 28v10M40 28v10"/>`,
    'shape-explorer':`<path ${pen} d="M32 16l14 8v16L32 48 18 40V24z"/><path ${pen} d="M18 24l14 8 14-8M32 32v16"/>`,
    'everyday-maths':`<circle cx="26" cy="34" r="10" ${pen}/><path ${pen} d="M26 28v6l4 3"/><circle cx="44" cy="24" r="6" ${pen}/><path ${pen} d="M44 21v3h3"/>`,
    'p2-multiplier':`<rect x="16" y="22" width="14" height="14" rx="2" ${pen}/><rect x="34" y="22" width="14" height="14" rx="2" ${pen}/><path ${pen} d="M20 44h8M36 44h8"/>`,
    'p3-fractions':`<circle cx="32" cy="32" r="14" ${pen}/><path ${pen} d="M32 18v28M32 32l12 7"/>`,
    'p4-factors':`<rect x="18" y="18" width="12" height="12" ${pen}/><rect x="34" y="18" width="12" height="12" ${pen}/><rect x="26" y="34" width="12" height="12" ${pen}/>`
  };
  return shapes[kind]||shapes['first-steps'];
}
function seal(id,earned){
  return `<svg class="badge-seal${earned?' is-earned':''}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="28" fill="${earned?'currentColor':'none'}" fill-opacity="${earned?'0.12':'0'}" stroke="currentColor" stroke-width="2.5"${earned?'':' stroke-dasharray="5 3.5"'}/>${icon(id)}</svg>`;
}
const badges=[
  {id:'first-steps',name:pair('First steps','第一步'),earned:pair('You finished a practice set.','你完成了一組練習。'),hint:pair('Finish one Easy, Normal or Difficult practice set in a guided lesson.','在引導課堂完成容易、一般或困難練習的其中一組。'),go:pair('Practise','去練習')},
  {id:'try-together',name:pair('We tried it together','一起試過了'),earned:pair('You finished a together stage.','你完成了一起試的階段。'),hint:pair('Finish a together stage in a guided lesson.','完成引導課堂裡「一起試」的階段。'),go:pair('Try together','一起試')},
  {id:'lesson-complete',name:pair('One lesson practised','完成一課練習'),earned:pair('One lesson has Easy, Normal and Difficult practice.','有一課的容易、一般和困難練習都完成了。'),hint:pair('Finish all three practice levels in one guided lesson.','完成同一課的三個練習級別。'),go:pair('Open lesson','前往課堂')},
  {id:'ten-lessons',name:pair('Ten lessons practised','完成十課練習'),earned:pair('Ten different lessons have all three practice levels.','十課不同課堂的三個練習級別都完成了。'),hint:pair('Practise ten different guided lessons at all three levels.','完成十課不同引導課堂的三個練習級別。'),go:pair('Choose lesson','選一課')},
  {id:'first-check',name:pair('I checked my understanding','我檢查了學習'),earned:pair('You submitted a topic check.','你交了一次主題小測。'),hint:pair('Submit one guided topic check. The screen result is not a certificate.','完成並提交一次引導主題小測。畫面結果不是證書。'),go:pair('Topic check','去做小測')},
  {id:'careful-check',name:pair('Careful check','細心核對'),earned:pair('Every screen answer on a topic check was correct.','一次主題小測的畫面答案全部正確。'),hint:pair('Get every answer right on one guided topic check.','在一次引導主題小測裡，畫面答案全部正確。'),go:pair('Topic check','去做小測')},
  {id:'solid-check',name:pair('Solid check','穩妥的小測'),earned:pair('A topic check reached the continue level.','有一次主題小測達到可繼續的程度。'),hint:pair('On a topic check, miss at most one. For P1, that is at least 5 out of 6.','主題小測最多錯一題。小一是六題裡至少五題。'),go:pair('Topic check','去做小測')},
  {id:'inquiry-starter',name:pair('Inquiry starter','探究起步'),earned:pair('You saved an inquiry note.','你儲存了探究筆記。'),hint:pair('Save an inquiry prediction, something you noticed, or mark that you tried.','儲存探究猜想、觀察，或記下你試過了。'),go:pair('Inquiry','去做探究')},
  {id:'addition-explorer',name:pair('Addition explorer','加法探索者'),earned:pair('You practised every lesson in the P1 addition pathways.','你完成了小一加法路徑的每一課練習。'),hint:pair('Practise every lesson in “Numbers and addition to 20” and “Add and subtract below 100”.','完成「二十以內的數與加法」和「一百以內的加減法」的每一課練習。'),go:pair('Addition','加法課')},
  {id:'subtraction-explorer',name:pair('Taking-away explorer','減法探索者'),earned:pair('You practised every taking-away lesson.','你完成了減法每一課的練習。'),hint:pair('Practise every lesson in “Number bonds and taking away”.','完成「數的組合與減法」的每一課練習。'),go:pair('Taking away','減法課')},
  {id:'numbers-to-100',name:pair('Numbers to 100','百以內的數'),earned:pair('You practised every numbers-to-100 lesson.','你完成了百以內的數的每一課練習。'),hint:pair('Practise all three lessons in “Numbers to 100”.','完成「一百以內的數」的三課練習。'),go:pair('To 100','百以內')},
  {id:'shape-explorer',name:pair('Shape explorer','圖形探索者'),earned:pair('You practised the P1 shape and position lessons.','你完成了小一圖形和位置的練習。'),hint:pair('Practise every lesson in 3-D shapes, 2-D shapes and positions.','完成立體、平面圖形和位置的每一課練習。'),go:pair('Shapes','圖形課')},
  {id:'everyday-maths',name:pair('Everyday maths','生活中的數學'),earned:pair('You practised length, rulers, money and time.','你完成了長度、厘米尺、貨幣和時間的練習。'),hint:pair('Practise every lesson in those four P1 topics.','完成這四個小一課題的每一課練習。'),go:pair('Measuring','量度課')},
  {id:'p2-multiplier',name:pair('Equal groups and facts','等量分組與乘法'),earned:pair('You practised both multiplication topics and submitted both checks.','你完成了兩個乘法課題的練習，並提交了兩份小測。'),hint:pair('Finish all three practice levels in P2 multiplication and facts, and submit both topic checks.','完成小二乘法和建立算式的三個練習級別，並提交兩份主題小測。'),go:pair('P2 multiply','小二乘法')},
  {id:'p3-fractions',name:pair('Fraction foundations','分數基礎'),earned:pair('You practised both fraction topics and submitted both checks.','你完成了兩個分數課題的練習，並提交了兩份小測。'),hint:pair('Finish all three practice levels in P3 fraction foundations and fraction operations, and submit both checks.','完成小三分數基礎和分數運算的三個練習級別，並提交兩份小測。'),go:pair('P3 fractions','小三分數')},
  {id:'p4-factors',name:pair('Multiples and factors','倍數與因數'),earned:pair('You practised both factor topics and submitted both checks.','你完成了兩個因數課題的練習，並提交了兩份小測。'),hint:pair('Finish all three practice levels in P4 factors and common factors, and submit both checks.','完成小四因數與倍數、公因數與公倍數的三個練習級別，並提交兩份小測。'),go:pair('P4 factors','小四因數')}
];
const ids=badges.map(b=>b.id);
function catalog(){return root.MathQuizLearnerCatalog||null;}
function topics(year){const C=catalog();return C&&C[String(year)]?C[String(year)]:[];}
function lessonsIn(pairs){const out=[];for(const [year,topic] of pairs){const t=topics(year).find(x=>x.id===topic);if(!t)return null;for(const lesson of t.lessons)out.push({year,topic,id:lesson.id});}return out;}
function practised(view,pairs){const need=lessonsIn(pairs);if(!need||!need.length)return false;return need.every(n=>view.lessons.some(l=>l.year===n.year&&l.id===n.id&&l.practice));}
function checkOf(view,year,topic){return view.checks.find(c=>c.year===year&&c.topic===topic);}
function checksReady(view,pairs){return pairs.every(([year,topic])=>{const c=checkOf(view,year,topic);return c&&c.submitted&&c.full;});}
function levelOn(lesson){return !!(lesson.levels&&(lesson.levels.easy||lesson.levels.normal||lesson.levels.difficult));}
function solid(c){if(!c||!c.scored||!c.full||!c.total)return false;if(c.year===1)return c.total===6&&c.correct>=5;return c.correct>=c.total-1;}
function perfect(c){return !!(c&&c.scored&&c.full&&c.total&&c.correct===c.total);}
function satisfied(view){const v=view||{lessons:[],checks:[],inquiry:false};const lessons=v.lessons||[],checks=v.checks||[];const yes={
  'first-steps':lessons.some(levelOn),
  'try-together':lessons.some(l=>l.together),
  'lesson-complete':lessons.some(l=>l.practice),
  'ten-lessons':new Set(lessons.filter(l=>l.practice).map(l=>l.year+':'+l.id)).size>=10,
  'first-check':checks.some(c=>c.submitted&&c.full),
  'careful-check':checks.some(perfect),
  'solid-check':checks.some(solid),
  'inquiry-starter':v.inquiry===true
};for(const id of Object.keys(GROUPS))yes[id]=id.startsWith('p')?practised(v,GROUPS[id])&&checksReady(v,GROUPS[id]):practised(v,GROUPS[id]);return ids.filter(id=>yes[id]);}
function clip(s){return String(s||'guided').toLowerCase().replace(/[^a-z0-9:_-]/g,'').slice(0,64)||'guided';}
function origin(id,view){const lessons=(view&&view.lessons)||[],checks=(view&&view.checks)||[];
  if(id==='first-steps'){const hit=lessons.find(levelOn);if(!hit)return 'practice';const level=['easy','normal','difficult'].find(k=>hit.levels&&hit.levels[k])||'practice';return clip(`p${hit.year}:${hit.id}:${level}`);}
  if(id==='try-together'){const hit=lessons.find(l=>l.together);return hit?clip(`p${hit.year}:${hit.id}:together`):'together';}
  if(id==='lesson-complete'||id==='ten-lessons'){const hit=lessons.find(l=>l.practice);return hit?clip(`p${hit.year}:${hit.id}:practice`):'practice';}
  if(id==='inquiry-starter')return 'inquiry';
  if(GROUPS[id]){const [year,topic]=GROUPS[id][0];return clip(`p${year}:${topic}`);}
  const hit=checks.find(c=>id==='careful-check'?perfect(c):id==='solid-check'?solid(c):c.submitted&&c.full);return hit?clip(`p${hit.year}:${hit.topic}:check`):'check';}
function counts(view){const out={};for(const year of [1,2,3,4]){const lessons=(view.lessons||[]).filter(l=>l.year===year&&l.practice);const checks=(view.checks||[]).filter(c=>c.year===year&&c.submitted&&c.full);out[year]={lessons:new Set(lessons.map(l=>l.id)).size,checks:checks.length,perfect:checks.filter(perfect).length,unscored:checks.filter(c=>!c.scored).length};}return out;}
function formatDate(iso,lang){const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso||''));if(!m)return String(iso||'');const mo=Number(m[2]),d=Number(m[3]);if(mo<1||mo>12||d<1||d>31)return String(iso);if(lang==='zh')return m[1]+'年'+mo+'月'+d+'日';return d+' '+['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][mo-1]+' '+m[1];}
function href(page,query,ctx){const base={lang:ctx.lang==='zh'?'zh':'en',learner:String(ctx.slot)};if(ctx.test)base.learnTest='1';if(ctx.badgeTest)base.badgeTest='1';if(ctx.blocked)base.badgeStorage='off';return page+'?'+new URLSearchParams(Object.assign(base,query||{})).toString();}
const api={badges,ids,CHECKS,P2,P3GLOBAL,P4GLOBAL,GROUPS,LINKS,seal,satisfied,origin,counts,href,topics,pair,clip,formatDate};
root.MathQuizBadgeData=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
