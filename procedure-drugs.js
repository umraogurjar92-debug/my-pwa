// PainMed Pro — procedure-specific drug cards
// Educational reference only. Verify current product label, local protocol and specialty guidance.
(function(){
  const cards = {
    'Epidural Steroid Injection': `
      <strong>Drugs:</strong> contrast + selected local anaesthetic ± corticosteroid according to approach.<br>
      <strong>Example preparation:</strong> preservative-free dexamethasone 10 mg/mL is ready-to-use. A published ASRA technique describes 1 mL dexamethasone 10 mg/mL + 2 mL preservative-free bupivacaine 0.25% after contrast confirmation. This is an example, not a universal recipe.<br>
      <strong>Calculation:</strong> bupivacaine 0.25% = 2.5 mg/mL; 2 mL = 5 mg. Dexamethasone 10 mg/mL × 1 mL = 10 mg.<br>
      <strong>Safety:</strong> non-particulate steroid is preferred for cervical transforaminal ESI and recommended as first-line for initial lumbar transforaminal ESI in multisociety guidance. Use image guidance and contrast safeguards; avoid deep sedation that prevents patient feedback.
    `,
    'Medial Branch Block': `
      <strong>Drug:</strong> local anaesthetic for the diagnostic block; steroid is not automatically required.<br>
      <strong>Preparation examples:</strong> commercially available lidocaine 1% (10 mg/mL) or bupivacaine 0.25–0.5% (2.5–5 mg/mL). Avoid routine dilution unless the protocol requires it; use the smallest volume consistent with the diagnostic technique.<br>
      <strong>Safety:</strong> calculate the total local-anaesthetic dose across all targets and other blocks given the same day. Record the exact concentration and volume used.
    `,
    'Facet Joint Injection': `
      <strong>Drugs:</strong> local anaesthetic ± corticosteroid depending on the indication and current protocol.<br>
      <strong>Preparation:</strong> use the selected local anaesthetic at its commercial concentration. If steroid is used, prepare the prescribed dose according to the product label and local compatibility protocol; do not use a fixed cocktail for every patient.<br>
      <strong>Safety:</strong> consider cumulative steroid exposure, diabetes and other patient-specific risks. Use image guidance to confirm the intended joint target.
    `,
    'Radiofrequency Ablation': `
      <strong>Drugs:</strong> local anaesthetic for skin/subcutaneous and peri-target anaesthesia; the RFA lesion itself is produced by energy, not by steroid.<br>
      <strong>Preparation example:</strong> lidocaine 1% = 10 mg/mL can be used for local infiltration. Use only the amount required by the technique and include it in the total local-anaesthetic dose calculation.<br>
      <strong>Steroid:</strong> not inherently part of RFA. If used by local protocol after lesioning, document the exact agent and dose separately.
    `,
    'Sacroiliac Joint Injection': `
      <strong>Drugs:</strong> local anaesthetic ± corticosteroid for selected diagnostic/therapeutic procedures.<br>
      <strong>Preparation:</strong> use a commercially available local anaesthetic concentration and add the selected corticosteroid only according to the current SI-joint protocol. Avoid copying a single fixed steroid dose between patients.<br>
      <strong>Safety:</strong> calculate total local-anaesthetic dose and consider cumulative steroid exposure, diabetes, infection and anticoagulation status. Current multisociety SI-joint guidance notes that evidence for several technical parameters remains limited.
    `,
    'Genicular Nerve Block': `
      <strong>Drug:</strong> long-acting local anaesthetic is commonly used; steroid use depends on the indication/protocol.<br>
      <strong>Published example:</strong> ASRA describes a 20 mL syringe of 0.25% bupivacaine with 1:400,000 epinephrine and 2 mg dexamethasone, using 5 mL per site in a specific genicular-block protocol. This is not a universal chronic-pain recipe.<br>
      <strong>Calculation:</strong> 0.25% bupivacaine = 2.5 mg/mL; 20 mL = 50 mg total.<br>
      <strong>Safety:</strong> genicular vessels may accompany the nerves; use imaging/Doppler where appropriate and calculate total dose across all sites.
    `,
    'Genicular Nerve RFA': `
      <strong>Drugs:</strong> local anaesthetic for skin and peri-target anaesthesia before lesioning.<br>
      <strong>Preparation example:</strong> lidocaine 1% = 10 mg/mL is a common infiltration concentration. Use the minimum amount needed and include all local anaesthetic in the total dose calculation.<br>
      <strong>Steroid:</strong> not essential to the RFA lesion. If used for post-procedure pain/neuritis by local protocol, document the exact steroid and dose.
    `,
    'Stellate Ganglion Block': `
      <strong>Drug:</strong> low-volume local anaesthetic under real-time image guidance.<br>
      <strong>Preparation example:</strong> bupivacaine 0.25% = 2.5 mg/mL; 5 mL = 12.5 mg. ASRA describes ultrasound-guided SGB techniques using about 5 mL of local anaesthetic. A 2026 ASRA technique also describes a 0.5 mL test dose of 1% lidocaine after contrast for fluoroscopic SGB before the remainder is injected. These are technique examples, not universal doses.<br>
      <strong>Safety:</strong> carotid/vertebral vessels, thyroid, airway and recurrent laryngeal structures are nearby. Avoid unnecessarily high volumes and continuously visualize the needle/injectate when using ultrasound.
    `,
    'Celiac Plexus Block': `
      <strong>Drugs:</strong> local anaesthetic after contrast confirmation; neurolytic agents are a separate specialist intervention.<br>
      <strong>Published example:</strong> ASRA describes a test dose of 3 mL 1% lidocaine with 1:400,000 epinephrine per side and, for local-anaesthetic-only treatment, 15 mL 0.25% bupivacaine with 2 mg dexamethasone per needle. These are published technique examples, not universal doses.<br>
      <strong>Calculation:</strong> 0.25% bupivacaine = 2.5 mg/mL; 15 mL = 37.5 mg per side.<br>
      <strong>Safety:</strong> contrast confirmation, haemodynamic monitoring and attention to vascular/visceral structures are essential. Alcohol/other neurolysis should follow a dedicated specialist protocol.
    `,
    'Ganglion Impar Block': `
      <strong>Drugs:</strong> local anaesthetic ± corticosteroid after image confirmation of the presacral target.<br>
      <strong>Published example:</strong> one ASRA case report used 2 mL 0.5% bupivacaine plus 80 mg methylprednisolone acetate. This was a historical case-specific example and should not be copied as a default dose.<br>
      <strong>Calculation:</strong> 0.5% bupivacaine = 5 mg/mL; 2 mL = 10 mg.<br>
      <strong>Safety:</strong> verify the presacral target with imaging and follow current product labeling and local steroid guidance.
    `
  };

  const css = `
    <style id="procedure-drug-integrated-css">
      .integrated-drug-box{margin:12px 0 2px;padding:11px 12px;background:#f8fafc;border:1px solid #dbe5ef;border-radius:10px}
      .integrated-drug-title{font-size:12.5px;font-weight:800;color:#1e3a5f;margin-bottom:7px}
      .integrated-drug-body{font-size:12px;line-height:1.6;color:#475569}
      .integrated-drug-body strong{color:#334155}
      .integrated-drug-warning{margin-top:8px;padding:7px 9px;background:#fff7ed;border-left:3px solid #f59e0b;border-radius:6px;font-size:11px}
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
      box.innerHTML=`<div class="integrated-drug-title">💉 Drugs, Preparation & Safety</div><div class="integrated-drug-body">${cards[key]}</div><div class="integrated-drug-warning"><strong>Clinical reference:</strong> dose/volume examples are educational examples from published techniques. Verify the current product label, patient-specific maximum dose, current specialty guidance and your institutional protocol before clinical use.</div>`;
      summary.insertAdjacentElement('afterend',box);
    });
    const generic=target.querySelector('.pr-wrap');
    if(generic)generic.remove();
    if(!document.getElementById('procedure-drug-integrated-css'))document.head.insertAdjacentHTML('beforeend',css);
  }

  const original=window.loadTheory;
  if(typeof original==='function'){
    window.loadTheory=async function(){
      await original.apply(this,arguments);
      setTimeout(integrate,50);
    };
  }
  window.integrateProcedureDrugs=integrate;
})();
