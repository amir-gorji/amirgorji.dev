"use client";

import { useRef, useState } from "react";

export default function CopyableCodeBlock(
  props: React.HTMLAttributes<HTMLPreElement>
) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const language =
    typeof props["data-language" as keyof typeof props] === "string"
      ? (props["data-language" as keyof typeof props] as string)
      : null;

  const handleCopy = async () => {
    const text = preRef.current?.querySelector("code")?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      {language && (
        <span className="absolute top-2.5 right-8 font-mono text-[0.6rem] uppercase tracking-wider text-muted opacity-60 pointer-events-none select-none">
          {language}
        </span>
      )}
      <pre ref={preRef} {...props} />
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-1 rounded text-muted hover:text-foreground"
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
    </div>
  );
}
