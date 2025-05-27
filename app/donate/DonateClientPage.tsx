"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/components/animations"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import OptimizedImage from "@/components/optimized-image"
import { COLORS, GRADIENTS } from "@/utils/theme-constants"
import Script from "next/script"
import { useState } from "react"

export default function DonateClientPage() {
  useScrollAnimation()
  const [paymentLoading, setPaymentLoading] = useState(false)

  const handlePaymentSuccess = () => {
    // Handle successful payment
    console.log("Payment successful")
  }

  const handlePaymentError = () => {
    // Handle payment error
    console.log("Payment failed")
    setPaymentLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="donate" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230707_173445%20%281%29%20%281%29.jpg-843oDI3dwnpWhFWKyUpdCEmNHljZ8U.jpeg"
              alt="Children supported by WEEDS showing the positive impact of donations on education and community development"
              fill
              priority
              sizes="100vw"
            />
            <div className={`absolute inset-0 ${GRADIENTS.overlay} z-10`}></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Donate</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white max-w-2xl text-lg">
              Your contribution helps us empower women and children through education and sustainable development
            </p>
          </div>
        </section>

        {/* Support Our Mission Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Side - Support Our Mission (50%) */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col justify-center">
                  <h2 className={`text-2xl md:text-3xl font-bold font-heading ${COLORS.text.primary} mb-6`}>
                    Support Our Mission
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Your generous donation will help us continue our mission of empowering women and children through
                    education, skill development, and community initiatives. Every contribution makes a difference.
                  </p>

                  <div className="flex flex-col items-center justify-center mb-8">
                    <div className="mb-6 border-2 border-gray-200 p-4 rounded-lg">
                      <OptimizedImage
                        src="/upi-qr-code.png"
                        alt="UPI QR Code for secure donation to WEEDS - scan with any UPI app like Google Pay, PhonePe, or Paytm"
                        width={250}
                        height={250}
                        className="mx-auto"
                        fallbackSrc="/placeholder.svg?height=250&width=250&query=UPI QR Code"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Scan to Donate via UPI</h3>
                    <p className="text-center text-gray-600 mb-4">
                      Use any UPI app like Google Pay, PhonePe, Paytm, or your banking app to scan and pay securely
                    </p>
                  </div>

                  <div className="text-center text-gray-600 space-y-2">
                    <p className="font-medium">All donations are eligible for tax exemption under Section 80G</p>
                    <p>
                      For corporate donations or CSR partnerships, please{" "}
                      <Link href="/contact" className={`${COLORS.text.accent} hover:underline font-medium`}>
                        contact us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Razorpay Form (50%) */}
              <div className="w-full lg:w-1/2 pl-0 lg:pl-8">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col justify-center items-center">
                  <h2 className={`text-2xl md:text-3xl font-bold font-heading ${COLORS.text.primary} mb-6`}>
                    Online Donation
                  </h2>
                  <p className="text-gray-700 mb-8 text-center">
                    Make a secure online donation using your preferred payment method through our trusted payment
                    gateway.
                  </p>

                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-md">
                      {paymentLoading && (
                        <div className="text-center mb-4">
                          <div className="animate-spin h-8 w-8 border-4 border-[#3C3B6E] border-t-transparent rounded-full mx-auto"></div>
                          <p className="text-gray-600 mt-2">Processing payment...</p>
                        </div>
                      )}
                      <Script
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_QAYaVj9aU9Xqwl"
                        strategy="lazyOnload"
                        onLoad={() => {
                          console.log("Razorpay script loaded successfully")
                        }}
                        onError={(error) => {
                          console.error("Failed to load Razorpay script:", error)
                          handlePaymentError()
                        }}
                      />
                      <noscript>
                        <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-yellow-800">
                            JavaScript is required for online payments. Please enable JavaScript or use the UPI QR code
                            option.
                          </p>
                        </div>
                      </noscript>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Donations Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-8 text-center">
              Impact of Your Donation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#3C3B6E] mb-2">₹1,000</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Educational Support</h3>
                <p className="text-gray-600">
                  Provides educational materials, books, and supplies for one child for an entire academic year
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#3C3B6E] mb-2">₹5,000</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Skill Development</h3>
                <p className="text-gray-600">
                  Sponsors complete vocational training program for one woman, including materials and certification
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#3C3B6E] mb-2">₹10,000</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Health</h3>
                <p className="text-gray-600">
                  Helps fund a comprehensive community health awareness camp serving 200+ beneficiaries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`w-full py-16 ${GRADIENTS.primary} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Other Ways to Support</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Beyond donations, there are many ways you can support our mission. Consider volunteering your time,
              skills, or expertise to make a difference in our communities.
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
                className="bg-transparent border border-white hover:bg-white/10 text-white font-cta rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
