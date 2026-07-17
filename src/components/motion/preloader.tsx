"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/layout/logo";

const ease = [0.76, 0, 0.24, 1] as const;
const spring = { type: "spring", stiffness: 120, damping: 12, mass: 0.9 } as const;

const WORD = "RAJASTHAN";

/**
 * Delhi-Union-style opening: the RPA roundel springs in, the wordmark unfurls,
 * then a two-tone curtain lifts to reveal the site. Once per tab session.
 */
export function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("rpa-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("rpa-intro", "1");
      return;
    }
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const done = setTimeout(() => {
      sessionStorage.setItem("rpa-intro", "1");
      document.documentElement.style.overflow = "";
      setShow(false);
    }, 2600);
    return () => {
      clearTimeout(done);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-teal-deep text-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          {/* orange under-curtain peeking as it lifts */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-full bg-orange"
            initial={{ y: "100%" }}
            exit={{ y: "0%" }}
            transition={{ duration: 0.9, ease }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.4, rotate: -40, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={spring}
            >
              <LogoMark className="size-28 drop-shadow-2xl sm:size-36" />
            </motion.div>

            <div className="mt-7 flex overflow-hidden">
              {WORD.split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.5 + i * 0.045, duration: 0.6, ease }}
                  className="font-display text-3xl font-extrabold tracking-[0.18em] sm:text-4xl"
                >
                  {c}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.4em] text-white/70"
            >
              Pickleball Association
            </motion.div>

            <div className="mt-7 h-[3px] w-40 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full bg-paper"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
