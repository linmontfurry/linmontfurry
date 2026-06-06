"use client"

import { GlassCard } from "./glass-card"
import { ExternalLink, UserRoundX } from "lucide-react"
import { friends } from "@/src/config/friends"

export function FriendLinks() {
  return (
    <GlassCard className="px-6 py-5">
      <h3 className="mb-3 text-sm font-semibold text-foreground/70">
        友链
      </h3>

      {friends.length === 0 ? (
        <EmptyFriends />
      ) : (
        <div className="flex flex-wrap gap-2">
          {friends.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-white/20 dark:bg-white/10 px-3 py-2 text-xs text-foreground/60 transition-all duration-200 hover:bg-white/40 dark:hover:bg-white/20 hover:text-foreground hover:shadow-sm"
              >
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="ml-0.5 h-3 w-3 opacity-0 transition group-hover:opacity-70" />
              </a>
              {/* Hover tooltip with description */}
              <span
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground/80 px-3 py-1.5 text-xs text-background opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-10 z-20"
                role="tooltip"
              >
                {link.desc}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-foreground/80" />
              </span>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  )
}

function EmptyFriends() {
  return (
    <div className="flex flex-col items-center py-6 gap-3">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <UserRoundX className="h-7 w-7 text-primary/50" />
        </div>
        {/* Decorative floating dots */}
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary/30 animate-float" />
        <span className="absolute -bottom-0.5 -left-1 h-1.5 w-1.5 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground/50">
          还没有友链
        </p>
        <p className="text-xs text-foreground/35 mt-1">
          之后再来看看吧。
        </p>
      </div>
    </div>
  )
}
