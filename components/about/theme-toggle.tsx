"use client"

import { useCallback, useEffect, useState } from "react"
import { Moon, Sun, Link2, House } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePathname, useRouter } from "next/navigation"

export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [ripple, setRipple] = useState(false)
  const [routing, setRouting] = useState(false)
  const isMobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()

  // Sync with current state on mount
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
    setMounted(true)
  }, [])

  // Listen to system preference changes (when no manual override is stored)
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const isDark = e.matches
        document.documentElement.classList.toggle("dark", isDark)
        setDark(isDark)
      }
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    document.body.classList.remove("page-slide-right-out")
  }, [pathname])

  const toggle = useCallback(() => {
    const next = !dark

    // Skip expensive full-screen ripple on mobile devices.
    if (!isMobile) {
      setRipple(true)
    }

    // Small delay so the ripple starts before the color switch
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.toggle("dark", next)
        setDark(next)
        localStorage.setItem("theme", next ? "dark" : "light")
      })
    })

    // Remove ripple class after animation completes
    if (!isMobile) {
      setTimeout(() => setRipple(false), 700)
    }
  }, [dark, isMobile])

  const handleFriendRoute = useCallback(() => {
    const target = pathname === "/friend" ? "/" : "/friend"
    if (target === pathname) return

    setRouting(true)
    document.body.classList.add("page-slide-right-out")

    window.setTimeout(() => {
      router.push(target)
    }, 260)
  }, [pathname, router])

  if (!mounted) {
    // Render a placeholder to prevent layout shift
    return (
      <div className="fixed top-5 left-5 z-50 flex items-center gap-2">
        <div className="h-10 w-10 rounded-full glass" />
        <div className="h-10 w-10 rounded-full glass" />
      </div>
    )
  }

  return (
    <>
      {/* Full-screen ripple overlay for the magical transition */}
      {ripple && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          aria-hidden="true"
        >
          <div
            className={`absolute top-5 left-5 h-10 w-10 rounded-full ${
              dark ? "bg-[#0f1318]" : "bg-[#f0f4f8]"
            } animate-theme-ripple`}
          />
        </div>
      )}

      <div className="fixed top-5 left-5 z-50 flex items-center gap-2">
        <button
          onClick={toggle}
          aria-label={dark ? "切换到浅色模式" : "切换到深色模式"}
          className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg"
        >
          {dark ? (
            <Sun className="h-[18px] w-[18px] text-amber-300 transition-transform duration-500 rotate-0 hover:rotate-90" />
          ) : (
            <Moon className="h-[18px] w-[18px] text-slate-600 transition-transform duration-500 rotate-0 hover:-rotate-12" />
          )}
        </button>
        <button
          onClick={handleFriendRoute}
          disabled={routing}
          aria-label={pathname === "/friend" ? "返回首页" : "前往友联页面"}
          className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg disabled:opacity-60"
        >
          {pathname === "/friend" ? (
            <House className="h-[18px] w-[18px] text-foreground/75" />
          ) : (
            <Link2 className="h-[18px] w-[18px] text-foreground/75" />
          )}
        </button>
      </div>
    </>
  )
}
