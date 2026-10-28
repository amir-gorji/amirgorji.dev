import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/presentations", label: "Talks" },
  { href: "/resume", label: "Resume" },
];

export function SiteNav() {
  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          {link.label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
