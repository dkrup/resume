import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://denis-krupchenko.vercel.app";
const siteName = "Denis Krupchenko — Senior Automation QA Engineer";
const description =
  "Senior Automation QA Engineer. Playwright Architect | AI-Driven QA | CI/CD Automation. UI + API frameworks, mentoring, scalable test systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s — Denis Krupchenko"
  },
  description,
  applicationName: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description,
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
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

