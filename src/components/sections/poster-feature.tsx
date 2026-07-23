import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Kicker } from "@/components/ui/primitives";

type CTA = { href: string; label: string; external?: boolean };

/**
 * PosterFeature — an editorial two-column moment pairing a framed RPA campaign
 * poster with copy. Reversible sides, cream or night tone. Used to spread the
 * campaign creatives across the site (see the poster set in /public/images).
 */
export function PosterFeature({
  poster,
  alt,
  ratio = "aspect-[4/5]",
  maxW = "max-w-[440px]",
  kicker,
  title,
  accent,
  body,
  cta,
  tone = "cream",
  reverse = false,
  id,
}: {
  poster: string;
  alt: string;
  ratio?: string;
  maxW?: string;
  kicker: string;
  title: string;
  accent?: string;
  body: ReactNode;
  cta?: CTA;
  tone?: "cream" | "night";
  reverse?: boolean;
  id?: string;
}) {
  const dark = tone === "night";
  const ctaCls =
    "mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-gold-deep";

  return (
    <section
      id={id}
      className={`edge relative overflow-hidden py-20 sm:py-28 ${
        dark ? "bg-night text-paper" : "bg-cream text-ink"
      }`}
    >
      {/* ambient brand glows */}
      <div
        className={`pointer-events-none absolute top-0 size-[38vw] rounded-full blur-[120px] ${
          reverse ? "-right-40" : "-left-40"
        } ${dark ? "bg-gold/20" : "bg-gold/12"}`}
      />
      <div
        className={`pointer-events-none absolute bottom-0 size-[34vw] rounded-full blur-[120px] ${
          reverse ? "-left-40" : "-right-40"
        } ${dark ? "bg-teal/20" : "bg-teal/12"}`}
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Poster */}
        <Reveal className={reverse ? "lg:order-2" : "lg:order-1"}>
          <div className={`relative mx-auto w-full ${maxW}`}>
            <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gold/40 to-teal/30 blur-2xl" />
            <div
              className={`relative ${ratio} overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-36px_rgba(17,33,39,0.6)] ring-2 ${
                dark ? "ring-gold/40" : "ring-gold/25"
              }`}
            >
              <Image
                src={poster}
                alt={alt}
                fill
                sizes="(max-width:1024px) 100vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <Reveal>
            <Kicker dark={dark}>{kicker}</Kicker>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className={`mt-5 font-display text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-5xl lg:text-6xl ${
                dark ? "text-paper" : "text-ink"
              }`}
            >
              {title}
              {accent && (
                <>
                  {" "}
                  <span className={dark ? "text-gold-bright" : "text-gold"}>
                    {accent}
                  </span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p
              className={`mt-6 max-w-lg text-lg leading-relaxed ${
                dark ? "text-white/70" : "text-ink-soft"
              }`}
            >
              {body}
            </p>
          </Reveal>
          {cta && (
            <Reveal delay={3}>
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaCls}
                >
                  {cta.label} <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <Link href={cta.href} className={ctaCls}>
                  {cta.label} <ArrowUpRight className="size-4" />
                </Link>
              )}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * PosterBanner — a full-width, framed landscape poster used as a cinematic
 * break between sections. Optional centered eyebrow to frame it as intentional.
 */
export function PosterBanner({
  poster,
  alt,
  ratio = "aspect-[16/9]",
  eyebrow,
  tone = "cream",
  id,
}: {
  poster: string;
  alt: string;
  ratio?: string;
  eyebrow?: string;
  tone?: "cream" | "night";
  id?: string;
}) {
  const dark = tone === "night";
  return (
    <section
      id={id}
      className={`edge py-16 sm:py-20 ${dark ? "bg-night" : "bg-cream"}`}
    >
      <div className="mx-auto max-w-[1100px]">
        {eyebrow && (
          <Reveal>
            <div className="mb-8 flex justify-center">
              <Kicker dark={dark}>{eyebrow}</Kicker>
            </div>
          </Reveal>
        )}
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 to-teal/25 blur-2xl" />
            <div
              className={`relative ${ratio} overflow-hidden rounded-[1.75rem] shadow-[0_40px_90px_-40px_rgba(17,33,39,0.55)] ring-1 ${
                dark ? "ring-gold/35" : "ring-gold/25"
              }`}
            >
              <Image
                src={poster}
                alt={alt}
                fill
                sizes="(max-width:1100px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
