"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { memo } from "react"
import OptimizedImage from "./optimized-image"
import SocialMediaLinks from "./social-media-links"

// Memoized footer link component
const FooterLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-400 hover:text-white transition-colors">
    {children}
  </Link>
))
FooterLink.displayName = "FooterLink"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <OptimizedImage
                src="/logo-new.png"
                alt="WEEDS Logo"
                width={200}
                height={80}
                className="object-contain w-[180px] h-auto bg-white p-2 rounded-md"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Women's Education, Economic Development Society (WEEDS) is a non-profit organization dedicated to
              empowering women and children through education, economic independence, and sustainable development.
            </p>
            <div className="flex space-x-4">
              <SocialMediaLinks variant="footer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/our-work">Our Work</FooterLink>
              </li>
              <li>
                <FooterLink href="/impact">Impact</FooterLink>
              </li>
              <li>
                <FooterLink href="/resources">Resources</FooterLink>
              </li>
              <li>
                <FooterLink href="/get-involved">Get Involved</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/our-work?tab=women">Women's Development</FooterLink>
              </li>
              <li>
                <FooterLink href="/our-work?tab=children">Children's Education</FooterLink>
              </li>
              <li>
                <FooterLink href="/our-work?tab=health">Health Development</FooterLink>
              </li>
              <li>
                <FooterLink href="/our-work?tab=community">Community Development</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p className="mb-2">
                    <strong>Registered Address:</strong>
                    <br />
                    Old No.688, New No.1526, Sathiyavani Muthu street,
                    <br />
                    Gerugambakkam, Chennai - 600128,
                    <br />
                    Tamil Nadu, India
                  </p>
                  <p>
                    <strong>Field Office Address:</strong>
                    <br />
                    No.29, Sri Kamatchi Avenue,
                    <br />
                    Melmanagar, Mangadu, Chennai - 600122,
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:+919003052052" className="block hover:text-white transition-colors">
                    +91 9003052052
                  </a>
                </div>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="mailto:weedsindia@gmail.com" className="block hover:text-white transition-colors">
                    weedsindia@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} WEEDS. All rights reserved.</p>
            <div className="flex space-x-4">
              <FooterLink href="/privacy-policy">
                <span className="text-sm">Privacy Policy</span>
              </FooterLink>
              <FooterLink href="/terms-conditions">
                <span className="text-sm">Terms & Conditions</span>
              </FooterLink>
              <FooterLink href="/legal-compliance">
                <span className="text-sm">Legal & Compliance</span>
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
