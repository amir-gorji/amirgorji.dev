import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingMinutes: number;
}

export function BlogCard({ slug, title, date, excerpt, readingMinutes }: BlogCardProps) {
  return (
    <Link
      href={`/posts/${slug}`}
      className="group block rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-2 focus:outline-accent focus:outline-offset-2"
    >
      <div className="flex items-center gap-2 text-sm text-muted">
        <time>{date}</time>
        <span aria-hidden="true">·</span>
        <span>{readingMinutes} min read</span>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
        {title}
      </h2>
      <p className="mt-2 text-muted line-clamp-2">{excerpt}</p>
    </Link>
  );
}
