import { NextSeo } from "next-seo"

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Weeds India",
    url: "https://www.weedsindia.com/",
    logo: "https://www.weedsindia.com/images/weeds-india-logo.png",
    description:
      "We are a leading manufacturer of shade nets, crop covers, mulch film, and other agricultural products in India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Old No.688, New No.1526, Sathiyavani Muthu street, Gerugambakkam",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600128",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9003052052",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    sameAs: [
      "https://www.facebook.com/weedsindia",
      "https://www.instagram.com/weedsindia",
      "https://www.youtube.com/@WeedsindiaChennai",
    ],
    email: "weedsindia@gmail.com",
  }

  return (
    <NextSeo
      title=""
      description=""
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
      additionalMetaTags={[
        {
          name: "application-name",
          content: "Weeds India",
        },
        {
          name: "description",
          content:
            "We are a leading manufacturer of shade nets, crop covers, mulch film, and other agricultural products in India.",
        },
        {
          name: "keywords",
          content: "shade nets, crop covers, mulch film, agricultural products, weeds india, agriculture, farming",
        },
      ]}
      openGraph={{
        url: "https://www.weedsindia.com/",
        title: "Weeds India",
        description:
          "We are a leading manufacturer of shade nets, crop covers, mulch film, and other agricultural products in India.",
        images: [
          {
            url: "https://www.weedsindia.com/images/weeds-india-logo.png",
            width: 800,
            height: 600,
            alt: "Weeds India Logo",
          },
        ],
        site_name: "Weeds India",
      }}
      twitter={{
        handle: "@WeedsIndia",
        site: "@WeedsIndia",
        cardType: "summary_large_image",
      }}
      jsonLd={organizationSchema}
    />
  )
}

export default StructuredData
