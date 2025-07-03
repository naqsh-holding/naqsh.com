"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"
import type { Company } from "@/app/types"

const companies: Company[] = [
  {
    id: 1,
    name: "6 Degrees Technologies",
    description: "Technology & Smart Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-01.png",
    website: "https://6degrees.com.sa/en/",
  },
  {
    id: 2,
    name: "Burooj Air",
    description: "Aviation Services & Solutions",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-03.png",
    website: "https://buroojair.com/",
  },
  {
    id: 3,
    name: "Promotion Efficiency for Advertising",
    description: "Marketing & Creative Production",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-05.png",
    website: "https://www.promoe.com.sa/",
  },
  {
    id: 4,
    name: "Burooj",
    description: "Real Estate Development & Construction",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-04.png",
    website: "https://www.burooj.pro/",
  },
  {
    id: 5,
    name: "Efficiency Center Business Inc.",
    description: "Business Incubation & Co-working",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/Naqsh Website-02.png",
    website: "https://www.efficiencys.com.sa/",
  },
]

const getRandomColor = () => {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default function Companies() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorColors, setCursorColors] = useState<string[]>([])

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }).to(cardsRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: "none",
      delay: 0.5
    })
    setCursorColors(companies.map(() => getRandomColor()))

    // Cleanup
    return () => {
      tl.kill()
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setCursorPosition({ x, y })
  }

  return (
    <section id="companies" className="companies-section py-16 md:py-24 lg:py-32 bg-[#f5f5f5] overflow-hidden" ref={containerRef} data-bg="gray">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <div className="mb-8 md:mb-12">
          <span className="text-caption opacity-60 text-black">OUR COMPANIES</span>
        </div>

        {/* Main Title */}
        <h2 className="text-black text-h2 md:text-h1 mb-8 md:mb-12 lg:mb-16">
          A diverse portfolio of innovative companies spanning technology, real estate, aviation, and marketing.
        </h2>

        {/* Companies Slider */}
        <div 
          ref={sliderRef}
          className="flex gap-4 md:gap-8 overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {companies.map((company, index) => (
            <div
              key={company.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="w-64 sm:w-72 md:w-80 flex-shrink-0 group"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <a 
                href={company.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block image-container relative aspect-[3/5] overflow-hidden cursor-pointer"
              >
                <Image
                  src={company.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                  alt={company.name}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 320px"
                  quality={60}
                  unoptimized={true}
                />
                {hoveredImage === index && (
                  <div
                    className="absolute w-16 h-16 rounded-full flex items-center justify-center pointer-events-none"
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                      transform: "translate(-50%, -50%)",
                      backgroundColor: cursorColors[index],
                    }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                )}
              </a>
              <div className="mt-4 md:mt-6 transition-opacity duration-300">
                <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">{company.name}</h3>
                <p className="text-black text-sm sm:text-body-small opacity-80">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
