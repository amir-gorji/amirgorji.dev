import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SiteNav } from "@/components/SiteNav";

describe("SiteNav", () => {
  it("links to Talks and Resume", () => {
    render(<SiteNav />);

    expect(screen.getByRole("link", { name: "Talks" })).toHaveAttribute(
      "href",
      "/presentations"
    );
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume"
    );
  });
});
