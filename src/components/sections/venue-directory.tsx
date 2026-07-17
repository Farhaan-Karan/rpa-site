"use client";

import { useMemo, useState } from "react";
import { MapPin, Phone, Search, ArrowUpRight } from "lucide-react";
import { venues, districts } from "@/lib/clubs";

const cities = ["All", ...districts.map((d) => d.city)];

export function VenueDirectory() {
  const [city, setCity] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return venues.filter((v) => {
      const cityOk = city === "All" || v.city === city;
      const qOk =
        !query ||
        v.name.toLowerCase().includes(query) ||
        v.address.toLowerCase().includes(query);
      return cityOk && qOk;
    });
  }, [city, q]);

  return (
    <div>
      {/* controls */}
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-3 shadow-sm sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-mist px-4">
          <Search className="size-4 shrink-0 text-ink-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or area…"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-ink-muted"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                city === c
                  ? "bg-ink text-paper"
                  : "bg-mist text-ink-muted hover:text-ink"
              }`}
            >
              {c}
              {c !== "All" && (
                <span className="ml-1.5 opacity-60">
                  {districts.find((d) => d.city === c)?.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {filtered.length} {filtered.length === 1 ? "venue" : "venues"}
        {city !== "All" && ` in ${city}`}
      </div>

      {/* grid */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => (
          <a
            key={v.id}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${v.name} ${v.address}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_20px_40px_-24px_rgba(189,90,27,0.4)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-bold leading-tight text-ink group-hover:text-orange-deep">
                {v.name}
              </h3>
              <span className="shrink-0 rounded-full bg-teal/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-teal-deep">
                {v.city}
              </span>
            </div>
            <p className="mt-3 flex items-start gap-1.5 text-sm leading-relaxed text-ink-muted">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-orange" />
              {v.address}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
              {v.phone ? (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                  <Phone className="size-3.5 text-teal" /> {v.phone}
                </span>
              ) : (
                <span className="text-xs text-ink-muted">Tap for directions</span>
              )}
              <ArrowUpRight className="size-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange" />
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-line py-16 text-center text-ink-muted">
          No venues match your search.
        </div>
      )}
    </div>
  );
}
