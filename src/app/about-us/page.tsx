import { AboutPage } from "@/components/about";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Know[ledge]",
  description:
    "Know[ledge] is reclaiming history through AI-powered storytelling, gamification, and interactive experiences. Discover the untold stories of women, people of color, LGBTQ+ pioneers, and changemakers.",
  openGraph: {
    title: "About Us | Know[ledge]",
    description:
      "Know[ledge] is reclaiming history through AI-powered storytelling, gamification, and interactive experiences. Discover the untold stories of women, people of color, LGBTQ+ pioneers, and changemakers.",
    url: "https://yourdomain.com/about-us",
    siteName: "Know[ledge]",
    type: "website",
  },
};
export default function Page() {
  return <AboutPage />;
}
