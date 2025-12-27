import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "muharremsen | Yazılım Geliştirme ve IT Çözümleri",
  description:
    "Yapay zeka destekli yazılımlar, proforma uygulamalar, helpdesk sistemleri, LMS, envanter yönetimi, QDMS, domain server, Active Directory, imaj yönetimi, FreePBX/Asterisk kurulumları ve ISO 27001 BGYS desteği hizmetleri.",
  keywords: "yazılım geliştirme, yapay zeka, proforma uygulama, helpdesk, LMS, envanter yönetimi, QDMS, domain server, Active Directory, FreePBX, Asterisk, ISO 27001, BGYS",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

