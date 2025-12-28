export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export const exampleBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "yapay-zeka-destekli-yazilimlar-ile-is-sureclerinizi-donusturun",
    title: "Yapay Zeka Destekli Yazılımlar ile İş Süreçlerinizi Dönüştürün",
    description: "Yapay zeka teknolojileriyle işletmenizin verimliliğini artırın. Makine öğrenmesi, doğal dil işleme ve görüntü tanıma çözümleri hakkında bilgi edinin.",
    content: `
<h2>Yapay Zeka Nedir?</h2>

<p>Yapay zeka (AI), bilgisayar sistemlerinin insan benzeri düşünme ve öğrenme yeteneklerine sahip olmasını sağlayan teknolojidir. İşletmeler için AI destekli yazılımlar, iş süreçlerini otomatikleştirerek verimliliği artırır ve maliyetleri düşürür.</p>

<h2>İşletmelere Faydaları</h2>

<p>Yapay zeka destekli yazılımlar, işletmelere birçok avantaj sağlar:</p>

<ul>
  <li>İş süreçlerini otomatikleştirerek zaman tasarrufu</li>
  <li>Hata oranlarını azaltarak kaliteyi artırma</li>
  <li>Müşteri deneyimini iyileştirme</li>
  <li>Veri analizi ile karar verme süreçlerini destekleme</li>
  <li>Maliyet optimizasyonu</li>
</ul>

<h2>Kullanım Alanları</h2>

<h3>Makine Öğrenmesi</h3>
<p>Makine öğrenmesi, sistemlerin verilerden öğrenmesini ve deneyimlerle gelişmesini sağlar. Satış tahminleri, müşteri segmentasyonu ve risk analizi gibi alanlarda kullanılır.</p>

<h3>Doğal Dil İşleme (NLP)</h3>
<p>NLP teknolojileri, insan dilini anlayan ve işleyen sistemler geliştirmemize olanak sağlar. Chatbot'lar, müşteri destek sistemleri ve içerik analizi gibi uygulamalarda kullanılır.</p>

<h3>Görüntü Tanıma</h3>
<p>Görüntü tanıma teknolojileri, görsel verileri analiz ederek işletmelere değerli bilgiler sağlar. Kalite kontrol, güvenlik sistemleri ve otomatik etiketleme gibi alanlarda kullanılır.</p>

<h2>muharremsen'in AI Çözümleri</h2>

<p>muharremsen olarak, işletmenizin ihtiyaçlarına özel yapay zeka destekli yazılım çözümleri geliştiriyoruz. Deneyimli ekibimizle, AI teknolojilerini iş süreçlerinize entegre ederek rekabet avantajı kazanmanızı sağlıyoruz.</p>

<p>Projeleriniz için bizimle iletişime geçin ve yapay zeka destekli çözümlerle işletmenizi geleceğe taşıyın.</p>
    `,
    date: "2025-01-15",
    author: "muharremsen",
    category: "Yapay Zeka",
    tags: ["yapay zeka", "AI", "makine öğrenmesi", "yazılım"],
  },
  {
    id: 2,
    slug: "dijital-fatura-yonetimi-isletmenizi-modernlestirin",
    title: "Dijital Fatura Yönetimi: İşletmenizi Modernleştirin",
    description: "E-fatura ve e-arşiv fatura sistemleri ile işletmenizin finansal süreçlerini dijitalleştirin. Zaman ve maliyet tasarrufu sağlayın.",
    content: `
<h2>Dijital Fatura Yönetimi Nedir?</h2>

<p>Dijital fatura yönetimi, geleneksel kağıt faturaların yerine elektronik fatura sistemlerinin kullanılmasıdır. E-fatura ve e-arşiv fatura sistemleri, işletmelerin fatura süreçlerini otomatikleştirerek verimliliği artırır.</p>

<h2>Avantajları</h2>

<ul>
  <li>Zaman tasarrufu: Fatura oluşturma ve gönderme süreçleri otomatikleşir</li>
  <li>Maliyet azaltma: Kağıt, baskı ve posta maliyetleri ortadan kalkar</li>
  <li>Hata azaltma: Otomatik sistemler hata riskini minimize eder</li>
  <li>Hızlı erişim: Faturalara dijital ortamdan anında erişim</li>
  <li>Yasal uyumluluk: E-fatura yasal gerekliliklere uyum sağlar</li>
</ul>

<h2>E-Fatura Sistemi</h2>

<p>E-fatura sistemi, faturaların elektronik ortamda oluşturulması, gönderilmesi ve saklanmasını sağlar. GİB (Gelir İdaresi Başkanlığı) tarafından onaylanan sistemlerle yasal gereklilikleri karşılar.</p>

<h2>E-Arşiv Fatura</h2>

<p>E-arşiv fatura, kağıt faturaların elektronik kopyalarının saklanmasıdır. Fiziksel arşivleme ihtiyacını ortadan kaldırarak yer ve maliyet tasarrufu sağlar.</p>

<h2>muharremsen'in Çözümleri</h2>

<p>muharremsen olarak, işletmenizin ihtiyaçlarına özel proforma ve fatura yönetim sistemleri geliştiriyoruz. Otomatik fatura oluşturma, takip ve raporlama özellikleriyle finansal süreçlerinizi optimize ediyoruz.</p>

<p>Dijital fatura yönetimi ile işletmenizi modernleştirmek için bizimle iletişime geçin.</p>
    `,
    date: "2025-01-10",
    author: "muharremsen",
    category: "Yazılım",
    tags: ["e-fatura", "dijital fatura", "fatura yönetimi", "proforma"],
  },
  {
    id: 3,
    slug: "profesyonel-helpdesk-sistemi-ile-musteri-memnuniyetinizi-artirin",
    title: "Profesyonel Helpdesk Sistemi ile Müşteri Memnuniyetinizi Artırın",
    description: "Ticket yönetimi, SLA takibi ve otomatik yönlendirme özellikleriyle müşteri destek süreçlerinizi profesyonelce yönetin.",
    content: `
<h2>Helpdesk Sistemi Nedir?</h2>

<p>Helpdesk sistemi, müşteri destek taleplerini yöneten, takip eden ve çözen profesyonel bir platformdur. Ticket yönetimi, SLA takibi ve otomatik yönlendirme özellikleriyle müşteri hizmetlerini optimize eder.</p>

<h2>Özellikler</h2>

<ul>
  <li>Ticket yönetimi: Müşteri taleplerini organize edin</li>
  <li>SLA takibi: Hizmet seviyesi anlaşmalarını izleyin</li>
  <li>Otomatik yönlendirme: Talepleri doğru departmana yönlendirin</li>
  <li>Bilgi bankası: Sık sorulan sorular için merkezi kaynak</li>
  <li>Raporlama: Performans metriklerini analiz edin</li>
</ul>

<h2>Müşteri Memnuniyeti</h2>

<p>Profesyonel bir helpdesk sistemi, müşteri memnuniyetini artırır. Hızlı yanıt süreleri, organize talep yönetimi ve takip edilebilir süreçler müşteri deneyimini iyileştirir.</p>

<h2>SLA Yönetimi</h2>

<p>SLA (Service Level Agreement) takibi, müşteri hizmet seviyesi anlaşmalarının karşılanıp karşılanmadığını izler. Bu sayede hizmet kalitesi sürekli olarak ölçülür ve iyileştirilir.</p>

<h2>muharremsen'in Helpdesk Çözümleri</h2>

<p>muharremsen olarak, müşteri destek süreçlerinizi profesyonelce yöneten helpdesk sistemleri geliştiriyoruz. Ticket yönetimi, SLA takibi ve otomatik yönlendirme özellikleriyle müşteri memnuniyetinizi artırıyoruz.</p>

<p>Helpdesk sistemi ile müşteri hizmetlerinizi optimize etmek için bizimle iletişime geçin.</p>
    `,
    date: "2025-01-05",
    author: "muharremsen",
    category: "Yazılım",
    tags: ["helpdesk", "müşteri destek", "ticket yönetimi", "SLA"],
  },
  {
    id: 4,
    slug: "kurumsal-egitim-icin-lms-sistemi-kapsamli-rehber",
    title: "Kurumsal Eğitim İçin LMS Sistemi: Kapsamlı Rehber",
    description: "Öğrenme yönetim sistemleri ile çalışanlarınızı eğitin. Kurs yönetimi, sınav sistemi ve ilerleme takibi özellikleri.",
    content: `
<h2>LMS (Öğrenme Yönetim Sistemi) Nedir?</h2>

<p>LMS, eğitim ve öğrenme süreçlerini dijitalleştiren platformlardır. Kurumsal eğitim, online kurslar ve sertifikasyon programları için kullanılır.</p>

<h2>Avantajları</h2>

<ul>
  <li>Esnek eğitim: Zaman ve mekan bağımsız öğrenme</li>
  <li>Maliyet tasarrufu: Fiziksel eğitim maliyetlerini azaltır</li>
  <li>Ölçülebilir sonuçlar: İlerleme ve başarı takibi</li>
  <li>Ölçeklenebilirlik: Sınırsız sayıda kullanıcı</li>
  <li>Merkezi yönetim: Tüm eğitim içerikleri tek platformda</li>
</ul>

<h2>Özellikler</h2>

<h3>Kurs Yönetimi</h3>
<p>LMS sistemleri, kurs oluşturma, içerik yükleme ve düzenleme özellikleri sunar. Video, doküman, quiz ve interaktif içerikler eklenebilir.</p>

<h3>Sınav Sistemi</h3>
<p>Online sınavlar oluşturup, otomatik değerlendirme yapabilirsiniz. Çoktan seçmeli, doğru/yanlış ve açık uçlu sorular desteklenir.</p>

<h3>İlerleme Takibi</h3>
<p>Öğrencilerin kurs ilerlemelerini, tamamlama oranlarını ve başarı durumlarını takip edebilirsiniz.</p>

<h2>muharremsen'in LMS Çözümleri</h2>

<p>muharremsen olarak, kurumsal eğitim ihtiyaçlarınıza özel LMS platformları geliştiriyoruz. Kurs yönetimi, sınav sistemi ve ilerleme takibi özellikleriyle eğitim süreçlerinizi dijitalleştiriyoruz.</p>

<p>LMS sistemi ile eğitim süreçlerinizi modernize etmek için bizimle iletişime geçin.</p>
    `,
    date: "2024-12-28",
    author: "muharremsen",
    category: "Eğitim",
    tags: ["LMS", "eğitim", "online kurs", "öğrenme yönetimi"],
  },
  {
    id: 5,
    slug: "iso-27001-bgys-bilgi-guvenligi-yonetim-sistemi-rehberi",
    title: "ISO 27001 BGYS: Bilgi Güvenliği Yönetim Sistemi Rehberi",
    description: "Bilgi güvenliği yönetim sistemi ile verilerinizi koruyun. ISO 27001 sertifikasyon süreci ve BGYS danışmanlık hizmetleri.",
    content: `
<h2>ISO 27001 ve BGYS Nedir?</h2>

<p>ISO 27001, bilgi güvenliği yönetim sistemi (BGYS) için uluslararası standarttır. Kuruluşların bilgi varlıklarını korumak için gerekli gereksinimleri tanımlar.</p>

<h2>BGYS'in Önemi</h2>

<p>Bilgi güvenliği yönetim sistemi, kuruluşların bilgi varlıklarını korumak için gerekli süreçleri, politikaları ve kontrolleri içerir. Siber saldırılar, veri sızıntıları ve güvenlik ihlallerine karşı koruma sağlar.</p>

<h2>ISO 27001 Sertifikasyon Süreci</h2>

<ul>
  <li>Gap analizi: Mevcut durumun değerlendirilmesi</li>
  <li>Risk değerlendirmesi: Bilgi güvenliği risklerinin belirlenmesi</li>
  <li>Politika ve prosedürler: BGYS dokümantasyonunun hazırlanması</li>
  <li>Uygulama: Güvenlik kontrollerinin hayata geçirilmesi</li>
  <li>İç denetim: Sistemin kontrol edilmesi</li>
  <li>Sertifikasyon: Bağımsız denetim ve sertifikasyon</li>
</ul>

<h2>Faydaları</h2>

<ul>
  <li>Bilgi varlıklarının korunması</li>
  <li>Yasal uyumluluk gerekliliklerinin karşılanması</li>
  <li>Müşteri güveninin artırılması</li>
  <li>Rekabet avantajı</li>
  <li>Sistemli risk yönetimi</li>
</ul>

<h2>muharremsen'in BGYS Hizmetleri</h2>

<p>muharremsen olarak, ISO 27001 BGYS danışmanlığı ve uyumluluk desteği sunuyoruz. Sertifikasyon sürecinde rehberlik ederek, bilgi güvenliği yönetim sisteminizi kurmanıza yardımcı oluyoruz.</p>

<p>ISO 27001 sertifikasyonu için bizimle iletişime geçin ve bilgi güvenliğinizi sağlayın.</p>
    `,
    date: "2024-12-20",
    author: "muharremsen",
    category: "Güvenlik",
    tags: ["ISO 27001", "BGYS", "bilgi güvenliği", "siber güvenlik"],
  },
  {
    id: 6,
    slug: "freepbx-asterisk-ile-acik-kaynak-telefon-santrali-kurulumu",
    title: "FreePBX ve Asterisk ile Açık Kaynak Telefon Santrali Kurulumu",
    description: "Açık kaynak telefon santrali çözümleri ile iletişim maliyetlerinizi düşürün. FreePBX ve Asterisk kurulumu, VoIP sistemleri hakkında bilgi edinin.",
    content: `
<h2>FreePBX ve Asterisk Nedir?</h2>

<p>FreePBX, Asterisk tabanlı açık kaynak telefon santrali yönetim sistemidir. Kurumsal iletişim ihtiyaçlarınızı karşılamak için güçlü ve esnek bir çözüm sunar.</p>

<h2>Avantajları</h2>

<ul>
  <li>Maliyet tasarrufu: Açık kaynak lisans maliyeti yok</li>
  <li>Esneklik: İhtiyaçlarınıza göre özelleştirilebilir</li>
  <li>Ölçeklenebilirlik: Küçük işletmeden büyük kuruluşa kadar</li>
  <li>Zengin özellikler: IVR, çağrı yönlendirme, sesli mesaj</li>
  <li>Entegrasyon: CRM ve diğer sistemlerle entegrasyon</li>
</ul>

<h2>VoIP Sistemleri</h2>

<p>VoIP (Voice over Internet Protocol) teknolojisi, internet üzerinden sesli iletişim sağlar. Geleneksel telefon hatlarına göre daha düşük maliyetli ve esnek bir çözümdür.</p>

<h2>FreePBX Özellikleri</h2>

<h3>Çağrı Yönlendirme</h3>
<p>Gelen çağrıları otomatik olarak doğru departmana veya kişiye yönlendirebilirsiniz. Zaman bazlı yönlendirme, yoğunluk bazlı dağıtım gibi özellikler sunar.</p>

<h3>Sesli Mesaj</h3>
<p>Çağrıya cevap verilemediğinde otomatik sesli mesaj kaydı yapar. E-posta entegrasyonu ile mesajları e-posta olarak alabilirsiniz.</p>

<h3>IVR (Interactive Voice Response)</h3>
<p>Otomatik sesli menü sistemi ile çağrıları yönlendirebilir, bilgi verebilir ve müşteri hizmetlerini optimize edebilirsiniz.</p>

<h2>Asterisk Kurulumu</h2>

<p>Asterisk, açık kaynak telefon santrali yazılımıdır. FreePBX, Asterisk'in web tabanlı yönetim arayüzüdür. Kurulum ve yapılandırma süreçleri profesyonel destek gerektirir.</p>

<h2>muharremsen'in FreePBX Hizmetleri</h2>

<p>muharremsen olarak, FreePBX ve Asterisk kurulumu, yapılandırma ve destek hizmetleri sunuyoruz. Açık kaynak telefon santrali çözümleriyle iletişim maliyetlerinizi düşürüyoruz.</p>

<p>FreePBX kurulumu için bizimle iletişime geçin ve iletişim sisteminizi modernleştirin.</p>
    `,
    date: "2024-12-15",
    author: "muharremsen",
    category: "Telekomünikasyon",
    tags: ["FreePBX", "Asterisk", "VoIP", "telefon santrali"],
  },
  {
    id: 7,
    slug: "domain-server-active-directory-kurulumu-kapsamli-rehber",
    title: "Domain Server ve Active Directory Kurulumu: Kapsamlı Rehber",
    description: "Kurumsal ağ altyapınız için domain server ve Active Directory kurulumları. Kullanıcı yönetimi, grup politikaları ve güvenlik yapılandırmaları.",
    content: `
<h2>Domain Server ve Active Directory Nedir?</h2>

<p>Domain Server ve Active Directory, kurumsal ağ altyapısının temel bileşenleridir. Kullanıcı yönetimi, kaynak erişimi ve güvenlik politikalarını merkezi olarak yönetmenizi sağlar.</p>

<h2>Active Directory'nin Önemi</h2>

<p>Active Directory, Microsoft'un dizin hizmeti sistemidir. Kurumsal ağlarda kullanıcılar, bilgisayarlar, yazıcılar ve diğer kaynakları merkezi olarak yönetmenizi sağlar.</p>

<h2>Avantajları</h2>

<ul>
  <li>Merkezi yönetim: Tüm kaynaklar tek yerden yönetilir</li>
  <li>Güvenlik: Kullanıcı kimlik doğrulama ve yetkilendirme</li>
  <li>Grup politikaları: Sistem ayarlarını merkezi olarak uygulama</li>
  <li>Ölçeklenebilirlik: Binlerce kullanıcı ve kaynağı yönetebilme</li>
  <li>Entegrasyon: Diğer Microsoft servisleriyle entegrasyon</li>
</ul>

<h2>Domain Server Kurulumu</h2>

<p>Domain Server kurulumu, Active Directory Domain Services (AD DS) rolünün yüklenmesi ve yapılandırılması sürecidir. Doğru yapılandırma, güvenlik ve performans için kritik öneme sahiptir.</p>

<h2>Kullanıcı Yönetimi</h2>

<p>Active Directory ile kullanıcı hesapları, gruplar ve organizasyon birimleri (OU) oluşturabilir, yönetebilir ve yetkilendirebilirsiniz. Merkezi kimlik doğrulama ile tüm sistemlere tek giriş (SSO) sağlayabilirsiniz.</p>

<h2>Grup Politikaları</h2>

<p>Grup Politikaları (Group Policy) ile sistem ayarlarını, güvenlik yapılandırmalarını ve uygulama ayarlarını merkezi olarak uygulayabilirsiniz. Bu sayede tüm bilgisayarlarda tutarlı yapılandırma sağlanır.</p>

<h2>Güvenlik Yapılandırmaları</h2>

<p>Active Directory güvenliği için şifre politikaları, hesap kilitleme, erişim kontrolü ve denetim kayıtları gibi özellikler kullanılır. Düzenli güvenlik güncellemeleri ve yamalar uygulanmalıdır.</p>

<h2>muharremsen'in Domain Server Hizmetleri</h2>

<p>muharremsen olarak, domain server ve Active Directory kurulumu, yapılandırma ve yönetim hizmetleri sunuyoruz. Kullanıcı yönetimi, grup politikaları ve güvenlik yapılandırmalarıyla kurumsal ağ altyapınızı güvenli hale getiriyoruz.</p>

<p>Domain Server kurulumu için bizimle iletişime geçin ve ağ altyapınızı profesyonelce yönetin.</p>
    `,
    date: "2024-12-10",
    author: "muharremsen",
    category: "Sistem Yönetimi",
    tags: ["Domain Server", "Active Directory", "ağ yönetimi", "güvenlik"],
  },
  {
    id: 8,
    slug: "gercek-zamanli-envanter-yonetimi-ile-stoklarinizi-kontrol-edin",
    title: "Gerçek Zamanlı Envanter Yönetimi ile Stoklarınızı Kontrol Edin",
    description: "Stok ve envanter takibinizi kolaylaştıran entegre sistemler. Gerçek zamanlı stok takibi, otomatik sipariş yönetimi ve raporlama özellikleri.",
    content: `
<h2>Envanter Yönetimi Nedir?</h2>

<p>Envanter yönetimi, stok seviyelerini takip etme, sipariş verme ve stok maliyetlerini optimize etme sürecidir. Modern envanter yönetim sistemleri, gerçek zamanlı takip ve otomasyon özellikleri sunar.</p>

<h2>Gerçek Zamanlı Stok Takibi</h2>

<p>Gerçek zamanlı stok takibi, anlık stok seviyelerini görüntülemenizi sağlar. Satış, alış ve transfer işlemleri anında stok seviyelerine yansır. Bu sayede stok fazlası veya eksikliği önlenir.</p>

<h2>Avantajları</h2>

<ul>
  <li>Stok seviyesi optimizasyonu: Doğru miktarda stok bulundurma</li>
  <li>Maliyet tasarrufu: Stok fazlası ve eksikliği önleme</li>
  <li>Otomatik sipariş: Minimum stok seviyesinde otomatik sipariş</li>
  <li>Raporlama: Detaylı stok raporları ve analizler</li>
  <li>Entegrasyon: Satış, muhasebe ve tedarikçi sistemleriyle entegrasyon</li>
</ul>

<h2>Otomatik Sipariş Yönetimi</h2>

<p>Envanter yönetim sistemleri, minimum stok seviyesine ulaşıldığında otomatik olarak sipariş oluşturabilir. Tedarikçi entegrasyonu ile siparişler otomatik olarak iletilir.</p>

<h2>Stok Raporlama</h2>

<p>Detaylı stok raporları ile stok hareketlerini, en çok satan ürünleri, yavaş hareket eden stokları ve stok değerini analiz edebilirsiniz. Bu raporlar karar verme süreçlerinizi destekler.</p>

<h2>Çok Depo Yönetimi</h2>

<p>Birden fazla depo veya lokasyonunuz varsa, merkezi envanter yönetimi ile tüm stokları tek sistemden yönetebilirsiniz. Depolar arası transfer işlemleri kolayca yapılabilir.</h2>

<h2>Barkod ve QR Kod Desteği</h2>

<p>Barkod ve QR kod okutma ile stok giriş-çıkış işlemleri hızlanır ve hata oranı azalır. Mobil cihazlarla stok sayımı yapılabilir.</p>

<h2>muharremsen'in Envanter Yönetim Çözümleri</h2>

<p>muharremsen olarak, stok ve envanter takibinizi kolaylaştıran entegre sistemler geliştiriyoruz. Gerçek zamanlı stok takibi, otomatik sipariş yönetimi ve raporlama özellikleriyle envanter süreçlerinizi optimize ediyoruz.</p>

<p>Envanter yönetim sistemi için bizimle iletişime geçin ve stoklarınızı profesyonelce yönetin.</p>
    `,
    date: "2024-12-05",
    author: "muharremsen",
    category: "Yazılım",
    tags: ["envanter yönetimi", "stok takibi", "depo yönetimi", "inventory"],
  },
  {
    id: 9,
    slug: "freepbx-kurulum-rehberi-adim-adim-kurulum-ve-yapilandirma",
    title: "FreePBX Kurulum Rehberi: Adım Adım Kurulum ve Yapılandırma",
    description: "FreePBX telefon santrali kurulumu için kapsamlı rehber. Sistem gereksinimleri, kurulum adımları, temel yapılandırma ve güvenlik ayarları hakkında detaylı bilgi.",
    content: `
<h2>FreePBX Kurulum Rehberi: Başlangıç</h2>

<p>FreePBX, açık kaynak telefon santrali yönetim sistemidir ve Asterisk tabanlıdır. Bu rehber, FreePBX kurulumunu adım adım anlatmaktadır. Kurulum sürecini tamamladıktan sonra, profesyonel bir telefon santrali sistemine sahip olacaksınız.</p>

<h2>Sistem Gereksinimleri</h2>

<p>FreePBX kurulumu için minimum sistem gereksinimleri:</p>

<ul>
  <li><strong>İşlemci:</strong> 2 çekirdek veya daha fazla (önerilen: 4 çekirdek)</li>
  <li><strong>RAM:</strong> Minimum 2GB (önerilen: 4GB veya daha fazla)</li>
  <li><strong>Disk Alanı:</strong> Minimum 20GB boş alan (önerilen: 50GB+)</li>
  <li><strong>İşletim Sistemi:</strong> CentOS 7/8, RHEL 7/8, veya FreePBX Distro</li>
  <li><strong>Ağ:</strong> Statik IP adresi ve sabit internet bağlantısı</li>
</ul>

<h2>Kurulum Yöntemleri</h2>

<h3>Yöntem 1: FreePBX Distro (Önerilen)</h3>

<p>FreePBX Distro, FreePBX ve Asterisk'in önceden yapılandırılmış bir Linux dağıtımıdır. En kolay ve önerilen kurulum yöntemidir.</p>

<h4>Adım 1: ISO İndirme</h4>
<p>FreePBX resmi web sitesinden en son FreePBX Distro ISO dosyasını indirin. ISO dosyasını bir USB belleğe veya DVD'ye yazdırın.</p>

<h4>Adım 2: Boot ve Kurulum</h4>
<p>Sunucunuzu ISO'dan başlatın. Kurulum sihirbazı sizi yönlendirecektir. Dil seçimi, zaman dilimi, disk bölümleme ve root şifresi ayarlarını yapın.</p>

<h4>Adım 3: İlk Yapılandırma</h4>
<p>Kurulum tamamlandıktan sonra, sunucu yeniden başlatılır. Web arayüzüne erişmek için tarayıcınızdan sunucunun IP adresine gidin.</p>

<h3>Yöntem 2: Mevcut Linux Sistemine Kurulum</h3>

<p>Mevcut bir CentOS veya RHEL sisteminiz varsa, FreePBX'i üzerine kurabilirsiniz. Bu yöntem daha fazla teknik bilgi gerektirir.</p>

<h2>İlk Kurulum ve Web Arayüzü</h2>

<h3>Admin Paneline Erişim</h3>
<p>Kurulum tamamlandıktan sonra, tarayıcınızdan şu adrese gidin:</p>
<p><code>https://[SUNUCU-IP-ADRESI]</code></p>

<p>İlk girişte, admin kullanıcı adı ve şifresi istenir. Varsayılan kullanıcı adı genellikle <strong>admin</strong>'dir. İlk girişte şifre değiştirmeniz istenecektir.</p>

<h3>FreePBX Admin Panel Özellikleri</h3>
<ul>
  <li><strong>Dashboard:</strong> Sistem durumu, aktif çağrılar ve istatistikler</li>
  <li><strong>Applications:</strong> Uygulama yönetimi ve modül kurulumu</li>
  <li><strong>Admin:</strong> Kullanıcı yönetimi ve sistem ayarları</li>
  <li><strong>Settings:</strong> Genel sistem yapılandırmaları</li>
</ul>

<h2>Temel Yapılandırma Adımları</h2>

<h3>1. Sistem Bilgilerini Yapılandırma</h3>
<p><strong>Settings → Asterisk SIP Settings</strong> menüsünden SIP ayarlarını yapılandırın. SIP port (varsayılan: 5060), RTP port aralığı ve güvenlik ayarlarını belirleyin.</p>

<h3>2. Extension (Dahili) Oluşturma</h3>
<p><strong>Applications → Extensions</strong> menüsünden dahili numaralar oluşturun. Her kullanıcı veya departman için extension oluşturabilirsiniz. Extension numarası, Display Name, Secret (şifre) ve Email adresi gibi bilgileri girin.</p>

<h3>3. Trunk (Hat) Yapılandırma</h3>
<p>Dış hat bağlantıları için trunk oluşturun. VoIP sağlayıcınızın bilgilerini (SIP server, kullanıcı adı, şifre) girerek dış hat bağlantısını yapılandırın.</p>

<h3>4. Outbound Routes (Giden Yönlendirme)</h3>
<p>Dışarıya yapılan çağrıların hangi trunk üzerinden gideceğini belirleyin. Farklı trunk'lar için farklı route'lar oluşturabilirsiniz.</p>

<h3>5. Inbound Routes (Gelen Yönlendirme)</h3>
<p>Gelen çağrıların hangi extension'a veya menüye yönlendirileceğini belirleyin. DID (Direct Inward Dialing) numaralarını yapılandırın.</p>

<h2>Güvenlik Yapılandırmaları</h2>

<h3>Firewall Ayarları</h3>
<p>FreePBX sunucusunu güvenli hale getirmek için firewall kurallarını yapılandırın. Sadece gerekli portları açın:</p>
<ul>
  <li><strong>80/443:</strong> Web arayüzü (HTTPS önerilir)</li>
  <li><strong>5060:</strong> SIP protokolü</li>
  <li><strong>10000-20000:</strong> RTP port aralığı (ses verisi)</li>
</ul>

<h3>Fail2Ban Kurulumu</h3>
<p>Brute force saldırılarına karşı koruma için Fail2Ban kurun ve yapılandırın. FreePBX modülü olarak Fail2Ban'ı etkinleştirebilirsiniz.</p>

<h3>SSL Sertifikası</h3>
<p>Web arayüzü için SSL sertifikası kurun. Let's Encrypt ücretsiz SSL sertifikası kullanabilirsiniz. <strong>Admin → Certificate Management</strong> menüsünden sertifika oluşturun.</p>

<h2>IVR (Interactive Voice Response) Yapılandırması</h2>

<p>IVR, otomatik sesli menü sistemidir. Gelen çağrıları menü seçeneklerine göre yönlendirebilirsiniz.</p>

<h3>IVR Oluşturma</h3>
<ol>
  <li><strong>Applications → IVR</strong> menüsüne gidin</li>
  <li>Yeni IVR oluşturun ve isim verin</li>
  <li>Menü seçeneklerini tanımlayın (1 için Satış, 2 için Destek, vb.)</li>
  <li>Her seçenek için yönlendirme hedefini belirleyin</li>
  <li>Zaman aşımı ve varsayılan yönlendirmeyi ayarlayın</li>
</ol>

<h2>Queue (Kuyruk) Yapılandırması</h2>

<p>Queue sistemi, çağrıları birden fazla agent arasında dağıtır. Müşteri hizmetleri için idealdir.</p>

<h3>Queue Oluşturma</h3>
<ol>
  <li><strong>Applications → Queues</strong> menüsüne gidin</li>
  <li>Yeni queue oluşturun</li>
  <li>Queue üyelerini (agent'ları) ekleyin</li>
  <li>Ring strategy (zil stratejisi) seçin (ringall, leastrecent, vb.)</li>
  <li>Müzik on hold ve timeout ayarlarını yapın</li>
</ol>

<h2>VoIP Telefon Yapılandırması</h2>

<h3>SIP Telefon Ayarları</h3>
<p>VoIP telefonlarınızı FreePBX'e bağlamak için:</p>
<ol>
  <li>Telefonun ağ ayarlarından SIP sunucu adresini girin (FreePBX IP adresi)</li>
  <li>Extension numarası ve şifresini girin</li>
  <li>Codec ayarlarını yapılandırın (G.711, G.729, vb.)</li>
  <li>Telefonu kaydedin ve test edin</li>
</ol>

<h2>Yedekleme ve Bakım</h2>

<h3>Otomatik Yedekleme</h3>
<p>FreePBX'te otomatik yedekleme özelliği vardır. <strong>Admin → Backup & Restore</strong> menüsünden yedekleme zamanlaması yapabilirsiniz. Yedeklemeleri düzenli olarak harici bir depolama alanına kopyalayın.</p>

<h3>Sistem Güncellemeleri</h3>
<p>FreePBX ve modüllerini düzenli olarak güncelleyin. <strong>Admin → Module Admin</strong> menüsünden güncellemeleri kontrol edin ve uygulayın.</p>

<h2>Yaygın Sorunlar ve Çözümleri</h2>

<h3>Çağrı Yapılamıyor</h3>
<ul>
  <li>Firewall ayarlarını kontrol edin</li>
  <li>SIP trunk yapılandırmasını doğrulayın</li>
  <li>Extension şifrelerini kontrol edin</li>
  <li>Asterisk log dosyalarını inceleyin</li>
</ul>

<h3>Ses Kalitesi Sorunları</h3>
<ul>
  <li>RTP port aralığının açık olduğundan emin olun</li>
  <li>Codec ayarlarını optimize edin</li>
  <li>Ağ bant genişliğini kontrol edin</li>
  <li>Jitter buffer ayarlarını yapılandırın</li>
</ul>

<h2>muharremsen'in FreePBX Hizmetleri</h2>

<p>muharremsen olarak, FreePBX kurulumu, yapılandırma ve destek hizmetleri sunuyoruz. Açık kaynak telefon santrali çözümleriyle iletişim maliyetlerinizi düşürüyoruz.</p>

<p>FreePBX kurulumu ve yapılandırması için profesyonel destek almak isterseniz, bizimle iletişime geçin. Deneyimli ekibimiz, telefon santrali sisteminizi en iyi şekilde yapılandırarak işletmenizin iletişim ihtiyaçlarını karşılamanıza yardımcı olur.</p>

<p>FreePBX kurulumu, Asterisk yapılandırması, VoIP entegrasyonu ve sürekli destek hizmetleri için muharremsen ile çalışın.</p>
    `,
    date: new Date().toISOString().split('T')[0],
    author: "muharremsen",
    category: "Telekomünikasyon",
    tags: ["FreePBX", "Asterisk", "VoIP", "telefon santrali", "kurulum", "yapılandırma"],
  },
  {
    id: 10,
    slug: "freepbx-connect-asterisk-hizmetleri-kurulum-ve-yapilandirma",
    title: "FreePBX Connect Asterisk Hizmetleri: Kurulum ve Yapılandırma Rehberi",
    description: "FreePBX Connect ile Asterisk telefon santrali kurulumu. VoIP sistemleri, trunk yapılandırması, extension oluşturma ve profesyonel telefon santrali hizmetleri hakkında detaylı bilgi.",
    content: `
<h2>FreePBX Connect ve Asterisk Nedir?</h2>

<p>FreePBX Connect, açık kaynak telefon santrali yönetim sistemidir ve Asterisk tabanlıdır. Kurumsal iletişim ihtiyaçlarınızı karşılamak için güçlü, esnek ve maliyet etkin bir çözüm sunar. Bu rehber, FreePBX Connect Asterisk hizmetlerinin kurulumu ve yapılandırması hakkında kapsamlı bilgi içermektedir.</p>

<h2>FreePBX Connect'in Avantajları</h2>

<ul>
  <li><strong>Maliyet Tasarrufu:</strong> Açık kaynak lisans maliyeti yok, sadece donanım ve destek maliyeti</li>
  <li><strong>Esneklik:</strong> İhtiyaçlarınıza göre tam özelleştirilebilir yapı</li>
  <li><strong>Ölçeklenebilirlik:</strong> Küçük işletmeden büyük kuruluşa kadar her ölçekte kullanılabilir</li>
  <li><strong>Zengin Özellikler:</strong> IVR, çağrı yönlendirme, sesli mesaj, queue sistemi, konferans</li>
  <li><strong>Entegrasyon:</strong> CRM, helpdesk ve diğer iş uygulamalarıyla entegrasyon imkanı</li>
  <li><strong>Güvenlik:</strong> Gelişmiş güvenlik özellikleri ve şifreleme desteği</li>
</ul>

<h2>Sistem Gereksinimleri</h2>

<h3>Donanım Gereksinimleri</h3>
<ul>
  <li><strong>İşlemci:</strong> 2 çekirdek (önerilen: 4+ çekirdek)</li>
  <li><strong>RAM:</strong> Minimum 2GB (önerilen: 4GB+)</li>
  <li><strong>Disk:</strong> Minimum 20GB boş alan (önerilen: 50GB+ SSD)</li>
  <li><strong>Ağ:</strong> Statik IP adresi, sabit internet bağlantısı (minimum 1 Mbps upload)</li>
</ul>

<h3>Yazılım Gereksinimleri</h3>
<ul>
  <li><strong>İşletim Sistemi:</strong> FreePBX Distro, CentOS 7/8, RHEL 7/8</li>
  <li><strong>Asterisk:</strong> 16.x veya üzeri (FreePBX ile birlikte gelir)</li>
  <li><strong>FreePBX:</strong> 15.x veya üzeri</li>
</ul>

<h2>FreePBX Connect Kurulum Adımları</h2>

<h3>Adım 1: FreePBX Distro Kurulumu</h3>

<p>FreePBX Distro, FreePBX ve Asterisk'in önceden yapılandırılmış bir Linux dağıtımıdır. En kolay kurulum yöntemidir.</p>

<ol>
  <li><strong>ISO İndirme:</strong> FreePBX resmi web sitesinden en son FreePBX Distro ISO dosyasını indirin</li>
  <li><strong>Boot:</strong> Sunucunuzu ISO'dan başlatın</li>
  <li><strong>Kurulum:</strong> Kurulum sihirbazını takip edin:
    <ul>
      <li>Dil seçimi</li>
      <li>Zaman dilimi ayarı</li>
      <li>Disk bölümleme</li>
      <li>Root şifresi belirleme</li>
      <li>Ağ yapılandırması (statik IP önerilir)</li>
    </ul>
  </li>
  <li><strong>İlk Başlatma:</strong> Kurulum tamamlandıktan sonra sunucu yeniden başlatılır</li>
</ol>

<h3>Adım 2: Web Arayüzüne Erişim</h3>

<p>Kurulum tamamlandıktan sonra, tarayıcınızdan şu adrese gidin:</p>
<p><code>https://[SUNUCU-IP-ADRESI]</code></p>

<p>İlk girişte admin kullanıcı adı ve şifresi istenir. Varsayılan kullanıcı adı genellikle <strong>admin</strong>'dir. İlk girişte şifre değiştirmeniz istenecektir.</p>

<h3>Adım 3: Temel Sistem Yapılandırması</h3>

<h4>3.1. SIP Ayarları</h4>
<p><strong>Settings → Asterisk SIP Settings</strong> menüsünden:</p>
<ul>
  <li>SIP port: 5060 (varsayılan)</li>
  <li>RTP port aralığı: 10000-20000</li>
  <li>Codec ayarları: G.711 (ulaw/alaw), G.729, Opus</li>
  <li>NAT ayarları: Firewall arkasındaysanız NAT modunu etkinleştirin</li>
</ul>

<h4>3.2. Sistem Bilgileri</h4>
<p><strong>Admin → System Admin</strong> menüsünden:</p>
<ul>
  <li>Şirket adı ve bilgileri</li>
  <li>E-posta ayarları</li>
  <li>Zaman dilimi</li>
  <li>Dil ayarları</li>
</ul>

<h2>Extension (Dahili) Oluşturma</h2>

<h3>Extension Yapılandırması</h3>

<ol>
  <li><strong>Applications → Extensions</strong> menüsüne gidin</li>
  <li><strong>Add Extension</strong> butonuna tıklayın</li>
  <li>Extension türünü seçin (SIP Extension önerilir)</li>
  <li>Extension bilgilerini girin:
    <ul>
      <li><strong>User Extension:</strong> Dahili numara (örn: 1001)</li>
      <li><strong>Display Name:</strong> Kullanıcı adı</li>
      <li><strong>Secret:</strong> SIP şifresi (güçlü bir şifre kullanın)</li>
      <li><strong>Email Address:</strong> Sesli mesaj için e-posta</li>
    </ul>
  </li>
  <li><strong>Submit</strong> ve <strong>Apply Config</strong> butonlarına tıklayın</li>
</ol>

<h3>VoIP Telefon Yapılandırması</h3>

<p>VoIP telefonlarınızı FreePBX'e bağlamak için:</p>
<ol>
  <li>Telefonun ağ ayarlarına gidin</li>
  <li>SIP sunucu adresini girin (FreePBX IP adresi)</li>
  <li>Extension numarası ve şifresini girin</li>
  <li>Codec ayarlarını yapılandırın (G.711 önerilir)</li>
  <li>Telefonu kaydedin ve test edin</li>
</ol>

<h2>Trunk (Hat) Yapılandırması</h2>

<h3>SIP Trunk Oluşturma</h3>

<p>Dış hat bağlantıları için trunk oluşturun:</p>

<ol>
  <li><strong>Connectivity → Trunks</strong> menüsüne gidin</li>
  <li><strong>Add Trunk</strong> butonuna tıklayın</li>
  <li>Trunk türünü seçin (SIP Trunk önerilir)</li>
  <li>VoIP sağlayıcınızın bilgilerini girin:
    <ul>
      <li><strong>Trunk Name:</strong> Trunk ismi (örn: VoIP-Provider)</li>
      <li><strong>Outbound CallerID:</strong> Görünen numara</li>
      <li><strong>PEER Details:</strong> VoIP sağlayıcınızın SIP sunucu bilgileri</li>
      <li><strong>USER Context:</strong> Kullanıcı adı ve şifre</li>
    </ul>
  </li>
  <li><strong>Submit</strong> ve <strong>Apply Config</strong> butonlarına tıklayın</li>
</ol>

<h3>Trunk Test Etme</h3>

<p>Trunk'ı test etmek için:</p>
<ul>
  <li>Asterisk CLI'de: <code>sip show peers</code> komutu ile trunk durumunu kontrol edin</li>
  <li>Test çağrısı yaparak bağlantıyı doğrulayın</li>
</ul>

<h2>Outbound Routes (Giden Yönlendirme)</h2>

<h3>Giden Yönlendirme Yapılandırması</h3>

<ol>
  <li><strong>Connectivity → Outbound Routes</strong> menüsüne gidin</li>
  <li><strong>Add Route</strong> butonuna tıklayın</li>
  <li>Route bilgilerini girin:
    <ul>
      <li><strong>Route Name:</strong> Yönlendirme ismi</li>
      <li><strong>Dial Patterns:</strong> Çağrı desenleri (örn: 9. X. - dış hat için 9 tuşu)</li>
      <li><strong>Trunk Sequence:</strong> Kullanılacak trunk'ları seçin</li>
    </ul>
  </li>
  <li><strong>Submit</strong> ve <strong>Apply Config</strong> butonlarına tıklayın</li>
</ol>

<h2>Inbound Routes (Gelen Yönlendirme)</h2>

<h3>Gelen Yönlendirme Yapılandırması</h3>

<ol>
  <li><strong>Connectivity → Inbound Routes</strong> menüsüne gidin</li>
  <li><strong>Add Inbound Route</strong> butonuna tıklayın</li>
  <li>Route bilgilerini girin:
    <ul>
      <li><strong>Description:</strong> Açıklama</li>
      <li><strong>DID Number:</strong> Gelen numara (boş bırakılırsa tüm numaralar)</li>
      <li><strong>Destination:</strong> Yönlendirme hedefi (Extension, IVR, Queue, vb.)</li>
    </ul>
  </li>
  <li><strong>Submit</strong> ve <strong>Apply Config</strong> butonlarına tıklayın</li>
</ol>

<h2>IVR (Interactive Voice Response) Yapılandırması</h2>

<h3>IVR Oluşturma</h3>

<p>IVR, otomatik sesli menü sistemidir. Gelen çağrıları menü seçeneklerine göre yönlendirebilirsiniz.</p>

<ol>
  <li><strong>Applications → IVR</strong> menüsüne gidin</li>
  <li><strong>Add IVR</strong> butonuna tıklayın</li>
  <li>IVR bilgilerini girin:
    <ul>
      <li><strong>IVR Name:</strong> IVR ismi</li>
      <li><strong>Announcement:</strong> Hoş geldiniz mesajı (ses dosyası)</li>
      <li><strong>Menu Options:</strong> Menü seçeneklerini tanımlayın:
        <ul>
          <li>1 → Satış departmanı</li>
          <li>2 → Destek departmanı</li>
          <li>3 → Muhasebe</li>
          <li>0 → Operatör</li>
        </ul>
      </li>
      <li><strong>Timeout:</strong> Zaman aşımı süresi (saniye)</li>
      <li><strong>Invalid Entry:</strong> Geçersiz giriş için yönlendirme</li>
    </ul>
  </li>
  <li><strong>Submit</strong> ve <strong>Apply Config</strong> butonlarına tıklayın</li>
</ol>

<h2>Queue (Kuyruk) Yapılandırması</h2>

<h3>Queue Oluşturma</h3>

<p>Queue sistemi, çağrıları birden fazla agent arasında dağıtır. Müşteri hizmetleri için idealdir.</p>

<ol>
  <li><strong>Applications → Queues</strong> menüsüne gidin</li>
  <li><strong>Add Queue</strong> butonuna tıklayın</li>
  <li>Queue bilgilerini girin:
    <ul>
      <li><strong>Queue Number:</strong> Queue numarası</li>
      <li><strong>Queue Name:</strong> Queue ismi</li>
      <li><strong>Queue Members:</strong> Agent'ları ekleyin (Extensions)</li>
      <li><strong>Ring Strategy:</strong> Zil stratejisi:
        <ul>
          <li><strong>ringall:</strong> Tüm agent'lara aynı anda çalar</li>
          <li><strong>leastrecent:</strong> En az son çağrı alan agent'a çalar</li>
          <li><strong>fewestcalls:</strong> En az çağrı alan agent'a çalar</li>
        </ul>
      </li>
      <li><strong>Music on Hold:</strong> Bekleme müziği</li>
      <li><strong>Timeout:</strong> Maksimum bekleme süresi</li>
    </ul>
  </li>
  <li><strong>Submit</strong> ve <strong>Apply Config</strong> butonlarına tıklayın</li>
</ol>

<h2>Güvenlik Yapılandırmaları</h2>

<h3>Firewall Ayarları</h3>

<p>FreePBX sunucusunu güvenli hale getirmek için firewall kurallarını yapılandırın:</p>

<ul>
  <li><strong>Port 80/443:</strong> Web arayüzü (HTTPS önerilir)</li>
  <li><strong>Port 5060:</strong> SIP protokolü</li>
  <li><strong>Port 10000-20000:</strong> RTP port aralığı (ses verisi)</li>
  <li><strong>SSH (22):</strong> Sadece güvenilir IP'lerden erişime izin verin</li>
</ul>

<h3>Fail2Ban Kurulumu</h3>

<p>Brute force saldırılarına karşı koruma için Fail2Ban kurun:</p>

<ol>
  <li><strong>Admin → Module Admin</strong> menüsüne gidin</li>
  <li>Fail2Ban modülünü arayın ve kurun</li>
  <li><strong>Settings → Advanced → Fail2Ban</strong> menüsünden yapılandırın</li>
  <li>IP ban süresi ve deneme sayısını ayarlayın</li>
</ol>

<h3>SSL Sertifikası</h3>

<p>Web arayüzü için SSL sertifikası kurun:</p>

<ol>
  <li><strong>Admin → Certificate Management</strong> menüsüne gidin</li>
  <li>Let's Encrypt sertifikası oluşturun (ücretsiz)</li>
  <li>Domain adresinizi girin ve sertifikayı oluşturun</li>
  <li>HTTPS erişimini zorunlu hale getirin</li>
</ol>

<h2>Yedekleme ve Bakım</h2>

<h3>Otomatik Yedekleme</h3>

<p>FreePBX'te otomatik yedekleme özelliği vardır:</p>

<ol>
  <li><strong>Admin → Backup & Restore</strong> menüsüne gidin</li>
  <li><strong>Backup Settings</strong> bölümünden yedekleme zamanlaması yapın</li>
  <li>Yedekleme sıklığını belirleyin (günlük, haftalık)</li>
  <li>Yedeklemeleri harici bir depolama alanına kopyalayın</li>
</ol>

<h3>Sistem Güncellemeleri</h3>

<p>FreePBX ve modüllerini düzenli olarak güncelleyin:</p>

<ul>
  <li><strong>Admin → Module Admin</strong> menüsünden güncellemeleri kontrol edin</li>
  <li>Yedekleme yaptıktan sonra güncellemeleri uygulayın</li>
  <li>Asterisk ve FreePBX sürümlerini takip edin</li>
</ol>

<h2>Yaygın Sorunlar ve Çözümleri</h2>

<h3>Çağrı Yapılamıyor</h3>
<ul>
  <li>Firewall ayarlarını kontrol edin (port 5060 açık mı?)</li>
  <li>SIP trunk yapılandırmasını doğrulayın</li>
  <li>Extension şifrelerini kontrol edin</li>
  <li>Asterisk log dosyalarını inceleyin: <code>asterisk -rvvv</code></li>
</ul>

<h3>Ses Kalitesi Sorunları</h3>
<ul>
  <li>RTP port aralığının açık olduğundan emin olun</li>
  <li>Codec ayarlarını optimize edin (G.711 önerilir)</li>
  <li>Ağ bant genişliğini kontrol edin (her çağrı için ~100 Kbps)</li>
  <li>Jitter buffer ayarlarını yapılandırın</li>
</ul>

<h3>NAT Sorunları</h3>
<ul>
  <li>Firewall arkasındaysanız NAT modunu etkinleştirin</li>
  <li>External IP adresini doğru yapılandırın</li>
  <li>STUN server kullanmayı düşünün</li>
</ul>

<h2>muharremsen'in FreePBX Connect Hizmetleri</h2>

<p>muharremsen olarak, FreePBX Connect Asterisk kurulumu, yapılandırma ve destek hizmetleri sunuyoruz. Açık kaynak telefon santrali çözümleriyle iletişim maliyetlerinizi düşürüyoruz.</p>

<p>Profesyonel FreePBX kurulumu, Asterisk yapılandırması, VoIP entegrasyonu ve 7/24 destek hizmetleri için bizimle iletişime geçin. Deneyimli ekibimiz, telefon santrali sisteminizi en iyi şekilde yapılandırarak işletmenizin iletişim ihtiyaçlarını karşılamanıza yardımcı olur.</p>

<p>FreePBX Connect kurulumu, trunk yapılandırması, IVR ve Queue sistemleri, güvenlik yapılandırmaları ve sürekli destek hizmetleri için muharremsen ile çalışın.</p>
    `,
    date: new Date().toISOString().split('T')[0],
    author: "muharremsen",
    category: "Telekomünikasyon",
    tags: ["FreePBX", "Asterisk", "VoIP", "telefon santrali", "kurulum", "Connect", "trunk"],
  },
  {
    id: 11,
    slug: "domain-server-kurulum-rehberi-active-directory-yapilandirma",
    title: "Domain Server Kurulum Rehberi: Active Directory Yapılandırma",
    description: "Windows Server Domain Controller kurulumu ve Active Directory yapılandırması. Kullanıcı yönetimi, grup politikaları, DNS yapılandırması ve güvenlik ayarları hakkında detaylı bilgi.",
    content: `
<h2>Domain Server ve Active Directory Nedir?</h2>

<p>Domain Server ve Active Directory, kurumsal ağ altyapısının temel bileşenleridir. Windows Server üzerinde Domain Controller kurulumu ile merkezi kullanıcı yönetimi, kaynak erişimi ve güvenlik politikalarını yönetebilirsiniz. Bu rehber, Domain Server kurulumu ve Active Directory yapılandırması hakkında kapsamlı bilgi içermektedir.</p>

<h2>Active Directory'nin Avantajları</h2>

<ul>
  <li><strong>Merkezi Yönetim:</strong> Tüm kullanıcılar, bilgisayarlar ve kaynaklar tek yerden yönetilir</li>
  <li><strong>Güvenlik:</strong> Merkezi kimlik doğrulama ve yetkilendirme</li>
  <li><strong>Grup Politikaları:</strong> Sistem ayarlarını merkezi olarak uygulama</li>
  <li><strong>Ölçeklenebilirlik:</strong> Binlerce kullanıcı ve kaynağı yönetebilme</li>
  <li><strong>Entegrasyon:</strong> Microsoft servisleriyle tam entegrasyon</li>
  <li><strong>Yedekleme ve Geri Yükleme:</strong> Merkezi yedekleme ve kurtarma</li>
</ul>

<h2>Sistem Gereksinimleri</h2>

<h3>Donanım Gereksinimleri</h3>
<ul>
  <li><strong>İşlemci:</strong> 1.4 GHz 64-bit (önerilen: 2+ GHz, 2+ çekirdek)</li>
  <li><strong>RAM:</strong> Minimum 2GB (önerilen: 4GB+)</li>
  <li><strong>Disk:</strong> Minimum 32GB boş alan (önerilen: 100GB+ SSD)</li>
  <li><strong>Ağ:</strong> Statik IP adresi, sabit internet bağlantısı</li>
</ul>

<h3>Yazılım Gereksinimleri</h3>
<ul>
  <li><strong>İşletim Sistemi:</strong> Windows Server 2016/2019/2022</li>
  <li><strong>Lisans:</strong> Windows Server lisansı (CAL - Client Access License gerekli)</li>
  <li><strong>DNS:</strong> DNS servisi (Active Directory ile birlikte kurulur)</li>
</ul>

<h2>Domain Server Kurulum Adımları</h2>

<h3>Adım 1: Windows Server Kurulumu</h3>

<ol>
  <li>Windows Server ISO dosyasını indirin</li>
  <li>Sunucuya Windows Server'ı kurun</li>
  <li>İlk kurulum sırasında:
    <ul>
      <li>Dil, saat ve klavye ayarlarını yapın</li>
      <li>Lisans anlaşmasını kabul edin</li>
      <li>Disk bölümleme yapın</li>
      <li>Administrator şifresi belirleyin</li>
    </ul>
  </li>
  <li>Sunucuyu yeniden başlatın</li>
</ol>

<h3>Adım 2: Ağ Yapılandırması</h3>

<p>Domain Controller olmadan önce ağ ayarlarını yapılandırın:</p>

<ol>
  <li><strong>Network Settings</strong> açın</li>
  <li>Statik IP adresi atayın (örnek: 192.168.1.10)</li>
  <li>Subnet mask: 255.255.255.0</li>
  <li>Default gateway: Router IP adresi</li>
  <li>DNS sunucu: Kendi IP adresiniz (şimdilik 127.0.0.1 veya boş bırakın, AD kurulumu sonrası otomatik ayarlanır)</li>
</ol>

<h3>Adım 3: Active Directory Domain Services (AD DS) Rolünü Yükleme</h3>

<ol>
  <li><strong>Server Manager</strong> açın</li>
  <li><strong>Add Roles and Features</strong> tıklayın</li>
  <li>Wizard'ı takip edin:
    <ul>
      <li><strong>Installation Type:</strong> Role-based or feature-based installation</li>
      <li><strong>Server Selection:</strong> Mevcut sunucuyu seçin</li>
      <li><strong>Server Roles:</strong> <strong>Active Directory Domain Services</strong> seçin</li>
      <li>Gerekli özellikler otomatik eklenir (DNS, Group Policy Management, vb.)</li>
      <li><strong>Features:</strong> Ek özellik eklemeye gerek yok</li>
      <li><strong>Confirmation:</strong> Kurulumu başlatın</li>
    </ul>
  </li>
  <li>Kurulum tamamlandıktan sonra <strong>Close</strong> tıklayın</li>
</ol>

<h3>Adım 4: Domain Controller'a Yükseltme</h3>

<ol>
  <li>Server Manager'da <strong>AD DS</strong> uyarısına tıklayın</li>
  <li><strong>Promote this server to a domain controller</strong> seçeneğini seçin</li>
  <li><strong>Deployment Configuration</strong> bölümünde:
    <ul>
      <li><strong>Add a new forest</strong> seçin (ilk domain controller için)</li>
      <li><strong>Root domain name:</strong> Domain adınızı girin (örn: muharremsen.local)</li>
    </ul>
  </li>
  <li><strong>Domain Controller Options</strong> bölümünde:
    <ul>
      <li><strong>Domain functional level:</strong> Windows Server 2016 veya üzeri (önerilir)</li>
      <li><strong>Forest functional level:</strong> Windows Server 2016 veya üzeri</li>
      <li><strong>DSRM Password:</strong> Directory Services Restore Mode şifresi (güçlü bir şifre)</li>
      <li><strong>DNS Options:</strong> DNS server'ı otomatik kurulur</li>
    </ul>
  </li>
  <li><strong>Additional Options</strong> bölümünde NetBIOS adını kontrol edin</li>
  <li><strong>Paths</strong> bölümünde:
    <ul>
      <li>Database, Log files ve SYSVOL klasör konumlarını belirleyin (varsayılan genellikle uygundur)</li>
    </ul>
  </li>
  <li><strong>Review Options</strong> bölümünde ayarları kontrol edin</li>
  <li><strong>Prerequisites Check</strong> bölümünde tüm kontrollerin geçtiğinden emin olun</li>
  <li><strong>Install</strong> butonuna tıklayın</li>
  <li>Kurulum tamamlandıktan sonra sunucu otomatik olarak yeniden başlatılır</li>
</ol>

<h2>DNS Yapılandırması</h2>

<h3>DNS Servisinin Doğrulanması</h3>

<p>Active Directory kurulumu sırasında DNS servisi otomatik olarak kurulur. DNS yapılandırmasını kontrol edin:</p>

<ol>
  <li><strong>Server Manager → Tools → DNS</strong> açın</li>
  <li>Forward Lookup Zones altında domain adınızı görmelisiniz</li>
  <li>Reverse Lookup Zones kontrol edin</li>
  <li>SRV kayıtlarının oluşturulduğunu doğrulayın</li>
</ol>

<h3>DNS Ayarlarını Güncelleme</h3>

<p>Sunucunun kendi DNS ayarlarını güncelleyin:</p>

<ol>
  <li><strong>Network Settings</strong> açın</li>
  <li>DNS sunucu adresini kendi IP adresiniz olarak ayarlayın (127.0.0.1 veya kendi IP)</li>
  <li>Alternatif DNS sunucu olarak 8.8.8.8 (Google DNS) ekleyebilirsiniz</li>
</ol>

<h2>Kullanıcı Yönetimi</h2>

<h3>Organizational Unit (OU) Oluşturma</h3>

<p>Kullanıcıları organize etmek için OU'lar oluşturun:</p>

<ol>
  <li><strong>Server Manager → Tools → Active Directory Users and Computers</strong> açın</li>
  <li>Domain adınıza sağ tıklayın</li>
  <li><strong>New → Organizational Unit</strong> seçin</li>
  <li>OU adını girin (örn: Users, Computers, Servers)</li>
  <li><strong>OK</strong> tıklayın</li>
</ol>

<h3>Kullanıcı Hesapları Oluşturma</h3>

<ol>
  <li>İlgili OU'ya sağ tıklayın</li>
  <li><strong>New → User</strong> seçin</li>
  <li>Kullanıcı bilgilerini girin:
    <ul>
      <li><strong>First name, Last name:</strong> Kullanıcı adı</li>
      <li><strong>User logon name:</strong> Kullanıcı adı (örn: john.doe)</li>
      <li><strong>User logon name (pre-Windows 2000):</strong> Otomatik oluşturulur</li>
    </ul>
  </li>
  <li><strong>Next</strong> tıklayın</li>
  <li>Şifre belirleyin:
    <ul>
      <li>Güçlü bir şifre (en az 8 karakter, büyük/küçük harf, rakam, özel karakter)</li>
      <li><strong>User must change password at next logon:</strong> İlk girişte şifre değiştirme</li>
      <li><strong>User cannot change password:</strong> Sadece admin değiştirebilir</li>
      <li><strong>Password never expires:</strong> Şifre süresi dolmaz</li>
      <li><strong>Account is disabled:</strong> Hesabı devre dışı bırak</li>
    </ul>
  </li>
  <li><strong>Finish</strong> tıklayın</li>
</ol>

<h3>Grup Oluşturma</h3>

<ol>
  <li>OU'ya sağ tıklayın</li>
  <li><strong>New → Group</strong> seçin</li>
  <li>Grup bilgilerini girin:
    <ul>
      <li><strong>Group name:</strong> Grup adı</li>
      <li><strong>Group scope:</strong> Domain Local, Global, veya Universal</li>
      <li><strong>Group type:</strong> Security veya Distribution</li>
    </ul>
  </li>
  <li><strong>OK</strong> tıklayın</li>
</ol>

<h2>Grup Politikaları (Group Policy)</h2>

<h3>Grup Politikası Oluşturma</h3>

<ol>
  <li><strong>Server Manager → Tools → Group Policy Management</strong> açın</li>
  <li>Domain adınıza sağ tıklayın</li>
  <li><strong>Create a GPO in this domain, and Link it here</strong> seçin</li>
  <li>GPO adını girin (örn: Desktop Settings)</li>
  <li><strong>OK</strong> tıklayın</li>
  <li>GPO'ya sağ tıklayın ve <strong>Edit</strong> seçin</li>
  <li>İstediğiniz ayarları yapılandırın:
    <ul>
      <li><strong>Computer Configuration:</strong> Bilgisayar ayarları</li>
      <li><strong>User Configuration:</strong> Kullanıcı ayarları</li>
    </ul>
  </li>
</ol>

<h3>Yaygın Grup Politikası Ayarları</h3>

<ul>
  <li><strong>Şifre Politikaları:</strong> Minimum şifre uzunluğu, karmaşıklık gereksinimleri</li>
  <li><strong>Hesap Kilitleme:</strong> Başarısız giriş denemelerinden sonra hesap kilitleme</li>
  <li><strong>Masaüstü Ayarları:</strong> Duvar kağıdı, ekran koruyucu</li>
  <li><strong>Yazılım Kısıtlamaları:</strong> Belirli yazılımların çalıştırılmasını engelleme</li>
  <li><strong>Ağ Ayarları:</strong> Ağ paylaşımları, yazıcı ayarları</li>
</ul>

<h2>Bilgisayar Yönetimi</h2>

<h3>Bilgisayarı Domain'e Ekleme</h3>

<p>Windows istemci bilgisayarları domain'e eklemek için:</p>

<ol>
  <li>İstemci bilgisayarda <strong>System Properties</strong> açın</li>
  <li><strong>Computer Name</strong> sekmesine gidin</li>
  <li><strong>Change</strong> butonuna tıklayın</li>
  <li><strong>Domain</strong> seçeneğini işaretleyin</li>
  <li>Domain adınızı girin (örn: muharremsen.local)</li>
  <li>Domain admin kullanıcı adı ve şifresi girin</li>
  <li><strong>OK</strong> tıklayın</li>
  <li>Bilgisayar yeniden başlatılır</li>
</ol>

<h3>Bilgisayar Hesaplarını Yönetme</h3>

<p>Active Directory'de bilgisayar hesaplarını yönetmek için:</p>

<ul>
  <li><strong>Active Directory Users and Computers</strong> açın</li>
  <li><strong>Computers</strong> OU'suna gidin</li>
  <li>Bilgisayar hesaplarını görebilir, silebilir veya taşıyabilirsiniz</li>
</ul>

<h2>Güvenlik Yapılandırmaları</h2>

<h3>Şifre Politikaları</h3>

<ol>
  <li><strong>Group Policy Management</strong> açın</li>
  <li><strong>Default Domain Policy</strong> düzenleyin</li>
  <li><strong>Computer Configuration → Policies → Windows Settings → Security Settings → Account Policies → Password Policy</strong> gidin</li>
  <li>Şifre politikalarını yapılandırın:
    <ul>
      <li>Minimum password length: 8 karakter</li>
      <li>Password must meet complexity requirements: Enabled</li>
      <li>Maximum password age: 90 gün</li>
      <li>Minimum password age: 1 gün</li>
    </ul>
  </li>
</ol>

<h3>Hesap Kilitleme Politikası</h3>

<ol>
  <li><strong>Account Lockout Policy</strong> bölümüne gidin</li>
  <li>Hesap kilitleme ayarlarını yapılandırın:
    <ul>
      <li>Account lockout threshold: 5 başarısız deneme</li>
      <li>Account lockout duration: 30 dakika</li>
      <li>Reset account lockout counter after: 30 dakika</li>
    </ul>
  </li>
</ol>

<h3>Güvenlik Güncellemeleri</h3>

<ul>
  <li>Windows Update'i düzenli olarak çalıştırın</li>
  <li>Kritik güvenlik yamalarını hemen uygulayın</li>
  <li>WSUS (Windows Server Update Services) kullanarak merkezi güncelleme yönetimi yapın</li>
</ul>

<h2>Yedekleme ve Geri Yükleme</h2>

<h3>Active Directory Yedekleme</h3>

<p>Windows Server Backup kullanarak Active Directory'yi yedekleyin:</p>

<ol>
  <li><strong>Server Manager → Tools → Windows Server Backup</strong> açın</li>
  <li><strong>Backup Schedule</strong> tıklayın</li>
  <li>Yedekleme zamanlaması yapın</li>
  <li>Yedekleme konumunu belirleyin (harici disk önerilir)</li>
  <li>Active Directory'yi yedekleme seçeneklerine ekleyin</li>
</ol>

<h3>System State Yedekleme</h3>

<p>System State yedeklemesi, Active Directory veritabanını içerir:</p>

<ul>
  <li>AD DS veritabanı</li>
  <li>SYSVOL klasörü</li>
  <li>Registry</li>
  <li>Boot dosyaları</li>
</ul>

<h2>Yaygın Sorunlar ve Çözümleri</h2>

<h3>DNS Sorunları</h3>
<ul>
  <li>DNS sunucu ayarlarını kontrol edin</li>
  <li>SRV kayıtlarının doğru oluşturulduğunu doğrulayın</li>
  <li>DNS forwarder'ları yapılandırın</li>
</ul>

<h3>Replikasyon Sorunları</h3>
<ul>
  <li>Active Directory Sites and Services'te replikasyon ayarlarını kontrol edin</li>
  <li>Replikasyon hatalarını Event Viewer'da kontrol edin</li>
  <li>repadmin komutunu kullanarak replikasyon durumunu kontrol edin</li>
</ul>

<h3>Grup Politikası Uygulanmıyor</h3>
<ul>
  <li>gpupdate /force komutunu çalıştırın</li>
  <li>GPO link'lerini kontrol edin</li>
  <li>GPO inheritance ayarlarını kontrol edin</li>
</ul>

<h2>muharremsen'in Domain Server Hizmetleri</h2>

<p>muharremsen olarak, Domain Server kurulumu, Active Directory yapılandırması ve yönetim hizmetleri sunuyoruz. Kullanıcı yönetimi, grup politikaları ve güvenlik yapılandırmalarıyla kurumsal ağ altyapınızı güvenli hale getiriyoruz.</p>

<p>Profesyonel Domain Server kurulumu, Active Directory yapılandırması, DNS yapılandırması, grup politikaları ve 7/24 destek hizmetleri için bizimle iletişime geçin. Deneyimli ekibimiz, domain altyapınızı en iyi şekilde yapılandırarak işletmenizin ağ yönetim ihtiyaçlarını karşılamanıza yardımcı olur.</p>

<p>Domain Server kurulumu, kullanıcı yönetimi, grup politikaları, güvenlik yapılandırmaları ve sürekli destek hizmetleri için muharremsen ile çalışın.</p>
    `,
    date: new Date().toISOString().split('T')[0],
    author: "muharremsen",
    category: "Sistem Yönetimi",
    tags: ["Domain Server", "Active Directory", "Windows Server", "kurulum", "yapılandırma", "DNS"],
  },
];

