import type { MetadataRoute } from "next"
import { site } from "@/src/config/site"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
  }
}
