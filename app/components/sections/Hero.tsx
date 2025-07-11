"use client"

import { useEffect, useRef } from "react"
import { loadGSAP } from "@/app/lib/gsap-loader"
import HeroImage from "@/app/components/ui/HeroImage"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Dynamically load GSAP for animations
    loadGSAP().then((gsap) => {
      // GSAP animation placeholder
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] w-full overflow-hidden flex items-center"
      aria-label="Hero Section"
    >
      {/* Optimized hero background image with loading states and fallbacks */}
      <HeroImage
        src="https://hel1.your-objectstorage.com/naqsh-pord/images/hero-background.png"
        alt="Naqsh Holding Company Hero Background"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content container */}
      <div className="relative z-30 flex items-center justify-start w-full h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-full">
            <h1
              ref={titleRef}
              className="text-white font-montserrat tracking-tight leading-none drop-shadow-lg opacity-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
              style={{ opacity: 1 }}
            >
              <span className="font-thin">TO LEAVE</span>{" "}
              <span className="font-bold">A TRACE</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
