import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function Kicker({
  children,
  className,
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "kicker inline-flex items-center gap-2.5",
        dark ? "text-gold-bright" : "text-gold-deep",
        className
      )}
    >
      <span className="h-px w-6 bg-gold/70" />
      {children}
    </span>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "gold" | "live" | "dark";
  className?: string;
}) {
  const tones = {
    neutral: "bg-mist text-ink-muted border-line",
    gold: "bg-gold/12 text-gold-deep border-gold/30",
    live: "bg-red-500/10 text-red-600 border-red-500/30",
    dark: "bg-ink text-paper border-ink",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  dark,
  align = "left",
  className,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <Kicker dark={dark}>{kicker}</Kicker>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={cn(
            "mt-5 text-balance text-4xl font-extrabold sm:text-5xl lg:text-6xl",
            dark ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              dark ? "text-white/65" : "text-ink-muted",
              align === "center" && "mx-auto"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  dark,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "edge py-20 sm:py-28 lg:py-36",
        dark && "bg-ink text-paper",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </section>
  );
}
