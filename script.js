// ============================================
// PAINMED PRO — JAVASCRIPT
// OPD Pain Medicine Study Tracker
// ============================================

// ============================================
// DATA: 16-Week OPD Pain Medicine Curriculum
// ============================================
const weeksData = [
  {
    week: 1, phase: 'Phase 1', phaseClass: 'phase-1',
    dates: 'Aug 10 – Aug 16',
    title: 'OPD Pain Assessment Framework',
    desc: 'Master SOCRATES/OPQRST frameworks • Red flag screening • Pain scales (VAS, NPRS, McGill) • Build a 15-minute assessment template',
    daily: [
      'Mon: Read pain assessment frameworks (SOCRATES, OPQRST)',
      'Tue: Watch physical exam videos for common presentations',
      'Wed: Practice: Write 3 mock pain histories',
      'Thu: Study red flags in chronic pain — memorize the list',
      'Fri: Review pain scales — when to use each',
      'Sat: Self-Assessment: Timed 15-min mock patient assessment',
      'Sun: Reflection & note template creation'
    ],
    tags: ['🎯 15-min assessment', '🚩 10+ red flags', '📝 Note template']
  },
  {
    week: 2, phase: 'Phase 1', phaseClass: 'phase-1',
    dates: 'Aug 17 – Aug 23',
    title: 'Pain Mechanisms & Classification',
    desc: 'Nociceptive vs neuropathic vs nociplastic pain • Central sensitization • Biopsychosocial model • ICD-11 chronic pain codes',
    daily: [],
    tags: ['🧠 Mechanisms', '📋 ICD-11 Codes']
  },
  {
    week: 3, phase: 'Phase 1', phaseClass: 'phase-1',
    dates: 'Aug 24 – Aug 30',
    title: 'OPD Investigations & Imaging',
    desc: 'When to order MRI/CT/EMG/NCV/bone scan • Imaging-pain correlation • Lab workup for inflammatory/rheumatologic pain • Avoiding over-investigation',
    daily: [],
    tags: []
  },
  {
    week: 4, phase: 'Phase 2', phaseClass: 'phase-2',
    dates: 'Aug 31 – Sep 06',
    title: 'Musculoskeletal Pain',
    desc: 'Mechanical low back & neck pain • Osteoarthritis (knee, hip, spine) • Myofascial pain syndrome & trigger points • Tendinopathies & bursitis • Exercise prescription basics',
    daily: [],
    tags: []
  },
  {
    week: 5, phase: 'Phase 2', phaseClass: 'phase-2',
    dates: 'Sep 07 – Sep 13',
    title: 'Neuropathic Pain',
    desc: 'Diabetic neuropathy • Post-herpetic neuralgia • Radiculopathy & sciatica • Trigeminal neuralgia • Screening tools: DN4, LANSS, painDETECT',
    daily: [],
    tags: []
  },
  {
    week: 6, phase: 'Phase 2', phaseClass: 'phase-2',
    dates: 'Sep 14 – Sep 20',
    title: 'Headache & Facial Pain',
    desc: 'Tension-type, migraine, cluster headaches • Medication overuse headache (crucial!) • Temporomandibular disorders • Atypical facial pain',
    daily: [],
    tags: []
  },
  {
    week: 7, phase: 'Phase 2', phaseClass: 'phase-2',
    dates: 'Sep 21 – Sep 27',
    title: 'Complex & Functional Pain',
    desc: 'Fibromyalgia & chronic fatigue • Chronic primary pain (ICD-11) • Chronic pelvic pain & endometriosis • CRPS — early recognition • Activity pacing strategies',
    daily: [],
    tags: []
  },
  {
    week: 8, phase: 'Phase 2', phaseClass: 'phase-2',
    dates: 'Sep 28 – Oct 04',
    title: 'Cancer Pain in OPD',
    desc: 'WHO analgesic ladder (with 2023 updates) • Breakthrough pain management • Opioid rotation principles • Adjuvant analgesics in cancer • Palliative care referral criteria',
    daily: [],
    tags: []
  },
  {
    week: 9, phase: 'Phase 3', phaseClass: 'phase-3',
    dates: 'Oct 05 – Oct 11',
    title: 'Non-Opioid Analgesics',
    desc: 'Paracetamol dosing & hepatotoxicity • NSAID selection: COX-1 vs COX-2 • GI/renal/cardiac risk stratification • Topical agents • Perioperative NSAID holds',
    daily: [],
    tags: []
  },
  {
    week: 10, phase: 'Phase 3', phaseClass: 'phase-3',
    dates: 'Oct 12 – Oct 18',
    title: 'Opioids in OPD',
    desc: 'Morphine, oxycodone, tramadol, buprenorphine, fentanyl patches • Equianalgesic dosing • Risk assessment • Urine screening • Tapering protocols • OIH',
    daily: [],
    tags: []
  },
  {
    week: 11, phase: 'Phase 3', phaseClass: 'phase-3',
    dates: 'Oct 19 – Oct 25',
    title: 'Adjuvant Analgesics',
    desc: 'TCAs (amitriptyline) • SNRIs (duloxetine, venlafaxine) • Gabapentinoids • Muscle relaxants • Low-dose ketamine • Corticosteroids in pain management',
    daily: [],
    tags: []
  },
  {
    week: 12, phase: 'Phase 3', phaseClass: 'phase-3',
    dates: 'Oct 26 – Nov 01',
    title: 'Special Populations',
    desc: 'Geriatrics: fall risk, renal dosing, polypharmacy • Pregnancy & lactation: safe analgesics • Pediatric pain • Renal & hepatic impairment dose adjustments',
    daily: [],
    tags: []
  },
  {
    week: 13, phase: 'Phase 4', phaseClass: 'phase-4',
    dates: 'Nov 02 – Nov 08',
    title: 'Physical Therapy & Psychology',
    desc: 'Exercise prescription for chronic pain • CBT & ACT basics for OPD • TENS, heat/cold therapy • Sleep hygiene & pain relationship • Referral criteria',
    daily: [],
    tags: []
  },
  {
    week: 14, phase: 'Phase 4', phaseClass: 'phase-4',
    dates: 'Nov 09 – Nov 15',
    title: 'OPD Interventional Procedures',
    desc: 'Trigger point injections • Joint injections (intra-articular steroid, hyaluronic acid) • Bursa/tendon sheath injections • Basic nerve blocks • Scope & referral',
    daily: [],
    tags: []
  },
  {
    week: 15, phase: 'Phase 4', phaseClass: 'phase-4',
    dates: 'Nov 16 – Nov 22',
    title: 'Documentation & Legal',
    desc: 'Opioid agreements & treatment contracts • Pain clinic SOAP note structure (function-focused) • Disability certification • Informed consent • Telemedicine limitations',
    daily: [],
    tags: []
  },
  {
    week: 16, phase: 'Phase 4', phaseClass: 'phase-4',
    dates: 'Nov 23 – Nov 29',
    title: 'Complex Cases & Referral',
    desc: 'Failed back surgery syndrome (FBSS) • Opioid use disorder in pain patients • Spinal cord stimulation & intrathecal pumps • Multidisciplinary pain programs • Board prep',
    daily: [],
    tags: [],
    isLast: true
  }
];

// ============================================
// NAVIGATION
// ============================================
function navigateTo(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + viewName).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('.nav-item[data-view="' + viewName + '"]').classList.add('active');
  if (viewName === 'dashboard') updateDashboard();
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// LOCAL STORAGE (Progress Persistence)
// ============================================
function saveProgress() {
  const checked = [];
  for (let i = 1; i <= 16; i++) {
    const cb = document.getElementById('chk-' + i);
    if (cb && cb.checked) checked.push(i);
  }
  localStorage.setItem('painmed_progress', JSON.stringify(checked));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem('painmed_progress') || '[]');
    saved.forEach(week => {
      const cb = document.getElementById('chk-' + week);
      if (cb) cb.checked = true;
    });
  } catch (e) {
    console.log('No saved progress found');
  }
}

function resetProgress() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    for (let i = 1; i <= 16; i++) {
      const cb = document.getElementById('chk-' + i);
      if (cb) cb.checked = false;
    }
    localStorage.removeItem('painmed_progress');
    updateProgress();
    updateDashboard();
    showToast('Progress reset successfully');
  }
}

// ============================================
// PROGRESS TRACKING
// ============================================
function updateProgress() {
  let checked = 0;
  for (let i = 1; i <= 16; i++) {
    if (document.getElementById('chk-' + i).checked) checked++;
  }
  const percent = Math.round((checked / 16) * 100);

  saveProgress();
  updateDashboard();
  updateCurrentWeek();

  // Update week card styles
  for (let i = 1; i <= 16; i++) {
    const isDone = document.getElementById('chk-' + i).checked;
    const header = document.querySelector('#week-card-' + i + ' .week-header');
    const title = document.querySelector('#week-card-' + i + ' .week-title');
    if (header) header.classList.toggle('done', isDone);
    if (title) title.classList.toggle('done', isDone);
  }
}

function updateDashboard() {
  let checked = 0;
  for (let i = 1; i <= 16; i++) {
    if (document.getElementById('chk-' + i).checked) checked++;
  }
  const percent = Math.round((checked / 16) * 100);
  const left = 16 - checked;

  document.getElementById('hero-percent').textContent = percent + '%';
  document.getElementById('hero-done').textContent = checked;
  document.getElementById('hero-left').textContent = left;
  document.getElementById('hero-ring').textContent = percent + '%';

  // Color-code the ring
  const ring = document.getElementById('hero-ring');
  if (percent === 100) ring.style.borderTopColor = 'var(--success)';
  else if (percent > 50) ring.style.borderTopColor = '#3b82f6';
  else ring.style.borderTopColor = 'var(--primary)';
}

function updateCurrentWeek() {
  let currentWeek = 1;
  for (let i = 1; i <= 16; i++) {
    if (!document.getElementById('chk-' + i).checked) {
      currentWeek = i;
      break;
    }
    currentWeek = 16;
  }
  const w = weeksData[currentWeek - 1];
  document.getElementById('current-badge').textContent = 'WEEK ' + w.week;
  document.getElementById('current-title').textContent = w.title;
  document.getElementById('current-desc').textContent = w.desc;
}

// ============================================
// ROSTER RENDERING
// ============================================
function renderRoster() {
  const container = document.getElementById('weeks-container');
  container.innerHTML = weeksData.map(w => `
    <div class="week-card" data-phase="${w.phase}" id="week-card-${w.week}">
      <div class="week-header ${w.phaseClass}" onclick="toggleWeek(${w.week})">
        <div class="checkbox-wrap" onclick="event.stopPropagation()">
          <input type="checkbox" id="chk-${w.week}" onchange="updateProgress()">
          <div class="check-visual">✓</div>
        </div>
        <div class="week-meta">
          <div class="week-badges">
            <span class="badge-week">WEEK ${w.week}</span>
            <span class="badge-date">${w.dates}</span>
          </div>
          <h3 class="week-title">${w.title}</h3>
        </div>
        <span class="arrow" id="arrow-${w.week}">▼</span>
      </div>
      <div class="week-content" id="content-${w.week}">
        <p><strong>Key Deliverables:</strong> ${w.desc}</p>
        ${w.daily.length > 0 ? `
        <div class="daily-plan">
          <div class="daily-plan-title">📚 Daily Plan (~5 hrs total)</div>
          <ul>${w.daily.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>` : ''}
        ${w.tags.length > 0 ? `
        <div class="tags">${w.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
        ${w.isLast ? `
        <div class="completion-banner">
          <p>🎓 Congratulations! You have completed the 16-week OPD Pain Medicine course.</p>
        </div>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleWeek(weekNum) {
  const content = document.getElementById('content-' + weekNum);
  const arrow = document.getElementById('arrow-' + weekNum);
  content.classList.toggle('open');
  arrow.classList.toggle('open');
}

function filterPhase(phase) {
  document.querySelectorAll('.phase-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.phase === phase);
  });
  document.querySelectorAll('.week-card').forEach(card => {
    card.style.display = (phase === 'all' || card.dataset.phase === phase) ? 'block' : 'none';
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  renderRoster();
  loadProgress();
  updateProgress();
  updateCurrentWeek();
})