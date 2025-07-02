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
          company: "Efficiency Center",
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
          company: "6 Degrees Technologies",
          tags: [
            "Progressive Web App",
            "Arabic Language Support",
            "UI/UX Design",
            "Content Management",
            "Performance Optimization",
          ],
        }
      case "environmental-circular-economy-forum-2023":
        return {
          breadcrumb: "Environmental Forum",
          challenge:
            "Deliver a dynamic, large-scale forum that fosters collaboration and knowledge exchange on environmental sustainability and the circular economy, while showcasing Saudi Aramco's leadership and commitment to a greener future.",
          approach:
            "Promotion Efficiency managed the project end-to-end for over 1,000 visitors across three days, including: developing the full brand identity; designing the event space and booths; producing print materials (certificates, agendas, promotional items); creating a custom web app for registration and navigation; planning and executing marketing, invitations, signage, and livestream support; organizing workshops and hospitality; and coordinating media coverage and crowd management (photography/videography).",
          duration: "3 days",
          type: "Event Management",
          company: "Promotion Efficiency",
          tags: [
            "Event Management",
            "Brand Identity",
            "Web Development",
            "Print Design",
            "Marketing Strategy",
            "Workshop Organization",
            "Media Coverage",
            "Smart Cards"
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
          company: "Burooj",
          tags: [
            "Interior Design",
            "Custom Furniture",
            "Equipment Installation",
            "IT Infrastructure",
            "Building Automation",
            "Access Control",
          ],
        }
      case "burooj-air-drone-cleaning-altamimi-building":
        return {
          breadcrumb: "Burooj Air",
          challenge:
            "Cleaning hard-to-reach glass facades safely and efficiently, with no need for scaffolding or manual access.",
          approach:
            "Using advanced aerial technology, our team was able to clean hard-to-reach glass facades safely and efficiently, with no need for scaffolding or manual access. The before-and-after transformation speaks for itself — a clear testament to the quality and effectiveness of our solutions.",
          duration: "260 minutes",
          type: "Drone Cleaning Service",
          company: "Burooj Air",
          tags: [
            "Drone Cleaning",
            "Innovation",
            "Building Maintenance",
            "Aerial Technology",
            "Burooj Air",
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
          company: "6 Degrees Technologies",
          tags: ["Concept", "UI/UX", "Digital Design", "Icon Design", "Motion Prototype"],
        }
    }
  }

  const content = getProjectContent()

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      <Navigation forceStyle="dark-transparent" />

      {/* Main Content */}
      <main className="container mx-auto  pt-24 pb-24">
        {/* Breadcrumb */}
        <div ref={breadcrumbRef} className="mb-6 opacity-0 pt-8">
          <nav className="text-gray-500 text-sm font-light">
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
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-12 max-w-4xl opacity-0 text-black pt-8"
        >
          {project.title}
        </h1>

        {/* Hero Image or Video */}
        <div ref={heroRef} className="relative mb-20 opacity-0">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
            {slug === "burooj-air-drone-cleaning-altamimi-building" ? (
              <video
                src="/videos/AlTamimi.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
                poster={project.heroImage || "/placeholder.svg?height=800&width=400"}
              />
            ) : (
              <img
                                  src={project.heroImage || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg?height=800&width=400"}
                alt={project.sections[0].content.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Project Details Section */}
        <section ref={detailsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 opacity-0">
          {/* Left Column - Challenge & Approach */}
          <div className="space-y-8">
            {/* Challenge */}
            <div>
              <h2 className="text-lg font-medium text-gray-500 mb-4">Challenge</h2>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-black">{content.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-lg font-medium text-gray-500 mb-4">Approach</h2>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-black">{content.approach}</p>
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-8">
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

            {/* Type & Company Row */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Type</h3>
                <p className="text-2xl font-medium text-black">{content.type}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Company</h3>
                <p className="text-2xl font-medium text-black">{content.company}</p>
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
        {slug !== "burooj-air-drone-cleaning-altamimi-building" && project.imageGroups &&
          project.imageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={groupIndex < project.imageGroups!.length - 1 ? "mb-12" : ""}>
              {/* Image Group */}
              <section ref={(el) => { imageGroupsRef.current[groupIndex] = el }} className="mb-4 opacity-0">
                <div className="space-y-6">
                  {/* First image - full width */}
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                                              src={group.images[0]?.src || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                      alt={group.images[0]?.alt || ""}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Second and third images - side by side */}
                  {group.images.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {group.images.slice(1).map((image, imageIndex) => (
                        <div key={imageIndex + 1} className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                          <img
                            src={image.src || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              {/* Description Text */}
              <section className="mb-4">
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
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={project.desktopImage || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                  alt={
                    slug === "keeta-khobar-launch-event"
                      ? "Keeta Khobar launch event team celebration with branded displays"
                      : slug === "creative-nexus-digital-platform"
                        ? "AlSharqiya Gets Creative PWA interface displayed on mobile device with purple gradient background"
                        : slug === "environmental-circular-economy-forum-2023"
                          ? "Environmental Forum 2023 comprehensive brand application including promotional materials, digital kiosk, and wayfinding signage"
                          : "Zesty desktop chat interface showing conversation flow"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          )}

        {/* Design Rationale Section - Only for projects with rationale */}
        {!project.imageGroups && project.designRationale && (
          <section ref={rationaleRef} className="mb-16 opacity-0">
            <div className="w-full">
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-black">{project.designRationale}</p>
            </div>
          </section>
        )}

        {/* Final Design Rationale Section - For projects with image groups and rationale */}
        {project.imageGroups && project.designRationale && (
          <section ref={rationaleRef} className="mb-16 opacity-0">
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