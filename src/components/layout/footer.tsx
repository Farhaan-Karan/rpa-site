import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, links } from "@/lib/site";

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
const columns = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Community", href: "/community" },
      { label: "Learn", href: "/learn" },
      { label: "Join Us", href: "/join" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Players", href: "/community#pulse" },
      { label: "Clubs", href: "/community#clubs" },
      { label: "Tournaments", href: "/community#tournaments" },
      { label: "Instagram", href: links.instagram, external: true },
    ],
  },
  {
    title: "Register",
    links: [
      { label: "Player Registration", href: links.registration, external: true },
      { label: "Club / Academy Form", href: links.clubForm, external: true },
      { label: "Tournament Sanction", href: links.tournamentForm, external: true },
      { label: "FAQs", href: "/learn" },
    ],
  },
];

const socials = [
  { icon: IconInstagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="edge mx-auto max-w-[1400px] py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            {/* official RPA wordmark lockup (from the vector logo master) */}
            <Link
              href="/"
              aria-label="Rajasthan Pickleball Association — Home"
              className="inline-block overflow-hidden rounded-xl transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src="/images/rpa-wordmark.png"
                alt="Rajasthan Pickleball Association"
                width={1600}
                height={724}
                sizes="300px"
                quality={95}
                className="h-auto w-[280px]"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/55">
              The official governing body for pickleball in Rajasthan — advancing
              the sport through grassroots development, vibrant communities,
              competitive pathways, and a culture of excellence.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <s.icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold-bright">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => {
                    const cls =
                      "group inline-flex items-center gap-1 text-[0.95rem] text-white/65 transition-colors hover:text-paper";
                    return (
                      <li key={link.label}>
                        {"external" in link && link.external ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                            {link.label}
                            <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        ) : (
                          <Link href={link.href} className={cls}>
                            {link.label}
                            <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rajasthan Pickleball Association. All
            rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white/80">Privacy</Link>
            <Link href="/terms" className="hover:text-white/80">Terms</Link>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white/80">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
