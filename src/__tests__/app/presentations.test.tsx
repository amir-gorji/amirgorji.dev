import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PresentationsPage from "@/app/presentations/page";

describe("PresentationsPage", () => {
  it("lists the CopenhagenJS talk linking to its page", () => {
    render(<PresentationsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Talks" })
    ).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /Agentic whatt/ });
    expect(link).toHaveAttribute("href", "/presentations/agentic-whatt");
  });

  it("leaves out talks without their own page", () => {
    render(<PresentationsPage />);

    expect(screen.queryByText(/Developer Experience/)).toBeNull();
  });
});
