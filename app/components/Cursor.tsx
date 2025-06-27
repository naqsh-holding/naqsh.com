"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      setIsPointer(
        target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a" ||
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.closest('[role="button"]') !== null,
      )
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`rounded-full bg-white transition-all duration-200 ${isPointer ? "w-12 h-12" : "w-4 h-4"}`} />
      </div>
    </>
  )
}
