import type { ReactNode } from "react"
import { COLORS } from "@/utils/constants"

interface TabSectionHeaderProps {
  title: string
  icon: ReactNode
  color?: string
}

/**
 * Header component for tab sections with icon and title
 */
export function TabSectionHeader({ title, icon, color = COLORS.text.primary }: TabSectionHeaderProps) {
  return (
    <div className="flex items-center mb-8">
      <div
        className={`w-12 h-12 ${color === COLORS.text.primary ? "bg-[#3C3B6E]/10" : "bg-[#B22234]/10"} rounded-full flex items-center justify-center mr-4`}
      >
        {icon}
      </div>
      <h2 className={`text-2xl md:text-3xl font-bold font-heading ${color}`}>{title}</h2>
    </div>
  )
}
