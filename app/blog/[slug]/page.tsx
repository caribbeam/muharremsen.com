import { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { getPostBySlug, getPosts } from "@/lib/wp";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts(1, 100);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | muharremsen",
    };
  }

  const title =
    post.yoast_head_json?.title ||
    post.yoast_head_json?.og_title ||
    post.title.rendered;
  const description =
    post.yoast_head_json?.description ||
    post.yoast_head_json?.og_description ||
    post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160);

  return {
    title: title ? `${title} | muharremsen Blog` : `${post.title.rendered} | muharremsen Blog`,
    description: description || undefined,
    openGraph: {
      title: post.title.rendered,
      description: description || undefined,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

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

  const allPosts = await getPosts(1, 10);
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      "@type": "Person",
      name: "muharremsen",
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
            <span className="text-gray-500">{post.title.rendered}</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title.rendered}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
              <span>{formatDate(post.date)}</span>
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
                prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
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
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 bg-dark-tertiary rounded-lg hover:bg-dark-secondary transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-accent-green transition-colors">
                      {relatedPost.title.rendered}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedPost.excerpt.rendered.replace(/<[^>]*>/g, "")}
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
