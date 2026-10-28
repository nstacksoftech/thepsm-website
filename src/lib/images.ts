const BASE = '/assets/images';

/** Local public asset path (handles spaces in filenames). */
export function img(name: string): string {
  return `${BASE}/${encodeURIComponent(name)}`;
}
