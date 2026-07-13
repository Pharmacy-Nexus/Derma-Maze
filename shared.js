const DM_LANG_KEY = 'dermaMazeLang';
const translations = {
  ar: {
    'brand.sub':'Clinical Pharmacy Series','nav.chapters':'الفصول','nav.free':'تعلّم مجانًا','nav.lab':'Clinical Lab','nav.preview':'مقتطفات','nav.order':'اطلب الكتاب',
    'hero.kicker':'PHARMACOTHERAPY, MADE VISUAL','hero.title':'مش بس تحفظ المرض.<br><strong>اتعلّم تفكّر فيه.</strong>','hero.text':'موقع مرافق لكتاب <b>Derma‑Maze — Volume 1</b> يجمع المقتطفات، الـCases، أسئلة العلاج، والشرح المجاني في تجربة عربية وإنجليزية فخمة.','hero.ctaLab':'ادخل الـClinical Lab','hero.ctaChapters':'استكشف الفصول','hero.stat1':'أقسام رئيسية','hero.stat2':'تجربة ثنائية اللغة','hero.stat3':'MCQs · Cases · Rx','hero.chip1Title':'Clinical Cases','hero.chip1Sub':'فكّر قبل ما تشوف الحل','hero.chip2Title':'Treatment Challenges','hero.chip2Sub':'اختيار العلاج خطوة بخطوة','hero.scroll':'اسحب لاكتشاف الكتاب',
    'chapters.eyebrow':'BOOK UNIVERSE','chapters.title':'ستة أبواب.<br>هوية واحدة قوية.','chapters.text':'كل فصل له لونه وشخصيته، لكن يفضل جزءًا من نفس العالم البصري: كحلي داكن، تفاصيل ذهبية، صور سريرية، ومحتوى يفتح شهية القارئ من غير ما يحرق الكتاب.',
    'free.eyebrow':'FREE LEARNING ZONE','free.title':'قيمة حقيقية قبل<br>قرار الشراء.','free.text':'الموقع لا يعرض الكتاب كاملًا؛ بل يعطي الزائر جرعة تعليمية محسوبة: مقارنة سريعة، Red Flags، Case قصيرة، ثم يترك التفاصيل والجداول الكاملة للنسخة المطبوعة.','free.lessonLabel':'FREE MINI LESSON','free.lessonTitle':'Erysipelas ولا Cellulitis؟','free.lessonText':'الاثنان قد يسببان احمرارًا وسخونة وتورمًا، لكن العمق وشكل الحدود وسرعة البداية يغيّرون طريقة التفكير.','free.ery1':'سطحية','free.ery2':'حدود واضحة ومرتفعة','free.ery3':'بداية مفاجئة','free.cel1':'أعمق','free.cel2':'حدود غير واضحة','free.cel3':'تدرج في التطور','free.redTitle':'إمتى الحالة مش للصيدلية؟','free.red1':'هبوط ضغط أو سمّية جهازية','free.red2':'انتشار سريع للاحمرار','free.red3':'ألم أكبر بكثير من شكل الإصابة','free.red4':'اشتباه necrotizing infection','free.preview':'شاهد مقتطفًا من الكتاب','free.rxTitle':'العلاج مش اسم دواء وخلاص','free.rxText':'في الـClinical Lab ستجاوب عن شدة الحالة، موضع الإصابة، الحاجة لتغطية MRSA، ومتى يكون العلاج موضعيًا أو جهازيًا.','free.rxCta':'جرّب أسئلة العلاج',
    'lab.title':'صفحة معمولة<br>عشان تختبر تفكيرك.','lab.text':'اختار بين MCQs سريعة، Clinical Cases، أو Treatment Challenges. فلتر حسب الفصل، شاهد تفسير كل إجابة، وتابع نتيجتك لحظة بلحظة.','lab.f1':'أسئلة تشخيص','lab.f2':'كيسات إكلينيكية','lab.f3':'اختيارات علاجية','lab.cta':'ابدأ التحدي','lab.mockQ':'طفل لديه honey-colored crusts محدودة حول الفم. ما أنسب بداية علاجية؟','lab.mockExp':'الإصابة المحدودة تناسبها المعالجة الموضعية، بينما الانتشار الواسع يحتاج تقييمًا للعلاج الجهازي.',
    'preview.eyebrow':'REAL BOOK PREVIEW','preview.title':'مقتطفات حقيقية.<br>من غير حرق المحتوى.','preview.text':'نماذج محدودة من الصفحات والغلاف تساعد الزائر يشوف مستوى التصميم والتنظيم. في النسخة النهائية نضيف Watermark أقوى ونختار الصفحات بعناية.',
    'buy.title':'الموقع يفتح لك الباب.<br>الكتاب يكمّل الرحلة.','buy.text':'الجرعات، الجداول، الخوارزميات، الصور، الحالات والمقارنات الكاملة تظل محفوظة داخل الكتاب، بينما الموقع يبني حوله مجتمعًا تعليميًا مستمرًا.','buy.cta':'اطلب عبر واتساب','buy.lab':'جرّب الـClinical Lab','buy.note':'* رقم واتساب والسعر وبيانات الطلب تجريبية وسيتم استبدالها.','footer.disclaimer':'محتوى تعليمي للصيادلة وطلاب الصيدلة، ولا يُعد بديلًا عن التقييم الطبي أو البروتوكولات المحلية.',
    'labNav.home':'الرئيسية','labNav.practice':'التدريب','labNav.results':'النتائج','labPage.title':'اسأل نفسك.<br><strong>وفكّر كصيدلي.</strong>','labPage.text':'صفحة تدريب تجمع بين أسئلة المعلومات، الكيسات السريرية، وأسئلة اختيار العلاج. كل إجابة معها تفسير مختصر ومفتاح للتفكير.','labPage.qCount':'سؤال تدريبي','labPage.chCount':'فصول','labPage.modes':'أنماط تدريب',
    'modes.mcq':'Rapid MCQs','modes.mcqSub':'مفاهيم ومفاتيح تشخيص','modes.case':'Clinical Cases','modes.caseSub':'اقرأ الحالة واختر الأفضل','modes.treatment':'Treatment Challenges','modes.treatmentSub':'اختيار الخطوة العلاجية',
    'sidebar.score':'النتيجة','sidebar.correct':'إجابات صحيحة','sidebar.answered':'تمت الإجابة','sidebar.reset':'ابدأ من جديد','sidebar.note':'الأسئلة هنا عينات تسويقية تعليمية مستخرجة من موضوعات الكتاب، وليست بديلًا عن البروتوكولات المحلية.','practice.reasoning':'CLINICAL REASONING','practice.next':'السؤال التالي','results.title':'شوف قوتك.<br>واعرف تراجع إيه.','results.text':'الملخص يتحدث أثناء الحل، ويعرض أداءك حسب الفصل. في النسخة النهائية يمكن حفظ النتائج وإضافة تحديات أسبوعية.','labBuy.title':'الأسئلة تدربك.<br>الكتاب يبني الأساس.','labBuy.text':'ارجع للشرح الكامل والجداول العلاجية والصور والمقارنات داخل Derma‑Maze، ثم ارجع للـClinical Lab واختبر نفسك مرة أخرى.'
  },
  en: {
    'brand.sub':'Clinical Pharmacy Series','nav.chapters':'Chapters','nav.free':'Learn free','nav.lab':'Clinical Lab','nav.preview':'Previews','nav.order':'Order the book',
    'hero.kicker':'PHARMACOTHERAPY, MADE VISUAL','hero.title':'Do not just memorize it.<br><strong>Learn to reason through it.</strong>','hero.text':'A premium companion website for <b>Derma‑Maze — Volume 1</b>, combining selected previews, cases, treatment questions, and free learning in Arabic and English.','hero.ctaLab':'Enter the Clinical Lab','hero.ctaChapters':'Explore chapters','hero.stat1':'Main sections','hero.stat2':'Bilingual experience','hero.stat3':'MCQs · Cases · Rx','hero.chip1Title':'Clinical Cases','hero.chip1Sub':'Think before revealing the answer','hero.chip2Title':'Treatment Challenges','hero.chip2Sub':'Choose therapy step by step','hero.scroll':'Scroll to discover the book',
    'chapters.eyebrow':'BOOK UNIVERSE','chapters.title':'Six gateways.<br>One powerful identity.','chapters.text':'Every chapter has its own accent and character while staying inside the same premium visual world: deep navy, gold details, clinical imagery, and carefully selected content that creates curiosity without giving the book away.',
    'free.eyebrow':'FREE LEARNING ZONE','free.title':'Real value before<br>the buying decision.','free.text':'The website does not publish the full book. It gives visitors a measured educational sample: a quick comparison, red flags, a short case, then leaves the complete tables and pathways inside the printed book.','free.lessonLabel':'FREE MINI LESSON','free.lessonTitle':'Erysipelas or Cellulitis?','free.lessonText':'Both may cause redness, warmth, and swelling, but depth, border definition, and onset change the clinical reasoning.','free.ery1':'Superficial','free.ery2':'Raised, well-defined border','free.ery3':'Abrupt onset','free.cel1':'Deeper','free.cel2':'Ill-defined border','free.cel3':'Gradual progression','free.redTitle':'When is this not a pharmacy case?','free.red1':'Hypotension or systemic toxicity','free.red2':'Rapidly spreading erythema','free.red3':'Pain out of proportion','free.red4':'Possible necrotizing infection','free.preview':'Open a book preview','free.rxTitle':'Treatment is more than a drug name','free.rxText':'Inside the Clinical Lab, you will consider severity, location, MRSA coverage, and whether topical or systemic therapy is appropriate.','free.rxCta':'Try treatment questions',
    'lab.title':'A page built<br>to test your reasoning.','lab.text':'Choose rapid MCQs, clinical cases, or treatment challenges. Filter by chapter, read the explanation after every answer, and watch your score update live.','lab.f1':'Diagnosis questions','lab.f2':'Clinical cases','lab.f3':'Treatment choices','lab.cta':'Start the challenge','lab.mockQ':'A child has limited honey-colored crusts around the mouth. What is the best initial treatment?','lab.mockExp':'Localized disease is generally suitable for topical therapy, while extensive disease needs assessment for systemic treatment.',
    'preview.eyebrow':'REAL BOOK PREVIEW','preview.title':'Real pages.<br>No content giveaway.','preview.text':'A limited set of pages and covers lets visitors see the visual quality and organization. The final version can use stronger watermarks and a carefully curated selection.',
    'buy.title':'The website opens the door.<br>The book completes the journey.','buy.text':'Full dosing tables, pathways, images, cases, and comparisons stay inside the book, while the website builds an active learning experience around it.','buy.cta':'Order on WhatsApp','buy.lab':'Try the Clinical Lab','buy.note':'* WhatsApp number, price, and order details are placeholders.','footer.disclaimer':'Educational content for pharmacists and pharmacy students. It does not replace medical evaluation or local protocols.',
    'labNav.home':'Home','labNav.practice':'Practice','labNav.results':'Results','labPage.title':'Challenge yourself.<br><strong>Reason like a pharmacist.</strong>','labPage.text':'A practice page combining knowledge questions, clinical cases, and treatment selection. Every answer includes a concise explanation and a reasoning key.','labPage.qCount':'Practice questions','labPage.chCount':'Chapters','labPage.modes':'Practice modes',
    'modes.mcq':'Rapid MCQs','modes.mcqSub':'Concepts and diagnostic clues','modes.case':'Clinical Cases','modes.caseSub':'Read the case and choose best','modes.treatment':'Treatment Challenges','modes.treatmentSub':'Select the next treatment step',
    'sidebar.score':'Score','sidebar.correct':'Correct answers','sidebar.answered':'Answered','sidebar.reset':'Start again','sidebar.note':'These are educational marketing samples built from book topics. They do not replace local protocols.','practice.reasoning':'CLINICAL REASONING','practice.next':'Next question','results.title':'See your strengths.<br>Know what to review.','results.text':'The summary updates as you answer and shows performance by chapter. A future version can save results and add weekly challenges.','labBuy.title':'Questions train you.<br>The book builds the foundation.','labBuy.text':'Return to the full explanations, treatment tables, images, and comparisons in Derma‑Maze, then come back to the Clinical Lab and test yourself again.'
  }
};

function setLanguage(lang){
  const safe=lang==='en'?'en':'ar';
  localStorage.setItem(DM_LANG_KEY,safe);
  document.documentElement.lang=safe;
  document.documentElement.dir=safe==='ar'?'rtl':'ltr';
  document.body.lang=safe;
  document.body.dir=safe==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value=translations[safe][el.dataset.i18n];
    if(value!==undefined) el.textContent=value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const value=translations[safe][el.dataset.i18nHtml];
    if(value!==undefined) el.innerHTML=value;
  });
  const langBtn=document.getElementById('langBtn'); if(langBtn) langBtn.textContent=safe==='ar'?'EN':'AR';
  window.currentDMLang=safe;
  window.dispatchEvent(new CustomEvent('dm-language-change',{detail:{lang:safe}}));
}

function initShared(){
  const saved=localStorage.getItem(DM_LANG_KEY)||'ar'; setLanguage(saved);
  const langBtn=document.getElementById('langBtn'); if(langBtn) langBtn.addEventListener('click',()=>setLanguage(window.currentDMLang==='ar'?'en':'ar'));
  const menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('mainNav');
  if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
  const progress=document.getElementById('scrollProgress');
  if(progress) window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=max>0?`${scrollY/max*100}%`:'0%'});
  const modal=document.getElementById('pageModal'), modalImage=document.getElementById('modalImage'), close=document.getElementById('closeModal');
  document.querySelectorAll('.preview-trigger').forEach(btn=>btn.addEventListener('click',()=>{if(modal&&modalImage){modalImage.src=btn.dataset.preview;modal.showModal()}}));
  if(close&&modal) close.addEventListener('click',()=>modal.close());
  if(modal) modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
}

document.addEventListener('DOMContentLoaded',initShared);
