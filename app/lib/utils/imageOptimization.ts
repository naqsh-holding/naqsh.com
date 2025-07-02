// Image optimization utilities for static export

export const preloadCriticalImages = () => {
  if (typeof window === 'undefined') return

  const criticalImages = [
    'https://hel1.your-objectstorage.com/naqsh-pord/images/hero-background.png',
    'https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-01.png',
    'https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-02.png',
    'https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-03.png',
    'https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-04.png',
    'https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-05.png',
    'https://hel1.your-objectstorage.com/naqsh-pord/images/ceo.png',
  ]

  criticalImages.forEach((src) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

// Client-side image preloading for critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve()
      return
    }

    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

// Batch preload multiple images
export const preloadImages = async (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map(url => preloadImage(url))
  await Promise.allSettled(promises)
}

export const getOptimizedImageUrl = (originalUrl: string, width: number, quality: number = 75) => {
  // For static export, we return the original URL
  // The CDN should handle optimization
  return originalUrl
}

export const getImageSizes = (containerWidth: 'full' | 'half' | 'third' | 'quarter') => {
  switch (containerWidth) {
    case 'full':
      return '(max-width: 768px) 100vw, 100vw'
    case 'half':
      return '(max-width: 768px) 100vw, 50vw'
    case 'third':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    case 'quarter':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
    default:
      return '100vw'
  }
}

export const getImageQuality = (imageType: 'hero' | 'content' | 'thumbnail' | 'logo') => {
  switch (imageType) {
    case 'hero':
      return 90
    case 'content':
      return 85
    case 'thumbnail':
      return 80
    case 'logo':
      return 70
    default:
      return 75
  }
}

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  if (typeof window === 'undefined') return null

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry)
      }
    })
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  })
}

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
} 