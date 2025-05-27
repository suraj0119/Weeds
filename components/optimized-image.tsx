"use client"

import Image from "next/image"
import { useState } from "react"

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

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 80,
  objectFit = "cover",
  fallbackSrc = "/abstract-colorful-swirls.png",
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  // Handle image load error
  const handleImageError = () => {
    setImgSrc(fallbackSrc)
    onError?.()
  }

  return (
    <div
      className={`relative ${isLoading ? "bg-gray-200 animate-pulse" : ""}`}
      style={fill ? { width: "100%", height: "100%" } : {}}
    >
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
    </div>
  )
}
