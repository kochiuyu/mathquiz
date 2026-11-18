const cp=require('node:child_process'),path=require('node:path');cp.execFileSync('python',[path.join(__dirname,'p5-level-oracle.py')],{stdio:'inherit'});
