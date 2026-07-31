# Rencana Riset dan Persiapan Karya Tulis Ilmiah GEMASTIK 2026
## Protokol Cancelable Face Biometrics untuk Pelacakan Presisi Pelaku pada CCTV Fasilitas Publik

Dokumen ini disusun sebagai bahan kerja tim, bukan draf final artikel ilmiah. Tujuannya supaya seluruh anggota tim punya gambaran yang sama tentang apa yang mau diteliti, kenapa itu penting, data apa yang dipakai, dan bagaimana urutan pengerjaannya dari awal sampai akhir.

---

## 1. Latar Belakang dan Permasalahan

Kamera CCTV sekarang ada di mana mana, mulai dari bandara, stasiun, pusat perbelanjaan, sampai kampus. Setiap hari kamera itu merekam wajah ribuan orang yang lewat, dan sebagian besar rekaman itu tersimpan di server dalam bentuk gambar mentah atau paling jauh diproses jadi representasi wajah digital untuk keperluan pencarian orang. Masalahnya, penyimpanan seperti ini membawa risiko besar. Kalau server itu diretas, data wajah orang banyak bisa disalahgunakan untuk melacak pergerakan seseorang, membuat profil kebiasaan hariannya, bahkan dipakai untuk kejahatan lain seperti pemerasan atau pencurian identitas.

Di Indonesia, risiko ini sudah punya payung hukum yang jelas lewat Undang Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi atau yang biasa disingkat UU PDP. Data biometrik termasuk wajah masuk kategori data pribadi yang bersifat spesifik, artinya perlindungannya harus lebih ketat dibanding data pribadi umum. UU PDP juga menekankan prinsip minimalisasi data, yaitu data pribadi seharusnya hanya disimpan sejauh yang benar benar diperlukan untuk tujuan pengumpulannya, dan pengendali data wajib memastikan ada perlindungan teknis yang memadai. Kenyataannya, banyak sistem CCTV fasilitas publik di Indonesia belum menerapkan prinsip ini karena rekaman wajah masih disimpan dalam bentuk mentah tanpa proteksi tambahan.

Di sisi lain, ada kebutuhan yang juga nyata dan penting, yaitu penggunaan CCTV untuk membantu penyelidikan kasus kriminal. Ketika ada pencurian, penculikan, atau tindak kriminal lain yang terekam kamera, aparat perlu melacak pelaku itu lewat kamera kamera lain di sekitar lokasi supaya bisa tahu ke mana pelaku bergerak. Di sinilah muncul ketegangan yang menarik untuk diteliti. Kalau sistem CCTV dibuat terlalu terbuka demi kemudahan pelacakan, privasi warga yang tidak bersalah jadi taruhannya. Tapi kalau sistem dibuat terlalu tertutup demi privasi, kemampuan melacak pelaku jadi lemah dan proses penyelidikan makin sulit.

Riset ini berangkat dari pertanyaan itu. Apakah mungkin membangun sistem yang dua duanya bisa didapat sekaligus, yaitu privasi warga tetap terlindungi secara ketat, sekaligus kemampuan melacak pelaku kriminal tetap presisi dan bisa diandalkan.

### Kenapa pendekatan yang ada sekarang belum cukup

Ada cabang riset yang disebut cancelable biometrics atau bisa diterjemahkan sebagai biometrik yang bisa dibatalkan. Idenya sederhana, wajah seseorang tidak disimpan apa adanya, tapi diubah dulu lewat semacam kunci rahasia jadi bentuk representasi baru yang disebut template. Template ini masih bisa dipakai untuk mencocokkan wajah, tapi kalau dilihat sendirian tidak bisa dibalik lagi jadi wajah asli. Kalau suatu saat template ini bocor, tinggal ganti kuncinya, template baru langsung terbentuk tanpa perlu merekam ulang wajah orangnya.

Kedengarannya ideal, tapi setelah kami telusuri riset riset terbaru dalam tujuh tahun ke belakang, ternyata ada dua celah besar yang jarang dibahas bersamaan.

Celah pertama, klaim bahwa template itu tidak bisa dibalik ternyata banyak yang terlalu percaya diri. Kelompok riset dari Idiap Research Institute di Swiss, lewat rangkaian publikasi Shahreza dan Marcel dari tahun 2022 sampai 2025, menunjukkan bahwa dengan jaringan rekonstruksi berbasis deep learning, wajah asli ternyata bisa direkonstruksi kembali dari template yang tadinya diklaim aman, termasuk template yang sudah melalui proses hashing. Ada juga publikasi tahun 2024 berjudul Breaking Template Protection yang secara khusus menunjukkan bagaimana mekanisme proteksi template bisa ditembus dengan teknik rekonstruksi modern.

Celah kedua, selain wajah aslinya bisa direkonstruksi, informasi turunan seperti jenis kelamin dan perkiraan usia juga sering masih bisa ditebak dari template yang katanya sudah dilindungi. Riset Osorio Roig dan kawan kawan menunjukkan serangan berbasis perbandingan kemiripan bisa menebak jenis kelamin dengan akurasi delapan puluh sampai sembilan puluh persen, padahal template itu memang didesain khusus untuk menyembunyikan informasi seperti itu.

Celah ketiga, hampir semua penelitian cancelable biometrics diuji pada dataset wajah resolusi tinggi seperti LFW yang diambil dari foto foto berkualitas bagus, bukan dari kondisi kamera CCTV asli yang buram, kualitas rendah, dan sering diambil dari jarak jauh. Padahal riset dari Queen Mary University of London lewat dataset QMUL SurvFace membuktikan ada jarak performa yang sangat besar antara pengenalan wajah di foto berkualitas tinggi dibanding rekaman CCTV asli.

Celah keempat, kebanyakan riset cancelable biometrics menguji skenario verifikasi satu lawan satu, artinya mencocokkan satu wajah dengan satu identitas tertentu saja. Tapi kebutuhan pelacakan pelaku kriminal itu berbeda, karena yang dibutuhkan adalah pencarian satu wajah pelaku di antara ribuan wajah orang lain yang terekam kamera, yang dalam istilah teknis disebut skenario identifikasi satu lawan banyak dengan populasi terbuka. Skenario ini jauh lebih sulit dan jarang jadi fokus utama riset cancelable biometrics.

Belum ada penelitian yang kami temukan yang menggabungkan keempat hal ini sekaligus, yaitu template yang diuji dengan serangan nyata, diuji di kondisi CCTV asli resolusi rendah, dan sekaligus dirancang untuk skenario pencarian pelaku di antara populasi besar. Di titik itulah riset ini mengambil posisi.

---

## 2. Rumusan Masalah

Berdasarkan latar belakang di atas, ada tiga pertanyaan penelitian yang ingin dijawab.

Pertama, seberapa kuat sebenarnya template cancelable biometrics yang umum dipakai sekarang, kalau diuji dengan serangan rekonstruksi wajah dan serangan penebakan atribut yang benar benar mutakhir, khususnya pada kondisi CCTV asli yang resolusinya rendah dan kualitasnya bervariasi tergantung jarak kamera.

Kedua, bagaimana caranya merancang mekanisme cancelable biometrics yang tetap bisa dipakai untuk mencari satu wajah pelaku di antara populasi besar orang lain, tanpa harus membuka identitas orang orang yang tidak berkaitan dengan pelaku itu.

Ketiga, seberapa jauh trade off antara tingkat keamanan template dengan tingkat presisi pencarian pelaku, dan apakah trade off itu bisa diperbaiki dibanding pendekatan yang sudah ada.

## 3. Tujuan Penelitian

Penelitian ini bertujuan mengembangkan dan mengevaluasi sebuah rancangan sistem cancelable face biometrics yang dipakai khusus untuk kebutuhan pencarian pelaku lewat jaringan CCTV, dengan tiga target utama. Target pertama adalah menyusun protokol pencarian yang hanya membuka informasi pihak yang benar benar cocok dengan pelaku yang dicari, sementara identitas orang lain tetap terkunci dan tidak bisa dibalik jadi wajah asli. Target kedua adalah mengukur secara jujur seberapa tahan rancangan ini terhadap serangan rekonstruksi dan serangan penebakan atribut, bukan cuma lewat metrik matematis di atas kertas. Target ketiga adalah membuktikan rancangan ini tetap bekerja cukup presisi meski diuji pada kondisi kamera yang kualitasnya rendah, sesuai kenyataan CCTV di lapangan.

---

## 4. Novelty dan Kontribusi ke Pengetahuan

Ada tiga hal yang membuat riset ini berbeda dari penelitian sejenis yang sudah ada.

Yang pertama, penelitian ini menempatkan cancelable biometrics dalam skenario pencarian satu wajah di antara populasi besar dengan orang orang yang tidak dikenal atau disebut distractor, bukan sekadar verifikasi satu lawan satu seperti kebanyakan riset sebelumnya. Skenario ini jauh lebih dekat dengan kebutuhan nyata penyelidikan kriminal.

Yang kedua, template yang dihasilkan diuji langsung dengan dua jenis serangan yang benar benar mutakhir, yaitu serangan rekonstruksi wajah dan serangan penebakan atribut seperti jenis kelamin dan usia, dan pengujian ini dilakukan pada kondisi kamera CCTV asli dengan resolusi rendah, bukan pada foto berkualitas bagus seperti kebanyakan riset lain.

Yang ketiga, penelitian ini mengusulkan sebuah protokol pengungkapan selektif, artinya sistem hanya membuka catatan orang yang cocok dengan pelaku yang dicari, sementara catatan orang lain tetap terkunci dan tidak bisa dibongkar. Protokol ini dikaitkan langsung dengan kebutuhan kepatuhan terhadap UU PDP, terutama prinsip minimalisasi data dan perlindungan data spesifik.

Gabungan ketiga hal ini, yaitu skenario pencarian populasi besar, pengujian dengan serangan nyata pada kondisi CCTV asli, dan protokol pengungkapan selektif, belum ditemukan tergabung dalam satu penelitian di literatur yang kami telusuri sepanjang tujuh tahun terakhir.

---

## 5. Kajian Metode Terkini yang Menjadi Dasar Penelitian

Beberapa kelompok riset dan publikasi berikut menjadi rujukan utama dan pembanding langsung.

Untuk fondasi cancelable biometrics secara umum, ada survei dari Yang dan kawan kawan tahun 2024 yang membahas pendekatan deep learning untuk cancelable biometrics secara komprehensif, dan survei dari Bernal Romero dan kawan kawan tahun 2023 yang membahas berbagai teknik proteksi dan pembatalan pada sistem biometrik. Untuk teknik dasar transformasi, ada random projection, BioHashing, dan pendekatan yang lebih baru bernama MLP Hash dari Shahreza, Krivokuća Hahn, dan Marcel tahun 2023 yang menggunakan jaringan perceptron berlapis dengan bobot acak khusus per pengguna.

Untuk sisi serangan terhadap template, rujukan paling penting adalah rangkaian karya Hatef Otroshi Shahreza dan Sébastien Marcel dari Idiap Research Institute yang terbit antara tahun 2022 sampai 2025, termasuk publikasi tentang serangan rekonstruksi tiga dimensi terhadap sistem pengenalan wajah, serangan inversi template menggunakan data sintetis, dan evaluasi kerentanan model pengenalan wajah mutakhir terhadap serangan inversi. Ada juga publikasi Breaking Template Protection tahun 2024 yang menunjukkan rekonstruksi wajah dari template yang sudah dilindungi mekanisme cancelable biometrics maupun cryptobiometrics.

Untuk sisi kebocoran atribut turunan, rujukan utamanya adalah Osorio Roig dan kawan kawan tahun 2022 yang mendemonstrasikan serangan berbasis perbandingan kemiripan untuk menebak atribut sensitif dari representasi wajah yang sudah diberi perlindungan privasi, serta Terhörst dan kawan kawan yang meneliti informasi atribut lunak apa saja yang tersimpan dalam embedding wajah.

Untuk sisi dataset dan tantangan resolusi rendah, rujukan utamanya adalah Cheng, Zhu, dan Gong dari Queen Mary University of London yang memperkenalkan QMUL SurvFace sebagai benchmark pengenalan wajah CCTV asli, serta publikasi SCface dari Grgic dan kawan kawan di Universitas Zagreb yang memperkenalkan dataset dengan variasi jarak kamera terkontrol.

Untuk sisi pencarian identitas lintas kamera dengan perlindungan privasi, ada publikasi terbaru bernama CityGuard tahun 2026 yang mengusulkan descriptor privat untuk pencarian identitas lintas kamera kota dengan pendekatan differential privacy, meskipun fokusnya pada penampilan tubuh secara umum, bukan wajah secara khusus, dan tidak menggabungkan pengujian serangan rekonstruksi seperti yang kami rencanakan.

---

## 6. Dataset yang Digunakan

Dataset dipersempit jadi dua saja, dipilih karena kekuatan masing masing saling melengkapi dan sudah cukup untuk membuktikan seluruh klaim novelty tanpa perlu menambah dataset lain yang justru bisa memperberat beban eksperimen tanpa menambah kekuatan argumen.

**SCface, Surveillance Cameras Face Database.** Dataset ini berisi 4160 gambar statis dari 130 orang, diambil menggunakan lima kamera CCTV dengan kualitas berbeda pada tiga jarak berbeda yaitu dekat, sedang, dan jauh, dalam kondisi ruangan yang tidak dikontrol pencahayaannya. Kekuatan utama dataset ini ada pada variabel jarak kamera yang terkontrol dan jelas labelnya, sehingga sangat cocok untuk eksperimen yang menunjukkan bagaimana tingkat keamanan template dan akurasi pencarian berubah seiring memburuknya kualitas gambar akibat jarak kamera. Peran dataset ini di penelitian adalah sebagai skenario terkontrol untuk mengukur trade off antara keamanan dan akurasi secara rapi dan bisa dijelaskan sebab akibatnya. Cara akses dataset ini lewat permintaan resmi ke pengelola melalui laman www.scface.org, dan biasanya diberikan gratis untuk keperluan riset akademik setelah mengisi formulir permintaan.

**QMUL SurvFace.** Dataset ini adalah benchmark pengenalan wajah CCTV terbesar yang tersedia untuk publik, berisi 463507 gambar wajah dari 15573 identitas berbeda, diambil dari rekaman CCTV asli di berbagai lokasi dan waktu, tanpa proses downsampling buatan. Kekuatan utama dataset ini ada pada skala populasinya yang besar dan memang didesain khusus untuk pengujian identifikasi populasi terbuka, yaitu mencari satu wajah target di antara banyak orang tidak dikenal. Peran dataset ini di penelitian adalah sebagai skenario realistis untuk membuktikan klaim novelty soal pelacakan pelaku di antara populasi besar, karena tanpa populasi besar seperti ini klaim tersebut akan terlihat lemah dan kurang meyakinkan. Dataset ini bisa diakses lewat laman resmi di qmul-survface.github.io, dengan tautan unduhan disediakan lewat Google Drive dan Baidu Cloud.

Kedua dataset ini dipilih karena saling menutupi kekurangan satu sama lain. SCface kecil tapi terkontrol, cocok untuk membedah pengaruh jarak kamera secara detail. QMUL SurvFace besar dan alami, cocok untuk membuktikan sistem tetap bekerja pada skala populasi yang realistis. Kombinasi keduanya sudah cukup untuk menopang seluruh klaim novelty tanpa perlu dataset tambahan seperti LFW atau FANVID, yang sifatnya cuma pelengkap dan bisa disebut sebagai catatan pengembangan lanjutan di bagian saran kalau memang dibutuhkan di masa depan.

Untuk model ekstraksi fitur wajah, penelitian ini akan menggunakan ArcFace yang sudah terlatih sebelumnya lewat pustaka InsightFace, sehingga tidak perlu melatih model pengenalan wajah dari nol dan bisa fokus pada bagian transformasi cancelable dan pengujian serangannya.

---

## 7. Metode yang Diusulkan

Metode yang diusulkan terdiri dari beberapa komponen yang saling terhubung.

### 7.1 Ekstraksi fitur dan pembentukan template

Setiap wajah yang terdeteksi di kamera, baik dari data simulasi SCface maupun QMUL SurvFace, terlebih dahulu dideteksi dan diluruskan posisinya, lalu diekstrak jadi vektor embedding menggunakan ArcFace. Embedding ini kemudian ditransformasi menggunakan kunci rahasia milik institusi menjadi template yang sudah dilindungi. Transformasi yang dipakai sebagai dasar adalah random projection dan BioHashing, dan sebagai pengembangan diusulkan kombinasi tambahan berupa regularisasi penekan atribut sensitif, terinspirasi dari pendekatan PrivacyNet dan SensitiveNets, supaya template hasil transformasi tidak hanya menyulitkan rekonstruksi wajah, tapi juga menekan sinyal jenis kelamin dan usia yang biasanya masih ikut terbawa.

### 7.2 Pembentukan basis data terlindungi

Hanya template hasil transformasi yang disimpan di basis data pusat. Gambar mentah tidak dipertahankan setelah proses ekstraksi selesai, sejalan dengan prinsip minimalisasi data pada UU PDP. Konsep ini disimulasikan seolah proses transformasi terjadi di perangkat dekat kamera, sebelum data dikirim ke server pusat, supaya wajah asli tidak pernah keluar dari lokasi pengambilan.

### 7.3 Protokol pencarian pelaku

Ketika ada foto pelaku dari sumber lain, misalnya dari kamera lokasi kejadian atau laporan saksi, foto itu ditransformasi menggunakan kunci yang sama, lalu dicocokkan terhadap seluruh template di basis data. Karena ini adalah skenario satu lawan banyak, hasil pencarian berupa daftar peringkat kandidat yang paling mirip, bukan cuma jawaban cocok atau tidak cocok seperti skenario verifikasi. Hanya kandidat yang melewati ambang batas kemiripan tertentu yang catatannya dibuka, misalnya berupa informasi lokasi dan waktu kamera yang merekamnya. Catatan orang lain yang tidak melewati ambang batas tetap terkunci sepenuhnya.

### 7.4 Pengujian keamanan dengan serangan nyata

Untuk membuktikan template benar benar aman, dilakukan dua jenis serangan terhadap basis data yang sudah terbentuk. Serangan pertama adalah serangan rekonstruksi, yaitu melatih jaringan decoder ringan yang mencoba membentuk kembali gambar wajah dari template, lalu hasilnya dibandingkan dengan wajah asli menggunakan pengukuran kemiripan citra maupun verifikasi ulang lewat model pengenalan wajah lain. Serangan kedua adalah serangan penebakan atribut, yaitu melatih classifier sederhana yang mencoba menebak jenis kelamin dan usia hanya dari template, lalu diukur seberapa akurat tebakannya.

### 7.5 Pengujian ketahanan terhadap variasi kualitas kamera

Seluruh pengujian di atas diulang pada berbagai kombinasi jarak kamera dari SCface dan berbagai tingkat resolusi dari QMUL SurvFace, supaya terlihat jelas bagaimana performa pencarian dan tingkat keamanan berubah seiring memburuknya kualitas gambar, yang merupakan kondisi nyata di lapangan.

---

## 8. Pipeline Eksekusi Penelitian secara Ringkas

Urutan pengerjaan penelitian ini secara garis besar mengikuti tahapan berikut.

Tahap satu, pengumpulan dan penyiapan dataset, meliputi permintaan akses SCface lewat formulir resmi dan pengunduhan QMUL SurvFace lewat tautan Google Drive atau Baidu Cloud yang disediakan di laman resminya.

Tahap dua, penyiapan model ekstraksi fitur, yaitu memasang dan menguji ArcFace lewat InsightFace pada sampel data untuk memastikan embedding terekstrak dengan benar.

Tahap tiga, implementasi transformasi cancelable dasar, yaitu membangun random projection dan BioHashing sebagai baseline pembanding.

Tahap empat, implementasi metode usulan, yaitu menambahkan mekanisme penekan atribut sensitif ke dalam proses transformasi.

Tahap lima, pembangunan protokol pencarian populasi besar, yaitu menyusun mekanisme pencarian satu lawan banyak beserta aturan pengungkapan selektif berdasarkan ambang batas kemiripan.

Tahap enam, implementasi dua serangan pengujian, yaitu membangun decoder rekonstruksi sederhana dan classifier penebak atribut, lalu menjalankannya terhadap template baseline maupun template usulan.

Tahap tujuh, eksperimen menyeluruh, yaitu menjalankan seluruh kombinasi pengujian di berbagai jarak kamera dan tingkat resolusi, lalu mencatat seluruh hasil pengukuran.

Tahap delapan, analisis dan penulisan, yaitu menyusun tabel dan grafik perbandingan, menulis narasi hasil dan pembahasan, serta menyusun keseluruhan artikel sesuai format yang diminta panduan GEMASTIK.

---

## 9. Rencana Hasil dan Pembahasan yang Diharapkan

Berdasarkan pola yang sudah terlihat di literatur, ada beberapa perkiraan hasil yang bisa dijadikan hipotesis awal sebelum eksperimen dijalankan.

Diperkirakan template baseline seperti random projection dan BioHashing polos akan menunjukkan tingkat keberhasilan serangan rekonstruksi dan serangan penebakan atribut yang cukup tinggi, sejalan dengan temuan riset Idiap dan Osorio Roig, terutama di kondisi kamera jarak dekat yang gambarnya masih cukup jelas.

Diperkirakan metode usulan dengan tambahan penekan atribut sensitif akan menurunkan akurasi serangan penebakan atribut secara signifikan, meski kemungkinan ada sedikit penurunan akurasi pencarian dibanding baseline, dan bagian penting dari pembahasan nanti adalah menunjukkan seberapa besar penurunan itu dan apakah masih dalam batas yang wajar.

Diperkirakan performa pencarian pada skenario satu lawan banyak akan menurun cukup jauh dibanding skenario verifikasi satu lawan satu, sejalan dengan temuan awal QMUL SurvFace yang menunjukkan kesenjangan besar antara kondisi foto berkualitas dan kondisi CCTV asli, dan ini akan jadi bagian pembahasan yang menekankan pentingnya melaporkan metrik identifikasi yang tepat, bukan cuma metrik verifikasi.

Diperkirakan pada kondisi kamera jarak jauh dan resolusi sangat rendah, baik tingkat keamanan maupun tingkat akurasi pencarian akan sama sama menurun, dan ini justru jadi temuan penting untuk dibahas, karena menunjukkan bahwa kondisi CCTV nyata punya keterbatasan yang harus diakui secara jujur dalam kesimpulan, bukan ditutupi.

---

## 10. Rencana Kesimpulan dan Keterkaitan dengan Kebijakan

Kesimpulan yang diharapkan dari penelitian ini bukan sekadar klaim bahwa metode usulan lebih baik dari baseline secara angka, tapi juga argumen bahwa protokol pengungkapan selektif ini bisa jadi contoh konkret penerapan prinsip minimalisasi data dari UU PDP dalam konteks CCTV fasilitas publik, sekaligus tetap memberi manfaat nyata untuk kebutuhan penyelidikan kriminal. Bagian saran akan membahas keterbatasan penelitian, misalnya skala dataset yang masih terbatas dibanding kebutuhan deployment sungguhan, serta perlunya kajian lebih lanjut soal siapa yang berwenang menjalankan protokol pencarian ini dan bagaimana mekanisme pengawasannya, supaya sistem ini tidak disalahgunakan untuk pengawasan massal yang berlebihan.

---

## 11. Daftar Referensi Utama yang Sudah Terkumpul

Yang, W., Wang, S., Hu, J., Tao, X., dan Li, Y. (2024). Feature extraction and learning approaches for cancellable biometrics: A survey. CAAI Transactions on Intelligence Technology, 9(1), 4 sampai 25.

Bernal Romero, J.C., Ramirez Cortes, J.M., Rangel Magdaleno, J.D.J., Gomez Gil, P., Peregrina Barreto, H., dan Cruz Vega, I. (2023). A review on protection and cancelable techniques in biometric systems. IEEE Access, 11, 8531 sampai 8568.

Shahreza, H.O., Krivokuća Hahn, V., dan Marcel, S. (2023). MLP Hash: Protecting face templates via hashing of randomized multi layer perceptron. Presented at EUSIPCO 2023.

Shahreza, H.O., dan Marcel, S. (2023). Template inversion attack against face recognition systems using 3D face reconstruction. Proceedings of the IEEE or CVF International Conference on Computer Vision.

Shahreza, H.O., dan Marcel, S. (2024). Vulnerability of state of the art face recognition models to template inversion attack. IEEE Transactions on Information Forensics and Security.

Publikasi terkait Breaking Template Protection, reconstruction of face images from protected facial templates (2024).

Osorio Roig, D., Rathgeb, C., Drozdowski, P., Terhörst, P., Štruc, V., dan Busch, C. (2022). An attack on facial soft biometric privacy enhancement. IEEE Transactions on Biometrics, Behavior, and Identity Science, 4(2), 263 sampai 275.

Terhörst, P., Fährmann, D., Damer, N., Kirchbuchner, F., dan Kuijper, A. (2021). On soft biometric information stored in biometric face embeddings. IEEE Transactions on Biometrics, Behavior, and Identity Science, 3(4), 519 sampai 534.

Cheng, Z., Zhu, X., dan Gong, S. (2018 dan 2019). Surveillance Face Recognition Challenge, pengantar dataset QMUL SurvFace.

Grgic, M., Delac, K., Grgic, S., dan Klimpak, B. SCface, surveillance cameras face database. Multimedia Tools and Applications.

Publikasi FANVID, benchmark pengenalan wajah dan pelat nomor pada video resolusi rendah (2025).

Publikasi CityGuard, graph aware private descriptors for bias resilient identity search across urban cameras (2026).

Deng, J., Guo, J., Xue, N., dan Zafeiriou, S. (2019). ArcFace: Additive angular margin loss for deep face recognition.

Catatan untuk tim, seluruh referensi di atas perlu dibaca langsung dari sumber aslinya untuk memastikan detail metodologi dan angka yang tepat sebelum dikutip resmi di badan artikel ilmiah, karena rangkuman di dokumen ini masih berupa gambaran umum untuk keperluan perencanaan.

---

## 12. Hal yang Perlu Didiskusikan Lagi Bersama Tim

Beberapa poin ini masih terbuka untuk didiskusikan sebelum eksekusi dimulai, yaitu pembagian tugas antar anggota tim, apakah eksperimen dijalankan penuh pada QMUL SurvFace atau cukup subset tertentu untuk efisiensi komputasi, apakah perlu mencoba akses data CCTV kampus sebagai studi kasus tambahan atau cukup dengan dataset publik saja, dan bagaimana menyusun narasi bagian etika serta pengawasan supaya penelitian ini terlihat matang secara tanggung jawab sosial, bukan cuma kuat secara teknis.
