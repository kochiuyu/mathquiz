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
    if(!header.querySelector('.site-nav') && !pupil)header.insertAdjacentHTML('beforeend','<nav class="site-nav" aria-label="'+tr('Main navigation','主導覽')+'">'+[['home',root()+'?lang='+language(),tr('Home','首頁')],['levels',root()+'skill-levels.html?lang='+language(),tr('Practise by level','按級別練習')],['browse',browseLink(),tr('Find resources','尋找資源')],['build',root()+'?v=3&lang='+language()+'&p=1&items=&view=build',tr('Create a quiz','建立小測')]].map(([key,url,label])=>'<a '+(active===key?'aria-current="page" ':'')+'href="'+url+'">'+label+'</a>').join('')+'</nav>');
    const nav=header.querySelector('nav:not(.site-nav)');if(nav)nav.classList.add('language-nav');
    const main=document.querySelector('main');
    if(main){main.id=main.id||'main-content';main.tabIndex=-1;if(!document.querySelector('.skip-link'))header.insertAdjacentHTML('beforebegin','<a class="skip-link" href="#'+main.id+'">'+tr('Skip to content','跳至內容')+'</a>');}
    if(!document.querySelector('.site-footer'))document.body.insertAdjacentHTML('beforeend','<footer class="site-footer screen-only"><span>MathQuiz · '+tr('Learn a little. Understand more.','每天練習，逐步理解。')+'</span><a href="'+root()+'coverage.html?lang='+language()+'">'+tr('Curriculum & resources','課程及資源')+'</a><span>'+tr('No account needed','毋須帳戶')+'</span></footer>');
    for(const l of ['en','zh']){const a=header.querySelector('#'+l);if(a){const u=new URL(location.href);u.searchParams.set('lang',l);a.href=u.href;a.lang=l==='zh'?'zh-HK':'en';a.setAttribute('aria-current',l===language()?'true':'false');}}
  }
  function home(app) {
    document.body.classList.add('home-page');shell('home');
    const create='?v=3&lang='+language()+'&p=1&items=&view=build';
    app.innerHTML='<section class="hero"><div><p class="eyebrow">'+tr('FOR CURIOUS MINDS · PRIMARY 1–6','讓好奇心帶路 · 小一至小六')+'</p><h1>'+tr('Small steps.<br>Stronger maths.','小小練習，<br>學懂更多數學。')+'</h1><p class="intro">'+tr('Find the right practice, build a quiz, or bring a hands-on activity to your classroom.','尋找合適練習、建立小測，或把實作活動帶進課室。')+'</p><div class="hero-actions"><a class="button" href="'+'skill-levels.html?lang='+language()+'">'+tr('Start practising','開始練習')+' <span aria-hidden="true">↗</span></a><a class="button secondary" href="'+create+'">'+tr('Create a quiz','建立小測')+'</a></div><p class="quiet">'+tr('English & 繁體中文 · Free to use · No sign-in','English 及繁體中文 · 免費使用 · 毋須登入')+'</p></div><div class="math-art" aria-hidden="true"><span class="art-label">'+tr('ROOM TO THINK','思考的空間')+'</span><div class="art-fraction"><span>1</span><span>2</span></div><div class="art-dots">'+Array.from({length:6},()=>'<i></i>').join('')+'</div><div class="art-sum">8 + 4 <span>= 12</span></div><div class="art-triangle"></div><span class="art-caption">'+tr('Count. Explore. Discover.','數一數 · 試一試 · 想一想')+'</span></div></section>'+
      '<section class="section-block"><div class="section-heading"><div><p class="eyebrow">'+tr('YOUR NEXT STEP','下一步')+'</p><h2>'+tr('What would you like to do?','今天想做甚麼？')+'</h2></div></div><div class="intent-grid home-actions">'+[
        ['01',tr('Practise a skill','練習一項技能'),tr('Short practice with hints, another try and worked answers.','短篇練習，配合提示、重試及解題步驟。'),'skill-levels.html?lang='+language(),tr('Find practice','尋找練習')],
        ['02',tr('Make it your quiz','建立你的專屬小測'),tr('Choose questions, review every item, then share or print.','選擇題目、逐題預覽，再分享或列印。'),create,tr('Build a quiz','建立小測')],
        ['03',tr('Learn by doing','動手學習'),tr('Printable tasks for measuring, making, talking and investigating.','用量度、製作、討論及探究活動學習數學。'),browseLink({mode:'activity'}),tr('Teacher activities','教師活動')]
      ].map(([n,title,desc,url,action])=>'<article class="intent-card"><span class="card-number">'+n+'</span><h3>'+title+'</h3><p>'+desc+'</p><a href="'+url+'">'+action+' <span aria-hidden="true">→</span></a></article>').join('')+'</div></section>'+
      '<section class="section-block home-years"><div class="section-heading"><h2>'+tr('Find your year','選擇年級')+'</h2><a href="coverage.html?lang='+language()+'">'+tr('See curriculum coverage','查看課程涵蓋範圍')+' →</a></div><div class="grade-grid">'+[1,2,3,4,5,6].map(n=>'<a href="'+browseLink({p:n,mode:'levels'})+'"><span>P'+n+'</span><strong>'+year(n)+'</strong><small>'+MathQuizCatalogue.summary(n).total+tr(' practice types','種練習類型')+'</small></a>').join('')+'</div></section>'+
      '<section class="section-block quick-start"><div><p class="eyebrow">'+tr('READY WHEN YOU ARE','隨時可以開始')+'</p><h2>'+tr('A quick start for Primary 1','小一快速入門')+'</h2><p>'+tr('Start with a ready-made set, then make it your own.','從現成題組開始，再按需要調整。')+'</p></div><div class="preset-grid">'+[[warmUpP1,tr('Five-minute warm-up','五分鐘熱身題'),tr('3 questions · Counting and addition','3題 · 數數及加法')],[exitTicketP1,tr('Six-question exit ticket','六題離堂小測'),tr('6 questions · Numbers to 20','6題 · 二十以內的數')]].map(([ids,title,desc])=>'<article><h3>'+title+'</h3><p>'+desc+'</p><a href="'+customLink(ids,'build',1)+'">'+tr('Edit','編輯')+' →</a> <a href="'+customLink(ids,'',1)+'">'+tr('Try quiz','試做小測')+' →</a></article>').join('')+'</div></section>'+
      '<section class="section-block example-entry"><div class="section-heading"><div><p class="eyebrow">'+tr('READY-MADE FOR YOU','現成題組')+'</p><h2>'+tr('Example quizzes for every year','各年級示例小測')+'</h2></div><a href="examples.html?lang='+language()+'">'+tr('Browse all 21 quizzes','瀏覽全部21份小測')+' →</a></div><p>'+tr('18 six-question topic quizzes, plus the three original mini quizzes. Try, edit or print a set.','18份六題主題小測，加上原有的3份迷你小測。可試做、編輯或列印題組。')+'</p><div class="example-grade-links">'+[1,2,3,4,5,6].map(n=>'<a href="examples.html?lang='+language()+'&p='+n+'"><span>P'+n+'</span><strong>'+year(n)+'</strong><small>'+tr('See example quizzes','查看示例小測')+'</small></a>').join('')+'</div></section>';
    app.querySelector('.hero')?.insertAdjacentHTML('afterend',levelsEntry());
    const years=app.querySelector('.home-years');if(years){app.querySelector('.hero').after(years);years.insertAdjacentHTML('beforeend','<p class="catalogue-scope">'+MathQuizCatalogue.summary().core+tr(' curriculum-linked + ','項課程相關練習 + ')+MathQuizCatalogue.summary().tsa+tr(' HKEAA TSA-informed practice types.','項考評局TSA參考練習類型。')+'</p>');}
  }
  function levelsEntry(grade=''){
    const query=new URLSearchParams({lang:language(),...([1,2,3,4,5,6].includes(+grade)?{p:grade}:{})});
    return '<section class="levels-entry"><div><p class="eyebrow">'+tr('NEW WAYS TO PRACTISE','多種練習方式')+'</p><h2>'+tr('One skill. Three ways to grow.','同一技能，三種學習方式。')+'</h2><p>'+tr('Easy with guidance · Normal application · Difficult reasoning','容易：有引導 · 一般：應用 · 較難：推理')+'</p><small>'+tr(MathQuizCatalogue.summary().total+' practice types: '+MathQuizCatalogue.summary().core+' curriculum-linked + '+MathQuizCatalogue.summary().tsa+' TSA-informed.',MathQuizCatalogue.summary().total+'種練習：'+MathQuizCatalogue.summary().core+'項課程相關 + '+MathQuizCatalogue.summary().tsa+'項TSA參考。')+'</small></div><a class="button" href="skill-levels.html?'+query+'">'+tr('Choose a skill and level','選擇技能及級別')+' →</a></section>';
  }
  function pilotLink(unit='1N1'){const hasSkill=families.some(f=>!f.retired&&f.grade===1&&f.code===unit);return '<p class="p1-level-pilot"><a href="'+(hasSkill?'p1-skill-levels.html':'p1-levels.html')+'?lang='+language()+'&unit='+unit+'">'+(hasSkill?tr('P1 skills: Easy / Normal / Difficult for each skill','小一技能：每項均有容易／一般／較難'):tr('Unit exploration and observation activities','單元探究及觀察活動'))+' →</a></p>';}
  function browser(app,coverage=false) {
    return MathQuizResources.render(app,coverage,{shell,language,tr,loc,esc,year,root,pilotLink});
  }
  return {shell,home,browser,esc,tr,loc,year,browseLink};
})();


