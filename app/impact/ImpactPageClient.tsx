"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/components/animations"
import { Quote, ChevronRight } from "lucide-react"
import NavigationBar from "@/components/navigation-bar"

export default function ImpactPageClient() {
  useScrollAnimation()

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="impact" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/pocso-awareness-program.jpg"
              alt="POCSO Awareness Programme at a school with students holding certificates and WEEDS staff facilitating the educational session, demonstrating our impact on child safety and education"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80 z-10"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Our Impact</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white max-w-2xl text-lg">
              Transforming lives and communities through education, empowerment, and sustainable development
            </p>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-8 text-center">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#3C3B6E]/5 p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2 text-[#3C3B6E]">1,400+</div>
                <div className="text-sm text-gray-600">Self-Help Groups Formed</div>
              </div>
              <div className="bg-[#B22234]/5 p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2 text-[#B22234]">25,000+</div>
                <div className="text-sm text-gray-600">Women Empowered</div>
              </div>
              <div className="bg-[#3C3B6E]/5 p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2 text-[#3C3B6E]">10,000+</div>
                <div className="text-sm text-gray-600">Children Supported</div>
              </div>
              <div className="bg-[#B22234]/5 p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2 text-[#B22234]">300+</div>
                <div className="text-sm text-gray-600">Health Camps Conducted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-[#B22234] mx-auto mb-8"></div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Real stories of transformation and empowerment from the women and children whose lives have been changed
              through our programs and your support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/success-stories/blessy-angelina.jpg"
                    alt="Ms. Blessy Angelina, a young woman who overcame challenges through WEEDS' housing and educational support programs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold font-heading">Ms. Blessy Angelina</h3>
                    <p className="text-sm opacity-90">Education Support Program</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#B22234] mb-4">
                    <Quote size={24} className="opacity-50" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Orphaned at three and raised by her grandmother in inadequate housing, I received support from
                    WEEDS and partners to reconstruct our home and fund my education. Now, we reside in a secure home,
                    and I continue my studies with ongoing scholarships."
                  </p>
                  <div className="flex justify-end">
                    <Button asChild variant="link" className="text-[#3C3B6E] p-0 h-auto font-medium">
                      <Link href="/impact/stories/blessy-angelina" className="flex items-center">
                        Read Full Story
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/success-stories/ammu.jpg"
                    alt="Mrs. Ammu, a beneficiary of WEEDS' housing development program who received decent housing for her family"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold font-heading">Mrs. Ammu</h3>
                    <p className="text-sm opacity-90">Housing Development Program</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#B22234] mb-4">
                    <Quote size={24} className="opacity-50" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Living in a hut with my family and facing financial hardships, I benefited from WEEDS' initiative,
                    which constructed 12 houses and improved health awareness in my community. This project provided
                    decent housing for 189 families in the Mangadu and Kattupakkam areas."
                  </p>
                  <div className="flex justify-end">
                    <Button asChild variant="link" className="text-[#3C3B6E] p-0 h-auto font-medium">
                      <Link href="/impact/stories/ammu" className="flex items-center">
                        Read Full Story
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/success-stories/annakilli.jpg"
                    alt="Mrs. Annakilli Arunachalam, who became a ward councilor through WEEDS' women's leadership program and now serves her community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold font-heading">Mrs. Annakilli Arunachalam</h3>
                    <p className="text-sm opacity-90">Women's Leadership Program</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#B22234] mb-4">
                    <Quote size={24} className="opacity-50" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "With a passion for societal change but limited education, I joined a Self-Help Group (SHG) through
                    WEEDS in 1997. Gaining leadership skills and knowledge about women's rights, I was elected as a ward
                    councilor in Mangadu. In my role, I have assisted the elderly in obtaining pensions, supported
                    disabled individuals in acquiring necessary documentation, and advocated for women facing violence,
                    fulfilling my lifelong ambition to serve my community."
                  </p>
                  <div className="flex justify-end">
                    <Button asChild variant="link" className="text-[#3C3B6E] p-0 h-auto font-medium">
                      <Link href="/impact/stories/annakilli-arunachalam" className="flex items-center">
                        Read Full Story
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/success-stories/anandalakshmi.jpg"
                    alt="Mrs. Anandalakshmi, who established her own manpower agency through WEEDS' entrepreneurship development program and now employs 200+ women"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold font-heading">Mrs. Anandalakshmi</h3>
                    <p className="text-sm opacity-90">Entrepreneurship Development Program</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#B22234] mb-4">
                    <Quote size={24} className="opacity-50" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Introduced to WEEDS in 2002, I joined an SHG and, with the organization's support, pursued
                    employment. Starting as a consultant earning ₹3,000 per month, I later established my own manpower
                    agency, AR Manpower Allied Services, in 2007. My agency now employs over 200 women across various
                    companies, and I also serve as a PoSH Act trainer for WEEDS."
                  </p>
                  <div className="flex justify-end">
                    <Button asChild variant="link" className="text-[#3C3B6E] p-0 h-auto font-medium">
                      <Link href="/impact/stories/anandalakshmi" className="flex items-center">
                        Read Full Story
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </div>

            <div className="text-center">
              <Button asChild className="bg-[#3C3B6E] hover:bg-[#3C3B6E]/90 text-white font-cta rounded-full px-8">
                <Link href="/impact/stories">View All Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Continue with remaining sections... */}
      </main>
    </div>
  )
}
