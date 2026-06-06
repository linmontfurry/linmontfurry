"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { GlassCard } from "./glass-card"
import { AboutContent } from "@/src/content/about"
import { navItems } from "@/src/config/nav"
import { X } from "lucide-react"

export function ExpandedView() {
  const router = useRouter()
  const [leaving, setLeaving] = useState(false)
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "")
  const scrollRef = useRef<HTMLElement>(null)

  const handleClose = useCallback(() => {
    setLeaving(true)
    setTimeout(() => {
      router.push("/")
    }, 380)
  }, [router])

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: el.offsetTop - scrollRef.current.offsetTop - 16,
        behavior: "smooth",
      })
    }
  }, [])

  // IntersectionObserver to track active section
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        root: container,
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    )

    for (const item of navItems) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "animate-shrink-out" : "animate-grow-in"
      }`}
    >
      <GlassCard
        variant="strong"
        className="relative flex w-[94vw] max-w-3xl flex-col overflow-hidden md:w-[90vw] md:flex-row"
      >
        {/* macOS window chrome */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <button
            onClick={handleClose}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-red-400/80 transition hover:bg-red-500"
            aria-label="Close"
          >
            <X className="h-2 w-2 text-red-800/0 transition group-hover:text-red-800/80" />
          </button>
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        {/* Left sidebar navigation */}
        <aside className="flex shrink-0 flex-col border-b border-white/15 bg-white/8 px-4 pb-4 pt-12 dark:border-white/8 dark:bg-white/5 md:w-44 md:border-b-0 md:border-r md:pb-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">
            导航
          </h2>
          <nav className="grid grid-cols-2 gap-1 md:flex md:grid-cols-1 md:flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-lg px-3 py-2 text-sm text-left transition-all duration-200 ${
                  activeId === item.id
                    ? "bg-primary/15 font-medium text-primary"
                    : "text-foreground/40 hover:bg-white/15 dark:hover:bg-white/10 hover:text-foreground/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-3 border-t border-white/15 pt-3 dark:border-white/8 md:mt-auto md:pt-4">
            <p className="text-xs text-foreground/35 text-center">Linmont Furry</p>
            <p className="text-xs text-foreground/25 text-center mt-0.5">By Linmont with javascript.</p>
          </div>
        </aside>

        {/* Right content area */}
        <main
          ref={scrollRef}
          className="max-h-[66vh] flex-1 overflow-y-auto px-5 pb-6 pt-6 scroll-smooth-custom md:max-h-[70vh] md:px-8 md:pb-8 md:pt-12"
        >
          <AboutContent />
        </main>
      </GlassCard>
    </div>
  )
}
