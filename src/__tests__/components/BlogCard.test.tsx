import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BlogCard } from "@/components/BlogCard";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("BlogCard", () => {
  const props = {
    slug: "test-post",
    title: "Test Post Title",
    date: "2026-01-15",
    excerpt: "This is a test excerpt for the blog post.",
  };

  it("renders title, date, and excerpt", () => {
    render(<BlogCard {...props} />);

    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
    expect(screen.getByText("2026-01-15")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test excerpt for the blog post.")
    ).toBeInTheDocument();
  });

  it("links to the correct post URL", () => {
    render(<BlogCard {...props} />);

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/posts/test-post");
  });
});
