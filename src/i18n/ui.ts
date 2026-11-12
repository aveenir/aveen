// UI strings for the presentation layer. Every key must exist in both locales.
// Content (projects, illustrations) lives in src/content/, not here.

export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fa';

export const dir: Record<Locale, 'rtl' | 'ltr'> = { fa: 'rtl', en: 'ltr' };

export const ui = {
  fa: {
    'site.title': 'آوین ایرانمنش',
    'site.tagline': 'طراح گرافیک و تصویرساز',
    'site.description':
      'پورتفولیوی آوین ایرانمنش؛ تصویرسازی، هویت بصری، لوگو، اوراق اداری و محتوای شبکه‌های اجتماعی.',
    'nav.label': 'فهرست',
    'nav.skip': 'پرش به محتوا',
    'nav.stationery': 'اوراق اداری',
    'nav.social': 'محتوای شبکه‌های اجتماعی',
    'nav.identity': 'لوگو و هویت بصری',
    'nav.illustrations': 'تصویرسازی',
    'nav.about': 'درباره',
    'nav.contact': 'تماس',
    'hero.hello': 'سلام، من آوین هستم.',
    'hero.cover.alt':
      'تصویرسازی خطی: سرآشپزی سرپوش نارنجی سینی را برداشته و زیر آن نوشته شده «Aveen’s Portfolio».',
    'contact.cta': 'مسیر رشد رو شروع کنیم؟',
    'lang.switch': 'English',
    'wip.note': 'این سایت در حال ساخت است.',
  },
  en: {
    'site.title': 'Aveen Iranmanesh',
    'site.tagline': 'Graphic designer & illustrator',
    'site.description':
      'Portfolio of Aveen Iranmanesh: illustration, visual identity, logo, stationery and social media content.',
    'nav.label': 'Table of contents',
    'nav.skip': 'Skip to content',
    'nav.stationery': 'Stationery',
    'nav.social': 'Social media content',
    'nav.identity': 'Logo & identity',
    'nav.illustrations': 'Illustrations',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.hello': 'Hi, I’m Aveen.',
    'hero.cover.alt':
      'Line illustration: a chef lifts an orange cloche off a tray to reveal the words “Aveen’s Portfolio”.',
    'contact.cta': 'Shall we start growing?',
    'lang.switch': 'فارسی',
    'wip.note': 'This site is under construction.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['fa'];

export function useTranslations(locale: Locale) {
  return (key: UIKey): string => ui[locale][key];
}

/** Persian digits for display; Latin digits stay in URLs, emails and code. */
export function localizeDigits(value: string | number, locale: Locale): string {
  const s = String(value);
  return locale === 'fa' ? s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]!) : s;
}

/** Prefix a site path with the configured base and the locale segment. */
export function localePath(path: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${base}${prefix}/${clean ? `${clean}/` : ''}`;
}
