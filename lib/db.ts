import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface Place {
  id: string;
  name: string;
  country: string | null;
  city: string;
  neighborhood: string | null;
  type: string;
  tags: string;
  lat: number | null;
  lng: number | null;
  google_maps_url: string | null;
  instagram_url: string | null;
  notes: string | null;
  created_at: string;
}

export interface CountryGroup {
  country: string;
  count: number;
}

export interface CityGroup {
  city: string;
  count: number;
}

function getDB() {
  const { env } = getCloudflareContext();
  return env.DB;
}

export async function getCountries(): Promise<CountryGroup[]> {
  const db = getDB();
  const { results } = await db
    .prepare(
      "SELECT country, COUNT(*) as count FROM places WHERE country IS NOT NULL GROUP BY country ORDER BY country"
    )
    .all<{ country: string; count: number }>();
  return results;
}

export async function getCitiesForCountry(
  country: string
): Promise<CityGroup[]> {
  const db = getDB();
  const { results } = await db
    .prepare(
      "SELECT city, COUNT(*) as count FROM places WHERE country = ? GROUP BY city ORDER BY city"
    )
    .bind(country)
    .all<{ city: string; count: number }>();
  return results;
}

export async function getPlacesForCity(
  country: string,
  city: string
): Promise<Place[]> {
  const db = getDB();
  const { results } = await db
    .prepare("SELECT * FROM places WHERE country = ? AND city = ? ORDER BY type, name")
    .bind(country, city)
    .all<Place>();
  return results;
}

export async function getPlacesForCountry(country: string): Promise<Place[]> {
  const db = getDB();
  const { results } = await db
    .prepare("SELECT * FROM places WHERE country = ? ORDER BY city, type, name")
    .bind(country)
    .all<Place>();
  return results;
}

export async function getAllPlaces(): Promise<Place[]> {
  const db = getDB();
  const { results } = await db
    .prepare("SELECT * FROM places ORDER BY country, city, name")
    .all<Place>();
  return results;
}

export function parseTags(tags: string): string[] {
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const TYPE_COLORS: Record<string, string> = {
  Restaurant: "#D85A30",
  Cafe: "#185FA5",
  Bar: "#534AB7",
  Hotel: "#0F6E56",
  Activity: "#854F0B",
  Shop: "#8B3A62",
  Museum: "#4A6741",
  Park: "#2D7D46",
  Beach: "#1A8FA0",
  Other: "#6B6B6B",
};
