"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

/**
 * Error Boundary component to catch and handle JavaScript errors
 * Prevents the entire application from crashing due to errors in a component
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem
              persists.
            </p>
            <Button onClick={() => window.location.reload()} className="bg-[#3C3B6E]">
              Refresh Page
            </Button>
          </div>
        )
      )
    }

    return this.props.children
  }
}
