import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import type { PluginOptions as SearchOptions } from '@easyops-cn/docusaurus-search-local'

// φ Poiesis documentation site. Brand: PHI — neutral zinc greys + one restrained slate
// accent, matching getpoiesis.com and the app. Theming lives in
// src/css/custom.css; this file wires structure, navbar, footer and search.

const RELEASES = 'https://github.com/getpoiesis/releases/releases'

const config: Config = {
  title: 'φ Poiesis',
  tagline: 'A calm, local-first writing app for manuscripts, poetry, and essays',
  favicon: 'img/favicon.svg',

  url: 'https://docs.getpoiesis.com',
  baseUrl: '/',

  organizationName: 'getpoiesis',
  projectName: 'docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    localeConfigs: {
      en: { label: 'English' },
      es: { label: 'Español' },
      fr: { label: 'Français' },
    },
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Lora for page titles and H2; chrome and body use the system sans.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..600&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          // The site IS the documentation — serve docs at the root.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/getpoiesis/docs/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en', 'es', 'fr'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 60,
        searchBarShortcutKeymap: 'mod+k',
      } satisfies SearchOptions,
    ],
  ],

  themeConfig: {
    image: 'img/og.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: false, autoCollapseCategories: false },
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Poiesis',
        src: 'img/phi-dark.svg',
        srcDark: 'img/phi-light.svg',
        href: 'https://getpoiesis.com',
        target: '_self',
        width: 22,
        height: 22,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'guide', position: 'left', label: 'Guide' },
        { type: 'docSidebar', sidebarId: 'reference', position: 'left', label: 'Reference' },
        { href: RELEASES, label: 'Changelog', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        { type: 'search', position: 'right' },
        {
          href: 'https://github.com/getpoiesis',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting started', to: '/getting-started' },
            { label: 'Keyboard shortcuts', to: '/keyboard-shortcuts' },
            { label: 'Changelog', href: RELEASES },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Themes gallery', href: 'https://github.com/getpoiesis/themes' },
            { label: 'Improve these docs', href: 'https://github.com/getpoiesis/docs' },
            { label: 'GitHub', href: 'https://github.com/getpoiesis' },
          ],
        },
        {
          title: 'Poiesis',
          items: [
            { label: 'Website', href: 'https://getpoiesis.com', target: '_self' },
            { label: 'Download', href: 'https://getpoiesis.com/download', target: '_self' },
            { label: 'Privacy', href: 'https://getpoiesis.com/privacy', target: '_self' },
          ],
        },
      ],
      copyright: `<img class="footer__mark" src="/img/phi-dark.svg" alt="" aria-hidden="true" /><img class="footer__mark footer__mark--dark" src="/img/phi-light.svg" alt="" aria-hidden="true" /> © ${new Date().getFullYear()} φ Poiesis. Written with care.`,
    },
    prism: {
      // Token colours come from custom.css (keys in slate, literals in gold).
      theme: { plain: {}, styles: [] },
      darkTheme: { plain: {}, styles: [] },
    },
  } satisfies Preset.ThemeConfig,
}

export default config
