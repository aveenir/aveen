// UI strings for the presentation layer. Every key must exist in both locales.
// Content (projects, illustrations, résumé) lives in src/content/ and src/data/.

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
    'nav.main': 'منوی اصلی',
    'nav.menu': 'منو',
    'nav.skip': 'پرش به محتوا',
    'nav.home': 'صفحه‌ی اصلی',
    'nav.stationery': 'اوراق اداری',
    'nav.social': 'محتوای شبکه‌های اجتماعی',
    'nav.social.short': 'شبکه‌های اجتماعی',
    'nav.identity': 'لوگو و هویت بصری',
    'nav.identity.short': 'لوگو',
    'nav.illustrations': 'تصویرسازی',
    'nav.about': 'درباره',
    'nav.contact': 'تماس',
    'lang.switch': 'English',
    'lang.switch.label': 'نسخه‌ی انگلیسی این صفحه',
    'hero.hello': 'سلام، من آوین هستم.',
    'hero.cover.alt':
      'تصویرسازی خطی: سرآشپزی سرپوش نارنجی سینی را برداشته و زیر آن نوشته شده «Aveen’s Portfolio».',
    'home.intro':
      'از سه‌چهارسالگی روی هر کاغذی که پیدا می‌کردم نقاشی می‌کشیدم. حالا تصویرسازی، هویت بصری و محتوای شبکه‌های اجتماعی طراحی می‌کنم و دوست دارم میان فناوری و احساس انسانی پل بزنم.',
    'home.chapters': 'فصل‌ها',
    'home.about.more': 'بیشتر درباره‌ی من',
    'home.illustrations.more': 'همه‌ی تصویرسازی‌ها',
    'chapter.label': 'فصل',
    'chapter.next': 'فصل بعد',
    'chapter.stationery.lead': 'کاغذهایی که داستان برند را تعریف می‌کنند.',
    'chapter.social.lead': 'قالب و تصویر برای فید اینستاگرام چهار برند.',
    'chapter.identity.lead': 'از اسکیس تا نشانه؛ سه لوگو با پالت و کاربردشان.',
    'chapter.illustrations.lead': 'طراحی‌های شخصی‌ام، روی چیزهایی که هر روز به کار می‌بریم.',
    'character.runner.alt': 'پیکره‌ی خطی در حال دویدن با دفترچه و پاکت نامه‌ی نارنجی.',
    'character.social.alt': 'پیکره‌ی خطی چهارزانو نشسته با گوشی نارنجی و آیکون‌های شبکه‌های اجتماعی در اطرافش.',
    'character.dancer.alt': 'پیکره‌ی خطی رقصان با کفش‌های بند نارنجی که نوک قلم طراحی را بالای سر گرفته است.',
    'character.detective.alt': 'پیکره‌ی خطی کارآگاه با ذره‌بین و علامت‌های سؤال گچی.',
    'character.illustrator.alt':
      'پیکره‌ی خطی با موهای بلند نارنجی که با مداد در هوا خط می‌کشد، کنار عنوان Illustrations.',
    'work.palette': 'پالت رنگ',
    'work.swatch': 'رنگ',
    'gallery.open': 'نمایش بزرگ‌تر',
    'gallery.close': 'بستن',
    'about.title': 'درباره‌ی من',
    'about.resume': 'رزومه',
    'resume.experience': 'سوابق کاری',
    'resume.skills': 'مهارت‌ها',
    'resume.software': 'نرم‌افزارها',
    'resume.languages': 'زبان',
    'resume.interests': 'علایق',
    'resume.education': 'تحصیلات',
    'resume.books': 'کتاب‌ها',
    'contact.title': 'تماس',
    'contact.cta': 'مسیر رشد رو شروع کنیم؟',
    'contact.lead':
      'برای همکاری، سفارش تصویرسازی یا یک گفت‌وگوی کوتاه درباره‌ی پروژه‌تان، ایمیل بزنید یا تماس بگیرید.',
    'contact.email': 'ایمیل',
    'contact.phone': 'تلفن',
    'about.portrait.alt': 'عکس آوین ایرانمنش با شال نارنجی و خط چشم آبی.',
    'contact.handshake.alt': 'دو دست خطی با ناخن‌های نارنجی که با هم دست می‌دهند و از میانشان جوانه‌ای سبز شده است.',
    'footer.top': 'بازگشت به بالا',
    'notfound.title': 'این صفحه پیدا نشد',
    'notfound.lead': 'شاید نشانی عوض شده باشد. از فهرست زیر راهتان را پیدا کنید.',
  },
  en: {
    'site.title': 'Aveen Iranmanesh',
    'site.tagline': 'Graphic designer & illustrator',
    'site.description':
      'Portfolio of Aveen Iranmanesh: illustration, visual identity, logo, stationery and social media content.',
    'nav.label': 'Table of contents',
    'nav.main': 'Main menu',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.stationery': 'Stationery',
    'nav.social': 'Social media content',
    'nav.social.short': 'Social media',
    'nav.identity': 'Logo & identity',
    'nav.identity.short': 'Logos',
    'nav.illustrations': 'Illustrations',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'lang.switch': 'فارسی',
    'lang.switch.label': 'Persian version of this page',
    'hero.hello': 'Hi, I’m Aveen.',
    'hero.cover.alt':
      'Line illustration: a chef lifts an orange cloche off a tray to reveal the words “Aveen’s Portfolio”.',
    'home.intro':
      'I have drawn on every scrap of paper I could find since I was three or four. Today I design illustrations, visual identities and social media content, and I like building bridges between technology and human feeling.',
    'home.chapters': 'Chapters',
    'home.about.more': 'More about me',
    'home.illustrations.more': 'All illustrations',
    'chapter.label': 'Chapter',
    'chapter.next': 'Next chapter',
    'chapter.stationery.lead': 'Paper that tells a brand’s story.',
    'chapter.social.lead': 'Templates and images for four brands’ Instagram feeds.',
    'chapter.identity.lead': 'From sketch to mark: three logos, their palettes and how they are used.',
    'chapter.illustrations.lead': 'My personal drawings, on things we use every day.',
    'character.runner.alt': 'Line figure running with a notebook and an orange envelope.',
    'character.social.alt': 'Line figure sitting cross-legged with an orange phone, social media icons around it.',
    'character.dancer.alt': 'Line figure dancing in orange-laced shoes, holding a pen-tool nib overhead.',
    'character.detective.alt': 'Line figure of a detective with a magnifying glass and chalk question marks.',
    'character.illustrator.alt':
      'Line figure with long orange hair drawing a line in the air with a pencil, beside the title “Illustrations”.',
    'work.palette': 'Colour palette',
    'work.swatch': 'Colour',
    'gallery.open': 'View larger',
    'gallery.close': 'Close',
    'about.title': 'About me',
    'about.resume': 'Résumé',
    'resume.experience': 'Experience',
    'resume.skills': 'Skills',
    'resume.software': 'Software',
    'resume.languages': 'Languages',
    'resume.interests': 'Interests',
    'resume.education': 'Education',
    'resume.books': 'Books',
    'contact.title': 'Contact',
    'contact.cta': 'Shall we start growing?',
    'contact.lead': 'For a project, an illustration commission or a short chat about your idea, email or call.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'about.portrait.alt': 'Portrait of Aveen Iranmanesh in an orange scarf and blue eyeliner.',
    'contact.handshake.alt': 'Two line-drawn hands with orange nails shaking, a sprout growing between them.',
    'footer.top': 'Back to top',
    'notfound.title': 'Page not found',
    'notfound.lead': 'The address may have changed. Find your way from the list below.',
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

/** Two-digit chapter number in the locale's digits: 1 → "۰۱" / "01". */
export function chapterNumber(n: number, locale: Locale): string {
  return localizeDigits(String(n).padStart(2, '0'), locale);
}

/** Prefix a site path with the configured base and the locale segment. */
export function localePath(path: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${base}${prefix}/${clean ? `${clean}/` : ''}`;
}

/** Locale-free route of a URL pathname: "/aveen/en/about/" → "about". */
export function routeOf(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (rest === `/${l}` || rest.startsWith(`/${l}/`)) rest = rest.slice(l.length + 1);
  }
  return rest.replace(/^\/|\/$/g, '');
}
