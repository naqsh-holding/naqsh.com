"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.from(navRef.current?.children || [], {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.5,
    })
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
      <Link href="/" className="text-2xl font-light">
        NAQSH
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-light">
        <Link href="#" className="hover:opacity-70 transition-opacity">
          HOME
        </Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">
          ABOUT
        </Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">
          CONTACT
        </Link>
      </div>
    </nav>
  )
}
