# RPA Site — Handoff / Context Document

**Project:** Official website for the **Rajasthan Pickleball Association (RPA)**.
**Owner:** Farhaan Karan. Feedback comes via WhatsApp from **Aditya Karnik**; **Nihal's site** (`rpa-orcin.vercel.app`) is the design reference. President is **Bhavya Bishnoi**.
**Live:** https://rpa-site.vercel.app (Vercel project `rpa-site`, scope `farhaankaran-7694s-projects`; CLI already authenticated on this Mac).
**GitHub:** https://github.com/Farhaan-Karan/rpa-site (**public**).
**Deploy:** `vercel --prod --yes --scope farhaankaran-7694s-projects`
**Dev:** `.claude/launch.json` → `rpa-dev` (npm run dev, port 3000). Build: `npm run build`.
**AGENTS.md:** says read `node_modules/next/dist/docs/` before writing code (custom Next 16.2.9).

## ⚠️ OPEN / IN-PROGRESS — RPA campaign posters ("make it insane")
The user pasted **10 campaign posters** (Chinkara mascot, players in RPA jerseys, taglines) into chat but they are **NOT on disk** — pasted chat images can't be extracted to files. A `Campaign` section (`src/components/sections/campaign.tsx`) is **already built and wired into the home page** (`src/app/page.tsx`, between `<DistrictsBar/>` and `<NewsPreview/>`). It renders a **Chinkara mascot band + an auto-scrolling poster wall**. It references these files that must be added to `public/images/`:
- `poster-chinkara.png` — the dark "RPA CHINKARA · Desert Speed. Desert Spirit." mascot poster (portrait) — used as the mascot hero image.
- `poster-legacy.png` — "RPA LEGACY" (cream, woman + chinkara + Rajasthan map).
- `poster-matchday.png` — "MATCH DAY" (5 players, dramatic).
- `poster-vijeta.png` — "VIJETA RPA" (4 players, gold).
- `poster-champpoint.png` — "Championship POINT" (player mid-jump, portrait).
- `poster-splatter.png` — ink-splatter chinkara + player (cream).
- `poster-winning.png` — "RPA WINNING CULTURE" (team, yellow, landscape).

**To finish:** get those 7 posters saved as files (ask user to drop them in `~/Downloads` or straight into `public/images/`), name them as above, then `npm run build` + deploy. Until the files exist the home page shows broken images, so **this change is committed to GitHub but NOT deployed** — the live site is the previous good build. Best clean posters for other spots: `poster-playbold` (PLAY BOLD LIVE ACTIVE, teal/orange) would make a great hero/section band too.

## Stack
Next.js 16.2.9 (App Router, Turbopack), TypeScript, Tailwind v4 (tokens in `src/app/globals.css` `@theme`), framer-motion, Leaflet (map), lucide-react **v1.21 fork (NO brand icons — Instagram glyph is in `src/components/ui/icons.tsx`)**. Supabase scaffolded but unused. **Lenis was removed** — native scroll everywhere (fixed repeated scroll-trap complaints); CSS `scroll-behavior:smooth` + `[id]{scroll-margin-top:96px}` handle anchors; `BackToTop` uses `window.scrollTo`.

## Design system (globals.css @theme)
Cream bg `#f5efe4`, ink `#112127`, night `#0f2730`, **gold/orange `#d38a2d`** (gold+orange tokens aliased), rust `#aa5823` (`bg-rust`), **teal `#1a9ab0`** (bright `#37bcd0`, deep `#12788b`), sky, mint. Fonts: **Plus Jakarta Sans** (display+body), **Caveat** (`.font-script`, signatures/Namaste), JetBrains Mono (kickers). `text-gold-gradient`/`text-brand-gradient` = solid gold. Logo = Nihal's `public/images/nihal-logo.jpeg` (round mark, `src/components/layout/logo.tsx`) — **user wants HD version (current is low-res WhatsApp file)**. Motion kept: ScrollProgress, Preloader (once/session via `sessionStorage rpa-intro`), Reveal, Counter, Magnetic, floating `Pickleball` SVG, BackToTop. Removed as "AI-looking": WebGL shader, grain, cursor, scramble, ghost watermarks.

## Pages (7 routes: /, /about, /community, /learn, /join, /privacy, /terms)
- **Home** (`app/page.tsx`): Hero (`sections/hero.tsx` — cream, "Namaste" script, big banner `nihal-home.png` object-cover, floating pickleball, animated Counters 800+/100+/6/9; IPA hyperlinked; **Become a Member + Find a Court** buttons). Then **4 quick boxes** (Find a Court=teal, Become a Member=gold, Instagram=night, **IPA=rust/orange**), **DistrictsBar** (teal marquee of Rajasthan districts → `/about#districts`), **Campaign** (see above, pending posters), **NewsPreview** (3 real Times Now articles, external links), **MembershipCTA** (3 steps).
- **About**: header intro (governing body copy) → Vision/Mission/Values → IPA affiliation band (Visit IPA + **IPA on Instagram** box) → Why Join ("more than a membership—it is a movement") → venues-by-district (animated counters) → **"Meet the Leadership Team"** podium: **Bhavya Bishnoi President** (biggest, gold ring+star), **Kanika Choudhary VP**, **Akshay Singhi Gen Sec** (photos `leader-{bhavya,kanika,akshay}.jpg`; cards **link to Instagram — currently all → RPA Instagram; need each person's handle** via optional `instagram` field on `Leader` in data.ts) → **President's Message** (`sections/president-message.tsx`, full official text + "Read the full message" expand + Caveat signature) → **District Bodies** (`id="districts"`, `districtBodies` in `lib/clubs.ts`: Jaipur Rural/Samridh Sharma, Jaipur Urban/Sameer Khan[Queen's Court], Kota/Kiran Thakar[Court Culture], Bikaner/Pradeep Dharnia, Jodhpur/Hitesh Jain, Jaisalmer/vacant; **tap-to-call**).
- **Community "A Growing Footprint"**: sticky sub-nav (#pulse #clubs #tournaments) → **"A Movement, Measured in Momentum"** pulse (800+ Players, 100+ Mapped Clubs, 6 District Bodies, ∞ Momentum; Register-as-player CTA) → Clubs: **Leaflet `IndiaMap`** (6 district markers, hover-grow, click-flyTo, custom home/reset control, `touch-action:pan-y` so it doesn't trap page scroll) + **`VenueDirectory` (105 real venues** in `lib/clubs.ts`, search+city filter, Google-Maps links) → Tournaments: real **Pickle Up 4.0 · PWR 100 · Udaipur** + PWR tiers; **"Register your Tournament"** → `links.tournamentForm`; "national calendar" → `links.ipa`.
- **Learn**: header ("Easy to learn, endlessly rewarding…") → basics + rulebook/constitution buttons → 3 real embedded YouTube tutorials (`rD1O3R9B0Sw`,`fTvPYdKZqO0`,`USVMB5zEzIc`) → `AskRpa` (client FAQ-match chat) → FAQ accordion (`faqs` in data.ts).
- **Join Us**: 3 cards with full **IPA-affiliated benefit bullets** per category (Player/Club/Tournament), spacing divider before buttons. Links in `lib/site.ts`.
- **/privacy, /terms**: real legal pages (footer links point here).

## Links & handles (`src/lib/site.ts`)
Instagram **@rajasthanpickleballassociation**; email **connect@rajasthanpickleball.com**. `links`: ipa=ipaofficial.com, registration=registration.ipaofficial.com (players), clubForm=Google Form `…SdG7…`, tournamentForm=Google Form `…Sdcaa…`, constitution, rulebook (Drive), instagram, ipaInstagram=`instagram.com/indianpickleballassociation/`.

## Footer
Instagram only (YouTube removed). Columns: Explore / Community (Players,Clubs,Tournaments,Instagram) / Register (Player,Club,Tournament,FAQs). Tagline = "advancing the sport through grassroots development, vibrant communities, competitive pathways, and a culture of excellence." Privacy/Terms/email links work.

## Stats/data notes
800+ players, 100+ "pickle/mapped clubs", 6 district bodies (real: 105 mapped venues). Player xlsx had 35 real members — **PII kept off site**. Sample `players` array in data.ts is unused now (players showcase was removed from Community). Real leadership photos in `public/images/leader-*.jpg`.

## User preferences
Wants bold/insane but **clean, NOT "AI-looking"** (no shimmer/shader/grain/scramble). Light cream heroes, logo-matched teal/orange, phones must work (verified 375px). Rapid WhatsApp change-lists → deploy to Vercel + push to GitHub after each batch → show, don't tell (verify via DOM; headless screenshots go **white at scroll offsets** — a preview artifact, not a bug; inject `#fr` style forcing opacity:1 to see reveals, and `sessionStorage.setItem('rpa-intro','1')` to skip preloader).

## Still needs assets from the user (flagged)
Custom domain **www.rajasthanpickleball.com** (Vercel domain + DNS — user action). **HD logo**. **10 campaign posters as files** (see top). **Individual leader Instagram handles**. **Jersey link** (About). IPA Nationals 2025 / Pickle Up footage. Instagram-feed embed on landing.
