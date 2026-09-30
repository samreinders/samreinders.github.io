import type { CollectionEntry } from 'astro:content';

type Pub = CollectionEntry<'publications'>;

// Newest year first; within a year, papers before short papers, posters and articles.
const TYPE_ORDER = ['Paper', 'Short paper', 'Poster', 'Article'];

export function comparePubs(a: Pub, b: Pub): number {
  return (
    b.data.year - a.data.year ||
    TYPE_ORDER.indexOf(a.data.type) - TYPE_ORDER.indexOf(b.data.type) ||
    a.data.title.localeCompare(b.data.title)
  );
}
