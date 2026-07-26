import type { Place } from "@/lib/db";
import { parseTags, TYPE_COLORS } from "@/lib/db";
import { ExternalLink, MapPin } from "lucide-react";

export default function PlaceCard({ place }: { place: Place }) {
  const tags = parseTags(place.tags);
  const color = TYPE_COLORS[place.type] || TYPE_COLORS.Other;

  return (
    <div className="bg-white rounded-xl border border-sand-200 p-4 hover:border-blue-200 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-sand-900 text-sm truncate">
            {place.name}
          </h3>
          {place.neighborhood && (
            <p className="text-xs text-sand-500 mt-0.5">{place.neighborhood}</p>
          )}
        </div>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
          style={{ background: `${color}14`, color }}
        >
          {place.type}
        </span>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {place.notes && (
        <p className="text-xs text-sand-500 mt-2 line-clamp-2 leading-relaxed">
          {place.notes}
        </p>
      )}

      <div className="flex gap-3 mt-3">
        {place.google_maps_url && (
          <a
            href={place.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900"
          >
            <MapPin size={12} />
            Maps
          </a>
        )}
        {place.instagram_url && (
          <a
            href={place.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900"
          >
            <ExternalLink size={12} />
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}
