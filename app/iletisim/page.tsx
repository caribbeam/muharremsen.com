import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wp";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("iletisim");

  if (!page) {
    return {
      title: "İletişim | muharremsen",
    };
  }

  const title =
    page.yoast_head_json?.title ||
    page.yoast_head_json?.og_title ||
    page.title.rendered;
  const description =
    page.yoast_head_json?.description ||
    page.yoast_head_json?.og_description ||
    page.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160);

  return {
    title: title ? `${title} | muharremsen` : "İletişim | muharremsen",
    description: description || undefined,
  };
}

export default async function Iletisim() {
  const page = await getPageBySlug("iletisim");

  if (!page) {
    notFound();
  }

  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {page.title.rendered}
          </h1>
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
              prose-li:text-gray-300 mb-8"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
