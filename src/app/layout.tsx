import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});
import "./globals.css";
import { Toast } from "@/components/Toast";
import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  title: "know[ledge] - Unlock Hidden History",
  description:
    "Your gateway to historical discovery through interactive learning",
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
        {/* <Footer /> */}
        <Toast />
      </body>
    </html>
  );
}
