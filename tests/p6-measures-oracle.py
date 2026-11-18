from fractions import Fraction as F
import json,sys,math
rows=json.load(sys.stdin);n=0
for f in rows:
 for i,q in enumerate(f['variants']):
  m=q['measure6'];t=m['type'];answer=None;label=None
  if t=='angleconcept':
   k=m['context']//4;label=['One quarter of a complete turn','One eighth of a complete turn','One twelfth of a complete turn'][k] if m['case']==0 else ['Straight angle','Round angle','Reflex angle'][k] if m['case']==1 else 'Point '+['B','Q','Y'][k] if m['case']==2 else 'Clockwise' if m['turn']<0 else 'Anticlockwise'
  elif t=='protractor':
   gap=abs(m['start']-m['end']);answer=360-gap if m['reflex'] else gap
   assert 0<answer<360 and abs(m['turn'])==answer
   assert (m['start']+m['turn']-m['end'])%360==0
  elif t=='anglecompare':label='A' if m['a']>m['b'] else 'B' if m['b']>m['a'] else 'Equal'
  elif t=='capacity':answer=F(m['value']) if m['case']==0 else F(m['value'])*1000 if m['case']==1 else F(m['value'])/1000 if m['case']==2 else math.prod(m['dims'])
  elif t=='displacement':answer=m['after']-m['before'] if m['case']==0 else m['length']*m['width']*(m['after']-m['before']) if m['case']==1 else m['collected']
  elif t=='displacementmethod':label='Valid if all displaced water is collected' if m['case']in[0,3] else 'Invalid: the solid is not fully submerged' if m['case']==1 else 'Invalid: the solid dissolves'
  elif t=='piratio':answer=F(m['circumference'])/m['diameter']
  elif t=='circumference':answer=2*F(m['pi'])*m['r']
  elif t=='inversecircle':answer=F(m['circumference'])/F(m['pi'])/(1 if m['givenDiameter'] else 2)
  elif t=='boundary':
   r,L,p=m['r'],m['length'],F(m['pi']);case=m['shape']
   # Sum the exposed curved components and straight edges separately.
   arcs=[p*r,p*r/2,2*p*r,p*r][case];edges=[r+r,r+r,L+L,L+L+2*r][case];answer=arcs+edges
  elif t=='timeconversion':answer=F(m['value'])*(60 if m['case']in[0,2] else F(1,60))
  elif t=='timeinterval':
   value=m['end']-m['start'] if m['case']==0 else m['start']+m['duration'] if m['case']==1 else m['end']-m['duration'];answer=[value//60,value%60]
  elif t=='speedmeaning':label=f"{m['value']} distance units in one matching time unit"
  elif t=='speedcompare':
   a,b=(F(20,m['a']),F(20,m['b'])) if m['case']==1 else (F(m['a'],m['time']),F(m['b'],m['time']));label='A' if a>b else 'B' if b>a else 'Same speed'
  elif t=='speedgraph':
   points=m['points'];dist=next(points[j][1]+F((3-points[j][0])*(points[j+1][1]-points[j][1]),points[j+1][0]-points[j][0]) for j in range(3) if points[j][0]<=3<=points[j+1][0]);rest=sum(b[0]-a[0] for a,b in zip(points,points[1:]) if b[1]==a[1]);answer=[dist,rest,F(points[1][1]-points[0][1],points[1][0]-points[0][0]),sum(b[1]-a[1] for a,b in zip(points,points[1:]))][m['case']]
  elif t=='speedproblem':answer=[F(m['distance'],m['time']),m['speed']*m['time'],F(m['distance'],m['speed'])][m['case']]
  elif t=='areamodel':label='The arrangement suggests base near half the circumference and height near the radius; finite pieces are not an exact rectangle'
  elif t=='circlearea':answer=F(m['pi'])*m['r']**2*F(m['fraction'])
  else:raise AssertionError(t)
  if label is not None:assert q['choiceLabels'][q['answer'][0]][0]==label,(f['id'],i,label,q['answer'])
  else:
   expected=answer if isinstance(answer,list) else [answer]
   assert list(map(F,q['answer']))==list(map(F,expected)),(f['id'],i,q['answer'],expected)
   assert [F(x['expected']) for x in q['number6']]==list(map(F,expected))
  n+=1
print('PASS',n,'independent exact rational/geometry/model answers; all response specs agree.')
