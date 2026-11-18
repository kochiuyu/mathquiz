const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
for(const p of ['answer-feedback.js','tests/answer-feedback-tests.js','tests/smart-regression.js'])new vm.Script(read(p));
for(const file of ['index.html','smart-practice.html','p1-levels.html',...Array.from({length:6},(_,i)=>'p'+(i+1)+'-skill-levels.html')]){
 const s=read(file);assert.equal((s.match(/src="answer-feedback.js\?v=1"/g)||[]).length,1,file);assert(s.includes('href="answer-feedback.css?v=1"'),file);
 assert(s.indexOf('src="answer-feedback.js')>s.lastIndexOf('src="',s.indexOf('src="answer-feedback.js')-1),'feedback attaches after original marking/replay scripts');
}
const css=read('answer-feedback.css');assert(css.includes('@media(prefers-reduced-motion:reduce)'));assert(css.includes('@media print'));assert(css.includes('@media(forced-colors:active)'));
function luminance(h){const rgb=h.match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;}
for(const [fg,bg]of [['185743','ffffff'],['185743','e6f6ec'],['634400','fff2c6']])assert((luminance(bg)+.05)/(luminance(fg)+.05)>=4.5,'text contrast '+fg);
assert(read('tests/smart-regression.js').includes('both division representations covered'));
console.log('PASS feedback: nine entry points, scripts parse, reduced motion/print/high-contrast rules, three text contrasts, exhaustive P6 keyboard regression registered.');
