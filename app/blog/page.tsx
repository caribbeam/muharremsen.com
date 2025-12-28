import { Metadata } from "next";
import { getPosts } from "@/lib/wp";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";
import { exampleBlogPosts } from "@/lib/blogPosts";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Blog | muharremsen",
  description: "IT teknolojileri ve güvenlik konularında güncel blog yazıları.",
};

export default async function BlogPage() {
  const wpPosts = await getPosts();
  
  // WordPress yazıları ile örnek yazıları birleştir
  // Örnek yazıları her zaman göster (WordPress yazıları varsa onlar da eklenir)
  const allPosts = [...exampleBlogPosts];
  
  // WordPress yazılarını da ekle (eğer varsa)
  if (wpPosts.length > 0) {
    wpPosts.forEach(wpPost => {
      // Aynı slug'a sahip örnek yazı varsa WordPress yazısını kullan
      const existingIndex = allPosts.findIndex(p => p.slug === wpPost.slug);
      if (existingIndex !== -1) {
        // WordPress yazısı ile değiştir
        allPosts[existingIndex] = {
          id: wpPost.id,
          slug: wpPost.slug,
          title: wpPost.title.rendered,
          description: wpPost.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 200),
          content: wpPost.content.rendered,
          date: wpPost.date,
          author: "muharremsen",
          category: "Blog",
          tags: [],
        };
      } else {
        // Yeni WordPress yazısı ekle
        allPosts.push({
          id: wpPost.id,
          slug: wpPost.slug,
          title: wpPost.title.rendered,
          description: wpPost.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 200),
          content: wpPost.content.rendered,
          date: wpPost.date,
          author: "muharremsen",
          category: "Blog",
          tags: [],
        });
      }
    });
  }
  
  // Tarihe göre sırala (en yeni önce)
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-accent-green">Blog</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            IT teknolojileri ve güvenlik konularında güncel yazılar, ipuçları ve
            teknoloji haberleri.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="glass rounded-xl p-12 text-center">
            <p className="text-gray-400 text-lg mb-4">Henüz blog yazısı bulunmuyor.</p>
            <p className="text-gray-500 text-sm">
              WordPress panelinde blog yazıları eklediğinizde burada görünecektir.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={{
                  slug: post.slug,
                  title: post.title,
                  description: post.description.substring(0, 150),
                  author: post.author,
                  date: post.date,
                  category: post.category,
                  tags: post.tags,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
