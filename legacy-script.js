const topics = {
  impetigo:{no:'01',title:'Impetigo',img:'assets/img/impetigo.webp',page:'04',desc:'عدوى سطحية شديدة الانتقال، ويُعد المظهر ذو القشور العسلية من أشهر مفاتيح التعرف عليها.',pearl:'Localized lesions غالبًا تناسبها المعالجة الموضعية، بينما الانتشار الواسع يحتاج تقييمًا للعلاج الجهازي.'},
  ecthyma:{no:'02',title:'Ecthyma',img:'assets/img/furuncle.webp',page:'07',desc:'صورة أعمق من impetigo تمتد إلى الأدمة، وتترك قرحة مغطاة بقشرة سميكة وقد تلتئم بندبة.',pearl:'وجود punched-out ulcer وشفاء مصحوب بندبة يفرّقها عن impetigo السطحية.'},
  erythrasma:{no:'03',title:'Erythrasma',img:'assets/img/page-11.webp',page:'11',desc:'بقع بنية محمرة في مناطق الثنيات، وقد تتشابه مع الفطريات لكن Wood’s lamp يكشف المفتاح التشخيصي.',pearl:'Coral-red fluorescence ينتج من porphyrins التي تصنعها Corynebacterium minutissimum.'},
  erysipelas:{no:'04',title:'Erysipelas',img:'assets/img/erysipelas.webp',page:'13',desc:'عدوى سطحية حادة ببداية مفاجئة وحدود واضحة ومرتفعة، وقد تصاحبها حرارة وأعراض عامة.',pearl:'Sharply demarcated raised border هو الفارق البصري الأهم مقارنةً بالـ cellulitis.'},
  cellulitis:{no:'05',title:'Cellulitis',img:'assets/img/cellulitis.webp',page:'14',desc:'عدوى أعمق تشمل الأدمة والدهون تحت الجلد، وتظهر باحمرار منتشر وسخونة وألم وحدود غير واضحة.',pearl:'سرعة الانتشار، hypotension، أو pain out of proportion علامات تستلزم تصعيدًا عاجلًا.'},
  folliculitis:{no:'06',title:'Folliculitis',img:'assets/img/folliculitis.webp',page:'21',desc:'حطاطات أو بثور صغيرة تتمركز حول بصيلة الشعر، وترتبط أحيانًا بالحلاقة أو الاحتكاك أو التعرق.',pearl:'وجود كل pustule حول hair shaft يساعد على تمييزها عن الطفح غير الجريبي.'},
  furuncle:{no:'07',title:'Furuncle',img:'assets/img/furuncle.webp',page:'23',desc:'عدوى عميقة لبصيلة شعر مع عقدة مؤلمة تتحول إلى تجمع صديدي وقد تفرغ تلقائيًا.',pearl:'Incision and drainage هو أساس العلاج عند وجود abscess مناسب للتفريغ.'},
  carbuncle:{no:'08',title:'Carbuncle',img:'assets/img/carbuncle.webp',page:'24',desc:'مجموعة متصلة من البصيلات المصابة تكوّن كتلة عميقة مؤلمة مع فتحات تصريف متعددة.',pearl:'Multiple draining sinuses مع أعراض عامة تميّز carbuncle عن furuncle منفرد.'},
  cat:{no:'09',title:'Cat Scratch Disease',img:'assets/img/cat-scratch.webp',page:'27',desc:'عدوى مرتبطة بخدش أو عضة القطط، تبدأ بآفة موضعية ثم تضخم بالعقد الليمفاوية القريبة.',pearl:'Papule at inoculation site ثم regional lymphadenopathy يوجهان نحو Bartonella henselae.'}
};

const topicButtons=[...document.querySelectorAll('.topic')];
const image=document.getElementById('topicImage'), no=document.getElementById('topicNo'), title=document.getElementById('topicTitle'), desc=document.getElementById('topicDesc'), pearl=document.getElementById('topicPearl'), topicPageBtn=document.querySelector('#topicShowcase [data-open-page]');
topicButtons.forEach(btn=>btn.addEventListener('click',()=>{
  topicButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const t=topics[btn.dataset.topic]; image.style.opacity=0;
  setTimeout(()=>{image.src=t.img;image.style.opacity=1},180);
  no.textContent=`TOPIC ${t.no}`;title.textContent=t.title;desc.textContent=t.desc;pearl.textContent=t.pearl;topicPageBtn.dataset.openPage=t.page;
}));
image.style.transition='opacity .25s';

const quiz=[
 {q:'أي تشخيص يناسب القشور ذات اللون العسلي حول الفم أكثر؟',o:['Bullous pemphigoid','Non-bullous impetigo','Erythrasma','Cellulitis'],a:1,e:'القشور العسلية فوق erosions سطحية هي المظهر الكلاسيكي للـ non-bullous impetigo.'},
 {q:'أي علامة تساعد على تمييز Erythrasma باستخدام Wood’s lamp؟',o:['Blue-white glow','Coral-red fluorescence','No fluorescence','Green fluorescence'],a:1,e:'Corynebacterium minutissimum تنتج porphyrins تعطي coral-red fluorescence.'},
 {q:'أي وصف يرجّح Erysipelas أكثر من Cellulitis؟',o:['Ill-defined border','Gradual onset only','Raised sharply demarcated border','Deep fluctuance'],a:2,e:'Erysipelas أكثر سطحية وتتميز غالبًا بحدود واضحة ومرتفعة وبداية أكثر حدة.'},
 {q:'ما الركيزة العلاجية الأهم في Furuncle ناضج وممتلئ بالصديد؟',o:['Topical steroid','Incision and drainage','Antifungal cream','Antihistamine only'],a:1,e:'التفريغ الجراحي هو الأساس في الـ abscess، وتُضاف المضادات وفق الشدة والعوامل المصاحبة.'},
 {q:'Cat Scratch Disease ترتبط غالبًا بأي ميكروب؟',o:['Bartonella henselae','Pseudomonas aeruginosa','Corynebacterium minutissimum','Streptococcus pneumoniae'],a:0,e:'Bartonella henselae هي المسبب الأشهر، مع papule موضعية ثم regional lymphadenopathy.'}
];
let qi=0,score=0,answered=false;
const qText=document.getElementById('quizQuestion'),qOpts=document.getElementById('quizOptions'),qExp=document.getElementById('quizExplanation'),qCount=document.getElementById('quizCount'),qBar=document.getElementById('quizBar'),next=document.getElementById('nextQuestion');
function renderQuiz(){answered=false;next.disabled=true;qExp.classList.remove('show');qExp.textContent='';const item=quiz[qi];qText.textContent=item.q;qCount.textContent=`${String(qi+1).padStart(2,'0')} / ${String(quiz.length).padStart(2,'0')}`;qBar.style.width=`${((qi+1)/quiz.length)*100}%`;qOpts.innerHTML='';item.o.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x;b.onclick=()=>answer(i,b);qOpts.appendChild(b)})}
function answer(i,b){if(answered)return;answered=true;const item=quiz[qi];[...qOpts.children].forEach((x,j)=>{x.disabled=true;if(j===item.a)x.classList.add('correct')});if(i===item.a){score++;qExp.textContent=`إجابة صحيحة — ${item.e}`}else{b.classList.add('wrong');qExp.textContent=`الإجابة الأقرب هي: ${item.o[item.a]}. ${item.e}`}qExp.classList.add('show');next.disabled=false}
next.onclick=()=>{qi++;if(qi<quiz.length)renderQuiz();else{qText.textContent=`نتيجتك ${score} من ${quiz.length}`;qOpts.innerHTML='';qExp.textContent=score>=4?'ممتاز — طريقة تفكيرك قوية جدًا. دي بالضبط نوعية التعلم اللي الموقع هيكررها كل أسبوع.':'بداية كويسة. ارجع للمقتطفات والمقارنات، وبعدها جرّب مرة ثانية.';qExp.classList.add('show');next.textContent='إعادة التحدي';next.disabled=false;next.onclick=()=>{qi=0;score=0;next.innerHTML='السؤال التالي <span>←</span>';next.onclick=defaultNext;renderQuiz()}}};
function defaultNext(){qi++;if(qi<quiz.length)renderQuiz();else{qText.textContent=`نتيجتك ${score} من ${quiz.length}`;qOpts.innerHTML='';qExp.textContent=score>=4?'ممتاز — طريقة تفكيرك قوية جدًا. دي بالضبط نوعية التعلم اللي الموقع هيكررها كل أسبوع.':'بداية كويسة. ارجع للمقتطفات والمقارنات، وبعدها جرّب مرة ثانية.';qExp.classList.add('show');next.textContent='إعادة التحدي';next.disabled=false;next.onclick=()=>{qi=0;score=0;next.innerHTML='السؤال التالي <span>←</span>';next.onclick=defaultNext;renderQuiz()}}}
next.onclick=defaultNext;renderQuiz();

const modal=document.getElementById('pageModal'),modalImg=document.getElementById('modalImage');
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-open-page]');if(!trigger)return;const p=String(trigger.dataset.openPage).padStart(2,'0');modalImg.src=`assets/img/page-${p}.webp`;modal.showModal()});
document.getElementById('closeModal').onclick=()=>modal.close();modal.onclick=e=>{if(e.target===modal)modal.close()};

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
const menu=document.getElementById('menuBtn'),nav=document.getElementById('mainNav');menu.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;document.getElementById('scrollProgress').style.width=`${scrollY/h*100}%`},{passive:true});
