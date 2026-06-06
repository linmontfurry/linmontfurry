"use client"

import { contacts } from "@/src/config/contacts"

export function ContactLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-[280px] mx-auto">
      {contacts.map((contact) => {
        const Icon = contact.icon
        return (
          <div key={contact.name} className="relative group">
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.name}
              className="flex items-center gap-1.5 rounded-full bg-white/20 dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all duration-200 hover:bg-white/40 dark:hover:bg-white/20 hover:text-foreground hover:shadow-sm"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{contact.name}</span>
            </a>
            {/* Hover tooltip */}
            <span
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground/80 px-3 py-1.5 text-xs text-background opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-10 z-20"
              role="tooltip"
            >
              {contact.description}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-foreground/80" />
            </span>
          </div>
        )
      })}
    </div>
  )
}
