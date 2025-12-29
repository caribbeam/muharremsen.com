import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "muharremsen | Yazılım Geliştirme ve IT Çözümleri",
  description:
    "Yapay zeka destekli yazılımlar, proforma uygulamalar, helpdesk sistemleri, LMS, envanter yönetimi, QDMS, domain server, Active Directory, imaj yönetimi, FreePBX/Asterisk kurulumları, ISO 27001 BGYS desteği ve Supplier Portal uygulamaları hizmetleri.",
  keywords: "yazılım geliştirme, yapay zeka, proforma uygulama, helpdesk, LMS, envanter yönetimi, QDMS, domain server, Active Directory, FreePBX, Asterisk, ISO 27001, BGYS, supplier portal, tedarikçi portalı",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "muharremsen",
    url: "https://muharremsen.com",
    logo: "https://muharremsen.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-530-498-95-53",
      contactType: "customer service",
      email: "info@muharremsen.com",
    },
    sameAs: [
      // Sosyal medya linkleriniz varsa buraya ekleyin
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
  };

  // LocalBusiness Schema (Yerel işletme için)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://muharremsen.com",
    name: "muharremsen",
    image: "https://muharremsen.com/logo.png",
    telephone: "+90-530-498-95-53",
    email: "info@muharremsen.com",
    url: "https://muharremsen.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="tr">
      <body className={inter.className}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="min-h-screen overflow-x-hidden max-w-full">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

