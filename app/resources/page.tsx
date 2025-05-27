"use client"

import { useScrollAnimation } from "@/components/animations"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import PdfDocumentCard from "@/components/pdf-document-card"
import SectionHeader from "@/components/section-header"
import { COLORS, GRADIENTS } from "@/utils/theme-constants"
import OptimizedImage from "@/components/optimized-image"
import { useState, useEffect } from "react"
import { checkFileExists } from "@/utils/pdf-utils"

export default function ResourcesPage() {
  useScrollAnimation()

  const [isLoading, setIsLoading] = useState(true)
  const [availableReports, setAvailableReports] = useState({
    annual: [],
    audit: [],
  })

  const reports = {
    annual: [
      {
        title: "Annual Report 2023-2024",
        description:
          "A comprehensive overview of our programs, achievements, challenges, and financial performance for the fiscal year 2023-2024.",
        pdfUrl: "https://drive.google.com/file/d/1Sf6y-W5zj7P3M0GcXib9Pa-kZbikR88o/view?usp=sharing",
        iconColor: COLORS.text.primary,
        iconBgColor: COLORS.overlay.blueBg,
        isExternalLink: true,
        documentType: "Annual Report",
      },
      {
        title: "Annual Report 2022-2023",
        description:
          "A detailed report on our activities, impact, and financial performance for the fiscal year 2022-2023.",
        pdfUrl: "https://drive.google.com/file/d/1X9lt1pDOK0m2D8wPUm5DDva5_1_5tw6a/view?usp=sharing",
        iconColor: COLORS.text.secondary,
        iconBgColor: COLORS.overlay.redBg,
        isExternalLink: true,
        documentType: "Annual Report",
      },
      {
        title: "Annual Report 2021-2022",
        description:
          "An overview of our initiatives, achievements, and financial statements for the fiscal year 2021-2022.",
        pdfUrl: "https://drive.google.com/file/d/1xdG-1o5ZdfMA1bhtVAt-zjshnmk20Uqs/view?usp=sharing",
        iconColor: COLORS.text.primary,
        iconBgColor: COLORS.overlay.blueBg,
        isExternalLink: true,
        documentType: "Annual Report",
      },
    ],
    audit: [
      {
        title: "Audit Report 2023-2024",
        description:
          "The official audit report detailing our financial statements, compliance with regulations, and accounting practices for the fiscal year 2023-2024.",
        pdfUrl: "https://drive.google.com/file/d/1xdG-1o5ZdfMA1bhtVAt-zjshnmk20Uqs/view?usp=sharing",
        iconColor: COLORS.text.secondary,
        iconBgColor: COLORS.overlay.redBg,
        isExternalLink: true,
        documentType: "Audit Report",
      },
      {
        title: "Audit Report 2022-2023",
        description:
          "A comprehensive audit of our financial records, internal controls, and compliance for the fiscal year 2022-2023.",
        pdfUrl: "https://drive.google.com/file/d/1Y-1CHZfg6QWF5ObeOv8PIdxiczBw_ca9/view?usp=sharing",
        iconColor: COLORS.text.primary,
        iconBgColor: COLORS.overlay.blueBg,
        isExternalLink: true,
        documentType: "Audit Report",
      },
      {
        title: "Audit Report 2021-2022",
        description: "The detailed audit findings and financial analysis for the fiscal year 2021-2022.",
        pdfUrl: "https://drive.google.com/file/d/1cJWdBPndvfymHPA6xBG0QeSd3VP0LYeB/view?usp=sharing",
        iconColor: COLORS.text.secondary,
        iconBgColor: COLORS.overlay.redBg,
        isExternalLink: true,
        documentType: "Audit Report",
      },
    ],
  }

  // Check if files exist
  useEffect(() => {
    const checkReports = async () => {
      try {
        setIsLoading(true)

        // Check annual reports
        const annualResults = await Promise.all(
          reports.annual.map(async (report) => {
            const exists = await checkFileExists(report.pdfUrl)
            return { ...report, exists }
          }),
        )

        // Check audit reports
        const auditResults = await Promise.all(
          reports.audit.map(async (report) => {
            const exists = await checkFileExists(report.pdfUrl)
            return { ...report, exists }
          }),
        )

        setAvailableReports({
          annual: annualResults,
          audit: auditResults,
        })
      } catch (error) {
        console.error("Error checking report availability:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkReports()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="resources" />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/diverse-resource-icons.png"
              alt="WEEDS resources"
              fill
              className="object-cover"
              priority
            />
            <div className={`absolute inset-0 ${GRADIENTS.overlay} z-10`}></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-content items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Resources</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white max-w-2xl text-lg">
              Access our impact reports and research to learn about our work and outcomes
            </p>
          </div>
        </section>

        {/* Impact Reports */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Impact Reports"
              titleColor={COLORS.text.secondary}
              dividerColor={COLORS.bg.primary}
              description="Explore our annual reports, impact assessments, and research publications that document our work and its outcomes."
              className="mb-12"
            />

            <div className="mb-12">
              <h3 className={`text-xl font-bold font-heading ${COLORS.text.primary} mb-6`}>Annual Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-6 animate-pulse">
                        <div className="h-48 bg-gray-200 mb-4"></div>
                        <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 w-full mb-4"></div>
                        <div className="h-10 bg-gray-200 w-1/2"></div>
                      </div>
                    ))
                ) : availableReports.annual.length > 0 ? (
                  availableReports.annual.map((report, index) => (
                    <PdfDocumentCard
                      key={index}
                      title={report.title}
                      description={report.description}
                      pdfUrl={report.pdfUrl}
                      iconColor={report.iconColor}
                      iconBgColor={report.iconBgColor}
                      isExternalLink={report.isExternalLink}
                      documentType={report.documentType}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-500">
                      Annual reports are currently being updated. Please check back later.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-12">
              <h3 className={`text-xl font-bold font-heading ${COLORS.text.primary} mb-6`}>Audit Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-6 animate-pulse">
                        <div className="h-48 bg-gray-200 mb-4"></div>
                        <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 w-full mb-4"></div>
                        <div className="h-10 bg-gray-200 w-1/2"></div>
                      </div>
                    ))
                ) : availableReports.audit.length > 0 ? (
                  availableReports.audit.map((report, index) => (
                    <PdfDocumentCard
                      key={index}
                      title={report.title}
                      description={report.description}
                      pdfUrl={report.pdfUrl}
                      iconColor={report.iconColor}
                      iconBgColor={report.iconBgColor}
                      isExternalLink={report.isExternalLink}
                      documentType={report.documentType}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-500">Audit reports are currently being updated. Please check back later.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
