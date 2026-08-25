// PainMed Pro — procedure-specific drug cards
// Educational reference only. Verify current product label, local protocol and specialty guidance.
// v1.3 — ESI approach, anatomy and sonoanatomy teaching integrated into the ESI procedure card.
(function(){
  const cards = {
    'Epidural Steroid Injection': `
      <div class="esi-mini-section">
        <div class="esi-mini-title">🎯 Approach selection</div>
        <div class="esi-mini-grid">
          <div class="esi-mini-box"><strong>Interlaminar</strong><br>Accesses the posterior epidural space between adjacent laminae. Useful when broader epidural spread or multilevel coverage is desired.</div>
          <div class="esi-mini-box"><strong>Transforaminal</strong><br>Accesses the neural foramen to deliver medication closer to a selected nerve root. More target-specific, but vascular/neurological risk is especially important.</div>
          <div class="esi-mini-box"><strong>Caudal</strong><br>Enters through the sacral hiatus. Useful when lumbar access is difficult, including some patients with previous surgery or altered anatomy.</div>
        </div>
        <div class="esi-mini-safe"><strong>Resident rule:</strong> Choose the approach from the clinical target, MRI/CT findings, anatomy, previous surgery and risk profile—not simply from operator preference.</div>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">1️⃣ Interlaminar approach — anatomy & fluoroscopy</div>
        <img class="esi-mini-img" src="https://i0.wp.com/musculoskeletalkey.com/wp-content/uploads/2019/01/f19-01-9780323401531.jpg?w=960" alt="Lumbar interlaminar epidural injection trajectory and anatomy">
        <div class="esi-mini-caption">Interlaminar L5–S1 trajectory and anatomical relationship. <a href="https://musculoskeletalkey.com/lumbar-interlaminar-epidural-steroid-injection-paramedian-approach/" target="_blank" rel="noopener noreferrer">Source / further reading</a></div>
        <ul>
          <li>Prone positioning with the lumbar spine appropriately aligned for the selected interspace.</li>
          <li>Use AP/oblique fluoroscopic views to identify the interlaminar window and lateral or appropriate depth imaging to assess needle depth.</li>
          <li>The needle is directed toward the interlaminar space; loss of resistance is an adjunct and should not replace image-based confirmation.</li>
          <li>After appropriate needle placement, contrast is used according to current practice to confirm epidural location and assess spread before therapeutic injection.</li>
        </ul>
        <div class="esi-mini-warning"><strong>Key safety point:</strong> unintended intravascular, intrathecal, intradiscal or other non-epidural spread must be considered before injecting the therapeutic drug.</div>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">2️⃣ Transforaminal approach — target & vascular safety</div>
        <img class="esi-mini-img" src="https://www.e-arm.org/upload/thumbnails/arm-35-833-g005.jpg" alt="Lumbar transforaminal epidural injection fluoroscopic trajectories">
        <div class="esi-mini-caption">Fluoroscopic transforaminal trajectories including Kambin's triangle/subpedicular approaches. <a href="https://www.e-arm.org/journal/view.php?number=75" target="_blank" rel="noopener noreferrer">Source / further reading</a></div>
        <ul>
          <li>Review axial MRI/CT to understand the exiting nerve root, foramen, pedicle, disc and vascular anatomy before needle advancement.</li>
          <li>Use appropriate AP/oblique and depth views; the exact target varies with spinal level and anatomy.</li>
          <li>Contrast should be assessed under appropriate real-time fluoroscopic conditions before steroid administration. A vascular pattern is a stop signal requiring reassessment/repositioning.</li>
          <li>For cervical TFESI, current multisociety guidance recommends a non-particulate steroid. Lumbar TFESI steroid selection should follow current approach-specific guidance and local protocol.</li>
        </ul>
        <div class="esi-mini-safe"><strong>Exam pearl:</strong> TFESI is more target-specific than interlaminar injection, but vascular injection can cause catastrophic neurological injury. Target specificity does not mean lower procedural risk.</div>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">3️⃣ Caudal approach — sacral hiatus</div>
        <img class="esi-mini-img" src="https://www.nysora.com/wp-content/uploads/2019/01/40x39.jpg" alt="Ultrasound-guided caudal epidural sacral hiatus anatomy">
        <div class="esi-mini-caption">Ultrasound identification of sacrum, sacrococcygeal ligament and sacral hiatus. <a href="https://nysora.com/regional-anesthesia/techniques/spinal-sonography-and-applications-of-ultrasound-for-central-neuraxial-blocks/" target="_blank" rel="noopener noreferrer">NYSORA source</a></div>
        <ul>
          <li>Identify the sacral cornua and sacral hiatus; ultrasound can help identify variable sacral anatomy and guide entry.</li>
          <li>Fluoroscopy with contrast is valuable for confirming epidural placement and contrast spread and for detecting unintended vascular injection.</li>
          <li>Remember that the dural sac and sacral canal anatomy vary between patients.</li>
        </ul>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">🦴 Lumbar epidural anatomy — structures to identify</div>
        <ul>
          <li>Spinous process and interspinous/interlaminar window</li>
          <li>Lamina and superior/inferior articular processes</li>
          <li>Ligamentum flavum</li>
          <li>Dorsal epidural space and epidural fat</li>
          <li>Dural/thecal sac and cauda equina</li>
          <li>Neural foramen and exiting nerve root</li>
          <li>Pedicle, transverse process and intervertebral disc</li>
          <li>Epidural venous plexus and relevant segmental/radicular vessels</li>
        </ul>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">🖥️ Sonoanatomy — what you should recognize</div>
        <img class="esi-mini-img" src="https://aneskey.com/wp-content/uploads/2017/01/image01220.jpeg" alt="Lumbar spine ultrasound sonoanatomy ligamentum flavum epidural space and dura">
        <div class="esi-mini-caption">Paramedian lumbar ultrasound showing lamina, ligamentum flavum, epidural space and posterior/anterior complexes. <a href="https://aneskey.com/spinal-sonography-and-considerations-for-ultrasound-guided-central-neuraxial-blockade/" target="_blank" rel="noopener noreferrer">Source / further reading</a></div>
        <ul>
          <li><strong>Paramedian sagittal view:</strong> useful for identifying laminae, interlaminar windows and estimating depth to the epidural space.</li>
          <li><strong>Transverse view:</strong> assists with midline and posterior-element identification and trajectory planning.</li>
          <li>Recognize the posterior complex/ligamentum flavum-dural relationship and the anterior complex.</li>
          <li>Ultrasound is limited by bony acoustic shadowing; for lumbar interlaminar and transforaminal ESIs it is generally an adjunct rather than a replacement for fluoroscopic confirmation.</li>
        </ul>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">💉 Drugs & preparation — ESI</div>
        <div class="esi-mini-grid">
          <div class="esi-mini-box"><strong>Local anaesthetic</strong><br>Use the product appropriate for the intended route. Convert concentration to mg/mL and calculate the total dose before injection.</div>
          <div class="esi-mini-box"><strong>Dexamethasone</strong><br>Non-particulate corticosteroid commonly used for epidural procedures. Verify the exact vial concentration and calculate the dose from the actual product label.</div>
          <div class="esi-mini-box"><strong>Contrast</strong><br>Use an appropriate non-ionic iodinated contrast product according to local protocol. Use the minimum amount required for adequate confirmation.</div>
        </div>
        <div class="esi-mini-warning"><strong>Published example, not a universal recipe:</strong> an ASRA-described S1 TFESI technique used preservative-free bupivacaine 0.25% 2 mL plus dexamethasone 10 mg/mL 1 mL after contrast confirmation. That equals 5 mg bupivacaine + 10 mg dexamethasone. Do not copy this dose without checking the current procedure protocol, product label and patient-specific limits.</div>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">⚠️ Safety sequence</div>
        <ol>
          <li>Confirm indication and clinical/imaging concordance.</li>
          <li>Select the safest appropriate approach.</li>
          <li>Review infection, allergy, anticoagulation/antiplatelet therapy and relevant comorbidities.</li>
          <li>Plan the fluoroscopic views and identify the anatomy before needle advancement.</li>
          <li>Confirm needle position and contrast pattern before therapeutic injection.</li>
          <li>Stop and reassess if contrast suggests vascular, intrathecal, intradiscal or other unintended spread.</li>
          <li>Document level, approach, imaging, contrast, drug, concentration, volume, total dose and complications.</li>
        </ol>
      </div>

      <div class="esi-mini-section">
        <div class="esi-mini-title">📚 ESI references</div>
        <ul>
          <li><a href="https://asra.com/docs/default-source/asra-family-documents/hot-topics/hot-topics-asra-appd/epidural-steroid-injections.pdf" target="_blank" rel="noopener noreferrer">ASRA — Epidural Steroid Injections</a></li>
          <li><a href="https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2022/05/23/asra-pain-medicine-recommendations-for-interventional-pain-procedures-during-contrast-shortage" target="_blank" rel="noopener noreferrer">ASRA — Contrast and spine procedure safety</a></li>
          <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13331338/" target="_blank" rel="noopener noreferrer">Recent review — lumbar ESI approaches</a></li>
        </ul>
      </div>
    `,
    'Medial Branch Block': `
      <strong>Drug:</strong> local anaesthetic for the diagnostic block; steroid is not automatically required.<br>
      <strong>Preparation examples:</strong> commercially available lidocaine 1% (10 mg/mL) or bupivacaine 0.25–0.5% (2.5–5 mg/mL). Use the smallest volume consistent with the diagnostic technique.<br>
      <strong>Safety:</strong> calculate the total local-anaesthetic dose across all targets and other blocks given the same day. Record the exact concentration and volume used.
    `,
    'Facet Joint Injection': `
      <strong>Drugs:</strong> local anaesthetic ± corticosteroid depending on the indication and current protocol.<br>
      <strong>Preparation:</strong> use the selected local anaesthetic at its commercial concentration. If steroid is used, prepare the prescribed dose according to the product label and local compatibility protocol; do not use a fixed cocktail for every patient.<br>
      <strong>Safety:</strong> consider cumulative steroid exposure, diabetes and other patient-specific risks. Use image guidance to confirm the intended joint target.
    `,
    'Radiofrequency Ablation': `
      <strong>Drugs:</strong> local anaesthetic for skin/subcutaneous and peri-target anaesthesia; the RFA lesion itself is produced by energy, not by steroid.<br>
      <strong>Preparation example:</strong> lidocaine 1% = 10 mg/mL can be used for local infiltration. Include it in the total local-anaesthetic dose calculation.<br>
      <strong>Steroid:</strong> not inherently part of RFA. If used by local protocol after lesioning, document the exact agent and dose separately.
    `,
    'Sacroiliac Joint Injection': `
      <strong>Drugs:</strong> local anaesthetic ± corticosteroid for selected diagnostic/therapeutic procedures.<br>
      <strong>Preparation:</strong> use a commercially available local anaesthetic concentration and add the selected corticosteroid only according to the current SI-joint protocol. Avoid copying a single fixed steroid dose between patients.<br>
      <strong>Safety:</strong> calculate total local-anaesthetic dose and consider cumulative steroid exposure, diabetes, infection and anticoagulation status.
    `,
    'Genicular Nerve Block': `
      <strong>Drug:</strong> local anaesthetic; steroid use depends on the indication/protocol.<br>
      <strong>Published example:</strong> ASRA describes a specific protocol using 0.25% bupivacaine with epinephrine and dexamethasone. Treat this as a technique example, not a universal chronic-pain recipe.<br>
      <strong>Safety:</strong> genicular vessels may accompany the nerves; use imaging/Doppler where appropriate and calculate total dose across all sites.
    `,
    'Genicular Nerve RFA': `
      <strong>Drugs:</strong> local anaesthetic for skin and peri-target anaesthesia before lesioning.<br>
      <strong>Preparation example:</strong> lidocaine 1% = 10 mg/mL is a common infiltration concentration. Use the minimum amount needed and include all local anaesthetic in the total dose calculation.<br>
      <strong>Steroid:</strong> not essential to the RFA lesion.
    `,
    'Stellate Ganglion Block': `
      <strong>Drug:</strong> low-volume local anaesthetic under real-time image guidance.<br>
      <strong>Preparation:</strong> verify the exact local-anaesthetic concentration and use the lowest effective volume for the selected technique.<br>
      <strong>Safety:</strong> carotid/vertebral vessels, thyroid, airway and recurrent laryngeal structures are nearby. Avoid unnecessarily high volumes and continuously visualize the needle/injectate when using ultrasound.
    `,
    'Celiac Plexus Block': `
      <strong>Drugs:</strong> local anaesthetic after contrast confirmation; neurolytic agents are a separate specialist intervention.<br>
      <strong>Preparation:</strong> use the exact local-anaesthetic and steroid regimen specified by the current specialist protocol rather than a fixed generic cocktail.<br>
      <strong>Safety:</strong> contrast confirmation, haemodynamic monitoring and attention to vascular/visceral structures are essential.
    `,
    'Ganglion Impar Block': `
      <strong>Drugs:</strong> local anaesthetic ± corticosteroid after image confirmation of the presacral target.<br>
      <strong>Preparation:</strong> verify the current product label and local protocol for the selected agent. Published case examples should not be copied as default doses.<br>
      <strong>Safety:</strong> confirm the presacral target with imaging and follow current steroid guidance.
    `
  };

  const css=`<style id="procedure-drug-integrated-css">
    .integrated-drug-box{margin:12px 0 2px;padding:11px 12px;background:#f8fafc;border:1px solid #dbe5ef;border-radius:10px}
    .integrated-drug-title{font-size:12.5px;font-weight:800;color:#1e3a5f;margin-bottom:7px}
    .integrated-drug-body{font-size:12px;line-height:1.6;color:#475569}
    .integrated-drug-body strong{color:#334155}
    .integrated-drug-warning{margin-top:8px;padding:7px 9px;background:#fff7ed;border-left:3px solid #f59e0b;border-radius:6px;font-size:11px;line-height:1.5}
    .esi-mini-section{margin:11px 0;padding:10px;background:#fff;border:1px solid #e2e8f0;border-radius:10px}
    .esi-mini-title{font-size:12.5px;font-weight:800;color:#1e3a5f;margin-bottom:7px}
    .esi-mini-section ul,.esi-mini-section ol{padding-left:18px;margin:6px 0}
    .esi-mini-section li{font-size:12px;line-height:1.6;color:#475569}
    .esi-mini-grid{display:grid;grid-template-columns:1fr;gap:7px}
    .esi-mini-box{background:#f8fafc;border-radius:8px;padding:9px;font-size:11.5px;line-height:1.55;color:#475569}
    .esi-mini-img{width:100%;max-height:290px;object-fit:contain;background:#f8fafc;border:1px solid #dbe5ef;border-radius:9px;margin:7px 0 4px;display:block}
    .esi-mini-caption{font-size:9.5px;line-height:1.4;color:#64748b;margin-bottom:7px}
    .esi-mini-caption a{color:#2563eb;text-decoration:none}
    .esi-mini-warning{background:#fff7ed;border-left:3px solid #f59e0b;border-radius:6px;padding:8px;font-size:11px;line-height:1.5;color:#475569;margin-top:7px}
    .esi-mini-safe{background:#eef6ff;border-left:3px solid #4a90c2;border-radius:6px;padding:8px;font-size:11px;line-height:1.5;color:#475569;margin-top:7px}
  </style>`;

  function integrate(){
    const target=document.getElementById('theory-content');
    if(!target)return;
    const procedureCards=[...target.querySelectorAll('.theory-card')];
    procedureCards.forEach(card=>{
      if(card.querySelector('.integrated-drug-box'))return;
      const summary=card.querySelector('summary');
      if(!summary)return;
      const text=summary.textContent.trim().replace(/^\d+\.\s*/,'');
      const key=Object.keys(cards).find(k=>text.toLowerCase().includes(k.toLowerCase()));
      if(!key)return;
      const box=document.createElement('div');
      box.className='integrated-drug-box';
      box.innerHTML=`<div class="integrated-drug-title">💉 Drugs, Preparation & Safety</div><div class="integrated-drug-body">${cards[key]}</div><div class="integrated-drug-warning"><strong>Clinical reference:</strong> examples are educational and may come from published techniques. Verify the current product label, patient-specific maximum dose, current specialty guidance and institutional protocol before clinical use.</div>`;
      summary.insertAdjacentElement('afterend',box);
    });
    const generic=target.querySelector('.pr-wrap');
    if(generic)generic.remove();
    if(!document.getElementById('procedure-drug-integrated-css'))document.head.insertAdjacentHTML('beforeend',css);
  }

  const original=window.loadTheory;
  if(typeof original==='function'){
    window.loadTheory=async function(){
      const result=await original.apply(this,arguments);
      setTimeout(integrate,50); setTimeout(integrate,400);
      return result;
    };
  }
  window.integrateProcedureDrugs=integrate;
  document.addEventListener('DOMContentLoaded',()=>setTimeout(integrate,300));
})();
