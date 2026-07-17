"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site";
import { Logo } from "./logo";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "border-line bg-cream/85 shadow-[0_4px_24px_-16px_rgba(17,33,39,0.4)] backdrop-blur-xl"
            : "border-transparent bg-cream/70 backdrop-blur-md"
        )}
      >
        <div className="edge mx-auto flex h-[72px] max-w-[1400px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors",
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Magnetic strength={0.3}>
              <ButtonLink href="/join" variant="gold" size="sm" arrow>
                Join Us
              </ButtonLink>
            </Magnetic>
          </div>

          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-paper lg:hidden"
          >
            <div className="edge flex h-[72px] items-center justify-between">
              <Logo dark />
              <button
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="edge mt-6 flex flex-col">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-white/10 py-5 font-display text-3xl font-bold tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <ButtonLink
                href="/join"
                variant="gold"
                size="lg"
                arrow
                className="mt-8"
              >
                Join Us
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
