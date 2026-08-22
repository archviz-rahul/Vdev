'use client'

import { FolderOpen, Users, Calendar, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    label: 'Total Leads',
    value: '142',
    change: '+12%',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    label: 'Total Bookings',
    value: '38',
    change: '+8%',
    icon: Calendar,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    label: 'Total Projects',
    value: '24',
    change: '+3',
    icon: FolderOpen,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    label: 'Active Projects',
    value: '9',
    change: '+1',
    icon: TrendingUp,
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

const recentActivity = [
  { action: 'New lead received', detail: 'John Smith - Exterior Visualization', time: '2 hours ago' },
  { action: 'Project milestone completed', detail: 'Luxury Villa - 3D Modeling Phase', time: '4 hours ago' },
  { action: 'Booking confirmed', detail: 'Park Avenue Developers - Consultation', time: '6 hours ago' },
  { action: 'New blog post published', detail: 'Architectural Visualization Trends 2026', time: '1 day ago' },
  { action: 'Form submission', detail: 'Contact form from Acme Corp', time: '1 day ago' },
]

const quickLinks = [
  { label: 'New Project', href: '/admin/projects/new' },
  { label: 'Manage Users', href: '/admin/users' },
  { label: 'View Analytics', href: '/admin/analytics' },
  { label: 'Site Settings', href: '/admin/settings' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-text-secondary">Welcome back. Here&apos;s an overview of your platform.</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-green-500">{stat.change}</p>
                </div>
                <div className={`rounded-lg p-3 ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent activity */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-text-secondary">{item.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-text-secondary">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg border border-border p-3 text-sm font-medium transition-colors hover:border-accent hover:bg-accent/5"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          {/* Status cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs text-text-secondary">Theme</p>
              <p className="mt-1 text-sm font-medium text-green-500">Active</p>
              <p className="text-xs text-text-secondary">Dark Mode</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs text-text-secondary">SEO Health</p>
              <p className="mt-1 text-sm font-medium text-green-500">Good</p>
              <p className="text-xs text-text-secondary">92/100 score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
