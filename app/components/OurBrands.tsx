"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Brand {
  id: number
  name: string
  logo: string
  row: number
}

const brands: Brand[] = [
  // Row 1
  { id: 1, name: "Asharq Al-Awsat", logo: "/placeholder.svg?height=60&width=200", row: 1 },
  { id: 2, name: "Arab News", logo: "/placeholder.svg?height=60&width=200", row: 1 },
  { id: 3, name: "Independent Arabia", logo: "/placeholder.svg?height=60&width=200", row: 1 },
  { id: 4, name: "Al Eqtisadiah", logo: "/placeholder.svg?height=60&width=200", row: 1 },
  // Row 2
  { id: 5, name: "Sayidaty", logo: "/placeholder.svg?height=60&width=200", row: 2 },
  { id: 6, name: "Al Jamila", logo: "/placeholder.svg?height=60&width=200", row: 2 },
  { id: 7, name: "Urdu News", logo: "/placeholder.svg?height=60&width=200", row: 2 },
  { id: 8, name: "Sport 24", logo: "/placeholder.svg?height=60&width=200", row: 2 },
  // Row 3
  { id: 9, name: "Independent Urdu", logo: "/placeholder.svg?height=60&width=200", row: 3 },
  { id: 10, name: "Asharq News", logo: "/placeholder.svg?height=60&width=200", row: 3 },
  { id: 11, name: "Al Majalla", logo: "/placeholder.svg?height=60&width=200", row: 3 },
  { id: 12, name: "Manga Arabia", logo: "/placeholder.svg?height=60&width=200", row: 3 },
]

export default function OurBrands() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const buttonTextRef = useRef<HTMLSpanElement>(null)
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 30,
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

      // Rows animation on scroll
      const rows = document.querySelectorAll(".logo-row")
      rows.forEach((row, index) => {
        gsap.to(row, {
          y: index % 2 === 0 ? 20 : -20,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      })

      // Button hover animation
      if (buttonRef.current && buttonTextRef.current) {
        buttonRef.current.addEventListener("mousemove", (e) => {
          const rect = buttonRef.current!.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          gsap.to(buttonTextRef.current, {
            x: (x - rect.width / 2) * 0.1,
            y: (y - rect.height / 2) * 0.1,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonTextRef.current, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const getRowBrands = (row: number) => brands.filter((brand) => brand.row === row)

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div ref={headerRef} className="flex justify-between items-start mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-4">OUR BRANDS</h2>
            <p className="text-xl font-light max-w-xl">Explore our diverse portfolio of brands.</p>
          </div>
          <button
            ref={buttonRef}
            className="group relative px-6 py-3 overflow-hidden border rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            <span ref={buttonTextRef} className="inline-flex items-center gap-2">
              see all brands
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>

        <div className="space-y-16">
          {[1, 2, 3].map((row) => (
            <div key={row} className="logo-row grid grid-cols-2 md:grid-cols-4 gap-12">
              {getRowBrands(row).map((brand) => (
                <div
                  key={brand.id}
                  className="aspect-[3/1] relative"
                  onMouseEnter={() => setHoveredLogo(brand.id)}
                  onMouseLeave={() => setHoveredLogo(null)}
                >
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className={`
                      object-contain transition-all duration-300 brightness-0
                      ${hoveredLogo === brand.id ? "scale-110" : ""}
                      ${hoveredLogo !== null && hoveredLogo !== brand.id ? "opacity-30" : ""}
                    `}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
