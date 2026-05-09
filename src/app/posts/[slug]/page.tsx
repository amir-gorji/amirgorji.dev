import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getPostNeighbors } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import CopyableCodeBlock from "@/components/CopyableCodeBlock";

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
  const { older, newer } = await getPostNeighbors(slug);

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
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
          components={{ pre: CopyableCodeBlock }}
        />
      </div>
      {(older || newer) && (
        <nav
          aria-label="Post navigation"
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {older ? (
            <Link
              href={`/posts/${older.slug}`}
              className="group rounded-2xl border border-card-border bg-card-bg p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <div className="text-xs text-muted">← Older</div>
              <div className="mt-1 font-semibold text-foreground group-hover:text-accent transition-colors">
                {older.title}
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {newer ? (
            <Link
              href={`/posts/${newer.slug}`}
              className="group rounded-2xl border border-card-border bg-card-bg p-5 text-right transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <div className="text-xs text-muted">Newer →</div>
              <div className="mt-1 font-semibold text-foreground group-hover:text-accent transition-colors">
                {newer.title}
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>
      )}
    </article>
  );
}
