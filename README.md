# Rajasthan Pickleball Association — Official Website

The digital home of pickleball in Rajasthan. A premium, production-ready website
built to the standard of the world's leading sports bodies (F1, ATP, NBA,
Wimbledon).

## Stack

- **Next.js 16** (App Router, Turbopack) · **TypeScript**
- **Tailwind CSS v4** (CSS-first design system in `globals.css`)
- **Framer Motion** (scroll reveals, animated counters, layout transitions)
- **Supabase** (`@supabase/ssr`) — backend-ready, query-swap architecture
- **lucide-react** icons · custom SVG brand mark

## Design system

Defined in [`src/app/globals.css`](src/app/globals.css):

| Token | Value |
| --- | --- |
| Ink (primary) | `#111111` |
| Paper | `#FFFFFF` |
| Royal Rajasthan Gold | `#D4A017` |
| Mist / Line | `#F7F7F7` / `#EAEAEA` |

- **Display:** Bricolage Grotesque · **Body:** Inter · **Mono/labels:** JetBrains Mono
- Premium easing `cubic-bezier(0.16,1,0.3,1)`, generous whitespace, reduced-motion safe.

## Structure

```
src/
  app/                 # Routes (App Router)
    page.tsx           # Homepage (hero, stats, about, map, tournaments, players, news, sponsors, CTA)
    about/ leadership/ tournaments/[slug]/ rankings/
    players/[slug]/ courts/ clubs/ membership/ media/[slug]/ contact/
    sitemap.ts robots.ts not-found.tsx
  components/
    layout/            # navbar, footer, logo, page-header
    sections/          # homepage + reusable sections (hero, map, bracket, …)
    ui/                # button, cards, primitives (Section, SectionHeading, Badge…)
    motion/            # Reveal, Counter
  lib/
    data.ts            # Typed sample data — shapes mirror Supabase tables
    supabase.ts        # Browser client (query-swap ready)
    site.ts utils.ts
public/images/         # Higgsfield-generated premium sports imagery
```

## Imagery

All hero/portrait/editorial imagery in `public/images/` was generated with
Higgsfield (nano_banana_pro), art-directed for a black-and-gold, golden-hour
Rajasthan aesthetic. The hero supports an optional background video at
`public/videos/hero.mp4` and gracefully falls back to `hero.jpg` as the poster.

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Copy `.env.example` → `.env.local` and fill in the URL + anon key.
3. Create tables matching the shapes in `src/lib/data.ts`
   (`players`, `tournaments`, `rankings`, `clubs`, `courts`, `news`,
   `sponsors`, `memberships`).
4. Swap each static import for a query, e.g.
   ```ts
   const supabase = getSupabaseBrowser();
   const { data: players } = await supabase.from("players").select("*").order("rank");
   ```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (36 static/SSG routes)
```

## Features

- Full-screen cinematic hero with CTAs and live stat ticker
- Animated live statistics, interactive Rajasthan map (6 city hubs)
- Tournament listing + detail with championship brackets and registration
- Dynamic rankings (Men / Women / Junior / Doubles) with movement indicators
- Searchable, filterable player directory + rich player profiles
- Court locator with filters and a live map panel
- Clubs & academies directory; membership plans + application form
- Media centre (news, films, gallery) + article pages
- Modern contact experience
- SEO: per-page metadata, OpenGraph, JSON-LD `SportsOrganization`, sitemap, robots
- Accessible, mobile-first, reduced-motion aware, Lighthouse-optimized
