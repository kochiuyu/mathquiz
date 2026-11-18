// Executes unmodified production renderNumberPractice handlers in a minimal DOM adapter.
// Layout/real-browser behaviour remains a separate browser gate.
const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),quiz=read('quiz.js');
const ids=['axesym6a', 'reflectsym6a', 'meanmodel6a', 'meancalc6a', 'meanmissing6a', 'linefeatures6a', 'lineinterpret6a', 'lineplot6a', 'pieread6a', 'piecompare6a', 'chartchoose6a', 'chartcritique6a'];
let paths=0;
for(const language of [0,1])for(const badKind of ['malformed','incorrect'])for(const id of ids){
 let nodes={},inputs=[],submit,active;
 const element=()=>({hidden:false,disabled:false,value:'',textContent:'',focus(){active=this;}});
 const app={set innerHTML(html){this.html=html;nodes={en:element(),zh:element(),'practice-feedback':element(),'practice-next':element()};nodes['practice-next'].hidden=true;inputs=Array.from(html.matchAll(/<input\b[^>]*>/g),m=>Object.assign(element(),{value:(m[0].match(/value="([^"]*)"/)||[])[1]||'',checked:false}));submit=element();nodes['practice-form']={querySelectorAll:s=>{a.equal(s,'input');return inputs;},querySelector:s=>{a.equal(s,'button[type="submit"]');return submit;}};},get innerHTML(){return this.html;},querySelector:s=>{a.equal(s,'#practice-form input');return inputs[0];}};
 nodes.en=element();nodes.zh=element();
 const c={URLSearchParams,location:{search:''},ch:!!language,lang:language?'zh':'en',strictP1:false,app,href:()=>'?view=practice',t:(en,zh)=>language?zh:en,local:x=>Array.isArray(x)?x[language]:x,document:{getElementById:id=>nodes[id]}};
 vm.createContext(c);vm.runInContext(read('builder.js')+read('marking.js')+read('shapes-data6.js')+';globalThis.bank=families;',c);
 c.figure=fig=>fig?c.shapeDataSvg6(fig,!!language):'';
 vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark('))+quiz.slice(quiz.indexOf('function renderNumberPractice('),quiz.indexOf('function renderArithmetic2Practice(')),c);
 c.renderNumberPractice(id);const f=c.bank.find(f=>f.id===id);a.equal(f.count,12);
 for(let i=0;i<f.count;i++){
  const q=f.make(i);a(app.html.includes(q.prompt[language]));a.equal(inputs.length,q.choices?.length||q.fields.length);a(q.practiceHint[language].length>15);a(!/\d/.test(q.practiceHint[language]),'hint embeds numeric answer');
  const form=nodes['practice-form'],send=()=>form.onsubmit({preventDefault(){}});
  send();a(nodes['practice-next'].hidden);a.equal(nodes['practice-feedback'].textContent,q.choices?c.t('Choose one answer.','請選擇一個答案。'):c.t('Complete every answer field.','請填寫每個答案欄。'));
  if(q.choices)inputs.filter(x=>x.value!==q.answer[0])[badKind==='malformed'?0:1].checked=true;else inputs.forEach((x,j)=>x.value=badKind==='malformed'?'not-a-number':String(Number(q.answer[j])+1));send();
  a.equal(nodes['practice-feedback'].textContent,q.practiceHint[language]);a(nodes['practice-next'].hidden);a.equal(inputs[0].disabled,false);a.equal(submit.hidden,false);a.equal(active,inputs[0]);a(!nodes['practice-feedback'].textContent.includes(q.why[language]));
  if(q.choices)inputs.forEach(x=>x.checked=x.value===q.answer[0]);else inputs.forEach((x,j)=>x.value=String(q.answer[j]));send();a.equal(nodes['practice-next'].hidden,false);a.equal(inputs[0].disabled,true);a.equal(submit.hidden,true);a(nodes['practice-feedback'].textContent.includes(q.why[language]));a(nodes['practice-feedback'].textContent.includes(c.t('Correct after a hint. ','看提示後答對。')));
  const feedback=nodes['practice-feedback'].textContent;send();a.equal(nodes['practice-feedback'].textContent,feedback);nodes['practice-next'].onclick();paths++;
 }
 a(app.html.includes(c.t('Practice complete','練習完成')));a(app.html.includes('0 / 12'));
}
a.equal(paths,576);console.log('PASS 144 variants × 2 languages × 2 production-handler retry paths (choices use two incorrect selections): blank, malformed/incorrect, targeted hint, correct retry, completion; real browser layout is separate.');
