"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@/lib/utils";

/**
 * A marquee whose base drift is constantly running, but whose speed and skew
 * react to scroll velocity — scroll fast and the words rip + lean. The hallmark
 * "this site is alive" motion.
 */
export function VelocityMarquee({
  text,
  baseVelocity = 4,
  className,
  separator = "✦",
}: {
  text: string;
  baseVelocity?: number;
  className?: string;
  separator?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const skew = useTransform(smoothVelocity, [-1000, 0, 1000], [-8, 0, 8], {
    clamp: true,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const items = Array.from({ length: 6 });

  return (
    <div className={`relative w-full overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ x, skewX: skew }} className="flex whitespace-nowrap">
        {items.map((_, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span>{text}</span>
            <span className="mx-6 text-gold opacity-70">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
