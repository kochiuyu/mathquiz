// Executes unmodified production renderNumberPractice handlers in a minimal DOM adapter.
// Layout/real-browser behaviour remains a separate browser gate.
const fs=require('fs'),path=require('path'),vm=require('vm'),a=require('assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),quiz=read('quiz.js');
const ids=['circleradiusdiam5a','solidparts5a','compoundread5a','compoundcompare5a','compoundscale5a','compoundround5a'];
let paths=0;
for(const language of [0,1])for(const badKind of ['malformed','incorrect'])for(const id of ids){
 let nodes={},inputs=[],submit,active;
 const element=()=>({hidden:false,disabled:false,value:'',textContent:'',focus(){active=this;}});
 const app={set innerHTML(html){this.html=html;nodes={en:element(),zh:element(),'practice-feedback':element(),'practice-next':element()};nodes['practice-next'].hidden=true;inputs=Array.from(html.matchAll(/<input\b[^>]*>/g),()=>element());submit=element();nodes['practice-form']={querySelectorAll:s=>{a.equal(s,'input');return inputs;},querySelector:s=>{a.equal(s,'button[type="submit"]');return submit;}};},get innerHTML(){return this.html;},querySelector:s=>{a.equal(s,'#practice-form input');return inputs[0];}};
 nodes.en=element();nodes.zh=element();
 const c={URLSearchParams,location:{search:''},ch:!!language,lang:language?'zh':'en',strictP1:false,app,href:()=>'?view=practice',t:(en,zh)=>language?zh:en,local:x=>Array.isArray(x)?x[language]:x,document:{getElementById:id=>nodes[id]}};
 vm.createContext(c);vm.runInContext(read('builder.js')+read('marking.js')+read('shapes-data5.js')+';globalThis.bank=families;',c);
 c.figure=fig=>fig?c.shapeDataSvg5(fig,!!language):'';
 vm.runInContext(quiz.slice(quiz.indexOf('function controls('),quiz.indexOf('function mark('))+quiz.slice(quiz.indexOf('function renderNumberPractice('),quiz.indexOf('function renderArithmetic2Practice(')),c);
 c.renderNumberPractice(id);const f=c.bank.find(f=>f.id===id);a.equal(f.count,12);
 for(let i=0;i<f.count;i++){
  const q=f.make(i);a(app.html.includes(q.prompt[language]));a.equal(inputs.length,1);a(q.practiceHint[language].length>15);a(!/\d/.test(q.practiceHint[language]),'hint embeds numeric answer');
  const form=nodes['practice-form'],send=()=>form.onsubmit({preventDefault(){}});
  send();a(nodes['practice-next'].hidden);a.equal(nodes['practice-feedback'].textContent,c.t('Complete every answer field.','請填寫每個答案欄。'));
  inputs[0].value=badKind==='malformed'?'not-a-number':String(Number(q.answer[0])+1);send();
  a.equal(nodes['practice-feedback'].textContent,q.practiceHint[language]);a(nodes['practice-next'].hidden);a.equal(inputs[0].disabled,false);a.equal(submit.hidden,false);a.equal(active,inputs[0]);a(!nodes['practice-feedback'].textContent.includes(q.why[language]));
  inputs[0].value=String(q.answer[0]);send();a.equal(nodes['practice-next'].hidden,false);a.equal(inputs[0].disabled,true);a.equal(submit.hidden,true);a(nodes['practice-feedback'].textContent.includes(q.why[language]));a(nodes['practice-feedback'].textContent.includes(c.t('Correct after a hint. ','看提示後答對。')));
  const feedback=nodes['practice-feedback'].textContent;send();a.equal(nodes['practice-feedback'].textContent,feedback);nodes['practice-next'].onclick();paths++;
 }
 a(app.html.includes(c.t('Practice complete','練習完成')));a(app.html.includes('0 / 12'));
}
a.equal(paths,288);console.log('PASS 72 variants × 2 languages × 2 production-handler retry paths: blank, malformed/incorrect, targeted hint, correct retry, completion; real browser layout is separate.');
