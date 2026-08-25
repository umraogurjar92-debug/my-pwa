// PainMed Pro — curated video library
(function(){
const videos=[
{title:'Lumbar Spine Ultrasound — Anatomy & Sonoanatomy',source:'Duke Anesthesiology / ASRA collection',url:'https://www.youtube.com/results?search_query=Duke+Anesthesiology+Lumbar+Spine+Ultrasound'},
{title:'Lumbar Medial Branch, Facet Joint & Nerve Root Blocks',source:'USRA Pain Medicine',url:'https://www.youtube.com/results?search_query=USRA+Lumbar+Medial+Branch+Facet+Joint+Nerve+Root+Blocks'},
{title:'Lumbar Facet Nerve Block & Intra-articular Injection',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Lumbar+Facet+Nerve+Block+Intra-articular+Injection'},
{title:'Lumbar Nerve Root / Periradicular Injection',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Lumbar+Nerve+Root+Periradicular+Injection'},
{title:'Caudal Epidural Injection',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Caudal+Epidural+Injection'},
{title:'Sacroiliac Joint Injection',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Sacroiliac+Joint+Injection'},
{title:'Cervical Medial Branch Block',source:'ASRA Pain Medicine / USRA',url:'https://www.youtube.com/results?search_query=ASRA+USRA+Cervical+Medial+Branch+Block'},
{title:'Stellate Ganglion Block',source:'Duke Anesthesiology / ASRA',url:'https://www.youtube.com/results?search_query=Duke+Anesthesiology+Stellate+Ganglion+Block'},
{title:'Celiac Plexus Block & Neurolysis',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Celiac+Plexus+Block+Neurolysis'},
{title:'Ganglion Impar Injection',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Ganglion+Impar+Injection'},
{title:'Third Occipital & Cervical Medial Branch Block',source:'NYSORA',url:'https://www.youtube.com/results?search_query=NYSORA+Third+Occipital+Cervical+Medial+Branch+Block'},
{title:'Interventional Approaches for Pain — ESI, Facet, SI & Sympathetic Blocks',source:'The Center for Medical Education',url:'https://www.youtube.com/results?search_query=Interventional+Approaches+for+Pain+ESI+Facet+SI+Stellate'},
{title:'Regional Anesthesia Crash Course — Nerve Block Principles',source:'NYSORA Education',url:'https://www.youtube.com/watch?v=uVSiFJ85EtM'}
];
function render(){const root=document.getElementById('pain-video-library');if(!root)return;root.innerHTML=`<div style="background:#eef6ff;border:1px solid #d7e8fb;border-radius:12px;padding:11px;margin-bottom:10px;font-size:12px;line-height:1.55"><strong>Resident video library</strong><br>Curated toward anatomy, sonoanatomy, fluoroscopic technique and common interventional pain procedures. Prefer society/academic sources such as ASRA, NYSORA, USRA and Duke. ASRA maintains a dedicated pain video gallery, while NYSORA lists procedure-specific videos including lumbar facet, nerve-root, caudal epidural, SI-joint, celiac plexus and ganglion impar procedures. cite not allowed here</div>`+videos.map((v,i)=>`<div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:12px;margin:8px 0;display:flex;gap:10px;align-items:center"><div style="font-size:22px">🎥</div><div style="flex:1"><div style="font-weight:700;color:#1e3a5f;font-size:13px">${i+1}. ${v.title}</div><div style="font-size:11px;color:#64748b;margin-top:3px">${v.source}</div></div><button class="resource-btn" onclick="window.open('${v.url}','_blank')">Watch ↗</button></div>`).join('');}
setTimeout(render,100);document.addEventListener('DOMContentLoaded',render);window.renderPainVideos=render;
})();