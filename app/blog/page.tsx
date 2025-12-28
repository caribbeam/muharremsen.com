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
  
  // WordPress'ten gelen yazılar varsa onları kullan, yoksa örnek yazıları göster
  const hasWpPosts = wpPosts.length > 0;
  const posts = hasWpPosts ? wpPosts : exampleBlogPosts;

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
            {posts.map((post) => {
              if (hasWpPosts) {
                // WordPress post
                const wpPost = post as typeof wpPosts[0];
                return (
                  <BlogCard
                    key={wpPost.id}
                    post={{
                      slug: wpPost.slug,
                      title: wpPost.title.rendered,
                      description: wpPost.excerpt.rendered
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 150),
                      author: "muharremsen",
                      date: wpPost.date,
                      category: "Blog",
                      tags: [],
                    }}
                  />
                );
              } else {
                // Example post
                const examplePost = post as typeof exampleBlogPosts[0];
                return (
                  <BlogCard
                    key={examplePost.id}
                    post={{
                      slug: examplePost.slug,
                      title: examplePost.title,
                      description: examplePost.description.substring(0, 150),
                      author: examplePost.author,
                      date: examplePost.date,
                      category: examplePost.category,
                      tags: examplePost.tags,
                    }}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
