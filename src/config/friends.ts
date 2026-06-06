// ============================================
// Friend Links Configuration
// Edit this file to add/remove friend links.
// Auto-wraps after 4 items per row.
// Set to empty array [] to show a friendly placeholder.
// ============================================

export interface FriendItem {
  /** Display name of the friend/blog */
  name: string
  /** URL to link to */
  url: string
  /** Short description shown on hover tooltip */
  desc: string
}

export const friends: FriendItem[] = [
  { name: "Lycheen", url: "https://lycheen.com", desc: "搭建开发的服务器赞助商" },
]
