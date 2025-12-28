import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { parseWordPressContent, renderWordPressContent } from "@/lib/parseWordPressContent";

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
    title: title ? `${title} | muharremsen` : "Hizmetlerimiz | muharremsen",
    description: description || undefined,
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
        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold text-white mb-3">Yapay Zeka Destekli Yazılımlar</h3>
          <p className="text-gray-300 text-sm">
            AI teknolojileriyle güçlendirilmiş özel yazılım çözümleri. Makine öğrenmesi, 
            doğal dil işleme ve görüntü tanıma teknolojileriyle iş süreçlerinizi optimize ediyoruz.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">📄</div>
          <h3 className="text-xl font-bold text-white mb-3">Proforma Uygulamalar</h3>
          <p className="text-gray-300 text-sm">
            İş süreçlerinizi dijitalleştiren proforma ve fatura yönetim sistemleri. 
            Otomatik fatura oluşturma, takip ve raporlama özellikleri.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🎫</div>
          <h3 className="text-xl font-bold text-white mb-3">Helpdesk Sistemleri</h3>
          <p className="text-gray-300 text-sm">
            Müşteri destek süreçlerinizi profesyonelce yöneten helpdesk çözümleri. 
            Ticket yönetimi, SLA takibi ve otomatik yönlendirme özellikleri.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-white mb-3">LMS (Öğrenme Yönetim Sistemleri)</h3>
          <p className="text-gray-300 text-sm">
            Eğitim ve öğrenme süreçlerinizi dijitalleştiren LMS platformları. 
            Kurs yönetimi, sınav sistemi ve ilerleme takibi.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-bold text-white mb-3">Envanter Yönetimi</h3>
          <p className="text-gray-300 text-sm">
            Stok ve envanter takibinizi kolaylaştıran entegre sistemler. 
            Gerçek zamanlı stok takibi, otomatik sipariş yönetimi ve raporlama.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-bold text-white mb-3">QDMS (Kalite Dokümantasyon)</h3>
          <p className="text-gray-300 text-sm">
            Kalite yönetim sistemleriniz için dokümantasyon çözümleri. 
            Doküman versiyonlama, onay süreçleri ve uyumluluk takibi.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-bold text-white mb-3">Uzak Bağlantı IT Uygulamaları</h3>
          <p className="text-gray-300 text-sm">
            Uzaktan erişim ve yönetim için güvenli IT uygulamaları. 
            VPN çözümleri, uzaktan masaüstü erişimi ve sistem yönetimi.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🖥️</div>
          <h3 className="text-xl font-bold text-white mb-3">Domain Server / Active Directory</h3>
          <p className="text-gray-300 text-sm">
            Kurumsal ağ altyapınız için domain server ve Active Directory kurulumları. 
            Kullanıcı yönetimi, grup politikaları ve güvenlik yapılandırmaları.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🖼️</div>
          <h3 className="text-xl font-bold text-white mb-3">Imaj Yönetimi</h3>
          <p className="text-gray-300 text-sm">
            Kurumsal yapıda imaj yönetim sistemleri. 
            Sistem imajları, dağıtım ve güncelleme yönetimi.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">☎️</div>
          <h3 className="text-xl font-bold text-white mb-3">FreePBX / Asterisk Kurulumları</h3>
          <p className="text-gray-300 text-sm">
            Açık kaynak telefon santrali çözümleri. 
            VoIP sistemleri, çağrı yönlendirme ve sesli mesaj özellikleri.
          </p>
        </div>

        <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-bold text-white mb-3">ISO 27001 BGYS Desteği</h3>
          <p className="text-gray-300 text-sm">
            Bilgi güvenliği yönetim sistemi (BGYS) danışmanlığı ve uyumluluk desteği. 
            ISO 27001 sertifikasyon süreçlerinde rehberlik.
          </p>
        </div>
      </div>

      <div className="glass rounded-xl p-8 bg-yellow-900/10 border-yellow-500/30">
        <p className="text-yellow-400 text-sm mb-2">💡 İpucu</p>
        <p className="text-gray-300 text-sm">
          Bu içerik WordPress'ten geliyor. WordPress panelinde <strong className="text-accent-green">"hizmetler"</strong> slug'ına sahip 
          sayfaya içerik eklediğinizde, bu içerik yerine WordPress içeriği gösterilecektir.
        </p>
      </div>
    </div>
  );

  return (
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
  );
}
