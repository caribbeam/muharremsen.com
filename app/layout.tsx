import type { Metadata } from "next";
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
    "Network altyapısı, firewall (FortiGate, MikroTik), VPN, mail server, sunucu kurulumu, sanallaştırma (VMware, Proxmox), IP santral (FreePBX), DNS ve domain server hizmetleri. 7/24 destek.",
  keywords: [
    "network güvenliği",
    "firewall kurulum",
    "FortiGate",
    "MikroTik",
    "VPN kurulumu",
    "mail server",
    "sunucu kurulumu",
    "sanallaştırma",
    "VMware",
    "Proxmox",
    "FreePBX",
    "IP santral",
    "DNS",
    "domain server",
    "Active Directory",
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
    title: "muharremsen | Network, Firewall, VPN, Mail Server ve Sunucu Çözümleri",
    description: "Network, firewall, VPN, mail server, sunucu ve sanallaştırma altyapı hizmetleri. FortiGate, MikroTik, VMware, Proxmox, FreePBX.",
    images: [],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  // Google Search Console: Doğrulama sonrası ekleyin: verification: { google: "KODUNUZ" },
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
      address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Turkish",
        areaServed: "TR",
      },
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

