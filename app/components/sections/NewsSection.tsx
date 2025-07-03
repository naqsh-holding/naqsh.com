"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { PillButton } from "../ui/PillButton" // Ensure this import is correct
import { getFeaturedNews } from "../../lib/data/news"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface NewsItem {
  id: number
  day: string
  month: string
  image: string
  title: string
  categories: { name: string; link: string }[]
  slug: string
}

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)
  
  const newsItems = getFeaturedNews()

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

      // Animate news items
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
    <section ref={sectionRef} id="news" className="py-16 md:py-24 lg:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div ref={headerRef} className="mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-4 md:mb-6">
            <div>
              <h2 className="text-caption font-medium theme-text opacity-60 tracking-wider mb-4 md:mb-6">LATEST NEWS</h2>
              <h3 className="text-h4 md:text-h3 font-medium theme-text max-w-4xl leading-tight">
                Discover the latest updates, launches, and milestones from Naqsh Holding and our leading subsidiaries.
              </h3>
            </div>
            <PillButton 
              href="/news"
              className="whitespace-nowrap self-start md:self-auto"
            >
              See all news
            </PillButton>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <div key={item.id} ref={(el) => { itemsRef.current[index] = el }} className="group">
              <Link href={`/news/${item.slug}`} aria-label={`Read full article: ${item.title}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden mb-4 md:mb-6">
                  {/* Date Block */}
                  <div className="absolute top-0 left-0 z-10 bg-white p-3 md:p-4">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-black">{item.day}</div>
                    <div className="text-xs md:text-sm text-black">{item.month}</div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image || "https://hel1.your-objectstorage.com/naqsh-pord/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                      quality={60}
                      unoptimized={true}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="theme-text text-h4 md:text-h4 mb-3 md:mb-4 font-medium group-hover:opacity-70 transition-opacity duration-300">
                  {item.title}
                </h3>
              </Link>

              <div className="text-caption mb-4 md:mb-6 leading-relaxed">
                {item.categories.map((category, idx) => (
                  <span key={idx}>
                    <Link
                      href={category.link}
                      className="theme-text opacity-60 inline-block relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                      aria-label={`View all news in the ${category.name} category`}
                    >
                      {category.name}
                    </Link>
                    {idx < item.categories.length - 1 && <span className="theme-text opacity-60 mx-2">,</span>}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <PillButton href={`/news/${item.slug}`} ariaLabel={`Read full article: ${item.title}`}>
                Read full article
              </PillButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
