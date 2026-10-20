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
  highlights: ReactNode[];
  experience: ExperienceEntry[];
  openSource: OpenSourceEntry[];
  speaking: OpenSourceEntry[];
  skills: SkillGroup[];
  education: EducationEntry[];
  certifications: string[];
  awards: string[];
  languages: string;
}

export const resume: ResumeData = {
  header: {
    name: "Amir Gorji",
    title:
      "Senior Software Engineer · Leadership, Mobile Platform (React Native) · Full-Stack TypeScript · AI Enablement",
    location: "Copenhagen, Denmark",
    email: "amir1gorji@gmail.com",
    github: "https://github.com/amir-gorji",
    linkedin: "https://www.linkedin.com/in/amirgorji",
  },

  summary: (
    <>
      Senior software engineer and, for the past 3.5 years,{" "}
      <strong>de facto tech lead</strong> of a React Native team in Danske
      Bank&apos;s Channels Corporates tribe: owning the mobile platform&apos;s{" "}
      <strong>architecture and engineering standards</strong>, onboarding other
      teams onto it, running the technical stage of hiring, and levelling up the
      team through mentoring and a three-year knowledge-sharing programme.
      Member of the tribe&apos;s <strong>AI Enablement team</strong>, where I
      built the governance and compliance layer for the bank&apos;s development
      MCP servers and demoed an agentic payment months before the bank&apos;s
      public one. <strong>7+ years of full-stack TypeScript</strong> (React
      Native, React, Node.js, C#/.NET) in fintech, e-commerce SaaS and
      healthcare, including building a startup&apos;s entire stack as a founding
      engineer. Speaker at CopenhagenJS, October 2026.
    </>
  ),

  highlights: [
    <>
      <strong>Technical direction:</strong> 3.5 years as de facto tech lead of
      the React Native platform behind District Mobile, Danske Bank&apos;s
      business-banking app; onboarded the Investment and Liquidity teams onto
      the platform.
    </>,
    <>
      <strong>AI enablement:</strong> built the governance, compliance and
      regulation layer for the bank&apos;s development MCP servers on mcpose,
      shipped redacted, least-privilege Sentry and Elastic MCP servers for
      bank-wide use, and demoed an agentic payment three months before Danske
      Bank and Mastercard&apos;s public Denmark-first AI-agent payment.
    </>,
    <>
      <strong>Reliability and performance at scale:</strong> crash rate{" "}
      <strong>−99.8%</strong>, load time <strong>−60%</strong>, initial RAM{" "}
      <strong>−~50%</strong>; core login and payment flows re-implemented for
      millions of daily sessions.
    </>,
    <>
      <strong>People:</strong> ran the technical-test stage of the team&apos;s
      hiring (10+ candidates assessed, 3 hires); mentoring across the team, with
      colleagues from those sessions now owning three of the platform&apos;s
      modules; ran a three-year knowledge-sharing programme; teach AI sessions
      across the tribe.
    </>,
    <>
      <strong>Full-stack, zero-to-one and standing:</strong> founding engineer
      at UniPlato (front-end, Node.js/Express, MariaDB); custom ESLint rules in
      CI cut code-review turnaround <strong>70%</strong>; open-source mcpose and
      dismatch on npm; speaker at CopenhagenJS (October 2026) and twice at
      Danske Bank&apos;s Developer Experience tribe.
    </>,
  ],

  experience: [
    {
      company: "Danske Bank",
      companyUrl: "https://danskebank.com/",
      title: "Senior Software Engineer (Tech Lead, Mobile Platform)",
      period: "Apr 2023 – Present",
      location: "Copenhagen, Denmark",
      blurb:
        "Channels Corporates tribe. React Native/TypeScript platform behind District Mobile, the business-banking app that expanded to Norway, Sweden and Finland in 2025–26, backed by Node.js services and delivered under banking security and regulatory requirements (PSD2/SCA, GDPR, DORA).",
      bullets: [
        <>
          <strong>Set the technical direction of the mobile platform</strong>{" "}
          for 3.5 years: owned architecture decisions and the engineering
          standards, including module boundaries, navigation contracts and a
          state-management architecture built on abstraction layers,
          discriminated unions and branded types, and brought the engineering
          perspective into product and leadership decisions.
        </>,
        <>
          <strong>Onboarded the Investment and Liquidity teams</strong> onto the
          District Mobile platform and wrote the cross-team rules for module
          ownership, reviews and releases that let them ship independently
          without regressions in shared code.
        </>,
        <>
          <strong>
            Ran the technical-test stage of the team&apos;s hiring
          </strong>{" "}
          from my first year: assessed 10+ candidates and contributed to 3
          hires.
        </>,
        <>
          <strong>Mentoring across the team</strong>: pairing and code-review
          coaching on React Native and TypeScript patterns from when I joined,
          and later one-to-one support for colleagues as the team grew.
          Colleagues from those sessions now own three of the platform&apos;s
          modules, cards among them.
        </>,
        <>
          <strong>Ran the team&apos;s knowledge-sharing programme</strong> for
          three years, coaching engineers to research and present topics
          themselves, until the team was recognised across the bank for its
          engineering practice.
        </>,
        <>
          <strong>Member of the tribe&apos;s AI Enablement team</strong>, a
          volunteer group of engineers and architects driving AI adoption across
          the tribe and into the wider bank; teach AI sessions in the
          tribe&apos;s meetings and presented twice at the Developer Experience
          tribe (compliance and security in AI tooling; AI-powered large-scale
          migrations that don&apos;t derail or decay).
        </>,
        <>
          <strong>Built the governance, compliance and regulation layer</strong>{" "}
          for the bank&apos;s development MCP servers on mcpose, then used it to
          turn internal developer-observability MCP servers (Sentry and Elastic
          first) into redacted, minimised servers that anyone in the bank can
          use with least-privilege access.
        </>,
        <>
          At the bank&apos;s GenAI hackathon (June 2026), demoed how MCP servers
          can open internal systems to all employees with minimal necessary
          access, plus a <strong>working agentic payment</strong>: an MCP tool
          call paid over the ATXP protocol and settled on Base (Ethereum L2) for
          a USD 0.0001 fee, three months before Danske Bank and
          Mastercard&apos;s public Denmark-first AI-agent payment (September
          2026).
        </>,
        <>
          Diagnosed the three failure modes that make agentic coding produce
          plausible-but-wrong code (sycophancy, instruction decay, gaming the
          oracle) and designed a <strong>ten-gate setup</strong> that fights
          back (deterministic rules, a behavioural oracle, mutation testing, and
          an anti-gaming review charter enforced by a second model that cannot
          edit the tests), which caught real gate-gaming changes and a hidden
          regression before release; demoed inside the bank and at CopenhagenJS.
        </>,
        <>
          Re-architected navigation into batched, lazy-loaded screen flows,
          cutting the <strong>crash rate by 99.8%</strong>,{" "}
          <strong>load time by 60%</strong> and{" "}
          <strong>initial RAM use by ~50%</strong> in an app with millions of
          daily sessions.
        </>,
        <>
          Designed the <strong>modular navigation library</strong> that enforces
          public/private screen access per module, adopted by the teams building
          on District Mobile, eliminating an entire class of cross-module
          navigation bugs and letting teams own modules independently.
        </>,
        <>
          Cut <strong>code-review turnaround by 70%</strong> by encoding the
          team&apos;s review standards as custom ESLint rules enforced in CI.
        </>,
        <>
          Built <strong>dismatch</strong>, a type-safe pattern-matching library
          for discriminated unions, to remove a class of state-handling bugs and
          review bottlenecks from the team&apos;s codebase; later open-sourced
          (v2.6 on npm).
        </>,
        <>
          Architected the <strong>compliance-aware analytics system</strong>{" "}
          that routes events to market-specific report suites and scales to new
          countries with no per-market code.
        </>,
        <>
          Re-implemented the core <strong>login and payment flows</strong> end
          to end, React Native clients and Node.js services, under PSD2/SCA
          requirements, directly affecting millions of daily banking sessions.
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
        "One of Denmark's leading e-commerce platforms (Hesehus A/S); worked on the PIM (product information management) product used by major Danish retailers.",
      bullets: [
        <>
          Migrated the PIM platform&apos;s{" "}
          <strong>legacy Aurelia front-end to React</strong>, improving
          long-term maintainability and customer satisfaction.
        </>,
        <>
          Introduced <strong>technology-agnostic service abstractions</strong>{" "}
          and mocks that let the product pivot technologies without breaking
          tests or integrations, and partnered with UX designers to surface edge
          cases before build, which made dedicated design-review sessions
          standard for every new feature.
        </>,
        <>
          <strong>Mentored colleagues</strong> across teams on
          discriminated-union patterns and filter architecture; taught coding
          best practices to new joiners.
        </>,
      ],
    },
    {
      company: "UniPlato",
      companyUrl: "https://uniplato.com/",
      title: "Founding Full-Stack Engineer",
      period: "Nov 2020 – Jan 2022",
      location: "Perth, Australia (Remote)",
      blurb:
        "Startup (now MeetCoffee) combining scheduling, agenda creation, note-taking and real-time transcription into one meeting platform.",
      bullets: [
        <>
          Joined as <strong>one of the first two engineers</strong> and built
          the platform&apos;s foundations from scratch (TypeScript front-end,
          Node.js/Express.js backend and MariaDB data model), delivering the MVP
          that led to the technical team&apos;s scale-up.
        </>,
        <>
          Established the <strong>codebase architecture</strong> and engineering
          patterns (code structure, API conventions, testing) that enabled rapid
          feature development, and led the technical onboarding of each engineer
          who joined afterwards.
        </>,
      ],
    },
    {
      company: "Darmankade",
      companyUrl: "https://darmankade.ir/",
      title: "Full-Stack & Mobile Engineer",
      period: "Dec 2018 – Nov 2020",
      location: "Tehran, Iran",
      blurb:
        "Healthcare platform connecting patients with medical professionals for online consultations via mobile and web.",
      bullets: [
        <>
          <strong>Re-implemented the iOS, Android and web applications</strong>{" "}
          from scratch (React Native and mobile PWA) as one cross-platform
          product for video consultations, messaging and scheduling, lifting the
          app-store rating by <strong>1.2 stars</strong>.
        </>,
        <>
          Built <strong>WebRTC video consultations</strong> and a real-time chat
          system (typing indicators, granular event handling) on WebSockets and
          Redux Saga event channels.
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
          Programmable <strong>middleware proxy and governance layer</strong>{" "}
          for MCP servers (v3, 8 npm packages): Koa-style onion middleware,
          deny-by-default policy, consent handling, PII redaction, HMAC-chained
          audit trails and OpenTelemetry. mcpose.dev
        </>
      ),
    },
    {
      name: "gemini-review-gate",
      url: "https://github.com/amir-gorji/gemini-review-gate",
      description: (
        <>
          <strong>Fail-closed AI code review</strong> as a blocking merge gate
          for GitHub Actions: rejects gate-gaming changes (deleted or rewritten
          tests, lowered coverage, widened types), nonce-fences diffs against
          prompt injection, and replays a calibration corpus to measure false
          positives and negatives.
        </>
      ),
    },
    {
      name: "financial-elastic-mcp-server",
      url: "https://github.com/amir-gorji/financial-elastic-mcp-server",
      description: (
        <>
          Read-only <strong>Elasticsearch MCP server</strong> with multi-stage
          PII redaction (card, IBAN, SSN, e-mail, phone), audit trails and{" "}
          <strong>GDPR / DORA / PCI DSS</strong> profiles for regulated
          environments.
        </>
      ),
    },
    {
      name: "elastic-pii-proxy",
      url: "https://github.com/amir-gorji/elastic-pii-proxy",
      description: (
        <>
          <strong>MCP proxy</strong> adding PII redaction and compliance
          controls to Elastic&apos;s native MCP server (v8.18+). Built on
          mcpose.
        </>
      ),
    },
    {
      name: "dismatch",
      url: "https://github.com/amir-gorji/dismatch",
      description: (
        <>
          Type-safe <strong>pattern matching</strong> for TypeScript
          discriminated unions (v2.6): exhaustive checking, async and collection
          helpers, zero dependencies. dismatch.dev
        </>
      ),
    },
  ],

  speaking: [
    {
      name: "CopenhagenJS: “Agentic whatt??” (15 October 2026)",
      url: "/presentations/agentic-whatt/",
      description: (
        <>
          Telling quality apart from plausible in AI-generated code: why
          plausibility wins by default (sycophancy, instruction decay, gaming
          the oracle), the <strong>ten-gate setup</strong> that fights back
          (deterministic rules, behavioural oracle, mutation testing, an
          anti-gaming charter judged by a second model) and the AI-FOMO trap.
          Hosted at Danske Bank. Slides, charter and ten-point checklist.
        </>
      ),
    },
    {
      name: "Danske Bank Developer Experience tribe: two talks",
      url: "https://www.linkedin.com/in/amirgorji",
      description: (
        <>
          Compliance and security in AI tooling; AI-powered large-scale
          migrations that don&apos;t derail or decay.
        </>
      ),
    },
  ],

  skills: [
    {
      category: "Technical Leadership",
      items:
        "Architecture and technical direction, Engineering standards across teams, Cross-team onboarding, Technical hiring and assessment, Mentoring and knowledge-sharing programmes, Stakeholder communication, Delivery in regulated environments (PSD2/SCA, GDPR, DORA)",
    },
    {
      category: "AI Engineering",
      items:
        "MCP servers and proxies, Governance, compliance and PII-redaction layers for LLM tooling, Agentic developer workflows and AI code-review gates, Agentic payments (ATXP), AI-powered large-scale migrations",
    },
    {
      category: "Mobile",
      items:
        "React Native (iOS/Android), Mobile architecture and modularisation, Navigation and screen-flow design, Performance (startup time, memory, crash rate), Build and release pipelines, iOS/Android platform differences",
    },
    {
      category: "Front-End",
      items:
        "React, TypeScript, JavaScript, Redux / Redux Saga, Functional programming, State management, Design collaboration",
    },
    {
      category: "Back-End & Data",
      items:
        "Node.js, Express.js, C#/.NET, REST APIs, WebSocket, WebRTC, PostgreSQL, MariaDB, Elasticsearch",
    },
    {
      category: "Architecture & Quality",
      items:
        "Modular and vertical-slice architecture, Abstraction layers, Discriminated unions and branded types, Type-safe pattern matching, Compliance-aware analytics pipelines, Git, CI/CD, Custom ESLint rules, TDD, Vitest, Code-review automation",
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

  certifications: [
    "Principal Developer Masterclass, Principal.dev (May 2025)",
    "Payments (LinkedIn Learning)",
    "Programming Fundamentals in Kotlin (Meta / Coursera)",
    "Introduction to Android Mobile Application Development (Meta / Coursera)",
  ],

  awards: [
    "Gold Medal, Euroinvent 2016 (International Invention Fair, Romania)",
  ],

  languages:
    "English (Professional Working) • Persian (Native) • Danish (Elementary)",
};
