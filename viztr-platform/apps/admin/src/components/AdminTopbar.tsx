'use client'

import { Search, Bell, LogOut, User } from 'lucide-react'

export function AdminTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-secondary/80 px-6 backdrop-blur-md">
      {/* Search */}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
        <Search className="h-4 w-4 text-text-secondary" />
        <input
          type="text"
          placeholder="Search projects, users, content..."
          className="w-64 bg-transparent text-sm outline-none placeholder:text-text-secondary"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 hover:bg-accent/10" aria-label="Notifications">
          <Bell className="h-5 w-5 text-text-secondary" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
        </button>

        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
            <User className="h-4 w-4 text-accent" />
          </div>
          <div className="hidden text-sm md:block">
            <p className="font-medium">Admin</p>
            <p className="text-xs text-text-secondary">Super Admin</p>
          </div>
        </div>

        {/* Logout */}
        <button className="rounded-lg p-2 hover:bg-accent/10" aria-label="Logout">
          <LogOut className="h-5 w-5 text-text-secondary" />
        </button>
      </div>
    </header>
  )
}
