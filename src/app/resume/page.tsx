import type { Metadata } from "next";
import type { ReactNode } from "react";
import { resume } from "./data";

export const metadata: Metadata = {
  title: "Resume — Amir Gorji",
  description: `${resume.header.title} — ${resume.header.location}. ${resume.experience.length} years of mobile and web platform engineering across fintech, e-commerce, and healthcare.`,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.header.name,
  jobTitle: resume.header.title,
  url: "https://amirgorji.dev",
  email: `mailto:${resume.header.email}`,
  sameAs: [resume.header.github, resume.header.linkedin],
};

export default function ResumePage() {
  return (
    <div className="py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            {resume.header.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{resume.header.title}</p>
          <p className="mt-1 text-sm text-muted">{resume.header.location}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a
            href={`mailto:${resume.header.email}`}
            className="text-accent hover:text-accent-hover transition-colors"
          >
            {resume.header.email}
          </a>
          <a
            href={resume.header.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            GitHub
          </a>
          <a
            href={resume.header.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <Section title="Summary">
        <p className="text-muted leading-relaxed">{resume.summary}</p>
      </Section>

      <Section title="Experience">
        {resume.experience.map((entry) => (
          <TimelineItem
            key={`${entry.company}-${entry.period}`}
            title={entry.title}
            organization={entry.company}
            organizationUrl={entry.companyUrl}
            period={entry.period}
            location={entry.location}
            blurb={entry.blurb}
            items={entry.bullets}
          />
        ))}
      </Section>

      <Section title="Open Source">
        {resume.openSource.map((entry) => (
          <ProjectItem
            key={entry.name}
            title={entry.name}
            description={entry.description}
            link={entry.url}
          />
        ))}
      </Section>

      <Section title="Skills">
        <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {resume.skills.map((group) => (
            <div key={group.category} className="space-y-1">
              <dt className="text-sm font-semibold text-foreground">
                {group.category}
              </dt>
              <dd className="text-sm text-muted leading-relaxed">
                {group.items}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        {resume.education.map((entry) => (
          <article
            key={`${entry.institution}-${entry.period}`}
            className="rounded-2xl border border-card-border bg-card-bg p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.institution}
                </h3>
                <p className="text-sm text-muted">{entry.degree}</p>
                <p className="text-sm text-muted">{entry.location}</p>
              </div>
              <p className="text-sm text-muted">{entry.period}</p>
            </div>
          </article>
        ))}
      </Section>

      <Section title="Awards">
        <ul className="space-y-2 text-sm leading-relaxed text-muted">
          {resume.awards.map((award) => (
            <li key={award} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <p className="text-sm text-muted">{resume.languages}</p>
      </Section>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-5 border-t border-card-border pt-6">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

interface TimelineItemProps {
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  location?: string;
  blurb?: string;
  items: ReactNode[];
}

function TimelineItem({
  title,
  organization,
  organizationUrl,
  period,
  location,
  blurb,
  items,
}: TimelineItemProps) {
  return (
    <article className="rounded-2xl border border-card-border bg-card-bg p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted">
            {organizationUrl ? (
              <a
                href={organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                {organization}
              </a>
            ) : (
              organization
            )}
            {location ? <span> · {location}</span> : null}
          </p>
        </div>
        <p className="text-sm text-muted">{period}</p>
      </div>
      {blurb ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">{blurb}</p>
      ) : null}
      {items.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

interface ProjectItemProps {
  title: string;
  description: ReactNode;
  link: string;
  showLinkUrl?: boolean;
}

function ProjectItem({
  title,
  description,
  link,
  showLinkUrl = false,
}: ProjectItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-card-border bg-card-bg p-5 transition-colors hover:border-accent"
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {showLinkUrl ? (
        <p className="mt-4 text-sm text-accent hover:text-accent-hover transition-colors">
          {link}
        </p>
      ) : null}
    </a>
  );
}
