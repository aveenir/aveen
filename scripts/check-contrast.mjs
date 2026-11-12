// Audits text/background token pairs against WCAG 2.x contrast.
// Usage: pnpm tokens:contrast   (exits 1 on any failure)
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');
const raw = Object.fromEntries(
  [...css.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]),
);
const resolve = (name) => {
  let v = raw[name];
  for (let i = 0; v && v.startsWith('var(') && i < 8; i++) v = raw[v.slice(6, -1)];
  if (!v || !/^#[0-9a-f]{6}$/i.test(v)) throw new Error(`Token --${name} is not a hex color`);
  return v;
};
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// [foreground, background, minimum ratio, usage]
// 4.5 = body text, 3 = large display text (>= 24px) and UI boundaries.
const pairs = [
  ['color-ink', 'color-paper', 4.5, 'body text on light paper'],
  ['color-ink', 'color-paper-deep', 4.5, 'body text on deep paper'],
  ['color-ink', 'color-paper-raised', 4.5, 'text on cards'],
  ['color-ink', 'color-label', 4.5, 'text on paper labels'],
  ['color-ink', 'color-chalk', 4.5, 'text on page tab'],
  ['color-ink', 'color-accent', 4.5, 'label on accent button'],
  ['color-ink-soft', 'color-paper', 4.5, 'secondary text on light paper'],
  ['color-accent-text', 'color-label', 4.5, 'accent text on labels'],
  ['color-on-night', 'color-night', 4.5, 'text in night section'],
  ['color-accent', 'color-night', 3, 'accent display in night section'],
  ['color-focus', 'color-paper', 3, 'focus ring on light paper'],
  ['color-focus', 'color-paper-deep', 3, 'focus ring on deep paper'],
];

// Known decorative-only pairs: reported, never enforced. See docs/design-system.md.
const decorative = [
  ['color-chalk', 'color-paper', 'chalk display type on light paper'],
  ['color-chalk', 'color-paper-deep', 'chalk display type on deep paper'],
  ['color-accent', 'color-paper', 'accent strokes on paper'],
];

let failed = 0;
for (const [fg, bg, min, use] of pairs) {
  const r = ratio(resolve(fg), resolve(bg));
  const ok = r >= min;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1 (min ${min})  --${fg} on --${bg}  ${use}`);
}
for (const [fg, bg, use] of decorative) {
  const r = ratio(resolve(fg), resolve(bg));
  console.log(`INFO  ${r.toFixed(2)}:1  --${fg} on --${bg}  ${use} (decorative only)`);
}
if (failed) {
  console.error(`\n${failed} contrast pair(s) failed.`);
  process.exit(1);
}
console.log('\nAll enforced pairs pass.');
