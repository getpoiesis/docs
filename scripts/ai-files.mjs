// Runs after `docusaurus build`. Writes plain text versions of the docs next to
// the site, so the site stays static and AI tools don't have to scrape HTML:
//   /llms.txt, /es/llms.txt, /fr/llms.txt       an index of each language
//   /llms-full.txt (and /es, /fr)               every page, in one file
//   /<page>.md (and /es, /fr)                   each page as Markdown
//   /help-pack.json                             every language, which the app fetches
//                                               when Ariadne first needs the guide
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const site = 'https://docs.getpoiesis.com'
const locales = ['en', 'es', 'fr']
const blurb = {
  en: 'φ Poiesis is a local-first writing app for books, notes and a private journal. This is its user guide.',
  es: 'φ Poiesis es una app de escritura que guarda todo en tu equipo, para libros, notas y un diario privado. Esta es su guía de uso.',
  fr: 'φ Poiesis est une application d’écriture qui garde tout sur votre appareil, pour les livres, les notes et un journal privé. Voici son guide d’utilisation.',
}
const fullLabel = { en: 'Every page in one file', es: 'Todas las páginas en un archivo', fr: 'Toutes les pages en un fichier' }

/** The guide's groups and page order, as the sidebar has them. */
function sidebarGroups() {
  const source = readFileSync(join(root, 'sidebars.ts'), 'utf-8')
  const groups = []
  for (const match of source.matchAll(/group\('([^']+)',\s*\[([^\]]*)\]/g)) {
    groups.push({ label: match[1], ids: [...match[2].matchAll(/'([^']+)'/g)].map((m) => m[1]) })
  }
  return groups
}

function pagePath(locale, id) {
  const translated = join(root, 'i18n', locale, 'docusaurus-plugin-content-docs/current', `${id}.md`)
  return locale !== 'en' && existsSync(translated) ? translated : join(root, 'docs', `${id}.md`)
}

function frontmatter(source) {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(source)
  const fields = {}
  for (const line of (match?.[1] ?? '').split('\n')) {
    const field = /^(\w+):\s*(.*)$/.exec(line)
    if (field) fields[field[1]] = field[2].replace(/^(['"])(.*)\1$/, '$2')
  }
  return { fields, body: match ? source.slice(match[0].length) : source }
}

/** Markdown a reader without the site can use: no pictures, no site syntax, and
 *  links that work from anywhere. */
function plain(body, prefix, slugs) {
  return body
    .replace(/<img\b[^>]*\/?>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/^:::\s*(\w+)?.*$/gm, '')
    .replace(/\s*\{#[\w-]+\}\s*$/gm, '')
    .replace(/\]\((?:\.\/)?([\w-]+)\.md(#[\w-]+)?\)/g, (all, id, hash = '') =>
      slugs.has(id) ? `](${site}${prefix}/${id}/${hash})`.replace(`/intro/`, '/') : all,
    )
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/** A group's name in this language, as the site's sidebar shows it. */
function groupLabel(locale, label) {
  const file = join(root, 'i18n', locale, 'docusaurus-plugin-content-docs/current.json')
  if (!existsSync(file)) return label
  const entries = JSON.parse(readFileSync(file, 'utf-8'))
  const key = Object.keys(entries).find((k) => k.endsWith(`.category.${label}`))
  return key ? entries[key].message : label
}

const groups = sidebarGroups()
const known = new Set(groups.flatMap((g) => g.ids))
const others = readdirSync(join(root, 'docs'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''))
  .filter((id) => !known.has(id))
if (others.length) groups.push({ label: 'More', ids: others })
const slugs = new Set(groups.flatMap((g) => g.ids))

const pack = { version: 1, locales: {} }
for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const out = join(root, 'build', prefix)
  mkdirSync(out, { recursive: true })
  const pages = []
  const index = [`# φ Poiesis`, '', `> ${blurb[locale]}`, '', `- [${fullLabel[locale]}](${site}${prefix}/llms-full.txt)`, '']
  for (const group of groups) {
    const section = groupLabel(locale, group.label)
    index.push(`## ${section}`, '')
    for (const id of group.ids) {
      const { fields, body } = frontmatter(readFileSync(pagePath(locale, id), 'utf-8'))
      const text = plain(body, prefix, slugs)
      const title = fields.title ?? id
      const description = fields.description ?? ''
      const url = `${site}${prefix}${fields.slug === '/' ? '' : `/${id}`}/`
      pages.push({ id, section, title, description, url, text })
      writeFileSync(join(out, `${id}.md`), `${text}\n`)
      index.push(`- [${title}](${site}${prefix}/${id}.md)${description ? `: ${description}` : ''}`)
    }
    index.push('')
  }
  writeFileSync(join(out, 'llms.txt'), index.join('\n'))
  writeFileSync(
    join(out, 'llms-full.txt'),
    [`# φ Poiesis`, '', `> ${blurb[locale]}`, ...pages.map((p) => `\n---\n\nSource: ${p.url}\n\n${p.text}`)].join('\n') + '\n',
  )
  pack.locales[locale] = pages
}
writeFileSync(join(root, 'build', 'help-pack.json'), JSON.stringify(pack))
console.log(`AI files: ${slugs.size} pages in ${locales.length} languages`)
