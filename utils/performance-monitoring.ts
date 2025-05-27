/**
 * Utility for monitoring and reporting performance metrics
 */

// Interface for performance metrics
interface PerformanceMetrics {
  timeToFirstByte: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  timeToInteractive: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  navigationStart: number
  loadEventEnd: number
}

/**
 * Collects performance metrics from the browser
 * @returns Object containing performance metrics
 */
export function collectPerformanceMetrics(): Partial<PerformanceMetrics> {
  if (typeof window === "undefined" || !window.performance) {
    return {}
  }

  const metrics: Partial<PerformanceMetrics> = {}
  const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

  if (navigation) {
    metrics.timeToFirstByte = navigation.responseStart - navigation.requestStart
    metrics.navigationStart = navigation.startTime
    metrics.loadEventEnd = navigation.loadEventEnd
  }

  // First Contentful Paint
  const paintEntries = performance.getEntriesByType("paint")
  const firstPaint = paintEntries.find((entry) => entry.name === "first-paint")
  const firstContentfulPaint = paintEntries.find((entry) => entry.name === "first-contentful-paint")

  if (firstContentfulPaint) {
    metrics.firstContentfulPaint = firstContentfulPaint.startTime
  }

  return metrics
}

/**
 * Logs performance metrics to console
 */
export function logPerformanceMetrics(): void {
  if (typeof window === "undefined") return

  // Wait for the page to fully load
  window.addEventListener("load", () => {
    // Wait a bit to ensure all metrics are available
    setTimeout(() => {
      const metrics = collectPerformanceMetrics()
      console.log("Performance Metrics:", metrics)

      // Calculate page load time
      if (metrics.navigationStart !== undefined && metrics.loadEventEnd !== undefined) {
        const pageLoadTime = metrics.loadEventEnd - metrics.navigationStart
        console.log(`Page Load Time: ${pageLoadTime.toFixed(2)}ms`)
      }

      // Log TTFB
      if (metrics.timeToFirstByte !== undefined) {
        console.log(`Time to First Byte: ${metrics.timeToFirstByte.toFixed(2)}ms`)
      }

      // Log FCP
      if (metrics.firstContentfulPaint !== undefined) {
        console.log(`First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`)
      }
    }, 1000)
  })
}

/**
 * Initializes performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === "undefined" || process.env.NODE_ENV === "production") return

  logPerformanceMetrics()

  // Monitor long tasks
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn(`Long Task detected: ${entry.duration.toFixed(2)}ms`, entry)
        }
      })

      observer.observe({ entryTypes: ["longtask"] })
    } catch (e) {
      console.error("PerformanceObserver for longtask not supported", e)
    }
  }
}
