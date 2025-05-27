/**
 * Utility functions for image handling
 */

/**
 * Checks if an image URL is valid and accessible
 * @param url The image URL to check
 * @returns Promise that resolves to boolean indicating if image is valid
 */
export async function isImageValid(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

/**
 * Creates a fallback image URL with the partner name
 * @param name Partner name to include in the placeholder
 * @param height Height of the placeholder image
 * @param width Width of the placeholder image
 * @returns URL for a placeholder image
 */
export function createPlaceholderImage(name: string, height = 60, width = 200): string {
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(name)}`
}

/**
 * Optimizes image path to ensure it's valid
 * @param path Original image path
 * @param fallbackPath Fallback path if original is invalid
 * @returns The optimized image path
 */
export function optimizeImagePath(path: string, fallbackPath: string): string {
  // Ensure path starts with a slash if it's a relative path
  if (!path.startsWith("http") && !path.startsWith("/")) {
    path = `/${path}`
  }

  // Return the path or fallback
  return path || fallbackPath
}
