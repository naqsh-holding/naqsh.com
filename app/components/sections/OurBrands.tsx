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
  // Row 1
  { id: 1, name: "Pepsi", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/pepsi.png", row: 1 },
  { id: 2, name: "ABIS", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/abis.png", row: 1 },
  { id: 3, name: "Accenture", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/accenture.png", row: 1 },
  { id: 4, name: "ADNOC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/adnoc.png", row: 1 },
  { id: 5, name: "Al Asala", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/al-asala.png", row: 1 },
  { id: 6, name: "Al Fozan Holding", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/al-fozan-holding.png", row: 1 },
  { id: 7, name: "Al Khobar Municipality", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/al-khobar-municipality.png", row: 1 },
  { id: 8, name: "Carlton Al Moaibed", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/carlton-al-moaibed.png", row: 1 },
  // { id: 9, name: "Coca-Cola", logo: "/https://hel1.your-objectstorage.com/naqsh-pordimages/brands/coca-cola.png", row: 1 },
  { id: 11, name: "Culinary Arts Commission Updated", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/culinary-arts-commission-updated.png", row: 1 },
  { id: 12, name: "Eastern Province Municipality", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/eastern-province-municipality.png", row: 1 },
  { id: 13, name: "Ertiqa", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ertiqa.png", row: 1 },
  { id: 14, name: "GDC Middle East", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/gdc-middle-east.png", row: 1 },

  // Row 2
  { id: 15, name: "IBRAQ", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ibraq.png", row: 2 },
  { id: 17, name: "JEC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/jec.png", row: 2 },
  { id: 18, name: "Keeta", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/keeta.png", row: 2 },
  { id: 19, name: "King Fahd Causeway", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/king-fahd-causeway.png", row: 2 },
  { id: 20, name: "Kooheji Jewelry", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/kooheji-jewelry.png", row: 2 },
  { id: 21, name: "Ministry of Civil Defense", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-civil-defense.png", row: 2 },
  { id: 22, name: "Ministry of Culture", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-culture-new.png", row: 2 },
  { id: 23, name: "Ministry of Education", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-education-updated.png", row: 2 },
  { id: 24, name: "Ministry of Interior", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-interior.png", row: 2 },
  { id: 25, name: "Ministry of National Guard", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/ministry-of-national-guard-updated.png", row: 2 },
  { id: 26, name: "Monsha'at", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/monshaat-new.png", row: 2 },
  { id: 28, name: "Mouwasat Medical", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/mouwasat-medical.png", row: 2 },

  // Row 3
  { id: 29, name: "NPCC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/npcc.png", row: 3 },
  { id: 30, name: "OSN", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/osn.png", row: 3 },
  { id: 31, name: "Pepsi", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/pepsi.png", row: 3 },
  { id: 32, name: "Prisoners Care Committee", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/prisoners-care-committee.png", row: 3 },
  { id: 33, name: "Retal", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/retal.png", row: 3 },
  { id: 34, name: "Satorp", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/satorp.png", row: 3 },
  { id: 35, name: "Saudi Cement", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/saudi-cement.png", row: 3 },
  { id: 36, name: "Schneider Electric", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/schneider-electric.png", row: 3 },
  { id: 37, name: "Scitech", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/scitech.png", row: 3 },
  { id: 38, name: "Sixt", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/sixt.png", row: 3 },
  { id: 39, name: "SMT", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/smt.png", row: 3 },
  { id: 40, name: "Solutions by STC", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/solutions-by-stc.png", row: 3 },
  { id: 41, name: "SRACO HR", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/sraco-hr.png", row: 3 },
  { id: 42, name: "SRACO Updated", logo: "https://hel1.your-objectstorage.com/naqsh-pord/images/brands/sraco-updated.png", row: 3 },
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
                        src={brand.logo || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                        alt={brand.name}
                        fill
                        className={`
  object-contain transition-all duration-300 brightness-0 invert
  ${hoveredLogo === brand.id ? "scale-110 brightness-100 invert-0" : ""}
  ${hoveredLogo !== null && hoveredLogo !== brand.id ? "opacity-30" : ""}
`}
                        sizes="240px"
                        quality={70}
                        unoptimized={true}
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
