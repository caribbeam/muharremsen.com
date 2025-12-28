# WordPress'te İçerik Ekleme - Adım Adım Rehber

## 📋 Genel Bakış

WordPress panelinde sayfalar oluşturup içerik ekleyeceksiniz. Her sayfa için **slug** (permalink) çok önemli!

---

## 🚀 ADIM 1: WordPress Paneline Giriş

1. Tarayıcınızda şu adrese gidin: `https://panel.muharremsen.com/wp-admin`
2. Kullanıcı adı ve şifrenizle giriş yapın

---

## 📄 ADIM 2: Ana Sayfa Oluşturma

### 2.1. Yeni Sayfa Oluştur
1. Sol menüden **"Sayfalar"** → **"Yeni Ekle"** tıklayın

### 2.2. Sayfa Başlığı
- **Başlık kutusuna:** `Ana Sayfa` yazın (veya istediğiniz başlık)

### 2.3. İçerik Ekleme
- Büyük metin kutusuna (Gutenberg editörü) içeriğinizi yazın
- **Örnek içerik:**

```
<h2>Hoş Geldiniz</h2>

<p>muharremsen olarak, teknoloji dünyasında güvenilir çözümler sunuyoruz. Yazılım geliştirme, sistem yönetimi ve danışmanlık hizmetlerimizle işletmenizin dijital dönüşümünde yanınızdayız.</p>

<p>Modern teknolojiler ve en iyi uygulamalarla, projelerinizi başarıya taşıyoruz. Müşteri memnuniyeti ve kalite odaklı yaklaşımımızla, uzun vadeli iş ortaklıkları kuruyoruz.</p>

<h2>Hizmetlerimiz</h2>

<p>Geniş bir hizmet yelpazesiyle işletmenizin ihtiyaçlarına özel çözümler sunuyoruz:</p>

<ul>
  <li><strong>Yapay Zeka Destekli Yazılımlar</strong> - AI teknolojileriyle güçlendirilmiş özel yazılım çözümleri</li>
  <li><strong>Proforma Uygulamalar</strong> - İş süreçlerinizi optimize eden proforma ve fatura yönetim sistemleri</li>
  <li><strong>Helpdesk Sistemleri</strong> - Müşteri destek süreçlerinizi yöneten profesyonel helpdesk çözümleri</li>
  <li><strong>LMS</strong> - Eğitim ve öğrenme süreçlerinizi dijitalleştiren LMS platformları</li>
  <li><strong>Envanter Yönetimi</strong> - Stok ve envanter takibinizi kolaylaştıran entegre sistemler</li>
  <li><strong>QDMS</strong> - Kalite yönetim sistemleriniz için dokümantasyon çözümleri</li>
</ul>
```

### 2.4. ⚠️ EN ÖNEMLİ: Slug (Permalink) Ayarlama
1. Sağ tarafta **"Permalink"** bölümünü bulun
2. **"Düzenle"** butonuna tıklayın
3. **Slug kutusuna:** `ana-sayfa` yazın (tam olarak bu şekilde, tire ile)
4. **"Tamam"** tıklayın

### 2.5. Yayınlama
1. Sağ üstte **"Yayınla"** butonuna tıklayın
2. Sayfa yayınlandı! ✅

---

## 📄 ADIM 3: Hizmetler Sayfası

### 3.1. Yeni Sayfa Oluştur
1. **"Sayfalar"** → **"Yeni Ekle"**

### 3.2. Başlık ve İçerik
- **Başlık:** `Hizmetler`
- **İçerik örneği:**

```
<h2>Hizmetlerimiz</h2>

<p>Teknoloji çözümlerinde geniş bir hizmet yelpazesi sunuyoruz. İşletmenizin ihtiyaçlarına özel, modern ve güvenilir çözümler geliştiriyoruz.</p>

<h3>🤖 Yapay Zeka Destekli Yazılımlar</h3>
<p>AI teknolojileriyle güçlendirilmiş özel yazılım çözümleri. Makine öğrenmesi, doğal dil işleme ve görüntü tanıma teknolojileriyle iş süreçlerinizi optimize ediyoruz.</p>

<h3>📄 Proforma Uygulamalar</h3>
<p>İş süreçlerinizi dijitalleştiren proforma ve fatura yönetim sistemleri. Otomatik fatura oluşturma, takip ve raporlama özellikleri.</p>

<h3>🎫 Helpdesk Sistemleri</h3>
<p>Müşteri destek süreçlerinizi profesyonelce yöneten helpdesk çözümleri. Ticket yönetimi, SLA takibi ve otomatik yönlendirme özellikleri.</p>

<h3>📚 LMS (Öğrenme Yönetim Sistemleri)</h3>
<p>Eğitim ve öğrenme süreçlerinizi dijitalleştiren LMS platformları. Kurs yönetimi, sınav sistemi ve ilerleme takibi.</p>

<h3>📦 Envanter Yönetimi</h3>
<p>Stok ve envanter takibinizi kolaylaştıran entegre sistemler. Gerçek zamanlı stok takibi, otomatik sipariş yönetimi ve raporlama.</p>

<h3>📋 QDMS (Kalite Dokümantasyon)</h3>
<p>Kalite yönetim sistemleriniz için dokümantasyon çözümleri. Doküman versiyonlama, onay süreçleri ve uyumluluk takibi.</p>

<h3>🌐 Uzak Bağlantı IT Uygulamaları</h3>
<p>Uzaktan erişim ve yönetim için güvenli IT uygulamaları. VPN çözümleri, uzaktan masaüstü erişimi ve sistem yönetimi.</p>

<h3>🖥️ Domain Server / Active Directory</h3>
<p>Kurumsal ağ altyapınız için domain server ve Active Directory kurulumları. Kullanıcı yönetimi, grup politikaları ve güvenlik yapılandırmaları.</p>

<h3>🖼️ Imaj Yönetimi</h3>
<p>Kurumsal yapıda imaj yönetim sistemleri. Sistem imajları, dağıtım ve güncelleme yönetimi.</p>

<h3>☎️ FreePBX / Asterisk Kurulumları</h3>
<p>Açık kaynak telefon santrali çözümleri. VoIP sistemleri, çağrı yönlendirme ve sesli mesaj özellikleri.</p>

<h3>🔒 ISO 27001 BGYS Desteği</h3>
<p>Bilgi güvenliği yönetim sistemi (BGYS) danışmanlığı ve uyumluluk desteği. ISO 27001 sertifikasyon süreçlerinde rehberlik.</p>
```

### 3.3. Slug Ayarlama
- **Permalink:** `hizmetler` (tam olarak bu şekilde)

### 3.4. Yayınla
- **"Yayınla"** butonuna tıklayın ✅

---

## 📄 ADIM 4: Hakkımızda Sayfası

### 4.1. Yeni Sayfa
- **Başlık:** `Hakkımızda`
- **İçerik örneği:**

```
<h2>Hakkımızda</h2>

<p>muharremsen olarak, teknoloji dünyasında güvenilir çözümler sunuyoruz. Yazılım geliştirme, sistem yönetimi ve danışmanlık alanlarında uzman ekibimizle hizmet veriyoruz.</p>

<p>Modern teknolojiler ve en iyi uygulamalarla, müşterilerimizin dijital dönüşüm yolculuğunda yanlarında yer alıyoruz. Kalite, güvenilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla, uzun vadeli iş ortaklıkları kuruyoruz.</p>

<h2>Misyonumuz</h2>

<p>İşletmelerin teknoloji ihtiyaçlarını karşılayarak, onların büyümesine ve başarısına katkıda bulunmak. Modern çözümlerle müşterilerimizin rekabet avantajı kazanmalarını sağlamak.</p>

<h2>Vizyonumuz</h2>

<p>Teknoloji sektöründe öncü bir marka olmak ve müşterilerimize en kaliteli hizmeti sunmak. Sürekli gelişen teknolojilere uyum sağlayarak, yenilikçi çözümler üretmek.</p>

<h2>Çalışma Yaklaşımımız</h2>

<ul>
  <li>✓ Müşteri odaklı çözümler geliştiriyoruz</li>
  <li>✓ Projelerimizde en iyi uygulamaları kullanıyoruz</li>
  <li>✓ Zamanında teslimat ve kalite garantisi sunuyoruz</li>
  <li>✓ Proje sonrası destek ve bakım hizmeti veriyoruz</li>
  <li>✓ Güvenlik ve uyumluluk standartlarına uyuyoruz</li>
</ul>
```

### 4.2. Slug
- **Permalink:** `hakkimizda`

### 4.3. Yayınla ✅

---

## 📄 ADIM 5: İletişim Sayfası

### 5.1. Yeni Sayfa
- **Başlık:** `İletişim`
- **İçerik örneği:**

```
<h2>İletişim</h2>

<p>Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü birlikte belirleyelim.</p>

<h3>İletişim Bilgileri</h3>

<p><strong>📞 Telefon:</strong> 0 530 498 95 53</p>
<p><strong>✉️ E-posta:</strong> info@muharremsen.com</p>
<p><strong>💬 WhatsApp:</strong> Aşağıdaki butonlardan bize ulaşabilirsiniz</p>

<p>Çalışma saatlerimiz: Hafta içi 09:00 - 18:00</p>
```

### 5.2. Slug
- **Permalink:** `iletisim`

### 5.3. Yayınla ✅

---

## 🎨 WordPress Editör Kullanım İpuçları

### Gutenberg Editörü (Yeni WordPress)
- **Paragraf eklemek:** Enter tuşuna basın
- **Başlık eklemek:** `/` yazıp "Heading" seçin veya üstteki "+" butonundan "Heading" seçin
- **Liste eklemek:** `/` yazıp "List" seçin
- **Kalın yazı:** Metni seçip **B** butonuna tıklayın
- **HTML modu:** Sağ üstteki "⋮" → "Code Editor" seçin

### Klasik Editör (Eski WordPress)
- Direkt HTML yazabilirsiniz
- "Metin" sekmesine geçip HTML kodlarını yapıştırın

---

## ✅ Kontrol Listesi

Her sayfa için kontrol edin:

- [ ] Sayfa başlığı doğru mu?
- [ ] İçerik eklendi mi?
- [ ] **Slug (Permalink) doğru mu?** ⚠️ EN ÖNEMLİSİ
- [ ] Sayfa "Yayında" durumunda mı?

---

## 🔍 Slug Kontrolü Nasıl Yapılır?

1. Sayfayı düzenlerken sağ tarafta **"Permalink"** bölümüne bakın
2. Veya **"Sayfalar"** → **"Tüm Sayfalar"** listesinde fareyi sayfa üzerine getirin
3. Alt kısımda görünen URL'de slug'ı kontrol edin

**Doğru slug'lar:**
- ✅ `ana-sayfa`
- ✅ `hizmetler`
- ✅ `hakkimizda`
- ✅ `iletisim`

**Yanlış örnekler:**
- ❌ `ana-sayfa-2` (sayı eklenmiş)
- ❌ `Ana-Sayfa` (büyük harf)
- ❌ `anasayfa` (tire yok)

---

## 🚀 İçerik Eklendikten Sonra

1. **10 saniye bekleyin** (ISR cache süresi)
2. **Sitenizi yenileyin** (F5 veya Ctrl+R)
3. İçerikler görünecek! ✅

**Veya:**
- Vercel'de **"Redeploy"** yaparak cache'i temizleyin

---

## 📞 Sorun mu Var?

1. **İçerikler görünmüyor:**
   - Slug'ları kontrol edin
   - Sayfanın "Yayında" olduğundan emin olun
   - 10 saniye bekleyip sayfayı yenileyin

2. **API hatası:**
   - `https://panel.muharremsen.com/wp-json/wp/v2/pages` adresine tarayıcıdan gidin
   - JSON yanıt alıyorsanız API çalışıyor demektir

3. **Slug değiştiremiyorum:**
   - Ayarlar → Kalıcı Bağlantılar → "Özel Yapı" seçeneğini kontrol edin
   - Permalink düzenleme izni olmalı

---

## 💡 İpucu

WordPress'te içerik eklerken:
- **HTML kullanabilirsiniz** (başlıklar, listeler, linkler)
- **Görsel ekleyebilirsiniz** (Medya → Yeni Ekle)
- **Formatlamayı düzenleyebilirsiniz** (kalın, italik, renk)

İçerikleriniz Next.js sitesinde otomatik olarak görünecek! 🎉

