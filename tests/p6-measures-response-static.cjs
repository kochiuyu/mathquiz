const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');const c={URLSearchParams,location:{search:''}};vm.createContext(c);vm.runInContext(read('builder.js')+';globalThis.added=measureFamilies6;',c);const quiz=read('quiz.js'),mark=quiz.slice(quiz.indexOf('function mark(form)'),quiz.indexOf('function renderNumber2Practice')),control=quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark('));let calls=0,htmls=[];
for(const f of c.added)for(let i=0;i<f.count;i++)for(const zh of[false,true]){const q={...f.make(i),code:f.code},elements={status:{focus(){}},feedback0:{},retry:{}},button={},input={focus(){}};const ctx={grade:6,ch:zh,strictP1:false,quizzes:{6:[q]},points:q=>q.marks??q.fields?.length??1,local:x=>Array.isArray(x)?x[zh?1:0]:x,t:(en,z)=>zh?z:en,document:{getElementById:id=>elements[id],querySelectorAll:sel=>sel==='fieldset'?[{querySelector:()=>input}]:[input],querySelector:()=>button},figure:()=>''};vm.createContext(ctx);vm.runInContext(read('number6.js')+control+mark,ctx);const form=values=>({get:name=>values[Number(name.split('f').pop())]||'',getAll:()=>values});ctx.mark(form([]));a(elements.status.textContent.includes(zh?'請完成':'Please complete'));ctx.mark(form(q.choices?[q.choices.find(x=>!q.answer.includes(x))]:q.answer.map(()=> 'not-a-number')));a.equal(elements.status.textContent,(zh?'得分':'Score')+' 0 / '+q.marks);ctx.mark(form(q.answer));a.equal(elements.status.textContent,(zh?'得分':'Score')+' '+q.marks+' / '+q.marks);if(q.fields?.length===2){ctx.mark(form([q.answer[0],String(Number(q.answer[1])+1)]));a.equal(elements.status.textContent,(zh?'得分':'Score')+' 1 / 2');}calls+=3;for(const [mode,paper,key]of[['assessment',false,false],['paper',true,false],['key',true,true]])htmls.push({id:f.id+'-'+i,mode,html:ctx.item(q,0,paper,key),prompt:q.prompt[zh?1:0],why:q.why[zh?1:0],fields:q.fields?.length||0,choices:q.choices?.length||0,answer:q.choiceLabels?q.choiceLabels[q.answer[0]][zh?1:0]:q.answer.join(' / ')});}
const py=String.raw`from html.parser import HTMLParser
import json,sys
class P(HTMLParser):
 def __init__(self):super().__init__();self.inputs=[];self.text=[];self.bold=[];self.b=False
 def handle_starttag(self,t,attrs):
  if t=='input':self.inputs.append(dict(attrs))
  if t=='b':self.b=True
 def handle_endtag(self,t):
  if t=='b':self.b=False
 def handle_data(self,s):
  self.text.append(s)
  if self.b:self.bold.append(s)
rows=json.load(sys.stdin)
for r in rows:
 p=P();p.feed(r['html']);p.close();assert r['prompt'] in ''.join(p.text),r['id']
 if r['mode']=='assessment':assert len(p.inputs)==(r['choices'] or r['fields']);assert all(x['name'].startswith('q0') for x in p.inputs)
 else:assert not p.inputs
 if r['mode']=='key':assert ''.join(p.bold)==r['answer'],(r['id'],p.bold,r['answer']);assert r['why'] in ''.join(p.text)
print('PASS',len(rows),'actual production bilingual assessment/paper/key HTML parses.')
`;const result=require('child_process').spawnSync('python3',['-c',py],{input:JSON.stringify(htmls),encoding:'utf8'});a.equal(result.status,0,result.stdout+result.stderr);a.equal(calls,1800);console.log('PASS1800 actual production mark calls, including nonintegral/fraction answers and two-field partial credit; malformed responses rejected.');console.log(result.stdout.trim());
