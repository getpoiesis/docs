#!/usr/bin/env node
/**
 * Build the vault the documentation screenshots are taken in.
 *
 *   node scripts/seed-docs-vault.mjs <app repo> <target folder>
 *
 * It runs the app's own screenshot seed (scripts/seed-shotvault.mjs in the app
 * repo: an invented novel, its notes, journal, boards and characters), then
 * adds what only the docs need a picture of:
 *
 *   - three templates (Daily log, Scene card, Reading note)
 *   - a short piece with two misspellings, for the Check spelling dialog
 *   - a document already in the Trash
 *   - the novel's book details (subtitle, publisher, rights)
 *
 * Everything is invented. The target must be empty or not exist yet; pass
 * POIESIS_SHOT_TODAY (an ISO date-time) to fix the day the vault is "today" on.
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const [app, target] = process.argv.slice(2)
if (!app || !target) {
  console.error('usage: seed-docs-vault.mjs <app repo> <target folder>')
  process.exit(1)
}

execFileSync('node', [join(app, 'scripts', 'seed-shotvault.mjs'), target], {
  stdio: ['ignore', 'ignore', 'inherit'],
  env: process.env,
})

const today = process.env.POIESIS_SHOT_TODAY ? new Date(process.env.POIESIS_SHOT_TODAY) : new Date()
const ago = (days, hour = 10) => {
  const d = new Date(today.getTime() - days * 86_400_000)
  d.setHours(hour, 12, 0, 0)
  return d.toISOString()
}
const ymd = (iso) => iso.slice(0, 10)

const p = (s) => ({
  type: 'paragraph',
  attrs: { textAlign: null, dropCap: false },
  content: s ? [{ type: 'text', text: s }] : [],
})
const h2 = (s) => ({ type: 'heading', attrs: { level: 2, textAlign: null }, content: [{ type: 'text', text: s }] })
const words = (blocks) =>
  blocks
    .map((b) => (b.content ?? []).map((c) => c.text ?? '').join(''))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length

// --- Templates -------------------------------------------------------------
const templates = [
  {
    id: 'shot-template-0001',
    name: 'Daily log',
    description: 'A dated page for the start of a writing day',
    content: [
      h2('<% today %>'),
      p('Where I left off: '),
      p('Today I want to: <% cursor %>'),
      p('Words at the start: '),
      p('One thing I noticed: '),
    ],
  },
  {
    id: 'shot-template-0002',
    name: 'Reading note',
    description: 'A source, what it says, and what to take from it',
    content: [
      h2('<% cursor %>'),
      p('Author, title, year: '),
      p('Read on <% today %>'),
      p('What I can use: '),
      p('In my own words: '),
    ],
  },
  {
    id: 'shot-template-0003',
    name: 'Scene card',
    description: 'The questions to answer before drafting a scene',
    content: [
      h2('Scene: '),
      p('Where and when: '),
      p('Who is here: '),
      p('What changes: <% cursor %>'),
      p('What the reader learns: '),
      p('Drafted <% today %>'),
    ],
  },
]
for (const t of templates) {
  const at = ago(12)
  writeFileSync(
    join(target, `${t.id}.poiesis-template`),
    JSON.stringify({ ...t, scope: 'vault', version: 1, createdAt: at, updatedAt: at }, null, 2),
  )
}

// --- Documents ---------------------------------------------------------------
// The envelope is borrowed from a document the app's seed wrote, so these stay
// in step with whatever the document format is.
const model = JSON.parse(readFileSync(join(target, 'shot-doc-loose.poiesis'), 'utf-8'))
const piece = (id, title, blocks, days) => {
  const made = ago(days)
  return JSON.stringify(
    {
      ...model,
      metadata: {
        ...model.metadata,
        id,
        title,
        starred: false,
        editedDays: [ymd(made)],
        wordByDay: { [ymd(made)]: words(blocks) },
        createdAt: made,
        updatedAt: made,
      },
      doc: { type: 'doc', content: blocks },
    },
    null,
    2,
  )
}

// Two words spelled wrong on purpose: "recieve" and "seperate".
writeFileSync(
  join(target, 'shot-doc-letter.poiesis'),
  piece(
    'shot-doc-letter',
    'A letter to the harbour board',
    [
      p('To the board, with respect, and with the scale between us.'),
      p(
        'I did not recieve the ledgers you promised in the spring. I have the copies my father kept, which are not the same thing, and I would like to know which of us is holding the true ones.',
      ),
      p(
        'There are two seperate counts for the last delivery of the season. One is mine. I made it twice from the doorway, and the numbers agreed with each other and with nothing else.',
      ),
      p('I will be at the weighing house until the road closes. After that you may write to the far side.'),
    ],
    4,
  ),
)

// One document already put in the Trash (the scene chapter four lost).
const binned = new Date(ago(1, 16))
const stamp = binned.toISOString().replace(/[:.]/g, '-')
const trashed = join(target, '.trash', `shot-doc-market.${stamp}.poiesis`)
mkdirSync(join(target, '.trash'), { recursive: true })
writeFileSync(
  trashed,
  piece(
    'shot-doc-market',
    'The market scene',
    [
      p(
        'The market came to the weighing house twice a year and behaved, both times, as though it had been invited. Stalls went up along the wall where the carts turned. Somebody sold eels.',
      ),
      p(
        'Miren walked the length of it with her hands behind her back, the way her father had, so that nobody could put anything into them. A woman held up a bolt of blue cloth and named a price that was a question.',
      ),
      p(
        'She did not answer it. She was looking at the map-seller’s table, at a sheet weighted down with four stones, and at the coast drawn on it, which was wrong in a way she recognised.',
      ),
    ],
    9,
  ),
)

// --- Book details ----------------------------------------------------------
// The novel's title and copyright pages, so the Book details form has
// something in it.
const bookFile = join(target, 'shot-book-0001.poiesis-collection')
const book = JSON.parse(readFileSync(bookFile, 'utf-8'))
book.book = {
  subtitle: 'A novel',
  publisher: { name: 'Kestrel Bay Press', city: 'Kestrel Bay' },
  rights: { template: 'all-rights-reserved', holder: 'Ines Calder' },
  edition: 'First edition',
  firstPublished: today.getFullYear(),
}
writeFileSync(bookFile, JSON.stringify(book, null, 2))

console.log(`Docs vault ready: ${target}`)
