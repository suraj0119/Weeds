"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/components/animations"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import { Award, Calendar, Users, BookOpen } from "lucide-react"

export default function AboutPageClient() {
  useScrollAnimation()

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="about" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20241028121448.jpg-2Z2NpEfpkiRc5TR9oQV2eA3mU9Mxx2.jpeg"
              alt="Women participating in WEEDS empowerment program, engaged in community development activities and skill training sessions"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80 z-10"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">About Us</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white max-w-2xl text-lg">
              Empowering women and children through education and sustainable development since 1989
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">Our Story</h2>
              <div className="w-24 h-1 bg-[#B22234] mx-auto mb-8"></div>

              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="md:w-1/2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20241028121422.jpg-B3uB8nMJGSbhDTiUJjjCKu50R0Mnj8.jpeg"
                    alt="WEEDS training session for women showing participants learning new skills in a supportive community environment"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-md object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Established in 1989, the Women's Education and Economic Development Society (WEEDS) began as the
                    "Keezhmaanagar Mahalir Munnetra Sangham" in Keezhmaanagar-Gerugambakkam. Our mission was clear: to
                    empower marginalized women and foster community development through education and economic
                    opportunities.
                  </p>
                  <p className="text-gray-700">
                    Over three decades, we've grown from a small community initiative to an organization that has
                    touched thousands of lives across Tamil Nadu, focusing on women's empowerment, children's education,
                    health development, and community welfare.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-[#3C3B6E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3C3B6E] mb-2">Since 1989</h3>
                  <p className="text-sm text-gray-600">Years of dedicated service</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#B22234] mb-2">1,400+ SHGs</h3>
                  <p className="text-sm text-gray-600">Self-help groups formed</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-[#3C3B6E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3C3B6E] mb-2">300+</h3>
                  <p className="text-sm text-gray-600">Educational scholarships</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#B22234]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-[#B22234]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#B22234] mb-2">Multiple</h3>
                  <p className="text-sm text-gray-600">Awards & recognitions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Members Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">
              Advisory Members
            </h2>
            <div className="w-24 h-1 bg-[#B22234] mx-auto mb-8"></div>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
              Our advisory members bring valuable expertise and guidance to help WEEDS achieve its mission and expand
              its impact in the communities we serve.
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gayathiri-Shanmugam-LsT6KoBOhCVoEiZakNPXFfnm7uHKtO.png"
                      alt="Ms. Gayathiri Shanmugam - Advisory Member and Chief Program Officer at Haqdarshak, bringing expertise in ed-tech and IT sectors"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Ms. Gayathiri Shanmugam</h3>
                    <p className="text-[#B22234] font-medium mb-4">Chief Program Officer, Haqdarshak</p>
                    <p className="text-gray-600 text-sm">
                      With over two decades of experience in the ed-tech and IT sectors, Ms. Gayathiri brings
                      exceptional expertise to our advisory board. She has led numerous quality control audits and made
                      significant contributions to training and development initiatives throughout her career. Currently
                      serving as the Chief Program Officer at Haqdarshak, she continues to drive innovation in program
                      management and implementation.
                    </p>
                  </div>
                </article>

                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sridhar-Ganesh-YnrV11fzI1zeFMBq36uD63RMOQXEKB.png"
                      alt="Mr. Sridhar Ganesh - Advisory Member and HR Management Expert with 40 years of experience in human resource management"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mr. Sridhar Ganesh</h3>
                    <p className="text-[#B22234] font-medium mb-4">HR Management Expert</p>
                    <p className="text-gray-600 text-sm">
                      Mr. Sridhar Ganesh brings 40 years of extensive experience in human resource management, covering
                      both operational and strategic aspects. His distinguished career includes serving as Director – HR
                      and Lead Director for the Diversified Businesses of the Murugappa Group, and Director of Learning
                      & Development at Cadbury. His wealth of knowledge in organizational development and leadership
                      continues to guide our strategic initiatives.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Board Members Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">
              Governing Board Members
            </h2>
            <div className="w-24 h-1 bg-[#B22234] mx-auto mb-8"></div>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
              Our governing board members provide strategic guidance and leadership to ensure WEEDS continues to make a
              meaningful impact in the communities we serve.
            </p>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mrs. Sathya - President */}
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mrs.%20Sathya-lSdKlEtOtxhfofmofXOsHiohpoGp7B.png"
                      alt="Mrs. Sathya - President of WEEDS, leading the organization with vision and dedication to empower women and children"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mrs. Sathya</h3>
                    <p className="text-[#B22234] font-medium mb-4">President</p>
                    <p className="text-gray-600 text-sm">
                      Leading our organization with vision and dedication, ensuring we fulfill our mission of empowering
                      women and children through sustainable development initiatives.
                    </p>
                  </div>
                </article>

                {/* Mrs. Anandalakshmi - Vice President */}
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mrs.%20Anandalakshmi-PCaLGpOywkXvdKfGxpkdPbTHvCxjd5.png"
                      alt="Mrs. Anandalakshmi - Vice President of WEEDS, supporting strategic initiatives for women and children empowerment"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mrs. Anandalakshmi</h3>
                    <p className="text-[#B22234] font-medium mb-4">Vice President</p>
                    <p className="text-gray-600 text-sm">
                      Supporting our President and leading strategic initiatives to ensure we meet our mission of
                      empowering women and children.
                    </p>
                  </div>
                </article>

                {/* Mrs. Helan Joyes - Secretary */}
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mrs.%20Helan%20Joyes-O7AwQRXK8xllOwVNx3z15pZk84QABK.png"
                      alt="Mrs. Helan Joyes - Secretary of WEEDS, coordinating administrative functions and community partnerships"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mrs. Helan Joyes</h3>
                    <p className="text-[#B22234] font-medium mb-4">Secretary</p>
                    <p className="text-gray-600 text-sm">
                      Coordinating our administrative functions and ensuring effective communication between the board,
                      staff, and our community partners.
                    </p>
                  </div>
                </article>

                {/* Mrs. Sinthiya - Treasurer */}
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mrs.%20Sinthiya-SbcTDTlGzFgkVYVZh42RQcQPoPTFcq.png"
                      alt="Mrs. Sinthiya - Treasurer of WEEDS, managing financial resources with integrity and transparency"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mrs. Sinthiya</h3>
                    <p className="text-[#B22234] font-medium mb-4">Treasurer</p>
                    <p className="text-gray-600 text-sm">
                      Managing our financial resources with integrity and transparency to support our programs and
                      ensure long-term sustainability.
                    </p>
                  </div>
                </article>

                {/* Mrs. Pushpa - Joint Secretary */}
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mrs.%20Pushpa.jpg-EyrpjdHp26dUy47gL4CCNEBbjN7zni.jpeg"
                      alt="Mrs. Pushpa - Joint Secretary of WEEDS, assisting in administrative coordination and program implementation"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mrs. Pushpa</h3>
                    <p className="text-[#B22234] font-medium mb-4">Joint Secretary</p>
                    <p className="text-gray-600 text-sm">
                      Assisting in administrative coordination and documentation to ensure smooth operations and
                      effective program implementation.
                    </p>
                  </div>
                </article>

                {/* Mrs. Arulmozhi - Board Member */}
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-96 bg-gray-50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mrs.%20Arulmozhi-sZSuyMD7Tnhke6iY7Sj7I486voxKu3.png"
                      alt="Mrs. Arulmozhi - Board Member of WEEDS, contributing valuable insights for maximum community impact"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3C3B6E] mb-1">Mrs. Arulmozhi</h3>
                    <p className="text-[#B22234] font-medium mb-4">Board Member</p>
                    <p className="text-gray-600 text-sm">
                      Contributing valuable insights and expertise to guide our programs and initiatives for maximum
                      community impact.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Recognitions & Awards Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4 text-center">
              Recognitions & Awards
            </h2>
            <div className="w-24 h-1 bg-[#B22234] mx-auto mb-6"></div>

            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Over the years, WEEDS has been honored with several awards and recognitions that validate our commitment
              to empowering marginalized communities and promoting sustainable development.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <article className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-[#3C3B6E]/10 text-[#3C3B6E] font-bold text-xl p-4 rounded-lg md:w-24 text-center flex-shrink-0">
                      2014
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#3C3B6E] mb-2">
                        Service to Human Rights Education among Grassroots Communities Award
                      </h3>
                      <p className="text-gray-700">
                        Presented by the Human Rights Education Movement of India, acknowledging our efforts in
                        promoting human rights education at the grassroots level.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-[#B22234]/10 text-[#B22234] font-bold text-xl p-4 rounded-lg md:w-24 text-center flex-shrink-0">
                      2015
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#B22234] mb-2">
                        Mary Clubwala Jadhav Award for Best Humanitarian Service
                      </h3>
                      <p className="text-gray-700">
                        Conferred by the Madras School of Social Work, recognizing our outstanding humanitarian services
                        and contributions to community development.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-[#3C3B6E]/10 text-[#3C3B6E] font-bold text-xl p-4 rounded-lg md:w-24 text-center flex-shrink-0">
                      2019
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#3C3B6E] mb-2">
                        Exemplary Performance in Self-Help Group Bank Linkage Programme
                      </h3>
                      <p className="text-gray-700">
                        Awarded by ICICI Bank, highlighting our effective implementation and management of the Self-Help
                        Group bank linkage program, which has empowered numerous women financially.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="bg-[#B22234]/10 text-[#B22234] font-bold text-xl p-4 rounded-lg md:w-24 text-center flex-shrink-0">
                      2022
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#B22234] mb-2">
                        Best Practices Award in Compliance, Finance, and Human Resource Management
                      </h3>
                      <p className="text-gray-700">
                        Presented by Dhwani Foundation, this award acknowledges our adherence to best practices in
                        organizational compliance, financial management, and human resource development, ensuring
                        transparency and efficiency in our operations.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-r from-[#3C3B6E] to-[#B22234] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Join Us in Making a Difference</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Whether through volunteering, donations, or partnerships, your support helps us continue our mission of
              empowering women and children across communities.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-[#3C3B6E] hover:bg-gray-100 font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                asChild
                className="bg-[#B22234] border border-white hover:bg-[#B22234]/90 text-white font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
