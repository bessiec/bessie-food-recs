export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function fromSlug(slug: string, candidates: string[]): string | null {
  return candidates.find((c) => toSlug(c) === slug) || null;
}
