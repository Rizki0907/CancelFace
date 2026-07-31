import os

OUTPUT_FILE = r"d:\Data Science\Lomba\GEMASTIK\CancelFace\dashboard\index.html"

# Extract the base CSS variables and styles from SIPEDA, but modify colors for Cyber-Security
html_content = """<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>CancelFace - Secure Face Biometrics</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
<script src="data.js"></script>
<style>
:root {
  /* CancelFace design system — Light Mode */
  --bg:#f8fafc;--bg1:#ffffff;--bg2:#ffffff;--bg3:#f1f5f9;--bg4:#e2e8f0;
  --bord:#e2e8f0;--bord2:#cbd5e1;
  --txt:#0f172a;--txt2:#334155;--txt3:#64748b;
  --card:#ffffff;

  --c-blue:#0284c7; /* Cyan/Blue */
  --c-red:#e11d48;  /* Crimson Red */
  --c-green:#16a34a; /* Green */
  --c-amber:#d97706; /* Orange */
  --c-teal:#0d9488;
  --c-purple:#7c3aed;
  
  --shadow-xs:0 1px 2px rgba(15,23,42,0.05);
  --shadow-card:0 1px 1px rgba(20,24,52,0.03),0 14px 28px -14px rgba(31,41,82,0.14),0 30px 54px -28px rgba(31,41,82,0.10);
  --shadow-card-hover:0 1px 1px rgba(20,24,52,0.04),0 22px 40px -16px rgba(2,132,199,0.20),0 36px 64px -28px rgba(31,41,82,0.16);
  --radius-card:20px;
}
[data-theme="dark"] {
  /* CancelFace design system — Dark Mode (Cyber Security) */
  --bg:#020617;--bg1:#0f172a;--bg2:#1e293b;--bg3:#334155;--bg4:#475569;
  --bord:#1e293b;--bord2:#334155;
  --txt:#f8fafc;--txt2:#94a3b8;--txt3:#64748b;
  --card:rgba(15,23,42,0.95);

  --c-blue:#38bdf8; /* Neon Cyan */
  --c-red:#fb7185;  /* Neon Crimson */
  --c-green:#4ade80; /* Neon Green */
  --c-amber:#fbbf24;
  --c-teal:#2dd4bf;
  --c-purple:#a78bfa;

  --shadow-xs:0 1px 2px rgba(0,0,0,0.5);
  --shadow-card:0 1px 0 rgba(255,255,255,0.05) inset,0 18px 38px -16px rgba(0,0,0,0.62);
  --shadow-card-hover:0 1px 0 rgba(255,255,255,0.07) inset,0 26px 50px -16px rgba(56,189,248,0.32);
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Figtree',sans-serif;background:var(--bg);color:var(--txt);min-height:100vh;overflow-x:hidden;transition:background .3s,color .3s;font-size:14px;}
*,*::before,*::after{transition:background-color .22s ease,border-color .22s ease,color .2s ease,box-shadow .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.34,1.4,.64,1);}

::selection{background:var(--c-blue);color:#fff;}
::-webkit-scrollbar{width:8px;height:8px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--bord2);border-radius:10px;}
::-webkit-scrollbar-thumb:hover{background:var(--c-blue);}

/* HEADER */
.header{position:fixed;top:0;left:0;right:0;height:56px;z-index:100;display:flex;align-items:center;gap:16px;padding:0 24px;background:rgba(255,255,255,0.86);border-bottom:1px solid var(--bord);backdrop-filter:blur(20px) saturate(160%);}
[data-theme="dark"] .header{background:rgba(2,6,23,0.86);}
.header-logo{display:flex;align-items:center;gap:10px;text-decoration:none;cursor:pointer;}
.logo-icon{font-size:24px;filter:drop-shadow(0 4px 8px rgba(56,189,248,0.25));}
.logo-text{font-family:'Sora',sans-serif;font-size:18px;font-weight:900;letter-spacing:-0.5px;}
.logo-text .cn{color:var(--c-blue);}.logo-text .fa{color:var(--c-red);}.logo-text .ce{color:var(--txt);}
.header-divider{width:1px;height:26px;background:var(--bord);flex-shrink:0;}
.header-sub{font-size:11px;color:var(--txt3);flex-shrink:0;font-weight:600;}
.header-spacer{flex:1;}
.live-pill{display:flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;color:#fff;padding:6px 13px;border-radius:20px;background:linear-gradient(135deg,var(--c-blue),#0284c7);box-shadow:0 8px 18px -6px rgba(56,189,248,0.5);}
.live-dot{width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px rgba(255,255,255,0.35);animation:live-blink 1.6s ease-in-out infinite;}
@keyframes live-blink{0%,100%{opacity:1;}50%{opacity:0.35;}}
.hdr-btn{width:36px;height:36px;border-radius:12px;border:1px solid var(--bord);background:var(--bg2);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--txt2);font-size:14px;box-shadow:var(--shadow-xs);}
.hdr-btn:hover{background:var(--c-blue);color:#020617;border-color:var(--c-blue);transform:translateY(-2px);}

/* TAB BAR */
.tabbar{position:fixed;top:56px;left:0;right:0;height:50px;z-index:99;background:rgba(255,255,255,0.9);border-bottom:1px solid var(--bord);backdrop-filter:blur(20px) saturate(160%);display:flex;align-items:center;padding:7px 18px;gap:3px;overflow-x:auto;}
[data-theme="dark"] .tabbar{background:rgba(15,23,42,0.88);}
.tab-indicator{position:absolute;height:36px;border-radius:12px;background:linear-gradient(135deg,var(--c-blue),var(--c-purple));box-shadow:0 10px 22px -8px rgba(56,189,248,0.55);transition:left .36s,width .36s;pointer-events:none;z-index:0;}
.tab{display:flex;align-items:center;gap:7px;padding:0 14px;height:36px;font-size:12.5px;font-weight:700;color:var(--txt3);cursor:pointer;position:relative;z-index:1;border-radius:12px;}
.tab:hover{color:var(--c-blue);}.tab.active{color:#020617;}
[data-theme="dark"] .tab.active{color:#fff;}

/* TICKER */
.ticker{position:fixed;top:106px;left:0;right:0;height:36px;z-index:98;display:flex;align-items:stretch;background:var(--bg2);border-bottom:1px solid var(--bord);overflow:hidden;}
.ticker-label{display:flex;align-items:center;gap:6px;padding:0 16px;font-size:10.5px;font-weight:800;color:#020617;letter-spacing:1px;text-transform:uppercase;background:linear-gradient(135deg,var(--c-blue),var(--c-teal));}
.ticker-track{flex:1;overflow:hidden;display:flex;align-items:center;}
.ticker-inner{display:inline-flex;white-space:nowrap;gap:0;animation:ticker-run 40s linear infinite;}
.ticker-inner:hover{animation-play-state:paused;}
@keyframes ticker-run{from{transform:translateX(0);}to{transform:translateX(-50%);}}
.tick-item{display:inline-flex;align-items:center;gap:7px;padding:0 22px;font-size:12px;color:var(--txt2);font-weight:500;border-right:1px solid var(--bord);}

/* MAIN */
.main{margin-top:142px;min-height:calc(100vh - 142px);padding:26px;max-width:1400px;margin-left:auto;margin-right:auto;}
.page{display:none;}
.page.active{display:block;animation:pg-in .45s cubic-bezier(.16,1,.3,1);}
@keyframes pg-in{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}

/* GRIDS */
.g1{display:grid;gap:18px;}.g2{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.g-7-3{display:grid;grid-template-columns:7fr 3fr;gap:18px;}
@media(max-width:1024px){.g4{grid-template-columns:repeat(2,1fr);}.g-7-3{grid-template-columns:1fr;}}
@media(max-width:768px){.g2,.g3{grid-template-columns:1fr;}}

/* HERO */
.hero{border:1px solid var(--bord);border-radius:26px;padding:36px 36px 30px;position:relative;overflow:hidden;margin-bottom:22px;background:linear-gradient(160deg,var(--card) 0%,var(--bg3) 130%);box-shadow:var(--shadow-card);}
.hero-glow1{position:absolute;top:-90px;right:-90px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(56,189,248,0.15),transparent 70%);pointer-events:none;animation:float-glow 6s ease-in-out infinite;}
@keyframes float-glow{0%,100%{transform:translate(0,0);}50%{transform:translate(12px,-16px);}}

/* CARDS */
.card{--accent:var(--c-blue);background:var(--card);border:1px solid var(--bord);border-radius:var(--radius-card);padding:20px;position:relative;overflow:hidden;box-shadow:var(--shadow-card);isolation:isolate;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),transparent 170%);z-index:0;}
.card-icon{width:46px;height:46px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;color:#fff;background:var(--accent);font-size:20px;box-shadow:0 14px 24px -10px var(--accent);}
.card-label{font-size:11px;font-weight:700;color:var(--txt3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;}
.card-value{font-family:'Sora',sans-serif;font-size:30px;font-weight:900;letter-spacing:-1.5px;margin-bottom:5px;}
.card-sub{font-size:12px;color:var(--txt3);line-height:1.5;}
.card-title{font-family:'Sora',sans-serif;font-size:15px;font-weight:800;margin-bottom:16px;}
.card:hover{border-color:var(--bord2);transform:translateY(-6px);box-shadow:var(--shadow-card-hover);}

/* TABLES */
.tbl-wrap{background:var(--card);border:1px solid var(--bord);border-radius:var(--radius-card);overflow:hidden;box-shadow:var(--shadow-card);}
table{width:100%;border-collapse:collapse;}
thead th{background:var(--bg3);color:var(--txt3);font-size:11px;font-weight:800;text-transform:uppercase;padding:12px 16px;text-align:left;border-bottom:1px solid var(--bord);}
tbody tr td{font-size:13px;padding:11px 16px;border-bottom:1px solid var(--bord);color:var(--txt2);}
tbody tr:nth-child(even){background:var(--bg3);}
tbody tr:hover{background:rgba(56,189,248,0.07);}

/* INFO BOX & BUTTONS */
.info-box{display:flex;gap:13px;padding:15px 18px;background:linear-gradient(135deg,rgba(56,189,248,0.06),rgba(124,58,237,0.04));border:1px solid rgba(56,189,248,0.16);border-radius:16px;margin-bottom:16px;font-size:12.5px;color:var(--txt2);line-height:1.7;}
.info-icon{flex-shrink:0;width:30px;height:30px;border-radius:9px;background:var(--c-blue);color:#020617;font-size:16px;display:flex;align-items:center;justify-content:center;}
.btn-pri{display:inline-flex;align-items:center;gap:7px;padding:11px 19px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--c-blue),var(--c-teal));color:#020617;font-size:12.5px;font-weight:800;cursor:pointer;box-shadow:0 10px 24px -8px rgba(56,189,248,0.5);}
.btn-pri:hover{filter:brightness(1.1);transform:translateY(-2px);}
.mono{font-family:'JetBrains Mono',monospace;}
</style>
</head>
<body>

<header class="header">
  <a href="#" class="header-logo">
    <div class="logo-icon">🛡️</div>
    <div class="logo-text"><span class="cn">Cancel</span><span class="fa">Face</span></div>
  </a>
  <div class="header-divider"></div>
  <div class="header-sub">Sistem Biometrik Wajah Aman & Non-Invertible</div>
  <div class="header-spacer"></div>
  <div class="live-pill">
    <div class="live-dot"></div>
    STATUS: SECURE
  </div>
  <button class="hdr-btn" id="themeToggle" title="Ganti Tema">☀️</button>
</header>

<div class="tabbar">
  <div class="tab-indicator" id="tabIndicator"></div>
  <div class="tab active" data-target="pg-overview" onclick="moveTab(this)">📊 Ringkasan Eksekutif</div>
  <div class="tab" data-target="pg-eval" onclick="moveTab(this)">📈 Analisis Keamanan</div>
  <div class="tab" data-target="pg-sim" onclick="moveTab(this)">🔒 Simulasi Sistem</div>
</div>

<div class="ticker">
  <div class="ticker-label">LATEST METRICS</div>
  <div class="ticker-track">
    <div class="ticker-inner">
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-blue)"></div>Rank-1 Accuracy: 34.5% (Terbaik)</div>
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-green)"></div>ISO/IEC 24745 Compliant</div>
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-red)"></div>Re-identification Risk: 0.00%</div>
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-teal)"></div>Attacker Age Accuracy: 47.0%</div>
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-purple)"></div>Cosine Sim Reconstruction: 0.11</div>
      <!-- Repeat for seamless loop -->
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-blue)"></div>Rank-1 Accuracy: 34.5% (Terbaik)</div>
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-green)"></div>ISO/IEC 24745 Compliant</div>
      <div class="tick-item"><div class="tick-dot" style="color:var(--c-red)"></div>Re-identification Risk: 0.00%</div>
    </div>
  </div>
</div>

<main class="main">
  <!-- OVERVIEW PAGE -->
  <div id="pg-overview" class="page active">
    <div class="hero">
      <div class="hero-glow1"></div>
      <div class="hero-glow2"></div>
      <div style="font-family:'Sora',sans-serif;font-size:24px;font-weight:900;margin-bottom:8px;position:relative;z-index:1;">Sistem Proteksi Identitas Berbasis Cancelable Biometrics</div>
      <div style="font-size:14px;color:var(--txt2);max-width:700px;line-height:1.6;position:relative;z-index:1;">
        Inovasi pelindungan data wajah pada sistem pengawasan CCTV. Memastikan pelaku kriminal dapat dilacak secara presisi tanpa menyimpan wajah asli masyarakat, 100% tahan terhadap kebocoran server.
      </div>
    </div>

    <div class="g4" style="margin-bottom:22px;">
      <div class="card" style="--accent:var(--c-blue);">
        <div class="card-icon">🎯</div>
        <div class="card-label">Rank-1 Accuracy</div>
        <div class="card-value" id="val-rank1">34.5%</div>
        <div class="card-sub">Lebih tinggi dari *baseline* BioHashing, handal untuk CCTV low-res.</div>
      </div>
      <div class="card" style="--accent:var(--c-amber);">
        <div class="card-icon">🎭</div>
        <div class="card-label">Akurasi Usia Penyerang</div>
        <div class="card-value" id="val-age">47.0%</div>
        <div class="card-sub">Sangat rendah = Privasi Aman. GRL berhasil menghapus atribut usia.</div>
      </div>
      <div class="card" style="--accent:var(--c-green);">
        <div class="card-icon">🛡️</div>
        <div class="card-label">Re-identifikasi Lintas CCTV</div>
        <div class="card-value" id="val-reid">0.00%</div>
        <div class="card-sub">Mustahil melacak profil warga antar database jika *seed* berbeda.</div>
      </div>
      <div class="card" style="--accent:var(--c-purple);">
        <div class="card-icon">🧩</div>
        <div class="card-label">Rekonstruksi (Cos-Sim)</div>
        <div class="card-value">0.111</div>
        <div class="card-sub">Hampir tidak ada korelasi antara template curian dengan wajah asli.</div>
      </div>
    </div>

    <div class="g-7-3">
      <div class="card" style="--accent:var(--c-teal);">
        <div class="card-title">Perbandingan Metode Biometrik (Heatmap)</div>
        <div class="card-sub" style="margin-bottom:16px;">Evaluasi *trade-off* antara akurasi pelacakan (Utility) dan pelindungan data privasi (Privacy).</div>
        <div id="plt-heatmap" style="height:350px;"></div>
      </div>
      <div class="card" style="--accent:var(--c-red);">
        <div class="card-title">Kepatuhan Standar ISO/IEC 24745</div>
        <div class="tbl-wrap">
          <table id="tbl-iso">
            <thead>
              <tr><th>Kriteria Keamanan</th><th>Metode Usulan</th></tr>
            </thead>
            <tbody>
              <tr><td>Non-invertibility</td><td style="color:var(--c-green);font-weight:bold;">✔ LULUS</td></tr>
              <tr><td>Revocability</td><td style="color:var(--c-green);font-weight:bold;">✔ LULUS</td></tr>
              <tr><td>Unlinkability</td><td style="color:var(--c-green);font-weight:bold;">✔ LULUS</td></tr>
            </tbody>
          </table>
        </div>
        <div class="info-box" style="margin-top:20px;">
          <div class="info-icon">💡</div>
          <div>Metode usulan (Proposed Transform Net + GRL) memenuhi seluruh syarat ISO untuk Cancelable Biometrics, mengalahkan RP dan BioHashing.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- EVALUATION PAGE -->
  <div id="pg-eval" class="page">
    <div class="info-box" style="margin-bottom:20px;">
        <div class="info-icon">🔬</div>
        <div>Halaman ini menyajikan pengujian ketat terhadap kehandalan sistem CancelFace di bawah berbagai skenario kualitas gambar dan ablasi teknis.</div>
    </div>

    <div class="g2" style="margin-bottom:22px;">
      <div class="card" style="--accent:var(--c-blue);">
        <div class="card-title">Ablasi Dimensi Template</div>
        <div class="card-sub" style="margin-bottom:16px;">Pengaruh ukuran output (D) terhadap akurasi pencarian Rank-1.</div>
        <div id="plt-ablasi" style="height:320px;"></div>
      </div>
      <div class="card" style="--accent:var(--c-amber);">
        <div class="card-title">Ketahanan Kualitas Resolusi</div>
        <div class="card-sub" style="margin-bottom:16px;">Evaluasi sistem berdasarkan ukuran Bounding Box area wajah.</div>
        <div id="plt-kualitas" style="height:320px;"></div>
      </div>
    </div>
    
    <div class="card" style="--accent:var(--c-red);">
        <div class="card-title">Hasil Simulasi Serangan Siber (Adversarial Attacks)</div>
        <div class="g2">
            <div class="tbl-wrap">
              <table id="tbl-recon">
                <thead>
                  <tr><th>Metode Enkripsi</th><th>Cos-Sim Rekonstruksi (↓ Baik)</th><th>MSE (↑ Baik)</th></tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <div class="tbl-wrap">
              <table id="tbl-attr">
                <thead>
                  <tr><th>Metode Enkripsi</th><th>Akurasi Gender (↓ Baik)</th><th>Akurasi Usia (↓ Baik)</th></tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
        </div>
    </div>
  </div>

  <!-- SIMULATION PAGE -->
  <div id="pg-sim" class="page">
    <div class="hero">
      <div style="font-family:'Sora',sans-serif;font-size:24px;font-weight:900;margin-bottom:8px;">Simulasi Ekstraksi Cancelable</div>
      <div style="font-size:14px;color:var(--txt2);max-width:700px;line-height:1.6;">
        Berikut adalah simulasi bagaimana sistem CCTV memproses wajah. Wajah asli (kiri) tidak pernah disimpan di server. Sistem langsung mengubahnya menggunakan matriks kunci rahasia menjadi template terenkripsi (kanan).
      </div>
    </div>

    <div class="card" style="--accent:var(--c-teal); text-align:center; padding:40px;">
      <div style="display:flex; justify-content:center; align-items:center; gap:30px; flex-wrap:wrap;">
        
        <div style="background:var(--bg2); border:1px solid var(--bord); padding:20px; border-radius:20px; width:220px;">
            <img src="https://ui-avatars.com/api/?name=Suspect&background=0284c7&color=fff&size=100" style="border-radius:50%; margin-bottom:15px; border:4px solid var(--bord);">
            <div style="font-weight:800; font-family:'Sora',sans-serif; color:var(--txt);">Wajah Pelaku</div>
            <div style="font-size:12px; color:var(--c-red); font-weight:700; margin-top:5px;">SANGAT RAHASIA</div>
        </div>

        <div style="font-size:30px; color:var(--c-blue);">➔</div>

        <div style="background:var(--bg2); border:1px dashed var(--c-blue); padding:30px 20px; border-radius:20px; width:250px;">
            <div style="font-size:40px; margin-bottom:10px;">🛡️</div>
            <div style="font-weight:800; font-family:'Sora',sans-serif; color:var(--c-blue);">Proposed Transform Net</div>
            <button class="btn-pri" id="btn-generate" style="margin-top:15px; width:100%; justify-content:center;">ENKRIPSI SEKARANG</button>
        </div>

        <div style="font-size:30px; color:var(--c-green);">➔</div>

        <div style="background:var(--bg2); border:1px solid var(--bord); padding:20px; border-radius:20px; width:220px;">
            <div id="sim-output" class="mono" style="background:var(--bg); color:var(--c-teal); padding:10px; border-radius:10px; height:100px; font-size:11px; text-align:left; overflow:hidden; word-break:break-all;">
                [Menunggu Input]
            </div>
            <div style="font-weight:800; font-family:'Sora',sans-serif; color:var(--txt); margin-top:15px;">Template Aman</div>
            <div style="font-size:12px; color:var(--c-green); font-weight:700; margin-top:5px;">SIAP DISIMPAN</div>
        </div>

      </div>
    </div>
  </div>
</main>

<script>
// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  setTimeout(renderCharts, 100);
});

// Tab Indicator Logic
function moveTab(clickedTab) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  clickedTab.classList.add('active');
  
  const ind = document.getElementById('tabIndicator');
  ind.style.left = clickedTab.offsetLeft + 'px';
  ind.style.width = clickedTab.offsetWidth + 'px';
  
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(clickedTab.dataset.target).classList.add('active');
  window.dispatchEvent(new Event('resize'));
}

// Initial Tab positioning
setTimeout(() => {
    const activeTab = document.querySelector('.tab.active');
    if(activeTab) moveTab(activeTab);
}, 100);

// Populate Tables
function populateData() {
    if(typeof cancelfaceData === 'undefined') return;
    
    // Recon Table
    const tblRecon = document.querySelector('#tbl-recon tbody');
    cancelfaceData.serangan_rekonstruksi.forEach(d => {
        tblRecon.innerHTML += `<tr>
            <td style="font-weight:600">${d.Metode}</td>
            <td>${d['Rata Rata Kemiripan Kosinus'].toFixed(4)}</td>
            <td>${d['Rata Rata MSE'].toFixed(4)}</td>
        </tr>`;
    });

    // Attr Table
    const tblAttr = document.querySelector('#tbl-attr tbody');
    cancelfaceData.serangan_atribut.forEach(d => {
        tblAttr.innerHTML += `<tr>
            <td style="font-weight:600">${d.Metode}</td>
            <td>${(d['Akurasi Tebakan Jenis Kelamin'] * 100).toFixed(2)}%</td>
            <td>${(d['Akurasi Tebakan Kelompok Usia'] * 100).toFixed(2)}%</td>
        </tr>`;
    });
}

// Render Charts
function renderCharts() {
    if(typeof cancelfaceData === 'undefined') return;
    
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const cBg = 'transparent';
    const cTxt = isDark ? '#f8fafc' : '#0f172a';
    const cGrid = isDark ? '#334155' : '#e2e8f0';
    
    const layoutBase = {
        paper_bgcolor: cBg, plot_bgcolor: cBg,
        font: { color: cTxt, family: 'Figtree' },
        margin: { t: 20, r: 20, b: 40, l: 40 }
    };

    // Heatmap
    const pb = cancelfaceData.perbandingan_metode;
    const zData = pb.map(d => [d['Rank 1 Accuracy'], d['Akurasi Tebakan Kelompok Usia'], d['Tingkat Keberhasilan Reidentifikasi']]);
    Plotly.newPlot('plt-heatmap', [{
        z: zData,
        x: ['Rank-1 Accuracy', 'Akurasi Usia', 'Re-identifikasi'],
        y: pb.map(d => d.Metode),
        type: 'heatmap', colorscale: 'RdBu', reversescale: true
    }], { ...layoutBase, margin: {l: 120, b:50} }, {displayModeBar: false});

    // Ablasi
    const ab = cancelfaceData.ablasi_dimensi;
    Plotly.newPlot('plt-ablasi', [{
        x: ab.map(d => d['Dimensi (D)']),
        y: ab.map(d => d['Rank 1 Accuracy']),
        type: 'scatter', mode: 'lines+markers',
        line: { color: '#0284c7', width: 3 }, marker: { size: 8 }
    }], {
        ...layoutBase,
        xaxis: { title: 'Dimensi Template', gridcolor: cGrid },
        yaxis: { title: 'Rank-1', gridcolor: cGrid }
    }, {displayModeBar: false});

    // Kualitas
    const kq = cancelfaceData.ketahanan_kualitas;
    Plotly.newPlot('plt-kualitas', [{
        x: kq.map(d => d['Subset Kualitas']),
        y: kq.map(d => d['Rank 1 Accuracy']),
        type: 'bar', marker: { color: '#0d9488' }
    }], {
        ...layoutBase,
        xaxis: { title: 'Kualitas Resolusi', gridcolor: cGrid },
        yaxis: { title: 'Rank-1', gridcolor: cGrid }
    }, {displayModeBar: false});
}

// Sim Button
document.getElementById('btn-generate').addEventListener('click', () => {
    const out = document.getElementById('sim-output');
    out.textContent = "Processing features...";
    out.style.color = "var(--c-amber)";
    setTimeout(() => {
        let hex = "";
        for(let i=0; i<8; i++) {
            hex += Math.random().toString(16).substr(2,8).toUpperCase() + " ";
        }
        out.textContent = hex;
        out.style.color = "var(--c-green)";
    }, 800);
});

window.onload = () => {
    populateData();
    renderCharts();
};
</script>
</body>
</html>"""

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Selesai generate CancelFace Dashboard!")
