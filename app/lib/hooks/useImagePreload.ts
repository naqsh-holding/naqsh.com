import { useEffect, useState } from 'react'

export function useImagePreload(imageSrc: string) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!imageSrc) return

    const img = new Image()
    
    img.onload = () => {
      setIsLoaded(true)
      setHasError(false)
    }
    
    img.onerror = () => {
      setHasError(true)
      setIsLoaded(false)
    }
    
    img.src = imageSrc

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [imageSrc])

  return { isLoaded, hasError }
} 