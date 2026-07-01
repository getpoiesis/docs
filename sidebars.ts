import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// Grouped by what a writer is trying to do, rather than one long flat list.
// Each group carries an `si-*` class so the theme can give it a lucide icon.
const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'intro', className: 'si-intro' },
    {
      type: 'category',
      label: 'Getting started',
      className: 'si-getting-started',
      collapsed: false,
      items: ['installing', 'getting-started', 'vaults', 'profiles'],
    },
    {
      type: 'category',
      label: 'Writing',
      className: 'si-writing',
      items: [
        'the-editor',
        'formatting-and-blocks',
        'spelling',
        'links-and-graph',
        'annotations',
        'footnotes-and-citations',
      ],
    },
    {
      type: 'category',
      label: 'Organizing',
      className: 'si-organizing',
      items: ['organizing', 'collections'],
    },
    {
      type: 'category',
      label: 'Journal & calendar',
      className: 'si-journal',
      items: ['journal-and-morning-pages', 'calendar'],
    },
    {
      type: 'category',
      label: 'Tools',
      className: 'si-tools',
      items: [
        'dictionary',
        'templates',
        'focus-and-writing-modes',
        'versions-and-backup',
      ],
    },
    {
      type: 'category',
      label: 'Sharing your work',
      className: 'si-sharing',
      items: ['exporting'],
    },
    {
      type: 'category',
      label: 'Reference',
      className: 'si-reference',
      items: ['settings', 'themes-and-languages', 'keyboard-shortcuts'],
    },
  ],
}

export default sidebars
