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
    title: "Media Sector",
    description:
      "Our Media Sector delivers comprehensive marketing and creative production solutions. We specialize in advertising campaigns, brand development, digital marketing, and creative content creation. Our expertise spans outdoor advertising, event management, and production services, helping brands establish strong market presence through strategic media planning and creative storytelling.",
  },
  {
    id: 2,
    title: "Real Estate Sector",
    description:
      "Our Real Estate Sector develops value-driven, sustainable, and future-ready spaces. We specialize in commercial fit-out projects, interior design, custom furniture, and comprehensive building solutions. Our expertise includes office environments, retail spaces, and specialized facilities, delivering end-to-end solutions with advanced IT infrastructure and building automation systems.",
  },
  {
    id: 3,
    title: "Business Services Sector",
    description:
      "Our Business Services Sector enables entrepreneurship and business growth through smart services and inspiring workspaces. We provide business incubation services, co-working spaces, and entrepreneurial support programs. Our facilities offer modern work environments designed to foster collaboration, innovation, and productivity for startups and established businesses.",
  },
  {
    id: 4,
    title: "Information Technology Sector",
    description:
      "Our Information Technology Sector innovates with tech-driven solutions that enable digital transformation. We specialize in software development, UI/UX design, progressive web applications, and IoT solutions. Our expertise spans custom software development, digital platforms, and enterprise technology solutions that streamline operations and enhance user experiences.",
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
              Naqsh Investment Sectors    </h2>
              <p className="theme-text text-h4 font-light leading-relaxed mb-8" style={{ fontWeight: 300 }}>                Naqsh Holding strategically invests in sectors that shape the future and drive long-term growth:
              </p>
          
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
