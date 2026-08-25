// PainMed Pro — detailed Epidural Steroid Injection teaching enhancement
// Inserts approach-specific theory, anatomy, sonoanatomy and drug-preparation teaching
// directly inside the existing "1. Epidural Steroid Injection" theory card.
(function(){
  const IMAGE_INTERLAMINAR='https://i0.wp.com/musculoskeletalkey.com/wp-content/uploads/2019/01/f19-01-9780323401531.jpg?w=960';
  const IMAGE_TF='https://www.e-arm.org/upload/thumbnails/arm-35-833-g005.jpg';
  const IMAGE_CAUSAL='https://www.nysora.com/wp-content/uploads/2019/01/40x39.jpg';
  const IMAGE_SONO='https://aneskey.com/wp-content/uploads/2017/01/image01220.jpeg';

  const block=`
  <div class="esi-enhancement" style="margin-top:14px">
    <style>
      .esi-section{background:#f8fafc;border:1px solid #dbe5ef;border-radius:13px;padding:13px;margin:12px 0}
      .esi-section h4{margin:13px 0 7px;color:#1e3a5f;font-size:13px}
      .esi-section p,.esi-section li{font-size:12.5px;line-height:1.65;color:#475569}
      .esi-section ul{padding-left:19px;margin:6px 0}
      .esi-img{width:100%;max-height:300px;object-fit:contain;background:#fff;border:1px solid #dbe5ef;border-radius:10px;margin:9px 0 4px;display:block}
      .esi-caption{font-size:10px;line-height:1.45;color:#64748b;margin-bottom:9px}
      .esi-caption a{color:#2563eb;text-decoration:none}
      .esi-grid{display:grid;grid-template-columns:1fr;gap:8px}
      .esi-box{background:#fff;border:1px solid #e2e8f0;border-radius:9px;padding:10px}
      .esi-warn{background:#fff7ed;border-left:4px solid #f59e0b;padding:10px;border-radius:8px;font-size:12px;line-height:1.55;margin-top:9px}
      .esi-safe{background:#eef6ff;border-left:4px solid #4a90c2;padding:10px;border-radius:8px;font-size:12px;line-height:1.55;margin-top:9px}
    </style>

    <div class="esi-section">
      <h4>🎯 Choosing the approach</h4>
      <div class="esi-grid">
        <div class="esi-box"><strong>Interlaminar ESI</strong><br>Midline or paramedian access through an interlaminar window. Gives broader epidural spread and is useful when pathology is multilevel or a broader posterior epidural distribution is desired.</div>
        <div class="esi-box"><strong>Transforaminal ESI (TFESI)</strong><br>Accesses the neural foramen to place medication closer to a selected nerve root. It is more target-specific but has important vascular/neurological safety considerations.</div>
        <div class="esi-box"><strong>Caudal ESI</strong><br>Accesses the epidural space through the sacral hiatus. Useful when lumbar access is difficult, including some patients with prior surgery or altered lumbar anatomy.</div>
      </div>
      <div class="esi-safe"><strong>Teaching point:</strong> Approach selection should follow the clinical target, imaging, anatomy, prior surgery and risk profile—not simply operator preference.</div>
    </div>

    <div class="esi-section">
      <h4>1️⃣ Interlaminar approach — anatomy & fluoroscopy</h4>
      <img class="esi-img" src="${IMAGE_INTERLAMINAR}" alt="Lumbar interlaminar epidural injection fluoroscopic and anatomical trajectory">
      <div class="esi-caption">Interlaminar trajectory and L5–S1 anatomy. <a href="https://musculoskeletalkey.com/lumbar-interlaminar-epidural-steroid-injection-paramedian-approach/" target="_blank" rel="noopener noreferrer">Source / further reading</a></div>
      <ul>
        <li>Position the patient prone and identify the intended lumbar interspace with fluoroscopy.</li>
        <li>Use AP/oblique views to define the interlaminar window and lateral or appropriate depth view to assess needle depth.</li>
        <li>The needle passes through skin/subcutaneous tissue and the relevant posterior elements/ligamentous tissues toward the ligamentum flavum; loss of resistance is used as an adjunct, not as the sole confirmation.</li>
        <li>Before therapeutic injection, confirm epidural location and appropriate contrast pattern with image guidance according to the procedure and current guidance.</li>
      </ul>
      <div class="esi-warn"><strong>Do not teach this as a blind technique:</strong> fluoroscopic guidance is recommended for lumbar epidural injections; contrast assessment helps identify unintended intravascular, intrathecal, intradiscal or other non-epidural spread.</div>
    </div>

    <div class="esi-section">
      <h4>2️⃣ Transforaminal approach — target & safety</h4>
      <img class="esi-img" src="${IMAGE_TF}" alt="Lumbar transforaminal epidural injection fluoroscopic approach">
      <div class="esi-caption">Fluoroscopic transforaminal approaches and needle trajectories. <a href="https://www.e-arm.org/journal/view.php?number=75" target="_blank" rel="noopener noreferrer">Source / further reading</a></div>
      <ul>
        <li>Review axial MRI/CT before the procedure to understand the foramen, exiting nerve root, disc, pedicle and vascular risk.</li>
        <li>Use AP/oblique and depth views to define the target; the exact trajectory varies with level and anatomy.</li>
        <li>Inject contrast under appropriate real-time fluoroscopic assessment before steroid administration. A vascular pattern is a stop signal requiring reassessment/repositioning.</li>
        <li>For cervical TFESI, current multisociety safety guidance recommends a non-particulate steroid. Lumbar TFESI steroid choice should also follow current approach-specific guidance and local protocol.</li>
      </ul>
      <div class="esi-safe"><strong>Key concept:</strong> the transforaminal approach is more target-specific, but vascular injection can have catastrophic neurological consequences. Do not treat it as simply a more accurate interlaminar injection.</div>
    </div>

    <div class="esi-section">
      <h4>3️⃣ Caudal approach — sacral hiatus</h4>
      <img class="esi-img" src="${IMAGE_CAUSAL}" alt="Ultrasound anatomy of sacral hiatus for caudal epidural access">
      <div class="esi-caption">Ultrasound view of the sacral hiatus, sacrococcygeal ligament and needle. <a href="https://nysora.com/regional-anesthesia/techniques/spinal-sonography-and-applications-of-ultrasound-for-central-neuraxial-blocks/" target="_blank" rel="noopener noreferrer">NYSORA source</a></div>
      <ul>
        <li>Identify the sacral cornua and sacral hiatus; ultrasound can be useful for pre-procedure identification and needle guidance.</li>
        <li>Fluoroscopy with contrast remains valuable for confirming epidural placement and spread and for detecting unintended vascular injection.</li>
        <li>Be aware of anatomic variation and the variable position of the dural sac.</li>
      </ul>
    </div>

    <div class="esi-section">
      <h4>🦴 Lumbar anatomy you should know before the needle moves</h4>
      <ul>
        <li>Spinous process and interspinous/interlaminar window</li>
        <li>Lamina and inferior/superior articular processes</li>
        <li>Ligamentum flavum</li>
        <li>Dorsal epidural space and epidural fat</li>
        <li>Dural sac/thecal sac and cauda equina</li>
        <li>Neural foramen and exiting nerve root</li>
        <li>Pedicle, transverse process and intervertebral disc</li>
        <li>Epidural venous plexus and relevant segmental/radicular vessels</li>
      </ul>
    </div>

    <div class="esi-section">
      <h4>🖥️ Sonoanatomy — what ultrasound can and cannot do</h4>
      <img class="esi-img" src="${IMAGE_SONO}" alt="Lumbar spine ultrasound sonoanatomy showing lamina ligamentum flavum epidural space and intrathecal space">
      <div class="esi-caption">Paramedian lumbar sonoanatomy showing lamina, ligamentum flavum, epidural space and posterior/anterior complexes. <a href="https://aneskey.com/spinal-sonography-and-considerations-for-ultrasound-guided-central-neuraxial-blockade/" target="_blank" rel="noopener noreferrer">Source / further reading</a></div>
      <ul>
        <li><strong>Paramedian sagittal view:</strong> useful for identifying laminae, interlaminar windows and estimating depth.</li>
        <li><strong>Transverse view:</strong> helps identify the midline and posterior elements and can assist with level/trajectory planning.</li>
        <li>Ultrasound can estimate depth and reveal abnormal superficial anatomy, but bony acoustic shadowing limits direct visualization of lumbar foraminal structures and injected contrast.</li>
        <li>For lumbar interlaminar/transforaminal ESIs, ultrasound should generally be considered an adjunct rather than a replacement for fluoroscopic confirmation.</li>
      </ul>
    </div>

    <div class="esi-section">
      <h4>💉 Drugs & preparation — ESI</h4>
      <div class="esi-grid">
        <div class="esi-box"><strong>Local anaesthetic</strong><br>Use a preservative-free product when required by the intended neuraxial/epidural route. Convert concentration to mg/mL before calculating total dose.</div>
        <div class="esi-box"><strong>Dexamethasone</strong><br>Non-particulate corticosteroid commonly used for epidural procedures. Verify the exact vial concentration and calculate the dose from the product label rather than assuming all preparations are identical.</div>
        <div class="esi-box"><strong>Contrast</strong><br>Use an appropriate non-ionic iodinated contrast product according to local protocol. Use the minimum amount needed for adequate confirmation and assess the pattern before injecting therapeutic medication.</div>
      </div>
      <div class="esi-warn"><strong>Preparation rule:</strong> Do not copy a fixed “cocktail” into practice. Drug concentration, preservative status, route, total volume, steroid selection and maximum dose must be checked against the exact product label and current local/specialty guidance.</div>
    </div>

    <div class="esi-section">
      <h4>⚠️ ESI safety sequence — resident mental model</h4>
      <ol style="padding-left:20px;margin:6px 0">
        <li>Confirm indication and imaging concordance.</li>
        <li>Select the safest appropriate approach.</li>
        <li>Review anticoagulation, infection, allergy and relevant comorbidities.</li>
        <li>Plan the fluoroscopic views and identify the anatomy before needle advancement.</li>
        <li>Confirm needle position and contrast pattern before therapeutic injection.</li>
        <li>Stop and reassess if contrast suggests vascular, intrathecal, intradiscal or other unintended spread.</li>
        <li>Document approach, level, imaging, contrast, drug, concentration, volume, total dose and complications.</li>
      </ol>
    </div>

    <div class="esi-section">
      <h4>📚 Evidence & further reading</h4>
      <ul>
        <li><a href="https://asra.com/docs/default-source/asra-family-documents/hot-topics/hot-topics-asra-appd/epidural-steroid-injections.pdf" target="_blank" rel="noopener noreferrer">ASRA — Epidural Steroid Injections</a></li>
        <li><a href="https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2022/05/23/asra-pain-medicine-recommendations-for-interventional-pain-procedures-during-contrast-shortage" target="_blank" rel="noopener noreferrer">ASRA — Contrast and spine procedure safety</a></li>
        <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13331338/" target="_blank" rel="noopener noreferrer">Recent review — lumbar ESI approaches</a></li>
      </ul>
    </div>
  </div>`;

  function enhance(){
    const root=document.getElementById('theory-content');
    if(!root || root.querySelector('.esi-enhancement')) return;
    const cards=[...root.querySelectorAll('details.theory-card')];
    const card=cards.find(x=>x.querySelector('summary')?.textContent.includes('Epidural Steroid Injection'));
    if(!card) return;
    const complications=[...card.querySelectorAll('h4')].find(h=>h.textContent.trim()==='Complications');
    const holder=document.createElement('div'); holder.innerHTML=block;
    const node=holder.firstElementChild;
    if(complications) card.insertBefore(node, complications); else card.appendChild(node);
  }
  const observer=new MutationObserver(enhance);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',enhance);
  setTimeout(enhance,300); setTimeout(enhance,1000); setTimeout(enhance,2500);
})();
