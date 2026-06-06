import type { Metadata } from "next"
import { FriendPageClient } from "@/components/about/friend-page-client"

export const metadata: Metadata = {
  title: "友链 | 凛莫泽知",
  description: "凛莫泽知的介绍页面",
  alternates: {
    canonical: "/friend",
  },
}

export default function FriendPage() {
  return <FriendPageClient />
}
