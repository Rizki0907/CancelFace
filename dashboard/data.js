const cancelfaceData = {
  "perbandingan_metode": [
    {
      "Metode": "Random Projection",
      "TPIR pada FPIR 0.2": 0.1605422924901186,
      "TPIR pada FPIR 0.1": 0.1128976744186046,
      "TPIR pada FPIR 0.05": 0.081406600660066,
      "TPIR pada FPIR 0.01": 0.0360701754385964,
      "Rank 1 Accuracy": 0.3114,
      "Rank 5 Accuracy": 0.4479333333333333,
      "Akurasi Tebakan Jenis Kelamin": 0.6555555555555556,
      "Akurasi Tebakan Kelompok Usia": 0.5790123456790124,
      "Rata Rata Kemiripan Kosinus": 0.9079771734235328,
      "Tingkat Keberhasilan Reidentifikasi": 0.2942289498580889,
      "Ukuran Sampel N_eff": 1057
    },
    {
      "Metode": "BioHashing",
      "TPIR pada FPIR 0.2": 0.1137461675579322,
      "TPIR pada FPIR 0.1": 0.0814216475095785,
      "TPIR pada FPIR 0.05": 0.0567405797101449,
      "TPIR pada FPIR 0.01": 0.0291333333333333,
      "Rank 1 Accuracy": 0.218,
      "Rank 5 Accuracy": 0.354,
      "Akurasi Tebakan Jenis Kelamin": 0.6580246913580247,
      "Akurasi Tebakan Kelompok Usia": 0.5635802469135802,
      "Rata Rata Kemiripan Kosinus": 0.7683963339539449,
      "Tingkat Keberhasilan Reidentifikasi": 0.1778618732261116,
      "Ukuran Sampel N_eff": 1057
    },
    {
      "Metode": "Metode Usulan",
      "TPIR pada FPIR 0.2": 0.2310258937198067,
      "TPIR pada FPIR 0.1": 0.1829870646766169,
      "TPIR pada FPIR 0.05": 0.1452808080808081,
      "TPIR pada FPIR 0.01": 0.0694888888888888,
      "Rank 1 Accuracy": 0.3406,
      "Rank 5 Accuracy": 0.4896,
      "Akurasi Tebakan Jenis Kelamin": 0.5666666666666667,
      "Akurasi Tebakan Kelompok Usia": 0.4395061728395061,
      "Rata Rata Kemiripan Kosinus": 0.068715793242293,
      "Tingkat Keberhasilan Reidentifikasi": 0.0,
      "Ukuran Sampel N_eff": 1057
    }
  ],
  "ablasi_dimensi": [
    {
      "TEMPLATE_DIM": 64,
      "Rank 1 Accuracy": 0.1998666666666666
    },
    {
      "TEMPLATE_DIM": 128,
      "Rank 1 Accuracy": 0.2786
    },
    {
      "TEMPLATE_DIM": 256,
      "Rank 1 Accuracy": 0.3114
    },
    {
      "TEMPLATE_DIM": 512,
      "Rank 1 Accuracy": 0.3441333333333333
    }
  ],
  "ketahanan_kualitas": [
    {
      "Metode": "BioHashing",
      "Tingkat Kualitas": "Resolusi Rendah",
      "Rank 1 Accuracy": 0.165,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "BioHashing",
      "Tingkat Kualitas": "Resolusi Sedang",
      "Rank 1 Accuracy": 0.2344,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "BioHashing",
      "Tingkat Kualitas": "Resolusi Tinggi",
      "Rank 1 Accuracy": 0.2546,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "Metode Usulan",
      "Tingkat Kualitas": "Resolusi Rendah",
      "Rank 1 Accuracy": 0.3032,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "Metode Usulan",
      "Tingkat Kualitas": "Resolusi Sedang",
      "Rank 1 Accuracy": 0.3694,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "Metode Usulan",
      "Tingkat Kualitas": "Resolusi Tinggi",
      "Rank 1 Accuracy": 0.3492,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "Random Projection",
      "Tingkat Kualitas": "Resolusi Rendah",
      "Rank 1 Accuracy": 0.2506,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "Random Projection",
      "Tingkat Kualitas": "Resolusi Sedang",
      "Rank 1 Accuracy": 0.3334,
      "Jumlah Sampel": 5000
    },
    {
      "Metode": "Random Projection",
      "Tingkat Kualitas": "Resolusi Tinggi",
      "Rank 1 Accuracy": 0.3502,
      "Jumlah Sampel": 5000
    }
  ],
  "identifikasi": [
    {
      "Metode": "Random Projection",
      "TPIR pada FPIR 0.2": 0.1605422924901186,
      "TPIR pada FPIR 0.1": 0.1128976744186046,
      "TPIR pada FPIR 0.05": 0.081406600660066,
      "TPIR pada FPIR 0.01": 0.0360701754385964,
      "Rank 1 Accuracy": 0.3114,
      "Rank 5 Accuracy": 0.4479333333333333
    },
    {
      "Metode": "BioHashing",
      "TPIR pada FPIR 0.2": 0.1137461675579322,
      "TPIR pada FPIR 0.1": 0.0814216475095785,
      "TPIR pada FPIR 0.05": 0.0567405797101449,
      "TPIR pada FPIR 0.01": 0.0291333333333333,
      "Rank 1 Accuracy": 0.218,
      "Rank 5 Accuracy": 0.354
    },
    {
      "Metode": "Metode Usulan",
      "TPIR pada FPIR 0.2": 0.2310258937198067,
      "TPIR pada FPIR 0.1": 0.1829870646766169,
      "TPIR pada FPIR 0.05": 0.1452808080808081,
      "TPIR pada FPIR 0.01": 0.0694888888888888,
      "Rank 1 Accuracy": 0.3406,
      "Rank 5 Accuracy": 0.4896
    }
  ],
  "iso_24745": [
    {
      "Metode": "Metode Usulan",
      "KS Statistic Unlinkability": 0.1822833333333333,
      "Overlap Coefficient": 0.8180333333333332,
      "Revocability Cross-Match Rate": 0.0
    }
  ],
  "serangan_atribut": [
    {
      "Metode": "Random Projection",
      "Akurasi Tebakan Jenis Kelamin": 0.6555555555555556,
      "Akurasi Tebakan Kelompok Usia": 0.5790123456790124
    },
    {
      "Metode": "BioHashing",
      "Akurasi Tebakan Jenis Kelamin": 0.6580246913580247,
      "Akurasi Tebakan Kelompok Usia": 0.5635802469135802
    },
    {
      "Metode": "Metode Usulan",
      "Akurasi Tebakan Jenis Kelamin": 0.5666666666666667,
      "Akurasi Tebakan Kelompok Usia": 0.4395061728395061
    }
  ],
  "serangan_rekonstruksi": [
    {
      "Metode": "Random Projection",
      "Rata Rata Kemiripan Kosinus": 0.9079771734235328,
      "Tingkat Keberhasilan Reidentifikasi": 0.2942289498580889,
      "Ukuran Sampel N_eff": 1057
    },
    {
      "Metode": "BioHashing",
      "Rata Rata Kemiripan Kosinus": 0.7683963339539449,
      "Tingkat Keberhasilan Reidentifikasi": 0.1778618732261116,
      "Ukuran Sampel N_eff": 1057
    },
    {
      "Metode": "Metode Usulan",
      "Rata Rata Kemiripan Kosinus": 0.068715793242293,
      "Tingkat Keberhasilan Reidentifikasi": 0.0,
      "Ukuran Sampel N_eff": 1057
    }
  ],
  "eda_subset": [
    {
      "split": "Training Set",
      "count": 50000
    },
    {
      "split": "Unmated Probe",
      "count": 20000
    },
    {
      "split": "Gallery",
      "count": 15000
    },
    {
      "split": "Mated Probe",
      "count": 15000
    }
  ]
};