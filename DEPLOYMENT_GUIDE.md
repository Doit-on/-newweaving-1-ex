# คู่มือการติดตั้งและ Deploy: NEW Weaving It Together 1 WebApp (ม.4)

เว็บแอปพลิเคชัน **NEW Weaving It Together 1 (ม.4)** สำนักพิมพ์ไทยวัฒนาพานิช (TWP) และ Cengage Learning / National Geographic Learning  
สถาปัตยกรรม **Client-Side SPA (Single Page Application)** แบบ Self-Contained 100%

---

## 🌟 จุดเด่นของแอปพลิเคชัน
1. **หน้า Landing Page แยกส่วนสมบูรณ์แบบ:** สวยงาม ทันสมัย พร้อมโลโก้ TWP และสโลแกน "รากฐานแห่งมวลปัญญา" www.twp.co.th
2. **รองรับทุกระบบและทุกหน้าจอ:** iOS (iPhone/iPad), Android, Windows, macOS (Responsive Layout 100%)
3. **ระบบแบบฝึกหัด 3 พาร์ท:**
   - **Part 1:** Reading Comprehension (5 ข้อ พร้อมคำอธิบายและจุดอ้างอิงในบทอ่าน)
   - **Part 2:** Word Bank Cloze Test (5 ข้อ เติมคำศัพท์ในช่องว่าง พร้อมระบบตรวจเฉลยสีแดง-เขียวชัดเจน)
   - **Part 3:** Sentence Unscramble (5 ข้อ แตะกลุ่มคำเรียงประโยค)
   - **Review & Grammar:** สรุปคำศัพท์สำคัญและหลักไวยากรณ์ประจำบท
4. **ภาพประกอบ Marvel Comic Anime Style:** Pop-up Lightbox ขยายและย่อภาพได้ทุกขนาดหน้าจอ
5. **ระบบเสียงเจ้าของภาษาแท้ครบ 8 บทเรียน:** ไฟล์เสียงจริง `.mp3` ครบทั้ง 8 ยูนิต
6. **ระบบตรวจให้คะแนนยืดหยุ่น:** คำนวณคะแนนเฉพาะข้อที่ทำ กดดูเฉลยพร้อมคำอธิบายได้ทุกเมื่อ
7. **Offline 100% (PWA):** ใช้งานได้แม้ไม่มีสัญญาณอินเทอร์เน็ต ผ่าน Service Worker

---

## 🚀 การ Deploy บน GitHub Pages (ราบรื่น 100% ไม่มีปัญหา)

### ทำไมโครงสร้างนี้จึงรองรับ GitHub Pages 100%?
1. **ขนาดไฟล์แต่ละไฟล์ไม่เกินเกณฑ์:** ไฟล์ที่ใหญ่ที่สุดคือ `ex1_oktoberfest.mp3` (4.5 MB) ซึ่งต่ำกว่าเกณฑ์จำกัด 50 MB / 100 MB ของ GitHub มาก
2. **ขนาดรวมทั้งโปรเจกต์เหมาะสม:** ขนาดรวมเพียง ~68 MB (หรือ ~38 MB หากใช้เฉพาะไฟล์เสียงหลัก) อยู่ในโควตา GitHub Pages (1 GB) สบายๆ
3. **ใช้ Relative Paths 100%:** ลิงก์รูปภาพ CSS JS เสียง ใช้ Path สัมพัทธ์ทั้งหมด (`assets/...`, `css/...`, `js/...`) จึงแสดงผลได้ถูกต้องแม้รันบน Sub-path เช่น `https://username.github.io/new-weaving-1-app/`
4. **มีไฟล์ `.nojekyll` เรียบร้อยแล้ว:** ป้องกันไม่ให้ GitHub Pages ใช้ Jekyll ในการกรองไฟล์ ทำให้ไฟล์และโฟลเดอร์ทั้งหมดทำงานได้ตรงตามปกติ

---

### วิธีการ Deploy บน GitHub Pages แบบเป็นขั้นเป็นตอน

#### วิธีที่ 1: ผ่านโปรแกรม GitHub Desktop (แนะนำ ง่ายและเร็วที่สุด)
1. เปิดโปรแกรม **GitHub Desktop** แล้วเลือก **Add Existing Repository** หรือ **Create New Repository**
2. เลือกโฟลเดอร์ `new-weaving-1-app`
3. กดปุ่ม **Publish Repository** ขึ้นบัญชี GitHub ของคุณ
4. เข้าไปที่หน้าเว็บ Repository บน GitHub -> ไปที่ **Settings** -> เมนูด้านซ้ายเลือก **Pages**
5. ในส่วน **Build and deployment**:
   - Source: เลือก **Deploy from a branch**
   - Branch: เลือก **main** (หรือ `master`) และโฟลเดอร์ **/(root)**
   - กด **Save**
6. รอประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์ เช่น:  
   `https://<your-username>.github.io/new-weaving-1-app/`

#### วิธีที่ 2: ผ่าน Git Command Line
```bash
cd new-weaving-1-app
git init
git add .
git commit -m "Deploy NEW Weaving It Together 1 WebApp"
git branch -M main
git remote add origin https://github.com/<your-username>/new-weaving-1-app.git
git push -u origin main
```
จากนั้นเข้าไปที่ GitHub Repo -> Settings -> Pages -> เลือก Deploy from `main` branch -> Save

#### วิธีที่ 3: อัปโหลดผ่านหน้าเว็บ GitHub (Drag & Drop)
- หากอัปโหลดผ่านเว็บ แนะนำให้อัปโหลดทีละโฟลเดอร์ (`assets`, `css`, `js`) หรือใช้ GitHub Desktop เพื่อป้องกันปัญหาเบราว์เซอร์ Timeout ระหว่างอัปโหลดไฟล์เสียงขนาด 30+ MB

---

## 🌐 ทางเลือกอื่นๆ ในการ Deploy
- **Netlify Drop:** ลากโฟลเดอร์ไปวางที่ [https://app.netlify.com/drop](https://app.netlify.com/drop) ใช้งานได้ทันทีใน 10 วินาที
- **Vercel:** Import GitHub Repo เข้า Vercel ใช้งานได้ทันที
- **Offline USB:** ก๊อปลง Flash Drive ดับเบิลคลิก `index.html` เปิดสอนในห้องเรียนได้ทันทีไม่ต้องต่อเน็ต
