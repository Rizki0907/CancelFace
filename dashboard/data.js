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
      "subset": "Gallery",
      "count": 15000
    },
    {
      "subset": "Mated Probe",
      "count": 15000
    },
    {
      "subset": "Training Set",
      "count": 50000
    },
    {
      "subset": "Unmated Probe",
      "count": 20000
    }
  ],
  "eda_subset_id": [
    {
      "subset": "Gallery",
      "count": 5258
    },
    {
      "subset": "Mated Probe",
      "count": 5258
    },
    {
      "subset": "Training Set",
      "count": 5319
    },
    {
      "subset": "Unmated Probe",
      "count": 5258
    }
  ],
  "eda_camera": [
    {
      "camera": "cam1",
      "count": 38300
    },
    {
      "camera": "cam2",
      "count": 35900
    },
    {
      "camera": "cam3",
      "count": 15900
    },
    {
      "camera": "cam4",
      "count": 3950
    },
    {
      "camera": "cam5",
      "count": 110
    },
    {
      "camera": "cam13",
      "count": 60
    },
    {
      "camera": "cam11",
      "count": 55
    },
    {
      "camera": "cam12",
      "count": 50
    },
    {
      "camera": "cam14",
      "count": 50
    },
    {
      "camera": "cam8",
      "count": 45
    },
    {
      "camera": "cam6",
      "count": 40
    },
    {
      "camera": "cam9",
      "count": 35
    },
    {
      "camera": "cam10",
      "count": 30
    },
    {
      "camera": "13",
      "count": 25
    },
    {
      "camera": "19",
      "count": 20
    },
    {
      "camera": "Lainnya",
      "count": 5500
    }
  ],
  "eda_quality": [
    {
      "laplacian": 71.58,
      "width": 33.5,
      "brightness": 86.96
    },
    {
      "laplacian": 40.94,
      "width": 46.4,
      "brightness": 38.61
    },
    {
      "laplacian": 37.26,
      "width": 38.1,
      "brightness": 65.63
    },
    {
      "laplacian": 37.26,
      "width": 13.1,
      "brightness": 81.1
    },
    {
      "laplacian": 153.55,
      "width": 88.7,
      "brightness": 125.73
    },
    {
      "laplacian": 88.3,
      "width": 81.1,
      "brightness": 46.97
    },
    {
      "laplacian": 29.18,
      "width": 30.9,
      "brightness": 105.33
    },
    {
      "laplacian": 74.25,
      "width": 23.5,
      "brightness": 117.19
    },
    {
      "laplacian": 57.92,
      "width": 13.4,
      "brightness": 60.4
    },
    {
      "laplacian": 3.21,
      "width": 48.3,
      "brightness": 70.23
    },
    {
      "laplacian": 15.16,
      "width": 48.5,
      "brightness": 48.98
    },
    {
      "laplacian": 61.6,
      "width": 17.8,
      "brightness": 72.3
    },
    {
      "laplacian": 142.95,
      "width": 38.4,
      "brightness": 76.98
    },
    {
      "laplacian": 37.58,
      "width": 54.2,
      "brightness": 96.47
    },
    {
      "laplacian": 26.88,
      "width": 22.4,
      "brightness": 108.53
    },
    {
      "laplacian": 51.62,
      "width": 28.4,
      "brightness": 57.05
    },
    {
      "laplacian": 25.23,
      "width": 28.2,
      "brightness": 22.91
    },
    {
      "laplacian": 35.16,
      "width": 18.6,
      "brightness": 77.41
    },
    {
      "laplacian": 46.09,
      "width": 28.8,
      "brightness": 86.22
    },
    {
      "laplacian": 14.26,
      "width": 10.0,
      "brightness": 84.98
    },
    {
      "laplacian": 91.99,
      "width": 27.2,
      "brightness": 68.85
    },
    {
      "laplacian": 11.3,
      "width": 27.5,
      "brightness": 81.49
    },
    {
      "laplacian": 55.7,
      "width": 31.2,
      "brightness": 120.43
    },
    {
      "laplacian": 86.4,
      "width": 44.3,
      "brightness": 88.69
    },
    {
      "laplacian": 54.47,
      "width": 12.5,
      "brightness": 67.55
    },
    {
      "laplacian": 41.85,
      "width": 14.5,
      "brightness": 63.99
    },
    {
      "laplacian": 34.83,
      "width": 18.3,
      "brightness": 73.24
    },
    {
      "laplacian": 29.46,
      "width": 11.5,
      "brightness": 123.83
    },
    {
      "laplacian": 108.86,
      "width": 47.5,
      "brightness": 72.87
    },
    {
      "laplacian": 62.12,
      "width": 21.7,
      "brightness": 77.45
    },
    {
      "laplacian": 31.93,
      "width": 31.8,
      "brightness": 64.5
    },
    {
      "laplacian": 23.1,
      "width": 17.1,
      "brightness": 108.77
    },
    {
      "laplacian": 78.4,
      "width": 25.2,
      "brightness": 132.88
    },
    {
      "laplacian": 106.89,
      "width": 39.6,
      "brightness": 90.62
    },
    {
      "laplacian": 99.57,
      "width": 40.9,
      "brightness": 80.32
    },
    {
      "laplacian": 18.99,
      "width": 15.0,
      "brightness": 79.03
    },
    {
      "laplacian": 34.54,
      "width": 30.8,
      "brightness": 11.24
    },
    {
      "laplacian": 28.87,
      "width": 17.4,
      "brightness": 98.86
    },
    {
      "laplacian": 39.1,
      "width": 30.0,
      "brightness": 81.76
    },
    {
      "laplacian": 91.31,
      "width": 20.4,
      "brightness": 89.99
    },
    {
      "laplacian": 133.21,
      "width": 92.1,
      "brightness": 58.08
    },
    {
      "laplacian": 64.1,
      "width": 54.0,
      "brightness": 67.24
    },
    {
      "laplacian": 23.98,
      "width": 42.0,
      "brightness": 66.49
    },
    {
      "laplacian": 45.14,
      "width": 26.7,
      "brightness": 106.61
    },
    {
      "laplacian": 152.16,
      "width": 55.0,
      "brightness": 67.39
    },
    {
      "laplacian": 50.53,
      "width": 31.4,
      "brightness": 136.31
    },
    {
      "laplacian": 34.9,
      "width": 86.5,
      "brightness": 90.06
    },
    {
      "laplacian": 37.8,
      "width": 58.4,
      "brightness": 42.28
    },
    {
      "laplacian": 63.86,
      "width": 25.1,
      "brightness": 74.4
    },
    {
      "laplacian": 19.73,
      "width": 80.7,
      "brightness": 59.75
    },
    {
      "laplacian": 28.17,
      "width": 26.8,
      "brightness": 16.56
    },
    {
      "laplacian": 98.44,
      "width": 95.3,
      "brightness": 122.79
    },
    {
      "laplacian": 62.36,
      "width": 83.2,
      "brightness": 97.69
    },
    {
      "laplacian": 50.99,
      "width": 39.5,
      "brightness": 92.93
    },
    {
      "laplacian": 102.27,
      "width": 10.0,
      "brightness": 82.63
    },
    {
      "laplacian": 22.43,
      "width": 37.5,
      "brightness": 39.3
    },
    {
      "laplacian": 33.89,
      "width": 13.8,
      "brightness": 64.46
    },
    {
      "laplacian": 60.67,
      "width": 20.8,
      "brightness": 101.57
    },
    {
      "laplacian": 58.88,
      "width": 22.0,
      "brightness": 48.57
    },
    {
      "laplacian": 8.34,
      "width": 13.7,
      "brightness": 7.11
    },
    {
      "laplacian": 30.75,
      "width": 37.6,
      "brightness": 71.64
    },
    {
      "laplacian": 40.04,
      "width": 19.1,
      "brightness": 74.03
    },
    {
      "laplacian": 66.39,
      "width": 27.7,
      "brightness": 81.8
    },
    {
      "laplacian": 58.7,
      "width": 22.1,
      "brightness": 98.4
    },
    {
      "laplacian": 43.52,
      "width": 44.4,
      "brightness": 95.85
    },
    {
      "laplacian": 3.17,
      "width": 42.4,
      "brightness": 85.25
    },
    {
      "laplacian": 45.53,
      "width": 26.2,
      "brightness": 111.47
    },
    {
      "laplacian": 49.32,
      "width": 45.8,
      "brightness": 35.47
    },
    {
      "laplacian": 254.49,
      "width": 67.9,
      "brightness": 92.13
    },
    {
      "laplacian": 38.84,
      "width": 10.0,
      "brightness": 95.54
    },
    {
      "laplacian": 60.95,
      "width": 21.2,
      "brightness": 43.29
    },
    {
      "laplacian": 115.5,
      "width": 15.9,
      "brightness": 35.92
    },
    {
      "laplacian": 87.28,
      "width": 19.9,
      "brightness": 57.11
    },
    {
      "laplacian": 137.3,
      "width": 10.0,
      "brightness": 59.48
    },
    {
      "laplacian": 8.52,
      "width": 10.0,
      "brightness": 99.1
    },
    {
      "laplacian": 15.62,
      "width": 10.0,
      "brightness": 60.79
    },
    {
      "laplacian": 26.23,
      "width": 22.7,
      "brightness": 54.02
    },
    {
      "laplacian": 6.62,
      "width": 22.2,
      "brightness": 60.87
    },
    {
      "laplacian": 49.69,
      "width": 73.8,
      "brightness": 109.32
    },
    {
      "laplacian": 17.15,
      "width": 35.7,
      "brightness": 78.37
    },
    {
      "laplacian": 150.77,
      "width": 45.1,
      "brightness": 72.98
    },
    {
      "laplacian": 20.35,
      "width": 120.0,
      "brightness": 74.92
    },
    {
      "laplacian": 34.09,
      "width": 10.0,
      "brightness": 114.18
    },
    {
      "laplacian": 91.38,
      "width": 87.4,
      "brightness": 57.02
    },
    {
      "laplacian": 11.13,
      "width": 31.5,
      "brightness": 114.83
    },
    {
      "laplacian": 5.97,
      "width": 24.0,
      "brightness": 83.89
    },
    {
      "laplacian": 55.11,
      "width": 21.5,
      "brightness": 73.51
    },
    {
      "laplacian": 58.82,
      "width": 40.3,
      "brightness": 148.03
    },
    {
      "laplacian": 89.25,
      "width": 24.1,
      "brightness": 48.44
    },
    {
      "laplacian": 73.04,
      "width": 13.4,
      "brightness": 68.1
    },
    {
      "laplacian": 60.71,
      "width": 22.1,
      "brightness": 43.49
    },
    {
      "laplacian": 23.02,
      "width": 41.1,
      "brightness": 104.67
    },
    {
      "laplacian": 57.44,
      "width": 50.1,
      "brightness": 125.3
    },
    {
      "laplacian": 60.51,
      "width": 92.8,
      "brightness": 124.76
    },
    {
      "laplacian": 22.11,
      "width": 34.7,
      "brightness": 112.27
    },
    {
      "laplacian": 182.6,
      "width": 70.3,
      "brightness": 72.47
    },
    {
      "laplacian": 70.28,
      "width": 28.4,
      "brightness": 67.77
    },
    {
      "laplacian": 15.95,
      "width": 31.1,
      "brightness": 31.21
    },
    {
      "laplacian": 89.6,
      "width": 30.0,
      "brightness": 135.0
    },
    {
      "laplacian": 101.89,
      "width": 37.5,
      "brightness": 91.13
    },
    {
      "laplacian": 66.87,
      "width": 55.7,
      "brightness": 64.23
    },
    {
      "laplacian": 36.85,
      "width": 23.4,
      "brightness": 115.19
    },
    {
      "laplacian": 21.09,
      "width": 16.6,
      "brightness": 50.76
    },
    {
      "laplacian": 43.41,
      "width": 58.5,
      "brightness": 89.39
    },
    {
      "laplacian": 63.01,
      "width": 55.9,
      "brightness": 73.17
    },
    {
      "laplacian": 47.23,
      "width": 77.1,
      "brightness": 95.88
    },
    {
      "laplacian": 141.85,
      "width": 20.9,
      "brightness": 76.22
    },
    {
      "laplacian": 79.25,
      "width": 27.7,
      "brightness": 37.37
    },
    {
      "laplacian": 18.57,
      "width": 59.8,
      "brightness": 80.12
    },
    {
      "laplacian": 14.01,
      "width": 23.2,
      "brightness": 107.37
    },
    {
      "laplacian": 70.77,
      "width": 48.8,
      "brightness": 77.18
    },
    {
      "laplacian": 37.66,
      "width": 28.5,
      "brightness": 99.7
    },
    {
      "laplacian": 84.81,
      "width": 40.2,
      "brightness": 48.73
    },
    {
      "laplacian": 70.24,
      "width": 13.2,
      "brightness": 77.26
    },
    {
      "laplacian": 43.59,
      "width": 34.4,
      "brightness": 60.51
    },
    {
      "laplacian": 18.81,
      "width": 67.1,
      "brightness": 98.92
    },
    {
      "laplacian": 7.05,
      "width": 52.9,
      "brightness": 78.88
    },
    {
      "laplacian": 56.54,
      "width": 15.7,
      "brightness": 97.32
    },
    {
      "laplacian": 10.88,
      "width": 88.4,
      "brightness": 108.46
    },
    {
      "laplacian": 17.95,
      "width": 64.6,
      "brightness": 97.37
    },
    {
      "laplacian": 53.63,
      "width": 13.7,
      "brightness": 85.65
    },
    {
      "laplacian": 49.23,
      "width": 22.2,
      "brightness": 50.05
    },
    {
      "laplacian": 12.66,
      "width": 14.3,
      "brightness": 77.92
    },
    {
      "laplacian": 110.84,
      "width": 40.9,
      "brightness": 63.07
    },
    {
      "laplacian": 108.61,
      "width": 21.5,
      "brightness": 68.37
    },
    {
      "laplacian": 72.64,
      "width": 10.0,
      "brightness": 67.51
    },
    {
      "laplacian": 72.57,
      "width": 31.0,
      "brightness": 50.56
    },
    {
      "laplacian": 72.64,
      "width": 57.1,
      "brightness": 23.19
    },
    {
      "laplacian": 101.21,
      "width": 34.9,
      "brightness": 59.29
    },
    {
      "laplacian": 80.85,
      "width": 46.0,
      "brightness": 83.41
    },
    {
      "laplacian": 20.61,
      "width": 37.1,
      "brightness": 40.25
    },
    {
      "laplacian": 37.16,
      "width": 51.5,
      "brightness": 78.44
    },
    {
      "laplacian": 235.12,
      "width": 39.3,
      "brightness": 131.21
    },
    {
      "laplacian": 3.55,
      "width": 29.9,
      "brightness": 106.65
    },
    {
      "laplacian": 29.1,
      "width": 34.6,
      "brightness": 124.02
    },
    {
      "laplacian": 111.3,
      "width": 78.8,
      "brightness": 88.95
    },
    {
      "laplacian": 22.08,
      "width": 47.7,
      "brightness": 110.69
    },
    {
      "laplacian": 82.62,
      "width": 15.7,
      "brightness": 57.73
    },
    {
      "laplacian": 48.66,
      "width": 34.2,
      "brightness": 59.96
    },
    {
      "laplacian": 23.8,
      "width": 40.5,
      "brightness": 5.0
    },
    {
      "laplacian": 55.19,
      "width": 29.2,
      "brightness": 111.21
    },
    {
      "laplacian": 20.12,
      "width": 10.0,
      "brightness": 121.13
    },
    {
      "laplacian": 41.88,
      "width": 17.0,
      "brightness": 62.51
    },
    {
      "laplacian": 72.06,
      "width": 24.2,
      "brightness": 70.89
    },
    {
      "laplacian": 94.96,
      "width": 94.5,
      "brightness": 56.89
    },
    {
      "laplacian": 29.01,
      "width": 44.5,
      "brightness": 88.71
    },
    {
      "laplacian": 23.75,
      "width": 10.0,
      "brightness": 109.5
    },
    {
      "laplacian": 10.64,
      "width": 30.5,
      "brightness": 29.2
    },
    {
      "laplacian": 98.62,
      "width": 71.4,
      "brightness": 89.46
    },
    {
      "laplacian": 211.51,
      "width": 21.2,
      "brightness": 70.25
    },
    {
      "laplacian": 107.0,
      "width": 61.2,
      "brightness": 81.18
    },
    {
      "laplacian": 125.59,
      "width": 10.0,
      "brightness": 90.85
    },
    {
      "laplacian": 22.28,
      "width": 10.0,
      "brightness": 72.73
    },
    {
      "laplacian": 68.59,
      "width": 66.9,
      "brightness": 75.1
    },
    {
      "laplacian": 88.77,
      "width": 23.3,
      "brightness": 72.01
    },
    {
      "laplacian": 14.93,
      "width": 24.7,
      "brightness": 105.17
    },
    {
      "laplacian": 2.65,
      "width": 36.9,
      "brightness": 89.73
    },
    {
      "laplacian": 10.02,
      "width": 43.5,
      "brightness": 84.18
    },
    {
      "laplacian": 41.34,
      "width": 10.0,
      "brightness": 42.41
    },
    {
      "laplacian": 29.3,
      "width": 20.0,
      "brightness": 67.4
    },
    {
      "laplacian": 66.44,
      "width": 33.8,
      "brightness": 103.16
    },
    {
      "laplacian": 98.04,
      "width": 43.4,
      "brightness": 79.06
    },
    {
      "laplacian": 38.45,
      "width": 15.5,
      "brightness": 96.47
    },
    {
      "laplacian": 49.35,
      "width": 28.1,
      "brightness": 127.46
    },
    {
      "laplacian": 3.32,
      "width": 21.2,
      "brightness": 107.08
    },
    {
      "laplacian": 126.74,
      "width": 37.7,
      "brightness": 80.61
    },
    {
      "laplacian": 83.08,
      "width": 65.4,
      "brightness": 63.69
    },
    {
      "laplacian": 49.8,
      "width": 25.6,
      "brightness": 6.5
    },
    {
      "laplacian": 28.65,
      "width": 10.6,
      "brightness": 73.29
    },
    {
      "laplacian": 56.22,
      "width": 19.2,
      "brightness": 68.87
    },
    {
      "laplacian": 24.61,
      "width": 87.8,
      "brightness": 88.93
    },
    {
      "laplacian": 32.93,
      "width": 17.0,
      "brightness": 73.69
    },
    {
      "laplacian": 64.12,
      "width": 12.5,
      "brightness": 69.03
    },
    {
      "laplacian": 76.56,
      "width": 24.5,
      "brightness": 28.18
    },
    {
      "laplacian": 74.79,
      "width": 30.5,
      "brightness": 51.68
    },
    {
      "laplacian": 22.22,
      "width": 22.2,
      "brightness": 91.35
    },
    {
      "laplacian": 4.2,
      "width": 10.0,
      "brightness": 126.05
    },
    {
      "laplacian": 11.3,
      "width": 40.1,
      "brightness": 75.27
    },
    {
      "laplacian": 151.05,
      "width": 37.7,
      "brightness": 87.18
    },
    {
      "laplacian": 30.14,
      "width": 50.3,
      "brightness": 104.67
    },
    {
      "laplacian": 47.19,
      "width": 37.2,
      "brightness": 55.29
    },
    {
      "laplacian": 99.55,
      "width": 83.5,
      "brightness": 88.27
    },
    {
      "laplacian": 37.08,
      "width": 52.8,
      "brightness": 57.27
    },
    {
      "laplacian": 94.14,
      "width": 46.3,
      "brightness": 102.22
    },
    {
      "laplacian": 35.91,
      "width": 66.9,
      "brightness": 82.24
    },
    {
      "laplacian": 24.87,
      "width": 35.7,
      "brightness": 86.36
    },
    {
      "laplacian": 187.64,
      "width": 28.6,
      "brightness": 56.09
    },
    {
      "laplacian": 109.48,
      "width": 39.8,
      "brightness": 97.8
    },
    {
      "laplacian": 120.48,
      "width": 10.0,
      "brightness": 136.37
    },
    {
      "laplacian": 11.71,
      "width": 35.8,
      "brightness": 49.78
    },
    {
      "laplacian": 22.51,
      "width": 30.5,
      "brightness": 68.49
    },
    {
      "laplacian": 46.29,
      "width": 42.7,
      "brightness": 84.49
    },
    {
      "laplacian": 34.55,
      "width": 61.4,
      "brightness": 100.02
    },
    {
      "laplacian": 90.72,
      "width": 47.2,
      "brightness": 62.33
    },
    {
      "laplacian": 78.53,
      "width": 19.3,
      "brightness": 5.0
    },
    {
      "laplacian": 133.35,
      "width": 55.3,
      "brightness": 116.06
    },
    {
      "laplacian": 30.34,
      "width": 84.2,
      "brightness": 99.29
    },
    {
      "laplacian": 56.04,
      "width": 62.3,
      "brightness": 29.2
    },
    {
      "laplacian": 116.42,
      "width": 11.5,
      "brightness": 60.99
    },
    {
      "laplacian": 28.93,
      "width": 46.8,
      "brightness": 121.91
    },
    {
      "laplacian": 23.45,
      "width": 13.0,
      "brightness": 118.54
    },
    {
      "laplacian": 133.55,
      "width": 26.6,
      "brightness": 104.28
    },
    {
      "laplacian": 152.67,
      "width": 41.9,
      "brightness": 73.07
    },
    {
      "laplacian": 34.79,
      "width": 38.4,
      "brightness": 80.32
    },
    {
      "laplacian": 46.47,
      "width": 61.6,
      "brightness": 74.33
    },
    {
      "laplacian": 125.95,
      "width": 84.5,
      "brightness": 109.59
    },
    {
      "laplacian": 88.52,
      "width": 44.6,
      "brightness": 53.48
    },
    {
      "laplacian": 7.93,
      "width": 25.2,
      "brightness": 55.44
    },
    {
      "laplacian": 18.87,
      "width": 10.0,
      "brightness": 106.29
    },
    {
      "laplacian": 49.74,
      "width": 71.2,
      "brightness": 76.76
    },
    {
      "laplacian": 103.36,
      "width": 30.6,
      "brightness": 116.6
    },
    {
      "laplacian": 70.27,
      "width": 31.7,
      "brightness": 59.2
    },
    {
      "laplacian": 49.05,
      "width": 33.4,
      "brightness": 76.47
    },
    {
      "laplacian": 30.38,
      "width": 43.3,
      "brightness": 52.17
    },
    {
      "laplacian": 181.98,
      "width": 44.1,
      "brightness": 78.21
    },
    {
      "laplacian": 42.04,
      "width": 26.9,
      "brightness": 36.6
    },
    {
      "laplacian": 102.83,
      "width": 30.4,
      "brightness": 64.35
    },
    {
      "laplacian": 40.18,
      "width": 20.9,
      "brightness": 37.78
    },
    {
      "laplacian": 9.19,
      "width": 19.2,
      "brightness": 97.43
    },
    {
      "laplacian": 64.14,
      "width": 19.2,
      "brightness": 98.06
    },
    {
      "laplacian": 86.62,
      "width": 30.1,
      "brightness": 29.55
    },
    {
      "laplacian": 143.96,
      "width": 16.5,
      "brightness": 115.35
    },
    {
      "laplacian": 43.56,
      "width": 10.0,
      "brightness": 147.93
    },
    {
      "laplacian": 35.5,
      "width": 24.9,
      "brightness": 79.29
    },
    {
      "laplacian": 60.63,
      "width": 12.1,
      "brightness": 60.05
    },
    {
      "laplacian": 13.5,
      "width": 35.0,
      "brightness": 157.08
    },
    {
      "laplacian": 59.62,
      "width": 20.9,
      "brightness": 41.07
    },
    {
      "laplacian": 59.77,
      "width": 43.6,
      "brightness": 78.56
    },
    {
      "laplacian": 42.13,
      "width": 13.1,
      "brightness": 83.03
    },
    {
      "laplacian": 44.31,
      "width": 10.0,
      "brightness": 115.66
    },
    {
      "laplacian": 147.61,
      "width": 30.4,
      "brightness": 88.07
    },
    {
      "laplacian": 61.51,
      "width": 24.2,
      "brightness": 64.04
    },
    {
      "laplacian": 34.41,
      "width": 11.2,
      "brightness": 51.37
    },
    {
      "laplacian": 8.99,
      "width": 52.8,
      "brightness": 68.43
    },
    {
      "laplacian": 73.84,
      "width": 15.0,
      "brightness": 49.81
    },
    {
      "laplacian": 19.26,
      "width": 18.6,
      "brightness": 79.34
    },
    {
      "laplacian": 34.73,
      "width": 59.1,
      "brightness": 62.2
    },
    {
      "laplacian": 51.81,
      "width": 45.3,
      "brightness": 36.17
    },
    {
      "laplacian": 150.89,
      "width": 13.7,
      "brightness": 113.14
    },
    {
      "laplacian": 106.56,
      "width": 25.7,
      "brightness": 64.07
    },
    {
      "laplacian": 54.22,
      "width": 12.6,
      "brightness": 42.49
    },
    {
      "laplacian": 145.09,
      "width": 56.5,
      "brightness": 73.29
    },
    {
      "laplacian": 95.8,
      "width": 56.5,
      "brightness": 79.91
    },
    {
      "laplacian": 4.72,
      "width": 91.9,
      "brightness": 29.1
    },
    {
      "laplacian": 141.02,
      "width": 113.4,
      "brightness": 87.29
    },
    {
      "laplacian": 55.86,
      "width": 20.7,
      "brightness": 48.68
    },
    {
      "laplacian": 1.68,
      "width": 50.9,
      "brightness": 125.91
    },
    {
      "laplacian": 103.22,
      "width": 10.0,
      "brightness": 92.67
    },
    {
      "laplacian": 62.46,
      "width": 36.8,
      "brightness": 66.8
    },
    {
      "laplacian": 46.03,
      "width": 42.8,
      "brightness": 57.14
    },
    {
      "laplacian": 90.22,
      "width": 15.7,
      "brightness": 75.06
    },
    {
      "laplacian": 46.4,
      "width": 19.7,
      "brightness": 95.16
    },
    {
      "laplacian": 66.34,
      "width": 56.7,
      "brightness": 77.29
    },
    {
      "laplacian": 41.56,
      "width": 43.5,
      "brightness": 71.92
    },
    {
      "laplacian": 43.49,
      "width": 85.0,
      "brightness": 79.63
    },
    {
      "laplacian": 13.43,
      "width": 79.1,
      "brightness": 61.09
    },
    {
      "laplacian": 71.07,
      "width": 10.0,
      "brightness": 68.39
    },
    {
      "laplacian": 203.67,
      "width": 22.2,
      "brightness": 19.6
    },
    {
      "laplacian": 34.18,
      "width": 14.4,
      "brightness": 105.26
    },
    {
      "laplacian": 19.56,
      "width": 52.3,
      "brightness": 86.37
    },
    {
      "laplacian": 26.44,
      "width": 39.2,
      "brightness": 56.34
    },
    {
      "laplacian": 8.08,
      "width": 15.2,
      "brightness": 131.16
    },
    {
      "laplacian": 38.87,
      "width": 17.2,
      "brightness": 80.44
    },
    {
      "laplacian": 42.4,
      "width": 68.6,
      "brightness": 48.99
    },
    {
      "laplacian": 48.51,
      "width": 24.1,
      "brightness": 101.99
    },
    {
      "laplacian": 93.96,
      "width": 10.0,
      "brightness": 89.15
    },
    {
      "laplacian": 24.67,
      "width": 14.1,
      "brightness": 89.05
    },
    {
      "laplacian": 26.79,
      "width": 95.6,
      "brightness": 66.08
    },
    {
      "laplacian": 11.18,
      "width": 60.2,
      "brightness": 90.61
    },
    {
      "laplacian": 24.49,
      "width": 11.9,
      "brightness": 70.67
    },
    {
      "laplacian": 1.58,
      "width": 36.8,
      "brightness": 93.57
    },
    {
      "laplacian": 93.96,
      "width": 57.9,
      "brightness": 24.66
    },
    {
      "laplacian": 15.67,
      "width": 10.0,
      "brightness": 65.85
    },
    {
      "laplacian": 16.0,
      "width": 61.9,
      "brightness": 126.22
    },
    {
      "laplacian": 50.19,
      "width": 43.2,
      "brightness": 56.52
    },
    {
      "laplacian": 19.68,
      "width": 18.9,
      "brightness": 61.09
    },
    {
      "laplacian": 17.48,
      "width": 47.7,
      "brightness": 65.46
    },
    {
      "laplacian": 14.19,
      "width": 39.5,
      "brightness": 43.99
    },
    {
      "laplacian": 23.72,
      "width": 41.3,
      "brightness": 16.17
    },
    {
      "laplacian": 56.74,
      "width": 35.9,
      "brightness": 71.54
    },
    {
      "laplacian": 98.1,
      "width": 16.7,
      "brightness": 81.8
    },
    {
      "laplacian": 18.18,
      "width": 19.2,
      "brightness": 76.53
    },
    {
      "laplacian": 46.52,
      "width": 27.5,
      "brightness": 73.94
    },
    {
      "laplacian": 30.1,
      "width": 33.5,
      "brightness": 79.21
    },
    {
      "laplacian": 153.82,
      "width": 49.5,
      "brightness": 106.64
    },
    {
      "laplacian": 136.67,
      "width": 97.0,
      "brightness": 72.67
    },
    {
      "laplacian": 9.87,
      "width": 37.9,
      "brightness": 61.93
    },
    {
      "laplacian": 47.87,
      "width": 49.0,
      "brightness": 70.13
    },
    {
      "laplacian": 52.39,
      "width": 56.1,
      "brightness": 94.22
    },
    {
      "laplacian": 29.54,
      "width": 51.2,
      "brightness": 117.54
    },
    {
      "laplacian": 24.51,
      "width": 16.2,
      "brightness": 60.41
    },
    {
      "laplacian": 19.24,
      "width": 72.6,
      "brightness": 80.77
    },
    {
      "laplacian": 26.85,
      "width": 65.8,
      "brightness": 87.47
    },
    {
      "laplacian": 82.94,
      "width": 35.6,
      "brightness": 50.21
    },
    {
      "laplacian": 65.64,
      "width": 16.9,
      "brightness": 78.57
    },
    {
      "laplacian": 43.09,
      "width": 33.2,
      "brightness": 36.96
    },
    {
      "laplacian": 21.85,
      "width": 10.0,
      "brightness": 28.47
    },
    {
      "laplacian": 27.23,
      "width": 78.3,
      "brightness": 88.27
    },
    {
      "laplacian": 202.32,
      "width": 20.5,
      "brightness": 67.25
    },
    {
      "laplacian": 157.44,
      "width": 26.5,
      "brightness": 83.66
    },
    {
      "laplacian": 26.28,
      "width": 75.0,
      "brightness": 77.5
    },
    {
      "laplacian": 15.38,
      "width": 69.6,
      "brightness": 50.66
    },
    {
      "laplacian": 29.52,
      "width": 40.5,
      "brightness": 76.73
    },
    {
      "laplacian": 34.63,
      "width": 85.3,
      "brightness": 43.47
    },
    {
      "laplacian": 12.72,
      "width": 15.8,
      "brightness": 116.95
    },
    {
      "laplacian": 59.22,
      "width": 40.6,
      "brightness": 40.03
    },
    {
      "laplacian": 40.54,
      "width": 15.9,
      "brightness": 72.52
    },
    {
      "laplacian": 31.18,
      "width": 63.4,
      "brightness": 48.82
    },
    {
      "laplacian": 25.19,
      "width": 62.0,
      "brightness": 93.97
    },
    {
      "laplacian": 87.82,
      "width": 89.0,
      "brightness": 68.72
    },
    {
      "laplacian": 21.87,
      "width": 32.5,
      "brightness": 63.48
    },
    {
      "laplacian": 250.58,
      "width": 103.7,
      "brightness": 101.89
    },
    {
      "laplacian": 54.39,
      "width": 14.8,
      "brightness": 78.82
    },
    {
      "laplacian": 50.64,
      "width": 31.3,
      "brightness": 92.47
    },
    {
      "laplacian": 71.09,
      "width": 15.3,
      "brightness": 50.52
    },
    {
      "laplacian": 153.64,
      "width": 37.0,
      "brightness": 38.67
    },
    {
      "laplacian": 25.41,
      "width": 16.3,
      "brightness": 81.0
    },
    {
      "laplacian": 76.98,
      "width": 63.5,
      "brightness": 69.07
    },
    {
      "laplacian": 74.31,
      "width": 44.2,
      "brightness": 95.54
    },
    {
      "laplacian": 107.18,
      "width": 13.9,
      "brightness": 75.76
    },
    {
      "laplacian": 35.94,
      "width": 54.6,
      "brightness": 83.74
    },
    {
      "laplacian": 100.75,
      "width": 81.8,
      "brightness": 32.55
    },
    {
      "laplacian": 23.12,
      "width": 46.9,
      "brightness": 130.88
    },
    {
      "laplacian": 6.28,
      "width": 10.7,
      "brightness": 73.4
    },
    {
      "laplacian": 47.36,
      "width": 29.3,
      "brightness": 97.53
    },
    {
      "laplacian": 96.82,
      "width": 50.7,
      "brightness": 54.59
    },
    {
      "laplacian": 50.92,
      "width": 27.4,
      "brightness": 86.62
    },
    {
      "laplacian": 54.17,
      "width": 14.7,
      "brightness": 41.52
    },
    {
      "laplacian": 75.82,
      "width": 67.9,
      "brightness": 90.66
    },
    {
      "laplacian": 72.32,
      "width": 26.6,
      "brightness": 68.03
    },
    {
      "laplacian": 123.96,
      "width": 81.8,
      "brightness": 78.82
    },
    {
      "laplacian": 28.62,
      "width": 22.3,
      "brightness": 97.54
    },
    {
      "laplacian": 66.38,
      "width": 25.5,
      "brightness": 43.49
    },
    {
      "laplacian": 147.01,
      "width": 21.1,
      "brightness": 58.83
    },
    {
      "laplacian": 66.28,
      "width": 29.0,
      "brightness": 90.81
    },
    {
      "laplacian": 127.28,
      "width": 43.7,
      "brightness": 136.75
    },
    {
      "laplacian": 29.97,
      "width": 15.3,
      "brightness": 74.13
    },
    {
      "laplacian": 101.92,
      "width": 13.1,
      "brightness": 94.55
    },
    {
      "laplacian": 102.63,
      "width": 10.0,
      "brightness": 75.0
    },
    {
      "laplacian": 5.7,
      "width": 10.0,
      "brightness": 132.38
    },
    {
      "laplacian": 59.89,
      "width": 10.8,
      "brightness": 29.08
    },
    {
      "laplacian": 54.43,
      "width": 22.2,
      "brightness": 80.65
    },
    {
      "laplacian": 92.88,
      "width": 36.6,
      "brightness": 32.48
    },
    {
      "laplacian": 54.91,
      "width": 42.2,
      "brightness": 7.82
    },
    {
      "laplacian": 279.4,
      "width": 35.5,
      "brightness": 86.33
    },
    {
      "laplacian": 173.78,
      "width": 76.2,
      "brightness": 81.91
    },
    {
      "laplacian": 77.1,
      "width": 91.0,
      "brightness": 70.02
    },
    {
      "laplacian": 58.33,
      "width": 26.7,
      "brightness": 75.03
    },
    {
      "laplacian": 12.71,
      "width": 15.5,
      "brightness": 164.75
    },
    {
      "laplacian": 55.07,
      "width": 107.6,
      "brightness": 70.77
    },
    {
      "laplacian": 51.13,
      "width": 66.5,
      "brightness": 92.28
    },
    {
      "laplacian": 264.72,
      "width": 63.5,
      "brightness": 59.82
    },
    {
      "laplacian": 73.16,
      "width": 21.6,
      "brightness": 86.27
    },
    {
      "laplacian": 109.92,
      "width": 55.5,
      "brightness": 71.33
    },
    {
      "laplacian": 25.74,
      "width": 35.7,
      "brightness": 66.51
    },
    {
      "laplacian": 94.02,
      "width": 30.9,
      "brightness": 128.93
    },
    {
      "laplacian": 1.07,
      "width": 30.9,
      "brightness": 110.96
    },
    {
      "laplacian": 125.86,
      "width": 45.0,
      "brightness": 81.83
    },
    {
      "laplacian": 19.48,
      "width": 77.7,
      "brightness": 13.48
    },
    {
      "laplacian": 12.98,
      "width": 112.9,
      "brightness": 67.89
    },
    {
      "laplacian": 40.52,
      "width": 24.4,
      "brightness": 153.68
    },
    {
      "laplacian": 90.76,
      "width": 37.0,
      "brightness": 71.54
    },
    {
      "laplacian": 40.2,
      "width": 30.4,
      "brightness": 108.89
    },
    {
      "laplacian": 15.07,
      "width": 43.1,
      "brightness": 118.37
    },
    {
      "laplacian": 72.74,
      "width": 27.8,
      "brightness": 84.13
    },
    {
      "laplacian": 39.91,
      "width": 19.8,
      "brightness": 54.43
    },
    {
      "laplacian": 23.09,
      "width": 24.4,
      "brightness": 9.81
    },
    {
      "laplacian": 53.42,
      "width": 21.8,
      "brightness": 97.16
    },
    {
      "laplacian": 41.88,
      "width": 29.4,
      "brightness": 55.19
    },
    {
      "laplacian": 53.69,
      "width": 11.5,
      "brightness": 82.93
    },
    {
      "laplacian": 269.04,
      "width": 22.1,
      "brightness": 43.01
    },
    {
      "laplacian": 13.32,
      "width": 42.8,
      "brightness": 70.57
    },
    {
      "laplacian": 136.04,
      "width": 42.6,
      "brightness": 78.94
    },
    {
      "laplacian": 12.04,
      "width": 38.4,
      "brightness": 85.52
    },
    {
      "laplacian": 56.03,
      "width": 73.7,
      "brightness": 46.78
    },
    {
      "laplacian": 40.49,
      "width": 43.9,
      "brightness": 111.51
    },
    {
      "laplacian": 73.38,
      "width": 72.2,
      "brightness": 61.29
    },
    {
      "laplacian": 32.71,
      "width": 112.9,
      "brightness": 31.11
    },
    {
      "laplacian": 43.72,
      "width": 56.3,
      "brightness": 74.95
    },
    {
      "laplacian": 42.92,
      "width": 11.5,
      "brightness": 78.96
    },
    {
      "laplacian": 47.97,
      "width": 39.4,
      "brightness": 82.5
    },
    {
      "laplacian": 51.06,
      "width": 35.7,
      "brightness": 116.14
    },
    {
      "laplacian": 41.26,
      "width": 81.7,
      "brightness": 71.38
    },
    {
      "laplacian": 33.1,
      "width": 30.1,
      "brightness": 74.65
    },
    {
      "laplacian": 37.45,
      "width": 17.8,
      "brightness": 47.11
    },
    {
      "laplacian": 57.56,
      "width": 23.1,
      "brightness": 100.98
    },
    {
      "laplacian": 58.46,
      "width": 11.9,
      "brightness": 83.16
    },
    {
      "laplacian": 23.64,
      "width": 10.0,
      "brightness": 66.24
    },
    {
      "laplacian": 16.75,
      "width": 102.2,
      "brightness": 24.67
    },
    {
      "laplacian": 5.31,
      "width": 32.9,
      "brightness": 118.44
    },
    {
      "laplacian": 171.97,
      "width": 12.9,
      "brightness": 43.62
    },
    {
      "laplacian": 10.95,
      "width": 86.2,
      "brightness": 61.44
    },
    {
      "laplacian": 19.54,
      "width": 95.0,
      "brightness": 88.03
    },
    {
      "laplacian": 87.57,
      "width": 36.5,
      "brightness": 44.5
    },
    {
      "laplacian": 8.37,
      "width": 11.0,
      "brightness": 36.18
    },
    {
      "laplacian": 26.86,
      "width": 23.5,
      "brightness": 18.53
    },
    {
      "laplacian": 102.51,
      "width": 27.9,
      "brightness": 98.19
    },
    {
      "laplacian": 45.34,
      "width": 33.7,
      "brightness": 62.73
    },
    {
      "laplacian": 215.45,
      "width": 14.3,
      "brightness": 159.96
    },
    {
      "laplacian": 82.15,
      "width": 59.2,
      "brightness": 50.16
    },
    {
      "laplacian": 10.2,
      "width": 10.0,
      "brightness": 52.2
    },
    {
      "laplacian": 51.16,
      "width": 65.2,
      "brightness": 62.17
    },
    {
      "laplacian": 5.73,
      "width": 73.7,
      "brightness": 84.81
    },
    {
      "laplacian": 74.8,
      "width": 25.2,
      "brightness": 64.83
    },
    {
      "laplacian": 29.19,
      "width": 31.1,
      "brightness": 95.15
    },
    {
      "laplacian": 73.34,
      "width": 79.3,
      "brightness": 50.6
    },
    {
      "laplacian": 157.53,
      "width": 49.5,
      "brightness": 39.32
    },
    {
      "laplacian": 152.72,
      "width": 25.8,
      "brightness": 27.65
    },
    {
      "laplacian": 40.16,
      "width": 28.0,
      "brightness": 15.74
    },
    {
      "laplacian": 90.91,
      "width": 45.2,
      "brightness": 63.49
    },
    {
      "laplacian": 33.19,
      "width": 96.7,
      "brightness": 69.57
    },
    {
      "laplacian": 55.78,
      "width": 28.6,
      "brightness": 60.32
    },
    {
      "laplacian": 6.93,
      "width": 25.2,
      "brightness": 112.82
    },
    {
      "laplacian": 19.97,
      "width": 33.5,
      "brightness": 112.38
    },
    {
      "laplacian": 76.12,
      "width": 33.6,
      "brightness": 68.63
    },
    {
      "laplacian": 4.51,
      "width": 40.2,
      "brightness": 27.77
    },
    {
      "laplacian": 50.91,
      "width": 31.2,
      "brightness": 62.13
    },
    {
      "laplacian": 54.84,
      "width": 67.6,
      "brightness": 61.21
    },
    {
      "laplacian": 78.15,
      "width": 16.7,
      "brightness": 59.6
    },
    {
      "laplacian": 6.99,
      "width": 43.1,
      "brightness": 58.46
    },
    {
      "laplacian": 5.12,
      "width": 44.2,
      "brightness": 59.7
    },
    {
      "laplacian": 103.63,
      "width": 17.9,
      "brightness": 67.18
    },
    {
      "laplacian": 54.88,
      "width": 42.8,
      "brightness": 60.2
    },
    {
      "laplacian": 33.64,
      "width": 44.9,
      "brightness": 83.83
    },
    {
      "laplacian": 6.53,
      "width": 10.0,
      "brightness": 88.09
    },
    {
      "laplacian": 31.42,
      "width": 15.5,
      "brightness": 52.5
    },
    {
      "laplacian": 13.68,
      "width": 83.4,
      "brightness": 113.59
    },
    {
      "laplacian": 99.45,
      "width": 21.3,
      "brightness": 50.56
    },
    {
      "laplacian": 9.72,
      "width": 12.9,
      "brightness": 32.7
    },
    {
      "laplacian": 37.56,
      "width": 10.0,
      "brightness": 88.66
    },
    {
      "laplacian": 91.59,
      "width": 14.4,
      "brightness": 55.11
    },
    {
      "laplacian": 78.82,
      "width": 30.3,
      "brightness": 87.0
    },
    {
      "laplacian": 29.68,
      "width": 12.1,
      "brightness": 10.7
    },
    {
      "laplacian": 79.7,
      "width": 49.9,
      "brightness": 116.99
    },
    {
      "laplacian": 91.71,
      "width": 17.7,
      "brightness": 96.82
    },
    {
      "laplacian": 52.69,
      "width": 40.4,
      "brightness": 35.99
    },
    {
      "laplacian": 68.75,
      "width": 76.2,
      "brightness": 36.59
    },
    {
      "laplacian": 38.05,
      "width": 73.4,
      "brightness": 124.82
    },
    {
      "laplacian": 114.42,
      "width": 39.9,
      "brightness": 57.35
    },
    {
      "laplacian": 43.28,
      "width": 13.6,
      "brightness": 54.64
    },
    {
      "laplacian": 8.48,
      "width": 31.7,
      "brightness": 14.55
    },
    {
      "laplacian": 71.83,
      "width": 40.8,
      "brightness": 68.18
    },
    {
      "laplacian": 14.56,
      "width": 120.0,
      "brightness": 71.62
    },
    {
      "laplacian": 126.52,
      "width": 10.0,
      "brightness": 98.03
    },
    {
      "laplacian": 66.86,
      "width": 31.8,
      "brightness": 38.83
    },
    {
      "laplacian": 3.09,
      "width": 48.8,
      "brightness": 35.43
    },
    {
      "laplacian": 95.09,
      "width": 35.3,
      "brightness": 90.63
    },
    {
      "laplacian": 59.99,
      "width": 37.9,
      "brightness": 106.19
    },
    {
      "laplacian": 84.77,
      "width": 18.5,
      "brightness": 34.01
    },
    {
      "laplacian": 48.73,
      "width": 58.6,
      "brightness": 108.28
    },
    {
      "laplacian": 121.97,
      "width": 33.7,
      "brightness": 79.05
    },
    {
      "laplacian": 22.93,
      "width": 37.8,
      "brightness": 108.57
    },
    {
      "laplacian": 98.76,
      "width": 62.5,
      "brightness": 76.03
    },
    {
      "laplacian": 61.58,
      "width": 26.4,
      "brightness": 7.38
    },
    {
      "laplacian": 5.19,
      "width": 70.9,
      "brightness": 73.74
    },
    {
      "laplacian": 4.46,
      "width": 11.7,
      "brightness": 107.68
    },
    {
      "laplacian": 34.86,
      "width": 39.3,
      "brightness": 52.98
    },
    {
      "laplacian": 19.82,
      "width": 17.6,
      "brightness": 67.14
    },
    {
      "laplacian": 3.06,
      "width": 14.2,
      "brightness": 73.07
    },
    {
      "laplacian": 11.52,
      "width": 96.0,
      "brightness": 5.0
    },
    {
      "laplacian": 39.87,
      "width": 12.3,
      "brightness": 124.8
    },
    {
      "laplacian": 19.31,
      "width": 34.1,
      "brightness": 52.76
    },
    {
      "laplacian": 234.49,
      "width": 11.5,
      "brightness": 92.16
    },
    {
      "laplacian": 23.46,
      "width": 68.3,
      "brightness": 75.57
    },
    {
      "laplacian": 117.43,
      "width": 24.5,
      "brightness": 113.21
    },
    {
      "laplacian": 157.59,
      "width": 62.3,
      "brightness": 89.37
    },
    {
      "laplacian": 27.69,
      "width": 47.7,
      "brightness": 71.42
    },
    {
      "laplacian": 25.28,
      "width": 114.5,
      "brightness": 52.98
    },
    {
      "laplacian": 28.35,
      "width": 10.0,
      "brightness": 100.34
    },
    {
      "laplacian": 39.77,
      "width": 15.4,
      "brightness": 25.54
    },
    {
      "laplacian": 32.32,
      "width": 60.2,
      "brightness": 96.08
    },
    {
      "laplacian": 12.11,
      "width": 40.5,
      "brightness": 47.23
    },
    {
      "laplacian": 63.14,
      "width": 27.7,
      "brightness": 113.06
    },
    {
      "laplacian": 32.22,
      "width": 102.0,
      "brightness": 82.52
    },
    {
      "laplacian": 240.58,
      "width": 32.5,
      "brightness": 96.04
    },
    {
      "laplacian": 100.04,
      "width": 18.1,
      "brightness": 80.3
    },
    {
      "laplacian": 32.69,
      "width": 62.7,
      "brightness": 28.93
    },
    {
      "laplacian": 76.71,
      "width": 33.3,
      "brightness": 53.9
    },
    {
      "laplacian": 74.31,
      "width": 35.0,
      "brightness": 96.83
    },
    {
      "laplacian": 110.89,
      "width": 50.3,
      "brightness": 82.67
    },
    {
      "laplacian": 4.55,
      "width": 51.6,
      "brightness": 111.07
    },
    {
      "laplacian": 10.7,
      "width": 15.2,
      "brightness": 89.29
    },
    {
      "laplacian": 18.95,
      "width": 26.6,
      "brightness": 50.93
    },
    {
      "laplacian": 46.31,
      "width": 10.6,
      "brightness": 55.71
    },
    {
      "laplacian": 18.26,
      "width": 40.9,
      "brightness": 80.88
    },
    {
      "laplacian": 28.55,
      "width": 95.0,
      "brightness": 13.21
    },
    {
      "laplacian": 107.88,
      "width": 15.7,
      "brightness": 124.86
    },
    {
      "laplacian": 76.71,
      "width": 10.0,
      "brightness": 90.37
    },
    {
      "laplacian": 32.8,
      "width": 20.4,
      "brightness": 112.36
    },
    {
      "laplacian": 91.85,
      "width": 27.6,
      "brightness": 33.74
    },
    {
      "laplacian": 72.19,
      "width": 51.9,
      "brightness": 112.85
    },
    {
      "laplacian": 135.48,
      "width": 25.6,
      "brightness": 140.48
    },
    {
      "laplacian": 80.68,
      "width": 41.4,
      "brightness": 41.02
    },
    {
      "laplacian": 39.81,
      "width": 22.7,
      "brightness": 99.6
    },
    {
      "laplacian": 53.3,
      "width": 28.6,
      "brightness": 78.03
    },
    {
      "laplacian": 64.48,
      "width": 17.7,
      "brightness": 34.76
    },
    {
      "laplacian": 31.65,
      "width": 13.6,
      "brightness": 91.8
    },
    {
      "laplacian": 55.42,
      "width": 53.0,
      "brightness": 101.34
    },
    {
      "laplacian": 48.7,
      "width": 23.9,
      "brightness": 61.17
    },
    {
      "laplacian": 80.48,
      "width": 43.3,
      "brightness": 110.65
    },
    {
      "laplacian": 216.41,
      "width": 17.5,
      "brightness": 31.33
    },
    {
      "laplacian": 58.29,
      "width": 32.7,
      "brightness": 36.15
    },
    {
      "laplacian": 153.38,
      "width": 10.0,
      "brightness": 81.82
    },
    {
      "laplacian": 78.17,
      "width": 25.2,
      "brightness": 78.71
    },
    {
      "laplacian": 55.2,
      "width": 18.9,
      "brightness": 57.94
    },
    {
      "laplacian": 29.91,
      "width": 66.6,
      "brightness": 100.67
    },
    {
      "laplacian": 55.56,
      "width": 11.9,
      "brightness": 92.87
    },
    {
      "laplacian": 52.65,
      "width": 29.5,
      "brightness": 102.03
    },
    {
      "laplacian": 22.48,
      "width": 40.6,
      "brightness": 74.55
    },
    {
      "laplacian": 26.44,
      "width": 60.9,
      "brightness": 94.87
    },
    {
      "laplacian": 64.93,
      "width": 55.8,
      "brightness": 65.52
    },
    {
      "laplacian": 152.25,
      "width": 31.1,
      "brightness": 135.51
    },
    {
      "laplacian": 43.88,
      "width": 34.1,
      "brightness": 55.25
    },
    {
      "laplacian": 7.9,
      "width": 66.6,
      "brightness": 136.95
    },
    {
      "laplacian": 14.99,
      "width": 30.7,
      "brightness": 78.98
    },
    {
      "laplacian": 84.45,
      "width": 36.6,
      "brightness": 39.49
    },
    {
      "laplacian": 10.33,
      "width": 67.9,
      "brightness": 116.31
    },
    {
      "laplacian": 95.42,
      "width": 120.0,
      "brightness": 81.53
    },
    {
      "laplacian": 80.77,
      "width": 38.7,
      "brightness": 101.83
    },
    {
      "laplacian": 42.51,
      "width": 45.8,
      "brightness": 112.27
    },
    {
      "laplacian": 22.7,
      "width": 54.8,
      "brightness": 87.46
    },
    {
      "laplacian": 37.0,
      "width": 67.5,
      "brightness": 61.42
    },
    {
      "laplacian": 63.59,
      "width": 61.9,
      "brightness": 105.32
    },
    {
      "laplacian": 10.79,
      "width": 21.4,
      "brightness": 78.02
    },
    {
      "laplacian": 140.96,
      "width": 40.4,
      "brightness": 97.2
    },
    {
      "laplacian": 63.1,
      "width": 62.1,
      "brightness": 17.7
    },
    {
      "laplacian": 69.31,
      "width": 76.3,
      "brightness": 90.52
    },
    {
      "laplacian": 80.31,
      "width": 29.5,
      "brightness": 60.12
    },
    {
      "laplacian": 130.87,
      "width": 39.8,
      "brightness": 124.29
    },
    {
      "laplacian": 55.68,
      "width": 42.8,
      "brightness": 95.45
    },
    {
      "laplacian": 84.49,
      "width": 33.4,
      "brightness": 84.72
    },
    {
      "laplacian": 23.12,
      "width": 39.1,
      "brightness": 91.62
    },
    {
      "laplacian": 175.73,
      "width": 120.0,
      "brightness": 50.04
    },
    {
      "laplacian": 52.42,
      "width": 28.7,
      "brightness": 123.45
    },
    {
      "laplacian": 22.99,
      "width": 30.2,
      "brightness": 133.76
    },
    {
      "laplacian": 29.92,
      "width": 10.0,
      "brightness": 89.0
    },
    {
      "laplacian": 3.38,
      "width": 10.0,
      "brightness": 122.53
    },
    {
      "laplacian": 29.73,
      "width": 44.8,
      "brightness": 62.06
    },
    {
      "laplacian": 1.0,
      "width": 62.3,
      "brightness": 55.68
    },
    {
      "laplacian": 89.52,
      "width": 55.4,
      "brightness": 79.15
    },
    {
      "laplacian": 67.57,
      "width": 17.4,
      "brightness": 90.18
    },
    {
      "laplacian": 16.12,
      "width": 53.3,
      "brightness": 66.97
    },
    {
      "laplacian": 44.64,
      "width": 29.9,
      "brightness": 93.06
    },
    {
      "laplacian": 46.51,
      "width": 25.0,
      "brightness": 86.58
    },
    {
      "laplacian": 12.38,
      "width": 10.9,
      "brightness": 50.05
    },
    {
      "laplacian": 37.76,
      "width": 19.1,
      "brightness": 92.53
    },
    {
      "laplacian": 47.84,
      "width": 45.4,
      "brightness": 102.18
    },
    {
      "laplacian": 36.78,
      "width": 40.1,
      "brightness": 82.8
    },
    {
      "laplacian": 22.97,
      "width": 36.4,
      "brightness": 110.27
    },
    {
      "laplacian": 15.39,
      "width": 10.0,
      "brightness": 43.91
    },
    {
      "laplacian": 35.54,
      "width": 36.6,
      "brightness": 91.1
    },
    {
      "laplacian": 26.08,
      "width": 21.2,
      "brightness": 45.23
    },
    {
      "laplacian": 76.03,
      "width": 40.3,
      "brightness": 46.81
    },
    {
      "laplacian": 136.99,
      "width": 68.8,
      "brightness": 60.33
    },
    {
      "laplacian": 99.1,
      "width": 23.6,
      "brightness": 51.62
    },
    {
      "laplacian": 49.29,
      "width": 34.8,
      "brightness": 62.66
    },
    {
      "laplacian": 23.92,
      "width": 101.7,
      "brightness": 72.0
    },
    {
      "laplacian": 97.01,
      "width": 39.0,
      "brightness": 101.44
    },
    {
      "laplacian": 79.84,
      "width": 32.0,
      "brightness": 69.01
    },
    {
      "laplacian": 129.86,
      "width": 17.7,
      "brightness": 33.6
    },
    {
      "laplacian": 55.74,
      "width": 54.3,
      "brightness": 109.92
    },
    {
      "laplacian": 169.03,
      "width": 15.4,
      "brightness": 54.56
    },
    {
      "laplacian": 55.75,
      "width": 70.6,
      "brightness": 76.36
    },
    {
      "laplacian": 23.8,
      "width": 49.5,
      "brightness": 90.5
    },
    {
      "laplacian": 28.73,
      "width": 21.8,
      "brightness": 83.59
    },
    {
      "laplacian": 73.1,
      "width": 18.1,
      "brightness": 108.64
    },
    {
      "laplacian": 26.01,
      "width": 18.4,
      "brightness": 91.41
    },
    {
      "laplacian": 168.17,
      "width": 10.0,
      "brightness": 53.88
    },
    {
      "laplacian": 68.17,
      "width": 44.1,
      "brightness": 139.0
    },
    {
      "laplacian": 48.33,
      "width": 10.0,
      "brightness": 83.44
    },
    {
      "laplacian": 52.05,
      "width": 30.6,
      "brightness": 73.87
    },
    {
      "laplacian": 36.41,
      "width": 29.3,
      "brightness": 104.99
    },
    {
      "laplacian": 5.33,
      "width": 25.8,
      "brightness": 84.98
    },
    {
      "laplacian": 28.75,
      "width": 43.9,
      "brightness": 89.18
    },
    {
      "laplacian": 153.05,
      "width": 21.8,
      "brightness": 147.78
    },
    {
      "laplacian": 57.05,
      "width": 36.7,
      "brightness": 70.3
    },
    {
      "laplacian": 108.1,
      "width": 70.6,
      "brightness": 69.1
    },
    {
      "laplacian": 110.51,
      "width": 47.2,
      "brightness": 81.26
    },
    {
      "laplacian": 45.02,
      "width": 24.2,
      "brightness": 108.0
    },
    {
      "laplacian": 80.9,
      "width": 32.7,
      "brightness": 35.82
    },
    {
      "laplacian": 6.32,
      "width": 25.8,
      "brightness": 22.96
    },
    {
      "laplacian": 143.94,
      "width": 29.0,
      "brightness": 61.56
    },
    {
      "laplacian": 135.29,
      "width": 37.4,
      "brightness": 32.25
    },
    {
      "laplacian": 71.43,
      "width": 10.5,
      "brightness": 66.1
    },
    {
      "laplacian": 58.86,
      "width": 10.0,
      "brightness": 92.07
    },
    {
      "laplacian": 45.57,
      "width": 16.5,
      "brightness": 53.06
    },
    {
      "laplacian": 117.88,
      "width": 45.2,
      "brightness": 38.05
    },
    {
      "laplacian": 88.58,
      "width": 49.2,
      "brightness": 79.94
    },
    {
      "laplacian": 32.69,
      "width": 53.9,
      "brightness": 102.15
    },
    {
      "laplacian": 13.08,
      "width": 17.0,
      "brightness": 30.54
    },
    {
      "laplacian": 10.1,
      "width": 34.7,
      "brightness": 100.97
    },
    {
      "laplacian": 116.93,
      "width": 24.8,
      "brightness": 100.88
    },
    {
      "laplacian": 44.67,
      "width": 29.8,
      "brightness": 104.71
    },
    {
      "laplacian": 70.46,
      "width": 24.4,
      "brightness": 112.12
    },
    {
      "laplacian": 50.07,
      "width": 38.8,
      "brightness": 139.66
    },
    {
      "laplacian": 10.29,
      "width": 19.8,
      "brightness": 68.03
    },
    {
      "laplacian": 6.55,
      "width": 65.8,
      "brightness": 81.07
    },
    {
      "laplacian": 30.51,
      "width": 66.2,
      "brightness": 66.34
    },
    {
      "laplacian": 33.17,
      "width": 44.3,
      "brightness": 78.06
    },
    {
      "laplacian": 33.14,
      "width": 61.2,
      "brightness": 120.92
    },
    {
      "laplacian": 34.1,
      "width": 10.1,
      "brightness": 40.34
    },
    {
      "laplacian": 206.18,
      "width": 68.2,
      "brightness": 53.89
    },
    {
      "laplacian": 106.83,
      "width": 41.6,
      "brightness": 116.56
    },
    {
      "laplacian": 57.76,
      "width": 20.7,
      "brightness": 106.56
    },
    {
      "laplacian": 43.64,
      "width": 19.2,
      "brightness": 67.83
    },
    {
      "laplacian": 45.08,
      "width": 82.5,
      "brightness": 101.92
    },
    {
      "laplacian": 86.02,
      "width": 54.4,
      "brightness": 87.55
    },
    {
      "laplacian": 43.27,
      "width": 29.3,
      "brightness": 120.01
    },
    {
      "laplacian": 98.51,
      "width": 10.0,
      "brightness": 80.09
    },
    {
      "laplacian": 63.29,
      "width": 70.3,
      "brightness": 106.72
    },
    {
      "laplacian": 207.54,
      "width": 13.7,
      "brightness": 151.98
    },
    {
      "laplacian": 40.89,
      "width": 25.1,
      "brightness": 94.75
    },
    {
      "laplacian": 112.79,
      "width": 29.3,
      "brightness": 79.38
    },
    {
      "laplacian": 14.61,
      "width": 19.0,
      "brightness": 98.23
    },
    {
      "laplacian": 24.57,
      "width": 28.4,
      "brightness": 67.77
    },
    {
      "laplacian": 187.83,
      "width": 32.3,
      "brightness": 144.86
    },
    {
      "laplacian": 95.25,
      "width": 28.0,
      "brightness": 83.04
    },
    {
      "laplacian": 71.53,
      "width": 40.1,
      "brightness": 70.36
    },
    {
      "laplacian": 44.22,
      "width": 84.4,
      "brightness": 54.6
    },
    {
      "laplacian": 112.58,
      "width": 10.5,
      "brightness": 108.72
    },
    {
      "laplacian": 119.03,
      "width": 36.1,
      "brightness": 102.28
    },
    {
      "laplacian": 158.79,
      "width": 13.8,
      "brightness": 64.07
    },
    {
      "laplacian": 12.59,
      "width": 10.0,
      "brightness": 94.14
    },
    {
      "laplacian": 43.95,
      "width": 58.3,
      "brightness": 35.76
    },
    {
      "laplacian": 62.36,
      "width": 38.2,
      "brightness": 83.18
    },
    {
      "laplacian": 156.87,
      "width": 10.0,
      "brightness": 90.68
    },
    {
      "laplacian": 69.13,
      "width": 28.4,
      "brightness": 125.81
    },
    {
      "laplacian": 119.23,
      "width": 16.5,
      "brightness": 56.42
    },
    {
      "laplacian": 11.18,
      "width": 29.1,
      "brightness": 42.21
    },
    {
      "laplacian": 34.95,
      "width": 50.3,
      "brightness": 52.93
    },
    {
      "laplacian": 134.91,
      "width": 47.1,
      "brightness": 40.58
    },
    {
      "laplacian": 39.58,
      "width": 24.6,
      "brightness": 115.43
    },
    {
      "laplacian": 47.34,
      "width": 60.0,
      "brightness": 121.36
    },
    {
      "laplacian": 155.02,
      "width": 74.0,
      "brightness": 86.97
    },
    {
      "laplacian": 18.81,
      "width": 50.8,
      "brightness": 112.2
    },
    {
      "laplacian": 24.15,
      "width": 21.7,
      "brightness": 81.75
    },
    {
      "laplacian": 9.67,
      "width": 29.7,
      "brightness": 75.34
    },
    {
      "laplacian": 159.63,
      "width": 82.8,
      "brightness": 68.67
    },
    {
      "laplacian": 105.3,
      "width": 25.9,
      "brightness": 69.31
    },
    {
      "laplacian": 103.23,
      "width": 47.2,
      "brightness": 34.66
    },
    {
      "laplacian": 33.99,
      "width": 18.8,
      "brightness": 85.4
    },
    {
      "laplacian": 8.7,
      "width": 60.3,
      "brightness": 76.87
    },
    {
      "laplacian": 5.57,
      "width": 17.2,
      "brightness": 98.87
    },
    {
      "laplacian": 135.66,
      "width": 30.6,
      "brightness": 80.62
    },
    {
      "laplacian": 75.52,
      "width": 46.2,
      "brightness": 73.44
    },
    {
      "laplacian": 87.74,
      "width": 93.1,
      "brightness": 53.61
    },
    {
      "laplacian": 59.9,
      "width": 37.7,
      "brightness": 80.02
    },
    {
      "laplacian": 21.08,
      "width": 27.0,
      "brightness": 98.67
    },
    {
      "laplacian": 35.56,
      "width": 25.6,
      "brightness": 45.99
    },
    {
      "laplacian": 15.66,
      "width": 58.6,
      "brightness": 80.45
    },
    {
      "laplacian": 13.38,
      "width": 43.8,
      "brightness": 84.53
    },
    {
      "laplacian": 98.65,
      "width": 49.7,
      "brightness": 57.89
    },
    {
      "laplacian": 6.39,
      "width": 79.3,
      "brightness": 61.54
    },
    {
      "laplacian": 15.79,
      "width": 33.8,
      "brightness": 84.46
    },
    {
      "laplacian": 37.62,
      "width": 41.8,
      "brightness": 46.26
    },
    {
      "laplacian": 51.37,
      "width": 25.4,
      "brightness": 87.8
    },
    {
      "laplacian": 9.5,
      "width": 18.3,
      "brightness": 52.93
    },
    {
      "laplacian": 68.4,
      "width": 21.0,
      "brightness": 107.76
    },
    {
      "laplacian": 57.02,
      "width": 10.0,
      "brightness": 143.46
    },
    {
      "laplacian": 133.9,
      "width": 45.9,
      "brightness": 53.9
    },
    {
      "laplacian": 52.15,
      "width": 42.9,
      "brightness": 92.96
    },
    {
      "laplacian": 74.3,
      "width": 45.3,
      "brightness": 57.65
    },
    {
      "laplacian": 22.43,
      "width": 17.3,
      "brightness": 107.15
    },
    {
      "laplacian": 23.49,
      "width": 21.3,
      "brightness": 42.57
    },
    {
      "laplacian": 10.92,
      "width": 20.8,
      "brightness": 91.46
    },
    {
      "laplacian": 22.68,
      "width": 63.9,
      "brightness": 53.56
    },
    {
      "laplacian": 35.05,
      "width": 36.8,
      "brightness": 72.2
    },
    {
      "laplacian": 124.0,
      "width": 33.6,
      "brightness": 49.13
    },
    {
      "laplacian": 19.08,
      "width": 52.6,
      "brightness": 101.03
    },
    {
      "laplacian": 214.24,
      "width": 20.8,
      "brightness": 54.56
    },
    {
      "laplacian": 79.75,
      "width": 41.2,
      "brightness": 93.45
    },
    {
      "laplacian": 66.93,
      "width": 100.4,
      "brightness": 68.37
    },
    {
      "laplacian": 48.59,
      "width": 70.1,
      "brightness": 74.79
    },
    {
      "laplacian": 40.6,
      "width": 40.8,
      "brightness": 82.14
    },
    {
      "laplacian": 26.49,
      "width": 34.5,
      "brightness": 56.67
    },
    {
      "laplacian": 8.98,
      "width": 45.0,
      "brightness": 83.89
    },
    {
      "laplacian": 19.84,
      "width": 76.1,
      "brightness": 120.85
    },
    {
      "laplacian": 159.35,
      "width": 72.8,
      "brightness": 56.21
    },
    {
      "laplacian": 75.82,
      "width": 83.8,
      "brightness": 110.81
    },
    {
      "laplacian": 158.3,
      "width": 38.2,
      "brightness": 119.95
    },
    {
      "laplacian": 25.78,
      "width": 10.0,
      "brightness": 55.15
    },
    {
      "laplacian": 15.12,
      "width": 96.2,
      "brightness": 37.26
    },
    {
      "laplacian": 48.15,
      "width": 18.2,
      "brightness": 86.45
    },
    {
      "laplacian": 20.68,
      "width": 52.1,
      "brightness": 62.67
    },
    {
      "laplacian": 57.51,
      "width": 10.0,
      "brightness": 130.32
    },
    {
      "laplacian": 6.56,
      "width": 33.1,
      "brightness": 78.97
    },
    {
      "laplacian": 2.66,
      "width": 25.9,
      "brightness": 55.54
    },
    {
      "laplacian": 64.77,
      "width": 84.0,
      "brightness": 45.88
    },
    {
      "laplacian": 162.65,
      "width": 41.1,
      "brightness": 108.52
    },
    {
      "laplacian": 67.21,
      "width": 32.9,
      "brightness": 62.01
    },
    {
      "laplacian": 75.18,
      "width": 44.1,
      "brightness": 79.23
    },
    {
      "laplacian": 50.03,
      "width": 10.0,
      "brightness": 104.76
    },
    {
      "laplacian": 54.37,
      "width": 20.5,
      "brightness": 64.44
    },
    {
      "laplacian": 8.36,
      "width": 22.9,
      "brightness": 76.71
    },
    {
      "laplacian": 21.56,
      "width": 48.6,
      "brightness": 77.54
    },
    {
      "laplacian": 123.03,
      "width": 15.2,
      "brightness": 97.13
    },
    {
      "laplacian": 34.29,
      "width": 37.1,
      "brightness": 94.54
    },
    {
      "laplacian": 121.15,
      "width": 30.8,
      "brightness": 71.84
    },
    {
      "laplacian": 53.06,
      "width": 21.3,
      "brightness": 79.78
    },
    {
      "laplacian": 55.47,
      "width": 22.4,
      "brightness": 67.59
    },
    {
      "laplacian": 34.54,
      "width": 30.6,
      "brightness": 36.63
    },
    {
      "laplacian": 84.43,
      "width": 10.0,
      "brightness": 85.21
    },
    {
      "laplacian": 101.41,
      "width": 53.1,
      "brightness": 130.98
    },
    {
      "laplacian": 20.28,
      "width": 18.1,
      "brightness": 53.26
    },
    {
      "laplacian": 9.54,
      "width": 27.1,
      "brightness": 56.36
    },
    {
      "laplacian": 3.8,
      "width": 82.1,
      "brightness": 53.62
    },
    {
      "laplacian": 72.23,
      "width": 53.6,
      "brightness": 98.29
    },
    {
      "laplacian": 65.55,
      "width": 13.1,
      "brightness": 90.56
    },
    {
      "laplacian": 258.5,
      "width": 10.0,
      "brightness": 73.56
    },
    {
      "laplacian": 50.29,
      "width": 45.3,
      "brightness": 52.3
    },
    {
      "laplacian": 42.52,
      "width": 27.9,
      "brightness": 80.59
    },
    {
      "laplacian": 59.2,
      "width": 37.2,
      "brightness": 34.19
    },
    {
      "laplacian": 61.99,
      "width": 52.5,
      "brightness": 82.02
    },
    {
      "laplacian": 39.51,
      "width": 57.7,
      "brightness": 102.4
    },
    {
      "laplacian": 21.04,
      "width": 24.2,
      "brightness": 42.97
    },
    {
      "laplacian": 47.89,
      "width": 30.3,
      "brightness": 35.09
    },
    {
      "laplacian": 46.27,
      "width": 42.0,
      "brightness": 122.22
    },
    {
      "laplacian": 45.59,
      "width": 43.8,
      "brightness": 60.87
    },
    {
      "laplacian": 91.66,
      "width": 37.0,
      "brightness": 109.81
    },
    {
      "laplacian": 47.12,
      "width": 76.7,
      "brightness": 73.69
    },
    {
      "laplacian": 9.84,
      "width": 43.4,
      "brightness": 73.47
    },
    {
      "laplacian": 24.98,
      "width": 52.0,
      "brightness": 90.28
    },
    {
      "laplacian": 39.05,
      "width": 39.1,
      "brightness": 53.25
    },
    {
      "laplacian": 49.16,
      "width": 15.2,
      "brightness": 81.71
    },
    {
      "laplacian": 73.5,
      "width": 20.4,
      "brightness": 67.32
    },
    {
      "laplacian": 49.51,
      "width": 12.7,
      "brightness": 41.03
    },
    {
      "laplacian": 2.78,
      "width": 61.8,
      "brightness": 87.45
    },
    {
      "laplacian": 11.49,
      "width": 10.0,
      "brightness": 70.63
    },
    {
      "laplacian": 77.68,
      "width": 29.4,
      "brightness": 73.6
    },
    {
      "laplacian": 38.04,
      "width": 25.1,
      "brightness": 44.12
    },
    {
      "laplacian": 53.39,
      "width": 24.7,
      "brightness": 122.56
    },
    {
      "laplacian": 33.57,
      "width": 26.2,
      "brightness": 102.55
    },
    {
      "laplacian": 24.86,
      "width": 85.4,
      "brightness": 105.0
    },
    {
      "laplacian": 34.78,
      "width": 10.0,
      "brightness": 69.45
    },
    {
      "laplacian": 53.95,
      "width": 70.9,
      "brightness": 29.58
    },
    {
      "laplacian": 46.8,
      "width": 27.8,
      "brightness": 132.68
    },
    {
      "laplacian": 100.89,
      "width": 55.4,
      "brightness": 76.29
    },
    {
      "laplacian": 7.42,
      "width": 34.3,
      "brightness": 57.03
    },
    {
      "laplacian": 9.02,
      "width": 13.8,
      "brightness": 89.67
    },
    {
      "laplacian": 37.61,
      "width": 75.0,
      "brightness": 110.68
    },
    {
      "laplacian": 74.19,
      "width": 68.1,
      "brightness": 77.35
    },
    {
      "laplacian": 87.75,
      "width": 14.6,
      "brightness": 113.8
    },
    {
      "laplacian": 25.93,
      "width": 47.5,
      "brightness": 108.32
    },
    {
      "laplacian": 1.0,
      "width": 21.1,
      "brightness": 47.86
    },
    {
      "laplacian": 26.82,
      "width": 10.0,
      "brightness": 59.13
    },
    {
      "laplacian": 65.72,
      "width": 18.2,
      "brightness": 104.81
    },
    {
      "laplacian": 46.01,
      "width": 72.4,
      "brightness": 5.0
    },
    {
      "laplacian": 76.44,
      "width": 56.3,
      "brightness": 73.82
    },
    {
      "laplacian": 119.8,
      "width": 26.4,
      "brightness": 37.94
    },
    {
      "laplacian": 40.15,
      "width": 72.6,
      "brightness": 64.66
    },
    {
      "laplacian": 30.02,
      "width": 64.9,
      "brightness": 69.63
    },
    {
      "laplacian": 17.93,
      "width": 18.2,
      "brightness": 67.97
    },
    {
      "laplacian": 8.95,
      "width": 83.4,
      "brightness": 62.54
    },
    {
      "laplacian": 5.91,
      "width": 24.9,
      "brightness": 47.28
    },
    {
      "laplacian": 23.32,
      "width": 27.4,
      "brightness": 142.17
    },
    {
      "laplacian": 107.56,
      "width": 10.0,
      "brightness": 130.29
    },
    {
      "laplacian": 82.51,
      "width": 20.8,
      "brightness": 45.46
    },
    {
      "laplacian": 28.6,
      "width": 29.6,
      "brightness": 122.3
    },
    {
      "laplacian": 215.7,
      "width": 39.8,
      "brightness": 66.81
    },
    {
      "laplacian": 25.08,
      "width": 13.8,
      "brightness": 81.62
    },
    {
      "laplacian": 128.53,
      "width": 18.8,
      "brightness": 76.23
    },
    {
      "laplacian": 151.86,
      "width": 84.5,
      "brightness": 59.53
    },
    {
      "laplacian": 69.49,
      "width": 62.3,
      "brightness": 105.55
    },
    {
      "laplacian": 23.08,
      "width": 69.4,
      "brightness": 81.52
    },
    {
      "laplacian": 32.6,
      "width": 31.3,
      "brightness": 64.66
    },
    {
      "laplacian": 55.11,
      "width": 40.5,
      "brightness": 41.47
    },
    {
      "laplacian": 9.31,
      "width": 48.2,
      "brightness": 52.98
    },
    {
      "laplacian": 16.02,
      "width": 83.8,
      "brightness": 32.04
    },
    {
      "laplacian": 14.47,
      "width": 10.0,
      "brightness": 78.34
    },
    {
      "laplacian": 73.9,
      "width": 22.4,
      "brightness": 44.49
    },
    {
      "laplacian": 118.93,
      "width": 38.2,
      "brightness": 70.56
    },
    {
      "laplacian": 85.13,
      "width": 34.4,
      "brightness": 116.36
    },
    {
      "laplacian": 104.28,
      "width": 18.6,
      "brightness": 111.58
    },
    {
      "laplacian": 21.01,
      "width": 45.6,
      "brightness": 77.1
    },
    {
      "laplacian": 34.07,
      "width": 23.1,
      "brightness": 75.56
    },
    {
      "laplacian": 36.65,
      "width": 32.8,
      "brightness": 130.64
    },
    {
      "laplacian": 69.26,
      "width": 44.3,
      "brightness": 92.58
    },
    {
      "laplacian": 24.02,
      "width": 23.9,
      "brightness": 68.82
    },
    {
      "laplacian": 99.33,
      "width": 53.4,
      "brightness": 38.07
    },
    {
      "laplacian": 148.75,
      "width": 59.5,
      "brightness": 89.03
    },
    {
      "laplacian": 72.23,
      "width": 19.2,
      "brightness": 101.22
    },
    {
      "laplacian": 32.61,
      "width": 22.9,
      "brightness": 60.31
    },
    {
      "laplacian": 18.99,
      "width": 15.5,
      "brightness": 86.15
    },
    {
      "laplacian": 14.52,
      "width": 32.3,
      "brightness": 67.82
    },
    {
      "laplacian": 2.84,
      "width": 39.8,
      "brightness": 72.85
    },
    {
      "laplacian": 37.75,
      "width": 25.5,
      "brightness": 8.34
    },
    {
      "laplacian": 35.7,
      "width": 39.0,
      "brightness": 71.79
    },
    {
      "laplacian": 94.59,
      "width": 22.5,
      "brightness": 105.14
    },
    {
      "laplacian": 25.74,
      "width": 23.0,
      "brightness": 60.32
    },
    {
      "laplacian": 39.81,
      "width": 41.1,
      "brightness": 79.47
    },
    {
      "laplacian": 59.97,
      "width": 24.1,
      "brightness": 56.83
    },
    {
      "laplacian": 71.26,
      "width": 31.1,
      "brightness": 88.09
    },
    {
      "laplacian": 86.16,
      "width": 42.0,
      "brightness": 71.94
    },
    {
      "laplacian": 54.93,
      "width": 38.7,
      "brightness": 51.7
    },
    {
      "laplacian": 10.07,
      "width": 22.7,
      "brightness": 115.31
    },
    {
      "laplacian": 66.15,
      "width": 63.2,
      "brightness": 104.01
    },
    {
      "laplacian": 23.8,
      "width": 10.0,
      "brightness": 61.06
    },
    {
      "laplacian": 123.22,
      "width": 10.0,
      "brightness": 91.94
    },
    {
      "laplacian": 47.59,
      "width": 46.8,
      "brightness": 93.05
    },
    {
      "laplacian": 57.86,
      "width": 38.2,
      "brightness": 95.98
    },
    {
      "laplacian": 273.48,
      "width": 13.9,
      "brightness": 30.56
    },
    {
      "laplacian": 87.37,
      "width": 35.0,
      "brightness": 106.18
    },
    {
      "laplacian": 65.15,
      "width": 20.5,
      "brightness": 62.05
    },
    {
      "laplacian": 40.94,
      "width": 44.7,
      "brightness": 67.98
    },
    {
      "laplacian": 11.24,
      "width": 10.0,
      "brightness": 151.86
    },
    {
      "laplacian": 38.21,
      "width": 27.2,
      "brightness": 86.45
    },
    {
      "laplacian": 18.72,
      "width": 22.0,
      "brightness": 67.18
    },
    {
      "laplacian": 162.38,
      "width": 53.5,
      "brightness": 16.25
    },
    {
      "laplacian": 65.88,
      "width": 10.0,
      "brightness": 116.91
    },
    {
      "laplacian": 119.81,
      "width": 33.5,
      "brightness": 40.33
    },
    {
      "laplacian": 24.97,
      "width": 46.5,
      "brightness": 49.9
    },
    {
      "laplacian": 20.31,
      "width": 93.1,
      "brightness": 68.72
    },
    {
      "laplacian": 80.65,
      "width": 23.0,
      "brightness": 117.66
    },
    {
      "laplacian": 17.87,
      "width": 40.2,
      "brightness": 99.65
    },
    {
      "laplacian": 30.2,
      "width": 10.0,
      "brightness": 73.58
    },
    {
      "laplacian": 168.11,
      "width": 32.4,
      "brightness": 86.63
    },
    {
      "laplacian": 31.44,
      "width": 66.1,
      "brightness": 61.19
    },
    {
      "laplacian": 8.3,
      "width": 93.7,
      "brightness": 81.91
    },
    {
      "laplacian": 4.44,
      "width": 42.7,
      "brightness": 80.05
    },
    {
      "laplacian": 6.92,
      "width": 10.0,
      "brightness": 105.13
    },
    {
      "laplacian": 125.23,
      "width": 72.6,
      "brightness": 105.08
    },
    {
      "laplacian": 26.65,
      "width": 10.0,
      "brightness": 91.83
    },
    {
      "laplacian": 267.41,
      "width": 12.8,
      "brightness": 67.85
    },
    {
      "laplacian": 150.03,
      "width": 76.3,
      "brightness": 98.77
    },
    {
      "laplacian": 198.07,
      "width": 30.8,
      "brightness": 75.42
    },
    {
      "laplacian": 106.37,
      "width": 21.1,
      "brightness": 47.71
    },
    {
      "laplacian": 77.23,
      "width": 50.5,
      "brightness": 66.71
    },
    {
      "laplacian": 19.49,
      "width": 36.3,
      "brightness": 80.37
    },
    {
      "laplacian": 46.52,
      "width": 62.5,
      "brightness": 103.49
    },
    {
      "laplacian": 83.68,
      "width": 37.4,
      "brightness": 72.86
    },
    {
      "laplacian": 101.3,
      "width": 37.9,
      "brightness": 44.14
    },
    {
      "laplacian": 12.68,
      "width": 61.1,
      "brightness": 79.59
    },
    {
      "laplacian": 38.79,
      "width": 30.5,
      "brightness": 81.18
    },
    {
      "laplacian": 43.18,
      "width": 16.6,
      "brightness": 83.2
    },
    {
      "laplacian": 41.6,
      "width": 52.3,
      "brightness": 103.76
    },
    {
      "laplacian": 14.93,
      "width": 26.5,
      "brightness": 106.53
    },
    {
      "laplacian": 181.35,
      "width": 39.4,
      "brightness": 61.36
    },
    {
      "laplacian": 37.55,
      "width": 10.0,
      "brightness": 60.75
    },
    {
      "laplacian": 16.28,
      "width": 29.7,
      "brightness": 48.87
    },
    {
      "laplacian": 184.63,
      "width": 22.3,
      "brightness": 97.57
    },
    {
      "laplacian": 150.14,
      "width": 10.0,
      "brightness": 118.57
    },
    {
      "laplacian": 53.02,
      "width": 30.3,
      "brightness": 69.18
    },
    {
      "laplacian": 29.29,
      "width": 31.0,
      "brightness": 71.24
    },
    {
      "laplacian": 6.11,
      "width": 41.2,
      "brightness": 119.07
    },
    {
      "laplacian": 72.56,
      "width": 65.4,
      "brightness": 92.16
    },
    {
      "laplacian": 27.23,
      "width": 59.1,
      "brightness": 90.21
    },
    {
      "laplacian": 45.49,
      "width": 23.4,
      "brightness": 44.65
    },
    {
      "laplacian": 172.75,
      "width": 36.8,
      "brightness": 97.0
    },
    {
      "laplacian": 25.18,
      "width": 45.1,
      "brightness": 51.98
    },
    {
      "laplacian": 69.99,
      "width": 23.9,
      "brightness": 46.25
    },
    {
      "laplacian": 88.21,
      "width": 10.0,
      "brightness": 68.29
    },
    {
      "laplacian": 122.28,
      "width": 28.1,
      "brightness": 61.6
    },
    {
      "laplacian": 42.47,
      "width": 67.1,
      "brightness": 71.8
    },
    {
      "laplacian": 38.41,
      "width": 10.0,
      "brightness": 37.65
    },
    {
      "laplacian": 37.55,
      "width": 15.2,
      "brightness": 104.85
    },
    {
      "laplacian": 64.41,
      "width": 18.0,
      "brightness": 109.58
    },
    {
      "laplacian": 145.43,
      "width": 15.4,
      "brightness": 23.47
    },
    {
      "laplacian": 35.91,
      "width": 50.6,
      "brightness": 105.4
    },
    {
      "laplacian": 1.0,
      "width": 20.5,
      "brightness": 55.31
    },
    {
      "laplacian": 96.23,
      "width": 51.5,
      "brightness": 102.0
    },
    {
      "laplacian": 49.62,
      "width": 33.5,
      "brightness": 76.08
    },
    {
      "laplacian": 72.7,
      "width": 10.0,
      "brightness": 78.81
    },
    {
      "laplacian": 6.48,
      "width": 24.3,
      "brightness": 72.82
    },
    {
      "laplacian": 27.34,
      "width": 60.2,
      "brightness": 111.94
    },
    {
      "laplacian": 90.08,
      "width": 36.0,
      "brightness": 43.29
    },
    {
      "laplacian": 10.75,
      "width": 25.6,
      "brightness": 95.02
    },
    {
      "laplacian": 69.86,
      "width": 67.6,
      "brightness": 108.84
    },
    {
      "laplacian": 45.14,
      "width": 14.1,
      "brightness": 98.06
    },
    {
      "laplacian": 21.58,
      "width": 21.0,
      "brightness": 143.09
    },
    {
      "laplacian": 19.68,
      "width": 56.7,
      "brightness": 63.19
    },
    {
      "laplacian": 15.1,
      "width": 50.0,
      "brightness": 104.8
    },
    {
      "laplacian": 49.38,
      "width": 13.1,
      "brightness": 75.03
    },
    {
      "laplacian": 54.71,
      "width": 44.1,
      "brightness": 112.54
    },
    {
      "laplacian": 32.54,
      "width": 20.2,
      "brightness": 77.78
    },
    {
      "laplacian": 13.98,
      "width": 10.0,
      "brightness": 67.14
    },
    {
      "laplacian": 68.18,
      "width": 26.0,
      "brightness": 114.57
    },
    {
      "laplacian": 97.63,
      "width": 97.3,
      "brightness": 64.24
    },
    {
      "laplacian": 78.85,
      "width": 60.8,
      "brightness": 38.44
    },
    {
      "laplacian": 203.95,
      "width": 31.5,
      "brightness": 63.53
    },
    {
      "laplacian": 39.2,
      "width": 10.0,
      "brightness": 95.33
    },
    {
      "laplacian": 134.84,
      "width": 10.0,
      "brightness": 116.98
    },
    {
      "laplacian": 23.95,
      "width": 33.6,
      "brightness": 81.11
    },
    {
      "laplacian": 19.95,
      "width": 42.3,
      "brightness": 114.91
    },
    {
      "laplacian": 52.17,
      "width": 51.0,
      "brightness": 39.97
    },
    {
      "laplacian": 157.94,
      "width": 47.4,
      "brightness": 65.59
    },
    {
      "laplacian": 35.16,
      "width": 50.0,
      "brightness": 69.92
    },
    {
      "laplacian": 6.47,
      "width": 39.0,
      "brightness": 74.79
    },
    {
      "laplacian": 96.16,
      "width": 66.7,
      "brightness": 80.35
    },
    {
      "laplacian": 43.38,
      "width": 22.2,
      "brightness": 97.35
    },
    {
      "laplacian": 60.8,
      "width": 33.2,
      "brightness": 65.55
    },
    {
      "laplacian": 21.14,
      "width": 10.0,
      "brightness": 81.89
    },
    {
      "laplacian": 51.73,
      "width": 21.9,
      "brightness": 76.74
    },
    {
      "laplacian": 8.03,
      "width": 59.8,
      "brightness": 52.08
    },
    {
      "laplacian": 183.41,
      "width": 49.0,
      "brightness": 74.82
    },
    {
      "laplacian": 110.61,
      "width": 10.0,
      "brightness": 73.98
    },
    {
      "laplacian": 49.66,
      "width": 101.7,
      "brightness": 73.38
    },
    {
      "laplacian": 94.06,
      "width": 36.1,
      "brightness": 78.89
    },
    {
      "laplacian": 24.02,
      "width": 36.5,
      "brightness": 80.12
    },
    {
      "laplacian": 106.81,
      "width": 20.8,
      "brightness": 65.9
    },
    {
      "laplacian": 33.65,
      "width": 24.4,
      "brightness": 113.64
    },
    {
      "laplacian": 31.31,
      "width": 35.8,
      "brightness": 45.25
    },
    {
      "laplacian": 16.37,
      "width": 47.2,
      "brightness": 57.81
    },
    {
      "laplacian": 67.46,
      "width": 40.2,
      "brightness": 155.84
    },
    {
      "laplacian": 47.72,
      "width": 22.1,
      "brightness": 48.94
    },
    {
      "laplacian": 138.14,
      "width": 16.4,
      "brightness": 40.09
    },
    {
      "laplacian": 14.17,
      "width": 15.5,
      "brightness": 98.57
    },
    {
      "laplacian": 67.73,
      "width": 62.7,
      "brightness": 19.84
    },
    {
      "laplacian": 119.06,
      "width": 58.1,
      "brightness": 71.41
    },
    {
      "laplacian": 55.58,
      "width": 44.5,
      "brightness": 138.08
    },
    {
      "laplacian": 33.01,
      "width": 62.4,
      "brightness": 34.74
    },
    {
      "laplacian": 54.33,
      "width": 29.8,
      "brightness": 22.5
    },
    {
      "laplacian": 129.88,
      "width": 55.0,
      "brightness": 36.02
    },
    {
      "laplacian": 129.84,
      "width": 46.0,
      "brightness": 103.15
    },
    {
      "laplacian": 41.75,
      "width": 55.9,
      "brightness": 109.49
    },
    {
      "laplacian": 128.13,
      "width": 14.3,
      "brightness": 63.65
    },
    {
      "laplacian": 45.69,
      "width": 10.0,
      "brightness": 97.13
    },
    {
      "laplacian": 93.22,
      "width": 38.6,
      "brightness": 116.93
    },
    {
      "laplacian": 74.5,
      "width": 25.4,
      "brightness": 128.05
    },
    {
      "laplacian": 31.7,
      "width": 10.0,
      "brightness": 71.1
    },
    {
      "laplacian": 17.08,
      "width": 68.8,
      "brightness": 13.56
    },
    {
      "laplacian": 121.48,
      "width": 58.2,
      "brightness": 55.02
    },
    {
      "laplacian": 148.08,
      "width": 40.9,
      "brightness": 66.05
    },
    {
      "laplacian": 66.37,
      "width": 17.2,
      "brightness": 70.75
    },
    {
      "laplacian": 45.63,
      "width": 10.0,
      "brightness": 72.74
    },
    {
      "laplacian": 12.01,
      "width": 10.0,
      "brightness": 109.33
    },
    {
      "laplacian": 119.09,
      "width": 21.8,
      "brightness": 113.68
    },
    {
      "laplacian": 60.01,
      "width": 50.4,
      "brightness": 73.19
    },
    {
      "laplacian": 36.35,
      "width": 25.5,
      "brightness": 108.76
    },
    {
      "laplacian": 95.34,
      "width": 44.8,
      "brightness": 88.01
    },
    {
      "laplacian": 9.32,
      "width": 46.3,
      "brightness": 79.81
    },
    {
      "laplacian": 15.42,
      "width": 50.0,
      "brightness": 103.38
    },
    {
      "laplacian": 23.08,
      "width": 10.0,
      "brightness": 80.02
    },
    {
      "laplacian": 72.58,
      "width": 18.4,
      "brightness": 135.62
    },
    {
      "laplacian": 54.86,
      "width": 44.3,
      "brightness": 37.72
    },
    {
      "laplacian": 79.81,
      "width": 78.0,
      "brightness": 63.58
    },
    {
      "laplacian": 112.9,
      "width": 65.1,
      "brightness": 74.46
    },
    {
      "laplacian": 82.17,
      "width": 39.5,
      "brightness": 90.3
    },
    {
      "laplacian": 186.28,
      "width": 69.3,
      "brightness": 113.5
    },
    {
      "laplacian": 112.7,
      "width": 39.3,
      "brightness": 77.32
    },
    {
      "laplacian": 41.66,
      "width": 10.0,
      "brightness": 38.18
    },
    {
      "laplacian": 27.15,
      "width": 49.4,
      "brightness": 101.59
    },
    {
      "laplacian": 42.86,
      "width": 66.4,
      "brightness": 99.14
    },
    {
      "laplacian": 84.52,
      "width": 92.8,
      "brightness": 23.63
    },
    {
      "laplacian": 30.27,
      "width": 21.3,
      "brightness": 77.89
    },
    {
      "laplacian": 86.42,
      "width": 13.1,
      "brightness": 33.48
    },
    {
      "laplacian": 78.62,
      "width": 55.1,
      "brightness": 59.39
    },
    {
      "laplacian": 16.8,
      "width": 42.6,
      "brightness": 52.72
    },
    {
      "laplacian": 111.07,
      "width": 40.2,
      "brightness": 100.66
    },
    {
      "laplacian": 64.4,
      "width": 69.9,
      "brightness": 81.27
    },
    {
      "laplacian": 179.66,
      "width": 55.0,
      "brightness": 42.0
    },
    {
      "laplacian": 45.83,
      "width": 45.2,
      "brightness": 102.64
    },
    {
      "laplacian": 34.76,
      "width": 23.3,
      "brightness": 37.85
    },
    {
      "laplacian": 14.34,
      "width": 52.2,
      "brightness": 87.24
    },
    {
      "laplacian": 14.07,
      "width": 12.6,
      "brightness": 55.21
    },
    {
      "laplacian": 100.94,
      "width": 39.2,
      "brightness": 67.76
    },
    {
      "laplacian": 166.46,
      "width": 31.8,
      "brightness": 92.12
    },
    {
      "laplacian": 42.3,
      "width": 10.0,
      "brightness": 92.6
    },
    {
      "laplacian": 39.75,
      "width": 42.7,
      "brightness": 115.44
    },
    {
      "laplacian": 49.76,
      "width": 21.3,
      "brightness": 75.7
    },
    {
      "laplacian": 117.02,
      "width": 42.0,
      "brightness": 86.58
    },
    {
      "laplacian": 16.97,
      "width": 15.6,
      "brightness": 65.74
    },
    {
      "laplacian": 57.74,
      "width": 55.3,
      "brightness": 83.1
    },
    {
      "laplacian": 102.75,
      "width": 85.4,
      "brightness": 90.31
    },
    {
      "laplacian": 71.84,
      "width": 12.6,
      "brightness": 75.25
    },
    {
      "laplacian": 82.51,
      "width": 15.6,
      "brightness": 27.49
    },
    {
      "laplacian": 72.42,
      "width": 10.9,
      "brightness": 87.28
    },
    {
      "laplacian": 134.73,
      "width": 28.0,
      "brightness": 88.21
    },
    {
      "laplacian": 156.73,
      "width": 41.6,
      "brightness": 58.96
    },
    {
      "laplacian": 129.65,
      "width": 50.3,
      "brightness": 42.04
    },
    {
      "laplacian": 50.0,
      "width": 38.7,
      "brightness": 119.32
    },
    {
      "laplacian": 6.03,
      "width": 49.3,
      "brightness": 91.76
    },
    {
      "laplacian": 39.47,
      "width": 31.0,
      "brightness": 71.59
    },
    {
      "laplacian": 48.58,
      "width": 21.2,
      "brightness": 46.16
    },
    {
      "laplacian": 164.89,
      "width": 15.9,
      "brightness": 54.99
    },
    {
      "laplacian": 21.38,
      "width": 28.7,
      "brightness": 114.47
    },
    {
      "laplacian": 9.71,
      "width": 16.2,
      "brightness": 81.85
    },
    {
      "laplacian": 30.47,
      "width": 40.8,
      "brightness": 62.58
    },
    {
      "laplacian": 22.69,
      "width": 16.4,
      "brightness": 92.27
    },
    {
      "laplacian": 8.46,
      "width": 22.9,
      "brightness": 55.2
    },
    {
      "laplacian": 43.17,
      "width": 62.5,
      "brightness": 120.02
    },
    {
      "laplacian": 50.32,
      "width": 66.1,
      "brightness": 115.88
    },
    {
      "laplacian": 7.77,
      "width": 64.9,
      "brightness": 64.94
    },
    {
      "laplacian": 34.54,
      "width": 31.3,
      "brightness": 60.4
    },
    {
      "laplacian": 21.13,
      "width": 21.8,
      "brightness": 5.0
    },
    {
      "laplacian": 51.81,
      "width": 44.9,
      "brightness": 36.52
    },
    {
      "laplacian": 56.5,
      "width": 16.7,
      "brightness": 40.49
    },
    {
      "laplacian": 21.13,
      "width": 51.8,
      "brightness": 81.79
    },
    {
      "laplacian": 110.3,
      "width": 20.4,
      "brightness": 68.87
    },
    {
      "laplacian": 47.59,
      "width": 27.9,
      "brightness": 40.33
    },
    {
      "laplacian": 22.26,
      "width": 52.5,
      "brightness": 70.13
    },
    {
      "laplacian": 7.06,
      "width": 10.0,
      "brightness": 92.15
    },
    {
      "laplacian": 59.19,
      "width": 21.0,
      "brightness": 92.78
    },
    {
      "laplacian": 72.28,
      "width": 41.4,
      "brightness": 24.81
    },
    {
      "laplacian": 28.75,
      "width": 47.2,
      "brightness": 74.41
    },
    {
      "laplacian": 53.3,
      "width": 42.4,
      "brightness": 39.27
    },
    {
      "laplacian": 156.73,
      "width": 27.7,
      "brightness": 103.25
    },
    {
      "laplacian": 97.13,
      "width": 55.8,
      "brightness": 99.96
    },
    {
      "laplacian": 1.77,
      "width": 15.5,
      "brightness": 52.86
    },
    {
      "laplacian": 21.98,
      "width": 15.0,
      "brightness": 56.55
    },
    {
      "laplacian": 41.22,
      "width": 41.1,
      "brightness": 65.08
    },
    {
      "laplacian": 50.07,
      "width": 14.1,
      "brightness": 14.92
    },
    {
      "laplacian": 54.34,
      "width": 87.1,
      "brightness": 87.41
    },
    {
      "laplacian": 68.48,
      "width": 21.5,
      "brightness": 70.36
    },
    {
      "laplacian": 42.54,
      "width": 55.2,
      "brightness": 105.16
    },
    {
      "laplacian": 47.49,
      "width": 12.2,
      "brightness": 47.24
    },
    {
      "laplacian": 101.15,
      "width": 76.3,
      "brightness": 60.66
    },
    {
      "laplacian": 60.2,
      "width": 32.8,
      "brightness": 35.82
    },
    {
      "laplacian": 12.64,
      "width": 21.0,
      "brightness": 49.88
    },
    {
      "laplacian": 51.52,
      "width": 26.3,
      "brightness": 44.9
    },
    {
      "laplacian": 41.33,
      "width": 18.6,
      "brightness": 105.89
    },
    {
      "laplacian": 3.44,
      "width": 27.8,
      "brightness": 58.45
    },
    {
      "laplacian": 53.92,
      "width": 12.8,
      "brightness": 81.48
    },
    {
      "laplacian": 14.86,
      "width": 21.5,
      "brightness": 67.34
    },
    {
      "laplacian": 102.33,
      "width": 54.5,
      "brightness": 42.45
    },
    {
      "laplacian": 67.66,
      "width": 37.3,
      "brightness": 73.29
    },
    {
      "laplacian": 11.76,
      "width": 15.2,
      "brightness": 94.77
    },
    {
      "laplacian": 98.71,
      "width": 28.5,
      "brightness": 44.18
    },
    {
      "laplacian": 136.38,
      "width": 66.6,
      "brightness": 100.66
    },
    {
      "laplacian": 36.68,
      "width": 23.4,
      "brightness": 54.21
    },
    {
      "laplacian": 41.1,
      "width": 14.0,
      "brightness": 64.48
    },
    {
      "laplacian": 91.19,
      "width": 46.1,
      "brightness": 92.86
    },
    {
      "laplacian": 128.75,
      "width": 10.0,
      "brightness": 59.42
    },
    {
      "laplacian": 5.39,
      "width": 26.7,
      "brightness": 79.05
    },
    {
      "laplacian": 13.62,
      "width": 70.2,
      "brightness": 69.19
    },
    {
      "laplacian": 31.07,
      "width": 28.0,
      "brightness": 81.62
    },
    {
      "laplacian": 34.58,
      "width": 57.9,
      "brightness": 11.34
    },
    {
      "laplacian": 89.11,
      "width": 13.9,
      "brightness": 26.77
    },
    {
      "laplacian": 129.26,
      "width": 27.2,
      "brightness": 95.25
    },
    {
      "laplacian": 136.67,
      "width": 25.5,
      "brightness": 107.04
    },
    {
      "laplacian": 5.18,
      "width": 44.5,
      "brightness": 52.51
    },
    {
      "laplacian": 19.79,
      "width": 34.0,
      "brightness": 71.17
    },
    {
      "laplacian": 25.46,
      "width": 75.9,
      "brightness": 86.25
    },
    {
      "laplacian": 19.7,
      "width": 22.4,
      "brightness": 97.41
    },
    {
      "laplacian": 67.49,
      "width": 33.7,
      "brightness": 21.23
    },
    {
      "laplacian": 74.47,
      "width": 26.1,
      "brightness": 53.19
    },
    {
      "laplacian": 46.94,
      "width": 32.1,
      "brightness": 68.69
    },
    {
      "laplacian": 42.95,
      "width": 30.2,
      "brightness": 97.69
    },
    {
      "laplacian": 32.44,
      "width": 16.6,
      "brightness": 147.96
    },
    {
      "laplacian": 36.35,
      "width": 52.7,
      "brightness": 71.62
    },
    {
      "laplacian": 155.42,
      "width": 19.9,
      "brightness": 38.6
    },
    {
      "laplacian": 83.72,
      "width": 18.9,
      "brightness": 89.26
    },
    {
      "laplacian": 33.68,
      "width": 10.0,
      "brightness": 114.99
    },
    {
      "laplacian": 42.18,
      "width": 22.0,
      "brightness": 81.02
    },
    {
      "laplacian": 68.81,
      "width": 19.7,
      "brightness": 52.61
    },
    {
      "laplacian": 11.76,
      "width": 10.0,
      "brightness": 104.82
    },
    {
      "laplacian": 53.12,
      "width": 27.8,
      "brightness": 96.58
    },
    {
      "laplacian": 80.02,
      "width": 73.8,
      "brightness": 49.27
    },
    {
      "laplacian": 71.82,
      "width": 10.4,
      "brightness": 88.68
    },
    {
      "laplacian": 20.23,
      "width": 31.7,
      "brightness": 105.92
    },
    {
      "laplacian": 24.65,
      "width": 27.3,
      "brightness": 111.09
    },
    {
      "laplacian": 2.75,
      "width": 48.4,
      "brightness": 76.14
    },
    {
      "laplacian": 87.01,
      "width": 50.6,
      "brightness": 67.97
    },
    {
      "laplacian": 205.87,
      "width": 107.1,
      "brightness": 112.36
    },
    {
      "laplacian": 17.15,
      "width": 38.2,
      "brightness": 44.12
    },
    {
      "laplacian": 112.23,
      "width": 17.8,
      "brightness": 90.28
    },
    {
      "laplacian": 192.71,
      "width": 21.5,
      "brightness": 39.64
    },
    {
      "laplacian": 29.31,
      "width": 23.2,
      "brightness": 107.83
    },
    {
      "laplacian": 42.24,
      "width": 20.3,
      "brightness": 70.77
    },
    {
      "laplacian": 58.51,
      "width": 84.9,
      "brightness": 113.52
    },
    {
      "laplacian": 69.93,
      "width": 49.1,
      "brightness": 91.76
    },
    {
      "laplacian": 61.28,
      "width": 44.3,
      "brightness": 43.75
    },
    {
      "laplacian": 31.71,
      "width": 14.3,
      "brightness": 117.89
    },
    {
      "laplacian": 79.0,
      "width": 50.3,
      "brightness": 121.43
    },
    {
      "laplacian": 32.45,
      "width": 63.5,
      "brightness": 102.7
    },
    {
      "laplacian": 64.93,
      "width": 27.7,
      "brightness": 56.68
    },
    {
      "laplacian": 45.41,
      "width": 21.4,
      "brightness": 69.43
    },
    {
      "laplacian": 4.33,
      "width": 77.0,
      "brightness": 82.07
    },
    {
      "laplacian": 125.18,
      "width": 19.4,
      "brightness": 58.3
    },
    {
      "laplacian": 25.37,
      "width": 17.9,
      "brightness": 125.39
    },
    {
      "laplacian": 134.8,
      "width": 15.7,
      "brightness": 82.04
    },
    {
      "laplacian": 108.78,
      "width": 30.7,
      "brightness": 5.0
    },
    {
      "laplacian": 56.99,
      "width": 38.2,
      "brightness": 87.5
    },
    {
      "laplacian": 73.0,
      "width": 58.4,
      "brightness": 68.25
    },
    {
      "laplacian": 80.46,
      "width": 45.6,
      "brightness": 75.9
    },
    {
      "laplacian": 38.65,
      "width": 45.1,
      "brightness": 67.68
    },
    {
      "laplacian": 40.43,
      "width": 69.5,
      "brightness": 100.6
    },
    {
      "laplacian": 77.3,
      "width": 15.1,
      "brightness": 109.35
    },
    {
      "laplacian": 45.86,
      "width": 10.0,
      "brightness": 85.93
    },
    {
      "laplacian": 31.81,
      "width": 47.0,
      "brightness": 68.5
    },
    {
      "laplacian": 20.61,
      "width": 29.7,
      "brightness": 76.84
    },
    {
      "laplacian": 66.56,
      "width": 58.5,
      "brightness": 78.55
    },
    {
      "laplacian": 24.49,
      "width": 31.7,
      "brightness": 55.53
    },
    {
      "laplacian": 94.72,
      "width": 20.8,
      "brightness": 94.21
    },
    {
      "laplacian": 101.15,
      "width": 47.4,
      "brightness": 90.88
    },
    {
      "laplacian": 72.53,
      "width": 34.3,
      "brightness": 121.13
    },
    {
      "laplacian": 85.53,
      "width": 31.7,
      "brightness": 113.15
    },
    {
      "laplacian": 72.71,
      "width": 118.9,
      "brightness": 58.8
    },
    {
      "laplacian": 90.49,
      "width": 66.3,
      "brightness": 100.97
    },
    {
      "laplacian": 87.43,
      "width": 51.2,
      "brightness": 51.37
    },
    {
      "laplacian": 63.56,
      "width": 35.0,
      "brightness": 97.49
    },
    {
      "laplacian": 109.85,
      "width": 33.1,
      "brightness": 63.53
    },
    {
      "laplacian": 39.97,
      "width": 26.2,
      "brightness": 49.35
    },
    {
      "laplacian": 21.31,
      "width": 37.4,
      "brightness": 85.84
    },
    {
      "laplacian": 20.12,
      "width": 22.9,
      "brightness": 5.0
    },
    {
      "laplacian": 34.59,
      "width": 12.7,
      "brightness": 28.97
    },
    {
      "laplacian": 3.35,
      "width": 31.4,
      "brightness": 73.03
    },
    {
      "laplacian": 56.5,
      "width": 39.4,
      "brightness": 80.31
    },
    {
      "laplacian": 81.34,
      "width": 58.6,
      "brightness": 67.66
    },
    {
      "laplacian": 100.03,
      "width": 18.0,
      "brightness": 33.78
    },
    {
      "laplacian": 5.97,
      "width": 33.3,
      "brightness": 55.1
    },
    {
      "laplacian": 20.86,
      "width": 45.4,
      "brightness": 88.95
    },
    {
      "laplacian": 92.46,
      "width": 44.7,
      "brightness": 94.29
    },
    {
      "laplacian": 38.78,
      "width": 82.4,
      "brightness": 77.55
    },
    {
      "laplacian": 79.86,
      "width": 26.6,
      "brightness": 110.39
    },
    {
      "laplacian": 10.99,
      "width": 16.9,
      "brightness": 89.13
    },
    {
      "laplacian": 133.59,
      "width": 34.7,
      "brightness": 57.07
    },
    {
      "laplacian": 9.88,
      "width": 27.6,
      "brightness": 70.15
    },
    {
      "laplacian": 55.07,
      "width": 24.3,
      "brightness": 38.72
    },
    {
      "laplacian": 56.32,
      "width": 22.1,
      "brightness": 74.97
    },
    {
      "laplacian": 28.49,
      "width": 39.5,
      "brightness": 109.14
    },
    {
      "laplacian": 70.42,
      "width": 19.9,
      "brightness": 97.19
    },
    {
      "laplacian": 72.09,
      "width": 51.2,
      "brightness": 117.26
    },
    {
      "laplacian": 65.76,
      "width": 49.7,
      "brightness": 69.52
    },
    {
      "laplacian": 27.95,
      "width": 41.7,
      "brightness": 115.69
    },
    {
      "laplacian": 22.63,
      "width": 15.1,
      "brightness": 72.59
    },
    {
      "laplacian": 31.12,
      "width": 38.3,
      "brightness": 119.2
    },
    {
      "laplacian": 19.39,
      "width": 60.9,
      "brightness": 77.39
    },
    {
      "laplacian": 113.79,
      "width": 53.5,
      "brightness": 97.8
    },
    {
      "laplacian": 33.89,
      "width": 48.9,
      "brightness": 119.3
    },
    {
      "laplacian": 53.7,
      "width": 32.9,
      "brightness": 72.58
    },
    {
      "laplacian": 92.16,
      "width": 32.0,
      "brightness": 84.11
    },
    {
      "laplacian": 18.33,
      "width": 66.9,
      "brightness": 114.09
    },
    {
      "laplacian": 9.33,
      "width": 39.1,
      "brightness": 74.28
    },
    {
      "laplacian": 19.47,
      "width": 39.4,
      "brightness": 41.02
    },
    {
      "laplacian": 58.95,
      "width": 120.0,
      "brightness": 138.0
    },
    {
      "laplacian": 55.54,
      "width": 26.2,
      "brightness": 64.85
    },
    {
      "laplacian": 65.65,
      "width": 10.0,
      "brightness": 82.45
    },
    {
      "laplacian": 42.35,
      "width": 28.9,
      "brightness": 110.37
    },
    {
      "laplacian": 41.1,
      "width": 30.0,
      "brightness": 60.96
    },
    {
      "laplacian": 102.04,
      "width": 38.7,
      "brightness": 49.78
    },
    {
      "laplacian": 123.04,
      "width": 44.5,
      "brightness": 85.1
    },
    {
      "laplacian": 50.6,
      "width": 10.0,
      "brightness": 27.79
    },
    {
      "laplacian": 55.72,
      "width": 45.0,
      "brightness": 69.94
    },
    {
      "laplacian": 78.65,
      "width": 31.2,
      "brightness": 84.86
    },
    {
      "laplacian": 120.4,
      "width": 27.0,
      "brightness": 70.44
    },
    {
      "laplacian": 46.69,
      "width": 10.0,
      "brightness": 34.78
    },
    {
      "laplacian": 77.76,
      "width": 75.3,
      "brightness": 122.64
    },
    {
      "laplacian": 26.69,
      "width": 24.1,
      "brightness": 80.9
    },
    {
      "laplacian": 11.3,
      "width": 49.3,
      "brightness": 118.07
    },
    {
      "laplacian": 29.7,
      "width": 17.8,
      "brightness": 70.72
    },
    {
      "laplacian": 141.75,
      "width": 39.8,
      "brightness": 53.36
    },
    {
      "laplacian": 79.04,
      "width": 27.3,
      "brightness": 85.54
    },
    {
      "laplacian": 12.73,
      "width": 48.4,
      "brightness": 71.96
    },
    {
      "laplacian": 82.04,
      "width": 26.7,
      "brightness": 45.02
    },
    {
      "laplacian": 13.99,
      "width": 17.2,
      "brightness": 119.15
    },
    {
      "laplacian": 64.89,
      "width": 32.2,
      "brightness": 60.58
    },
    {
      "laplacian": 17.54,
      "width": 31.1,
      "brightness": 26.47
    },
    {
      "laplacian": 11.83,
      "width": 38.1,
      "brightness": 115.19
    },
    {
      "laplacian": 159.7,
      "width": 57.5,
      "brightness": 63.88
    },
    {
      "laplacian": 33.86,
      "width": 14.4,
      "brightness": 60.98
    },
    {
      "laplacian": 77.88,
      "width": 55.7,
      "brightness": 28.57
    },
    {
      "laplacian": 48.46,
      "width": 12.7,
      "brightness": 126.75
    },
    {
      "laplacian": 15.38,
      "width": 47.3,
      "brightness": 41.89
    },
    {
      "laplacian": 37.47,
      "width": 48.2,
      "brightness": 79.64
    },
    {
      "laplacian": 15.54,
      "width": 23.2,
      "brightness": 103.55
    },
    {
      "laplacian": 247.77,
      "width": 18.5,
      "brightness": 89.81
    },
    {
      "laplacian": 89.44,
      "width": 17.7,
      "brightness": 76.33
    },
    {
      "laplacian": 47.64,
      "width": 34.2,
      "brightness": 30.35
    },
    {
      "laplacian": 74.52,
      "width": 50.1,
      "brightness": 55.33
    },
    {
      "laplacian": 84.9,
      "width": 29.5,
      "brightness": 83.26
    },
    {
      "laplacian": 85.08,
      "width": 10.0,
      "brightness": 55.96
    },
    {
      "laplacian": 82.19,
      "width": 22.2,
      "brightness": 83.69
    },
    {
      "laplacian": 77.19,
      "width": 21.6,
      "brightness": 97.09
    },
    {
      "laplacian": 51.21,
      "width": 44.3,
      "brightness": 104.95
    },
    {
      "laplacian": 150.68,
      "width": 45.7,
      "brightness": 43.67
    },
    {
      "laplacian": 54.15,
      "width": 35.9,
      "brightness": 139.51
    },
    {
      "laplacian": 48.9,
      "width": 55.8,
      "brightness": 99.49
    },
    {
      "laplacian": 54.56,
      "width": 58.3,
      "brightness": 77.95
    },
    {
      "laplacian": 58.02,
      "width": 23.1,
      "brightness": 108.51
    },
    {
      "laplacian": 6.04,
      "width": 17.5,
      "brightness": 144.23
    },
    {
      "laplacian": 19.24,
      "width": 30.9,
      "brightness": 37.72
    },
    {
      "laplacian": 42.35,
      "width": 35.9,
      "brightness": 71.69
    },
    {
      "laplacian": 5.59,
      "width": 22.3,
      "brightness": 11.4
    },
    {
      "laplacian": 47.57,
      "width": 120.0,
      "brightness": 83.39
    },
    {
      "laplacian": 57.36,
      "width": 72.7,
      "brightness": 88.23
    },
    {
      "laplacian": 10.65,
      "width": 20.8,
      "brightness": 76.9
    },
    {
      "laplacian": 24.78,
      "width": 14.9,
      "brightness": 59.67
    },
    {
      "laplacian": 126.83,
      "width": 19.7,
      "brightness": 20.61
    },
    {
      "laplacian": 75.15,
      "width": 58.9,
      "brightness": 88.46
    },
    {
      "laplacian": 71.67,
      "width": 59.8,
      "brightness": 118.75
    },
    {
      "laplacian": 115.29,
      "width": 73.3,
      "brightness": 61.45
    },
    {
      "laplacian": 19.67,
      "width": 17.1,
      "brightness": 90.32
    },
    {
      "laplacian": 10.69,
      "width": 44.2,
      "brightness": 34.09
    },
    {
      "laplacian": 103.64,
      "width": 18.3,
      "brightness": 90.8
    },
    {
      "laplacian": 43.46,
      "width": 82.6,
      "brightness": 66.99
    },
    {
      "laplacian": 19.08,
      "width": 17.5,
      "brightness": 56.65
    },
    {
      "laplacian": 5.97,
      "width": 12.3,
      "brightness": 56.71
    },
    {
      "laplacian": 55.11,
      "width": 14.2,
      "brightness": 66.98
    },
    {
      "laplacian": 38.93,
      "width": 32.3,
      "brightness": 88.71
    },
    {
      "laplacian": 32.86,
      "width": 49.7,
      "brightness": 41.26
    },
    {
      "laplacian": 1.49,
      "width": 47.7,
      "brightness": 66.88
    },
    {
      "laplacian": 149.22,
      "width": 14.7,
      "brightness": 76.84
    },
    {
      "laplacian": 8.22,
      "width": 24.9,
      "brightness": 47.23
    },
    {
      "laplacian": 36.07,
      "width": 22.7,
      "brightness": 128.31
    },
    {
      "laplacian": 30.47,
      "width": 13.1,
      "brightness": 54.1
    },
    {
      "laplacian": 76.99,
      "width": 22.3,
      "brightness": 59.26
    },
    {
      "laplacian": 6.07,
      "width": 71.4,
      "brightness": 50.61
    },
    {
      "laplacian": 69.62,
      "width": 11.7,
      "brightness": 128.36
    },
    {
      "laplacian": 55.35,
      "width": 37.4,
      "brightness": 93.48
    },
    {
      "laplacian": 23.51,
      "width": 72.4,
      "brightness": 51.78
    },
    {
      "laplacian": 67.59,
      "width": 70.2,
      "brightness": 108.97
    },
    {
      "laplacian": 47.5,
      "width": 84.8,
      "brightness": 83.62
    },
    {
      "laplacian": 176.09,
      "width": 39.7,
      "brightness": 85.2
    },
    {
      "laplacian": 38.9,
      "width": 43.4,
      "brightness": 68.35
    },
    {
      "laplacian": 16.34,
      "width": 22.6,
      "brightness": 57.02
    },
    {
      "laplacian": 70.2,
      "width": 11.5,
      "brightness": 87.46
    },
    {
      "laplacian": 34.41,
      "width": 29.4,
      "brightness": 62.74
    },
    {
      "laplacian": 46.64,
      "width": 63.2,
      "brightness": 128.87
    },
    {
      "laplacian": 10.81,
      "width": 10.0,
      "brightness": 42.46
    },
    {
      "laplacian": 77.96,
      "width": 23.4,
      "brightness": 121.01
    },
    {
      "laplacian": 29.16,
      "width": 46.0,
      "brightness": 74.88
    },
    {
      "laplacian": 59.12,
      "width": 32.6,
      "brightness": 86.37
    },
    {
      "laplacian": 208.87,
      "width": 67.9,
      "brightness": 101.33
    },
    {
      "laplacian": 36.79,
      "width": 59.4,
      "brightness": 60.35
    },
    {
      "laplacian": 86.77,
      "width": 10.4,
      "brightness": 102.2
    },
    {
      "laplacian": 39.27,
      "width": 34.4,
      "brightness": 5.0
    },
    {
      "laplacian": 23.86,
      "width": 18.9,
      "brightness": 57.84
    },
    {
      "laplacian": 130.2,
      "width": 18.7,
      "brightness": 52.13
    },
    {
      "laplacian": 3.56,
      "width": 11.0,
      "brightness": 42.9
    },
    {
      "laplacian": 105.13,
      "width": 38.1,
      "brightness": 71.98
    },
    {
      "laplacian": 2.81,
      "width": 68.8,
      "brightness": 88.8
    },
    {
      "laplacian": 96.83,
      "width": 40.3,
      "brightness": 97.67
    },
    {
      "laplacian": 47.29,
      "width": 10.5,
      "brightness": 84.74
    },
    {
      "laplacian": 16.39,
      "width": 31.4,
      "brightness": 59.36
    },
    {
      "laplacian": 31.2,
      "width": 44.9,
      "brightness": 88.33
    },
    {
      "laplacian": 83.04,
      "width": 29.9,
      "brightness": 81.48
    },
    {
      "laplacian": 194.73,
      "width": 39.8,
      "brightness": 104.21
    },
    {
      "laplacian": 6.46,
      "width": 20.1,
      "brightness": 99.75
    },
    {
      "laplacian": 17.61,
      "width": 27.6,
      "brightness": 78.85
    },
    {
      "laplacian": 9.56,
      "width": 26.4,
      "brightness": 52.88
    },
    {
      "laplacian": 38.96,
      "width": 76.3,
      "brightness": 59.72
    },
    {
      "laplacian": 98.89,
      "width": 14.9,
      "brightness": 62.61
    },
    {
      "laplacian": 7.86,
      "width": 10.0,
      "brightness": 69.17
    },
    {
      "laplacian": 46.15,
      "width": 73.4,
      "brightness": 85.51
    },
    {
      "laplacian": 96.43,
      "width": 35.1,
      "brightness": 98.02
    },
    {
      "laplacian": 30.75,
      "width": 12.6,
      "brightness": 76.57
    },
    {
      "laplacian": 55.8,
      "width": 56.3,
      "brightness": 78.45
    },
    {
      "laplacian": 123.01,
      "width": 46.6,
      "brightness": 82.01
    },
    {
      "laplacian": 14.0,
      "width": 83.6,
      "brightness": 63.55
    },
    {
      "laplacian": 4.28,
      "width": 36.9,
      "brightness": 52.09
    },
    {
      "laplacian": 61.88,
      "width": 119.1,
      "brightness": 28.85
    },
    {
      "laplacian": 63.36,
      "width": 30.0,
      "brightness": 58.54
    },
    {
      "laplacian": 28.62,
      "width": 46.7,
      "brightness": 91.25
    },
    {
      "laplacian": 23.14,
      "width": 50.9,
      "brightness": 58.32
    },
    {
      "laplacian": 48.16,
      "width": 120.0,
      "brightness": 71.34
    },
    {
      "laplacian": 13.69,
      "width": 24.0,
      "brightness": 91.06
    },
    {
      "laplacian": 13.72,
      "width": 23.5,
      "brightness": 92.58
    },
    {
      "laplacian": 82.6,
      "width": 51.5,
      "brightness": 47.77
    },
    {
      "laplacian": 12.55,
      "width": 11.7,
      "brightness": 105.92
    },
    {
      "laplacian": 4.77,
      "width": 18.8,
      "brightness": 109.57
    },
    {
      "laplacian": 23.09,
      "width": 29.5,
      "brightness": 46.36
    },
    {
      "laplacian": 29.34,
      "width": 82.1,
      "brightness": 54.93
    },
    {
      "laplacian": 69.61,
      "width": 51.5,
      "brightness": 111.35
    },
    {
      "laplacian": 25.32,
      "width": 34.2,
      "brightness": 73.89
    },
    {
      "laplacian": 139.04,
      "width": 22.5,
      "brightness": 15.85
    },
    {
      "laplacian": 50.45,
      "width": 101.7,
      "brightness": 38.81
    },
    {
      "laplacian": 19.73,
      "width": 31.2,
      "brightness": 71.02
    },
    {
      "laplacian": 67.18,
      "width": 18.8,
      "brightness": 45.43
    },
    {
      "laplacian": 137.19,
      "width": 113.2,
      "brightness": 66.42
    },
    {
      "laplacian": 80.79,
      "width": 12.2,
      "brightness": 78.91
    },
    {
      "laplacian": 7.19,
      "width": 70.0,
      "brightness": 118.94
    },
    {
      "laplacian": 31.97,
      "width": 32.8,
      "brightness": 69.87
    },
    {
      "laplacian": 58.33,
      "width": 51.5,
      "brightness": 108.03
    },
    {
      "laplacian": 78.09,
      "width": 45.9,
      "brightness": 118.01
    },
    {
      "laplacian": 39.19,
      "width": 51.0,
      "brightness": 118.16
    },
    {
      "laplacian": 34.14,
      "width": 119.2,
      "brightness": 85.97
    },
    {
      "laplacian": 175.13,
      "width": 108.6,
      "brightness": 23.03
    },
    {
      "laplacian": 81.76,
      "width": 19.6,
      "brightness": 90.9
    },
    {
      "laplacian": 67.35,
      "width": 44.8,
      "brightness": 107.36
    },
    {
      "laplacian": 26.46,
      "width": 10.0,
      "brightness": 75.73
    },
    {
      "laplacian": 13.45,
      "width": 54.4,
      "brightness": 126.85
    },
    {
      "laplacian": 68.35,
      "width": 62.3,
      "brightness": 102.08
    },
    {
      "laplacian": 89.06,
      "width": 10.0,
      "brightness": 93.91
    },
    {
      "laplacian": 46.43,
      "width": 32.0,
      "brightness": 108.42
    },
    {
      "laplacian": 81.93,
      "width": 51.4,
      "brightness": 87.33
    },
    {
      "laplacian": 83.63,
      "width": 40.9,
      "brightness": 8.2
    },
    {
      "laplacian": 93.8,
      "width": 12.4,
      "brightness": 64.02
    },
    {
      "laplacian": 7.01,
      "width": 13.5,
      "brightness": 111.52
    },
    {
      "laplacian": 32.88,
      "width": 29.5,
      "brightness": 55.39
    },
    {
      "laplacian": 71.81,
      "width": 24.0,
      "brightness": 71.74
    },
    {
      "laplacian": 48.85,
      "width": 25.6,
      "brightness": 48.74
    },
    {
      "laplacian": 83.84,
      "width": 11.0,
      "brightness": 127.95
    },
    {
      "laplacian": 67.32,
      "width": 33.2,
      "brightness": 125.08
    },
    {
      "laplacian": 1.76,
      "width": 82.5,
      "brightness": 53.25
    },
    {
      "laplacian": 111.93,
      "width": 12.8,
      "brightness": 82.12
    },
    {
      "laplacian": 28.89,
      "width": 27.9,
      "brightness": 58.95
    },
    {
      "laplacian": 18.43,
      "width": 47.9,
      "brightness": 95.22
    },
    {
      "laplacian": 109.07,
      "width": 10.0,
      "brightness": 92.27
    },
    {
      "laplacian": 78.72,
      "width": 33.4,
      "brightness": 100.73
    },
    {
      "laplacian": 121.05,
      "width": 61.2,
      "brightness": 87.29
    },
    {
      "laplacian": 58.89,
      "width": 15.1,
      "brightness": 160.19
    },
    {
      "laplacian": 32.46,
      "width": 35.6,
      "brightness": 49.22
    },
    {
      "laplacian": 53.14,
      "width": 58.5,
      "brightness": 30.1
    },
    {
      "laplacian": 14.82,
      "width": 115.6,
      "brightness": 66.99
    },
    {
      "laplacian": 9.23,
      "width": 34.4,
      "brightness": 34.1
    },
    {
      "laplacian": 24.42,
      "width": 19.2,
      "brightness": 36.21
    },
    {
      "laplacian": 149.24,
      "width": 10.0,
      "brightness": 49.96
    },
    {
      "laplacian": 27.13,
      "width": 19.3,
      "brightness": 52.18
    },
    {
      "laplacian": 4.94,
      "width": 10.4,
      "brightness": 51.27
    },
    {
      "laplacian": 40.25,
      "width": 86.5,
      "brightness": 92.51
    },
    {
      "laplacian": 26.76,
      "width": 56.4,
      "brightness": 63.83
    },
    {
      "laplacian": 113.51,
      "width": 13.5,
      "brightness": 72.97
    },
    {
      "laplacian": 141.39,
      "width": 18.3,
      "brightness": 103.04
    },
    {
      "laplacian": 30.99,
      "width": 34.0,
      "brightness": 56.54
    },
    {
      "laplacian": 58.84,
      "width": 60.9,
      "brightness": 70.59
    },
    {
      "laplacian": 63.15,
      "width": 44.9,
      "brightness": 88.24
    },
    {
      "laplacian": 44.6,
      "width": 42.2,
      "brightness": 23.64
    },
    {
      "laplacian": 37.4,
      "width": 37.2,
      "brightness": 11.22
    },
    {
      "laplacian": 17.04,
      "width": 14.1,
      "brightness": 87.69
    },
    {
      "laplacian": 3.72,
      "width": 34.3,
      "brightness": 91.78
    },
    {
      "laplacian": 16.93,
      "width": 31.6,
      "brightness": 135.8
    },
    {
      "laplacian": 43.15,
      "width": 10.3,
      "brightness": 82.43
    },
    {
      "laplacian": 7.88,
      "width": 85.2,
      "brightness": 100.95
    },
    {
      "laplacian": 56.21,
      "width": 21.1,
      "brightness": 72.53
    },
    {
      "laplacian": 49.73,
      "width": 10.6,
      "brightness": 86.32
    },
    {
      "laplacian": 26.81,
      "width": 23.8,
      "brightness": 124.68
    },
    {
      "laplacian": 35.89,
      "width": 27.1,
      "brightness": 18.53
    },
    {
      "laplacian": 10.03,
      "width": 31.0,
      "brightness": 89.58
    },
    {
      "laplacian": 92.48,
      "width": 26.8,
      "brightness": 137.8
    },
    {
      "laplacian": 91.23,
      "width": 32.2,
      "brightness": 85.9
    },
    {
      "laplacian": 12.56,
      "width": 35.9,
      "brightness": 124.22
    },
    {
      "laplacian": 13.03,
      "width": 34.7,
      "brightness": 60.38
    },
    {
      "laplacian": 17.19,
      "width": 42.0,
      "brightness": 77.1
    },
    {
      "laplacian": 74.78,
      "width": 43.6,
      "brightness": 78.94
    },
    {
      "laplacian": 62.98,
      "width": 44.3,
      "brightness": 15.91
    },
    {
      "laplacian": 108.12,
      "width": 51.4,
      "brightness": 45.29
    },
    {
      "laplacian": 117.63,
      "width": 19.5,
      "brightness": 47.29
    },
    {
      "laplacian": 6.85,
      "width": 20.0,
      "brightness": 101.02
    },
    {
      "laplacian": 72.6,
      "width": 61.1,
      "brightness": 102.42
    },
    {
      "laplacian": 114.05,
      "width": 24.3,
      "brightness": 87.07
    },
    {
      "laplacian": 33.67,
      "width": 29.8,
      "brightness": 101.07
    },
    {
      "laplacian": 45.66,
      "width": 28.1,
      "brightness": 73.4
    },
    {
      "laplacian": 39.53,
      "width": 113.1,
      "brightness": 111.65
    },
    {
      "laplacian": 41.21,
      "width": 17.1,
      "brightness": 78.25
    },
    {
      "laplacian": 92.23,
      "width": 16.8,
      "brightness": 79.62
    },
    {
      "laplacian": 170.42,
      "width": 32.3,
      "brightness": 70.56
    },
    {
      "laplacian": 135.41,
      "width": 28.6,
      "brightness": 97.16
    },
    {
      "laplacian": 28.13,
      "width": 13.4,
      "brightness": 66.21
    },
    {
      "laplacian": 59.0,
      "width": 30.5,
      "brightness": 105.34
    },
    {
      "laplacian": 20.33,
      "width": 32.9,
      "brightness": 46.3
    },
    {
      "laplacian": 22.74,
      "width": 22.6,
      "brightness": 47.23
    },
    {
      "laplacian": 43.82,
      "width": 29.3,
      "brightness": 97.25
    },
    {
      "laplacian": 22.07,
      "width": 18.3,
      "brightness": 75.52
    },
    {
      "laplacian": 25.82,
      "width": 13.4,
      "brightness": 65.29
    },
    {
      "laplacian": 57.79,
      "width": 24.2,
      "brightness": 102.92
    },
    {
      "laplacian": 71.76,
      "width": 15.1,
      "brightness": 61.0
    },
    {
      "laplacian": 70.17,
      "width": 11.4,
      "brightness": 72.39
    },
    {
      "laplacian": 70.76,
      "width": 10.0,
      "brightness": 117.18
    },
    {
      "laplacian": 11.02,
      "width": 37.6,
      "brightness": 121.1
    },
    {
      "laplacian": 20.85,
      "width": 23.6,
      "brightness": 122.03
    },
    {
      "laplacian": 48.33,
      "width": 61.3,
      "brightness": 70.1
    },
    {
      "laplacian": 110.07,
      "width": 25.0,
      "brightness": 112.46
    },
    {
      "laplacian": 241.42,
      "width": 37.5,
      "brightness": 51.43
    },
    {
      "laplacian": 61.06,
      "width": 20.4,
      "brightness": 52.61
    },
    {
      "laplacian": 85.3,
      "width": 31.6,
      "brightness": 12.19
    },
    {
      "laplacian": 9.43,
      "width": 10.0,
      "brightness": 124.84
    },
    {
      "laplacian": 83.46,
      "width": 23.9,
      "brightness": 53.81
    },
    {
      "laplacian": 20.76,
      "width": 17.2,
      "brightness": 74.46
    },
    {
      "laplacian": 26.72,
      "width": 57.5,
      "brightness": 52.51
    },
    {
      "laplacian": 94.53,
      "width": 35.9,
      "brightness": 97.46
    },
    {
      "laplacian": 47.77,
      "width": 52.7,
      "brightness": 67.48
    },
    {
      "laplacian": 3.16,
      "width": 65.4,
      "brightness": 41.47
    },
    {
      "laplacian": 28.44,
      "width": 22.6,
      "brightness": 90.37
    },
    {
      "laplacian": 140.95,
      "width": 34.9,
      "brightness": 37.86
    },
    {
      "laplacian": 35.62,
      "width": 14.0,
      "brightness": 54.55
    },
    {
      "laplacian": 35.59,
      "width": 41.1,
      "brightness": 19.01
    },
    {
      "laplacian": 89.82,
      "width": 45.0,
      "brightness": 38.13
    },
    {
      "laplacian": 62.95,
      "width": 39.4,
      "brightness": 83.0
    },
    {
      "laplacian": 33.77,
      "width": 22.5,
      "brightness": 22.99
    },
    {
      "laplacian": 24.9,
      "width": 90.0,
      "brightness": 36.53
    },
    {
      "laplacian": 325.22,
      "width": 32.8,
      "brightness": 77.93
    },
    {
      "laplacian": 123.74,
      "width": 14.1,
      "brightness": 62.78
    },
    {
      "laplacian": 70.74,
      "width": 47.6,
      "brightness": 133.78
    },
    {
      "laplacian": 74.53,
      "width": 58.6,
      "brightness": 129.35
    },
    {
      "laplacian": 41.45,
      "width": 14.3,
      "brightness": 53.7
    },
    {
      "laplacian": 62.31,
      "width": 27.2,
      "brightness": 93.6
    },
    {
      "laplacian": 37.43,
      "width": 10.4,
      "brightness": 98.98
    },
    {
      "laplacian": 18.7,
      "width": 66.9,
      "brightness": 61.27
    },
    {
      "laplacian": 64.41,
      "width": 30.3,
      "brightness": 36.12
    },
    {
      "laplacian": 34.39,
      "width": 17.2,
      "brightness": 77.66
    },
    {
      "laplacian": 67.27,
      "width": 59.0,
      "brightness": 73.16
    },
    {
      "laplacian": 78.1,
      "width": 32.2,
      "brightness": 65.8
    },
    {
      "laplacian": 70.27,
      "width": 54.2,
      "brightness": 90.38
    },
    {
      "laplacian": 16.99,
      "width": 42.8,
      "brightness": 56.98
    },
    {
      "laplacian": 30.86,
      "width": 15.5,
      "brightness": 45.74
    },
    {
      "laplacian": 35.04,
      "width": 22.0,
      "brightness": 81.05
    },
    {
      "laplacian": 102.8,
      "width": 17.6,
      "brightness": 88.81
    },
    {
      "laplacian": 98.66,
      "width": 13.3,
      "brightness": 45.05
    },
    {
      "laplacian": 22.23,
      "width": 10.0,
      "brightness": 103.99
    },
    {
      "laplacian": 10.68,
      "width": 100.7,
      "brightness": 28.43
    },
    {
      "laplacian": 249.63,
      "width": 38.9,
      "brightness": 61.81
    },
    {
      "laplacian": 67.98,
      "width": 42.6,
      "brightness": 70.78
    },
    {
      "laplacian": 8.87,
      "width": 63.1,
      "brightness": 60.19
    },
    {
      "laplacian": 26.27,
      "width": 21.8,
      "brightness": 62.18
    },
    {
      "laplacian": 106.17,
      "width": 11.0,
      "brightness": 130.39
    },
    {
      "laplacian": 207.55,
      "width": 51.3,
      "brightness": 54.18
    },
    {
      "laplacian": 183.16,
      "width": 12.6,
      "brightness": 146.35
    },
    {
      "laplacian": 65.61,
      "width": 50.5,
      "brightness": 90.24
    },
    {
      "laplacian": 46.81,
      "width": 10.0,
      "brightness": 80.58
    },
    {
      "laplacian": 15.14,
      "width": 11.8,
      "brightness": 91.33
    },
    {
      "laplacian": 50.47,
      "width": 20.3,
      "brightness": 148.84
    },
    {
      "laplacian": 17.69,
      "width": 49.3,
      "brightness": 50.18
    },
    {
      "laplacian": 31.16,
      "width": 82.9,
      "brightness": 46.63
    },
    {
      "laplacian": 94.45,
      "width": 42.6,
      "brightness": 56.86
    },
    {
      "laplacian": 37.25,
      "width": 20.9,
      "brightness": 78.9
    },
    {
      "laplacian": 34.88,
      "width": 57.0,
      "brightness": 29.68
    },
    {
      "laplacian": 44.53,
      "width": 10.0,
      "brightness": 78.63
    },
    {
      "laplacian": 276.17,
      "width": 16.1,
      "brightness": 125.42
    },
    {
      "laplacian": 13.22,
      "width": 34.3,
      "brightness": 82.24
    },
    {
      "laplacian": 59.87,
      "width": 52.3,
      "brightness": 69.8
    },
    {
      "laplacian": 171.34,
      "width": 28.1,
      "brightness": 60.69
    },
    {
      "laplacian": 44.41,
      "width": 26.1,
      "brightness": 103.16
    },
    {
      "laplacian": 122.01,
      "width": 27.1,
      "brightness": 54.88
    },
    {
      "laplacian": 9.72,
      "width": 62.7,
      "brightness": 129.7
    },
    {
      "laplacian": 38.43,
      "width": 18.5,
      "brightness": 132.13
    },
    {
      "laplacian": 19.93,
      "width": 15.3,
      "brightness": 85.19
    },
    {
      "laplacian": 43.98,
      "width": 26.8,
      "brightness": 77.68
    },
    {
      "laplacian": 44.84,
      "width": 68.1,
      "brightness": 106.86
    },
    {
      "laplacian": 49.22,
      "width": 20.1,
      "brightness": 108.65
    },
    {
      "laplacian": 93.76,
      "width": 27.1,
      "brightness": 55.43
    },
    {
      "laplacian": 1.34,
      "width": 10.0,
      "brightness": 63.26
    },
    {
      "laplacian": 25.06,
      "width": 27.9,
      "brightness": 40.97
    },
    {
      "laplacian": 56.4,
      "width": 37.7,
      "brightness": 89.45
    },
    {
      "laplacian": 3.48,
      "width": 12.6,
      "brightness": 96.67
    },
    {
      "laplacian": 78.89,
      "width": 62.8,
      "brightness": 40.2
    },
    {
      "laplacian": 24.56,
      "width": 37.4,
      "brightness": 65.25
    },
    {
      "laplacian": 39.14,
      "width": 22.4,
      "brightness": 40.28
    },
    {
      "laplacian": 97.14,
      "width": 37.6,
      "brightness": 52.83
    },
    {
      "laplacian": 126.26,
      "width": 44.2,
      "brightness": 93.43
    },
    {
      "laplacian": 80.85,
      "width": 10.0,
      "brightness": 57.46
    },
    {
      "laplacian": 12.75,
      "width": 38.5,
      "brightness": 69.58
    },
    {
      "laplacian": 77.61,
      "width": 66.6,
      "brightness": 32.44
    },
    {
      "laplacian": 81.91,
      "width": 18.3,
      "brightness": 83.24
    },
    {
      "laplacian": 69.34,
      "width": 22.7,
      "brightness": 76.76
    },
    {
      "laplacian": 142.06,
      "width": 25.4,
      "brightness": 57.59
    },
    {
      "laplacian": 50.38,
      "width": 52.7,
      "brightness": 72.71
    },
    {
      "laplacian": 137.98,
      "width": 14.3,
      "brightness": 83.05
    },
    {
      "laplacian": 137.35,
      "width": 42.9,
      "brightness": 55.18
    },
    {
      "laplacian": 83.78,
      "width": 25.8,
      "brightness": 36.66
    },
    {
      "laplacian": 60.69,
      "width": 85.3,
      "brightness": 128.56
    },
    {
      "laplacian": 69.68,
      "width": 26.8,
      "brightness": 60.27
    },
    {
      "laplacian": 165.38,
      "width": 10.0,
      "brightness": 75.29
    },
    {
      "laplacian": 109.96,
      "width": 48.0,
      "brightness": 106.3
    },
    {
      "laplacian": 14.76,
      "width": 41.5,
      "brightness": 176.81
    },
    {
      "laplacian": 66.06,
      "width": 36.3,
      "brightness": 43.15
    },
    {
      "laplacian": 18.79,
      "width": 65.5,
      "brightness": 90.6
    },
    {
      "laplacian": 23.78,
      "width": 10.0,
      "brightness": 58.19
    },
    {
      "laplacian": 32.42,
      "width": 16.3,
      "brightness": 62.91
    },
    {
      "laplacian": 8.47,
      "width": 31.5,
      "brightness": 57.83
    },
    {
      "laplacian": 17.41,
      "width": 35.1,
      "brightness": 46.48
    },
    {
      "laplacian": 147.89,
      "width": 28.5,
      "brightness": 76.84
    },
    {
      "laplacian": 23.62,
      "width": 10.0,
      "brightness": 36.71
    },
    {
      "laplacian": 94.18,
      "width": 22.9,
      "brightness": 104.51
    },
    {
      "laplacian": 54.49,
      "width": 81.7,
      "brightness": 79.54
    },
    {
      "laplacian": 74.88,
      "width": 13.8,
      "brightness": 89.83
    },
    {
      "laplacian": 77.52,
      "width": 31.0,
      "brightness": 64.95
    },
    {
      "laplacian": 16.52,
      "width": 43.0,
      "brightness": 67.72
    },
    {
      "laplacian": 93.74,
      "width": 51.7,
      "brightness": 86.05
    },
    {
      "laplacian": 11.1,
      "width": 47.9,
      "brightness": 45.41
    },
    {
      "laplacian": 22.57,
      "width": 21.7,
      "brightness": 67.98
    },
    {
      "laplacian": 76.6,
      "width": 16.3,
      "brightness": 53.93
    },
    {
      "laplacian": 15.25,
      "width": 85.7,
      "brightness": 53.06
    },
    {
      "laplacian": 2.86,
      "width": 54.9,
      "brightness": 18.92
    },
    {
      "laplacian": 63.46,
      "width": 33.0,
      "brightness": 115.5
    },
    {
      "laplacian": 6.45,
      "width": 72.4,
      "brightness": 58.78
    },
    {
      "laplacian": 82.59,
      "width": 10.0,
      "brightness": 110.57
    },
    {
      "laplacian": 34.8,
      "width": 11.1,
      "brightness": 107.93
    },
    {
      "laplacian": 62.69,
      "width": 10.0,
      "brightness": 41.99
    },
    {
      "laplacian": 61.7,
      "width": 34.8,
      "brightness": 47.52
    },
    {
      "laplacian": 87.59,
      "width": 35.9,
      "brightness": 149.69
    },
    {
      "laplacian": 78.45,
      "width": 10.2,
      "brightness": 127.03
    },
    {
      "laplacian": 15.08,
      "width": 53.7,
      "brightness": 77.12
    },
    {
      "laplacian": 36.9,
      "width": 10.0,
      "brightness": 85.21
    },
    {
      "laplacian": 62.63,
      "width": 39.9,
      "brightness": 60.34
    },
    {
      "laplacian": 139.85,
      "width": 45.8,
      "brightness": 90.11
    },
    {
      "laplacian": 79.03,
      "width": 34.6,
      "brightness": 57.92
    },
    {
      "laplacian": 130.85,
      "width": 10.0,
      "brightness": 21.09
    },
    {
      "laplacian": 65.45,
      "width": 65.1,
      "brightness": 41.0
    },
    {
      "laplacian": 111.45,
      "width": 22.2,
      "brightness": 78.59
    },
    {
      "laplacian": 58.29,
      "width": 22.3,
      "brightness": 46.33
    },
    {
      "laplacian": 107.95,
      "width": 19.2,
      "brightness": 76.12
    },
    {
      "laplacian": 33.07,
      "width": 48.9,
      "brightness": 47.91
    },
    {
      "laplacian": 152.05,
      "width": 21.5,
      "brightness": 56.09
    },
    {
      "laplacian": 71.77,
      "width": 12.8,
      "brightness": 101.89
    },
    {
      "laplacian": 8.56,
      "width": 57.5,
      "brightness": 84.93
    },
    {
      "laplacian": 64.42,
      "width": 30.5,
      "brightness": 77.73
    },
    {
      "laplacian": 79.24,
      "width": 58.8,
      "brightness": 102.61
    },
    {
      "laplacian": 96.31,
      "width": 32.1,
      "brightness": 91.46
    },
    {
      "laplacian": 192.25,
      "width": 18.3,
      "brightness": 118.5
    },
    {
      "laplacian": 28.05,
      "width": 10.0,
      "brightness": 65.12
    },
    {
      "laplacian": 193.19,
      "width": 34.9,
      "brightness": 65.97
    },
    {
      "laplacian": 46.83,
      "width": 25.5,
      "brightness": 41.57
    },
    {
      "laplacian": 21.38,
      "width": 50.2,
      "brightness": 65.99
    },
    {
      "laplacian": 28.68,
      "width": 20.8,
      "brightness": 105.01
    },
    {
      "laplacian": 75.45,
      "width": 40.6,
      "brightness": 114.4
    },
    {
      "laplacian": 18.04,
      "width": 31.2,
      "brightness": 104.89
    },
    {
      "laplacian": 33.63,
      "width": 17.1,
      "brightness": 27.76
    },
    {
      "laplacian": 63.07,
      "width": 22.0,
      "brightness": 108.33
    },
    {
      "laplacian": 151.17,
      "width": 10.9,
      "brightness": 26.52
    },
    {
      "laplacian": 94.14,
      "width": 89.3,
      "brightness": 103.15
    }
  ],
  "eda_camera_stats": {
    "median": 1.0,
    "iqr": 0.0
  }
};