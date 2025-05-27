import type React from "react"
import { Button } from "@/components/ui/button"

interface GoogleFormLinkProps {
  formUrl: string
  buttonText: string
  className?: string
  icon?: React.ReactNode
}

export default function GoogleFormLink({ formUrl, buttonText, className = "", icon }: GoogleFormLinkProps) {
  return (
    <Button
      asChild
      className={`bg-[#3C3B6E] hover:bg-[#3C3B6E]/90 text-white font-cta rounded-full px-8 py-3 ${className}`}
    >
      <a href={formUrl} target="_blank" rel="noopener noreferrer">
        {icon && <span className="mr-2">{icon}</span>}
        {buttonText}
      </a>
    </Button>
  )
}
