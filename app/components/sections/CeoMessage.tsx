"use client"

import { useEffect, useRef } from "react"
import OptimizedImage from "../ui/OptimizedImage"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CeoMessage() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the image
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "center center",
        },
      })

      // Animate the content
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "center center",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="ceo-message" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="relative flex">
            <div ref={imageRef} className="relative w-full aspect-[3/4]">
              <OptimizedImage
                src="https://hel1.your-objectstorage.com/naqsh-pord/images/ceo.png"
                alt="CEO Portrait - Mohammed Bin Faihan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>

          <div ref={contentRef} className="flex flex-col justify-center">
            <div className="max-w-2xl">
              <blockquote className="theme-text text-h4 font-light leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                "At Naqsh, we don't just invest, we aim to leave a lasting and meaningful impact.
                <br /><br />
                Our vision is rooted in a strong belief that innovation drives progress, and that the private sector plays a vital role in shaping the future of our Kingdom.
                <br /><br />
                We are committed to smart, value-driven investments that align with Saudi Arabia's Vision 2030, supporting projects that combine creativity, efficiency, and real societal impact.
                <br /><br />
                Naqsh, Investing with Purpose."
              </blockquote>
              <div className="space-y-2">
                <p className="theme-text text-label">Mohammed Bin Faihan</p>
                <p className="theme-text text-body-small opacity-60">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
