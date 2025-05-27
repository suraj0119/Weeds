"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  category?: string
}

interface CorporatePartnersProps {
  partners: Partner[]
  title?: string
  description?: string
  logoHeight?: number
  className?: string
  scrollSpeed?: number
}

export default function CorporatePartners({
  partners,
  title = "Our Corporate Partners",
  description,
  logoHeight = 100, // Increased from 60 to 100
  className,
  scrollSpeed = 30, // Lower is faster (seconds to complete one full cycle)
}: CorporatePartnersProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Handle responsive container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    // Initial width calculation
    updateWidth()

    // Update width on resize
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Handle image loading errors
  const handleImageError = (partnerId: string) => {
    setImageErrors((prev) => ({ ...prev, [partnerId]: true }))
  }

  // Create a duplicate set of partners to ensure continuous scrolling
  const allPartners = [...partners, ...partners]

  return (
    <div className={cn("w-full py-12", className)}>
      {" "}
      {/* Increased padding from py-8 to py-12 */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          {" "}
          {/* Increased margin from mb-6 to mb-8 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#3C3B6E] mb-3">{title}</h2>{" "}
            {/* Increased margin from mb-2 to mb-3 */}
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
          aria-label="Corporate partners carousel"
        >
          <div
            ref={marqueeRef}
            className="flex items-center transition-all py-8" // Increased padding from no padding to py-8
            style={{
              animationName: "scroll",
              animationDuration: `${scrollSpeed}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {allPartners.map((partner, index) => (
              <Link
                href={partner.website}
                key={`${partner.id}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 my-4 flex items-center justify-center h-32 transition-transform hover:scale-105" // Increased height from h-24 to h-32 and margin from mx-6 to mx-8
                aria-label={`Visit ${partner.name} website`}
              >
                <div
                  className="relative h-full flex items-center justify-center"
                  style={{ width: `${logoHeight * 2}px` }}
                >
                  {imageErrors[`${partner.id}-${index}`] ? (
                    <div className="flex flex-col items-center justify-center text-center h-full w-full">
                      <p className="text-sm font-medium text-gray-600">{partner.name}</p>
                    </div>
                  ) : (
                    <Image
                      src={
                        partner.logo ||
                        `/placeholder.svg?height=${logoHeight || "/placeholder.svg"}&width=${logoHeight * 2}&query=${encodeURIComponent(partner.name)}`
                      }
                      alt={`${partner.name} logo`}
                      width={logoHeight * 2}
                      height={logoHeight}
                      className="object-contain max-h-full hover:opacity-90 transition-opacity" // Added hover effect
                      style={{ maxHeight: `${logoHeight}px` }}
                      onError={() => handleImageError(`${partner.id}-${index}`)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${containerWidth / 2}px);
          }
        }
      `}</style>
    </div>
  )
}
