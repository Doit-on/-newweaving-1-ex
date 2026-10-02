/**
 * NEW Weaving It Together 1 (ม.4) - Main Application Controller
 * Thai Watana Panich (TWP) & Cengage Learning
 * Dual Audio Engine, Procedural Web Audio FX, Multi-Part Interactive Quizzes
 * Features: Lightbox Image Zoom, Part Answer Keys, Incomplete=0 Scoring Rule
 */

// Global Application State
const AppState = {
  currentView: 'landing', // 'landing', 'player', 'summary'
  currentExercise: null,
  activeTab: 'partA', // 'partA', 'partB', 'partC', 'review'
  
  answers: {
    partA: {}, // qIdx: 'a'
    partB: {}, // qIdx: 'Munich'
    partC: {}  // qIdx: [{ token, tokenIdx }]
  },
  
  partBActiveSlot: 0,

  answerKeyRevealed: {
    partA: false,
    partB: false,
    partC: false
  },

  submitted: {
    partA: false,
    partB: false,
    partC: false
  },

  scores: {
    partA: 0,
    partB: 0,
    partC: 0,
    total: 0
  },

  lightboxZoom: 1
};

// ============================================================
// Web Audio API Procedural Sound Synthesizer (No external mp3)
// ============================================================
const SoundFX = {
  ctx: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },

  playTone(freq, type, duration, delay = 0) {
    if (typeof SettingsController !== 'undefined' && !SettingsController.soundEnabled) return;

    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      }, delay);
    } catch (e) {
      console.warn('Audio tone synthesis error:', e);
    }
  },

  playCorrect() {
    this.playTone(523.25, 'sine', 0.15, 0);   // C5
    this.playTone(659.25, 'sine', 0.25, 100); // E5
    this.playTone(783.99, 'sine', 0.35, 200); // G5
  },

  playWrong() {
    this.playTone(280, 'triangle', 0.15, 0);
    this.playTone(220, 'triangle', 0.25, 120);
  },

  playFanfare() {
    this.playTone(440, 'triangle', 0.15, 0);
    this.playTone(554.37, 'triangle', 0.15, 150);
    this.playTone(659.25, 'triangle', 0.2, 300);
    this.playTone(880, 'sine', 0.5, 450);
  }
};

// ============================================================
// Web Speech API Engine with Paragraph Chunking & Phonetics
// ============================================================
const SpeechEngine = {
  isSpeaking: false,
  selectedVoice: null,
  availableVoices: [],
  currentParagraphIdx: 0,
  paragraphsQueue: [],

  initVoices() {
    if (!('speechSynthesis' in window)) return;

    const loadVoices = () => {
      this.availableVoices = window.speechSynthesis.getVoices();
      const femaleKeywords = [
        'natural', 'online', 'jenny', 'samantha', 'victoria', 'zira', 'karen', 'ava',
        'google us english', 'female', 'en-us-x-sfg', 'cora', 'allison', 'fiona', 'serena'
      ];

      let best = this.availableVoices.find(v =>
        v.lang.toLowerCase().startsWith('en') && femaleKeywords.some(k => v.name.toLowerCase().includes(k))
      );

      if (!best) {
        best = this.availableVoices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en'));
      }

      this.selectedVoice = best;
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  },

  phoneticMap: [
    { pattern: /\bOktoberfest\b/gi, spoken: 'Ok-toe-ber-fest' },
    { pattern: /\bVespasian\b/gi, spoken: 'Ves-pay-zhee-un' },
    { pattern: /\bAnastenaria\b/gi, spoken: 'Ah-nah-sten-ah-ree-ah' },
    { pattern: /\bHiwatari\b/gi, spoken: 'Hee-wah-tah-ree' },
    { pattern: /\bKipferl\b/gi, spoken: 'Kip-ferl' },
    { pattern: /\bGutenberg\b/gi, spoken: 'Goo-ten-berg' },
    { pattern: /\bMédecins Sans Frontières\b/gi, spoken: 'Med-sahn Sahn Fron-tyair' }
  ],

  prepareSpokenText(text) {
    if (!text) return '';
    let processed = text;
    this.phoneticMap.forEach(rule => {
      processed = processed.replace(rule.pattern, rule.spoken);
    });
    return processed;
  },

  speakWord(word) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(this.prepareSpokenText(word));
    if (this.selectedVoice) utterance.voice = this.selectedVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.88;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
    showToast(`กำลังอ่านออกเสียง: ${word}`, 'info');
  },

  speakParagraphs(paragraphs) {
    if (!('speechSynthesis' in window)) {
      showToast('เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง', 'info');
      return;
    }

    if (this.isSpeaking) {
      this.stop();
      return;
    }

    window.speechSynthesis.cancel();
    this.paragraphsQueue = paragraphs || [];
    this.currentParagraphIdx = 0;
    this.isSpeaking = true;
    this.updateAudioButton(true);

    this.playNextParagraphChunk();
  },

  playNextParagraphChunk() {
    if (!this.isSpeaking || this.currentParagraphIdx >= this.paragraphsQueue.length) {
      this.stop();
      return;
    }

    const text = this.paragraphsQueue[this.currentParagraphIdx];
    const utterance = new SpeechSynthesisUtterance(this.prepareSpokenText(text));
    if (this.selectedVoice) utterance.voice = this.selectedVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.90;
    utterance.pitch = 1.06;

    // Highlight active paragraph in UI
    this.highlightActiveParagraph(this.currentParagraphIdx);

    utterance.onend = () => {
      this.currentParagraphIdx++;
      setTimeout(() => this.playNextParagraphChunk(), 300);
    };

    utterance.onerror = () => {
      this.stop();
    };

    window.speechSynthesis.speak(utterance);
  },

  highlightActiveParagraph(idx) {
    document.querySelectorAll('.passage-scroll-area p').forEach((p, i) => {
      if (i === idx) {
        p.style.backgroundColor = 'rgba(255, 204, 0, 0.2)';
        p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        p.style.backgroundColor = 'transparent';
      }
    });
  },

  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.updateAudioButton(false);
    document.querySelectorAll('.passage-scroll-area p').forEach(p => p.style.backgroundColor = 'transparent');
  },

  testVoice() {
    this.stop();
    const utterance = new SpeechSynthesisUtterance("Hello! Welcome to NEW Weaving It Together 1. Let's build your reading and writing confidence!");
    if (this.selectedVoice) utterance.voice = this.selectedVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.90;
    window.speechSynthesis.speak(utterance);
    showToast('กำลังเล่นเสียงอ่านตัวอย่าง', 'info');
  },

  updateAudioButton(speaking) {
    const btn = document.getElementById('btnAudioPlay');
    const statusText = document.getElementById('audioStatusText');
    if (btn) {
      btn.innerHTML = speaking
        ? '<span>⏹</span> <span>หยุดฟังเสียง</span>'
        : '<span>🔊</span> <span>ฟังเสียงอ่าน</span>';
      if (speaking) btn.classList.add('playing');
      else btn.classList.remove('playing');
    }
    if (statusText) {
      statusText.innerHTML = speaking ? 'กำลังเล่นเสียง...' : 'พร้อมเล่นเสียง';
    }
  }
};

// ============================================================
// Dual Audio Manager: Native .wav Audio + SpeechEngine Fallback
// ============================================================
const AudioManager = {
  currentAudio: null,
  isPlaying: false,

  playExercise(exercise) {
    this.stop();

    if (!exercise) return;

    const audioPath = exercise.audio;
    if (audioPath) {
      const audio = new Audio(`${audioPath}?v=1.1.0`);
      this.currentAudio = audio;

      audio.onplay = () => {
        this.isPlaying = true;
        SpeechEngine.updateAudioButton(true);
        showToast(`กำลังเล่นไฟล์เสียง: ${exercise.title}`, 'info');
      };

      audio.onended = () => {
        this.isPlaying = false;
        SpeechEngine.updateAudioButton(false);
        this.currentAudio = null;
      };

      audio.onerror = () => {
        console.warn(`Native audio error for ${audioPath}, falling back to SpeechEngine TTS`);
        this.isPlaying = false;
        this.currentAudio = null;
        SpeechEngine.speakParagraphs(exercise.paragraphs || [exercise.passage]);
      };

      audio.play().catch(() => {
        this.isPlaying = false;
        this.currentAudio = null;
        SpeechEngine.speakParagraphs(exercise.paragraphs || [exercise.passage]);
      });
    } else {
      SpeechEngine.speakParagraphs(exercise.paragraphs || [exercise.passage]);
    }
  },

  stop() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    this.isPlaying = false;
    SpeechEngine.stop();
  },

  toggle(exercise) {
    if (this.isPlaying || SpeechEngine.isSpeaking) {
      this.stop();
    } else {
      this.playExercise(exercise);
    }
  }
};

// ============================================================
// Canvas Confetti
// ============================================================
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#007a87', '#ffcc00', '#06b6d4', '#10b981', '#f59e0b', '#253b95'];
  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      w: Math.random() * 8 + 6,
      h: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      gravity: 0.25,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 120) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }
  animate();
}

// ============================================================
// Toast Notification
// ============================================================
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ============================================================
// Main Application Controller
// ============================================================
const App = {
  exercises: [],

  init() {
    this.exercises = window.DEFAULT_EXERCISES || [];
    SpeechEngine.initVoices();
    SettingsController.init();
    I18N.applyTranslations();

    this.renderLandingGrid();
    this.bindEvents();
  },

  bindEvents() {
    // Navigation Brand -> Go Landing
    const brand = document.querySelector('.nav-brand');
    if (brand) brand.onclick = () => this.showLanding();

    // Language Toggle
    const btnLang = document.getElementById('btnLangToggle');
    if (btnLang) btnLang.onclick = () => I18N.toggleLanguage();

    // Settings Toggle
    const btnSettings = document.getElementById('btnSettings');
    if (btnSettings) btnSettings.onclick = () => SettingsController.openModal();

    // Diagnostics Toggle
    const btnSystem = document.getElementById('btnSystemCheck');
    if (btnSystem) btnSystem.onclick = () => SystemCheck.openModal();

    // Hero CTA Buttons
    const btnHeroStart = document.getElementById('btnHeroStart');
    if (btnHeroStart) btnHeroStart.onclick = () => this.openExercise(1);

    const btnHeroExplore = document.getElementById('btnHeroExplore');
    if (btnHeroExplore) {
      btnHeroExplore.onclick = () => {
        document.getElementById('exercisesSection').scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Keyboard Shortcuts (Esc to close Lightbox & Modals)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeImageLightbox();
        SettingsController.closeModal();
        SystemCheck.closeModal();
      }
    });
  },

  renderLandingGrid() {
    const container = document.getElementById('exercisesGrid');
    if (!container) return;

    container.innerHTML = this.exercises.map((ex) => {
      const savedScore = localStorage.getItem(`nw1_ex_${ex.id}_score`);
      const isCompleted = localStorage.getItem(`nw1_ex_${ex.id}_completed`) === 'true';

      return `
        <div class="exercise-card" onclick="App.openExercise(${ex.id})">
          <div class="card-image-wrap">
            <img class="card-img" src="${ex.image}" alt="${ex.title}" loading="lazy">
            <span class="card-unit-badge">${ex.unit} • CEF: ${ex.cefr}</span>
            <span class="card-audio-badge">
              🔊 Native WAV
            </span>
          </div>
          <div class="card-body">
            <h3 class="card-title">${ex.title}</h3>
            <p class="card-thai-title">${ex.thaiTitle}</p>
            
            <div class="card-parts-indicator">
              <span class="part-pill ${isCompleted ? 'completed' : ''}">Part 1: อ่าน</span>
              <span class="part-pill ${isCompleted ? 'completed' : ''}">Part 2: ศัพท์</span>
              <span class="part-pill ${isCompleted ? 'completed' : ''}">Part 3: เรียงประโยค</span>
            </div>

            <button class="card-action-btn">
              <span>${isCompleted ? 'ทบทวนบทเรียน (คะแนน: ' + savedScore + '/15)' : 'เข้าสู่บทเรียน ➔'}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  showLanding() {
    AudioManager.stop();
    AppState.currentView = 'landing';
    document.getElementById('viewLanding').classList.add('active');
    document.getElementById('viewDashboard').classList.remove('active');
    document.getElementById('viewPlayer').classList.remove('active');
    document.getElementById('viewSummary').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  showDashboard() {
    AudioManager.stop();
    AppState.currentView = 'dashboard';
    document.getElementById('viewLanding').classList.remove('active');
    document.getElementById('viewDashboard').classList.add('active');
    document.getElementById('viewPlayer').classList.remove('active');
    document.getElementById('viewSummary').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderLandingGrid();
  },

  openExercise(id) {
    AudioManager.stop();
    const ex = this.exercises.find(e => e.id === id);
    if (!ex) return;

    AppState.currentExercise = ex;
    AppState.currentView = 'player';
    AppState.activeTab = 'partA';
    AppState.answers = { partA: {}, partB: {}, partC: {} };
    AppState.answerKeyRevealed = { partA: false, partB: false, partC: false };
    AppState.submitted = { partA: false, partB: false, partC: false };
    AppState.scores = { partA: 0, partB: 0, partC: 0, total: 0 };
    AppState.partBActiveSlot = 0;

    // Clear Part Summary Banners & Key Button Styles
    ['A', 'B', 'C'].forEach(p => {
      const banner = document.getElementById(`partSummaryBanner${p}`);
      if (banner) banner.innerHTML = '';
      const btnKey = document.getElementById(`btnKeyPart${p}`);
      if (btnKey) {
        btnKey.className = 'btn-answer-key';
        btnKey.innerHTML = '<span>🔑</span> <span>ดูเฉลยพร้อมคำอธิบาย & สรุปคะแนน</span>';
      }
    });

    // View Switching
    document.getElementById('viewLanding').classList.remove('active');
    document.getElementById('viewDashboard').classList.remove('active');
    document.getElementById('viewSummary').classList.remove('active');
    document.getElementById('viewPlayer').classList.add('active');

    // Render Components
    this.renderPlayerHeader(ex);
    this.renderPassagePanel(ex);
    this.renderPartA(ex);
    this.renderPartB(ex);
    this.renderPartC(ex);
    this.renderReviewTab(ex);

    this.switchQuizTab('partA');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderPlayerHeader(ex) {
    const metaBox = document.getElementById('playerUnitMeta');
    if (metaBox) {
      metaBox.innerHTML = `
        <h3>${ex.unit}: ${ex.title}</h3>
        <p>${ex.thaiTitle}</p>
      `;
    }
  },

  renderPassagePanel(ex) {
    const bannerImg = document.getElementById('passageBannerImg');
    if (bannerImg) bannerImg.src = ex.image;

    const scrollArea = document.getElementById('passageScrollArea');
    if (scrollArea) {
      scrollArea.innerHTML = ex.paragraphs.map((p, idx) => `
        <p data-p-idx="${idx}"><span class="para-badge">¶${idx + 1}</span>${p}</p>
      `).join('');
    }

    const btnAudio = document.getElementById('btnAudioPlay');
    if (btnAudio) {
      btnAudio.onclick = () => AudioManager.toggle(ex);
    }

    const engineBadge = document.getElementById('audioEngineBadge');
    if (engineBadge) {
      engineBadge.innerHTML = '🔊 Native WAV เสียงจริง (เจ้าของภาษา)';
    }
  },

  // ============================================================
  // Image Lightbox Controller (Popup Zoom & Shrink)
  // ============================================================
  openImageLightbox(src = null, title = null) {
    const modal = document.getElementById('imageLightboxModal');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    if (!modal || !img) return;

    const ex = AppState.currentExercise;
    img.src = src || (ex ? ex.image : 'assets/images/cover.jpg');
    if (caption) {
      caption.innerText = title || (ex ? `${ex.unit}: ${ex.title} (${ex.thaiTitle})` : 'NEW Weaving It Together 1');
    }

    AppState.lightboxZoom = 1;
    img.style.transform = 'scale(1)';
    modal.classList.add('active');
  },

  closeImageLightbox() {
    const modal = document.getElementById('imageLightboxModal');
    if (modal) modal.classList.remove('active');
    AppState.lightboxZoom = 1;
  },

  zoomLightbox(delta) {
    const img = document.getElementById('lightboxImg');
    if (!img) return;
    AppState.lightboxZoom = Math.min(Math.max(AppState.lightboxZoom + delta, 0.5), 3.0);
    img.style.transform = `scale(${AppState.lightboxZoom})`;
    showToast(`ระดับการซูม: ${Math.round(AppState.lightboxZoom * 100)}%`, 'info');
  },

  resetLightboxZoom() {
    const img = document.getElementById('lightboxImg');
    if (!img) return;
    AppState.lightboxZoom = 1;
    img.style.transform = 'scale(1)';
    showToast('รีเซ็ตขนาดภาพเป็นปกติ (100%)', 'info');
  },

  toggleLightboxZoomClick(event) {
    if (event.target.id === 'lightboxImg') {
      if (AppState.lightboxZoom === 1) {
        this.zoomLightbox(0.6);
      } else {
        this.resetLightboxZoom();
      }
    }
  },

  switchQuizTab(tabKey) {
    AppState.activeTab = tabKey;
    document.querySelectorAll('.quiz-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabKey);
    });

    document.querySelectorAll('.quiz-tab-page').forEach(page => {
      page.classList.toggle('active', page.id === `page_${tabKey}`);
    });
  },

  // ============================================================
  // Part A: Comprehension Questions
  // ============================================================
  renderPartA(ex) {
    const container = document.getElementById('partAQuestionsList');
    if (!container) return;

    container.innerHTML = ex.partA.map((q, qIdx) => `
      <div class="question-block" id="qA_block_${qIdx}">
        <div class="question-prompt">
          <span class="question-number-tag">ข้อที่ ${qIdx + 1}</span>
          <span>${q.question}</span>
        </div>
        <div class="options-stack">
          ${q.options.map(opt => `
            <button class="option-btn" id="opt_btn_${qIdx}_${opt.key}" onclick="App.selectPartAOption(${qIdx}, '${opt.key}')">
              <span class="option-letter">${opt.key.toUpperCase()}</span>
              <span class="option-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="explanation-card" id="exp_card_${qIdx}">
          <strong>💡 คำอธิบายเฉลย:</strong> ${q.explanation}
          <span class="ref-cite">📌 อ้างอิง: ${q.ref}</span>
        </div>
      </div>
    `).join('');

    const scoreBadge = document.getElementById('partAScoreBadge');
    if (scoreBadge) scoreBadge.innerText = '0 / 5';
  },

  selectPartAOption(qIdx, optKey) {
    const ex = AppState.currentExercise;
    if (!ex) return;

    AppState.answers.partA[qIdx] = optKey;

    // Reset button styles in this block (neutral)
    ['a', 'b', 'c'].forEach(k => {
      const btn = document.getElementById(`opt_btn_${qIdx}_${k}`);
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
      }
    });

    // Mark as selected only (no correct/wrong colors or explanation revealed yet)
    const selectedBtn = document.getElementById(`opt_btn_${qIdx}_${optKey}`);
    if (selectedBtn) selectedBtn.classList.add('selected');
  },

  checkPartAAnswers() {
    const ex = AppState.currentExercise;
    if (!ex) return;

    let score = 0;
    const answeredCount = Object.keys(AppState.answers.partA).length;
    const banner = document.getElementById('partSummaryBannerA');

    ex.partA.forEach((q, qIdx) => {
      const userAns = AppState.answers.partA[qIdx];
      const correctBtn = document.getElementById(`opt_btn_${qIdx}_${q.answer}`);
      const expCard = document.getElementById(`exp_card_${qIdx}`);

      // Reset
      ['a', 'b', 'c'].forEach(k => {
        const btn = document.getElementById(`opt_btn_${qIdx}_${k}`);
        if (btn) btn.classList.remove('correct', 'wrong');
      });

      if (userAns) {
        const userBtn = document.getElementById(`opt_btn_${qIdx}_${userAns}`);
        if (userAns === q.answer) {
          score++;
          if (userBtn) userBtn.classList.add('correct');
        } else {
          if (userBtn) userBtn.classList.add('wrong');
          if (correctBtn) correctBtn.classList.add('correct');
        }
      } else {
        // Unanswered: reveal correct answer in green
        if (correctBtn) correctBtn.classList.add('correct');
      }

      // Reveal explanation card
      if (expCard) expCard.classList.add('active');
    });

    // Score based only on answered items
    AppState.scores.partA = score;
    AppState.submitted.partA = true;
    AppState.answerKeyRevealed.partA = true;

    const btnKey = document.getElementById('btnKeyPartA');
    if (btnKey) {
      btnKey.classList.add('active-key');
      btnKey.innerHTML = '<span>🔒</span> <span>ซ่อนเฉลย & คำอธิบาย</span>';
    }

    const scoreBadge = document.getElementById('partAScoreBadge');
    if (scoreBadge) scoreBadge.innerText = `${score} / 5`;

    if (banner) {
      banner.innerHTML = `
        <div class="part-summary-toast-box">
          <div style="font-weight:700; font-size:1rem;">📊 สรุปคะแนน Part 1 (การอ่าน): <span style="color:#047857;">${score} / 5 คะแนน</span></div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
            ${answeredCount === 5 ? 'ทำครบทั้ง 5 ข้อ ตอบถูกต้อง ' + score + ' ข้อ' : 'ทำไป ' + answeredCount + '/5 ข้อ (ตอบถูกต้อง ' + score + ' ข้อ ได้ ' + score + ' คะแนน)'}
          </div>
        </div>
      `;
    }

    if (score >= 3) SoundFX.playCorrect();
    else if (answeredCount > 0) SoundFX.playWrong();
    showToast(`ตรวจ & สรุปคะแนน Part 1: ได้ ${score} / 5 คะแนน`, 'success');
  },

  // ============================================================
  // Part B: Word Bank Cloze Test
  // ============================================================
  renderPartB(ex) {
    const chipsContainer = document.getElementById('wordBankChips');
    if (chipsContainer) {
      chipsContainer.innerHTML = ex.partB.wordBank.map(w => `
        <span class="wordbank-chip" id="wb_chip_${w.replace(/\s+/g, '_')}" onclick="App.clickWordBankChip('${w}')">
          ${w}
        </span>
      `).join('');
    }

    const sentencesContainer = document.getElementById('clozeSentencesList');
    if (sentencesContainer) {
      sentencesContainer.innerHTML = ex.partB.questions.map((q, idx) => `
        <div class="cloze-sentence-card" id="cloze_block_${idx}">
          <div class="cloze-sentence-line">
            <strong>${idx + 1}.</strong> ${q.prefix}
            <span class="cloze-blank-slot empty" id="cloze_slot_${idx}" onclick="App.focusPartBSlot(${idx})">
              <span id="cloze_val_${idx}">(แตะคำศัพท์ด้านบน)</span>
              <button class="btn-clear-slot" onclick="event.stopPropagation(); App.clearPartBSlot(${idx})" title="ลบ">✕</button>
            </span>
            ${q.suffix}
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">
            💡 คำใบ้: ${q.hint}
          </div>
          <div class="answer-key-reveal-box" id="key_box_B_${idx}">
            <strong>เฉลย:</strong> ${q.answer} <span style="color:#047857; margin-left:8px;">(${q.hint})</span>
          </div>
        </div>
      `).join('');
    }

    const scoreBadge = document.getElementById('partBScoreBadge');
    if (scoreBadge) scoreBadge.innerText = '0 / 5';
  },

  focusPartBSlot(idx) {
    AppState.partBActiveSlot = idx;
    document.querySelectorAll('.cloze-blank-slot').forEach((el, i) => {
      el.classList.toggle('active-focus', i === idx);
    });
  },

  clickWordBankChip(word) {
    const ex = AppState.currentExercise;
    if (!ex) return;

    const existingSlot = Object.keys(AppState.answers.partB).find(k => AppState.answers.partB[k] === word);
    if (existingSlot !== undefined) {
      showToast(`คำว่า '${word}' ถูกใช้ไปแล้วในข้อที่ ${Number(existingSlot) + 1}`, 'info');
      return;
    }

    let targetSlot = AppState.partBActiveSlot;
    if (AppState.answers.partB[targetSlot]) {
      const nextEmpty = ex.partB.questions.findIndex((_, idx) => !AppState.answers.partB[idx]);
      if (nextEmpty !== -1) targetSlot = nextEmpty;
    }

    AppState.answers.partB[targetSlot] = word;
    this.updatePartBUI();

    const nextSlot = ex.partB.questions.findIndex((_, idx) => !AppState.answers.partB[idx]);
    if (nextSlot !== -1) this.focusPartBSlot(nextSlot);
  },

  clearPartBSlot(slotIdx) {
    delete AppState.answers.partB[slotIdx];
    this.updatePartBUI();
    this.focusPartBSlot(slotIdx);
  },

  updatePartBUI() {
    const ex = AppState.currentExercise;
    if (!ex) return;

    const usedWords = Object.values(AppState.answers.partB);

    ex.partB.wordBank.forEach(w => {
      const chip = document.getElementById(`wb_chip_${w.replace(/\s+/g, '_')}`);
      if (chip) chip.classList.toggle('used', usedWords.includes(w));
    });

    ex.partB.questions.forEach((q, idx) => {
      const slot = document.getElementById(`cloze_slot_${idx}`);
      const val = document.getElementById(`cloze_val_${idx}`);
      const chosenWord = AppState.answers.partB[idx];

      if (slot && val) {
        if (chosenWord) {
          slot.classList.remove('empty');
          const needsCapital = !q.prefix || q.prefix.trim() === '' || q.prefix.trim().endsWith('.');
          val.innerText = needsCapital ? (chosenWord.charAt(0).toUpperCase() + chosenWord.slice(1)) : chosenWord;
        } else {
          slot.classList.add('empty');
          val.innerText = '(แตะคำศัพท์ด้านบน)';
        }
      }
    });
  },

  checkPartBAnswers() {
    const ex = AppState.currentExercise;
    if (!ex) return;

    let score = 0;
    const filledCount = Object.keys(AppState.answers.partB).filter(k => AppState.answers.partB[k]).length;
    const banner = document.getElementById('partSummaryBannerB');

    ex.partB.questions.forEach((q, idx) => {
      const userWord = (AppState.answers.partB[idx] || '').trim().toLowerCase();
      const targetWord = q.answer.trim().toLowerCase();
      const slot = document.getElementById(`cloze_slot_${idx}`);
      const keyBox = document.getElementById(`key_box_B_${idx}`);

      if (slot) {
        slot.classList.remove('correct', 'wrong');
        if (userWord) {
          if (userWord === targetWord) {
            score++;
            slot.classList.add('correct');
            if (keyBox) {
              keyBox.innerHTML = `<span>✅ <strong>ถูกต้อง!</strong> คำตอบคือ: <em>${q.answer}</em> (${q.hint})</span>`;
              keyBox.classList.add('active');
            }
          } else {
            // หากตอบผิด ให้แสดงสีแดง และเฉลยคำตอบที่ถูกด้วย
            slot.classList.add('wrong');
            if (keyBox) {
              keyBox.innerHTML = `<span style="color:#b91c1c;">❌ คุณตอบ: "<strong>${AppState.answers.partB[idx]}</strong>"</span> ➔ <span style="color:#047857; margin-left:8px;">คำตอบที่ถูกต้องคือ: <strong>${q.answer}</strong> (${q.hint})</span>`;
              keyBox.classList.add('active');
            }
          }
        } else {
          // ยังไม่ได้ตอบ เติมเฉลยคำตอบที่ถูก
          if (keyBox) {
            keyBox.innerHTML = `<span>💡 คำตอบที่ถูกต้องคือ: <strong>${q.answer}</strong> (${q.hint})</span>`;
            keyBox.classList.add('active');
          }
        }
      }
    });

    AppState.scores.partB = score;
    AppState.submitted.partB = true;
    AppState.answerKeyRevealed.partB = true;

    const btnKey = document.getElementById('btnKeyPartB');
    if (btnKey) {
      btnKey.classList.add('active-key');
      btnKey.innerHTML = '<span>🔒</span> <span>ซ่อนเฉลย & คำใบ้</span>';
    }

    const scoreBadge = document.getElementById('partBScoreBadge');
    if (scoreBadge) scoreBadge.innerText = `${score} / 5`;

    if (banner) {
      banner.innerHTML = `
        <div class="part-summary-toast-box">
          <div style="font-weight:700; font-size:1rem;">📊 สรุปคะแนน Part 2 (คำศัพท์): <span style="color:#047857;">${score} / 5 คะแนน</span></div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
            ${filledCount === 5 ? 'เติมครบทั้ง 5 ข้อ ตอบถูกต้อง ' + score + ' ข้อ' : 'เติมไป ' + filledCount + '/5 ข้อ (ตอบถูกต้อง ' + score + ' ข้อ ได้ ' + score + ' คะแนน)'}
          </div>
        </div>
      `;
    }

    if (score >= 3) SoundFX.playCorrect();
    else if (filledCount > 0) SoundFX.playWrong();
    showToast(`ตรวจ & สรุปคะแนน Part 2: ได้ ${score} / 5 คะแนน`, 'success');
  },

  // ============================================================
  // Part C: Sentence Unscramble
  // ============================================================
  renderPartC(ex) {
    const container = document.getElementById('unscrambleCardsList');
    if (!container) return;

    container.innerHTML = ex.partC.map((q, qIdx) => {
      AppState.answers.partC[qIdx] = [];

      return `
        <div class="unscramble-card" id="unscramble_block_${qIdx}">
          <div class="unscramble-q-num">ข้อที่ ${qIdx + 1}</div>
          
          <div class="unscramble-dropzone" id="dropzone_${qIdx}">
            <span style="color:var(--text-muted); font-size:0.85rem;" id="dropzone_hint_${qIdx}">แตะกลุ่มคำด้านล่างเพื่อเรียงประโยค</span>
          </div>

          <div class="unscramble-bank" id="token_bank_${qIdx}">
            ${q.tokens.map((token, tIdx) => `
              <span class="token-bank-pill" id="token_pill_${qIdx}_${tIdx}" onclick="App.addTokenToLine(${qIdx}, '${token.replace(/'/g, "\\'")}', ${tIdx})">
                ${token}
              </span>
            `).join('')}
          </div>

          <div class="unscramble-actions">
            <button class="btn-sm-action btn-reset-tokens" onclick="App.resetTokensLine(${qIdx})">ล้างแถวนี้ ↺</button>
          </div>

          <div class="answer-key-reveal-box" id="key_box_C_${qIdx}">
            <strong>เฉลยประโยคที่ถูกต้อง:</strong> ${q.correct}
          </div>
        </div>
      `;
    }).join('');

    const scoreBadge = document.getElementById('partCScoreBadge');
    if (scoreBadge) scoreBadge.innerText = '0 / 5';
  },

  addTokenToLine(qIdx, token, tokenIdx) {
    const pill = document.getElementById(`token_pill_${qIdx}_${tokenIdx}`);
    if (pill.classList.contains('used')) return;

    pill.classList.add('used');
    AppState.answers.partC[qIdx].push({ token, tokenIdx });
    this.updateDropzoneUI(qIdx);
  },

  removePlacedToken(qIdx, placedIdx) {
    const removed = AppState.answers.partC[qIdx].splice(placedIdx, 1)[0];
    if (removed) {
      const pill = document.getElementById(`token_pill_${qIdx}_${removed.tokenIdx}`);
      if (pill) pill.classList.remove('used');
    }
    this.updateDropzoneUI(qIdx);
  },

  resetTokensLine(qIdx) {
    AppState.answers.partC[qIdx] = [];
    const ex = AppState.currentExercise;
    if (ex && ex.partC[qIdx]) {
      ex.partC[qIdx].tokens.forEach((_, tIdx) => {
        const pill = document.getElementById(`token_pill_${qIdx}_${tIdx}`);
        if (pill) pill.classList.remove('used');
      });
    }
    this.updateDropzoneUI(qIdx);
  },

  updateDropzoneUI(qIdx) {
    const dropzone = document.getElementById(`dropzone_${qIdx}`);
    const tokens = AppState.answers.partC[qIdx];
    if (!dropzone) return;

    dropzone.classList.remove('correct', 'wrong');

    if (tokens.length === 0) {
      dropzone.classList.remove('has-tokens');
      dropzone.innerHTML = `<span style="color:var(--text-muted); font-size:0.85rem;" id="dropzone_hint_${qIdx}">แตะกลุ่มคำด้านล่างเพื่อเรียงประโยค</span>`;
    } else {
      dropzone.classList.add('has-tokens');
      dropzone.innerHTML = tokens.map((item, pIdx) => `
        <span class="placed-token-pill" onclick="App.removePlacedToken(${qIdx}, ${pIdx})">
          <span>${item.token}</span>
          <span style="font-size:0.75rem;">✕</span>
        </span>
      `).join('');
    }
  },

  normalizeSentence(str) {
    return (str || '')
      .replace(/[.,!?;:\"\'\-–]/g, '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');
  },

  checkPartCAnswers() {
    const ex = AppState.currentExercise;
    if (!ex) return;

    let score = 0;
    const attemptedCount = Object.keys(AppState.answers.partC).filter(k => AppState.answers.partC[k] && AppState.answers.partC[k].length > 0).length;
    const banner = document.getElementById('partSummaryBannerC');

    ex.partC.forEach((q, qIdx) => {
      const userTokens = AppState.answers.partC[qIdx] || [];
      const userSentence = userTokens.map(t => t.token).join(' ');
      const userNorm = this.normalizeSentence(userSentence);
      const targetNorm = this.normalizeSentence(q.correct);
      const dropzone = document.getElementById(`dropzone_${qIdx}`);
      const keyBox = document.getElementById(`key_box_C_${qIdx}`);

      if (dropzone) {
        dropzone.classList.remove('correct', 'wrong');
        if (userTokens.length > 0) {
          if (userNorm === targetNorm) {
            score++;
            dropzone.classList.add('correct');
            if (keyBox) {
              keyBox.innerHTML = `<span>✅ <strong>ถูกต้อง!</strong> ประโยค: <em>${q.correct}</em></span>`;
              keyBox.classList.add('active');
            }
          } else {
            // ตอบผิด: แสดงสีแดง และเฉลยประโยคที่ถูก
            dropzone.classList.add('wrong');
            if (keyBox) {
              keyBox.innerHTML = `<span style="color:#b91c1c;">❌ ลำดับคำยังไม่ถูกต้อง</span> ➔ <span style="color:#047857; margin-left:8px;">เฉลยประโยคที่ถูกต้อง: <strong>${q.correct}</strong></span>`;
              keyBox.classList.add('active');
            }
          }
        } else {
          // ยังไม่ได้ทำ
          if (keyBox) {
            keyBox.innerHTML = `<span>💡 เฉลยประโยคที่ถูกต้อง: <strong>${q.correct}</strong></span>`;
            keyBox.classList.add('active');
          }
        }
      }
    });

    AppState.scores.partC = score;
    AppState.submitted.partC = true;
    AppState.answerKeyRevealed.partC = true;

    const btnKey = document.getElementById('btnKeyPartC');
    if (btnKey) {
      btnKey.classList.add('active-key');
      btnKey.innerHTML = '<span>🔒</span> <span>ซ่อนเฉลย</span>';
    }

    const scoreBadge = document.getElementById('partCScoreBadge');
    if (scoreBadge) scoreBadge.innerText = `${score} / 5`;

    if (banner) {
      banner.innerHTML = `
        <div class="part-summary-toast-box">
          <div style="font-weight:700; font-size:1rem;">📊 สรุปคะแนน Part 3 (เรียงประโยค): <span style="color:#047857;">${score} / 5 คะแนน</span></div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
            ${attemptedCount === 5 ? 'เรียงครบทั้ง 5 ข้อ ถูกต้อง ' + score + ' ข้อ' : 'ทำไป ' + attemptedCount + '/5 ข้อ (ถูกต้อง ' + score + ' ข้อ ได้ ' + score + ' คะแนน)'}
          </div>
        </div>
      `;
    }

    if (score >= 3) SoundFX.playCorrect();
    else if (attemptedCount > 0) SoundFX.playWrong();
    showToast(`ตรวจ & สรุปคะแนน Part 3: ได้ ${score} / 5 คะแนน`, 'success');
  },

  // ============================================================
  // Universal Answer Key Toggle per Part (ปุ่มเฉลยพร้อมคำอธิบาย & สรุปคะแนน)
  // ============================================================
  toggleAnswerKey(partKey) {
    const ex = AppState.currentExercise;
    if (!ex) return;

    // If already showing, toggle hiding it; if not showing, check & reveal answers
    if (AppState.answerKeyRevealed[partKey]) {
      // Hide
      AppState.answerKeyRevealed[partKey] = false;
      if (partKey === 'partA') {
        const btn = document.getElementById('btnKeyPartA');
        if (btn) {
          btn.classList.remove('active-key');
          btn.innerHTML = '<span>🔑</span> <span>ดูเฉลยพร้อมคำอธิบาย & สรุปคะแนน</span>';
        }
        ex.partA.forEach((_, qIdx) => {
          const expCard = document.getElementById(`exp_card_${qIdx}`);
          if (expCard) expCard.classList.remove('active');
        });
        showToast('ซ่อนเฉลย Part 1', 'info');
      } else if (partKey === 'partB') {
        const btn = document.getElementById('btnKeyPartB');
        if (btn) {
          btn.classList.remove('active-key');
          btn.innerHTML = '<span>🔑</span> <span>ดูเฉลยพร้อมคำอธิบาย & สรุปคะแนน</span>';
        }
        ex.partB.questions.forEach((_, idx) => {
          const keyBox = document.getElementById(`key_box_B_${idx}`);
          if (keyBox) keyBox.classList.remove('active');
        });
        showToast('ซ่อนเฉลย Part 2', 'info');
      } else if (partKey === 'partC') {
        const btn = document.getElementById('btnKeyPartC');
        if (btn) {
          btn.classList.remove('active-key');
          btn.innerHTML = '<span>🔑</span> <span>ดูเฉลยพร้อมคำอธิบาย & สรุปคะแนน</span>';
        }
        ex.partC.forEach((_, qIdx) => {
          const keyBox = document.getElementById(`key_box_C_${qIdx}`);
          if (keyBox) keyBox.classList.remove('active');
        });
        showToast('ซ่อนเฉลย Part 3', 'info');
      }
    } else {
      // Evaluate & Reveal
      if (partKey === 'partA') this.checkPartAAnswers();
      else if (partKey === 'partB') this.checkPartBAnswers();
      else if (partKey === 'partC') this.checkPartCAnswers();
    }
  },

  // ============================================================
  // Review & Grammar Tab
  // ============================================================
  renderReviewTab(ex) {
    const vocabBody = document.getElementById('reviewVocabBody');
    if (vocabBody && ex.review && ex.review.keyVocab) {
      vocabBody.innerHTML = ex.review.keyVocab.map(v => `
        <tr>
          <td class="vocab-word">${v.word}</td>
          <td class="vocab-pos">${v.pos}</td>
          <td class="vocab-meaning">${v.meaning}</td>
          <td>
            <button class="btn-speak-word" onclick="SpeechEngine.speakWord('${v.word}')" title="ฟังการออกเสียง">
              🔊
            </button>
          </td>
        </tr>
      `).join('');
    }

    const grammarCard = document.getElementById('reviewGrammarCard');
    if (grammarCard && ex.review && ex.review.grammarTip) {
      grammarCard.innerHTML = `
        <p><strong>🇬🇧 Grammar Rule:</strong> ${ex.review.grammarTip.en}</p>
        <p><strong>🇹🇭 คำอธิบายภาษาไทย:</strong> ${ex.review.grammarTip.th}</p>
      `;
    }
  },

  // ============================================================
  // Finish Unit & Score Summary
  // ============================================================
  finishExercise() {
    AudioManager.stop();
    const ex = AppState.currentExercise;
    if (!ex) return;

    // Automatically evaluate each part if not submitted yet (คิดเฉพาะข้อที่ทำ)
    if (!AppState.submitted.partA) this.checkPartAAnswers();
    if (!AppState.submitted.partB) this.checkPartBAnswers();
    if (!AppState.submitted.partC) this.checkPartCAnswers();

    const total = AppState.scores.partA + AppState.scores.partB + AppState.scores.partC;
    AppState.scores.total = total;

    // Save to LocalStorage
    localStorage.setItem(`nw1_ex_${ex.id}_score`, total);
    localStorage.setItem(`nw1_ex_${ex.id}_completed`, 'true');

    AppState.currentView = 'summary';
    document.getElementById('viewLanding').classList.remove('active');
    document.getElementById('viewDashboard').classList.remove('active');
    document.getElementById('viewPlayer').classList.remove('active');
    document.getElementById('viewSummary').classList.add('active');

    // Populate Summary Screen
    const sumTitle = document.getElementById('summaryUnitTitle');
    if (sumTitle) sumTitle.innerText = `${ex.unit}: ${ex.title}`;

    const scoreNum = document.getElementById('summaryTotalNum');
    if (scoreNum) scoreNum.innerText = total;

    const scoreA = document.getElementById('sumScorePartA');
    if (scoreA) scoreA.innerText = `${AppState.scores.partA} / 5`;

    const scoreB = document.getElementById('sumScorePartB');
    if (scoreB) scoreB.innerText = `${AppState.scores.partB} / 5`;

    const scoreC = document.getElementById('sumScorePartC');
    if (scoreC) scoreC.innerText = `${AppState.scores.partC} / 5`;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (total >= 12) {
      SoundFX.playFanfare();
      launchConfetti();
    } else {
      SoundFX.playCorrect();
    }
  },

  nextExercise() {
    const currentId = AppState.currentExercise ? AppState.currentExercise.id : 1;
    if (currentId < 8) {
      this.openExercise(currentId + 1);
    } else {
      this.showDashboard();
    }
  }
};

window.App = App;
window.SpeechEngine = SpeechEngine;
window.AudioManager = AudioManager;
window.SoundFX = SoundFX;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
