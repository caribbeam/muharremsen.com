import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PasswordGenerator from "@/components/PasswordGenerator";
import CveChecker from "@/components/CveChecker";
import KevRecentList from "@/components/KevRecentList";

const siteUrl = "https://muharremsen.com";

export const metadata: Metadata = {
  title: "Güvenlik",
  description:
    "USOM güncel güvenlik açıkları, KEV kataloğu (son 7 gün), CVE exploit kontrolü ve şifre oluşturucu. muharremsen güvenlik araçları.",
  keywords:
    "USOM, güvenlik açıkları, KEV, CVE, CISA, siber güvenlik, şifre oluşturucu, exploit",
  openGraph: {
    title: "Güvenlik | USOM, KEV, CVE Kontrolü | muharremsen",
    description: "Güncel güvenlik açıkları, KEV kataloğu ve CVE exploit kontrolü.",
    url: `${siteUrl}/guvenlik`,
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/guvenlik` },
};

async function getUsomIncidents() {
  try {
    const res = await fetch("https://www.usom.gov.tr/api/incident/index", {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return { models: [], totalCount: 0 };
    const data = await res.json();
    return { models: data.models || [], totalCount: data.totalCount || 0 };
  } catch {
    return { models: [], totalCount: 0 };
  }
}

async function getUsomAnnouncements() {
  try {
    const res = await fetch("https://www.usom.gov.tr/api/announcement/index", {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return { models: [] };
    const data = await res.json();
    return { models: data.models || [] };
  } catch {
    return { models: [] };
  }
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&uuml;/g, "ü")
    .replace(/&ouml;/g, "ö")
    .replace(/&ccedil;/g, "ç")
    .replace(/&uuml;/g, "ü")
    .replace(/&acirc;/g, "â")
    .replace(/&hellip;/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function GuvenlikPage() {
  const [incidents, announcements] = await Promise.all([
    getUsomIncidents(),
    getUsomAnnouncements(),
  ]);
  const incidentList = incidents.models.slice(0, 25);
  const announcementList = announcements.models.slice(0, 10);

  return (
    <SectionWrapper className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Güvenlik
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          USOM güncel güvenlik açıkları, CISA KEV kataloğu (son 7 gün), CVE
          exploit kontrolü ve şifre oluşturucu. Veriler{" "}
          <a
            href="https://www.usom.gov.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:underline"
          >
            USOM
          </a>{" "}
          ve{" "}
          <a
            href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:underline"
          >
            CISA KEV
          </a>{" "}
          kaynaklıdır.
        </p>

        {/* CVE Exploit Kontrolü & Şifre Oluşturucu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CveChecker />
          <PasswordGenerator />
        </div>

        {/* KEV Son 7 Gün */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Son 7 Günde KEV Kataloğuna Eklenenler
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            CISA Known Exploited Vulnerabilities kataloğuna son 7 gün içinde
            eklenen güvenlik açıkları.
          </p>
          <KevRecentList />
        </div>

        {/* Güncel Güvenlik Açıkları - USOM Incident */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Güncel Güvenlik Açıkları (USOM)
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Ulusal Siber Olaylara Müdahale Merkezi (USOM) güvenlik olayları ve
            zafiyet bildirimleri.
          </p>
          {incidentList.length === 0 ? (
            <p className="text-gray-500">Veri yüklenemedi veya liste boş.</p>
          ) : (
            <ul className="space-y-4">
              {incidentList.map((item: { id: number; title: string; desc?: string; date?: string }) => (
                <li
                  key={item.id}
                  className="glass rounded-lg p-4 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {stripHtml(item.title || "")}
                  </h3>
                  {item.date && (
                    <p className="text-gray-500 text-xs mb-2">
                      {new Date(item.date).toLocaleDateString("tr-TR")}
                    </p>
                  )}
                  {item.desc && (
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {stripHtml(item.desc).slice(0, 300)}
                      {stripHtml(item.desc).length > 300 ? "…" : ""}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* USOM Duyurular */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            USOM Duyuruları
          </h2>
          {announcementList.length === 0 ? (
            <p className="text-gray-500">Duyuru verisi yok.</p>
          ) : (
            <ul className="space-y-3">
              {announcementList.map((item: { id: number; title?: string; date?: string }) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center gap-2 text-gray-300"
                >
                  {item.date && (
                    <span className="text-gray-500 text-sm">
                      {new Date(item.date).toLocaleDateString("tr-TR")}
                    </span>
                  )}
                  <span>{stripHtml(item.title || "")}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
