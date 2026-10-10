import React, { useEffect, useState } from 'react'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'

// The 404 page, worded like getpoiesis.com's. GitHub Pages answers every
// unknown URL with the English build's 404.html (with a 404 status), even
// under /es/ and /fr/, so the page reads the language from the URL once it
// loads, rather than from the build it came from.

type Lang = 'en' | 'es' | 'fr'

const TEXT: Record<Lang, { title: string; body: string; home: string; site: string }> = {
  en: {
    title: 'Page not found',
    body: 'The page you’re looking for isn’t here. It may have moved, or never existed.',
    home: 'Back to the documentation',
    site: 'Go to getpoiesis.com',
  },
  es: {
    title: 'Página no encontrada',
    body: 'La página que buscas no está aquí. Puede que se haya movido o que nunca existiera.',
    home: 'Volver a la documentación',
    site: 'Ir a getpoiesis.com',
  },
  fr: {
    title: 'Page introuvable',
    body: 'La page que vous cherchez n’est pas là. Elle a peut-être été déplacée, ou n’a jamais existé.',
    home: 'Retour à la documentation',
    site: 'Aller sur getpoiesis.com',
  },
}

const langOf = (path: string): Lang =>
  path.startsWith('/es/') || path === '/es' ? 'es' : path.startsWith('/fr/') || path === '/fr' ? 'fr' : 'en'

export default function NotFoundContent({ className }: { className?: string }) {
  // English in the prerendered page; the visitor's language after it loads.
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => setLang(langOf(window.location.pathname)), [])

  const t = TEXT[lang]
  const docs = lang === 'en' ? '/' : `/${lang}/`
  const site = 'https://getpoiesis.com' + (lang === 'en' ? '/' : `/${lang}`)
  return (
    <main className={['container', 'margin-vert--xl', className].filter(Boolean).join(' ')}>
      <Head>
        <html lang={lang} />
        <title>{`${t.title} | φ Poiesis`}</title>
      </Head>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <p className="phi-404__code">404</p>
          <h1 className="phi-404__title">{t.title}</h1>
          <p className="phi-404__body">{t.body}</p>
          <p className="phi-404__links">
            {/* A plain link: the other locales are separate builds. */}
            <Link href={docs} target="_self" autoAddBaseUrl={false}>
              {t.home}
            </Link>
            <a href={site}>{t.site} →</a>
          </p>
        </div>
      </div>
    </main>
  )
}
