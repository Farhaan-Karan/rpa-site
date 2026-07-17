import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { news } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export function NewsPreview() {
  const items = news.slice(0, 2);

  return (
    <Section>
      <SectionHeading
        kicker="News"
        title={
          <>
            The latest from <span className="text-brand-gradient">the courts.</span>
          </>
        }
        intro="Stories and announcements from across the Rajasthan pickleball community."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((n, i) => (
          <Reveal key={n.slug} delay={i}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-orange-deep backdrop-blur">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-ink-muted">
                  <span>{formatDate(n.date)}</span>
                  <span className="size-1 rounded-full bg-line" />
                  <span>{n.readTime} min read</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
                  {n.title}
                </h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-muted">
                  {n.excerpt}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
