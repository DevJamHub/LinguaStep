# 📦 Export Guide - LinguaStep

## Struktur Project

```
linguastep/
├── src/
│   ├── App.tsx                          # Entry point
│   ├── styles/
│   │   └── globals.css                  # Styling utama
│   └── components/
│       ├── LoginPage.tsx                # Halaman login/signup
│       ├── Dashboard.tsx                # Dashboard utama
│       ├── CourseSection.tsx            # Bagian kursus
│       ├── UnitTest.tsx                 # Tes unit interaktif
│       ├── QuestionBank.tsx             # Bank soal
│       └── VocabularySection.tsx        # Vocabulary
├── package.json
└── README.md
```

## Setup Project Baru

### 1. Buat Project React + TypeScript

**Menggunakan Vite:**
```bash
npm create vite@latest linguastep -- --template react-ts
cd linguastep
npm install
```

**Atau menggunakan Create React App:**
```bash
npx create-react-app linguastep --template typescript
cd linguastep
```

### 2. Install Dependencies

```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Konfigurasi Tailwind CSS v4

**File: `tailwind.config.js`**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Copy Semua File

Copy semua file dari Figma Make ke project baru Anda:

- `App.tsx` → `src/App.tsx`
- `styles/globals.css` → `src/styles/globals.css`
- `components/*.tsx` → `src/components/*.tsx`

### 5. Update `src/main.tsx` (untuk Vite)

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 6. Jalankan Project

```bash
npm run dev
```

## Deploy ke Production

### Deploy ke Vercel:
```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify:
```bash
npm run build
# Upload folder 'dist' ke Netlify
```

## Fitur yang Sudah Ada

✅ Login/Signup dengan social media (demo mode)
✅ Dashboard dengan 6 bahasa
✅ System kursus dengan bagian & unit
✅ Tes unit interaktif
✅ Bank soal dengan kategori
✅ Vocabulary dengan pronunciation
✅ Responsive design
✅ Warna tema burung beo (hijau, biru, kuning, oranye)

## Pengembangan Lebih Lanjut

Untuk menambahkan fitur backend:
1. Integrasikan dengan Supabase untuk database
2. Tambahkan autentikasi real
3. Simpan progress user
4. Tambahkan API untuk konten dinamis

## Notes

- Ini adalah **demo version** - email/password bisa diisi apa saja
- Untuk production, Anda perlu menambahkan autentikasi real
- Data saat ini hardcoded, bisa diganti dengan API calls
