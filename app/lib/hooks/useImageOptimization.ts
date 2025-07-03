import { useState, useEffect } from 'react'

interface UseImageOptimizationProps {
  src: string
  priority?: boolean
  sizes?: string
}

export function useImageOptimization({ src, priority = false, sizes }: UseImageOptimizationProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)

  useEffect(() => {
    if (priority) {
      setShouldLoad(true)
      return
    }

    // For non-priority images, use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    )

    // Create a dummy element to observe
    const dummyElement = document.createElement('div')
    observer.observe(dummyElement)

    return () => {
      observer.disconnect()
    }
  }, [priority])

  const handleImageLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleImageError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  return {
    shouldLoad,
    isLoaded,
    hasError,
    handleImageLoad,
    handleImageError
  }
} 