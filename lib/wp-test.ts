// WordPress API Test Utility
// Bu dosyayı tarayıcı console'unda veya server-side'da test etmek için kullanabilirsiniz

const WP_API_URL = "https://panel.muharremsen.com/wp-json/wp/v2";

export async function testWordPressAPI() {
  console.log("🔍 WordPress API Test Başlatılıyor...");
  console.log(`📍 API URL: ${WP_API_URL}`);

  try {
    // 1. Genel API testi
    console.log("\n1️⃣ Genel API Testi...");
    const healthCheck = await fetch(`${WP_API_URL}/`);
    console.log(`   Status: ${healthCheck.status}`);
    const healthData = await healthCheck.json();
    console.log("   Response:", healthData);

    // 2. Pages endpoint testi
    console.log("\n2️⃣ Pages Endpoint Testi...");
    const pagesResponse = await fetch(`${WP_API_URL}/pages`);
    console.log(`   Status: ${pagesResponse.status}`);
    const pages = await pagesResponse.json();
    console.log(`   Toplam Sayfa: ${pages.length}`);
    if (pages.length > 0) {
      console.log("   Sayfa Slug'ları:");
      pages.forEach((page: any) => {
        console.log(`     - ${page.slug}`);
      });
    }

    // 3. Belirli slug testi
    console.log("\n3️⃣ Belirli Slug Testleri...");
    const testSlugs = ["ana-sayfa", "hizmetler", "hakkimizda", "iletisim"];
    
    for (const slug of testSlugs) {
      const response = await fetch(`${WP_API_URL}/pages?slug=${slug}`);
      const data = await response.json();
      if (data.length > 0) {
        console.log(`   ✅ "${slug}" bulundu: ${data[0].title.rendered}`);
      } else {
        console.log(`   ❌ "${slug}" bulunamadı`);
      }
    }

    // 4. Posts testi
    console.log("\n4️⃣ Posts Endpoint Testi...");
    const postsResponse = await fetch(`${WP_API_URL}/posts?per_page=5`);
    const posts = await postsResponse.json();
    console.log(`   Toplam Yazı: ${posts.length}`);

    console.log("\n✅ Test Tamamlandı!");
    return { success: true, pages: pages.length, posts: posts.length };
  } catch (error) {
    console.error("❌ API Test Hatası:", error);
    return { success: false, error };
  }
}

// Browser console'da test etmek için:
// import { testWordPressAPI } from '@/lib/wp-test';
// testWordPressAPI();

