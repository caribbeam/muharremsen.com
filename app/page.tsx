import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { parseWordPressContent, renderWordPressContent } from "@/lib/parseWordPressContent";

export const revalidate = 10;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("ana-sayfa");

  if (!page) {
    return {
      title: "muharremsen | Yazılım Geliştirme ve IT Çözümleri",
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
    title: title ? `${title} | muharremsen` : "muharremsen",
    description: description || undefined,
  };
}

export default async function Home() {
  let page;
  let errorMessage = null;

  try {
    page = await getPageBySlug("ana-sayfa");
  } catch (error) {
    console.error("WordPress API Error:", error);
    errorMessage = "WordPress API'ye bağlanılamıyor. API URL'ini kontrol edin.";
  }

  if (!page) {
    return (
      <SectionWrapper className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WordPress İçerik Bekleniyor
          </h1>
          
          {errorMessage && (
            <div className="glass rounded-xl p-6 mb-6 bg-red-900/20 border-red-500/50">
              <p className="text-red-400 font-semibold mb-2">⚠️ API Bağlantı Hatası</p>
              <p className="text-gray-300 text-sm">{errorMessage}</p>
              <p className="text-gray-400 text-xs mt-2">
                API URL: https://panel.muharremsen.com/wp-json/wp/v2
              </p>
            </div>
          )}

          <p className="text-gray-400 text-lg mb-4">
            WordPress panelinde <strong className="text-accent-green">slug: "ana-sayfa"</strong> olan bir sayfa oluşturmanız gerekiyor.
          </p>
          
          <div className="glass rounded-xl p-6 mt-8 text-left">
            <h2 className="text-xl font-bold text-white mb-4">WordPress'te Oluşturulması Gereken Sayfalar:</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong className="text-accent-green">Slug:</strong> <code className="bg-dark-tertiary px-2 py-1 rounded">ana-sayfa</code> → Ana Sayfa (/)</li>
              <li>• <strong className="text-accent-green">Slug:</strong> <code className="bg-dark-tertiary px-2 py-1 rounded">hizmetler</code> → Hizmetler (/hizmetler)</li>
              <li>• <strong className="text-accent-green">Slug:</strong> <code className="bg-dark-tertiary px-2 py-1 rounded">hakkimizda</code> → Hakkımızda (/hakkimizda)</li>
              <li>• <strong className="text-accent-green">Slug:</strong> <code className="bg-dark-tertiary px-2 py-1 rounded">iletisim</code> → İletişim (/iletisim)</li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">API Test:</h3>
              <p className="text-gray-400 text-sm mb-2">
                Tarayıcı console'unu açın (F12) ve şu komutu çalıştırın:
              </p>
              <code className="block bg-dark-tertiary p-3 rounded text-xs text-gray-300 break-all">
                fetch('https://panel.muharremsen.com/wp-json/wp/v2/pages').then(r => r.json()).then(console.log)
              </code>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  // Debug: İçerik kontrolü
  const hasContent = page.content.rendered && page.content.rendered.trim().length > 0;

  // Fallback içerik
  const fallbackContent = (
    <div className="space-y-8">
      <div className="glass rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-4">Hoş Geldiniz</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          muharremsen olarak, teknoloji dünyasında güvenilir çözümler sunuyoruz. 
          Yazılım geliştirme, sistem yönetimi ve danışmanlık hizmetlerimizle 
          işletmenizin dijital dönüşümünde yanınızdayız.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Modern teknolojiler ve en iyi uygulamalarla, projelerinizi başarıya 
          taşıyoruz. Müşteri memnuniyeti ve kalite odaklı yaklaşımımızla, 
          uzun vadeli iş ortaklıkları kuruyoruz.
        </p>
      </div>

      <div className="glass rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent-green mb-3">Yapay Zeka Destekli Yazılımlar</h3>
            <p className="text-gray-300">
              AI teknolojileriyle güçlendirilmiş özel yazılım çözümleri geliştiriyoruz.
            </p>
          </div>
          <div className="bg-dark-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent-green mb-3">Proforma Uygulamalar</h3>
            <p className="text-gray-300">
              İş süreçlerinizi optimize eden proforma ve fatura yönetim sistemleri.
            </p>
          </div>
          <div className="bg-dark-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent-green mb-3">Helpdesk Sistemleri</h3>
            <p className="text-gray-300">
              Müşteri destek süreçlerinizi yöneten profesyonel helpdesk çözümleri.
            </p>
          </div>
          <div className="bg-dark-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent-green mb-3">LMS (Öğrenme Yönetim Sistemleri)</h3>
            <p className="text-gray-300">
              Eğitim ve öğrenme süreçlerinizi dijitalleştiren LMS platformları.
            </p>
          </div>
          <div className="bg-dark-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent-green mb-3">Envanter Yönetimi</h3>
            <p className="text-gray-300">
              Stok ve envanter takibinizi kolaylaştıran entegre sistemler.
            </p>
          </div>
          <div className="bg-dark-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent-green mb-3">QDMS (Kalite Dokümantasyon)</h3>
            <p className="text-gray-300">
              Kalite yönetim sistemleriniz için dokümantasyon çözümleri.
            </p>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-8 bg-yellow-900/10 border-yellow-500/30">
        <p className="text-yellow-400 text-sm mb-2">💡 İpucu</p>
        <p className="text-gray-300 text-sm">
          Bu içerik WordPress'ten geliyor. WordPress panelinde <strong className="text-accent-green">"ana-sayfa"</strong> slug'ına sahip 
          sayfaya içerik eklediğinizde, bu içerik yerine WordPress içeriği gösterilecektir.
        </p>
      </div>
    </div>
  );

  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-4xl mx-auto">
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
  );
}
