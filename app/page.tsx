import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "muharremsen | Yazılım Geliştirme ve IT Çözümleri",
  description: "Profesyonel yazılım geliştirme, web tasarım, mobil uygulama, siber güvenlik ve IT danışmanlık hizmetleri. Modern teknolojilerle işletmenizi dijital dönüşüme hazırlayın.",
};

export default function Home() {
  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Yazılım Geliştirme ve IT Çözümleri
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
            Modern teknolojilerle işletmenizi dijital dönüşüme hazırlayın. Profesyonel yazılım geliştirme, web tasarım, mobil uygulama ve IT danışmanlık hizmetleri ile yanınızdayız.
          </p>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Hizmetlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Web Geliştirme</h3>
              <p className="text-gray-300">
                Modern, responsive ve SEO uyumlu web siteleri. Next.js, React ve TypeScript ile profesyonel web uygulamaları.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Mobil Uygulama</h3>
              <p className="text-gray-300">
                iOS ve Android için native ve cross-platform mobil uygulamalar. React Native ve Flutter ile modern çözümler.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Siber Güvenlik</h3>
              <p className="text-gray-300">
                Kurumsal siber güvenlik çözümleri, güvenlik denetimi ve danışmanlık hizmetleri. Sistemlerinizi koruyun.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">IT Danışmanlık</h3>
              <p className="text-gray-300">
                Teknoloji stratejisi, bulut geçişi, sistem optimizasyonu ve IT altyapı danışmanlığı.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mt-8 mb-4">Neden muharremsen?</h2>
          
          <ul className="text-gray-300 space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Deneyimli Ekip:</strong> Yılların verdiği deneyim ve uzmanlık</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Modern Teknolojiler:</strong> En güncel teknolojiler ve best practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>7/24 Destek:</strong> Kesintisiz teknik destek ve bakım hizmetleri</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span><strong>Müşteri Odaklı:</strong> İhtiyaçlarınıza özel çözümler</span>
            </li>
          </ul>

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
