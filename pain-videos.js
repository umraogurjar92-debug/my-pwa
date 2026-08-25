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
function render(){
 const root=document.getElementById('pain-video-library');
 if(!root)return;
 root.innerHTML=`<div style="background:#eef6ff;border:1px solid #d7e8fb;border-radius:12px;padding:11px;margin-bottom:10px;font-size:12px;line-height:1.55"><strong>Resident video library</strong><br>Curated toward anatomy, sonoanatomy, fluoroscopic technique and common interventional pain procedures.</div>`+
 videos.map((v,i)=>`<a href="${v.url}" target="_blank" rel="noopener noreferrer" style="display:flex;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:12px;margin:8px 0;gap:10px;align-items:center;text-decoration:none;color:inherit;cursor:pointer"><div style="font-size:22px">🎥</div><div style="flex:1"><div style="font-weight:700;color:#1e3a5f;font-size:13px">${i+1}. ${v.title}</div><div style="font-size:11px;color:#64748b;margin-top:3px">${v.source}</div></div><span style="display:inline-flex;align-items:center;justify-content:center;background:#1e3a5f;color:#fff;border-radius:8px;padding:9px 13px;font-size:12px;font-weight:700;white-space:nowrap">Watch ↗</span></a>`).join('');
}
setTimeout(render,100);document.addEventListener('DOMContentLoaded',render);window.renderPainVideos=render;
})();