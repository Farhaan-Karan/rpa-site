import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { news } from "@/lib/data";

export function NewsPreview() {
  return (
    <Section>
      <SectionHeading
        kicker="News"
        title={
          <>
            RPA in <span className="text-brand-gradient">the headlines.</span>
          </>
        }
        intro="Coverage of Rajasthan pickleball and the movement driving it forward."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {news.map((n, i) => (
          <Reveal key={n.slug} delay={i}>
            <a
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(17,33,39,0.4)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-orange-deep backdrop-blur">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-teal">
                  {n.source}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight text-ink">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">
                  {n.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                  Read the article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
