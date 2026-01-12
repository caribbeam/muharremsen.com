"use client";

import { useState } from "react";

export default function ContactTestPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testContact = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test Kullanıcı",
          email: "test@example.com",
          message: "Bu bir test mesajıdır. Mail ve SMS gönderimini test ediyoruz.",
        }),
      });

      const data = await response.json();
      setResult({
        status: response.status,
        ok: response.ok,
        data: data,
      });
    } catch (error: any) {
      setResult({
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-primary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">İletişim Formu Test</h1>
        
        <div className="glass rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Environment Variables Kontrolü</h2>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong>Not:</strong> Bu bilgiler sadece server-side'da görülebilir.
            </p>
            <p className="text-sm text-gray-400">
              Local'de test ediyorsanız, <code className="bg-dark-tertiary px-2 py-1 rounded">.env.local</code> dosyası oluşturun.
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Test Butonu</h2>
          <button
            onClick={testContact}
            disabled={loading}
            className="bg-accent-green text-dark-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-turquoise transition-colors disabled:opacity-50"
          >
            {loading ? "Test Ediliyor..." : "Test Et"}
          </button>
        </div>

        {result && (
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Sonuç</h2>
            <pre className="bg-dark-tertiary p-4 rounded-lg text-gray-300 text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        <div className="glass rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold text-white mb-4">Kontrol Listesi</h2>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Vercel'de environment variable'lar eklendi mi?</li>
            <li>✅ Vercel'de redeploy yapıldı mı?</li>
            <li>✅ Local'de test ediyorsanız .env.local dosyası var mı?</li>
            <li>✅ Vercel logs'a bakıldı mı? (Deployments → Logs)</li>
            <li>✅ FormSubmit API çalışıyor mu? (https://formsubmit.co)</li>
            <li>✅ SMS API bilgileri doğru mu?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


