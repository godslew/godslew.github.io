# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server

## Architecture

This is a Next.js 16 static site using the App Router with TypeScript and Tailwind CSS 4.

**Key Configuration:**
- Static export enabled (`output: 'export'` in next.config.ts) - generates static HTML for GitHub Pages deployment
- Path alias: `@/*` maps to `./src/*`
- Tailwind CSS 4 via `@tailwindcss/postcss` plugin

**Project Structure:**
- `src/app/` - App Router pages and layouts
- `src/app/layout.tsx` - Root layout with Geist font configuration
- `src/app/page.tsx` - Home page component
