import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about/about-page-client"

export const metadata: Metadata = {
  title: "介绍信息 | 凛莫泽知",
  description: "凛莫泽知的介绍页面",
  alternates: {
    canonical: "/about-me",
  },
}

export default function AboutMePage() {
  return <AboutPageClient />
}
