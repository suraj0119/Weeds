import type React from "react"
import { lazy, Suspense, type ComponentType } from "react"

// Generic type for component props
type ComponentProps<T> = T extends ComponentType<infer P> ? P : never

/**
 * Creates a lazily loaded component with a fallback
 * @param importFunc - Dynamic import function
 * @param fallback - Fallback component to show while loading
 * @returns Lazy loaded component
 */
export function lazyLoad<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback: React.ReactNode = (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-[#3C3B6E] border-t-transparent rounded-full"></div>
    </div>
  ),
) {
  const LazyComponent = lazy(importFunc)

  return (props: ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
