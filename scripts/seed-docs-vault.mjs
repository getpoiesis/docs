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
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
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

// --- The world -------------------------------------------------------------
// Places (one inside another), lore and a short timeline for the novel, so
// the World page has something to show.
const world = [
  { id: 'shot-world-kestrel', kind: 'place', name: 'Kestrel Bay', summary: 'The port town at the edge of the inland sea.' },
  { id: 'shot-world-house', kind: 'place', name: 'The weighing house', parentId: 'shot-world-kestrel', summary: 'Where the town brings what it owns to learn what it is worth.' },
  { id: 'shot-world-harbour', kind: 'place', name: 'The harbour', parentId: 'shot-world-kestrel', summary: 'Salt boats in, ledgers out.' },
  { id: 'shot-world-flats', kind: 'place', name: 'The salt flats', summary: 'Six days out. White, flat, and the sound of nothing.' },
  { id: 'shot-world-scale', kind: 'lore', name: 'The honest scale', summary: 'The town believes the scale has never lied. The town is wrong.' },
  { id: 'shot-world-sevens', kind: 'lore', name: 'Barred sevens', summary: 'Tomas crossed his sevens, always. The last four years of ledgers do not.' },
  { id: 'shot-world-e1', kind: 'event', name: 'The railway reaches the coast', when: 'Thirty-one years before', order: 1, summary: 'The inland route starts to matter less.' },
  { id: 'shot-world-e2', kind: 'event', name: 'The ledgers change hands', when: 'Four years before', order: 2, placeId: 'shot-world-house', summary: 'Someone else starts writing in Tomas\'s books.' },
  { id: 'shot-world-e3', kind: 'event', name: 'Eleven sacks', when: 'Chapter one', order: 3, placeId: 'shot-world-house', summary: 'Miren takes the last delivery of the season.' },
  { id: 'shot-world-e4', kind: 'event', name: 'The crossing', when: 'Chapter five', order: 4, placeId: 'shot-world-flats', summary: 'Miren and Sefa set out across the flats.' },
]
for (const e of world) {
  const made = ago(20)
  writeFileSync(
    join(target, `${e.id}.poiesis-world`),
    JSON.stringify({ body: '', tags: [], projects: ['shot-book-0001'], characterIds: [], ...e, createdAt: made, updatedAt: made }, null, 2),
  )
}

// --- Earlier years -----------------------------------------------------------
// Memories and Your year need a past: journal entries and pieces on this day
// one and two years back, and a year before this one written on most weeks.
const journalModel = JSON.parse(
  readFileSync(join(target, readdirSync(target).find((f) => f.startsWith('shot-journal-'))), 'utf-8'),
)
const daysBack = (date, days) => new Date(date.getTime() - days * 86_400_000)
const yearsBack = (n) => {
  const d = new Date(today)
  d.setFullYear(d.getFullYear() - n)
  return d
}
const at = (d, hour) => {
  const x = new Date(d)
  x.setHours(hour, 12, 0, 0)
  return x.toISOString()
}
const PAST_LINES = [
  ['Rain all day. Wrote the scene at the scale house twice and kept neither.', 'Tomorrow: start with the ledger, not the weather.'],
  ['A good morning. Miren finally said the thing out loud, and the chapter turned on it.', 'Nine hundred words before lunch. Walked to the harbour after.'],
  ['Read the whole draft back. The middle sags where the crossing should pull.', 'Cut the second market scene. It was there for me, not for her.'],
  ['Short day. Notes on the salt flats: white, flat, the sound of nothing.', 'The railway is the villain and it doesn\'t know it.'],
  ['Started over on chapter one. Same first line, new everything after it.', 'Sefa needs a reason to stay that isn\'t Miren.'],
]
const pastEntry = (d, lines) => {
  const blocks = lines.map(p)
  const day = ymd(at(d, 12))
  writeFileSync(
    join(target, `shot-journal-${day}.poiesis`),
    JSON.stringify(
      {
        ...journalModel,
        metadata: {
          ...journalModel.metadata,
          id: `shot-journal-${day}`,
          title: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
          entryDay: day,
          createdAt: at(d, 20),
          updatedAt: at(d, 20),
          editedDays: [day],
          wordByDay: { [day]: words(blocks) },
        },
        doc: { type: 'doc', content: blocks },
      },
      null,
      2,
    ),
  )
}
const pastPiece = (id, title, d, blocks) => {
  const made = at(d, 10)
  writeFileSync(
    join(target, `${id}.poiesis`),
    JSON.stringify(
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
    ),
  )
}
// On this day, one and two years ago.
pastEntry(yearsBack(1), [
  'First real day on the new book. A woman who weighs things for a living, and a scale that has been lying.',
  'I don\'t know her name yet. I know her hands.',
])
pastEntry(yearsBack(2), [
  'Finished the last poem for the collection. Sent it to nobody. Put it in a drawer, the good drawer.',
])
pastPiece('shot-doc-past-0001', 'The Weighmaster\'s Daughter (first notes)', yearsBack(1), [
  p('She starts the day at the scale. She ends it at the scale. In between, the town brings her everything it owns and asks her what it is worth, and she tells them, and they believe her, because the scale has never lied.'),
  p('Until it does. That is the book.'),
])
// Last year, written on most weeks: something for Your year to tell.
const lastYear = today.getFullYear() - 1
for (let i = 0, d = new Date(lastYear, 0, 3); d.getFullYear() === lastYear; i++, d = daysBack(d, -(i % 3 === 0 ? 2 : 5))) {
  if (ymd(at(d, 12)) === ymd(at(yearsBack(1), 12))) continue
  pastEntry(d, PAST_LINES[i % PAST_LINES.length])
}

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
