import { COLORS } from "@/utils/constants"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleColor?: string
  dividerColor?: string
  center?: boolean
  className?: string
}

/**
 * Reusable section header component with consistent styling
 */
export function SectionHeader({
  title,
  subtitle,
  titleColor = COLORS.text.primary,
  dividerColor = COLORS.bg.secondary,
  center = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <h2 className={`text-2xl md:text-3xl font-bold font-heading ${titleColor} mb-2`}>{title}</h2>
      {center && <div className={`w-24 h-1 ${dividerColor} mx-auto mb-6`}></div>}
      {subtitle && (
        <p className={`${center ? "text-center" : ""} text-gray-600 max-w-3xl ${center ? "mx-auto" : ""} mb-6`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
