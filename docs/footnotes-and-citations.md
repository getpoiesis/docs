---
title: Footnotes & citations
sidebar_position: 16
---

# Footnotes & citations

When your writing needs an apparatus — an aside at the foot of the page, a source
credited in the text, a reference list at the back — φ has it built in. Footnotes
and citations are part of the document, so they survive every export and land in
the right place in the finished book.

## Footnotes

A footnote is a small numbered marker in your text with a note attached. The
marker shows only the number; the note's text lives off to the side so it never
breaks the line you're reading.

### Inserting a footnote

Type `/footnote` and choose **Footnote** from the slash menu. φ drops a numbered
marker at the cursor. Numbering is automatic and stays in order — insert a
footnote earlier in the document and everything after it renumbers itself.

### The Footnotes panel

The marker carries the note's text, but you don't edit it inline. Instead, open
the **Footnotes** panel in the right sidebar, where every footnote in the
document is listed in order:

- **Edit** a note by typing in its text box.
- **Jump to a marker** by clicking its number — useful in a long document.
- **Remove** a footnote with the trash icon. The remaining footnotes renumber
  automatically.

In reading mode the panel is read-only — you can navigate but not edit.

### How footnotes export

Where a footnote ends up depends on the format:

- **PDF** — true per-page footnotes. Each note is pinned to the bottom of the
  page its marker sits on, with a thin rule above it, the way a printed book does
  it.
- **DOCX, EPUB, HTML, Markdown** — notes are collected as endnotes (or the
  format's native footnote, in Markdown's `^[…]` style).

## Citations

A citation credits a source in author–year style — `(Smith, 2020)` — drawn from
a small **source library** kept with the document. You build the library as you
write, then reuse sources across the document.

### Adding a citation

Type `/citation` and choose **Citation**. The citation dialog opens:

- **Pick an existing source** from the list to cite it at the cursor. Sources are
  sorted by author surname; the search box filters by author, title, or year.
- **Add a new source** with **New source**. Fill in **Author** (e.g.
  `Smith, Jane`), **Title**, **Year**, and an optional **URL**, then **Add &
  cite**. The source is saved to the library and the citation is inserted in one
  step.

You only need an author *or* a title to save a source.

### Editing and managing sources

Click any citation in the text to reopen the dialog in edit mode. From there you
can:

- **Edit the source's details** — author, title, year, URL. The change updates
  every citation that points at that source.
- **Swap the citation to a different source** by picking another from the list.
- **Remove the source** entirely with **Remove source**.

The source library belongs to the document, so a source defined in one document
isn't shared with another.

## The bibliography

A bibliography is a reference list generated from your citations — you never type
it by hand. Type `/bibliography` and choose **Bibliography** to place the block.

The list is built automatically from the sources you've actually cited: each
entry is formatted as `Author. (Year). Title. URL`, and entries are sorted
alphabetically by author surname. Sources in the library that you haven't cited
don't appear. Cite a new source and it's added the next time the list renders.

When you export a book or manuscript, **the bibliography opens on its own page at
the end** — with no stray blank pages before it in the PDF.

## See also

- [Exporting & printing](exporting.md) — how footnotes, citations, and the
  bibliography render in each format.
- [Collections (books & manuscripts)](collections.md) — exporting a whole book.
