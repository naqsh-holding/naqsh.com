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
          THE ESSENCE 
            OF NAQSH
          </h2>

          {/* Content */}
          <div ref={contentRef} className="space-y-8 max-w-3xl">
            <p className="text-body-large opacity-80 text-black">
            At Naqsh Holding, we don't just aim to succeed — we aim to leave a mark.
            We believe that every project is an opportunity to etch a lasting impact, and every investment is a signature on the future of the industries we serve.
            </p>

            <p className="text-body opacity-70 text-black">
            Naqsh was founded with a vision that goes beyond conventional business models. As a diversified holding group, we strive to create meaningful value across technology, media, and real estate development.
We don't merely participate — we shape, we establish, and we influence.
With every venture, we redefine presence, craft opportunity, and ensure that our contributions resonate long after the work is done.
Our motto, “To Leave a Mark,” is more than just a slogan — it's a promise we bring to life through innovation, sustainability, and long-term impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
