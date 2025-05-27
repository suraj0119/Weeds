import Image from "next/image"
import { COLORS } from "@/utils/constants"

interface ProgramStatProps {
  label: string
  value: string
  color?: string
  bgColor?: string
}

/**
 * Displays a program statistic with consistent styling
 */
export function ProgramStat({
  label,
  value,
  color = COLORS.text.primary,
  bgColor = COLORS.bg.primaryLight,
}: ProgramStatProps) {
  return (
    <div className={`${bgColor} px-4 py-2 rounded-lg inline-block`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`font-bold ${color}`}>{value}</p>
    </div>
  )
}

interface ProgramDetailProps {
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition?: "left" | "right"
  stats?: Array<{ label: string; value: string }>
  color?: string
  bgColor?: string
}

/**
 * Displays detailed information about a program with image and statistics
 */
export function ProgramDetail({
  title,
  description,
  image,
  imageAlt,
  imagePosition = "left",
  stats = [],
  color = COLORS.text.primary,
  bgColor = COLORS.bg.primaryLight,
}: ProgramDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image section */}
        <div className={`relative h-64 md:h-auto ${imagePosition === "right" ? "md:order-1" : ""}`}>
          <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* Content section */}
        <div className="p-6">
          <h3 className={`text-lg font-bold font-heading ${color} mb-2`}>{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>

          {stats.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <ProgramStat key={index} label={stat.label} value={stat.value} color={color} bgColor={bgColor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
