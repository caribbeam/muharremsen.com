import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://muharremsen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "muharremsen | Network, Firewall, VPN, Mail Server ve Sunucu Çözümleri",
    template: "%s | muharremsen",
  },
  description:
    "İstanbul network, firewall, VPN, mail server ve sunucu kurulumu. FortiGate, MikroTik, VMware, Proxmox, FreePBX. Kurumsal IT altyapı ve 7/24 destek. Ücretsiz keşif için hemen arayın.",
  keywords: [
    "İstanbul network kurulum",
    "FortiGate kurulum İstanbul",
    "firewall kurulum",
    "network güvenliği",
    "MikroTik",
    "VPN kurulumu",
    "mail server",
    "sunucu kurulumu",
    "sanallaştırma",
    "VMware",
    "Proxmox",
    "FreePBX",
    "IP santral",
    "siber güvenlik",
    "IT altyapı",
  ],
  authors: [{ name: "muharremsen", url: siteUrl }],
  creator: "muharremsen",
  publisher: "muharremsen",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "muharremsen",
    title: "muharremsen | İstanbul Network, Firewall, VPN, Mail Server Çözümleri",
    description: "İstanbul ve Türkiye geneli network, firewall, VPN, mail server ve sunucu kurulumu. 7/24 destek. Ücretsiz keşif.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "muharremsen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "muharremsen | Network, Firewall, VPN, Mail Server",
    description: "Network, firewall, VPN, mail server ve sunucu çözümleri. 7/24 destek.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "muharremsen",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
      description: "Network, firewall, VPN, mail server ve sunucu altyapı çözümleri. FortiGate, MikroTik, VMware, Proxmox, FreePBX kurulum ve yönetim hizmetleri.",
      address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressRegion: "İstanbul", addressCountry: "TR" },
      telephone: "+905304989553",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+905304989553",
        availableLanguage: "Turkish",
        areaServed: "TR",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "muharremsen",
      image: `${siteUrl}/logo.png`,
      url: siteUrl,
      telephone: "+905304989553",
      address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
      areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 41.0082, longitude: 28.9784 }, geoRadius: "500000" },
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
      priceRange: "$$",
      description: "İstanbul ve Türkiye geneli network, firewall, VPN, mail server ve sunucu kurulumu. 7/24 destek.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "muharremsen",
      description: "Network, firewall, VPN, mail server, sunucu kurulumu ve sanallaştırma hizmetleri",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "tr-TR",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

