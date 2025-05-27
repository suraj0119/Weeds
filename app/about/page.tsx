import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - Our Story, Mission & Team",
  description:
    "Learn about WEEDS' journey since 1989, our mission to empower women and children, our governing board members, advisory team, and awards received for our community development work.",
  keywords: [
    "WEEDS history",
    "women empowerment organization",
    "Tamil Nadu NGO history",
    "governing board",
    "advisory members",
    "awards recognition",
    "community development",
    "social impact",
  ],
  openGraph: {
    title: "About WEEDS - Our Story, Mission & Team",
    description:
      "Discover WEEDS' 35-year journey of empowering women and children in Tamil Nadu. Meet our team and learn about our mission.",
    images: [
      {
        url: "/women-empowerment-meeting.jpg",
        width: 1200,
        height: 630,
        alt: "WEEDS team and beneficiaries",
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
