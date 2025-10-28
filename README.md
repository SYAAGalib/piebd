# PiBD Marketing Site

This repository contains the PiBD marketing website, a React + Vite single-page application showcasing our digital services.

## Getting started

Before you begin, make sure you have a recent LTS version of Node.js installed (we recommend managing versions with [nvm](https://github.com/nvm-sh/nvm)).

```bash
git clone <REPO_URL>
cd piebd
npm install
npm run dev
```

The development server runs at <http://localhost:5173> by default. Vite offers automatic hot module replacement, so changes appear instantly in the browser.

## Available scripts

- `npm run dev` – start the Vite development server
- `npm run build` – create an optimized production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the project

## Tech stack

- React 18 with TypeScript
- Vite for fast development and bundling
- Tailwind CSS and shadcn/ui component primitives
- Radix UI for accessible, unstyled components
- TanStack Query for data fetching helpers

## Deployment

The site builds to the `dist/` directory via `npm run build`. You can deploy the static output to any modern hosting platform such as Vercel, Netlify, Cloudflare Pages, or your own static hosting.

1. Run `npm run build`.
2. Upload the contents of the generated `dist/` directory to your hosting provider.

### Environment variables

This project currently does not require runtime environment variables. If you introduce API integrations, define expected variables in `.env.example` and reference them through Vite's `import.meta.env` API.

## Contributing

1. Create a feature branch.
2. Make your changes and add tests where relevant.
3. Run the lint and build commands to ensure everything passes.
4. Open a pull request describing your changes.

---

If you discover an issue or have ideas for improvement, open an issue or reach out to the PiBD team.
