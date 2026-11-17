# Exact rational clipping oracle, independent of application geometry helpers.
import json,sys,re
from fractions import Fraction as F
from itertools import combinations,permutations
records=json.load(sys.stdin)
def sub(a,b):return (a[0]-b[0],a[1]-b[1])
def cross(a,b):return a[0]*b[1]-a[1]*b[0]
def dot(a,b):return a[0]*b[0]+a[1]*b[1]
def area(v):return abs(sum(cross(v[i],v[(i+1)%len(v)]) for i in range(len(v))))/F(2)
def rational(v):return [tuple(F(x) for x in p) for p in v]
def signed(v):return sum(cross(v[i],v[(i+1)%len(v)]) for i in range(len(v)))
def polygon(v):
 assert len(v)>=3 and len(set(v))==len(v) and area(v)>0
 turns=[cross(sub(v[(i+1)%len(v)],v[i]),sub(v[(i+2)%len(v)],v[(i+1)%len(v)])) for i in range(len(v))]
 assert all(t>0 for t in turns) or all(t<0 for t in turns), 'strict convexity ensures simple outline'
def clip(subject,window):
 # Sutherland-Hodgman, all arithmetic Fraction, independently recomputed cross intersections.
 out=list(subject);w=window if signed(window)>0 else list(reversed(window))
 for a,b in zip(w,w[1:]+w[:1]):
  old=out;out=[]
  if not old:break
  def side(p):return cross(sub(b,a),sub(p,a))
  prev=old[-1];sp=side(prev)
  for cur in old:
   sc=side(cur)
   if (sc>=0)!=(sp>=0):
    t=sp/(sp-sc);out.append(tuple(prev[j]+t*(cur[j]-prev[j]) for j in range(2)))
   if sc>=0:out.append(cur)
   prev,sp=cur,sc
 return out
def fit(target,pieces):
 covered=sum(area(clip(p,target)) for p in pieces)
 outside=sum(area(p)-area(clip(p,target)) for p in pieces)
 overlap=sum(area(clip(a,b)) for a,b in combinations(pieces,2))
 return outside==0 and overlap==0 and covered==area(target),outside,overlap

def congruent(a,b):
 if len(a)!=len(b):return False
 return any(all(dot(sub(a[i],a[j]),sub(a[i],a[j]))==dot(sub(p[i],p[j]),sub(p[i],p[j])) for i in range(len(a)) for j in range(i)) for p in permutations(b))
def triangle(v):
 lengths=[dot(sub(v[(i+1)%3],v[i]),sub(v[(i+1)%3],v[i])) for i in range(3)]
 right=sum(dot(sub(v[(i-1)%3],v[i]),sub(v[(i+1)%3],v[i]))==0 for i in range(3))
 return right,len(set(lengths))<3

def boundary(v,p):return any(cross(sub(b,a),sub(p,a))==0 and min(a[0],b[0])<=p[0]<=max(a[0],b[0]) and min(a[1],b[1])<=p[1]<=max(a[1],b[1]) for a,b in zip(v,v[1:]+v[:1]))

def edges(v):return list(zip(v,v[1:]+v[:1]))
def boundary_count(pieces):
 # Split at every collinear endpoint before cancelling opposite/shared interior edges.
 vertices={p for v in pieces for p in v};counts={}
 for v in pieces:
  for a,b in edges(v):
   points=[p for p in vertices if boundary([a,b],p)];axis=0 if a[0]!=b[0] else 1;points.sort(key=lambda p:p[axis])
   for x,y in zip(points,points[1:]):counts[(x,y)]=counts.get((x,y),0)+1
 outer=[e for e,n in counts.items() if n==1];assert all(n<=2 for n in counts.values())
 adj={}
 for a,b in outer:adj.setdefault(a,[]).append(b);adj.setdefault(b,[]).append(a)
 assert all(len(n)==2 for n in adj.values()),'one polygon boundary, no branch'
 seen=set();p=next(iter(adj));prev=None;cycle=[]
 while p not in seen:
  seen.add(p);cycle.append(p);n=next(x for x in adj[p] if x!=prev);prev,p=p,n
 assert len(seen)==len(adj),'no disconnected cycles or holes'
 return sum(cross(sub(cycle[i],cycle[i-1]),sub(cycle[(i+1)%len(cycle)],cycle[i]))!=0 for i in range(len(cycle)))

svgs=0;mutations=0
for row in records:
 q=row['q'];f=q['figure'];m=q['dissect4S2'];target=rational(f['target']);pieces=[rational(v) for v in f['pieces']]
 polygon(target)
 for p in pieces:polygon(p)
 good,outside,overlap=fit(target,pieces)
 if f['mode']=='cut':
  assert good and boundary_count(pieces)==len(target)
  for cut in f['cuts']:
   a,b=rational(cut);assert a!=b and boundary(target,a) and boundary(target,b)
   assert all(boundary(target,x) or all(cross(sub(y,z),sub(x,z))>=0 for z,y in edges(target)) for x in [(a[0]+(b[0]-a[0])*F(k,8),a[1]+(b[1]-a[1])*F(k,8)) for k in range(9)])
   # Every cut is a genuine shared piece boundary, not an unrelated decoration.
   mid=((a[0]+b[0])/2,(a[1]+b[1])/2);assert sum(boundary(p,mid) for p in pieces)>=2
  kind=m['kind']
  if kind=='rectangle-triangles':assert all(triangle(p)==(1,False) for p in pieces)
  elif kind=='square-triangles':assert all(triangle(p)==(1,True) for p in pieces)
  elif kind=='pentagon':assert sorted(map(len,pieces))==[3,4]
  elif kind=='trapeziums':
   assert congruent(*pieces)
   for p in pieces:
    e=[sub(b,a) for a,b in edges(p)];assert sum(cross(e[i],e[(i+2)%4])==0 for i in [0,1])==1;assert sum(dot(e[i-1],e[i])==0 for i in range(4))==2
  elif kind=='three-rectangles':assert len(pieces)==3 and all(len(p)==4 and all(dot(sub(p[i-1],p[i]),sub(p[(i+1)%4],p[i]))==0 for i in range(4)) for p in pieces)
  else:assert False
  expected={'rectangle-triangles':['Two right-angled triangles, neither isosceles','兩個直角三角形，兩個都不是等腰三角形'],'square-triangles':['Two isosceles right-angled triangles','兩個等腰直角三角形'],'pentagon':['One rectangle and one triangle','一個長方形和一個三角形'],'trapeziums':['Two right-angled trapeziums','兩個直角梯形'],'three-rectangles':['Three rectangles (one is also a square)','三個長方形（其中一個也是正方形）']}[kind];assert m['correct']==expected;assert q['choiceLabels'][q['answer'][0]]==expected;assert list(q['choiceLabels'].values()).count(expected)==1
 else:
  assert good==m['valid'];assert q['answer']==['yes' if good else 'no']
  originals=[rational(p) for p in m['original']];assert any(all(congruent(a,b) for a,b in zip(originals,ps)) for ps in permutations(pieces)), 'no resized/sheared pieces'
  if good:assert boundary_count(pieces)==len(target)
  if m['kind']=='triangle-assembly':
   assert all(len(p)==3 and triangle(p)[0]==1 for p in pieces)
   e=[sub(b,a) for a,b in edges(target)];assert all(cross(e[i],e[(i+2)%4])==0 for i in [0,1])
   index=int(row['id'].rsplit('-',1)[1]);right=all(dot(e[i-1],e[i])==0 for i in range(4));equal=len(set(dot(x,x) for x in e))==1
   assert (right,equal)==({0:(True,True),1:(True,False),2:(True,False),3:(False,False)}[index])
  if m['kind']=='trapezium-assembly':
   assert congruent(*originals)
   for p in originals:
    e=[sub(b,a) for a,b in edges(p)];assert sum(cross(e[i],e[(i+2)%4])==0 for i in [0,1])==1 and sum(dot(e[i-1],e[i])==0 for i in range(4))==2
  if m['kind']=='gap-outside':assert outside>0 and overlap==0
  if m['kind']=='overlap-gap':assert overlap>0 and outside==0
  if m['kind']=='disconnected':assert outside>0 and overlap==0 and area(clip(*pieces))==0
  if m['kind']=='corner-overlap':assert outside>0 and overlap>0
 # Actual generated SVG coordinate audit in both languages.
 for svg in row['svgs']:
  poly=re.findall(r'<polygon class="dissect-piece4"[^>]*data-scale="([^"]+)" points="([^"]+)"',svg);assert len(poly)==len(pieces)
  scales=[]
  rendered_target=[tuple(map(float,x.split(','))) for x in re.search(r'class="dissect-target4" points="([^"]+)"',svg)[1].split()]
  first_scale=float(poly[0][0]);ox=rendered_target[0][0]-float(target[0][0])*first_scale;oy=rendered_target[0][1]-float(target[0][1])*first_scale
  for p,v in zip(rendered_target,target):assert abs(p[0]-ox-float(v[0])*first_scale)<1e-8 and abs(p[1]-oy-float(v[1])*first_scale)<1e-8
  for (scale,points),v in zip(poly,pieces):
   scale=float(scale);scales.append(scale);p=[tuple(map(float,x.split(','))) for x in points.split()];assert len(p)==len(v)
   for i in range(len(v)):
    assert 29<=p[i][0]<=331 and 29<=p[i][1]<=191
    assert abs(p[i][0]-ox-float(v[i][0])*scale)<1e-8 and abs(p[i][1]-oy-float(v[i][1])*scale)<1e-8
    for j in [0,1]:assert abs((p[(i+1)%len(v)][j]-p[i][j])-float(v[(i+1)%len(v)][j]-v[i][j])*scale)<1e-8
  assert len(set(scales))==1
  rendered_cuts=re.findall(r'class="dissect-cut4" x1="([^"]+)" y1="([^"]+)" x2="([^"]+)" y2="([^"]+)"',svg)
  assert len(rendered_cuts)==len(f['cuts'])
  for line,cut in zip(rendered_cuts,f['cuts']):
   actual=list(map(float,line));expected=[ox+cut[0][0]*first_scale,oy+cut[0][1]*first_scale,ox+cut[1][0]*first_scale,oy+cut[1][1]*first_scale];assert all(abs(a-b)<1e-8 for a,b in zip(actual,expected))
  assert len(re.findall('class="dissect-label4"',svg))==len(pieces)
  svgs+=1
 if good:
  # Geometry must reject missing/duplicated/shifted/resized pieces even if some area sums coincide.
  shift=lambda p,dx,dy:[(x+dx,y+dy) for x,y in p]
  for bad in [pieces[:-1],pieces+[pieces[0]],[pieces[0],pieces[0]],pieces[:-1]+[shift(pieces[-1],F(1,2),0)],pieces[:-1]+[[(x*2,y) for x,y in pieces[-1]]]]:
   assert not fit(target,bad)[0];mutations+=1
assert len(records)==24 and svgs==48
assert sum(r['q']['dissect4S2'].get('valid') is True for r in records)==6
print(f'PASS exact4S2:24 independent partitions/assemblies,48 bilingual SVGs,{mutations} rejected missing/duplicate/gap/shear fixtures; exact rational clipping, boundary cancellation, rigid piece preservation.')
