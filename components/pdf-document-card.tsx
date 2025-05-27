"use client"

import { type FC, useState, useEffect } from "react"
import { FileText, Download, ExternalLink, Eye, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PdfThumbnail from "@/utils/pdf-thumbnail"
import PdfViewer from "@/components/pdf-viewer"
import { COLORS } from "@/utils/theme-constants"
import {
  checkFileExists,
  formatFileSize,
  getPdfFileSize,
  convertGoogleDriveUrl,
  openGoogleDrivePdf,
} from "@/utils/pdf-utils"

interface PdfDocumentCardProps {
  title: string
  description: string
  thumbnailSrc?: string
  pdfUrl: string
  iconColor?: string
  iconBgColor?: string
  isExternalLink?: boolean
  documentType?: string
}

const PdfDocumentCard: FC<PdfDocumentCardProps> = ({
  title,
  description,
  thumbnailSrc,
  pdfUrl,
  iconColor = COLORS.text.primary,
  iconBgColor = COLORS.overlay.blueBg,
  isExternalLink = false,
  documentType = "Document",
}) => {
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [fileExists, setFileExists] = useState(true)
  const [fileSize, setFileSize] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [processedUrl, setProcessedUrl] = useState(pdfUrl)
  const color = iconColor.includes("3C3B6E") ? "#3C3B6E" : "#B22234"

  useEffect(() => {
    const verifyFile = async () => {
      try {
        setIsLoading(true)

        // Process Google Drive URL if needed
        if (isExternalLink && pdfUrl.includes("drive.google.com")) {
          const directUrl = convertGoogleDriveUrl(pdfUrl)
          setProcessedUrl(directUrl)
        }

        const exists = await checkFileExists(pdfUrl)
        setFileExists(exists)

        if (exists && !isExternalLink) {
          const size = await getPdfFileSize(pdfUrl)
          setFileSize(formatFileSize(size))
        }
      } catch (error) {
        console.error("Error verifying PDF file:", error)
        setFileExists(false)
      } finally {
        setIsLoading(false)
      }
    }

    verifyFile()
  }, [pdfUrl, isExternalLink])

  const handleViewDocument = () => {
    if (fileExists) {
      if (isExternalLink && pdfUrl.includes("drive.google.com")) {
        openGoogleDrivePdf(pdfUrl)
      } else {
        setShowPdfViewer(true)
      }
    }
  }

  const handleOpenInNewTab = () => {
    if (isExternalLink && pdfUrl.includes("drive.google.com")) {
      openGoogleDrivePdf(pdfUrl)
    } else {
      window.open(processedUrl, "_blank")
    }
  }

  const handleDownload = () => {
    if (fileExists) {
      // For Google Drive links, we need to use the export=download parameter
      if (isExternalLink && pdfUrl.includes("drive.google.com")) {
        window.open(processedUrl, "_blank")
      } else {
        // For local files, we can use the download attribute
        const link = document.createElement("a")
        link.href = processedUrl
        link.download = title.replace(/\s+/g, "-").toLowerCase() + ".pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  // Extract year from title for badge display
  const yearMatch = title.match(/\d{4}/)
  const year = yearMatch ? yearMatch[0] : ""

  return (
    <>
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
          !fileExists ? "opacity-75" : ""
        }`}
      >
        <div className="cursor-pointer" onClick={handleViewDocument}>
          {isLoading ? (
            <div className="h-48 w-full bg-gray-200 animate-pulse flex items-center justify-center">
              <span className="text-gray-400">Loading...</span>
            </div>
          ) : thumbnailSrc ? (
            <div className="relative h-48 w-full">
              <img src={thumbnailSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
              {!fileExists && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-sm font-medium">File unavailable</span>
                  </div>
                </div>
              )}
              {year && (
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">{year}</div>
              )}
            </div>
          ) : (
            <div className="relative">
              <PdfThumbnail title={title} color={color} />
              {!fileExists && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-sm font-medium">File unavailable</span>
                  </div>
                </div>
              )}
              {year && (
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">{year}</div>
              )}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mr-3`}>
              <FileText className={`h-6 w-6 ${iconColor}`} />
            </div>
            <div>
              <h3 className={`text-lg font-bold font-heading ${iconColor}`}>{title}</h3>
              {documentType && <span className="text-xs text-gray-500">{documentType}</span>}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          {fileSize && fileExists && !isExternalLink && (
            <p className="text-xs text-gray-500 mb-2">File size: {fileSize}</p>
          )}
          {isExternalLink && fileExists && <p className="text-xs text-gray-500 mb-2">Source: Google Drive</p>}
          <div className="flex justify-between items-center">
            <Button
              onClick={handleViewDocument}
              variant="link"
              className={`p-0 h-auto font-medium ${iconColor}`}
              disabled={!fileExists}
            >
              <span className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                View Document
              </span>
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={handleOpenInNewTab}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
                disabled={!fileExists}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Open
              </Button>
              <Button
                onClick={handleDownload}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
                disabled={!fileExists}
              >
                <Download className="h-4 w-4 mr-1" />
                PDF
              </Button>
            </div>
          </div>
          {!fileExists && (
            <div className="mt-4 text-sm text-red-500 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              This document is currently unavailable
            </div>
          )}
        </div>
      </div>

      {showPdfViewer && !isExternalLink && <PdfViewer pdfUrl={processedUrl} onClose={() => setShowPdfViewer(false)} />}
    </>
  )
}

export default PdfDocumentCard
