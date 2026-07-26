"use client";

import dynamic from "next/dynamic";
import type { Place } from "@/lib/db";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function MapWrapper({
  places,
  zoom,
  center,
}: {
  places: Place[];
  zoom?: number;
  center?: [number, number];
}) {
  return <MapView places={places} zoom={zoom} center={center} />;
}
