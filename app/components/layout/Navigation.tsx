"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react" // Removed ArrowRight as PillButton handles its own icon
import { PillButton } from "../ui/PillButton" // Import the new button

interface NavigationProps {
  forceTheme?: "light" | "dark"
  forceStyle?: "black" | "white" | "transparent" | "dark-transparent"
  isFixed?: boolean
}

export default function Navigation({ forceTheme, forceStyle, isFixed = true }: NavigationProps = {}) {
  const navRef = useRef<HTMLElement>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations for nav items (runs once on mount)
    // Temporarily disabled GSAP animation for debugging
    // if (navRef.current) {
    //   const navElements = Array.from(navRef.current.children[0]?.children || []) // Target children of the container div
    //   gsap.from(navElements, {
    //     opacity: 0,
    //     y: -20,
    //     duration: 0.8,
    //     stagger: 0.1,
    //     ease: "power2.out",
    //     delay: 0.5, // Initial delay for the animation
    //   })
    // }

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect()
        if (e.clientY <= navRect.bottom + 20) {
          // Added some buffer for cursor visibility
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          })
        } else {
          gsap.to(cursorRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
          })
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: isMenuOpen ? "0%" : "100%",
        duration: 0.5,
        ease: isMenuOpen ? "power3.out" : "power3.in",
      })
    }
  }, [isMenuOpen])

  const handleLinkHover = (link: string) => {
    setHoveredLink(link)
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const handleLinkLeave = () => {
    setHoveredLink(null)
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const getNavbarStyling = () => {
    // Handle forced styles first
    if (forceStyle === "dark-transparent") {
      return {
        logo: "/naqsh-black.png",
        textColor: "text-black",
        menuBg: "bg-white",
        menuText: "text-black",
        navBg: "bg-transparent",
      }
    }

    if (forceStyle === "black") {
      return {
        logo: "/naqsh-white.png",
        textColor: "text-white",
        menuBg: "bg-black",
        menuText: "text-white",
        navBg: "bg-black/95 backdrop-blur-md",
      }
    }

    if (forceStyle === "white") {
      return {
        logo: "/naqsh-black.png",
        textColor: "text-black",
        menuBg: "bg-white",
        menuText: "text-black",
        navBg: "bg-white",
      }
    }

    // Default transparent style (for hero sections)
    return {
      logo: "/naqsh-white.png",
      textColor: "text-white",
      menuBg: "bg-black",
      menuText: "text-white",
      navBg: "bg-transparent",
    }
  }

  const styling = getNavbarStyling()

  return (
    <>
      <nav
        ref={navRef}
        className={`${isFixed ? 'fixed top-0 left-0 right-0' : 'relative'} z-[9999] py-6 transition-colors duration-300 ${styling.navBg} border-b border-white/20 shadow-lg`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded" aria-label="Naqsh Holding Company Home">
            <Image
              src={styling.logo || "/naqsh-white.png"}
              alt="Naqsh Holding Company Logo"
              width={140}
              height={50}
              className="h-10 w-auto transition-opacity duration-300 opacity-100"
              priority
              unoptimized={true}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-white font-bold text-xl">NAQSH</div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Primary navigation menu">
            {[
              { label: "ABOUT", href: "/#about" },
              { label: "SERVICES", href: "/#services" },
              { label: "NEWS", href: "/news" },
              { label: "PROJECTS", href: "/#projects" }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-light ${styling.textColor} hover:opacity-70 focus:opacity-70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded transition-all duration-300 relative opacity-100`}
                onMouseEnter={() => handleLinkHover(link.label)}
                onMouseLeave={handleLinkLeave}
                aria-label={`Navigate to ${link.label.toLowerCase()} section`}
                tabIndex={0}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                    hoveredLink === link.label ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                ></span>
              </Link>
            ))}
            <PillButton
              href="/contact"
              variant={styling.textColor === "text-white" ? "light" : "dark"}
              ariaLabel="Contact us - Get in touch"
            >
              GET IN TOUCH
            </PillButton>
          </div>

          <button
            className={`${styling.textColor} lg:hidden z-50 opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded p-1`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`fixed top-0 right-0 w-full h-full ${styling.menuBg} transform translate-x-full lg:hidden z-40 transition-transform duration-500 ease-in-out`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {[
              { label: "ABOUT", href: "/#about" },
              { label: "SERVICES", href: "/#services" },
              { label: "NEWS", href: "/news" },
              { label: "PROJECTS", href: "/#projects" }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-2xl font-light hover:opacity-70 transition-opacity ${styling.menuText}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PillButton
              href="/contact"
              variant={styling.menuText === "text-white" ? "light" : "dark"}
              onClick={() => setIsMenuOpen(false)}
              ariaLabel="Get in touch"
            >
              GET IN TOUCH
            </PillButton>
          </div>
        </div>
      </nav>

      {/* Cursor Element */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-12 h-12 rounded-full bg-gray-300 bg-opacity-50 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: "-100px", top: "-100px" }} // Initially hidden
      ></div>
    </>
  )
}
