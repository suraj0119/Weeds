"use client"

import { useState, useEffect } from "react"
import { partners } from "@/data/partners"
import { isImageValid } from "@/utils/image-utils"
import { AlertCircle, CheckCircle } from "lucide-react"

interface ImageStatus {
  id: string
  name: string
  path: string
  isValid: boolean
  checked: boolean
}

export default function PartnerImageValidator() {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>(
    partners.map((partner) => ({
      id: partner.id,
      name: partner.name,
      path: partner.logo,
      isValid: false,
      checked: false,
    })),
  )
  const [isChecking, setIsChecking] = useState(false)

  // Check all images on mount
  useEffect(() => {
    const checkImages = async () => {
      setIsChecking(true)

      const newStatuses = [...imageStatuses]

      for (let i = 0; i < newStatuses.length; i++) {
        const status = newStatuses[i]
        const isValid = await isImageValid(status.path)

        newStatuses[i] = {
          ...status,
          isValid,
          checked: true,
        }

        // Update state incrementally to show progress
        setImageStatuses([...newStatuses])
      }

      setIsChecking(false)
    }

    checkImages()
  }, [])

  const validCount = imageStatuses.filter((status) => status.isValid).length
  const totalCount = imageStatuses.length
  const allChecked = imageStatuses.every((status) => status.checked)

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-4">Partner Image Validation</h3>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Validation Progress</span>
          <span className="text-sm font-medium">{allChecked ? "Complete" : "Checking..."}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(imageStatuses.filter((s) => s.checked).length / totalCount) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Valid Images</span>
          <span className="text-sm font-medium">
            {validCount}/{totalCount}
          </span>
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {imageStatuses.map((status) => (
          <div
            key={status.id}
            className={`flex items-center justify-between p-2 rounded-md ${
              status.checked ? (status.isValid ? "bg-green-50" : "bg-red-50") : "bg-gray-50"
            }`}
          >
            <div className="flex items-center">
              {status.checked ? (
                status.isValid ? (
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                )
              ) : (
                <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
              )}
              <span className="text-sm font-medium">{status.name}</span>
            </div>
            <span className="text-xs text-gray-500 truncate max-w-[150px]">{status.path}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
