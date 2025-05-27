"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/components/animations"
import NavigationBar from "@/components/navigation-bar"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Footer from "@/components/footer"
import SocialMediaLinks from "@/components/social-media-links"

export default function ContactPage() {
  useScrollAnimation()

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="contact" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/modern-office-reception.png" alt="WEEDS contact" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80 z-10"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white max-w-2xl text-lg">
              Get in touch with us for inquiries, partnerships, or to learn more about our work
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you. Whether you have a question about our programs, want to volunteer, or are
                  interested in partnering with us, our team is here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-[#3C3B6E]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#3C3B6E] mb-1">Office Address</h3>
                      <p className="text-gray-600 mb-3">
                        <strong>Registered Address:</strong>
                        <br />
                        Old No.688, New No.1526, Sathiyavani Muthu street,
                        <br />
                        Gerugambakkam, Chennai - 600128,
                        <br />
                        Tamil Nadu, India
                      </p>
                      <p className="text-gray-600">
                        <strong>Field Office Address:</strong>
                        <br />
                        No.29, Sri Kamatchi Avenue,
                        <br />
                        Melmanagar, Mangadu, Chennai - 600122,
                        <br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#B22234]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Phone className="h-5 w-5 text-[#B22234]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#B22234] mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919003052052" className="block hover:text-[#B22234] transition-colors">
                          +91 9003052052
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Mail className="h-5 w-5 text-[#3C3B6E]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#3C3B6E] mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:weedsindia@gmail.com" className="block hover:text-[#3C3B6E] transition-colors">
                          weedsindia@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#B22234]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Clock className="h-5 w-5 text-[#B22234]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#B22234] mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday to Friday: 9:00 AM - 5:30 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold font-heading text-[#3C3B6E] mb-4">Connect With Us</h3>
                  <SocialMediaLinks variant="contact" />
                </div>
              </div>

              <div className="relative h-[400px] md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2598413354307!2d80.24902261482193!3d13.0308893907793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689bb60132bb%3A0x549cf6dd4b414d96!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1617704456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
