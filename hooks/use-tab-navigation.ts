"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

/**
 * Custom hook for managing tab navigation with URL synchronization
 * @param defaultTab - The default tab to show if none is specified in URL
 * @param validTabs - Array of valid tab values
 * @returns Object containing active tab and handler function
 */
export function useTabNavigation(defaultTab: string, validTabs: string[]) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState(defaultTab)

  // Handle URL query parameter for tab selection
  useEffect(() => {
    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam)

      // Scroll to the tab content after a short delay to ensure the DOM is updated
      setTimeout(() => {
        const tabContent = document.getElementById(`tab-${tabParam}`)
        if (tabContent) {
          tabContent.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [tabParam, validTabs])

  // Function to update URL without page reload when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Update URL without causing a page reload
    const url = new URL(window.location.href)
    url.searchParams.set("tab", value)
    window.history.pushState({}, "", url.toString())
  }

  return { activeTab, handleTabChange }
}
