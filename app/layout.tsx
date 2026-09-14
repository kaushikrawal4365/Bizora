import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/navigation/SiteChrome";

export const metadata: Metadata = {
  title: "BIZORA — Digital experiences for businesses with ambition.",
  description: "BIZORA builds modern digital experiences for ambitious businesses.",
  metadataBase: new URL("https://bizora.com"),
  openGraph: {
    title: "BIZORA — Digital experiences for businesses with ambition.",
    description: "Modern websites, digital products and experiences for businesses ready to grow.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome />
        <div className="top-rail" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
