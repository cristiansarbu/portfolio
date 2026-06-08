# Portfolio - Angelo Cristian Sarbu

Personal developer portfolio built with Astro, Tailwind CSS and TypeScript. Static output, zero client-side JS, with i18n support for Spanish, English and German.

## Tech stack

- [Astro](https://astro.build) static site generator
- [Tailwind CSS](https://tailwindcss.com) utility-first styling
- TypeScript

## Getting started

```sh
cd app
npm install
npm run dev
```

The dev server starts at `localhost:4321`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Project structure

```
app/
├── public/            # Static assets (favicons, PDFs, manifest)
├── src/
│   ├── assets/img/    # Images (optimized by Astro)
│   ├── components/    # Astro components
│   ├── i18n/          # Translation files (es, en, de)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Routes (/, /en/, /de/)
│   └── styles/        # Global CSS
├── astro.config.mjs
└── package.json
```

## Deployment

Build the static site and serve the `dist/` folder with any web server (Nginx, Caddy, etc.):

```sh
npm run build
```

## License

All rights reserved.