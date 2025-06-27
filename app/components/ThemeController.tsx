"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export default function ThemeController() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Page detection functions
    const isHomePage = () => {
      return window.location.pathname === '/' || window.location.pathname === '/home'
    }

    const isNewsOrProjectsPage = () => {
      return window.location.pathname.startsWith('/news') || window.location.pathname.startsWith('/projects')
    }

    const shouldApplyScrollTheme = () => {
      return isHomePage() && !isNewsOrProjectsPage()
    }

    let isDarkMode = false
    let isTransitioning = false
    let lastScrollY = window.scrollY // Initialize with current scroll position

    const fadeToTheme = (toDark: boolean) => {
      if (isTransitioning || toDark === isDarkMode) return

      isTransitioning = true
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 0.6 },
        onComplete: () => {
          isTransitioning = false
        },
      })

      const html = document.documentElement
      const body = document.body
      const main = document.querySelector("main")
      // Select all direct children sections of main, and also specific top-level sections if not in main
      const sections = document.querySelectorAll(
        "main > section, body > section#hero-section, body > section#ceo-message, body > section#about-section, body > section#contact-section",
      ) // Be more specific or ensure sections are within main
      const themeTextElements = document.querySelectorAll(".theme-text")
      const logoDark = document.querySelector(".logo-dark")
      const logoWhite = document.querySelector(".logo-white")
      const navCircles = document.querySelectorAll(".nav-circle")
      const navArrows = document.querySelectorAll(".nav-arrow")
      const themeCtaBg = document.querySelectorAll(".theme-cta-bg")
      const themeCtaText = document.querySelectorAll(".theme-cta-text")

      if (toDark) {
        html.classList.remove("light-theme")
        html.classList.add("dark-theme")

        tl.to([html, body, main], { backgroundColor: "#000000", color: "#FFFFFF" }, 0)
          .to(sections, { backgroundColor: "transparent", color: "#FFFFFF" }, 0) // Sections become transparent on dark bg
          .to(themeTextElements, { color: "#FFFFFF" }, 0)
          .to(logoDark, { opacity: 0, display: "none" }, 0)
          .to(logoWhite, { opacity: 1, display: "inline-block" }, 0)
          .to(navCircles, { backgroundColor: "#FFFFFF" }, 0)
          .to(navArrows, { color: "#000000" }, 0)
          .to(themeCtaBg, { backgroundColor: "#FFFFFF" }, 0)
          .to(themeCtaText, { color: "#000000" }, 0)

        isDarkMode = true
      } else {
        html.classList.remove("dark-theme")
        html.classList.add("light-theme")

        tl.to([html, body, main], { backgroundColor: "#FFFFFF", color: "#000000" }, 0)
          .to(sections, { backgroundColor: "inherit", color: "#000000" }, 0) // Sections inherit or revert to light theme bg
          .to(themeTextElements, { color: "#000000" }, 0)
          .to(logoDark, { opacity: 1, display: "inline-block" }, 0)
          .to(logoWhite, { opacity: 0, display: "none" }, 0)
          .to(navCircles, { backgroundColor: "#000000" }, 0)
          .to(navArrows, { color: "#FFFFFF" }, 0)
          .to(themeCtaBg, { backgroundColor: "#000000" }, 0)
          .to(themeCtaText, { color: "#FFFFFF" }, 0)
        isDarkMode = false
      }
    }

    const isInDarkThemeZone = () => {
      const ceoMessageSection = document.querySelector("#ceo-message")
      if (!ceoMessageSection) return false

      const rect = ceoMessageSection.getBoundingClientRect()
      // Trigger when the top of the CEO message section is at or above 50% of the viewport height
      return rect.top <= window.innerHeight * 0.5
    }

    const onScroll = () => {
      // Don't apply scroll-triggered themes on news/projects pages
      if (!shouldApplyScrollTheme()) return

      const currentScrollY = window.scrollY
      // const goingDown = currentScrollY > lastScrollY; // Useful if you need scroll direction
      lastScrollY = currentScrollY

      if (isTransitioning) return

      const shouldBeDark = isInDarkThemeZone()

      if (shouldBeDark && !isDarkMode) {
        fadeToTheme(true)
      } else if (!shouldBeDark && isDarkMode) {
        fadeToTheme(false)
      }
    }

    const initTheme = () => {
      // Don't apply scroll-triggered themes on news/projects pages
      if (!shouldApplyScrollTheme()) {
        // Set light theme as default for non-home pages (except news/projects which have their own themes)
        const html = document.documentElement
        html.classList.add("light-theme")
        html.classList.remove("dark-theme")
        return
      }

      const html = document.documentElement
      // Check initial scroll position on load
      const shouldBeDarkInitially = isInDarkThemeZone()
      if (shouldBeDarkInitially) {
        html.classList.add("dark-theme")
        html.classList.remove("light-theme")
        gsap.set([html, document.body, document.querySelector("main")], {
          backgroundColor: "#000000",
          color: "#FFFFFF",
        })
        gsap.set(
          document.querySelectorAll(
            "main > section, body > section#hero-section, body > section#ceo-message, body > section#about-section, body > section#contact-section",
          ),
          { backgroundColor: "transparent", color: "#FFFFFF" },
        )
        gsap.set(document.querySelectorAll(".theme-text"), { color: "#FFFFFF" })
        gsap.set(document.querySelector(".logo-dark"), { opacity: 0, display: "none" })
        gsap.set(document.querySelector(".logo-white"), { opacity: 1, display: "inline-block" })
        gsap.set(document.querySelectorAll(".nav-circle"), { backgroundColor: "#FFFFFF" })
        gsap.set(document.querySelectorAll(".nav-arrow"), { color: "#000000" })
        gsap.set(document.querySelectorAll(".theme-cta-bg"), { backgroundColor: "#FFFFFF" })
        gsap.set(document.querySelectorAll(".theme-cta-text"), { color: "#000000" })
        isDarkMode = true
      } else {
        html.classList.add("light-theme")
        html.classList.remove("dark-theme")
        gsap.set([html, document.body, document.querySelector("main")], {
          backgroundColor: "#FFFFFF",
          color: "#000000",
        })
        gsap.set(
          document.querySelectorAll(
            "main > section, body > section#hero-section, body > section#ceo-message, body > section#about-section, body > section#contact-section",
          ),
          { backgroundColor: "inherit", color: "#000000" },
        )
        gsap.set(document.querySelectorAll(".theme-text"), { color: "#000000" })
        gsap.set(document.querySelector(".logo-dark"), { opacity: 1, display: "inline-block" })
        gsap.set(document.querySelector(".logo-white"), { opacity: 0, display: "none" })
        gsap.set(document.querySelectorAll(".nav-circle"), { backgroundColor: "#000000" })
        gsap.set(document.querySelectorAll(".nav-arrow"), { color: "#FFFFFF" })
        gsap.set(document.querySelectorAll(".theme-cta-bg"), { backgroundColor: "#000000" })
        gsap.set(document.querySelectorAll(".theme-cta-text"), { color: "#FFFFFF" })
        isDarkMode = false
      }
      // Call onScroll once to set the correct theme based on initial scroll position
      onScroll()
    }

    // Ensure GSAP and ScrollTrigger are ready
    gsap.delayedCall(0.1, () => {
      // Small delay to ensure DOM is fully ready
      initTheme()
      // Only add scroll listener if we should apply scroll-triggered themes
      if (shouldApplyScrollTheme()) {
        window.addEventListener("scroll", onScroll, { passive: true })
      }
    })

    return () => {
      // Only remove scroll listener if we added it
      if (shouldApplyScrollTheme()) {
        window.removeEventListener("scroll", onScroll)
      }
    }
  }, [])

  return null
}
