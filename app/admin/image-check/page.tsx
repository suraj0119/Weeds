"use client"

import { useState } from "react"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"
import PartnerImageValidator from "@/components/partner-image-validator"
import { Button } from "@/components/ui/button"
import { partners } from "@/data/partners"

export default function ImageCheckPage() {
  const [showValidator, setShowValidator] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage="admin" />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Image Validation</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Partner Images</h2>
              <p className="mb-4">
                This page helps you verify that all partner images are loading correctly. Click the button below to
                check all partner images.
              </p>

              <Button onClick={() => setShowValidator(!showValidator)} className="mb-6">
                {showValidator ? "Hide Validator" : "Check Partner Images"}
              </Button>

              {showValidator && <PartnerImageValidator />}
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Partner Image Paths</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs overflow-x-auto">
                  {JSON.stringify(
                    partners.map((p) => ({ name: p.name, logo: p.logo })),
                    null,
                    2,
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
