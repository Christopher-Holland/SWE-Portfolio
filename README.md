# Christopher Holland — Software Engineer Portfolio

Personal portfolio for Christopher Holland, a software engineer and automation developer. The site covers full-stack work, internal tools, and AutoCAD workflow automation, and it is the page used for job search.

## Technology stack

| Layer           | Choice                                  |
| --------------- | --------------------------------------- |
| UI              | React 19                                |
| Language        | TypeScript (strict)                     |
| Bundler         | Vite 8                                  |
| Styling         | Tailwind CSS v4 + design tokens         |
| Lint            | ESLint (typescript-eslint, React Hooks) |
| Format          | Prettier                                |
| Icons / UI kits | None — inline SVG and custom components |

## Getting started

From this repository:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (typically `http://localhost:5173`).

### Checks and production build

```bash
npm run typecheck
npm run lint
npm run format
npm run build
npm run preview
```

## Editing content

Copy, links, projects, experience, and education live in `src/data/portfolioData.ts`. Types for that data live in `src/types/portfolio.ts`.

Ordinary content updates do not require changes to section components.

The document title, meta description, and Open Graph tags live in `index.html`. Before deploying, set the canonical URL, `og:url`, and `og:image` to the real site origin. The share image file is `public/og_image.png`.

### Adding a project

1. Add an object to the `projects` array in `portfolioData.ts`.
2. Put a screenshot in `public/` and set `imageSrc` to that file name.
3. Set `featured: true` to include it in the projects grid.
4. Omit `liveUrl` when there is no live demo. The card will show only the repository button.

```ts
{
  id: 'project-id',
  title: 'Project title',
  shortDescription: 'One-line summary for the card.',
  longSummary: 'What the project does and what changed because of it.',
  technologies: ['TypeScript', 'React'],
  imageSrc: 'project-screenshot.png',
  imageAlt: 'Screenshot description',
  githubUrl: 'https://github.com/Christopher-Holland/project-id',
  featured: true,
}
```

## Architecture

- **Content and presentation are split.** `portfolioData.ts` is the source of truth. Sections receive typed props.
- **Styling is a small custom system.** Tailwind tokens, no UI kit. Ink surfaces, a seafoam accent, and Space Grotesk, Source Sans 3, and IBM Plex Mono.
- **Theme is set before paint.** Light and dark themes use `data-theme` on `<html>`, with a short script in `index.html` so the first paint matches the saved preference.
- **Accessibility is built in.** Skip link, landmarks, keyboard-accessible mobile nav, visible `:focus-visible` styles, image alt text, and `prefers-reduced-motion` support.

## Project structure

```text
src/
  components/     Reusable UI (nav, cards, buttons)
  sections/       Page sections composed in App.tsx
  data/           Portfolio content
  types/          TypeScript contracts
  hooks/          Theme and motion preferences
  styles/         Global CSS and design tokens
public/           Favicon, resume, Open Graph image, project screenshots
```

## Scripts

| Script              | Description                         |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start the Vite dev server           |
| `npm run build`     | Type-check and build for production |
| `npm run preview`   | Serve the production build locally  |
| `npm run lint`      | Run ESLint                          |
| `npm run lint:fix`  | Run ESLint with fixes               |
| `npm run typecheck` | Run the TypeScript project check    |
| `npm run format`    | Format files with Prettier          |
| `npm run format:check` | Check formatting with Prettier   |
