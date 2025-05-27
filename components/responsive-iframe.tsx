"use client"

import { useState } from "react"

interface ResponsiveIframeProps {
  src: string
  title: string
  height?: number
  className?: string
}

export function ResponsiveIframe({ src, title, height = 1400, className = "" }: ResponsiveIframeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <div className={`w-full overflow-hidden rounded-lg relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="animate-pulse text-gray-400">Loading form...</div>
        </div>
      )}
      <iframe
        src={src}
        style={{
          border: 0,
          width: "100%",
          height: `${height}px`,
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
        title={title}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
