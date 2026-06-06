"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "strong"
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        variant === "strong" ? "glass-strong" : "glass",
        className
      )}
    >
      {children}
    </div>
  )
}
