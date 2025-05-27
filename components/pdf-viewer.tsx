"use client"

import { useState, useEffect, useRef } from "react"
import { X, ZoomIn, ZoomOut, RotateCw, Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { convertGoogleDriveUrl } from "@/utils/pdf-utils"

interface PdfViewerProps {
  pdfUrl: string
  onClose: () => void
}

const PdfViewer = ({ pdfUrl, onClose }: PdfViewerProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [processedUrl, setProcessedUrl] = useState(pdfUrl)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Process Google Drive URL if needed
    if (pdfUrl.includes("drive.google.com")) {
      try {
        const directUrl = convertGoogleDriveUrl(pdfUrl)
        setProcessedUrl(directUrl)
      } catch (error) {
        console.error("Error processing PDF URL:", error)
        setError("Failed to process the PDF URL. Please try again later.")
      }
    }

    // Handle iframe load events
    const handleIframeLoad = () => {
      setLoading(false)
    }

    const handleIframeError = () => {
      setLoading(false)
      setError("Failed to load the PDF. Please try again later.")
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad)
      iframe.addEventListener("error", handleIframeError)

      return () => {
        iframe.removeEventListener("load", handleIframeLoad)
        iframe.removeEventListener("error", handleIframeError)
      }
    }
  }, [pdfUrl])

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.25, 0.5))
  }

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360)
  }

  const handleDownload = () => {
    window.open(processedUrl, "_blank")
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium">PDF Viewer</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleRotate}>
              <RotateCw className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[calc(100%-4rem)] overflow-auto">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                <p className="mt-2 text-gray-600">Loading PDF...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="flex flex-col items-center text-center max-w-md p-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Failed to load PDF</h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          )}

          <iframe
            ref={iframeRef}
            src={processedUrl}
            className="w-full h-full"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  )
}

export default PdfViewer
