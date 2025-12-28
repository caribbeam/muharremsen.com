"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";

export default function APITestPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    setTestResult(null);

    const WP_API_URL = "https://panel.muharremsen.com/wp-json/wp/v2";

    try {
      // Test 1: Genel API
      const healthCheck = await fetch(`${WP_API_URL}/`);
      const healthData = await healthCheck.json();

      // Test 2: Pages
      const pagesResponse = await fetch(`${WP_API_URL}/pages`);
      const pages = await pagesResponse.json();

      // Test 3: Belirli slug'lar
      const testSlugs = ["ana-sayfa", "hizmetler", "hakkimizda", "iletisim"];
      const slugResults: any = {};

      for (const slug of testSlugs) {
        const response = await fetch(`${WP_API_URL}/pages?slug=${slug}`);
        const data = await response.json();
        slugResults[slug] = {
          found: data.length > 0,
          title: data[0]?.title?.rendered || "Bulunamadı",
        };
      }

      // Test 4: Posts
      const postsResponse = await fetch(`${WP_API_URL}/posts?per_page=5`);
      const posts = await postsResponse.json();

      setTestResult({
        success: true,
        health: {
          status: healthCheck.status,
          data: healthData,
        },
        pages: {
          total: pages.length,
          slugs: pages.map((p: any) => p.slug),
        },
        slugTests: slugResults,
        posts: {
          total: posts.length,
        },
      });
    } catch (error: any) {
      setTestResult({
        success: false,
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">WordPress API Test</h1>

        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-accent-green text-dark-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-turquoise transition-colors disabled:opacity-50 mb-6"
        >
          {loading ? "Test Ediliyor..." : "API'yi Test Et"}
        </button>

        {testResult && (
          <div className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {testResult.success ? "✅ Test Başarılı" : "❌ Test Başarısız"}
            </h2>

            {testResult.error && (
              <div className="bg-red-900/20 border border-red-500/50 rounded p-4 mb-4">
                <p className="text-red-400 font-semibold">Hata:</p>
                <p className="text-gray-300">{testResult.error}</p>
              </div>
            )}

            {testResult.success && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    API Durumu: {testResult.health.status}
                  </h3>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Toplam Sayfa: {testResult.pages.total}
                  </h3>
                  {testResult.pages.slugs.length > 0 && (
                    <ul className="text-gray-300 space-y-1">
                      {testResult.pages.slugs.map((slug: string) => (
                        <li key={slug}>• {slug}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Slug Testleri:
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(testResult.slugTests).map(([slug, result]: [string, any]) => (
                      <div
                        key={slug}
                        className={`p-3 rounded ${
                          result.found
                            ? "bg-green-900/20 border border-green-500/50"
                            : "bg-red-900/20 border border-red-500/50"
                        }`}
                      >
                        <p className="font-semibold text-white">
                          {result.found ? "✅" : "❌"} {slug}
                        </p>
                        <p className="text-gray-300 text-sm">{result.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Blog Yazıları: {testResult.posts.total}
                  </h3>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

