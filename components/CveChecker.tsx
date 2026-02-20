"use client";

import { useState } from "react";

type KevEntry = {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  knownRansomwareCampaignUse: string;
  notes?: string;
};

export default function CveChecker() {
  const [cve, setCve] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    cve: string;
    inKev: boolean;
    vulnerability: KevEntry | null;
  } | null>(null);
  const [error, setError] = useState("");

  const check = async () => {
    const trimmed = cve.trim().toUpperCase();
    if (!trimmed || !/^CVE-\d{4}-\d+$/.test(trimmed)) {
      setError("Geçerli bir CVE kodu girin (örn: CVE-2025-1234)");
      setResult(null);
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/cve-check?cve=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Kontrol yapılamadı");
        return;
      }
      setResult(data);
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-2">CVE Exploit Kontrolü</h3>
      <p className="text-gray-400 text-sm mb-4">
        CVE kodunun CISA KEV (Known Exploited Vulnerabilities) kataloğunda olup olmadığını kontrol edin.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          value={cve}
          onChange={(e) => setCve(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
          placeholder="CVE-2025-1234"
          className="px-4 py-2 rounded-lg bg-dark-tertiary border border-gray-600 text-white placeholder-gray-500 min-w-[200px]"
        />
        <button
          type="button"
          onClick={check}
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-accent-green text-dark-primary font-semibold hover:bg-accent-green/90 disabled:opacity-50 transition-colors"
        >
          {loading ? "Kontrol ediliyor…" : "Kontrol Et"}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
      {result && (
        <div className="rounded-lg bg-dark-tertiary border border-gray-600 p-4 text-sm">
          <p className="mb-2">
            <span className="text-gray-400">CVE:</span>{" "}
            <span className="font-mono text-white">{result.cve}</span>{" "}
            {result.inKev ? (
              <span className="text-red-400 font-semibold">— KEV kataloğunda (aktif exploit biliniyor)</span>
            ) : (
              <span className="text-emerald-400">— KEV kataloğunda değil</span>
            )}
          </p>
          {result.vulnerability && (
            <>
              <p className="text-gray-300 mt-2">
                <strong className="text-gray-400">Ürün:</strong> {result.vulnerability.vendorProject} – {result.vulnerability.product}
              </p>
              <p className="text-gray-300 mt-1">
                <strong className="text-gray-400">Açıklama:</strong> {result.vulnerability.shortDescription}
              </p>
              <p className="text-gray-400 mt-1 text-xs">
                KEV’e eklenme: {result.vulnerability.dateAdded}
                {result.vulnerability.knownRansomwareCampaignUse !== "Unknown" && (
                  <> · Ransomware: {result.vulnerability.knownRansomwareCampaignUse}</>
                )}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
