import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function markdownToHtml(md: string): string {
  // Simple markdown to HTML converter
  let html = md
    // Remove the first h1 (we render it separately)
    .replace(/^# .+\n\n/, "")
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="my-8 border-gray-200" />')
    // Paragraphs - wrap non-tagged lines
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (block.startsWith("<h") || block.startsWith("<hr") || block.startsWith("<li")) {
        // Wrap consecutive li's in ul
        if (block.includes("<li")) {
          return `<ul class="space-y-2 my-4 list-disc list-inside text-gray-600">${block}</ul>`;
        }
        return block;
      }
      return `<p class="text-gray-600 leading-relaxed my-4">${block}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);

  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-teal-300 text-sm font-medium hover:text-white transition-colors">
            ← Terug naar blog
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-teal-200 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("nl-NL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} leestijd</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* CTA */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Meer weten over zorgbeveiliging?</h2>
          <p className="text-gray-600 mb-8">
            Neem vrijblijvend contact op voor een gratis adviesgesprek over de beveiligingsmogelijkheden voor uw zorginstelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Neem contact op
            </Link>
            <a
              href="tel:0462402401"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Bel 046 240 2401
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
