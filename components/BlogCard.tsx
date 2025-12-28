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
      <article className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:border-accent-green/50 border border-transparent h-full flex flex-col group">
        <div className="mb-4 flex-grow">
          {post.category && (
            <span className="inline-block bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-sm font-medium mb-3">
              {post.category}
            </span>
          )}

          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent-green transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
            {post.description}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700/50">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(post.date)}
            </span>
            {post.author && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            )}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-dark-tertiary/50 text-gray-400 px-2 py-1 rounded border border-gray-700/50"
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
