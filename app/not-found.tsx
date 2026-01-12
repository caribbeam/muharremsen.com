import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Sayfa Bulunamadı | muharremsen",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya blog yazılarımızı inceleyebilirsiniz.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent-green mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-accent-green text-gray-900 font-semibold rounded-lg hover:bg-accent-green/90 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
          >
            Blog Yazıları
          </Link>
          <Link
            href="/hizmetler"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
          >
            Hizmetlerimiz
          </Link>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>Eğer bu sayfanın var olması gerektiğini düşünüyorsanız, lütfen bizimle iletişime geçin.</p>
        </div>
      </div>
    </div>
  );
}

