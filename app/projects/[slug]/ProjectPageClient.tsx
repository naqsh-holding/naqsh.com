"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "@/app/components/layout/Navigation"
import Footer from "@/app/components/sections/Footer"
import Link from "next/link"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Type definitions for project data
interface ProjectDataItem {
  category: string
  title: string
  heroImage: string
  desktopImage?: string
  imageGroups?: {
    images: { src: string; alt: string }[]
    description: string
  }[]
  description: string
  year: string
  client: string
  services: string[]
  designRationale: string
  sections: { type: string; content: { image: string; alt: string } }[]
}

interface ProjectPageClientProps {
  project: ProjectDataItem
  slug: string
}

export default function ProjectPageClient({ project, slug }: ProjectPageClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const breadcrumbRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLElement>(null)
  const imageGroupsRef = useRef<(HTMLElement | null)[]>([])
  const rationaleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set light theme for project pages
    document.documentElement.classList.remove("dark-theme")
    document.documentElement.classList.add("light-theme")

    // Reset scroll position
    window.scrollTo(0, 0)

    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Check if elements exist before animating
        const elements = [
          breadcrumbRef.current,
          titleRef.current,
          heroRef.current,
          detailsRef.current,
          ...imageGroupsRef.current.filter(Boolean),
          rationaleRef.current,
        ].filter(Boolean)

        if (elements.length === 0) return

        // Set initial state only for existing elements
        elements.forEach((element) => {
          if (element) {
            gsap.set(element, {
              opacity: 0,
              y: 30,
            })
          }
        })

        // Animate elements in sequence
        const tl = gsap.timeline({ delay: 0.2 })

        if (breadcrumbRef.current) {
          tl.to(breadcrumbRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          })
        }

        if (titleRef.current) {
          tl.to(
            titleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6",
          )
        }

        if (heroRef.current) {
          tl.to(
            heroRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.4",
          )
        }

        if (detailsRef.current) {
          tl.to(
            detailsRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6",
          )
        }

        // Add scroll-triggered animations for image groups
        imageGroupsRef.current.forEach((groupRef, index) => {
          if (groupRef) {
            gsap.set(groupRef, { opacity: 0, y: 50 })

            ScrollTrigger.create({
              trigger: groupRef,
              start: "top 80%",
              onEnter: () => {
                gsap.to(groupRef, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                })
              },
            })
          }
        })

        // Add scroll-triggered animation for rationale section
        if (rationaleRef.current) {
          gsap.set(rationaleRef.current, { opacity: 0, y: 50 })

          ScrollTrigger.create({
            trigger: rationaleRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.to(rationaleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
              })
            },
          })
        }
      }, containerRef)

      return () => ctx.revert()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Helper function to get project-specific content
  const getProjectContent = () => {
    switch (slug) {
      case "keeta-khobar-launch-event":
        return {
          breadcrumb: "Keeta",
          challenge:
            "Launching a new delivery service in a competitive market requires creating immediate brand awareness and community connection. We needed to design an outdoor advertising campaign that would capture attention, communicate Keeta's value proposition, and establish a strong local presence in Khobar from day one.",
          approach:
            "We developed a bold visual identity centered around vibrant yellow branding and local community elements. The campaign featured large-scale outdoor billboards strategically placed in high-traffic areas, incorporating the Dammam city skyline to create local relevance and the 'Keeta together, winners forever' message to build community connection.",
          duration: "6 weeks",
          type: "Outdoor Campaign",
          industry: "Food Delivery",
          tags: [
            "Brand Strategy",
            "Outdoor Advertising",
            "Visual Design",
            "Campaign Management",
            "Local Market Research",
          ],
        }
      case "creative-nexus-digital-platform":
        return {
          breadcrumb: "AlSharqiya PWA",
          challenge:
            "AlSharqiya Gets Creative needed a digital platform that would match the innovative spirit of their cultural center. The challenge was to create a Progressive Web Application that could showcase diverse creative works, facilitate community engagement, and provide seamless access to cultural events while maintaining the architectural elegance of the physical space and supporting Arabic language users.",
          approach:
            "We developed a comprehensive PWA strategy focusing on Progressive Web App technology to ensure optimal performance across all devices. The platform architecture was designed to handle multimedia content, event management, and community features while reflecting the center's commitment to innovation and creativity through intuitive user experience design. The app features Arabic language support, offline capabilities, and a cohesive purple brand theme.",
          duration: "12 weeks",
          type: "Progressive Web App",
          industry: "Arts & Culture",
          tags: [
            "Progressive Web App",
            "Arabic Language Support",
            "UI/UX Design",
            "Content Management",
            "Performance Optimization",
          ],
        }
      case "environmental-forum-2023":
        return {
          breadcrumb: "Environmental Forum",
          challenge:
            "The Environmental and Circular Economy Forum 2023 needed a comprehensive visual identity and brand system that would effectively communicate environmental sustainability across multiple touchpoints. The challenge was to create a cohesive brand experience that would work seamlessly across outdoor advertising, digital displays, promotional materials, and wayfinding signage while maintaining strong environmental messaging.",
          approach:
            "We developed a comprehensive brand system centered around environmental iconography and a vibrant green color palette. The design strategy focused on creating a modular visual language that could be applied consistently across all touchpoints - from large-scale billboards to promotional materials and digital kiosks. We incorporated sustainable practices into the promotional materials themselves, including eco-friendly 'Deets' cards, and ensured clear wayfinding through branded entrance signage.",
          duration: "8 weeks",
          type: "Event Campaign",
          industry: "Environmental & Sustainability",
          tags: [
            "Brand System",
            "Visual Identity",
            "Outdoor Advertising",
            "Digital Display Design",
            "Sustainable Materials",
            "Wayfinding & Signage",
          ],
        }
      case "gdc-middle-east-fitout":
        return {
          breadcrumb: "GDC Fit-Out",
          challenge:
            "GDC Middle East required a comprehensive fit-out solution for their new 2,437 square meter Riyadh office that would reflect their corporate identity while providing a functional, modern workspace. The challenge was to deliver a complete end-to-end solution including design, custom furniture, advanced technology infrastructure, and building automation systems within a tight 16-week timeline while maintaining the highest quality standards.",
          approach:
            "We implemented a refined industrial-modern design approach that seamlessly blends aesthetics with functionality. Our comprehensive strategy included custom furniture design and production, advanced equipment installation, complete IT infrastructure implementation, full building automation, and state-of-the-art access control systems. The project showcased efficient execution through innovative approaches and meticulous attention to detail, creating diverse functional spaces from reception and conference areas to recreational zones and specialized studios.",
          duration: "16 weeks",
          type: "Commercial Fit-Out",
          industry: "Corporate Real Estate",
          tags: [
            "Interior Design",
            "Custom Furniture",
            "Equipment Installation",
            "IT Infrastructure",
            "Building Automation",
            "Access Control",
          ],
        }
      case "altamimi-group-building-cleaning":
        return {
          breadcrumb: "Altamimi Cleaning",
          challenge:
            "The Altamimi Group required a safe, efficient, and cost-effective solution for cleaning their modern commercial building's complex geometric facade. Traditional cleaning methods would require extensive scaffolding, rope access, or cherry pickers, creating safety risks, operational disruptions, and significant costs. The challenge was to deliver thorough cleaning of 1,200 square meters of intricate facade design while minimizing downtime and ensuring worker safety.",
          approach:
            "Burooj Air deployed advanced drone technology specifically designed for building cleaning operations. Our approach utilized 2 specialized cleaning drones equipped with precision spray systems and high-resolution cameras for quality control. The operation was meticulously planned using 3D building mapping and flight path optimization to ensure complete coverage of the geometric facade patterns. Our team executed the cleaning in a systematic approach, completing the entire 1,200m² area in just 260 minutes while maintaining the highest safety and quality standards.",
          duration: "260 minutes",
          type: "Drone Cleaning Service",
          industry: "Building Maintenance",
          tags: [
            "Advanced Drone Operations",
            "Facade Cleaning Technology",
            "3D Building Mapping",
            "Flight Path Optimization",
            "Quality Control Systems",
            "Safety Management",
          ],
        }
      default:
        return {
          breadcrumb: "Zesty",
          challenge:
            "The internet is overwhelming and everything it's dictated by appearance and who you are. I wanted to bring back the feeling of early 2000s chat rooms, anonymous and fun, but with a twist. No user names, no likes, no photos and the chats reset every 10 minutes to keep things fresh and engaging.",
          approach:
            "I started this project by mapping out a simple sitemap, then jumped straight into UI and micro-interactions, since this is a concept project I didn't do much research besides what I liked and what I wanted for this project. It's always refreshing to work on something on my own and make all the design decisions along the way and I loved how the lemon mascot, Zesty, turned out.",
          duration: "9 weeks",
          type: "Mobile",
          industry: "Messaging",
          tags: ["Concept", "UI/UX", "Digital Design", "Icon Design", "Motion Prototype"],
        }
    }
  }

  const content = getProjectContent()

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      <Navigation forceStyle="dark-transparent" />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-32">
        {/* Breadcrumb */}
        <div ref={breadcrumbRef} className="mb-8 opacity-0">
          <nav className="text-gray-500 text-lg font-light">
            <Link href="/" className="hover:text-black transition-colors">
              {project.category}
            </Link>
            <span className="mx-1">/</span>
            <span className="text-black font-medium">{content.breadcrumb}</span>
          </nav>
        </div>

        {/* Project Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16 max-w-4xl opacity-0 text-black"
        >
          {project.title}
        </h1>

        {/* Hero Image */}
        <div ref={heroRef} className="relative mb-32 opacity-0">
          <div className="w-full">
            <img
              src={project.heroImage || "/placeholder.svg?height=800&width=400"}
              alt={project.sections[0].content.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Details Section */}
        <section ref={detailsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 opacity-0">
          {/* Left Column - Challenge & Approach */}
          <div className="space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-lg font-medium text-gray-500 mb-4">Challenge</h2>
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-black">{content.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-lg font-medium text-gray-500 mb-4">Approach</h2>
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-black">{content.approach}</p>
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-12">
            {/* Client */}
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-2">Client</h3>
              <p className="text-2xl font-medium text-black">{project.client}</p>
            </div>

            {/* Year & Duration Row */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Year</h3>
                <p className="text-2xl font-medium text-black">{project.year}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Duration</h3>
                <p className="text-2xl font-medium text-black">{content.duration}</p>
              </div>
            </div>

            {/* Type & Industry Row */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Type</h3>
                <p className="text-2xl font-medium text-black">{content.type}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Industry</h3>
                <p className="text-2xl font-medium text-black">{content.industry}</p>
              </div>
            </div>

            {/* Project Tags */}
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-4">Project Tags</h3>
              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Groups with Descriptions - For projects with multiple images */}
        {project.imageGroups &&
          project.imageGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Image Group */}
              <section ref={(el) => { imageGroupsRef.current[groupIndex] = el }} className="mb-12 opacity-0">
                <div className="space-y-8">
                  {/* First image - full width */}
                  <div className="w-full">
                    <img
                      src={group.images[0]?.src || "/placeholder.svg"}
                      alt={group.images[0]?.alt || ""}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Second and third images - side by side */}
                  {group.images.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {group.images.slice(1).map((image, imageIndex) => (
                        <div key={imageIndex + 1} className="w-full">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              {/* Description Text */}
              <section className="mb-32">
                <div className="w-full">
                  <p className="text-xl lg:text-2xl font-light leading-relaxed text-black">{group.description}</p>
                </div>
              </section>
            </div>
          ))}

        {/* Single Additional Image Section - For other projects */}
        {project.desktopImage &&
          project.desktopImage !== "/placeholder.svg?height=600&width=1200" &&
          !project.imageGroups && (
            <section ref={(el) => { imageGroupsRef.current[0] = el }} className="mb-12 opacity-0">
              <div className="w-full">
                <img
                  src={project.desktopImage || "/placeholder.svg"}
                  alt={
                    slug === "keeta-khobar-launch-event"
                      ? "Keeta Khobar launch event team celebration with branded displays"
                      : slug === "creative-nexus-digital-platform"
                        ? "AlSharqiya Gets Creative PWA interface displayed on mobile device with purple gradient background"
                        : slug === "environmental-forum-2023"
                          ? "Environmental Forum 2023 comprehensive brand application including promotional materials, digital kiosk, and wayfinding signage"
                          : "Zesty desktop chat interface showing conversation flow"
                  }
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>
          )}

        {/* Design Rationale Section - Only for projects with rationale */}
        {!project.imageGroups && project.designRationale && (
          <section ref={rationaleRef} className="mb-20 opacity-0">
            <div className="w-full">
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-black">{project.designRationale}</p>
            </div>
          </section>
        )}

        {/* Final Design Rationale Section - For projects with image groups and rationale */}
        {project.imageGroups && project.designRationale && (
          <section ref={rationaleRef} className="mb-20 opacity-0">
            <div className="w-full">
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-black">{project.designRationale}</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 