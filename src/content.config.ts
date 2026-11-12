// Content collections. Schemas are the contract for docs/content-guide.md:
// an invalid or missing field fails `pnpm build`.
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Every user-facing string exists in both locales. */
const text = z.object({ fa: z.string().min(1), en: z.string().min(1) });

export const categories = ['stationery', 'social', 'identity'] as const;
export type Category = (typeof categories)[number];

const projects = defineCollection({
  // One YAML file per project: src/content/projects/<slug>.yaml
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      category: z.enum(categories),
      order: z.number().int(),
      /** Client or brand name, original spelling per locale. */
      title: text,
      /** Chalk word of the heading: "Logo", "Posts and Stories"… */
      kind: text,
      /** Paragraphs separated by a blank line. */
      body: text,
      /** Brand colors shown as swatches (client palette, not site tokens). */
      palette: z.array(z.string().regex(/^#[0-9A-F]{6}$/)).default([]),
      images: z
        .array(
          z.object({
            src: image(),
            alt: text,
            /** Spans the full row of the project grid. */
            wide: z.boolean().default(false),
          }),
        )
        .min(1),
    }),
});

const illustrations = defineCollection({
  loader: file('src/content/illustrations.yaml'),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      /** What the drawing is printed on: "T-shirts", "Mugs"… */
      surface: text,
      alt: text,
      image: image(),
      wide: z.boolean().default(false),
      /** "night" places the piece on the dark band (portfolio p.22). */
      band: z.enum(['paper', 'night']).default('paper'),
    }),
});

export const collections = { projects, illustrations };
