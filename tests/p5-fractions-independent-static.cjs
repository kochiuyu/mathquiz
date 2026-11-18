const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict'),crypto=require('crypto'),root=path.resolve(__dirname,'..'),read=x=>fs.readFileSync(path.join(root,x),'utf8'),hash=x=>crypto.createHash('sha256').update(x).digest('hex'),c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+read('marking.js')+';globalThis.bank=families.filter(f=>![...algebraFamilies5,...measureFamilies5,...shapeDataFamilies5].some(g=>g.id===f.id)).filter(f=>f.code!=="5N5").filter(f=>f.code!=="5N4").filter(f=>!productFamilies5.some(n=>n.id===f.id));globalThis.newFamilies=fractionFamilies5;',c);const ids=c.newFamilies.map(f=>f.id),old=c.bank.filter(f=>!/^(fractionmeaning5b|fractionproduct5b|productstory5b|productestimate5b)$/.test(f.id)&&!ids.includes(f.id)).map(f=>({id:f.id,grade:f.grade,code:f.code,label:f.label,count:f.count,retired:f.retired,variants:Array.from({length:f.count},(_,i)=>f.make(i))}));a.equal(old.reduce((n,f)=>n+f.count,0),2721);a.equal(hash(JSON.stringify(old)),'812563979f052ea6ce835c91a1b9d313f51073688104ea9d3d3cb21194deba35');a.equal(hash(read('marking.js')),'625361f4c2e9e1101eb3ed7e8233cfa06573ed458242a78fe1145947f301ba2e');
function gcd(a,b){while(b)[a,b]=[b,a%b];return a;}function rat(n,d=1n){n=BigInt(n);d=BigInt(d);const g=gcd(n,d);return [n/g,d/g];}function parse(s){const words=s.split(' ');if(words.length===2){const [n,d]=words[1].split('/').map(BigInt);return [BigInt(words[0])*d+n,d];}return s.includes('/')?s.split('/').map(BigInt):[BigInt(s),1n];}function cmp(a,b){const d=a[0]*b[1]-b[0]*a[1];return d<0n?'<':d>0n?'>':'=';}function evalParts(p,ops){return p.slice(1).reduce((v,x,j)=>rat(v[0]*x[1]+(ops[j]==='+'?1n:-1n)*x[0]*v[1],v[1]*x[1]),p[0]);}function truth(chain,p){const tokens=chain.split(/([<>=])/),letters={A:0,B:1,C:2};for(let j=1;j<tokens.length;j+=2)if(cmp(p[letters[tokens[j-1]]],p[letters[tokens[j+1]]])!==tokens[j])return false;return true;}
let count=0,responses=0;for(const f of c.newFamilies)for(let i=0;i<f.count;i++){const q=f.make(i),m=q.multiFraction5,p=Array.from(m.texts,parse);a.equal(p.length,m.parts.length);for(let j=0;j<p.length;j++){a.equal(cmp(p[j],m.parts[j].map(BigInt)),'=');a(p[j][0]>=0n);if(p.length===3)a(m.parts[j][1]<=12);}a.equal(q.marks,1);a.equal(c.decodeItems(f.id+'-'+i,5).length,1);a.equal(c.decodeItems(f.id+'-'+i,4).length,0);if(m.kind==='order'){const good=q.choices.filter(x=>p.length===2?cmp(p[0],p[1])===x:truth(x,p));a.equal(good.length,1,'unique true relation '+i);a.equal(good[0],q.answer[0]);}else{const [n,d]=evalParts(p,m.ops);a(n>=0n);if(m.kind==='estimate'){const k=n/d;a.equal(q.answer[0],String(k));a.equal(q.choices.filter(x=>BigInt(x)*d<=n&&n<(BigInt(x)+1n)*d).length,1);}else{a.equal(cmp(parse(q.answer[0]),[n,d]),'=');const spec=q.fraction4N6Answer;a.equal(spec.mode,'general');a.equal(spec.lowest,true);const improper=d===1n?String(n):n+'/'+d;a(c.scoreFraction4N6(improper,spec).correct);a(c.scoreFraction4N6(n+'/'+d,spec).correct);if(n>d&&n%d){const mixed=n/d+' '+n%d+'/'+d;a(c.scoreFraction4N6(mixed,spec).correct);}a(!c.scoreFraction4N6((n*2n)+'/'+(d*2n),spec).correct);for(const bad of ['', '1/0','-1/2','1+1/2','2 3/2','0 1/2','1/2 kg','1//2','1/2/3','1e2','NaN','9'.repeat(81)])a(!c.scoreFraction4N6(bad,spec).correct);const wide=improper.replace(/[0-9]/g,x=>String.fromCharCode(x.charCodeAt(0)+65248));a(c.scoreFraction4N6(wide,spec).correct);responses++;}}count++;}a.equal(count,72);a.equal(responses,48);
let props=0;for(let d=2;d<=12;d++)for(let e=2;e<=12;e++)for(let n=0;n<=d;n++)for(let m=0;m<=e;m++){const x=[BigInt(n),BigInt(d)],y=[BigInt(m),BigInt(e)],sum=evalParts([x,y],['+']);a.equal(cmp(sum,evalParts([y,x],['+'])),'=');a.equal(cmp(evalParts([sum,y],['-']),x),'=');a.equal(cmp(x,[x[0]*3n,x[1]*3n]),'=');props++;}
const quiz=read('quiz.js'),cat=quiz.match(/const practiceCatalogue=\[[\s\S]*?\n\];/)[0];for(const name of new Set(cat.match(/render[A-Za-z0-9]+/g)))c[name]=(...args)=>({name,args});vm.runInContext(cat+';globalThis.cat=practiceCatalogue;',c);const helper=vm.runInNewContext('('+read('tests/regression.js').match(/const samples=(\{[^;]+\});/)[1]+')');for(const f of c.newFamilies){a.equal(c.cat.find(x=>x.skill===f.id).render().args[0],f.id);a.equal(helper[f.id].join(','),Array.from({length:f.count},(_,i)=>i).join(','));a(quiz.includes(f.id+':['+helper[f.id].join(',')+']'));}console.log('PASS5N2:72 independent exact rational fixtures,48 response contracts,2721 frozen predecessors/unchanged marking,three-term denominator bounds,'+props+' algebraic properties;browser pending.');

// Bind oracle operands to displayed prompts and independently check every worked pairwise conversion.
let worked=0;for(const f of c.newFamilies)for(let i=0;i<f.count;i++){const q=f.make(i),m=q.multiFraction5;for(const text of m.texts)for(const prompt of q.prompt)a(prompt.includes(text),'displayed operand');if(q.fraction4N6Answer){const p=Array.from(m.texts,parse);let previous=p[0];for(let j=1;j<p.length;j++){const next=p[j],sign=m.ops[j-1],u=previous[1]*next[1]/gcd(previous[1],next[1]),left=previous[0]*u/previous[1],right=next[0]*u/next[1];a(u%previous[1]===0n&&u%next[1]===0n);const result=rat(left+(sign==='+'?right:-right),u);a(result[0]>=0n,'nonnegative intermediate');const expected=`${previous[0]}/${previous[1]} ${sign==='+'?'+':'−'} ${next[0]}/${next[1]} = ${left}/${u} ${sign==='+'?'+':'−'} ${right}/${u}`;a(q.why[0].includes(expected),'actual worked common denominator');previous=result;worked++;}}}console.log('PASS displayed operands and '+worked+' exact pairwise common-denominator steps; no three-number LCM algorithm required.');

// Real HTML interpretation regression: raw A<B<C was swallowed as markup in new 5N2
// options, answer keys and explanations. Internal choice IDs remain unchanged.
const rendererContext={local:x=>Array.isArray(x)?x[rendererContext.language]:x,t:(en,zh)=>rendererContext.language?zh:en,points:q=>q.marks,figure:()=>'',language:0};vm.createContext(rendererContext);vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark(')),rendererContext);
const htmlCases=[];for(let i=6;i<12;i++)for(let language=0;language<2;language++){const q=c.newFamilies.find(f=>f.id==='fractionorder5a').make(i);rendererContext.language=language;const visible=v=>v.replace(/([<>=])/g,' $1 ').trim();a.deepEqual(Array.from(q.choices,v=>q.choiceLabels[v][language]),Array.from(q.choices,visible));a(q.why[language].includes(visible(q.answer[0])));for(const mode of ['assessment/practice','paper','key'])htmlCases.push({i,language,mode,html:mode==='key'?rendererContext.item(q,0,true,true):rendererContext.controls(q,0,mode==='paper'),options:Array.from(q.choices,visible),ids:Array.from(q.choices),answer:visible(q.answer[0]),why:q.why[language]});}
// Cover every key shape, not just the six relation chains: plain choices,
// localized choice labels, and unit-labeled fraction responses.
const keyShapes={plain:0,localized:0,labeled:0};
for(const family of c.newFamilies)for(let i=0;i<family.count;i++)for(let language=0;language<2;language++){
 const q=family.make(i);rendererContext.language=language;
 const shape=q.choiceLabels?'localized':q.answerUnitLabels?'labeled':'plain';keyShapes[shape]++;
 const answer=shape==='localized'?q.choiceLabels[q.answer[0]][language]:shape==='labeled'?Array.from(q.answerUnitLabels,(unit,j)=>unit[language]+': '+q.answer[j]).join('; '):Array.from(q.answer).join(q.multi?', ':' / ');
 htmlCases.push({id:family.id+'-'+i,language,mode:'key',html:rendererContext.item(q,0,true,true),answer,why:q.why[language]});
}
a.deepEqual(keyShapes,{plain:12,localized:36,labeled:96});a.equal(htmlCases.length,180);
const htmlOracle=String.raw`
import json,sys
from html.parser import HTMLParser
class View(HTMLParser):
 def __init__(self):super().__init__();self.options=[];self.bold=[];self.inputs=[];self.text=[];self.active=None;self.b=False
 def handle_starttag(self,tag,attrs):
  assert tag in {'fieldset','legend','small','p','b','div','label','input','span'},tag
  attrs=dict(attrs)
  if 'option' in attrs.get('class','').split():self.active=[tag,[]]
  if tag=='b':self.b=True
  if tag=='input':self.inputs.append(attrs['value'])
 def handle_data(self,s):
  self.text.append(s)
  if self.active:self.active[1].append(s)
  if self.b:self.bold.append(s)
 def handle_endtag(self,tag):
  if self.active and tag==self.active[0]:self.options.append(''.join(self.active[1]).strip().removeprefix('□').strip());self.active=None
  if tag=='b':self.b=False
for case in json.load(sys.stdin):
 v=View();v.feed(case['html']);v.close()
 if case['mode']=='key':
  assert ''.join(v.bold)==case['answer'],case
  assert case['why'] in ''.join(v.text),case
 else:
  assert v.options==case['options'],case
  assert v.inputs==(case['ids'] if case['mode']=='assessment/practice' else []),case
# Mutation: the previously generated raw chain must fail, rather than be normalized away.
try:
 v=View();v.feed('<b>A<B<C</b>');v.close();assert ''.join(v.bold)=='A<B<C'
except AssertionError:pass
else:raise AssertionError('HTML swallowing mutation was not detected')
print('PASS180 production HTML parses: all72 keys x2 languages plus36 relation surface cases; plain/localized/labeled keys and explanations exact, raw IDs preserved, old markup mutation rejected.')
`;
const python=process.env.PYTHON||(process.platform==='win32'?'python':'python3');
const parsed=require('child_process').spawnSync(python,['-c',htmlOracle],{input:JSON.stringify(htmlCases),encoding:'utf8'});a.equal(parsed.status,0,'HTML oracle requires Python 3; set PYTHON to its executable path. '+(parsed.error?.message||'')+(parsed.stdout||'')+(parsed.stderr||''));console.log(parsed.stdout.trim());

