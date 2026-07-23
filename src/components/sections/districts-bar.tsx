import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const districts = [
  "Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar",
  "Sikar", "Sri Ganganagar", "Bhilwara", "Bharatpur", "Pali", "Nagaur",
  "Churu", "Jhunjhunu", "Chittorgarh", "Banswara", "Barmer", "Jaisalmer", "Tonk",
];

function FortIcon() {
  return (
    <svg viewBox="0 0 48 24" className="h-5 w-10 shrink-0 text-white/55" fill="none" aria-hidden>
      <path
        d="M2 22V12l3-2 3 2V8l4-3 4 3v4l3-2 3 2v3l4-3 4 3v-3l3-2 3 2v10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M2 22h44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function DistrictsBar() {
  const Row = () => (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {districts.map((d) => (
        <span key={d} className="flex items-center gap-3">
          <FortIcon />
          <span className="whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide text-white">
            {d}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="edge py-4">
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-stretch overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal-bright via-teal to-teal-deep shadow-[0_24px_60px_-30px_rgba(18,120,139,0.6)] md:flex-row md:items-center">
        {/* label */}
        <div className="relative z-10 shrink-0 bg-teal-deep/40 px-8 py-6 md:w-72 md:py-8">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-white">
            Districts across Rajasthan
          </h2>
          <Link
            href="/about#districts"
            className="mt-2 inline-flex items-center gap-1 border-b border-white/50 pb-0.5 text-sm font-semibold text-white/90 transition-colors hover:border-white hover:text-white"
          >
            Explore all districts <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* smooth marquee */}
        <div className="group relative flex-1 overflow-hidden py-6">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-teal/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-teal-deep to-transparent" />
          <div className="flex w-max animate-marquee items-center will-change-transform group-hover:[animation-play-state:paused]">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}
