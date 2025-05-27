"use client"

import { useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/components/animations"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"
import { initPerformanceMonitoring } from "@/utils/performance-monitoring"
import OptimizedImage from "@/components/optimized-image"
import { lazyLoad } from "@/utils/lazy-load"
import { partners } from "@/data/partners"

// Lazy load non-critical components
const MarqueePartners = lazyLoad(() => import("@/components/marquee-partners"))

// Move this outside the component to prevent recreation on each render
const heroMetrics = [
  { id: 1, value: "5", label: "Districts" },
  { id: 2, value: "5", label: "Programs" },
  { id: 3, value: "1,50,000+", label: "Women Beneficiaries" },
  { id: 4, value: "20,000+", label: "Children Beneficiaries" },
]

function HeroSection() {
  // Replace the metrics definition with the external constant
  const metrics = heroMetrics

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/women-empowerment-meeting.jpg"
          alt="Women's empowerment meeting showing diverse participants in colorful traditional attire engaged in community discussion and development activities"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B6E]/60 to-[#B22234]/60 z-10"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col justify-center h-full pb-32 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            A Movement for empowering women & children
          </h1>
          <p className="text-xl text-white mb-6">
            Championing gender equality, Education and sustainable development since 1989.
          </p>
          <Button
            asChild
            className="bg-[#B22234] hover:bg-[#B22234]/90 text-white font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/get-involved">Join Our Mission</Link>
          </Button>
        </div>
      </div>

      {/* Impact metrics */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col justify-end h-full pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="p-4 rounded-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: index % 2 === 0 ? "rgba(60, 59, 110, 0.3)" : "rgba(178, 34, 52, 0.3)",
              }}
            >
              <div className="text-3xl md:text-4xl font-bold font-heading mb-1 text-white">{metric.value}</div>
              <div className="text-sm md:text-base opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4">
          Women's Education and Economic Development Society
        </h2>
        <div className="w-24 h-1 bg-[#B22234] mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          Founded in 1989 as "Keezhmanagar Mahalir Munnetra Sangam" and rebranded in 1996, the Women's Education and
          Economic Development Society (WEEDS) is dedicated to empowering women and fostering community development in
          Tamil Nadu. We believe that true societal progress occurs when women have equal opportunities for financial
          and social independence.
        </p>
        <Button
          asChild
          className="bg-[#B22234] hover:bg-[#B22234]/90 text-white font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-sm border-l-4 border-[#3C3B6E] bg-[#3C3B6E]/5">
            <h3 className="text-xl font-bold font-heading mb-3 text-[#3C3B6E]">Our Vision</h3>
            <p className="text-gray-600">A Society that respects human dignity and has gender equality.</p>
          </div>
          <div className="p-6 rounded-lg shadow-sm border-l-4 border-[#B22234] bg-[#B22234]/5">
            <h3 className="text-xl font-bold font-heading mb-3 text-[#B22234]">Our Mission</h3>
            <p className="text-gray-600">
              WEEDS strives towards establishing just social order by building people's organizations, providing
              excellent education for children, empowering women and ensuring sustainable livelihood for the
              communities.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-sm border-l-4 border-[#3C3B6E] bg-[#3C3B6E]/5">
            <h3 className="text-xl font-bold font-heading mb-3 text-[#3C3B6E]">Our Values</h3>
            <p className="text-gray-600">
              Inclusion and Gender equality is very important for us. We encourage participation of every stakeholder.
              Transparency and Accountability is very key to all our actions. We strive to give sustainability (SDG's)
              in our programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoreProgramsSection() {
  // Secondary colors as subtle accents
  const secondaryColors = [
    { light: "#FF69B4", dark: "#B22234" }, // Vibrant Pink accent, Red primary
    { light: "#87CEEB", dark: "#3C3B6E" }, // Sky Blue accent, Blue primary
    { light: "#FFD700", dark: "#B22234" }, // Bright Yellow accent, Red primary
    { light: "#2D6A4F", dark: "#3C3B6E" }, // Deep Green accent, Blue primary
    { light: "#FF69B4", dark: "#B22234" }, // Vibrant Pink accent, Red primary
    { light: "#87CEEB", dark: "#3C3B6E" }, // Sky Blue accent, Blue primary
  ]

  const programs = [
    {
      id: 1,
      title: "Self-Help Group Bank Linkage Programme",
      image: "/women-development-shg.jpg",
      description:
        "Facilitating the social and economic empowerment of women by supporting Self-Help Groups (SHGs) in Kanchipuram, Tiruvallur, Chengalpettu, and Chennai.",
    },
    {
      id: 2,
      title: "Prevention of Sexual Harassment (PoSH) Training",
      image: "/posh-training-session.jpeg",
      description:
        "Providing training on the Prevention of Sexual Harassment of Women at Workplace Act, 2013, to ensure a secure and enabling environment for women employees.",
    },
    {
      id: 3,
      title: "Educating Students from Low-Income Families",
      image: "/children-development-education.jpg",
      description:
        "Supporting children from low-income families to access quality education, breaking the cycle of poverty through scholarships and educational resources.",
    },
    {
      id: 4,
      title: "Rural Students Computer Literacy",
      image: "/children-development-computer.jpg",
      description:
        "Enhancing the capacity of rural students by providing computer literacy and life skills training for a better future.",
    },
    {
      id: 5,
      title: "Integrating Rural Women for Economic Sustainability",
      image: "/women-development-rural.jpg",
      description:
        "Partnering with organizations like the IMF to reach rural-suburban women and form Self-Help Groups for economic sustainability.",
    },
    {
      id: 6,
      title: "Livelihood Support for Persons with Disabilities",
      image: "/disability-support-program.jpg",
      description:
        "Aiming to uplift the lives of Persons with Disabilities through skills training and livelihood support.",
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-8 text-center">
          Programmes Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <article
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.title} - WEEDS program showing participants engaged in ${program.title.toLowerCase()} activities`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: secondaryColors[index].light }}
                ></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold font-heading mb-2" style={{ color: secondaryColors[index].dark }}>
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <Button
                  asChild
                  className="w-full text-white font-cta text-sm rounded-full"
                  style={{ backgroundColor: secondaryColors[index].dark }}
                >
                  <Link href={`/our-work#program-${program.id}`}>Learn More</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SuccessStoriesSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-2 text-center">
          Stories of Change
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Real stories of transformation and empowerment from the women and children we've supported over the years.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <article className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                  <OptimizedImage
                    src="/success-stories/blessy-angelina.jpg"
                    alt="Ms. Blessy Angelina, a young woman who received housing and educational support from WEEDS, smiling confidently"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={85}
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold font-heading mb-3 text-[#3C3B6E]">Ms. Blessy Angelina</h3>
                <p className="text-gray-600 italic">
                  "After losing her mother at a young age and being abandoned by her father, Blessy was raised by her
                  grandmother in challenging conditions. WEEDS, in association with Habitat for Humanity India Trust and
                  the Tamil Nadu government housing project, helped reconstruct their home and provided educational
                  support. Today, Blessy lives in a decent house and continues her education without financial
                  constraints."
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-[#3C3B6E] hover:bg-[#3C3B6E]/90 text-white font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/impact">Read More Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function DonationSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#3C3B6E] to-[#B22234] rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Image side - Using direct Image component instead of OptimizedImage to fix loading issues */}
              <div className="relative h-64 md:h-auto">
                <div className="relative w-full h-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20220512-WA0023%20%281%29.jpg-1IUQNHALj6QMj65GCmC6iCBUUDxf4E.jpeg"
                    alt="Classroom of children in school uniforms giving thumbs up with WEEDS educators in a bright turquoise classroom showing educational success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>

              {/* Donation form side */}
              <div className="p-6 md:p-8 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-2">Support Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  Your contribution helps us empower women and children through education, skill development, and
                  community initiatives.
                </p>

                <div className="flex flex-col items-center">
                  <div className="mb-6 border-2 border-gray-200 p-2 rounded-lg">
                    <Image
                      src="/upi-qr-code.png"
                      alt="UPI QR Code for secure donation to WEEDS - scan with any UPI app to contribute"
                      width={200}
                      height={200}
                      className="mx-auto"
                      quality={90}
                    />
                  </div>

                  <p className="text-center text-gray-600 mb-4">Scan the QR code to donate via UPI</p>

                  <Button
                    asChild
                    className="w-full bg-[#B22234] hover:bg-[#B22234]/90 text-white font-cta rounded-full py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="/donate">Donate Now</Link>
                  </Button>

                  <div className="mt-4 text-xs text-center text-gray-500">
                    Secure payment processing. Tax benefits available under 80G.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-[#3C3B6E] mb-2">₹1,000</div>
              <p className="text-gray-600">Provides educational materials for one child</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-[#3C3B6E] mb-2">₹5,000</div>
              <p className="text-gray-600">Sponsors vocational training for one woman</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-[#3C3B6E] mb-2">₹10,000</div>
              <p className="text-gray-600">Helps fund a community health awareness camp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnersSection() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-2">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with these organizations to create meaningful impact in our communities.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="w-full py-12 bg-gray-50 flex justify-center items-center min-h-[200px]">
              <div className="animate-spin h-8 w-8 border-4 border-[#3C3B6E] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <MarqueePartners partners={partners} logoHeight={150} logoWidth={200} speed={25} gap={50} title="" />
        </Suspense>
      </div>
    </section>
  )
}

// Update the Home component to include the DonationSection
export default function Home() {
  useScrollAnimation()

  // Initialize performance monitoring in development
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      initPerformanceMonitoring()
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="home" />
      <main className="flex-1 pt-16">
        <HeroSection />
        <IntroSection />
        <ValuesSection />
        <CoreProgramsSection />
        <SuccessStoriesSection />
        <DonationSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
