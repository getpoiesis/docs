import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// Two sidebars, one per navbar section. Each top-level category is a fixed
// group (`phi-group`): its label reads as an uppercase section label and is not
// clickable. Nested categories, if any, stay collapsible.
const group = (label: string, items: string[]) => ({
  type: 'category' as const,
  label,
  collapsible: false,
  className: 'phi-group',
  items,
})

const sidebars: SidebarsConfig = {
  guide: [
    group('Getting started', [
      'intro',
      'installing',
      'getting-started',
      'finding-your-way',
      'setup',
    ]),
    group('Writing', [
      'the-editor',
      'formatting-and-blocks',
      'poetry',
      'focus-and-writing-modes',
      'side-by-side',
      'spelling',
      'dictionary',
      'search-and-replace',
    ]),
    group('Books & projects', [
      'collections',
      'book-details',
      'footnotes-and-citations',
      'characters-and-authors',
    ]),
    group('Notes', [
      'notes',
      'organizing',
      'links-and-graph',
      'annotations',
      'research',
      'boards',
      'templates',
    ]),
    group('Journal', ['journal-and-morning-pages', 'calendar']),
    group('Publishing', [
      'exporting',
      'preview',
      'designs',
      'custom-styles',
      'print-a-book',
      'make-an-ebook',
      'send-to-an-agent',
      'share-a-copy',
    ]),
    group('Your files', ['vaults', 'importing', 'versions-and-backup']),
  ],
  reference: [
    group('Settings & appearance', ['settings', 'themes-and-languages']),
    group('Keyboard', ['keyboard-shortcuts']),
  ],
}

export default sidebars
