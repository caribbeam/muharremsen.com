import { Metadata } from "next";
import Script from "next/script";
import { getPageBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { parseWordPressContent, renderWordPressContent } from "@/lib/parseWordPressContent";
import Link from "next/link";

export const revalidate = 10;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("hizmetler");

  if (!page) {
    return {
      title: "Hizmetlerimiz | muharremsen",
    };
  }

  const title =
    page.yoast_head_json?.title ||
    page.yoast_head_json?.og_title ||
    page.title.rendered;
  const description =
    page.yoast_head_json?.description ||
    page.yoast_head_json?.og_description ||
    page.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160);

  return {
    title: title ? `${title} | muharremsen` : "Hizmetlerimiz | IT Çözümleri ve Yazılım Geliştirme | muharremsen",
    description: description || "Yapay zeka destekli yazılımlar, FreePBX/Asterisk kurulumları, Domain Server, Active Directory, VPN çözümleri, ISO 27001 BGYS desteği, Supplier Portal uygulamaları ve daha fazlası. Profesyonel IT hizmetleri.",
    keywords: "yapay zeka yazılımları, FreePBX kurulumu, Domain Server, Active Directory, VPN çözümleri, ISO 27001, BGYS, IT danışmanlık, sistem yönetimi, supplier portal, tedarikçi portalı",
    alternates: {
      canonical: "https://muharremsen.com/hizmetler",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: title ? `${title} | muharremsen` : "Hizmetlerimiz | IT Çözümleri | muharremsen",
      description: description || "Yapay zeka destekli yazılımlar, FreePBX kurulumları, Domain Server ve IT çözümleri.",
      url: "https://muharremsen.com/hizmetler",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | muharremsen` : "Hizmetlerimiz | IT Çözümleri | muharremsen",
      description: description || "Yapay zeka destekli yazılımlar, FreePBX kurulumları, Domain Server ve IT çözümleri.",
    },
  };
}

export default async function Hizmetler() {
  const page = await getPageBySlug("hizmetler");

  if (!page) {
    return (
      <SectionWrapper className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            İçerik Bekleniyor
          </h1>
          <p className="text-gray-400 text-lg">
            WordPress panelinde <strong>slug: "hizmetler"</strong> olan bir sayfa oluşturun.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  const hasContent = page.content.rendered && page.content.rendered.trim().length > 0;

  // Fallback içerik
  const fallbackContent = (
    <div className="space-y-8">
      <div className="glass rounded-xl p-8">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Teknoloji çözümlerinde geniş bir hizmet yelpazesi sunuyoruz. 
          İşletmenizin ihtiyaçlarına özel, modern ve güvenilir çözümler geliştiriyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold text-white mb-3">Yapay Zeka Destekli Yazılımlar</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            AI teknolojileriyle güçlendirilmiş özel yazılım çözümleri. Makine öğrenmesi, 
            doğal dil işleme ve görüntü tanıma teknolojileriyle iş süreçlerinizi optimize ediyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Yapay%20Zeka%20Destekli%20Yazılımlar%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">📄</div>
          <h3 className="text-xl font-bold text-white mb-3">Proforma Uygulamalar</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            İş süreçlerinizi dijitalleştiren proforma ve fatura yönetim sistemleri. 
            Otomatik fatura oluşturma, takip ve raporlama özellikleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Proforma%20Uygulamalar%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🎫</div>
          <h3 className="text-xl font-bold text-white mb-3">Helpdesk Sistemleri</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Müşteri destek süreçlerinizi profesyonelce yöneten helpdesk çözümleri. 
            Ticket yönetimi, SLA takibi ve otomatik yönlendirme özellikleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Helpdesk%20Sistemleri%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-white mb-3">LMS (Öğrenme Yönetim Sistemleri)</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Eğitim ve öğrenme süreçlerinizi dijitalleştiren LMS platformları. 
            Kurs yönetimi, sınav sistemi ve ilerleme takibi.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=LMS%20(Öğrenme%20Yönetim%20Sistemleri)%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-bold text-white mb-3">Envanter Yönetimi</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Stok ve envanter takibinizi kolaylaştıran entegre sistemler. 
            Gerçek zamanlı stok takibi, otomatik sipariş yönetimi ve raporlama.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Envanter%20Yönetimi%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-bold text-white mb-3">QDMS (Kalite Dokümantasyon)</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Kalite yönetim sistemleriniz için dokümantasyon çözümleri. 
            Doküman versiyonlama, onay süreçleri ve uyumluluk takibi.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=QDMS%20(Kalite%20Dokümantasyon)%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-bold text-white mb-3">Uzak Bağlantı IT Uygulamaları</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Uzaktan erişim ve yönetim için güvenli IT uygulamaları. 
            VPN çözümleri, uzaktan masaüstü erişimi ve sistem yönetimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Uzak%20Bağlantı%20IT%20Uygulamaları%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🖥️</div>
          <h3 className="text-xl font-bold text-white mb-3">Domain Server / Active Directory</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Kurumsal ağ altyapınız için domain server ve Active Directory kurulumları. 
            Kullanıcı yönetimi, grup politikaları ve güvenlik yapılandırmaları.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Domain%20Server%20/%20Active%20Directory%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🖼️</div>
          <h3 className="text-xl font-bold text-white mb-3">Imaj Yönetimi</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Kurumsal yapıda imaj yönetim sistemleri. 
            Sistem imajları, dağıtım ve güncelleme yönetimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Imaj%20Yönetimi%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">☎️</div>
          <h3 className="text-xl font-bold text-white mb-3">FreePBX / Asterisk Kurulumları</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Açık kaynak telefon santrali çözümleri. 
            VoIP sistemleri, çağrı yönlendirme ve sesli mesaj özellikleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=FreePBX%20/%20Asterisk%20Kurulumları%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-bold text-white mb-3">ISO 27001 BGYS Desteği</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Bilgi güvenliği yönetim sistemi (BGYS) danışmanlığı ve uyumluluk desteği. 
            ISO 27001 sertifikasyon süreçlerinde rehberlik.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=ISO%2027001%20BGYS%20Desteği%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col">
          <div className="text-4xl mb-4">🏢</div>
          <h3 className="text-xl font-bold text-white mb-3">Supplier Portal Uygulaması</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Tedarikçi yönetimi ve iş birliği için kapsamlı portal çözümleri. 
            Sipariş yönetimi, fiyat teklifleri, dokümantasyon paylaşımı ve tedarikçi performans takibi.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-700">
            <Link
              href="https://wa.me/905304989553?text=Supplier%20Portal%20Uygulaması%20hizmeti%20için%20demo%20görmek%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-green/20 hover:bg-accent-green/30 text-accent-green text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              Demo Gör
            </Link>
            <Link
              href="/iletisim"
              className="flex-1 bg-dark-tertiary hover:bg-dark-secondary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium touch-manipulation"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>

    </div>
  );

  // Service Schema for Services Page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "muharremsen Hizmetleri",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Yapay Zeka Destekli Yazılımlar",
          description: "AI teknolojileriyle güçlendirilmiş özel yazılım çözümleri",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Proforma Uygulamalar",
          description: "İş süreçlerinizi dijitalleştiren proforma ve fatura yönetim sistemleri",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Helpdesk Sistemleri",
          description: "Müşteri destek süreçlerinizi profesyonelce yöneten helpdesk çözümleri",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "LMS (Öğrenme Yönetim Sistemleri)",
          description: "Eğitim ve öğrenme süreçlerinizi dijitalleştiren LMS platformları",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Envanter Yönetimi",
          description: "Stok ve envanter takibinizi kolaylaştıran entegre sistemler",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Domain Server / Active Directory",
          description: "Kurumsal ağ altyapınız için domain server ve Active Directory kurulumları",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          name: "FreePBX / Asterisk Kurulumları",
          description: "Açık kaynak telefon santrali çözümleri ve VoIP sistemleri",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Service",
          name: "ISO 27001 BGYS Desteği",
          description: "Bilgi güvenliği yönetim sistemi danışmanlığı ve uyumluluk desteği",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: {
          "@type": "Service",
          name: "Supplier Portal Uygulaması",
          description: "Tedarikçi yönetimi ve iş birliği için kapsamlı portal çözümleri",
          provider: {
            "@type": "Organization",
            name: "muharremsen",
          },
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="service-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SectionWrapper className="pt-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {page.title.rendered}
          </h1>
          
          {hasContent ? (
            (() => {
              const sections = parseWordPressContent(page.content.rendered);
              return renderWordPressContent(sections);
            })()
          ) : (
            fallbackContent
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
