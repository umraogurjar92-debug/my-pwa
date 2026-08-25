const THEORY = [
  {
    id: "pain-procedures-theory",
    title: "Pain Procedures — Theory",
    category: "Interventional Pain",
    content: `
      <style>
        .theory-intro{background:#eef6ff;border:1px solid #d7e8fb;border-radius:14px;padding:15px;margin-bottom:16px;line-height:1.6}
        .theory-card{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:15px;margin-bottom:13px;box-shadow:0 2px 8px rgba(30,58,95,.04)}
        .theory-card summary{cursor:pointer;font-size:15px;color:#1e3a5f;padding:2px 0;font-weight:700}
        .theory-card h4{margin:15px 0 7px;color:#1e3a5f;font-size:13px}
        .theory-card p,.theory-card li{font-size:13px;line-height:1.65;color:#475569}
        .theory-card ul{padding-left:19px;margin:7px 0}
        .pearl{background:#f8fafc;border-left:4px solid #4a90c2;padding:10px 12px;border-radius:8px;margin-top:12px;font-size:12px;line-height:1.55}
        .warning{background:#fff7ed;border-left:4px solid #f59e0b;padding:10px 12px;border-radius:8px;margin-top:12px;font-size:12px;line-height:1.55}
        .ref-image{width:100%;max-height:300px;object-fit:contain;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:12px 0 5px;display:block}
        .image-caption{font-size:10px;color:#64748b;line-height:1.45;margin-bottom:12px}
        .image-caption a{color:#2563eb;text-decoration:none}
        .tag-row{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}
        .mini-tag{background:#f1f5f9;color:#475569;border-radius:20px;padding:4px 9px;font-size:10px;font-weight:600}
      </style>

      <div class="theory-intro">
        <strong>Resident learning guide</strong><br>
        Use this section for structured revision: <strong>patient selection → anatomy → imaging → target → injection/energy → monitoring → complications</strong>. The images below are clinical reference figures to help recognize anatomy and imaging appearance. They are not substitutes for supervised procedural training.
      </div>

      <details open class="theory-card">
        <summary>1. Epidural Steroid Injection</summary>
        <p><strong>Concept:</strong> An epidural injection places medication into the epidural region for selected spinal/radicular pain conditions. The approach should be chosen according to the clinical target, anatomy and risk profile.</p>
        <img class="ref-image" src="https://radiologykey.com/wp-content/uploads/2015/12/B9781455705962001682_f168-003-9781455705962.jpg" alt="Lumbar epidural fluoroscopic image with labels">
        <div class="image-caption">Reference fluoroscopic image demonstrating epidural needle position and contrast spread. Source: Radiology Key. <a href="https://radiologykey.com/epidural-steroid-injection/" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Common approaches</h4>
        <ul>
          <li><strong>Interlaminar:</strong> accesses the posterior epidural space at a selected level.</li>
          <li><strong>Transforaminal:</strong> targets the epidural region near a selected nerve root and requires particular attention to vascular anatomy.</li>
          <li><strong>Caudal:</strong> accesses the epidural space through the sacral hiatus.</li>
        </ul>
        <h4>Indications & selection</h4>
        <ul>
          <li>Selected radicular pain/radiculopathy with appropriate clinical and imaging concordance.</li>
          <li>Consider duration, functional impairment, previous treatment and expected benefit versus procedural risk.</li>
        </ul>
        <h4>Planning & safety</h4>
        <ul>
          <li>Review relevant MRI/CT and identify the safest clinically appropriate target and approach.</li>
          <li>Use appropriate image guidance and confirm needle position before injection.</li>
          <li>For fluoroscopic procedures, contrast may be used to assess location and spread when appropriate.</li>
          <li>Review infection risk, allergy, anticoagulant/antiplatelet status and other relevant contraindications.</li>
        </ul>
        <h4>Complications</h4>
        <ul><li>Dural puncture/PDPH, bleeding or epidural haematoma, infection, nerve injury, intravascular injection, transient neurological symptoms and systemic steroid effects.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> The key decision is not simply which steroid to use; establish whether the pain generator and target are appropriate for an epidural procedure.</div>
      </details>

      <details class="theory-card">
        <summary>2. Medial Branch Block</summary>
        <p><strong>Concept:</strong> A medial branch block targets sensory branches supplying facet joints and is commonly used as part of a diagnostic/prognostic pathway before radiofrequency treatment.</p>
        <img class="ref-image" src="https://i0.wp.com/musculoskeletalkey.com/wp-content/uploads/2019/01/f30-02-9780323401531.jpg?fit=773%2C580&ssl=1" alt="Ultrasound medial branch block anatomy">
        <div class="image-caption">Ultrasound and anatomical reference showing lumbar facet and medial branch relationships. Source: Musculoskeletal Key. <a href="https://musculoskeletalkey.com/lumbar-medial-branch-blocks-midline-ultrasound-guidance/" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Assessment</h4>
        <ul>
          <li>Consider axial pain pattern, examination and competing diagnoses before labeling pain as facet-mediated.</li>
          <li>Define expected pain and functional outcomes before the diagnostic block.</li>
        </ul>
        <h4>Anatomy</h4>
        <ul><li>Understand the dorsal ramus, medial branch, superior articular process, transverse process and facet joint relationship.</li></ul>
        <h4>Technique principles</h4>
        <ul>
          <li>Use appropriate image guidance and identify the intended bony target.</li>
          <li>Use an appropriately low diagnostic volume when the goal is to evaluate a specific pain generator.</li>
          <li>Use Doppler when appropriate to identify nearby vessels in ultrasound-guided procedures.</li>
        </ul>
        <h4>Interpretation</h4>
        <ul><li>Interpret pain relief together with functional change and the diagnostic threshold specified by the treating service. False-positive and false-negative responses can occur.</li></ul>
        <div class="pearl"><strong>Exam pearl:</strong> A medial branch block and intra-articular facet injection are not interchangeable; they answer different clinical questions.</div>
      </details>

      <details class="theory-card">
        <summary>3. Facet Joint Injection</summary>
        <p><strong>Concept:</strong> Direct injection into a zygapophyseal/facet joint for selected patients with suspected facet-related pain.</p>
        <img class="ref-image" src="https://www.mdpi.com/biomedicines/biomedicines-11-03308/article_deploy/html/images/biomedicines-11-03308-g001.png" alt="Ultrasound lumbar facet joint anatomy and injection approaches">
        <div class="image-caption">Reference figure showing ultrasound views and lumbar facet/medial branch anatomy. Source: MDPI Biomedicines. <a href="https://www.mdpi.com/2227-9059/11/12/3308" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Anatomy</h4>
        <ul><li>Facet joint capsule, superior/inferior articular processes, lamina, transverse process and adjacent neural structures.</li></ul>
        <h4>Principles</h4>
        <ul>
          <li>Use appropriate image guidance to identify the joint and confirm intended location.</li>
          <li>Do not assume that degenerative imaging findings automatically establish the facet as the pain generator.</li>
          <li>Distinguish intra-articular injection from medial branch block when planning diagnosis and treatment.</li>
        </ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, transient pain flare, medication-related effects and unintended neural/vascular injection.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> Always correlate imaging findings with history and examination.</div>
      </details>

      <details class="theory-card">
        <summary>4. Radiofrequency Ablation</summary>
        <p><strong>Concept:</strong> Radiofrequency treatment creates a controlled lesion around a selected sensory nerve target. Medial branch RFA is commonly used for appropriately selected facet-mediated spinal pain.</p>
        <img class="ref-image" src="https://i0.wp.com/musculoskeletalkey.com/wp-content/uploads/2019/01/f30-02-9780323401531.jpg?fit=773%2C580&ssl=1" alt="Medial branch anatomical target relevant to radiofrequency treatment">
        <div class="image-caption">The same medial branch anatomy is useful for understanding the target of lumbar medial branch RFA. Source: Musculoskeletal Key. <a href="https://musculoskeletalkey.com/lumbar-medial-branch-blocks-midline-ultrasound-guidance/" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Patient selection</h4>
        <ul>
          <li>Use an appropriate diagnostic pathway supporting the suspected pain generator.</li>
          <li>Document baseline pain and function so the outcome can be assessed meaningfully.</li>
        </ul>
        <h4>Technical principles</h4>
        <ul>
          <li>Accurate target identification and electrode orientation are central to successful lesioning.</li>
          <li>Understand sensory and motor stimulation concepts where used by the selected technique.</li>
          <li>Lesion characteristics depend on electrode, temperature, duration, tissue contact and technique.</li>
        </ul>
        <h4>Complications</h4><ul><li>Post-procedure pain/neuritis, bleeding, infection, unintended nerve injury and rarely significant neurological injury.</li></ul>
        <div class="pearl"><strong>Exam pearl:</strong> RFA is not a generic treatment for low-back pain; correct patient selection is fundamental.</div>
      </details>

      <details class="theory-card">
        <summary>5. Sacroiliac Joint Injection</summary>
        <p><strong>Concept:</strong> Diagnostic and/or therapeutic injection for selected patients with suspected sacroiliac joint complex pain.</p>
        <img class="ref-image" src="https://cdn.ncbi.nlm.nih.gov/pmc/blobs/743e/5995536/f3a4b21996c0/jadp-08-029-g08.jpg" alt="Sacroiliac joint injection fluoroscopy and anatomy">
        <div class="image-caption">Reference figure showing SI joint anatomy, fluoroscopic contrast and patient positioning. Source: PubMed Central. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5995536/" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Assessment</h4>
        <ul>
          <li>Use history and an appropriate cluster of provocation tests rather than a single examination finding.</li>
          <li>Consider lumbar spine, hip, myofascial and other competing pain generators.</li>
        </ul>
        <h4>Anatomy & guidance</h4>
        <ul><li>Understand the posterior SI joint region, sacral foramina, sacral ala and nearby neurovascular structures.</li><li>Fluoroscopy or ultrasound may be selected according to the procedure and local expertise.</li></ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, transient pain flare, vasovagal reaction and unintended spread/injection.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> A positive provocative test alone does not establish the SI joint as the sole pain generator.</div>
      </details>

      <details class="theory-card">
        <summary>6. Genicular Nerve Block</summary>
        <p><strong>Concept:</strong> Diagnostic/prognostic blockade of articular sensory branches around the knee, commonly used in selected chronic knee-pain pathways.</p>
        <img class="ref-image" src="https://journals.sagepub.com/cms/10.1177/1742271X241252297/asset/0ec72048-6939-42d9-846c-c7856a16fc68/assets/images/large/10.1177_1742271x241252297-fig5.jpg" alt="Ultrasound imaging of inferior medial genicular nerve and artery">
        <div class="image-caption">Ultrasound reference showing the inferior medial genicular nerve and artery in relation to the medial collateral ligament and proximal tibia. Source: Regional Anesthesia and Pain Medicine/SAGE. <a href="https://journals.sagepub.com/doi/10.1177/1742271X241252297" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Key anatomy</h4>
        <ul>
          <li>Common targets include superomedial, superolateral and inferomedial genicular nerve regions; exact targets vary by technique.</li>
          <li>Recognize the relationship of the nerves to the femur, tibia, collateral ligaments and genicular vessels.</li>
        </ul>
        <h4>Technique principles</h4>
        <ul><li>Ultrasound or fluoroscopic guidance may be used according to the selected technique and operator expertise.</li><li>Use pain relief together with functional assessment when deciding whether a diagnostic response is meaningful.</li></ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, vascular puncture, transient sensory change, pain flare and incomplete analgesia.</li></ul>
      </details>

      <details class="theory-card">
        <summary>7. Genicular Nerve RFA</summary>
        <p><strong>Concept:</strong> Radiofrequency treatment of selected genicular nerve targets for chronic knee pain in appropriately selected patients.</p>
        <img class="ref-image" src="https://journals.sagepub.com/cms/10.1177/1742271X241252297/asset/0ec72048-6939-42d9-846c-c7856a16fc68/assets/images/large/10.1177_1742271x241252297-fig5.jpg" alt="Genicular nerve ultrasound anatomy relevant to RFA">
        <div class="image-caption">The ultrasound image helps demonstrate nerve/vessel relationships relevant to genicular interventions. Source: SAGE. <a href="https://journals.sagepub.com/doi/10.1177/1742271X241252297" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Selection</h4>
        <ul><li>Often follows a diagnostic genicular block pathway depending on local protocol and evidence.</li><li>Consider structural, inflammatory and surgical causes that may require different management.</li></ul>
        <h4>Principles</h4>
        <ul><li>Accurate bony target localization and appropriate electrode orientation are important.</li><li>Nearby vessels should be recognized and protected.</li></ul>
        <h4>Complications</h4><ul><li>Post-procedure pain/neuritis, bleeding, infection, vascular injury and incomplete or temporary benefit.</li></ul>
      </details>

      <details class="theory-card">
        <summary>8. Stellate Ganglion Block</summary>
        <p><strong>Concept:</strong> A cervical sympathetic block used for selected sympathetically mediated pain and other carefully selected indications. The stellate ganglion itself has variable anatomy, so the sonoanatomy and adjacent structures are particularly important.</p>
        <img class="ref-image" src="https://asra.com/docs/default-source/asra-news/asra-19-04.pdf" alt="Stellate ganglion cross-sectional anatomy and ultrasound image">
        <div class="image-caption">ASRA/NYSORA reference showing cross-sectional anatomy and ultrasound-guided stellate ganglion block. Source: ASRA News; image courtesy of NYSORA. <a href="https://asra.com/docs/default-source/asra-news/asra-19-04.pdf" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Key anatomy</h4>
        <ul><li>Carotid artery, internal jugular vein, thyroid, trachea, longus colli, prevertebral fascia, transverse process and vertebral vessels/structures must be recognized.</li></ul>
        <h4>Technique principles</h4>
        <ul>
          <li>Ultrasound can help identify the relevant anatomy and nearby vessels.</li>
          <li>Use real-time needle visualization, aspiration, incremental injection and appropriate monitoring.</li>
          <li>Color Doppler can help identify vascular structures.</li>
        </ul>
        <h4>Expected effect</h4><ul><li>Ipsilateral Horner syndrome may occur after sympathetic blockade, but clinical assessment should not rely on this sign alone.</li></ul>
        <h4>Important complications</h4><ul><li>Intravascular injection, local anaesthetic systemic toxicity, recurrent laryngeal/phrenic nerve effects, neuraxial spread, vascular/neurological injury and pneumothorax depending on anatomy and approach.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> Think of the block as an anatomy problem first: identify carotid/IJV, thyroid, longus colli, transverse process and prevertebral fascia before considering needle movement.</div>
      </details>

      <details class="theory-card">
        <summary>9. Celiac Plexus Block</summary>
        <p><strong>Concept:</strong> Block of the celiac plexus for selected upper-abdominal visceral pain, including carefully selected cancer-related pain.</p>
        <img class="ref-image" src="https://aneskey.com/wp-content/uploads/2017/02/image01434-1.jpeg" alt="Celiac plexus cross-sectional anatomy at L1">
        <div class="image-caption">Axial anatomical reference showing the celiac plexus, aorta, celiac artery, kidneys, diaphragm and surrounding structures at approximately L1. Source: Anesthesia Key. <a href="https://aneskey.com/celiac-plexus-block-using-ct-guidance/" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Key anatomy</h4>
        <ul><li>Celiac trunk, aorta, diaphragmatic crura, sympathetic plexus and adjacent retroperitoneal/visceral structures.</li><li>Approaches vary and may be posterior or anterior depending on anatomy and imaging.</li></ul>
        <h4>Planning</h4>
        <ul><li>Review cross-sectional imaging and vascular anatomy before choosing the route.</li><li>Image guidance is essential for accurate and safe needle placement.</li></ul>
        <h4>Complications</h4><ul><li>Transient hypotension, diarrhoea, bleeding, infection, vascular injection, visceral injury and, depending on approach, pneumothorax or other organ injury.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> Anticipate sympathetic blockade effects such as vasodilation and hypotension and plan monitoring accordingly.</div>
      </details>

      <details class="theory-card">
        <summary>10. Ganglion Impar Block</summary>
        <p><strong>Concept:</strong> Sympathetic block targeting the ganglion impar for selected chronic pelvic, perineal and coccygeal pain syndromes.</p>
        <img class="ref-image" src="https://aneskey.com/wp-content/uploads/2017/02/image01470.jpeg" alt="Ganglion impar block lateral fluoroscopic image">
        <div class="image-caption">Lateral fluoroscopic reference showing sacrum, coccyx, needle and contrast spread during ganglion impar block. Source: Anesthesia Key. <a href="https://aneskey.com/ganglion-impar-block/" target="_blank" rel="noopener noreferrer">View source</a></div>
        <h4>Key anatomy</h4>
        <ul><li>The ganglion impar is the terminal sympathetic ganglion anterior to the sacrococcygeal region, with variable anatomical position.</li><li>The sacrococcygeal junction, sacrum, coccyx and presacral structures are important landmarks.</li></ul>
        <h4>Technique principles</h4>
        <ul><li>Choose the approach according to anatomy and imaging findings.</li><li>Use image guidance and confirm intended location and contrast distribution before injection.</li></ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, rectal/visceral injury, intravascular injection, neuraxial spread and transient pain flare.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> The lateral view is particularly useful for understanding the anterior sacrococcygeal target and depth relationship.</div>
      </details>

      <div class="warning">
        <strong>Safety checklist before an interventional pain procedure</strong>
        <ul>
          <li>Confirm diagnosis, indication and expected clinical benefit.</li>
          <li>Review imaging and relevant anatomy.</li>
          <li>Check anticoagulant/antiplatelet management according to current guidance.</li>
          <li>Review allergy, infection, coagulation status and relevant comorbidities.</li>
          <li>Confirm monitoring, resuscitation readiness, consent and post-procedure observation requirements.</li>
          <li>Use current drug-specific guidance rather than relying on a fixed dose in a static app.</li>
        </ul>
      </div>

      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:14px;margin-top:16px;line-height:1.55">
        <strong>Further learning</strong><br>
        <a href="https://nysora.com/pain-management/basics/" target="_blank" rel="noopener noreferrer">NYSORA — Pain Management Basics</a><br>
        <a href="https://asra.com/guidelines-articles/guidelines" target="_blank" rel="noopener noreferrer">ASRA Pain Medicine — Guidelines & advisories</a><br>
        <a href="https://asipp.org/guidelines/" target="_blank" rel="noopener noreferrer">ASIPP — Interventional pain guidelines</a>
      </div>

      <p style="font-size:12px;color:#64748b;margin-top:14px"><strong>Important:</strong> Educational revision material only. It is not a substitute for supervised procedural training or current institutional/professional guidance. Drug selection, anticoagulation management, imaging requirements and procedural eligibility should be checked against current guidance.</p>
    `
  }
];
