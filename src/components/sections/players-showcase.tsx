"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Trophy, ArrowUpRight, Check } from "lucide-react";
import { players, type Player } from "@/lib/data";
import { links } from "@/lib/site";

export function PlayersShowcase() {
  const [active, setActive] = useState<Player | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {players.map((p) => (
          <button
            key={p.slug}
            onClick={() => setActive(p)}
            className="group relative block overflow-hidden rounded-2xl border border-line bg-night text-left"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={p.photo}
                alt={p.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <div className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-gold font-display text-sm font-extrabold text-paper">
                #{p.rank}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-paper">
                <div className="font-mono text-[0.6rem] uppercase tracking-wider text-mint">
                  {p.category}
                </div>
                <div className="font-display text-lg font-bold leading-tight">{p.name}</div>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-white/70">
                  <MapPin className="size-3" /> {p.city}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ scale: 0.94, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-paper shadow-2xl sm:grid-cols-[0.8fr_1.2fr]"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-ink/60 text-paper hover:bg-ink"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              <div className="relative aspect-[3/4] sm:aspect-auto">
                <Image src={active.photo} alt={active.name} fill className="object-cover object-top" />
              </div>
              <div className="p-7">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal">
                  {active.category} · Rank #{active.rank}
                </div>
                <h3 className="mt-1 font-display text-3xl font-extrabold text-ink">{active.name}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
                  <MapPin className="size-3.5" /> {active.city} · Age {active.age} · {active.handed}-handed
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { k: "Titles", v: active.titles },
                    { k: "Win %", v: active.winRate },
                    { k: "Points", v: active.points.toLocaleString("en-IN") },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl bg-mist p-3 text-center">
                      <div className="font-display text-xl font-extrabold text-teal">{s.v}</div>
                      <div className="text-[0.6rem] uppercase tracking-wider text-ink-muted">{s.k}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ink-soft">{active.bio}</p>

                <ul className="mt-4 space-y-1.5">
                  {active.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-ink">
                      <Trophy className="mt-0.5 size-3.5 shrink-0 text-gold" /> {a}
                    </li>
                  ))}
                </ul>

                <a
                  href={links.playerForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 font-semibold text-paper transition-colors hover:bg-gold-deep"
                >
                  <Check className="size-4" /> Sign up as a player
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
