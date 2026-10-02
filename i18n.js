/**
 * NEW Weaving It Together 1 (ม.4) - Bilingual i18n Engine (TH / EN)
 * Complete real-time language switcher
 */

const I18N = {
  currentLang: localStorage.getItem('nw1_lang') || 'th',

  dict: {
    // Top Navigation
    nav_title: { th: 'NEW Weaving It Together 1', en: 'NEW Weaving It Together 1' },
    nav_subtitle: { th: 'สำนักพิมพ์ไทยวัฒนาพานิช (ม.4)', en: 'Thai Watana Panich (Grade 10 / M.4)' },
    nav_btn_settings: { th: 'ตั้งค่า', en: 'Settings' },
    nav_btn_system: { th: 'ตรวจระบบ', en: 'Diagnostics' },
    nav_btn_lang: { th: 'EN', en: 'ไทย' },
    nav_home: { th: 'หน้าแรก', en: 'Home' },
    nav_units: { th: 'รวมบทเรียน', en: 'Units' },
    btn_back_home: { th: '← กลับหน้าแรก (Home)', en: '← Back to Home' },

    // Landing Page
    hero_badge_series: { th: 'มัธยมศึกษาปีที่ 4 • ระดับ CEF: A2', en: 'Grade 10 (M.4) • CEF: A2 Level' },
    hero_badge_twp: { th: 'สำนักพิมพ์ไทยวัฒนาพานิช', en: 'Thai Watana Panich Publisher' },
    hero_title: { th: 'NEW Weaving It Together 1', en: 'NEW Weaving It Together 1' },
    hero_subtitle: { th: 'เชื่อมโยงทักษะการอ่านและการเขียนภาษาอังกฤษอย่างมั่นใจ', en: 'Connecting Reading and Writing with Confidence' },
    hero_desc: {
      th: 'เว็บแอปพลิเคชันเพื่อการศึกษาบูรณาการ 8 บทเรียนสำคัญ เป็นแบบฝึกหัดเพิ่มเติม เสียงอ่านเจ้าของภาษาแท้ (.wav) ระบบทดสอบ 3 พาร์ทเข้มข้น และสรุปคะแนนอัตโนมัติ รองรับทุกอุปกรณ์',
      en: 'Educational web app featuring 8 core units as supplementary exercises, authentic native audio (.wav), 3 rigorous learning parts, and automatic scoring across all devices.'
    },
    hero_btn_enter: { th: 'เข้าสู่ระบบเพื่อทำแบบฝึกหัด ➔', en: 'Enter Exercises ➔' },
    hero_btn_start: { th: 'เริ่มเรียนรู้ Unit 1', en: 'Start Unit 1' },
    hero_btn_explore: { th: 'เลือกบทเรียนทั้งหมด', en: 'Explore All Units' },

    // Stats Bar
    stat_units: { th: '8 บทเรียน', en: '8 Units' },
    stat_units_sub: { th: 'ครอบคลุมครบหลักสูตร', en: 'Full Curriculum' },
    stat_parts: { th: '3 พาร์ท / บท', en: '3 Parts / Unit' },
    stat_parts_sub: { th: 'อ่าน • ศัพท์ • โครงสร้าง', en: 'Reading • Vocab • Syntax' },
    stat_audio: { th: 'ระบบเสียงคู่', en: 'Dual Audio' },
    stat_audio_sub: { th: 'Native WAV + TTS ธรรมชาติ', en: 'Native WAV + Natural TTS' },
    stat_offline: { th: 'ออฟไลน์ 100%', en: '100% Offline' },
    stat_offline_sub: { th: 'พร้อมใช้งานทุกเบราว์เซอร์', en: 'Ready on any browser' },

    // Units Grid Section
    section_units_title: { th: 'บทเรียนและแบบฝึกหัด (Exercises 1–8)', en: 'Units & Exercises (1–8)' },
    section_units_sub: { th: 'เลือกบทเรียนที่ต้องการเพื่อฝึกทักษะการอ่าน คำศัพท์ และการเรียงประโยค', en: 'Select a unit to practice reading, vocabulary, and sentence structure' },
    btn_start_unit: { th: 'เข้าสู่บทเรียน ➔', en: 'Start Exercise ➔' },
    badge_native_audio: { th: '🔊 เสียงจริง .wav', en: '🔊 Native .wav' },
    badge_tts_audio: { th: '🎙️ เสียงอ่าน TTS', en: '🎙️ Natural TTS' },

    // Player Bar
    btn_back_to_units: { th: '← กลับหน้ารวมบทเรียน', en: '← Back to Units' },
    btn_listen_audio: { th: 'ฟังเสียงอ่าน', en: 'Listen Audio' },
    btn_stop_audio: { th: 'หยุดฟังเสียง', en: 'Stop Audio' },
    audio_ready: { th: 'พร้อมเล่นเสียง', en: 'Audio Ready' },
    audio_playing: { th: 'กำลังเล่นเสียง...', en: 'Playing Audio...' },

    // Sticky Passage Panel
    panel_reading_title: { th: 'เนื้อหาบทอ่าน (Reading Passage)', en: 'Reading Passage' },

    // Quiz Tabs
    tab_part_a: { th: 'Part 1: การอ่าน', en: 'Part 1: Reading' },
    tab_part_b: { th: 'Part 2: เติมคำศัพท์', en: 'Part 2: Word Bank' },
    tab_part_c: { th: 'Part 3: เรียงประโยค', en: 'Part 3: Unscramble' },
    tab_review: { th: 'สรุป & ไวยากรณ์', en: 'Review & Grammar' },

    // Instructions
    inst_part_a_title: { th: 'Comprehension Questions (ตอบคำถามจากบทอ่าน)', en: 'Comprehension Questions' },
    inst_part_a_sub: { th: 'เลือกคำตอบที่ถูกต้องที่สุดตามเนื้อหาในบทอ่านด้านซ้าย', en: 'Choose the best answer based on the passage on the left' },
    inst_part_b_title: { th: 'Word Bank: Fill in the Blanks (เติมคำศัพท์ในช่องว่าง)', en: 'Word Bank: Fill in the Blanks' },
    inst_part_b_sub: { th: 'แตะเลือกคำศัพท์จากกล่องด้านบนเพื่อนำมาเติมลงในช่องว่างให้สมบูรณ์', en: 'Select words from the word bank above to complete each sentence' },
    inst_part_c_title: { th: 'Sentence Unscramble (เรียงคำเป็นประโยคที่ถูกต้อง)', en: 'Sentence Unscramble' },
    inst_part_c_sub: { th: 'แตะกลุ่มคำด้านล่างเพื่อเรียงเป็นประโยคตามหลักไวยากรณ์และความหมาย', en: 'Tap the token chunks below to build the correct grammatical sentence' },

    // Action Buttons
    btn_check_answers: { th: 'ตรวจคำตอบ', en: 'Check Answers' },
    btn_show_key: { th: '🔑 ดูเฉลยพร้อมคำอธิบาย', en: '🔑 Show Answer Key & Notes' },
    btn_hide_key: { th: '🔒 ซ่อนเฉลย', en: '🔒 Hide Answer Key' },
    btn_summary_part: { th: '📊 ตรวจ & สรุปคะแนนพาร์ทนี้', en: '📊 Check & Summarize Part' },
    btn_check_and_key: { th: 'ตรวจคะแนน & ดูเฉลยพร้อมคำอธิบาย', en: 'Check Score & View Solutions' },
    alert_incomplete: { th: '⚠️ ทำไม่ครบ 5 ข้อในพาร์ทนี้ ได้รับ 0 คะแนน (ต้องทำครบทุกข้อจึงจะได้คะแนน)', en: '⚠️ Incomplete: You must answer all 5 questions to receive points (Score is 0).' },
    zoom_hint: { th: '🔍 แตะเพื่อขยายภาพ', en: '🔍 Tap to zoom image' },
    btn_reset_tokens: { th: 'ล้างคำตอบ', en: 'Reset' },
    btn_next_part: { th: 'ไปพาร์ทถัดไป ➔', en: 'Next Part ➔' },
    btn_next_review: { th: 'ไปสรุป & ไวยากรณ์ ➔', en: 'Go to Review & Grammar ➔' },
    btn_finish_unit: { th: 'สรุปคะแนนบทนี้ 🎉', en: 'Finish & View Score 🎉' },

    // Review Tab
    review_vocab_title: { th: '📚 คำศัพท์สำคัญประจำบท (Key Vocabulary)', en: '📚 Key Vocabulary' },
    review_grammar_title: { th: '💡 สรุปหลักไวยากรณ์ (Grammar Focus)', en: '💡 Grammar Focus' },
    col_word: { th: 'คำศัพท์', en: 'Word' },
    col_pos: { th: 'ชนิดคำ', en: 'Type' },
    col_meaning: { th: 'ความหมายภาษาไทย', en: 'Meaning' },
    col_pronounce: { th: 'การออกเสียง', en: 'Pronounce' },

    // Score Summary
    summary_title_success: { th: 'ยอดเยี่ยมมาก! คุณทำแบบฝึกหัดเสร็จสมบูรณ์', en: 'Outstanding! Unit Completed' },
    summary_title_good: { th: 'ทำได้ดีมาก! มาฝึกฝนต่อเพื่อคะแนนเต็มกัน', en: 'Great Job! Keep Practicing' },
    summary_total_score: { th: 'คะแนนรวมทั้งหมด', en: 'Total Score' },
    summary_part_a: { th: 'Part 1: การอ่าน', en: 'Part 1: Reading' },
    summary_part_b: { th: 'Part 2: ศัพท์', en: 'Part 2: Word Bank' },
    summary_part_c: { th: 'Part 3: เรียงประโยค', en: 'Part 3: Unscramble' },
    btn_retry_unit: { th: 'ทำบทนี้อีกครั้ง ↺', en: 'Retry Unit ↺' },
    btn_choose_next: { th: 'ไปยังบทถัดไป ➔', en: 'Next Unit ➔' },

    // Footer
    footer_tagline: { th: '"รากฐานแห่งมวลปัญญา"', en: '"The Foundation of Wisdom"' },
    footer_copy: { th: '© สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & Cengage Learning. สงวนลิขสิทธิ์ทุกประการ.', en: '© Thai Watana Panich (TWP) & Cengage Learning. All Rights Reserved.' },

    // Settings
    modal_settings_title: { th: 'การตั้งค่าระบบ (Settings)', en: 'Application Settings' },
    setting_sound_title: { th: 'เสียงประกอบ (Sound Effects)', en: 'Sound Effects' },
    setting_sound_desc: { th: 'เปิด/ปิดเสียงปี๊บตอบถูก ตอบผิด และเสียง Fanfare', en: 'Enable procedural Web Audio API SFX tones' },
    setting_voice_title: { th: 'ทดสอบเสียงอ่านสังเคราะห์ (TTS)', en: 'Test TTS Voice' },
    setting_voice_desc: { th: 'ฟังตัวอย่างเสียงผู้หญิงธรรมชาติที่ระบบคัดเลือกให้', en: 'Preview the friendly female educational voice' },
    btn_test_voice: { th: 'ทดสอบเสียง', en: 'Test Voice' },
    setting_reset_title: { th: 'รีเซ็ตคะแนนและความก้าวหน้า', en: 'Reset All Progress' },
    setting_reset_desc: { th: 'ล้างประวัติการทำแบบฝึกหัดทั้งหมดในเครื่องนี้', en: 'Clear all saved scores and unit progress' },
    btn_reset_storage: { th: 'ล้างข้อมูล', en: 'Reset' }
  },

  t(key, fallback = '') {
    if (this.dict[key] && this.dict[key][this.currentLang]) {
      return this.dict[key][this.currentLang];
    }
    return fallback || key;
  },

  setLanguage(lang) {
    if (lang !== 'th' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('nw1_lang', lang);
    this.applyTranslations();

    // Update Language toggle button
    const btn = document.getElementById('btnLangToggle');
    if (btn) {
      btn.innerHTML = lang === 'th' ? '<span>🌐</span> EN' : '<span>🌐</span> ไทย';
    }

    if (typeof showToast === 'function') {
      showToast(lang === 'th' ? 'เปลี่ยนภาษาเป็น: ภาษาไทย' : 'Switched language to: English', 'info');
    }
  },

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'th' ? 'en' : 'th');
  },

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (this.dict[key] && this.dict[key][this.currentLang]) {
        el.innerHTML = this.dict[key][this.currentLang];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (this.dict[key] && this.dict[key][this.currentLang]) {
        el.setAttribute('placeholder', this.dict[key][this.currentLang]);
      }
    });
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18N };
} else {
  window.I18N = I18N;
  window.t = (key, fallback) => I18N.t(key, fallback);
}
