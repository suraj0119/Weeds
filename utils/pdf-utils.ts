/**
 * Utility functions for handling PDF files
 */

/**
 * Converts a Google Drive view URL to a direct download URL
 * @param url Google Drive URL in the format https://drive.google.com/file/d/{fileId}/view
 * @returns Direct download URL
 */
export function convertGoogleDriveUrl(url: string): string {
  try {
    // Extract the file ID from the Google Drive URL
    const match = url.match(/\/d\/(.+?)\/view/)
    if (match && match[1]) {
      const fileId = match[1]
      return `https://drive.google.com/uc?export=download&id=${fileId}`
    }
    return url
  } catch (error) {
    console.error("Error converting Google Drive URL:", error)
    return url
  }
}

/**
 * Checks if a file exists by making a HEAD request
 * @param url URL of the file to check
 * @returns Promise<boolean> indicating if the file exists
 */
export async function checkFileExists(url: string): Promise<boolean> {
  try {
    // For Google Drive links, we can't reliably use HEAD requests
    if (url.includes("drive.google.com")) {
      return true // Assume Google Drive links exist
    }

    const response = await fetch(url, { method: "HEAD" })
    return response.ok
  } catch (error) {
    console.error(`Error checking if file exists at ${url}:`, error)
    return false
  }
}

/**
 * Gets the file size of a PDF
 * @param url URL of the PDF file
 * @returns Promise<number> size in bytes, or null if error
 */
export async function getPdfFileSize(url: string): Promise<number | null> {
  try {
    // For Google Drive links, we can't reliably get file size with HEAD requests
    if (url.includes("drive.google.com")) {
      return null // Can't determine size for Google Drive links
    }

    const response = await fetch(url, { method: "HEAD" })
    if (!response.ok) return null

    const contentLength = response.headers.get("content-length")
    return contentLength ? Number.parseInt(contentLength, 10) : null
  } catch (error) {
    console.error(`Error getting file size for ${url}:`, error)
    return null
  }
}

/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes File size in bytes
 * @returns Formatted string (e.g., "1.5 MB")
 */
export function formatFileSize(bytes: number | null): string {
  if (bytes === null) return "Unknown size"

  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
}

/**
 * Opens a Google Drive PDF in a new tab with the Google Drive PDF viewer
 * @param url Google Drive URL
 */
export function openGoogleDrivePdf(url: string): void {
  // Extract the file ID from the Google Drive URL
  const match = url.match(/\/d\/(.+?)\/view/)
  if (match && match[1]) {
    const fileId = match[1]
    const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`
    window.open(viewerUrl, "_blank")
  } else {
    window.open(url, "_blank")
  }
}
