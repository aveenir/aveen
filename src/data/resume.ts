// Résumé, transcribed from the portfolio (p.3). Persian dates are Solar Hijri as
// written by the owner; English uses the matching Gregorian years (TD-006, TD-014).
import type { Locale } from '@/i18n/ui';

type L = Record<Locale, string>;

export interface Job {
  role: L;
  company: L;
  period: L;
  books?: L[];
}

export const experience: Job[] = [
  {
    role: { fa: 'طراح گرافیک', en: 'Graphic designer' },
    company: { fa: 'مبین‌هاست', en: 'MobinHost' },
    period: { fa: 'خرداد ۱۴۰۴ تا آذر ۱۴۰۴', en: '2025' },
  },
  {
    role: { fa: 'طراح گرافیک', en: 'Graphic designer' },
    company: { fa: 'ایران وب لایف', en: 'IranWebLife' },
    period: { fa: 'خرداد ۱۴۰۳ تا اردیبهشت ۱۴۰۴', en: '2024 – 2025' },
  },
  {
    role: { fa: 'طراح گرافیک', en: 'Graphic designer' },
    company: { fa: 'کنت‌تیم', en: 'KentTeam' },
    period: { fa: 'فروردین ۱۴۰۲ تا اسفند ۱۴۰۲', en: '2023 – 2024' },
  },
  {
    role: { fa: 'طراح گرافیک', en: 'Graphic designer' },
    company: { fa: 'آژانس پلاتین', en: 'Platin Agency' },
    period: { fa: 'مهر ۱۴۰۰ تا اسفند ۱۴۰۰', en: '2021 – 2022' },
  },
  {
    role: { fa: 'طراح گرافیک', en: 'Graphic designer' },
    company: { fa: 'آژانس اینوالت', en: 'Innovalt Agency' },
    period: { fa: 'فروردین ۱۳۹۹ تا اسفند ۱۴۰۰', en: '2020 – 2022' },
  },
  {
    role: { fa: 'صفحه‌آرای کتاب', en: 'Book layout designer' },
    company: { fa: 'انتشارات شمعدونی', en: 'Shamdooni Publishing' },
    period: { fa: 'مهر ۱۳۹۶ تا اسفند ۱۳۹۹', en: '2017 – 2021' },
    books: [
      { fa: 'یادم تو را فراموش', en: 'Yadam To Ra Faramoosh' },
      { fa: 'چگونه دیگران را روانکاوی کنیم', en: 'How to Psychoanalyse Others' },
      { fa: 'من مضطرب', en: 'Anxious Me' },
    ],
  },
];

export const skills: L[] = [
  { fa: 'تصویرسازی', en: 'Illustration' },
  { fa: 'طراحی هویت بصری سوشال', en: 'Social media visual identity' },
  { fa: 'صفحه‌آرایی', en: 'Layout and editorial design' },
  { fa: 'لوگو و اوراق اداری', en: 'Logos and stationery' },
];

/** Product names: identical in both locales, always rendered as Latin. */
export const software = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Premiere'];

export const languages: L[] = [
  { fa: 'فارسی (زبان مادری)', en: 'Persian (native)' },
  { fa: 'انگلیسی (متوسط)', en: 'English (intermediate)' },
];

export const interests: L[] = [
  { fa: 'نقاشی', en: 'Painting' },
  { fa: 'خواندن کتاب‌های روان‌شناسی', en: 'Reading psychology books' },
  { fa: 'پازل هزارتکه', en: '1000-piece puzzles' },
  { fa: 'دنبال کردن تئوری و مقاله‌های موسیقی جز', en: 'Jazz theory and writing on jazz' },
];

export const education: L = {
  fa: 'کارشناسی گرافیک، دانشگاه علم و فرهنگ',
  en: 'BA in Graphic Design, University of Science and Culture',
};

/** About-page biography (portfolio p.2), one string per paragraph. */
export const bio: Record<Locale, string[]> = {
  fa: [
    'سلام، من آوین هستم.',
    'از وقتی یادم می‌آید عاشق تصویرسازی و نقاشی بودم. از سه‌چهارسالگی روی هر کاغذی که پیدا می‌کردم، از چرک‌نویس‌ها گرفته تا روزنامه‌ها، شروع به کشیدن می‌کردم و این علاقه تا امروز همراهم مانده است.',
    'چیزی که این روزها زیاد به آن فکر می‌کنم، سرعت بالای پیشرفت تکنولوژی است. گاهی احساس می‌کنم زندگی روزبه‌روز مکانیکی‌تر می‌شود و به همین دلیل دوست دارم میان دنیای فناوری و احساسات انسانی پلی بسازم. برای من مهم است که به چیزهای روزمره و حتی جزئیات کوچک زندگی معنا و کاربرد تازه‌ای بدهم و در عین حال به تکنولوژی کمی روح و شخصیت اضافه کنم.',
    'همیشه به ترکیب هنر و کاربرد علاقه داشته‌ام. فکر می‌کنم وقتی این دو کنار هم قرار می‌گیرند، نتیجه چیزی فراتر از یک اثر زیبا یا یک ابزار صرف می‌شود. این پورتفولیو بخشی از مسیر، تجربه‌ها و نگاه من به طراحی است و خوشحال می‌شوم در ادامه همراهش باشید.',
  ],
  en: [
    'Hi, I’m Aveen.',
    'For as long as I can remember I have loved drawing and painting. From the age of three or four I drew on any paper I could find, from scrap paper to newspapers, and that love has stayed with me ever since.',
    'Lately I think a lot about how fast technology moves. Sometimes life feels more mechanical every day, which is why I want to build a bridge between technology and human feeling. It matters to me to give everyday things, even the small details of life, a new meaning and use, and to give technology a little soul and personality.',
    'I have always been drawn to the meeting of art and use. When the two sit side by side, the result is more than a beautiful piece or a mere tool. This portfolio is part of my path, my experience and how I see design. I’d be glad to have you along.',
  ],
};
