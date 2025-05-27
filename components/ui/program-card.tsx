"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { COLORS } from "@/utils/constants"

interface ProgramStat {
  label: string
  value: string
}

interface ProgramCardProps {
  title: string
  description: string
  image: string
  stats?: ProgramStat[]
  buttonText?: string
  buttonLink?: string
  buttonAction?: () => void
  color?: string
  bgColor?: string
  imageOverlay?: string
  className?: string
}

/**
 * Reusable card component for displaying program information
 */
export function ProgramCard({
  title,
  description,
  image,
  stats,
  buttonText = "Learn More",
  buttonLink,
  buttonAction,
  color = COLORS.text.primary,
  bgColor = COLORS.bg.primaryLight,
  imageOverlay = COLORS.overlay.blue,
  className = "",
}: ProgramCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className="h-48 relative">
        <Image src={image || "/placeholder.svg"} alt={`${title} - WEEDS program`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C3B6E]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold font-heading text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-6">{description}</p>

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className={`${bgColor} px-4 py-2 rounded-lg`}>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className={`font-bold ${color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {(buttonLink || buttonAction) && (
          <div className="flex justify-end">
            <Button
              onClick={buttonAction}
              asChild={!!buttonLink}
              variant="outline"
              className={`border-${color.replace("text-", "")} ${color} hover:${color.replace("text-", "bg-")} hover:text-white`}
            >
              {buttonLink ? (
                <Link href={buttonLink}>
                  {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <>
                  {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
