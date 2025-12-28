import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { parseWordPressContent, renderWordPressContent } from "@/lib/parseWordPressContent";

export const revalidate = 10;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("hakkimizda");

  if (!page) {
    return {
      title: "Hakkımızda | muharremsen",
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
    title: title ? `${title} | muharremsen` : "Hakkımızda | muharremsen",
    description: description || undefined,
  };
}

export default async function Hakkimizda() {
  const page = await getPageBySlug("hakkimizda");

  if (!page) {
    return (
      <SectionWrapper className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            İçerik Bekleniyor
          </h1>
          <p className="text-gray-400 text-lg">
            WordPress panelinde <strong>slug: "hakkimizda"</strong> olan bir sayfa oluşturun.
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
        <h2 className="text-3xl font-bold text-white mb-4">Hakkımızda</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          muharremsen olarak, teknoloji dünyasında güvenilir çözümler sunuyoruz. 
          Yazılım geliştirme, sistem yönetimi ve danışmanlık alanlarında 
          uzman ekibimizle hizmet veriyoruz.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Modern teknolojiler ve en iyi uygulamalarla, müşterilerimizin dijital 
          dönüşüm yolculuğunda yanlarında yer alıyoruz. Kalite, güvenilirlik ve 
          müşteri memnuniyeti odaklı yaklaşımımızla, uzun vadeli iş ortaklıkları kuruyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-8">
          <h3 className="text-2xl font-bold text-accent-green mb-4">Misyonumuz</h3>
          <p className="text-gray-300 leading-relaxed">
            İşletmelerin teknoloji ihtiyaçlarını karşılayarak, onların büyümesine 
            ve başarısına katkıda bulunmak. Modern çözümlerle müşterilerimizin 
            rekabet avantajı kazanmalarını sağlamak.
          </p>
        </div>

        <div className="glass rounded-xl p-8">
          <h3 className="text-2xl font-bold text-accent-green mb-4">Vizyonumuz</h3>
          <p className="text-gray-300 leading-relaxed">
            Teknoloji sektöründe öncü bir marka olmak ve müşterilerimize en kaliteli 
            hizmeti sunmak. Sürekli gelişen teknolojilere uyum sağlayarak, 
            yenilikçi çözümler üretmek.
          </p>
        </div>
      </div>

      <div className="glass rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Çalışma Yaklaşımımız</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-accent-green mr-3">✓</span>
            <span>Müşteri odaklı çözümler geliştiriyoruz</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent-green mr-3">✓</span>
            <span>Projelerimizde en iyi uygulamaları kullanıyoruz</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent-green mr-3">✓</span>
            <span>Zamanında teslimat ve kalite garantisi sunuyoruz</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent-green mr-3">✓</span>
            <span>Proje sonrası destek ve bakım hizmeti veriyoruz</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent-green mr-3">✓</span>
            <span>Güvenlik ve uyumluluk standartlarına uyuyoruz</span>
          </li>
        </ul>
      </div>

      <div className="glass rounded-xl p-8 bg-yellow-900/10 border-yellow-500/30">
        <p className="text-yellow-400 text-sm mb-2">💡 İpucu</p>
        <p className="text-gray-300 text-sm">
          Bu içerik WordPress'ten geliyor. WordPress panelinde <strong className="text-accent-green">"hakkimizda"</strong> slug'ına sahip 
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
