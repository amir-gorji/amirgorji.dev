import type { Metadata } from "next";
import Link from "next/link";
import { resume } from "../resume/data";

export const metadata: Metadata = {
  title: "Talks | Amir Gorji",
  description: "Talks by Amir Gorji, with slides and materials.",
};

// Only talks with their own page here are public; the rest stay on the resume.
const talks = resume.speaking.filter((entry) =>
  entry.url.startsWith("/presentations/")
);

export default function PresentationsPage() {
  return (
    <div className="py-12 space-y-8">
      <h1 className="text-4xl font-bold text-foreground">Talks</h1>
      <ul className="space-y-8">
        {talks.map((talk) => (
          <li key={talk.url} className="space-y-2">
            <h2 className="text-xl font-semibold">
              <Link
                href={talk.url}
                className="text-foreground hover:text-accent transition-colors"
              >
                {talk.name}
              </Link>
            </h2>
            <p className="text-muted leading-relaxed">{talk.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
