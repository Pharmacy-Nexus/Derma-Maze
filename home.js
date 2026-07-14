const chapterData={
  ar:[
    {n:'01',title:'Introduction to Dermatology',tag:'FOUNDATION',desc:'بداية الرحلة: تركيب الجلد ووظائفه وطبقات الـepidermis والـdermis قبل الدخول في الأمراض.',topics:['Skin layers','Epidermis','Dermis'],img:'assets/intro-01.webp',accent:'#4aa9d8'},
    {n:'02',title:'Bacterial Skin Infections',tag:'BACTERIAL',desc:'من impetigo السطحي إلى cellulitis والـred flags، مع الجداول العلاجية والمقارنات.',topics:['Impetigo','Cellulitis','Folliculitis'],img:'assets/bacterial-01.webp',accent:'#f4bd22',url:'bacterial.html'},
    {n:'03',title:'Fungal Infections',tag:'FUNGAL',desc:'Tinea بأنواعها، candidiasis، pityriasis versicolor، onychomycosis، والعلاج الموضعي والجهازي.',topics:['Tinea pedis','Tinea cruris','Onychomycosis'],img:'assets/fungal-01.webp',accent:'#6ebd43',url:'fungal.html'},
    {n:'04',title:'Viral Skin Diseases',tag:'VIRAL',desc:'HSV وVZV وHPV وmolluscum وHFMD والـviral exanthems بصور ومفاتيح تمييز.',topics:['HSV','Warts','HFMD'],img:'assets/viral-01.webp',accent:'#b052a0',url:'viral.html'},
    {n:'05',title:'Parasitic Infestation',tag:'PARASITIC',desc:'Scabies وpediculosis وleishmaniasis وCLM، مع الوقاية والعلاج ومنع إعادة العدوى.',topics:['Scabies','Pediculosis','Leishmaniasis'],img:'assets/parasitic-01.webp',accent:'#349ad5',url:'parasitic.html'},
    {n:'06',title:'Mycobacterial Skin Diseases',tag:'MYCOBACTERIAL',desc:'Leprosy وcutaneous TB ومفاهيم الـacid-fast bacilli والمناعة الخلوية والعلاج متعدد الأدوية.',topics:['Leprosy','Cutaneous TB','NTM'],img:'assets/myco-01.webp',accent:'#d36a22'}
  ],
  en:[
    {n:'01',title:'Introduction to Dermatology',tag:'FOUNDATION',desc:'The starting point: skin structure, functions, epidermal layers, and dermal organization before disease-focused chapters.',topics:['Skin layers','Epidermis','Dermis'],img:'assets/intro-01.webp',accent:'#4aa9d8'},
    {n:'02',title:'Bacterial Skin Infections',tag:'BACTERIAL',desc:'From superficial impetigo to cellulitis and red flags, supported by treatment tables and clear comparisons.',topics:['Impetigo','Cellulitis','Folliculitis'],img:'assets/bacterial-01.webp',accent:'#f4bd22',url:'bacterial.html'},
    {n:'03',title:'Fungal Infections',tag:'FUNGAL',desc:'Clinical forms of tinea, candidiasis, pityriasis versicolor, onychomycosis, and topical versus systemic therapy.',topics:['Tinea pedis','Tinea cruris','Onychomycosis'],img:'assets/fungal-01.webp',accent:'#6ebd43',url:'fungal.html'},
    {n:'04',title:'Viral Skin Diseases',tag:'VIRAL',desc:'HSV, VZV, HPV, molluscum, HFMD, and viral exanthems presented with visual diagnostic clues.',topics:['HSV','Warts','HFMD'],img:'assets/viral-01.webp',accent:'#b052a0',url:'viral.html'},
    {n:'05',title:'Parasitic Infestation',tag:'PARASITIC',desc:'Scabies, pediculosis, leishmaniasis, and CLM with treatment, prevention, and reinfection control.',topics:['Scabies','Pediculosis','Leishmaniasis'],img:'assets/parasitic-01.webp',accent:'#349ad5',url:'parasitic.html'},
    {n:'06',title:'Mycobacterial Skin Diseases',tag:'MYCOBACTERIAL',desc:'Leprosy, cutaneous TB, acid-fast biology, cell-mediated immunity, and multidrug treatment principles.',topics:['Leprosy','Cutaneous TB','NTM'],img:'assets/myco-01.webp',accent:'#d36a22'}
  ]
};
function renderChapters(lang=window.currentDMLang||'ar'){
  const grid=document.getElementById('chapterCards'); if(!grid)return;
  const practiceCta=lang==='ar'?'اختبر نفسك في هذا الفصل':'Practice this chapter';
  const openCta=lang==='ar'?'افتح صفحة الفصل':'Open chapter page';
  grid.innerHTML=chapterData[lang].map(c=>`<article class="chapter-premium-card reveal visible" style="--accent:${c.accent}"><div class="chapter-image"><img src="${c.img}" alt="${c.title}"><span class="chapter-tag">${c.tag}</span><b class="chapter-number">${c.n}</b></div><div class="chapter-content"><h3>${c.title}</h3><p>${c.desc}</p><div class="topic-pills">${c.topics.map(t=>`<span>${t}</span>`).join('')}</div><a class="chapter-link" href="${c.url||`clinical-lab.html?chapter=${c.tag.toLowerCase()}`}"><span>${c.url?openCta:practiceCta}</span><b>↗</b></a></div></article>`).join('');
}
document.addEventListener('DOMContentLoaded',()=>renderChapters(window.currentDMLang));
window.addEventListener('dm-language-change',e=>renderChapters(e.detail.lang));
