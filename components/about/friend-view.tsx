"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { GlassCard } from "./glass-card"
import { friends } from "@/src/config/friends"
import { ExternalLink, X } from "lucide-react"

export function FriendView() {
  const router = useRouter()
  const [leaving, setLeaving] = useState(false)

  const handleClose = useCallback(() => {
    setLeaving(true)
    setTimeout(() => {
      router.push("/")
    }, 320)
  }, [router])

  return (
    <div
      className={`transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "animate-shrink-out" : "animate-grow-in"
      }`}
    >
      <GlassCard
        variant="strong"
        className="relative flex w-[94vw] max-w-3xl flex-col overflow-hidden md:w-[90vw] md:flex-row"
      >
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <button
            onClick={handleClose}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-red-400/80 transition hover:bg-red-500"
            aria-label="返回首页"
          >
            <X className="h-2 w-2 text-red-800/0 transition group-hover:text-red-800/80" />
          </button>
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        <aside className="flex shrink-0 flex-col border-b border-white/15 bg-white/8 px-4 pb-4 pt-12 dark:border-white/8 dark:bg-white/5 md:w-44 md:border-b-0 md:border-r md:pb-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">
            友链页
          </h2>
          <p className="text-sm leading-relaxed text-foreground/55">
            都可能是一些朋友什么的网站啦！感兴趣的可以去看看哦
          </p>
          <p className="mt-2 text-xs leading-relaxed text-foreground/50">
            申请友链请向我联系。
          </p>
          <div className="mt-3 border-t border-white/15 pt-3 dark:border-white/8 md:mt-auto md:pt-4">
            <p className="text-xs text-foreground/35 text-center">Linmont Furry</p>
            <p className="text-xs text-foreground/25 text-center mt-0.5">友链 / 联系入口</p>
          </div>
        </aside>

        <main className="max-h-[66vh] flex-1 overflow-y-auto px-5 pb-6 pt-12 md:max-h-[70vh] md:px-8 md:pb-8 md:pt-12">
          <h3 className="mb-4 text-lg font-semibold text-foreground/90">友链</h3>
          {friends.length === 0 ? (
            <div className="rounded-xl border border-white/25 bg-white/35 px-4 py-5 text-sm text-foreground/70 dark:border-white/12 dark:bg-white/8">
              还没有友联哦～
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {friends.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/25 bg-white/35 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 dark:border-white/12 dark:bg-white/8 dark:hover:bg-white/14"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-foreground/85">{item.name}</p>
                    <ExternalLink className="h-3.5 w-3.5 text-foreground/50" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/65">{item.desc}</p>
                </a>
              ))}
            </div>
          )}
        </main>
      </GlassCard>
    </div>
  )
}
