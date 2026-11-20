/* Suggested connections, not locks or a replacement for saved lesson identities. */
((root)=>{
'use strict';
const groups=[
 {id:'number',title:['Numbers and calculating','數與計算'],intro:['Build counting and parts, then extend to larger numbers.','先建立數數和部分與整體的概念，再學較大的數。'],paths:['first','numberstart','partstart','subtract','hundred','groups','relations','calculate']},
 {id:'shape',title:['Shapes and positions','圖形與位置'],intro:['Handle real objects, explore flat outlines, and describe where things are. You can start here without finishing the number topics.','先接觸實物，再探索平面外形和物件位置。毋須完成所有數的課題才開始。'],paths:['solids','flat','positions']},
 {id:'everyday',title:['Everyday maths','生活中的數學'],intro:['Compare lengths before using a ruler. Choose coins or clocks when ready; they are separate starting points.','先比較長度，再使用尺。準備好時可另選硬幣或時鐘，兩者都是獨立起點。'],paths:['measure','ruler','money','time']}
];
const next={numberstart:'partstart',partstart:'first',first:'subtract',subtract:'hundred',hundred:'groups',groups:'relations',relations:'calculate',measure:'ruler',solids:'flat',flat:'positions'};
const before={numberstart:['count','tens'],partstart:['countsteps','pair20'],first:['split18'],subtract:['count','tens'],hundred:['tens'],groups:['bundles'],relations:['bundles','takeaway'],calculate:['bundles','add','partsback'],measure:['count'],ruler:['equalunits','tens'],money:['bundles','fives'],time:['tens'],solids:[],flat:['solidobjects'],positions:[]};
const bridges={
 first:['After Count carefully and A ten and some ones, follow Counting, places and pairs, then Parts, joining and zero before Put groups together.','完成逐一數清楚和一個十和一些一後，先學數數、次序和配對，再學分合、相加與零，然後把兩組合起來。'],
 flat:['With an adult, hold a box or cup, then trace a flat face or rim. The object is solid; the outline on paper is flat. Touch, trace, then name the shape.','和成人拿起盒子或杯子，再描畫平面或杯口。物件是立體，紙上的外形是平面的。先觸摸、描畫，再說出圖形名稱。'],
 solids:['Start with a real box, can and ball. Touch and turn them before matching their pictures.','先找真正的盒子、罐和球。觸摸及轉動後，再配對圖片。']
};
const packets={numberstart:'p1-early-number-review',partstart:'p1-early-number-review',first:'p1-early-number-review',subtract:'p1-early-number-review',hundred:'p1-number-sense-review',groups:'p1-number-sense-review',relations:'p1-early-number-review',calculate:'p1-addition-subtraction-review'};
const data={groups,next,before,bridges,packets};root.MathQuizLearnMap=data;if(typeof module!=='undefined')module.exports=data;
})(typeof window!=='undefined'?window:globalThis);
