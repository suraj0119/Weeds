"use client"

import { useEffect, useRef, useCallback } from "react"
import { throttle } from "@/utils/performance-utils"

export function useScrollAnimation() {
  // Use a ref to store the observer
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Memoize the intersection handler with useCallback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible")

        // Unobserve the element after it's animated to save resources
        if (observerRef.current) {
          observerRef.current.unobserve(entry.target)
        }
      }
    })
  }, [])

  useEffect(() => {
    // Create the observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1,
      })
    }

    // Throttled function to handle resize events
    const handleResize = throttle(() => {
      // Reset animations on resize for elements that might come into view
      document.querySelectorAll(".animate-on-scroll:not(.animate-visible)").forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el)
        }
      })
    }, 200)

    // Observe all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [handleIntersection])
}
