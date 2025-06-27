"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
  // Row 1 - International & Regional Leaders (14 logos)
  { id: 1, name: "OSN", logo: "/images/brands/osn.png", row: 1 },
  { id: 2, name: "SIXT", logo: "/images/brands/sixt.png", row: 1 },
  { id: 3, name: "Pepsi", logo: "/images/brands/pepsi.png", row: 1 },
  { id: 4, name: "ABIS", logo: "/images/brands/abis.png", row: 1 },
  { id: 5, name: "Schneider Electric", logo: "/images/brands/schneider-electric.png", row: 1 },
  { id: 6, name: "SPE International", logo: "/images/brands/spe-international.png", row: 1 },
  { id: 7, name: "Saudi Aramco", logo: "/images/brands/saudi-aramco.png", row: 1 },
  { id: 8, name: "IBRAQ", logo: "/images/brands/ibraq.png", row: 1 },
  { id: 9, name: "Ithra", logo: "/images/brands/ithra.png", row: 1 },
  { id: 10, name: "Eastern Province Municipality", logo: "/images/brands/eastern-province-municipality.png", row: 1 },
  { id: 11, name: "Kooheji Jewelry", logo: "/images/brands/kooheji-jewelry.png", row: 1 },
  { id: 12, name: "Coca-Cola", logo: "/images/brands/coca-cola.png", row: 1 },
  { id: 13, name: "Culinary Arts Commission", logo: "/images/brands/culinary-arts-commission-new.png", row: 1 },
  { id: 14, name: "Monsha'at", logo: "/images/brands/monshaat-new.png", row: 1 },

  // Row 2 - Saudi Enterprises & Government (14 logos)
  { id: 15, name: "Saudi Cement", logo: "/images/brands/saudi-cement.png", row: 2 },
  { id: 16, name: "NPCC", logo: "/images/brands/npcc.png", row: 2 },
  { id: 17, name: "Al Asala", logo: "/images/brands/al-asala.png", row: 2 },
  { id: 18, name: "Al-Asasyah", logo: "/images/brands/al-asasyah.png", row: 2 },
  { id: 19, name: "Ertiqa", logo: "/images/brands/ertiqa.png", row: 2 },
  { id: 20, name: "Mouwasat Medical Services", logo: "/images/brands/mouwasat-medical.png", row: 2 },
  { id: 21, name: "King Fahd Causeway Authority", logo: "/images/brands/king-fahd-causeway.png", row: 2 },
  { id: 22, name: "Tamimi Commercial", logo: "/images/brands/tamimi-commercial.png", row: 2 },
  { id: 23, name: "Al Khobar Municipality", logo: "/images/brands/al-khobar-municipality.png", row: 2 },
  { id: 24, name: "Prisoners Care Committee", logo: "/images/brands/prisoners-care-committee.png", row: 2 },
  { id: 25, name: "Saudi Red Crescent", logo: "/images/brands/saudi-red-crescent.png", row: 2 },
  { id: 26, name: "Ministry of Education", logo: "/images/brands/ministry-of-education-new.png", row: 2 },
  { id: 27, name: "Ministry of Interior", logo: "/images/brands/ministry-of-interior.png", row: 2 },
  { id: 28, name: "Ministry of National Guard", logo: "/images/brands/ministry-of-national-guard-new.png", row: 2 },

  // Row 3 - Technology, Education & Services (14 logos)
  { id: 29, name: "Satorp", logo: "/images/brands/satorp.png", row: 3 },
  { id: 30, name: "Retal", logo: "/images/brands/retal.png", row: 3 },
  { id: 31, name: "SRACO Human Resources", logo: "/images/brands/sraco-hr.png", row: 3 },
  { id: 32, name: "Scitech", logo: "/images/brands/scitech.png", row: 3 },
  { id: 33, name: "KFUPM", logo: "/images/brands/kfupm.png", row: 3 },
  { id: 34, name: "Carlton al Moaibed Hotel", logo: "/images/brands/carlton-al-moaibed.png", row: 3 },
  { id: 35, name: "SMT", logo: "/images/brands/smt.png", row: 3 },
  { id: 36, name: "Floward", logo: "/images/brands/floward.png", row: 3 },
  { id: 37, name: "Al Fozan Holding", logo: "/images/brands/al-fozan-holding.png", row: 3 },
  { id: 38, name: "JEC", logo: "/images/brands/jec.png", row: 3 },
  { id: 39, name: "Ministry of Culture", logo: "/images/brands/ministry-of-culture-new.png", row: 3 },
  { id: 40, name: "Ministry of Civil Defense", logo: "/images/brands/ministry-of-civil-defense.png", row: 3 },
]

export default function OurBrands() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
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

      // Continuous loop animations for each row
      rowRefs.current.forEach((row, index) => {
        if (row) {
          // Calculate the width of one complete set of logos
          const logoWidth = 240 + 48 // logo width + gap
          const totalWidth = logoWidth * 14 // Width of one complete set
          const moveDistance = totalWidth // Move exactly one set width

          // Set initial position
          gsap.set(row, { x: 0 })

          // Create infinite loop animation
          gsap.to(row, {
            x: -moveDistance, // All rows move in the opposite direction (right to left)
            duration: 40 + index * 5,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => {
                const parsed = Number.parseFloat(x)
                // Reset position when it reaches the negative move distance
                return parsed <= -moveDistance ? 0 : parsed
              }),
            },
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const getRowBrands = (row: number) => brands.filter((brand) => brand.row === row)

  // Duplicate brands for seamless loop
  const getDuplicatedRowBrands = (row: number) => {
    const rowBrands = getRowBrands(row)
    return [...rowBrands, ...rowBrands, ...rowBrands, ...rowBrands] // Multiple duplicates to ensure no gaps
  }

  return (
    <section ref={sectionRef} id="brands" className="py-32 bg-white overflow-hidden" data-bg="white">
      <div className="container mx-auto px-4 mb-20">
        <div ref={headerRef}>
          <h2 className="theme-text text-h2 mb-4 font-medium">Trusted by Industry Leaders</h2>
          <p className="theme-text text-body-large font-light max-w-xl">
            Partnerships built on trust, impact, and long-term success.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="space-y-12">
          {[1, 2, 3].map((row, index) => (
            <div key={row} ref={(el) => { rowRefs.current[index] = el }} className="w-full">
              <div className="flex gap-12 w-max">
                {getDuplicatedRowBrands(row).map((brand, brandIndex) => (
                  <div
                    key={`${brand.id}-${brandIndex}`}
                    className="relative flex-shrink-0 w-[240px]"
                    onMouseEnter={() => setHoveredLogo(brand.id)}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="aspect-[2/1] relative">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        fill
                        className={`
  object-contain transition-all duration-300 brightness-0 invert
  ${hoveredLogo === brand.id ? "scale-110 brightness-100 invert-0" : ""}
  ${hoveredLogo !== null && hoveredLogo !== brand.id ? "opacity-30" : ""}
`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
