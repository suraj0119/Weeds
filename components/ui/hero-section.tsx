import type { ReactNode } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { GRADIENTS } from "@/utils/constants"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
  backgroundAlt: string
  height?: string
  children?: ReactNode
  overlay?: string
}

/**
 * Reusable hero section component with background image and overlay
 */
export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  height = "h-[300px] md:h-[400px]",
  children,
  overlay = GRADIENTS.primaryOverlay,
}: HeroSectionProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <OptimizedImage src={backgroundImage} alt={backgroundAlt} fill priority sizes="100vw" />
        <div className={`absolute inset-0 ${overlay} z-10`}></div>
      </div>
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">{title}</h1>
          <div className="w-24 h-1 bg-white mb-6"></div>
          {subtitle && <p className="text-white max-w-2xl text-lg">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
