// Image optimization utilities for static export

export interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
}

// For static export, we'll use a CDN or external service for image optimization
// This is a placeholder for future implementation
export const optimizeImageUrl = (
  originalUrl: string,
  options: ImageOptimizationOptions = {}
): string => {
  // If using a CDN like Cloudinary, ImageKit, or similar:
  // return `${CDN_URL}/w_${options.width},h_${options.height},q_${options.quality}/${originalUrl}`
  
  // For now, return the original URL
  // In production, you should use a proper image CDN
  return originalUrl
}

// Generate responsive image URLs for different screen sizes
export const generateResponsiveImageUrls = (
  originalUrl: string,
  sizes: number[]
): string[] => {
  return sizes.map(size => optimizeImageUrl(originalUrl, { width: size }))
}

// Get optimal image size based on container width
export const getOptimalImageSize = (containerWidth: number): number => {
  // Common breakpoints and their optimal image sizes
  if (containerWidth <= 640) return 640    // Mobile
  if (containerWidth <= 768) return 768    // Tablet
  if (containerWidth <= 1024) return 1024  // Small desktop
  if (containerWidth <= 1280) return 1280  // Desktop
  return 1920 // Large desktop
}

// Generate sizes attribute for responsive images
export const generateSizesAttribute = (breakpoints: { [key: string]: number }): string => {
  const sizes = Object.entries(breakpoints)
    .map(([media, width]) => `(max-width: ${media}) ${width}px`)
    .join(', ')
  
  return sizes || '100vw'
}

// Preload critical images
export const preloadImage = (src: string): void => {
  if (typeof window === 'undefined') return
  
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = src
  document.head.appendChild(link)
}

// Lazy load images using Intersection Observer
export const lazyLoadImage = (
  imgElement: HTMLImageElement,
  src: string,
  callback?: () => void
): void => {
  if (typeof window === 'undefined') return
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = src
        img.classList.remove('lazy')
        observer.unobserve(img)
        callback?.()
      }
    })
  })
  
  observer.observe(imgElement)
} 