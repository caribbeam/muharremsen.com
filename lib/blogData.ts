export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  seoKeywords?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fortigate-network-firewall-kurulum-rehberi",
    title: "FortiGate Network Firewall Kurulum ve Güvenlik Politikaları Rehberi",
    description:
      "FortiGate firewall cihazları ile kurumsal ağ güvenliği, temel kurulum adımları, arayüz tanımları, policy oluşturma ve VPN yapılandırma rehberi.",
    content: `
      <h2>FortiGate ile Kurumsal Ağ Güvenliği</h2>
      <p>FortiGate, kurumsal ağlarda en çok tercih edilen firewall çözümlerinden biridir. Doğru yapılandırıldığında hem iç ağınızı hem de internet çıkışınızı
      güvenli ve kontrollü hale getirir.</p>
      
      <h3>1. Temel Kurulum ve İlk Erişim</h3>
      <ul>
        <li>FortiGate cihazınızı networkünüze fiziksel olarak bağlayın</li>
        <li>Yönetim arayüzüne (örn. port1) sabit IP atayın</li>
        <li>Tarayıcı üzerinden <code>https://[fortigate-ip]</code> ile arayüze bağlanın</li>
        <li>İlk admin şifresini değiştirin ve MFA aktif edin</li>
      </ul>

      <h3>2. Arayüz (Interface) Tanımları</h3>
      <p>Genellikle aşağıdaki gibi bir yapı kullanılır:</p>
      <ul>
        <li><strong>WAN:</strong> İnternet hattının bağlı olduğu port</li>
        <li><strong>LAN:</strong> İç network (örneğin 192.168.10.0/24)</li>
        <li><strong>DMZ:</strong> Sunucuların bulunduğu ayrı güvenlik bölgesi</li>
      </ul>

      <h3>3. Güvenlik Politikaları (Policy) Oluşturma</h3>
      <p>Temel bir içerden dışarıya çıkış kuralı için:</p>
      <ol>
        <li>Source: LAN subnet</li>
        <li>Destination: Internet</li>
        <li>Service: HTTP, HTTPS, DNS (gerekli diğer portlar)</li>
        <li>NAT: Enable</li>
        <li>Security Profiles: Web Filter, Antivirus, IPS aktif edin</li>
      </ol>

      <h3>4. Site-to-Site VPN Yapılandırması</h3>
      <p>Şubeler arası güvenli bağlantı için IPsec VPN tüneli kullanılır. Her iki uçta da karşılıklı pre-shared key, phase1/phase2 ayarları ve routing
      konfigüre edilmelidir.</p>

      <h3>5. Loglama ve İzleme</h3>
      <p>Olayların geriye dönük incelenebilmesi için FortiAnalyzer, syslog veya SIEM sistemlerine log gönderimi tavsiye edilir.</p>

      <h3>Sonuç</h3>
      <p>FortiGate ile doğru tasarlanmış bir network, hem performanslı hem de güvenli bir altyapı sunar. Politika setlerinizin düzenli olarak gözden
      geçirilmesi ve log analizlerinin yapılması güvenlik seviyenizi yükseltecektir.</p>
    `,
    author: "muharremsen",
    date: "2026-02-19",
    category: "Firewall",
    tags: ["FortiGate", "firewall", "network güvenliği", "VPN", "policy"],
    seoKeywords:
      "FortiGate firewall kurulum, FortiGate policy, FortiGate vpn, kurumsal ağ güvenliği",
  },
  {
    slug: "mikrotik-routeros-ile-network-yonetimi",
    title: "MikroTik RouterOS ile Gelişmiş Network Yönetimi",
    description:
      "MikroTik RouterOS ile router ve firewall yapılandırma, queue ve QoS ayarları, VPN, hotspot ve güvenlik politikaları hakkında detaylı rehber.",
    content: `
      <h2>MikroTik RouterOS Nedir?</h2>
      <p>MikroTik, fiyat/performans açısından öne çıkan, esnek ve güçlü bir network işletim sistemi sunar. Küçük ve orta ölçekli işletmelerde yaygın
      olarak kullanılmaktadır.</p>

      <h3>1. Temel IP ve NAT Yapılandırması</h3>
      <pre><code>/ip address add address=192.168.10.1/24 interface=LAN
/ip address add address=1.2.3.4/30 interface=WAN

/ip firewall nat add chain=srcnat out-interface=WAN action=masquerade</code></pre>

      <h3>2. Basit Firewall Kuralları</h3>
      <pre><code>/ip firewall filter
add chain=input action=accept connection-state=established,related
add chain=input action=drop connection-state=invalid
add chain=input action=accept protocol=tcp dst-port=8291 src-address-list=management
add chain=input action=drop in-interface=WAN</code></pre>

      <h3>3. VPN ve Uzak Erişim</h3>
      <p>L2TP/IPSec veya OpenVPN ile uzak ofisler ve mobil kullanıcılar için güvenli VPN tünelleri kurabilirsiniz.</p>

      <h3>4. Queue ve QoS</h3>
      <p>Bant genişliği kontrollü, adil ve performanslı bir network için simple queue ve queue tree yapılarını kullanarak kullanıcı ve servis bazlı
      hız sınırlamaları yapabilirsiniz.</p>

      <h3>Sonuç</h3>
      <p>MikroTik, doğru kurgulandığında çok esnek bir router ve firewall çözümü sunar. Küçük/orta ölçekli projelerde maliyet avantajı ile öne çıkar.</p>
    `,
    author: "muharremsen",
    date: "2026-02-18",
    category: "Network",
    tags: ["MikroTik", "RouterOS", "firewall", "QoS", "VPN"],
    seoKeywords:
      "mikrotik routeros, mikrotik firewall, mikrotik vpn, mikrotik qos, mikrotik yapılandırma",
  },
  {
    slug: "vmware-ve-proxmox-ile-sanallastirma-altyapisi",
    title: "VMware ve Proxmox ile Kurumsal Sanallaştırma Altyapısı Kurulum Rehberi",
    description:
      "VMware ESXi ve Proxmox VE kullanarak sanallaştırma altyapısı kurulum adımları, cluster yapıları, yedekleme ve yüksek erişilebilirlik senaryoları.",
    content: `
      <h2>Neden Sanallaştırma?</h2>
      <p>Sanallaştırma ile donanım kaynaklarını daha verimli kullanabilir, ölçeklenebilir ve yönetilebilir bir sunucu ortamı oluşturabilirsiniz. Aynı
      fiziksel sunucu üzerinde birden fazla sanal sunucu çalıştırmak maliyetleri düşürür.</p>

      <h3>1. VMware ESXi Temel Kurulum</h3>
      <ul>
        <li>Sunucuyu ESXi ISO ile boot edin</li>
        <li>Disk ve datastore yapılandırmasını yapın</li>
        <li>Management IP adresini tanımlayın</li>
        <li>vSphere Client veya web arayüz üzerinden yönetim sağlayın</li>
      </ul>

      <h3>2. Proxmox VE ile Açık Kaynak Çözüm</h3>
      <p>Proxmox VE, KVM ve LXC tabanlı açık kaynak bir sanallaştırma platformudur. Cluster ve live migration gibi gelişmiş özellikler sunar.</p>

      <h3>3. Yüksek Erişilebilirlik ve Cluster</h3>
      <p>Birden fazla host ile cluster yapısı kurarak, bir host arızasında sanal sunucuların diğer hostlara otomatik taşınmasını sağlayabilirsiniz.</p>

      <h3>4. Backup ve Snapshot Stratejileri</h3>
      <p>Düzenli snapshot ve tam yedekleme politikalarıyla veri kaybı riskini minimuma indirin. Harici storage ve off-site yedeklemeleri planlayın.</p>

      <h3>Sonuç</h3>
      <p>VMware ve Proxmox ile kurulan doğru bir sanallaştırma altyapısı, işletmenizin esnekliğini ve iş sürekliliğini ciddi şekilde artırır.</p>
    `,
    author: "muharremsen",
    date: "2026-02-17",
    category: "Sanallaştırma",
    tags: ["VMware", "Proxmox", "sanallaştırma", "cluster", "backup"],
    seoKeywords:
      "vmware esxi kurulum, proxmox sanallaştırma, sanallaştırma altyapısı, vmware proxmox karşılaştırma",
  },
  {
    slug: "mail-server-kurulumu-ve-guvenligi",
    title: "Mail Server Kurulumu, SPF/DKIM/DMARC ve Güvenlik En İyi Uygulamaları",
    description:
      "Exchange veya Linux tabanlı mail server kurulumu, DNS kayıtları, SPF/DKIM/DMARC ayarları ve spam koruması için en iyi pratikler.",
    content: `
      <h2>Kurumsal Mail Altyapısı Neden Önemli?</h2>
      <p>E-posta, kurumsal iletişimin en kritik bileşenlerinden biridir. Kesintisiz ve güvenli bir mail altyapısı, hem prestij hem de iş sürekliliği
      açısından vazgeçilmezdir.</p>

      <h3>1. Temel DNS Kayıtları</h3>
      <ul>
        <li><strong>MX:</strong> Mail server'a gelen mailleri yönlendirir</li>
        <li><strong>A/AAAA:</strong> Mail server IP adresi</li>
        <li><strong>SPF:</strong> Hangi sunucuların domain adına mail atabildiğini tanımlar</li>
      </ul>

      <h3>2. SPF Kaydı Örneği</h3>
      <pre><code>v=spf1 ip4:1.2.3.4 include:_spf.yandex.net -all</code></pre>

      <h3>3. DKIM ve DMARC</h3>
      <p>DKIM, maillerin dijital olarak imzalanmasını sağlar. DMARC ise SPF ve DKIM sonucuna göre mailin nasıl işleneceğini belirler (accept, quarantine, reject).</p>

      <h3>4. Spam ve Virüs Koruması</h3>
      <p>Gateway veya sunucu taraflı antispam/antivirüs çözümleri ile kullanıcılarınızı zararlı içeriklerden koruyun.</p>

      <h3>Sonuç</h3>
      <p>Doğru tasarlanmış bir mail server ve doğru DNS kayıtları ile hem teslim edilebilirlik oranlarınızı artırır hem de domain itibarınızı korursunuz.</p>
    `,
    author: "muharremsen",
    date: "2026-02-16",
    category: "Mail Server",
    tags: ["mail server", "SPF", "DKIM", "DMARC", "spam"],
    seoKeywords:
      "mail server kurulumu, spf kaydı, dkim dmarc ayarları, kurumsal mail güvenliği",
  },
  {
    slug: "freepbx-ip-santral-kurulum-rehberi",
    title: "FreePBX IP Santral Kurulum ve Temel Çağrı Senaryoları",
    description:
      "FreePBX ile IP santral kurulumu, dahili numaralar, trunk tanımları, IVR, çağrı kayıt ve temel çağrı akışları için pratik bir rehber.",
    content: `
      <h2>FreePBX Nedir?</h2>
      <p>FreePBX, Asterisk tabanlı, web arayüzü üzerinden kolayca yönetilebilen açık kaynak bir IP santral çözümüdür. Küçük ve orta ölçekli işletmeler
      için güçlü ve esnek bir yapıya sahiptir.</p>

      <h3>1. Kurulum Seçenekleri</h3>
      <ul>
        <li>ISO ile fiziksel sunucuya kurulum</li>
        <li>VMware/Proxmox üzerinde sanal sunucu kurulumu</li>
        <li>Bulut ortamında (VPS) kurulum</li>
      </ul>

      <h3>2. Dahili Numaralar ve Kullanıcılar</h3>
      <p>Extension tanımları ile kullanıcılarınıza dahili numaralar verin ve IP telefon/softphone cihazlarını bu dahili numaralara bağlayın.</p>

      <h3>3. Trunk ve Dış Hatlar</h3>
      <p>Operatörünüzden aldığınız SIP trunk bilgilerini FreePBX üzerinde tanımlayarak dış arama ve dışarıdan gelen aramaları yönetin.</p>

      <h3>4. IVR ve Çağrı Akışları</h3>
      <p>Müşterilerinizi doğru birimlere yönlendirmek için IVR menüleri, queue ve ring group yapıları oluşturun.</p>

      <h3>Sonuç</h3>
      <p>Doğru tasarlanmış bir IP santral altyapısı, çağrı kalitenizi ve müşteri memnuniyetinizi doğrudan etkiler. FreePBX ile esnek ve yönetilebilir
      bir çözüm elde edebilirsiniz.</p>
    `,
    author: "muharremsen",
    date: "2026-02-15",
    category: "IP Santral",
    tags: ["FreePBX", "IP santral", "VoIP", "çağrı merkezi"],
    seoKeywords:
      "freepbx kurulum, ip santral kurulumu, voip santral, çağrı merkezi ip santral",
  },
  {
    slug: "dns-ve-domain-controller-kurulum-temelleri",
    title: "DNS ve Domain Controller (Active Directory) Kurulum Temelleri",
    description:
      "Windows Server üzerinde Active Directory domain controller kurulumu, DNS ve DHCP yapılandırması ile kullanıcı ve bilgisayar yönetimi için temel rehber.",
    content: `
      <h2>Active Directory ve DNS İlişkisi</h2>
      <p>Active Directory, kullanıcı ve bilgisayarların merkezi olarak yönetilmesini sağlar. DNS ise bu ortamın düzgün çalışması için kritik bileşendir.
      Domain controller kurulumunda DNS servisinin doğru yapılandırılması zorunludur.</p>

      <h3>1. Domain Controller Kurulumu</h3>
      <ol>
        <li>Windows Server kurulumunu tamamlayın ve sabit IP verin</li>
        <li>Server Manager üzerinden <em>Add Roles and Features</em> ile AD DS rolünü ekleyin</li>
        <li><em>Promote this server to a domain controller</em> adımıyla yeni bir forest ve domain oluşturun</li>
      </ol>

      <h3>2. DNS ve Forwarders</h3>
      <p>İç domain çözümlemesi için DNS zonenizi oluşturun, internet çıkışı için ise güvenilir DNS forwarder adresleri tanımlayın.</p>

      <h3>3. DHCP ve IP Dağıtımı</h3>
      <p>İstemci bilgisayarların otomatik IP alabilmesi için DHCP scope'ları planlayın ve doğru gateway/DNS ayarlarıyla dağıtın.</p>

      <h3>4. Group Policy ile Yönetim</h3>
      <p>GPO'lar ile kullanıcı ve bilgisayarlara güvenlik politikaları, yazılım dağıtımı ve masaüstü kısıtlamaları uygulayabilirsiniz.</p>

      <h3>Sonuç</h3>
      <p>Sağlam bir domain ve DNS altyapısı, tüm networkünüzün omurgasını oluşturur. Tasarım hataları ileride ciddi erişim ve performans sorunlarına
      yol açabileceği için kurulum öncesi planlama çok önemlidir.</p>
    `,
    author: "muharremsen",
    date: "2026-02-14",
    category: "Sunucu",
    tags: ["DNS", "Active Directory", "domain controller", "DHCP"],
    seoKeywords:
      "active directory kurulum, dns yapılandırma, domain controller kurulum, windows server dns dhcp",
  },
  {
    slug: "yapay-zeka-destekli-it-otomasyonu",
    title: "Yapay Zeka Destekli IT Otomasyonu ve İzleme Çözümleri",
    description:
      "Network, firewall ve sunucu altyapılarında yapay zeka destekli izleme, log analizi, uyarı mekanizmaları ve otomasyon senaryoları.",
    content: `
      <h2>Yapay Zeka ile Akıllı İzleme</h2>
      <p>Günümüzde log hacimleri ve olay sayıları insan gücü ile tek tek takip edilemeyecek seviyelere ulaştı. Yapay zeka destekli izleme ve otomasyon
      çözümleri, network ve sunucu altyapılarınızda anomali tespiti ve proaktif aksiyon almayı mümkün kılar.</p>

      <h3>1. Log Toplama ve Merkezi İzleme</h3>
      <p>Firewall, switch, router, server ve uygulama loglarını merkezi bir log havuzunda toplayarak korelasyon ve raporlama yapabilirsiniz.</p>

      <h3>2. Anomali Tespiti</h3>
      <p>Makine öğrenmesi algoritmaları ile normal trafik ve davranış modelleri çıkarılıp, bunların dışına çıkan durumlar otomatik olarak tespit
      edilebilir.</p>

      <h3>3. Otomatik Aksiyon Senaryoları</h3>
      <ul>
        <li>Belirli eşik değerleri aşıldığında firewall üzerinde kural oluşturma</li>
        <li>Şüpheli IP'leri otomatik block-list'e ekleme</li>
        <li>Servis çökmesi durumunda otomatik restart veya failover</li>
      </ul>

      <h3>4. Raporlama ve Kapasite Planlama</h3>
      <p>Toplanan veriler üzerinden haftalık/aylık raporlar üreterek network ve sunucu kaynak kullanımınızı analiz edebilir, kapasite artışı planlayabilirsiniz.</p>

      <h3>Sonuç</h3>
      <p>Yapay zeka destekli otomasyon, özellikle orta ve büyük ölçekli yapılarda IT ekiplerinin yükünü azaltır, reaksiyon süresini kısaltır ve
      güvenlik seviyesini yükseltir.</p>
    `,
    author: "muharremsen",
    date: "2026-02-13",
    category: "Yapay Zeka",
    tags: ["yapay zeka", "otomasyon", "izleme", "log analizi"],
    seoKeywords:
      "yapay zeka it otomasyon, log analizi, network izleme, otomatik firewall kuralı",
  },
  {
    slug: "devsecops-guvenligi-gelistirme-surecine-entegre-etme",
    title: "DevSecOps: Güvenliği Geliştirme Sürecine Entegre Etme",
    description:
      "DevSecOps nedir? Yazılım geliştirme döngüsüne güvenliği nasıl entegre edersiniz? CI/CD pipeline'da güvenlik kontrolleri ve en iyi uygulamalar.",
    content: `
      <h2>DevSecOps Nedir?</h2>
      <p>DevSecOps, geliştirme (Development), güvenlik (Security) ve operasyon (Operations) ekiplerinin iş birliğiyle yazılım yaşam döngüsüne güvenliği entegre eden bir yaklaşımdır. Güvenlik artık sonradan eklenen bir katman değil, sürecin doğal parçasıdır.</p>
      <h3>1. Shift-Left Güvenlik</h3>
      <p>Güvenlik kontrollerini mümkün olan en erken aşamada (tasarım, kod, build) uygulayarak zafiyetlerin production'a ulaşmasını engelleyin.</p>
      <h3>2. CI/CD Pipeline'da Güvenlik</h3>
      <ul>
        <li>SAST (Static Application Security Testing) – statik kod analizi</li>
        <li>DAST (Dynamic Application Security Testing) – canlı ortamda tarama</li>
        <li>Bağımlılık taraması (dependency scanning) – bilinen açıkları tespit</li>
        <li>Container image taraması – güvenlik açığı ve uyumsuzluk kontrolü</li>
      </ul>
      <h3>3. Otomasyon ve Araçlar</h3>
      <p>SonarQube, Snyk, Trivy, OWASP ZAP gibi araçları pipeline'a entegre edin. Güvenlik geçmeyen build'ler otomatik olarak başarısız sayılsın.</p>
      <h3>4. Kültür ve Eğitim</h3>
      <p>Geliştirici ekiplerine güvenli kod yazma eğitimleri verin. Güvenlik ekipleri ile ortak dil ve metrikler belirleyin.</p>
      <h3>Sonuç</h3>
      <p>DevSecOps ile güvenlik, hızı düşürmeden sürecin içine gömülür; hem kalite hem güvenlik artar.</p>
    `,
    author: "muharremsen",
    date: "2026-02-20",
    category: "Siber Güvenlik",
    tags: ["DevSecOps", "CI/CD", "güvenlik", "SAST", "DAST"],
    seoKeywords: "DevSecOps, shift-left güvenlik, CI/CD güvenlik, güvenli yazılım geliştirme",
  },
  {
    slug: "network-monitoring-ag-trafigi-izleme-ve-analiz-araclari",
    title: "Network Monitoring: Ağ Trafiği İzleme ve Analiz Araçları",
    description:
      "Ağ trafiğini izleme ve analiz araçları. NetFlow, sFlow, SNMP, Wireshark, Zabbix, PRTG ve merkezi izleme stratejileri.",
    content: `
      <h2>Ağ İzleme Neden Önemli?</h2>
      <p>Kurumsal ağlarda trafik analizi, performans sorunlarının tespiti, güvenlik olaylarının fark edilmesi ve kapasite planlaması için kritiktir.</p>
      <h3>1. Trafik Verisi Toplama</h3>
      <ul>
        <li><strong>NetFlow / IPFIX:</strong> Router ve switch'lerden akış verisi toplama</li>
        <li><strong>sFlow:</strong> Örnekleme tabanlı, yüksek hızlı ağlar için</li>
        <li><strong>SNMP:</strong> Cihaz metrikleri (CPU, bellek, interface trafiği)</li>
      </ul>
      <h3>2. Popüler İzleme Araçları</h3>
      <p><strong>Zabbix, PRTG, LibreNMS:</strong> Ağ cihazları ve sunucuları izleme, uyarı ve grafik. <strong>Wireshark, tcpdump:</strong> Paket seviyesinde analiz. <strong>ELK Stack, Grafana:</strong> Log ve metrik görselleştirme.</p>
      <h3>3. Merkezi İzleme Stratejisi</h3>
      <p>Tek bir konsoldan tüm ağı görebilmek için collector, zaman senkronizasyonu (NTP) ve tutarlı log formatları kullanın.</p>
      <h3>Sonuç</h3>
      <p>Doğru network monitoring ile sorunları proaktif tespit eder, SLA'larınızı korursunuz.</p>
    `,
    author: "muharremsen",
    date: "2026-02-21",
    category: "Network",
    tags: ["network monitoring", "NetFlow", "SNMP", "Zabbix", "Wireshark"],
    seoKeywords: "ağ izleme, network monitoring, NetFlow, SNMP, trafik analizi",
  },
  {
    slug: "cloud-guvenligi-aws-azure-gcp-en-iyi-uygulamalar",
    title: "Cloud Güvenliği: AWS, Azure ve GCP İçin En İyi Uygulamalar",
    description:
      "AWS, Azure ve Google Cloud ortamlarında güvenlik en iyi uygulamaları: kimlik yönetimi, şifreleme, ağ segmentasyonu ve uyumluluk.",
    content: `
      <h2>Bulut Güvenliğinin Temelleri</h2>
      <p>Paylaşılan sorumluluk modelinde; sağlayıcı altyapıyı korur, siz veri, kimlik ve yapılandırmadan sorumlusunuz.</p>
      <h3>1. Kimlik ve Erişim Yönetimi</h3>
      <ul>
        <li>IAM rollerinde minimum yetki prensibi (least privilege)</li>
        <li>MFA zorunluluğu, root hesap kullanımını kısıtlama</li>
        <li>AWS IAM, Azure AD, GCP IAM politikalarını düzenli gözden geçirme</li>
      </ul>
      <h3>2. Veri Şifreleme</h3>
      <p>Bekleyen veri (at rest): disk ve bucket şifrelemesi. Aktarımda (in transit): TLS kullanımı. Mümkünse müşteri tarafı şifreleme anahtarları (CMK) yönetin.</p>
      <h3>3. Ağ Güvenliği</h3>
      <p>VPC/VNet yapılandırması, security group / NSG kuralları, private endpoint ve güvenli hybrid bağlantılar.</p>
      <h3>4. Loglama ve Denetim</h3>
      <p>CloudTrail, Azure Monitor, GCP Audit Logs ile tüm API ve yapılandırma değişikliklerini izleyin.</p>
      <h3>Sonuç</h3>
      <p>Ortamınıza özel güvenlik kontrolleri ve düzenli denetimlerle bulut güvenliğinizi güçlendirin.</p>
    `,
    author: "muharremsen",
    date: "2026-02-22",
    category: "Siber Güvenlik",
    tags: ["cloud güvenliği", "AWS", "Azure", "GCP", "IAM", "şifreleme"],
    seoKeywords: "cloud güvenliği, AWS güvenlik, Azure güvenlik, GCP güvenlik, bulut en iyi uygulamalar",
  },
  {
    slug: "ransomware-saldirilari-korunma-ve-mudahale-stratejileri",
    title: "Ransomware Saldırıları: Korunma ve Müdahale Stratejileri",
    description:
      "Ransomware saldırılarına karşı korunma, yedekleme stratejileri ve olay müdahale adımları. Fidye ödemeden kurtulma yolları.",
    content: `
      <h2>Ransomware Tehdidi</h2>
      <p>Ransomware, verileri şifreleyip fidye talep eden kötü amaçlı yazılımlardır. Kurumsal ağlara yayılım (lateral movement) sık görülür.</p>
      <h3>1. Korunma Önlemleri</h3>
      <ul>
        <li>E-posta ve web filtreleme, güvenlik bilinci eğitimi (phishing simülasyonları)</li>
        <li>Güncel yamalar, kısıtlı yönetici hakları, uygulama beyaz listesi</li>
        <li>Ağ segmentasyonu – bir segment etkilense diğerleri izole kalsın</li>
      </ul>
      <h3>2. Yedekleme Stratejisi</h3>
      <p>3-2-1 kuralı: 3 kopya, 2 farklı medya, 1 off-site/air-gapped yedek. Yedeklerin düzenli restore testi yapın.</p>
      <h3>3. Olay Müdahale</h3>
      <p>Etkilenen sistemleri ağdan ayırın, iletişimi kesin. Forensik kanıtları koruyun. IR planı ve iletişim listesi hazır olsun. Yasal ve sigorta süreçlerini başlatın.</p>
      <h3>4. Fidye Ödemek</h3>
      <p>Ödeme garanti vermez; yasal ve etik açıdan dikkatli değerlendirin. Mümkünse yedekten kurtarma ve sistemleri temiz kurulumla yeniden inşa edin.</p>
      <h3>Sonuç</h3>
      <p>Proaktif önlemler ve hazır IR planı ile ransomware etkisini azaltabilirsiniz.</p>
    `,
    author: "muharremsen",
    date: "2026-02-23",
    category: "Siber Güvenlik",
    tags: ["ransomware", "fidye yazılımı", "yedekleme", "olay müdahale", "güvenlik"],
    seoKeywords: "ransomware korunma, fidye yazılımı, ransomware müdahale, yedekleme stratejisi",
  },
  {
    slug: "zero-trust-guvenlik-modeli",
    title: "Zero Trust Güvenlik Modeli: Güvenmeden Doğrula Yaklaşımı",
    description:
      "Zero Trust nedir? Hiçbir kullanıcı veya cihaza varsayılan güven vermeden sürekli doğrulama ve en az yetki ilkeleri.",
    content: `
      <h2>Zero Trust Nedir?</h2>
      <p>Zero Trust, \"asla güvenme, her zaman doğrula\" prensibine dayanır. Konum veya ağ segmenti ne olursa olsun her erişim isteği doğrulanır ve yetkilendirilir.</p>
      <h3>1. Temel İlkeler</h3>
      <ul>
        <li><strong>Sürekli doğrulama:</strong> Tek seferlik giriş değil, her işlem ve oturum kontrolü</li>
        <li><strong>En az ayrıcalık:</strong> Sadece iş için gerekli minimum erişim</li>
        <li><strong>Mikro-segmentasyon:</strong> Ağ ve uygulama düzeyinde küçük güvenlik bölgeleri</li>
      </ul>
      <h3>2. Uygulama Bileşenleri</h3>
      <p>Çok faktörlü kimlik doğrulama (MFA), kimlik ve cihaz sağlığı kontrolü, uygulama ve veri erişim politikaları (CASB, ZTNA).</p>
      <h3>3. Zero Trust Ağ Erişimi</h3>
      <p>Geleneksel VPN yerine identity-aware proxy ve ZTNA çözümleri; kullanıcı ve cihaz doğrulandıktan sonra sadece yetkili kaynaklara erişim.</p>
      <h3>Sonuç</h3>
      <p>Zero Trust, modern hibrit ve bulut ortamlarında güvenliği artıran stratejik bir yaklaşımdır.</p>
    `,
    author: "muharremsen",
    date: "2026-02-24",
    category: "Siber Güvenlik",
    tags: ["Zero Trust", "güvenlik modeli", "MFA", "mikro-segmentasyon", "ZTNA"],
    seoKeywords: "Zero Trust, sıfır güven, Zero Trust güvenlik, ZTNA",
  },
  {
    slug: "siem-sistemleri-guvenlik-olaylarini-izleme-ve-analiz",
    title: "SIEM Sistemleri: Güvenlik Olaylarını İzleme ve Analiz",
    description:
      "SIEM nedir? Log toplama, korelasyon, tehdit tespiti ve olay müdahale. Splunk, Elastic, Microsoft Sentinel ve açık kaynak seçenekleri.",
    content: `
      <h2>SIEM Nedir?</h2>
      <p>SIEM (Security Information and Event Management), güvenlik olayları ve log verilerini toplayan, korelasyon yapan ve tehditleri tespit etmeye yardımcı olan sistemlerdir.</p>
      <h3>1. Log Kaynakları</h3>
      <ul>
        <li>Firewall, IDS/IPS, endpoint, sunucu ve uygulama logları</li>
        <li>Kimlik doğrulama ve erişim logları (AD, VPN, bulut)</li>
        <li>E-posta güvenliği ve web proxy logları</li>
      </ul>
      <h3>2. Korelasyon ve Kurallar</h3>
      <p>Kurallar ve use case'ler ile şüpheli davranışları tespit edin: başarısız giriş denemeleri, anormal saatlerde erişim, hassas veri erişimi, lateral movement göstergeleri.</p>
      <h3>3. SIEM Araçları</h3>
      <p>Splunk, Microsoft Sentinel, Elastic Security, Wazuh (açık kaynak) gibi platformlar; SOAR entegrasyonu ile otomatik yanıt.</p>
      <h3>4. SOC ve İzleme</h3>
      <p>SIEM, SOC (Security Operations Center) ekibinin merkezi görünürlük ve alarm yönetimi için temel bileşenidir.</p>
      <h3>Sonuç</h3>
      <p>Doğru yapılandırılmış bir SIEM, tehditleri hızlı tespit ve müdahale için vazgeçilmezdir.</p>
    `,
    author: "muharremsen",
    date: "2026-02-25",
    category: "Siber Güvenlik",
    tags: ["SIEM", "log yönetimi", "SOC", "tehdit tespiti", "korelasyon"],
    seoKeywords: "SIEM, güvenlik olay yönetimi, log analizi, SOC, tehdit tespiti",
  },
  {
    slug: "vpn-teknolojileri-guvenli-uzaktan-erisim",
    title: "VPN Teknolojileri: Güvenli Uzaktan Erişim Çözümleri",
    description:
      "IPSec, SSL/TLS VPN, WireGuard ve site-to-site VPN. Kurumsal uzaktan erişim, güvenlik ve performans karşılaştırması.",
    content: `
      <h2>VPN Neden Gerekli?</h2>
      <p>VPN (Virtual Private Network), internet üzerinden şifreli tünel ile güvenli iletişim sağlar. Uzaktan çalışma ve şube bağlantıları için standart çözümdür.</p>
      <h3>1. VPN Türleri</h3>
      <ul>
        <li><strong>Site-to-Site (IPSec):</strong> Şube–merkez ağ bağlantısı, şeffaf kullanıcı deneyimi</li>
        <li><strong>Remote Access (SSL/TLS):</strong> Tek kullanıcılar, tarayıcı veya istemci ile bağlanır</li>
        <li><strong>WireGuard:</strong> Modern, hızlı, yapılandırması kolay açık kaynak VPN</li>
      </ul>
      <h3>2. Güvenlik Hususları</h3>
      <p>Güçlü şifreleme (AES-256), doğru authentication (certificate veya MFA), split tunneling politikası ve VPN erişim loglarının izlenmesi.</p>
      <h3>3. Performans ve Ölçek</h3>
      <p>Donanım veya yazılım VPN seçimi, bant genişliği ve eşzamanlı kullanıcı sayısına göre kapasite planlaması.</p>
      <h3>Sonuç</h3>
      <p>İhtiyacınıza uygun VPN teknolojisi ve politikaları ile hem güvenli hem verimli uzaktan erişim sağlayın.</p>
    `,
    author: "muharremsen",
    date: "2026-02-26",
    category: "Network",
    tags: ["VPN", "IPSec", "SSL VPN", "WireGuard", "uzaktan erişim"],
    seoKeywords: "VPN teknolojileri, IPSec VPN, SSL VPN, WireGuard, güvenli uzaktan erişim",
  },
  {
    slug: "penetrasyon-testleri-sistemlerinizi-nasil-test-edersiniz",
    title: "Penetrasyon Testleri: Sistemlerinizi Nasıl Test Edersiniz?",
    description:
      "Penetrasyon testi (pentest) nedir? Web, ağ ve sosyal mühendislik testleri. OWASP, PTES ve raporlama süreçleri.",
    content: `
      <h2>Penetrasyon Testi Nedir?</h2>
      <p>Penetrasyon testi, sistemlerinize saldırgan gözüyle bakarak güvenlik açıklarını tespit eden, kontrollü ve planlı bir süreçtir.</p>
      <h3>1. Test Türleri</h3>
      <ul>
        <li><strong>Black box:</strong> Dışarıdan, ön bilgi olmadan test</li>
        <li><strong>White box:</strong> Kaynak kod ve mimari bilgisi ile derinlemesine test</li>
        <li><strong>Web / API pentest:</strong> OWASP Top 10 odaklı uygulama testleri</li>
        <li><strong>Sosyal mühendislik:</strong> Phishing ve fiziksel güvenlik senaryoları</li>
      </ul>
      <h3>2. Standartlar ve Metodoloji</h3>
      <p>OWASP Testing Guide, PTES (Penetration Testing Execution Standard), NIST SP 800-115. Kapsam ve kurallar önceden yazılı sözleşmeyle belirlenmelidir.</p>
      <h3>3. Raporlama ve İyileştirme</h3>
      <p>Bulunan zafiyetler risk seviyesine göre sıralanır; öneriler ve düzeltme adımları rapora eklenir. Retest ile kapatmalar doğrulanır.</p>
      <h3>Sonuç</h3>
      <p>Düzenli penetrasyon testleri, güvenlik açıklarını saldırganlardan önce keşfetmenizi sağlar.</p>
    `,
    author: "muharremsen",
    date: "2026-02-27",
    category: "Siber Güvenlik",
    tags: ["penetrasyon testi", "pentest", "OWASP", "güvenlik testi", "zafiyet"],
    seoKeywords: "penetrasyon testi, pentest, güvenlik testi, OWASP, zafiyet taraması",
  },
  {
    slug: "ag-guvenligi-firewall-konfigurasyonu-ve-en-iyi-uygulamalar",
    title: "Ağ Güvenliği: Firewall Konfigürasyonu ve En İyi Uygulamalar",
    description:
      "Firewall kuralları, DMZ tasarımı, default-deny yaklaşımı ve güvenlik profilleri. Kurumsal ağ güvenliği rehberi.",
    content: `
      <h2>Firewall Neden Kritik?</h2>
      <p>Firewall, ağ güvenliğinin ilk hattıdır. Doğru konfigürasyon ile yetkisiz erişimi engeller, trafiği filtreler ve loglama ile denetim sağlar.</p>
      <h3>1. Temel Kurallar</h3>
      <ul>
        <li><strong>Default deny:</strong> Açıkça izin verilmeyen her şey engellenir</li>
        <li><strong>En az ayrıcalık:</strong> Sadece gerekli port ve protokoller açılır</li>
        <li><strong>Explicit allow:</strong> Kaynak, hedef ve servis net tanımlanır</li>
      </ul>
      <h3>2. DMZ ve Segmentasyon</h3>
      <p>Web ve mail sunucuları DMZ'de; iç ağ ayrı segmentte. VLAN ve firewall zone'lar ile yatay hareket kısıtlanır.</p>
      <h3>3. Güvenlik Profilleri</h3>
      <p>Antivirus, IPS, web filter ve application control politikalarını trafik tipine göre uygulayın. Yönetim erişimi ayrı ve kısıtlı olsun.</p>
      <h3>4. Bakım ve Gözden Geçirme</h3>
      <p>Kuralları periyodik gözden geçirin; kullanılmayan kuralları kaldırın. Değişiklik yönetimi ve yedekleme yapın.</p>
      <h3>Sonuç</h3>
      <p>Tutarlı firewall politikaları ve düzenli denetimle ağ güvenliğinizi sürdürün.</p>
    `,
    author: "muharremsen",
    date: "2026-02-28",
    category: "Firewall",
    tags: ["ağ güvenliği", "firewall", "DMZ", "güvenlik kuralları", "segmentasyon"],
    seoKeywords: "ağ güvenliği, firewall konfigürasyonu, DMZ, firewall en iyi uygulamalar",
  },
  {
    slug: "siber-guvenlik-temelleri-isletmenizi-nasil-korursunuz",
    title: "Siber Güvenlik Temelleri: İşletmenizi Nasıl Korursunuz?",
    description:
      "Küçük ve orta ölçekli işletmeler için siber güvenlik temelleri: yedekleme, güçlü parola, güncellemeler, e-posta güvenliği ve farkındalık.",
    content: `
      <h2>Siber Güvenlik Neden Her İşletme İçin Önemli?</h2>
      <p>Veri ihlali ve fidye yazılımı saldırıları sadece büyük şirketlere değil, KOBİ'lere de yöneliyor. Temel önlemler büyük fark yaratır.</p>
      <h3>1. Yedekleme</h3>
      <p>Kritik verileri düzenli ve otomatik yedekleyin. Yedekleri ağdan izole veya off-site tutun; periyodik restore testi yapın.</p>
      <h3>2. Kimlik Doğrulama</h3>
      <ul>
        <li>Güçlü parola politikası ve mümkünse MFA (çok faktörlü kimlik doğrulama)</li>
        <li>Yönetici hesaplarını sınırlayın, ayrıcalıklı erişim loglansın</li>
      </ul>
      <h3>3. Güncellemeler ve Yamalar</h3>
      <p>İşletim sistemi ve uygulamaları güncel tutun. Kritik güvenlik yamalarını zamanında uygulayın.</p>
      <h3>4. E-posta ve Eğitim</h3>
      <p>Phishing ve dolandırıcılık e-postalarına karşı filtre ve bilinç. Çalışanlara güvenlik farkındalık eğitimi verin.</p>
      <h3>5. Firewall ve Ağ</h3>
      <p>Firewall kullanın, gereksiz portları kapatın. Wi-Fi ağını güçlü şifre ve ayrı misafir ağı ile yönetin.</p>
      <h3>Sonuç</h3>
      <p>Bu temelleri uygulayarak birçok saldırıyı önleyebilir veya etkisini azaltabilirsiniz.</p>
    `,
    author: "muharremsen",
    date: "2026-02-29",
    category: "Siber Güvenlik",
    tags: ["siber güvenlik", "KOBİ", "yedekleme", "MFA", "farkındalık"],
    seoKeywords: "siber güvenlik temelleri, işletme güvenliği, KOBİ siber güvenlik, güvenlik farkındalığı",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

