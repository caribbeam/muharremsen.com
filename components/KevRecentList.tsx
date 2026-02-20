"use client";

import { useState, useEffect } from "react";

type KevItem = {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  knownRansomwareCampaignUse?: string;
};

export default function KevRecentList() {
  const [data, setData] = useState<{
    vulnerabilities: KevItem[];
    count: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/kev-recent")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) setError(json.error);
        else setData({ vulnerabilities: json.vulnerabilities || [], count: json.count || 0 });
      })
      .catch(() => setError("Liste yüklenemedi."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-400">Yükleniyor…</p>;
  if (error) return <p className="text-red-400">{error}</p>;
  if (!data || data.vulnerabilities.length === 0) {
    return <p className="text-gray-500">Son 7 günde eklenen kayıt yok.</p>;
  }

  return (
    <ul className="space-y-3">
      {data.vulnerabilities.slice(0, 30).map((v) => (
        <li
          key={v.cveID}
          className="glass rounded-lg p-4 border border-gray-700/50"
        >
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <span className="font-mono font-semibold text-accent-green">
              {v.cveID}
            </span>
            <span className="text-gray-500 text-sm">{v.dateAdded}</span>
            {v.knownRansomwareCampaignUse && v.knownRansomwareCampaignUse !== "Unknown" && (
              <span className="text-red-400 text-xs">
                Ransomware: {v.knownRansomwareCampaignUse}
              </span>
            )}
          </div>
          <p className="text-white font-medium text-sm">
            {v.vendorProject} – {v.product}
          </p>
          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
            {v.shortDescription}
          </p>
        </li>
      ))}
      {data.count > 30 && (
        <p className="text-gray-500 text-sm">
          Toplam {data.count} kayıt; ilk 30 tanesi gösteriliyor.
        </p>
      )}
    </ul>
  );
}
