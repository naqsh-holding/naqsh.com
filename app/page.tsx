"use client"

import * as React from "react"

import LoadingScreen from "./components/sections/LoadingScreen"
import Navigation from "./components/layout/Navigation"
import Hero from "./components/sections/Hero"
import AboutUs from "./components/sections/AboutUs"
import Companies from "./components/sections/Companies"
import CeoMessage from "./components/sections/CeoMessage"
import OurServices from "./components/sections/OurServices"
import NewsSection from "./components/sections/NewsSection"
import ProjectsSlider from "./components/sections/ProjectsSlider"
import OurBrands from "./components/sections/OurBrands"
import ContactUs from "./components/sections/ContactUs"
import Footer from "./components/sections/Footer"
import ThemeController from "./components/ThemeController"

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust time as needed, or replace with actual loading logic

    return () => clearTimeout(timer)
  }, [])

  return (
    <main id="main-wrapper" className="bg-[#f5f5f5] text-black transition-colors duration-1000">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <ThemeController />
          <Navigation forceStyle="black" isFixed={false} />
          <Hero />
          <AboutUs />
          <Companies />
          <CeoMessage />
          <OurServices />
          <NewsSection />
          <ProjectsSlider />
          <OurBrands />
          <ContactUs />
          <Footer />
        </>
      )}
    </main>
  )
}
