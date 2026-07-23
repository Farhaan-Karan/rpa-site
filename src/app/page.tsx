import Link from "next/link";
import { ArrowUpRight, MapPin, UserPlus, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { DistrictsBar } from "@/components/sections/districts-bar";
import { Campaign } from "@/components/sections/campaign";
import { NewsPreview } from "@/components/sections/news-preview";
import { MembershipCTA } from "@/components/sections/cta";
import { Reveal } from "@/components/motion/reveal";
import { Instagram } from "@/components/ui/icons";
import { links, siteConfig } from "@/lib/site";

const tabs = [
  {
    href: "/community#clubs",
    label: "Find a Court",
    title: "Find a court",
    text: "Browse 100+ pickle clubs and academies mapped across six districts.",
    icon: MapPin,
    external: false,
    cls: "bg-teal text-paper",
    chip: "bg-paper/15",
    cta: "Open",
  },
  {
    href: "/join",
    label: "Become a Member",
    title: "Join RPA",
    text: "Get your official IPA player ID, ranking points and tournament access.",
    icon: UserPlus,
    external: false,
    cls: "bg-gold text-paper",
    chip: "bg-paper/15",
    cta: "Open",
  },
  {
    href: links.instagram,
    label: "Instagram",
    title: siteConfig.instagramHandle,
    text: "Reels, district highlights and official announcements.",
    icon: Instagram,
    external: true,
    cls: "bg-night text-paper",
    chip: "bg-paper/10",
    cta: "Follow",
  },
  {
    href: links.ipa,
    label: "Affiliated to",
    title: "IPA",
    text: "The Indian Pickleball Association — our national governing body.",
    icon: ShieldCheck,
    external: true,
    cls: "bg-rust text-paper",
    chip: "bg-paper/15",
    cta: "Visit",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick-access boxes */}
      <section className="edge bg-cream pb-8 pt-4">
        <div className="mx-auto grid max-w-[1400px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tabs.map((t, i) => {
            const Card = (
              <div
                className={`group flex h-full flex-col justify-between rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5 ${t.cls}`}
              >
                <div>
                  <div className={`inline-flex size-12 items-center justify-center rounded-xl ${t.chip}`}>
                    <t.icon className="size-6" />
                  </div>
                  <div className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.24em] opacity-75">
                    {t.label}
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-extrabold">{t.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed opacity-85">{t.text}</p>
                </div>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold">
                  {t.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            );
            return (
              <Reveal key={t.label} delay={i}>
                {t.external ? (
                  <a href={t.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {Card}
                  </a>
                ) : (
                  <Link href={t.href} className="block h-full">
                    {Card}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <DistrictsBar />
      <Campaign />
      <NewsPreview />
      <MembershipCTA />
    </>
  );
}
