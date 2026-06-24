import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// φ documentation site. Brand: PHI — neutral zinc grays + one restrained slate
// accent, matching getpoiesis.com (see the app's BRAND.md). Theming lives in
// src/css/custom.css; this file wires structure, navbar, and footer.

const config: Config = {
  title: 'φ',
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

  // The brand faces: Inter for UI, Lora for serif display/headings.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,400..600&family=Lora:ital,wght@0,400..600;1,400..600&display=swap',
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
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/sidebar-icons.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'φ',
        src: 'img/phi-dark.svg',
        srcDark: 'img/phi-light.svg',
        href: '/',
        width: 38,
        height: 38,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://getpoiesis.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/getpoiesis',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting started', to: '/getting-started' },
            { label: 'The editor', to: '/the-editor' },
            { label: 'Keyboard shortcuts', to: '/keyboard-shortcuts' },
          ],
        },
        {
          title: 'φ',
          items: [
            { label: 'Website', href: 'https://getpoiesis.com' },
            { label: 'Themes gallery', href: 'https://github.com/getpoiesis/themes' },
            { label: 'GitHub', href: 'https://github.com/getpoiesis' },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'Submit a theme',
              href: 'https://github.com/getpoiesis/themes',
            },
            {
              label: 'Improve these docs',
              href: 'https://github.com/getpoiesis/docs',
            },
          ],
        },
      ],
      copyright: `φ — written with care. © ${new Date().getFullYear()}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
