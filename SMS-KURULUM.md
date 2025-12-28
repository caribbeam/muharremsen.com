# SMS Bildirim Kurulum Rehberi

## 📱 SMS Bildirim Özelliği

İletişim formundan mail geldiğinde, size otomatik SMS bildirimi gönderilir.

---

## 🔧 Vercel'de Environment Variables Ekleme

### Adım 1: Vercel Dashboard

1. Vercel dashboard'a gidin: https://vercel.com/dashboard
2. Projenizi seçin (`muharremsen.com`)
3. **"Settings"** → **"Environment Variables"** seçeneğine gidin

### Adım 2: SMS API Bilgilerini Ekleme

Aşağıdaki 3 environment variable'ı ekleyin:

#### 1. SMS_USERNAME
- **Name:** `SMS_USERNAME`
- **Value:** `sitetelekom`
- **Environment:** Tüm ortamlar (Production, Preview, Development)

#### 2. SMS_PASSWORD
- **Name:** `SMS_PASSWORD`
- **Value:** `Ae4vdVevDHbg`
- **Environment:** Tüm ortamlar

#### 3. SMS_NOTIFICATION_PHONE
- **Name:** `SMS_NOTIFICATION_PHONE`
- **Value:** `905304989553` (SMS'in gönderileceği telefon numarası - 90 ile başlamalı, + olmadan)
- **Environment:** Tüm ortamlar

#### 4. SMS_SENDER (Opsiyonel)
- **Name:** `SMS_SENDER`
- **Value:** `SITETELEKOM` (Varsayılan: SITETELEKOM)
- **Environment:** Tüm ortamlar

### Adım 3: Redeploy

1. **"Deployments"** sekmesine gidin
2. Son deployment'ın yanındaki **"⋮"** (üç nokta) menüsüne tıklayın
3. **"Redeploy"** seçeneğini seçin
4. Deploy tamamlandıktan sonra SMS bildirimi aktif olacak

---

## 📝 SMS İçeriği

SMS içeriği şu formatta gönderilir:

```
Yeni iletişim formu mesajı:
İsim: [İsim]
E-posta: [E-posta]
Mesaj: [Mesajın ilk 100 karakteri...]
```

---

## ✅ Test Etme

1. Sitenize gidin: `https://muharremsen.com/iletisim`
2. İletişim formunu doldurun
3. **"Gönder"** butonuna tıklayın
4. `info@muharremsen.com` adresine mail gelecek
5. `SMS_NOTIFICATION_PHONE` numarasına SMS gelecek

---

## 🔍 Sorun Giderme

### SMS gelmiyor?

1. **Environment Variables kontrolü:**
   - Vercel'de tüm SMS environment variable'ları var mı?
   - Doğru mu yazılmış?

2. **Telefon numarası formatı:**
   - `SMS_NOTIFICATION_PHONE` 90 ile başlamalı (örn: `905304989553`)
   - + işareti olmamalı
   - Boşluk olmamalı

3. **API bilgileri:**
   - `SMS_USERNAME` doğru mu? (`sitetelekom`)
   - `SMS_PASSWORD` doğru mu? (`Ae4vdVevDHbg`)

4. **Log kontrolü:**
   - Vercel'de deployment logs'a bakın
   - Hata mesajı var mı?

### SMS gönderilmezse ne olur?

- Form çalışmaya devam eder
- Mail gönderilir
- SMS gönderilmez
- Console'da hata log görünür
- Kullanıcıya "Mesaj gönderildi" mesajı gösterilir (mail başarılıysa)

---

## 💡 İpuçları

- SMS gönderimi başarısız olsa bile mail gönderilir
- SMS içeriği 160 karakterle sınırlıdır (mesaj kısaltılır)
- Telefon numarası formatı: `90` + telefon numarası (örn: `905304989553`)

---

## 📞 Yardım

Sorun yaşarsanız:
1. Vercel'de environment variable'ları kontrol edin
2. Telefon numarası formatını kontrol edin
3. Vercel logs'a bakın
4. SMS API bilgilerini kontrol edin

Başarılar! 🚀

