// Validate language-bounded activity headings and deterministic metadata generation.
const cp=require('child_process'),path=require('path');const root=path.resolve(__dirname,'..'),python=process.env.PYTHON||(process.platform==='win32'?'python':'python3');const test=String.raw`
from pathlib import Path
from html.parser import HTMLParser
import re,sys,json,tempfile,shutil,subprocess
root=Path(sys.argv[1]);expected=json.loads((root/'resources.js').read_text().split('const resourceData = ')[1].strip().rstrip(';'))
volume=(root/'activities/p5-volume-i.html').read_text();assert not re.search(r'</?h\s+[1-6]\b',volume)
en=volume.split('<section id="en">')[1].split('</section>')[0];zh=volume.split('<section id="zh">')[1].split('</section>')[0]
assert en.count('<h1>')==5 and en.count('<h2>')==12
assert re.search(r'<h1>(.*?)</h1>',en)[1]=='Volume (I): build, compare and measure'
assert re.search(r'<h1>(.*?)</h1>',zh)[1]=='體積（一）：建構、比較與量度'
with tempfile.TemporaryDirectory() as tmp:
 out=Path(tmp);(out/'tools').mkdir();(out/'planning').mkdir();shutil.copy2(root/'tools/build-resource-data.py',out/'tools/build-resource-data.py');shutil.copy2(root/'planning/full-curriculum-plan.md',out/'planning/full-curriculum-plan.md');shutil.copytree(root/'activities',out/'activities')
 run=subprocess.run([sys.executable,str(out/'tools/build-resource-data.py')],capture_output=True,text=True);assert run.returncode==0,run.stderr
 assert (out/'resources.js').read_bytes()==(root/'resources.js').read_bytes(),'Generator must reproduce exact metadata including all85 bilingual activity titles'
 p=out/'activities/p5-volume-i.html';p.write_text(volume.replace(en,en.replace('<h1>','<h 1>').replace('</h1>','</h 1>')))
 bad=subprocess.run([sys.executable,str(out/'tools/build-resource-data.py')],capture_output=True,text=True);assert bad.returncode!=0 and 'missing language-specific h1 title'in bad.stderr,'Malformed EN headings must not leak a ZH title across language sections'
print('PASS closure headings:5 EN sheet headings/12 task headings, original EN/ZH titles,85 exact generated activity records; malformed EN-heading mutation rejected without language leakage.')
`;cp.execFileSync(python,['-c',test,root],{stdio:'inherit'});
