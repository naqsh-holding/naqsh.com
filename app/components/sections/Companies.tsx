"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import type { Company } from "@/types"
import { Button } from "@/components/ui/button"

const companies: Company[] = [
  {
    id: 1,
    name: "6 Degrees Technologies",
    description: "Technology & Smart Solutions",
    image: "/placeholder.svg?height=1000&width=600",
  },
  {
    id: 2,
    name: "Efficiency Center Business Inc.",
    description: "Business Incubation & Co-working",
    image: "/placeholder.svg?height=1000&width=600",
  },
  {
    id: 3,
    name: "Promotion Efficiency for Advertising",
    description: "Marketing & Creative Production",
    image: "/placeholder.svg?height=1000&width=600",
  },
  {
    id: 4,
    name: "Burooj",
    description: "Real Estate Development & Construction",
    image: "/placeholder.svg?height=1000&width=600",
  },
  {
    id: 5,
    name: "Burooj Air",
    description: "Aviation Services & Solutions",
    image: "/placeholder.svg?height=1000&width=600",
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorColors, setCursorColors] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  const companiesPerPage = 4
  const totalPages = Math.ceil(companies.length / companiesPerPage)
  
  const visibleCompanies = companies.slice(
    currentPage * companiesPerPage,
    (currentPage + 1) * companiesPerPage
  )

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))
  }

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
    <section id="companies" className="companies-section py-32 bg-[#f5f5f5]" ref={containerRef} data-bg="gray">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center mb-8">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevious} disabled={currentPage === 0}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Scroll Left</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} disabled={currentPage === totalPages - 1}>
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Scroll Right</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleCompanies.map((company, index) => (
            <div
              key={company.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className="image-container relative aspect-[3/5] overflow-hidden">
                <Image
                  src={company.image || "/placeholder.svg"}
                  alt={company.name}
                  fill
                  className="object-cover"
                  priority
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
              </div>
              <div className="mt-6 mb-8 md:mb-0 transition-opacity duration-300">
                <h3 className="text-black text-2xl font-bold mb-2 leading-tight">{company.name}</h3>
                <p className="text-black text-body-small opacity-80">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
