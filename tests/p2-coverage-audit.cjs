/* Source audit, not pupil attainment or browser regression. Run from any directory. */
const fs=require('fs'),path=require('path'),crypto=require('crypto'),assert=require('assert');
const root=path.resolve(__dirname,'..');
// Reviewed objective-to-lesson mapping: array position is the official objective number.
const map={
 '2N1':{file:'learn',topic:'numbers',rows:['hundred sequence','hundred','compare','groups','estimate']},
 '2N2':{file:'arithmetic',topic:'arithmetic',rows:['carry','smartadd','borrow substeps','stories roughcheck']},
 '2N3':{file:'multiply facts',topic:'multiply facts',rows:['equalgroups repeated arrays','firstfacts facts34 facts68 facts79 facttable timesone timeszero','repeated firstfacts factuse','arrays facts34','multstories factuse']},
 '2N4':{file:'thousands',topic:'thousands',rows:['thousand readfour crossfour','thousand','largegroups','comparefour']},
 '2N5':{file:'change',topic:'change',rows:['subhundreds subzeros','mixedsteps','eventstories moneychange estimatechanges']},
 '2N6':{file:'division',topic:'division',rows:['share group remainders','remainders divzeroone','divcheck','divstories']},
 '2M1':{file:'metres',topic:'metres',rows:['onemetre','measuretools lengthdistance metreestimate','metrescm lengthdistance','bodyruler metreestimate']},
 '2M2':{file:'minutes calendar',topic:'minutes calendar',rows:['readminutes digitaltime','oneminute','measureminutes','finishingtime elapsedminutes','dayparts dayboundary','dayparts','dayparts dayboundary','monthlengths','commonleap','eventdays eventdates']},
 '2M3':{file:'money',topic:'money',rows:['notes','prices','countmoney smallexchange largemoney']},
 '2S1':{file:'faces',topic:'faces',rows:['surfaces prismfaces pyramidfaces turnsolids','basenames turnsolids']},
 '2S2':{file:'angles',topic:'angles',rows:['opening','compareangles','rightangles perpendicular','perpendicular linedistance','anglekinds','opening anglekinds']},
 '2S3':{file:'directions',topic:'directions',rows:['cardinal northarrow relativecompass turnwalk','realcompass turnwalk']},
 '2S4':{file:'quads',topic:'quads',rows:['segments','quadsides','square rectangle makequads','drawquads makequads']},
 '2D1':{file:'pictograms',topic:'pictograms',rows:['sortdata chartparts','readrows readcolumns','buildcharts']}
};
const files=[...new Set(Object.values(map).flatMap(m=>m.file.split(' ')))];
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const sig=q=>JSON.stringify(canonical(Object.fromEntries(Object.entries(q).filter(([k])=>k!=='id'))));
const topics=files.map(f=>{const file=`p2-${f}-data.js`,d=require(path.join(root,file)),topic=d.path||'numbers';return {file,topic,d};});
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
let rows=[];for(const[code,m]of Object.entries(map)){m.rows.forEach((ids,i)=>{const lessons=ids.split(' ').map(x=>'p2-'+x).map(id=>{const t=topics.find(t=>m.file.split(' ').includes(t.file.slice(3,-8))&&t.d.lessons.some(l=>l.id===id));assert(t,code+' '+id);const l=t.d.lessons.find(l=>l.id===id);assert(l.teach.length&&l.teach.every(s=>s.text?.length===2&&s.text.every(x=>x.trim())));assert(l.practical?.length===2&&l.practical.every(x=>x.trim()));return {topic:t.topic,id,title:l.title[0],url:`../p2-learn.html?path=${t.topic}&lesson=${id}&stage=learn`};});rows.push({objective:code+'.'+(i+1),lessons,status:'Teaching and practical opportunity present; pupil evidence not observed'});});}
assert.equal(rows.length,59);assert.equal(new Set(rows.map(x=>x.objective)).size,59);
const reuse=topics.map(({file,topic,d})=>{const practice=d.lessons.flatMap(l=>[...l.together,...Object.values(l.practice).flat()]);return {topic,file,checkCount:d.check.length,reused:d.check.flatMap(q=>{const matches=practice.filter(p=>sig(p)===sig(q)).map(p=>p.id);return matches.length?[{check:q.id,practice:matches}]:[];})};});
const totals={topics:topics.length,lessons:topics.reduce((a,t)=>a+t.d.lessons.length,0),practice:topics.reduce((a,t)=>a+t.d.lessons.reduce((b,l)=>b+Object.values(l.practice).flat().length,0),0),guided:topics.reduce((a,t)=>a+t.d.lessons.reduce((b,l)=>b+l.together.length,0),0),checkItems:reuse.reduce((a,t)=>a+t.checkCount,0),exactReusedChecks:reuse.reduce((a,t)=>a+t.reused.length,0)};
assert.deepEqual(totals,{topics:16,lessons:90,practice:810,guided:180,checkItems:178,exactReusedChecks:86});
const inquiry=require(path.join(root,'p2-inquiry-data.js'));assert.equal(Object.keys(inquiry.activities).length,16);
const evidence={date:'2026-11-22',baseline:'b5d8f51cb1b234d21350eb962063bb5e8622c7a1',type:'Source/content review; no fresh full browser regression',totals,inquiryOpportunities:16,objectives:rows,reuseMethod:'Canonical deep equality of every question property except id, within the same topic; includes prompt, answer, hints, options, visuals and metadata. Conservative exact-repeat count, not a measurement of transfer or how many pupils saw an item.',reuse,sources:topics.map(t=>({file:t.file,sha256:sha(t.file)})).concat(['p2-learn.js','p2-inquiry-data.js'].map(file=>({file,sha256:sha(file)}))),limits:['Objective mapping is an authored content judgement, not proof of attainment','No pupil performance or independent translation review','No physical tool, printing or screen-reader validation','Previous 2036-case browser result belongs to inquiry release, not a new run']};
fs.writeFileSync(path.join(root,'planning/p2-coverage-evidence.json'),JSON.stringify(evidence,null,2)+'\n');console.log(JSON.stringify({objectives:rows.length,...totals,inquiry:16}));
