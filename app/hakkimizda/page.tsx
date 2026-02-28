import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const siteUrl = "https://muharremsen.com";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Network, firewall, VPN, mail server ve sunucu altyapısı konusunda deneyimli muharremsen. FortiGate, MikroTik, VMware, Proxmox, FreePBX uzmanlığı. Bağımsız IT çözümleri.",
  keywords: "hakkımızda, muharremsen, network, firewall, VPN, mail server, IT altyapı",
  openGraph: {
    title: "Hakkımızda | muharremsen",
    description: "Network, firewall, VPN ve mail server hizmetleri konusunda deneyimli bağımsız uzman.",
    url: `${siteUrl}/hakkimizda`,
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/hakkimizda` },
};

export default function Hakkimizda() {
  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hakkımızda
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white
          prose-p:text-gray-300
          prose-strong:text-white
          prose-a:text-accent-green
          prose-a:no-underline
          hover:prose-a:underline
          prose-ul:text-gray-300
          prose-ol:text-gray-300
          prose-li:text-gray-300">
          
          <p className="text-xl text-gray-300 mb-6">
            muharremsen, modern teknolojilerle işletmelerin dijital dönüşümüne katkı sağlayan, profesyonel yazılım geliştirme ve IT çözümleri hizmeti sunan bağımsız bir uzmandır.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Misyonum</h2>
          <p className="text-gray-300 mb-6">
            İşletmelerin teknoloji ihtiyaçlarını karşılamak, modern ve güvenilir çözümler sunmak ve müşterilerin başarısına katkıda bulunmak misyonumdur.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Vizyonum</h2>
          <p className="text-gray-300 mb-6">
            Profesyonel hizmet ve müşteri memnuniyeti ile sektörde güvenilir bir isim olmak, yenilikçi teknolojilerle network, firewall, VPN ve sunucu alanında öncü olmak vizyonumdur.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Değerlerim</h2>
          <ul className="text-gray-300 space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Kalite:</strong> Her projede en yüksek kalite standartlarını uygularım</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Güvenilirlik:</strong> Sözümü tutar, zamanında teslimat yaparım</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>İnovasyon:</strong> En güncel teknolojileri takip eder ve uygularım</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Müşteri Odaklılık:</strong> Müşteri memnuniyeti önceliğimdir</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Şeffaflık:</strong> Açık ve dürüst iletişim kurarım</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Hizmet Alanlarım</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Network ve Firewall</h3>
              <p className="text-gray-300 text-sm">FortiGate, MikroTik, VPN kurulumu ve yönetimi</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Sunucu ve Sanallaştırma</h3>
              <p className="text-gray-300 text-sm">VMware, Proxmox, VDS kurulum ve yönetim</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Mail Server</h3>
              <p className="text-gray-300 text-sm">Kurulum, SPF/DKIM/DMARC, antispam</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Siber Güvenlik</h3>
              <p className="text-gray-300 text-sm">Firewall, penetrasyon testi, güvenlik danışmanlığı</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/hizmetler" 
              className="bg-accent-green text-dark-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-turquoise hover:text-dark-primary transition-colors text-center"
            >
              Hizmetlerimizi İnceleyin
            </Link>
            <Link 
              href="/iletisim" 
              className="bg-transparent border-2 border-accent-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/10 hover:text-accent-green transition-colors text-center"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
