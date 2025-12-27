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

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="glass rounded-xl p-4 md:p-6 hover:scale-105 transition-all duration-300 hover:border-accent-green/50 border border-gray-700 h-full flex flex-col touch-manipulation">
        <div className="mb-4">
          <span className="inline-block bg-accent-green/20 text-accent-green px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
            {post.category}
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 hover:text-accent-green transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3 text-sm md:text-base">
            {post.description}
          </p>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{formatDate(post.date)}</span>
            {post.author && <span>{post.author}</span>}
          </div>
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              post.tags?.slice(0, 3).map((tag, i) => (
                <span
                  key={index}
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

