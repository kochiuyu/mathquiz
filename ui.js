/* Presentation and navigation only. Mathematical payloads and marking are unchanged. */
window.MathQuizUI = (() => {
  const language = () => new URLSearchParams(location.search).get('lang') === 'zh' ? 'zh' : 'en';
  const tr = (en, zh) => language() === 'zh' ? zh : en;
  const loc = pair => pair[language() === 'zh' ? 1 : 0];
  const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const year = n => tr('Primary '+n, '小'+['','一','二','三','四','五','六'][n]);
  const root = () => location.pathname.includes('/activities/') ? '../' : './';
  const browseLink = (values={}) => root()+'?'+new URLSearchParams({lang:language(),view:'browse',...values});
  function shell(active='home', pupil=false) {
    document.documentElement.lang = language()==='zh'?'zh-HK':'en';
    const header=document.querySelector('header');
    if(!header)return;
    header.classList.add('site-header');
    const brand=header.querySelector('strong');
    if(brand)brand.outerHTML='<a class="brand" href="'+root()+'?lang='+language()+'">Math<span>Quiz</span><small>'+tr('HONG KONG PRIMARY','香港小學數學')+'</small></a>';
    if(!header.querySelector('.site-nav') && !pupil)header.insertAdjacentHTML('beforeend','<nav class="site-nav" aria-label="'+tr('Main navigation','主導覽')+'">'+[['home',root()+'?lang='+language(),tr('Home','首頁')],['browse',browseLink(),tr('Find resources','尋找資源')],['build',root()+'?v=3&lang='+language()+'&p=1&items=&view=build',tr('Create a quiz','建立小測')]].map(([key,url,label])=>'<a '+(active===key?'aria-current="page" ':'')+'href="'+url+'">'+label+'</a>').join('')+'</nav>');
    const nav=header.querySelector('nav:not(.site-nav)');if(nav)nav.classList.add('language-nav');
    const main=document.querySelector('main');
    if(main){main.id=main.id||'main-content';main.tabIndex=-1;if(!document.querySelector('.skip-link'))header.insertAdjacentHTML('beforebegin','<a class="skip-link" href="#'+main.id+'">'+tr('Skip to content','跳至內容')+'</a>');}
    if(!document.querySelector('.site-footer'))document.body.insertAdjacentHTML('beforeend','<footer class="site-footer screen-only"><span>MathQuiz · '+tr('Learn a little. Understand more.','每天練習，逐步理解。')+'</span><a href="'+root()+'coverage.html?lang='+language()+'">'+tr('Curriculum & resources','課程及資源')+'</a><span>'+tr('No account needed','毋須帳戶')+'</span></footer>');
    for(const l of ['en','zh']){const a=header.querySelector('#'+l);if(a){const u=new URL(location.href);u.searchParams.set('lang',l);a.href=u.href;a.lang=l==='zh'?'zh-HK':'en';a.setAttribute('aria-current',l===language()?'true':'false');}}
  }
  function home(app) {
    document.body.classList.add('home-page');shell('home');
    const create='?v=3&lang='+language()+'&p=1&items=&view=build';
    app.innerHTML='<section class="hero"><div><p class="eyebrow">'+tr('FOR CURIOUS MINDS · PRIMARY 1–6','讓好奇心帶路 · 小一至小六')+'</p><h1>'+tr('Small steps.<br>Stronger maths.','小小練習，<br>學懂更多數學。')+'</h1><p class="intro">'+tr('Find the right practice, build a quiz, or bring a hands-on activity to your classroom.','尋找合適練習、建立小測，或把實作活動帶進課室。')+'</p><div class="hero-actions"><a class="button" href="'+browseLink({mode:'practice'})+'">'+tr('Start practising','開始練習')+' <span aria-hidden="true">↗</span></a><a class="button secondary" href="'+create+'">'+tr('Create a quiz','建立小測')+'</a></div><p class="quiet">'+tr('English & 繁體中文 · Free to use · No sign-in','English 及繁體中文 · 免費使用 · 毋須登入')+'</p></div><div class="math-art" aria-hidden="true"><span class="art-label">'+tr('ROOM TO THINK','思考的空間')+'</span><div class="art-fraction"><span>1</span><span>2</span></div><div class="art-dots">'+Array.from({length:6},()=>'<i></i>').join('')+'</div><div class="art-sum">8 + 4 <span>= 12</span></div><div class="art-triangle"></div><span class="art-caption">'+tr('Count. Explore. Discover.','數一數 · 試一試 · 想一想')+'</span></div></section>'+
      '<section class="section-block"><div class="section-heading"><div><p class="eyebrow">'+tr('YOUR NEXT STEP','下一步')+'</p><h2>'+tr('What would you like to do?','今天想做甚麼？')+'</h2></div></div><div class="intent-grid home-actions">'+[
        ['01',tr('Practise a skill','練習一項技能'),tr('Short practice with hints, another try and worked answers.','短篇練習，配合提示、重試及解題步驟。'),browseLink({mode:'practice'}),tr('Find practice','尋找練習')],
        ['02',tr('Make it your quiz','建立你的專屬小測'),tr('Choose questions, review every item, then share or print.','選擇題目、逐題預覽，再分享或列印。'),create,tr('Build a quiz','建立小測')],
        ['03',tr('Learn by doing','動手學習'),tr('Printable tasks for measuring, making, talking and investigating.','用量度、製作、討論及探究活動學習數學。'),browseLink({mode:'activity'}),tr('Teacher activities','教師活動')]
      ].map(([n,title,desc,url,action])=>'<article class="intent-card"><span class="card-number">'+n+'</span><h3>'+title+'</h3><p>'+desc+'</p><a href="'+url+'">'+action+' <span aria-hidden="true">→</span></a></article>').join('')+'</div></section>'+
      '<section class="section-block"><div class="section-heading"><h2>'+tr('Find your year','選擇年級')+'</h2><a href="coverage.html?lang='+language()+'">'+tr('See curriculum coverage','查看課程涵蓋範圍')+' →</a></div><div class="grade-grid">'+[1,2,3,4,5,6].map(n=>'<a href="'+browseLink({p:n})+'"><span>P'+n+'</span><strong>'+year(n)+'</strong><small>'+families.filter(f=>!f.retired&&f.grade===n).length+tr(' skills available','項可用技能')+'</small></a>').join('')+'</div></section>'+
      '<section class="section-block quick-start"><div><p class="eyebrow">'+tr('READY WHEN YOU ARE','隨時可以開始')+'</p><h2>'+tr('A quick start for Primary 1','小一快速入門')+'</h2><p>'+tr('Start with a ready-made set, then make it your own.','從現成題組開始，再按需要調整。')+'</p></div><div class="preset-grid">'+[[warmUpP1,tr('Five-minute warm-up','五分鐘熱身題'),tr('3 questions · Counting and addition','3題 · 數數及加法')],[exitTicketP1,tr('Six-question exit ticket','六題離堂小測'),tr('6 questions · Numbers to 20','6題 · 二十以內的數')]].map(([ids,title,desc])=>'<article><h3>'+title+'</h3><p>'+desc+'</p><a href="'+customLink(ids,'build',1)+'">'+tr('Edit','編輯')+' →</a> <a href="'+customLink(ids,'',1)+'">'+tr('Try quiz','試做小測')+' →</a></article>').join('')+'</div></section>'+
      '<details class="sample-list"><summary>'+tr('More example quizzes','更多示例小測')+'</summary>'+[1,4,6].map(n=>'<a href="'+href(n)+'">'+year(n)+' →</a>').join('')+'</details>';
  }
  function browser(app,coverage=false) {
    shell('browse');document.body.classList.add('browse-page');
    document.title=tr(coverage?'Curriculum & resources':'Find resources',coverage?'課程及資源':'尋找資源')+' | MathQuiz';
    const p=new URLSearchParams(location.search),state={p:p.get('p')||'',strand:p.get('strand')||'',unit:p.get('unit')||'',mode:p.get('mode')||'',q:p.get('q')||''};
    const option=(v,label)=>'<option value="'+esc(v)+'">'+esc(label)+'</option>';
    app.innerHTML='<div class="page-heading"><p class="eyebrow">'+tr('THE RESOURCE LIBRARY','數學資源庫')+'</p><h1>'+tr(coverage?'Curriculum & resources':'Find resources',coverage?'課程及資源':'尋找資源')+'</h1><p class="intro">'+tr('Practice, quizzes and practical activities, organised around the Hong Kong primary curriculum.','按香港小學數學課程編排的練習、小測及實作活動。')+'</p></div>'+
    '<form id="resource-filters" class="filter-panel"><label class="search-label">'+tr('Search resources','搜尋資源')+'<input id="resource-search" name="q" type="search" placeholder="'+tr('Try fractions, money or 3M4','例如：分數、貨幣或3M4')+'" value="'+esc(state.q)+'"></label><details class="filter-options" open><summary>'+tr('Filter by year, topic and resource','按年級、課題及資源篩選')+'</summary><div class="filter-grid"><label>'+tr('Year','年級')+'<select name="p">'+option('',tr('All years','所有年級'))+[1,2,3,4,5,6].map(n=>option(n,year(n))).join('')+'</select></label><label>'+tr('Strand','範疇')+'<select name="strand">'+option('',tr('All strands','所有範疇'))+Object.entries(resourceData.strands).map(([k,v])=>option(k,loc(v))).join('')+'</select></label><label>'+tr('Unit','單元')+'<select name="unit"></select></label><label>'+tr('Resource','資源')+'<select name="mode">'+[['',tr('All resources','所有資源')],['practice',tr('Online practice','網上練習')],['quiz',tr('Quiz questions','小測題目')],['activity',tr('Teacher activities','教師活動')],['planned',tr('Planned units','計劃中的單元')]].map(([v,l])=>option(v,l)).join('')+'</select></label></div></details><div class="filter-actions"><button type="reset" class="text-button">'+tr('Clear filters','清除篩選')+'</button><span id="resource-count" role="status" aria-live="polite"></span></div></form>'+
    '<div id="resource-results"></div><aside class="coverage-note"><h2>'+tr('Resources are a starting point','資源是學習的起點')+'</h2><p>'+tr('Resource complete means every audited objective has linked material. It does not mean a pupil has mastered the unit. Practical work and teacher observation remain essential.','資源完成表示每項已審核目標均有對應材料，不代表學生已掌握單元。實際操作及教師觀察仍不可少。')+'</p><a href="planning/full-curriculum-plan.md">'+tr('Full 85-unit inventory','85個單元完整清單')+'</a> · <a href="planning/primary-mathematics.md">'+tr('Curriculum and objective map','課程及學習目標對照表')+'</a></aside>';
    const form=document.getElementById('resource-filters'),results=document.getElementById('resource-results');
    function units(){const current=state.unit;form.elements.unit.innerHTML=option('',tr('All units','所有單元'))+resourceData.units.filter(u=>(!state.p||u.grade===+state.p)&&(!state.strand||u.code[1]===state.strand)).map(u=>option(u.code,u.code+' · '+loc(u.title))).join('');form.elements.unit.value=current;if(form.elements.unit.value!==current)state.unit='';}
    function render(push=false){
      units();for(const k of ['p','strand','unit','mode'])form.elements[k].value=state[k];
      const query=state.q.toLocaleLowerCase().trim(),list=[];let resourceCount=0;
      for(const u of resourceData.units){
        if(state.p&&u.grade!==+state.p||state.strand&&u.code[1]!==state.strand||state.unit&&u.code!==state.unit)continue;
        const matchUnit=(u.code+' '+u.title.join(' ')).toLocaleLowerCase().includes(query);
        let fs=families.filter(f=>!f.retired&&f.code===u.code),as=resourceData.activities.filter(a=>a.units.includes(u.code));
        const hasResources=fs.length||as.length;
        if(state.mode==='planned'&&hasResources)continue;
        fs=fs.filter(f=>!query||matchUnit||f.label.join(' ').toLocaleLowerCase().includes(query));
        as=as.filter(a=>!query||matchUnit||a.title.join(' ').toLocaleLowerCase().includes(query));
        if(state.mode==='activity')fs=[];if(['practice','quiz'].includes(state.mode))as=[];
        if(!fs.length&&!as.length&&(hasResources||!matchUnit||['practice','quiz','activity'].includes(state.mode)))continue;
        resourceCount+=fs.length+as.length;
        const digital=fs.map(f=>{
          const entry=typeof practiceCatalogue!=='undefined'?practiceCatalogue.find(x=>x.skill===f.id||(!x.skill&&f.id==='count20a')):null;
          const practice=root()+'?'+new URLSearchParams({lang:language(),p:f.grade,view:'practice',...(f.id==='count20a'?{}:{skill:f.id})});
          const label=entry?loc(entry.label):tr('Practise: ','練習：')+loc(f.label);
          return '<article class="resource-card" data-family="'+f.id+'"><span class="badge">'+tr('Online · Quiz','網上 · 小測')+'</span><h3>'+esc(loc(f.label))+'</h3><p class="quiet">'+f.count+tr(' question variants','個題目版本')+'</p><div class="resource-actions"><a class="practice-link" href="'+practice+'">'+esc(label)+' →</a><a href="'+root()+customLink([f.id+'-0'],'build',f.grade)+'">'+tr('Add to quiz','加入小測')+' +</a></div><details data-sample="'+f.id+'"><summary>'+tr('Sample question','示例題目')+'</summary><div class="sample-question"></div></details></article>';
        }).join('');
        const activities=as.map(a=>'<article class="resource-card activity-card" data-activity="'+a.path+'"><span class="badge">'+tr('Teacher-led · Printable','教師帶領 · 可列印')+'</span><h3>'+esc(loc(a.title))+'</h3><p class="quiet">'+tr('Pupil tasks and teacher assessment criteria','學生任務及教師評估準則')+'</p><a href="'+a.path+'?lang='+language()+'">'+tr('Open activity','開啟活動')+' →</a></article>').join('');
        list.push('<details class="unit-group" '+(state.p||state.unit||query?'open ':'')+'data-unit="'+u.code+'"><summary class="unit-heading"><div><span class="eyebrow">'+year(u.grade)+' · '+u.code+'</span><h2>'+esc(loc(u.title))+'</h2></div><span class="badge '+(u.complete?'complete':'')+'">'+(u.complete?tr('Resources complete','資源完成'):hasResources?tr('Resources available · More to develop','已有資源 · 尚待擴展'):tr('Planned · Not yet available','計劃中 · 尚未提供'))+'</span></summary>'+(digital||activities?'<div class="resource-grid">'+digital+activities+'</div>':'<p class="empty-unit">'+tr('This unit is on the development plan. Try another unit with available resources.','本單元已列入開發計劃，請先選擇已有資源的單元。')+'</p>')+'<details class="unit-evidence"><summary>'+tr('Curriculum reference & coverage','課程來源及涵蓋範圍')+'</summary><p><a href="'+u.source+'">'+tr('EDB objectives and notes','教育局目標及說明')+'</a> · <a href="planning/full-curriculum-plan.md">'+tr('Objective review and resource inventory','目標審核及資源清單')+'</a></p><p>'+tr('Digital practice samples a skill. Teacher activities supply practical and oral evidence where required.','網上練習用作技能練習；需要實作及口述證據時，請配合教師活動。')+'</p></details></details>');
      }
      results.innerHTML=list.join('')||'<div class="empty-state"><h2>'+tr('No resources match these filters','找不到符合篩選的資源')+'</h2><p>'+tr('Try another word, choose all years, or clear your filters.','請試用其他字詞、選擇所有年級，或清除篩選。')+'</p></div>';
      document.getElementById('resource-count').textContent=list.length+tr(' units','個單元')+' · '+resourceCount+tr(' resources','項資源');
      if(push){const url=new URL(location.href);for(const [k,v]of Object.entries(state)){if(v)url.searchParams.set(k,v);else url.searchParams.delete(k);}history.pushState(null,'',url);}
      for(const l of ['en','zh']){const a=document.getElementById(l);if(a){const u=new URL(location.href);u.searchParams.set('lang',l);a.href=u.href;}}
      results.querySelectorAll('[data-sample]').forEach(d=>d.addEventListener('toggle',()=>{if(d.open&&!d.dataset.loaded){const f=families.find(f=>f.id===d.dataset.sample),q=f.make(0);d.querySelector('.sample-question').innerHTML='<p>'+esc(loc(q.prompt))+'</p>'+(typeof figure==='function'?figure(q.figure):'');d.dataset.loaded='1';}}));
    }
    form.onsubmit=e=>e.preventDefault();form.onchange=()=>{for(const k of ['p','strand','unit','mode'])state[k]=form.elements[k].value;render(true);};
    let timer;form.elements.q.oninput=()=>{clearTimeout(timer);timer=setTimeout(()=>{state.q=form.elements.q.value;render(true);},180);};
    form.onreset=e=>{e.preventDefault();clearTimeout(timer);Object.keys(state).forEach(k=>state[k]='');form.elements.q.value='';render(true);};
    window.addEventListener('popstate',()=>{const q=new URLSearchParams(location.search);for(const k in state)state[k]=q.get(k)||'';form.elements.q.value=state.q;render();});render();
  }
  return {shell,home,browser,esc,tr,loc,year,browseLink};
})();
