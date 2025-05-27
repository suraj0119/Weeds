"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/components/animations"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import { useState } from "react"
import { Heart, Building, CheckCircle2, ChevronRight } from "lucide-react"
import CorporatePartners from "@/components/corporate-partners"
import { partners } from "@/data/partners"
import { VolunteerOpportunities } from "@/components/volunteer-opportunities"
import { ResponsiveIframe } from "@/components/responsive-iframe"

export default function GetInvolvedPage() {
  useScrollAnimation()
  const [activeTab, setActiveTab] = useState("volunteer")

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="get-involved" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230204_174242%20%282%29.jpg-vfvS7ioiRs2gdJBn2u3MuDHmlzKYNZ.jpeg"
              alt="WEEDS program participants - children and young adults gathered for a community development initiative"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80 z-10"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Get Involved</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white max-w-2xl text-lg">
              Join us in our mission to empower women and children through education and sustainable development
            </p>
          </div>
        </section>

        {/* Ways to Get Involved Tabs */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => setActiveTab("volunteer")}
                className={`rounded-full px-6 ${
                  activeTab === "volunteer" ? "bg-[#3C3B6E] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Heart className="h-4 w-4 mr-2" />
                Volunteer
              </Button>
              <Button
                onClick={() => setActiveTab("corporate")}
                className={`rounded-full px-6 ${
                  activeTab === "corporate" ? "bg-[#3C3B6E] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Building className="h-4 w-4 mr-2" />
                Corporate
              </Button>
            </div>

            {/* Volunteer With Us */}
            {activeTab === "volunteer" && (
              <div className="animate-in fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="h-[1500px] overflow-y-auto pr-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4">
                      Volunteer With Us
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Volunteering with WEEDS is a rewarding experience that allows you to make a direct impact on the
                      lives of women and children in our communities. We welcome volunteers from all backgrounds who
                      share our passion for social change and community development.
                    </p>

                    <h3 className="text-xl font-bold font-heading text-[#B22234] mb-3">Volunteer Opportunities</h3>
                    <VolunteerOpportunities />

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-6">
                      <h4 className="font-bold text-[#3C3B6E] flex items-center mb-2">
                        <CheckCircle2 className="h-5 w-5 mr-2" />
                        Benefits of Volunteering
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-[#B22234] mr-1 mt-0.5" />
                          <span>Make a meaningful impact in your community</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-[#B22234] mr-1 mt-0.5" />
                          <span>Develop new skills and gain valuable experience</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-[#B22234] mr-1 mt-0.5" />
                          <span>Connect with like-minded individuals</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-[#B22234] mr-1 mt-0.5" />
                          <span>Receive a certificate of volunteering</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-[1500px]">
                    <h3 className="text-xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">
                      Volunteer Application
                    </h3>
                    <ResponsiveIframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeeyHM8YbTe-0mCvixHGSFRAPunws9EA56cPjnChyB7DlWaig/viewform?embedded=true"
                      title="Volunteer Registration Form"
                      height={1400}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-heading text-[#3C3B6E] mb-4">Volunteer FAQs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#B22234] mb-2">What is the minimum time commitment?</h4>
                      <p className="text-sm text-gray-600">
                        We ask for a minimum commitment of 4 hours per week for at least 3 months, but we're flexible
                        and can work with your schedule.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#B22234] mb-2">Do I need specific qualifications?</h4>
                      <p className="text-sm text-gray-600">
                        Most volunteer roles don't require specific qualifications, just enthusiasm and commitment. For
                        specialized roles, relevant experience may be beneficial.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#B22234] mb-2">Is there an orientation process?</h4>
                      <p className="text-sm text-gray-600">
                        Yes, all volunteers receive an orientation to familiarize them with our work, policies, and
                        procedures before starting.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#B22234] mb-2">Can I volunteer remotely?</h4>
                      <p className="text-sm text-gray-600">
                        Some roles offer remote opportunities, particularly in areas like content creation, social
                        media, and administrative support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Corporate Partnerships */}
            {activeTab === "corporate" && (
              <div className="animate-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="h-[1500px] overflow-y-auto pr-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4">
                      Corporate Partnerships
                    </h2>
                    <p className="text-gray-600 mb-6">
                      WEEDS collaborates with corporations to create meaningful social impact through strategic
                      partnerships. By partnering with us, your company can fulfill its Corporate Social Responsibility
                      (CSR) goals while making a tangible difference in the lives of women and children in our
                      communities.
                    </p>

                    <h3 className="text-xl font-bold font-heading text-[#B22234] mb-3">Partnership Opportunities</h3>
                    <div className="space-y-4 mb-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#3C3B6E]">
                        <h4 className="font-bold text-[#3C3B6E] mb-2">CSR Project Implementation</h4>
                        <p className="text-sm text-gray-600">
                          Partner with us to implement CSR projects aligned with your company's values and our mission.
                          We can develop customized programs in education, skill development, health, or community
                          development across Tamil Nadu.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#B22234]">
                        <h4 className="font-bold text-[#B22234] mb-2">Employee Volunteering</h4>
                        <p className="text-sm text-gray-600">
                          Engage your employees in meaningful volunteer opportunities with our programs. We can organize
                          one-time events or ongoing volunteering initiatives tailored to your team's interests and
                          skills, such as teaching, mentoring, or health camp support.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#3C3B6E]">
                        <h4 className="font-bold text-[#3C3B6E] mb-2">Cause-Related Marketing</h4>
                        <p className="text-sm text-gray-600">
                          Align your brand with social impact through cause-related marketing campaigns. A portion of
                          your product sales can be donated to support our programs, creating a win-win for your
                          business and our beneficiaries.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#B22234]">
                        <h4 className="font-bold text-[#B22234] mb-2">Sponsorship & Event Support</h4>
                        <p className="text-sm text-gray-600">
                          Sponsor our events, programs, or initiatives to increase your brand visibility while
                          supporting a good cause. We offer various sponsorship packages with different levels of
                          recognition and benefits.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#3C3B6E] mb-2">Benefits of Partnership</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#B22234] mr-2 mt-0.5" />
                          <span>Fulfill your CSR objectives and demonstrate social responsibility</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#B22234] mr-2 mt-0.5" />
                          <span>
                            Enhance employee engagement and satisfaction through meaningful volunteer opportunities
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#B22234] mr-2 mt-0.5" />
                          <span>Improve brand reputation and customer loyalty</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#B22234] mr-2 mt-0.5" />
                          <span>Create positive social impact in communities where you operate</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-[#B22234] mr-2 mt-0.5" />
                          <span>Receive regular impact reports and documentation for your CSR reporting</span>
                        </li>
                      </ul>
                    </div>

                    {/* Additional content to match volunteer section height */}
                    <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#3C3B6E]">
                      <h4 className="font-bold text-[#3C3B6E] mb-2">Our Corporate Impact</h4>
                      <p className="text-sm text-gray-600">
                        Through our corporate partnerships, we have been able to reach over 5,000 women and children in
                        the past year alone. Our partners have helped us expand our programs to new communities and
                        enhance the quality of our services.
                      </p>
                    </div>

                    <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#B22234]">
                      <h4 className="font-bold text-[#B22234] mb-2">Partnership Process</h4>
                      <p className="text-sm text-gray-600">
                        Our partnership process begins with an initial consultation to understand your company's CSR
                        goals and values. We then develop a customized partnership proposal that aligns with your
                        objectives and our mission. Once the partnership is established, we provide regular updates and
                        impact reports to keep you informed of the progress and outcomes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-[1500px]">
                    <h3 className="text-xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">
                      Partnership Inquiry
                    </h3>
                    <ResponsiveIframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeeyHM8YbTe-0mCvixHGSFRAPunws9EA56cPjnChyB7DlWaig/viewform?embedded=true"
                      title="Partnership Inquiry Form"
                      height={1400}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Our Corporate Partners Section - Now with Marquee-style Carousel */}
                <CorporatePartners
                  partners={partners}
                  title="Our Corporate Partners"
                  description="We are proud to collaborate with these organizations that share our vision for community development and social impact."
                  logoHeight={70}
                  className="bg-gray-50 rounded-lg p-6"
                  scrollSpeed={40}
                />
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-r from-[#3C3B6E] to-[#B22234] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Make a Difference Today</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Whether you volunteer, intern, partner with us, or join our network, your support helps us continue our
              mission of empowering women and children across communities.
            </p>
            <Button
              asChild
              className="bg-white text-[#3C3B6E] hover:bg-gray-100 font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
