import type { Metadata } from "next";
import { Calendar, MapPin, Trophy, Building2, ArrowUpRight, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { PlayersShowcase } from "@/components/sections/players-showcase";
import { VenueDirectory } from "@/components/sections/venue-directory";
import { IndiaMap } from "@/components/sections/india-map";
import { ButtonLink } from "@/components/ui/button";
import { sanctionedTournaments, pwrTiers } from "@/lib/data";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Communities",
  description:
    "The players, clubs, academies and tournaments that make up the Rajasthan pickleball community.",
};

const subs = [
  { href: "#players", label: "Players", icon: Users },
  { href: "#clubs", label: "Clubs & Academies", icon: Building2 },
  { href: "#tournaments", label: "Tournaments", icon: Trophy },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        kicker="The Community"
        title={
          <>
            Our <span className="text-gold">Communities.</span>
          </>
        }
        intro="800+ players, 100+ affiliated clubs and a growing tournament circuit across six districts — this is the heart of Rajasthan pickleball."
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

      {/* Players */}
      <Section id="players">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Players"
            title={
              <>
                Meet the <span className="text-gold">players.</span>
              </>
            }
            intro="Tap any player for their profile — and sign up to get your own RPA player ID."
          />
          <Reveal>
            <ButtonLink href={links.playerForm} target="_blank" rel="noopener noreferrer" variant="gold" arrow>
              Register as a player
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-10">
          <PlayersShowcase />
        </div>
      </Section>

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
            <ButtonLink href={links.registration} target="_blank" rel="noopener noreferrer" variant="gold" arrow>
              Register for events
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
