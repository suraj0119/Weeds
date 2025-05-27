import type React from "react"
import "./globals.css"
import { Poppins, Lora, Baloo_2 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AppProvider } from "@/context/app-context"
import type { Metadata, Viewport } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://weeds.org.in"),
  title: {
    default: "WEEDS - Women's Education and Economic Development Society | Empowering Women & Children Since 1989",
    template: "%s | WEEDS - Women's Education and Economic Development Society",
  },
  description:
    "WEEDS empowers women and children through education, skill development, and community initiatives since 1989. Join our mission for gender equality and sustainable development in Tamil Nadu, India.",
  keywords: [
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
    "women entrepreneurship",
    "rural development",
  ],
  authors: [{ name: "WEEDS - Women's Education and Economic Development Society" }],
  creator: "WEEDS",
  publisher: "WEEDS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://weeds.org.in",
    siteName: "WEEDS - Women's Education and Economic Development Society",
    title: "WEEDS - Empowering Women & Children Since 1989",
    description:
      "Join WEEDS in empowering women and children through education, skill development, and community initiatives. Creating sustainable change in Tamil Nadu since 1989.",
    images: [
      {
        url: "/women-empowerment-meeting.jpg",
        width: 1200,
        height: 630,
        alt: "WEEDS women empowerment meeting with diverse participants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEEDS - Empowering Women & Children Since 1989",
    description:
      "Join WEEDS in empowering women and children through education, skill development, and community initiatives.",
    images: ["/women-empowerment-meeting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://weeds.org.in",
  },
  icons: {
    icon: [
      { url: "/logo-weeds.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-weeds.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo-weeds.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#3C3B6E",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-weeds.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://weeds.org.in" />
        <meta name="theme-color" content="#3C3B6E" />
        <meta name="msapplication-TileColor" content="#3C3B6E" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${poppins.variable} ${lora.variable} ${baloo.variable} font-sans`}>
        <AppProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
