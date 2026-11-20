from collections import Counter
from fractions import Fraction

days = [d for d in range(1, 15) if (d-1) % 7 in (1, 3)]
assert days == [2, 4, 9, 11]
assert len(days) == 4 and days[-1]+3 == 14 and (14-1)%7 == 6
print('HK012: dates, count and Sunday checked')

assert sum([4]*6) == sum([6]*4) == 24
assert len([4]*6) == 6 and len([6]*4) == 4
print('HK013: two group models and answer units checked')

valid = [n for n in range(27) if 4*n >= 26]
assert min(valid) == 7 and 26-6*4 == 2
print('HK014: minimum containers enumerated')

items = 'pencil ruler eraser pencil pencil eraser ruler pencil eraser pencil'.split()
counts = Counter(items)
assert counts == {'pencil':5,'eraser':3,'ruler':2}
assert sum(counts.values()) == 5+2+3 == 10
print('HK015: independent raw tally and same-total error checked')

pts = [(0,0),(6,0),(9,4),(3,4)]
def polygon_area(p):
    return abs(sum(p[i][0]*p[(i+1)%len(p)][1]-p[(i+1)%len(p)][0]*p[i][1] for i in range(len(p))))/2
assert polygon_area(pts) == 24
assert (9-6)**2+(4-0)**2 == 25
assert polygon_area([(-y,x) for x,y in pts]) == 24
print('HK016: coordinate area, side and rotation checked')

def cells(w,h): return {(x,y) for x in range(w) for y in range(h)}
def boundary(c): return sum((x+dx,y+dy) not in c for x,y in c for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)])
original = cells(6,4)
piece = cells(3,4)
joined = piece | {(x,y+4) for x,y in piece}
assert len(original) == len(joined) == 24
assert boundary(original) == 20 and boundary(joined) == 22
print('HK017: area and perimeter checked by unit cells and exposed edges')

rounded = lambda n: ((n+50)//100)*100
assert rounded(1260) == rounded(1340) == 1300
assert 1340-1260 == 80
assert [n for n in range(1000,1600) if rounded(n)==1300] == list(range(1250,1350))
print('HK018: rounding interval and difference checked')

amounts = [40,50,30]
angles = [Fraction(a,120)*360 for a in amounts]
assert sum(amounts)==120 and angles == [120,150,90]
assert sum(angles)==360 and sum([120,180,90])==390
assert [a/360*120 for a in angles] == amounts
print('HK019: budget, angles and inverse amounts checked')
print('8/8 draft answer checks passed; not a pupil runtime test')
