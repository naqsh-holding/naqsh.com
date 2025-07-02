"use client"

import React from "react"
import { useCursor } from "@/app/lib/hooks/useCursor"

export default function Cursor() {
  const { position, isVisible, isPointer } = useCursor()

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={`rounded-full bg-white transition-all duration-200 ${isPointer ? "w-12 h-12" : "w-4 h-4"}`} />
    </div>
  )
}
