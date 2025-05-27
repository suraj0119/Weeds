import type { Metadata } from "next"
import ImpactPageClient from "./ImpactPageClient"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Impact - Success Stories & Achievements",
  description:
    "Discover WEEDS' impact through success stories, project highlights, and achievements. Learn how we've empowered 25,000+ women, supported 10,000+ children, and conducted 300+ health camps since 1989.",
  keywords: [
    "WEEDS impact",
    "success stories",
    "women empowerment results",
    "children education impact",
    "community development achievements",
    "NGO testimonials",
    "social impact",
    "transformation stories",
    "awards recognition",
    "project highlights",
  ],
  openGraph: {
    title: "Our Impact - WEEDS Success Stories & Achievements",
    description:
      "See the real impact of WEEDS' work through inspiring success stories and measurable achievements in women empowerment and children's education.",
    images: [
      {
        url: "/pocso-awareness-program.jpg",
        width: 1200,
        height: 630,
        alt: "WEEDS impact and success stories",
      },
    ],
  },
}

export default function ImpactPage() {
  return (
    <>
      <ImpactPageClient />
      <Footer />
    </>
  )
}
