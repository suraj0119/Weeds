import type { Metadata } from "next"
import DonateClientPage from "./DonateClientPage"

export const metadata: Metadata = {
  title: "Donate - Support Women & Children Empowerment",
  description:
    "Support WEEDS' mission to empower women and children through secure online donations. Your contribution helps fund education, skill development, and community initiatives. Tax benefits under 80G available.",
  keywords: [
    "donate to NGO",
    "support women empowerment",
    "children education donation",
    "Tamil Nadu NGO donation",
    "tax deductible donation",
    "80G tax benefit",
    "online donation",
    "UPI donation",
    "secure payment",
    "community development funding",
  ],
  openGraph: {
    title: "Donate to WEEDS - Support Women & Children",
    description:
      "Make a difference in the lives of women and children. Your donation supports education, skill development, and community empowerment programs.",
    images: [
      {
        url: "/classroom-children-thumbs-up.jpg",
        width: 1200,
        height: 630,
        alt: "Children supported by WEEDS donations",
      },
    ],
  },
}

export default function DonatePage() {
  return <DonateClientPage />
}
