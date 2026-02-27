import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Denis Krupchenko — Senior Automation QA Engineer",
    template: "%s | Denis Krupchenko"
  },
  description:
    "Senior Automation QA Engineer specializing in Playwright, AI-driven QA, and CI/CD test architectures for modern web applications.",
  openGraph: {
    title: "Denis Krupchenko — Senior Automation QA Engineer",
    description:
      "I build scalable test architectures and AI-powered QA systems for modern web applications.",
    url: "https://example.com",
    siteName: "Denis Krupchenko — Automation QA",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Denis Krupchenko — Senior Automation QA Engineer",
    description:
      "I build scalable test architectures and AI-powered QA systems for modern web applications."
  },
  icons: {
    icon: "/icon.svg"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#060b1f] text-slate-100">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,_rgba(71,108,255,0.34),transparent_36%),radial-gradient(circle_at_80%_0%,_rgba(16,131,255,0.28),transparent_42%),radial-gradient(circle_at_50%_100%,_rgba(10,58,141,0.4),transparent_60%)]" />
        <div className="fixed inset-0 -z-10 bg-grid opacity-[0.22]" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

