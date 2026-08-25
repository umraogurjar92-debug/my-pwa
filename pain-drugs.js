const PAIN_DRUG_REFERENCE = `
<section class="drug-reference">
<style>
.drug-reference{margin-top:16px}.drug-header{background:#eef6ff;border:1px solid #d7e8fb;border-radius:14px;padding:15px;margin-bottom:14px}.drug-card{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:15px;margin-bottom:12px}.drug-card summary{cursor:pointer;font-weight:700;color:#1e3a5f;font-size:14px}.drug-card h4{color:#1e3a5f;font-size:13px;margin:14px 0 6px}.drug-card p,.drug-card li{font-size:13px;line-height:1.6;color:#475569}.drug-card ul{padding-left:19px}.dose-box{background:#f8fafc;border-left:4px solid #4a90c2;padding:10px;border-radius:8px;margin:10px 0;font-size:12px}.warning{background:#fff7ed;border-left:4px solid #f59e0b;padding:10px 12px;border-radius:8px;font-size:12px;line-height:1.55;margin:10px 0}.pearl{background:#f8fafc;border-left:4px solid #4a90c2;padding:10px 12px;border-radius:8px;font-size:12px;margin-top:10px}.procedure-table{width:100%;border-collapse:collapse;margin-top:10px;font-size:11px}.procedure-table th,.procedure-table td{border:1px solid #e2e8f0;padding:8px;vertical-align:top;text-align:left;line-height:1.45}.procedure-table th{background:#f1f5f9;color:#1e3a5f;font-weight:700}.procedure-table td{color:#475569}.reference-box{background:#f1f5f9;border-radius:12px;padding:12px;font-size:12px}.reference-box li{font-size:12px}
</style>
<div class="drug-header"><h3>💊 Procedure Drug Tables</h3><p>Resident bedside-learning reference. Doses and volumes are <strong>typical educational ranges, not prescriptions</strong>. Verify the exact product, route, patient factors, procedure, local protocol and current specialty guidance before use.</p></div>
<div class="warning"><strong>Safety:</strong> “Maximum dose” is not a guarantee of safety. Local-anaesthetic limits are generally weight-based and vary with route, vascularity, patient risk and whether adrenaline is used. Steroid dose depends on the product and procedure. Always calculate the total dose from every source, including skin infiltration.</div>

<details class="drug-card" open><summary>1. Lumbar Medial Branch Block</summary>
<table class="procedure-table"><tr><th>Drug</th><th>Typical preparation / concentration</th><th>Educational procedural volume</th><th>Safety / limit</th></tr>
<tr><td>Lidocaine</td><td>1% = 10 mg/mL or 2% = 20 mg/mL. Example: 2 mL of 2% + 2 mL compatible diluent → 4 mL of 1%.</td><td>Small-volume diagnostic injection; use the lowest volume that adequately targets the nerve and preserves diagnostic specificity. Exact volume is technique/protocol dependent.</td><td>Total lidocaine from skin + block must be included in mg/kg calculation.</td></tr>
<tr><td>Bupivacaine</td><td>0.25% = 2.5 mg/mL; 0.5% = 5 mg/mL.</td><td>Small-volume diagnostic injection; exact volume depends on technique.</td><td>Use a conservative total dose because bupivacaine has important cardiotoxicity risk.</td></tr>
<tr><td>Ropivacaine</td><td>0.2% = 2 mg/mL; 0.5% = 5 mg/mL.</td><td>May be used according to local protocol; not required for every diagnostic block.</td><td>Calculate total dose; LAST remains possible.</td></tr></table>
<div class="pearl"><strong>Preparation principle:</strong> Decide first whether the block is diagnostic or therapeutic. For a diagnostic block, avoid unnecessarily large volumes or additives that could reduce interpretability.</div></details>

<details class="drug-card"><summary>2. Lumbar Facet Joint Injection</summary>
<table class="procedure-table"><tr><th>Component</th><th>Preparation</th><th>Use</th><th>Safety</th></tr>
<tr><td>Local anaesthetic</td><td>Lidocaine 1%/2% or another appropriate local anaesthetic according to protocol.</td><td>Small volume may be used for local anaesthesia and/or diagnostic purposes.</td><td>Include skin-infiltration dose in total LA dose.</td></tr>
<tr><td>Corticosteroid</td><td>Product-specific; dexamethasone is non-particulate, while triamcinolone/methylprednisolone depot preparations are particulate.</td><td>Only when the clinical purpose and current evidence/protocol support steroid use.</td><td>Do not use a generic “40 mg steroid” rule. Verify product and procedure-specific dose.</td></tr>
<tr><td>Contrast</td><td>Small amount of appropriate non-ionic iodinated contrast when fluoroscopic confirmation is indicated.</td><td>Confirm intra-articular/target location and spread.</td><td>Use the minimum amount needed; review contrast-related risks.</td></tr></table></details>

<details class="drug-card"><summary>3. Sacroiliac Joint Injection</summary>
<table class="procedure-table"><tr><th>Component</th><th>Preparation</th><th>Typical principle</th><th>Safety</th></tr>
<tr><td>Local anaesthetic</td><td>Commonly lidocaine or a longer-acting LA depending on purpose.</td><td>Use a low effective volume appropriate for the SI joint target and imaging technique.</td><td>Calculate total LA exposure from all injections.</td></tr>
<tr><td>Steroid</td><td>Product-specific; particulate and non-particulate options exist.</td><td>May be included for selected therapeutic indications.</td><td>Use the lowest effective dose; consider diabetes, infection risk and cumulative exposure.</td></tr>
<tr><td>Contrast</td><td>Non-ionic iodinated contrast when fluoroscopic confirmation is used.</td><td>Small amount to confirm intra-articular spread.</td><td>Use minimum necessary volume.</td></tr></table></details>

<details class="drug-card"><summary>4. Genicular Nerve Block</summary>
<table class="procedure-table"><tr><th>Drug</th><th>Preparation</th><th>Typical principle</th><th>Safety</th></tr>
<tr><td>Lidocaine</td><td>1% commonly suitable for diagnostic local anaesthesia; verify concentration.</td><td>Small volume around each selected genicular target; exact volume is technique dependent.</td><td>Avoid excessive volume; genicular vessels may accompany the nerves.</td>
<tr><td>Bupivacaine / ropivacaine</td><td>0.25% bupivacaine or 0.2%–0.5% ropivacaine may be used according to protocol.</td><td>Longer-acting LA can be used when appropriate, but the diagnostic purpose should be clear.</td><td>Track total mg across all target injections.</td></tr></table></details>

<details class="drug-card"><summary>5. Genicular Nerve RFA</summary>
<table class="procedure-table"><tr><th>Component</th><th>Preparation</th><th>Role</th><th>Safety</th></tr>
<tr><td>Local anaesthetic</td><td>Small-volume lidocaine or other suitable LA.</td><td>Skin/tract anaesthesia and selected peri-target use according to RFA protocol.</td><td>Avoid excessive LA obscuring stimulation or adding unnecessary systemic exposure.</td>
<tr><td>Post-lesion injectate</td><td>Varies by service protocol; some use small-volume LA ± steroid.</td><td>May be considered for post-procedure discomfort depending on protocol.</td><td>Do not assume steroid is mandatory. Follow local RFA protocol.</td></tr></table></details>

<details class="drug-card"><summary>6. Stellate Ganglion Block</summary>
<table class="procedure-table"><tr><th>Drug</th><th>Preparation</th><th>Educational principle</th><th>Safety</th></tr>
<tr><td>Lidocaine</td><td>Low-concentration LA may be used according to ultrasound-guided technique.</td><td>Use the lowest effective volume consistent with the selected target and technique.</td><td>Low-volume technique is important because of adjacent airway, vascular and neural structures.</td>
<tr><td>Ropivacaine / bupivacaine</td><td>Longer-acting LA may be selected according to local protocol.</td><td>Only if clinically indicated; exact concentration/volume must follow the supervised technique.</td><td>Account for systemic LA dose and monitor for LAST, recurrent laryngeal block, phrenic effects and vascular injection.</td></table>
<div class="warning"><strong>High-risk anatomy:</strong> Do not treat stellate ganglion block as a routine peripheral block. Image guidance, careful needle positioning, aspiration/incremental injection and appropriate monitoring are essential.</div></details>

<details class="drug-card"><summary>7. Epidural Steroid Injection</summary>
<table class="procedure-table"><tr><th>Approach</th><th>Steroid principle</th><th>Local anaesthetic / diluent</th><th>Key safety point</th></tr>
<tr><td>Interlaminar</td><td>Choice must follow current approach-specific guidance and local protocol.</td><td>Do not use a generic “cocktail”; use an appropriate injectate for the indication.</td><td>Confirm epidural position and assess contrast spread when indicated.</td></tr>
<tr><td>Lumbar transforaminal</td><td>Non-particulate dexamethasone is commonly favored initially because particulate steroid has been disproportionately represented in catastrophic neurovascular complication reports.</td><td>Use only the volume/concentration specified by the current technique protocol.</td><td>Real-time contrast imaging and meticulous avoidance of intravascular injection are critical.</td></tr>
<tr><td>Cervical transforaminal</td><td><strong>Non-particulate steroid only</strong> is the key safety principle in multisociety recommendations.</td><td>Approach-specific protocol.</td><td>Catastrophic neurovascular complications can occur; follow current specialty guidance strictly.</td></tr>
<tr><td>Caudal</td><td>Product/route-specific steroid selection.</td><td>Volume varies with technique and target.</td><td>Review imaging, anticoagulation/infection risk and total steroid exposure.</td></tr></table>
<div class="warning"><strong>Important:</strong> Epidural steroid injection has rare but serious neurological risks. ASRA notes that particulate steroids are disproportionately represented in catastrophic neurovascular complication reports and recommends non-particulate steroid for cervical transforaminal injections. citeturn0search23turn0search25</div></details>

<details class="drug-card"><summary>8. Celiac Plexus Block</summary>
<table class="procedure-table"><tr><th>Component</th><th>Preparation</th><th>Principle</th><th>Safety</th></tr>
<tr><td>Local anaesthetic</td><td>Use an appropriate LA concentration according to the selected approach and institutional protocol.</td><td>Volume is technique-dependent and may be divided between targets.</td><td>Track cumulative LA dose; vascular structures and neuraxial spread must be considered.</td>
<tr><td>Neurolytic agent</td><td>Only when a neurolytic block is specifically indicated and performed by an appropriately trained pain specialist.</td><td>Usually considered for selected severe chronic visceral/cancer pain rather than routine diagnostic blockade.</td><td>Requires detailed consent and specialist protocol because neurolysis can cause serious neurological, vascular and visceral complications.</td></tr></table></details>

<details class="drug-card"><summary>9. Ganglion Impar Block</summary>
<table class="procedure-table"><tr><th>Component</th><th>Preparation</th><th>Principle</th><th>Safety</th></tr>
<tr><td>Local anaesthetic</td><td>Small-volume LA appropriate to the selected image-guided technique.</td><td>Diagnostic block uses a low effective volume to preserve specificity.</td><td>Account for total LA dose and avoid unintended intravascular/intrarectal placement.</td>
<tr><td>Steroid</td><td>Optional and indication-dependent.</td><td>Consider only when supported by the intended therapeutic plan.</td><td>Verify product and dose; consider infection and glucose effects.</td></tr>
<tr><td>Neurolytic agent</td><td>Specialist-only and indication-specific.</td><td>May be considered for selected refractory cancer/pelvic pain.</td><td>Requires specialist protocol and detailed risk discussion.</td></tr></table></details>

<details class="drug-card"><summary>10. Local Anaesthetic Maximum-Dose Quick Reference</summary>
<table class="procedure-table"><tr><th>Drug</th><th>Common reference maximum without adrenaline</th><th>With adrenaline</th><th>Important caveat</th></tr>
<tr><td>Lidocaine</td><td>≈4.5–5 mg/kg</td><td>≈7 mg/kg</td><td>Use lower doses when risk is increased; route/vascularity matter.</td></tr>
<tr><td>Bupivacaine</td><td>≈2–2.5 mg/kg</td><td>≈3 mg/kg</td><td>High cardiotoxicity; use conservative dosing.</td></tr>
<tr><td>Ropivacaine</td><td>≈3 mg/kg</td><td>≈3–3.5 mg/kg</td><td>Do not treat the number as a guaranteed safe threshold.</td></tr></table>
<p style="font-size:11px;color:#64748b">These figures are reference ranges rather than universal procedural limits. A recent International Pain and Spine Intervention Society emergency-protocol review lists lidocaine 4.5–5 mg/kg without epinephrine and 7 mg/kg with epinephrine, bupivacaine 2–2.5/3 mg/kg and ropivacaine 3/3–3.5 mg/kg; other references differ. In vascular or confined spaces and in high-risk patients, lower doses may be required. citeturn0search6turn0search10</p>
<div class="pearl"><strong>Calculation:</strong> Dose (mg) = concentration (mg/mL) × volume (mL). Maximum volume = maximum allowable mg ÷ concentration. Always count every source of the same local anaesthetic.</div></details>

<details class="drug-card"><summary>11. LAST — emergency reference</summary><ul><li>Recognize neurological symptoms, seizures and cardiovascular toxicity early.</li><li><strong>Stop injection, call for help, manage airway/oxygenation and follow the current ASRA LAST checklist.</strong></li><li>20% lipid emulsion should be immediately available when significant LA dosing is performed.</li></ul><p>ASRA's 2020 checklist provides weight-based lipid-emulsion treatment and specifies a maximum lipid dose of 12 mL/kg. citeturn0search24</p></details>

<div class="reference-box"><strong>Clinical verification</strong><ul><li>ASRA Pain Medicine LAST checklist and current practice advisories.</li><li>Current ASRA/interventional pain guidance for epidural steroid injections and anticoagulation.</li><li>Current manufacturer prescribing information for the exact drug stocked in your hospital.</li><li>Institutional pain-procedure protocol and supervising consultant guidance.</li></ul></div>
</section>
`;