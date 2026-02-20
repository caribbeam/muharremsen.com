import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

const siteUrl = "https://muharremsen.com";

export const metadata: Metadata = {
  title: "İletişim — Teklif Al",
  description:
    "İstanbul network, firewall, VPN, mail server hizmetleri için ücretsiz teklif alın. 0 530 498 95 53 — 7/24 destek. Hemen formu doldurun veya arayın.",
  keywords: "iletişim, teklif al, İstanbul network, firewall, VPN, mail server, sunucu kurulumu",
  openGraph: {
    title: "İletişim & Teklif | muharremsen",
    description: "Ücretsiz keşif ve teklif için iletişime geçin. 7/24 destek.",
    url: `${siteUrl}/iletisim`,
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/iletisim` },
};

export default function Iletisim() {
  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            İletişim
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Projeleriniz için ücretsiz keşif ve teklif alın. Formu doldurun veya doğrudan <a href="tel:+905304989553" className="text-accent-green hover:underline">0 530 498 95 53</a> numarasından arayın; en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                <a href="mailto:info@muharremsen.com" className="text-accent-green hover:underline">
                  info@muharremsen.com
                </a>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                <a href="tel:+905304989553" className="text-accent-green hover:underline">
                  0 530 498 95 53
                </a>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                <p className="text-gray-300">
                  İstanbul, Türkiye
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-300">
                  7/24 destek ve bakım hizmetleri
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
