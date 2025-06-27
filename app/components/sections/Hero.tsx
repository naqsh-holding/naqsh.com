"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Temporarily disabled GSAP animation for debugging
    // const tl = gsap.timeline({
    //   defaults: { ease: "power3.out" },
    // })
    //
    // // Ensure title is visible first
    // tl.set(titleRef.current, {
    //   opacity: 1,
    //   y: 0,
    // })
    // 
    // // Then animate from slightly below
    // tl.from(titleRef.current, {
    //   y: 50,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out",
    // })
    //
    // return () => {
    //   tl.kill()
    // }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Naqsh Holding Company - Modern corporate building"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content container */}
      <div className="relative z-30 flex items-center justify-start min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h1
              ref={titleRef}
              className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-none drop-shadow-lg opacity-100"
              style={{ opacity: 1 }}
            >
              TO LEAVE A TRACE
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
