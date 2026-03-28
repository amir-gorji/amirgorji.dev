import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export function BlogCard({ slug, title, date, excerpt }: BlogCardProps) {
  return (
    <Link
      href={`/posts/${slug}`}
      className="group block rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-2 focus:outline-accent focus:outline-offset-2"
    >
      <time className="text-sm text-muted">{date}</time>
      <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
        {title}
      </h2>
      <p className="mt-2 text-muted line-clamp-2">{excerpt}</p>
    </Link>
  );
}
