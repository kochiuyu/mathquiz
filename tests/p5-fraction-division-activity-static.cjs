const fs=require('fs'),path=require('path'),a=require('assert/strict'),cp=require('child_process'),read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8'),html=read('activities/p5-fractions-v.html');
a(html.includes('data-unit="5N5"')&&html.includes('activity-ui.js')&&html.includes('activity-ui.css'));
for(const lang of ['en','zh']){const s=html.split('<section id="'+lang+'">')[1].split('</section>')[0];a.equal((s.match(/data-task=/g)||[]).length,6);a.equal((s.match(/class="sheet"/g)||[]).length,5);a.equal((s.match(/data-objective=/g)||[]).length,4);a.equal((s.match(/data-observation="blank"><\/div>/g)||[]).length,10);a(s.includes('<div class="key" hidden>'));for(let i=1;i<=4;i++)a(s.includes('data-objective="5N5.'+i+'"'));a(s.includes('EN_KS2_e.pdf#page=36')&&s.includes('pmc2017_e.pdf#page=82'));a(s.includes(lang==='en'?'not pupil mastery':'不代表學生已掌握'));}
const result=cp.spawnSync('python3',['-c',String.raw`
from fractions import Fraction as F
from html.parser import HTMLParser
import sys
class P(HTMLParser):
 def __init__(self):super().__init__();self.models=[];self.active=False
 def handle_starttag(self,t,attrs):
  if t=='p' and 'data-model' in dict(attrs):self.active=True;self.models.append('')
 def handle_data(self,s):
  if self.active:self.models[-1]+=s
 def handle_endtag(self,t):
  if t=='p':self.active=False
p=P();p.feed(sys.stdin.read());assert len(p.models)==12
for offset in [0,6]:
 def has(i,*values):
  for v in values:assert str(v) in p.models[offset+i],(i,v,p.models[offset+i])
 has(0,F(3,4),F(3,7),F(7,3));has(1,F(5)/F(3,4),F(5)-6*F(3,4));has(2,F(2)/F(1,2),F(3,4)/2,0)
 has(3,F(1,2)+F(3,4)*2,(F(1,2)+F(3,4))*2,F(2)/F(1,2)/F(3,4),F(2)/(F(1,2)/F(3,4)))
 for amount,piece,k,rem in [(F(5),F(3,4),6,F(1,2)),(F(3),F(1,2),6,F(0)),(F(1,4),F(2,3),0,F(1,4))]:
  assert amount==k*piece+rem and 0<=rem<piece;has(4,k,rem)
 has(5,F(7,4),F(21,2),F(7,2))
print('PASS12 bilingual actual model keys: independent fraction arithmetic/remainders/rate table;10 blank observations perlanguage.')
`],{input:html,encoding:'utf8'});a.equal(result.status,0,result.stdout+result.stderr);console.log(result.stdout.trim());
a(read('tools/build-pdf-font.py').includes('"activities/p5-fractions-v.html"'));const data=JSON.parse(read('resources.js').split('const resourceData = ')[1].replace(/;\s*$/,''));a.equal(data.activities.filter(x=>x.path==='activities/p5-fractions-v.html').length,1);a.equal(data.units.find(u=>u.code==='5N5').complete,false);
