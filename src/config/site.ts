// ============================================
// Site Configuration
// Edit this file to customize site-level settings
// ============================================

export const site = {
  /** Site URL for SEO files (robots/sitemap) */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://about.furry.blue",
  /** Site title used in metadata */
  title: "小凛莫的介绍页",
  /** Site description for SEO */
  description: "凛莫泽知的介绍页",
  /** Keywords used for search engine indexing */
  keywords: ["linmo furry", "linmont", "linmontfurry", "furrylinmo", "凛莫", "泽知"],
  /**
   * Custom background image URL.
   * Set to null/undefined to use Bing Daily Wallpaper.
   * Example: "/images/my-background.jpg"
   */
  /** backgroundUrl: undefined as string | undefined, */
  backgroundUrl: "/images/bg.jpeg",
  /** Footer text */
  footerText: "Build with ❤️",
  /** Footer sub text */
  footerSubText: "“小凛莫/Linmontfurry”",
}
