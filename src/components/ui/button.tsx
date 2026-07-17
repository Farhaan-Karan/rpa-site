import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

const button = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:inset-0 before:-translate-x-[150%] before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-[150%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper hover:bg-teal shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        gold: "bg-gold text-paper hover:bg-gold-deep",
        teal: "bg-teal text-paper hover:bg-teal-deep",
        outline:
          "border border-ink/15 text-ink hover:border-teal hover:bg-teal hover:text-paper",
        ghost: "text-ink hover:bg-sand",
        ghostLight:
          "border border-white/20 text-paper hover:bg-paper hover:text-ink backdrop-blur-sm",
        link: "text-ink underline-offset-4 hover:text-gold-deep",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-[8px]",
        md: "h-12 px-6 text-[0.95rem] rounded-[10px]",
        lg: "h-14 px-8 text-base rounded-[12px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type BaseProps = VariantProps<typeof button> & {
  arrow?: boolean;
  className?: string;
};

export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  ...props
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props}>
      {children}
      {arrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  arrow,
  className,
  children,
  href,
  ...props
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(button({ variant, size }), className)}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
