import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Pickleball } from "@/components/motion/pickleball";

export function PageHeader({
  kicker,
  title,
  intro,
  image = "/images/action.jpg",
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  /** kept for API compatibility; no longer rendered */
  watermark?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-cream">
      {/* warm ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[40vw] rounded-full bg-gold/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-24 size-[38vw] rounded-full bg-teal/12 blur-[120px]" />

      <div className="edge relative mx-auto grid max-w-[1400px] items-center gap-10 pb-14 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="kicker inline-flex items-center gap-2.5 text-teal">
              <span className="size-2 rounded-full bg-gold" />
              {kicker}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-5 max-w-2xl text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={2}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{intro}</p>
            </Reveal>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {/* image panel */}
        <Reveal delay={1}>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gold/20 to-teal/20 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line bg-paper shadow-[0_28px_60px_-30px_rgba(17,33,39,0.35)]">
              <Image src={image} alt="" fill className="object-cover" priority />
            </div>
            <Pickleball size={78} className="absolute -bottom-5 -left-5" />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
