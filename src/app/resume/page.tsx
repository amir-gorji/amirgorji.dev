import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resume — Amir Gorji",
  description: "Professional resume of Amir Gorji",
};

const SHOW_RESUME = false;

const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "Git",
  "Docker",
  "AWS",
  "REST APIs",
  "GraphQL",
];

export default function ResumePage() {
  if (!SHOW_RESUME) {
    return (
      <div className="py-12">
        <h1 className="text-4xl font-bold text-foreground">Resume</h1>
        <p className="mt-4 text-muted">Coming soon.</p>
      </div>
    );
  }

  return (
    <div className="py-12 space-y-12">
      <header className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Amir Gorji</h1>
          <p className="mt-2 text-lg text-muted">Software Engineer</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a
            href="mailto:amir@example.com"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            amir@example.com
          </a>
          <a
            href="https://github.com/amirgorji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            github.com/amirgorji
          </a>
          <a
            href="https://linkedin.com/in/amirgorji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            linkedin.com/in/amirgorji
          </a>
        </div>
      </header>

      <Section title="Summary">
        <p className="text-muted leading-relaxed">
          Passionate software engineer with experience in building scalable web
          applications and services. Focused on delivering clean, maintainable
          code and great user experiences.
        </p>
      </Section>

      <Section title="Experience">
        <TimelineItem
          title="Senior Software Engineer"
          organization="Company Name"
          period="2024 — Present"
          items={[
            "Led development of key product features serving thousands of users",
            "Designed and implemented scalable microservices architecture",
            "Mentored junior engineers and conducted code reviews",
          ]}
        />
        <TimelineItem
          title="Software Engineer"
          organization="Previous Company"
          period="2022 — 2024"
          items={[
            "Built and maintained full-stack web applications using React and Node.js",
            "Improved application performance by optimizing database queries",
            "Collaborated with cross-functional teams to deliver features on schedule",
          ]}
        />
      </Section>

      <Section title="Education">
        <TimelineItem
          title="Bachelor of Science in Computer Science"
          organization="University Name"
          period="2018 — 2022"
          items={[]}
        />
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-sm text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <ProjectItem
          title="Personal Website"
          description="This website — built with Next.js, Tailwind CSS, and MDX. Features a blog, resume, and dark mode support."
          link="https://amirgorji.dev"
        />
        <ProjectItem
          title="Project Name"
          description="Brief description of an interesting project you've worked on, the technologies used, and the impact it had."
          link="https://github.com/amirgorji/project"
        />
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
  period: string;
  items: string[];
}

function TimelineItem({
  title,
  organization,
  period,
  items,
}: TimelineItemProps) {
  return (
    <article className="rounded-2xl border border-card-border bg-card-bg p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted">{organization}</p>
        </div>
        <p className="text-sm text-muted">{period}</p>
      </div>
      {items.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
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
  description: string;
  link: string;
}

function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-card-border bg-card-bg p-5 transition-colors hover:border-accent"
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <p className="mt-4 text-sm text-accent hover:text-accent-hover transition-colors">
        {link}
      </p>
    </a>
  );
}
