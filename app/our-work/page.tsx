import type { Metadata } from "next"
import OurWorkClientPage from "./OurWorkClientPage"

export const metadata: Metadata = {
  title: "Our Work - Programs & Initiatives",
  description:
    "Explore WEEDS' comprehensive programs in women's development, children's education, health development, and community initiatives. Learn about our Self-Help Groups, PoSH training, scholarships, and health camps.",
  keywords: [
    "women development programs",
    "children education initiatives",
    "health development",
    "community development",
    "self help groups",
    "PoSH training",
    "educational scholarships",
    "health camps",
    "skill development",
    "rural development",
  ],
  openGraph: {
    title: "Our Work - WEEDS Programs & Initiatives",
    description:
      "Discover WEEDS' impactful programs empowering women and children through education, health, and community development.",
    images: [
      {
        url: "/women-development-main.jpg",
        width: 1200,
        height: 630,
        alt: "WEEDS programs and initiatives",
      },
    ],
  },
}

export default function OurWorkPage() {
  return <OurWorkClientPage />
}
