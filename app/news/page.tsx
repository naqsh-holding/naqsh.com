"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getAllNews } from "../lib/data/news"
import ReadMoreButton from "../components/ui/ReadMoreButton" // This button needs dark theme adaptation
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function NewsPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  const allNews = getAllNews()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        })
      }
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: index * 0.1,
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
    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white pt-[80px] dark-theme" data-page="news" style={{ backgroundColor: 'black', color: 'white' }}>
      <Navigation forceStyle="transparent" />

      <section ref={sectionRef} className="pt-24 pb-16 bg-black text-white relative z-10">
        <div className="container mx-auto px-6">
          <div ref={headerRef} className="mb-16">
            <div className="mb-6">
              <h1 className="text-caption font-medium text-white/60 tracking-wider mb-6">ALL NEWS</h1>
              <h2 className="text-h2 font-medium text-white max-w-4xl leading-tight">
                Stay updated with the latest developments, announcements, and insights from Naqsh Holding and our
                subsidiaries.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((item, index) => (
              <div key={item.id} ref={(el) => { itemsRef.current[index] = el }} className="group">
                <div className="block focus:outline-none">
                  {/* Image section */}
                  <div className="relative overflow-hidden mb-6">
                    {/* Date badge */}
                    <div className="absolute top-0 left-0 z-10 bg-black/50 backdrop-blur-sm p-4">
                      <div className="text-2xl font-bold text-white">{item.day}</div>
                      <div className="text-sm text-white/80">{item.month}</div>
                    </div>

                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-h4 mb-4 font-medium group-hover:text-white/80 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Optional excerpt */}
                  {item.excerpt && (
                    <p className="text-white/70 text-body mb-4 leading-relaxed">{item.excerpt}</p>
                  )}

                  {/* Category list – render as plain text to avoid nested <a> */}
                  <div className="text-caption mb-6 leading-relaxed text-white/50">
                    {item.categories.map((category, idx) => (
                      <span key={idx}>
                        {category.name}
                        {idx < item.categories.length - 1 && <span className="mx-2">,</span>}
                      </span>
                    ))}
                  </div>

                  {/* Read-more button as a link */}
                  <Link 
                    href={`/news/${item.slug}`} 
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-300 mt-2"
                    style={{ color: 'black' }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
