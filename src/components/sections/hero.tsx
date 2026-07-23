"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserPlus, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Pickleball } from "@/components/motion/pickleball";
import { Counter } from "@/components/motion/counter";
import { liveStats } from "@/lib/data";
import { links } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* warm ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-10 size-[42vw] rounded-full bg-gold/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 size-[40vw] rounded-full bg-teal/12 blur-[120px]" />

      <div className="edge relative mx-auto grid max-w-[1400px] items-center gap-10 pb-16 pt-32 sm:pt-36 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:pb-20">
        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-script text-3xl text-teal sm:text-4xl"
          >
            Namaste, and welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease }}
            className="mt-2 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Rajasthan Pickleball{" "}
            <span className="text-gold">Association</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            The official body driving the growth of pickleball across Rajasthan, RPA
            is an affiliated member of the{" "}
            <a
              href={links.ipa}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal underline decoration-teal/40 underline-offset-2 hover:text-teal-deep"
            >
              Indian Pickleball Association
            </a>
            . With a thriving community of over 800 players and 100 clubs across six
            districts, RPA is building a strong, inclusive, and competitive future for
            the sport throughout Rajasthan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="/join" variant="gold" size="lg" arrow>
              <UserPlus className="size-4" /> Become a Member
            </ButtonLink>
            <ButtonLink href="/community#clubs" variant="outline" size="lg">
              <MapPin className="size-4" /> Find a Court
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
          >
            {liveStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold text-teal sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-ink-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Banner illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/25 to-teal/25 blur-2xl" />
          <div className="relative aspect-[7/5] overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-[0_30px_70px_-30px_rgba(17,33,39,0.4)] lg:aspect-[8/6]">
            <Image
              src="/images/nihal-home.png"
              alt="Rajasthan pickleball — courts, paddles and the Hawa Mahal"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="scale-[1.08] object-cover object-center"
            />
          </div>
          <Pickleball
            size={96}
            className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
