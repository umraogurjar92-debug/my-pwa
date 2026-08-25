// PainMed Pro — direct learning links inside each procedure
(function(){
  const links={
    'Medial Branch Block':[
      ['🎥 Watch: Lumbar facet / medial branch block','https://nysora.com/pain-management/spine-injections/'],
      ['📚 NYSORA: lumbar facet nerve block & intra-articular injection','https://nysora.com/pain-management/spine-injections/']
    ],
    'Facet Joint Injection':[
      ['🎥 Watch: Lumbar facet injection','https://nysora.com/pain-management/spine-injections/'],
      ['📚 NYSORA spine injection teaching','https://nysora.com/pain-management/spine-injections/']
    ],
    'Radiofrequency Ablation':[
      ['🎥 Watch: Knee/genicular RFA teaching','https://asra.com/guidelines-articles/original-articles/video-gallery'],
      ['📚 ASRA Pain Medicine video gallery','https://asra.com/guidelines-articles/original-articles/video-gallery']
    ],
    'Sacroiliac Joint Injection':[
      ['🎥 Watch: Ultrasound-guided SI joint injection','https://nysora.com/pain-management/spine-injections/'],
      ['📚 NYSORA spine injection teaching','https://nysora.com/pain-management/spine-injections/']
    ],
    'Genicular Nerve Block':[
      ['🎥 Watch: Genicular nerve block','https://asra.com/guidelines-articles/how-i-do-it/by-publication-date'],
      ['📚 ASRA: genicular nerve block teaching','https://asra.com/guidelines-articles/how-i-do-it/by-publication-date']
    ],
    'Genicular Nerve RFA':[
      ['🎥 Watch: Knee RFA','https://asra.com/guidelines-articles/original-articles/video-gallery'],
      ['📚 ASRA Pain Medicine video gallery','https://asra.com/guidelines-articles/original-articles/video-gallery']
    ],
    'Stellate Ganglion Block':[
      ['🎥 Watch: Stellate ganglion block','https://asra.com/guidelines-articles/original-articles/video-gallery'],
      ['📚 ASRA Pain Medicine video gallery','https://asra.com/guidelines-articles/original-articles/video-gallery']
    ],
    'Celiac Plexus Block':[
      ['🎥 Watch: Celiac plexus block','https://asra.com/news-publications/asra-newsletter/newsletter-item/asra-news/2023/02/01/how-i-do-it-celiac-plexus-block'],
      ['📚 ASRA: How I Do It — Celiac Plexus Block','https://asra.com/news-publications/asra-newsletter/newsletter-item/asra-news/2023/02/01/how-i-do-it-celiac-plexus-block']
    ],
    'Ganglion Impar Block':[
      ['🎥 Watch: Ganglion impar injection','https://nysora.com/regional-anesthesia/topics/educational-tools/videos/page/2/'],
      ['📚 NYSORA procedure video library','https://nysora.com/regional-anesthesia/topics/educational-tools/videos/page/2/']
    ]
  };
  function add(){
    const root=document.getElementById('theory-content'); if(!root)return;
    Object.keys(links).forEach(key=>{
      const card=[...root.querySelectorAll('details.theory-card')].find(c=>c.querySelector('summary')?.textContent.toLowerCase().includes(key.toLowerCase()));
      if(!card||card.querySelector('.procedure-learning-links'))return;
      const box=document.createElement('div'); box.className='procedure-learning-links';
      box.innerHTML='<h4>🔗 Further learning</h4>'+links[key].map(x=>`<a class="procedure-link" href="${x[1]}" target="_blank" rel="noopener noreferrer">${x[0]} ↗</a>`).join('');
      const enhanced=card.querySelector('.proc-enhance');
      if(enhanced) enhanced.insertAdjacentElement('afterend',box); else card.appendChild(box);
    });
    if(!document.getElementById('procedure-links-css')){
      document.head.insertAdjacentHTML('beforeend',`<style id="procedure-links-css">.procedure-learning-links{margin:12px 0;padding:11px 12px;background:#f8fafc;border:1px solid #dbe5ef;border-radius:10px}.procedure-learning-links h4{margin:0 0 8px!important}.procedure-link{display:block;margin:6px 0;padding:8px 10px;background:#eef6ff;border-radius:8px;color:#2563eb;text-decoration:none;font-size:12px;font-weight:600}.procedure-link:hover{text-decoration:underline}</style>`);
    }
  }
  const obs=new MutationObserver(add); obs.observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',add); setTimeout(add,500);setTimeout(add,1500);setTimeout(add,3000);
})();
