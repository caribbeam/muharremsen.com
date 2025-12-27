# Kurumsal Tanıtım Sitesi

Next.js 14 (App Router) kullanılarak geliştirilmiş modern, dark temalı kurumsal tanıtım sitesi.

## Özellikler

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Dark tema tasarımı
- ✅ Responsive (mobil uyumlu)
- ✅ SEO uyumlu yapı
- ✅ Glassmorphism efektleri
- ✅ Performans odaklı

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Sayfalar

- **Ana Sayfa** (`/`) - Hero bölümü, hizmetler önizleme, neden biz, ekip önizleme
- **Hizmetler** (`/hizmetler`) - Tüm hizmetlerin detaylı listesi
- **Hakkımızda** (`/hakkimizda`) - Firma tanıtımı, misyon, vizyon
- **Ekibimiz** (`/ekibimiz`) - Ekip üyeleri
- **İletişim** (`/iletisim`) - İletişim formu ve bilgileri

## Proje Yapısı

```
├── app/                    # Next.js App Router sayfaları
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── globals.css        # Global stiller
│   ├── hizmetler/         # Hizmetler sayfası
│   ├── hakkimizda/        # Hakkımızda sayfası
│   ├── ekibimiz/          # Ekibimiz sayfası
│   └── iletisim/          # İletişim sayfası
├── components/            # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionWrapper.tsx
│   ├── ServiceCard.tsx
│   ├── TeamCard.tsx
│   └── ContactForm.tsx
└── public/                # Statik dosyalar
```

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI kütüphanesi

## Tasarım

- **Renk Paleti:**
  - Dark Primary: `#0a0e27`
  - Dark Secondary: `#1a1f3a`
  - Dark Tertiary: `#252b47`
  - Accent Green: `#00ff88`
  - Accent Turquoise: `#00d4ff`

- **Özellikler:**
  - Glassmorphism efektleri
  - Yumuşak geçiş animasyonları
  - Hover efektleri
  - Responsive tasarım

## Lisans

Bu proje özel kullanım içindir.

