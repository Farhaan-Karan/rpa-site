# RPA Site — Handoff / Context Document

**Project:** Official website for the Rajasthan Pickleball Association (RPA).
**Owner:** Farhaan Karan — building this to demo/hand to the RPA leadership (feedback comes from Aditya Karnik via WhatsApp, and "Nihal's site" is the design reference).
**Live:** https://rpa-site.vercel.app (Vercel project `rpa-site`, scope `farhaankaran-7694s-projects`, CLI already authenticated on this Mac).
**Deploy command:** `vercel --prod --yes --scope farhaankaran-7694s-projects`
**Local dev:** `.claude/launch.json` has a `rpa-dev` server (npm run dev, port 3000). Build with `npm run build`.

## Stack
- Next.js 16.2.9 (App Router, Turbopack) + TypeScript. **Read `node_modules/next/dist/docs/` before writing code (per AGENTS.md — this Next version has breaking changes).**
- Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css` `@theme`).
- framer-motion, Lenis smooth scroll, Leaflet (map), lucide-react (v1.21 fork — **no brand icons**; Instagram glyph lives in `src/components/ui/icons.tsx`).
- Supabase client scaffolded but unused (`src/lib/supabase.ts`); all data is static in `src/lib/`.

## Design system (copied from reference site rpa-orcin.vercel.app, then tuned)
- Palette (globals.css `@theme`): cream bg `#f5efe4`, ink `#112127`, night `#0f2730`, gold `#d38a2d` (aliased as orange/gold tokens), rust `#aa5823`, **teal lightened to `#1a9ab0`** (bright `#37bcd0`, deep `#12788b`) to match logo, mint, sand.
- Fonts: **Plus Jakarta Sans** (display+body), **Caveat** (`.font-script`, used for signature accents), JetBrains Mono (kickers).
- `text-gold-gradient` / `text-brand-gradient` = solid gold now (shimmer removed — user said "less AI-looking").
- Logo: **Nihal's real logo** `public/images/nihal-logo.jpeg`, rendered as a round mark in `src/components/layout/logo.tsx`.
- Motion kept: Lenis smooth scroll, ScrollProgress bar, Preloader (logo spring + curtain, once per session via `sessionStorage rpa-intro`), Reveal, Counter, Magnetic, floating `Pickleball` SVG (`src/components/motion/pickleball.tsx`).
- Motion removed (user rejected as "AI-looking"): WebGL shader, film grain, custom cursor, scramble text, ghost watermarks, velocity marquee on home.

## Pages (5 routes + system)
- **/** — Hero (`sections/hero.tsx`): cream, script "Namaste" intro, Nihal banner illustration `public/images/nihal-home.png` in framed panel, floating pickleball, animated Counters (800+ players, 100+ clubs, 6 district bodies, 9 cities from `liveStats` in `src/lib/data.ts`). Then: 3 tabs (Clubs → /community, Become a Member → /join, Instagram), `DistrictsBar` (teal marquee mirroring Nihal's, smooth CSS animation — replaced a glitchy scroll-pinned section), NewsPreview, MembershipCTA.
- **/about** — light PageHeader → Vision/Mission/Values → Why Join → venues-by-district counts → **IPA affiliation band** → **"Meet the Leaders"** podium (real people: **Bhavya Bishnoi President** biggest w/ gold ring + star badge, **Kanika Choudhary VP**, **Akshay Singhi Gen Sec**; photos `public/images/leader-{bhavya,kanika,akshay}.jpg`; NO bios by request) → **PresidentMessage** (`sections/president-message.tsx`, full official text, expandable "Read the full message", Caveat signature) → **District Bodies** grid (`districtBodies` in `src/lib/clubs.ts`: Jaipur Rural/Samridh Sharma, Jaipur Urban/Sameer Khan (Queen's Court), Kota/Kiran Thakar (Court Culture), Bikaner/Pradeep Dharnia, Jodhpur/Hitesh Jain, Jaisalmer/vacant — tap-to-call links).
- **/community** — "Our Communities" header, sticky sub-nav (#players #clubs #tournaments). Players: `PlayersShowcase` (sample players, click → modal w/ stats + signup link). Clubs: **Leaflet `IndiaMap`** (6 district circle markers sized by venue count, hover grow, click flyTo, custom **home/reset control**, Carto light tiles) + `VenueDirectory` (**105 real venues** w/ search + city filter, Google Maps links — data `src/lib/clubs.ts`). Tournaments: real sanctioned event **Pickle Up 4.0, PWR 100, 15–17 May 2026, Sports Fusion Udaipur, ₹1,00,000** + PWR tier explainer; "national calendar" link → links.ipa (was wrongly registration).
- **/learn** — basics cards, rulebook (Google Drive) + IPA constitution buttons, **3 real embedded YouTube tutorials** (rD1O3R9B0Sw, fTvPYdKZqO0, USVMB5zEzIc via youtube-nocookie), `AskRpa` (client-side FAQ-matching chat, no API), FAQ accordion (8 Qs in `src/lib/data.ts`).
- **/join** — 3 distinct registration sections (exact links, in `links` of `src/lib/site.ts`):
  1. Player Registration → https://registration.ipaofficial.com
  2. Club/Academy Registration → Google Form `1FAIpQLSdG7gQOB80...`
  3. IPA Tournament Sanction Approval → Google Form `1FAIpQLSdcaaefkHxpMxc...`
- Nav (`src/lib/site.ts` mainNav): **Home, About, Community, Learn + "Join Us" CTA**. Footer: Instagram only (YouTube removed by request), 3 register links, no dead routes.
- Instagram everywhere: **@rajasthanpickleballassociation** → https://www.instagram.com/rajasthanpickleballassociation/

## Real data / facts used
- Stats (Aditya): **800+ registered players, 100+ affiliated clubs, 6 district bodies**. Venue list = 105 real venues (Jaipur 87, Udaipur 5, Jodhpur 4, Kota 4, Bhilwara 3, Ajmer 2).
- Player registration xlsx (35 real members) was analyzed but **PII kept off the site** (only aggregates).
- Old fabricated content (players Aarav Mehta etc., news, sample data in `src/lib/data.ts`) is still placeholder/sample — flagged to user; players showcase uses it knowingly.
- Verified hierarchy (earlier research): IPA affiliated; AIPA records listed Raj Singh/Ajit Singh but user's real leadership (Bhavya/Kanika/Akshay) supersedes for this site.

## User preferences (important)
- Wants "super advanced, ultra cool, clean, fun, colourful — but NOT AI-looking". Rejects: shimmer gradients, shaders, grain, scramble, dark navy heroes.
- Wants light cream heroes matching logo palette; lighter blues (done); mobile must work well (verified at 375px).
- Iteration style: rapid WhatsApp-style change lists; deploy to Vercel after every batch; show don't tell (screenshots/verification).
- Known headless-preview quirks: IntersectionObserver doesn't fire → Reveal elements stay opacity:0 in screenshots (inject `#fr` style forcing opacity 1 to verify), and `sessionStorage.setItem('rpa-intro','1')` to skip preloader.

## Open items / possible next steps
- President's message: full text now in (from Aditya 15/07/26).
- Placeholder players/news remain — could be replaced with real ones when provided.
- Jaisalmer district coordinator TBD ("coming soon" card).
- Possible: real photos for news/learn, PWA/meta polish, animated counters elsewhere, replace sample tournament list as more get sanctioned.
