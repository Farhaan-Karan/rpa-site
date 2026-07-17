"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment, type ElementType } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const word: Variants = {
  hidden: { y: "115%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease } },
};

/**
 * Headline reveal where each word rises out of a clipping mask with a faint
 * rotation — the signature "premium editorial" motion. Pass `gold` indices to
 * paint specific words with the animated gold gradient.
 */
export function TextReveal({
  text,
  as = "span",
  className,
  goldWords = [],
  stagger = 0.08,
  once = true,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  goldWords?: number[];
  stagger?: number;
  once?: boolean;
}) {
  const Tag = motion(as as ElementType);
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-12%" }}
    >
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="inline-flex overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              variants={word}
              className={
                goldWords.includes(i)
                  ? "text-gold-gradient inline-block"
                  : "inline-block"
              }
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
