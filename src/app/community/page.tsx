import type { Metadata } from "next";
import { Calendar, MapPin, Trophy, Building2, ArrowUpRight, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { VenueDirectory } from "@/components/sections/venue-directory";
import { IndiaMap } from "@/components/sections/india-map";
import { PosterFeature, PosterBanner } from "@/components/sections/poster-feature";
import { ButtonLink } from "@/components/ui/button";
import { sanctionedTournaments, pwrTiers } from "@/lib/data";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Communities",
  description:
    "The players, clubs, academies and tournaments that make up the Rajasthan pickleball community.",
};

const subs = [
  { href: "#pulse", label: "The Community", icon: Users },
  { href: "#clubs", label: "Clubs & Academies", icon: Building2 },
  { href: "#tournaments", label: "Tournaments", icon: Trophy },
];

const pulse: { label: string; value?: number; suffix?: string; text?: string }[] = [
  { label: "Registered Players", value: 800, suffix: "+" },
  { label: "Mapped Clubs", value: 100, suffix: "+" },
  { label: "District Bodies", value: 6 },
  { label: "Momentum", text: "∞" },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        kicker="The Community"
        title={
          <>
            A Growing <span className="text-gold">Footprint.</span>
          </>
        }
        intro="With 800+ players, 100+ mapped clubs, and a growing tournament circuit across six districts, our community is the driving force behind pickleball's rise in Rajasthan."
        image="/images/nihal-districts.png"
      />

      {/* sub-nav */}
      <div className="sticky top-[72px] z-30 border-b border-line bg-cream/90 backdrop-blur">
        <div className="edge mx-auto flex max-w-[1400px] gap-2 overflow-x-auto py-3">
          {subs.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
            >
              <s.icon className="size-4" /> {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Community pulse */}
      <Section id="pulse">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-night p-8 text-paper sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-teal/25 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="kicker inline-flex items-center gap-2.5 text-mint">
                  <span className="size-2 rounded-full bg-gold" />
                  The Community
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  A Movement, <span className="text-gold-bright">Measured in Momentum.</span>
                </h2>
                <p className="mt-3 max-w-sm text-white/70">
                  Behind every number is a player, a court, a club, or a community
                  helping shape the future of pickleball in Rajasthan — and there is a
                  place for you in what comes next.
                </p>
                <ButtonLink
                  href={links.playerForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  arrow
                  className="mt-7"
                >
                  Register as a player
                </ButtonLink>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {pulse.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-colors hover:border-gold/40"
                  >
                    <div className="font-display text-4xl font-extrabold text-gold-bright sm:text-5xl">
                      {s.text ? s.text : <Counter to={s.value!} suffix={s.suffix} />}
                    </div>
                    <div className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Winning culture banner */}
      <PosterBanner
        poster="/images/poster-winning.png"
        alt="RPA Winning Culture — The Rise of Rajasthan Pickleball"
        eyebrow="One Winning Culture"
      />

      {/* Clubs & Academies */}
      <Section id="clubs" className="bg-mist">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Clubs & Academies"
            title={
              <>
                100+ clubs <span className="text-gold">on the map.</span>
              </>
            }
            intro="Affiliated venues across Rajasthan — explore the map, or register your own club or academy."
          />
          <Reveal>
            <ButtonLink href={links.clubForm} target="_blank" rel="noopener noreferrer" variant="teal" arrow>
              Register your club
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10">
            <IndiaMap />
          </div>
        </Reveal>

        <div className="mt-10">
          <VenueDirectory />
        </div>
      </Section>

      {/* Match Day poster feature */}
      <PosterFeature
        poster="/images/poster-matchday.png"
        alt="RPA Match Day — Championship Series"
        tone="night"
        reverse
        kicker="Match Day"
        title="Where the season comes"
        accent="alive."
        body="Sanctioned brackets, real ranking points and packed courts. From district opens to marquee events, every match day is a chance to test your game against the best in Rajasthan."
        cta={{ href: links.playerForm, label: "Register as a player", external: true }}
      />

      {/* Tournaments */}
      <Section id="tournaments">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Tournaments"
            title={
              <>
                Compete for <span className="text-gold">ranking points.</span>
              </>
            }
            intro="RPA events are sanctioned under the Pickleball World Rankings (PWR) system through the Indian Pickleball Association."
          />
          <Reveal>
            <ButtonLink href={links.tournamentForm} target="_blank" rel="noopener noreferrer" variant="gold" arrow>
              Register your Tournament
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {sanctionedTournaments.map((t) => (
            <Reveal key={t.name}>
              <div className="relative h-full overflow-hidden rounded-3xl bg-night p-8 text-paper">
                <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gold/25 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-paper">
                      {t.tier}
                    </span>
                    <span className="rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-paper">
                      {t.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-4xl font-extrabold">{t.name}</h3>
                  <div className="mt-6 grid grid-cols-2 gap-5 text-sm">
                    <Detail icon={Calendar} label="Dates" value={t.dates} />
                    <Detail icon={Trophy} label="Prize Pool" value={t.prize} />
                    <Detail icon={MapPin} label="Venue" value={`${t.venue}, ${t.city}`} />
                    <Detail icon={Building2} label="Organiser" value={t.organiser} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={1}>
            <div className="flex h-full flex-col gap-3">
              {pwrTiers.map((p) => (
                <div key={p.tier} className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
                  <div className="shrink-0 rounded-xl bg-teal/10 px-3 py-2 font-display text-sm font-extrabold text-teal-deep">
                    {p.points}
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink">{p.tier}</div>
                    <p className="mt-1 text-sm leading-snug text-ink-muted">{p.note}</p>
                  </div>
                </div>
              ))}
              <a
                href={links.ipa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep hover:text-gold"
              >
                See the national calendar on IPA <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider text-white/55">
        <Icon className="size-3.5 text-gold-bright" /> {label}
      </div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}
