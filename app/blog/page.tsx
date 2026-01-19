import { Metadata } from "next";
import { blogPosts } from "@/lib/blogData";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | muharremsen",
  description: "IT teknolojileri ve güvenlik konularında güncel blog yazıları.",
};

export default function BlogPage() {
  // Blog yazılarını tarihe göre sırala (en yeni önce)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

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

        {sortedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Henüz blog yazısı bulunmuyor.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <BlogCard
                key={post.slug}
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
