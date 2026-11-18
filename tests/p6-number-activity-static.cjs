const fs=require('fs'),path=require('path'),a=require('assert/strict'),cp=require('child_process'),root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');const files=[];
for(const [slug,code,n]of [['decimals-iv','6N1',5],['decimals-v','6N2',2],['percentages-i','6N3',3],['percentages-ii','6N4',1],['simple-equations-ii','6A1',2]]){
 const h=read('activities/p6-'+slug+'.html');a(h.includes('data-unit="'+code+'"'));for(const l of ['en','zh']){const s=h.split('<section id="'+l+'">')[1].split('</section>')[0];a.equal((s.match(/data-task=/g)||[]).length,6);a.equal((s.match(/data-objective=/g)||[]).length,n);a.equal((s.match(/data-observation="blank"/g)||[]).length,6+n);a.equal((s.match(/class="sheet"/g)||[]).length,5);a(s.includes('<div class="key" hidden>'));}a(read('tools/build-pdf-font.py').includes('activities/p6-'+slug+'.html'));for(const x of h.matchAll(/<script>([\s\S]*?)<\/script>/g))new Function(x[1]);files.push({slug,h});
}
const py=String.raw`
import json,sys,re,ast
from html.parser import HTMLParser
from fractions import Fraction as F
class P(HTMLParser):
 def __init__(self):super().__init__();self.models=[];self.active=False
 def handle_starttag(self,t,a):
  if t=='p' and 'data-model' in dict(a):self.active=True;self.models.append('')
 def handle_endtag(self,t):
  if t=='p':self.active=False
 def handle_data(self,s):
  if self.active:self.models[-1]+=s
rows=json.load(sys.stdin)
for row in rows:
 p=P();p.feed(row['h']);assert len(p.models)==12
 for offset in [0,6]:
  m=p.models[offset:offset+6]
  if row['slug']=='decimals-iv':
   assert all(x in m[0] for x in ['0.48','0.048','0.0048']);assert F('4.8')/1000==F('0.0048')
   assert all(x in m[1] for x in ['12','120','1200']);assert F('1.2')/F('.001')==1200
   assert all(x in m[2] for x in ['0.75','6','4']);assert F('1.5')/2==F('.75')
   assert '1.67' in m[3] and '1.7' in m[3];assert '59.2' in m[4] and '0.8' in m[4];assert 60-4*F('14.8')==F('.8')
  elif row['slug']=='decimals-v':
   assert all(x in m[0] for x in ['7/10','7/20','1/8']);assert F('.125')==F(1,8)
   assert '628/125' in m[1] and F('5.024')==F(628,125);assert '1.125' in m[2] and F(9,8)==F('1.125');assert '0.67' in m[3];assert '100' in m[4] and '99' in m[4];assert F(1,3)>F(33,100)
  elif row['slug']=='percentages-i':
   assert '20%' in m[0];assert '125%' in m[1] and F(50,40)*100==125;assert all(x in m[2] for x in ['99%','122%','0.5%']);assert all(x in m[3] for x in ['1/40','1/125','75%']);assert F('2.5')/100==F(1,40) and F(4,5)/100==F(1,125)
  elif row['slug']=='percentages-ii':
   assert '60%' in m[0] and F(30,50)*100==60;assert '30' in m[1];assert '55' in m[2] and 50*F(110,100)==55;assert '60' in m[3] and 80*F(75,100)==60;assert '50' in m[4]
  else:
   assert 'x=6' in m[0];assert all(x in m[1] for x in ['6','5','1.5']);assert 'x=40' in m[2] and F('.75')*40==30;assert 'x=8' in m[3] and 3*8/2==12;assert 'x=6' in m[4] and 2*(6+F('2.5'))==17
 # Real visible six equations, not only a hidden key.
 if row['slug']=='simple-equations-ii':
  for lang in ['en','zh']:
   section=row['h'].split('<section id="'+lang+'">')[1].split('<div class="key" hidden>')[0]
   for eq in ['0.5*x+1=4','(2/3)*x-1=3','25%*(x+2)=2','1.5*(x-1)=6','2*x+3*x=7.5','5*x-2*x=4.5']:assert eq in section,eq
print('PASS60 actual bilingual teacher-key paragraphs, independently checked model arithmetic; visible six equations and86blank work/objective fields, no invented observations.')
`;
const p=cp.spawnSync('python3',['-c',py],{input:JSON.stringify(files),encoding:'utf8'});a.equal(p.status,0,p.stdout+p.stderr);console.log(p.stdout.trim());
