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

