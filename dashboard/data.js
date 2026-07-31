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
      "laplacian": 396.54,
      "width": 11.5,
      "brightness": 40.0
    },
    {
      "laplacian": 208.38,
      "width": 8.6,
      "brightness": 59.86
    },
    {
      "laplacian": 186.61,
      "width": 11.1,
      "brightness": 69.1
    },
    {
      "laplacian": 186.61,
      "width": 10.8,
      "brightness": 52.94
    },
    {
      "laplacian": 930.95,
      "width": 14.1,
      "brightness": 40.0
    },
    {
      "laplacian": 502.71,
      "width": 10.0,
      "brightness": 88.37
    },
    {
      "laplacian": 139.71,
      "width": 10.5,
      "brightness": 83.01
    },
    {
      "laplacian": 413.35,
      "width": 11.2,
      "brightness": 99.14
    },
    {
      "laplacian": 311.36,
      "width": 10.8,
      "brightness": 57.57
    },
    {
      "laplacian": 10.0,
      "width": 14.7,
      "brightness": 98.72
    },
    {
      "laplacian": 62.83,
      "width": 9.7,
      "brightness": 115.64
    },
    {
      "laplacian": 334.14,
      "width": 11.2,
      "brightness": 87.77
    },
    {
      "laplacian": 860.27,
      "width": 12.7,
      "brightness": 68.58
    },
    {
      "laplacian": 188.44,
      "width": 13.8,
      "brightness": 85.19
    },
    {
      "laplacian": 126.63,
      "width": 11.2,
      "brightness": 67.53
    },
    {
      "laplacian": 272.74,
      "width": 8.2,
      "brightness": 63.87
    },
    {
      "laplacian": 117.36,
      "width": 11.7,
      "brightness": 97.03
    },
    {
      "laplacian": 174.3,
      "width": 14.7,
      "brightness": 78.94
    },
    {
      "laplacian": 239.17,
      "width": 12.6,
      "brightness": 108.51
    },
    {
      "laplacian": 58.19,
      "width": 12.5,
      "brightness": 72.27
    },
    {
      "laplacian": 526.42,
      "width": 9.9,
      "brightness": 74.49
    },
    {
      "laplacian": 43.27,
      "width": 9.7,
      "brightness": 69.54
    },
    {
      "laplacian": 297.68,
      "width": 12.0,
      "brightness": 57.36
    },
    {
      "laplacian": 490.54,
      "width": 9.1,
      "brightness": 99.92
    },
    {
      "laplacian": 290.13,
      "width": 13.6,
      "brightness": 130.09
    },
    {
      "laplacian": 213.75,
      "width": 10.3,
      "brightness": 73.59
    },
    {
      "laplacian": 172.34,
      "width": 12.0,
      "brightness": 67.03
    },
    {
      "laplacian": 141.31,
      "width": 8.2,
      "brightness": 65.6
    },
    {
      "laplacian": 635.68,
      "width": 11.2,
      "brightness": 67.05
    },
    {
      "laplacian": 337.33,
      "width": 9.6,
      "brightness": 118.3
    },
    {
      "laplacian": 155.49,
      "width": 8.0,
      "brightness": 66.19
    },
    {
      "laplacian": 105.53,
      "width": 13.1,
      "brightness": 69.12
    },
    {
      "laplacian": 439.58,
      "width": 15.3,
      "brightness": 54.71
    },
    {
      "laplacian": 622.83,
      "width": 14.3,
      "brightness": 88.46
    },
    {
      "laplacian": 575.36,
      "width": 13.4,
      "brightness": 80.52
    },
    {
      "laplacian": 83.06,
      "width": 11.2,
      "brightness": 56.98
    },
    {
      "laplacian": 170.66,
      "width": 13.6,
      "brightness": 62.36
    },
    {
      "laplacian": 137.97,
      "width": 14.4,
      "brightness": 115.72
    },
    {
      "laplacian": 197.42,
      "width": 12.3,
      "brightness": 82.72
    },
    {
      "laplacian": 522.06,
      "width": 9.6,
      "brightness": 84.24
    },
    {
      "laplacian": 795.66,
      "width": 11.0,
      "brightness": 84.32
    },
    {
      "laplacian": 349.67,
      "width": 15.4,
      "brightness": 112.68
    },
    {
      "laplacian": 110.36,
      "width": 11.9,
      "brightness": 59.01
    },
    {
      "laplacian": 233.45,
      "width": 8.0,
      "brightness": 73.28
    },
    {
      "laplacian": 921.68,
      "width": 9.1,
      "brightness": 78.28
    },
    {
      "laplacian": 266.07,
      "width": 11.2,
      "brightness": 44.13
    },
    {
      "laplacian": 172.77,
      "width": 14.1,
      "brightness": 61.84
    },
    {
      "laplacian": 189.79,
      "width": 11.5,
      "brightness": 105.03
    },
    {
      "laplacian": 348.16,
      "width": 14.1,
      "brightness": 98.72
    },
    {
      "laplacian": 87.04,
      "width": 10.9,
      "brightness": 102.62
    },
    {
      "laplacian": 133.97,
      "width": 8.1,
      "brightness": 69.04
    },
    {
      "laplacian": 568.04,
      "width": 11.0,
      "brightness": 71.75
    },
    {
      "laplacian": 338.84,
      "width": 12.7,
      "brightness": 42.66
    },
    {
      "laplacian": 268.86,
      "width": 12.5,
      "brightness": 102.5
    },
    {
      "laplacian": 592.86,
      "width": 9.5,
      "brightness": 106.13
    },
    {
      "laplacian": 101.81,
      "width": 11.3,
      "brightness": 105.85
    },
    {
      "laplacian": 166.88,
      "width": 17.4,
      "brightness": 117.29
    },
    {
      "laplacian": 328.33,
      "width": 9.5,
      "brightness": 91.29
    },
    {
      "laplacian": 317.27,
      "width": 13.3,
      "brightness": 116.25
    },
    {
      "laplacian": 29.12,
      "width": 8.0,
      "brightness": 77.59
    },
    {
      "laplacian": 148.7,
      "width": 13.7,
      "brightness": 43.13
    },
    {
      "laplacian": 203.01,
      "width": 10.2,
      "brightness": 100.94
    },
    {
      "laplacian": 363.96,
      "width": 12.8,
      "brightness": 42.31
    },
    {
      "laplacian": 316.18,
      "width": 9.4,
      "brightness": 85.74
    },
    {
      "laplacian": 223.77,
      "width": 12.6,
      "brightness": 103.02
    },
    {
      "laplacian": 10.0,
      "width": 10.2,
      "brightness": 89.13
    },
    {
      "laplacian": 235.82,
      "width": 10.6,
      "brightness": 132.12
    },
    {
      "laplacian": 258.71,
      "width": 12.9,
      "brightness": 40.0
    },
    {
      "laplacian": 1617.55,
      "width": 11.1,
      "brightness": 80.18
    },
    {
      "laplacian": 195.9,
      "width": 12.8,
      "brightness": 82.38
    },
    {
      "laplacian": 330.06,
      "width": 11.6,
      "brightness": 52.43
    },
    {
      "laplacian": 679.09,
      "width": 12.1,
      "brightness": 56.62
    },
    {
      "laplacian": 496.18,
      "width": 12.9,
      "brightness": 63.41
    },
    {
      "laplacian": 822.74,
      "width": 11.3,
      "brightness": 57.81
    },
    {
      "laplacian": 29.98,
      "width": 10.0,
      "brightness": 79.62
    },
    {
      "laplacian": 65.22,
      "width": 10.9,
      "brightness": 68.73
    },
    {
      "laplacian": 122.96,
      "width": 14.4,
      "brightness": 88.99
    },
    {
      "laplacian": 21.35,
      "width": 12.2,
      "brightness": 96.29
    },
    {
      "laplacian": 260.98,
      "width": 10.3,
      "brightness": 94.8
    },
    {
      "laplacian": 73.24,
      "width": 12.8,
      "brightness": 72.98
    },
    {
      "laplacian": 912.37,
      "width": 12.9,
      "brightness": 88.26
    },
    {
      "laplacian": 90.41,
      "width": 13.0,
      "brightness": 104.77
    },
    {
      "laplacian": 168.02,
      "width": 10.0,
      "brightness": 91.8
    },
    {
      "laplacian": 522.49,
      "width": 10.6,
      "brightness": 122.9
    },
    {
      "laplacian": 42.45,
      "width": 10.6,
      "brightness": 103.61
    },
    {
      "laplacian": 18.55,
      "width": 11.3,
      "brightness": 119.8
    },
    {
      "laplacian": 294.05,
      "width": 13.1,
      "brightness": 40.0
    },
    {
      "laplacian": 316.91,
      "width": 12.6,
      "brightness": 84.13
    },
    {
      "laplacian": 508.83,
      "width": 12.8,
      "brightness": 74.87
    },
    {
      "laplacian": 405.73,
      "width": 14.7,
      "brightness": 79.25
    },
    {
      "laplacian": 328.6,
      "width": 13.4,
      "brightness": 64.29
    },
    {
      "laplacian": 105.06,
      "width": 11.7,
      "brightness": 90.72
    },
    {
      "laplacian": 308.38,
      "width": 9.6,
      "brightness": 42.22
    },
    {
      "laplacian": 327.36,
      "width": 10.6,
      "brightness": 90.88
    },
    {
      "laplacian": 100.03,
      "width": 11.5,
      "brightness": 65.02
    },
    {
      "laplacian": 1126.27,
      "width": 13.7,
      "brightness": 70.99
    },
    {
      "laplacian": 388.32,
      "width": 11.9,
      "brightness": 91.65
    },
    {
      "laplacian": 66.95,
      "width": 10.7,
      "brightness": 83.73
    },
    {
      "laplacian": 511.08,
      "width": 10.5,
      "brightness": 105.19
    },
    {
      "laplacian": 590.37,
      "width": 11.9,
      "brightness": 60.67
    },
    {
      "laplacian": 366.95,
      "width": 13.8,
      "brightness": 80.22
    },
    {
      "laplacian": 184.16,
      "width": 15.2,
      "brightness": 101.55
    },
    {
      "laplacian": 94.45,
      "width": 11.6,
      "brightness": 89.95
    },
    {
      "laplacian": 223.12,
      "width": 11.9,
      "brightness": 91.36
    },
    {
      "laplacian": 342.9,
      "width": 9.6,
      "brightness": 106.38
    },
    {
      "laplacian": 246.07,
      "width": 15.9,
      "brightness": 73.06
    },
    {
      "laplacian": 852.95,
      "width": 9.2,
      "brightness": 68.43
    },
    {
      "laplacian": 445.02,
      "width": 14.3,
      "brightness": 94.67
    },
    {
      "laplacian": 80.79,
      "width": 11.3,
      "brightness": 78.71
    },
    {
      "laplacian": 56.88,
      "width": 10.8,
      "brightness": 106.69
    },
    {
      "laplacian": 391.41,
      "width": 9.8,
      "brightness": 90.14
    },
    {
      "laplacian": 188.95,
      "width": 16.8,
      "brightness": 68.29
    },
    {
      "laplacian": 480.42,
      "width": 12.4,
      "brightness": 89.44
    },
    {
      "laplacian": 388.11,
      "width": 12.0,
      "brightness": 62.14
    },
    {
      "laplacian": 224.17,
      "width": 13.8,
      "brightness": 102.83
    },
    {
      "laplacian": 82.1,
      "width": 10.7,
      "brightness": 51.26
    },
    {
      "laplacian": 23.25,
      "width": 12.0,
      "brightness": 108.89
    },
    {
      "laplacian": 302.86,
      "width": 12.1,
      "brightness": 89.06
    },
    {
      "laplacian": 41.25,
      "width": 11.0,
      "brightness": 78.38
    },
    {
      "laplacian": 77.5,
      "width": 14.4,
      "brightness": 98.79
    },
    {
      "laplacian": 284.98,
      "width": 11.6,
      "brightness": 93.25
    },
    {
      "laplacian": 258.16,
      "width": 8.9,
      "brightness": 111.27
    },
    {
      "laplacian": 50.03,
      "width": 11.4,
      "brightness": 111.06
    },
    {
      "laplacian": 648.61,
      "width": 12.5,
      "brightness": 89.75
    },
    {
      "laplacian": 634.04,
      "width": 10.2,
      "brightness": 62.82
    },
    {
      "laplacian": 403.2,
      "width": 10.4,
      "brightness": 70.09
    },
    {
      "laplacian": 402.74,
      "width": 10.9,
      "brightness": 80.42
    },
    {
      "laplacian": 403.2,
      "width": 14.4,
      "brightness": 105.8
    },
    {
      "laplacian": 585.96,
      "width": 11.0,
      "brightness": 71.96
    },
    {
      "laplacian": 455.14,
      "width": 14.9,
      "brightness": 73.8
    },
    {
      "laplacian": 91.82,
      "width": 10.8,
      "brightness": 122.66
    },
    {
      "laplacian": 186.02,
      "width": 12.7,
      "brightness": 79.71
    },
    {
      "laplacian": 1484.21,
      "width": 11.1,
      "brightness": 68.04
    },
    {
      "laplacian": 10.0,
      "width": 13.5,
      "brightness": 99.09
    },
    {
      "laplacian": 139.27,
      "width": 9.8,
      "brightness": 80.77
    },
    {
      "laplacian": 651.58,
      "width": 13.5,
      "brightness": 51.43
    },
    {
      "laplacian": 99.89,
      "width": 12.2,
      "brightness": 104.9
    },
    {
      "laplacian": 466.42,
      "width": 10.7,
      "brightness": 65.57
    },
    {
      "laplacian": 254.74,
      "width": 11.7,
      "brightness": 82.96
    },
    {
      "laplacian": 109.36,
      "width": 15.1,
      "brightness": 80.5
    },
    {
      "laplacian": 294.59,
      "width": 12.3,
      "brightness": 87.06
    },
    {
      "laplacian": 89.16,
      "width": 10.6,
      "brightness": 40.0
    },
    {
      "laplacian": 213.97,
      "width": 9.6,
      "brightness": 74.63
    },
    {
      "laplacian": 399.54,
      "width": 13.0,
      "brightness": 106.75
    },
    {
      "laplacian": 545.52,
      "width": 12.4,
      "brightness": 109.84
    },
    {
      "laplacian": 138.72,
      "width": 13.4,
      "brightness": 60.19
    },
    {
      "laplacian": 109.1,
      "width": 9.1,
      "brightness": 102.25
    },
    {
      "laplacian": 40.05,
      "width": 9.7,
      "brightness": 65.25
    },
    {
      "laplacian": 569.17,
      "width": 14.3,
      "brightness": 73.76
    },
    {
      "laplacian": 1322.63,
      "width": 12.7,
      "brightness": 74.92
    },
    {
      "laplacian": 623.55,
      "width": 13.1,
      "brightness": 84.39
    },
    {
      "laplacian": 745.37,
      "width": 10.1,
      "brightness": 104.03
    },
    {
      "laplacian": 100.99,
      "width": 10.0,
      "brightness": 87.82
    },
    {
      "laplacian": 377.71,
      "width": 14.0,
      "brightness": 79.23
    },
    {
      "laplacian": 505.77,
      "width": 14.1,
      "brightness": 103.28
    },
    {
      "laplacian": 61.61,
      "width": 9.8,
      "brightness": 64.34
    },
    {
      "laplacian": 10.0,
      "width": 9.4,
      "brightness": 80.3
    },
    {
      "laplacian": 37.05,
      "width": 11.8,
      "brightness": 103.91
    },
    {
      "laplacian": 210.71,
      "width": 10.4,
      "brightness": 93.64
    },
    {
      "laplacian": 140.4,
      "width": 10.4,
      "brightness": 71.74
    },
    {
      "laplacian": 364.28,
      "width": 9.5,
      "brightness": 48.71
    },
    {
      "laplacian": 565.44,
      "width": 11.1,
      "brightness": 88.84
    },
    {
      "laplacian": 193.63,
      "width": 9.7,
      "brightness": 47.27
    },
    {
      "laplacian": 258.89,
      "width": 9.8,
      "brightness": 77.32
    },
    {
      "laplacian": 10.0,
      "width": 12.6,
      "brightness": 107.94
    },
    {
      "laplacian": 752.9,
      "width": 11.9,
      "brightness": 95.13
    },
    {
      "laplacian": 469.35,
      "width": 13.0,
      "brightness": 40.0
    },
    {
      "laplacian": 261.64,
      "width": 8.7,
      "brightness": 86.41
    },
    {
      "laplacian": 136.67,
      "width": 12.0,
      "brightness": 74.98
    },
    {
      "laplacian": 300.9,
      "width": 16.2,
      "brightness": 53.98
    },
    {
      "laplacian": 113.92,
      "width": 11.3,
      "brightness": 89.37
    },
    {
      "laplacian": 161.3,
      "width": 13.6,
      "brightness": 71.18
    },
    {
      "laplacian": 349.79,
      "width": 13.6,
      "brightness": 71.32
    },
    {
      "laplacian": 427.92,
      "width": 13.7,
      "brightness": 84.73
    },
    {
      "laplacian": 416.77,
      "width": 12.3,
      "brightness": 68.23
    },
    {
      "laplacian": 100.64,
      "width": 13.1,
      "brightness": 84.11
    },
    {
      "laplacian": 11.31,
      "width": 13.4,
      "brightness": 68.95
    },
    {
      "laplacian": 43.3,
      "width": 13.3,
      "brightness": 70.15
    },
    {
      "laplacian": 914.22,
      "width": 9.8,
      "brightness": 103.84
    },
    {
      "laplacian": 145.18,
      "width": 8.6,
      "brightness": 106.08
    },
    {
      "laplacian": 245.85,
      "width": 8.9,
      "brightness": 44.41
    },
    {
      "laplacian": 575.2,
      "width": 11.5,
      "brightness": 98.44
    },
    {
      "laplacian": 185.5,
      "width": 13.2,
      "brightness": 112.77
    },
    {
      "laplacian": 540.27,
      "width": 9.8,
      "brightness": 116.26
    },
    {
      "laplacian": 178.65,
      "width": 13.8,
      "brightness": 93.45
    },
    {
      "laplacian": 115.37,
      "width": 11.0,
      "brightness": 58.74
    },
    {
      "laplacian": 1160.36,
      "width": 11.0,
      "brightness": 95.86
    },
    {
      "laplacian": 639.71,
      "width": 10.3,
      "brightness": 62.88
    },
    {
      "laplacian": 711.74,
      "width": 8.2,
      "brightness": 74.45
    },
    {
      "laplacian": 45.3,
      "width": 12.5,
      "brightness": 90.43
    },
    {
      "laplacian": 102.24,
      "width": 15.4,
      "brightness": 64.3
    },
    {
      "laplacian": 240.38,
      "width": 11.9,
      "brightness": 56.78
    },
    {
      "laplacian": 170.68,
      "width": 8.3,
      "brightness": 92.25
    },
    {
      "laplacian": 518.28,
      "width": 13.6,
      "brightness": 123.08
    },
    {
      "laplacian": 440.42,
      "width": 8.8,
      "brightness": 109.35
    },
    {
      "laplacian": 796.6,
      "width": 9.6,
      "brightness": 97.56
    },
    {
      "laplacian": 146.34,
      "width": 11.5,
      "brightness": 103.54
    },
    {
      "laplacian": 299.77,
      "width": 12.2,
      "brightness": 96.03
    },
    {
      "laplacian": 685.07,
      "width": 10.0,
      "brightness": 91.9
    },
    {
      "laplacian": 138.29,
      "width": 11.4,
      "brightness": 101.77
    },
    {
      "laplacian": 107.44,
      "width": 13.4,
      "brightness": 51.9
    },
    {
      "laplacian": 797.89,
      "width": 13.7,
      "brightness": 86.39
    },
    {
      "laplacian": 925.1,
      "width": 14.5,
      "brightness": 80.22
    },
    {
      "laplacian": 172.08,
      "width": 15.8,
      "brightness": 83.74
    },
    {
      "laplacian": 241.48,
      "width": 13.6,
      "brightness": 71.85
    },
    {
      "laplacian": 747.7,
      "width": 11.6,
      "brightness": 93.45
    },
    {
      "laplacian": 504.17,
      "width": 13.7,
      "brightness": 64.01
    },
    {
      "laplacian": 27.24,
      "width": 12.9,
      "brightness": 70.26
    },
    {
      "laplacian": 82.43,
      "width": 13.0,
      "brightness": 67.61
    },
    {
      "laplacian": 261.28,
      "width": 12.4,
      "brightness": 101.01
    },
    {
      "laplacian": 599.91,
      "width": 10.2,
      "brightness": 81.74
    },
    {
      "laplacian": 388.25,
      "width": 9.9,
      "brightness": 71.86
    },
    {
      "laplacian": 257.11,
      "width": 11.8,
      "brightness": 73.78
    },
    {
      "laplacian": 146.59,
      "width": 12.3,
      "brightness": 82.09
    },
    {
      "laplacian": 1122.06,
      "width": 10.6,
      "brightness": 117.69
    },
    {
      "laplacian": 214.88,
      "width": 12.8,
      "brightness": 54.8
    },
    {
      "laplacian": 596.49,
      "width": 16.2,
      "brightness": 96.86
    },
    {
      "laplacian": 203.83,
      "width": 8.5,
      "brightness": 92.38
    },
    {
      "laplacian": 33.11,
      "width": 13.2,
      "brightness": 62.57
    },
    {
      "laplacian": 349.95,
      "width": 11.9,
      "brightness": 114.27
    },
    {
      "laplacian": 492.0,
      "width": 12.9,
      "brightness": 93.86
    },
    {
      "laplacian": 866.96,
      "width": 11.1,
      "brightness": 70.83
    },
    {
      "laplacian": 223.98,
      "width": 11.7,
      "brightness": 41.09
    },
    {
      "laplacian": 176.28,
      "width": 12.3,
      "brightness": 87.04
    },
    {
      "laplacian": 328.12,
      "width": 11.4,
      "brightness": 81.02
    },
    {
      "laplacian": 54.3,
      "width": 9.0,
      "brightness": 59.32
    },
    {
      "laplacian": 321.84,
      "width": 11.5,
      "brightness": 59.04
    },
    {
      "laplacian": 322.81,
      "width": 9.2,
      "brightness": 101.11
    },
    {
      "laplacian": 215.44,
      "width": 13.3,
      "brightness": 40.0
    },
    {
      "laplacian": 228.49,
      "width": 8.3,
      "brightness": 88.91
    },
    {
      "laplacian": 891.3,
      "width": 14.1,
      "brightness": 77.88
    },
    {
      "laplacian": 333.57,
      "width": 12.9,
      "brightness": 92.94
    },
    {
      "laplacian": 169.88,
      "width": 12.9,
      "brightness": 75.53
    },
    {
      "laplacian": 32.18,
      "width": 8.0,
      "brightness": 88.45
    },
    {
      "laplacian": 410.73,
      "width": 11.3,
      "brightness": 65.66
    },
    {
      "laplacian": 84.51,
      "width": 14.3,
      "brightness": 80.92
    },
    {
      "laplacian": 171.76,
      "width": 11.0,
      "brightness": 92.76
    },
    {
      "laplacian": 273.86,
      "width": 9.8,
      "brightness": 85.32
    },
    {
      "laplacian": 913.21,
      "width": 10.7,
      "brightness": 90.37
    },
    {
      "laplacian": 620.67,
      "width": 11.9,
      "brightness": 61.59
    },
    {
      "laplacian": 288.59,
      "width": 10.3,
      "brightness": 69.01
    },
    {
      "laplacian": 874.53,
      "width": 14.5,
      "brightness": 69.39
    },
    {
      "laplacian": 550.94,
      "width": 11.9,
      "brightness": 75.92
    },
    {
      "laplacian": 13.34,
      "width": 10.9,
      "brightness": 111.89
    },
    {
      "laplacian": 847.42,
      "width": 9.4,
      "brightness": 74.21
    },
    {
      "laplacian": 298.66,
      "width": 13.0,
      "brightness": 56.84
    },
    {
      "laplacian": 10.0,
      "width": 12.9,
      "brightness": 93.92
    },
    {
      "laplacian": 598.98,
      "width": 10.4,
      "brightness": 111.63
    },
    {
      "laplacian": 339.48,
      "width": 8.0,
      "brightness": 54.25
    },
    {
      "laplacian": 238.85,
      "width": 12.8,
      "brightness": 125.4
    },
    {
      "laplacian": 515.09,
      "width": 11.6,
      "brightness": 91.13
    },
    {
      "laplacian": 241.05,
      "width": 12.7,
      "brightness": 104.75
    },
    {
      "laplacian": 363.64,
      "width": 15.9,
      "brightness": 114.28
    },
    {
      "laplacian": 212.02,
      "width": 11.9,
      "brightness": 103.4
    },
    {
      "laplacian": 223.56,
      "width": 11.0,
      "brightness": 79.57
    },
    {
      "laplacian": 53.92,
      "width": 9.7,
      "brightness": 108.79
    },
    {
      "laplacian": 393.28,
      "width": 11.4,
      "brightness": 87.6
    },
    {
      "laplacian": 1269.23,
      "width": 12.3,
      "brightness": 105.99
    },
    {
      "laplacian": 168.58,
      "width": 12.1,
      "brightness": 108.4
    },
    {
      "laplacian": 86.12,
      "width": 15.4,
      "brightness": 58.0
    },
    {
      "laplacian": 124.17,
      "width": 13.0,
      "brightness": 99.47
    },
    {
      "laplacian": 27.94,
      "width": 11.7,
      "brightness": 78.0
    },
    {
      "laplacian": 196.09,
      "width": 10.6,
      "brightness": 85.04
    },
    {
      "laplacian": 217.05,
      "width": 12.5,
      "brightness": 84.8
    },
    {
      "laplacian": 253.82,
      "width": 10.2,
      "brightness": 83.91
    },
    {
      "laplacian": 539.11,
      "width": 12.4,
      "brightness": 115.52
    },
    {
      "laplacian": 114.22,
      "width": 13.0,
      "brightness": 51.94
    },
    {
      "laplacian": 126.14,
      "width": 11.6,
      "brightness": 44.11
    },
    {
      "laplacian": 42.68,
      "width": 10.7,
      "brightness": 40.0
    },
    {
      "laplacian": 113.25,
      "width": 8.0,
      "brightness": 105.52
    },
    {
      "laplacian": 10.0,
      "width": 14.3,
      "brightness": 64.98
    },
    {
      "laplacian": 539.13,
      "width": 12.8,
      "brightness": 84.91
    },
    {
      "laplacian": 65.5,
      "width": 12.9,
      "brightness": 79.48
    },
    {
      "laplacian": 67.22,
      "width": 8.9,
      "brightness": 62.5
    },
    {
      "laplacian": 263.98,
      "width": 14.8,
      "brightness": 100.73
    },
    {
      "laplacian": 86.78,
      "width": 11.1,
      "brightness": 79.2
    },
    {
      "laplacian": 75.0,
      "width": 11.4,
      "brightness": 76.77
    },
    {
      "laplacian": 57.84,
      "width": 9.9,
      "brightness": 87.12
    },
    {
      "laplacian": 108.94,
      "width": 8.4,
      "brightness": 97.86
    },
    {
      "laplacian": 304.11,
      "width": 14.3,
      "brightness": 60.9
    },
    {
      "laplacian": 565.81,
      "width": 14.6,
      "brightness": 101.2
    },
    {
      "laplacian": 78.71,
      "width": 11.7,
      "brightness": 113.9
    },
    {
      "laplacian": 241.81,
      "width": 10.6,
      "brightness": 50.63
    },
    {
      "laplacian": 145.0,
      "width": 11.2,
      "brightness": 88.12
    },
    {
      "laplacian": 932.76,
      "width": 11.3,
      "brightness": 75.29
    },
    {
      "laplacian": 818.59,
      "width": 9.6,
      "brightness": 97.38
    },
    {
      "laplacian": 36.35,
      "width": 11.4,
      "brightness": 55.23
    },
    {
      "laplacian": 249.96,
      "width": 12.3,
      "brightness": 117.84
    },
    {
      "laplacian": 277.4,
      "width": 14.0,
      "brightness": 46.63
    },
    {
      "laplacian": 141.77,
      "width": 12.0,
      "brightness": 76.63
    },
    {
      "laplacian": 113.33,
      "width": 8.8,
      "brightness": 91.55
    },
    {
      "laplacian": 84.42,
      "width": 12.7,
      "brightness": 66.9
    },
    {
      "laplacian": 126.49,
      "width": 11.5,
      "brightness": 63.45
    },
    {
      "laplacian": 468.45,
      "width": 14.7,
      "brightness": 86.89
    },
    {
      "laplacian": 359.27,
      "width": 14.9,
      "brightness": 83.71
    },
    {
      "laplacian": 221.2,
      "width": 14.9,
      "brightness": 82.13
    },
    {
      "laplacian": 98.64,
      "width": 10.9,
      "brightness": 100.89
    },
    {
      "laplacian": 128.63,
      "width": 16.0,
      "brightness": 73.32
    },
    {
      "laplacian": 1260.01,
      "width": 12.7,
      "brightness": 89.03
    },
    {
      "laplacian": 957.0,
      "width": 15.3,
      "brightness": 70.85
    },
    {
      "laplacian": 123.25,
      "width": 11.0,
      "brightness": 63.31
    },
    {
      "laplacian": 63.98,
      "width": 11.4,
      "brightness": 75.74
    },
    {
      "laplacian": 141.68,
      "width": 12.5,
      "brightness": 71.03
    },
    {
      "laplacian": 171.18,
      "width": 12.3,
      "brightness": 72.13
    },
    {
      "laplacian": 50.38,
      "width": 14.5,
      "brightness": 107.64
    },
    {
      "laplacian": 319.36,
      "width": 11.5,
      "brightness": 76.41
    },
    {
      "laplacian": 205.97,
      "width": 14.3,
      "brightness": 67.42
    },
    {
      "laplacian": 151.2,
      "width": 13.5,
      "brightness": 82.62
    },
    {
      "laplacian": 117.14,
      "width": 11.6,
      "brightness": 84.29
    },
    {
      "laplacian": 499.68,
      "width": 13.3,
      "brightness": 55.89
    },
    {
      "laplacian": 98.73,
      "width": 11.1,
      "brightness": 75.44
    },
    {
      "laplacian": 1590.56,
      "width": 16.7,
      "brightness": 74.55
    },
    {
      "laplacian": 289.65,
      "width": 8.0,
      "brightness": 78.21
    },
    {
      "laplacian": 266.72,
      "width": 13.3,
      "brightness": 97.96
    },
    {
      "laplacian": 393.41,
      "width": 8.5,
      "brightness": 85.01
    },
    {
      "laplacian": 931.54,
      "width": 11.5,
      "brightness": 109.01
    },
    {
      "laplacian": 118.34,
      "width": 11.8,
      "brightness": 81.74
    },
    {
      "laplacian": 430.6,
      "width": 15.0,
      "brightness": 121.07
    },
    {
      "laplacian": 413.69,
      "width": 10.6,
      "brightness": 71.86
    },
    {
      "laplacian": 624.75,
      "width": 14.6,
      "brightness": 65.07
    },
    {
      "laplacian": 178.83,
      "width": 9.6,
      "brightness": 94.04
    },
    {
      "laplacian": 582.97,
      "width": 14.7,
      "brightness": 112.01
    },
    {
      "laplacian": 105.6,
      "width": 11.1,
      "brightness": 51.67
    },
    {
      "laplacian": 246.88,
      "width": 12.1,
      "brightness": 77.67
    },
    {
      "laplacian": 557.54,
      "width": 11.3,
      "brightness": 68.56
    },
    {
      "laplacian": 268.45,
      "width": 14.6,
      "brightness": 85.14
    },
    {
      "laplacian": 288.32,
      "width": 14.2,
      "brightness": 82.22
    },
    {
      "laplacian": 423.23,
      "width": 12.9,
      "brightness": 111.6
    },
    {
      "laplacian": 401.13,
      "width": 9.7,
      "brightness": 79.62
    },
    {
      "laplacian": 734.63,
      "width": 10.6,
      "brightness": 112.25
    },
    {
      "laplacian": 136.5,
      "width": 9.9,
      "brightness": 75.07
    },
    {
      "laplacian": 363.88,
      "width": 8.0,
      "brightness": 102.38
    },
    {
      "laplacian": 887.29,
      "width": 14.5,
      "brightness": 87.03
    },
    {
      "laplacian": 363.27,
      "width": 11.3,
      "brightness": 120.06
    },
    {
      "laplacian": 756.47,
      "width": 11.3,
      "brightness": 49.51
    },
    {
      "laplacian": 144.24,
      "width": 15.0,
      "brightness": 56.4
    },
    {
      "laplacian": 590.59,
      "width": 11.0,
      "brightness": 122.3
    },
    {
      "laplacian": 595.18,
      "width": 10.3,
      "brightness": 65.87
    },
    {
      "laplacian": 17.42,
      "width": 11.6,
      "brightness": 67.26
    },
    {
      "laplacian": 323.52,
      "width": 9.7,
      "brightness": 62.73
    },
    {
      "laplacian": 289.91,
      "width": 12.7,
      "brightness": 107.27
    },
    {
      "laplacian": 532.13,
      "width": 11.3,
      "brightness": 54.42
    },
    {
      "laplacian": 292.83,
      "width": 11.0,
      "brightness": 82.49
    },
    {
      "laplacian": 1789.81,
      "width": 10.8,
      "brightness": 76.16
    },
    {
      "laplacian": 1066.71,
      "width": 11.8,
      "brightness": 104.8
    },
    {
      "laplacian": 431.34,
      "width": 12.2,
      "brightness": 69.6
    },
    {
      "laplacian": 313.92,
      "width": 11.0,
      "brightness": 91.14
    },
    {
      "laplacian": 50.32,
      "width": 11.3,
      "brightness": 56.23
    },
    {
      "laplacian": 293.82,
      "width": 11.8,
      "brightness": 132.03
    },
    {
      "laplacian": 269.7,
      "width": 11.6,
      "brightness": 76.73
    },
    {
      "laplacian": 1688.21,
      "width": 12.1,
      "brightness": 82.19
    },
    {
      "laplacian": 406.47,
      "width": 10.6,
      "brightness": 118.4
    },
    {
      "laplacian": 642.58,
      "width": 14.0,
      "brightness": 69.09
    },
    {
      "laplacian": 120.25,
      "width": 12.2,
      "brightness": 118.68
    },
    {
      "laplacian": 539.5,
      "width": 11.0,
      "brightness": 72.95
    },
    {
      "laplacian": 747.14,
      "width": 12.7,
      "brightness": 96.78
    },
    {
      "laplacian": 85.73,
      "width": 11.9,
      "brightness": 69.4
    },
    {
      "laplacian": 51.64,
      "width": 8.5,
      "brightness": 52.17
    },
    {
      "laplacian": 205.85,
      "width": 12.7,
      "brightness": 91.12
    },
    {
      "laplacian": 518.55,
      "width": 10.0,
      "brightness": 96.08
    },
    {
      "laplacian": 203.95,
      "width": 13.9,
      "brightness": 53.05
    },
    {
      "laplacian": 62.37,
      "width": 11.5,
      "brightness": 75.24
    },
    {
      "laplacian": 403.8,
      "width": 13.6,
      "brightness": 108.42
    },
    {
      "laplacian": 202.25,
      "width": 10.7,
      "brightness": 95.2
    },
    {
      "laplacian": 105.43,
      "width": 12.1,
      "brightness": 73.31
    },
    {
      "laplacian": 283.7,
      "width": 14.4,
      "brightness": 68.85
    },
    {
      "laplacian": 213.94,
      "width": 11.5,
      "brightness": 124.86
    },
    {
      "laplacian": 285.36,
      "width": 10.8,
      "brightness": 50.17
    },
    {
      "laplacian": 1718.05,
      "width": 13.3,
      "brightness": 80.7
    },
    {
      "laplacian": 53.36,
      "width": 13.3,
      "brightness": 49.78
    },
    {
      "laplacian": 814.41,
      "width": 10.9,
      "brightness": 110.93
    },
    {
      "laplacian": 46.95,
      "width": 8.0,
      "brightness": 81.84
    },
    {
      "laplacian": 299.73,
      "width": 10.8,
      "brightness": 85.92
    },
    {
      "laplacian": 205.66,
      "width": 13.4,
      "brightness": 142.92
    },
    {
      "laplacian": 407.87,
      "width": 10.4,
      "brightness": 68.94
    },
    {
      "laplacian": 160.03,
      "width": 12.0,
      "brightness": 120.47
    },
    {
      "laplacian": 224.98,
      "width": 10.7,
      "brightness": 73.4
    },
    {
      "laplacian": 220.14,
      "width": 8.1,
      "brightness": 76.86
    },
    {
      "laplacian": 250.57,
      "width": 10.6,
      "brightness": 140.04
    },
    {
      "laplacian": 269.33,
      "width": 13.3,
      "brightness": 78.46
    },
    {
      "laplacian": 210.25,
      "width": 8.0,
      "brightness": 51.76
    },
    {
      "laplacian": 162.25,
      "width": 12.5,
      "brightness": 88.2
    },
    {
      "laplacian": 187.69,
      "width": 9.6,
      "brightness": 78.2
    },
    {
      "laplacian": 309.12,
      "width": 13.2,
      "brightness": 90.08
    },
    {
      "laplacian": 314.69,
      "width": 13.4,
      "brightness": 79.06
    },
    {
      "laplacian": 108.5,
      "width": 11.7,
      "brightness": 130.74
    },
    {
      "laplacian": 71.16,
      "width": 11.7,
      "brightness": 94.25
    },
    {
      "laplacian": 1054.53,
      "width": 10.4,
      "brightness": 58.35
    },
    {
      "laplacian": 41.59,
      "width": 9.3,
      "brightness": 84.74
    },
    {
      "laplacian": 86.02,
      "width": 15.4,
      "brightness": 64.41
    },
    {
      "laplacian": 498.03,
      "width": 10.3,
      "brightness": 76.55
    },
    {
      "laplacian": 29.26,
      "width": 15.1,
      "brightness": 61.97
    },
    {
      "laplacian": 126.54,
      "width": 10.3,
      "brightness": 128.36
    },
    {
      "laplacian": 594.36,
      "width": 13.1,
      "brightness": 66.79
    },
    {
      "laplacian": 234.69,
      "width": 9.7,
      "brightness": 97.13
    },
    {
      "laplacian": 1349.52,
      "width": 13.0,
      "brightness": 74.88
    },
    {
      "laplacian": 463.47,
      "width": 11.3,
      "brightness": 56.51
    },
    {
      "laplacian": 37.93,
      "width": 11.4,
      "brightness": 86.35
    },
    {
      "laplacian": 269.91,
      "width": 13.2,
      "brightness": 90.82
    },
    {
      "laplacian": 17.53,
      "width": 11.1,
      "brightness": 94.29
    },
    {
      "laplacian": 416.82,
      "width": 9.1,
      "brightness": 40.0
    },
    {
      "laplacian": 139.77,
      "width": 13.5,
      "brightness": 54.83
    },
    {
      "laplacian": 407.57,
      "width": 9.7,
      "brightness": 103.07
    },
    {
      "laplacian": 957.6,
      "width": 13.0,
      "brightness": 61.68
    },
    {
      "laplacian": 925.39,
      "width": 13.9,
      "brightness": 86.46
    },
    {
      "laplacian": 203.74,
      "width": 11.2,
      "brightness": 54.32
    },
    {
      "laplacian": 519.49,
      "width": 14.4,
      "brightness": 98.1
    },
    {
      "laplacian": 162.79,
      "width": 13.0,
      "brightness": 102.49
    },
    {
      "laplacian": 298.19,
      "width": 10.6,
      "brightness": 98.1
    },
    {
      "laplacian": 22.76,
      "width": 14.8,
      "brightness": 104.72
    },
    {
      "laplacian": 88.37,
      "width": 9.7,
      "brightness": 116.41
    },
    {
      "laplacian": 425.13,
      "width": 11.2,
      "brightness": 56.17
    },
    {
      "laplacian": 12.5,
      "width": 11.6,
      "brightness": 64.65
    },
    {
      "laplacian": 268.37,
      "width": 13.2,
      "brightness": 101.75
    },
    {
      "laplacian": 292.39,
      "width": 14.2,
      "brightness": 106.86
    },
    {
      "laplacian": 437.99,
      "width": 14.1,
      "brightness": 67.16
    },
    {
      "laplacian": 23.02,
      "width": 12.4,
      "brightness": 65.63
    },
    {
      "laplacian": 14.96,
      "width": 11.4,
      "brightness": 67.65
    },
    {
      "laplacian": 601.64,
      "width": 8.3,
      "brightness": 46.69
    },
    {
      "laplacian": 292.63,
      "width": 9.4,
      "brightness": 54.03
    },
    {
      "laplacian": 165.43,
      "width": 15.5,
      "brightness": 54.56
    },
    {
      "laplacian": 20.98,
      "width": 8.3,
      "brightness": 75.53
    },
    {
      "laplacian": 152.55,
      "width": 10.4,
      "brightness": 87.96
    },
    {
      "laplacian": 55.22,
      "width": 14.3,
      "brightness": 91.54
    },
    {
      "laplacian": 574.53,
      "width": 12.4,
      "brightness": 70.81
    },
    {
      "laplacian": 35.64,
      "width": 13.9,
      "brightness": 71.35
    },
    {
      "laplacian": 188.34,
      "width": 13.1,
      "brightness": 84.72
    },
    {
      "laplacian": 523.87,
      "width": 14.9,
      "brightness": 49.09
    },
    {
      "laplacian": 442.29,
      "width": 12.6,
      "brightness": 103.11
    },
    {
      "laplacian": 142.57,
      "width": 13.3,
      "brightness": 110.28
    },
    {
      "laplacian": 447.87,
      "width": 10.6,
      "brightness": 68.24
    },
    {
      "laplacian": 524.65,
      "width": 13.2,
      "brightness": 73.23
    },
    {
      "laplacian": 279.25,
      "width": 11.2,
      "brightness": 109.35
    },
    {
      "laplacian": 378.7,
      "width": 11.1,
      "brightness": 79.29
    },
    {
      "laplacian": 191.21,
      "width": 13.8,
      "brightness": 94.94
    },
    {
      "laplacian": 671.99,
      "width": 13.8,
      "brightness": 79.97
    },
    {
      "laplacian": 222.3,
      "width": 15.4,
      "brightness": 116.24
    },
    {
      "laplacian": 29.77,
      "width": 15.2,
      "brightness": 92.78
    },
    {
      "laplacian": 398.1,
      "width": 13.8,
      "brightness": 94.05
    },
    {
      "laplacian": 59.74,
      "width": 8.6,
      "brightness": 94.46
    },
    {
      "laplacian": 751.45,
      "width": 15.7,
      "brightness": 69.79
    },
    {
      "laplacian": 366.88,
      "width": 13.8,
      "brightness": 71.81
    },
    {
      "laplacian": 10.0,
      "width": 10.5,
      "brightness": 98.92
    },
    {
      "laplacian": 546.42,
      "width": 13.5,
      "brightness": 84.78
    },
    {
      "laplacian": 324.17,
      "width": 9.9,
      "brightness": 56.09
    },
    {
      "laplacian": 480.17,
      "width": 13.2,
      "brightness": 123.21
    },
    {
      "laplacian": 255.13,
      "width": 9.4,
      "brightness": 103.52
    },
    {
      "laplacian": 721.53,
      "width": 10.4,
      "brightness": 82.83
    },
    {
      "laplacian": 104.56,
      "width": 13.4,
      "brightness": 75.98
    },
    {
      "laplacian": 570.07,
      "width": 14.1,
      "brightness": 86.37
    },
    {
      "laplacian": 334.02,
      "width": 12.7,
      "brightness": 93.39
    },
    {
      "laplacian": 15.28,
      "width": 11.4,
      "brightness": 40.0
    },
    {
      "laplacian": 12.32,
      "width": 8.0,
      "brightness": 128.47
    },
    {
      "laplacian": 172.49,
      "width": 11.6,
      "brightness": 64.62
    },
    {
      "laplacian": 87.53,
      "width": 13.1,
      "brightness": 81.96
    },
    {
      "laplacian": 10.0,
      "width": 11.4,
      "brightness": 82.77
    },
    {
      "laplacian": 44.39,
      "width": 12.0,
      "brightness": 125.93
    },
    {
      "laplacian": 201.98,
      "width": 11.6,
      "brightness": 80.06
    },
    {
      "laplacian": 84.81,
      "width": 11.4,
      "brightness": 116.95
    },
    {
      "laplacian": 1479.91,
      "width": 12.2,
      "brightness": 90.95
    },
    {
      "laplacian": 107.49,
      "width": 11.5,
      "brightness": 60.84
    },
    {
      "laplacian": 691.73,
      "width": 14.9,
      "brightness": 84.96
    },
    {
      "laplacian": 957.97,
      "width": 8.0,
      "brightness": 79.39
    },
    {
      "laplacian": 131.22,
      "width": 10.9,
      "brightness": 58.15
    },
    {
      "laplacian": 117.63,
      "width": 10.3,
      "brightness": 89.87
    },
    {
      "laplacian": 134.98,
      "width": 12.4,
      "brightness": 82.49
    },
    {
      "laplacian": 201.43,
      "width": 12.2,
      "brightness": 94.24
    },
    {
      "laplacian": 157.77,
      "width": 15.2,
      "brightness": 86.25
    },
    {
      "laplacian": 47.3,
      "width": 15.9,
      "brightness": 67.68
    },
    {
      "laplacian": 343.71,
      "width": 10.5,
      "brightness": 98.9
    },
    {
      "laplacian": 157.15,
      "width": 12.0,
      "brightness": 68.26
    },
    {
      "laplacian": 1521.76,
      "width": 12.4,
      "brightness": 40.0
    },
    {
      "laplacian": 578.41,
      "width": 10.4,
      "brightness": 84.83
    },
    {
      "laplacian": 159.9,
      "width": 13.3,
      "brightness": 69.81
    },
    {
      "laplacian": 428.87,
      "width": 11.5,
      "brightness": 90.41
    },
    {
      "laplacian": 413.7,
      "width": 9.9,
      "brightness": 125.98
    },
    {
      "laplacian": 648.89,
      "width": 11.4,
      "brightness": 126.61
    },
    {
      "laplacian": 12.69,
      "width": 10.0,
      "brightness": 78.37
    },
    {
      "laplacian": 40.33,
      "width": 14.1,
      "brightness": 63.82
    },
    {
      "laplacian": 82.85,
      "width": 15.8,
      "brightness": 94.86
    },
    {
      "laplacian": 240.52,
      "width": 12.5,
      "brightness": 73.86
    },
    {
      "laplacian": 79.17,
      "width": 12.2,
      "brightness": 90.62
    },
    {
      "laplacian": 136.14,
      "width": 12.3,
      "brightness": 67.46
    },
    {
      "laplacian": 629.28,
      "width": 14.4,
      "brightness": 87.52
    },
    {
      "laplacian": 428.92,
      "width": 14.3,
      "brightness": 64.14
    },
    {
      "laplacian": 160.54,
      "width": 11.8,
      "brightness": 108.05
    },
    {
      "laplacian": 525.52,
      "width": 12.5,
      "brightness": 69.02
    },
    {
      "laplacian": 400.37,
      "width": 13.3,
      "brightness": 96.54
    },
    {
      "laplacian": 810.66,
      "width": 9.7,
      "brightness": 54.18
    },
    {
      "laplacian": 454.08,
      "width": 14.4,
      "brightness": 99.19
    },
    {
      "laplacian": 201.66,
      "width": 15.5,
      "brightness": 60.74
    },
    {
      "laplacian": 282.95,
      "width": 14.3,
      "brightness": 87.75
    },
    {
      "laplacian": 352.01,
      "width": 9.5,
      "brightness": 104.51
    },
    {
      "laplacian": 153.9,
      "width": 8.1,
      "brightness": 77.6
    },
    {
      "laplacian": 295.97,
      "width": 13.4,
      "brightness": 59.36
    },
    {
      "laplacian": 254.97,
      "width": 10.5,
      "brightness": 92.93
    },
    {
      "laplacian": 452.81,
      "width": 12.6,
      "brightness": 63.5
    },
    {
      "laplacian": 1356.09,
      "width": 15.1,
      "brightness": 73.11
    },
    {
      "laplacian": 313.65,
      "width": 10.7,
      "brightness": 87.84
    },
    {
      "laplacian": 929.83,
      "width": 11.2,
      "brightness": 111.93
    },
    {
      "laplacian": 438.12,
      "width": 12.6,
      "brightness": 82.58
    },
    {
      "laplacian": 294.63,
      "width": 9.4,
      "brightness": 82.5
    },
    {
      "laplacian": 143.91,
      "width": 10.5,
      "brightness": 98.23
    },
    {
      "laplacian": 296.86,
      "width": 12.0,
      "brightness": 83.11
    },
    {
      "laplacian": 279.0,
      "width": 11.4,
      "brightness": 95.98
    },
    {
      "laplacian": 102.1,
      "width": 13.2,
      "brightness": 105.73
    },
    {
      "laplacian": 124.19,
      "width": 17.5,
      "brightness": 74.79
    },
    {
      "laplacian": 354.87,
      "width": 12.2,
      "brightness": 40.0
    },
    {
      "laplacian": 922.23,
      "width": 10.3,
      "brightness": 64.01
    },
    {
      "laplacian": 225.93,
      "width": 14.8,
      "brightness": 108.59
    },
    {
      "laplacian": 27.09,
      "width": 8.8,
      "brightness": 81.26
    },
    {
      "laplacian": 61.94,
      "width": 9.2,
      "brightness": 74.54
    },
    {
      "laplacian": 478.1,
      "width": 10.8,
      "brightness": 107.67
    },
    {
      "laplacian": 38.55,
      "width": 11.4,
      "brightness": 79.77
    },
    {
      "laplacian": 548.53,
      "width": 10.8,
      "brightness": 40.0
    },
    {
      "laplacian": 454.67,
      "width": 11.9,
      "brightness": 48.88
    },
    {
      "laplacian": 217.72,
      "width": 12.5,
      "brightness": 91.21
    },
    {
      "laplacian": 103.3,
      "width": 14.1,
      "brightness": 80.53
    },
    {
      "laplacian": 185.06,
      "width": 12.2,
      "brightness": 114.0
    },
    {
      "laplacian": 346.49,
      "width": 10.9,
      "brightness": 65.87
    },
    {
      "laplacian": 40.79,
      "width": 14.0,
      "brightness": 75.19
    },
    {
      "laplacian": 847.08,
      "width": 10.4,
      "brightness": 62.54
    },
    {
      "laplacian": 343.41,
      "width": 8.7,
      "brightness": 70.55
    },
    {
      "laplacian": 382.26,
      "width": 14.4,
      "brightness": 40.38
    },
    {
      "laplacian": 451.72,
      "width": 14.3,
      "brightness": 73.51
    },
    {
      "laplacian": 780.18,
      "width": 19.8,
      "brightness": 80.86
    },
    {
      "laplacian": 297.58,
      "width": 21.4,
      "brightness": 79.0
    },
    {
      "laplacian": 478.37,
      "width": 19.3,
      "brightness": 129.29
    },
    {
      "laplacian": 105.61,
      "width": 24.3,
      "brightness": 122.34
    },
    {
      "laplacian": 1079.89,
      "width": 29.9,
      "brightness": 65.48
    },
    {
      "laplacian": 277.61,
      "width": 25.8,
      "brightness": 40.0
    },
    {
      "laplacian": 104.91,
      "width": 27.1,
      "brightness": 79.82
    },
    {
      "laplacian": 143.95,
      "width": 26.3,
      "brightness": 90.28
    },
    {
      "laplacian": 10.0,
      "width": 23.0,
      "brightness": 63.07
    },
    {
      "laplacian": 142.83,
      "width": 27.3,
      "brightness": 64.16
    },
    {
      "laplacian": 510.53,
      "width": 26.0,
      "brightness": 116.82
    },
    {
      "laplacian": 371.32,
      "width": 28.8,
      "brightness": 76.33
    },
    {
      "laplacian": 67.81,
      "width": 21.2,
      "brightness": 96.57
    },
    {
      "laplacian": 230.44,
      "width": 16.0,
      "brightness": 61.53
    },
    {
      "laplacian": 241.73,
      "width": 27.2,
      "brightness": 80.75
    },
    {
      "laplacian": 48.64,
      "width": 24.4,
      "brightness": 74.6
    },
    {
      "laplacian": 189.51,
      "width": 21.8,
      "brightness": 67.14
    },
    {
      "laplacian": 249.74,
      "width": 22.0,
      "brightness": 107.42
    },
    {
      "laplacian": 183.77,
      "width": 33.2,
      "brightness": 51.44
    },
    {
      "laplacian": 104.77,
      "width": 20.4,
      "brightness": 88.6
    },
    {
      "laplacian": 64.02,
      "width": 19.6,
      "brightness": 74.19
    },
    {
      "laplacian": 176.52,
      "width": 23.3,
      "brightness": 91.13
    },
    {
      "laplacian": 122.15,
      "width": 27.7,
      "brightness": 74.49
    },
    {
      "laplacian": 424.61,
      "width": 32.1,
      "brightness": 101.08
    },
    {
      "laplacian": 820.72,
      "width": 25.6,
      "brightness": 61.33
    },
    {
      "laplacian": 572.29,
      "width": 17.9,
      "brightness": 107.47
    },
    {
      "laplacian": 258.54,
      "width": 30.9,
      "brightness": 81.37
    },
    {
      "laplacian": 110.08,
      "width": 22.9,
      "brightness": 52.77
    },
    {
      "laplacian": 558.8,
      "width": 19.6,
      "brightness": 96.96
    },
    {
      "laplacian": 448.74,
      "width": 18.7,
      "brightness": 77.63
    },
    {
      "laplacian": 773.52,
      "width": 26.3,
      "brightness": 44.43
    },
    {
      "laplacian": 297.9,
      "width": 24.0,
      "brightness": 89.31
    },
    {
      "laplacian": 1034.72,
      "width": 24.4,
      "brightness": 104.15
    },
    {
      "laplacian": 298.0,
      "width": 28.1,
      "brightness": 110.21
    },
    {
      "laplacian": 109.39,
      "width": 19.8,
      "brightness": 73.68
    },
    {
      "laplacian": 137.13,
      "width": 28.5,
      "brightness": 85.2
    },
    {
      "laplacian": 406.06,
      "width": 20.9,
      "brightness": 83.11
    },
    {
      "laplacian": 121.74,
      "width": 31.7,
      "brightness": 114.78
    },
    {
      "laplacian": 1028.95,
      "width": 25.4,
      "brightness": 64.17
    },
    {
      "laplacian": 375.1,
      "width": 19.3,
      "brightness": 71.78
    },
    {
      "laplacian": 252.71,
      "width": 14.9,
      "brightness": 63.64
    },
    {
      "laplacian": 275.32,
      "width": 26.2,
      "brightness": 50.12
    },
    {
      "laplacian": 181.57,
      "width": 21.5,
      "brightness": 87.45
    },
    {
      "laplacian": 15.83,
      "width": 22.4,
      "brightness": 117.23
    },
    {
      "laplacian": 137.25,
      "width": 26.1,
      "brightness": 77.63
    },
    {
      "laplacian": 927.62,
      "width": 27.0,
      "brightness": 62.6
    },
    {
      "laplacian": 306.0,
      "width": 27.9,
      "brightness": 86.11
    },
    {
      "laplacian": 630.73,
      "width": 18.3,
      "brightness": 94.96
    },
    {
      "laplacian": 646.42,
      "width": 28.7,
      "brightness": 78.56
    },
    {
      "laplacian": 232.77,
      "width": 20.7,
      "brightness": 112.88
    },
    {
      "laplacian": 455.51,
      "width": 14.0,
      "brightness": 64.13
    },
    {
      "laplacian": 20.05,
      "width": 18.3,
      "brightness": 75.69
    },
    {
      "laplacian": 866.89,
      "width": 23.9,
      "brightness": 88.51
    },
    {
      "laplacian": 809.46,
      "width": 19.1,
      "brightness": 90.65
    },
    {
      "laplacian": 395.57,
      "width": 22.6,
      "brightness": 83.04
    },
    {
      "laplacian": 317.15,
      "width": 24.4,
      "brightness": 53.87
    },
    {
      "laplacian": 236.07,
      "width": 22.3,
      "brightness": 133.44
    },
    {
      "laplacian": 694.68,
      "width": 21.0,
      "brightness": 76.81
    },
    {
      "laplacian": 504.52,
      "width": 18.0,
      "brightness": 84.43
    },
    {
      "laplacian": 48.89,
      "width": 23.1,
      "brightness": 95.57
    },
    {
      "laplacian": 335.75,
      "width": 14.7,
      "brightness": 68.0
    },
    {
      "laplacian": 519.79,
      "width": 20.3,
      "brightness": 83.25
    },
    {
      "laplacian": 41.25,
      "width": 19.3,
      "brightness": 67.1
    },
    {
      "laplacian": 21.08,
      "width": 22.0,
      "brightness": 91.14
    },
    {
      "laplacian": 178.36,
      "width": 22.1,
      "brightness": 75.93
    },
    {
      "laplacian": 315.13,
      "width": 26.8,
      "brightness": 87.91
    },
    {
      "laplacian": 454.17,
      "width": 29.3,
      "brightness": 58.98
    },
    {
      "laplacian": 30.62,
      "width": 18.5,
      "brightness": 63.76
    },
    {
      "laplacian": 537.21,
      "width": 31.0,
      "brightness": 51.97
    },
    {
      "laplacian": 721.17,
      "width": 19.9,
      "brightness": 66.37
    },
    {
      "laplacian": 350.01,
      "width": 23.7,
      "brightness": 40.0
    },
    {
      "laplacian": 763.03,
      "width": 25.0,
      "brightness": 75.24
    },
    {
      "laplacian": 167.04,
      "width": 32.8,
      "brightness": 70.25
    },
    {
      "laplacian": 125.52,
      "width": 20.8,
      "brightness": 85.32
    },
    {
      "laplacian": 210.12,
      "width": 15.8,
      "brightness": 82.98
    },
    {
      "laplacian": 60.51,
      "width": 29.0,
      "brightness": 109.66
    },
    {
      "laplacian": 119.28,
      "width": 19.7,
      "brightness": 139.07
    },
    {
      "laplacian": 245.1,
      "width": 21.6,
      "brightness": 107.03
    },
    {
      "laplacian": 280.83,
      "width": 18.5,
      "brightness": 72.03
    },
    {
      "laplacian": 380.77,
      "width": 21.6,
      "brightness": 71.15
    },
    {
      "laplacian": 2096.37,
      "width": 19.6,
      "brightness": 101.11
    },
    {
      "laplacian": 71.03,
      "width": 25.7,
      "brightness": 44.97
    },
    {
      "laplacian": 452.33,
      "width": 23.3,
      "brightness": 75.07
    },
    {
      "laplacian": 322.13,
      "width": 20.3,
      "brightness": 76.76
    },
    {
      "laplacian": 109.5,
      "width": 27.0,
      "brightness": 94.85
    },
    {
      "laplacian": 415.08,
      "width": 24.0,
      "brightness": 95.51
    },
    {
      "laplacian": 73.51,
      "width": 15.6,
      "brightness": 65.62
    },
    {
      "laplacian": 234.7,
      "width": 26.7,
      "brightness": 72.88
    },
    {
      "laplacian": 1229.07,
      "width": 23.7,
      "brightness": 91.79
    },
    {
      "laplacian": 143.45,
      "width": 28.6,
      "brightness": 64.42
    },
    {
      "laplacian": 260.69,
      "width": 23.5,
      "brightness": 108.53
    },
    {
      "laplacian": 56.31,
      "width": 19.8,
      "brightness": 95.4
    },
    {
      "laplacian": 461.92,
      "width": 22.2,
      "brightness": 85.77
    },
    {
      "laplacian": 91.98,
      "width": 26.2,
      "brightness": 90.6
    },
    {
      "laplacian": 328.49,
      "width": 19.9,
      "brightness": 71.73
    },
    {
      "laplacian": 610.28,
      "width": 21.2,
      "brightness": 68.22
    },
    {
      "laplacian": 182.65,
      "width": 22.1,
      "brightness": 72.66
    },
    {
      "laplacian": 421.52,
      "width": 18.4,
      "brightness": 93.0
    },
    {
      "laplacian": 347.65,
      "width": 20.0,
      "brightness": 86.42
    },
    {
      "laplacian": 630.64,
      "width": 23.7,
      "brightness": 72.7
    },
    {
      "laplacian": 423.61,
      "width": 27.8,
      "brightness": 98.49
    },
    {
      "laplacian": 758.02,
      "width": 24.3,
      "brightness": 78.17
    },
    {
      "laplacian": 180.71,
      "width": 22.8,
      "brightness": 66.75
    },
    {
      "laplacian": 38.72,
      "width": 19.7,
      "brightness": 87.6
    },
    {
      "laplacian": 16.9,
      "width": 27.4,
      "brightness": 59.71
    },
    {
      "laplacian": 21.25,
      "width": 24.7,
      "brightness": 44.88
    },
    {
      "laplacian": 171.83,
      "width": 20.2,
      "brightness": 81.89
    },
    {
      "laplacian": 289.64,
      "width": 26.6,
      "brightness": 67.54
    },
    {
      "laplacian": 102.1,
      "width": 25.2,
      "brightness": 76.41
    },
    {
      "laplacian": 104.62,
      "width": 19.7,
      "brightness": 60.73
    },
    {
      "laplacian": 142.47,
      "width": 22.6,
      "brightness": 108.6
    },
    {
      "laplacian": 237.51,
      "width": 21.0,
      "brightness": 67.45
    },
    {
      "laplacian": 848.05,
      "width": 33.5,
      "brightness": 72.5
    },
    {
      "laplacian": 10.13,
      "width": 25.1,
      "brightness": 90.31
    },
    {
      "laplacian": 466.57,
      "width": 23.7,
      "brightness": 51.71
    },
    {
      "laplacian": 425.7,
      "width": 24.9,
      "brightness": 50.09
    },
    {
      "laplacian": 182.58,
      "width": 28.5,
      "brightness": 90.38
    },
    {
      "laplacian": 359.89,
      "width": 22.7,
      "brightness": 72.21
    },
    {
      "laplacian": 196.68,
      "width": 20.6,
      "brightness": 62.17
    },
    {
      "laplacian": 417.27,
      "width": 26.4,
      "brightness": 95.27
    },
    {
      "laplacian": 79.13,
      "width": 22.3,
      "brightness": 64.14
    },
    {
      "laplacian": 65.9,
      "width": 18.7,
      "brightness": 75.96
    },
    {
      "laplacian": 10.0,
      "width": 17.9,
      "brightness": 62.29
    },
    {
      "laplacian": 361.5,
      "width": 29.1,
      "brightness": 88.68
    },
    {
      "laplacian": 116.93,
      "width": 23.5,
      "brightness": 111.31
    },
    {
      "laplacian": 19.54,
      "width": 20.6,
      "brightness": 41.06
    },
    {
      "laplacian": 67.56,
      "width": 22.1,
      "brightness": 84.48
    },
    {
      "laplacian": 416.51,
      "width": 26.2,
      "brightness": 100.84
    },
    {
      "laplacian": 286.95,
      "width": 21.8,
      "brightness": 72.73
    },
    {
      "laplacian": 71.18,
      "width": 17.2,
      "brightness": 57.12
    },
    {
      "laplacian": 819.58,
      "width": 24.3,
      "brightness": 91.26
    },
    {
      "laplacian": 223.6,
      "width": 27.8,
      "brightness": 104.04
    },
    {
      "laplacian": 387.65,
      "width": 27.6,
      "brightness": 101.59
    },
    {
      "laplacian": 280.79,
      "width": 20.8,
      "brightness": 90.05
    },
    {
      "laplacian": 175.92,
      "width": 28.1,
      "brightness": 84.15
    },
    {
      "laplacian": 362.99,
      "width": 23.9,
      "brightness": 62.22
    },
    {
      "laplacian": 682.51,
      "width": 28.0,
      "brightness": 101.04
    },
    {
      "laplacian": 172.38,
      "width": 25.3,
      "brightness": 99.82
    },
    {
      "laplacian": 494.18,
      "width": 16.9,
      "brightness": 56.96
    },
    {
      "laplacian": 101.99,
      "width": 30.0,
      "brightness": 90.02
    },
    {
      "laplacian": 1093.09,
      "width": 23.2,
      "brightness": 96.36
    },
    {
      "laplacian": 84.47,
      "width": 25.3,
      "brightness": 101.41
    },
    {
      "laplacian": 1405.47,
      "width": 17.6,
      "brightness": 80.35
    },
    {
      "laplacian": 41.89,
      "width": 25.0,
      "brightness": 63.13
    },
    {
      "laplacian": 161.57,
      "width": 27.4,
      "brightness": 70.95
    },
    {
      "laplacian": 381.13,
      "width": 30.7,
      "brightness": 59.84
    },
    {
      "laplacian": 722.29,
      "width": 28.6,
      "brightness": 80.88
    },
    {
      "laplacian": 959.46,
      "width": 25.2,
      "brightness": 76.57
    },
    {
      "laplacian": 856.55,
      "width": 16.8,
      "brightness": 129.19
    },
    {
      "laplacian": 367.56,
      "width": 23.5,
      "brightness": 101.68
    },
    {
      "laplacian": 91.89,
      "width": 20.6,
      "brightness": 103.33
    },
    {
      "laplacian": 596.52,
      "width": 23.9,
      "brightness": 92.37
    },
    {
      "laplacian": 659.21,
      "width": 18.1,
      "brightness": 73.92
    },
    {
      "laplacian": 330.43,
      "width": 22.2,
      "brightness": 75.94
    },
    {
      "laplacian": 128.36,
      "width": 20.9,
      "brightness": 77.95
    },
    {
      "laplacian": 53.97,
      "width": 20.8,
      "brightness": 86.14
    },
    {
      "laplacian": 100.47,
      "width": 20.8,
      "brightness": 90.56
    },
    {
      "laplacian": 93.71,
      "width": 22.5,
      "brightness": 82.02
    },
    {
      "laplacian": 251.49,
      "width": 24.1,
      "brightness": 75.61
    },
    {
      "laplacian": 622.86,
      "width": 13.0,
      "brightness": 68.93
    },
    {
      "laplacian": 272.07,
      "width": 13.5,
      "brightness": 51.36
    },
    {
      "laplacian": 47.38,
      "width": 21.6,
      "brightness": 110.23
    },
    {
      "laplacian": 472.65,
      "width": 22.2,
      "brightness": 130.52
    },
    {
      "laplacian": 1185.87,
      "width": 23.8,
      "brightness": 108.39
    },
    {
      "laplacian": 268.68,
      "width": 20.1,
      "brightness": 54.3
    },
    {
      "laplacian": 104.94,
      "width": 23.0,
      "brightness": 99.31
    },
    {
      "laplacian": 65.2,
      "width": 23.5,
      "brightness": 104.52
    },
    {
      "laplacian": 446.49,
      "width": 20.1,
      "brightness": 73.12
    },
    {
      "laplacian": 933.67,
      "width": 27.1,
      "brightness": 92.76
    },
    {
      "laplacian": 171.16,
      "width": 23.7,
      "brightness": 71.96
    },
    {
      "laplacian": 128.4,
      "width": 25.2,
      "brightness": 115.64
    },
    {
      "laplacian": 262.2,
      "width": 23.3,
      "brightness": 90.04
    },
    {
      "laplacian": 508.09,
      "width": 31.4,
      "brightness": 61.82
    },
    {
      "laplacian": 95.08,
      "width": 25.4,
      "brightness": 96.74
    },
    {
      "laplacian": 306.27,
      "width": 21.0,
      "brightness": 105.29
    },
    {
      "laplacian": 399.08,
      "width": 26.3,
      "brightness": 86.36
    },
    {
      "laplacian": 428.34,
      "width": 16.4,
      "brightness": 92.55
    },
    {
      "laplacian": 56.91,
      "width": 23.5,
      "brightness": 80.47
    },
    {
      "laplacian": 76.78,
      "width": 24.3,
      "brightness": 57.05
    },
    {
      "laplacian": 266.11,
      "width": 23.5,
      "brightness": 78.66
    },
    {
      "laplacian": 477.99,
      "width": 21.7,
      "brightness": 93.51
    },
    {
      "laplacian": 1349.94,
      "width": 19.0,
      "brightness": 79.18
    },
    {
      "laplacian": 51.08,
      "width": 19.8,
      "brightness": 99.62
    },
    {
      "laplacian": 314.24,
      "width": 23.4,
      "brightness": 73.37
    },
    {
      "laplacian": 242.26,
      "width": 18.5,
      "brightness": 74.82
    },
    {
      "laplacian": 145.36,
      "width": 30.1,
      "brightness": 100.28
    },
    {
      "laplacian": 691.31,
      "width": 12.4,
      "brightness": 86.88
    },
    {
      "laplacian": 423.04,
      "width": 21.7,
      "brightness": 72.94
    },
    {
      "laplacian": 434.92,
      "width": 23.4,
      "brightness": 104.74
    },
    {
      "laplacian": 46.05,
      "width": 25.0,
      "brightness": 66.85
    },
    {
      "laplacian": 161.79,
      "width": 19.3,
      "brightness": 66.01
    },
    {
      "laplacian": 256.08,
      "width": 27.5,
      "brightness": 40.0
    },
    {
      "laplacian": 289.88,
      "width": 17.4,
      "brightness": 69.81
    },
    {
      "laplacian": 1619.06,
      "width": 20.7,
      "brightness": 110.79
    },
    {
      "laplacian": 172.54,
      "width": 25.5,
      "brightness": 40.0
    },
    {
      "laplacian": 259.72,
      "width": 27.2,
      "brightness": 61.06
    },
    {
      "laplacian": 400.54,
      "width": 17.4,
      "brightness": 91.66
    },
    {
      "laplacian": 257.01,
      "width": 33.6,
      "brightness": 40.0
    },
    {
      "laplacian": 327.42,
      "width": 19.4,
      "brightness": 70.76
    },
    {
      "laplacian": 44.2,
      "width": 17.8,
      "brightness": 107.1
    },
    {
      "laplacian": 435.04,
      "width": 25.0,
      "brightness": 126.95
    },
    {
      "laplacian": 191.17,
      "width": 21.6,
      "brightness": 88.39
    },
    {
      "laplacian": 283.52,
      "width": 21.0,
      "brightness": 61.62
    },
    {
      "laplacian": 164.98,
      "width": 25.4,
      "brightness": 60.88
    },
    {
      "laplacian": 115.32,
      "width": 16.9,
      "brightness": 85.19
    },
    {
      "laplacian": 172.05,
      "width": 16.2,
      "brightness": 88.18
    },
    {
      "laplacian": 286.98,
      "width": 20.6,
      "brightness": 122.87
    },
    {
      "laplacian": 243.46,
      "width": 27.3,
      "brightness": 103.36
    },
    {
      "laplacian": 583.87,
      "width": 20.8,
      "brightness": 83.85
    },
    {
      "laplacian": 24.93,
      "width": 29.4,
      "brightness": 74.63
    },
    {
      "laplacian": 32.3,
      "width": 27.8,
      "brightness": 148.32
    },
    {
      "laplacian": 188.67,
      "width": 24.1,
      "brightness": 95.79
    },
    {
      "laplacian": 412.94,
      "width": 24.4,
      "brightness": 67.29
    },
    {
      "laplacian": 499.22,
      "width": 24.1,
      "brightness": 77.06
    },
    {
      "laplacian": 121.28,
      "width": 23.6,
      "brightness": 62.7
    },
    {
      "laplacian": 126.31,
      "width": 21.5,
      "brightness": 40.0
    },
    {
      "laplacian": 359.79,
      "width": 22.0,
      "brightness": 88.88
    },
    {
      "laplacian": 238.7,
      "width": 18.7,
      "brightness": 121.21
    },
    {
      "laplacian": 427.15,
      "width": 14.2,
      "brightness": 46.13
    },
    {
      "laplacian": 707.29,
      "width": 27.4,
      "brightness": 83.22
    },
    {
      "laplacian": 203.64,
      "width": 23.6,
      "brightness": 66.45
    },
    {
      "laplacian": 144.49,
      "width": 23.0,
      "brightness": 93.47
    },
    {
      "laplacian": 77.38,
      "width": 24.6,
      "brightness": 78.21
    },
    {
      "laplacian": 31.96,
      "width": 19.7,
      "brightness": 52.08
    },
    {
      "laplacian": 18.27,
      "width": 19.0,
      "brightness": 60.42
    },
    {
      "laplacian": 106.71,
      "width": 21.9,
      "brightness": 63.73
    },
    {
      "laplacian": 627.19,
      "width": 28.5,
      "brightness": 111.58
    },
    {
      "laplacian": 465.74,
      "width": 18.3,
      "brightness": 110.45
    },
    {
      "laplacian": 136.41,
      "width": 12.5,
      "brightness": 75.15
    },
    {
      "laplacian": 1351.22,
      "width": 20.9,
      "brightness": 109.01
    },
    {
      "laplacian": 116.55,
      "width": 27.6,
      "brightness": 78.19
    },
    {
      "laplacian": 764.71,
      "width": 16.1,
      "brightness": 74.81
    },
    {
      "laplacian": 919.69,
      "width": 18.3,
      "brightness": 83.26
    },
    {
      "laplacian": 383.4,
      "width": 24.1,
      "brightness": 88.27
    },
    {
      "laplacian": 105.41,
      "width": 33.3,
      "brightness": 69.78
    },
    {
      "laplacian": 159.35,
      "width": 17.6,
      "brightness": 82.48
    },
    {
      "laplacian": 294.06,
      "width": 17.4,
      "brightness": 99.32
    },
    {
      "laplacian": 33.66,
      "width": 24.4,
      "brightness": 84.85
    },
    {
      "laplacian": 67.29,
      "width": 27.8,
      "brightness": 82.94
    },
    {
      "laplacian": 59.29,
      "width": 20.5,
      "brightness": 92.87
    },
    {
      "laplacian": 411.16,
      "width": 16.5,
      "brightness": 96.67
    },
    {
      "laplacian": 701.53,
      "width": 24.7,
      "brightness": 80.62
    },
    {
      "laplacian": 482.46,
      "width": 25.5,
      "brightness": 71.57
    },
    {
      "laplacian": 605.91,
      "width": 30.1,
      "brightness": 86.16
    },
    {
      "laplacian": 94.02,
      "width": 25.6,
      "brightness": 46.93
    },
    {
      "laplacian": 167.9,
      "width": 26.3,
      "brightness": 77.37
    },
    {
      "laplacian": 182.98,
      "width": 22.0,
      "brightness": 40.0
    },
    {
      "laplacian": 381.95,
      "width": 32.8,
      "brightness": 45.13
    },
    {
      "laplacian": 110.61,
      "width": 21.4,
      "brightness": 41.82
    },
    {
      "laplacian": 573.77,
      "width": 20.6,
      "brightness": 105.04
    },
    {
      "laplacian": 898.91,
      "width": 30.2,
      "brightness": 82.31
    },
    {
      "laplacian": 400.57,
      "width": 17.1,
      "brightness": 54.23
    },
    {
      "laplacian": 159.43,
      "width": 15.6,
      "brightness": 92.8
    },
    {
      "laplacian": 83.06,
      "width": 23.5,
      "brightness": 103.75
    },
    {
      "laplacian": 59.5,
      "width": 23.0,
      "brightness": 93.19
    },
    {
      "laplacian": 10.0,
      "width": 22.1,
      "brightness": 77.85
    },
    {
      "laplacian": 189.44,
      "width": 27.0,
      "brightness": 87.11
    },
    {
      "laplacian": 177.43,
      "width": 19.4,
      "brightness": 101.83
    },
    {
      "laplacian": 543.17,
      "width": 23.3,
      "brightness": 71.68
    },
    {
      "laplacian": 120.2,
      "width": 21.6,
      "brightness": 82.66
    },
    {
      "laplacian": 201.66,
      "width": 19.4,
      "brightness": 76.34
    },
    {
      "laplacian": 324.03,
      "width": 22.8,
      "brightness": 46.5
    },
    {
      "laplacian": 394.46,
      "width": 26.4,
      "brightness": 102.16
    },
    {
      "laplacian": 489.05,
      "width": 31.5,
      "brightness": 127.26
    },
    {
      "laplacian": 292.98,
      "width": 25.3,
      "brightness": 62.78
    },
    {
      "laplacian": 37.3,
      "width": 13.0,
      "brightness": 103.18
    },
    {
      "laplacian": 362.47,
      "width": 22.8,
      "brightness": 63.48
    },
    {
      "laplacian": 109.4,
      "width": 23.2,
      "brightness": 84.92
    },
    {
      "laplacian": 729.71,
      "width": 26.7,
      "brightness": 115.18
    },
    {
      "laplacian": 248.25,
      "width": 23.7,
      "brightness": 70.55
    },
    {
      "laplacian": 310.99,
      "width": 28.0,
      "brightness": 81.68
    },
    {
      "laplacian": 1748.76,
      "width": 24.6,
      "brightness": 42.37
    },
    {
      "laplacian": 496.77,
      "width": 29.2,
      "brightness": 67.39
    },
    {
      "laplacian": 356.2,
      "width": 21.2,
      "brightness": 40.06
    },
    {
      "laplacian": 208.34,
      "width": 23.6,
      "brightness": 91.44
    },
    {
      "laplacian": 42.99,
      "width": 26.3,
      "brightness": 100.3
    },
    {
      "laplacian": 192.16,
      "width": 20.7,
      "brightness": 77.12
    },
    {
      "laplacian": 81.63,
      "width": 19.8,
      "brightness": 88.29
    },
    {
      "laplacian": 990.09,
      "width": 20.5,
      "brightness": 74.83
    },
    {
      "laplacian": 360.77,
      "width": 20.0,
      "brightness": 98.29
    },
    {
      "laplacian": 707.32,
      "width": 25.1,
      "brightness": 84.85
    },
    {
      "laplacian": 115.9,
      "width": 15.7,
      "brightness": 40.0
    },
    {
      "laplacian": 90.18,
      "width": 16.8,
      "brightness": 102.68
    },
    {
      "laplacian": 453.91,
      "width": 30.5,
      "brightness": 73.43
    },
    {
      "laplacian": 77.05,
      "width": 20.1,
      "brightness": 54.05
    },
    {
      "laplacian": 145.56,
      "width": 23.8,
      "brightness": 72.34
    },
    {
      "laplacian": 1028.56,
      "width": 17.0,
      "brightness": 40.15
    },
    {
      "laplacian": 152.69,
      "width": 23.4,
      "brightness": 54.5
    },
    {
      "laplacian": 28.93,
      "width": 20.1,
      "brightness": 85.14
    },
    {
      "laplacian": 12.24,
      "width": 16.7,
      "brightness": 86.99
    },
    {
      "laplacian": 22.67,
      "width": 28.3,
      "brightness": 88.74
    },
    {
      "laplacian": 742.98,
      "width": 27.7,
      "brightness": 82.07
    },
    {
      "laplacian": 125.37,
      "width": 22.6,
      "brightness": 66.76
    },
    {
      "laplacian": 1706.81,
      "width": 27.0,
      "brightness": 80.8
    },
    {
      "laplacian": 907.45,
      "width": 30.6,
      "brightness": 72.38
    },
    {
      "laplacian": 1231.13,
      "width": 26.0,
      "brightness": 46.23
    },
    {
      "laplacian": 619.45,
      "width": 24.9,
      "brightness": 65.01
    },
    {
      "laplacian": 432.2,
      "width": 23.8,
      "brightness": 101.57
    },
    {
      "laplacian": 85.77,
      "width": 25.6,
      "brightness": 116.94
    },
    {
      "laplacian": 241.79,
      "width": 21.5,
      "brightness": 96.33
    },
    {
      "laplacian": 473.22,
      "width": 21.9,
      "brightness": 115.96
    },
    {
      "laplacian": 586.57,
      "width": 24.8,
      "brightness": 83.88
    },
    {
      "laplacian": 50.15,
      "width": 21.1,
      "brightness": 120.33
    },
    {
      "laplacian": 195.61,
      "width": 21.5,
      "brightness": 127.2
    },
    {
      "laplacian": 221.75,
      "width": 23.0,
      "brightness": 43.86
    },
    {
      "laplacian": 212.29,
      "width": 27.6,
      "brightness": 86.87
    },
    {
      "laplacian": 61.63,
      "width": 18.5,
      "brightness": 83.9
    },
    {
      "laplacian": 1117.81,
      "width": 26.0,
      "brightness": 72.67
    },
    {
      "laplacian": 188.29,
      "width": 26.2,
      "brightness": 92.82
    },
    {
      "laplacian": 68.65,
      "width": 26.1,
      "brightness": 82.9
    },
    {
      "laplacian": 1139.96,
      "width": 19.8,
      "brightness": 65.82
    },
    {
      "laplacian": 908.16,
      "width": 16.2,
      "brightness": 81.41
    },
    {
      "laplacian": 281.27,
      "width": 25.2,
      "brightness": 108.5
    },
    {
      "laplacian": 140.33,
      "width": 23.8,
      "brightness": 86.02
    },
    {
      "laplacian": 19.16,
      "width": 27.0,
      "brightness": 95.79
    },
    {
      "laplacian": 402.67,
      "width": 20.2,
      "brightness": 75.9
    },
    {
      "laplacian": 128.61,
      "width": 26.0,
      "brightness": 91.95
    },
    {
      "laplacian": 235.56,
      "width": 27.2,
      "brightness": 55.4
    },
    {
      "laplacian": 1059.79,
      "width": 22.6,
      "brightness": 71.01
    },
    {
      "laplacian": 117.11,
      "width": 24.7,
      "brightness": 79.74
    },
    {
      "laplacian": 386.52,
      "width": 24.5,
      "brightness": 53.92
    },
    {
      "laplacian": 502.14,
      "width": 19.7,
      "brightness": 63.74
    },
    {
      "laplacian": 723.56,
      "width": 25.1,
      "brightness": 88.89
    },
    {
      "laplacian": 217.48,
      "width": 29.5,
      "brightness": 84.86
    },
    {
      "laplacian": 193.35,
      "width": 23.1,
      "brightness": 99.74
    },
    {
      "laplacian": 188.29,
      "width": 17.2,
      "brightness": 68.79
    },
    {
      "laplacian": 351.57,
      "width": 20.3,
      "brightness": 83.27
    },
    {
      "laplacian": 876.77,
      "width": 15.9,
      "brightness": 67.22
    },
    {
      "laplacian": 178.63,
      "width": 28.2,
      "brightness": 97.53
    },
    {
      "laplacian": 553.75,
      "width": 26.1,
      "brightness": 108.2
    },
    {
      "laplacian": 260.55,
      "width": 21.0,
      "brightness": 92.63
    },
    {
      "laplacian": 403.53,
      "width": 17.3,
      "brightness": 105.35
    },
    {
      "laplacian": 20.74,
      "width": 19.7,
      "brightness": 82.71
    },
    {
      "laplacian": 129.23,
      "width": 20.4,
      "brightness": 99.72
    },
    {
      "laplacian": 514.17,
      "width": 23.4,
      "brightness": 83.66
    },
    {
      "laplacian": 40.57,
      "width": 23.3,
      "brightness": 59.45
    },
    {
      "laplacian": 385.68,
      "width": 28.4,
      "brightness": 87.43
    },
    {
      "laplacian": 233.49,
      "width": 20.2,
      "brightness": 60.1
    },
    {
      "laplacian": 97.13,
      "width": 17.0,
      "brightness": 133.46
    },
    {
      "laplacian": 86.81,
      "width": 18.4,
      "brightness": 74.65
    },
    {
      "laplacian": 62.51,
      "width": 22.9,
      "brightness": 96.19
    },
    {
      "laplacian": 259.1,
      "width": 20.1,
      "brightness": 81.73
    },
    {
      "laplacian": 291.63,
      "width": 21.8,
      "brightness": 54.86
    },
    {
      "laplacian": 159.02,
      "width": 21.2,
      "brightness": 40.23
    },
    {
      "laplacian": 56.75,
      "width": 27.0,
      "brightness": 98.48
    },
    {
      "laplacian": 143.55,
      "width": 20.7,
      "brightness": 116.09
    },
    {
      "laplacian": 1234.15,
      "width": 21.5,
      "brightness": 65.83
    },
    {
      "laplacian": 100.55,
      "width": 25.9,
      "brightness": 45.55
    },
    {
      "laplacian": 262.41,
      "width": 20.7,
      "brightness": 74.85
    },
    {
      "laplacian": 110.03,
      "width": 24.7,
      "brightness": 61.38
    },
    {
      "laplacian": 227.64,
      "width": 24.3,
      "brightness": 67.69
    },
    {
      "laplacian": 100.8,
      "width": 23.6,
      "brightness": 95.43
    },
    {
      "laplacian": 132.45,
      "width": 18.5,
      "brightness": 80.89
    },
    {
      "laplacian": 27.21,
      "width": 27.9,
      "brightness": 63.75
    },
    {
      "laplacian": 268.28,
      "width": 31.9,
      "brightness": 94.95
    },
    {
      "laplacian": 160.31,
      "width": 23.0,
      "brightness": 96.67
    },
    {
      "laplacian": 401.88,
      "width": 18.8,
      "brightness": 74.58
    },
    {
      "laplacian": 227.1,
      "width": 23.1,
      "brightness": 85.03
    },
    {
      "laplacian": 96.95,
      "width": 27.0,
      "brightness": 93.45
    },
    {
      "laplacian": 67.09,
      "width": 20.5,
      "brightness": 91.37
    },
    {
      "laplacian": 241.26,
      "width": 22.5,
      "brightness": 82.89
    },
    {
      "laplacian": 769.05,
      "width": 24.4,
      "brightness": 113.52
    },
    {
      "laplacian": 122.66,
      "width": 27.8,
      "brightness": 94.82
    },
    {
      "laplacian": 298.82,
      "width": 26.1,
      "brightness": 72.09
    },
    {
      "laplacian": 702.82,
      "width": 26.3,
      "brightness": 72.22
    },
    {
      "laplacian": 411.19,
      "width": 21.3,
      "brightness": 69.72
    },
    {
      "laplacian": 43.42,
      "width": 24.6,
      "brightness": 95.91
    },
    {
      "laplacian": 274.66,
      "width": 20.1,
      "brightness": 68.3
    },
    {
      "laplacian": 531.36,
      "width": 26.4,
      "brightness": 72.65
    },
    {
      "laplacian": 147.37,
      "width": 27.6,
      "brightness": 105.28
    },
    {
      "laplacian": 126.27,
      "width": 25.2,
      "brightness": 86.22
    },
    {
      "laplacian": 131.53,
      "width": 21.5,
      "brightness": 108.37
    },
    {
      "laplacian": 194.28,
      "width": 22.2,
      "brightness": 99.56
    },
    {
      "laplacian": 48.21,
      "width": 30.2,
      "brightness": 56.11
    },
    {
      "laplacian": 296.09,
      "width": 21.6,
      "brightness": 79.75
    },
    {
      "laplacian": 311.14,
      "width": 27.2,
      "brightness": 103.78
    },
    {
      "laplacian": 318.52,
      "width": 24.4,
      "brightness": 55.11
    },
    {
      "laplacian": 231.12,
      "width": 21.7,
      "brightness": 91.23
    },
    {
      "laplacian": 45.96,
      "width": 17.6,
      "brightness": 81.14
    },
    {
      "laplacian": 182.03,
      "width": 23.8,
      "brightness": 43.39
    },
    {
      "laplacian": 1074.25,
      "width": 23.4,
      "brightness": 84.63
    },
    {
      "laplacian": 305.85,
      "width": 30.2,
      "brightness": 63.58
    },
    {
      "laplacian": 87.45,
      "width": 19.6,
      "brightness": 56.31
    },
    {
      "laplacian": 433.71,
      "width": 32.2,
      "brightness": 82.2
    },
    {
      "laplacian": 1084.79,
      "width": 24.5,
      "brightness": 40.0
    },
    {
      "laplacian": 346.07,
      "width": 24.5,
      "brightness": 67.17
    },
    {
      "laplacian": 202.06,
      "width": 20.6,
      "brightness": 138.13
    },
    {
      "laplacian": 767.09,
      "width": 24.3,
      "brightness": 96.3
    },
    {
      "laplacian": 134.56,
      "width": 24.9,
      "brightness": 62.61
    },
    {
      "laplacian": 604.3,
      "width": 26.7,
      "brightness": 112.89
    },
    {
      "laplacian": 123.13,
      "width": 19.1,
      "brightness": 60.18
    },
    {
      "laplacian": 150.58,
      "width": 28.6,
      "brightness": 69.82
    },
    {
      "laplacian": 501.09,
      "width": 24.4,
      "brightness": 56.73
    },
    {
      "laplacian": 739.95,
      "width": 25.4,
      "brightness": 87.63
    },
    {
      "laplacian": 216.79,
      "width": 22.1,
      "brightness": 112.11
    },
    {
      "laplacian": 722.59,
      "width": 19.3,
      "brightness": 60.02
    },
    {
      "laplacian": 353.27,
      "width": 23.3,
      "brightness": 40.0
    },
    {
      "laplacian": 89.49,
      "width": 23.7,
      "brightness": 106.0
    },
    {
      "laplacian": 152.23,
      "width": 17.5,
      "brightness": 116.18
    },
    {
      "laplacian": 406.58,
      "width": 26.2,
      "brightness": 40.0
    },
    {
      "laplacian": 807.0,
      "width": 27.0,
      "brightness": 92.12
    },
    {
      "laplacian": 613.86,
      "width": 20.1,
      "brightness": 86.98
    },
    {
      "laplacian": 621.7,
      "width": 18.9,
      "brightness": 64.68
    },
    {
      "laplacian": 35.83,
      "width": 21.8,
      "brightness": 51.32
    },
    {
      "laplacian": 484.38,
      "width": 23.1,
      "brightness": 103.82
    },
    {
      "laplacian": 461.54,
      "width": 21.9,
      "brightness": 85.94
    },
    {
      "laplacian": 320.92,
      "width": 22.8,
      "brightness": 87.6
    },
    {
      "laplacian": 454.74,
      "width": 23.9,
      "brightness": 68.32
    },
    {
      "laplacian": 314.75,
      "width": 17.5,
      "brightness": 64.36
    },
    {
      "laplacian": 226.5,
      "width": 18.0,
      "brightness": 40.0
    },
    {
      "laplacian": 189.31,
      "width": 12.1,
      "brightness": 76.98
    },
    {
      "laplacian": 370.02,
      "width": 26.8,
      "brightness": 113.65
    },
    {
      "laplacian": 297.42,
      "width": 23.1,
      "brightness": 62.41
    },
    {
      "laplacian": 335.02,
      "width": 27.2,
      "brightness": 48.51
    },
    {
      "laplacian": 555.84,
      "width": 18.4,
      "brightness": 91.58
    },
    {
      "laplacian": 129.63,
      "width": 23.1,
      "brightness": 95.64
    },
    {
      "laplacian": 342.36,
      "width": 23.9,
      "brightness": 69.11
    },
    {
      "laplacian": 110.26,
      "width": 20.8,
      "brightness": 74.33
    },
    {
      "laplacian": 10.0,
      "width": 16.8,
      "brightness": 87.81
    },
    {
      "laplacian": 173.34,
      "width": 30.0,
      "brightness": 78.58
    },
    {
      "laplacian": 632.22,
      "width": 28.6,
      "brightness": 104.0
    },
    {
      "laplacian": 79.95,
      "width": 21.5,
      "brightness": 135.62
    },
    {
      "laplacian": 372.31,
      "width": 25.0,
      "brightness": 44.4
    },
    {
      "laplacian": 560.59,
      "width": 21.1,
      "brightness": 109.05
    },
    {
      "laplacian": 488.81,
      "width": 19.0,
      "brightness": 84.32
    },
    {
      "laplacian": 109.71,
      "width": 30.3,
      "brightness": 112.54
    },
    {
      "laplacian": 97.25,
      "width": 16.4,
      "brightness": 97.94
    },
    {
      "laplacian": 252.19,
      "width": 21.9,
      "brightness": 83.35
    },
    {
      "laplacian": 318.55,
      "width": 23.3,
      "brightness": 98.72
    },
    {
      "laplacian": 451.4,
      "width": 29.6,
      "brightness": 73.33
    },
    {
      "laplacian": 455.89,
      "width": 26.6,
      "brightness": 64.97
    },
    {
      "laplacian": 1833.58,
      "width": 16.3,
      "brightness": 99.84
    },
    {
      "laplacian": 865.38,
      "width": 23.0,
      "brightness": 63.42
    },
    {
      "laplacian": 161.99,
      "width": 23.1,
      "brightness": 96.13
    },
    {
      "laplacian": 1308.99,
      "width": 22.1,
      "brightness": 82.68
    },
    {
      "laplacian": 52.8,
      "width": 25.5,
      "brightness": 40.0
    },
    {
      "laplacian": 62.66,
      "width": 17.4,
      "brightness": 69.36
    },
    {
      "laplacian": 509.28,
      "width": 21.4,
      "brightness": 89.37
    },
    {
      "laplacian": 181.74,
      "width": 24.9,
      "brightness": 73.07
    },
    {
      "laplacian": 868.44,
      "width": 25.7,
      "brightness": 40.0
    },
    {
      "laplacian": 439.37,
      "width": 23.6,
      "brightness": 111.06
    },
    {
      "laplacian": 216.18,
      "width": 21.8,
      "brightness": 85.73
    },
    {
      "laplacian": 197.71,
      "width": 22.5,
      "brightness": 91.76
    },
    {
      "laplacian": 189.68,
      "width": 26.0,
      "brightness": 71.59
    },
    {
      "laplacian": 76.23,
      "width": 23.1,
      "brightness": 93.69
    },
    {
      "laplacian": 106.66,
      "width": 18.8,
      "brightness": 122.37
    },
    {
      "laplacian": 649.33,
      "width": 18.1,
      "brightness": 65.83
    },
    {
      "laplacian": 121.11,
      "width": 17.0,
      "brightness": 118.67
    },
    {
      "laplacian": 354.92,
      "width": 28.8,
      "brightness": 90.77
    },
    {
      "laplacian": 198.59,
      "width": 26.2,
      "brightness": 62.87
    },
    {
      "laplacian": 77.21,
      "width": 22.6,
      "brightness": 130.67
    },
    {
      "laplacian": 319.65,
      "width": 21.2,
      "brightness": 90.62
    },
    {
      "laplacian": 237.86,
      "width": 20.7,
      "brightness": 96.88
    },
    {
      "laplacian": 152.79,
      "width": 27.4,
      "brightness": 76.07
    },
    {
      "laplacian": 109.16,
      "width": 30.6,
      "brightness": 64.48
    },
    {
      "laplacian": 530.28,
      "width": 20.6,
      "brightness": 85.69
    },
    {
      "laplacian": 198.37,
      "width": 27.6,
      "brightness": 116.79
    },
    {
      "laplacian": 570.73,
      "width": 23.1,
      "brightness": 75.19
    },
    {
      "laplacian": 126.97,
      "width": 22.2,
      "brightness": 81.41
    },
    {
      "laplacian": 282.42,
      "width": 29.0,
      "brightness": 114.04
    },
    {
      "laplacian": 115.1,
      "width": 23.0,
      "brightness": 75.39
    },
    {
      "laplacian": 83.95,
      "width": 24.2,
      "brightness": 93.23
    },
    {
      "laplacian": 10.0,
      "width": 24.0,
      "brightness": 101.3
    },
    {
      "laplacian": 894.51,
      "width": 16.5,
      "brightness": 77.67
    },
    {
      "laplacian": 135.87,
      "width": 24.2,
      "brightness": 88.82
    },
    {
      "laplacian": 402.06,
      "width": 20.7,
      "brightness": 96.54
    },
    {
      "laplacian": 201.39,
      "width": 17.3,
      "brightness": 73.18
    },
    {
      "laplacian": 696.5,
      "width": 20.9,
      "brightness": 99.95
    },
    {
      "laplacian": 13.22,
      "width": 20.9,
      "brightness": 69.97
    },
    {
      "laplacian": 300.64,
      "width": 27.1,
      "brightness": 67.15
    },
    {
      "laplacian": 499.12,
      "width": 18.7,
      "brightness": 48.41
    },
    {
      "laplacian": 258.2,
      "width": 19.8,
      "brightness": 70.92
    },
    {
      "laplacian": 95.7,
      "width": 23.9,
      "brightness": 64.06
    },
    {
      "laplacian": 14.66,
      "width": 17.7,
      "brightness": 73.18
    },
    {
      "laplacian": 110.29,
      "width": 20.4,
      "brightness": 95.46
    },
    {
      "laplacian": 488.12,
      "width": 16.3,
      "brightness": 44.04
    },
    {
      "laplacian": 387.3,
      "width": 26.7,
      "brightness": 40.0
    },
    {
      "laplacian": 536.56,
      "width": 21.8,
      "brightness": 65.52
    },
    {
      "laplacian": 70.42,
      "width": 22.9,
      "brightness": 92.15
    },
    {
      "laplacian": 54.56,
      "width": 26.7,
      "brightness": 88.36
    },
    {
      "laplacian": 407.98,
      "width": 20.1,
      "brightness": 65.17
    },
    {
      "laplacian": 393.64,
      "width": 21.8,
      "brightness": 107.73
    },
    {
      "laplacian": 10.28,
      "width": 18.8,
      "brightness": 67.51
    },
    {
      "laplacian": 103.11,
      "width": 18.8,
      "brightness": 92.17
    },
    {
      "laplacian": 935.07,
      "width": 19.3,
      "brightness": 74.02
    },
    {
      "laplacian": 507.87,
      "width": 21.0,
      "brightness": 62.89
    },
    {
      "laplacian": 182.46,
      "width": 21.5,
      "brightness": 68.69
    },
    {
      "laplacian": 43.8,
      "width": 24.2,
      "brightness": 98.15
    },
    {
      "laplacian": 68.09,
      "width": 19.4,
      "brightness": 89.94
    },
    {
      "laplacian": 146.92,
      "width": 24.3,
      "brightness": 103.3
    },
    {
      "laplacian": 29.29,
      "width": 24.9,
      "brightness": 89.94
    },
    {
      "laplacian": 716.23,
      "width": 21.1,
      "brightness": 46.55
    },
    {
      "laplacian": 662.39,
      "width": 19.8,
      "brightness": 128.52
    },
    {
      "laplacian": 46.44,
      "width": 23.3,
      "brightness": 90.25
    },
    {
      "laplacian": 1144.94,
      "width": 22.2,
      "brightness": 93.32
    },
    {
      "laplacian": 141.04,
      "width": 23.9,
      "brightness": 73.71
    },
    {
      "laplacian": 244.1,
      "width": 29.3,
      "brightness": 106.49
    },
    {
      "laplacian": 138.59,
      "width": 23.3,
      "brightness": 57.95
    },
    {
      "laplacian": 54.22,
      "width": 20.4,
      "brightness": 95.42
    },
    {
      "laplacian": 160.05,
      "width": 19.4,
      "brightness": 40.0
    },
    {
      "laplacian": 161.4,
      "width": 19.6,
      "brightness": 96.9
    },
    {
      "laplacian": 219.12,
      "width": 17.1,
      "brightness": 58.25
    },
    {
      "laplacian": 307.38,
      "width": 26.7,
      "brightness": 88.09
    },
    {
      "laplacian": 21.92,
      "width": 14.1,
      "brightness": 111.86
    },
    {
      "laplacian": 24.85,
      "width": 25.0,
      "brightness": 100.1
    },
    {
      "laplacian": 293.65,
      "width": 19.5,
      "brightness": 108.94
    },
    {
      "laplacian": 46.71,
      "width": 21.0,
      "brightness": 106.66
    },
    {
      "laplacian": 189.91,
      "width": 19.4,
      "brightness": 70.47
    },
    {
      "laplacian": 723.99,
      "width": 28.8,
      "brightness": 95.16
    },
    {
      "laplacian": 79.81,
      "width": 23.1,
      "brightness": 44.05
    },
    {
      "laplacian": 589.45,
      "width": 26.2,
      "brightness": 66.89
    },
    {
      "laplacian": 10.11,
      "width": 28.2,
      "brightness": 112.64
    },
    {
      "laplacian": 192.99,
      "width": 23.7,
      "brightness": 73.53
    },
    {
      "laplacian": 326.97,
      "width": 18.2,
      "brightness": 40.9
    },
    {
      "laplacian": 560.74,
      "width": 22.1,
      "brightness": 126.3
    },
    {
      "laplacian": 143.63,
      "width": 20.0,
      "brightness": 94.37
    },
    {
      "laplacian": 38.89,
      "width": 21.0,
      "brightness": 98.82
    },
    {
      "laplacian": 311.04,
      "width": 22.6,
      "brightness": 60.43
    },
    {
      "laplacian": 318.78,
      "width": 22.5,
      "brightness": 88.25
    },
    {
      "laplacian": 1057.61,
      "width": 24.6,
      "brightness": 87.67
    },
    {
      "laplacian": 160.05,
      "width": 25.2,
      "brightness": 63.93
    },
    {
      "laplacian": 323.25,
      "width": 22.5,
      "brightness": 78.26
    },
    {
      "laplacian": 211.61,
      "width": 24.6,
      "brightness": 48.99
    },
    {
      "laplacian": 47.38,
      "width": 20.8,
      "brightness": 74.37
    },
    {
      "laplacian": 315.48,
      "width": 28.3,
      "brightness": 103.42
    },
    {
      "laplacian": 630.14,
      "width": 20.7,
      "brightness": 65.57
    },
    {
      "laplacian": 450.56,
      "width": 27.8,
      "brightness": 123.96
    },
    {
      "laplacian": 98.46,
      "width": 17.1,
      "brightness": 50.41
    },
    {
      "laplacian": 178.93,
      "width": 21.5,
      "brightness": 76.28
    },
    {
      "laplacian": 705.9,
      "width": 21.7,
      "brightness": 67.56
    },
    {
      "laplacian": 165.02,
      "width": 24.1,
      "brightness": 78.04
    },
    {
      "laplacian": 691.05,
      "width": 26.4,
      "brightness": 112.17
    },
    {
      "laplacian": 193.18,
      "width": 18.0,
      "brightness": 60.34
    },
    {
      "laplacian": 209.09,
      "width": 18.6,
      "brightness": 72.07
    },
    {
      "laplacian": 609.52,
      "width": 17.4,
      "brightness": 96.4
    },
    {
      "laplacian": 1193.78,
      "width": 28.3,
      "brightness": 84.05
    },
    {
      "laplacian": 185.02,
      "width": 24.2,
      "brightness": 85.85
    },
    {
      "laplacian": 150.72,
      "width": 18.7,
      "brightness": 60.76
    },
    {
      "laplacian": 95.38,
      "width": 21.2,
      "brightness": 80.43
    },
    {
      "laplacian": 76.23,
      "width": 27.7,
      "brightness": 106.89
    },
    {
      "laplacian": 104.48,
      "width": 21.9,
      "brightness": 46.59
    },
    {
      "laplacian": 128.11,
      "width": 21.7,
      "brightness": 66.66
    },
    {
      "laplacian": 541.45,
      "width": 19.9,
      "brightness": 42.06
    },
    {
      "laplacian": 403.2,
      "width": 18.9,
      "brightness": 93.81
    },
    {
      "laplacian": 481.1,
      "width": 27.7,
      "brightness": 108.96
    },
    {
      "laplacian": 473.51,
      "width": 29.7,
      "brightness": 77.96
    },
    {
      "laplacian": 699.81,
      "width": 19.1,
      "brightness": 59.88
    },
    {
      "laplacian": 92.61,
      "width": 28.6,
      "brightness": 60.52
    },
    {
      "laplacian": 302.17,
      "width": 21.1,
      "brightness": 75.46
    },
    {
      "laplacian": 17.06,
      "width": 25.1,
      "brightness": 75.38
    },
    {
      "laplacian": 17.4,
      "width": 28.6,
      "brightness": 102.06
    },
    {
      "laplacian": 271.58,
      "width": 22.4,
      "brightness": 67.28
    },
    {
      "laplacian": 209.21,
      "width": 21.7,
      "brightness": 91.57
    },
    {
      "laplacian": 250.62,
      "width": 26.2,
      "brightness": 75.28
    },
    {
      "laplacian": 438.39,
      "width": 18.6,
      "brightness": 65.62
    },
    {
      "laplacian": 853.85,
      "width": 27.6,
      "brightness": 74.73
    },
    {
      "laplacian": 243.47,
      "width": 23.6,
      "brightness": 89.4
    },
    {
      "laplacian": 202.99,
      "width": 20.7,
      "brightness": 102.13
    },
    {
      "laplacian": 100.72,
      "width": 20.6,
      "brightness": 76.46
    },
    {
      "laplacian": 548.74,
      "width": 17.5,
      "brightness": 55.51
    },
    {
      "laplacian": 112.72,
      "width": 20.9,
      "brightness": 103.99
    },
    {
      "laplacian": 177.09,
      "width": 21.9,
      "brightness": 62.24
    },
    {
      "laplacian": 448.03,
      "width": 18.8,
      "brightness": 87.74
    },
    {
      "laplacian": 263.82,
      "width": 22.8,
      "brightness": 81.45
    },
    {
      "laplacian": 248.75,
      "width": 24.9,
      "brightness": 78.51
    },
    {
      "laplacian": 81.1,
      "width": 22.1,
      "brightness": 71.29
    },
    {
      "laplacian": 340.89,
      "width": 25.7,
      "brightness": 95.64
    },
    {
      "laplacian": 1376.08,
      "width": 19.8,
      "brightness": 40.0
    },
    {
      "laplacian": 37.78,
      "width": 27.0,
      "brightness": 107.0
    },
    {
      "laplacian": 53.53,
      "width": 23.5,
      "brightness": 61.92
    },
    {
      "laplacian": 508.99,
      "width": 29.2,
      "brightness": 90.98
    },
    {
      "laplacian": 309.71,
      "width": 32.7,
      "brightness": 89.81
    },
    {
      "laplacian": 803.43,
      "width": 21.1,
      "brightness": 110.05
    },
    {
      "laplacian": 96.54,
      "width": 21.3,
      "brightness": 86.35
    },
    {
      "laplacian": 556.4,
      "width": 22.0,
      "brightness": 63.76
    },
    {
      "laplacian": 340.96,
      "width": 25.4,
      "brightness": 46.7
    },
    {
      "laplacian": 70.0,
      "width": 28.3,
      "brightness": 74.33
    },
    {
      "laplacian": 113.3,
      "width": 20.4,
      "brightness": 40.0
    },
    {
      "laplacian": 246.7,
      "width": 24.5,
      "brightness": 68.17
    },
    {
      "laplacian": 80.63,
      "width": 22.5,
      "brightness": 75.56
    },
    {
      "laplacian": 670.2,
      "width": 25.5,
      "brightness": 66.82
    },
    {
      "laplacian": 486.48,
      "width": 29.0,
      "brightness": 82.92
    },
    {
      "laplacian": 136.36,
      "width": 22.0,
      "brightness": 76.81
    },
    {
      "laplacian": 203.4,
      "width": 16.3,
      "brightness": 74.79
    },
    {
      "laplacian": 581.73,
      "width": 26.0,
      "brightness": 40.0
    },
    {
      "laplacian": 225.98,
      "width": 19.7,
      "brightness": 53.52
    },
    {
      "laplacian": 1212.45,
      "width": 22.4,
      "brightness": 96.14
    },
    {
      "laplacian": 405.84,
      "width": 26.1,
      "brightness": 99.69
    },
    {
      "laplacian": 86.0,
      "width": 24.2,
      "brightness": 41.55
    },
    {
      "laplacian": 58.43,
      "width": 22.6,
      "brightness": 64.08
    },
    {
      "laplacian": 636.36,
      "width": 20.7,
      "brightness": 105.58
    },
    {
      "laplacian": 145.44,
      "width": 11.4,
      "brightness": 66.2
    },
    {
      "laplacian": 280.96,
      "width": 25.8,
      "brightness": 79.55
    },
    {
      "laplacian": 247.1,
      "width": 22.0,
      "brightness": 113.72
    },
    {
      "laplacian": 125.59,
      "width": 29.1,
      "brightness": 74.05
    },
    {
      "laplacian": 43.29,
      "width": 24.6,
      "brightness": 70.9
    },
    {
      "laplacian": 142.66,
      "width": 20.8,
      "brightness": 78.55
    },
    {
      "laplacian": 852.31,
      "width": 27.3,
      "brightness": 122.78
    },
    {
      "laplacian": 443.67,
      "width": 27.6,
      "brightness": 91.82
    },
    {
      "laplacian": 50.41,
      "width": 22.1,
      "brightness": 82.42
    },
    {
      "laplacian": 462.75,
      "width": 27.8,
      "brightness": 70.46
    },
    {
      "laplacian": 56.78,
      "width": 20.8,
      "brightness": 93.85
    },
    {
      "laplacian": 354.6,
      "width": 23.6,
      "brightness": 96.51
    },
    {
      "laplacian": 75.3,
      "width": 25.3,
      "brightness": 58.39
    },
    {
      "laplacian": 45.92,
      "width": 26.1,
      "brightness": 97.11
    },
    {
      "laplacian": 972.08,
      "width": 25.5,
      "brightness": 78.67
    },
    {
      "laplacian": 166.69,
      "width": 21.7,
      "brightness": 82.55
    },
    {
      "laplacian": 436.3,
      "width": 27.4,
      "brightness": 62.55
    },
    {
      "laplacian": 253.49,
      "width": 22.5,
      "brightness": 73.2
    },
    {
      "laplacian": 63.96,
      "width": 20.7,
      "brightness": 59.34
    },
    {
      "laplacian": 187.82,
      "width": 20.8,
      "brightness": 58.28
    },
    {
      "laplacian": 64.8,
      "width": 30.8,
      "brightness": 90.3
    },
    {
      "laplacian": 1571.25,
      "width": 20.0,
      "brightness": 74.19
    },
    {
      "laplacian": 510.02,
      "width": 28.2,
      "brightness": 53.41
    },
    {
      "laplacian": 248.57,
      "width": 18.5,
      "brightness": 129.9
    },
    {
      "laplacian": 415.04,
      "width": 25.0,
      "brightness": 57.26
    },
    {
      "laplacian": 480.99,
      "width": 24.2,
      "brightness": 106.03
    },
    {
      "laplacian": 482.14,
      "width": 29.5,
      "brightness": 49.52
    },
    {
      "laplacian": 463.71,
      "width": 20.4,
      "brightness": 92.04
    },
    {
      "laplacian": 431.93,
      "width": 19.3,
      "brightness": 76.49
    },
    {
      "laplacian": 270.2,
      "width": 22.5,
      "brightness": 68.16
    },
    {
      "laplacian": 911.8,
      "width": 29.7,
      "brightness": 86.33
    },
    {
      "laplacian": 288.2,
      "width": 19.5,
      "brightness": 83.37
    },
    {
      "laplacian": 256.17,
      "width": 12.6,
      "brightness": 64.13
    },
    {
      "laplacian": 290.71,
      "width": 23.2,
      "brightness": 63.13
    },
    {
      "laplacian": 311.97,
      "width": 26.8,
      "brightness": 47.37
    },
    {
      "laplacian": 18.86,
      "width": 18.9,
      "brightness": 88.72
    },
    {
      "laplacian": 84.44,
      "width": 26.4,
      "brightness": 54.42
    },
    {
      "laplacian": 216.73,
      "width": 18.9,
      "brightness": 82.09
    },
    {
      "laplacian": 16.93,
      "width": 22.4,
      "brightness": 95.03
    },
    {
      "laplacian": 248.15,
      "width": 26.0,
      "brightness": 86.58
    },
    {
      "laplacian": 307.91,
      "width": 18.3,
      "brightness": 66.09
    },
    {
      "laplacian": 40.11,
      "width": 23.7,
      "brightness": 101.99
    },
    {
      "laplacian": 114.85,
      "width": 27.9,
      "brightness": 73.02
    },
    {
      "laplacian": 753.51,
      "width": 24.9,
      "brightness": 52.65
    },
    {
      "laplacian": 419.0,
      "width": 20.1,
      "brightness": 75.76
    },
    {
      "laplacian": 397.08,
      "width": 29.1,
      "brightness": 94.91
    },
    {
      "laplacian": 677.7,
      "width": 25.6,
      "brightness": 67.16
    },
    {
      "laplacian": 86.73,
      "width": 15.6,
      "brightness": 101.32
    },
    {
      "laplacian": 40.31,
      "width": 26.5,
      "brightness": 65.05
    },
    {
      "laplacian": 601.74,
      "width": 20.7,
      "brightness": 68.05
    },
    {
      "laplacian": 223.4,
      "width": 23.8,
      "brightness": 58.99
    },
    {
      "laplacian": 83.58,
      "width": 27.0,
      "brightness": 97.04
    },
    {
      "laplacian": 18.55,
      "width": 20.8,
      "brightness": 80.83
    },
    {
      "laplacian": 294.08,
      "width": 16.4,
      "brightness": 60.45
    },
    {
      "laplacian": 196.42,
      "width": 29.0,
      "brightness": 73.28
    },
    {
      "laplacian": 160.91,
      "width": 27.7,
      "brightness": 40.0
    },
    {
      "laplacian": 10.0,
      "width": 22.7,
      "brightness": 99.12
    },
    {
      "laplacian": 902.01,
      "width": 26.4,
      "brightness": 78.24
    },
    {
      "laplacian": 28.57,
      "width": 21.5,
      "brightness": 40.0
    },
    {
      "laplacian": 179.58,
      "width": 23.4,
      "brightness": 49.95
    },
    {
      "laplacian": 147.09,
      "width": 22.4,
      "brightness": 72.72
    },
    {
      "laplacian": 430.68,
      "width": 21.7,
      "brightness": 53.09
    },
    {
      "laplacian": 19.0,
      "width": 24.4,
      "brightness": 99.45
    },
    {
      "laplacian": 384.18,
      "width": 18.2,
      "brightness": 91.21
    },
    {
      "laplacian": 295.55,
      "width": 22.0,
      "brightness": 89.91
    },
    {
      "laplacian": 107.78,
      "width": 24.3,
      "brightness": 40.0
    },
    {
      "laplacian": 371.47,
      "width": 30.4,
      "brightness": 70.44
    },
    {
      "laplacian": 247.69,
      "width": 18.3,
      "brightness": 66.65
    },
    {
      "laplacian": 1082.3,
      "width": 25.1,
      "brightness": 61.01
    },
    {
      "laplacian": 196.23,
      "width": 25.5,
      "brightness": 72.87
    },
    {
      "laplacian": 68.99,
      "width": 15.5,
      "brightness": 57.22
    },
    {
      "laplacian": 387.81,
      "width": 24.6,
      "brightness": 86.73
    },
    {
      "laplacian": 169.87,
      "width": 26.5,
      "brightness": 98.86
    },
    {
      "laplacian": 242.48,
      "width": 25.4,
      "brightness": 96.97
    },
    {
      "laplacian": 40.88,
      "width": 22.7,
      "brightness": 78.97
    },
    {
      "laplacian": 436.81,
      "width": 24.3,
      "brightness": 125.98
    },
    {
      "laplacian": 139.61,
      "width": 23.7,
      "brightness": 107.08
    },
    {
      "laplacian": 318.78,
      "width": 16.2,
      "brightness": 79.77
    },
    {
      "laplacian": 1304.61,
      "width": 23.8,
      "brightness": 71.39
    },
    {
      "laplacian": 183.8,
      "width": 21.5,
      "brightness": 111.44
    },
    {
      "laplacian": 492.93,
      "width": 20.2,
      "brightness": 104.17
    },
    {
      "laplacian": 198.43,
      "width": 32.9,
      "brightness": 50.97
    },
    {
      "laplacian": 109.7,
      "width": 28.0,
      "brightness": 105.89
    },
    {
      "laplacian": 775.73,
      "width": 18.4,
      "brightness": 78.6
    },
    {
      "laplacian": 611.42,
      "width": 24.4,
      "brightness": 63.06
    },
    {
      "laplacian": 10.0,
      "width": 28.8,
      "brightness": 40.0
    },
    {
      "laplacian": 557.62,
      "width": 17.0,
      "brightness": 76.08
    },
    {
      "laplacian": 246.41,
      "width": 23.3,
      "brightness": 81.73
    },
    {
      "laplacian": 69.27,
      "width": 23.5,
      "brightness": 116.92
    },
    {
      "laplacian": 151.28,
      "width": 17.9,
      "brightness": 103.06
    },
    {
      "laplacian": 469.13,
      "width": 24.5,
      "brightness": 69.18
    },
    {
      "laplacian": 1208.45,
      "width": 27.5,
      "brightness": 90.57
    },
    {
      "laplacian": 20.66,
      "width": 29.0,
      "brightness": 100.18
    },
    {
      "laplacian": 75.69,
      "width": 22.0,
      "brightness": 83.89
    },
    {
      "laplacian": 34.85,
      "width": 33.0,
      "brightness": 69.08
    },
    {
      "laplacian": 196.63,
      "width": 14.8,
      "brightness": 70.29
    },
    {
      "laplacian": 570.91,
      "width": 24.4,
      "brightness": 90.48
    },
    {
      "laplacian": 26.9,
      "width": 17.4,
      "brightness": 91.09
    },
    {
      "laplacian": 239.53,
      "width": 23.4,
      "brightness": 75.55
    },
    {
      "laplacian": 555.03,
      "width": 20.9,
      "brightness": 40.0
    },
    {
      "laplacian": 148.68,
      "width": 25.0,
      "brightness": 53.61
    },
    {
      "laplacian": 298.31,
      "width": 22.5,
      "brightness": 95.63
    },
    {
      "laplacian": 728.35,
      "width": 19.7,
      "brightness": 40.0
    },
    {
      "laplacian": 56.86,
      "width": 20.0,
      "brightness": 108.05
    },
    {
      "laplacian": 11.62,
      "width": 30.7,
      "brightness": 104.8
    },
    {
      "laplacian": 335.89,
      "width": 24.8,
      "brightness": 82.9
    },
    {
      "laplacian": 345.04,
      "width": 16.2,
      "brightness": 95.15
    },
    {
      "laplacian": 136.53,
      "width": 25.2,
      "brightness": 93.63
    },
    {
      "laplacian": 105.71,
      "width": 22.2,
      "brightness": 79.43
    },
    {
      "laplacian": 251.68,
      "width": 23.0,
      "brightness": 51.77
    },
    {
      "laplacian": 55.27,
      "width": 26.3,
      "brightness": 103.28
    },
    {
      "laplacian": 55.41,
      "width": 27.7,
      "brightness": 112.96
    },
    {
      "laplacian": 466.33,
      "width": 19.6,
      "brightness": 55.41
    },
    {
      "laplacian": 49.5,
      "width": 22.9,
      "brightness": 50.95
    },
    {
      "laplacian": 13.53,
      "width": 20.8,
      "brightness": 78.99
    },
    {
      "laplacian": 105.43,
      "width": 25.4,
      "brightness": 68.22
    },
    {
      "laplacian": 140.63,
      "width": 22.1,
      "brightness": 85.19
    },
    {
      "laplacian": 384.14,
      "width": 23.1,
      "brightness": 108.58
    },
    {
      "laplacian": 117.86,
      "width": 21.9,
      "brightness": 40.0
    },
    {
      "laplacian": 834.31,
      "width": 22.6,
      "brightness": 116.79
    },
    {
      "laplacian": 265.59,
      "width": 29.8,
      "brightness": 73.05
    },
    {
      "laplacian": 87.07,
      "width": 32.6,
      "brightness": 93.26
    },
    {
      "laplacian": 368.88,
      "width": 24.5,
      "brightness": 95.61
    },
    {
      "laplacian": 822.04,
      "width": 22.6,
      "brightness": 98.18
    },
    {
      "laplacian": 454.77,
      "width": 16.6,
      "brightness": 83.36
    },
    {
      "laplacian": 23.9,
      "width": 20.0,
      "brightness": 88.5
    },
    {
      "laplacian": 155.71,
      "width": 22.5,
      "brightness": 88.36
    },
    {
      "laplacian": 313.9,
      "width": 20.1,
      "brightness": 68.13
    },
    {
      "laplacian": 437.66,
      "width": 20.6,
      "brightness": 43.32
    },
    {
      "laplacian": 197.98,
      "width": 29.3,
      "brightness": 55.18
    },
    {
      "laplacian": 168.31,
      "width": 23.1,
      "brightness": 79.71
    },
    {
      "laplacian": 1075.86,
      "width": 23.5,
      "brightness": 64.69
    },
    {
      "laplacian": 460.93,
      "width": 20.3,
      "brightness": 64.74
    },
    {
      "laplacian": 369.98,
      "width": 27.7,
      "brightness": 121.58
    },
    {
      "laplacian": 124.29,
      "width": 22.1,
      "brightness": 100.9
    },
    {
      "laplacian": 376.2,
      "width": 20.9,
      "brightness": 76.45
    },
    {
      "laplacian": 507.6,
      "width": 16.7,
      "brightness": 96.78
    },
    {
      "laplacian": 241.21,
      "width": 22.8,
      "brightness": 72.75
    },
    {
      "laplacian": 462.06,
      "width": 20.8,
      "brightness": 84.44
    },
    {
      "laplacian": 472.87,
      "width": 29.7,
      "brightness": 91.72
    },
    {
      "laplacian": 538.11,
      "width": 30.4,
      "brightness": 72.81
    },
    {
      "laplacian": 23.09,
      "width": 18.1,
      "brightness": 66.92
    },
    {
      "laplacian": 160.99,
      "width": 18.5,
      "brightness": 108.93
    },
    {
      "laplacian": 397.97,
      "width": 21.9,
      "brightness": 95.51
    },
    {
      "laplacian": 255.87,
      "width": 19.7,
      "brightness": 40.0
    },
    {
      "laplacian": 474.21,
      "width": 23.9,
      "brightness": 67.3
    },
    {
      "laplacian": 369.77,
      "width": 21.7,
      "brightness": 64.81
    },
    {
      "laplacian": 10.0,
      "width": 24.1,
      "brightness": 68.33
    },
    {
      "laplacian": 655.72,
      "width": 27.1,
      "brightness": 100.97
    },
    {
      "laplacian": 138.03,
      "width": 18.7,
      "brightness": 82.42
    },
    {
      "laplacian": 80.09,
      "width": 27.0,
      "brightness": 51.43
    },
    {
      "laplacian": 637.08,
      "width": 20.1,
      "brightness": 73.57
    },
    {
      "laplacian": 441.65,
      "width": 31.6,
      "brightness": 93.92
    },
    {
      "laplacian": 715.5,
      "width": 29.5,
      "brightness": 77.17
    },
    {
      "laplacian": 317.33,
      "width": 22.5,
      "brightness": 67.82
    },
    {
      "laplacian": 158.58,
      "width": 19.1,
      "brightness": 89.29
    },
    {
      "laplacian": 281.99,
      "width": 18.4,
      "brightness": 117.6
    },
    {
      "laplacian": 61.09,
      "width": 26.5,
      "brightness": 92.15
    },
    {
      "laplacian": 33.27,
      "width": 22.9,
      "brightness": 110.62
    },
    {
      "laplacian": 112.82,
      "width": 26.7,
      "brightness": 69.29
    },
    {
      "laplacian": 902.2,
      "width": 31.8,
      "brightness": 81.82
    },
    {
      "laplacian": 128.08,
      "width": 19.9,
      "brightness": 81.37
    },
    {
      "laplacian": 14.25,
      "width": 18.1,
      "brightness": 84.61
    },
    {
      "laplacian": 204.26,
      "width": 23.8,
      "brightness": 91.69
    },
    {
      "laplacian": 125.97,
      "width": 27.6,
      "brightness": 61.78
    },
    {
      "laplacian": 666.01,
      "width": 19.2,
      "brightness": 96.24
    },
    {
      "laplacian": 849.92,
      "width": 23.1,
      "brightness": 46.19
    },
    {
      "laplacian": 150.06,
      "width": 28.5,
      "brightness": 52.61
    },
    {
      "laplacian": 317.03,
      "width": 16.5,
      "brightness": 128.98
    },
    {
      "laplacian": 343.76,
      "width": 23.9,
      "brightness": 70.78
    },
    {
      "laplacian": 230.2,
      "width": 20.8,
      "brightness": 98.05
    },
    {
      "laplacian": 187.43,
      "width": 23.5,
      "brightness": 119.36
    },
    {
      "laplacian": 72.68,
      "width": 25.8,
      "brightness": 40.0
    },
    {
      "laplacian": 10.0,
      "width": 23.9,
      "brightness": 106.78
    },
    {
      "laplacian": 72.07,
      "width": 19.0,
      "brightness": 96.28
    },
    {
      "laplacian": 221.56,
      "width": 21.0,
      "brightness": 118.09
    },
    {
      "laplacian": 27.0,
      "width": 28.7,
      "brightness": 56.01
    },
    {
      "laplacian": 300.8,
      "width": 24.3,
      "brightness": 113.93
    },
    {
      "laplacian": 261.19,
      "width": 26.4,
      "brightness": 65.73
    },
    {
      "laplacian": 126.24,
      "width": 24.0,
      "brightness": 105.21
    },
    {
      "laplacian": 178.52,
      "width": 26.2,
      "brightness": 81.21
    },
    {
      "laplacian": 37.09,
      "width": 21.4,
      "brightness": 98.96
    },
    {
      "laplacian": 529.57,
      "width": 19.9,
      "brightness": 83.08
    },
    {
      "laplacian": 521.57,
      "width": 26.1,
      "brightness": 41.53
    },
    {
      "laplacian": 49.55,
      "width": 27.5,
      "brightness": 40.0
    },
    {
      "laplacian": 51.91,
      "width": 19.3,
      "brightness": 86.62
    },
    {
      "laplacian": 73.47,
      "width": 20.7,
      "brightness": 76.2
    },
    {
      "laplacian": 416.67,
      "width": 22.3,
      "brightness": 90.76
    },
    {
      "laplacian": 342.71,
      "width": 29.5,
      "brightness": 76.45
    },
    {
      "laplacian": 630.84,
      "width": 25.3,
      "brightness": 126.4
    },
    {
      "laplacian": 693.04,
      "width": 17.7,
      "brightness": 87.07
    },
    {
      "laplacian": 22.38,
      "width": 22.6,
      "brightness": 72.17
    },
    {
      "laplacian": 402.91,
      "width": 22.0,
      "brightness": 89.42
    },
    {
      "laplacian": 669.57,
      "width": 18.3,
      "brightness": 72.57
    },
    {
      "laplacian": 165.59,
      "width": 22.6,
      "brightness": 84.04
    },
    {
      "laplacian": 236.58,
      "width": 21.8,
      "brightness": 55.22
    },
    {
      "laplacian": 200.0,
      "width": 21.6,
      "brightness": 81.81
    },
    {
      "laplacian": 209.98,
      "width": 21.4,
      "brightness": 71.49
    },
    {
      "laplacian": 527.95,
      "width": 28.9,
      "brightness": 57.3
    },
    {
      "laplacian": 1044.08,
      "width": 21.5,
      "brightness": 125.47
    },
    {
      "laplacian": 810.25,
      "width": 23.2,
      "brightness": 58.16
    },
    {
      "laplacian": 133.75,
      "width": 22.8,
      "brightness": 82.15
    },
    {
      "laplacian": 318.03,
      "width": 21.0,
      "brightness": 64.34
    },
    {
      "laplacian": 90.34,
      "width": 23.3,
      "brightness": 88.53
    },
    {
      "laplacian": 103.5,
      "width": 23.3,
      "brightness": 53.96
    },
    {
      "laplacian": 225.57,
      "width": 23.3,
      "brightness": 100.49
    },
    {
      "laplacian": 99.82,
      "width": 19.6,
      "brightness": 126.8
    },
    {
      "laplacian": 120.7,
      "width": 22.2,
      "brightness": 63.53
    },
    {
      "laplacian": 310.57,
      "width": 26.0,
      "brightness": 108.77
    },
    {
      "laplacian": 397.61,
      "width": 22.3,
      "brightness": 73.6
    },
    {
      "laplacian": 387.67,
      "width": 23.6,
      "brightness": 115.13
    },
    {
      "laplacian": 391.33,
      "width": 23.7,
      "brightness": 130.15
    },
    {
      "laplacian": 41.9,
      "width": 24.7,
      "brightness": 76.86
    },
    {
      "laplacian": 93.13,
      "width": 25.2,
      "brightness": 48.55
    },
    {
      "laplacian": 252.69,
      "width": 22.3,
      "brightness": 102.86
    },
    {
      "laplacian": 643.57,
      "width": 19.4,
      "brightness": 86.94
    },
    {
      "laplacian": 1527.53,
      "width": 18.1,
      "brightness": 93.04
    },
    {
      "laplacian": 330.79,
      "width": 27.1,
      "brightness": 74.52
    },
    {
      "laplacian": 483.53,
      "width": 26.1,
      "brightness": 62.54
    },
    {
      "laplacian": 34.26,
      "width": 25.6,
      "brightness": 107.53
    },
    {
      "laplacian": 471.81,
      "width": 26.2,
      "brightness": 89.04
    },
    {
      "laplacian": 92.66,
      "width": 22.4,
      "brightness": 50.24
    },
    {
      "laplacian": 125.75,
      "width": 20.5,
      "brightness": 97.11
    },
    {
      "laplacian": 542.77,
      "width": 19.1,
      "brightness": 92.7
    },
    {
      "laplacian": 249.34,
      "width": 18.6,
      "brightness": 74.84
    },
    {
      "laplacian": 10.0,
      "width": 27.8,
      "brightness": 117.64
    },
    {
      "laplacian": 135.49,
      "width": 21.0,
      "brightness": 68.4
    },
    {
      "laplacian": 847.0,
      "width": 27.2,
      "brightness": 78.28
    },
    {
      "laplacian": 176.97,
      "width": 22.3,
      "brightness": 98.91
    },
    {
      "laplacian": 176.8,
      "width": 20.3,
      "brightness": 83.69
    },
    {
      "laplacian": 512.49,
      "width": 18.6,
      "brightness": 51.54
    },
    {
      "laplacian": 342.54,
      "width": 20.6,
      "brightness": 86.04
    },
    {
      "laplacian": 166.15,
      "width": 28.7,
      "brightness": 72.88
    },
    {
      "laplacian": 115.51,
      "width": 18.7,
      "brightness": 100.85
    },
    {
      "laplacian": 2108.85,
      "width": 31.5,
      "brightness": 85.33
    },
    {
      "laplacian": 733.19,
      "width": 19.6,
      "brightness": 84.08
    },
    {
      "laplacian": 391.19,
      "width": 26.0,
      "brightness": 58.94
    },
    {
      "laplacian": 415.1,
      "width": 22.4,
      "brightness": 76.94
    },
    {
      "laplacian": 211.41,
      "width": 21.7,
      "brightness": 103.34
    },
    {
      "laplacian": 338.56,
      "width": 17.9,
      "brightness": 64.92
    },
    {
      "laplacian": 187.56,
      "width": 22.6,
      "brightness": 81.28
    },
    {
      "laplacian": 81.52,
      "width": 18.4,
      "brightness": 61.4
    },
    {
      "laplacian": 351.61,
      "width": 16.3,
      "brightness": 55.96
    },
    {
      "laplacian": 169.77,
      "width": 23.5,
      "brightness": 80.13
    },
    {
      "laplacian": 369.47,
      "width": 20.5,
      "brightness": 85.82
    },
    {
      "laplacian": 437.71,
      "width": 29.7,
      "brightness": 125.86
    },
    {
      "laplacian": 388.25,
      "width": 27.0,
      "brightness": 71.98
    },
    {
      "laplacian": 72.43,
      "width": 29.8,
      "brightness": 80.9
    },
    {
      "laplacian": 149.32,
      "width": 20.3,
      "brightness": 54.5
    },
    {
      "laplacian": 173.59,
      "width": 23.5,
      "brightness": 95.47
    },
    {
      "laplacian": 596.25,
      "width": 12.5,
      "brightness": 90.76
    },
    {
      "laplacian": 569.44,
      "width": 21.9,
      "brightness": 114.74
    },
    {
      "laplacian": 100.72,
      "width": 23.4,
      "brightness": 106.46
    },
    {
      "laplacian": 40.24,
      "width": 23.6,
      "brightness": 89.73
    },
    {
      "laplacian": 1584.06,
      "width": 22.8,
      "brightness": 71.66
    },
    {
      "laplacian": 373.92,
      "width": 23.3,
      "brightness": 86.5
    },
    {
      "laplacian": 31.58,
      "width": 12.1,
      "brightness": 79.56
    },
    {
      "laplacian": 123.21,
      "width": 24.0,
      "brightness": 102.97
    },
    {
      "laplacian": 618.14,
      "width": 24.9,
      "brightness": 100.18
    },
    {
      "laplacian": 1295.6,
      "width": 28.4,
      "brightness": 75.48
    },
    {
      "laplacian": 1130.03,
      "width": 24.5,
      "brightness": 49.84
    },
    {
      "laplacian": 359.05,
      "width": 22.5,
      "brightness": 111.33
    },
    {
      "laplacian": 243.55,
      "width": 27.4,
      "brightness": 94.8
    },
    {
      "laplacian": 62.71,
      "width": 13.6,
      "brightness": 74.97
    },
    {
      "laplacian": 265.69,
      "width": 20.9,
      "brightness": 93.94
    },
    {
      "laplacian": 76.11,
      "width": 19.9,
      "brightness": 83.65
    },
    {
      "laplacian": 151.08,
      "width": 22.9,
      "brightness": 111.01
    },
    {
      "laplacian": 542.26,
      "width": 14.2,
      "brightness": 40.0
    },
    {
      "laplacian": 186.5,
      "width": 28.3,
      "brightness": 73.26
    },
    {
      "laplacian": 172.63,
      "width": 22.0,
      "brightness": 117.18
    },
    {
      "laplacian": 229.81,
      "width": 24.3,
      "brightness": 94.39
    },
    {
      "laplacian": 1767.41,
      "width": 23.9,
      "brightness": 121.0
    },
    {
      "laplacian": 52.9,
      "width": 28.0,
      "brightness": 55.12
    },
    {
      "laplacian": 323.42,
      "width": 15.6,
      "brightness": 105.59
    },
    {
      "laplacian": 1050.32,
      "width": 23.4,
      "brightness": 104.27
    },
    {
      "laplacian": 229.08,
      "width": 27.6,
      "brightness": 45.0
    },
    {
      "laplacian": 721.75,
      "width": 22.6,
      "brightness": 75.5
    },
    {
      "laplacian": 35.65,
      "width": 19.2,
      "brightness": 79.66
    },
    {
      "laplacian": 193.51,
      "width": 20.6,
      "brightness": 46.37
    },
    {
      "laplacian": 88.16,
      "width": 21.4,
      "brightness": 75.96
    },
    {
      "laplacian": 226.48,
      "width": 20.1,
      "brightness": 101.21
    },
    {
      "laplacian": 231.67,
      "width": 22.4,
      "brightness": 73.4
    },
    {
      "laplacian": 258.11,
      "width": 29.0,
      "brightness": 87.33
    },
    {
      "laplacian": 537.81,
      "width": 20.6,
      "brightness": 87.49
    },
    {
      "laplacian": 10.0,
      "width": 21.0,
      "brightness": 81.73
    },
    {
      "laplacian": 116.39,
      "width": 24.8,
      "brightness": 66.49
    },
    {
      "laplacian": 302.01,
      "width": 22.3,
      "brightness": 96.49
    },
    {
      "laplacian": 10.0,
      "width": 17.7,
      "brightness": 47.09
    },
    {
      "laplacian": 442.7,
      "width": 22.8,
      "brightness": 82.19
    },
    {
      "laplacian": 113.59,
      "width": 22.6,
      "brightness": 112.48
    },
    {
      "laplacian": 197.68,
      "width": 26.9,
      "brightness": 72.16
    },
    {
      "laplacian": 559.65,
      "width": 19.1,
      "brightness": 66.0
    },
    {
      "laplacian": 749.76,
      "width": 26.9,
      "brightness": 97.96
    },
    {
      "laplacian": 455.2,
      "width": 22.6,
      "brightness": 85.6
    },
    {
      "laplacian": 50.51,
      "width": 18.6,
      "brightness": 98.4
    },
    {
      "laplacian": 434.61,
      "width": 17.8,
      "brightness": 82.85
    },
    {
      "laplacian": 461.9,
      "width": 30.7,
      "brightness": 40.0
    },
    {
      "laplacian": 382.45,
      "width": 22.4,
      "brightness": 107.96
    },
    {
      "laplacian": 854.33,
      "width": 26.7,
      "brightness": 127.54
    },
    {
      "laplacian": 265.18,
      "width": 16.2,
      "brightness": 110.25
    },
    {
      "laplacian": 827.26,
      "width": 33.6,
      "brightness": 40.0
    },
    {
      "laplacian": 823.08,
      "width": 26.6,
      "brightness": 91.92
    },
    {
      "laplacian": 473.83,
      "width": 22.0,
      "brightness": 71.73
    },
    {
      "laplacian": 328.47,
      "width": 21.8,
      "brightness": 58.15
    },
    {
      "laplacian": 384.53,
      "width": 25.9,
      "brightness": 84.7
    },
    {
      "laplacian": 1010.23,
      "width": 25.7,
      "brightness": 78.72
    },
    {
      "laplacian": 642.85,
      "width": 23.7,
      "brightness": 93.19
    },
    {
      "laplacian": 60.76,
      "width": 23.0,
      "brightness": 83.24
    },
    {
      "laplacian": 361.87,
      "width": 25.2,
      "brightness": 57.34
    },
    {
      "laplacian": 81.99,
      "width": 31.1,
      "brightness": 69.31
    },
    {
      "laplacian": 109.29,
      "width": 42.0,
      "brightness": 65.76
    },
    {
      "laplacian": 158.33,
      "width": 31.8,
      "brightness": 44.24
    },
    {
      "laplacian": 29.74,
      "width": 49.8,
      "brightness": 51.82
    },
    {
      "laplacian": 74.62,
      "width": 39.6,
      "brightness": 77.36
    },
    {
      "laplacian": 893.19,
      "width": 32.4,
      "brightness": 113.32
    },
    {
      "laplacian": 108.41,
      "width": 38.6,
      "brightness": 70.22
    },
    {
      "laplacian": 540.52,
      "width": 46.2,
      "brightness": 65.34
    },
    {
      "laplacian": 290.27,
      "width": 43.4,
      "brightness": 56.01
    },
    {
      "laplacian": 417.33,
      "width": 35.6,
      "brightness": 82.67
    },
    {
      "laplacian": 434.01,
      "width": 31.4,
      "brightness": 107.94
    },
    {
      "laplacian": 69.9,
      "width": 45.6,
      "brightness": 126.06
    },
    {
      "laplacian": 537.7,
      "width": 40.4,
      "brightness": 88.28
    },
    {
      "laplacian": 42.32,
      "width": 42.9,
      "brightness": 85.08
    },
    {
      "laplacian": 102.59,
      "width": 43.7,
      "brightness": 70.04
    },
    {
      "laplacian": 428.19,
      "width": 48.4,
      "brightness": 73.72
    },
    {
      "laplacian": 63.28,
      "width": 51.8,
      "brightness": 95.84
    },
    {
      "laplacian": 10.0,
      "width": 46.2,
      "brightness": 75.07
    },
    {
      "laplacian": 345.7,
      "width": 42.4,
      "brightness": 78.43
    },
    {
      "laplacian": 20.63,
      "width": 45.2,
      "brightness": 81.44
    },
    {
      "laplacian": 466.23,
      "width": 42.3,
      "brightness": 69.0
    },
    {
      "laplacian": 172.14,
      "width": 31.9,
      "brightness": 80.35
    },
    {
      "laplacian": 340.9,
      "width": 53.7,
      "brightness": 40.0
    },
    {
      "laplacian": 334.76,
      "width": 52.2,
      "brightness": 94.07
    },
    {
      "laplacian": 498.22,
      "width": 60.9,
      "brightness": 133.74
    },
    {
      "laplacian": 439.89,
      "width": 63.2,
      "brightness": 69.86
    },
    {
      "laplacian": 62.42,
      "width": 35.6,
      "brightness": 90.22
    },
    {
      "laplacian": 184.44,
      "width": 42.3,
      "brightness": 100.73
    },
    {
      "laplacian": 340.51,
      "width": 65.0,
      "brightness": 110.16
    },
    {
      "laplacian": 839.67,
      "width": 44.7,
      "brightness": 76.18
    },
    {
      "laplacian": 443.62,
      "width": 47.0,
      "brightness": 42.33
    },
    {
      "laplacian": 780.05,
      "width": 32.8,
      "brightness": 87.88
    },
    {
      "laplacian": 358.1,
      "width": 46.2,
      "brightness": 84.83
    },
    {
      "laplacian": 652.6,
      "width": 60.5,
      "brightness": 74.4
    },
    {
      "laplacian": 313.63,
      "width": 55.3,
      "brightness": 79.06
    },
    {
      "laplacian": 162.11,
      "width": 40.1,
      "brightness": 85.16
    },
    {
      "laplacian": 920.89,
      "width": 41.8,
      "brightness": 89.96
    },
    {
      "laplacian": 397.68,
      "width": 36.0,
      "brightness": 89.04
    },
    {
      "laplacian": 30.15,
      "width": 38.2,
      "brightness": 77.21
    },
    {
      "laplacian": 351.67,
      "width": 29.7,
      "brightness": 90.45
    },
    {
      "laplacian": 444.96,
      "width": 44.3,
      "brightness": 75.73
    },
    {
      "laplacian": 554.28,
      "width": 57.1,
      "brightness": 96.12
    },
    {
      "laplacian": 1191.59,
      "width": 47.8,
      "brightness": 68.2
    },
    {
      "laplacian": 133.27,
      "width": 55.9,
      "brightness": 83.61
    },
    {
      "laplacian": 1197.95,
      "width": 53.6,
      "brightness": 46.28
    },
    {
      "laplacian": 243.63,
      "width": 40.6,
      "brightness": 73.86
    },
    {
      "laplacian": 96.02,
      "width": 38.9,
      "brightness": 94.48
    },
    {
      "laplacian": 136.87,
      "width": 39.2,
      "brightness": 59.26
    },
    {
      "laplacian": 420.95,
      "width": 31.3,
      "brightness": 74.96
    },
    {
      "laplacian": 77.99,
      "width": 45.3,
      "brightness": 40.0
    },
    {
      "laplacian": 165.37,
      "width": 21.8,
      "brightness": 51.9
    },
    {
      "laplacian": 343.29,
      "width": 49.7,
      "brightness": 57.66
    },
    {
      "laplacian": 915.04,
      "width": 45.6,
      "brightness": 84.24
    },
    {
      "laplacian": 540.27,
      "width": 48.8,
      "brightness": 89.33
    },
    {
      "laplacian": 254.19,
      "width": 53.5,
      "brightness": 80.77
    },
    {
      "laplacian": 419.17,
      "width": 46.6,
      "brightness": 73.58
    },
    {
      "laplacian": 311.16,
      "width": 58.1,
      "brightness": 73.66
    },
    {
      "laplacian": 49.3,
      "width": 50.0,
      "brightness": 97.75
    },
    {
      "laplacian": 1048.15,
      "width": 38.9,
      "brightness": 86.68
    },
    {
      "laplacian": 927.0,
      "width": 43.1,
      "brightness": 74.65
    },
    {
      "laplacian": 223.9,
      "width": 26.9,
      "brightness": 110.45
    },
    {
      "laplacian": 142.95,
      "width": 37.8,
      "brightness": 124.9
    },
    {
      "laplacian": 51.16,
      "width": 42.0,
      "brightness": 54.59
    },
    {
      "laplacian": 443.87,
      "width": 49.4,
      "brightness": 93.5
    },
    {
      "laplacian": 446.53,
      "width": 39.0,
      "brightness": 149.98
    },
    {
      "laplacian": 87.59,
      "width": 35.0,
      "brightness": 88.16
    },
    {
      "laplacian": 314.82,
      "width": 29.9,
      "brightness": 84.54
    },
    {
      "laplacian": 525.46,
      "width": 40.2,
      "brightness": 80.77
    },
    {
      "laplacian": 131.41,
      "width": 60.6,
      "brightness": 92.78
    },
    {
      "laplacian": 194.97,
      "width": 47.2,
      "brightness": 98.61
    },
    {
      "laplacian": 192.86,
      "width": 52.5,
      "brightness": 54.62
    },
    {
      "laplacian": 95.45,
      "width": 37.8,
      "brightness": 81.42
    },
    {
      "laplacian": 199.44,
      "width": 32.4,
      "brightness": 40.0
    },
    {
      "laplacian": 21.46,
      "width": 35.2,
      "brightness": 77.4
    },
    {
      "laplacian": 181.83,
      "width": 44.2,
      "brightness": 62.14
    }
  ],
  "eda_camera_stats": {
    "median": 1.0,
    "iqr": 0.0
  }
};