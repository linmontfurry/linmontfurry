// ============================================
// Contact Links Configuration
// Edit this file to customize your contact links
// Each entry will appear as a clickable badge.
// Auto-wraps after 4 items per row.
// ============================================

import {
  Github,
  Twitter,
  Mail,
  Globe,
  MessageCircle,
  type LucideIcon,
} from "lucide-react"

export interface ContactItem {
  /** Display name for the badge */
  name: string
  /** Lucide icon component */
  icon: LucideIcon
  /** URL to link to */
  href: string
  /** Tooltip description shown on hover */
  description: string
}

export const contacts: ContactItem[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/linmontfurry",
    description: "github.com/linmontfurry",
  },
  {
    name: "邮箱",
    icon: Mail,
    href: "mailto:admin@furry.blue",
    description: "admin@furry.blue",
  },
  {
    name: "X",
    icon: Twitter,
    href: "https://x.com/linmontfur",
    description: "linmontfur",
  },
  {
    name: "哪吒探针",
    icon: Globe,
    href: "https://nezha.furry.blue",
    description: "nezha.furry.blue",
  },
  {
    name: "Telegram频道",
    icon: MessageCircle,
    href: "https://lmfur.t.me",
    description: "lmfur.t.me",
  },
  {
    name: "Telegram账号",
    icon: MessageCircle,
    href: "https://bvhsh.t.me",
    description: "bvhsh.t.me",
  },
]
