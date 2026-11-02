import type { ImageMetadata } from 'astro';

// Every JPEG, PNG and WebP in src/assets/images, keyed by file name without extension (e.g. images.hero).
// Astro resizes and compresses these at build time when they are used with <Image />.
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

export const images: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split('/').pop()!.replace(/\.(jpe?g|png|webp)$/, ''), mod.default]),
);
