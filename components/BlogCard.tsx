import Link from "next/link";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    author?: string;
    category?: string;
    tags?: string[];
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ ASIL ÇÖZÜM
  const tags = post.tags ?? [];

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="glass rounded-xl p-4 md:p-6 hover:scale-105 transition-all duration-300 hover:border-accent-green/50 border border-gray-700 h-full flex flex-col">
        <div className="mb-4">
          {post.category && (
            <span className="inline-block bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-medium mb-3">
              {post.category}
            </span>
          )}

          <h2 className="text-xl font-bold text-white mb-3">
            {post.title}
          </h2>

          <p className="text-gray-400 mb-4">
            {post.description}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex justify-between text-sm text-gray-500">
            <span>{formatDate(post.date)}</span>
            {post.author && <span>{post.author}</span>}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-dark-tertiary text-gray-400 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
