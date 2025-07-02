// Image optimization utilities

export const preloadCriticalImages = () => {
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

export const getOptimizedImageUrl = (originalUrl: string, width: number, quality: number = 75) => {
  if (!originalUrl.includes('hel1.your-objectstorage.com')) {
    return originalUrl
  }
  
  // For external CDN images, we'll use Next.js optimization
  // The actual optimization will be handled by Next.js Image component
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