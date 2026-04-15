# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js Version Warning

This project uses **Next.js 16 + React 19**, which have breaking changes from widely-known versions. Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices. Do not assume APIs match your training data.

## Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

No `typecheck` script exists — use `tsc --noEmit` directly if needed.

## Architecture

### Stack
- Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4
- No state management library, no database, no auth — all content is static data in `src/lib/`

### Route Structure
- `/` → `src/app/page.tsx` — landing page (newsletter, manifesto, model showcase, Oktal product)
- `/wiki` → `src/app/wiki/page.tsx` — index of all mental models
- `/wiki/[slug]` → `src/app/wiki/[slug]/page.tsx` — individual model detail page
- `/forum` → `src/app/forum/page.tsx` — forum page (currently static mockup data)

### Data
All wiki content lives in `src/lib/wiki-content.ts` as a `wikiContent` array. Each entry has: `id`, `slug`, `name`, `thinker`, `icon`, `color`, `definition`, and extended content fields. This is the single source of truth for all mental models.

### Styling
CSS is written as **custom class names in `globals.css`**, not Tailwind utilities. Tailwind is imported at the top (`@import "tailwindcss"`) but the project uses its own design system via CSS variables. Do not add Tailwind utility classes to existing components — follow the existing CSS class pattern.

Design tokens (in `globals.css`):
- Colors: `--black`, `--off-white`, `--amber`, `--amber-dim`, `--gray`, `--gray-mid`, `--gray-text`
- Fonts: `--serif` (Playfair Display), `--sans` (DM Sans), `--mono` (JetBrains Mono)

### Components
- `src/components/Header.tsx` — fixed nav with blur backdrop, shared across all pages
- `src/components/ParticleBG.tsx` — animated particle background, rendered in root layout
- `src/app/layout.tsx` — sets metadata, loads Google Fonts, renders `ParticleBG` globally

### Path Alias
`@/` maps to `src/` (configured in `tsconfig.json`). Use `@/lib/...`, `@/components/...` for imports.

## AIOX Agent Framework

This project uses Synkra AIOX for agent-orchestrated development. Rules live in `.claude/rules/`:
- `agent-authority.md` — which agent owns which operations (e.g., only `@devops` can `git push` or create PRs)
- `workflow-execution.md` — 4 primary workflows: Story Dev Cycle, QA Loop, Spec Pipeline, Brownfield Discovery
- `mcp-usage.md` — MCP tool selection priority (always prefer native Claude Code tools over docker-gateway)

Activate agents with `@agent-name` syntax. Story-driven development: all non-trivial work should have a story in `docs/stories/`.
