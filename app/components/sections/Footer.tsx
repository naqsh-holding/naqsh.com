"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Linkedin, Instagram, Phone, Mail } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const footerCols = footerRef.current?.querySelectorAll(".footer-col")
      if (footerCols) {
        gsap.from(footerCols, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        })
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "About", href: "/#about" },
    { name: "Companies", href: "/#companies" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "News", href: "/#news" },
    { name: "Brands", href: "/#brands" },
    { name: "Contact", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/naqshco/",
      icon: Linkedin,
      ariaLabel: "Naqsh Holding Company on LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:contact@naqsh.com.sa",
      icon: Mail,
      ariaLabel: "Contact Naqsh Holding Company via email",
    },
    {
      name: "Phone",
      href: "tel:0535558889",
      icon: Phone,
      ariaLabel: "Call Naqsh Holding Company",
    },
  ]

  return (
    <footer ref={footerRef} className="bg-black text-white py-16 lg:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-12 lg:pt-16 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1 footer-col">
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
                To Leave a Trace - Naqsh Holding Company is an investment leader with diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors.
              </p>
            </div>

            {/* Navigation */}
            <div className="footer-col">
              <h3 className="text-lg font-medium mb-4 text-white">Explore</h3>
              <ul className="space-y-2.5">
                {navigationLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h3 className="text-lg font-medium mb-4 text-white">Legal</h3>
              <ul className="space-y-2.5">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-col">
              <h3 className="text-lg font-medium mb-4 text-white">Connect</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target={social.name === "LinkedIn" ? "_blank" : undefined}
                    rel={social.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon className="w-4 h-4 text-white/80 group-hover:text-white" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 lg:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xs text-white/60">© {currentYear} Naqsh. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
