# SMTP Mail Kurulum Rehberi

## 📧 Kendi Mail Sunucunuz ile Mail Gönderme

İletişim formundan gelen mesajlar artık kendi mail sunucunuz (SMTP) üzerinden gönderilecek.

---

## 🔧 Vercel'de Environment Variables Ekleme

### Adım 1: Vercel Dashboard

1. Vercel dashboard'a gidin: https://vercel.com/dashboard
2. Projenizi seçin (`muharremsen.com`)
3. **"Settings"** → **"Environment Variables"** seçeneğine gidin

### Adım 2: SMTP Bilgilerini Ekleme

Aşağıdaki environment variable'ları ekleyin:

#### 1. SMTP_HOST
- **Name:** `SMTP_HOST`
- **Value:** `mail.muharremsen.com`
- **Environment:** Tüm ortamlar (Production, Preview, Development)

#### 2. SMTP_PORT
- **Name:** `SMTP_PORT`
- **Value:** `465`
- **Environment:** Tüm ortamlar

#### 3. SMTP_USER
- **Name:** `SMTP_USER`
- **Value:** `info@muharremsen.com`
- **Environment:** Tüm ortamlar

#### 4. SMTP_PASSWORD
- **Name:** `SMTP_PASSWORD`
- **Value:** `[E-posta hesabınızın şifresi]` ⚠️ **ÖNEMLİ: Gerçek şifreyi buraya yazın**
- **Environment:** Tüm ortamlar
- **Sensitive:** ✅ Bu değişkeni "Sensitive" olarak işaretleyin (şifre görünmez olur)

#### 5. SMTP_FROM (Opsiyonel)
- **Name:** `SMTP_FROM`
- **Value:** `info@muharremsen.com` (Varsayılan: info@muharremsen.com)
- **Environment:** Tüm ortamlar

#### 6. CONTACT_EMAIL (Opsiyonel)
- **Name:** `CONTACT_EMAIL`
- **Value:** `info@muharremsen.com` (Mail'in gönderileceği adres, varsayılan: info@muharremsen.com)
- **Environment:** Tüm ortamlar

### Adım 3: Redeploy

1. **"Deployments"** sekmesine gidin
2. Son deployment'ın yanındaki **"⋮"** (üç nokta) menüsüne tıklayın
3. **"Redeploy"** seçeneğini seçin
4. Deploy tamamlandıktan sonra mail gönderme aktif olacak

---

## 📝 SMTP Ayarları

### Mevcut Ayarlar:
- **Host:** mail.muharremsen.com
- **Port:** 465 (SSL/TLS)
- **Kullanıcı:** info@muharremsen.com
- **Şifre:** E-posta hesabınızın şifresi
- **Güvenlik:** SSL/TLS (Secure)

### Port Bilgisi:
- **465:** SSL/TLS ile güvenli bağlantı (Önerilen)
- **587:** STARTTLS ile güvenli bağlantı (Alternatif)

---

## ✅ Test Etme

1. Sitenize gidin: `https://muharremsen.com/iletisim`
2. İletişim formunu doldurun
3. **"Gönder"** butonuna tıklayın
4. `info@muharremsen.com` adresine mail gelecek
5. SMS bildirimi de gelecek (ayarlıysa)

---

## 🔍 Sorun Giderme

### Mail gelmiyor?

1. **Environment Variables kontrolü:**
   - Vercel'de tüm SMTP environment variable'ları var mı?
   - `SMTP_PASSWORD` doğru mu yazılmış?
   - `SMTP_USER` doğru mu? (`info@muharremsen.com`)

2. **SMTP ayarları:**
   - Host: `mail.muharremsen.com` doğru mu?
   - Port: `465` doğru mu?
   - Şifre doğru mu?

3. **Log kontrolü:**
   - Vercel'de deployment logs'a bakın
   - `📧 Mail gönderme başlatılıyor (SMTP)...` logunu arayın
   - Hata mesajı var mı?

4. **Mail sunucusu kontrolü:**
   - Hosting sağlayıcınızdan SMTP ayarlarını kontrol edin
   - Port 465 açık mı?
   - Firewall engellemesi var mı?

### Yaygın Hatalar:

#### "Authentication failed"
- **Çözüm:** `SMTP_USER` ve `SMTP_PASSWORD` doğru mu kontrol edin

#### "Connection timeout"
- **Çözüm:** Port 465 açık mı? Firewall engellemesi var mı?

#### "Self-signed certificate"
- **Çözüm:** Kodda `rejectUnauthorized: false` ayarı var, bu normal

---

## 💡 İpuçları

- ✅ SMTP_PASSWORD'ü "Sensitive" olarak işaretleyin (güvenlik)
- ✅ Port 465 SSL/TLS kullanır (güvenli)
- ✅ Mail gönderimi başarısız olsa bile SMS gönderilir
- ✅ Local'de test ediyorsanız `.env.local` dosyası oluşturun

---

## 📞 Yardım

Sorun yaşarsanız:
1. Vercel'de environment variable'ları kontrol edin
2. SMTP şifresini kontrol edin
3. Vercel logs'a bakın
4. Hosting sağlayıcınızdan SMTP ayarlarını kontrol edin

Başarılar! 🚀

