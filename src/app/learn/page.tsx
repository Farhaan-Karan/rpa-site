import type { Metadata } from "next";
import { BookOpen, Download, Zap, Hand, Square } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { AskRpa } from "@/components/sections/ask-rpa";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "New to pickleball? Learn the rules, watch how-to-play videos, ask our assistant and read the FAQs.",
};

const basics = [
  { icon: Zap, t: "Serve underhand", d: "Serve diagonally crosscourt with an underhand stroke, below the waist." },
  { icon: Hand, t: "Double-bounce rule", d: "The ball must bounce once on each side before anyone can volley." },
  { icon: Square, t: "Stay out of the kitchen", d: "No volleying inside the 7-foot non-volley zone near the net." },
];

const videos = [
  { id: "rD1O3R9B0Sw", t: "How to Play Pickleball", d: "The ultimate beginner's guide to the court, scoring and the golden rules.", tag: "Beginner" },
  { id: "fTvPYdKZqO0", t: "Pickleball Rules Explained", d: "The definitive walkthrough of every rule you need before you play.", tag: "Rules" },
  { id: "USVMB5zEzIc", t: "Dinking Master Class", d: "The soft shot that wins games — technique and drills to practise.", tag: "Technique" },
];

export default function LearnPage() {
  return (
    <>
      <PageHeader
        kicker="Learn the Game"
        watermark="Rules"
        title={
          <>
            New here? <span className="text-brand-gradient">Start playing.</span>
          </>
        }
        intro="Easy to learn, endlessly rewarding, and always exciting — pickleball takes just minutes to begin and a lifetime to master. Discover everything you need to step onto the court with confidence."
        image="/images/junior.jpg"
      />

      {/* Basics + rulebook */}
      <Section>
        <SectionHeading
          kicker="The Basics"
          title={
            <>
              Three rules and <span className="text-brand-gradient">you're playing.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {basics.map((b, i) => (
            <Reveal key={b.t} delay={i}>
              <div className="h-full rounded-2xl border border-line bg-paper p-7">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange-deep">
                  <b.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{b.t}</h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-ink-muted">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-ink p-7 text-paper sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <BookOpen className="size-8 text-orange-bright" />
              <div>
                <div className="font-display text-xl font-bold">The Official Rulebook</div>
                <p className="text-sm text-white/70">Read the full IPA rules &amp; constitution.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={links.rulebook} target="_blank" rel="noopener noreferrer" variant="gold">
                <Download className="size-4" /> Rulebook
              </ButtonLink>
              <ButtonLink href={links.constitution} target="_blank" rel="noopener noreferrer" variant="ghostLight">
                Constitution
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Videos */}
      <Section className="bg-mist">
        <SectionHeading
          kicker="Watch & Learn"
          title={
            <>
              How to play, <span className="text-brand-gradient">on video.</span>
            </>
          }
          intro="Short, no-nonsense clips to take you from first rally to real rallies."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i}>
              <div className="overflow-hidden rounded-2xl border border-line bg-paper">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.t}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 size-full"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-teal-deep">
                    {v.tag}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{v.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Ask RPA */}
      <Section>
        <SectionHeading
          align="center"
          kicker="AI Assistant"
          title={
            <>
              Got a question? <span className="text-brand-gradient">Just ask.</span>
            </>
          }
        />
        <div className="mt-10">
          <AskRpa />
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-mist">
        <SectionHeading
          align="center"
          kicker="FAQs"
          title="Frequently asked questions"
        />
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </Section>
    </>
  );
}
