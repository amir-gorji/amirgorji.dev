import { describe, it, expect, vi } from "vitest";

vi.mock("@/lib/posts", () => ({
  getAllPosts: vi.fn().mockResolvedValue([
    { slug: "hello-world", title: "Hello", date: "2026-01-01", excerpt: "" },
    { slug: "second-post", title: "Second", date: "2026-02-01", excerpt: "" },
  ]),
}));

import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes base pages and blog posts", async () => {
    const result = await sitemap();

    const urls = result.map((entry) => entry.url);
    expect(urls).toContain("https://amirgorji.dev");
    expect(urls).toContain("https://amirgorji.dev/resume");
    expect(urls).toContain("https://amirgorji.dev/posts/hello-world");
    expect(urls).toContain("https://amirgorji.dev/posts/second-post");
  });

  it("returns correct number of entries", async () => {
    const result = await sitemap();
    // 2 static pages + 2 blog posts
    expect(result).toHaveLength(4);
  });
});
