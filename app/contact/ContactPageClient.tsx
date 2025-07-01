"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"
import { MapPin } from "lucide-react"

// Google Maps API type declarations
declare global {
  interface Window {
    google: any
  }
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactPageClient() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

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
      gsap.from(".contact-card", {
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
    <main className="bg-black text-white transition-colors duration-1000" data-page="contact">
      <Navigation forceStyle="black" />

      <section
        ref={sectionRef}
        className="py-32 bg-black text-white relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div ref={titleRef} className="mb-16">
            <p className="text-sm uppercase tracking-wider text-white/60 mb-4">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              Get in touch with Naqsh Holding Company.<br className="hidden md:block" /> We're here to help you explore opportunities and build lasting partnerships.
            </h2>
          </div>

          {/* Map Section */}
          <div className="contact-card w-full max-w-7xl h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/20 bg-gray-800 mx-auto mb-16">
            <iframe 
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=26.307625,50.2217074&zoom=17" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
  <hr className="border-white/10 mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-white text-sm">
            <div className="contact-card">
              <h3 className="text-base font-semibold mb-3">Phone</h3>
              <a href="tel:+966535558889" className="text-white/70 hover:text-white transition-colors">
                +966 53 555 8889
              </a>
            </div>

            <div className="contact-card">
              <h3 className="text-base font-semibold mb-3">Email</h3>
              <a href="mailto:contact@naqsh.com.sa" className="text-white/70 hover:text-white transition-colors">
                contact@naqsh.com.sa
              </a>
            </div>

            <div className="contact-card">
              <h3 className="text-base font-semibold mb-3">Business Hours</h3>
              <p className="text-white/70">Sunday - Thursday<br />8:00 AM - 6:00 PM (AST)</p>
            </div>

            <div className="contact-card">
              <h3 className="text-base font-semibold mb-3">Office Address</h3>
              <p className="text-white/70">Khobar, Eastern Province<br />Saudi Arabia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
