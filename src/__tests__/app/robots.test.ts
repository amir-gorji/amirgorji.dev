import { describe, it, expect } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
  it("allows all user agents", () => {
    const result = robots();
    expect(result.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
  });

  it("includes sitemap URL", () => {
    const result = robots();
    expect(result.sitemap).toBe("https://amirgorji.dev/sitemap.xml");
  });
});
