import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/client-access',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // TODO: Replace with actual DB lookup when Prisma client is generated
        // const { PrismaClient } = await import('@prisma/client')
        // const prisma = new PrismaClient()
        // const user = await prisma.user.findUnique({ where: { email: credentials.email as string } })

        // Placeholder: accept any valid email/password combination for demo
        return {
          id: '1',
          email: credentials.email as string,
          name: 'Admin',
          role: 'SUPER_ADMIN',
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).role = token.role as string
        ;(session.user as any).id = token.id as string
      }
      return session
    },
  },
})
