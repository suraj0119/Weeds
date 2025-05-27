"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

type SocialMediaProps = {
  className?: string
  iconSize?: number
  variant?: "default" | "footer" | "contact"
}

export default function SocialMediaLinks({ className = "", iconSize = 20, variant = "default" }: SocialMediaProps) {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/weedsngo",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/weedsindia/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/IndiaWeeds",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/womens-education-and-economic-development-society-weeds-37bb2838/",
      icon: Linkedin,
    },
  ]

  const getContainerClasses = () => {
    switch (variant) {
      case "footer":
        return "text-gray-400 hover:text-white transition-colors"
      case "contact":
        return "w-10 h-10 bg-[#3C3B6E]/10 rounded-full flex items-center justify-center hover:bg-[#3C3B6E] hover:text-white transition-colors"
      default:
        return "text-gray-600 hover:text-[#3C3B6E] transition-colors"
    }
  }

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={getContainerClasses()}
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  )
}
