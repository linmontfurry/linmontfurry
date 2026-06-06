"use client"

import Link from "next/link"
import { BingBackground } from "./bing-background"
import { GlassCard } from "./glass-card"
import { ThemeToggle } from "./theme-toggle"
import { Home } from "lucide-react"

export function NotFoundClient() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BingBackground />
      <ThemeToggle />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="drop-shadow-2xl animate-grow-in" style={{ transform: "translateY(-4px)" }}>
          <GlassCard variant="strong" className="relative flex flex-col items-center px-10 py-12 w-[360px] max-w-full">
            {/* macOS window dots */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>

            {/* Cute floating 404 illustration */}
            <div className="relative mb-6">
              <div className="flex items-baseline gap-1 select-none">
                <span className="text-7xl font-bold text-primary/60 animate-float">4</span>
                <span
                  className="text-7xl font-bold text-primary/40 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  0
                </span>
                <span
                  className="text-7xl font-bold text-primary/60 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  4
                </span>
              </div>
              {/* Decorative floating particles */}
              <span
                className="absolute -top-3 -right-4 h-3 w-3 rounded-full bg-primary/20 animate-float"
                style={{ animationDelay: "0.3s" }}
              />
              <span
                className="absolute -bottom-2 -left-3 h-2 w-2 rounded-full bg-primary/15 animate-float"
                style={{ animationDelay: "0.8s" }}
              />
              <span
                className="absolute top-1/2 -right-6 h-1.5 w-1.5 rounded-full bg-primary/25 animate-float"
                style={{ animationDelay: "1.5s" }}
              />
            </div>

            <h1 className="text-lg font-semibold text-foreground/80 text-balance text-center">
              Page Not Found
            </h1>
            <p className="mt-2 text-sm text-foreground/45 text-center leading-relaxed max-w-[240px]">
              这里还没有内容哦~
            </p>

            <Link
              href="/"
              className="mt-6 flex items-center gap-2 rounded-full bg-primary/80 px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary hover:shadow-lg active:scale-95 animate-float"
            >
              <Home className="h-4 w-4" />
              回到首页
            </Link>
          </GlassCard>
        </div>
      </main>
    </div>
  )
}
