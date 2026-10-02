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
npm start              # the whole site, every language, with search: http://localhost:3000
npm run dev            # live preview while you edit (one language, no search)
npm run dev -- --locale es   # live preview of a translation (or fr)
```

`npm start` builds the site first, so it takes a little while and doesn't
reload as you edit. `npm run dev` reloads instantly but serves a single
language: its language menu leads to "page not found", and search is off.

## Screenshots

The app screenshots in `static/img/app/` (each in light and dark) are taken by
a script, from the app's dev build:

```bash
scripts/capture-doc-shots.sh                          # all of them
scripts/capture-doc-shots.sh templates-page find-bar  # only these
scripts/capture-doc-shots.sh --list                   # the names
```

It needs macOS, and the app's repository next to this one with `npm install`
run in it (or `APP=/path/to/app`). It uses a vault and settings of its own,
made fresh each time and removed afterwards, so nothing of yours is touched.
What each screenshot shows is in `scripts/doc-shots.mjs`; what the vault holds
beyond the app's own sample novel is in `scripts/seed-docs-vault.mjs`.

## How it's organized

- `docs/` — the English pages (Markdown).
- `i18n/` — the Spanish and French translations.
- `sidebars.ts` — the two sidebars (**Guide** and **Reference**) and how pages
  are grouped in them.
- `src/css/custom.css` — the look and feel, in φ's brand colors and fonts.
  Stock Docusaurus markup only; nothing is swizzled.

Search is [local](https://github.com/easyops-cn/docusaurus-search-local): the
index is built with the site, so it only works in a production build
(`npm run build && npm run serve`), not in `npm start`.

The site deploys automatically to **docs.getpoiesis.com** whenever changes land
on `main`.
