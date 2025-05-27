"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  category?: string
}

interface MarqueePartnersProps {
  partners: Partner[]
  title?: string
  description?: string
  logoHeight?: number
  logoWidth?: number
  className?: string
  speed?: number // pixels per second
  gap?: number // gap between logos in pixels
  direction?: "left" | "right"
}

export default function MarqueePartners({
  partners,
  title = "Our Corporate Partners",
  description,
  logoHeight = 150,
  logoWidth = 200,
  className,
  speed = 25,
  gap = 60,
  direction = "left",
}: MarqueePartnersProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Handle image loading errors
  const handleImageError = (partnerId: string) => {
    setImageErrors((prev) => ({ ...prev, [partnerId]: true }))
  }

  // Duplicate partners to ensure continuous scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners]

  // Use the provided logoWidth or calculate based on height if not provided
  const effectiveLogoWidth = logoWidth || logoHeight * 2

  // Adjust speed based on screen size
  const effectiveSpeed = isMobile ? speed * 0.7 : speed

  // Calculate animation duration based on content length
  const animationDuration = (duplicatedPartners.length * (effectiveLogoWidth + gap)) / effectiveSpeed

  return (
    <div className={cn("w-full py-12", className)}>
      {" "}
      {/* Increased padding from py-8 to py-12 */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          {" "}
          {/* Increased margin from mb-6 to mb-8 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-3">
              {" "}
              {/* Increased margin from mb-2 to mb-3 */}
              {title}
            </h2>
            {description && <p className="text-gray-600 max-w-2xl">{description}</p>}
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPaused(!isPaused)}
              className="border-gray-200 bg-white text-gray-700"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" // Added shadow-sm
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Corporate partners marquee"
        >
          <div className="flex py-8 whitespace-nowrap">
            {" "}
            {/* Increased padding from py-6 to py-8 */}
            <div
              className="inline-flex items-center"
              style={{
                animationName: direction === "left" ? "marquee-left" : "marquee-right",
                animationDuration: `${animationDuration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: isPaused ? "paused" : "running",
                gap: `${gap}px`,
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <Link
                  href={partner.website}
                  key={`${partner.id}-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105 px-2" // Added px-2 padding
                  aria-label={`Visit ${partner.name} website`}
                  style={{ width: `${effectiveLogoWidth}px`, height: `${logoHeight + 40}px` }} // Increased height padding from +20 to +40
                >
                  {imageErrors[`${partner.id}-${index}`] ? (
                    <div className="flex flex-col items-center justify-center text-center h-full w-full">
                      <p className="text-sm font-medium text-gray-600">{partner.name}</p>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={
                          partner.logo ||
                          `/placeholder.svg?height=${logoHeight || "/placeholder.svg"}&width=${effectiveLogoWidth}&query=${encodeURIComponent(partner.name)}`
                        }
                        alt={`${partner.name} logo`}
                        width={effectiveLogoWidth}
                        height={logoHeight}
                        className="object-contain max-h-full hover:opacity-90 transition-opacity"
                        style={{ maxHeight: `${logoHeight}px` }}
                        onError={() => handleImageError(`${partner.id}-${index}`)}
                        sizes={`${effectiveLogoWidth}px`}
                      />
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
  @keyframes marquee-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-${(effectiveLogoWidth + gap) * partners.length}px);
    }
  }
  
  @keyframes marquee-right {
    0% {
      transform: translateX(-${(effectiveLogoWidth + gap) * partners.length}px);
    }
    100% {
      transform: translateX(0);
    }
  }
`}</style>
    </div>
  )
}
