import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import NetworkBackground from "@/components/NetworkBackground";

const siteUrl = "https://muharremsen.com";

export const metadata: Metadata = {
  title: "İstanbul Network, Firewall, VPN ve Mail Server Kurulumu",
  description:
    "İstanbul ve Türkiye geneli network, firewall, VPN, mail server ve sunucu kurulumu. FortiGate, MikroTik, VMware, Proxmox. 7/24 destek. Ücretsiz keşif ve teklif için hemen arayın: 0 530 498 95 53.",
  keywords:
    "İstanbul network kurulum, FortiGate İstanbul, firewall kurulum, MikroTik, VPN, mail server, sunucu kurulumu, VMware, Proxmox, FreePBX, siber güvenlik",
  openGraph: {
    title: "muharremsen | İstanbul Network, Firewall, VPN, Mail Server",
    description: "İstanbul network, firewall, VPN, mail server kurulumu. 7/24 destek. Ücretsiz keşif.",
    url: siteUrl,
    type: "website",
    locale: "tr_TR",
  },
  alternates: { canonical: siteUrl },
};

const serviceCards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9a9 9 0 009 9z" />
      </svg>
    ),
    iconBg: "bg-blue-500",
    title: "Network Güvenliği",
    description:
      "Ağ altyapınızın güvenliğini sağlayan kapsamlı çözümler. Firewall yapılandırma, IDS/IPS kurulumu, ağ izleme ve tehdit tespit sistemleri.",
    items: [
      "Firewall & IDS/IPS Yapılandırma",
      "VPN & Güvenli Uzaktan Erişim",
      "Ağ Segmentasyonu & Mikro-segmentasyon",
      "DDoS Koruma & Yük Dengeleme",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    iconBg: "bg-emerald-500",
    title: "Sunucu & Sanallaştırma",
    description:
      "Fiziksel ve sanal sunucu kurulumu, VMware ve Proxmox altyapıları. Veri merkezi, cluster ve yedekleme çözümleri.",
    items: [
      "Fiziksel Sunucu Kurulum ve Güvenliği",
      "Proxmox / VMware Sanallaştırma",
      "RAID, Disk ve BIOS Yapılandırması",
      "Yedekleme ve Felaket Kurtarma",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    iconBg: "bg-violet-500",
    title: "VPN & Uzaktan Erişim",
    description:
      "Site-to-site ve uzak kullanıcı VPN çözümleri. IPSec, SSL VPN ve güvenli uzaktan erişim altyapıları.",
    items: [
      "IPSec ve SSL VPN Tünelleri",
      "Uzaktan Çalışma Erişim Çözümleri",
      "Çoklu Şube Ağ Bağlantıları",
      "VPN İzleme ve Yönetim",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-cyan-500",
    title: "Firewall Güvenlik ve Yönetim",
    description:
      "Kurumsal ağlar için yeni nesil firewall çözümleri: yapılandırma, optimizasyon ve sürekli izleme. FortiGate, Sophos, Palo Alto, pfSense.",
    items: [
      "FortiGate, Sophos, Palo Alto, pfSense Kurulumu",
      "Güvenlik Politikaları ve Policy Yönetimi",
      "Web Filter, Antivirus, IPS Entegrasyonu",
      "Firewall Log ve SIEM Entegrasyonu",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-amber-500",
    title: "Mail Server İşlemleri",
    description:
      "Kurumsal e-posta altyapısı: Exchange, Zimbra, Postfix kurulumu, SPF/DKIM/DMARC ve antispam çözümleri.",
    items: [
      "Mail Server Kurulum ve Migration",
      "SPF, DKIM, DMARC Yapılandırması",
      "Antispam ve Antivirüs Filtreleri",
      "Mail Arşivleme ve Yedekleme",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-rose-500",
    title: "Siber Güvenlik Testleri",
    description:
      "Sistemlerinizi saldırgan bakış açısıyla test ediyoruz. Penetrasyon testleri, zafiyet taramaları ve güvenlik denetimleri.",
    items: [
      "Web Uygulama Penetrasyon Testi",
      "Mobil Uygulama Güvenlik Analizi",
      "API & Backend Zafiyet Taraması",
      "KVKK / ISO 27001 Uyumluluk Desteği",
    ],
  },
];

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Network, Firewall, VPN, Mail Server ve Sunucu Çözümleri",
  description:
    "Network altyapısı, firewall (FortiGate, MikroTik), VPN, mail server, sunucu kurulumu, sanallaştırma (VMware, Proxmox), IP santral (FreePBX) hizmetleri.",
  url: siteUrl,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Network Güvenliği" },
      { "@type": "ListItem", position: 2, name: "Sunucu & Sanallaştırma" },
      { "@type": "ListItem", position: 3, name: "VPN & Uzaktan Erişim" },
      { "@type": "ListItem", position: 4, name: "Firewall Güvenlik ve Yönetim" },
      { "@type": "ListItem", position: 5, name: "Mail Server İşlemleri" },
      { "@type": "ListItem", position: 6, name: "Siber Güvenlik Testleri" },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      {/* Hero – arka planda hareketli ağ, orta alanda network / sunucu / vpn / firewall / mail server */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/85 via-[#0a0e27]/50 to-[#0a0e27]/90" />
        <div className="relative z-10 container mx-auto text-center max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Network, Sunucu, VPN, Firewall & Mail Server
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Ağ altyapısı, sunucu kurulumu, VPN, firewall ve mail server işlemleri ile güvenli ve kesintisiz bir IT ortamı sunuyoruz. 7/24 izleme ve destek.
          </p>
          <p className="text-cyan-300/90 text-sm md:text-base mb-8">
            İstanbul ve Türkiye geneli — Ücretsiz keşif ve teklif için hemen arayın.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
            <Link
              href="tel:+905304989553"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity min-h-[44px]"
            >
              Hemen Ara — 0 530 498 95 53
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center bg-white/10 border border-cyan-400/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/15 transition-colors min-h-[44px]"
            >
              Teklif Al
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center bg-transparent border border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors min-h-[44px]"
            >
              Hizmetleri Gör
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-400 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> 7/24 Destek
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Ücretsiz Keşif
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" /> İstanbul & Türkiye
            </span>
          </div>
        </div>
      </section>

      {/* Hizmetler alanı – detaylı iş başlıkları ve açıklamalar */}
      <SectionWrapper className="pt-16 pb-20" id="hizmetler">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Network, sunucu, VPN, firewall ve mail server alanında detaylı teknik hizmetler.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-colors flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-lg ${card.iconBg} flex items-center justify-center text-white mb-4`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/hizmetler"
                  className="mt-4 inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Detaylı bilgi →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Neden biz */}
      <SectionWrapper className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Neden muharremsen?</h2>
          <ul className="text-gray-300 space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-accent-green">✓</span>
              <span><strong>Ücretsiz ön görüşme ve keşif:</strong> Projenizi dinliyoruz, ihtiyaca özel teklif hazırlıyoruz</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green">✓</span>
              <span><strong>Deneyimli ekip:</strong> Network, firewall ve sunucu alanında uzman kadro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green">✓</span>
              <span><strong>Modern teknolojiler:</strong> FortiGate, MikroTik, VMware, Proxmox ve güncel çözümler</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green">✓</span>
              <span><strong>7/24 destek:</strong> Kesintisiz teknik destek ve izleme</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-green">✓</span>
              <span><strong>Müşteri odaklı:</strong> İhtiyacınıza özel network, sunucu ve mail server çözümleri</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+905304989553"
              className="bg-accent-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors text-center"
            >
              Hemen Arayın — Ücretsiz Keşif
            </Link>
            <Link
              href="/iletisim"
              className="bg-transparent border-2 border-accent-green text-accent-green px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/10 transition-colors text-center"
            >
              Teklif Formu
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
