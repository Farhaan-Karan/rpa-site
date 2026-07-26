import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { districts, districtBodies } from "@/lib/clubs";
import { PresidentMessage } from "@/components/sections/president-message";
import { PosterFeature } from "@/components/sections/poster-feature";
import { Counter } from "@/components/motion/counter";
import { Instagram } from "@/components/ui/icons";
import { leadership } from "@/lib/data";
import { links, siteConfig } from "@/lib/site";
import { IdCard, TrendingUp, MapPinned, HeartHandshake, ArrowUpRight, Star, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The vision, mission and community of the Rajasthan Pickleball Association — the state body affiliated to the Indian Pickleball Association.",
};

const whyJoin = [
  { icon: IdCard, title: "Official Player ID", text: "Your recognised RPA / IPA identity to compete and represent Rajasthan." },
  { icon: TrendingUp, title: "Ranking Points", text: "Earn national PWR points at sanctioned tournaments across the state." },
  { icon: MapPinned, title: "100+ Venues", text: "Play at any of the pickle clubs and academies mapped across six districts." },
  { icon: HeartHandshake, title: "Real Community", text: "Leagues, open play, and events that welcome every age and level." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About RPA"
        watermark="RPA"
        title={
          <>
            The home of <span className="text-brand-gradient">pickleball</span> in
            Rajasthan.
          </>
        }
        intro="Rajasthan Pickleball Association is the official state governing body for the sport — affiliated with the Indian Pickleball Association and driven by a simple philosophy: built by players, for players."
        image="/images/community.jpg"
      />

      {/* Vision / Mission / Values */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { k: "Vision", t: "To establish Rajasthan as India's leading pickleball state — setting the national benchmark for grassroots development, player pathways, and competitive excellence." },
            { k: "Mission", t: "To make pickleball accessible across every community while building a professional, transparent, and inclusive ecosystem in which players, coaches, clubs, and officials can thrive." },
            { k: "Values", t: "Integrity, inclusion, and excellence — creating a welcoming, nurturing pathway for everyone, from first-time players to professional athletes." },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i}>
              <div className="h-full rounded-2xl border border-line bg-paper p-7">
                <Kicker>{c.k}</Kicker>
                <p className="mt-4 text-xl font-medium leading-relaxed text-ink">
                  {c.t}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Legacy poster feature */}
      <PosterFeature
        poster="/images/poster-legacy.png"
        alt="RPA Legacy — building champions, building Rajasthan"
        kicker="The Legacy"
        title="Join. Play."
        accent="Represent."
        body="From the very first paddle to a community spanning six districts, RPA carries one belief forward — that pickleball belongs to everyone. What began as a game is now a movement, taking root in every corner of the state."
        cta={{ href: "/join", label: "Become a member" }}
      />

      {/* Official affiliation — IPA */}
      <section className="edge py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 rounded-3xl bg-night px-8 py-10 text-paper sm:flex-row sm:justify-between sm:py-12">
          <div className="max-w-xl text-center sm:text-left">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-mint">
              Official Affiliation
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              An affiliated member of the{" "}
              <span className="text-gold-bright">Indian Pickleball Association</span>.
            </h2>
            <p className="mt-3 text-white/70">
              RPA is officially affiliated with the Indian Pickleball Association,
              ensuring that every sanctioned tournament and registered player
              contributes to recognised national rankings and development pathways.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <a
              href={links.ipa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-gold-deep"
            >
              Visit IPA <ArrowUpRight className="size-4" />
            </a>
            <a
              href={siteConfig.ipaInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-white/10"
            >
              <Instagram className="size-4" /> IPA on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Why join */}
      <Section className="bg-mist">
        <SectionHeading
          kicker="Why Join"
          title={
            <>
              More than a membership — <span className="text-brand-gradient">it is a movement.</span>
            </>
          }
          intro="Joining RPA connects you to one of Rajasthan's fastest-growing sporting communities, giving you the platform, opportunities, and support to play, compete, progress, and truly belong."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyJoin.map((w, i) => (
            <Reveal key={w.title} delay={i}>
              <div className="h-full rounded-2xl border border-line bg-paper p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-teal/12 text-teal-deep">
                  <w.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={1}>
          <ButtonLink href="/join" variant="gold" size="lg" arrow className="mt-10">
            Become a member
          </ButtonLink>
        </Reveal>
      </Section>

      {/* Venues across Rajasthan */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Venues Across Rajasthan"
            title={
              <>
                From the Pink City to the Lake City,{" "}
                <span className="text-brand-gradient">
                  pickleball courts are opening across the state.
                </span>
              </>
            }
          />
          <Reveal>
            <ButtonLink href="/community" variant="outline" arrow>
              Explore the map
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {districts.map((d, i) => (
            <Reveal key={d.city} delay={i}>
              <div className="group rounded-2xl border border-line bg-paper p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_16px_36px_-20px_rgba(211,138,45,0.5)]">
                <div className="font-display text-4xl font-extrabold text-brand-gradient">
                  <Counter to={d.count} />
                </div>
                <div className="mt-1 font-display font-bold text-ink">{d.city}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Born to Lead poster feature */}
      <PosterFeature
        poster="/images/poster-bornlead.png"
        alt="RPA — Born to Lead"
        ratio="aspect-[2/3]"
        tone="night"
        reverse
        kicker="The People"
        title="Born to"
        accent="lead."
        body="Behind RPA is a team of players, coordinators, and volunteers who show up for the sport every single day — building courts, running leagues and opening doors so the next generation has somewhere to play."
      />

      {/* Leadership */}
      <Section className="bg-mist">
        <SectionHeading
          align="center"
          kicker="Leadership"
          title={
            <>
              Meet the <span className="text-gold">Leadership Team.</span>
            </>
          }
          intro="The people driving pickleball forward across Rajasthan. Tap a photo to follow along."
        />
        <div className="mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-end lg:gap-10">
          {leadership.map((l, i) => {
            const isPres = i === 0;
            const order = isPres
              ? "order-first lg:order-2"
              : i === 1
                ? "lg:order-1"
                : "lg:order-3";
            return (
              <Reveal
                key={l.name}
                delay={i}
                className={`group relative w-full ${
                  isPres ? "max-w-[420px] lg:w-[420px]" : "max-w-[340px] lg:w-[340px]"
                } ${order}`}
              >
                {isPres && (
                  <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-gold/45 via-gold/20 to-teal/35 blur-2xl" />
                )}
                <a
                  href={l.instagram ?? siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${l.name} on Instagram`}
                  className={`relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-night transition-transform duration-500 group-hover:-translate-y-2 ${
                    isPres
                      ? "shadow-[0_40px_80px_-36px_rgba(170,88,35,0.55)] ring-2 ring-gold/60"
                      : "shadow-[0_28px_60px_-34px_rgba(17,33,39,0.6)] ring-1 ring-line"
                  }`}
                >
                  <Image
                    src={l.photo}
                    alt={l.name}
                    fill
                    draggable={false}
                    sizes="420px"
                    className="select-none object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
                  <span className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-night/50 text-paper opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Instagram className="size-4" />
                  </span>
                  {isPres && (
                    <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-[0.64rem] font-bold uppercase tracking-wide text-paper shadow-lg">
                      <Star className="size-3.5" /> President
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-paper sm:p-7">
                    <div className={`h-1 rounded-full ${isPres ? "w-14 bg-gold" : "w-10 bg-teal-bright"}`} />
                    <h3
                      className={`mt-4 font-display font-extrabold leading-[1.02] ${
                        isPres ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {l.name}
                    </h3>
                    <div className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-mint">
                      {l.role}
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* President's Message */}
      <Section>
        <PresidentMessage />
      </Section>

      {/* District Bodies */}
      <Section id="districts" className="bg-mist">
        <SectionHeading
          align="center"
          kicker="District Bodies"
          title={
            <>
              Six <span className="text-gold">district bodies.</span>
            </>
          }
          intro="Local leaders driving pickleball in every corner of the state."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {districtBodies.map((d, i) => (
            <Reveal key={d.district} delay={i}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-teal/40">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-teal" />
                  <span className="font-display text-lg font-bold text-ink">{d.district}</span>
                </div>
                {d.head ? (
                  <>
                    <div className="mt-4 text-[0.7rem] uppercase tracking-wider text-ink-muted">
                      Coordinator
                    </div>
                    <div className="font-display font-bold text-ink">{d.head}</div>
                    {d.runs && (
                      <div className="mt-1 text-xs text-ink-muted">Runs {d.runs}</div>
                    )}
                    {d.phone && (
                      <a
                        href={`tel:${d.phone.replace(/\s/g, "")}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep hover:text-gold"
                      >
                        <Phone className="size-3.5" /> {d.phone}
                      </a>
                    )}
                  </>
                ) : (
                  <div className="mt-4 rounded-lg bg-mist px-3 py-2 text-sm text-ink-muted">
                    Coordinator — coming soon
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
