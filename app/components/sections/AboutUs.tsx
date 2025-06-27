"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=50",
          end: "center center",
        },
      })

      // Content animation
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=20",
          end: "center center",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-[#f5f5f5] text-black relative overflow-hidden" data-bg="gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Section Label */}
          <div className="mb-12">
            <span className="text-caption opacity-60 text-black">ABOUT US</span>
          </div>

          {/* Main Title */}
          <h2 ref={titleRef} className="text-black text-h1 mb-16">
            Shaping the Future,
            <br />
            One Sector at a Time
          </h2>

          {/* Content */}
          <div ref={contentRef} className="space-y-8 max-w-3xl">
            <p className="text-body-large opacity-80 text-black">
              Naqsh Holding is a forward-thinking investment group built on a foundation of innovation, strategic
              vision, and diversified expertise. We lead a portfolio of specialized companies across technology,
              construction, advertising, coworking, and drone services — each one aligned with our mission to drive
              sustainable growth and long-term value.
            </p>

            <p className="text-body opacity-70 text-black">
              With a unified commitment to quality and excellence, our subsidiaries operate independently yet
              collaborate under a shared vision: to redefine industry standards and leave a lasting mark on the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
