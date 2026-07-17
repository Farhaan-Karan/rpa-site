"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { districts } from "@/lib/clubs";

const coords: Record<string, [number, number]> = {
  Jaipur: [26.9124, 75.7873],
  Jodhpur: [26.2389, 73.0243],
  Udaipur: [24.5854, 73.7125],
  Kota: [25.2138, 75.8648],
  Bhilwara: [25.3407, 74.6313],
  Ajmer: [26.4499, 74.6399],
};

const CENTER: [number, number] = [25.9, 74.2];
const ZOOM = 6;

export function IndiaMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | null = null;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current || ref.current.dataset.init) return;
      ref.current.dataset.init = "1";

      map = L.map(ref.current, {
        center: CENTER,
        zoom: ZOOM,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        { maxZoom: 19, subdomains: "abcd" }
      ).addTo(map);

      // Home / reset control
      const HomeControl = L.Control.extend({
        onAdd() {
          const btn = L.DomUtil.create("button");
          btn.title = "Reset view";
          btn.setAttribute("aria-label", "Reset map view");
          btn.style.cssText =
            "width:34px;height:34px;display:grid;place-items:center;background:#fff;border:1px solid #e6dcca;border-radius:8px;cursor:pointer;box-shadow:0 1px 4px rgba(17,33,39,.15);color:#12788b;";
          btn.innerHTML =
            '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>';
          L.DomEvent.on(btn, "click", (e) => {
            L.DomEvent.stop(e);
            map!.flyTo(CENTER, ZOOM, { duration: 0.6 });
          });
          return btn;
        },
      });
      new HomeControl({ position: "topright" }).addTo(map);

      districts.forEach((d) => {
        const c = coords[d.city];
        if (!c) return;
        const baseR = 8 + Math.min(d.count, 90) / 6;
        const marker = L.circleMarker(c, {
          radius: baseR,
          color: "#12788b",
          weight: 2,
          fillColor: "#d38a2d",
          fillOpacity: 0.9,
        }).addTo(map!);

        marker
          .bindTooltip(d.city, { direction: "top", offset: [0, -6], className: "rpa-tip" })
          .bindPopup(
            `<div style="font-family:'Plus Jakarta Sans',sans-serif;min-width:150px">
               <div style="font-weight:800;font-size:15px;color:#112127">${d.city}</div>
               <div style="color:#5f7078;font-size:12px;margin-top:2px">${d.count} affiliated ${d.count === 1 ? "venue" : "venues"}</div>
               <div style="color:#5f7078;font-size:12px;margin-top:6px">${d.blurb}</div>
             </div>`
          );

        marker.on("mouseover", () => marker.setStyle({ radius: baseR + 4, fillColor: "#e5a44a" }));
        marker.on("mouseout", () => marker.setStyle({ radius: baseR, fillColor: "#d38a2d" }));
        marker.on("click", () => map!.flyTo(c, 8, { duration: 0.6 }));
      });
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
      if (ref.current) delete ref.current.dataset.init;
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
      <div ref={ref} className="h-[440px] w-full sm:h-[540px]" />
      <div className="pointer-events-none absolute bottom-3 left-3 z-[500] rounded-full bg-paper/90 px-3 py-1.5 text-[0.7rem] font-medium text-ink-muted shadow-sm">
        Tap a district for details · ⌂ resets the view
      </div>
    </div>
  );
}
