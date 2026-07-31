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
  "eda_camera": [
    {
      "camera": "Cam_01",
      "count": 1299
    },
    {
      "camera": "Cam_02",
      "count": 1281
    },
    {
      "camera": "Cam_03",
      "count": 1235
    },
    {
      "camera": "Cam_04",
      "count": 1179
    },
    {
      "camera": "Cam_05",
      "count": 1067
    },
    {
      "camera": "Cam_06",
      "count": 1017
    },
    {
      "camera": "Cam_07",
      "count": 1008
    },
    {
      "camera": "Cam_08",
      "count": 951
    },
    {
      "camera": "Cam_09",
      "count": 616
    },
    {
      "camera": "Cam_10",
      "count": 523
    },
    {
      "camera": "Cam_11",
      "count": 407
    },
    {
      "camera": "Cam_12",
      "count": 348
    },
    {
      "camera": "Cam_13",
      "count": 186
    },
    {
      "camera": "Cam_14",
      "count": 156
    },
    {
      "camera": "Cam_15",
      "count": 119
    }
  ],
  "eda_quality": [
    {
      "area": 1597,
      "brightness": 123
    },
    {
      "area": 1089,
      "brightness": 152
    },
    {
      "area": 1718,
      "brightness": 53
    },
    {
      "area": 2418,
      "brightness": 112
    },
    {
      "area": 1013,
      "brightness": 75
    },
    {
      "area": 1013,
      "brightness": 80
    },
    {
      "area": 2463,
      "brightness": 77
    },
    {
      "area": 1814,
      "brightness": 69
    },
    {
      "area": 824,
      "brightness": 96
    },
    {
      "area": 1634,
      "brightness": 70
    },
    {
      "area": 829,
      "brightness": 103
    },
    {
      "area": 827,
      "brightness": 93
    },
    {
      "area": 1394,
      "brightness": 88
    },
    {
      "area": 200,
      "brightness": 68
    },
    {
      "area": 200,
      "brightness": 78
    },
    {
      "area": 750,
      "brightness": 118
    },
    {
      "area": 390,
      "brightness": 110
    },
    {
      "area": 1451,
      "brightness": 66
    },
    {
      "area": 474,
      "brightness": 98
    },
    {
      "area": 200,
      "brightness": 118
    },
    {
      "area": 2373,
      "brightness": 45
    },
    {
      "area": 1019,
      "brightness": 111
    },
    {
      "area": 1254,
      "brightness": 75
    },
    {
      "area": 200,
      "brightness": 112
    },
    {
      "area": 764,
      "brightness": 72
    },
    {
      "area": 1289,
      "brightness": 41
    },
    {
      "area": 279,
      "brightness": 46
    },
    {
      "area": 1501,
      "brightness": 96
    },
    {
      "area": 719,
      "brightness": 103
    },
    {
      "area": 967,
      "brightness": 68
    },
    {
      "area": 719,
      "brightness": 114
    },
    {
      "area": 2682,
      "brightness": 45
    },
    {
      "area": 1189,
      "brightness": 93
    },
    {
      "area": 354,
      "brightness": 59
    },
    {
      "area": 1858,
      "brightness": 75
    },
    {
      "area": 223,
      "brightness": 96
    },
    {
      "area": 1367,
      "brightness": 69
    },
    {
      "area": 200,
      "brightness": 83
    },
    {
      "area": 200,
      "brightness": 125
    },
    {
      "area": 1357,
      "brightness": 78
    },
    {
      "area": 1791,
      "brightness": 120
    },
    {
      "area": 1337,
      "brightness": 61
    },
    {
      "area": 1107,
      "brightness": 111
    },
    {
      "area": 959,
      "brightness": 138
    },
    {
      "area": 200,
      "brightness": 21
    },
    {
      "area": 624,
      "brightness": 71
    },
    {
      "area": 831,
      "brightness": 112
    },
    {
      "area": 2046,
      "brightness": 89
    },
    {
      "area": 1475,
      "brightness": 106
    },
    {
      "area": 200,
      "brightness": 77
    },
    {
      "area": 1459,
      "brightness": 98
    },
    {
      "area": 892,
      "brightness": 90
    },
    {
      "area": 658,
      "brightness": 130
    },
    {
      "area": 1689,
      "brightness": 103
    },
    {
      "area": 2025,
      "brightness": 105
    },
    {
      "area": 1945,
      "brightness": 83
    },
    {
      "area": 529,
      "brightness": 80
    },
    {
      "area": 953,
      "brightness": 82
    },
    {
      "area": 1465,
      "brightness": 107
    },
    {
      "area": 1980,
      "brightness": 82
    },
    {
      "area": 817,
      "brightness": 104
    },
    {
      "area": 1051,
      "brightness": 157
    },
    {
      "area": 315,
      "brightness": 121
    },
    {
      "area": 243,
      "brightness": 85
    },
    {
      "area": 1850,
      "brightness": 131
    },
    {
      "area": 2285,
      "brightness": 83
    },
    {
      "area": 1142,
      "brightness": 34
    },
    {
      "area": 2003,
      "brightness": 65
    },
    {
      "area": 1489,
      "brightness": 39
    },
    {
      "area": 684,
      "brightness": 84
    },
    {
      "area": 1489,
      "brightness": 96
    },
    {
      "area": 2430,
      "brightness": 145
    },
    {
      "area": 1171,
      "brightness": 105
    },
    {
      "area": 2452,
      "brightness": 88
    },
    {
      "area": 200,
      "brightness": 120
    },
    {
      "area": 1858,
      "brightness": 29
    },
    {
      "area": 1270,
      "brightness": 102
    },
    {
      "area": 961,
      "brightness": 118
    },
    {
      "area": 1273,
      "brightness": 51
    },
    {
      "area": 200,
      "brightness": 129
    },
    {
      "area": 1024,
      "brightness": 105
    },
    {
      "area": 1486,
      "brightness": 83
    },
    {
      "area": 2382,
      "brightness": 114
    },
    {
      "area": 785,
      "brightness": 163
    },
    {
      "area": 553,
      "brightness": 100
    },
    {
      "area": 799,
      "brightness": 102
    },
    {
      "area": 1932,
      "brightness": 81
    },
    {
      "area": 1463,
      "brightness": 70
    },
    {
      "area": 776,
      "brightness": 120
    },
    {
      "area": 1611,
      "brightness": 69
    },
    {
      "area": 1278,
      "brightness": 97
    },
    {
      "area": 1975,
      "brightness": 81
    },
    {
      "area": 638,
      "brightness": 109
    },
    {
      "area": 938,
      "brightness": 105
    },
    {
      "area": 886,
      "brightness": 126
    },
    {
      "area": 200,
      "brightness": 80
    },
    {
      "area": 1437,
      "brightness": 87
    },
    {
      "area": 1409,
      "brightness": 66
    },
    {
      "area": 1204,
      "brightness": 82
    },
    {
      "area": 1012,
      "brightness": 106
    },
    {
      "area": 200,
      "brightness": 118
    },
    {
      "area": 863,
      "brightness": 67
    },
    {
      "area": 926,
      "brightness": 121
    },
    {
      "area": 558,
      "brightness": 136
    },
    {
      "area": 1071,
      "brightness": 107
    },
    {
      "area": 1523,
      "brightness": 151
    },
    {
      "area": 2709,
      "brightness": 72
    },
    {
      "area": 1340,
      "brightness": 58
    },
    {
      "area": 1406,
      "brightness": 42
    },
    {
      "area": 1140,
      "brightness": 140
    },
    {
      "area": 200,
      "brightness": 115
    },
    {
      "area": 1179,
      "brightness": 93
    },
    {
      "area": 1248,
      "brightness": 103
    },
    {
      "area": 3171,
      "brightness": 61
    },
    {
      "area": 1046,
      "brightness": 168
    },
    {
      "area": 1441,
      "brightness": 99
    },
    {
      "area": 1172,
      "brightness": 98
    },
    {
      "area": 265,
      "brightness": 117
    },
    {
      "area": 2114,
      "brightness": 109
    },
    {
      "area": 1802,
      "brightness": 102
    },
    {
      "area": 1833,
      "brightness": 71
    },
    {
      "area": 472,
      "brightness": 109
    },
    {
      "area": 2322,
      "brightness": 151
    },
    {
      "area": 200,
      "brightness": 135
    },
    {
      "area": 1669,
      "brightness": 143
    },
    {
      "area": 2952,
      "brightness": 80
    },
    {
      "area": 408,
      "brightness": 65
    },
    {
      "area": 747,
      "brightness": 91
    },
    {
      "area": 1280,
      "brightness": 97
    },
    {
      "area": 797,
      "brightness": 128
    },
    {
      "area": 200,
      "brightness": 44
    },
    {
      "area": 1255,
      "brightness": 141
    },
    {
      "area": 350,
      "brightness": 90
    },
    {
      "area": 1579,
      "brightness": 82
    },
    {
      "area": 464,
      "brightness": 65
    },
    {
      "area": 2440,
      "brightness": 45
    },
    {
      "area": 573,
      "brightness": 120
    },
    {
      "area": 942,
      "brightness": 97
    },
    {
      "area": 1851,
      "brightness": 56
    },
    {
      "area": 215,
      "brightness": 56
    },
    {
      "area": 1382,
      "brightness": 85
    },
    {
      "area": 2246,
      "brightness": 145
    },
    {
      "area": 200,
      "brightness": 87
    },
    {
      "area": 1348,
      "brightness": 50
    },
    {
      "area": 1408,
      "brightness": 88
    },
    {
      "area": 1825,
      "brightness": 87
    },
    {
      "area": 210,
      "brightness": 14
    },
    {
      "area": 200,
      "brightness": 93
    },
    {
      "area": 1618,
      "brightness": 88
    },
    {
      "area": 1438,
      "brightness": 116
    },
    {
      "area": 1400,
      "brightness": 150
    },
    {
      "area": 1477,
      "brightness": 129
    },
    {
      "area": 656,
      "brightness": 87
    },
    {
      "area": 1386,
      "brightness": 62
    },
    {
      "area": 1434,
      "brightness": 172
    },
    {
      "area": 629,
      "brightness": 97
    },
    {
      "area": 2693,
      "brightness": 95
    },
    {
      "area": 1579,
      "brightness": 94
    },
    {
      "area": 247,
      "brightness": 101
    },
    {
      "area": 1725,
      "brightness": 91
    },
    {
      "area": 420,
      "brightness": 78
    },
    {
      "area": 1830,
      "brightness": 79
    },
    {
      "area": 2127,
      "brightness": 94
    },
    {
      "area": 543,
      "brightness": 79
    },
    {
      "area": 1971,
      "brightness": 74
    },
    {
      "area": 1530,
      "brightness": 98
    },
    {
      "area": 1858,
      "brightness": 87
    },
    {
      "area": 2717,
      "brightness": 140
    },
    {
      "area": 1004,
      "brightness": 15
    },
    {
      "area": 597,
      "brightness": 128
    },
    {
      "area": 488,
      "brightness": 132
    },
    {
      "area": 547,
      "brightness": 33
    },
    {
      "area": 1138,
      "brightness": 85
    },
    {
      "area": 1473,
      "brightness": 84
    },
    {
      "area": 1421,
      "brightness": 53
    },
    {
      "area": 1862,
      "brightness": 72
    },
    {
      "area": 1210,
      "brightness": 62
    },
    {
      "area": 2363,
      "brightness": 148
    },
    {
      "area": 988,
      "brightness": 123
    },
    {
      "area": 3376,
      "brightness": 133
    },
    {
      "area": 1701,
      "brightness": 117
    },
    {
      "area": 514,
      "brightness": 61
    },
    {
      "area": 343,
      "brightness": 79
    },
    {
      "area": 1586,
      "brightness": 110
    },
    {
      "area": 1021,
      "brightness": 58
    },
    {
      "area": 1771,
      "brightness": 116
    },
    {
      "area": 1579,
      "brightness": 88
    },
    {
      "area": 1142,
      "brightness": 84
    },
    {
      "area": 523,
      "brightness": 116
    },
    {
      "area": 200,
      "brightness": 108
    },
    {
      "area": 843,
      "brightness": 84
    },
    {
      "area": 1885,
      "brightness": 130
    },
    {
      "area": 1371,
      "brightness": 63
    },
    {
      "area": 203,
      "brightness": 113
    },
    {
      "area": 1339,
      "brightness": 113
    },
    {
      "area": 1508,
      "brightness": 86
    },
    {
      "area": 493,
      "brightness": 105
    },
    {
      "area": 1323,
      "brightness": 57
    },
    {
      "area": 1247,
      "brightness": 123
    },
    {
      "area": 286,
      "brightness": 89
    },
    {
      "area": 1486,
      "brightness": 79
    },
    {
      "area": 1649,
      "brightness": 126
    },
    {
      "area": 2066,
      "brightness": 74
    },
    {
      "area": 2043,
      "brightness": 53
    },
    {
      "area": 200,
      "brightness": 48
    },
    {
      "area": 450,
      "brightness": 113
    },
    {
      "area": 1612,
      "brightness": 57
    },
    {
      "area": 1611,
      "brightness": 148
    },
    {
      "area": 1612,
      "brightness": 33
    },
    {
      "area": 4282,
      "brightness": 146
    },
    {
      "area": 1657,
      "brightness": 101
    },
    {
      "area": 2108,
      "brightness": 92
    },
    {
      "area": 1963,
      "brightness": 79
    },
    {
      "area": 1721,
      "brightness": 107
    },
    {
      "area": 948,
      "brightness": 94
    },
    {
      "area": 1807,
      "brightness": 128
    },
    {
      "area": 582,
      "brightness": 98
    },
    {
      "area": 1011,
      "brightness": 100
    },
    {
      "area": 812,
      "brightness": 84
    },
    {
      "area": 1265,
      "brightness": 93
    },
    {
      "area": 3052,
      "brightness": 104
    },
    {
      "area": 200,
      "brightness": 44
    },
    {
      "area": 1749,
      "brightness": 55
    },
    {
      "area": 200,
      "brightness": 117
    },
    {
      "area": 822,
      "brightness": 100
    },
    {
      "area": 2071,
      "brightness": 89
    },
    {
      "area": 1251,
      "brightness": 96
    },
    {
      "area": 338,
      "brightness": 105
    },
    {
      "area": 628,
      "brightness": 79
    },
    {
      "area": 1744,
      "brightness": 72
    },
    {
      "area": 616,
      "brightness": 101
    },
    {
      "area": 1373,
      "brightness": 66
    },
    {
      "area": 1236,
      "brightness": 107
    },
    {
      "area": 679,
      "brightness": 44
    },
    {
      "area": 2915,
      "brightness": 126
    },
    {
      "area": 1707,
      "brightness": 109
    },
    {
      "area": 200,
      "brightness": 103
    },
    {
      "area": 1349,
      "brightness": 124
    },
    {
      "area": 671,
      "brightness": 145
    },
    {
      "area": 1882,
      "brightness": 125
    },
    {
      "area": 566,
      "brightness": 40
    },
    {
      "area": 1108,
      "brightness": 57
    },
    {
      "area": 1604,
      "brightness": 76
    },
    {
      "area": 1893,
      "brightness": 96
    },
    {
      "area": 240,
      "brightness": 111
    },
    {
      "area": 932,
      "brightness": 73
    },
    {
      "area": 820,
      "brightness": 101
    },
    {
      "area": 677,
      "brightness": 72
    },
    {
      "area": 2612,
      "brightness": 77
    },
    {
      "area": 1524,
      "brightness": 53
    },
    {
      "area": 200,
      "brightness": 67
    },
    {
      "area": 1934,
      "brightness": 54
    },
    {
      "area": 2898,
      "brightness": 66
    },
    {
      "area": 2026,
      "brightness": 127
    },
    {
      "area": 200,
      "brightness": 67
    },
    {
      "area": 813,
      "brightness": 174
    },
    {
      "area": 2214,
      "brightness": 110
    },
    {
      "area": 634,
      "brightness": 101
    },
    {
      "area": 1555,
      "brightness": 69
    },
    {
      "area": 1820,
      "brightness": 116
    },
    {
      "area": 458,
      "brightness": 78
    },
    {
      "area": 1152,
      "brightness": 99
    },
    {
      "area": 200,
      "brightness": 172
    },
    {
      "area": 380,
      "brightness": 92
    },
    {
      "area": 998,
      "brightness": 129
    },
    {
      "area": 202,
      "brightness": 74
    },
    {
      "area": 2506,
      "brightness": 94
    },
    {
      "area": 200,
      "brightness": 148
    },
    {
      "area": 848,
      "brightness": 76
    },
    {
      "area": 1305,
      "brightness": 149
    },
    {
      "area": 2353,
      "brightness": 116
    },
    {
      "area": 200,
      "brightness": 78
    },
    {
      "area": 2131,
      "brightness": 114
    },
    {
      "area": 1208,
      "brightness": 124
    },
    {
      "area": 415,
      "brightness": 114
    },
    {
      "area": 1570,
      "brightness": 48
    },
    {
      "area": 1359,
      "brightness": 73
    },
    {
      "area": 720,
      "brightness": 88
    },
    {
      "area": 1256,
      "brightness": 93
    },
    {
      "area": 892,
      "brightness": 114
    },
    {
      "area": 1291,
      "brightness": 100
    },
    {
      "area": 1730,
      "brightness": 55
    },
    {
      "area": 2469,
      "brightness": 106
    },
    {
      "area": 210,
      "brightness": 113
    },
    {
      "area": 2906,
      "brightness": 112
    },
    {
      "area": 200,
      "brightness": 127
    },
    {
      "area": 1079,
      "brightness": 120
    },
    {
      "area": 1671,
      "brightness": 109
    },
    {
      "area": 1425,
      "brightness": 93
    },
    {
      "area": 702,
      "brightness": 45
    },
    {
      "area": 1034,
      "brightness": 108
    },
    {
      "area": 806,
      "brightness": 101
    },
    {
      "area": 729,
      "brightness": 103
    },
    {
      "area": 1880,
      "brightness": 57
    },
    {
      "area": 1486,
      "brightness": 63
    },
    {
      "area": 646,
      "brightness": 127
    },
    {
      "area": 1920,
      "brightness": 94
    },
    {
      "area": 1446,
      "brightness": 115
    },
    {
      "area": 1850,
      "brightness": 96
    },
    {
      "area": 1704,
      "brightness": 96
    },
    {
      "area": 537,
      "brightness": 123
    },
    {
      "area": 752,
      "brightness": 80
    },
    {
      "area": 1798,
      "brightness": 98
    },
    {
      "area": 1688,
      "brightness": 81
    },
    {
      "area": 1183,
      "brightness": 82
    },
    {
      "area": 1294,
      "brightness": 86
    },
    {
      "area": 2222,
      "brightness": 102
    },
    {
      "area": 727,
      "brightness": 81
    },
    {
      "area": 1638,
      "brightness": 133
    },
    {
      "area": 1038,
      "brightness": 68
    },
    {
      "area": 1026,
      "brightness": 89
    },
    {
      "area": 2079,
      "brightness": 82
    },
    {
      "area": 1860,
      "brightness": 138
    },
    {
      "area": 1851,
      "brightness": 101
    },
    {
      "area": 2244,
      "brightness": 126
    },
    {
      "area": 1217,
      "brightness": 50
    },
    {
      "area": 1746,
      "brightness": 103
    },
    {
      "area": 952,
      "brightness": 122
    },
    {
      "area": 1459,
      "brightness": 97
    },
    {
      "area": 1096,
      "brightness": 127
    },
    {
      "area": 1278,
      "brightness": 79
    },
    {
      "area": 1676,
      "brightness": 137
    },
    {
      "area": 545,
      "brightness": 164
    },
    {
      "area": 2874,
      "brightness": 84
    },
    {
      "area": 395,
      "brightness": 82
    },
    {
      "area": 229,
      "brightness": 139
    },
    {
      "area": 2126,
      "brightness": 142
    },
    {
      "area": 1833,
      "brightness": 79
    },
    {
      "area": 1699,
      "brightness": 82
    },
    {
      "area": 1703,
      "brightness": 87
    },
    {
      "area": 1190,
      "brightness": 55
    },
    {
      "area": 482,
      "brightness": 67
    },
    {
      "area": 1261,
      "brightness": 65
    },
    {
      "area": 658,
      "brightness": 72
    },
    {
      "area": 1980,
      "brightness": 94
    },
    {
      "area": 1082,
      "brightness": 102
    },
    {
      "area": 540,
      "brightness": 142
    },
    {
      "area": 943,
      "brightness": 65
    },
    {
      "area": 1530,
      "brightness": 125
    },
    {
      "area": 749,
      "brightness": 89
    },
    {
      "area": 542,
      "brightness": 94
    },
    {
      "area": 1395,
      "brightness": 115
    },
    {
      "area": 1396,
      "brightness": 61
    },
    {
      "area": 794,
      "brightness": 106
    },
    {
      "area": 823,
      "brightness": 100
    },
    {
      "area": 1386,
      "brightness": 110
    },
    {
      "area": 200,
      "brightness": 104
    },
    {
      "area": 200,
      "brightness": 169
    },
    {
      "area": 625,
      "brightness": 76
    },
    {
      "area": 1029,
      "brightness": 79
    },
    {
      "area": 1449,
      "brightness": 76
    },
    {
      "area": 2380,
      "brightness": 78
    },
    {
      "area": 1886,
      "brightness": 76
    },
    {
      "area": 1072,
      "brightness": 131
    },
    {
      "area": 1185,
      "brightness": 138
    },
    {
      "area": 398,
      "brightness": 78
    },
    {
      "area": 1185,
      "brightness": 70
    },
    {
      "area": 969,
      "brightness": 109
    },
    {
      "area": 1458,
      "brightness": 78
    },
    {
      "area": 538,
      "brightness": 114
    },
    {
      "area": 1615,
      "brightness": 101
    },
    {
      "area": 2426,
      "brightness": 50
    },
    {
      "area": 1113,
      "brightness": 141
    },
    {
      "area": 1521,
      "brightness": 149
    },
    {
      "area": 1752,
      "brightness": 77
    },
    {
      "area": 879,
      "brightness": 83
    },
    {
      "area": 1379,
      "brightness": 104
    },
    {
      "area": 1210,
      "brightness": 105
    },
    {
      "area": 1278,
      "brightness": 115
    },
    {
      "area": 582,
      "brightness": 155
    },
    {
      "area": 1220,
      "brightness": 90
    },
    {
      "area": 1598,
      "brightness": 71
    },
    {
      "area": 2361,
      "brightness": 54
    },
    {
      "area": 1967,
      "brightness": 73
    },
    {
      "area": 2923,
      "brightness": 94
    },
    {
      "area": 586,
      "brightness": 149
    },
    {
      "area": 1898,
      "brightness": 79
    },
    {
      "area": 1347,
      "brightness": 102
    },
    {
      "area": 2952,
      "brightness": 95
    },
    {
      "area": 553,
      "brightness": 131
    },
    {
      "area": 528,
      "brightness": 171
    },
    {
      "area": 720,
      "brightness": 79
    },
    {
      "area": 200,
      "brightness": 80
    },
    {
      "area": 779,
      "brightness": 126
    },
    {
      "area": 593,
      "brightness": 115
    },
    {
      "area": 1320,
      "brightness": 150
    },
    {
      "area": 1473,
      "brightness": 113
    },
    {
      "area": 2701,
      "brightness": 84
    },
    {
      "area": 1960,
      "brightness": 113
    },
    {
      "area": 738,
      "brightness": 128
    },
    {
      "area": 481,
      "brightness": 120
    },
    {
      "area": 1594,
      "brightness": 110
    },
    {
      "area": 200,
      "brightness": 127
    },
    {
      "area": 2665,
      "brightness": 130
    },
    {
      "area": 2144,
      "brightness": 136
    },
    {
      "area": 825,
      "brightness": 114
    },
    {
      "area": 200,
      "brightness": 90
    },
    {
      "area": 2283,
      "brightness": 99
    },
    {
      "area": 1108,
      "brightness": 131
    },
    {
      "area": 2190,
      "brightness": 70
    },
    {
      "area": 200,
      "brightness": 106
    },
    {
      "area": 720,
      "brightness": 83
    },
    {
      "area": 1204,
      "brightness": 96
    },
    {
      "area": 1238,
      "brightness": 133
    },
    {
      "area": 840,
      "brightness": 101
    },
    {
      "area": 1698,
      "brightness": 96
    },
    {
      "area": 346,
      "brightness": 54
    },
    {
      "area": 1086,
      "brightness": 117
    },
    {
      "area": 1296,
      "brightness": 114
    },
    {
      "area": 1612,
      "brightness": 160
    },
    {
      "area": 1769,
      "brightness": 86
    },
    {
      "area": 300,
      "brightness": 102
    },
    {
      "area": 200,
      "brightness": 102
    },
    {
      "area": 2222,
      "brightness": 142
    },
    {
      "area": 1466,
      "brightness": 92
    },
    {
      "area": 601,
      "brightness": 103
    },
    {
      "area": 2441,
      "brightness": 113
    },
    {
      "area": 1293,
      "brightness": 101
    },
    {
      "area": 2143,
      "brightness": 82
    },
    {
      "area": 1254,
      "brightness": 101
    },
    {
      "area": 2849,
      "brightness": 127
    },
    {
      "area": 2604,
      "brightness": 64
    },
    {
      "area": 1001,
      "brightness": 99
    },
    {
      "area": 1977,
      "brightness": 74
    },
    {
      "area": 1716,
      "brightness": 131
    },
    {
      "area": 2295,
      "brightness": 49
    },
    {
      "area": 428,
      "brightness": 78
    },
    {
      "area": 1749,
      "brightness": 106
    },
    {
      "area": 2047,
      "brightness": 142
    },
    {
      "area": 200,
      "brightness": 93
    },
    {
      "area": 253,
      "brightness": 78
    },
    {
      "area": 200,
      "brightness": 151
    },
    {
      "area": 984,
      "brightness": 52
    },
    {
      "area": 1774,
      "brightness": 29
    },
    {
      "area": 2402,
      "brightness": 108
    },
    {
      "area": 1259,
      "brightness": 80
    },
    {
      "area": 2503,
      "brightness": 64
    },
    {
      "area": 200,
      "brightness": 116
    },
    {
      "area": 200,
      "brightness": 102
    },
    {
      "area": 1156,
      "brightness": 78
    },
    {
      "area": 1507,
      "brightness": 57
    },
    {
      "area": 1174,
      "brightness": 121
    },
    {
      "area": 200,
      "brightness": 115
    },
    {
      "area": 1129,
      "brightness": 92
    },
    {
      "area": 200,
      "brightness": 150
    },
    {
      "area": 1736,
      "brightness": 63
    },
    {
      "area": 1493,
      "brightness": 49
    },
    {
      "area": 448,
      "brightness": 74
    },
    {
      "area": 789,
      "brightness": 94
    },
    {
      "area": 353,
      "brightness": 102
    },
    {
      "area": 1150,
      "brightness": 88
    },
    {
      "area": 1964,
      "brightness": 106
    },
    {
      "area": 411,
      "brightness": 57
    },
    {
      "area": 1603,
      "brightness": 138
    },
    {
      "area": 776,
      "brightness": 93
    },
    {
      "area": 566,
      "brightness": 129
    },
    {
      "area": 1114,
      "brightness": 105
    },
    {
      "area": 372,
      "brightness": 109
    },
    {
      "area": 757,
      "brightness": 112
    },
    {
      "area": 242,
      "brightness": 108
    },
    {
      "area": 2772,
      "brightness": 114
    },
    {
      "area": 1228,
      "brightness": 135
    },
    {
      "area": 640,
      "brightness": 101
    },
    {
      "area": 1371,
      "brightness": 116
    },
    {
      "area": 1110,
      "brightness": 92
    },
    {
      "area": 1023,
      "brightness": 138
    },
    {
      "area": 1691,
      "brightness": 75
    },
    {
      "area": 1806,
      "brightness": 149
    },
    {
      "area": 776,
      "brightness": 94
    },
    {
      "area": 739,
      "brightness": 52
    },
    {
      "area": 980,
      "brightness": 99
    },
    {
      "area": 200,
      "brightness": 75
    },
    {
      "area": 200,
      "brightness": 120
    },
    {
      "area": 2293,
      "brightness": 75
    },
    {
      "area": 2516,
      "brightness": 82
    },
    {
      "area": 1001,
      "brightness": 38
    },
    {
      "area": 1661,
      "brightness": 81
    },
    {
      "area": 1449,
      "brightness": 22
    },
    {
      "area": 3663,
      "brightness": 47
    },
    {
      "area": 2096,
      "brightness": 118
    },
    {
      "area": 1098,
      "brightness": 119
    },
    {
      "area": 436,
      "brightness": 108
    },
    {
      "area": 200,
      "brightness": 66
    },
    {
      "area": 1363,
      "brightness": 94
    },
    {
      "area": 595,
      "brightness": 95
    },
    {
      "area": 200,
      "brightness": 60
    },
    {
      "area": 683,
      "brightness": 140
    },
    {
      "area": 335,
      "brightness": 121
    },
    {
      "area": 2550,
      "brightness": 88
    },
    {
      "area": 1905,
      "brightness": 96
    },
    {
      "area": 1194,
      "brightness": 101
    },
    {
      "area": 2384,
      "brightness": 34
    },
    {
      "area": 1262,
      "brightness": 88
    },
    {
      "area": 511,
      "brightness": 75
    },
    {
      "area": 2418,
      "brightness": 65
    },
    {
      "area": 1631,
      "brightness": 87
    },
    {
      "area": 370,
      "brightness": 149
    },
    {
      "area": 1048,
      "brightness": 114
    },
    {
      "area": 500,
      "brightness": 78
    },
    {
      "area": 200,
      "brightness": 112
    }
  ]
};