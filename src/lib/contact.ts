import site from '../data/site.json';

export type CityKey = keyof typeof site.cities;

/** Builds a wa.me link, optionally with a prefilled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Builds a tel: link for the one JC Cabs number. */
export function telLink(): string {
  return `tel:${site.phone}`;
}
