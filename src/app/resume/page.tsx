import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Amir Gorji",
  description: "Professional resume of Amir Gorji",
};

export default function ResumePage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-foreground">Resume</h1>
      <p className="mt-4 text-muted">Coming soon.</p>
    </div>
    /* <div className="py-12 space-y-12">
      <header>
        <h1 className="text-4xl font-bold text-foreground">Amir Gorji</h1>
        <p className="mt-2 text-lg text-muted">Software Engineer</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
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
          {[
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
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm bg-card-bg border border-card-border text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-4">
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
        </div>
      </Section>
    </div> */
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-card-border">
        {title}
      </h2>
      {children}
    </section>
  );
}

function TimelineItem({
  title,
  organization,
  period,
  items,
}: {
  title: string;
  organization: string;
  period: string;
  items: string[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-medium text-foreground">{title}</h3>
        <span className="text-sm text-muted whitespace-nowrap">{period}</span>
      </div>
      <p className="text-accent text-sm">{organization}</p>
      {items.length > 0 && (
        <ul className="mt-2 space-y-1 text-muted text-sm list-disc list-inside">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProjectItem({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div>
      <h3 className="font-medium text-foreground">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          {title}
        </a>
      </h3>
      <p className="text-sm text-muted mt-1">{description}</p>
    </div>
  );
}
