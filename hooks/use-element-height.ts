"use client"

import { useState, useEffect, useRef } from "react"

export function useElementHeight<T extends HTMLElement = HTMLDivElement>() {
  const elementRef = useRef<T>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const updateHeight = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.offsetHeight)
      }
    }

    // Initial height calculation
    updateHeight()

    // Update height on window resize
    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(elementRef.current)

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current)
      }
    }
  }, [])

  return { elementRef, height }
}
