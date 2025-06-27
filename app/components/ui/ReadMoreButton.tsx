"use client"

import type React from "react"
import { PillButton } from "./PillButton" // Assuming PillButton is in the same directory or adjust path

interface ReadMoreButtonProps {
  variant?: "light" | "dark"
  className?: string
  href?: string // Optional href if this button itself is a link
  onClick?: () => void // Optional onClick for non-link buttons
  children?: React.ReactNode
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  variant = "dark", // Default to dark, but NewsPage will pass 'light'
  className,
  href,
  onClick,
  children = "Read more",
}) => {
  if (href) {
    return (
      <PillButton href={href} variant={variant} className={className} ariaLabel="Read more about this article">
        {children}
      </PillButton>
    )
  }

  return (
    <PillButton href="#" onClick={onClick} variant={variant} className={className} ariaLabel="Read more">
      {children}
    </PillButton>
  )
}

export default ReadMoreButton
