import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { parseWordPressContent, renderWordPressContent } from "@/lib/parseWordPressContent";

export const revalidate = 10;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("iletisim");

  if (!page) {
    return {
      title: "İletişim | muharremsen",
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
    title: title ? `${title} | muharremsen` : "İletişim | Teklif ve Danışmanlık | muharremsen",
    description: description || "muharremsen ile iletişime geçin. IT çözümleri, yazılım geliştirme ve danışmanlık hizmetleri için teklif alın. Telefon: 0 530 498 95 53",
    keywords: "muharremsen iletişim, IT danışmanlık, yazılım geliştirme teklif, FreePBX kurulum, Domain Server",
    alternates: {
      canonical: "https://muharremsen.com/iletisim",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: title ? `${title} | muharremsen` : "İletişim | muharremsen",
      description: description || "muharremsen ile iletişime geçin. IT çözümleri ve danışmanlık hizmetleri için teklif alın.",
      url: "https://muharremsen.com/iletisim",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | muharremsen` : "İletişim | muharremsen",
      description: description || "muharremsen ile iletişime geçin. IT çözümleri ve danışmanlık hizmetleri için teklif alın.",
    },
  };
}

export default async function Iletisim() {
  const page = await getPageBySlug("iletisim");

  if (!page) {
    return (
      <SectionWrapper className="pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              İçerik Bekleniyor
            </h1>
            <p className="text-gray-400 text-lg">
              WordPress panelinde <strong>slug: "iletisim"</strong> olan bir sayfa oluşturun.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    );
  }

  const hasContent = page.content.rendered && page.content.rendered.trim().length > 0;

  // Fallback içerik
  const fallbackContent = (
    <div className="glass rounded-xl p-8 mb-8">
      <p className="text-gray-300 text-lg leading-relaxed mb-4">
        Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü birlikte belirleyelim.
      </p>
      <div className="space-y-4 text-gray-300">
        <div className="flex items-center">
          <span className="text-accent-green mr-3">📞</span>
          <span><strong>Telefon:</strong> 0 530 498 95 53</span>
        </div>
        <div className="flex items-center">
          <span className="text-accent-green mr-3">✉️</span>
          <span><strong>E-posta:</strong> info@muharremsen.com</span>
        </div>
        <div className="flex items-center">
          <span className="text-accent-green mr-3">💬</span>
          <span><strong>WhatsApp:</strong> Aşağıdaki butonlardan bize ulaşabilirsiniz</span>
        </div>
      </div>
    </div>
  );

  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {page.title.rendered}
          </h1>
          
          {hasContent ? (
            <div className="mb-8">
              {(() => {
                const sections = parseWordPressContent(page.content.rendered);
                return renderWordPressContent(sections);
              })()}
            </div>
          ) : (
            fallbackContent
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-accent-green mb-2">Telefon</h3>
                <a href="tel:+905304989553" className="text-gray-300 hover:text-accent-green transition-colors">
                  0 530 498 95 53
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-green mb-2">E-posta</h3>
                <a href="mailto:info@muharremsen.com" className="text-gray-300 hover:text-accent-green transition-colors">
                  info@muharremsen.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-green mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/905304989553" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-green text-dark-primary font-semibold px-4 py-2 rounded-lg hover:bg-accent-turquoise transition-colors"
                >
                  <span>💬</span>
                  <span>WhatsApp ile İletişime Geç</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
