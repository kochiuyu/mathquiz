import sys,json,re,math,xml.etree.ElementTree as E
from fractions import Fraction as F
rows=json.load(sys.stdin);total=0
for row in rows:
 p=row['prompt'];s=row['skill'];ex=row['extras'];svg=E.fromstring(row['svg']) if row['svg'] else None
 def els(cls):return [x for x in svg.iter() if x.get('class')==cls]
 def vals(pattern):return [F(x) for x in re.findall(pattern,p)]
 def match(pattern):return re.search(pattern,p).group(1)
 def N(i,v):
  global total
  assert F(ex[i]['answer'])==F(v),(s,row['index'],i,ex[i],v)
  assert F(ex[i]['numberSpec']['expected'])==F(v);total+=1
 def C(i,pattern):
  global total
  chosen=ex[i]['options'][int(ex[i]['answer'])][0];assert re.search(pattern,chosen),(s,p,chosen,pattern);total+=1
 def turn():
  a,b=els('angle-ray-A')[0],els('angle-ray-B')[0];v=lambda x:(float(x.get('x2'))-float(x.get('x1')),float(x.get('y2'))-float(x.get('y1')))
  va,vb=v(a),v(b);ang=math.degrees(math.acos(max(-1,min(1,sum(x*y for x,y in zip(va,vb))/math.hypot(*va)/math.hypot(*vb)))));d=els('marked-angle-turn')[0].get('d');large=int(re.search(r'A[\d.,]+ 0 ([01]),',d).group(1));return round(360-ang if large else ang),d
 if s=='angleconcept6a':
  if '°' in p:N(0,360-int(match(r'(\d+)°')))
  elif '∠' in p:C(0,match(r'∠([A-Z]{3})')[::-1])
  else:
   _,d=turn();sweep=int(re.search(r'A[\d.,]+ 0 [01],([01])',d).group(1));C(0,'^Anticlockwise$' if sweep else '^Clockwise$')
 elif s=='protractor6a':N(0,360-turn()[0])
 elif s=='anglecompare6a':a,b=vals(r'measures\s*(\d+)°');N(0,abs(a-b))
 elif s=='capacityvolume6a':
  if 'dimensions' in p:v=math.prod(vals(r'(\d+)\s*cm'))
  else:v=F(match(r'(\d+(?:\.\d+)?)\s*(?:cm³|m³|L)'));v*=1000 if re.search(r'\s+m³\. Express',p) else 1
  N(0,v/2)
 elif s=='displacement6a':
  if 'internal base' in p:
   nums=vals(r'(\d+)\s*cm');N(0,nums[0]*nums[1]);N(1,nums[3]-nums[2])
  else:
   levels=[]
   for water in els('water-level'):
    x=float(water.get('x')); y=float(water.get('y'));texts=[t for t in svg.iter() if t.tag.endswith('text') and re.fullmatch(r'\d+',t.text or '') and float(t.get('x'))>x and float(t.get('x'))<x+100];ticks=sorted([(float(t.get('y'))-4,F(t.text)) for t in texts]);a,b=ticks[:2];level=a[1]+F(str((y-a[0])/(b[0]-a[0])))*(b[1]-a[1]);levels.append(level)
   N(0,2*(levels[-1]-levels[0] if len(levels)==2 else levels[0]))
 elif s=='displacementmethod6a':
  C(0,'safe liquid' if re.search(r'sugar|salt|bath cube',p,re.I) else 'completely below' if re.search(r'cork|wooden|plastic ball',p,re.I) else 'no trapped air')
 elif s=='piratio6a':N(0,2*F(match(r'circumference\s*(\d+(?:\.\d+)?)')))
 elif s=='circlecircum6a':v=F(match(r'(?:radius|diameter)\s*(\d+)'));N(0,v/2 if 'diameter' in p else v*2)
 elif s=='inversecircle6a':c=F(match(r'circumference\s*(\d+(?:\.\d+)?)'));pi=F(match(r'π=([\d./]+)\.'));N(0,c/pi/2 if 'its diameter' in p else c/pi)
 elif s=='circleboundary6a':
  r=F(match(r'r=(\d+)'));pi=F(match(r'π=([\d./]+)\.'));l=F(match(r'length is\s*(\d+)')) if 'length is' in p else 0
  if 'stadium' in p:curve=2*pi*r;straight=2*l
  elif 'rectangle with' in p:curve=pi*r;straight=2*l+2*r
  elif 'quarter-circle' in p:curve=pi*r/2;straight=2*r
  else:curve=pi*r;straight=2*r
  N(0,curve);N(1,straight)
 elif s=='timeconvert6a':v=F(match(r'Convert ([\d.]+)'));N(0,v*120 if re.search(r'hours to minutes|minutes to seconds',p) else v/30)
 elif s=='timeinterval6a':
  times=[int(a)*60+int(b) for a,b in re.findall(r'(\d\d):(\d\d)',p)]
  if len(times)==2:v=times[1]-times[0]
  else:h,mi=map(int,re.search(r'(\d+) h (\d+) min',p).groups());v=times[0]+(h*60+mi)*(1 if 'starts' in p else -1)
  N(0,v)
 elif s=='speedmeaning6a':N(0,3*F(match(r'at (\d+)')))
 elif s=='speedcompare6a':
  N(0,2*F(match(r'A takes\s*(\d+)' if 'Both models' in p else r'A travels\s*(\d+)' if 'Model A' in p else r'A covers\s*(\d+)')))
 elif s=='speedgraph6a':
  pts=[tuple(map(float,x.split(','))) for x in els('travel-path')[0].get('points').split()];axis=[(float(t.get('y'))-4,F(t.text)) for t in svg.iter() if t.tag.endswith('text') and t.get('x')=='57'];axis.sort();a,b=axis[:2];diff=F(str((pts[-1][1]-pts[-2][1])/(b[0]-a[0])))*(b[1]-a[1]);N(0,diff);N(1,diff/2)
 elif s=='speedproblem6a':
  if 'Find distance' in p:v,t=map(F,re.search(r'at\s*(\d+)\s*(?:m/s|km/h) for (\d+)',p).groups());d=v*t
  else:d=F(match(r'travels\s*(\d+)'))
  N(0,d*2)
 elif s=='circleareamodel6a':N(0,2*int(match(r'into\s*(\d+)')));C(1,'area is unchanged')
 elif s in ['circlearea6a','fractioncirclearea6a']:
  r=F(match(r'radius\s*(\d+)'));pi=F(match(r'π=([\d./]+)\.'))
  if s=='circlearea6a':N(0,r*r)
  else:
   fraction=F(3,4) if 'three-quarter' in p else F(1,4) if 'quarter-circle' in p else F(1,2);N(0,pi*r*r*(1-fraction))
 else:raise AssertionError(s)
print('PASS independent visible-prompt/actual-SVG oracle:',len(rows),'contexts,',total,'extras. No answer/model metadata used.')
