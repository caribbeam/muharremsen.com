# WordPress'e İçerik Kopyala-Yapıştır Rehberi

## 🎯 Amaç

Local'de hazırladığımız içerikleri WordPress'e aktarmak. Böylece:
1. ✅ İçerikler WordPress'te olacak
2. ✅ Sonra istediğiniz değişiklikleri WordPress'ten yapabileceksiniz
3. ✅ Next.js sitesi WordPress'ten içerikleri çekecek

---

## 📋 HAZIR İÇERİKLER

Tüm hazır içerikler **`WORDPRESS-ICERIKLER-HAZIR-HTML.txt`** dosyasında var.

Bu dosyada 4 sayfa için hazır HTML içerikleri bulunuyor:
- ✅ Ana Sayfa
- ✅ Hizmetler
- ✅ Hakkımızda
- ✅ İletişim

---

## 🚀 ADIM ADIM: WordPress'e İçerik Ekleme

### ADIM 1: WordPress Paneline Giriş

1. Tarayıcıda açın: `https://panel.muharremsen.com/wp-admin`
2. Giriş yapın

---

### ADIM 2: Sayfa Oluşturma/Düzenleme

#### 2.1. Yeni Sayfa Oluştur
- Sol menü: **"Sayfalar"** → **"Yeni Ekle"**

#### VEYA Mevcut Sayfayı Düzenle
- Sol menü: **"Sayfalar"** → **"Tüm Sayfalar"**
- Düzenlemek istediğiniz sayfaya tıklayın

---

### ADIM 3: HTML Moduna Geçme

WordPress'te 2 editör tipi var:

#### Gutenberg Editörü (Yeni WordPress)
1. Editörde sağ üstte **"⋮"** (üç nokta) butonuna tıklayın
2. **"Code Editor"** veya **"Metin Editörü"** seçeneğini bulun
3. HTML moduna geçin

#### Klasik Editör (Eski WordPress)
1. Editörde sağ üstte **"Metin"** sekmesine tıklayın
2. HTML moduna geçmiş olursunuz

---

### ADIM 4: İçeriği Kopyala-Yapıştır

1. **`WORDPRESS-ICERIKLER-HAZIR-HTML.txt`** dosyasını açın
2. İlgili sayfanın içeriğini bulun (örn: "1. ANA SAYFA")
3. İçeriği **tamamen seçin** (Ctrl+A) ve **kopyalayın** (Ctrl+C)
4. WordPress editörüne **yapıştırın** (Ctrl+V)

**Örnek:**
```
Ana Sayfa için → "1. ANA SAYFA" bölümündeki tüm içeriği kopyalayın
Hizmetler için → "2. HİZMETLER SAYFASI" bölümündeki tüm içeriği kopyalayın
```

---

### ADIM 5: Slug (Permalink) Kontrolü

**⚠️ EN ÖNEMLİ ADIM!**

1. Sağ tarafta **"Permalink"** veya **"Kalıcı Bağlantı"** bölümünü bulun
2. **"Düzenle"** butonuna tıklayın
3. Slug kutusuna **tam olarak** şunu yazın:

| Sayfa | Slug (Permalink) |
|-------|------------------|
| Ana Sayfa | `ana-sayfa` |
| Hizmetler | `hizmetler` |
| Hakkımızda | `hakkimizda` |
| İletişim | `iletisim` |

4. **"Tamam"** veya **"OK"** tıklayın

---

### ADIM 6: Başlık Ekleme

1. Üstteki **"Başlık ekle"** kutusuna sayfa adını yazın:
   - Ana Sayfa → `Ana Sayfa`
   - Hizmetler → `Hizmetler`
   - Hakkımızda → `Hakkımızda`
   - İletişim → `İletişim`

---

### ADIM 7: Önizleme ve Yayınlama

1. **"Görsel"** sekmesine geçip içeriği kontrol edin
2. Sağ üstte **"Yayınla"** veya **"Güncelle"** butonuna tıklayın
3. ✅ Sayfa yayınlandı!

---

## 📝 HER SAYFA İÇİN TEKRAR EDİN

Yukarıdaki adımları **her sayfa için** tekrarlayın:

1. ✅ Ana Sayfa (slug: `ana-sayfa`)
2. ✅ Hizmetler (slug: `hizmetler`)
3. ✅ Hakkımızda (slug: `hakkimizda`)
4. ✅ İletişim (slug: `iletisim`)

---

## 🔍 KONTROL LİSTESİ

Her sayfa için kontrol edin:

- [ ] Başlık eklendi mi?
- [ ] İçerik kopyalandı mı?
- [ ] **Slug doğru mu?** ⚠️ (EN ÖNEMLİSİ)
- [ ] Sayfa "Yayında" durumunda mı?

---

## ✅ SONUÇ

Tüm sayfaları ekledikten sonra:

1. **10 saniye bekleyin** (ISR cache süresi)
2. **Sitenizi yenileyin** (F5 veya Ctrl+R)
3. **İçerikler görünecek!** 🎉

---

## 🆘 SORUN GİDERME

### İçerikler görünmüyor?

1. **Slug kontrolü yapın:**
   - Sayfalar → Tüm Sayfalar
   - Her sayfanın slug'ını kontrol edin
   - Doğru slug'lar: `ana-sayfa`, `hizmetler`, `hakkimizda`, `iletisim`

2. **Sayfa durumunu kontrol edin:**
   - Sayfa "Yayında" olmalı
   - "Taslak" veya "Beklemede" olmamalı

3. **Cache temizleme:**
   - 10 saniye bekleyin
   - Sayfayı yenileyin (Ctrl+F5 = hard refresh)

### HTML modu bulamıyorum?

**Gutenberg Editörü:**
- Sağ üstte **"⋮"** (üç nokta) → **"Code Editor"** veya **"Metin Editörü"**

**Klasik Editör:**
- Sağ üstte **"Metin"** sekmesi

### Slug değiştiremiyorum?

1. Ayarlar → Kalıcı Bağlantılar
2. "Özel Yapı" seçeneğini kontrol edin
3. Permalink düzenleme izni olmalı

---

## 💡 İPUCU

WordPress'te içerik ekledikten sonra:
- İstediğiniz değişiklikleri WordPress'ten yapabilirsiniz
- Next.js sitesi otomatik olarak WordPress'ten çekecek
- Her değişiklik 10 saniye içinde sitede görünecek

---

## 📞 YARDIM

Sorun yaşarsanız:
1. Slug'ları kontrol edin (en önemlisi!)
2. Sayfa durumunu kontrol edin (Yayında olmalı)
3. 10 saniye bekleyip sayfayı yenileyin

Başarılar! 🚀

