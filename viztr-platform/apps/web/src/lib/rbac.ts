import { auth } from '@/lib/auth'

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'USER' | 'CLIENT'

const ROLE_HIERARCHY: Record<Role, number> = {
  SUPER_ADMIN: 4,
  ADMIN: 3,
  USER: 2,
  CLIENT: 1,
}

export function hasRole(userRole: Role, requiredRole: Role): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole]
}

export function canAccess(userRole: Role, resource: string): boolean {
  const permissions: Record<Role, string[]> = {
    SUPER_ADMIN: ['*'],
    ADMIN: ['projects', 'users', 'content', 'media', 'bookings', 'forms', 'analytics'],
    USER: ['projects:assigned', 'media:upload'],
    CLIENT: ['projects:assigned:view', 'timeline', 'deliverables'],
  }

  const userPermissions = permissions[userRole] || []
  if (userPermissions.includes('*')) return true
  return userPermissions.some((p) => resource.startsWith(p))
}

export async function requireAuth() {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
  return session.user
}

export async function requireRole(role: Role) {
  const user = await requireAuth()
  if (!hasRole((user as any).role as Role, role)) {
    throw new Error('Forbidden')
  }
  return user
}
