"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const percentageRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!percentageRef.current || !containerRef.current) return

    const tl = gsap.timeline({
      onComplete: () => {
        // Ensure the callback is called
        setTimeout(() => {
          onLoadingComplete()
        }, 100)
      },
    })

    // Start percentage animation
    tl.to(percentageRef.current, {
      innerText: "100",
      duration: 3,
      ease: "power2.out",
      snap: { innerText: 1 },
      onUpdate: function () {
        if (percentageRef.current) {
          const value = Math.round(Number(this.targets()[0].innerText) || 0)
          percentageRef.current.textContent = value.toString()
        }
      },
    })
      .to({}, { duration: 0.5 }) // Hold at 100%
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#000000'
      }}
    >
      {/* Percentage counter in bottom right */}
      <div className="absolute bottom-8 right-8">
        <span ref={percentageRef} className="text-white text-6xl md:text-8xl font-light">
          0
        </span>
      </div>
    </div>
  )
}
