"use client"

import Image from "next/image"
import { useState } from "react"
import { IMAGE_QUALITY } from "@/utils/constants"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  fallbackSrc?: string
  onLoad?: () => void
  onError?: () => void
}

/**
 * Enhanced Image component with loading state, error handling, and fallback
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = IMAGE_QUALITY.medium,
  objectFit = "cover",
  fallbackSrc = "/abstract-colorful-swirls.png",
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(src)

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  // Handle image load error
  const handleImageError = () => {
    console.warn(`Image failed to load: ${src}, using fallback`)
    setImgSrc(fallbackSrc)
    onError?.()
  }

  // For external URLs, use direct Image component to avoid CORS issues
  const isExternalUrl = src.startsWith("http")

  return (
    <div
      className={`relative ${isLoading ? "bg-gray-200 animate-pulse" : ""}`}
      style={fill ? { width: "100%", height: "100%" } : {}}
    >
      {isExternalUrl ? (
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
          sizes={sizes}
          quality={quality}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ objectFit }}
          loading={priority ? "eager" : "lazy"}
          unoptimized={true} // For external URLs
        />
      ) : (
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
          sizes={sizes}
          quality={quality}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ objectFit }}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  )
}
