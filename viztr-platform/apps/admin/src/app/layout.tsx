'use client'

import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminTopbar } from '@/components/AdminTopbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="pl-[260px] transition-all duration-300">
        <AdminTopbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
