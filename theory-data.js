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
        .diagram{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:10px;margin:12px 0;text-align:center;overflow:hidden}
        .diagram svg{width:100%;max-width:430px;height:auto}
        .diagram-caption{font-size:11px;color:#64748b;margin-top:6px}
        .tag-row{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}
        .mini-tag{background:#f1f5f9;color:#475569;border-radius:20px;padding:4px 9px;font-size:10px;font-weight:600}
      </style>

      <div class="theory-intro">
        <strong>Resident learning guide</strong><br>
        This section is designed for quick revision before supervised pain procedures. Focus on <strong>patient selection → anatomy → imaging → target → injectate/energy → monitoring → complications</strong>. Always check current institutional policy, anticoagulation guidance, drug information and the exact procedure protocol before performing a case.
      </div>

      <details open class="theory-card">
        <summary>1. Epidural Steroid Injection</summary>
        <p><strong>Concept:</strong> An epidural injection delivers medication into the epidural region to treat selected spinal/radicular pain. The approach should be chosen according to the clinical target, anatomy and risk profile.</p>
        <div class="diagram">
          <svg viewBox="0 0 430 190" role="img" aria-label="Simplified lumbar epidural anatomy schematic">
            <rect x="0" y="0" width="430" height="190" rx="12" fill="#f8fafc"/>
            <text x="215" y="20" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="700">Simplified sagittal lumbar schematic</text>
            <path d="M75 55 Q145 38 215 55 Q285 38 355 55" fill="none" stroke="#94a3b8" stroke-width="12"/>
            <path d="M75 135 Q145 152 215 135 Q285 152 355 135" fill="none" stroke="#cbd5e1" stroke-width="18"/>
            <ellipse cx="215" cy="95" rx="30" ry="48" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <ellipse cx="215" cy="95" rx="12" ry="30" fill="#fff" stroke="#64748b" stroke-width="2"/>
            <line x1="135" y1="95" x2="203" y2="95" stroke="#ef4444" stroke-width="3"/>
            <circle cx="135" cy="95" r="5" fill="#ef4444"/>
            <text x="105" y="84" font-size="11" fill="#b91c1c">Target region</text>
            <text x="250" y="82" font-size="11" fill="#1e3a5f">Dural sac</text>
            <text x="250" y="98" font-size="11" fill="#475569">Spinal canal</text>
            <text x="250" y="114" font-size="11" fill="#475569">Epidural space</text>
          </svg>
          <div class="diagram-caption">Educational schematic only; not to scale and not a needle-placement guide.</div>
        </div>
        <h4>Common approaches</h4>
        <ul>
          <li><strong>Interlaminar:</strong> accesses the posterior epidural space at a selected level.</li>
          <li><strong>Transforaminal:</strong> targets the epidural region near a selected nerve root and requires careful attention to vascular anatomy.</li>
          <li><strong>Caudal:</strong> accesses the epidural space through the sacral hiatus.</li>
        </ul>
        <h4>Indications & selection</h4>
        <ul>
          <li>Selected radicular pain/radiculopathy with clinical and imaging concordance.</li>
          <li>Consider duration, functional impairment, previous treatment and whether the expected benefit justifies procedural risk.</li>
        </ul>
        <h4>Planning & safety</h4>
        <ul>
          <li>Review MRI/CT and identify the safest target and approach.</li>
          <li>Use appropriate image guidance and confirm needle position before injection.</li>
          <li>For fluoroscopic procedures, contrast may be used to evaluate location and spread; medication choice should follow current guidance.</li>
          <li>Consider anticoagulant/antiplatelet status, infection, allergy, uncontrolled systemic illness and other relevant contraindications.</li>
        </ul>
        <h4>Complications</h4>
        <ul><li>Dural puncture/PDPH, bleeding or epidural haematoma, infection, nerve injury, intravascular injection, transient neurological symptoms and systemic steroid effects.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> The important question is not simply “which steroid?”—first establish whether the pain generator and target are appropriate for an epidural procedure.</div>
      </details>

      <details class="theory-card">
        <summary>2. Medial Branch Block</summary>
        <p><strong>Concept:</strong> A medial branch block targets the small medial branch nerves that carry sensory information from facet joints. It is commonly used as part of a diagnostic/prognostic pathway before considering radiofrequency treatment.</p>
        <div class="diagram">
          <svg viewBox="0 0 430 180" role="img" aria-label="Simplified facet medial branch schematic">
            <rect width="430" height="180" rx="12" fill="#f8fafc"/>
            <text x="215" y="20" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="700">Facet joint & medial branch schematic</text>
            <path d="M95 55 L170 45 L205 80 L170 115 L95 105 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
            <path d="M335 55 L260 45 L225 80 L260 115 L335 105 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
            <ellipse cx="215" cy="80" rx="24" ry="17" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <path d="M170 125 Q215 100 260 125" fill="none" stroke="#ef4444" stroke-width="4"/>
            <circle cx="170" cy="125" r="5" fill="#ef4444"/>
            <circle cx="260" cy="125" r="5" fill="#ef4444"/>
            <text x="215" y="155" text-anchor="middle" font-size="11" fill="#b91c1c">Medial branch target region</text>
            <text x="215" y="78" text-anchor="middle" font-size="10" fill="#1e3a5f">Facet</text>
          </svg>
          <div class="diagram-caption">Simplified posterior schematic; exact targets vary by spinal level and technique.</div>
        </div>
        <h4>Assessment</h4>
        <ul>
          <li>Consider axial pain pattern, examination and competing diagnoses before labeling pain as facet-mediated.</li>
          <li>Define the expected pain/function outcome before the diagnostic block.</li>
        </ul>
        <h4>Technique principles</h4>
        <ul>
          <li>Use appropriate image guidance and target the intended medial branch while avoiding vascular or neural structures.</li>
          <li>Keep diagnostic injections appropriately low-volume so spread does not obscure interpretation.</li>
        </ul>
        <h4>Interpretation</h4>
        <ul><li>Interpret pain relief with functional change and the diagnostic threshold specified by the treating service. False-positive and false-negative results can occur.</li></ul>
        <div class="pearl"><strong>Exam pearl:</strong> A medial branch block and an intra-articular facet injection are not interchangeable—they serve different diagnostic/therapeutic purposes.</div>
      </details>

      <details class="theory-card">
        <summary>3. Facet Joint Injection</summary>
        <p><strong>Concept:</strong> Direct injection into a zygapophyseal/facet joint. It should be considered only after a clinical assessment supports a facet-related pain hypothesis.</p>
        <h4>Anatomy</h4>
        <ul><li>Facet joint capsule, superior/inferior articular processes, lamina and adjacent neural structures.</li></ul>
        <h4>Principles</h4>
        <ul>
          <li>Use appropriate image guidance to identify the joint and confirm the intended location.</li>
          <li>Review imaging for degenerative changes, but do not assume that an abnormal facet on imaging is automatically the pain generator.</li>
          <li>Consider the current evidence and local protocol when deciding between intra-articular injection and medial branch block.</li>
        </ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, pain flare, medication-related effects and unintended neural/vascular injection.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> Correlate imaging with symptoms and examination; degenerative findings are common even in people without pain.</div>
      </details>

      <details class="theory-card">
        <summary>4. Radiofrequency Ablation</summary>
        <p><strong>Concept:</strong> Radiofrequency treatment creates a controlled thermal lesion around a selected sensory nerve target. In spine pain practice, medial branch RFA is used for carefully selected facet-mediated pain.</p>
        <h4>Patient selection</h4>
        <ul>
          <li>Use an appropriate diagnostic pathway supporting the suspected pain generator.</li>
          <li>Document baseline pain and function to make follow-up meaningful.</li>
        </ul>
        <h4>Technical principles</h4>
        <ul>
          <li>Accurate target identification and electrode orientation are central to successful lesioning.</li>
          <li>Understand the role of sensory and motor stimulation where used by the selected technique.</li>
          <li>Lesion size depends on electrode characteristics, temperature, duration, tissue contact and technique.</li>
        </ul>
        <h4>Complications</h4><ul><li>Post-procedure pain/neuritis, bleeding, infection, unintended nerve injury and rarely significant neurological injury.</li></ul>
        <div class="pearl"><strong>Exam pearl:</strong> RFA is not a generic treatment for low-back pain. The quality of patient selection is as important as the lesioning technique.</div>
      </details>

      <details class="theory-card">
        <summary>5. Sacroiliac Joint Injection</summary>
        <p><strong>Concept:</strong> A diagnostic and/or therapeutic injection for selected patients with suspected sacroiliac joint complex pain.</p>
        <h4>Assessment</h4>
        <ul>
          <li>Use history and a cluster of appropriate provocation tests rather than one isolated examination finding.</li>
          <li>Consider lumbar spine, hip, myofascial and other competing pain generators.</li>
        </ul>
        <h4>Anatomy & guidance</h4>
        <ul><li>Understand the posterior SI joint region, sacral foramina and nearby neurovascular structures. Fluoroscopy or ultrasound may be used depending on the procedure and expertise.</li></ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, transient pain flare, vasovagal reaction and unintended spread/injection.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> A positive provocative test alone is not enough to establish the SI joint as the sole pain generator.</div>
      </details>

      <details class="theory-card">
        <summary>6. Genicular Nerve Block</summary>
        <p><strong>Concept:</strong> Diagnostic/prognostic blockade of articular sensory branches around the knee, often used in selected chronic knee-pain pathways.</p>
        <h4>Key anatomy</h4>
        <ul>
          <li>Common targets include superomedial, superolateral and inferomedial genicular nerve regions; exact targets vary by technique.</li>
          <li>Pay attention to the genicular vessels and bony landmarks of the femur and tibia.</li>
        </ul>
        <h4>Technique principles</h4>
        <ul><li>Ultrasound or fluoroscopic guidance can be used according to the selected technique and operator expertise.</li><li>Assess pain relief together with walking/function rather than pain score alone.</li></ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, vascular puncture, transient sensory change, pain flare and incomplete analgesia.</li></ul>
      </details>

      <details class="theory-card">
        <summary>7. Genicular Nerve RFA</summary>
        <p><strong>Concept:</strong> Radiofrequency treatment of selected genicular nerve targets for chronic knee pain in appropriately selected patients.</p>
        <h4>Selection</h4>
        <ul><li>Often follows a diagnostic genicular block pathway, depending on local protocol and evidence.</li><li>Consider structural, inflammatory and surgical causes that may require different management.</li></ul>
        <h4>Principles</h4>
        <ul><li>Accurate bony target localization and appropriate electrode orientation are important.</li><li>Nearby vessels should be recognized and protected.</li></ul>
        <h4>Complications</h4><ul><li>Post-procedure pain/neuritis, bleeding, infection, vascular injury and incomplete or temporary benefit.</li></ul>
      </details>

      <details class="theory-card">
        <summary>8. Stellate Ganglion Block</summary>
        <p><strong>Concept:</strong> A cervical sympathetic block used for selected sympathetically mediated pain and other carefully selected indications.</p>
        <div class="diagram">
          <svg viewBox="0 0 430 190" role="img" aria-label="Simplified stellate ganglion anatomy schematic">
            <rect width="430" height="190" rx="12" fill="#f8fafc"/>
            <text x="215" y="20" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="700">Simplified cervical sympathetic anatomy</text>
            <path d="M160 48 Q215 32 270 48 L250 150 Q215 168 180 150 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
            <path d="M175 75 Q215 62 255 75" fill="none" stroke="#94a3b8" stroke-width="8"/>
            <path d="M215 65 L215 145" stroke="#ef4444" stroke-width="4"/>
            <circle cx="215" cy="142" r="9" fill="#ef4444"/>
            <path d="M205 142 L155 160" stroke="#ef4444" stroke-width="2"/>
            <text x="105" y="165" font-size="11" fill="#b91c1c">Stellate region</text>
            <rect x="285" y="66" width="90" height="38" rx="8" fill="#fff" stroke="#cbd5e1"/>
            <text x="330" y="82" text-anchor="middle" font-size="10" fill="#475569">Carotid / vascular</text>
            <text x="330" y="95" text-anchor="middle" font-size="10" fill="#475569">structures nearby</text>
          </svg>
          <div class="diagram-caption">Simplified anterior neck schematic; anatomy varies and ultrasound visualization is recommended for supervised learning.</div>
        </div>
        <h4>Key anatomy</h4>
        <ul><li>Cervical sympathetic chain/stellate ganglion region, longus colli, carotid sheath and nearby vertebral/neuraxial structures.</li></ul>
        <h4>Technique & monitoring</h4>
        <ul><li>Ultrasound can help identify relevant anatomy and avoid adjacent structures.</li><li>Use meticulous aspiration, incremental injection and appropriate monitoring.</li></ul>
        <h4>Expected effect</h4><ul><li>Ipsilateral Horner syndrome may occur with sympathetic blockade; assess the clinical response rather than using Horner syndrome alone as proof of therapeutic success.</li></ul>
        <h4>Important complications</h4><ul><li>Intravascular injection, local anaesthetic systemic toxicity, recurrent laryngeal/phrenic effects, neuraxial spread, pneumothorax and vascular/neurological injury.</li></ul>
        <div class="warning"><strong>High-yield safety point:</strong> The neck contains major vascular and neural structures. This is a supervised, image-guided procedure—not a landmark-only injection for independent practice.</div>
      </details>

      <details class="theory-card">
        <summary>9. Celiac Plexus Block</summary>
        <p><strong>Concept:</strong> Block of the celiac plexus for selected upper-abdominal visceral pain, including carefully selected cancer-related pain.</p>
        <div class="diagram">
          <svg viewBox="0 0 430 180" role="img" aria-label="Simplified celiac plexus anatomy schematic">
            <rect width="430" height="180" rx="12" fill="#f8fafc"/>
            <text x="215" y="20" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="700">Simplified upper abdominal anatomy</text>
            <ellipse cx="215" cy="95" rx="26" ry="55" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
            <text x="215" y="98" text-anchor="middle" font-size="10" fill="#991b1b">Aorta</text>
            <circle cx="177" cy="70" r="8" fill="#f59e0b"/><circle cx="253" cy="70" r="8" fill="#f59e0b"/>
            <path d="M177 70 Q215 52 253 70" fill="none" stroke="#f59e0b" stroke-width="4"/>
            <text x="215" y="48" text-anchor="middle" font-size="10" fill="#92400e">Celiac plexus region</text>
            <path d="M115 55 Q140 90 115 135" fill="none" stroke="#cbd5e1" stroke-width="18"/>
            <path d="M315 55 Q290 90 315 135" fill="none" stroke="#cbd5e1" stroke-width="18"/>
            <text x="80" y="155" font-size="10" fill="#64748b">Diaphragmatic / retroperitoneal structures</text>
          </svg>
          <div class="diagram-caption">Simplified schematic; review cross-sectional imaging and vascular anatomy before a real procedure.</div>
        </div>
        <h4>Key anatomy</h4>
        <ul><li>Celiac trunk, aorta, diaphragmatic crura, sympathetic plexus and adjacent retroperitoneal structures.</li></ul>
        <h4>Planning</h4>
        <ul><li>Review CT/MRI and vascular anatomy before choosing the route.</li><li>Image guidance is essential for safe needle placement.</li></ul>
        <h4>Complications</h4><ul><li>Transient hypotension, diarrhoea, bleeding, infection, vascular injection, visceral injury, pneumothorax depending on approach, and rare neurological injury.</li></ul>
        <div class="pearl"><strong>Resident pearl:</strong> Sympathetic blockade can reduce visceral pain but may also produce vasodilation and hypotension—anticipate haemodynamic effects.</div>
      </details>

      <details class="theory-card">
        <summary>10. Ganglion Impar Block</summary>
        <p><strong>Concept:</strong> Sympathetic block targeting the ganglion impar for selected chronic pelvic, perineal and coccygeal pain syndromes.</p>
        <h4>Key anatomy</h4>
        <ul><li>The ganglion impar is the terminal sympathetic structure anterior to the sacrococcygeal region, with variable anatomy.</li><li>The sacrococcygeal junction and presacral structures are important landmarks and safety considerations.</li></ul>
        <h4>Technique principles</h4>
        <ul><li>Select the approach based on anatomy and imaging.</li><li>Use image guidance and confirm the intended location before injection.</li></ul>
        <h4>Complications</h4><ul><li>Bleeding, infection, rectal/visceral injury, intravascular injection, neuraxial spread and transient pain flare.</li></ul>
      </details>

      <details class="theory-card">
        <summary>11. General Interventional Pain Safety Checklist</summary>
        <ul>
          <li><strong>Diagnosis:</strong> Is there a clear clinical pain generator and a reasonable indication?</li>
          <li><strong>Imaging:</strong> Have relevant imaging and anatomy been reviewed?</li>
          <li><strong>Medication:</strong> Is the planned local anaesthetic/steroid/other agent appropriate and current?</li>
          <li><strong>Antithrombotics:</strong> Has current anticoagulation/antiplatelet guidance been checked for this exact procedure?</li>
          <li><strong>Infection:</strong> Is there any active infection or systemic issue that changes the risk?</li>
          <li><strong>Monitoring:</strong> Are monitoring, resuscitation equipment and an appropriate post-procedure observation plan available?</li>
          <li><strong>Consent:</strong> Have alternatives, expected benefit, limitations and important complications been discussed?</li>
          <li><strong>Documentation:</strong> Record indication, side/level, guidance method, medication, response and complications.</li>
        </ul>
        <div class="warning"><strong>Anticoagulation reminder:</strong> Bleeding risk differs substantially between procedures. Do not apply one generic “pain procedure” anticoagulation rule to every block.</div>
      </details>

      <div class="theory-card" style="background:#f8fafc">
        <strong style="color:#1e3a5f">Evidence & further learning</strong>
        <p style="margin-top:8px">ASRA Pain Medicine maintains current guidelines and advisories for interventional pain, including guidance on facet procedures, sacroiliac joint pain, corticosteroid use, anticoagulation and infection control. NYSORA provides procedure-oriented pain-management resources and anatomy/ultrasound education. citeturn0search3turn0search10turn0search12</p>
        <p style="font-size:12px;color:#64748b"><strong>Important:</strong> These diagrams are educational schematics, not fluoroscopic or ultrasound images and not a substitute for supervised procedural training. Drug doses, injectate selection, anticoagulation management and procedural eligibility should be checked against current professional and institutional guidance.</p>
      </div>
    `
  }
];
