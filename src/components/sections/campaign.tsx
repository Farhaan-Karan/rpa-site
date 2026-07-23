import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * The RPA campaign showcase — the Chinkara mascot moment + a bold, auto-scrolling
 * wall of campaign creatives. Uses the official RPA poster set in /public/images.
 * NOTE: drop the poster files in with the exact names below (see HANDOFF.md).
 */

const posters = [
  { src: "/images/poster-legacy.png", alt: "RPA Legacy campaign", ratio: "aspect-[4/5]" },
  { src: "/images/poster-matchday.png", alt: "RPA Match Day", ratio: "aspect-[4/5]" },
  { src: "/images/poster-playbold.png", alt: "Play Bold. Live Active.", ratio: "aspect-[16/9]" },
  { src: "/images/poster-vijeta.png", alt: "Vijeta RPA", ratio: "aspect-[4/5]" },
  { src: "/images/poster-champpoint.png", alt: "Championship Point", ratio: "aspect-[9/16]" },
  { src: "/images/poster-splatter.png", alt: "RPA x Chinkara", ratio: "aspect-[2/3]" },
  { src: "/images/poster-winning.png", alt: "RPA Winning Culture", ratio: "aspect-[16/9]" },
];

export function Campaign() {
  const Row = () => (
    <div className="flex shrink-0 items-stretch gap-5 pr-5">
      {posters.map((p) => (
        <div
          key={p.src}
          className={`relative h-[340px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 ${p.ratio}`}
        >
          <Image src={p.src} alt={p.alt} fill sizes="360px" className="object-cover" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-night py-20 text-paper sm:py-28">
      {/* Chinkara mascot moment */}
      <div className="edge relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="kicker inline-flex items-center gap-2.5 text-mint">
              <span className="size-2 rounded-full bg-gold" /> The Mascot
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
              Meet the{" "}
              <span className="text-gold-bright">Chinkara.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Desert speed. Desert spirit. The Chinkara — Rajasthan&apos;s swift,
              graceful gazelle — is the heartbeat of RPA: agile, fearless and built
              for the game. One state, one game, one Rajasthan.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link
              href="/community"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-gold-deep"
            >
              Join the movement <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/40 to-teal/30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-2 ring-gold/40">
              <Image
                src="/images/poster-chinkara.png"
                alt="RPA Chinkara — Desert Speed, Desert Spirit"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Poster wall marquee */}
      <div className="relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="flex w-max animate-marquee">
          <Row />
          <Row />
        </div>
      </div>

      <div className="edge mx-auto mt-10 max-w-[1400px]">
        <p className="text-center font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          One Game. One Community.{" "}
          <span className="text-gold-bright">One Rajasthan.</span>
        </p>
      </div>
    </section>
  );
}
