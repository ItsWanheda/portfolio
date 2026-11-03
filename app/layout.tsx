import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://itswanheda.vercel.app"),
  title: {
    default: "ItsWanheda — Systems, Security & Ideas",
    template: "%s — ItsWanheda",
  },
  description: "A personal platform for cybersecurity, backend engineering, networking research, experiments, and technical writing.",
  applicationName: "ItsWanheda",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "ItsWanheda",
    title: "ItsWanheda — Systems, Security & Ideas",
    description: "Beyond a résumé. A digital home for systems, research, experiments, and ideas.",
    url: "https://itswanheda.vercel.app",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ItsWanheda — Cybersecurity and Backend Engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsWanheda — Systems, Security & Ideas",
    description: "A personal platform for cybersecurity, backend engineering, and technical research.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
