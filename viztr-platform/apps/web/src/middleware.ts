import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public routes
  const publicRoutes = [
    '/',
    '/about',
    '/blog',
    '/portfolio',
    '/studio',
    '/xr-world',
    '/contact',
    '/book-consultation',
    '/privacy-policy',
    '/terms-conditions',
  ]

  const isPublic = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  )

  if (isPublic) return NextResponse.next()

  // For now, allow all routes — full auth middleware activates when DB is connected
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/client-dashboard/:path*'],
}
