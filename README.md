# Marisol Fenn — Portfolio

A personal portfolio site for Marisol Fenn, a Brooklyn-based visual designer. Includes a home page, an image gallery, a project showcase, an about page, and a contact page with social links.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) for the app framework and file-based routing
- Tailwind CSS 4 with a custom editorial theme (Fraunces + Archivo, warm paper/clay/ink palette)
- [Content Collections](https://www.content-collections.dev/) for type-safe markdown project entries (`content/projects/`)
- Netlify Forms for the contact form
- Netlify Image CDN for on-demand image resizing and format negotiation

## Running locally

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`. To exercise Netlify-specific features (forms, image CDN) exactly as they run in production, use the Netlify CLI instead:

```bash
netlify dev
```

## Project structure

See `AGENTS.md` for a full breakdown of the directory structure and the design decisions behind it.

## Content

Project case studies live as markdown files in `content/projects/`, each with frontmatter (`title`, `year`, `role`, `description`, `tags`, `image`, and optional `github`/`liveUrl`) and a short body. Add a new file there to add a new project to `/projects`.

Gallery artwork lives in `public/gallery/`. It was generated once with the `sharp` image library via `scripts/generate-gallery.mjs` — see that file if you want to regenerate or add pieces.
