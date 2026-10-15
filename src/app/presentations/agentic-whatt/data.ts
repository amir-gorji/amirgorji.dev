export interface Material {
  title: string;
  description: string;
  href: string;
  /** "download" serves a file from /public; "external" opens another site. */
  kind: "download" | "external";
}

export const presentation = {
  title: "Agentic WHATT",
  tagline: "Thanks for attending. Everything from the talk is collected here.",
  linkedinUrl: "https://linkedin.com/in/amirgorji",
  githubUrl: "https://github.com/amir-gorji",
  materials: [
    {
      title: "The slides",
      description: "The full deck from the talk.",
      href: "/presentations/agentic-whatt/agentic-whatt-slides.pptx",
      kind: "download",
    },
    {
      title: "The Charter",
      description: "An example repo showing the charter in practice.",
      href: "https://github.com/amir-gorji/gemini-review-gate",
      kind: "external",
    },
    {
      title: "The Ten-Point Checklist",
      description: "The ten questions to run through before shipping an agent.",
      href: "/presentations/agentic-whatt/agentic-whatt-checklist.pdf",
      kind: "download",
    },
  ] satisfies Material[],
};
