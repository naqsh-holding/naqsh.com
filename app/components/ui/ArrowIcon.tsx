"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ArrowIconProps {
  isActive: boolean
  isHovered: boolean
}

export default function ArrowIcon({ isActive, isHovered }: ArrowIconProps) {
  const line1Ref = useRef<SVGLineElement>(null)
  const line2Ref = useRef<SVGLineElement>(null)

  useEffect(() => {
    if (line1Ref.current && line2Ref.current) {
      gsap.to([line1Ref.current, line2Ref.current], {
        attr: {
          x2: isActive || isHovered ? 20 : 15,
          y2: isActive || isHovered ? 0 : 10,
        },
        duration: 0.6,
        ease: "power2.inOut",
      })
    }
  }, [isActive, isHovered])

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="overflow-visible">
      <line
        ref={line1Ref}
        x1="0"
        y1="0"
        x2="15"
        y2="10"
        stroke="currentColor"
        strokeWidth="1"
        className="origin-left transition-all duration-600"
      />
      <line
        ref={line2Ref}
        x1="0"
        y1="20"
        x2="15"
        y2="10"
        stroke="currentColor"
        strokeWidth="1"
        className="origin-left transition-all duration-600"
      />
    </svg>
  )
}
