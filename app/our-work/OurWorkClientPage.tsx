"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useScrollAnimation } from "@/components/animations"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import { ArrowRight, Users, BookOpen, Heart, Home } from "lucide-react"

export default function OurWorkClientPage() {
  useScrollAnimation()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState("overview")

  // Handle URL query parameter for tab selection
  useEffect(() => {
    if (tabParam && ["overview", "women", "children", "health", "community"].includes(tabParam)) {
      setActiveTab(tabParam)

      // Scroll to the tab content after a short delay to ensure the DOM is updated
      setTimeout(() => {
        const tabContent = document.getElementById(`tab-${tabParam}`)
        if (tabContent) {
          tabContent.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [tabParam])

  // Function to update URL without page reload when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Update URL without causing a page reload
    const url = new URL(window.location.href)
    url.searchParams.set("tab", value)
    window.history.pushState({}, "", url.toString())
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="our-work" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20201209-WA0012.jpg-xI4bZ0QKbv7edzgSoljEKR4v6xYy4m.jpeg"
              alt="WEEDS women's empowerment program participants gathered for a community development workshop, showcasing diverse women engaged in learning and skill development activities"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80 z-10"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Our Work</h1>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <p className="text-white max-w-2xl text-lg">
                Empowering communities through sustainable development initiatives since 1989
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto gap-2 mb-8">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-[#3C3B6E] data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger value="women" className="data-[state=active]:bg-[#3C3B6E] data-[state=active]:text-white">
                  <span className="hidden md:inline">Women's Development</span>
                  <span className="md:hidden">Women</span>
                </TabsTrigger>
                <TabsTrigger
                  value="children"
                  className="data-[state=active]:bg-[#B22234] data-[state=active]:text-white"
                >
                  <span className="hidden md:inline">Children's Education</span>
                  <span className="md:hidden">Children</span>
                </TabsTrigger>
                <TabsTrigger value="health" className="data-[state=active]:bg-[#3C3B6E] data-[state=active]:text-white">
                  <span className="hidden md:inline">Health Development</span>
                  <span className="md:hidden">Health</span>
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className="data-[state=active]:bg-[#B22234] data-[state=active]:text-white"
                >
                  <span className="hidden md:inline">Community Development</span>
                  <span className="md:hidden">Community</span>
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent id="tab-overview" value="overview" className="animate-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src="/women-development-main.jpg"
                        alt="Women's Development programs showing women participating in Self-Help Groups and skill development activities"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3C3B6E]/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold font-heading text-white">Women's Development</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">
                        Empowering women through economic independence, skill development, and rights awareness. Our
                        programs include Self-Help Groups, POSH training, tailoring skills, and entrepreneurship
                        development.
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Since 1989</p>
                          <p className="font-bold text-[#3C3B6E]">16,705+ women beneficiaries</p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("women")}
                          variant="outline"
                          className="border-[#3C3B6E] text-[#3C3B6E] hover:bg-[#3C3B6E] hover:text-white"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src="/computer-literacy.jpg"
                        alt="Children's Education programs featuring computer literacy training and educational support for underprivileged children"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#B22234]/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold font-heading text-white">Children's Education</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">
                        Providing quality education, digital literacy, and life skills to underprivileged children. Our
                        programs include scholarships, computer literacy, emotional wellbeing, and after-school support.
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Ongoing Programs</p>
                          <p className="font-bold text-[#B22234]">10,000+ children supported</p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("children")}
                          variant="outline"
                          className="border-[#B22234] text-[#B22234] hover:bg-[#B22234] hover:text-white"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Health%20Camp%20in%20the%20Community.jpg-jeRicZXubxQh8v082nPI4D2BKpGqCA.jpeg"
                        alt="Health Development initiatives including health camps, cancer awareness programs, and community healthcare services"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3C3B6E]/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold font-heading text-white">Health Development</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">
                        Providing accessible healthcare services to underprivileged communities. Our initiatives include
                        primary health camps, eye camps, cancer awareness, and menstrual hygiene programs.
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Since 2000</p>
                          <p className="font-bold text-[#3C3B6E]">25,000+ beneficiaries</p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("health")}
                          variant="outline"
                          className="border-[#3C3B6E] text-[#3C3B6E] hover:bg-[#3C3B6E] hover:text-white"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src="/community-development-emergency.jpg"
                        alt="Community Development programs including emergency response, environmental awareness, and disability support initiatives"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#B22234]/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold font-heading text-white">Community Development</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">
                        Building resilient communities through sustainable development. Our work includes emergency
                        response, healthcare center upgrades, environmental awareness, and disability support.
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Ongoing Programs</p>
                          <p className="font-bold text-[#B22234]">20,000+ lives impacted</p>
                        </div>
                        <Button
                          onClick={() => handleTabChange("community")}
                          variant="outline"
                          className="border-[#B22234] text-[#B22234] hover:bg-[#B22234] hover:text-white"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg mb-12">
                  <h2 className="text-2xl font-bold font-heading text-[#3C3B6E] mb-6">Our Approach</h2>
                  <p className="text-gray-700 mb-6">
                    At WEEDS, we believe in a holistic approach to community development that addresses the
                    interconnected challenges faced by underprivileged communities. Our programs are designed to create
                    sustainable change by empowering individuals, particularly women and children, to become agents of
                    transformation in their communities.
                  </p>
                  <p className="text-gray-700 mb-6">
                    We work closely with local communities, government agencies, and other stakeholders to identify
                    needs, design effective interventions, and implement programs that create lasting impact. Our
                    approach is participatory, inclusive, and focused on building local capacity for sustainable
                    development.
                  </p>
                </div>
              </TabsContent>

              {/* Women's Development Tab */}
              <TabsContent id="tab-women" value="women" className="animate-in">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-[#3C3B6E]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E]">Women's Development</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="relative">
                    <Image
                      src="/women-development-main.jpg"
                      alt="Women's Self Help Group Meeting showing participants engaged in financial planning and skill development discussions"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md object-cover w-full h-[300px]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-4 text-[#3C3B6E]">Empowering Women Since 1989</h3>
                    <p className="text-gray-600 mb-4">
                      WEEDS has been at the forefront of women's empowerment in Tamil Nadu for over three decades. Our
                      programs focus on economic independence, skill development, and rights awareness to help women
                      become self-reliant and confident contributors to their families and communities.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#3C3B6E]/5 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold text-[#3C3B6E]">1,285</p>
                        <p className="text-sm text-gray-600">Active women SHGs</p>
                      </div>
                      <div className="bg-[#3C3B6E]/5 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold text-[#3C3B6E]">16,705</p>
                        <p className="text-sm text-gray-600">Women beneficiaries</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 mb-8">
                  {/* Self Help Group Formation */}
                  <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-6">
                        <h3 className="text-lg font-bold font-heading text-[#3C3B6E] mb-2">
                          Self Help Group Formation and Bank-Linkage Program
                        </h3>
                        <p className="text-gray-700 mb-4">
                          We facilitate the social and economic empowerment of women by supporting Self-Help Groups
                          (SHGs) across Kanchipuram, Tiruvallur, Chengalpettu, and Chennai. These groups are linked to
                          banks for financial assistance, enabling women to build savings, access loans, and improve
                          their economic stability.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div className="bg-[#3C3B6E]/5 px-4 py-2 rounded-lg">
                            <p className="text-sm text-gray-500">Active women SHG's</p>
                            <p className="font-bold text-[#3C3B6E]">1,285</p>
                          </div>
                          <div className="bg-[#3C3B6E]/5 px-4 py-2 rounded-lg">
                            <p className="text-sm text-gray-500">Beneficiaries</p>
                            <p className="font-bold text-[#3C3B6E]">16,705 women</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src="/women-programs/self-help-group.jpeg"
                          alt="Women in a self-help group meeting with their hands joined together in solidarity, demonstrating unity and collective empowerment"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </article>

                  {/* Continue with remaining sections... */}
                </div>
              </TabsContent>

              {/* Children's Education Tab */}
              <TabsContent id="tab-children" value="children" className="animate-in">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#B22234]">
                    Children's Education & Well-being
                  </h2>
                </div>
                {/* Continue with children's content... */}
              </TabsContent>

              {/* Health Development Tab */}
              <TabsContent id="tab-health" value="health" className="animate-in">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-[#3C3B6E]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E]">Health Development</h2>
                </div>
                {/* Continue with health content... */}
              </TabsContent>

              {/* Community Development Tab */}
              <TabsContent id="tab-community" value="community" className="animate-in">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mr-4">
                    <Home className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#B22234]">Community Development</h2>
                </div>
                {/* Continue with community content... */}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
