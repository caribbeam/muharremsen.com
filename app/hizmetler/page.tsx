import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | muharremsen",
  description: "Web geliştirme, mobil uygulama, siber güvenlik, bulut çözümleri, sistem yönetimi ve IT danışmanlık hizmetleri. Profesyonel teknoloji çözümleri.",
};

export default function Hizmetler() {
  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hizmetlerimiz
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Modern teknolojilerle işletmenizin dijital dönüşümüne katkı sağlayan kapsamlı IT çözümleri sunuyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Geliştirme */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold text-white mb-3">Web Geliştirme</h2>
            <p className="text-gray-300 mb-4">
              Modern, responsive ve SEO uyumlu web siteleri. Next.js, React, TypeScript ile profesyonel web uygulamaları geliştiriyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Kurumsal web siteleri</li>
              <li>• E-ticaret platformları</li>
              <li>• Web uygulamaları</li>
              <li>• API geliştirme</li>
            </ul>
          </div>

          {/* Mobil Uygulama */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">📱</div>
            <h2 className="text-2xl font-bold text-white mb-3">Mobil Uygulama</h2>
            <p className="text-gray-300 mb-4">
              iOS ve Android için native ve cross-platform mobil uygulamalar. React Native ve Flutter ile modern çözümler.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Native iOS/Android uygulamaları</li>
              <li>• Cross-platform çözümler</li>
              <li>• Mobil API entegrasyonları</li>
              <li>• App Store optimizasyonu</li>
            </ul>
          </div>

          {/* Siber Güvenlik */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-white mb-3">Siber Güvenlik</h2>
            <p className="text-gray-300 mb-4">
              Kurumsal siber güvenlik çözümleri, güvenlik denetimi ve danışmanlık hizmetleri ile sistemlerinizi koruyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Güvenlik denetimi</li>
              <li>• Penetrasyon testleri</li>
              <li>• Güvenlik danışmanlığı</li>
              <li>• Incident response</li>
            </ul>
          </div>

          {/* Bulut Çözümleri */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">☁️</div>
            <h2 className="text-2xl font-bold text-white mb-3">Bulut Çözümleri</h2>
            <p className="text-gray-300 mb-4">
              AWS, Azure ve Google Cloud ile bulut altyapı kurulumu, migration ve yönetim hizmetleri.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Bulut geçişi</li>
              <li>• Cloud infrastructure</li>
              <li>• DevOps çözümleri</li>
              <li>• Container orchestration</li>
            </ul>
          </div>

          {/* Sistem Yönetimi */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">⚙️</div>
            <h2 className="text-2xl font-bold text-white mb-3">Sistem Yönetimi</h2>
            <p className="text-gray-300 mb-4">
              Server yönetimi, network altyapısı, backup çözümleri ve 7/24 sistem izleme hizmetleri.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Server yönetimi</li>
              <li>• Network altyapısı</li>
              <li>• Backup çözümleri</li>
              <li>• 7/24 izleme</li>
            </ul>
          </div>

          {/* IT Danışmanlık */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">💼</div>
            <h2 className="text-2xl font-bold text-white mb-3">IT Danışmanlık</h2>
            <p className="text-gray-300 mb-4">
              Teknoloji stratejisi, dijital dönüşüm, sistem optimizasyonu ve IT altyapı danışmanlığı.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Teknoloji stratejisi</li>
              <li>• Dijital dönüşüm</li>
              <li>• Sistem optimizasyonu</li>
              <li>• IT roadmap</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/iletisim" 
            className="bg-accent-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors inline-block"
          >
            Teklif Alın
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
