import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { site } from '@/src/config/site'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })
const socialImage = site.backgroundUrl?.startsWith("http")
  ? site.backgroundUrl
  : `${site.siteUrl}${site.backgroundUrl ?? "/images/avatar.jpg"}`

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: '凛莫泽知的介绍',
  description: site.description,
  keywords: site.keywords,
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: site.siteUrl,
    title: site.title,
    description: site.description,
    siteName: "凛莫泽知",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "凛莫泽知的介绍",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [socialImage],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f4f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1318' },
  ],
  width: 'device-width',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "凛莫泽知",
    alternateName: ["小凛莫", "泽知", "Linmont Furry", "linmontfurry", "furrylinmo"],
    url: site.siteUrl,
    sameAs: [
      "https://github.com/linmontfurry",
      "https://x.com/linmontfur",
      "https://lmfur.t.me",
      "https://bvhsh.t.me",
    ],
    description: site.description,
    keywords: site.keywords.join(", "),
  }

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* Blocking script: apply dark class before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
