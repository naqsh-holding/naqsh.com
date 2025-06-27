"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface PillButtonProps {
  href: string
  children: ReactNode
  variant?: "light" | "dark"
  onClick?: () => void
  ariaLabel?: string
  className?: string
}

export function PillButton({ href, children, variant = "light", onClick, ariaLabel, className }: PillButtonProps) {
  // Ensure href is always a string
  const safeHref = href || "/"
  
  const baseClasses =
    "inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-light transition-all duration-300 hover:scale-105 group"

  const variantClasses = {
    light: "bg-white text-black hover:bg-gray-100",
    dark: "bg-black text-white hover:bg-gray-800 border border-black",
  }

  return (
    <Link href={safeHref} className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`} onClick={onClick} aria-label={ariaLabel}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}
