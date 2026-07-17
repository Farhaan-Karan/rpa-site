"use client";

import { motion } from "framer-motion";

/**
 * A clean, floating pickleball — a yellow holed ball that gently bobs and
 * slowly rotates. Purely decorative; respects reduced-motion via CSS.
 */
export function Pickleball({
  className,
  size = 72,
  float = true,
}: {
  className?: string;
  size?: number;
  float?: boolean;
}) {
  // hole grid roughly matching a real pickleball
  const holes = [
    [50, 20],
    [32, 30],
    [68, 30],
    [22, 50],
    [50, 45],
    [78, 50],
    [34, 66],
    [66, 66],
    [50, 78],
  ];

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={float ? { y: [0, -12, 0] } : undefined}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="size-full drop-shadow-[0_10px_18px_rgba(17,33,39,0.18)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="pb-shade" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#fbe86a" />
            <stop offset="60%" stopColor="#efd23f" />
            <stop offset="100%" stopColor="#d9b62f" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#pb-shade)" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#c9a72a" strokeWidth="1.5" />
        {holes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#caa62c" opacity="0.85" />
        ))}
        {/* soft highlight */}
        <ellipse cx="36" cy="30" rx="14" ry="9" fill="#fff6c9" opacity="0.5" />
      </motion.svg>
    </motion.div>
  );
}
