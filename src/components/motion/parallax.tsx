"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked parallax. `speed` > 0 drifts slower than scroll (recedes),
 * < 0 drifts faster (leads). Works on a per-element basis as it enters/exits.
 */
export function Parallax({
  children,
  speed = 0.2,
  axis = "y",
  className,
}: {
  children: ReactNode;
  speed?: number;
  axis?: "x" | "y";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const distance = 160 * speed;
  const move = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div
      ref={ref}
      style={axis === "y" ? { y: move } : { x: move }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
