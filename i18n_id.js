// ================================================================
// Engineering Standards Dictionary — Bahasa Indonesia pack
// Loaded after the main script; populates window.IDN and merges
// Indonesian fields into KB. English remains the source HTML, so any
// key not defined here falls back to the English text automatically.
// ================================================================
(function(){
"use strict";

// ── Static UI + JS-label dictionary ────────────────────────────
window.IDN = {
  // header / nav
  "hdr.title":"Kamus Standar Teknik",
  "hdr.sub":"Rujukan Sipil/Struktur/Geoteknik Multidisiplin",
  "hdr.credit":"dipersembahkan oleh <strong>乔书亚 Alexander</strong> — CCEPC Indonesia | 都市环保印尼公司",
  "nav.search":"📖 Kamus",
  "nav.design":"📐 Perancangan",
  "nav.browse":"Telusuri Standar",
  "nav.seismic":"Alat Gempa",
  "nav.site":"Analisis Lokasi",
  "nav.about":"Tentang / Deploy",

  // dictionary hero
  "hero.h1":"Rujukan Standar Teknik",
  "hero.p":"Telusuri 80+ standar Indonesia, Amerika, dan Tiongkok. Ajukan pertanyaan dengan bahasa sehari-hari.",
  "hero.btn":"Cari",
  "hero.ph":"mis. persyaratan selimut beton · pendetailan gempa baja · daya dukung pondasi · PLTU di Maluku Utara",

  // design function
  "dz.h1":"Ruang Kerja Perancangan Teknik",
  "dz.p":"Prosedur perancangan langkah demi langkah lengkap dengan seluruh parameter desain dan ketentuan kegempaan yang berlaku. Data proyek (Kategori Risiko, Kelas Situs) sepenuhnya opsional — kosongkan bila belum ditentukan.",
  "dz.ph":"mis. desain balok beton bertulang · desain kolom baja · desain pondasi · gaya geser dasar gempa · keselamatan konstruksi SMKK",
  "dz.btn":"Rancang",

  // chips — design
  "dz.chip.concrete":"🏗 Desain Beton",
  "dz.chip.steel":"🔩 Desain Baja",
  "dz.chip.foundation":"🏚 Desain Pondasi",
  "dz.chip.seismic":"🌍 Desain Gempa",
  "dz.chip.loads":"📐 Penentuan Beban",
  "dz.chip.wind":"🌬 Desain Beban Angin",
  "dz.chip.purlin":"🏠 Desain Gording",
  "dz.chip.fire":"🔥 Proteksi Kebakaran",
  "dz.chip.hse":"🦺 K3 / SMKK",
  "dz.chip.env":"🌿 Lingkungan Hidup",

  // chips — dictionary
  "chip.concrete":"🏗 Beton",
  "chip.steel":"🔩 Baja",
  "chip.foundation":"🏚 Pondasi",
  "chip.loads":"📐 Beban Desain",
  "chip.seismic":"🌍 Gempa",
  "chip.wind":"🌬 Beban Angin",
  "chip.rain":"🌧 Beban Hujan",
  "chip.purlin":"🏠 Gording",
  "chip.ftype":"🧱 Jenis Pondasi",
  "chip.pp":"⚡ PLTU (Contoh)",
  "chip.site":"📡 Analisis Lokasi (Angin · Hujan · Tanah)",
  "chip.hse":"🦺 K3 / SMKK",
  "chip.env":"🌿 Lingkungan Hidup",

  // badges
  "badge.sni":"🇮🇩 SNI (Indonesia)",
  "badge.amer":"🇺🇸 ACI/AISC/ASCE (Amerika)",
  "badge.cn":"🇨🇳 GB/JGJ (Tiongkok)",

  // dictionary → design hand-off
  "cta.h":"📐 Lanjut ke fungsi Perancangan?",
  "cta.p":"Jawaban di atas adalah informasi rujukan dari standar. Untuk menuangkannya menjadi perancangan nyata, beralihlah ke fungsi Perancangan — seluruh detail di sini tetap ditampilkan, ditambah prosedur perancangan langkah demi langkah, rangkaian lengkap parameter desain, dan ketentuan kegempaan yang berlaku.",
  "cta.btn":"Lanjut ke Perancangan →",
  "cta.note":"Pertanyaan Anda dibawa secara otomatis. Kategori Risiko dan Kelas Situs tetap opsional di sana.",

  // controls
  "ctrl.std":"Sistem standar",
  "ctrl.all":"Semua",
  "ctrl.id":"🇮🇩 Indonesia",
  "ctrl.us":"🇺🇸 Amerika",
  "ctrl.cn":"🇨🇳 Tiongkok",
  "ctrl.proj":"Data proyek (opsional)",
  "ctrl.risk":"Kategori Risiko",
  "ctrl.site":"Kelas Situs",
  "ctrl.notyet":"— belum ditentukan —",
  "ctrl.optNote":"ℹ Kedua kolom bersifat opsional. Bila proyek Anda belum menentukannya, biarkan kosong — prosedur perancangan lengkap dan seluruh parameter desain tetap ditampilkan, dan prosedurnya sendiri menjelaskan cara menurunkan Kategori Risiko serta Kelas Situs pada langkah yang bersangkutan.",
  "ctrl.using":"Memakai data Anda:",
  "ctrl.calc":"⚙ buka spektrum dengan data ini",
  "ctrl.proceed":"Lanjutkan →",
  "ctrl.proceedHint2":"Pilih sistem standar di atas (data proyek opsional), lalu lanjutkan ke prosedur dan parameter perancangan lengkap.",
  "ctrl.showing":"✓ Menampilkan hasil untuk:",

  // query analysis
  "q.analysis":"Analisis Pertanyaan",
  "q.risk":"Kategori Risiko",
  "q.site":"Kelas Situs",

  // modules & sections
  "mod.sources":"Sumber:",
  "mod.systematic":"📋 Parameter desain di bawah ini disusun mengikuti prosedur perancangan di atas — kerjakan berurutan. Pertimbangan tambahan dikelompokkan di bagian akhir.",
  "mod.additional":"⊕ Pertimbangan perancangan tambahan",
  "mod.noStd":"Tidak ada parameter khusus untuk sistem standar yang dipilih pada modul ini — beralihlah ke “Semua” atau standar lain, atau lihat kartu perbandingan di atas.",
  "mod.openSeis":"⚙ Buka Kalkulator Spektrum Gempa",
  "mod.openSite":"📡 Buka Analisis Lokasi (data angin / hujan / elevasi aktual untuk lokasi Anda)",
  "sec.applicable":"Standar yang Berlaku",
  "sec.extracts":"Kutipan Terkait dari Pustaka PDF",
  "card.sni":"🇮🇩 Standar Indonesia (SNI)",
  "card.amer":"🇺🇸 Standar Amerika (ACI/AISC/ASCE)",
  "card.cn":"🇨🇳 Standar Tiongkok (GB/JGJ)",

  // procedures
  "proc.per":"Berdasarkan:",
  "proc.idNote":"🇮🇩 Standar Indonesia (SNI / Pd-T) — nomor pasal di bawah merupakan rujukan SNI yang mengikat.",
  "proc.usNote":"🇺🇸 Standar Amerika dipilih — SNI mengadopsi ASCE/ACI sehingga urutan ini berlaku; nomor pasal berpadanan dengan ASCE/ACI.",
  "proc.cnNote":"🇨🇳 Standar Tiongkok dipilih — alur kerja GB diringkas lebih dahulu; langkah bernomor merupakan urutan setara SNI/ASCE sebagai rujukan.",
  "proc.seismicH":"Parameter perancangan gempa dalam prosedur ini",
  "proc.seismicNote":"Bila struktur bersifat tahan gempa (SDC ≥ C), parameter berikut dari SNI 1726 / 1727 / 1729 / 2847 berpadu dengan langkah-langkah di atas dan harus dipenuhi secara bersamaan.",

  // environmental tables
  "env.export":"⬇ Ekspor ke Excel",
  "env.notes":"Keterangan:",

  // AI answer card
  "ai.title":"Jawaban Teknik",
  "ai.src":"Sumber:",
  "ai.hint":"Aktifkan ✨ AI untuk jawaban langsung dari Claude memakai kunci API Anda sendiri.",
  "ai.thinking":"Claude sedang menyusun jawaban langsung…",
  "ai.byClaude":"Dihasilkan langsung oleh Claude",
  "ai.verify":"verifikasi nomor pasal terhadap PDF di Telusuri Standar sebelum perancangan final",
  "ai.removeKey":"hapus kunci API",
  "ai.err":"Panggilan Claude gagal",
  "ai.errKept":"menampilkan jawaban bawaan sebagai gantinya.",
  "ai.keyCleared":"Kunci API Claude telah dihapus dari peramban ini.",

  // browse
  "b.all":"Semua Standar",
  "b.sni":"🇮🇩 Indonesia (SNI)",
  "b.amer":"🇺🇸 Amerika",
  "b.cn":"🇨🇳 Tiongkok (GB)",
  "b.seismic":"Gempa",
  "b.structural":"Struktur",
  "b.concrete":"Beton",
  "b.scope":"Lingkup",
  "b.ask":"Tanyakan tentang standar ini",
  "b.pdfs":"PDF",
  "b.drawings":"Gambar",

  // fallback / no result
  "fb.title":"Pencarian Teks Penuh — Pustaka Standar",
  "fb.refine":"Perhalus pertanyaan Anda untuk jawaban yang lebih kaya",
  "hit.page":"halaman ~",
  "noTopic":"Tidak ada topik yang terdeteksi",
  "loading":"Memuat…",

  // about
  "a.h1":"Tentang Situs Ini",
  "a.stdsTitle":"Standar dalam Basis Pengetahuan",
  "a.libTitle":"Pustaka Dokumen"
};

// ── Answer modules in Bahasa Indonesia ─────────────────────────
// Section order MUST mirror the English module exactly (renderModule
// reads flags such as `extra` and `envTable` from the English base).
var MOD_IDN = {

  environmental:{
    title:"Baku Mutu Lingkungan &amp; Perizinan — PP 22/2021",
    sections:[
      {h:"Kerangka Persetujuan Lingkungan (PP 22/2021)",
       table:{center:true,cols:["Jenjang","Instrumen","Kapan berlaku","Keluaran"],
         rows:[
           ["<strong>AMDAL</strong>","Analisis Mengenai Dampak Lingkungan Hidup","Usaha/kegiatan yang <strong>berdampak penting</strong> terhadap lingkungan hidup (wajib AMDAL)","<strong>Persetujuan Kelayakan Lingkungan Hidup</strong> — terbit setelah uji kelayakan oleh Tim Uji Kelayakan (TUK)"],
           ["<strong>UKL-UPL</strong>","Upaya Pengelolaan &amp; Upaya Pemantauan Lingkungan Hidup","Kegiatan <strong>tidak</strong> berdampak penting namun tetap memerlukan pengelolaan &amp; pemantauan","<strong>Persetujuan Pernyataan Kesanggupan Pengelolaan Lingkungan Hidup (PKPLH)</strong>"],
           ["<strong>SPPL</strong>","Surat Pernyataan Kesanggupan Pengelolaan &amp; Pemantauan Lingkungan Hidup","Kegiatan berdampak kecil / skala kecil","Surat pernyataan yang teregistrasi"],
           ["<strong>PERTEK</strong>","Persetujuan Teknis","Diperlukan bersama instrumen di atas untuk pembuangan air limbah, emisi udara, pengelolaan limbah B3, dan pembuangan ke laut","Persetujuan teknis, kemudian dikukuhkan dengan SLO (Surat Kelayakan Operasional)"]
         ]},
       notes:["<strong>Persetujuan Lingkungan merupakan prasyarat Perizinan Berusaha</strong> — persetujuan lingkungan wajib diperoleh sebelum izin usaha diterbitkan (PP 22/2021 sebagai pelaksanaan UU 32/2009 sebagaimana diubah oleh UU 11/2020 Cipta Kerja).","Dokumen AMDAL terdiri atas <em>Formulir Kerangka Acuan</em> → <em>ANDAL</em> → <em>RKL-RPL</em>, dan digolongkan ke dalam kategori A, B, dan C menurut skala serta kompleksitas dampak. Limbah nonbahan berbahaya cukup dengan <em>Rincian Teknis</em>, bukan PERTEK penuh."]},
      {h:"Kelas Mutu Air — menurut peruntukan (PP 22/2021 Lampiran VI)",
       table:{center:true,cols:["Kelas","Peruntukan"],
         rows:[
           ["<strong>Kelas I</strong>","Air baku air minum, dan/atau peruntukan lain yang mempersyaratkan mutu air yang sama"],
           ["<strong>Kelas II</strong>","Prasarana/sarana rekreasi air, pembudidayaan ikan air tawar, peternakan, air untuk mengairi pertanaman, dan/atau peruntukan lain yang mempersyaratkan mutu air yang sama"],
           ["<strong>Kelas III</strong>","Pembudidayaan ikan air tawar, peternakan, air untuk mengairi pertanaman, dan/atau peruntukan lain yang mempersyaratkan mutu air yang sama"],
           ["<strong>Kelas IV</strong>","Air untuk mengairi pertanaman dan/atau peruntukan lain yang mempersyaratkan mutu air yang sama"]
         ]},
       notes:["Kelas yang ditetapkan bagi suatu badan air menentukan kolom mana pada tabel di bawah yang menjadi batas kepatuhan bagi setiap pembuangan atau pengambilan air yang memengaruhinya. Tanda hubung (—) berarti parameter tersebut tidak dipersyaratkan untuk kelas itu."]},
      {h:"Baku Mutu Air Sungai (PP 22/2021 Lampiran VI-I) — tabel lengkap",
       notes:["Disalin persis sebagaimana peraturan, 49 parameter × 4 kelas. Gunakan tombol <strong>Ekspor ke Excel</strong> untuk mengunduh tabel dalam bahasa yang sedang dipilih."]},
      {h:"Baku Mutu Air Danau (PP 22/2021 Lampiran VI-II) — tabel lengkap",
       notes:["Tabel danau menambahkan <em>Transparansi</em> dan <em>Klorofil-a</em> serta menerapkan batas hara yang lebih ketat daripada tabel sungai — Total Nitrogen 0,65 / 0,75 / 1,90 mg/L dan Total Fosfat 0,01 / 0,03 / 0,1 mg/L — mencerminkan kepekaan danau terhadap eutrofikasi."]},
      {h:"Baku Mutu Udara Ambien (PP 22/2021 Lampiran VII) — tabel lengkap",
       notes:["PP 22/2021 memperketat batas PP 41/1999 secara signifikan serta memperkenalkan <strong>PM₂,₅</strong> dan periode rata-rata tahunan. Nilai penting bagi konstruksi: <strong>TSP 24 jam = 230 µg/m³</strong>, <strong>PM₁₀ 24 jam = 75 µg/m³</strong>, <strong>PM₂,₅ 24 jam = 55 µg/m³</strong> — inilah yang mengendalikan pengendalian debu di lapangan."]},
      {h:"Baku Mutu Air Laut (PP 22/2021 Lampiran VIII) — tabel lengkap",
       notes:["Tiga peruntukan: <em>Pelabuhan</em>, <em>Wisata Bahari</em>, dan <em>Biota Laut</em>. Kolom Biota Laut memuat sub-batas untuk <strong>coral</strong> (terumbu karang), <strong>mangrove</strong>, dan <strong>lamun</strong> pada parameter yang dibedakan oleh peraturan — relevan bagi pekerjaan reklamasi, dermaga, outfall, atau pengerukan."]},
      {h:"Titik Kepatuhan yang Relevan bagi Konstruksi",
       table:{cols:["Kegiatan","Yang dikendalikan oleh baku mutu"],
         rows:[
           ["Dewatering lokasi / pembuangan ke sungai","Efluen tidak boleh mendorong badan air penerima melampaui batas kelasnya (Lampiran VI) — TSS, pH, minyak &amp; lemak, dan logam umumnya menjadi parameter pengendali"],
           ["Pekerjaan tanah &amp; jalan angkut","Debu ambien terhadap TSP / PM₁₀ / PM₂,₅ (Lampiran VII); penyiraman dan pencucian roda adalah mitigasi baku"],
           ["Batching plant &amp; pemecah batu","Partikulat ambien serta SO₂/NO₂ dari peralatan; sumber tidak bergerak memerlukan PERTEK emisi"],
           ["Pekerjaan laut — dermaga, reklamasi, pengerukan, outfall","Batas Lampiran VIII sesuai peruntukan air laut, dengan sub-batas coral/mangrove/lamun bila ada"],
           ["Penyimpanan bahan bakar, oli, dan bahan kimia","Pengelolaan limbah B3 di bawah PERTEK; penampung tumpahan agar minyak &amp; lemak tetap dalam batas"],
           ["Air limbah dari fasilitas lapangan","Baku mutu air limbah domestik ditambah batas kelas badan air penerima"]
         ]},
       notes:["Pada proyek konstruksi, baku mutu ini bertaut dengan dokumen lingkungan SMKK: rencana pengelolaan lingkungan <strong>RKPPL</strong> wajib mengakomodasi dan menjabarkan komitmen RKL-RPL atau UKL-UPL yang diturunkan dari peraturan ini (Permen PUPR 10/2021 Lampiran G)."]},
      {h:"Perbandingan Internasional — Udara Ambien &amp; Air",
       table:{cols:["Parameter","🇮🇩 PP 22/2021","🇺🇸 EPA NAAQS","🇨🇳 GB 3095-2012 (Kelas II)"],
         rows:[
           ["PM₂,₅ — 24 jam","<strong>55 µg/m³</strong>","35 µg/m³","75 µg/m³"],
           ["PM₂,₅ — tahunan","<strong>15 µg/m³</strong>","9 µg/m³ (2024)","35 µg/m³"],
           ["PM₁₀ — 24 jam","<strong>75 µg/m³</strong>","150 µg/m³","150 µg/m³"],
           ["PM₁₀ — tahunan","<strong>40 µg/m³</strong>","—","70 µg/m³"],
           ["SO₂ — 24 jam","<strong>75 µg/m³</strong>","—","150 µg/m³"],
           ["NO₂ — tahunan","<strong>50 µg/m³</strong>","100 µg/m³","40 µg/m³"],
           ["CO — 8 jam","<strong>4.000 µg/m³</strong>","10 mg/m³ (9 ppm)","4.000 µg/m³"],
           ["Kelas air permukaan","Kelas I–IV","Peruntukan ditetapkan tiap negara bagian","GB 3838-2002 Kelas I–V"]
         ]},
       notes:["Batas tahunan PM₁₀ dan PM₂,₅ Indonesia terhitung lebih ketat daripada Kelas II Tiongkok (dan untuk PM₁₀ 24 jam juga lebih ketat daripada Amerika), sedangkan batas PM₂,₅ 24 jam lebih longgar daripada Amerika. Bila proyek memiliki persyaratan pemberi pinjaman atau induk perusahaan (Panduan EHS IFC, WHO AQG), nilai yang <strong>lebih ketat</strong> yang biasanya berlaku."]}
    ],
    sources:"PP 22/2021 Lampiran VI (Baku Mutu Air Nasional — I. Sungai, II. Danau), Lampiran VII (Baku Mutu Udara Ambien), Lampiran VIII (Baku Mutu Air Laut) — disalin dari PDF resmi dan diperiksa silang parameter demi parameter · Batang tubuh PP 22/2021 (Persetujuan Lingkungan, AMDAL/UKL-UPL/SPPL, Persetujuan Teknis) · UU 32/2009 · UU 11/2020 Cipta Kerja · Permen PUPR 10/2021 Lampiran G (kaitan RKPPL) · EPA NAAQS · GB 3095-2012 / GB 3838-2002 · Panduan EHS IFC"
  }

};
for(var mk in MOD_IDN){
  if(typeof KB!=='undefined' && KB.answer_modules[mk])KB.answer_modules[mk].idn=MOD_IDN[mk];
}

// ── Indonesian topic keywords (merged into detection) ──────────
var TOPIC_IDN = {
  environmental:{kw:["lingkungan hidup","baku mutu lingkungan","mutu air","mutu udara","peruntukan air","badan air","air permukaan","pembuangan air limbah","izin lingkungan","kelayakan lingkungan","dokumen lingkungan","pemantauan lingkungan","pengelolaan lingkungan","pencemaran air","pencemaran udara","kualitas udara ambien","debu","emisi cerobong","efluen","outfall"]},
  hse_safety:{kw:["keselamatan kerja","kesehatan kerja","kecelakaan konstruksi","alat pelindung","rambu keselamatan","izin kerja khusus","unit keselamatan"]}
};
for(var tk in TOPIC_IDN){
  if(typeof KB!=='undefined' && KB.topics[tk] && KB.topics[tk].keywords){
    KB.topics[tk].keywords=KB.topics[tk].keywords.concat(TOPIC_IDN[tk].kw);
  }
}

})();
