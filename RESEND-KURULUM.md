# Resend Mail Servisi Kurulum Rehberi

## 📧 Mail Gönderme Özelliği

İletişim formundan gelen mesajlar artık otomatik olarak e-posta adresinize gönderilecek.

---

## 🚀 Kurulum Adımları

### 1. Resend Hesabı Oluşturma

1. **Resend.com** adresine gidin: https://resend.com
2. **"Sign Up"** butonuna tıklayın
3. Ücretsiz hesap oluşturun (ayda 3,000 mail ücretsiz)

### 2. API Key Alma

1. Resend dashboard'a giriş yapın
2. Sol menüden **"API Keys"** seçeneğine tıklayın
3. **"Create API Key"** butonuna tıklayın
4. Key adı verin (örn: "muharremsen-contact-form")
5. **"Create"** butonuna tıklayın
6. **API Key'i kopyalayın** (sadece bir kez gösterilir!)

### 3. Domain Doğrulama (Önemli!)

Resend'de mail göndermek için domain doğrulaması gerekiyor:

1. Resend dashboard'da **"Domains"** seçeneğine gidin
2. **"Add Domain"** butonuna tıklayın
3. Domain adınızı girin: `muharremsen.com`
4. DNS kayıtlarını ekleyin (Resend size verecek)
5. Domain doğrulandıktan sonra mail gönderebilirsiniz

**Alternatif:** Resend'in test domain'ini kullanabilirsiniz (sadece test için)

---

## 🔧 Vercel'de Environment Variable Ekleme

### Adım 1: Vercel Dashboard

1. Vercel dashboard'a gidin: https://vercel.com/dashboard
2. Projenizi seçin (`muharremsen.com`)
3. **"Settings"** → **"Environment Variables"** seçeneğine gidin

### Adım 2: API Key Ekleme

1. **"Add New"** butonuna tıklayın
2. **Name:** `RESEND_API_KEY`
3. **Value:** Resend'den aldığınız API key'i yapıştırın
4. **Environment:** Tüm ortamlar (Production, Preview, Development) seçin
5. **"Save"** butonuna tıklayın

### Adım 3: Redeploy

1. **"Deployments"** sekmesine gidin
2. Son deployment'ın yanındaki **"⋮"** (üç nokta) menüsüne tıklayın
3. **"Redeploy"** seçeneğini seçin
4. Deploy tamamlandıktan sonra mail gönderme aktif olacak

---

## 📝 Mail Ayarları

### Gönderen E-posta

Kodda şu şekilde ayarlanmış:
```typescript
from: "İletişim Formu <noreply@muharremsen.com>"
```

**Önemli:** Domain doğrulaması yapılmadan mail gönderilemez!

### Alıcı E-posta

Mesajlar şu adrese gönderilir:
```
info@muharremsen.com
```

Bu adresi değiştirmek için `app/api/contact/route.ts` dosyasındaki `to` alanını düzenleyin.

---

## ✅ Test Etme

1. Sitenize gidin: `https://muharremsen.com/iletisim`
2. İletişim formunu doldurun
3. **"Gönder"** butonuna tıklayın
4. `info@muharremsen.com` adresine mail gelip gelmediğini kontrol edin

---

## 🔍 Sorun Giderme

### Mail gelmiyor?

1. **API Key kontrolü:**
   - Vercel'de `RESEND_API_KEY` environment variable'ı var mı?
   - Doğru mu yazılmış?

2. **Domain doğrulama:**
   - Resend'de domain doğrulandı mı?
   - DNS kayıtları doğru mu?

3. **Log kontrolü:**
   - Vercel'de deployment logs'a bakın
   - Hata mesajı var mı?

### API Key yoksa ne olur?

API key yoksa:
- Form çalışmaya devam eder
- Mail gönderilmez
- Console'da log görünür
- Kullanıcıya "Mesaj gönderildi" mesajı gösterilir

---

## 💡 İpuçları

- Resend ücretsiz plan: Ayda 3,000 mail
- Domain doğrulaması yapılmadan mail gönderilemez
- Test için Resend'in test domain'ini kullanabilirsiniz
- Production'da mutlaka kendi domain'inizi doğrulayın

---

## 📞 Yardım

Sorun yaşarsanız:
1. Resend dashboard'dan API key'i kontrol edin
2. Vercel'de environment variable'ı kontrol edin
3. Domain doğrulamasını kontrol edin
4. Vercel logs'a bakın

Başarılar! 🚀

