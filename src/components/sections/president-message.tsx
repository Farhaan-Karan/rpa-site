"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Kicker } from "@/components/ui/primitives";
import { leadership } from "@/lib/data";

const LEAD =
  "It is a great honour to serve as the President of the Rajasthan Pickleball Association at a defining moment in the journey of this exciting and rapidly growing sport.";

const VISIBLE = [
  "Pickleball represents everything that modern sport should aspire to be—accessible, inclusive, energetic, and deeply engaging. It can be played across generations, introduced with limited infrastructure and enjoyed at both recreational and highly competitive levels. For a state as diverse, youthful, and ambitious as Rajasthan, the possibilities are immense.",
  "Our long-term vision is to build a strong and sustainable pickleball ecosystem that reaches far beyond a few cities or tournaments. We want to take the sport to every district of Rajasthan, introduce it in schools, colleges, communities and sporting institutions, and ensure that every talented player—regardless of geography or background—has the opportunity to be discovered, trained, and supported.",
];

const EXPANDED = [
  "Grassroots development will remain at the heart of our mission. We aim to create structured pathways through district associations, school programmes, coaching academies, talent-identification initiatives and regular state-level competitions. By investing in certified coaches, trained officials and quality infrastructure, we will build a system capable of nurturing athletes from their first experience on the court to representing Rajasthan and India at the highest levels.",
  "Equally important is our commitment to inclusivity. Pickleball has the unique ability to bring together children, young athletes, women, senior citizens, and people from different walks of life. We envision courts becoming vibrant community spaces—places where fitness, friendship, discipline, and sporting excellence come together.",
  "Rajasthan has always been a land of courage, resilience and remarkable sporting talent. Our aspiration is to harness that spirit and establish the state as one of India's foremost centres for pickleball. In the years ahead, we will work towards hosting prestigious national and international tournaments, building world-class training facilities and creating opportunities for Rajasthan's players to compete on the global stage.",
  "However, institutions alone cannot build a sporting movement. It requires the collective energy of athletes, parents, coaches, schools, district bodies, government institutions, corporate partners and passionate supporters. I invite each of you to become a part of this journey.",
  "We are not merely promoting a new sport. We are building a culture—one that celebrates participation, perseverance, sportsmanship, and excellence. The rallies have begun, the momentum is growing, and the future of pickleball in Rajasthan is full of promise. Together, let us build a legacy that inspires generations.",
];

export function PresidentMessage() {
  const [open, setOpen] = useState(false);
  const president = leadership[0];

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr]">
      <Reveal>
        <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/35 to-teal/25 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-night shadow-2xl ring-2 ring-gold/50">
            <Image
              src={president.photo}
              alt={`${president.name}, President`}
              fill
              sizes="(max-width: 1024px) 90vw, 384px"
              quality={95}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
              <div className="h-0.5 w-10 bg-gold" />
              <div className="mt-3 font-display text-2xl font-extrabold">{president.name}</div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-mint">
                President
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <Kicker>President&apos;s Message</Kicker>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-6 font-display text-2xl font-bold leading-snug text-ink sm:text-[1.7rem]">
            {LEAD}
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            {VISIBLE.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
                {EXPANDED.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen(!open)}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-teal transition-colors hover:border-teal"
        >
          {open ? "Show less" : "Read the full message"}
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <Reveal delay={3}>
          <div className="mt-8 border-t border-line pt-5">
            <div className="font-script text-3xl text-teal">Bhavya Bishnoi</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
              President · Rajasthan Pickleball Association
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
