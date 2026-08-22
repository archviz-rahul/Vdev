'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderOpen,
  BarChart3,
  Users,
  UserCheck,
  MessageSquare,
  Glasses,
  Smartphone,
  Monitor,
  FileText,
  Settings,
  Megaphone,
  Image,
  Navigation,
  FormInput,
  Palette,
  Search,
  Calendar,
  HelpCircle,
  Settings2,
  Bot,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface SidebarSection {
  title: string
  items: { label: string; href: string; icon: React.ElementType }[]
}

const sidebarSections: SidebarSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
      { label: 'Projects', href: '/admin/projects', icon: FolderOpen },
      { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    ],
  },
  {
    title: 'Users',
    items: [
      { label: 'User Management', href: '/admin/users', icon: Users },
      { label: 'Clients', href: '/admin/clients', icon: UserCheck },
      { label: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
    ],
  },
  {
    title: 'XR Tools',
    items: [
      { label: 'VR Configurator', href: '/admin/vr-configurator', icon: Glasses },
      { label: 'AR Projects', href: '/admin/ar', icon: Smartphone },
      { label: 'GPU Streaming', href: '/admin/streaming', icon: Monitor },
    ],
  },
  {
    title: 'Content',
    items: [
      { label: 'Blog', href: '/admin/blog', icon: FileText },
      { label: 'Services', href: '/admin/cms/services', icon: Settings },
      { label: 'Testimonials', href: '/admin/cms/testimonials', icon: Megaphone },
      { label: 'Media Library', href: '/admin/media', icon: Image },
      { label: 'Navigation', href: '/admin/cms/navigation', icon: Navigation },
      { label: 'Form Builder', href: '/admin/forms', icon: FormInput },
      { label: 'Themes', href: '/admin/design/themes', icon: Palette },
      { label: 'SEO', href: '/admin/seo', icon: Search },
    ],
  },
  {
    title: 'Bookings',
    items: [
      { label: 'All Bookings', href: '/admin/bookings', icon: Calendar },
      { label: 'Support', href: '/admin/support', icon: HelpCircle },
    ],
  },
  {
    title: 'System',
    items: [
      { label: 'Settings', href: '/admin/settings', icon: Settings2 },
      { label: 'AI Config', href: '/admin/ai-settings', icon: Bot },
      { label: 'Admins', href: '/admin/admins', icon: Shield },
    ],
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen border-r border-border bg-secondary transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-[260px]'
      }`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <Link href="/admin/dashboard" className="font-display text-xl font-bold text-accent">
            VizTR
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-accent/10"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="overflow-y-auto px-3 py-4" style={{ height: 'calc(100vh - 64px)' }}>
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-6">
            {!collapsed && (
              <h3 className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-text-secondary">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'border-l-2 border-accent bg-accent/10 text-accent'
                          : 'text-text-secondary hover:bg-accent/5 hover:text-text-primary'
                      }`}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
