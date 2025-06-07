import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "know[ledge] - Unlock Hidden History",
  description:
    "Unlock untold history with know[ledge], the gamified, AI-powered app for interactive history timelines and decolonized, inclusive learning. Explore diverse stories, race and gender perspectives, and more.",
  keywords: [
    "untold history app",
    "gamified history learning",
    "interactive history timelines",
    "AI history learning",
    "decolonized education app",
    "race and gender in history",
    "inclusive history app",
    "edtech history platform",
    "learn diverse histories",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    other: [
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "32x32",
      },
    ],
  },
  openGraph: {
    title: "know[ledge] - Unlock Hidden History",
    description:
      "Discover the untold stories of history with know[ledge], the interactive, gamified, and AI-powered app for inclusive and decolonized learning.",
    url: "https://knowledge-landing-v2.vercel.app//",
    siteName: "know[ledge]",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "know[ledge] - Unlock Hidden History",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "know[ledge] - Unlock Hidden History",
    description:
      "Explore diverse, interactive, and gamified history with know[ledge]. AI-powered timelines, decolonized education, and more.",
    images: ["/opengraph.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
