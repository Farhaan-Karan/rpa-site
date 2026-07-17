import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { districts, districtBodies } from "@/lib/clubs";
import { PresidentMessage } from "@/components/sections/president-message";
import { Counter } from "@/components/motion/counter";
import { leadership } from "@/lib/data";
import { links } from "@/lib/site";
import { IdCard, TrendingUp, MapPinned, HeartHandshake, ArrowUpRight, Star, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The vision, mission and community of the Rajasthan Pickleball Association — the state body affiliated to the Indian Pickleball Association.",
};

const whyJoin = [
  { icon: IdCard, title: "Official Player ID", text: "Your recognised RPA / IPA identity to compete and represent Rajasthan." },
  { icon: TrendingUp, title: "Ranking Points", text: "Earn national PWR points at sanctioned tournaments across the state." },
  { icon: MapPinned, title: "105 Venues", text: "Play at any affiliated club or academy — six districts and growing." },
  { icon: HeartHandshake, title: "Real Community", text: "Leagues, open play and events that welcome every age and level." },
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
        intro="The Rajasthan Pickleball Association is the state body growing the game — affiliated to the Indian Pickleball Association and built by players, for players."
        image="/images/community.jpg"
      />

      {/* Vision / Mission / Values */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { k: "Vision", t: "To make Rajasthan India's leading pickleball state — a model for grassroots growth and competitive excellence." },
            { k: "Mission", t: "To make the sport accessible in every community and build a professional, transparent ecosystem for all." },
            { k: "Values", t: "Integrity, inclusion and ambition — welcoming everyone from first-timers to national contenders." },
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
              RPA is recognised under the IPA — so every sanctioned event and player
              ID counts towards national rankings and pathways.
            </p>
          </div>
          <a
            href={links.ipa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-gold-deep"
          >
            Visit IPA <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Why join */}
      <Section className="bg-mist">
        <SectionHeading
          kicker="Why Join"
          title={
            <>
              More than a membership — <span className="text-brand-gradient">a movement.</span>
            </>
          }
          intro="Being part of RPA connects you to the fastest-growing sport in the state, with everything you need to play, compete and belong."
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
                105 venues in <span className="text-brand-gradient">6 districts.</span>
              </>
            }
            intro="From the Pink City to the Lake City, affiliated courts are opening across the state."
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

      {/* Leadership */}
      <Section className="bg-mist">
        <SectionHeading
          align="center"
          kicker="Leadership"
          title={
            <>
              Meet the <span className="text-gold">Leaders.</span>
            </>
          }
          intro="The people driving pickleball forward across Rajasthan."
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
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-night transition-transform duration-500 group-hover:-translate-y-2 ${
                    isPres
                      ? "shadow-[0_40px_80px_-36px_rgba(170,88,35,0.55)] ring-2 ring-gold/60"
                      : "shadow-[0_28px_60px_-34px_rgba(17,33,39,0.6)] ring-1 ring-line"
                  }`}
                >
                  <Image
                    src={l.photo}
                    alt={l.name}
                    fill
                    sizes="420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
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
                </div>
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
      <Section className="bg-mist">
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
