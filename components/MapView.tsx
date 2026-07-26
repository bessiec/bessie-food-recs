"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import type { Place } from "@/lib/db";
import { TYPE_COLORS, parseTags } from "@/lib/db";

interface MapViewProps {
  places: Place[];
  zoom?: number;
  center?: [number, number];
}

export default function MapView({ places, zoom, center }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const placesWithCoords = places.filter((p) => p.lat && p.lng);
    if (placesWithCoords.length === 0) return;

    const mapCenter = center || [
      placesWithCoords.reduce((s, p) => s + p.lat!, 0) / placesWithCoords.length,
      placesWithCoords.reduce((s, p) => s + p.lng!, 0) / placesWithCoords.length,
    ];

    const map = L.map(mapRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView(mapCenter as L.LatLngExpression, zoom || 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    placesWithCoords.forEach((place) => {
      const color = TYPE_COLORS[place.type] || TYPE_COLORS.Other;
      const tags = parseTags(place.tags);

      const icon = L.divIcon({
        className: "custom-pin",
        html: `<div style="
          width: 14px;
          height: 14px;
          background: ${color};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      const mapsLink = place.google_maps_url
        ? `<a href="${place.google_maps_url}" target="_blank" rel="noopener" style="color:#185FA5;text-decoration:none;font-size:12px">Open in Maps ↗</a>`
        : "";

      const igLink = place.instagram_url
        ? `<a href="${place.instagram_url}" target="_blank" rel="noopener" style="color:#185FA5;text-decoration:none;font-size:12px;margin-left:8px">Instagram ↗</a>`
        : "";

      const tagHtml = tags.length
        ? `<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:3px">${tags
            .map(
              (t) =>
                `<span style="font-size:10px;padding:1px 6px;border-radius:20px;background:#EBF3FB;color:#0C447C">${t}</span>`
            )
            .join("")}</div>`
        : "";

      const popup = `
        <div style="min-width:160px">
          <div style="font-weight:500;font-size:14px;margin-bottom:2px">${place.name}</div>
          <div style="font-size:12px;color:#7A7772">${place.type}${place.neighborhood ? ` · ${place.neighborhood}` : ""}</div>
          ${tagHtml}
          ${place.notes ? `<div style="font-size:12px;color:#444241;margin-top:6px;line-height:1.4">${place.notes.slice(0, 120)}${place.notes.length > 120 ? "…" : ""}</div>` : ""}
          <div style="margin-top:8px">${mapsLink}${igLink}</div>
        </div>
      `;

      L.marker([place.lat!, place.lng!], { icon })
        .bindPopup(popup)
        .addTo(map);
    });

    if (!center && placesWithCoords.length > 1) {
      const bounds = L.latLngBounds(
        placesWithCoords.map((p) => [p.lat!, p.lng!] as L.LatLngTuple)
      );
      map.fitBounds(bounds, { padding: [30, 30] });
    }

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [places, zoom, center]);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-xl border border-sand-200"
      style={{ height: "380px" }}
    />
  );
}
