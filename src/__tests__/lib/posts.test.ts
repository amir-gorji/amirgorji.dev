import { describe, it, expect, vi, beforeEach } from "vitest";
import path from "path";

const existsSyncMock = vi.fn();
const readdirSyncMock = vi.fn();
const readFileSyncMock = vi.fn();

vi.mock("fs", () => ({
  default: {
    existsSync: (...args: unknown[]) => existsSyncMock(...args),
    readdirSync: (...args: unknown[]) => readdirSyncMock(...args),
    readFileSync: (...args: unknown[]) => readFileSyncMock(...args),
  },
  existsSync: (...args: unknown[]) => existsSyncMock(...args),
  readdirSync: (...args: unknown[]) => readdirSyncMock(...args),
  readFileSync: (...args: unknown[]) => readFileSyncMock(...args),
}));

vi.mock("gray-matter", () => ({
  default: (content: string) => {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { data: {}, content };
    const data: Record<string, string> = {};
    match[1].split("\n").forEach((line) => {
      const [key, ...rest] = line.split(": ");
      if (key && rest.length) data[key.trim()] = rest.join(": ").trim();
    });
    return { data, content: match[2] };
  },
}));

const postsDir = path.join(process.cwd(), "content/posts");

describe("getAllPosts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns empty array when posts directory does not exist", async () => {
    existsSyncMock.mockReturnValue(false);

    const { getAllPosts } = await import("@/lib/posts");
    const posts = await getAllPosts();
    expect(posts).toEqual([]);
  });

  it("returns posts sorted by date descending", async () => {
    existsSyncMock.mockReturnValue(true);
    readdirSyncMock.mockReturnValue(["old-post.mdx", "new-post.mdx"]);
    readFileSyncMock.mockImplementation((filePath: string) => {
      const name = path.basename(filePath);
      if (name === "old-post.mdx") {
        return "---\ntitle: Old Post\ndate: 2025-01-01\nexcerpt: Old\n---\nContent";
      }
      return "---\ntitle: New Post\ndate: 2026-01-01\nexcerpt: New\n---\nContent";
    });

    const { getAllPosts } = await import("@/lib/posts");
    const posts = await getAllPosts();

    expect(posts).toHaveLength(2);
    expect(posts[0].title).toBe("New Post");
    expect(posts[1].title).toBe("Old Post");
  });

  it("ignores non-mdx files", async () => {
    existsSyncMock.mockReturnValue(true);
    readdirSyncMock.mockReturnValue(["post.mdx", "readme.md", "notes.txt"]);
    readFileSyncMock.mockReturnValue(
      "---\ntitle: Post\ndate: 2026-01-01\nexcerpt: Excerpt\n---\nContent"
    );

    const { getAllPosts } = await import("@/lib/posts");
    const posts = await getAllPosts();
    expect(posts).toHaveLength(1);
    expect(posts[0].slug).toBe("post");
  });
});

describe("getPostBySlug", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns post meta and content", async () => {
    readFileSyncMock.mockReturnValue(
      "---\ntitle: My Post\ndate: 2026-03-01\nexcerpt: A great post\n---\nHello world"
    );

    const { getPostBySlug } = await import("@/lib/posts");
    const post = await getPostBySlug("my-post");

    expect(post.meta.slug).toBe("my-post");
    expect(post.meta.title).toBe("My Post");
    expect(post.meta.date).toBe("2026-03-01");
    expect(post.meta.excerpt).toBe("A great post");
    expect(post.content).toBe("Hello world");
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(postsDir, "my-post.mdx"),
      "utf8"
    );
  });
});
