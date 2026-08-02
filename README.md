# Software Engineering Portfolio

A polished, production-ready personal portfolio starter built for job-search use. All personal details ship as clearly labeled placeholders so you can swap in real content from one file.

## Purpose

Provide a maintainable React + TypeScript portfolio with:

- Professional section coverage (hero through contact)
- Centralized editable content
- Accessible, responsive UI
- Strict TypeScript and linting
- A fast Vite production build

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

### Install dependencies

```bash
cd ~/Desktop/PortfolioTesting
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the local URL printed in the terminal (typically `http://localhost:5173`).

### Type-check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

### Production build

```bash
npm run build
```

Preview the production bundle:

```bash
npm run preview
```

## Where to edit portfolio content

All placeholder copy lives in:

```text
src/data/portfolioData.ts
```

Types for that data live in:

```text
src/types/portfolio.ts
```

### Replacing placeholder information

1. Open `src/data/portfolioData.ts`.
2. Search for `[PLACEHOLDER` and replace each value.
3. Update links for GitHub, LinkedIn, resume, email, and project demos.
4. Update `index.html` `<title>` and meta description if desired.
5. Replace SVG placeholders in `/public` with real screenshots when ready.

You should not need to edit section components for ordinary content updates.

### Adding a project

1. Add a new object to the `projects` array in `portfolioData.ts`.
2. Include `id`, `title`, descriptions, `technologies`, image paths, links, and `featured`.
3. Drop a screenshot into `/public` (or `src/assets`) and point `imageSrc` at it.
4. Set `featured: true` to show it in the Featured projects grid.

Example:

```ts
{
  id: 'project-new',
  title: 'My New Project',
  shortDescription: 'One-line summary for the card.',
  longSummary: 'Longer explanation of problem, approach, and outcome.',
  technologies: ['React', 'TypeScript'],
  imageSrc: '/project-new.png',
  imageAlt: 'Screenshot of My New Project dashboard',
  githubUrl: 'https://github.com/you/project-new',
  liveUrl: 'https://example.com/project-new',
  featured: true,
}
```

## Architecture decisions

- **Content / presentation split** — `portfolioData.ts` is the single source of truth. Sections receive typed props and stay reusable.
- **Lightweight stack** — No UI framework. Tailwind tokens + a small component set keep the CSS intentional and easy to restyle.
- **Original visual system** — Ink surfaces with a seafoam accent, Space Grotesk + Source Sans 3 + IBM Plex Mono. Avoids generic purple-gradient and cream/terracotta templates.
- **Accessibility first** — Skip link, semantic landmarks, keyboard-friendly mobile nav, visible `:focus-visible` styles, descriptive image alt text, and `prefers-reduced-motion` support.
- **Theme toggle** — Light/dark themes via `data-theme` on `<html>`, with a tiny pre-hydration script to prevent flash.
- **Expandable layout** — Folders for `components`, `sections`, `data`, `types`, `hooks`, `styles`, and `assets` make future features easy to add without sprawl.

## Project structure

```text
src/
  components/     Reusable UI pieces (nav, cards, buttons, etc.)
  sections/       Page sections composed in App.tsx
  data/           Editable portfolio content
  types/          Shared TypeScript contracts
  hooks/          Theme, motion, and intersection helpers
  styles/         Global CSS + design tokens
  assets/         Optional imported media
public/           Favicon + project placeholder visuals
```

## Scripts reference

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Start Vite dev server                  |
| `npm run build`     | Type-check and build for production    |
| `npm run preview`   | Serve the production build locally     |
| `npm run lint`      | Run ESLint                             |
| `npm run typecheck` | Run the TypeScript project build check |
| `npm run format`    | Format files with Prettier             |

## License

Private starter project — adapt freely for your own portfolio.
