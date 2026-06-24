---
title: Exporting & printing
sidebar_position: 17
---

# Exporting & printing

Your writing lives in `.poiesis` files, but the world wants Word documents, PDFs,
ebooks, and Markdown. φ exports to all of them — a single document for sharing a
draft, or a whole collection compiled into one finished book.

Nothing leaves your Mac in the process: every export is rendered locally and
written to a file you choose with a normal Save dialog.

:::caution Export is the roughest part of φ right now

φ is alpha software, and **export — EPUB, PDF, Word (DOCX), and compiled HTML —
is the area still under the most active work.** It's the part of the app most
likely to disappoint today, so go in with the right expectations:

- **Treat every export as a draft, not a final file.** Open the result in the
  target app (Word, a PDF viewer, an EPUB reader) and proofread it before you
  rely on it. Expect to do some cleanup there.
- **Complex layouts are where it strains** — heavy footnotes, citations and
  bibliographies, nested chapter structure, images and full-bleed covers, and
  unusual blocks may render imperfectly or need manual fixing.
- **Your source is always safe.** Export never changes your `.poiesis` files, so
  you can re-export as often as you like — and exporters are improving with each
  release, so a document that exports poorly today should export better soon.
- **For the most faithful results today**, Markdown and HTML are the most stable;
  DOCX, EPUB, and PDF are improving but the least mature.

If an export comes out wrong, that's known territory — your feedback on *which*
documents break and *how* is the most useful thing you can send during alpha.

:::

## Exporting a single document

With a document open, open the command palette (`⌘P`) and choose **Export
document as…** for the format you want. φ renders it and asks where to save.

The document formats are:

- **Markdown / Obsidian (`.md`)** — Obsidian-flavored Markdown: callouts,
  `==highlight==`, `[[wiki-links]]`, footnotes. Best for moving text into another
  Markdown app or a static site, or for plain-text archiving.
- **HTML (`.html`)** — semantic, self-contained HTML. Best for the web or for
  pasting into another tool with formatting intact.
- **Plain text (`.txt`)** — just the words, no formatting. Best when a tool wants
  raw text.

These export the one active document. To compile several documents into a single
book, use a collection (below).

## Exporting a collection (a book or manuscript)

A [collection](collections.md) compiles its documents — in tree order, parts and
chapters included — into one finished work. Open the collection's page in the
**Write** space and use the buttons at the bottom:

- **Compile** — one self-contained **HTML** document, framed with a title page,
  table of contents, and the collection's export style. Good for previewing the
  whole book in a browser.
- **PDF** — a print-ready PDF (see below).
- **EPUB** — an EPUB3 ebook: your editor styling and chosen font embedded, images
  included, a tree-aware navigation table of contents, and the cover.
- **DOCX** — a Word document with headings, marks, lists, callouts, and scene
  breaks preserved. Best for editors, submissions, and anyone who works in Word.

Every collection export embeds the **cover image**, builds a table of contents
from the book's structure, and can close with an **About the author** page when
the author profile has a bio or photo. The byline and author details come from
the collection's author profile.

## Printing & PDF

φ doesn't print through the system print dialog; instead it produces a print-ready
PDF you can print or send. The PDF is built to book conventions:

- **Fixed paper size** — US Letter, with book margins, a running title at the top,
  and page numbers at the foot.
- **WYSIWYG body** — each page renders in your chosen editor font and text
  measure, so the PDF wraps lines the way the editor does.
- **A page per chapter** — chapters (and parts) start on a new page, with
  centered openers.
- **True per-page footnotes** — each footnote is pinned to the bottom of the page
  its marker sits on. See [Footnotes & citations](footnotes-and-citations.md).
- **Bibliography on its own page** — the reference list opens a fresh page at the
  end, with no stray blanks before it.
- **Full-bleed cover** — the cover image fills its page, edge to edge, with no
  running header or footer.

## Importing

φ reads work from other tools and from your own backups.

- **Import a φ document (`.poiesis`)** — from the **File** menu, or **Import a φ
  document** in the command palette (`⌘P`). This brings in a portable `.poiesis`
  file (with its embedded images) — for example, a copy you saved with **Save a
  Copy**.
- **Import Markdown file(s)** — choose **Import Markdown file(s)** in the command
  palette. φ reads Markdown / Obsidian / Logseq files, including frontmatter,
  headings, lists and tasks, callouts, highlights, and wiki-links.
- **Import an Obsidian / Logseq vault** — choose **Import Obsidian / Logseq vault**
  in the command palette to bring an entire vault folder in recursively, keeping
  its nested folder structure. You can import it **into your current vault** or
  **as a new vault**.

## See also

- [Collections (books & manuscripts)](collections.md) — structuring the book you
  export.
- [Footnotes & citations](footnotes-and-citations.md) — how the apparatus renders
  in each format.
- [Vaults](vaults.md) — where imported work lands.
