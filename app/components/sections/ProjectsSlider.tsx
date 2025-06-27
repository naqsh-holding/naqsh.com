"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { PillButton } from "../ui/PillButton"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Project {
  id: number
  title: string
  category: string
  image: string
  slug: string
  categories: { name: string; link: string }[]
}

// Featured projects - only show 4 in the home section
const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Keeta - Khobar Launch Event",
    category: "EFFICIENCY CENTER",
    image: "/images/keeta-billboard.jpeg",
    slug: "keeta-khobar-launch-event",
    categories: [
      { name: "EFFICIENCY CENTER", link: "#efficiency-center" },
      { name: "LAUNCH EVENT", link: "#launch-event" },
    ],
  },
  {
    id: 2,
    title: "PWA - AlSharqiya Gets Creative",
    category: "6 DEGREES TECHNOLOGIES",
    image: "/images/eastern-creative-digital-display.jpeg",
    slug: "creative-nexus-digital-platform",
    categories: [
      { name: "6 DEGREES TECHNOLOGIES", link: "#6-degrees" },
      { name: "DIGITAL PLATFORM", link: "#digital-platform" },
    ],
  },
  {
    id: 3,
    title: "Environmental and Circular Economy Forum 2023",
    category: "PROMOTION EFFICIENCY",
    image: "/images/environmental-forum-billboard.jpeg",
    slug: "environmental-forum-2023",
    categories: [
      { name: "PROMOTION EFFICIENCY", link: "#promotion-efficiency" },
      { name: "ENVIRONMENTAL", link: "#environmental" },
    ],
  },
  {
    id: 4,
    title: "GDC Middle East - Comprehensive Fit-Out for Riyadh Office",
    category: "BUROOJ",
    image: "/images/gdc-middle-east-fitout.jpeg",
    slug: "gdc-middle-east-fitout",
    categories: [
      { name: "BUROOJ", link: "#burooj" },
      { name: "FIT-OUT", link: "#fit-out" },
    ],
  },
]

export default function ProjectsSlider() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Animate project items
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div ref={headerRef} className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-caption font-medium theme-text opacity-60 tracking-wider mb-6">FEATURED PROJECTS</h2>
              <h3 className="text-h3 font-medium theme-text max-w-4xl leading-tight">
                Discover impactful projects and innovative solutions across all our business sectors.
              </h3>
            </div>
            <PillButton 
              href="/projects"
              className="whitespace-nowrap self-start md:self-auto"
            >
              See all projects
            </PillButton>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} ref={(el) => { itemsRef.current[index] = el }} className="group">
              <Link href={`/projects/${project.slug}`} aria-label={`View project: ${project.title}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden mb-6">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="theme-text text-h4 mb-4 font-medium group-hover:opacity-70 transition-opacity duration-300">
                  {project.title}
                </h3>
              </Link>

              <div className="text-caption mb-6 leading-relaxed">
                {project.categories.map((category, idx) => (
                  <span key={idx}>
                    <Link
                      href={category.link}
                      className="theme-text opacity-60 inline-block relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                      aria-label={`View all projects in the ${category.name} category`}
                    >
                      {category.name}
                    </Link>
                    {idx < project.categories.length - 1 && <span className="theme-text opacity-60 mx-2">,</span>}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <PillButton href={`/projects/${project.slug}`} ariaLabel={`View project: ${project.title}`}>
                View project
              </PillButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
