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

