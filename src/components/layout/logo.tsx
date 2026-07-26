import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  sizes = "64px",
}: {
  className?: string;
  /** must match the rendered box, else Next serves an undersized file and the mark looks pixelated */
  sizes?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block size-10 overflow-hidden rounded-full ring-1 ring-ink/10",
        className
      )}
    >
      <Image
        src="/images/rpa-logo.png"
        alt="Rajasthan Pickleball Association"
        fill
        sizes={sizes}
        quality={95}
        className="object-cover"
      />
    </span>
  );
}

export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Rajasthan Pickleball Association — Home"
    >
      <LogoMark className="transition-transform duration-500 group-hover:scale-105" />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[1.05rem] font-extrabold tracking-tight",
            dark ? "text-paper" : "text-ink"
          )}
        >
          Rajasthan
        </span>
        <span
          className={cn(
            "mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.34em]",
            dark ? "text-mint" : "text-teal"
          )}
        >
          Pickleball Assn.
        </span>
      </span>
    </Link>
  );
}
