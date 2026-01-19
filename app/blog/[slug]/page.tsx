import { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { getBlogPost, blogPosts } from "@/lib/blogData";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | muharremsen",
    };
  }

  return {
    title: `${post.title} | muharremsen Blog`,
    description: post.description || undefined,
    keywords: post.seoKeywords || undefined,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // İlgili yazıları bul (aynı kategoriden veya tag'lerden)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => 
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    )
    .slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "muharremsen",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://muharremsen.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SectionWrapper className="pt-32">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-accent-green transition-colors">
              Ana Sayfa
            </Link>
            {" / "}
            <Link
              href="/blog"
              className="hover:text-accent-green transition-colors"
            >
              Blog
            </Link>
            {" / "}
            <span className="text-gray-500">{post.title}</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.category}</span>
              {post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <article className="glass rounded-xl p-8 md:p-12 mb-8">
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white
                prose-p:text-gray-300
                prose-strong:text-white
                prose-a:text-accent-green
                prose-a:no-underline
                hover:prose-a:underline
                prose-ul:text-gray-300
                prose-ol:text-gray-300
                prose-li:text-gray-300
                prose-code:text-accent-green
                prose-pre:bg-gray-900
                prose-pre:border prose-pre:border-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {relatedPosts.length > 0 && (
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                İlgili Yazılar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 bg-dark-tertiary rounded-lg hover:bg-dark-secondary transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-accent-green transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-block text-accent-green hover:text-accent-turquoise font-semibold transition-colors"
            >
              ← Tüm Yazılara Dön
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
