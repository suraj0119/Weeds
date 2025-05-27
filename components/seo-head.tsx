"use client"

import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = "WEEDS - Women's Education and Economic Development Society",
  description = "WEEDS empowers women and children through education, skill development, and community initiatives since 1989. Join our mission for gender equality and sustainable development in Tamil Nadu, India.",
  keywords = [],
  image = "/women-empowerment-meeting.jpg",
  url = "https://weeds.org.in",
  type = "website",
}: SEOHeadProps) {
  const defaultKeywords = [
    "women empowerment",
    "education NGO",
    "Tamil Nadu NGO",
    "women's rights",
    "children education",
    "skill development",
    "self help groups",
    "community development",
    "gender equality",
    "sustainable development",
    "WEEDS",
    "Chennai NGO",
  ]

  const allKeywords = [...defaultKeywords, ...keywords]

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="WEEDS" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="WEEDS - Women's Education and Economic Development Society" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WEEDS - Women's Education and Economic Development Society",
            description: description,
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
          }),
        }}
      />
    </Head>
  )
}
