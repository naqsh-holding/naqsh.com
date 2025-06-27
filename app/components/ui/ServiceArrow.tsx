"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ServiceArrowProps {
  isActive: boolean
  isHovered: boolean
}

export default function ServiceArrow({ isActive, isHovered }: ServiceArrowProps) {
  const line1Ref = useRef<SVGLineElement>(null)
  const line2Ref = useRef<SVGLineElement>(null)

  useEffect(() => {
    if (line1Ref.current && line2Ref.current) {
      gsap.to(line1Ref.current, {
        attr: {
          x2: isActive || isHovered ? 22.25 : 0.27,
          y2: isActive || isHovered ? 22.31 : 0.26,
        },
        duration: 0.3,
        ease: "power2.inOut",
      })
      gsap.to(line2Ref.current, {
        attr: {
          x2: isActive || isHovered ? 22.5 : 0.27,
          y2: isActive || isHovered ? 17.29 : 39.52,
        },
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [isActive, isHovered])

  return (
    <svg width="16" height="28" viewBox="0 0 22.76 39.79">
      <line
        ref={line1Ref}
        x1="0.27"
        y1="0.26"
        x2="0.27"
        y2="0.26"
        stroke="currentColor"
        strokeWidth="1.5"
        className="theme-text"
      />
      <line
        ref={line2Ref}
        x1="0.27"
        y1="39.52"
        x2="0.27"
        y2="39.52"
        stroke="currentColor"
        strokeWidth="1.5"
        className="theme-text"
      />
    </svg>
  )
}
