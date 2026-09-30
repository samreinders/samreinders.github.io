# samreinders.github.io

Personal academic website, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

Almost everything lives in `src/content/` and `src/site.ts`. You shouldn't need to touch any templates.

| To change... | Edit |
| --- | --- |
| Name, role, email, profile links, highlighted note under your name | `src/site.ts` |
| Teaching and service | `src/site.ts` |
| About paragraph | `src/content/about.md` |
| News | `src/content/news.yaml` |
| Publications (and awards, which come from the `award` field) | `src/content/publications.yaml` |
| Project pages | `src/content/projects/*.md` |
| Images | `src/assets/pubs/` (referenced by relative path from the Markdown/YAML) |
| Profile photo | drop one image into `src/assets/photo/` and set `photoAlt` in `src/site.ts` |

The build checks every entry against the schema in `src/content.config.ts`, so a typo like a missing `year` stops the build with a clear error instead of silently breaking the page.

To add a project, copy one of the files in `src/content/projects/`, change the front matter, and tag related papers in `publications.yaml` with the file name under `projects:`.

## Running locally

```sh
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. In the repository's **Settings > Pages**, set **Source** to **GitHub Actions** (one-time setup).

## Accessibility

The site ships no JavaScript, follows the OS light/dark setting, and passes axe-core checks (WCAG 2.2 AA and best practices) at desktop and mobile widths in both themes. When adding images, always write alt text that describes what the figure shows.
