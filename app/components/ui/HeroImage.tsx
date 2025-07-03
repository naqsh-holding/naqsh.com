"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useImagePreload } from "@/app/lib/hooks/useImagePreload"

interface HeroImageProps {
  src: string
  alt: string
  fallbackSrc?: string
}

export default function HeroImage({ src, alt, fallbackSrc }: HeroImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  // Preload the image for better performance
  const { isLoaded: isPreloaded, hasError: preloadError } = useImagePreload(src)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
    setImageSrc(src)
  }, [src])

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleImageError = () => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
      setHasError(false)
    } else {
      setHasError(true)
      setIsLoading(false)
    }
  }

  // Show loading state if image is not preloaded
  const showLoading = isLoading || (!isPreloaded && !preloadError)

  return (
    <div className="absolute inset-0 z-0">
      {/* Loading state */}
      {showLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-pulse" />
      )}
      
      {/* Error state - gradient fallback */}
      {(hasError || preloadError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      )}
      
      {/* Optimized hero image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-500 ${
          showLoading ? 'opacity-0' : 'opacity-100'
        }`}
        unoptimized={true}
        style={{
          objectPosition: 'center',
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  )
} 