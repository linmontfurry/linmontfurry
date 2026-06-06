import type { Metadata } from "next"
import { HomePageClient } from "@/components/about/home-page-client"
import { site } from "@/src/config/site"

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
