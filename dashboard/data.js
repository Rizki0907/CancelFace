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
  ],
  "eda_subset_img": [
    {
      "split": "Training Set",
      "count": 50000
    },
    {
      "split": "Gallery",
      "count": 15000
    },
    {
      "split": "Mated Probe",
      "count": 15000
    },
    {
      "split": "Unmated Probe",
      "count": 20000
    }
  ],
  "eda_subset_id": [
    {
      "split": "Training Set",
      "count": 5319
    },
    {
      "split": "Gallery",
      "count": 5258
    },
    {
      "split": "Mated Probe",
      "count": 5258
    },
    {
      "split": "Unmated Probe",
      "count": 5258
    }
  ],
  "eda_camera": [
    {
      "camera": "Cam_1",
      "count": 8000
    },
    {
      "camera": "Cam_2",
      "count": 6500
    },
    {
      "camera": "Cam_3",
      "count": 5000
    },
    {
      "camera": "Cam_4",
      "count": 4000
    },
    {
      "camera": "Cam_5",
      "count": 3500
    },
    {
      "camera": "Cam_6",
      "count": 3000
    },
    {
      "camera": "Cam_7",
      "count": 2500
    },
    {
      "camera": "Cam_8",
      "count": 2000
    },
    {
      "camera": "Cam_9",
      "count": 1800
    },
    {
      "camera": "Cam_10",
      "count": 1500
    },
    {
      "camera": "Cam_11",
      "count": 1200
    },
    {
      "camera": "Cam_12",
      "count": 1000
    },
    {
      "camera": "Cam_13",
      "count": 900
    },
    {
      "camera": "Cam_14",
      "count": 800
    },
    {
      "camera": "Cam_15",
      "count": 700
    },
    {
      "camera": "Lainnya",
      "count": 57600
    }
  ],
  "eda_quality": [
    {
      "laplacian": 119.68,
      "brightness": 124.86
    },
    {
      "laplacian": 74.72,
      "brightness": 97.37
    },
    {
      "laplacian": 69.11,
      "brightness": 53.48
    },
    {
      "laplacian": 69.12,
      "brightness": 10.0
    },
    {
      "laplacian": 232.49,
      "brightness": 58.24
    },
    {
      "laplacian": 143.34,
      "brightness": 110.14
    },
    {
      "laplacian": 56.55,
      "brightness": 88.58
    },
    {
      "laplacian": 123.49,
      "brightness": 113.1
    },
    {
      "laplacian": 99.95,
      "brightness": 51.7
    },
    {
      "laplacian": 10.8,
      "brightness": 39.02
    },
    {
      "laplacian": 33.56,
      "brightness": 91.56
    },
    {
      "laplacian": 105.31,
      "brightness": 86.0
    },
    {
      "laplacian": 218.26,
      "brightness": 87.64
    },
    {
      "laplacian": 69.59,
      "brightness": 103.32
    },
    {
      "laplacian": 52.9,
      "brightness": 90.54
    },
    {
      "laplacian": 90.7,
      "brightness": 90.14
    },
    {
      "laplacian": 50.26,
      "brightness": 97.88
    },
    {
      "laplacian": 65.89,
      "brightness": 92.56
    },
    {
      "laplacian": 82.47,
      "brightness": 101.44
    },
    {
      "laplacian": 32.01,
      "brightness": 105.21
    },
    {
      "laplacian": 148.5,
      "brightness": 118.29
    },
    {
      "laplacian": 26.76,
      "brightness": 63.77
    },
    {
      "laplacian": 23.64,
      "brightness": 92.01
    },
    {
      "laplacian": 96.7,
      "brightness": 70.74
    },
    {
      "laplacian": 140.67,
      "brightness": 59.16
    },
    {
      "laplacian": 94.89,
      "brightness": 62.76
    },
    {
      "laplacian": 76.09,
      "brightness": 92.37
    },
    {
      "laplacian": 65.37,
      "brightness": 90.46
    },
    {
      "laplacian": 57.0,
      "brightness": 90.01
    },
    {
      "laplacian": 171.89,
      "brightness": 74.36
    },
    {
      "laplacian": 106.05,
      "brightness": 80.09
    },
    {
      "laplacian": 60.87,
      "brightness": 100.44
    },
    {
      "laplacian": 46.83,
      "brightness": 42.77
    },
    {
      "laplacian": 129.38,
      "brightness": 80.62
    },
    {
      "laplacian": 169.17,
      "brightness": 82.25
    },
    {
      "laplacian": 159.06,
      "brightness": 98.83
    },
    {
      "laplacian": 40.05,
      "brightness": 46.24
    },
    {
      "laplacian": 64.92,
      "brightness": 117.38
    },
    {
      "laplacian": 56.07,
      "brightness": 85.34
    },
    {
      "laplacian": 71.91,
      "brightness": 86.66
    },
    {
      "laplacian": 147.55,
      "brightness": 69.97
    },
    {
      "laplacian": 205.11,
      "brightness": 93.45
    },
    {
      "laplacian": 108.92,
      "brightness": 81.2
    },
    {
      "laplacian": 48.24,
      "brightness": 110.22
    },
    {
      "laplacian": 81.04,
      "brightness": 43.96
    },
    {
      "laplacian": 230.63,
      "brightness": 84.39
    },
    {
      "laplacian": 89.08,
      "brightness": 90.21
    },
    {
      "laplacian": 65.48,
      "brightness": 75.34
    },
    {
      "laplacian": 69.94,
      "brightness": 69.88
    },
    {
      "laplacian": 108.58,
      "brightness": 70.93
    },
    {
      "laplacian": 41.28,
      "brightness": 84.37
    },
    {
      "laplacian": 54.96,
      "brightness": 34.75
    },
    {
      "laplacian": 157.49,
      "brightness": 104.13
    },
    {
      "laplacian": 106.41,
      "brightness": 68.0
    },
    {
      "laplacian": 89.76,
      "brightness": 83.2
    },
    {
      "laplacian": 162.8,
      "brightness": 89.18
    },
    {
      "laplacian": 45.73,
      "brightness": 66.85
    },
    {
      "laplacian": 63.92,
      "brightness": 76.72
    },
    {
      "laplacian": 103.95,
      "brightness": 29.12
    },
    {
      "laplacian": 101.35,
      "brightness": 98.3
    },
    {
      "laplacian": 21.29,
      "brightness": 107.0
    },
    {
      "laplacian": 59.02,
      "brightness": 37.48
    },
    {
      "laplacian": 73.35,
      "brightness": 69.84
    },
    {
      "laplacian": 112.23,
      "brightness": 49.25
    },
    {
      "laplacian": 101.09,
      "brightness": 75.56
    },
    {
      "laplacian": 78.62,
      "brightness": 96.22
    },
    {
      "laplacian": 10.71,
      "brightness": 104.68
    },
    {
      "laplacian": 81.63,
      "brightness": 108.05
    },
    {
      "laplacian": 87.28,
      "brightness": 112.76
    },
    {
      "laplacian": 364.9,
      "brightness": 74.44
    },
    {
      "laplacian": 71.52,
      "brightness": 51.33
    },
    {
      "laplacian": 104.35,
      "brightness": 77.14
    },
    {
      "laplacian": 181.01,
      "brightness": 95.83
    },
    {
      "laplacian": 141.9,
      "brightness": 49.32
    },
    {
      "laplacian": 210.64,
      "brightness": 121.5
    },
    {
      "laplacian": 21.65,
      "brightness": 102.45
    },
    {
      "laplacian": 34.35,
      "brightness": 74.84
    },
    {
      "laplacian": 51.86,
      "brightness": 62.23
    },
    {
      "laplacian": 17.97,
      "brightness": 63.27
    },
    {
      "laplacian": 87.84,
      "brightness": 81.86
    },
    {
      "laplacian": 36.96,
      "brightness": 74.26
    },
    {
      "laplacian": 228.76,
      "brightness": 103.76
    },
    {
      "laplacian": 42.31,
      "brightness": 71.43
    },
    {
      "laplacian": 64.23,
      "brightness": 92.64
    },
    {
      "laplacian": 147.65,
      "brightness": 79.28
    },
    {
      "laplacian": 26.46,
      "brightness": 86.74
    },
    {
      "laplacian": 16.68,
      "brightness": 74.25
    },
    {
      "laplacian": 95.83,
      "brightness": 97.69
    },
    {
      "laplacian": 101.26,
      "brightness": 98.06
    },
    {
      "laplacian": 144.67,
      "brightness": 91.5
    },
    {
      "laplacian": 121.77,
      "brightness": 95.19
    },
    {
      "laplacian": 104.01,
      "brightness": 56.39
    },
    {
      "laplacian": 46.69,
      "brightness": 88.08
    },
    {
      "laplacian": 99.24,
      "brightness": 111.23
    },
    {
      "laplacian": 103.72,
      "brightness": 92.29
    },
    {
      "laplacian": 45.2,
      "brightness": 54.23
    },
    {
      "laplacian": 271.1,
      "brightness": 78.76
    },
    {
      "laplacian": 117.81,
      "brightness": 89.37
    },
    {
      "laplacian": 34.92,
      "brightness": 61.07
    },
    {
      "laplacian": 145.16,
      "brightness": 46.04
    },
    {
      "laplacian": 162.27,
      "brightness": 72.1
    },
    {
      "laplacian": 112.92,
      "brightness": 61.48
    },
    {
      "laplacian": 68.48,
      "brightness": 79.64
    },
    {
      "laplacian": 43.53,
      "brightness": 40.21
    },
    {
      "laplacian": 78.45,
      "brightness": 94.12
    },
    {
      "laplacian": 107.35,
      "brightness": 64.13
    },
    {
      "laplacian": 84.18,
      "brightness": 104.89
    },
    {
      "laplacian": 216.78,
      "brightness": 73.08
    },
    {
      "laplacian": 130.6,
      "brightness": 79.37
    },
    {
      "laplacian": 39.35,
      "brightness": 75.67
    },
    {
      "laplacian": 31.56,
      "brightness": 62.8
    },
    {
      "laplacian": 118.52,
      "brightness": 141.81
    },
    {
      "laplacian": 69.73,
      "brightness": 67.6
    },
    {
      "laplacian": 138.44,
      "brightness": 105.59
    },
    {
      "laplacian": 117.77,
      "brightness": 52.66
    },
    {
      "laplacian": 78.72,
      "brightness": 89.3
    },
    {
      "laplacian": 39.75,
      "brightness": 91.97
    },
    {
      "laplacian": 18.81,
      "brightness": 79.4
    },
    {
      "laplacian": 97.93,
      "brightness": 65.72
    },
    {
      "laplacian": 26.01,
      "brightness": 73.42
    },
    {
      "laplacian": 38.31,
      "brightness": 69.92
    },
    {
      "laplacian": 93.66,
      "brightness": 140.05
    },
    {
      "laplacian": 87.15,
      "brightness": 79.43
    },
    {
      "laplacian": 29.19,
      "brightness": 93.12
    },
    {
      "laplacian": 174.62,
      "brightness": 124.54
    },
    {
      "laplacian": 171.54,
      "brightness": 58.09
    },
    {
      "laplacian": 121.2,
      "brightness": 80.94
    },
    {
      "laplacian": 121.09,
      "brightness": 73.27
    },
    {
      "laplacian": 121.2,
      "brightness": 77.85
    },
    {
      "laplacian": 161.33,
      "brightness": 75.52
    },
    {
      "laplacian": 132.85,
      "brightness": 61.7
    },
    {
      "laplacian": 42.74,
      "brightness": 84.89
    },
    {
      "laplacian": 68.96,
      "brightness": 53.43
    },
    {
      "laplacian": 339.83,
      "brightness": 104.72
    },
    {
      "laplacian": 11.57,
      "brightness": 95.58
    },
    {
      "laplacian": 56.43,
      "brightness": 67.66
    },
    {
      "laplacian": 175.24,
      "brightness": 68.88
    },
    {
      "laplacian": 45.16,
      "brightness": 86.89
    },
    {
      "laplacian": 135.35,
      "brightness": 60.04
    },
    {
      "laplacian": 86.31,
      "brightness": 125.3
    },
    {
      "laplacian": 47.95,
      "brightness": 88.95
    },
    {
      "laplacian": 10.0,
      "brightness": 89.83
    },
    {
      "laplacian": 95.96,
      "brightness": 97.04
    },
    {
      "laplacian": 41.93,
      "brightness": 65.51
    },
    {
      "laplacian": 76.14,
      "brightness": 107.23
    },
    {
      "laplacian": 120.37,
      "brightness": 82.86
    },
    {
      "laplacian": 152.64,
      "brightness": 103.75
    },
    {
      "laplacian": 56.28,
      "brightness": 75.05
    },
    {
      "laplacian": 47.88,
      "brightness": 112.93
    },
    {
      "laplacian": 25.57,
      "brightness": 90.03
    },
    {
      "laplacian": 157.73,
      "brightness": 134.56
    },
    {
      "laplacian": 309.09,
      "brightness": 70.76
    },
    {
      "laplacian": 169.32,
      "brightness": 85.11
    },
    {
      "laplacian": 194.78,
      "brightness": 54.21
    },
    {
      "laplacian": 45.49,
      "brightness": 66.77
    },
    {
      "laplacian": 115.39,
      "brightness": 95.47
    },
    {
      "laplacian": 144.0,
      "brightness": 108.23
    },
    {
      "laplacian": 33.16,
      "brightness": 154.13
    },
    {
      "laplacian": 239.36,
      "brightness": 77.58
    },
    {
      "laplacian": 20.91,
      "brightness": 56.67
    },
    {
      "laplacian": 215.28,
      "brightness": 98.83
    },
    {
      "laplacian": 20.76,
      "brightness": 51.8
    },
    {
      "laplacian": 34.68,
      "brightness": 94.11
    },
    {
      "laplacian": 116.86,
      "brightness": 67.44
    },
    {
      "laplacian": 87.92,
      "brightness": 85.29
    },
    {
      "laplacian": 60.85,
      "brightness": 107.28
    },
    {
      "laplacian": 233.36,
      "brightness": 77.23
    },
    {
      "laplacian": 26.25,
      "brightness": 103.32
    },
    {
      "laplacian": 73.91,
      "brightness": 101.83
    },
    {
      "laplacian": 127.37,
      "brightness": 33.39
    },
    {
      "laplacian": 102.82,
      "brightness": 57.46
    },
    {
      "laplacian": 49.25,
      "brightness": 40.95
    },
    {
      "laplacian": 50.79,
      "brightness": 130.04
    },
    {
      "laplacian": 151.08,
      "brightness": 77.37
    },
    {
      "laplacian": 155.93,
      "brightness": 124.52
    },
    {
      "laplacian": 104.78,
      "brightness": 39.18
    },
    {
      "laplacian": 40.46,
      "brightness": 65.68
    },
    {
      "laplacian": 52.15,
      "brightness": 100.01
    },
    {
      "laplacian": 81.99,
      "brightness": 84.48
    },
    {
      "laplacian": 91.14,
      "brightness": 93.32
    },
    {
      "laplacian": 123.87,
      "brightness": 48.65
    },
    {
      "laplacian": 70.95,
      "brightness": 114.42
    },
    {
      "laplacian": 148.78,
      "brightness": 99.43
    },
    {
      "laplacian": 147.65,
      "brightness": 90.04
    },
    {
      "laplacian": 199.2,
      "brightness": 62.86
    },
    {
      "laplacian": 84.7,
      "brightness": 88.1
    },
    {
      "laplacian": 106.06,
      "brightness": 72.71
    },
    {
      "laplacian": 75.21,
      "brightness": 38.74
    },
    {
      "laplacian": 40.89,
      "brightness": 78.74
    },
    {
      "laplacian": 304.5,
      "brightness": 76.08
    },
    {
      "laplacian": 182.67,
      "brightness": 106.56
    },
    {
      "laplacian": 145.59,
      "brightness": 24.14
    },
    {
      "laplacian": 82.55,
      "brightness": 85.88
    },
    {
      "laplacian": 37.8,
      "brightness": 51.11
    },
    {
      "laplacian": 163.45,
      "brightness": 87.98
    },
    {
      "laplacian": 74.2,
      "brightness": 89.36
    },
    {
      "laplacian": 112.93,
      "brightness": 77.83
    },
    {
      "laplacian": 51.98,
      "brightness": 100.18
    },
    {
      "laplacian": 100.17,
      "brightness": 48.86
    },
    {
      "laplacian": 54.71,
      "brightness": 107.69
    },
    {
      "laplacian": 56.48,
      "brightness": 62.3
    },
    {
      "laplacian": 99.23,
      "brightness": 41.1
    },
    {
      "laplacian": 20.45,
      "brightness": 73.19
    },
    {
      "laplacian": 21.5,
      "brightness": 27.62
    },
    {
      "laplacian": 45.03,
      "brightness": 86.35
    },
    {
      "laplacian": 70.3,
      "brightness": 73.52
    },
    {
      "laplacian": 151.86,
      "brightness": 110.84
    },
    {
      "laplacian": 73.43,
      "brightness": 96.22
    },
    {
      "laplacian": 82.14,
      "brightness": 45.2
    },
    {
      "laplacian": 66.05,
      "brightness": 59.04
    },
    {
      "laplacian": 105.95,
      "brightness": 93.02
    },
    {
      "laplacian": 40.53,
      "brightness": 101.18
    },
    {
      "laplacian": 76.51,
      "brightness": 110.56
    },
    {
      "laplacian": 112.05,
      "brightness": 110.36
    },
    {
      "laplacian": 98.65,
      "brightness": 77.76
    },
    {
      "laplacian": 84.15,
      "brightness": 89.07
    },
    {
      "laplacian": 84.93,
      "brightness": 112.47
    },
    {
      "laplacian": 119.79,
      "brightness": 72.42
    },
    {
      "laplacian": 313.91,
      "brightness": 89.49
    },
    {
      "laplacian": 42.97,
      "brightness": 71.83
    },
    {
      "laplacian": 319.67,
      "brightness": 66.23
    },
    {
      "laplacian": 41.29,
      "brightness": 81.21
    },
    {
      "laplacian": 10.0,
      "brightness": 62.81
    },
    {
      "laplacian": 53.79,
      "brightness": 76.73
    },
    {
      "laplacian": 107.4,
      "brightness": 54.13
    },
    {
      "laplacian": 272.58,
      "brightness": 75.25
    },
    {
      "laplacian": 37.75,
      "brightness": 91.21
    },
    {
      "laplacian": 119.29,
      "brightness": 65.28
    },
    {
      "laplacian": 23.86,
      "brightness": 80.23
    },
    {
      "laplacian": 266.27,
      "brightness": 83.48
    },
    {
      "laplacian": 185.0,
      "brightness": 91.31
    },
    {
      "laplacian": 56.57,
      "brightness": 76.66
    },
    {
      "laplacian": 204.83,
      "brightness": 107.15
    },
    {
      "laplacian": 76.16,
      "brightness": 27.48
    },
    {
      "laplacian": 191.49,
      "brightness": 153.44
    },
    {
      "laplacian": 83.67,
      "brightness": 58.22
    },
    {
      "laplacian": 86.4,
      "brightness": 90.08
    },
    {
      "laplacian": 57.53,
      "brightness": 56.54
    },
    {
      "laplacian": 130.35,
      "brightness": 96.11
    },
    {
      "laplacian": 91.34,
      "brightness": 86.91
    },
    {
      "laplacian": 121.15,
      "brightness": 63.73
    },
    {
      "laplacian": 18.35,
      "brightness": 106.83
    },
    {
      "laplacian": 196.01,
      "brightness": 75.9
    },
    {
      "laplacian": 228.91,
      "brightness": 93.68
    },
    {
      "laplacian": 91.03,
      "brightness": 57.07
    },
    {
      "laplacian": 299.69,
      "brightness": 79.23
    },
    {
      "laplacian": 255.75,
      "brightness": 130.09
    },
    {
      "laplacian": 132.32,
      "brightness": 104.07
    },
    {
      "laplacian": 206.57,
      "brightness": 87.69
    },
    {
      "laplacian": 172.03,
      "brightness": 68.78
    },
    {
      "laplacian": 13.56,
      "brightness": 81.69
    },
    {
      "laplacian": 67.12,
      "brightness": 84.94
    },
    {
      "laplacian": 138.76,
      "brightness": 91.23
    },
    {
      "laplacian": 238.86,
      "brightness": 53.08
    },
    {
      "laplacian": 22.22,
      "brightness": 96.71
    },
    {
      "laplacian": 14.65,
      "brightness": 52.76
    },
    {
      "laplacian": 79.8,
      "brightness": 120.78
    },
    {
      "laplacian": 10.0,
      "brightness": 60.71
    },
    {
      "laplacian": 77.71,
      "brightness": 87.42
    },
    {
      "laplacian": 109.31,
      "brightness": 105.13
    },
    {
      "laplacian": 36.2,
      "brightness": 73.69
    },
    {
      "laplacian": 79.35,
      "brightness": 88.52
    },
    {
      "laplacian": 161.44,
      "brightness": 115.88
    },
    {
      "laplacian": 53.58,
      "brightness": 94.11
    },
    {
      "laplacian": 41.92,
      "brightness": 88.89
    },
    {
      "laplacian": 76.61,
      "brightness": 37.88
    },
    {
      "laplacian": 32.78,
      "brightness": 56.66
    },
    {
      "laplacian": 285.37,
      "brightness": 106.17
    },
    {
      "laplacian": 85.63,
      "brightness": 94.25
    },
    {
      "laplacian": 45.84,
      "brightness": 98.04
    },
    {
      "laplacian": 97.92,
      "brightness": 95.88
    },
    {
      "laplacian": 76.29,
      "brightness": 112.24
    },
    {
      "laplacian": 69.87,
      "brightness": 73.47
    },
    {
      "laplacian": 53.57,
      "brightness": 83.01
    },
    {
      "laplacian": 51.42,
      "brightness": 54.28
    },
    {
      "laplacian": 18.8,
      "brightness": 48.05
    },
    {
      "laplacian": 206.37,
      "brightness": 38.91
    },
    {
      "laplacian": 126.37,
      "brightness": 57.87
    },
    {
      "laplacian": 105.08,
      "brightness": 118.81
    },
    {
      "laplacian": 75.35,
      "brightness": 41.18
    },
    {
      "laplacian": 35.62,
      "brightness": 72.41
    },
    {
      "laplacian": 43.42,
      "brightness": 47.67
    },
    {
      "laplacian": 21.11,
      "brightness": 64.98
    },
    {
      "laplacian": 48.18,
      "brightness": 84.24
    },
    {
      "laplacian": 31.2,
      "brightness": 62.5
    },
    {
      "laplacian": 246.57,
      "brightness": 107.24
    },
    {
      "laplacian": 154.18,
      "brightness": 118.35
    },
    {
      "laplacian": 88.43,
      "brightness": 23.77
    },
    {
      "laplacian": 39.18,
      "brightness": 62.93
    },
    {
      "laplacian": 32.71,
      "brightness": 81.48
    },
    {
      "laplacian": 71.64,
      "brightness": 108.15
    },
    {
      "laplacian": 158.55,
      "brightness": 68.64
    },
    {
      "laplacian": 21.73,
      "brightness": 79.5
    },
    {
      "laplacian": 125.21,
      "brightness": 51.08
    },
    {
      "laplacian": 48.0,
      "brightness": 41.68
    },
    {
      "laplacian": 55.68,
      "brightness": 116.13
    },
    {
      "laplacian": 86.5,
      "brightness": 34.4
    },
    {
      "laplacian": 40.38,
      "brightness": 138.22
    },
    {
      "laplacian": 68.84,
      "brightness": 98.13
    },
    {
      "laplacian": 37.41,
      "brightness": 97.0
    },
    {
      "laplacian": 51.37,
      "brightness": 94.39
    },
    {
      "laplacian": 142.22,
      "brightness": 73.68
    },
    {
      "laplacian": 89.91,
      "brightness": 89.8
    },
    {
      "laplacian": 141.85,
      "brightness": 75.28
    },
    {
      "laplacian": 47.46,
      "brightness": 93.83
    },
    {
      "laplacian": 125.86,
      "brightness": 79.16
    },
    {
      "laplacian": 16.24,
      "brightness": 56.24
    },
    {
      "laplacian": 86.48,
      "brightness": 58.24
    },
    {
      "laplacian": 131.72,
      "brightness": 55.39
    },
    {
      "laplacian": 15.51,
      "brightness": 104.27
    },
    {
      "laplacian": 47.94,
      "brightness": 64.56
    },
    {
      "laplacian": 86.43,
      "brightness": 32.2
    },
    {
      "laplacian": 166.63,
      "brightness": 89.92
    },
    {
      "laplacian": 51.37,
      "brightness": 117.86
    },
    {
      "laplacian": 122.42,
      "brightness": 99.33
    },
    {
      "laplacian": 215.32,
      "brightness": 64.92
    },
    {
      "laplacian": 126.41,
      "brightness": 40.33
    },
    {
      "laplacian": 70.9,
      "brightness": 76.64
    },
    {
      "laplacian": 109.66,
      "brightness": 76.02
    },
    {
      "laplacian": 50.11,
      "brightness": 55.77
    },
    {
      "laplacian": 89.05,
      "brightness": 93.78
    },
    {
      "laplacian": 73.68,
      "brightness": 126.17
    },
    {
      "laplacian": 107.08,
      "brightness": 85.56
    },
    {
      "laplacian": 59.47,
      "brightness": 84.01
    },
    {
      "laplacian": 111.48,
      "brightness": 56.57
    },
    {
      "laplacian": 59.01,
      "brightness": 114.94
    },
    {
      "laplacian": 153.16,
      "brightness": 78.12
    },
    {
      "laplacian": 64.01,
      "brightness": 65.53
    },
    {
      "laplacian": 10.0,
      "brightness": 81.59
    },
    {
      "laplacian": 33.73,
      "brightness": 91.8
    },
    {
      "laplacian": 84.53,
      "brightness": 83.48
    },
    {
      "laplacian": 245.15,
      "brightness": 110.15
    },
    {
      "laplacian": 149.15,
      "brightness": 89.6
    },
    {
      "laplacian": 10.0,
      "brightness": 72.9
    },
    {
      "laplacian": 19.69,
      "brightness": 90.03
    },
    {
      "laplacian": 181.11,
      "brightness": 92.49
    },
    {
      "laplacian": 131.22,
      "brightness": 47.59
    },
    {
      "laplacian": 332.63,
      "brightness": 108.74
    },
    {
      "laplacian": 57.06,
      "brightness": 72.48
    },
    {
      "laplacian": 39.63,
      "brightness": 73.12
    },
    {
      "laplacian": 88.04,
      "brightness": 98.78
    },
    {
      "laplacian": 56.15,
      "brightness": 98.68
    },
    {
      "laplacian": 169.85,
      "brightness": 62.48
    },
    {
      "laplacian": 54.56,
      "brightness": 100.07
    },
    {
      "laplacian": 67.1,
      "brightness": 65.99
    },
    {
      "laplacian": 34.78,
      "brightness": 125.49
    },
    {
      "laplacian": 142.37,
      "brightness": 59.3
    },
    {
      "laplacian": 36.86,
      "brightness": 85.99
    },
    {
      "laplacian": 112.97,
      "brightness": 60.45
    },
    {
      "laplacian": 272.67,
      "brightness": 135.57
    },
    {
      "laplacian": 13.18,
      "brightness": 49.05
    },
    {
      "laplacian": 222.01,
      "brightness": 93.11
    },
    {
      "laplacian": 102.74,
      "brightness": 61.63
    },
    {
      "laplacian": 29.75,
      "brightness": 71.15
    },
    {
      "laplacian": 90.6,
      "brightness": 91.34
    },
    {
      "laplacian": 139.51,
      "brightness": 110.61
    },
    {
      "laplacian": 42.01,
      "brightness": 120.58
    },
    {
      "laplacian": 117.62,
      "brightness": 41.58
    },
    {
      "laplacian": 234.28,
      "brightness": 86.69
    },
    {
      "laplacian": 54.5,
      "brightness": 116.49
    },
    {
      "laplacian": 34.39,
      "brightness": 37.87
    },
    {
      "laplacian": 75.47,
      "brightness": 87.86
    },
    {
      "laplacian": 86.98,
      "brightness": 79.95
    },
    {
      "laplacian": 175.8,
      "brightness": 90.36
    },
    {
      "laplacian": 73.54,
      "brightness": 60.69
    },
    {
      "laplacian": 58.7,
      "brightness": 44.11
    },
    {
      "laplacian": 33.59,
      "brightness": 32.17
    },
    {
      "laplacian": 15.65,
      "brightness": 104.41
    },
    {
      "laplacian": 24.72,
      "brightness": 107.6
    },
    {
      "laplacian": 24.57,
      "brightness": 87.57
    },
    {
      "laplacian": 67.67,
      "brightness": 66.65
    },
    {
      "laplacian": 19.09,
      "brightness": 39.42
    },
    {
      "laplacian": 79.88,
      "brightness": 94.08
    },
    {
      "laplacian": 268.73,
      "brightness": 52.48
    },
    {
      "laplacian": 179.26,
      "brightness": 62.22
    },
    {
      "laplacian": 67.15,
      "brightness": 65.34
    },
    {
      "laplacian": 384.26,
      "brightness": 75.06
    },
    {
      "laplacian": 87.21,
      "brightness": 61.02
    },
    {
      "laplacian": 96.78,
      "brightness": 80.84
    },
    {
      "laplacian": 74.36,
      "brightness": 64.45
    },
    {
      "laplacian": 81.24,
      "brightness": 97.53
    },
    {
      "laplacian": 52.95,
      "brightness": 105.78
    },
    {
      "laplacian": 67.93,
      "brightness": 82.71
    },
    {
      "laplacian": 223.0,
      "brightness": 91.57
    },
    {
      "laplacian": 192.42,
      "brightness": 132.95
    },
    {
      "laplacian": 10.0,
      "brightness": 50.68
    },
    {
      "laplacian": 21.5,
      "brightness": 49.16
    },
    {
      "laplacian": 42.53,
      "brightness": 97.37
    },
    {
      "laplacian": 159.5,
      "brightness": 128.66
    },
    {
      "laplacian": 195.31,
      "brightness": 73.49
    },
    {
      "laplacian": 139.14,
      "brightness": 123.17
    },
    {
      "laplacian": 29.63,
      "brightness": 82.41
    },
    {
      "laplacian": 53.85,
      "brightness": 62.98
    },
    {
      "laplacian": 119.08,
      "brightness": 55.23
    },
    {
      "laplacian": 68.76,
      "brightness": 95.74
    },
    {
      "laplacian": 61.4,
      "brightness": 57.13
    },
    {
      "laplacian": 62.14,
      "brightness": 82.03
    },
    {
      "laplacian": 182.8,
      "brightness": 119.59
    },
    {
      "laplacian": 127.78,
      "brightness": 72.33
    },
    {
      "laplacian": 64.91,
      "brightness": 112.85
    },
    {
      "laplacian": 106.21,
      "brightness": 49.64
    },
    {
      "laplacian": 25.85,
      "brightness": 66.65
    },
    {
      "laplacian": 53.94,
      "brightness": 44.82
    },
    {
      "laplacian": 171.04,
      "brightness": 81.82
    },
    {
      "laplacian": 17.83,
      "brightness": 99.5
    },
    {
      "laplacian": 128.89,
      "brightness": 81.88
    },
    {
      "laplacian": 10.0,
      "brightness": 110.68
    },
    {
      "laplacian": 247.81,
      "brightness": 61.27
    },
    {
      "laplacian": 52.88,
      "brightness": 85.63
    },
    {
      "laplacian": 111.84,
      "brightness": 66.81
    },
    {
      "laplacian": 90.93,
      "brightness": 89.04
    },
    {
      "laplacian": 93.42,
      "brightness": 92.59
    },
    {
      "laplacian": 104.82,
      "brightness": 94.56
    },
    {
      "laplacian": 14.51,
      "brightness": 53.24
    },
    {
      "laplacian": 94.86,
      "brightness": 57.76
    },
    {
      "laplacian": 72.01,
      "brightness": 62.39
    },
    {
      "laplacian": 53.12,
      "brightness": 74.03
    },
    {
      "laplacian": 42.51,
      "brightness": 82.18
    },
    {
      "laplacian": 96.63,
      "brightness": 97.7
    },
    {
      "laplacian": 34.79,
      "brightness": 58.8
    },
    {
      "laplacian": 168.98,
      "brightness": 39.97
    },
    {
      "laplacian": 117.71,
      "brightness": 133.89
    },
    {
      "laplacian": 100.98,
      "brightness": 51.71
    },
    {
      "laplacian": 164.22,
      "brightness": 100.91
    },
    {
      "laplacian": 12.04,
      "brightness": 80.78
    },
    {
      "laplacian": 25.02,
      "brightness": 86.28
    },
    {
      "laplacian": 121.41,
      "brightness": 79.96
    },
    {
      "laplacian": 44.72,
      "brightness": 70.38
    },
    {
      "laplacian": 49.76,
      "brightness": 91.6
    },
    {
      "laplacian": 21.52,
      "brightness": 69.04
    },
    {
      "laplacian": 34.88,
      "brightness": 109.16
    },
    {
      "laplacian": 171.53,
      "brightness": 94.21
    },
    {
      "laplacian": 119.41,
      "brightness": 94.99
    },
    {
      "laplacian": 95.84,
      "brightness": 67.32
    },
    {
      "laplacian": 51.43,
      "brightness": 74.09
    },
    {
      "laplacian": 91.46,
      "brightness": 50.3
    },
    {
      "laplacian": 181.71,
      "brightness": 71.17
    },
    {
      "laplacian": 45.69,
      "brightness": 54.09
    },
    {
      "laplacian": 81.1,
      "brightness": 112.83
    },
    {
      "laplacian": 257.87,
      "brightness": 81.26
    },
    {
      "laplacian": 137.88,
      "brightness": 84.26
    },
    {
      "laplacian": 52.04,
      "brightness": 74.37
    },
    {
      "laplacian": 130.26,
      "brightness": 84.94
    },
    {
      "laplacian": 17.52,
      "brightness": 141.62
    },
    {
      "laplacian": 78.62,
      "brightness": 72.5
    },
    {
      "laplacian": 130.16,
      "brightness": 63.74
    },
    {
      "laplacian": 110.36,
      "brightness": 93.24
    },
    {
      "laplacian": 129.29,
      "brightness": 16.86
    },
    {
      "laplacian": 149.59,
      "brightness": 81.6
    },
    {
      "laplacian": 116.63,
      "brightness": 70.71
    },
    {
      "laplacian": 114.26,
      "brightness": 55.19
    },
    {
      "laplacian": 97.47,
      "brightness": 92.69
    },
    {
      "laplacian": 31.22,
      "brightness": 81.35
    },
    {
      "laplacian": 171.48,
      "brightness": 34.94
    },
    {
      "laplacian": 80.81,
      "brightness": 63.84
    },
    {
      "laplacian": 135.52,
      "brightness": 10.0
    },
    {
      "laplacian": 159.76,
      "brightness": 87.33
    },
    {
      "laplacian": 54.26,
      "brightness": 87.08
    },
    {
      "laplacian": 58.32,
      "brightness": 60.17
    },
    {
      "laplacian": 64.93,
      "brightness": 93.5
    },
    {
      "laplacian": 193.51,
      "brightness": 47.94
    },
    {
      "laplacian": 37.9,
      "brightness": 55.84
    },
    {
      "laplacian": 215.98,
      "brightness": 90.43
    },
    {
      "laplacian": 96.68,
      "brightness": 62.78
    },
    {
      "laplacian": 101.79,
      "brightness": 78.43
    },
    {
      "laplacian": 154.96,
      "brightness": 65.91
    },
    {
      "laplacian": 88.76,
      "brightness": 69.73
    },
    {
      "laplacian": 172.77,
      "brightness": 70.82
    },
    {
      "laplacian": 54.2,
      "brightness": 62.33
    },
    {
      "laplacian": 211.43,
      "brightness": 87.56
    },
    {
      "laplacian": 57.76,
      "brightness": 64.3
    },
    {
      "laplacian": 216.76,
      "brightness": 80.39
    },
    {
      "laplacian": 59.05,
      "brightness": 61.78
    },
    {
      "laplacian": 66.44,
      "brightness": 41.64
    },
    {
      "laplacian": 33.87,
      "brightness": 102.81
    },
    {
      "laplacian": 42.95,
      "brightness": 92.49
    },
    {
      "laplacian": 81.11,
      "brightness": 137.22
    },
    {
      "laplacian": 99.38,
      "brightness": 53.9
    },
    {
      "laplacian": 164.39,
      "brightness": 74.78
    },
    {
      "laplacian": 70.27,
      "brightness": 76.79
    },
    {
      "laplacian": 110.54,
      "brightness": 104.73
    },
    {
      "laplacian": 94.55,
      "brightness": 67.32
    },
    {
      "laplacian": 119.33,
      "brightness": 50.72
    },
    {
      "laplacian": 48.57,
      "brightness": 110.2
    },
    {
      "laplacian": 53.54,
      "brightness": 72.08
    },
    {
      "laplacian": 48.59,
      "brightness": 101.97
    },
    {
      "laplacian": 186.06,
      "brightness": 99.05
    },
    {
      "laplacian": 212.77,
      "brightness": 79.25
    },
    {
      "laplacian": 51.65,
      "brightness": 75.64
    },
    {
      "laplacian": 52.53,
      "brightness": 70.21
    },
    {
      "laplacian": 131.23,
      "brightness": 79.62
    },
    {
      "laplacian": 228.45,
      "brightness": 101.58
    },
    {
      "laplacian": 261.32,
      "brightness": 60.09
    },
    {
      "laplacian": 49.71,
      "brightness": 82.72
    },
    {
      "laplacian": 60.73,
      "brightness": 52.03
    },
    {
      "laplacian": 103.18,
      "brightness": 55.15
    },
    {
      "laplacian": 106.84,
      "brightness": 79.23
    },
    {
      "laplacian": 72.43,
      "brightness": 31.0
    },
    {
      "laplacian": 41.7,
      "brightness": 131.51
    },
    {
      "laplacian": 81.21,
      "brightness": 50.17
    }
  ]
};