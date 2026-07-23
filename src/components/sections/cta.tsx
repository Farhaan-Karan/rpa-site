import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { ButtonLink } from "@/components/ui/button";
import { Kicker } from "@/components/ui/primitives";
import { links } from "@/lib/site";
import { UserPlus } from "lucide-react";
import { Instagram } from "@/components/ui/icons";

const steps = [
  { n: "01", t: "Register", d: "Sign up on the official IPA portal or our membership form — it takes two minutes." },
  { n: "02", t: "Get your Player ID", d: "Receive your official IPA player ID, tournament eligibility and ranking points." },
  { n: "03", t: "Find your court", d: "Pick from more than 100 venues, show up, and play. Beginners always welcome." },
];

export function MembershipCTA() {
  return (
    <section className="edge py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-ink px-7 py-14 text-paper sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-orange/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-teal/30 blur-3xl" />

        <div className="relative">
          <Reveal>
            <Kicker dark>Become a Member</Kicker>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[0.95] sm:text-6xl">
              Join the movement in{" "}
              <span className="text-brand-gradient">three easy steps.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="font-display text-3xl font-extrabold text-orange-bright">
                    {s.n}
                  </div>
                  <div className="mt-3 font-display text-lg font-bold">{s.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Magnetic strength={0.4}>
                <ButtonLink href="/join" variant="gold" size="lg" arrow>
                  <UserPlus className="size-4" /> Join Us
                </ButtonLink>
              </Magnetic>
              <ButtonLink
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghostLight"
                size="lg"
              >
                <Instagram className="size-4" /> Follow us on Instagram
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
