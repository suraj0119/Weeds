import type React from "react"
import { FileText } from "lucide-react"

interface PdfThumbnailProps {
  title: string
  color?: string
}

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ title, color = "#3C3B6E" }) => {
  // Extract year from title for display
  const yearMatch = title.match(/\d{4}/)
  const year = yearMatch ? yearMatch[0] : ""

  // Determine if it's an annual report or audit report
  const isAuditReport = title.toLowerCase().includes("audit")
  const reportType = isAuditReport ? "Audit Report" : "Annual Report"

  return (
    <div className="h-48 w-full bg-gray-100 flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundColor: color }}></div>

      <FileText className="h-16 w-16 mb-2" style={{ color }} />

      <div className="text-center px-4">
        <p className="font-bold text-lg" style={{ color }}>
          {reportType}
        </p>
        {year && <p className="text-gray-600">{year}</p>}
      </div>

      {year && <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">{year}</div>}
    </div>
  )
}

export default PdfThumbnail
