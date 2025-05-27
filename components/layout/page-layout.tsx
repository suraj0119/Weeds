import type { ReactNode } from "react"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

interface PageLayoutProps {
  children: ReactNode
  currentPage: string
}

/**
 * Standard page layout with navigation, main content, and footer
 * Includes error boundary for graceful error handling
 */
export function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar currentPage={currentPage} />
      <ErrorBoundary>
        <main className="flex-1 pt-16">{children}</main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}
