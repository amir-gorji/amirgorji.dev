import type { Metadata } from "next";
import { presentation } from "./data";

export const metadata: Metadata = {
  title: `${presentation.title} — Amir Gorji`,
  description: `Slides and resources from the talk "${presentation.title}" by Amir Gorji.`,
  robots: { index: false, follow: true },
};

export default function AgenticWhattPage() {
  return (
    <div className="py-12 space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Presentation
        </p>
        <h1 className="text-4xl font-bold text-foreground">
          {presentation.title}
        </h1>
        <p className="text-lg text-muted max-w-lg">{presentation.tagline}</p>
      </header>

      <section className="flex flex-col gap-3 sm:flex-row">
        <a
          href={presentation.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          <LinkedInIcon />
          Let&apos;s connect :)
        </a>
        <a
          href={presentation.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-card-border bg-card-bg px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
        >
          <GitHubIcon />
          Cool projects
        </a>
      </section>

      <section className="space-y-5 border-t border-card-border pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Materials
        </h2>
        <div className="grid gap-4">
          {presentation.materials.map((material) => (
            <a
              key={material.title}
              href={material.href}
              {...(material.kind === "download"
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-start justify-between gap-4 rounded-2xl border border-card-border bg-card-bg p-5 transition-colors hover:border-accent"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {material.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {material.description}
                </p>
              </div>
              <span className="mt-1 shrink-0 text-accent">
                {material.kind === "download" ? (
                  <DownloadIcon />
                ) : (
                  <ExternalIcon />
                )}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
