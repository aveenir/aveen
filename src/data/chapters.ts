// The site's chapters, in the order of the portfolio's table of contents (p.4).
// Navigation, page tabs and "next chapter" links all read from this list.
import type { UIKey } from '@/i18n/ui';

export interface Chapter {
  id: 'stationery' | 'social' | 'identity' | 'illustrations' | 'about' | 'contact';
  path: string;
  label: UIKey;
  short: UIKey;
}

export const chapters: Chapter[] = [
  { id: 'stationery', path: 'work/stationery', label: 'nav.stationery', short: 'nav.stationery' },
  { id: 'social', path: 'work/social', label: 'nav.social', short: 'nav.social.short' },
  { id: 'identity', path: 'work/identity', label: 'nav.identity', short: 'nav.identity.short' },
  { id: 'illustrations', path: 'illustrations', label: 'nav.illustrations', short: 'nav.illustrations' },
  { id: 'about', path: 'about', label: 'nav.about', short: 'nav.about' },
  { id: 'contact', path: 'contact', label: 'nav.contact', short: 'nav.contact' },
];

/** 1-based position, used as the chapter number on the page tab. */
export function chapterIndex(id: Chapter['id']): number {
  return chapters.findIndex((c) => c.id === id) + 1;
}

export function nextChapter(id: Chapter['id']): Chapter {
  const i = chapters.findIndex((c) => c.id === id);
  return chapters[(i + 1) % chapters.length]!;
}
