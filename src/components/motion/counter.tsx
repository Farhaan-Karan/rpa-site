"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Vertical-only inset. A plain "-60px" also shrinks the box horizontally,
  // which silently broke narrow counters: a single-digit span in the left
  // column (x 20–41 at 375px) fell entirely outside the 60–315 detection
  // area, so it never came "into view" and sat at 0 forever on mobile.
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(() => (0).toLocaleString("en-IN"));

  useEffect(() => {
    if (!inView) return;

    const format = (v: number) => Math.round(v).toLocaleString("en-IN");

    // Honour reduced-motion, and never animate a non-finite target.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !Number.isFinite(to)) {
      setDisplay(format(Number.isFinite(to) ? to : 0));
      return;
    }

    const controls = animate(motionValue, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(format(v)),
      // guarantee we land exactly on the target even if a frame is dropped
      onComplete: () => setDisplay(format(to)),
    });

    return () => controls.stop();
  }, [inView, to, duration, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
