"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"

interface Company {
  id: number
  name: string
  description: string
  image: string
}

const companies: Company[] = [
  {
    id: 1,
    name: "QULO SKINCARE",
    description: "GADGET DESIGN FOR A BEAUTY SHOWROOM",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 2,
    name: "ESG INVESTING COMPANIES",
    description: "SINGAPORE'S PREMIER DATA-DRIVEN COMPANY",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 3,
    name: "EGEA JEWELS",
    description: "BRIDGING TRADITION WITH A MODERN NARRATIVE",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 4,
    name: "LOSTROMOS",
    description: "A MEDITERRANEAN PARADISE",
    image: "/placeholder.svg?height=800&width=600",
  },
]

export default function Companies() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Initial animation
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
  }, [])

  const handleMouseEnter = (index: number) => {
    const cards = cardsRef.current
    const texts = textRefs.current

    cards.forEach((card, i) => {
      if (!card) return

      if (i === index) {
        // Expand hovered card
        gsap.to(card.querySelector(".image-container"), {
          flex: 3,
          duration: 0.5,
          ease: "power3.out",
        })
        // Show button
        gsap.to(card.querySelector(".hover-button"), {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        })
      } else {
        // Shrink other cards
        gsap.to(card.querySelector(".image-container"), {
          flex: 0.5,
          duration: 0.5,
          ease: "power3.out",
        })
      }
    })

    // Handle text visibility
    texts.forEach((text, i) => {
      if (!text) return

      gsap.to(text, {
        opacity: i === index ? 1 : 0,
        duration: 0.3,
      })
    })
  }

  const handleMouseLeave = () => {
    const cards = cardsRef.current
    const texts = textRefs.current

    cards.forEach((card) => {
      if (!card) return

      // Reset card width
      gsap.to(card.querySelector(".image-container"), {
        flex: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      // Hide button
      gsap.to(card.querySelector(".hover-button"), {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      })
    })

    // Show all texts
    texts.forEach((text) => {
      if (!text) return
      gsap.to(text, {
        opacity: 1,
        duration: 0.3,
      })
    })
  }

  return (
    <section className="px-4 py-20 bg-[#f5f5f5]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex gap-4">
          {companies.map((company, index) => (
            <div
              key={company.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex-1"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="image-container relative aspect-[4/3] overflow-hidden">
                <Image
                  src={company.image || "/placeholder.svg"}
                  alt={company.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="hover-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center opacity-0 scale-0">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              <div ref={(el) => (textRefs.current[index] = el)} className="mt-6">
                <h3 className="text-lg font-normal mb-1">{company.name}</h3>
                <p className="text-sm font-light opacity-60">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
