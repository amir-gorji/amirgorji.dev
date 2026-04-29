import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SocialLinks } from "@/components/SocialLinks";

describe("SocialLinks", () => {
  it("renders GitHub and LinkedIn links", () => {
    render(<SocialLinks />);

    const github = screen.getByLabelText("GitHub");
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", "https://github.com/amir-gorji");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");

    const linkedin = screen.getByLabelText("LinkedIn");
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute("href", "https://linkedin.com/in/amirgorji");
    expect(linkedin).toHaveAttribute("target", "_blank");
  });
});
