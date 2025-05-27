/**
 * Utility functions for optimizing JavaScript execution
 */

/**
 * Debounces a function to limit how often it can be called
 * @param func The function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>): void => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttles a function to limit how often it can be called
 * @param func The function to throttle
 * @param limit Limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false
  let lastFunc: NodeJS.Timeout
  let lastRan: number

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args)
      lastRan = Date.now()
      inThrottle = true

      setTimeout(() => {
        inThrottle = false
      }, limit)
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func(...args)
            lastRan = Date.now()
          }
        },
        limit - (Date.now() - lastRan),
      )
    }
  }
}

/**
 * Runs a function in the next idle period
 * @param callback Function to run
 */
export function runWhenIdle(callback: () => void): void {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(() => callback())
  } else {
    setTimeout(callback, 1)
  }
}

/**
 * Breaks long-running tasks into smaller chunks to avoid blocking the main thread
 * @param items Array of items to process
 * @param processItem Function to process each item
 * @param chunkSize Number of items to process in each chunk
 * @param delay Delay between chunks in milliseconds
 */
export function processInChunks<T>(
  items: T[],
  processItem: (item: T) => void,
  chunkSize = 5,
  delay = 0,
): Promise<void> {
  return new Promise((resolve) => {
    if (items.length === 0) {
      resolve()
      return
    }

    let index = 0

    function processChunk() {
      const chunk = items.slice(index, index + chunkSize)
      index += chunkSize

      for (const item of chunk) {
        processItem(item)
      }

      if (index < items.length) {
        setTimeout(processChunk, delay)
      } else {
        resolve()
      }
    }

    processChunk()
  })
}
