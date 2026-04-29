import type { ReactNode } from "react";

export interface ResumeHeader {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface ExperienceEntry {
  company: string;
  companyUrl: string;
  title: string;
  period: string;
  location: string;
  blurb: string;
  bullets: ReactNode[];
}

export interface OpenSourceEntry {
  name: string;
  url: string;
  description: ReactNode;
}

export interface SkillGroup {
  category: string;
  items: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface ResumeData {
  header: ResumeHeader;
  summary: ReactNode;
  experience: ExperienceEntry[];
  openSource: OpenSourceEntry[];
  skills: SkillGroup[];
  education: EducationEntry[];
  awards: string[];
  languages: string;
}

export const resume: ResumeData = {
  header: {
    name: "Amir Gorji",
    title: "Senior Software Engineer",
    location: "Copenhagen, Denmark",
    email: "amir1gorji@gmail.com",
    github: "https://github.com/amir-gorji",
    linkedin: "https://www.linkedin.com/in/amirgorji",
  },

  summary: (
    <>
      Software engineer with <strong>7+ years of experience</strong> building{" "}
      <strong>mobile and web platforms</strong> in fintech, e-commerce, and
      healthcare. Proven ability to <strong>architect greenfield systems</strong>,
      lead and mentor engineering teams, and ship production apps used by{" "}
      <strong>millions of users</strong>. Deep expertise in{" "}
      <strong>TypeScript</strong>, <strong>React Native</strong>, and{" "}
      <strong>React</strong>, with full-stack roots in <strong>Node.js</strong>{" "}
      and <strong>C#/.NET</strong>. Active open-source contributor in the{" "}
      <strong>MCP ecosystem</strong> and{" "}
      <strong>financial compliance tooling</strong>.
    </>
  ),

  experience: [
    {
      company: "Danske Bank",
      companyUrl: "https://danskebank.com/",
      title: "Senior Software Engineer",
      period: "Apr 2023 – Present",
      location: "Copenhagen, Denmark",
      blurb:
        "One of the largest financial institutions in the Nordics, serving millions of customers across multiple markets through digital banking on iOS, Android, and web.",
      bullets: [
        <>
          Decreased <strong>app crash rate by 99.8%</strong>,{" "}
          <strong>load time by 60%</strong>, and{" "}
          <strong>initial RAM consumption by ~50%</strong> through batch
          navigation with lazy-loaded screen flows.
        </>,
        <>
          Designed a <strong>modular navigation library</strong> enforcing
          encapsulated public/private screen access per module, eliminating an
          entire class of cross-module navigation bugs.
        </>,
        <>
          Reduced <strong>code review turnaround by 70%</strong> by authoring{" "}
          <strong>custom ESLint rules</strong> integrated into CI, automating
          enforcement of review standards.
        </>,
        <>
          Architected a <strong>compliant analytics system</strong> that
          dynamically routes events to market-specific report suites, scaling
          automatically to new countries with minimal maintenance.
        </>,
        <>
          <strong>Led and mentored a cross-cultural team</strong>, conducted{" "}
          <strong>technical hiring interviews</strong> for all subsequent hires,
          and ran <strong>knowledge-sharing sessions</strong> for 3 years —
          coaching the team to present independently and making them{" "}
          <strong>stand out across the bank</strong>.
        </>,
        <>
          Established the team&apos;s{" "}
          <strong>state management architecture</strong> using abstraction
          layers, functional programming, discriminated unions, and branded
          types.
        </>,
        <>
          Reimplemented core <strong>login and payment flows</strong>, directly
          impacting millions of daily banking sessions.
        </>,
      ],
    },
    {
      company: "Bizzkit",
      companyUrl: "https://bizzkit.com/",
      title: "Frontend Developer",
      period: "Feb 2022 – Mar 2023",
      location: "Odense, Denmark",
      blurb:
        "Denmark's largest e-commerce SaaS platform, providing PIM and commerce tools to major Danish retailers.",
      bullets: [
        <>
          Migrated <strong>legacy Aurelia code to modern React</strong>,
          significantly increasing <strong>customer satisfaction</strong> and
          long-term maintainability.
        </>,
        <>
          Implemented{" "}
          <strong>technology-agnostic service abstractions</strong> and mocks,
          enabling the project to <strong>pivot technologies</strong> without
          breaking tests or integrations.
        </>,
        <>
          Collaborated closely with <strong>UI/UX designers</strong>,
          proactively identifying edge cases — leading designers to schedule{" "}
          <strong>dedicated review sessions</strong> for all new features.
        </>,
        <>
          <strong>Mentored colleagues</strong> on discriminated-union patterns
          and advanced filter architectures, and taught{" "}
          <strong>coding best practices</strong> to new joiners across teams.
        </>,
      ],
    },
    {
      company: "UniPlato",
      companyUrl: "https://uniplato.com/",
      title: "Senior Frontend Developer (Founding Engineer)",
      period: "Nov 2020 – Jan 2022",
      location: "Perth, Australia (Remote)",
      blurb:
        "An Australian startup (now MeetCoffee) combining scheduling, agenda creation, note-taking, and real-time transcription into a unified meeting platform.",
      bullets: [
        <>
          Joined as the <strong>first technical hire</strong> and laid down the{" "}
          <strong>frontend, backend (Express.js), and database (MariaDB)</strong>{" "}
          foundations from scratch.
        </>,
        <>
          Architected the codebase that enabled a successful{" "}
          <strong>technical team scale-up</strong>, establishing patterns for
          rapid feature development and{" "}
          <strong>onboarding of new engineers</strong>.
        </>,
        <>
          Delivered <strong>full-stack features</strong> across the platform in
          a fast-moving startup environment with high ownership and minimal
          guidance.
        </>,
      ],
    },
    {
      company: "Darmankade",
      companyUrl: "https://darmankade.ir/",
      title: "React Native & Mobile PWA Developer",
      period: "Dec 2018 – Nov 2020",
      location: "Tehran, Iran",
      blurb:
        "A healthcare platform providing online consultations, connecting patients with medical professionals through mobile and web applications.",
      bullets: [
        <>
          <strong>Reimplemented iOS, Android, and web applications</strong> from
          scratch with a focus on performance and UX, resulting in a{" "}
          <strong>+1.2 star increase</strong> in app store ratings.
        </>,
        <>
          Built <strong>WebRTC-powered online meetings</strong> and a real-time{" "}
          <strong>chat system</strong> (typing indicators, granular event
          handling) using WebSockets and Redux Saga event channels.
        </>,
        <>
          Delivered a <strong>cross-platform mobile experience</strong> combining
          video consultations, messaging, and scheduling into a single cohesive
          product.
        </>,
      ],
    },
  ],

  openSource: [
    {
      name: "mcpose",
      url: "https://github.com/amir-gorji/mcpose",
      description: (
        <>
          Composable <strong>middleware proxy</strong> for MCP servers. Koa-style
          onion model for PII redaction, audit logging, and visibility
          filtering. TypeScript.
        </>
      ),
    },
    {
      name: "financial-elastic-mcp-server",
      url: "https://github.com/amir-gorji/financial-elastic-mcp-server",
      description: (
        <>
          <strong>Elasticsearch MCP server</strong> for digital banking with
          multi-stage PII redaction, input sanitization, and audit trails.{" "}
          <strong>PCI DSS / GDPR</strong> compliant. TypeScript.
        </>
      ),
    },
    {
      name: "elastic-pii-proxy",
      url: "https://github.com/amir-gorji/elastic-pii-proxy",
      description: (
        <>
          <strong>MCP proxy</strong> adding PII redaction and compliance controls
          to Elastic&apos;s native MCP server (v8.18+). Built on mcpose.
          TypeScript.
        </>
      ),
    },
    {
      name: "dismatch",
      url: "https://github.com/amir-gorji/dismatch",
      description: (
        <>
          Type-safe <strong>pattern matching</strong> for TypeScript
          discriminated unions. Exhaustive checking, zero dependencies. Used
          across the MCP projects above.
        </>
      ),
    },
  ],

  skills: [
    {
      category: "Mobile",
      items:
        "React Native, iOS/Android platform internals, Mobile architecture, Build & release pipelines, Performance optimization",
    },
    {
      category: "Front-End",
      items:
        "React, TypeScript, JavaScript, Redux, Functional programming, State management",
    },
    {
      category: "Back-End",
      items:
        "Node.js, Express.js, C#/.NET, REST APIs, WebSocket, WebRTC, MariaDB, PostgreSQL, Elasticsearch",
    },
    {
      category: "Architecture",
      items:
        "Modular architecture, Vertical slice architecture, Discriminated unions, Branded types, MCP (Model Context Protocol), Design systems",
    },
    {
      category: "DevOps & Quality",
      items:
        "Git, CI/CD, Custom ESLint rules, TDD, Vitest, Code review automation",
    },
    {
      category: "Leadership",
      items:
        "Technical mentorship, Knowledge sharing, Cross-functional collaboration, Technical hiring, Team building",
    },
  ],

  education: [
    {
      institution: "Sahand University of Technology",
      degree: "B.Sc. Electrical Engineering (Bio-electrical engineering focus)",
      period: "2012 – 2016",
      location: "Tabriz, Iran",
    },
  ],

  awards: ["Gold Medal — Euroinvent 2016 (International Invention Fair, Romania)"],

  languages: "English (Professional Working) • Persian (Native) • Danish (Elementary)",
};
