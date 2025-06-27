"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const progressRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onLoadingComplete })

    tl.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })
      .to(progressRef.current, {
        innerText: "100%",
        duration: 5,
        snap: { innerText: 1 },
        onUpdate: () => {
          if (progressRef.current) {
            progressRef.current.textContent = `${Math.round(Number(progressRef.current.textContent) || 0)}%`
          }
        },
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
      })

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <h1 ref={titleRef} className="text-white text-7xl md:text-9xl font-light tracking-wider">
        NAQSH
      </h1>
      <div className="fixed bottom-8 left-8 right-8 flex justify-between items-center text-white/50 text-sm">
        <span>PLEASE WAIT</span>
        <span ref={progressRef}>0%</span>
      </div>
    </div>
  )
}
