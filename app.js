/* ==========================================================================
   INTAN SARAVINA, S.Kom. — APPLICATION CONTROLLER (app.js)
   Modules:
     1. Trilingual Content Matrix (ID / EN / 中文)
     2. 3D Game-World Spatial Camera & Architectural Corridor Engine (Three.js)
     3. Lenis Smooth Inertial Scroll (With Modal Scroll Isolation)
     4. Right-Edge Scroll Wayfinder, Pipeline Inspector & Capability Filter
     5. Two-Column Executive CV Preview & Default-Margin 1-Page Print Engine
   ========================================================================== */

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. TRILINGUAL CONTENT MATRIX
  // --------------------------------------------------------------------------
  const TRILINGUAL_MATRIX = {
    id: {
      nav_about: "Profil",
      nav_projects: "Penelitian",
      nav_experience: "Pengalaman",
      nav_capabilities: "Keahlian",
      nav_contact: "Kontak",

      way_hero: "Beranda",
      way_about: "Profil",
      way_projects: "Penelitian",
      way_experience: "Pengalaman",
      way_capabilities: "Keahlian",
      way_contact: "Kontak",

      location_label: "Medan, Sumatera Utara",
      hero_status: "Sarjana Komputer (S.Kom.) | S1 Informatika Universitas Samudra",
      hero_kicker: "COMPUTER VISION & SOFTWARE ENGINEER",
      hero_thesis: "Merancang sistem deteksi dan penghitungan objek visual secara real-time berbasis ekstraksi fitur gradien (HOG) dan klasifikasi Support Vector Machine (SVM), serta pengembangan antarmuka web modern.",
      cta_primary: "Eksplorasi Penelitian",
      cta_cv: "Lihat & Cetak CV",
      cta_spec_pdf: "Spesifikasi Lengkap SVM+HOG",
      cta_contact: "Hubungi Langsung",

      ledger_1_label: "Kualifikasi Akademik",
      ledger_1_val: "Sarjana Komputer (S.Kom.) | IPK 3,60",
      ledger_2_label: "Fokus Penelitian",
      ledger_2_val: "Deteksi Kendaraan HOG & SVM",
      ledger_3_label: "Kemampuan Bahasa",
      ledger_3_val: "Multibahasa (Indonesia, Inggris, China)",
      ledger_4_label: "Almamater",
      ledger_4_val: "Universitas Samudra (UNSAM)",

      sec1_index: "Profil Akademik",
      sec1_title: "Latar Belakang Pendidikan & Fokus Rekayasa",
      sec1_lead: "Lulusan Program Studi S1 Informatika Universitas Samudra (UNSAM) dengan fokus pada pengolahan citra digital, visi komputer terapan, dan rekayasa sistem informasi.",
      portrait_role: "S1 Informatika (2022–2026)",
      about_p1: "<strong>Intan Saravina, S.Kom.</strong> menyelesaikan pendidikan Sarjana Komputer pada Program Studi S1 Informatika (Konsentrasi Informatika Multimedia dan Visi Komputer) di <a href='https://unsam.ac.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Universitas Samudra (UNSAM)</a> dengan perolehan <strong>IPK 3,60 / 4,00</strong>.",
      about_p2: "Fokus teknisnya mencakup pengembangan pipa algoritma Computer Vision yang efisien pada perangkat keras CPU standar. Melalui kombinasi deskriptor Histogram of Oriented Gradients (HOG) 3.780 dimensi dan pengklasifikasi Support Vector Machine (SVM), sistem deteksi yang dibangun mampu memproses video lalu lintas multi-lajur pada kecepatan rata-rata 30,4 FPS dengan akurasi klasifikasi 96,4%.",
      about_p3: "Di bidang operasional infrastruktur TI, Intan memiliki pengalaman kerja praktek di <a href='https://langsa.imigrasi.go.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Kantor Imigrasi Kelas II TPI Langsa</a> pada tahun 2024, menangani pemantauan sistem manajemen antrean layanan publik, diagnostik jaringan lokal (LAN), serta rekapitulasi laporan administrasi digital.",

      cred_1_kicker: "PENDIDIKAN SARJANA",
      cred_1_main: "Sarjana Komputer (S.Kom.) — S1 Informatika",
      cred_1_sub: "Universitas Samudra (UNSAM), 2022 – 2026",
      cred_2_kicker: "CAPAIAN AKADEMIK",
      cred_2_main: "IPK 3,60 / 4,00",
      cred_2_sub: "Konsentrasi Pengolahan Citra & Pengenalan Pola",
      cred_3_kicker: "INSTRUMEN REKAYASA",
      cred_3_main: "Python, OpenCV, scikit-learn, Flask",
      cred_3_sub: "Ekstraksi Fitur HOG, Klasifikasi SVM, Web Modern",
      cred_4_kicker: "KOMUNIKASI PROFESIONAL",
      cred_4_main: "Multibahasa (Indonesia, Inggris, China)",
      cred_4_sub: "Dokumentasi teknis dan kolaborasi lintas tim",

      sec2_index: "Penelitian Utama",
      sec2_title: "Sistem Deteksi & Penghitung Kendaraan Otomatis Multi-Kelas",
      sec2_lead: "Arsitektur pengolahan citra untuk deteksi, klasifikasi, dan penghitungan kendaraan bermotor menggunakan fitur Histogram of Oriented Gradients (HOG) dan algoritma Support Vector Machine (SVM).",
      flagship_id: "PENELITIAN TUGAS AKHIR S1 INFORMATIKA",
      flagship_class: "PYTHON | OPENCV | SCIKIT-LEARN | NUMPY | FLASK",
      flagship_img_caption: "Visualisasi inferensi deteksi kendaraan, kotak pembatas, dan garis ukur simpang jalan.",
      flagship_hud_btn: "Tampilkan Overlay ROI & Vektor",
      flagship_zoom_btn: "Buka Spesifikasi Lengkap",
      flagship_heading: "Deteksi & Penghitungan Kendaraan Real-Time Berbasis Fitur Gradien Spasial",
      flagship_dossier_desc: "Sistem ini memproses aliran video jalan raya 30 FPS untuk mendeteksi dan menghitung empat kategori kendaraan (Mobil Penumpang, Sepeda Motor, Bus, dan Truk). Ekstraksi fitur tepi dilakukan menggunakan jendela deteksi 64×128 piksel (sel 8×8 px, blok 16×16 px L2-Hys, 9 bin orientasi) yang dievaluasi oleh hyperplane SVM serta dilacak menggunakan jarak titik pusat Euclidean.",
      flagship_modal_btn: "Lihat Spesifikasi Lengkap & Unduh PDF",
      flagship_print_direct_btn: "Cetak PDF Spesifikasi",

      bench_1_label: "Dimensi Vektor Fitur",
      bench_1_val: "3.780-D",
      bench_1_sub: "Sel 8×8 px, Blok 16×16 px, 9 bin sudut",
      bench_2_label: "Kecepatan Inferensi",
      bench_2_val: "30,4 FPS",
      bench_2_sub: "Rata-rata waktu proses 32,8 ms/frame (CPU)",
      bench_3_label: "Akurasi Klasifikasi",
      bench_3_val: "96,4%",
      bench_3_sub: "Rata-rata presisi pada 4 kategori kendaraan",
      bench_4_label: "Metode Pelacakan",
      bench_4_val: "Centroid L2",
      bench_4_sub: "NMS (IoU 0,35) & garis hitung virtual",

      pipeline_strip_title: "TAHAPAN ALGORITMA PEMROSESAN CITRA HOG & SVM",
      stage_tab_1: "Akuisisi & ROI",
      stage_tab_2: "Koreksi Gamma",
      stage_tab_3: "Gradien HOG",
      stage_tab_4: "Klasifikasi SVM",
      stage_tab_5: "Pelacakan Objek",

      sec3_index: "Pengalaman Praktik",
      sec3_title: "Pengalaman Kerja Praktek & Riwayat Akademik",
      sec3_lead: "Pelaksanaan pemeliharaan jaringan lokal, pengawasan operasional layanan antrean digital, dan pengelolaan data pada instansi pemerintah.",
      residency_meta: "KERJA PRAKTEK 2024",
      residency_heading: "Kantor Imigrasi Kelas II TPI Langsa",
      residency_desc: "Staf Kerja Praktek pada divisi Sistem Informasi dan Infrastruktur Teknologi Informasi. Mendukung keandalan sistem pelayanan paspor dan administrasi keimigrasian harian.",
      residency_b1: "Memantau kinerja sistem manajemen antrean layanan publik digital secara berkala untuk menjaga kelancaran alur pelayanan pemohon.",
      residency_b2: "Melaksanakan pengecekan konektivitas jaringan lokal (LAN), perawatan perangkat keras komputer kerja, dan konfigurasi perangkat loket.",
      residency_b3: "Memverifikasi kelengkapan data permohonan digital serta menyusun otomatisasi rekapitulasi laporan bulanan berbasis perangkat lunak perkantoran.",
      residency_inspect_btn: "Lihat Rincian Kerja Praktek",

      chrono_1_year: "2022 – 2026",
      chrono_1_role: "Sarjana Komputer (S.Kom.) — S1 Informatika",
      chrono_1_detail: "Universitas Samudra (UNSAM) — Menyelesaikan studi S1 Informatika (IPK 3,60 / 4,00) beserta penelitian tugas akhir deteksi kendaraan otomatis berbasis HOG dan SVM.",
      chrono_2_year: "2024",
      chrono_2_role: "Staf Kerja Praktek — Sistem & Infrastruktur TI",
      chrono_2_detail: "Kantor Imigrasi Kelas II TPI Langsa — Pemantauan sistem antrean layanan publik, diagnostik jaringan LAN internal, dan rekapitulasi data administrasi.",
      chrono_3_year: "2022",
      chrono_3_role: "Mahasiswa S1 Informatika — Fakultas Teknik",
      chrono_3_detail: "Universitas Samudra (UNSAM) — Mempelajari algoritma dan struktur data, pengolahan citra digital, rekayasa perangkat lunak, serta jaringan komputer.",

      sec4_index: "Kompetensi Teknis",
      sec4_title: "Matriks Keahlian & Spesifikasi Teknis",
      sec4_lead: "Pemetaan kapabilitas teknis berdasarkan bidang Computer Vision, Rekayasa Web, Infrastruktur Jaringan, dan Pengolahan Citra Terapan.",
      filter_all: "Semua Bidang",
      filter_ml: "Visi Komputer & ML",
      filter_web: "Rekayasa Web",
      filter_sec: "Jaringan & Sistem",
      filter_app: "Citra Digital",

      th_domain: "Bidang Keahlian",
      th_stack: "Teknologi & Pustaka",
      th_method: "Metode & Ruang Lingkup Teknis",
      th_output: "Hasil Implementasi",

      row1_domain: "Visi Komputer & ML",
      row1_method: "Ekstraksi fitur Histogram of Oriented Gradients (HOG), klasifikasi Support Vector Machine (SVM), Hard Negative Mining, Non-Maximum Suppression (NMS), dan pelacakan centroid Euclidean.",
      row1_output: "Sistem Deteksi Kendaraan (Akurasi 96,4%)",

      row2_domain: "Rekayasa Web & UI",
      row2_method: "Pengembangan antarmuka HTML5 semantik, tata letak CSS3 responsif, pemrograman JavaScript (ES6+), integrasi Flask, visualisasi 3D WebGL/Three.js, dan optimasi SEO teknis.",
      row2_output: "Aplikasi Web Interaktif & Dokumentasi Teknis",

      row3_domain: "Jaringan & Sistem",
      row3_method: "Diagnostik konektivitas LAN, pemeliharaan perangkat keras komputer kerja, pengawasan sistem antrean layanan publik, dan manajemen versi kode dengan Git/GitHub.",
      row3_output: "Operasional TI Kantor Imigrasi Langsa",

      row4_domain: "Citra Digital & Terapan",
      row4_method: "Transformasi ruang warna, koreksi iluminasi gamma, filter spasial dan operasi morfologi citra, serta otomatisasi pengolahan dokumen administrasi.",
      row4_output: "Laboratorium Informatika Multimedia UNSAM",

      sec5_index: "Kontak & Dokumen",
      sec5_title: "Hubungi Intan Saravina & Cetak Dokumen Resmi",
      sec5_lead: "Terbuka untuk posisi kerja penuh waktu, kolaborasi riset, maupun proyek pengembangan sistem di bidang Computer Vision, Data, dan Software Engineering.",
      email_box_label: "ALAMAT EMAIL LANGSUNG",
      btn_copy_email: "Salin Alamat Email",
      btn_open_cv: "Cetak CV",
      btn_open_spec: "Cetak Spesifikasi SVM+HOG",
      meta_name_lbl: "Nama Lengkap",
      meta_edu_lbl: "Pendidikan",
      meta_edu_val: "S1 Informatika (S.Kom.), Universitas Samudra (IPK 3,60)",
      meta_lang_lbl: "Bahasa",
      meta_lang_val: "Multibahasa (Indonesia, Inggris, China)",
      meta_status_lbl: "Domisili & Status",
      meta_status_val: "Medan, Sumatera Utara | Siap Bekerja & Remote",

      footer_copy: "© 2026 Intan Saravina, S.Kom."
    },

    en: {
      nav_about: "Profile",
      nav_projects: "Research",
      nav_experience: "Experience",
      nav_capabilities: "Skills",
      nav_contact: "Contact",

      way_hero: "Home",
      way_about: "Profile",
      way_projects: "Research",
      way_experience: "Experience",
      way_capabilities: "Skills",
      way_contact: "Contact",

      location_label: "Medan, North Sumatra",
      hero_status: "Bachelor of Computer Science (S.Kom.) | Universitas Samudra",
      hero_kicker: "COMPUTER VISION & SOFTWARE ENGINEER",
      hero_thesis: "Designing real-time visual object detection and counting pipelines powered by Histogram of Oriented Gradients (HOG) and Support Vector Machine (SVM) classifiers, alongside modern web interfaces.",
      cta_primary: "Explore Research",
      cta_cv: "View & Print CV",
      cta_spec_pdf: "Full SVM+HOG Specification",
      cta_contact: "Direct Contact",

      ledger_1_label: "Academic Degree",
      ledger_1_val: "B.Comp.Sc (S.Kom.) | GPA 3.60",
      ledger_2_label: "Primary Research",
      ledger_2_val: "HOG & SVM Vehicle Detection",
      ledger_3_label: "Languages",
      ledger_3_val: "Multilingual (Indonesian, English, Chinese)",
      ledger_4_label: "Alma Mater",
      ledger_4_val: "Universitas Samudra (UNSAM)",

      sec1_index: "Academic Profile",
      sec1_title: "Educational Background & Engineering Focus",
      sec1_lead: "Computer Science (S1 Informatika) graduate from Universitas Samudra (UNSAM) specializing in digital image processing, applied computer vision, and web systems.",
      portrait_role: "B.Comp.Sc (2022–2026)",
      about_p1: "<strong>Intan Saravina, S.Kom.</strong> earned her Bachelor of Computer Science (S1 Informatika — Multimedia Informatics and Computer Vision) from <a href='https://unsam.ac.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Universitas Samudra (UNSAM)</a> with a cumulative <strong>GPA of 3.60 / 4.00</strong>.",
      about_p2: "Her engineering work centers on building fast, interpretable computer vision pipelines that run reliably on standard CPU hardware. By combining a 3,780-dimensional Histogram of Oriented Gradients (HOG) descriptor with a Support Vector Machine (SVM) classifier, her vehicle detection and counting system processes multi-lane traffic streams at 30.4 FPS with 96.4% classification precision.",
      about_p3: "In IT operations, she completed her 2024 internship at <a href='https://langsa.imigrasi.go.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Kantor Imigrasi Kelas II TPI Langsa</a>, handling public service queue system monitoring, internal LAN diagnostics, and administrative reporting automation.",

      cred_1_kicker: "UNDERGRADUATE DEGREE",
      cred_1_main: "B.Comp.Sc (S.Kom.) — S1 Informatika",
      cred_1_sub: "Universitas Samudra (UNSAM), 2022 – 2026",
      cred_2_kicker: "ACADEMIC STANDING",
      cred_2_main: "GPA 3.60 / 4.00",
      cred_2_sub: "Digital Image Processing & Pattern Recognition",
      cred_3_kicker: "ENGINEERING STACK",
      cred_3_main: "Python, OpenCV, scikit-learn, Flask",
      cred_3_sub: "HOG Descriptors, SVM Classifiers, Modern Web",
      cred_4_kicker: "COMMUNICATION",
      cred_4_main: "Multilingual (Indonesian, English, Chinese)",
      cred_4_sub: "Technical documentation & cross-team collaboration",

      sec2_index: "Primary Research",
      sec2_title: "Automated Multi-Class Vehicle Detection & Counting System",
      sec2_lead: "Computer vision pipeline for detecting, classifying, and counting motor vehicles using Histogram of Oriented Gradients (HOG) features and Support Vector Machine (SVM) classification.",
      flagship_id: "UNDERGRADUATE CAPSTONE RESEARCH",
      flagship_class: "PYTHON | OPENCV | SCIKIT-LEARN | NUMPY | FLASK",
      flagship_img_caption: "Real-time multi-class bounding box inference and virtual counting line at a highway intersection.",
      flagship_hud_btn: "Toggle ROI & Vector Overlay",
      flagship_zoom_btn: "Open Full Specification",
      flagship_heading: "Real-Time Vehicular Detection & Spatial Counting via Gradient Descriptors",
      flagship_dossier_desc: "Processes 30 FPS highway video feeds to detect and count four vehicle classes (Passenger Cars, Motorcycles, Buses, and Trucks). Edge gradients are extracted over 64×128 px windows (8×8 px cells, 16×16 px L2-Hys blocks, 9 orientation bins), classified via an SVM hyperplane, and tracked across frames using minimum Euclidean centroid distance.",
      flagship_modal_btn: "View Full Specification & Download PDF",
      flagship_print_direct_btn: "Print Specification PDF",

      bench_1_label: "Feature Vector Size",
      bench_1_val: "3,780-D",
      bench_1_sub: "8×8 px cells, 16×16 px blocks, 9 bins",
      bench_2_label: "Inference Throughput",
      bench_2_val: "30.4 FPS",
      bench_2_sub: "32.8 ms mean frame latency on CPU",
      bench_3_label: "Classification Precision",
      bench_3_val: "96.4%",
      bench_3_sub: "Evaluated across 4 vehicle categories",
      bench_4_label: "Spatial Tracking",
      bench_4_val: "Centroid L2",
      bench_4_sub: "NMS (IoU 0.35) & virtual counting line",

      pipeline_strip_title: "HOG & SVM IMAGE PROCESSING PIPELINE STAGES",
      stage_tab_1: "Frame & ROI",
      stage_tab_2: "Gamma Correction",
      stage_tab_3: "HOG Gradients",
      stage_tab_4: "SVM Classification",
      stage_tab_5: "Object Tracking",

      sec3_index: "Practical Experience",
      sec3_title: "Internship Experience & Academic Timeline",
      sec3_lead: "Hands-on local network maintenance, digital public queue monitoring, and structured administrative data management.",
      residency_meta: "TECHNICAL INTERNSHIP 2024",
      residency_heading: "Kantor Imigrasi Kelas II TPI Langsa",
      residency_desc: "Information Systems and IT Infrastructure Intern supporting daily public passport services and institutional network reliability.",
      residency_b1: "Monitored digital queue management systems across service counters to maintain smooth daily citizen throughput.",
      residency_b2: "Performed internal LAN connectivity diagnostics, workstation hardware maintenance, and peripheral setup.",
      residency_b3: "Verified digital application records and standardized monthly administrative reporting spreadsheets.",
      residency_inspect_btn: "View Internship Details",

      chrono_1_year: "2022 – 2026",
      chrono_1_role: "B.Comp.Sc (S.Kom.) — S1 Informatika",
      chrono_1_detail: "Universitas Samudra (UNSAM) — Completed Bachelor of Computer Science (GPA 3.60 / 4.00) and capstone research on automated vehicle detection using HOG and SVM.",
      chrono_2_year: "2024",
      chrono_2_role: "IT Systems & Infrastructure Intern",
      chrono_2_detail: "Kantor Imigrasi Kelas II TPI Langsa — Public queue monitoring, internal LAN maintenance, and structured administrative reporting.",
      chrono_3_year: "2022",
      chrono_3_role: "Undergraduate Computer Science Student",
      chrono_3_detail: "Universitas Samudra (UNSAM) — Core studies in algorithms, data structures, digital image processing, and software engineering.",

      sec4_index: "Technical Capabilities",
      sec4_title: "Technical Competency & Specification Matrix",
      sec4_lead: "Structured engineering capabilities across Computer Vision, Web Engineering, Network Infrastructure, and Digital Image Processing.",
      filter_all: "All Domains",
      filter_ml: "Computer Vision & ML",
      filter_web: "Web Engineering",
      filter_sec: "Networks & Systems",
      filter_app: "Image Processing",

      th_domain: "Technical Domain",
      th_stack: "Core Libraries & Tools",
      th_method: "Engineering Scope & Methodology",
      th_output: "Verified Implementation",

      row1_domain: "Computer Vision & ML",
      row1_method: "Histogram of Oriented Gradients (HOG) feature extraction, Support Vector Machine (SVM) classification, Hard Negative Mining, Non-Maximum Suppression (NMS), and Euclidean centroid tracking.",
      row1_output: "Automated Vehicle Counter (96.4% Precision)",

      row2_domain: "Web & UI Engineering",
      row2_method: "Semantic HTML5, responsive CSS architecture, modular ES6+ JavaScript, Flask integration, Three.js/GSAP 3D visualization, and technical SEO.",
      row2_output: "Interactive 3D Portfolio & Technical Docs",

      row3_domain: "Networks & Systems",
      row3_method: "Local area network (LAN) diagnostics, workstation hardware maintenance, public service queue supervision, and Git/GitHub version control.",
      row3_output: "Kantor Imigrasi Langsa IT Operations",

      row4_domain: "Digital Image Processing",
      row4_method: "Color space transformation, power-law gamma normalization, spatial filtering, morphological operations, and administrative document automation.",
      row4_output: "UNSAM Multimedia Informatics Lab",

      sec5_index: "Contact & Documents",
      sec5_title: "Contact Intan Saravina & Print Official Documents",
      sec5_lead: "Available for full-time engineering roles, research collaborations, and software development projects in Computer Vision, Data, and Web Engineering.",
      email_box_label: "DIRECT EMAIL ADDRESS",
      btn_copy_email: "Copy Email Address",
      btn_open_cv: "Print CV",
      btn_open_spec: "Print SVM+HOG Specification",
      meta_name_lbl: "Full Name",
      meta_edu_lbl: "Education",
      meta_edu_val: "B.Comp.Sc (S.Kom.), Universitas Samudra (GPA 3.60)",
      meta_lang_lbl: "Languages",
      meta_lang_val: "Multilingual (Indonesian, English, Chinese)",
      meta_status_lbl: "Location & Status",
      meta_status_val: "Medan, North Sumatra | Available Immediately & Remote",

      footer_copy: "© 2026 Intan Saravina, S.Kom."
    },

    zh: {
      nav_about: "个人简介",
      nav_projects: "核心研究",
      nav_experience: "实习经历",
      nav_capabilities: "专业技能",
      nav_contact: "联系方式",

      way_hero: "首页",
      way_about: "简介",
      way_projects: "研究",
      way_experience: "经历",
      way_capabilities: "技能",
      way_contact: "联系",

      location_label: "印尼北苏门答腊省棉兰 (Medan)",
      hero_status: "计算机科学学士 (S.Kom.) | 萨穆德拉大学",
      hero_kicker: "计算机视觉与软件工程师",
      hero_thesis: "专注于基于方向梯度直方图（HOG）与支持向量机（SVM）的实时车辆检测与空间计数系统研发，以及现代响应式 Web 架构开发。",
      cta_primary: "浏览核心研究",
      cta_cv: "查看并打印简历",
      cta_spec_pdf: "SVM+HOG 完整技术规范",
      cta_contact: "直接联系",

      ledger_1_label: "学位与成绩",
      ledger_1_val: "计算机科学学士 | GPA 3.60",
      ledger_2_label: "研究方向",
      ledger_2_val: "HOG & SVM 车辆检测与计数",
      ledger_3_label: "语言能力",
      ledger_3_val: "多语言 (印尼语, 英语, 中文)",
      ledger_4_label: "毕业院校",
      ledger_4_val: "萨穆德拉大学 (UNSAM)",

      sec1_index: "学术背景",
      sec1_title: "教育背景与工程研发方向",
      sec1_lead: "毕业于萨穆德拉大学（Universitas Samudra, UNSAM）计算机科学专业，专注于数字图像处理、应用计算机视觉与软件系统研发。",
      portrait_role: "计算机科学学士 (2022–2026)",
      about_p1: "<strong>Intan Saravina, S.Kom.</strong> 毕业于<a href='https://unsam.ac.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>萨穆德拉大学 (Universitas Samudra / UNSAM)</a> 工学院计算机科学系（多媒体信息学与计算机视觉方向），取得计算机科学学士学位（<strong>GPA 3.60 / 4.00</strong>）。",
      about_p2: "她的工程实践聚焦于在标准 CPU 硬件上构建高效、稳定的实时视觉处理管线。通过将 3,780 维方向梯度直方图（HOG）特征算子与支持向量机（SVM）分类器相结合，其多车型检测与计数系统实现了 30.4 FPS 的实时帧率与 96.4% 的分类准确率。",
      about_p3: "在信息技术运维方面，她于 2024 年在<a href='https://langsa.imigrasi.go.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>印尼二等移民局（Kantor Imigrasi Kelas II TPI Langsa）</a>完成工程实习，负责办证大厅数字化排队系统监控、局域网（LAN）诊断维护及电子政务报表汇总。",

      cred_1_kicker: "本科学位",
      cred_1_main: "计算机科学学士 (S.Kom.) — S1 Informatika",
      cred_1_sub: "萨穆德拉大学 (UNSAM)，2022 – 2026",
      cred_2_kicker: "学业成绩",
      cred_2_main: "GPA 3.60 / 4.00",
      cred_2_sub: "数字图像处理与模式识别方向",
      cred_3_kicker: "核心工具栈",
      cred_3_main: "Python, OpenCV, scikit-learn, Flask",
      cred_3_sub: "HOG 特征工程、SVM 分类、现代 Web 开发",
      cred_4_kicker: "语言能力",
      cred_4_main: "多语言 (印尼语, 英语, 中文)",
      cred_4_sub: "技术文档编写与跨语言工程协作",

      sec2_index: "核心科研项目",
      sec2_title: "自动化多车型检测与空间计数系统",
      sec2_lead: "基于方向梯度直方图（HOG）边缘特征与支持向量机（SVM）构建的道路车辆实时检测、分类与越线计数架构。",
      flagship_id: "计算机科学本科毕业设计研究",
      flagship_class: "PYTHON | OPENCV | SCIKIT-LEARN | NUMPY | FLASK",
      flagship_img_caption: "道路交叉口多车型边界框推理、质心点与虚拟计数基准线。",
      flagship_hud_btn: "切换 ROI 与轨迹矢量图层",
      flagship_zoom_btn: "打开技术规范",
      flagship_heading: "基于空间梯度特征的实时车辆检测与分类计数",
      flagship_dossier_desc: "系统读取 30 FPS 道路监控视频流，对四类机动车辆（乘用轿车、摩托车、巴士、卡车）进行自动检测与分车型计数。采用 64×128 像素检测窗口（8×8 单元、16×16 L2-Hys 归一化块、9 方向箱）提取 3,780 维特征，经 SVM 超平面分类与欧氏距离质心关联完成精准计数。",
      flagship_modal_btn: "查看完整技术规范并下载 PDF",
      flagship_print_direct_btn: "打印技术规范 PDF",

      bench_1_label: "特征向量维度",
      bench_1_val: "3,780 维",
      bench_1_sub: "8×8 像素单元, 16×16 块, 9 方向箱",
      bench_2_label: "实时处理帧率",
      bench_2_val: "30.4 FPS",
      bench_2_sub: "CPU 单帧平均处理延迟 32.8 ms",
      bench_3_label: "分类准确率",
      bench_3_val: "96.4%",
      bench_3_sub: "覆盖四类道路机动车辆目标",
      bench_4_label: "空间追踪策略",
      bench_4_val: "质心 L2 关联",
      bench_4_sub: "NMS (IoU 0.35) 与虚拟越线触发",

      pipeline_strip_title: "HOG 与 SVM 图像处理算法流程",
      stage_tab_1: "视频采集与 ROI",
      stage_tab_2: "伽马光照校正",
      stage_tab_3: "HOG 梯度计算",
      stage_tab_4: "SVM 超平面分类",
      stage_tab_5: "质心追踪计数",

      sec3_index: "工程实践经历",
      sec3_title: "实习经历与学术履历",
      sec3_lead: "在公共服务机构开展局域网故障排查、数字化排队管理系统运维与结构化数据处理。",
      residency_meta: "工程实习 2024",
      residency_heading: "印度尼西亚二等移民局 (Kantor Imigrasi Kelas II TPI Langsa)",
      residency_desc: "信息系统与 IT 基础设施实习生，协助保障日常护照办理与出入境政务系统的稳定运行。",
      residency_b1: "日常监控办证大厅数字化排队管理系统，确保公众服务窗口高效流转。",
      residency_b2: "执行内部局域网（LAN）连通性检测、办公终端硬件维护与外设配置。",
      residency_b3: "核验电子申请档案并构建结构化月度行政报表汇总流程。",
      residency_inspect_btn: "查看实习记录详情",

      chrono_1_year: "2022 – 2026",
      chrono_1_role: "计算机科学学士 (S.Kom.) — S1 Informatika",
      chrono_1_detail: "萨穆德拉大学 (UNSAM) — 完成计算机科学本科学业（GPA 3.60 / 4.00）及 HOG + SVM 车辆自动检测与计数课题研究。",
      chrono_2_year: "2024",
      chrono_2_role: "IT 系统与基础设施实习生",
      chrono_2_detail: "印尼二等移民局（Langsa）— 负责排队系统监控、内网维护与政务数据整理。",
      chrono_3_year: "2022",
      chrono_3_role: "计算机科学系本科生",
      chrono_3_detail: "萨穆德拉大学 (UNSAM) — 主修算法与数据结构、数字图像处理、模式识别与软件工程。",

      sec4_index: "专业技术能力",
      sec4_title: "技术能力与工程规范矩阵",
      sec4_lead: "涵盖计算机视觉与机器学习、Web 与前端工程、网络系统运维及数字图像处理四大领域。",
      filter_all: "全部领域",
      filter_ml: "计算机视觉与 ML",
      filter_web: "Web 工程",
      filter_sec: "网络与系统",
      filter_app: "数字图像处理",

      th_domain: "技术领域",
      th_stack: "核心工具与库",
      th_method: "工程方法与应用范围",
      th_output: "代表性成果",

      row1_domain: "计算机视觉与 ML",
      row1_method: "方向梯度直方图（HOG）特征提取、支持向量机（SVM）最大间隔分类、难负样本挖掘、非极大值抑制（NMS）与欧氏距离质心追踪。",
      row1_output: "多车型自动计数系统 (准确率 96.4%)",

      row2_domain: "Web 与界面工程",
      row2_method: "语义化 HTML5、响应式 CSS 架构、模块化 ES6+ JavaScript、Flask 集成、Three.js/GSAP 三维可视化与技术 SEO。",
      row2_output: "三语交互式作品集与技术文档系统",

      row3_domain: "网络与系统运维",
      row3_method: "局域网（LAN）连通性诊断、工作站硬件维护、公共排队系统监控及 Git/GitHub 版本控制。",
      row3_output: "朗萨移民局 IT 基础设施运维",

      row4_domain: "数字图像处理",
      row4_method: "色彩空间转换、幂律伽马校正、空间滤波、形态学变换及办公文档自动化。",
      row4_output: "UNSAM 多媒体信息学研究实践",

      sec5_index: "联系方式与文档",
      sec5_title: "联系 Intan Saravina 并打印官方文档",
      sec5_lead: "诚邀计算机视觉、软件工程、数据分析及 Web 开发领域的全职岗位与研发合作机会。",
      email_box_label: "直通工作邮箱",
      btn_copy_email: "复制邮箱地址",
      btn_open_cv: "打印简历",
      btn_open_spec: "打印 SVM+HOG 技术规范",
      meta_name_lbl: "姓名与学位",
      meta_edu_lbl: "毕业院校",
      meta_edu_val: "萨穆德拉大学 (UNSAM) 计算机科学学士 (GPA 3.60)",
      meta_lang_lbl: "语言能力",
      meta_lang_val: "多语言 (印尼语, 英语, 中文)",
      meta_status_lbl: "所在地与状态",
      meta_status_val: "印尼棉兰 (Medan) | 随时到岗与远程协作",

      footer_copy: "© 2026 Intan Saravina, S.Kom."
    }
  };

  // --------------------------------------------------------------------------
  // 2. PIPELINE STAGE DATA
  // --------------------------------------------------------------------------
  const PIPELINE_DATA = {
    id: [
      {
        title: "Akuisisi Video 30 FPS & Pembatasan Poligon ROI",
        desc: "Membaca aliran video jalan raya 30 FPS menggunakan OpenCV dan menerapkan mask poligon Region of Interest (ROI) pada lajur jalan aktif untuk mengeliminasi derau latar pepohonan dan bangunan.",
        eq: "I_roi(x, y) = I(x, y) · M_poly(x, y)"
      },
      {
        title: "Konversi Luminansi Grayscale & Koreksi Gamma (γ = 0,85)",
        desc: "Mengubah citra RGB ke ruang derajat keabuan dan menerapkan normalisasi power-law gamma (γ = 0,85) guna menstabilkan kontras lokal terhadap bayangan tajam maupun sorot lampu kendaraan.",
        eq: "I_norm(x, y) = [I_gray(x, y) / 255]^0.85"
      },
      {
        title: "Ekstraksi Gradien Sobel & Histogram HOG (3.780 Dimensi)",
        desc: "Menghitung turunan horizontal dan vertikal (Gx, Gy) dengan operator Sobel [-1, 0, 1], mengelompokkan magnitudo gradien ke 9 bin orientasi (0°–180°) pada tiap sel 8×8 px, dan menormalisasi blok 16×16 px dengan L2-Hys.",
        eq: "|G| = √(Gx² + Gy²),  θ = atan2(Gy, Gx)  →  ℝ^3780"
      },
      {
        title: "Evaluasi Hyperplane SVM & Non-Maximum Suppression (NMS)",
        desc: "Mengevaluasi vektor fitur 3.780-D pada fungsi keputusan Support Vector Machine yang dilatih dengan Hard Negative Mining, lalu menyaring kotak deteksi bertumpuk menggunakan NMS (ambang IoU = 0,35).",
        eq: "f(x) = sgn(w^T · x + b),  IoU(B_i, B_j) ≤ 0.35"
      },
      {
        title: "Pelacakan Titik Pusat (Centroid) Euclidean & Garis Hitung",
        desc: "Menghitung koordinat titik pusat tiap kendaraan dan mencocokkan identitas objek antar-frame menggunakan jarak Euclidean minimum, lalu menambah akumulator kelas saat melintasi garis ukur virtual.",
        eq: "||C_t - C_{t-1}||₂ < τ_dist  ⇒  Count[Kelas] += 1"
      }
    ],
    en: [
      {
        title: "30 FPS Video Acquisition & Polygonal ROI Masking",
        desc: "Ingests 30 FPS highway video streams via OpenCV and applies a polygonal Region of Interest (ROI) mask over active traffic lanes to eliminate background foliage and building clutter.",
        eq: "I_roi(x, y) = I(x, y) · M_poly(x, y)"
      },
      {
        title: "Luminance Grayscale Conversion & Gamma Correction (γ = 0.85)",
        desc: "Transforms RGB frames to luminance grayscale and applies power-law gamma normalization (γ = 0.85) to stabilize local contrast against cast shadows and headlight glare.",
        eq: "I_norm(x, y) = [I_gray(x, y) / 255]^0.85"
      },
      {
        title: "Sobel Gradient Computation & 3,780-D HOG Descriptor",
        desc: "Computes 1D Sobel derivatives (Gx, Gy), quantizes gradient magnitudes into 9 unsigned orientation bins (0°–180°) per 8×8 px cell, and normalizes overlapping 16×16 px blocks via L2-Hys.",
        eq: "|G| = √(Gx² + Gy²),  θ = atan2(Gy, Gx)  →  ℝ^3780"
      },
      {
        title: "SVM Hyperplane Evaluation & Non-Maximum Suppression",
        desc: "Scores each 3,780-D descriptor against a Support Vector Machine classifier trained with Hard Negative Mining, merging overlapping bounding boxes via NMS (IoU threshold = 0.35).",
        eq: "f(x) = sgn(w^T · x + b),  IoU(B_i, B_j) ≤ 0.35"
      },
      {
        title: "Euclidean Centroid Association & Virtual Tripwire Counting",
        desc: "Matches vehicle bounding-box centroids across consecutive frames using minimum Euclidean distance and increments per-class counters when trajectories cross the virtual detection line.",
        eq: "||C_t - C_{t-1}||₂ < τ_dist  ⇒  Count[Class] += 1"
      }
    ],
    zh: [
      {
        title: "30 FPS 视频流采集与多边形感兴趣区域 (ROI) 掩膜",
        desc: "通过 OpenCV 读取 30 FPS 道路监控视频，应用多边形 ROI 掩膜锁定有效行车车道，过滤背景树木与建筑干扰。",
        eq: "I_roi(x, y) = I(x, y) · M_poly(x, y)"
      },
      {
        title: "亮度灰度转换与伽马光照校正 (γ = 0.85)",
        desc: "将 RGB 图像转换为灰度空间并执行幂律伽马归一化（γ = 0.85），抑制阴影遮挡与车灯强光引起的局部对比度突变。",
        eq: "I_norm(x, y) = [I_gray(x, y) / 255]^0.85"
      },
      {
        title: "Sobel 梯度算子与 3,780 维 HOG 特征构建",
        desc: "使用 [-1, 0, 1] 算子计算水平与垂直梯度 (Gx, Gy)，在 8×8 像素单元内按 0°–180° 统计 9 通道方向直方图，并对 16×16 像素块执行 L2-Hys 归一化。",
        eq: "|G| = √(Gx² + Gy²),  θ = atan2(Gy, Gx)  →  ℝ^3780"
      },
      {
        title: "SVM 最大间隔超平面分类与非极大值抑制 (NMS)",
        desc: "将 3,780 维特征向量输入经难负样本挖掘训练的 SVM 决策函数，并采用非极大值抑制（IoU 阈值 0.35）消除重叠候选框。",
        eq: "f(x) = sgn(w^T · x + b),  IoU(B_i, B_j) ≤ 0.35"
      },
      {
        title: "欧氏距离质心轨迹关联与虚拟基准线计数",
        desc: "计算连续帧检测框的几何质心，基于最小欧氏距离关联跨帧目标，当车辆轨迹穿越虚拟检测线时累加对应车型计数。",
        eq: "||C_t - C_{t-1}||₂ < τ_dist  ⇒  Count[Class] += 1"
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 3. MODAL SPECIFICATIONS (SVM+HOG, CV, IMIGRASI)
  // --------------------------------------------------------------------------
  const MODAL_DOSSIERS = {
    id: {
      svmhog: {
        kicker: "SPESIFIKASI TEKNIS PENELITIAN — S1 INFORMATIKA UNSAM",
        title: "Sistem Deteksi & Penghitung Kendaraan Otomatis Multi-Kelas Berbasis HOG & SVM",
        subtitle: "Python | OpenCV | scikit-learn | NumPy | Flask | Vektor 3.780-D | 30,4 FPS | Akurasi 96,4%",
        imgId: "img-svmhog",
        printTarget: "svmhog",
        printBtnLabel: "Cetak / Unduh PDF Spesifikasi SVM+HOG",
        bullets: [
          "Konfigurasi Deskriptor HOG (3.780 Dimensi): Jendela deteksi 64×128 piksel dibagi menjadi sel 8×8 piksel (8×16 sel) dan blok 16×16 piksel dengan pergeseran (stride) 8 piksel (overlap 50% = 7×15 blok). Tiap sel memetakan gradien ke 9 bin orientasi unsigned (0°–180°) sehingga menghasilkan 7 × 15 × 4 × 9 = 3.780 fitur dengan normalisasi blok L2-Hys (ε = 10⁻⁵).",
          "Pelatihan Pengklasifikasi SVM & Hard Negative Mining: Model Support Vector Machine dilatih menggunakan dataset citra kendaraan multi-kondisi (siang cerah, berbayang, dan senja) yang diperkaya melalui proses Hard Negative Mining untuk menekan false positive pada marka jalan dan bayangan.",
          "Deteksi Multi-Skala & Pelacakan Spasial: Pencarian jendela geser (sliding window) multi-skala dengan faktor skala 1,05 dipadukan dengan Non-Maximum Suppression (ambang IoU = 0,35) dan pelacakan titik pusat (centroid) berjarak Euclidean minimum melintasi garis ukur virtual.",
          "Antarmuka & Telemetri Operasional: Dilengkapi dasbor pemantauan berbasis Python, OpenCV, dan Flask yang menampilkan bounding box real-time beserta rekapitulasi jumlah kendaraan per kategori."
        ],
        tableTitle: "Tabel Evaluasi Performa Klasifikasi Multi-Kelas & Kecepatan Komputasi",
        tableHeaders: ["Kategori Kendaraan", "Presisi (%)", "Recall (%)", "Skor F1 (%)", "Latensi Rata-rata"],
        tableRows: [
          ["Mobil Penumpang (Car)", "97,2%", "96,8%", "97,0%", "31,4 ms"],
          ["Sepeda Motor (Motorcycle)", "95,6%", "94,9%", "95,2%", "34,1 ms"],
          ["Bus Angkutan (Bus)", "96,8%", "96,2%", "96,5%", "32,6 ms"],
          ["Truk / Kendaraan Berat (Truck)", "96,0%", "95,5%", "95,7%", "33,1 ms"],
          ["Rata-Rata Sistem (Overall)", "96,4%", "95,9%", "96,1%", "32,8 ms (30,4 FPS)"]
        ],
        footer: "Peneliti: Intan Saravina, S.Kom. | Program Studi S1 Informatika, Universitas Samudra (UNSAM)"
      },
      cv: {
        kicker: "CURRICULUM VITAE PROFESIONAL",
        title: "Intan Saravina, S.Kom. — Computer Vision & Software Engineer",
        subtitle: "Sarjana Komputer (S1 Informatika), Universitas Samudra (UNSAM) | IPK 3,60 / 4,00",
        imgId: "img-portrait",
        printTarget: "cv",
        printBtnLabel: "Cetak / Simpan PDF CV",
        bullets: [],
        tableTitle: "",
        tableHeaders: [],
        tableRows: [],
        footer: "Intan Saravina, S.Kom. | intansaravina122@gmail.com | Medan, Sumatera Utara"
      },
      imigrasi: {
        kicker: "DOKUMENTASI KERJA PRAKTEK (2024)",
        title: "Kantor Imigrasi Kelas II TPI Langsa — Sistem Informasi & Infrastruktur TI",
        subtitle: "Direktorat Jenderal Imigrasi (2024)",
        imgId: "img-imigrasi",
        printTarget: "cv",
        printBtnLabel: "Cetak CV Lengkap",
        bullets: [
          "Pemantauan Sistem Antrean Layanan Publik: Mengawasi operasional layar panggil dan sinkronisasi server antrean layanan paspor harian agar waktu tunggu masyarakat tetap terkendali.",
          "Diagnostik Jaringan Lokal (LAN) & Perangkat Keras: Melakukan pemeriksaan rutin konektivitas switch LAN, pengkabelan terstruktur, serta perawatan komputer kerja dan pemindai dokumen di loket pelayanan.",
          "Verifikasi Data & Otomatisasi Laporan: Mengelola validasi kelengkapan berkas digital pemohon serta menyusun rekapitulasi laporan bulanan terstruktur menggunakan perangkat lunak perkantoran."
        ],
        tableTitle: "Rincian Ruang Lingkup Kerja Praktek",
        tableHeaders: ["Unit Kerja", "Tanggung Jawab Utama", "Infrastruktur", "Tahun"],
        tableRows: [
          ["Pelayanan Publik", "Monitoring Sistem Manajemen Antrean Digital", "Server Antrean & Display", "2024"],
          ["Infrastruktur TI", "Diagnostik Jaringan LAN & Perawatan Workstation", "Switch LAN & Terminal Loket", "2024"],
          ["Administrasi Data", "Validasi Berkas Permohonan & Rekapitulasi Laporan", "Sistem Informasi Instansi", "2024"]
        ],
        footer: "Instansi: Kantor Imigrasi Kelas II TPI Langsa (langsa.imigrasi.go.id)"
      }
    },

    en: {
      svmhog: {
        kicker: "TECHNICAL RESEARCH SPECIFICATION — UNSAM COMPUTER SCIENCE",
        title: "Automated Multi-Class Vehicle Detection & Spatial Counting System (HOG & SVM)",
        subtitle: "Python | OpenCV | scikit-learn | NumPy | Flask | 3,780-D Descriptor | 30.4 FPS | 96.4% Precision",
        imgId: "img-svmhog",
        printTarget: "svmhog",
        printBtnLabel: "Print / Save SVM+HOG Specification PDF",
        bullets: [
          "HOG Descriptor Architecture (3,780 Dimensions): 64×128 px detection window partitioned into 8×8 px cells (8×16 cells) and 16×16 px blocks with an 8 px stride (50% overlap = 7×15 blocks). Each cell quantizes gradients into 9 unsigned orientation bins (0°–180°), yielding 7 × 15 × 4 × 9 = 3,780 L2-Hys normalized features.",
          "SVM Classifier & Hard Negative Mining: Support Vector Machine trained across multi-illumination highway datasets (bright daylight, cast shadows, and dusk) augmented via Hard Negative Mining to suppress false positives on road markings.",
          "Multi-Scale Detection & Centroid Tracking: Multi-scale sliding window search (scale factor 1.05) paired with Non-Maximum Suppression (IoU threshold = 0.35) and minimum Euclidean distance centroid tracking across virtual counting lines.",
          "Operational Telemetry Interface: Integrated with Python, OpenCV, and Flask to render real-time bounding boxes, trajectory vectors, and per-class vehicle counters."
        ],
        tableTitle: "Multi-Class Classification Accuracy & Runtime Latency Breakdown",
        tableHeaders: ["Vehicle Category", "Precision (%)", "Recall (%)", "F1-Score (%)", "Mean Frame Latency"],
        tableRows: [
          ["Passenger Car (Mobil)", "97.2%", "96.8%", "97.0%", "31.4 ms"],
          ["Motorcycle (Sepeda Motor)", "95.6%", "94.9%", "95.2%", "34.1 ms"],
          ["Public Bus (Bus)", "96.8%", "96.2%", "96.5%", "32.6 ms"],
          ["Heavy Truck (Truk)", "96.0%", "95.5%", "95.7%", "33.1 ms"],
          ["Overall System Mean", "96.4%", "95.9%", "96.1%", "32.8 ms (30.4 FPS)"]
        ],
        footer: "Researcher: Intan Saravina, S.Kom. | B.Comp.Sc (S1 Informatika), Universitas Samudra (UNSAM)"
      },
      cv: {
        kicker: "PROFESSIONAL CURRICULUM VITAE",
        title: "Intan Saravina, S.Kom. — Computer Vision & Software Engineer",
        subtitle: "Bachelor of Computer Science (S1 Informatika), Universitas Samudra | GPA 3.60 / 4.00",
        imgId: "img-portrait",
        printTarget: "cv",
        printBtnLabel: "Print / Save CV PDF",
        bullets: [],
        tableTitle: "",
        tableHeaders: [],
        tableRows: [],
        footer: "Intan Saravina, S.Kom. | intansaravina122@gmail.com | Medan, North Sumatra"
      },
      imigrasi: {
        kicker: "TECHNICAL INTERNSHIP RECORD (2024)",
        title: "Kantor Imigrasi Kelas II TPI Langsa — IT Systems & Infrastructure",
        subtitle: "Directorate General of Immigration (2024)",
        imgId: "img-imigrasi",
        printTarget: "cv",
        printBtnLabel: "Print Full CV",
        bullets: [
          "Public Queue System Monitoring: Supervised daily digital queue displays and server synchronization for passport and immigration services.",
          "Internal LAN & Hardware Maintenance: Performed routine diagnostics on local area network switches, structured cabling, and officer workstation terminals.",
          "Data Verification & Reporting: Verified electronic applicant files and automated monthly administrative summary reports."
        ],
        tableTitle: "Internship Scope & Operational Responsibilities",
        tableHeaders: ["Operational Unit", "Primary Responsibility", "Infrastructure", "Year"],
        tableRows: [
          ["Public Service", "Digital Queue Management Telemetry", "Queue Server & Displays", "2024"],
          ["IT Infrastructure", "Internal LAN Diagnostics & Workstation Care", "LAN Switches & Terminals", "2024"],
          ["Data Administration", "Applicant Record Verification & Reporting", "Institutional IT Systems", "2024"]
        ],
        footer: "Host Institution: Kantor Imigrasi Kelas II TPI Langsa (langsa.imigrasi.go.id)"
      }
    },

    zh: {
      svmhog: {
        kicker: "工程技术规范 — 萨穆德拉大学计算机科学系",
        title: "基于 HOG 特征与 SVM 算法的自动化多车型检测与空间计数系统",
        subtitle: "Python | OpenCV | scikit-learn | NumPy | Flask | 3,780 维特征 | 30.4 FPS | 准确率 96.4%",
        imgId: "img-svmhog",
        printTarget: "svmhog",
        printBtnLabel: "打印 / 导出 SVM+HOG 技术规范 PDF",
        bullets: [
          "HOG 特征算子架构（3,780 维）：采用 64×128 像素检测窗口，划分为 8×8 像素单元（8×16 单元）与 16×16 像素块（步长 8 像素，重叠率 50% = 7×15 块）。每个单元按 0°–180° 统计 9 个无符号方向直方图，生成 7 × 15 × 4 × 9 = 3,780 维 L2-Hys 归一化特征向量。",
          "SVM 分类器训练与难负样本挖掘：基于多光照道路数据集（晴天、树影遮挡与黄昏）训练支持向量机模型，结合难负样本挖掘（Hard Negative Mining）抑制路面标线误检。",
          "多尺度滑窗检测与质心追踪：采用 1.05 缩放步长的多尺度滑动窗口搜索，融合非极大值抑制（IoU 阈值 0.35）与最小欧氏距离质心追踪，实现虚拟基准线越线计数。",
          "可视化与遥测界面：基于 Python、OpenCV 与 Flask 构建实时监控界面，同步显示边界框、运动轨迹与分车型统计数据。"
        ],
        tableTitle: "多车型分类准确率与单帧计算延迟实测表",
        tableHeaders: ["车辆类别", "精确率 Precision", "召回率 Recall", "F1 分数", "平均单帧延迟"],
        tableRows: [
          ["乘用轿车 (Car)", "97.2%", "96.8%", "97.0%", "31.4 ms"],
          ["摩托车 (Motorcycle)", "95.6%", "94.9%", "95.2%", "34.1 ms"],
          ["公共巴士 (Bus)", "96.8%", "96.2%", "96.5%", "32.6 ms"],
          ["重型卡车 (Truck)", "96.0%", "95.5%", "95.7%", "33.1 ms"],
          ["系统整体均值 (Overall)", "96.4%", "95.9%", "96.1%", "32.8 ms (30.4 FPS)"]
        ],
        footer: "研发人员：Intan Saravina, S.Kom. | 萨穆德拉大学 (UNSAM) 计算机科学系"
      },
      cv: {
        kicker: "个人专业履历 (CV)",
        title: "Intan Saravina, S.Kom. — 计算机视觉与软件工程师",
        subtitle: "萨穆德拉大学 (UNSAM) 计算机科学学士 | GPA 3.60 / 4.00",
        imgId: "img-portrait",
        printTarget: "cv",
        printBtnLabel: "打印 / 保存个人简历 PDF",
        bullets: [],
        tableTitle: "",
        tableHeaders: [],
        tableRows: [],
        footer: "Intan Saravina, S.Kom. | intansaravina122@gmail.com | 印尼北苏门答腊省棉兰"
      },
      imigrasi: {
        kicker: "工程实习档案 (2024)",
        title: "印度尼西亚二等移民局 (Langsa) — 信息系统与 IT 基础设施",
        subtitle: "印尼移民总局下属机构 (2024)",
        imgId: "img-imigrasi",
        printTarget: "cv",
        printBtnLabel: "打印完整简历",
        bullets: [
          "公共服务排队系统监控：负责护照办理大厅数字化排队叫号系统与服务器状态同步监控。",
          "内部局域网与终端维护：执行局域网交换机连通性诊断、综合布线巡检及业务窗口计算机硬件维护。",
          "电子档案核验与报表汇总：协助核验申请人电子档案并构建结构化月度统计报表。"
        ],
        tableTitle: "实习职责与基础设施范围",
        tableHeaders: ["业务单元", "核心职责", "硬件与系统环境", "年份"],
        tableRows: [
          ["公共服务大厅", "数字化排队管理系统实时监控", "排队服务器与终端大屏", "2024"],
          ["IT 基础设施", "局域网 (LAN) 故障诊断与终端维护", "交换机与窗口工作站", "2024"],
          ["数据行政管理", "电子申请档案核验与月度报表自动化", "政务信息管理系统", "2024"]
        ],
        footer: "实习机构：Kantor Imigrasi Kelas II TPI Langsa (langsa.imigrasi.go.id)"
      }
    }
  };

  let currentLang = "id";
  let currentTheme = "dark";
  let currentPipelineIndex = 0;
  let activeModalKey = null;
  let targetScrollRatio = 0;
  let threeSceneController = null;
  let lenisInstance = null;

  // --------------------------------------------------------------------------
  // 4. SANDBOX-SAFE TOAST NOTIFICATION
  // --------------------------------------------------------------------------
  let toastTimeout = null;
  function notifyToast(msg) {
    const el = document.getElementById("cyber-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      el.classList.remove("show");
    }, 3000);
  }

  // --------------------------------------------------------------------------
  // 5. LENIS SMOOTH SCROLL (WITH MODAL SCROLL ISOLATION)
  // --------------------------------------------------------------------------
  function initSmoothScroll() {
    if (typeof Lenis === "undefined") return;
    try {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: function (t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
        smoothWheel: true,
        prevent: function (node) {
          return Boolean(
            node &&
            node.closest &&
            node.closest("#cyber-modal, .dossier-modal-panel")
          );
        }
      });

      lenisInstance.on("scroll", function () {
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.update();
        }
      });

      function raf(time) {
        if (lenisInstance) {
          lenisInstance.raf(time);
        }
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (err) {
      // Fallback to native smooth scroll
    }
  }

  // --------------------------------------------------------------------------
  // 6. 3D GAME-WORLD CAMERA SPLINE & ARCHITECTURAL CORRIDOR ENGINE (Three.js)
  // --------------------------------------------------------------------------
  function damp(current, target, lambda, dt) {
    return current + (target - current) * (1 - Math.exp(-lambda * dt));
  }

  function initGameWorldThreeJS() {
    const canvas = document.getElementById("webgl-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch (e) {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x181a1f, 0.026);

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      140
    );
    camera.position.set(0, 1.2, 16);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const warmBrassMat = new THREE.MeshStandardMaterial({
      color: 0xc5a365,
      roughness: 0.28,
      metalness: 0.85
    });

    const brushedPewterMat = new THREE.MeshStandardMaterial({
      color: 0x9ca3af,
      roughness: 0.35,
      metalness: 0.78
    });

    const matteCharcoalMat = new THREE.MeshStandardMaterial({
      color: 0x262a32,
      roughness: 0.48,
      metalness: 0.62
    });

    const wireGoldMat = new THREE.MeshBasicMaterial({
      color: 0xd4b882,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });

    const portalLineMat = new THREE.LineBasicMaterial({
      color: 0xc5a365,
      transparent: true,
      opacity: 0.34
    });

    const worldRoot = new THREE.Group();
    scene.add(worldRoot);

    const floorGrid = new THREE.GridHelper(120, 60, 0xc5a365, 0x383d47);
    floorGrid.position.set(2.0, -4.2, -20);
    if (floorGrid.material) {
      floorGrid.material.transparent = true;
      floorGrid.material.opacity = 0.22;
    }
    worldRoot.add(floorGrid);

    const portalEdgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(7.2, 6.4, 0.18));
    const pillarGeo = new THREE.BoxGeometry(0.22, 6.4, 0.22);

    for (let p = 0; p < 8; p++) {
      const portalGroup = new THREE.Group();
      const zPos = 8 - p * 8.5;

      const wireFrame = new THREE.LineSegments(portalEdgesGeo, portalLineMat);
      portalGroup.add(wireFrame);

      const leftPillar = new THREE.Mesh(pillarGeo, matteCharcoalMat);
      leftPillar.position.set(-3.6, 0, 0);
      portalGroup.add(leftPillar);

      const rightPillar = new THREE.Mesh(pillarGeo, matteCharcoalMat);
      rightPillar.position.set(3.6, 0, 0);
      portalGroup.add(rightPillar);

      portalGroup.position.set(4.5, -0.4, zPos);
      worldRoot.add(portalGroup);
    }

    // Station 1 (z = +5)
    const station1Group = new THREE.Group();
    station1Group.position.set(4.5, 0.2, 5.0);
    worldRoot.add(station1Group);

    const gyroRings = [];
    const GYRO_RADII = [1.85, 2.35, 2.90, 3.45];
    GYRO_RADII.forEach(function (rad, idx) {
      const rg = new THREE.Group();
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(rad, idx % 2 === 0 ? 0.025 : 0.016, 20, 100),
        idx % 2 === 0 ? warmBrassMat : brushedPewterMat
      );
      rg.add(torus);
      rg.rotation.x = idx * 0.5;
      rg.rotation.y = idx * 0.6;
      station1Group.add(rg);
      gyroRings.push(rg);
    });

    const heroOcta = new THREE.Mesh(new THREE.OctahedronGeometry(0.95, 1), matteCharcoalMat);
    const heroOctaWire = new THREE.Mesh(new THREE.OctahedronGeometry(0.98, 1), wireGoldMat);
    station1Group.add(heroOcta);
    station1Group.add(heroOctaWire);

    // Station 2 (z = -9)
    const station2Group = new THREE.Group();
    station2Group.position.set(4.6, 0.3, -9.0);
    worldRoot.add(station2Group);

    const icosaCore = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 1), matteCharcoalMat);
    const icosaWire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.50, 1), wireGoldMat);
    station2Group.add(icosaCore);
    station2Group.add(icosaWire);

    const satelliteCubes = [];
    const satGeo = new THREE.BoxGeometry(0.32, 0.32, 0.32);
    for (let s = 0; s < 8; s++) {
      const sat = new THREE.Mesh(satGeo, s % 2 === 0 ? warmBrassMat : brushedPewterMat);
      const ang = (s / 8) * Math.PI * 2;
      sat.position.set(Math.cos(ang) * 2.7, Math.sin(ang) * 2.7, Math.sin(ang * 2) * 0.6);
      station2Group.add(sat);
      satelliteCubes.push({ mesh: sat, angle: ang });
    }

    // Station 3 (z = -23)
    const station3Group = new THREE.Group();
    station3Group.position.set(4.5, 0.1, -23.0);
    worldRoot.add(station3Group);

    const apertureRings = [];
    for (let a = 0; a < 5; a++) {
      const ar = new THREE.Mesh(
        new THREE.TorusGeometry(2.1 + a * 0.25, 0.022, 18, 96),
        a % 2 === 0 ? warmBrassMat : brushedPewterMat
      );
      ar.position.z = (a - 2) * 0.75;
      station3Group.add(ar);
      apertureRings.push(ar);
    }

    const visionBoxEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(2.4, 2.4, 2.4)),
      portalLineMat
    );
    station3Group.add(visionBoxEdges);

    const scanPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.35, 2.35, 6, 6),
      new THREE.MeshBasicMaterial({
        color: 0xc5a365,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide
      })
    );
    station3Group.add(scanPlane);

    // Station 4 (z = -37)
    const station4Group = new THREE.Group();
    station4Group.position.set(4.5, 0.2, -37.0);
    worldRoot.add(station4Group);

    const netKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.4, 0.18, 120, 20, 2, 3),
      matteCharcoalMat
    );
    const netKnotWire = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.43, 0.19, 120, 20, 2, 3),
      wireGoldMat
    );
    station4Group.add(netKnot);
    station4Group.add(netKnotWire);

    const netOuterRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.1, 0.022, 18, 100),
      warmBrassMat
    );
    station4Group.add(netOuterRing);

    // Station 5 (z = -50)
    const station5Group = new THREE.Group();
    station5Group.position.set(4.4, 0.1, -50.0);
    worldRoot.add(station5Group);

    for (let h = 0; h < 3; h++) {
      const hr = new THREE.Mesh(
        new THREE.TorusGeometry(2.2 + h * 0.7, 0.025, 20, 110),
        h === 1 ? brushedPewterMat : warmBrassMat
      );
      hr.rotation.x = Math.PI * 0.32 + h * 0.22;
      station5Group.add(hr);
    }

    // Atmospheric Motes
    const moteCount = 420;
    const motePositions = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
      const i3 = i * 3;
      motePositions[i3] = (Math.random() - 0.2) * 18.0;
      motePositions[i3 + 1] = (Math.random() - 0.5) * 10.0;
      motePositions[i3 + 2] = 14.0 - Math.random() * 72.0;
    }
    const moteGeo = new THREE.BufferGeometry();
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
    const moteMat = new THREE.PointsMaterial({
      color: 0xd4b882,
      size: 0.055,
      transparent: true,
      opacity: 0.42
    });
    const corridorMotes = new THREE.Points(moteGeo, moteMat);
    scene.add(corridorMotes);

    const ambientLight = new THREE.AmbientLight(0xf4f3ef, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e4, 2.2);
    keyLight.position.set(10, 14, 12);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc5a365, 1.5);
    rimLight.position.set(-10, -6, -15);
    scene.add(rimLight);

    threeSceneController = {
      setTheme: function (theme) {
        if (theme === "light") {
          scene.fog.color.setHex(0xf4f3ef);
          warmBrassMat.color.setHex(0x9a783b);
          matteCharcoalMat.color.setHex(0xd6d3cd);
          wireGoldMat.color.setHex(0x8a6d36);
          moteMat.color.setHex(0x8a6d36);
        } else {
          scene.fog.color.setHex(0x181a1f);
          warmBrassMat.color.setHex(0xc5a365);
          matteCharcoalMat.color.setHex(0x262a32);
          wireGoldMat.color.setHex(0xd4b882);
          moteMat.color.setHex(0xd4b882);
        }
      }
    };

    let stage1Scroll = 0;
    let smoothScroll = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;

    window.addEventListener("mousemove", function (e) {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function updateScrollRatio() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScrollRatio = Math.min(1, Math.max(0, scrollTop / maxScroll));
    }

    updateScrollRatio();
    window.addEventListener("scroll", updateScrollRatio, { passive: true });

    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let lastTime = performance.now();

    function animateGameWorld(now) {
      requestAnimationFrame(animateGameWorld);

      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) * 0.001));
      lastTime = now;
      const elapsed = now * 0.001;

      stage1Scroll = damp(stage1Scroll, targetScrollRatio, 3.8, dt);
      smoothScroll = damp(smoothScroll, stage1Scroll, 3.0, dt);

      smoothMouseX = damp(smoothMouseX, targetMouseX, 2.5, dt);
      smoothMouseY = damp(smoothMouseY, targetMouseY, 2.5, dt);

      const isDesktop = window.innerWidth > 980;
      const camZ = 15.5 - smoothScroll * 56.0;
      const camX = (isDesktop ? 0.0 : 1.8) + Math.sin(smoothScroll * Math.PI * 2) * 0.85 + smoothMouseX * 0.45;
      const camY = 0.35 + Math.cos(smoothScroll * Math.PI * 3) * 0.35 - smoothMouseY * 0.3;

      camera.position.set(camX, camY, camZ);

      const lookTargetX = (isDesktop ? 2.6 : 3.2) + Math.sin(smoothScroll * Math.PI * 2) * 0.5 + smoothMouseX * 0.3;
      const lookTargetY = Math.sin(smoothScroll * Math.PI * 2) * 0.25 - smoothMouseY * 0.2;
      const lookTargetZ = camZ - 11.5;
      camera.lookAt(lookTargetX, lookTargetY, lookTargetZ);

      const scrollVelocity = targetScrollRatio - smoothScroll;
      camera.rotation.z = scrollVelocity * -0.18 + smoothMouseX * -0.025;

      gyroRings.forEach(function (rg, idx) {
        const dir = idx % 2 === 0 ? 1 : -1;
        rg.rotation.x = elapsed * 0.24 * dir + smoothScroll * Math.PI * 2.2;
        rg.rotation.y = elapsed * 0.30 * -dir + idx * 0.5;
      });
      heroOcta.rotation.y = elapsed * 0.35 + smoothScroll * 4.0;
      heroOctaWire.rotation.y = -elapsed * 0.25 - smoothScroll * 4.0;

      icosaCore.rotation.y = elapsed * 0.22 + smoothScroll * 3.5;
      icosaCore.rotation.x = elapsed * 0.15;
      icosaWire.rotation.y = -elapsed * 0.18 - smoothScroll * 3.5;
      satelliteCubes.forEach(function (item, idx) {
        const a = item.angle + elapsed * 0.28 + smoothScroll * 2.5;
        item.mesh.position.x = Math.cos(a) * 2.75;
        item.mesh.position.y = Math.sin(a) * 2.75;
        item.mesh.rotation.x = elapsed * 0.5 + idx;
        item.mesh.rotation.y = elapsed * 0.4;
      });

      apertureRings.forEach(function (ar, idx) {
        ar.rotation.z = elapsed * 0.2 * (idx % 2 === 0 ? 1 : -1) + smoothScroll * 3.0;
        ar.rotation.x = Math.sin(elapsed * 0.6 + idx * 0.4) * 0.18;
      });
      visionBoxEdges.rotation.y = elapsed * 0.22 + smoothScroll * 2.5;
      visionBoxEdges.rotation.x = Math.sin(elapsed * 0.4) * 0.2;
      scanPlane.position.z = Math.sin(elapsed * 1.8) * 1.05;
      scanPlane.rotation.y = visionBoxEdges.rotation.y;
      scanPlane.rotation.x = visionBoxEdges.rotation.x;

      netKnot.rotation.y = elapsed * 0.25 + smoothScroll * 3.2;
      netKnot.rotation.x = elapsed * 0.18;
      netKnotWire.rotation.y = netKnot.rotation.y;
      netKnotWire.rotation.x = netKnot.rotation.x;
      netOuterRing.rotation.x = Math.PI * 0.35 + Math.sin(elapsed * 0.5) * 0.25;
      netOuterRing.rotation.y = elapsed * 0.2;

      station5Group.rotation.y = elapsed * 0.18 + smoothScroll * 2.0;

      renderer.render(scene, camera);
    }

    requestAnimationFrame(animateGameWorld);
  }

  // --------------------------------------------------------------------------
  // 7. GSAP BIDIRECTIONAL SCROLL REVEALS
  // --------------------------------------------------------------------------
  function initGsapChoreography() {
    if (typeof gsap === "undefined") return;
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from(".hero-reveal-item", {
      y: 22,
      opacity: 0,
      duration: 1.1,
      stagger: 0.1,
      ease: "power3.out"
    });

    const revealBlocks = document.querySelectorAll(".gsap-reveal");
    revealBlocks.forEach(function (block) {
      gsap.fromTo(
        block,
        { y: 26, opacity: 0 },
        {
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out"
        }
      );
    });
  }

  // --------------------------------------------------------------------------
  // 8. TRILINGUAL & PIPELINE STAGE RENDERING
  // --------------------------------------------------------------------------
  function renderPipelineStage() {
    const stageList = PIPELINE_DATA[currentLang] || PIPELINE_DATA.id;
    const item = stageList[currentPipelineIndex] || stageList[0];
    const titleEl = document.getElementById("pipeline-stage-title");
    const descEl = document.getElementById("pipeline-stage-desc");
    const eqEl = document.getElementById("pipeline-stage-formula");
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.desc;
    if (eqEl) eqEl.textContent = item.eq;
  }

  function applyLanguage(lang) {
    if (!TRILINGUAL_MATRIX[lang]) return;
    currentLang = lang;
    const htmlLang = lang === "zh" ? "zh-CN" : (lang === "id" ? "id" : "en");
    document.documentElement.setAttribute("lang", htmlLang);

    const dict = TRILINGUAL_MATRIX[lang];
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (key === "about_p1" || key === "about_p3") {
          node.innerHTML = dict[key];
        } else {
          node.textContent = dict[key];
        }
      }
    });

    const langBtns = document.querySelectorAll(".lang-option-btn");
    langBtns.forEach(function (btn) {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    renderPipelineStage();
    if (activeModalKey) {
      populateModalContent(activeModalKey);
    }
  }

  // --------------------------------------------------------------------------
  // 9. MODAL VIEWER (WITH ISOLATED MOUSE-WHEEL SCROLLING) & PRINT ENGINE
  // --------------------------------------------------------------------------
  function triggerDocumentPrint(targetType) {
    const mode = targetType === "svmhog" ? "svmhog" : "cv";
    document.body.setAttribute("data-print-target", mode);
    const toastMsg = mode === "svmhog"
      ? (currentLang === "id" ? "Menyiapkan cetak PDF Spesifikasi SVM+HOG..." : "Preparing SVM+HOG Specification PDF...")
      : (currentLang === "id" ? "Menyiapkan cetak PDF CV..." : "Preparing CV PDF...");
    notifyToast(toastMsg);
    setTimeout(function () {
      window.print();
    }, 120);
  }

  function populateModalContent(key) {
    const langCatalog = MODAL_DOSSIERS[currentLang] || MODAL_DOSSIERS.id;
    const item = langCatalog[key];
    if (!item) return;

    const kickerEl = document.getElementById("modal-tag");
    const titleEl = document.getElementById("modal-title");
    const subEl = document.getElementById("modal-subtitle");
    const imgEl = document.getElementById("modal-preview-img");
    const cvPaperPreviewEl = document.getElementById("modal-cv-paper-preview");
    const bulletsEl = document.getElementById("modal-bullets");
    const richSectionEl = document.getElementById("modal-rich-section");
    const tableTitleEl = document.getElementById("modal-table-title");
    const tableHeadEl = document.getElementById("modal-table-head");
    const tableBodyEl = document.getElementById("modal-table-body");
    const footerEl = document.getElementById("modal-metrics");
    const printBtnEl = document.getElementById("modal-print-btn");

    if (kickerEl) kickerEl.textContent = item.kicker;
    if (titleEl) titleEl.textContent = item.title;
    if (subEl) subEl.textContent = item.subtitle;
    if (footerEl) footerEl.textContent = item.footer;
    if (printBtnEl && item.printBtnLabel) {
      printBtnEl.textContent = item.printBtnLabel + " ↗";
      printBtnEl.setAttribute("data-print-mode", item.printTarget || "cv");
    }

    if (key === "cv") {
      if (cvPaperPreviewEl) cvPaperPreviewEl.classList.add("active");
      if (imgEl) imgEl.style.display = "none";
      if (bulletsEl) bulletsEl.style.display = "none";
      if (richSectionEl) richSectionEl.style.display = "none";
      return;
    }

    if (cvPaperPreviewEl) cvPaperPreviewEl.classList.remove("active");
    if (imgEl) imgEl.style.display = "block";
    if (bulletsEl) bulletsEl.style.display = "flex";
    if (richSectionEl) richSectionEl.style.display = "block";

    if (imgEl && item.imgId) {
      const srcNode = document.getElementById(item.imgId);
      if (srcNode) {
        imgEl.setAttribute("src", srcNode.getAttribute("src"));
        imgEl.setAttribute("alt", item.title);
      }
    }

    if (bulletsEl) {
      bulletsEl.innerHTML = "";
      item.bullets.forEach(function (b) {
        const li = document.createElement("li");
        li.textContent = b;
        bulletsEl.appendChild(li);
      });
    }

    if (tableTitleEl && item.tableTitle) {
      tableTitleEl.textContent = item.tableTitle;
    }

    if (tableHeadEl && item.tableHeaders) {
      tableHeadEl.innerHTML = "";
      const tr = document.createElement("tr");
      item.tableHeaders.forEach(function (thText) {
        const th = document.createElement("th");
        th.textContent = thText;
        tr.appendChild(th);
      });
      tableHeadEl.appendChild(tr);
    }

    if (tableBodyEl && item.tableRows) {
      tableBodyEl.innerHTML = "";
      item.tableRows.forEach(function (rowArr) {
        const tr = document.createElement("tr");
        rowArr.forEach(function (cellText, idx) {
          const td = document.createElement("td");
          if (idx === 0) {
            const strong = document.createElement("strong");
            strong.textContent = cellText;
            td.appendChild(strong);
          } else {
            td.textContent = cellText;
          }
          tr.appendChild(td);
        });
        tableBodyEl.appendChild(tr);
      });
    }
  }

  function initUIEvents() {
    const progressBar = document.getElementById("scroll-progress-bar");
    const siteHeader = document.getElementById("pill-navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const wayfinderNodes = document.querySelectorAll(".wayfinder-node");

    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)) : 0;
      if (progressBar) progressBar.style.width = pct + "%";

      if (siteHeader) {
        if (scrollTop > 32) {
          siteHeader.classList.add("scrolled");
        } else {
          siteHeader.classList.remove("scrolled");
        }
      }

      let currentId = "hero";
      sections.forEach(function (sec) {
        if (scrollTop >= sec.offsetTop - 220) {
          currentId = sec.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + currentId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      wayfinderNodes.forEach(function (node) {
        if (node.getAttribute("data-scroll-to") === currentId) {
          node.classList.add("active");
        } else {
          node.classList.remove("active");
        }
      });
    }, { passive: true });

    wayfinderNodes.forEach(function (node) {
      node.addEventListener("click", function () {
        const targetId = node.getAttribute("data-scroll-to");
        const targetSec = targetId ? document.getElementById(targetId) : null;
        if (targetSec) {
          targetSec.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const langBtns = document.querySelectorAll(".lang-option-btn");
    langBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetLang = btn.getAttribute("data-lang");
        if (!targetLang || targetLang === currentLang) return;
        applyLanguage(targetLang);
        const msgMap = {
          id: "Bahasa Indonesia aktif",
          en: "English language active",
          zh: "已切换至中文界面"
        };
        notifyToast(msgMap[targetLang] || "Language updated");
      });
    });

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);
        themeBtn.textContent = currentTheme === "dark" ? "☀" : "☾";
        if (threeSceneController) {
          threeSceneController.setTheme(currentTheme);
        }
        notifyToast(
          currentTheme === "light"
            ? (currentLang === "id" ? "Tema Terang aktif" : "Light theme active")
            : (currentLang === "id" ? "Tema Gelap aktif" : "Dark theme active")
        );
      });
    }

    const hudToggleBtn = document.getElementById("btn-toggle-hud");
    const hudOverlay = document.getElementById("svmhog-hud-overlay");
    if (hudToggleBtn && hudOverlay) {
      hudToggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        const isVisible = hudOverlay.classList.toggle("visible");
        hudToggleBtn.classList.toggle("active", isVisible);
        notifyToast(
          isVisible
            ? (currentLang === "id" ? "Overlay telemetri ROI & Centroid ditampilkan" : "ROI & Centroid overlay active")
            : (currentLang === "id" ? "Overlay telemetri disembunyikan" : "Telemetry overlay hidden")
        );
      });
    }

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener("click", function () {
        mobileDrawer.classList.toggle("open");
      });
      const mLinks = mobileDrawer.querySelectorAll(".mobile-nav-link");
      mLinks.forEach(function (l) {
        l.addEventListener("click", function () {
          mobileDrawer.classList.remove("open");
        });
      });
    }

    const pipeBtns = document.querySelectorAll(".pipeline-tab-btn");
    pipeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const idx = parseInt(btn.getAttribute("data-step-index") || "0", 10);
        currentPipelineIndex = idx;
        pipeBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        renderPipelineStage();
      });
    });

    const capFilterBtns = document.querySelectorAll(".cap-filter-btn");
    const capRows = document.querySelectorAll(".proficiency-row");
    capFilterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const domain = btn.getAttribute("data-domain") || "all";
        capFilterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        capRows.forEach(function (row) {
          const rowDomain = row.getAttribute("data-domain-row");
          if (domain === "all" || rowDomain === domain) {
            row.style.display = "table-row";
          } else {
            row.style.display = "none";
          }
        });
      });
    });

    // Modal Triggers & Mouse-Wheel Scroll Isolation
    const modalBackdrop = document.getElementById("cyber-modal");
    const modalPanel = modalBackdrop ? modalBackdrop.querySelector(".dossier-modal-panel") : null;
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalPrintBtn = document.getElementById("modal-print-btn");

    // Ensure mouse wheel & touch scroll inside modal never bubbles to Lenis or window
    if (modalBackdrop) {
      modalBackdrop.addEventListener("wheel", function (e) {
        e.stopPropagation();
      }, { passive: true });
      modalBackdrop.addEventListener("touchmove", function (e) {
        e.stopPropagation();
      }, { passive: true });
    }

    function openDossierModal(key) {
      activeModalKey = key;
      document.body.setAttribute("data-print-target", key === "svmhog" ? "svmhog" : "cv");
      populateModalContent(key);
      if (modalBackdrop) {
        modalBackdrop.classList.add("open");
        modalBackdrop.setAttribute("aria-hidden", "false");
      }
      if (modalPanel) {
        modalPanel.scrollTop = 0;
      }
      document.body.classList.add("modal-open");
      if (lenisInstance && typeof lenisInstance.stop === "function") {
        lenisInstance.stop();
      }
    }

    function closeDossierModal() {
      activeModalKey = null;
      if (modalBackdrop) {
        modalBackdrop.classList.remove("open");
        modalBackdrop.setAttribute("aria-hidden", "true");
      }
      document.body.classList.remove("modal-open");
      if (lenisInstance && typeof lenisInstance.start === "function") {
        lenisInstance.start();
      }
    }

    const modalTriggers = document.querySelectorAll("[data-modal-target]");
    modalTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const key = trigger.getAttribute("data-modal-target");
        if (key) openDossierModal(key);
      });
    });

    const directPrintTriggers = document.querySelectorAll("[data-direct-print]");
    directPrintTriggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-direct-print") || "cv";
        triggerDocumentPrint(target);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeDossierModal);
    }
    if (modalPrintBtn) {
      modalPrintBtn.addEventListener("click", function () {
        const mode = modalPrintBtn.getAttribute("data-print-mode") || (activeModalKey === "svmhog" ? "svmhog" : "cv");
        triggerDocumentPrint(mode);
      });
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", function (e) {
        if (e.target === modalBackdrop) closeDossierModal();
      });
    }
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDossierModal();
    });

    const copyEmailBtn = document.getElementById("btn-copy-email");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", function () {
        const email = "intansaravina122@gmail.com";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(function () {
            notifyToast(
              currentLang === "zh"
                ? "已复制邮箱：intansaravina122@gmail.com"
                : (currentLang === "id" ? "Email disalin: intansaravina122@gmail.com" : "Copied: intansaravina122@gmail.com")
            );
          }).catch(function () {
            fallbackCopyText(email);
          });
        } else {
          fallbackCopyText(email);
        }
      });
    }

    function fallbackCopyText(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        notifyToast("intansaravina122@gmail.com");
      } catch (e) {
        notifyToast("intansaravina122@gmail.com");
      }
      document.body.removeChild(ta);
    }
  }

  function boot() {
    initSmoothScroll();
    initGameWorldThreeJS();
    initGsapChoreography();
    initUIEvents();
    applyLanguage("id");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
