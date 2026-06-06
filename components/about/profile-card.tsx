"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { GlassCard } from "./glass-card"
import { ContactLinks } from "./contact-links"
import { profile } from "@/src/config/profile"
import Image from "next/image"

export function ProfileCard() {
  const router = useRouter()
  const [leaving, setLeaving] = useState(false)

  const handleLearnMore = useCallback(() => {
    setLeaving(true)
    // Wait for shrink animation, then navigate
    setTimeout(() => {
      router.push("/about-me")
    }, 380)
  }, [router])

  return (
    <div
      className={`transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "animate-shrink-out" : ""
      }`}
    >
      <GlassCard
        variant="strong"
        className="relative flex flex-col items-center px-6 py-10 w-[320px] max-w-full"
      >
        {/* macOS window dots */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        {/* Avatar */}
        <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full border-[3px] border-white/40 dark:border-white/20 shadow-lg">
          <Image
            src={profile.avatarUrl}
            alt="Profile avatar"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-xl font-semibold text-foreground/90 text-balance text-center">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-foreground/50 text-balance text-center">
          {profile.title}
        </p>

        {/* Bio */}
        <p className="mt-4 text-center text-sm leading-relaxed text-foreground/60 px-2">
          {profile.bio}
        </p>

        {/* Learn More Button - with float animation */}
        <button
          onClick={handleLearnMore}
          disabled={leaving}
          className="mt-6 animate-float rounded-full bg-primary/80 px-8 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary hover:shadow-lg active:scale-95 disabled:opacity-70"
        >
          了解一下
        </button>

        {/* Contact Links */}
        <div className="mt-6 w-full border-t border-white/20 dark:border-white/10 pt-5">
          <ContactLinks />
        </div>
      </GlassCard>
    </div>
  )
}
