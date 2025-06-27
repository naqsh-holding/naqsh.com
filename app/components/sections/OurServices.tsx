"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ServiceArrow from "../ui/ServiceArrow"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Service {
  id: number
  title: string
  description: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Information Technology & Smart Solutions",
    description:
      "Through 6 Degrees Technologies, we deliver advanced IT services, website and app development, IoT integration, and smart automation tailored to modern businesses.",
  },
  {
    id: 2,
    title: "Business Incubation & Co-working Spaces",
    description:
      "Efficiency Center Business Inc. redefines office spaces with smart, flexible environments designed to empower startups and enterprises.",
  },
  {
    id: 3,
    title: "Marketing & Advertising",
    description:
      "Promotion Efficiency offers creative and strategic marketing services, from brand building to media production, helping businesses connect with their audiences effectively.",
  },
  {
    id: 4,
    title: "Architecture, Design & Construction",
    description:
      "Burooj for Design, Architecture & Construction provides end-to-end solutions in real estate development, from planning and design to construction and finishing.",
  },
  {
    id: 5,
    title: "Drone Technology & Aerial Services",
    description:
      "Burooj Aid for Drone Cleaning pioneers aerial drone-based maintenance and cleaning services, offering safe, eco-friendly alternatives for building care.",
  },
]

export default function OurServices() {
  const [activeService, setActiveService] = useState<Service>(services[0])
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      })

      gsap.from(servicesRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top center+=100",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" })
    }
  }, [activeService])

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div ref={titleRef}>
              <h2 className="theme-text text-5xl lg:text-6xl leading-tight">
                Naqsh Holding
                <br />
                drives innovation
                <br />
                across key sectors.
              </h2>
            </div>
          </div>

          {/* Services Table */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12">
              {/* Services Menu */}
              <div ref={servicesRef} className="col-span-5">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`
                      border-r-2 theme-border
                      ${activeService.id === service.id || hoveredId === service.id ? "border-b-2 border-r-transparent" : ""}
                      transition-colors duration-300
                    `}
                  >
                    <button
                      onClick={() => setActiveService(service)}
                      onMouseEnter={() => setHoveredId(service.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="w-full py-8 px-4 pr-8 flex items-start justify-between group"
                    >
                      <span className="theme-text text-h7 text-left">{service.title}</span>
                      <ServiceArrow isActive={activeService.id === service.id} isHovered={hoveredId === service.id} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Service Content */}
              <div className="col-span-7">
                <div
                  ref={contentRef}
                  key={activeService.id}
                  className="theme-text text-body p-8 opacity-70 leading-relaxed h-[300px] overflow-y-auto"
                >
                  {activeService.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
