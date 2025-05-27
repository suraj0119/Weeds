"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Define the partner data structure
export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  description?: string
}

// Define the component props
interface PartnersShowcaseProps {
  partners: Partner[]
  layout?: "grid" | "carousel"
  title?: string
  description?: string
  className?: string
  logoHeight?: number
  backgroundColor?: string
}

export default function PartnersShowcase({
  partners,
  layout = "grid",
  title = "Our Partners",
  description,
  className,
  logoHeight = 120, // Increased from 80 to 120
  backgroundColor = "bg-white",
}: PartnersShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Handle carousel autoplay
  useEffect(() => {
    if (layout !== "carousel" || !autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % Math.ceil(partners.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [partners.length, layout, autoplay])

  // Handle carousel navigation
  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current === 0 ? Math.ceil(partners.length / 3) - 1 : current - 1))
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % Math.ceil(partners.length / 3))
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext()
    }

    if (touchStart - touchEnd < -150) {
      handlePrev()
    }
  }

  // Render grid layout
  if (layout === "grid") {
    return (
      <section className={cn("py-16", backgroundColor, className)}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4">{title}</h2>
            <div className="w-24 h-1 bg-[#B22234] mx-auto mb-6"></div>
            {description && <p className="text-gray-700 max-w-3xl mx-auto">{description}</p>}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <Link
                href={partner.website}
                key={partner.id}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-48 w-full" // Increased height from h-40 to h-48
                aria-label={`Visit ${partner.name} website`}
              >
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={240} // Increased from 200 to 240
                    height={logoHeight}
                    className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
                    style={{ maxHeight: `${logoHeight}px` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Render carousel layout
  return (
    <section className={cn("py-16 relative", backgroundColor, className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-4">{title}</h2>
          <div className="w-24 h-1 bg-[#B22234] mx-auto mb-6"></div>
          {description && <p className="text-gray-700 max-w-3xl mx-auto">{description}</p>}
        </div>

        <div
          className="relative overflow-hidden"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, groupIndex) => (
              <div key={groupIndex} className="min-w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                  {partners.slice(groupIndex * 3, groupIndex * 3 + 3).map((partner) => (
                    <Link
                      href={partner.website}
                      key={partner.id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-48 w-full" // Increased height from h-40 to h-48
                      aria-label={`Visit ${partner.name} website`}
                    >
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          width={240} // Increased from 200 to 240
                          height={logoHeight}
                          className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
                          style={{ maxHeight: `${logoHeight}px` }}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 rounded-full shadow-md z-10 hidden md:flex"
            onClick={handlePrev}
            aria-label="Previous partners"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 rounded-full shadow-md z-10 hidden md:flex"
            onClick={handleNext}
            aria-label="Next partners"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-[#B22234]" : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
