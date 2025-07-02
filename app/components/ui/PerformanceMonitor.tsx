"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  totalImages: number
  loadedImages: number
  failedImages: number
  averageLoadTime: number
  slowImages: string[]
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    slowImages: []
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const imageLoadTimes: number[] = []
    const slowImages: string[] = []
    let totalImages = 0
    let loadedImages = 0
    let failedImages = 0

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource' && entry.name.includes('hel1.your-objectstorage.com')) {
          totalImages++
          const loadTime = entry.duration
          imageLoadTimes.push(loadTime)
          
          if (loadTime > 2000) { // Images taking more than 2 seconds
            slowImages.push(entry.name)
          }
          
          if (entry.transferSize > 0) {
            loadedImages++
          } else {
            failedImages++
          }
        }
      }

      const averageLoadTime = imageLoadTimes.length > 0 
        ? imageLoadTimes.reduce((a, b) => a + b, 0) / imageLoadTimes.length 
        : 0

      setMetrics({
        totalImages,
        loadedImages,
        failedImages,
        averageLoadTime,
        slowImages
      })
    })

    observer.observe({ entryTypes: ['resource'] })

    // Log performance issues to console in development
    if (process.env.NODE_ENV === 'development') {
      const logPerformance = () => {
        if (metrics.slowImages.length > 0) {
          console.warn('Slow loading images detected:', metrics.slowImages)
        }
        if (metrics.averageLoadTime > 1000) {
          console.warn(`Average image load time is high: ${metrics.averageLoadTime.toFixed(2)}ms`)
        }
      }

      setTimeout(logPerformance, 5000) // Log after 5 seconds
    }

    return () => observer.disconnect()
  }, [metrics])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <h3 className="font-bold mb-2">Image Performance</h3>
      <div className="space-y-1">
        <div>Total: {metrics.totalImages}</div>
        <div>Loaded: {metrics.loadedImages}</div>
        <div>Failed: {metrics.failedImages}</div>
        <div>Avg Time: {metrics.averageLoadTime.toFixed(0)}ms</div>
        {metrics.slowImages.length > 0 && (
          <div className="text-yellow-400">
            Slow: {metrics.slowImages.length}
          </div>
        )}
      </div>
    </div>
  )
} 