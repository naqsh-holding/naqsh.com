// Utility for dynamically loading GSAP to reduce initial bundle size
let gsapInstance: any = null
let scrollTriggerInstance: any = null

export const loadGSAP = async () => {
  if (gsapInstance) return gsapInstance
  
  const { gsap } = await import('gsap')
  gsapInstance = gsap
  return gsap
}

export const loadScrollTrigger = async () => {
  if (scrollTriggerInstance) return scrollTriggerInstance
  
  const { gsap } = await loadGSAP()
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
  
  scrollTriggerInstance = ScrollTrigger
  return ScrollTrigger
}

export const getGSAP = () => gsapInstance
export const getScrollTrigger = () => scrollTriggerInstance 