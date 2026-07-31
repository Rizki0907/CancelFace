import pandas as pd
import json
import os

ASSETS_DIR = r"d:\Data Science\Lomba\GEMASTIK\CancelFace\assets"
OUTPUT_FILE = r"d:\Data Science\Lomba\GEMASTIK\CancelFace\dashboard\data.js"

data = {}

def read_csv(filename):
    path = os.path.join(ASSETS_DIR, filename)
    if os.path.exists(path):
        return pd.read_csv(path).to_dict(orient='records')
    return []

# Read all available CSVs
data['perbandingan_metode'] = read_csv("ringkasan_perbandingan_metode.csv")
data['ablasi_dimensi'] = read_csv("ablasi_dimensi_template.csv")
data['ketahanan_kualitas'] = read_csv("ketahanan_kualitas_pencarian.csv")
data['identifikasi'] = read_csv("ringkasan_identifikasi.csv")
data['iso_24745'] = read_csv("ringkasan_iso_24745.csv")
data['serangan_atribut'] = read_csv("ringkasan_serangan_atribut.csv")
data['serangan_rekonstruksi'] = read_csv("ringkasan_serangan_rekonstruksi.csv")

# Create a JS file that exports a global variable `cancelfaceData`
js_content = f"const cancelfaceData = {json.dumps(data, indent=2)};"

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Data pipeline built successfully: data.js created.")
