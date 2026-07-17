"use client";

import { useRef, type ReactNode, type ElementType } from "react";

/**
 * Section wrapper whose `--mx/--my` CSS vars track the pointer so a child using
 * the `.spotlight` class reveals a gold radial glow under the cursor.
 */
export function Spotlight({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as ElementType;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Tag ref={ref} onPointerMove={onMove} className={`spotlight ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
