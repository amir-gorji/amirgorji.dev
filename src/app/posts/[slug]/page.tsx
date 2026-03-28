import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";
import rehypePrettyCode from "rehype-pretty-code";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);
  return {
    title: `${meta.title} — Amir Gorji`,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: "article",
      publishedTime: meta.date,
      authors: ["Amir Gorji"],
    },
    twitter: {
      card: "summary",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { meta, content } = await getPostBySlug(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    author: {
      "@type": "Person",
      name: "Amir Gorji",
      url: "https://amirgorji.dev",
    },
    url: `https://amirgorji.dev/posts/${slug}`,
  };

  return (
    <article className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/"
        className="text-sm text-accent hover:text-accent-hover transition-colors"
      >
        ← Back to home
      </Link>
      <header className="mt-6 mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
          {meta.title}
        </h1>
        <time className="mt-3 block text-muted">{meta.date}</time>
      </header>
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-a:text-accent prose-code:text-foreground">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      light: "github-light",
                      dark: "github-dark",
                    },
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
