# φ — Documentation

The user documentation for [φ](https://getpoiesis.com), a calm, local-first
writing app for manuscripts, poetry, and essays. Lives at
**[docs.getpoiesis.com](https://docs.getpoiesis.com)** and is built with
Docusaurus.

## Contributions welcome 💛

This is open to everyone — you don't need to be a developer to help.

- **Spotted a typo or something unclear?** Click **Edit this page** at the bottom
  of any page on the site, or edit the file here on GitHub, and open a pull
  request. We review every one.
- **Want to improve a page or add a new one?** Pages are plain Markdown in
  [`docs/`](docs/). Add or edit a file and send a PR.
- **Translations** are very welcome. Spanish and French already ship; the
  translated pages live under [`i18n/`](i18n/). Fixing or completing a
  translation — or starting a new language — is a great first contribution.

A couple of gentle conventions so everything reads as one product:

- The app is always written **φ** — please don't write the word "Poiesis" in the
  documentation prose.
- Keep the tone calm and friendly, writer to writer.

Not sure where something goes, or have a bigger idea? Open an issue and we'll
help.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm start            # live preview at http://localhost:3000
npm run build        # production build into build/
npm run serve        # preview the production build
```

To preview a translation, start the dev server for that locale:

```bash
npm start -- --locale es   # or fr
```

## How it's organized

- `docs/` — the English pages (Markdown).
- `i18n/` — the Spanish and French translations.
- `sidebars.ts` — how pages are grouped in the sidebar.
- `src/css/` — the look and feel, in φ's brand colors and fonts.

The site deploys automatically to **docs.getpoiesis.com** whenever changes land
on `main`.
