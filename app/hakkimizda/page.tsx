import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const siteUrl = "https://muharremsen.com";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Network, firewall, VPN, mail server ve sunucu altyapısı konusunda deneyimli muharremsen ekibi. FortiGate, MikroTik, VMware, Proxmox, FreePBX uzmanlığı.",
  keywords: "hakkımızda, muharremsen, network, firewall, VPN, mail server, IT altyapı",
  openGraph: {
    title: "Hakkımızda | muharremsen",
    description: "Network, firewall, VPN ve mail server hizmetleri konusunda deneyimli ekibimiz.",
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
            muharremsen, modern teknolojilerle işletmelerin dijital dönüşümüne katkı sağlayan profesyonel bir yazılım geliştirme ve IT çözümleri şirketidir.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Misyonumuz</h2>
          <p className="text-gray-300 mb-6">
            İşletmelerin teknoloji ihtiyaçlarını karşılamak, modern ve güvenilir çözümler sunmak ve müşterilerimizin başarısına katkıda bulunmak misyonumuzdur.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Vizyonumuz</h2>
          <p className="text-gray-300 mb-6">
            Türkiye'nin önde gelen yazılım geliştirme ve IT çözümleri şirketi olmak, yenilikçi teknolojilerle sektörde öncü olmak vizyonumuzdur.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Değerlerimiz</h2>
          <ul className="text-gray-300 space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Kalite:</strong> Her projede en yüksek kalite standartlarını uygularız</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Güvenilirlik:</strong> Sözümüzü tutar, zamanında teslimat yaparız</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>İnovasyon:</strong> En güncel teknolojileri takip eder ve uygularız</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Müşteri Odaklılık:</strong> Müşteri memnuniyeti önceliğimizdir</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Şeffaflık:</strong> Açık ve dürüst iletişim kurarız</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Hizmet Alanlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Web Geliştirme</h3>
              <p className="text-gray-300 text-sm">Modern web siteleri ve uygulamaları</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Mobil Uygulama</h3>
              <p className="text-gray-300 text-sm">iOS ve Android uygulamaları</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Siber Güvenlik</h3>
              <p className="text-gray-300 text-sm">Güvenlik çözümleri ve danışmanlık</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Bulut Çözümleri</h3>
              <p className="text-gray-300 text-sm">Cloud migration ve yönetim</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/hizmetler" 
              className="bg-accent-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors text-center"
            >
              Hizmetlerimizi İnceleyin
            </Link>
            <Link 
              href="/iletisim" 
              className="bg-transparent border-2 border-accent-green text-accent-green px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/10 transition-colors text-center"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
