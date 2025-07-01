"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, Phone } from "lucide-react"
import Navigation from "@/app/components/layout/Navigation"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface NewsArticleClientProps {
  article: {
    id: number
    title: string
    subtitle: string
    category: string
    author: string
    date: string
    readTime: string
    heroImage: string
    content: Array<{
      type: string
      text?: string
      items?: string[]
    }>
  }
  slug: string
}

export default function NewsArticleClient({ article, slug }: NewsArticleClientProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const pageTopRef = useRef<HTMLDivElement>(null)
  const contentEndRef = useRef<HTMLDivElement>(null)

  // Aggressive scroll to top function
  const forceScrollToTop = () => {
    // Multiple methods to ensure scroll to top works
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: "instant", block: "start" })
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Force the page to the absolute top
    if (window.pageYOffset !== 0) {
      window.scrollTo(0, 0)
    }
  }

  // Effect to handle initial page load and route changes
  useEffect(() => {
    // Disable browser scroll restoration immediately
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    // Force scroll to top immediately
    forceScrollToTop()

    // Kill all existing ScrollTrigger instances to prevent interference
    ScrollTrigger.killAll()

    // Multiple aggressive scroll resets
    const scrollResets = [
      setTimeout(forceScrollToTop, 0),
      setTimeout(forceScrollToTop, 1),
      setTimeout(forceScrollToTop, 10),
      setTimeout(forceScrollToTop, 50),
      setTimeout(forceScrollToTop, 100),
      setTimeout(forceScrollToTop, 200),
    ]

    // Start animations only after ensuring scroll position is at top
    const animationTimer = setTimeout(() => {
      // Double-check scroll position before starting animations
      forceScrollToTop()

      const ctx = gsap.context(() => {
        // Refresh ScrollTrigger after scroll position is set
        ScrollTrigger.refresh()

        // Hero image animation
        if (heroRef.current) {
          gsap.from(heroRef.current, {
            scale: 1.1,
            duration: 1.5,
            ease: "power3.out",
          })
        }

        // Title section animation
        if (titleRef.current) {
          gsap.from(titleRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.3,
          })
        }

        // Content sections animation on scroll
        gsap.from(".content-section", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-sections",
            start: "top center+=100",
            end: "bottom center",
            refreshPriority: -1,
          },
        })

        // Image scroll effect when content ends
        if (heroRef.current && contentEndRef.current) {
          ScrollTrigger.create({
            trigger: contentEndRef.current,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              if (heroRef.current) {
                const progress = self.progress
                gsap.set(heroRef.current, {
                  y: -progress * window.innerHeight,
                })
              }
            },
          })
        }
      })

      return () => ctx.revert()
    }, 300)

    return () => {
      scrollResets.forEach((timeout) => clearTimeout(timeout))
      clearTimeout(animationTimer)
    }
  }, [article, slug])

  // Additional effect for route changes
  useEffect(() => {
    forceScrollToTop()

    // Additional resets for route changes
    const routeScrollResets = [
      setTimeout(forceScrollToTop, 0),
      setTimeout(forceScrollToTop, 50),
      setTimeout(forceScrollToTop, 100),
    ]

    return () => {
      routeScrollResets.forEach((timeout) => clearTimeout(timeout))
    }
  }, [slug])

  // Effect to handle any scroll events that might interfere
  useEffect(() => {
    const handleScroll = () => {
      // If somehow the page gets scrolled during initial load, force it back to top
      if (window.pageYOffset > 0 && Date.now() - (window as any).pageLoadTime < 1000) {
        forceScrollToTop()
      }
    }

    // Mark page load time
    ;(window as any).pageLoadTime = Date.now()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={pageTopRef} className="bg-white min-h-screen">
      <Navigation forceStyle="dark-transparent" />

      {/* Article Content Container */}
      <div className="relative">
        {/* Fixed Left Panel - Hero Image (50% width) - Desktop only */}
        <div className="fixed left-0 top-0 w-1/2 h-screen z-10 hidden lg:block">
          <div ref={heroRef} className="relative w-full h-full overflow-hidden">
            <Image
              src={article.heroImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>
        </div>

        {/* Right Panel - Content (50% width on desktop, full width on mobile) */}
        <div className="lg:ml-[50%] lg:w-[50%] w-full">
          {/* Initial Title Section - Visible in viewport */}
          <div className="min-h-screen flex flex-col justify-center lg:pl-12 lg:pr-4 px-4 py-16">
            <div ref={titleRef} className="max-w-2xl">
              {/* Mobile Hero Image */}
              <div className="lg:hidden relative h-64 mb-8 -mx-4">
                <Image
                  src={article.heroImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Article metadata */}
              <div className="flex justify-end mb-8">
                <div className="text-sm text-gray-500">{article.readTime.toUpperCase()}</div>
              </div>

              {/* Category */}
              <div className="mb-8">
                <span className="text-caption text-gray-500 tracking-wider">({article.category})</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight mb-8 text-black uppercase tracking-tight">
                {article.title}
              </h1>

              {/* Subtitle */}
              <p className="text-body leading-relaxed text-gray-700 mb-12">{article.subtitle}</p>

              {/* Date */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>

          {/* Scrollable Content Sections */}
          <div className="content-sections lg:pl-12 lg:pr-4 px-4 pb-16">
            {article.content.map((block, index) => (
              <div key={index} className="content-section mb-16">
                {block.type === "heading" && (
                  <h2 className="text-2xl lg:text-3xl font-medium mb-8 text-black">{block.text}</h2>
                )}
                {block.type === "paragraph" && (
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">{block.text}</p>
                )}
                {block.type === "list" && (
                  <div className="mb-8">
                    <ol className="space-y-6">
                      {block.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex">
                          <span className="text-lg font-medium text-black mr-4 flex-shrink-0">{itemIndex + 1}.</span>
                          <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}

            {/* Content End Marker */}
            <div ref={contentEndRef} className="h-px"></div>
          </div>
        </div>
      </div>

      {/* Footer - Full Width, positioned above fixed panel */}
      <div className="relative z-40 w-full">
        <footer className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="border-t border-white/10 pt-12 lg:pt-16 mb-12 lg:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <Link href="/" className="inline-block mb-4" aria-label="Naqsh Home">
                    <Image
                      src="/images/naqsh-white-logo.png"
                      alt="Naqsh Logo"
                      width={135}
                      height={45}
                      className="h-9 w-auto"
                    />
                  </Link>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Crafting unique brand identities and immersive digital experiences that resonate and inspire.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-white">Explore</h3>
                  <ul className="space-y-2.5">
                    <li><Link href="/#about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">About</Link></li>
                    <li><Link href="/#services" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">Services</Link></li>
                    <li><Link href="/#projects" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">Work</Link></li>
                    <li><Link href="/#news" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">News</Link></li>
                    <li><Link href="/#contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">Contact</Link></li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-white">Legal</h3>
                  <ul className="space-y-2.5">
                    <li><Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">Terms of Service</Link></li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-white">Connect</h3>
                  <ul className="space-y-2.5 mb-6">
                    <li>
                      <a href="mailto:contact@naqsh.com.sa" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">
                        contact@naqsh.com.sa
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-white/70" />
                        <a href="tel:0535558889" className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline">
                          0535558889
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 pt-8 lg:pt-10">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-xs text-white/60">© {new Date().getFullYear()} Naqsh FZ LLC. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
} 