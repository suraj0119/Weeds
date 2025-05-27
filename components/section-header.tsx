interface SectionHeaderProps {
  title: string
  description?: string
  titleColor?: string
  dividerColor?: string
  center?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  description,
  titleColor = "text-[#3C3B6E]",
  dividerColor = "bg-[#B22234]",
  center = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <h2 className={`text-2xl md:text-3xl font-bold font-heading ${titleColor} mb-2`}>{title}</h2>
      {center && <div className={`w-24 h-1 ${dividerColor} mx-auto mb-6`}></div>}
      {description && (
        <p className={`${center ? "text-center" : ""} text-gray-600 max-w-3xl ${center ? "mx-auto" : ""} mb-6`}>
          {description}
        </p>
      )}
    </div>
  )
}
