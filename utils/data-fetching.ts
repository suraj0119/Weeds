/**
 * Utility for efficient data fetching with caching
 */

// Simple in-memory cache
const cache: Record<string, { data: any; timestamp: number }> = {}

// Cache expiration time (5 minutes)
const CACHE_EXPIRATION = 5 * 60 * 1000

/**
 * Fetches data with caching
 * @param url URL to fetch
 * @param options Fetch options
 * @param cacheTime Cache expiration time in milliseconds (default: 5 minutes)
 * @returns Promise with the fetched data
 */
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit,
  cacheTime: number = CACHE_EXPIRATION,
): Promise<T> {
  const cacheKey = `${url}-${JSON.stringify(options)}`
  const now = Date.now()

  // Check if we have a valid cached response
  if (cache[cacheKey] && now - cache[cacheKey].timestamp < cacheTime) {
    return cache[cacheKey].data as T
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    // Cache the response
    cache[cacheKey] = {
      data,
      timestamp: now,
    }

    return data as T
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

/**
 * Prefetches data and stores it in cache
 * @param urls Array of URLs to prefetch
 * @param options Fetch options
 */
export async function prefetchData(urls: string[], options?: RequestInit): Promise<void> {
  await Promise.all(
    urls.map(async (url) => {
      try {
        await fetchWithCache(url, options)
      } catch (error) {
        console.error(`Failed to prefetch ${url}:`, error)
      }
    }),
  )
}

/**
 * Clears the cache
 * @param url Optional specific URL to clear from cache
 */
export function clearCache(url?: string): void {
  if (url) {
    // Clear specific URL entries
    Object.keys(cache).forEach((key) => {
      if (key.startsWith(url)) {
        delete cache[key]
      }
    })
  } else {
    // Clear entire cache
    Object.keys(cache).forEach((key) => {
      delete cache[key]
    })
  }
}
