# VizTR - Architecture Visualization Studio

## Project Overview
VizTR is a full-stack SaaS platform for architecture visualization and XR experiences. It combines a marketing website, admin dashboard, client portal, and hybrid XR engine into a pnpm monorepo.

## Tech Stack
- **Frontend**: Next.js 16.2 (App Router, Turbopack), React 19, Tailwind CSS 4.0+
- **XR Engine**: Babylon.js (3D), Marzipano (360 panoramas), WebXR
- **Auth**: NextAuth v5 (JWT, Credentials provider)
- **Database**: PostgreSQL + Prisma ORM (30+ models)
- **State**: Zustand
- **Validation**: Zod 4
- **Icons**: Lucide React
- **Monorepo**: pnpm workspaces + Turborepo

## How to Run Locally
```bash
# Install dependencies
pnpm install

# Set up database
cp .env.example .env
# Edit .env with your DATABASE_URL

# Generate Prisma client
cd packages/database && pnpm db:generate

# Push schema to database
pnpm db:push

# Seed database (optional)
pnpm db:seed

# Start dev servers
pnpm dev          # All apps
pnpm dev --filter @viztr/web    # Web only
pnpm dev --filter @viztr/admin  # Admin only
```

## How to Deploy (Vercel)
1. Connect GitHub repo to Vercel
2. Set environment variables:
   - `DATABASE_URL` - PostgreSQL connection string
   - `NEXTAUTH_SECRET` - Random string (generate with `openssl rand -base64 32`)
   - `NEXTAUTH_URL` - Your production URL
3. Build settings:
   - Build Command: `cd ../.. && pnpm build`
   - Install Command: `pnpm install`
4. Enable preview deploys

## Environment Variables
| Variable | Required | Description |
|----------|----------|-------------|
| DATABASE_URL | Yes | PostgreSQL connection string |
| NEXTAUTH_SECRET | Yes | JWT secret for NextAuth |
| NEXTAUTH_URL | Yes | Base URL for NextAuth |
| GOOGLE_CLIENT_ID | No | Google OAuth client ID |
| GOOGLE_CLIENT_SECRET | No | Google OAuth client secret |
| REDIS_URL | No | Redis for caching |
| PIXEL_STREAMING_URL | No | Pixel streaming service URL |

## Test Credentials
| Role | Email | Password |
|------|-------|----------|
| Admin | admin@viztr.com | password123 |
| Manager | manager@viztr.com | password123 |
| User | user@viztr.com | password123 |

## Known Issues
- Marzipano lacks TypeScript declarations (custom `.d.ts` added)
- Middleware uses simplified auth (placeholder authorize); activates when PostgreSQL connected
- Pixel streaming backend is placeholder (WebSocket integration pending)
- Turbopack warns about workspace root due to stray `package-lock.json` in parent directory
- `next-auth@5.0.0-beta.32` installed (exact version, not `^5.0.0`)

## Next Steps
1. Connect to PostgreSQL and run `pnpm db:push` to create tables
2. Run `pnpm db:seed` to populate sample data
3. Implement Google OAuth in NextAuth config
4. Build pixel streaming backend (GPU allocation service)
5. Add Redis caching layer
6. Set up Cloudflare CDN
7. Add end-to-end tests (Playwright)
8. Set up CI/CD pipeline
9. Integrate analytics provider (Mixpanel/PostHog)
10. Add email transactional service (Resend/SendGrid)
