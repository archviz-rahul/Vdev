VIZTR PLATFORM — SEQUENTIAL PROMPT GUIDE
==========================================

PURPOSE
-------
This file explains the order and workflow for building the VizTR platform using Google AI Studio and GitHub.


PROJECT SETUP (DO THIS FIRST)
------------------------------
1. Create a GitHub repository named "viztr-platform"
2. In Google AI Studio, start a new chat project
3. Import the GitHub repo into AI Studio via "Import from GitHub"
4. After each prompt generates code, push the result to GitHub
5. Pull locally to C:\Users\Arch_Viz\Desktop\VDev\viztr-platform and run pnpm dev to verify


PROMPT FILES (PASTE IN THIS EXACT ORDER)
-----------------------------------------
File Name                                    What It Builds
------------------------------------------  --------------------------------------
00_README_PROMPT_GUIDE.txt                   This file — workflow reference
01_prompt_foundation.txt                     Monorepo, stack, header, theme, tokens
02_prompt_homepage_part1.txt                 Homepage sections 1 through 8
03_prompt_homepage_part2_and_pages.txt       Homepage sections 9 through 16 + all 21 pages
04_prompt_portfolio_and_immersive.txt        Portfolio, gallery viewer, 360 viewer, 3D viewer
05_prompt_backend_and_admin.txt              Prisma schema, auth, RBAC, admin CMS shell
06_prompt_client_portal_and_forms.txt        Client login, track project, all forms
07_prompt_xr_engine_hybrid.txt               Hybrid Tour/VR engine, hotspots, annotations
08_prompt_pixel_streaming_and_polish.txt     Pixel Streaming, VR mode, SEO, performance
09_prompt_qa_and_launch.txt                  QA checklist, deployment, handoff


TECH STACK (AUTHORITATIVE — USE ONLY THESE)
--------------------------------------------
Category               Technology
---------------------  -------------------------------------------
Frontend Framework     Next.js 16.2 (App Router)
Styling                Tailwind CSS 4.0+ (CSS-first config)
Typography             next/font (self-hosted)
Data Fetching          TanStack Query 5.56+
Client State           Zustand 4.5+
Hosting                Vercel
CDN and Asset Delivery Cloudflare CDN + Cloudflare R2
Caching                Redis 7+
Background Processing  BullMQ 5.15+
XR / 3D Engine         Babylon.js 8+ (WebXR native)
360 Tour Viewer        Marzipano (lightweight panorama)
AI Inference           Groq via OmniRoute
Monitoring            Vercel Analytics + Custom XR Overlay


HEADER SPECIFICATION (MANDATORY FOR ALL PROMPTS)
-------------------------------------------------
Layout: Left | Center | Right

Left:   VizTR logo text, links to /, styled premium
Center: Navigation links
        - Home       -> /
        - Studio     -> dropdown with 3 items: Exterior, Interior, Walkthrough
        - XR World   -> dropdown with 5 items: WebXR, WebAR, Virtual Reality, Virtual Tour, Pixel Streaming
        - Contact    -> /contact
Right:  Theme toggle icon (cycles Light / Dark / System)
        Login icon   -> /client-access

Behavior:
- Sticky header, backdrop-blur glass effect
- Mobile: hamburger menu with same 4 items and same dropdowns
- Active page gets underline indicator
- Theme toggle persists choice to localStorage
- Login icon shows user avatar if logged in, else generic icon


FILE STRUCTURE
--------------
viztr-platform/
  apps/
    web/                  Next.js 16.2 public website
    admin/                Next.js admin dashboard
    client-portal/        Next.js client portal
  packages/
    ui/                   Shared UI components
    database/             Prisma schema and migrations
    utils/                Shared utilities
    types/                TypeScript type definitions


WORKFLOW
--------
Step 1: Paste prompt 01 into AI Studio
Step 2: Review generated code
Step 3: Push to GitHub
Step 4: Pull locally to C:\Users\Arch_Viz\Desktop\VDev\viztr-platform
Step 5: Run pnpm install && pnpm dev
Step 6: Verify header renders, theme toggle works, dropdowns work
Step 7: Proceed to prompt 02
Step 8: Repeat for each prompt


VERIFICATION AFTER EACH PROMPT
-------------------------------
Each prompt ends with a "VERIFY" section. You MUST check these before proceeding.

Run locally:
  cd C:\Users\Arch_Viz\Desktop\VDev\viztr-platform
  pnpm install
  pnpm dev

Check in browser:
- http://localhost:3000 loads without error
- Header matches spec exactly
- Theme toggle cycles Light/Dark/System
- Studio dropdown shows Exterior/Interior/Walkthrough
- XR World dropdown shows all 5 items
- No console errors
- Mobile responsive at 375px width


COMMON ISSUES
-------------
Issue: <a href="#"> redirects to claude.ai in artifact viewer
Fix:   Use <div> elements with JavaScript scroll handlers and e.preventDefault()
       In actual Next.js code, use <Link> from next/link normally

Issue: Dropdown items not clickable
Fix:   Ensure dropdown parent has onMouseEnter/onMouseLeave or onClick
       Dropdown must be positioned absolute with z-index above content

Issue: Theme not persisting
Fix:   Store in localStorage key "viztr-theme"
       Read on mount in layout.tsx
       Pass to next-themes ThemeProvider


SOURCE DOCUMENTS
----------------
1 requirement.txt     Full platform requirements (1382 lines)
2 requirement.txt     Duplicate of above
tech stack.txt        Selected technology stack with rationale
overview.txt          Platform architecture and site map


COMMIT CONVENTION
-----------------
Use conventional commits:
  feat: add feature
  fix: fix bug
  refactor: restructure code
  docs: add documentation
  chore: maintenance tasks


END OF GUIDE
