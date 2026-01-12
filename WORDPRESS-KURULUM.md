# WordPress Headless CMS Kurulum Rehberi

## WordPress Panelinde Oluşturulması Gereken Sayfalar

Site çalışması için WordPress panelinde aşağıdaki **slug**'larla sayfalar oluşturmanız gerekiyor:

### 1. Ana Sayfa
- **Sayfa Başlığı:** Ana Sayfa (veya istediğiniz başlık)
- **Slug (Permalink):** `ana-sayfa` ⚠️ **ÖNEMLİ: Tam olarak bu şekilde olmalı**
- **URL:** `/` (Ana sayfa)

### 2. Hizmetler Sayfası
- **Sayfa Başlığı:** Hizmetler (veya istediğiniz başlık)
- **Slug (Permalink):** `hizmetler` ⚠️ **ÖNEMLİ: Tam olarak bu şekilde olmalı**
- **URL:** `/hizmetler`

### 3. Hakkımızda Sayfası
- **Sayfa Başlığı:** Hakkımızda (veya istediğiniz başlık)
- **Slug (Permalink):** `hakkimizda` ⚠️ **ÖNEMLİ: Tam olarak bu şekilde olmalı**
- **URL:** `/hakkimizda`

### 4. İletişim Sayfası
- **Sayfa Başlığı:** İletişim (veya istediğiniz başlık)
- **Slug (Permalink):** `iletisim` ⚠️ **ÖNEMLİ: Tam olarak bu şekilde olmalı**
- **URL:** `/iletisim`

## WordPress'te Sayfa Oluşturma Adımları

1. WordPress Admin Paneline giriş yapın
2. **Sayfalar > Yeni Ekle** menüsüne gidin
3. Sayfa başlığını girin
4. İçeriği yazın
5. **Permalink** bölümünde slug'ı düzenleyin (yukarıdaki slug'lardan birini kullanın)
6. **Yayınla** butonuna tıklayın

## Blog Yazıları

Blog yazıları için özel bir ayar gerekmez. WordPress'te normal şekilde **Yazılar > Yeni Ekle** ile blog yazıları oluşturabilirsiniz. Tüm yazılar otomatik olarak `/blog` sayfasında listelenir.

## API Endpoint Kontrolü

WordPress API'nin çalıştığını kontrol etmek için:

```
https://panel.muharremsen.com/wp-json/wp/v2/pages
```

Bu URL'ye tarayıcıdan gidip JSON yanıt alıyorsanız API çalışıyor demektir.

## Sorun Giderme

### İçerikler Görünmüyor

1. **Slug Kontrolü:** Sayfaların slug'ları tam olarak yukarıdaki gibi mi?
2. **API Erişimi:** `https://panel.muharremsen.com/wp-json/wp-json/wp/v2/pages` çalışıyor mu?
3. **CORS:** WordPress'te REST API erişimi açık mı?
4. **Sayfa Durumu:** Sayfalar "Yayında" durumunda mı?

### CORS Hatası

WordPress'te REST API erişimini açmak için `.htaccess` veya plugin kullanabilirsiniz.

## Test Etme

Sayfaları oluşturduktan sonra:

1. Vercel'de deployment'ı yenileyin
2. 60 saniye bekleyin (ISR cache süresi)
3. Sayfayı yenileyin

Veya Vercel'de "Redeploy" yaparak cache'i temizleyin.


