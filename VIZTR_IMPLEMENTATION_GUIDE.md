# VizTR Implementation Guide

## Overview

This guide documents the sequential prompt system for building the VizTR Architecture Visualization Studio + XR World Platform. Each prompt file is designed to be pasted into Google AI Studio in order, with results pushed to GitHub.

## Project Structure

```
C:\Users\Arch_Viz\Desktop\VDev\
  00_README_PROMPT_GUIDE.txt          Workflow and tech stack reference
  01_prompt_foundation.txt            Monorepo, header, theme, design tokens
  02_prompt_homepage_part1.txt        Homepage sections 1-8
  03_prompt_homepage_part2_and_pages.txt  Homepage 9-16 + 21 pages
  04_prompt_portfolio_and_immersive.txt   Portfolio, gallery, 360, 3D viewers
  05_prompt_backend_and_admin.txt     Prisma, auth, RBAC, admin CMS
  06_prompt_client_portal_and_forms.txt   Client portal, tracking, 6 forms
  07_prompt_xr_engine_hybrid.txt      4-layer XR engine core
  08_prompt_pixel_streaming_and_polish.txt Pixel Streaming, VR, SEO, performance
  09_prompt_qa_and_launch.txt         QA, seeding, deployment
  VIZTR_IMPLEMENTATION_GUIDE.md       This file
```

## Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | Next.js 16.2 (App Router) |
| Styling | Tailwind CSS 4.0+ |
| Typography | next/font (Inter, Playfair Display) |
| Data Fetching | TanStack Query 5.56+ |
| Client State | Zustand 4.5+ |
| 3D/XR | Babylon.js 8+ |
| 360 Tours | Marzipano |
| AI | Groq via OmniRoute |
| Database | Prisma + PostgreSQL |
| Auth | NextAuth |
| Hosting | Vercel |
| CDN | Cloudflare + R2 |
| Cache | Redis 7+ |

## Header Specification

- **Left**: VizTR logo (Playfair Display)
- **Center**: Home | Studio (dropdown: Exterior, Interior, Walkthrough) | XR World (dropdown: WebXR, WebAR, VR, Virtual Tour, Pixel Streaming) | Contact
- **Right**: Theme toggle (Light/Dark/System) | Login icon -> /client-access
- Sticky, backdrop-blur, mobile hamburger

## Usage

1. Create GitHub repo `viztr-platform`
2. Paste Prompt 01 into AI Studio
3. Review generated code
4. Push to GitHub
5. Pull locally and run `pnpm dev`
6. Verify against the checklist in the prompt
7. Proceed to next prompt
8. Repeat for all 10 prompts

## Source Documents

- `1 requirement.txt` - Full platform requirements (1382 lines)
- `tech stack.txt` - Selected technology rationale
- `overview.txt` - Platform architecture and site map

## Current Phase

Phase 1: Foundation and sequential prompt creation (complete)
Phase 2: Execute prompts 01-09 in AI Studio
Phase 3: Local verification and GitHub sync
Phase 4: Deployment to Vercel
