"use client"

import { BingBackground } from "./bing-background"
import { FriendView } from "./friend-view"
import { GlassCard } from "./glass-card"
import { ThemeToggle } from "./theme-toggle"
import { site } from "@/src/config/site"

export function FriendPageClient() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BingBackground />
      <ThemeToggle />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="drop-shadow-lg md:drop-shadow-2xl" style={{ transform: "translateY(-4px)" }}>
          <FriendView />
        </div>
      </main>

      <footer className="relative z-10 px-4 pb-8">
        <div className="mx-auto max-w-3xl flex flex-col gap-4">
          <GlassCard className="px-6 py-4">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
              <p className="text-xs text-foreground/40">
                {site.footerText}
              </p>
              <p className="text-xs text-foreground/30">
                {site.footerSubText}
              </p>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  )
}
