import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResumePage from "@/app/resume/page";

describe("ResumePage", () => {
  it("renders the candidate name and all section headings in order", () => {
    render(<ResumePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Amir Gorji" })
    ).toBeInTheDocument();

    const expectedSections = [
      "Summary",
      "Experience",
      "Open Source",
      "Skills",
      "Education",
      "Awards",
      "Languages",
    ];

    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((h) => h.textContent);

    expect(headings).toEqual(expectedSections);
  });

  it("embeds Person JSON-LD structured data", () => {
    const { container } = render(<ResumePage />);
    const ldScript = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(ldScript).not.toBeNull();
    const data = JSON.parse(ldScript!.innerHTML);
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Amir Gorji");
    expect(data.sameAs).toContain("https://github.com/amir-gorji");
  });
});
