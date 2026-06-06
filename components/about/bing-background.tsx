"use client"

import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { site } from "@/src/config/site"

export function BingBackground() {
  const [bgUrl, setBgUrl] = useState<string>("")
  const isMobile = useIsMobile()

  useEffect(() => {
    if (site.backgroundUrl) {
      setBgUrl(site.backgroundUrl)
      return
    }

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1
    const saveData =
      typeof navigator !== "undefined" &&
      "connection" in navigator &&
      typeof (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData === "boolean"
        ? Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
        : false

    const width = saveData ? 960 : isMobile ? 1280 : Math.round(1920 * dpr)

    // Use Bing daily wallpaper API
    const bingUrl = `https://bing.biturl.top/?resolution=${width}&format=image&index=0&mkt=zh-CN&t=${Date.now()}`
    setBgUrl(bingUrl)
  }, [isMobile])

  return (
    <div className="fixed inset-0 -z-10">
      {bgUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bgUrl}
          alt=""
          className="h-full w-full object-cover bg-render"
          crossOrigin="anonymous"
          decoding="async"
          fetchPriority="high"
        />
      )}
      {/* Soft overlay for readability -- darker in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/8 dark:from-black/24 dark:via-black/18 dark:to-black/34" />
    </div>
  )
}
