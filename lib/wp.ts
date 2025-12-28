const WP_API_URL = "https://panel.muharremsen.com/wp-json/wp/v2";

export interface WPPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
  };
}

export interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  author: number;
  categories: number[];
  tags: number[];
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
  };
}

export interface WPError {
  code: string;
  message: string;
  data: {
    status: number;
  };
}

const slugToRouteMap: Record<string, string> = {
  "ana-sayfa": "/",
  "hizmetler": "/hizmetler",
  "hakkimizda": "/hakkimizda",
  "iletisim": "/iletisim",
};

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const cacheOption = process.env.NODE_ENV === 'development' 
      ? { cache: 'no-store' as const }
      : { next: { revalidate: 10 } };

    const response = await fetch(
      `${WP_API_URL}/pages?slug=${slug}&_embed`,
      cacheOption
    );

    if (!response.ok) {
      console.error(`WordPress API error for slug "${slug}": ${response.status} ${response.statusText}`);
      return null;
    }

    const pages: WPPage[] = await response.json();

    if (!pages || pages.length === 0) {
      console.warn(`No page found with slug "${slug}" in WordPress`);
      return null;
    }

    return pages[0];
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
}

export async function getPosts(page: number = 1, perPage: number = 10): Promise<WPPost[]> {
  try {
    const cacheOption = process.env.NODE_ENV === 'development' 
      ? { cache: 'no-store' as const }
      : { next: { revalidate: 10 } };

    const response = await fetch(
      `${WP_API_URL}/posts?page=${page}&per_page=${perPage}&_embed&orderby=date&order=desc`,
      cacheOption
    );

    if (!response.ok) {
      return [];
    }

    const posts: WPPost[] = await response.json();
    return posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const cacheOption = process.env.NODE_ENV === 'development' 
      ? { cache: 'no-store' as const }
      : { next: { revalidate: 10 } };

    const response = await fetch(
      `${WP_API_URL}/posts?slug=${slug}&_embed`,
      cacheOption
    );

    if (!response.ok) {
      return null;
    }

    const posts: WPPost[] = await response.json();

    if (!posts || posts.length === 0) {
      return null;
    }

    return posts[0];
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

export function getRouteFromSlug(slug: string): string {
  return slugToRouteMap[slug] || `/${slug}`;
}

export function getSlugFromRoute(route: string): string {
  const routeMap: Record<string, string> = {
    "/": "ana-sayfa",
    "/hizmetler": "hizmetler",
    "/hakkimizda": "hakkimizda",
    "/iletisim": "iletisim",
  };
  return routeMap[route] || route.replace("/", "");
}

export interface CreatePostData {
  title: string;
  content: string;
  excerpt?: string;
  slug?: string;
  status?: "publish" | "draft";
  categories?: number[];
  tags?: number[];
}

export interface CreatePostResponse {
  success: boolean;
  postId?: number;
  slug?: string;
  error?: string;
}

export async function createPost(data: CreatePostData): Promise<CreatePostResponse> {
  const wpUsername = process.env.WP_USERNAME;
  const wpPassword = process.env.WP_PASSWORD || process.env.WP_APP_PASSWORD;

  if (!wpUsername || !wpPassword) {
    console.error("WordPress authentication bilgileri bulunamadı");
    return {
      success: false,
      error: "WordPress authentication bilgileri yapılandırılmamış (WP_USERNAME, WP_PASSWORD veya WP_APP_PASSWORD)",
    };
  }

  try {
    // Slug oluştur (eğer verilmemişse)
    const slug = data.slug || data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const postData: any = {
      title: data.title,
      content: data.content,
      status: data.status || "publish",
      slug: slug,
    };

    if (data.excerpt) {
      postData.excerpt = data.excerpt;
    }

    if (data.categories && data.categories.length > 0) {
      postData.categories = data.categories;
    }

    if (data.tags && data.tags.length > 0) {
      postData.tags = data.tags;
    }

    // Basic Auth ile WordPress API'ye POST isteği
    const auth = Buffer.from(`${wpUsername}:${wpPassword}`).toString("base64");

    const response = await fetch(`${WP_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("WordPress API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      return {
        success: false,
        error: errorData.message || `WordPress API hatası: ${response.status} ${response.statusText}`,
      };
    }

    const post = await response.json();
    console.log("✅ Blog yazısı başarıyla oluşturuldu:", {
      id: post.id,
      slug: post.slug,
      title: post.title?.rendered,
    });

    return {
      success: true,
      postId: post.id,
      slug: post.slug,
    };
  } catch (error: any) {
    console.error("Blog yazısı oluşturma hatası:", error);
    return {
      success: false,
      error: error.message || "Blog yazısı oluşturulamadı",
    };
  }
}

