import type { Metadata } from "next";
import { UserPlus, Building2, Trophy, ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { Instagram } from "@/components/ui/icons";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Register as a player, affiliate your club or academy, or get your tournament sanctioned with the Rajasthan Pickleball Association.",
};

const options = [
  {
    icon: UserPlus,
    tag: "For Players",
    title: "Player Registration",
    text: "Get your official IPA / RPA player ID, become eligible for sanctioned events and earn national ranking points.",
    perks: ["Official player ID", "Tournament eligibility", "PWR ranking points"],
    cta: "Register on IPA Portal",
    href: links.registration,
    theme: "gold",
  },
  {
    icon: Building2,
    tag: "For Venues",
    title: "Club / Academy Registration",
    text: "Affiliate your club or academy with RPA to join the official network of 100+ venues and host sanctioned play.",
    perks: ["Official affiliation badge", "Listing in our directory", "Right to host events"],
    cta: "Open Registration Form",
    href: links.clubForm,
    theme: "teal",
  },
  {
    icon: Trophy,
    tag: "For Organisers",
    title: "Tournament Sanction Approval",
    text: "Running an event? Apply to have it officially sanctioned under the IPA so results count towards PWR rankings.",
    perks: ["Official IPA sanctioning", "PWR ranking points", "Listed on the calendar"],
    cta: "Open Sanction Form",
    href: links.tournamentForm,
    theme: "ink",
  },
];

const themes: Record<string, { card: string; chip: string; btn: string; check: string }> = {
  gold: {
    card: "border-gold/25 bg-gradient-to-b from-gold/[0.06] to-transparent",
    chip: "bg-gold/12 text-gold-deep",
    btn: "bg-gold text-paper hover:bg-gold-deep",
    check: "text-gold-deep",
  },
  teal: {
    card: "border-teal/25 bg-gradient-to-b from-teal/[0.06] to-transparent",
    chip: "bg-teal/12 text-teal-deep",
    btn: "bg-teal text-paper hover:bg-teal-deep",
    check: "text-teal-deep",
  },
  ink: {
    card: "border-ink/15 bg-gradient-to-b from-ink/[0.05] to-transparent",
    chip: "bg-ink/8 text-ink",
    btn: "bg-ink text-paper hover:bg-teal",
    check: "text-ink",
  },
};

export default function JoinPage() {
  return (
    <>
      <PageHeader
        kicker="Join Us"
        title={
          <>
            Be part of the <span className="text-gold">movement.</span>
          </>
        }
        intro="Three ways to get involved — pick the one that fits and you'll be set up in a few minutes."
        image="/images/action.jpg"
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {options.map((o, i) => {
            const t = themes[o.theme];
            return (
              <Reveal key={o.title} delay={i}>
                <div className={`flex h-full flex-col rounded-3xl border bg-paper p-8 ${t.card}`}>
                  <div className={`inline-flex size-14 items-center justify-center rounded-2xl ${t.chip}`}>
                    <o.icon className="size-7" />
                  </div>
                  <div className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                    {o.tag}
                  </div>
                  <h2 className="mt-1.5 font-display text-2xl font-extrabold text-ink">
                    {o.title}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{o.text}</p>

                  <ul className="mt-5 space-y-2.5">
                    {o.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check className={`mt-0.5 size-4 shrink-0 ${t.check}`} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-colors ${t.btn}`}
                  >
                    {o.cta} <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-night p-8 text-center text-paper">
            <h3 className="font-display text-2xl font-extrabold">Questions before you join?</h3>
            <p className="max-w-xl text-white/70">
              DM us on Instagram — we&apos;re quick to reply and happy to help you
              find your nearest court.
            </p>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-gold-deep"
            >
              <Instagram className="size-4" /> @rajasthanpickleballassociation
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
