# ✨ SyntaxLab — Interactive English Syntax Courseware (Gen-Z Edition)

Bahan ajar interaktif untuk **Program Studi Pendidikan / Sastra Bahasa Inggris (English Department)** dengan gaya modern, estetis, interaktif, dan diakhiri dengan rangkaian mini-games & sertifikat digital otomatis.

---

## 🌟 Fitur Utama

1. **Vibe Check (Modul 01: Pengantar Sintaksis)**
   - *Prescriptive vs. Descriptive Grammar*
   - *Competence vs. Performance* (Noam Chomsky)
   - Analisis teka-teki legendaris: *"Colorless green ideas sleep furiously"*
   - Matriks *Form (Category)* vs. *Function*

2. **The LEGO Bricks (Modul 02: Frasa & Konstituen)**
   - 5 Anatomi Frasa Inti: NP, VP, PP, AdjP, AdvP
   - Prinsip *Head of Phrase*
   - **Constituency Test Simulator**: Uji substitusi, perpindahan (*movement/clefting*), dan *standalone test* secara interaktif.

3. **Tree Architect (Modul 03: Pohon Sintaksis & Ambiguitas)**
   - **Interactive SVG Tree Visualizer**: Pohon sintaksis dinamis dengan node interaktif yang bisa diklik.
   - **Syntactic Ambiguity Solver**: Analisis kalimat bermakna ganda (e.g. *"She saw the influencer with the camera"* / *"Enraged cow injures farmer with axe"*).

4. **Clause Lab (Modul 04: Variasi Klausa & Slang)**
   - 4 Formula Kalimat: *Simple, Compound (FANBOYS), Complex, Compound-Complex*
   - Sosiolinguistik & Sintaksis Gen-Z: Analisis *copula dropping*, *nominalization*, dan struktur meme.

5. **The Arcade (Modul 05: 4 Interactive Mini-Games)**
   - 🎮 **Game 1: Chomsky's Syntax Vibe Check** (Tebak kalimat *well-formed* vs *ungrammatical*).
   - 🧩 **Game 2: Sentence Architect (Constituent Scramble)** (Susun blok frasa sesuai formula sintaksis).
   - 🔍 **Game 3: Ambiguity Decoder** (Bedah 2 pohon sintaksis dari 1 kalimat viral).
   - ⚡ **Game 4: Rapid Boss Battle Quiz** (Kuis cepat dengan streak combo, sound FX, dan XP).
   - 🎓 **Personalized Certificate Generator**: Unduh sertifikat bertaraf resmi dalam format gambar PNG resolusi tinggi (1200x800px) atau cetak langsung ke PDF!

---

## 💻 Cara Menjalankan di Komputer Lokal

Web ini dibuat dengan **Vanilla HTML5, Tailwind CSS, & Modern JavaScript**, sehingga:
- **Tidak membutuhkan instalasi server atau `npm install` yang ribet!**
- Cukup buka file **`index.html`** langsung di browser (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).
- Atau klik kanan `index.html` lalu pilih **Open with Live Server** di VS Code.

---

## 🚀 Cara Menjalankan Online Secara GRATIS (1 - 2 Menit Selesai)

Kamu bisa membuat web ini live di internet dengan URL gratis (`https://namamu.netlify.app` atau `github.io`) agar bisa diakses oleh dosen dan teman-teman mahasiswa dari HP atau laptop mereka:

### Pilihan 1: Netlify Drop (Paling Mudah & Tanpa Koding - 1 Menit)
1. Buka browser dan kunjungi: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Tarik (*drag & drop*) folder `Web Anggun` ini ke area kotak di layar browser.
3. Tunggu 5 detik, web kamu langsung aktif dengan link HTTPS gratis yang bisa langsung dibagikan!

### Pilihan 2: GitHub Pages (Gratis Selamanya)
1. Buat repositori baru di GitHub (misal: `syntax-genz`).
2. Upload semua file dalam folder ini (`index.html`, folder `css`, folder `js`).
3. Masuk ke tab **Settings** > **Pages** di repositori GitHub kamu.
4. Di bagian *Branch*, pilih **main** dan folder **/ (root)**, lalu klik **Save**.
5. Dalam 1 menit, web kamu sudah tayang di: `https://username.github.io/syntax-genz/`.

### Pilihan 3: Vercel
1. Kunjungi **[https://vercel.com](https://vercel.com)**.
2. Impor repositori GitHub kamu atau gunakan perintah:
   ```bash
   npx vercel
   ```
3. Langsung terdeploy secara otomatis tanpa konfigurasi tambahan!

---

## 🎨 Teknologi & Desain
- **UI/UX:** Tailwind CSS, Lucide Icons, Plus Jakarta Sans, Space Grotesk.
- **Audio Synthesizer:** Web Audio API murni (tanpa file mp3 eksternal, anti error & zero loading).
- **Efek:** Canvas Confetti & Vector SVG Dynamic Tree Rendering.
- **Mode:** Light & Dark Mode otomatis tersimpan di LocalStorage.
