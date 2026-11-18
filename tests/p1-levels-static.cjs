const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const bank=require('../p1-level-data.js');
assert.equal(bank.questions.length,72);assert.equal(new Set(bank.questions.map(q=>q.id)).size,72);
const oracle=q=>{const m=q.meta;switch(q.kind){
 case 'count':return [m.n];case 'onwards':return [m.start+2];case 'compose':case 'join':case 'sentence':return [m.a+m.b];
 case 'order':return [...m.values].sort((a,b)=>a-b);case 'backwards':return [m.top-1,m.top-3];case 'part':return [m.b];
 case 'clues':{const candidates=Array.from({length:20},(_,i)=>i+1).filter(n=>n>m.lower&&n<m.lower+4&&(n%2!==0)===(m.parity==='odd'));assert.equal(candidates.length,1);return candidates;}
 case 'another':{assert.notDeepEqual([m.shown,m.whole-m.shown].sort(),[m.newPart,m.whole-m.newPart].sort());assert(m.newPart>=1&&m.newPart<=9&&m.whole-m.newPart<=9);return [m.whole-m.newPart];}
 case 'position':return [Array.from({length:m.length},(_,i)=>m.length-i).indexOf(m.position)+1,m.length];
 case 'take':return [q.visual.groups[0]-q.visual.cross];case 'zero':return [0];case 'difference':return [m.a-m.b];
 case 'operation':return [m.subtract?1:0];
 case 'hiddencheck':case 'correct':{
  const options=q.fields[1].options.map(o=>o[0]);const truths=options.map(s=>{const [a,op,b,c]=s.match(/^(\d+) ([+−]) (\d+) = (\d+)$/).slice(1);return (op==='+'?+a+ +b:+a- +b)===+c;});
  assert.equal(truths.filter(Boolean).length,1,'one true checking statement');assert(m.a+m.b<=10);return [q.kind==='hiddencheck'?m.b:m.a+m.b,truths.indexOf(true)];}
 case 'swap':assert(m.a+m.b<=10);return [m.a+m.b,0];default:throw Error(q.kind);
}};
for(const q of bank.questions){
 assert(q.prompt.length===2&&q.prompt.every(Boolean)&&q.why.length===2&&q.why.every(Boolean));assert(!/[<>]/.test(q.prompt.join('')),'no inequality notation');
 assert.deepEqual(q.fields.map(f=>f.answer),oracle(q).map(String),q.id);
 for(const f of q.fields){assert(f.label.length===2&&f.label.every(Boolean));assert(bank.matches(f,f.answer));assert(!bank.matches(f,''));if(f.options){assert(f.options.every(o=>o.length===2&&o.every(Boolean)));assert(!bank.matches(f,'99'));}else{assert(bank.matches(f,f.answer.replace(/\d/g,c=>String.fromCharCode(c.charCodeAt(0)+0xfee0))));assert(!bank.matches(f,Number(f.answer)+1));assert(!bank.matches(f,'1e1'));assert(!bank.matches(f,'3 counters'));}}
 if(q.visual?.groups)assert(q.visual.groups.every(n=>n>=1&&n<=20));
 if(q.unit==='1N2'&&q.meta.a!==undefined){assert(q.meta.a<=9&&q.meta.b<=9);assert(q.meta.a+q.meta.b<=18);}
}
for(const unit of Object.keys(bank.units))for(const level of Object.keys(bank.levels)){
 const all=bank.pick(unit,level,'all');assert.equal(all.length,12);assert.equal(new Set(all.map(q=>q.kind)).size,3);
 const ids=[];for(let set=0;set<4;set++){const qs=bank.pick(unit,level,String(set));assert.equal(qs.length,3);assert.equal(new Set(qs.map(q=>q.kind)).size,3);ids.push(...qs.map(q=>q.id));}assert.equal(new Set(ids).size,12);
}
for(const n of ['p1-level-data.js','p1-levels.js','ui.js']){const s=fs.readFileSync(path.join(__dirname,'..',n),'utf8');new (require('node:vm').Script)(s);assert(!/\?{3,}/.test(s));}
console.log('PASS: 72 independent answer oracles; six 12-question levels; distinct task formats; scope, bilingual, numeric, choice and stable-set contracts.');
