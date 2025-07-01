"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"
import { allProjects } from "../lib/data/projects"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProjectsPageClientProps {
  allProjects: typeof allProjects
}

export default function ProjectsPageClient({ allProjects }: ProjectsPageClientProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        })
      }
      gsap.from(".project-card", {
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

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <main className="bg-black text-white transition-colors duration-1000 dark-theme" data-page="projects" style={{ backgroundColor: 'black', color: 'white' }}>
      <Navigation forceStyle="transparent" />

      <section ref={sectionRef} className="py-32 bg-black text-white relative z-10 overflow-hidden" style={{ backgroundColor: 'black', color: 'white' }}>
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="mb-16">
            <div className="mb-6">
              <h1 className="text-caption font-medium text-white/60 tracking-wider mb-6">ALL PROJECTS</h1>
              <h2 className="text-h2 font-medium text-white max-w-4xl leading-tight">
                Explore our diverse portfolio of successful projects across technology, business incubation, marketing, real estate, and aviation sectors.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProjects.map((project) => (
              <div key={project.id} className="project-card group relative">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:translate-x-2"
                      />
                    </div>
                    <h3 className="text-white text-h4 font-medium mb-2 transition-colors duration-300 group-hover:text-white/70" style={{ color: 'white' }}>
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-caption group-hover:text-white/70 transition-opacity duration-300" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                      {project.category}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 