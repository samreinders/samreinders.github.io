import type { ImageMetadata } from 'astro';
import { site } from '../site';

// The profile photo is whichever image is in src/assets/photo/, or null if there isn't one yet.
const files = import.meta.glob<ImageMetadata>('../assets/photo/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});
const found = Object.values(files);

if (found.length > 1) {
  throw new Error(`src/assets/photo/ should contain one image, but has ${found.length}. Remove the ones you don't want.`);
}
if (found.length === 1 && !site.photoAlt.trim()) {
  throw new Error("Describe your photo in photoAlt in src/site.ts, e.g. 'Sam Reinders, smiling, in a blue shirt'.");
}

export const photo = found[0] ?? null;
