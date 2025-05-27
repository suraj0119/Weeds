export const generatePageMetadata = (
  title: string,
  description: string,
  keywords: string[] = [],
  image?: string,
  url?: string,
) => {
  const baseUrl = "https://weeds.org.in"
  const defaultImage = "/women-empowerment-meeting.jpg"

  return {
    title,
    description,
    keywords: ["WEEDS", "women empowerment", "education NGO", "Tamil Nadu NGO", "community development", ...keywords],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: url || baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || defaultImage],
    },
    alternates: {
      canonical: url || baseUrl,
    },
  }
}

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WEEDS - Women's Education and Economic Development Society",
    description:
      "WEEDS empowers women and children through education, skill development, and community initiatives since 1989.",
    url: "https://weeds.org.in",
    logo: "https://weeds.org.in/logo-weeds.png",
    foundingDate: "1989",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.29, Sri Kamatchi Avenue, Melmanagar",
      addressLocality: "Mangadu",
      addressRegion: "Tamil Nadu",
      postalCode: "600122",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9791118831",
      contactType: "customer service",
      email: "weedsindia@gmail.com",
    },
    sameAs: [
      "https://www.facebook.com/weedsindia",
      "https://www.instagram.com/weedsindia",
      "https://www.linkedin.com/company/weedsindia",
    ],
  }
}
