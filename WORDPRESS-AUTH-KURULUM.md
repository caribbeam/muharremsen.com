# WordPress Authentication Kurulum Rehberi

## 🔐 WordPress API Authentication

WordPress'e otomatik yazı eklemek için authentication bilgileri gerekiyor.

---

## 🚀 Yöntem 1: Application Password (Önerilen)

### Adım 1: WordPress Panelinde Application Password Oluştur

1. WordPress Admin Paneline giriş yapın: `https://panel.muharremsen.com/wp-admin`
2. **Kullanıcılar** → **Profil** menüsüne gidin
3. Sayfanın en altına inin
4. **"Application Passwords"** bölümünü bulun
5. **"Yeni Application Password Ekle"** bölümüne bir isim verin (örn: "Blog API")
6. **"Yeni Şifre Ekle"** butonuna tıklayın
7. **Oluşturulan şifreyi kopyalayın** (sadece bir kez gösterilir!)

### Adım 2: Vercel'de Environment Variables Ekleme

1. Vercel dashboard'a gidin: https://vercel.com/dashboard
2. Projenizi seçin (`muharremsen.com`)
3. **"Settings"** → **"Environment Variables"** seçeneğine gidin

#### WP_USERNAME
- **Name:** `WP_USERNAME`
- **Value:** WordPress kullanıcı adınız (örn: `admin` veya `info@muharremsen.com`)
- **Environment:** Tüm ortamlar
- **Sensitive:** ✅ Evet (güvenlik için)

#### WP_APP_PASSWORD
- **Name:** `WP_APP_PASSWORD`
- **Value:** Application Password'den kopyaladığınız şifre
- **Environment:** Tüm ortamlar
- **Sensitive:** ✅ Evet (mutlaka işaretleyin!)

### Adım 3: Redeploy

1. **"Deployments"** sekmesine gidin
2. Son deployment'ı **"Redeploy"** edin

---

## 🔐 Yöntem 2: Normal Şifre (Alternatif)

Eğer Application Password oluşturamıyorsanız, normal WordPress şifrenizi kullanabilirsiniz (daha az güvenli).

### Vercel'de Environment Variables:

#### WP_USERNAME
- **Name:** `WP_USERNAME`
- **Value:** WordPress kullanıcı adınız

#### WP_PASSWORD
- **Name:** `WP_PASSWORD`
- **Value:** WordPress şifreniz
- **Sensitive:** ✅ Mutlaka işaretleyin!

---

## ✅ Test Etme

Authentication bilgileri eklendikten sonra, blog yazısı ekleme işlemi çalışacak.

---

## 🔍 Sorun Giderme

### "Authentication failed" hatası

1. **Kullanıcı adı doğru mu?**
   - WordPress panelinde kullandığınız kullanıcı adı
   - Email adresi de olabilir

2. **Şifre doğru mu?**
   - Application Password kullanıyorsanız: Application Password'ü kopyaladınız mı?
   - Normal şifre kullanıyorsanız: WordPress şifreniz doğru mu?

3. **Application Password oluşturulamıyor mu?**
   - WordPress versiyonunuz 5.6+ olmalı
   - Alternatif olarak normal şifre kullanabilirsiniz

### "Permission denied" hatası

- Kullanıcınızın "Editor" veya "Administrator" yetkisi olmalı
- "Subscriber" veya "Contributor" yetkisi yazı ekleyemez

---

## 💡 İpuçları

- ✅ Application Password daha güvenlidir (önerilen)
- ✅ Environment variable'ları "Sensitive" olarak işaretleyin
- ✅ Application Password sadece bir kez gösterilir, kaydedin!
- ✅ Normal şifre kullanıyorsanız, şifrenizi düzenli değiştirin

---

## 📞 Yardım

Sorun yaşarsanız:
1. WordPress versiyonunuzu kontrol edin (5.6+)
2. Kullanıcı yetkilerinizi kontrol edin
3. Application Password oluşturmayı deneyin
4. Vercel logs'a bakın

Başarılar! 🚀


