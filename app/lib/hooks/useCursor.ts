import { useState, useEffect } from "react"

export function useCursor() {
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

  return { position, isVisible, isPointer }
}
