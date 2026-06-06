// ============================================
// Navigation Configuration
// Edit this file to customize the sidebar nav items
// in the expanded "About Me" view.
// The `id` must match the section id in your content.
// ============================================

export interface NavItem {
  /** Display label in the sidebar */
  label: string
  /** Must match the corresponding section `id` in about content */
  id: string
}

export const navItems: NavItem[] = [
  { label: "我是谁", id: "about" },
  { label: "技能方向", id: "skills" },
  { label: "学习进度", id: "learning" },
  { label: "日常偏好", id: "daily" },
]
