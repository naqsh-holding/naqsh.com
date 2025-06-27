"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const word1Ref = useRef<HTMLSpanElement>(null)
  const word2Ref = useRef<HTMLSpanElement>(null)
  const word3Ref = useRef<HTMLSpanElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    })

    tl.from([word1Ref.current, word2Ref.current, word3Ref.current], {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    }).from(
      scrollRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
      },
      "-=0.3",
    )

    return () => {
      tl.kill()
    }
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#f5f5f5] flex flex-col justify-center px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight tracking-tight">
          <span ref={word1Ref} className="inline-block">
            TO LEAVE
          </span>
          <br />
          <span ref={word2Ref} className="inline-block">
            A BEAUTIFUL
          </span>
          <br />
          <span ref={word3Ref} className="inline-block">
            TRACE
          </span>
        </h1>
      </div>
      <div
        ref={scrollRef}
        onClick={handleScroll}
        className="absolute bottom-8 left-8 flex items-center space-x-2 cursor-pointer group"
      >
        <span className="text-sm font-light">SCROLL TO EXPLORE</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
