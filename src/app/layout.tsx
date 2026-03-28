import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amirgorji.dev"),
  title: "Amir Gorji",
  description: "Personal website, blog, and resume of Amir Gorji",
  openGraph: {
    title: "Amir Gorji",
    description: "Personal website, blog, and resume of Amir Gorji",
    url: "https://amirgorji.dev",
    siteName: "Amir Gorji",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Amir Gorji
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/resume"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Resume
              </Link>
              <ThemeToggle />
            </nav>
          </header>
          <main className="flex-1 w-full max-w-3xl mx-auto px-6 pb-16">
            {children}
          </main>
          <footer className="w-full max-w-3xl mx-auto px-6 py-8 border-t border-card-border no-print">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Amir Gorji. Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Next.js
              </a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
