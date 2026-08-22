import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Client Portal | VizTR',
  description: 'VizTR Client Portal',
}

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}