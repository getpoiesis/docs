---
title: Footnotes & citations
description: Notes at the foot of the page, sources credited in the text, and a bibliography built from them.
---

# Footnotes & citations

φ Poiesis can add three things a book may need: a footnote at the foot of the
page, a citation that names a source in the text, and a bibliography that
lists the sources you cited. They are part of the document, so every
export includes them, in the place a reader expects.

<img src="/img/app/footnotes-light.png" alt="A chapter with a footnote marker in its text, and the Info panel's Outline listing the chapter's two footnotes" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="A chapter with a footnote marker in its text, and the Info panel's Outline listing the chapter's two footnotes" width="1600" height="1000" loading="lazy" decoding="async" />

Footnotes, citations and the bibliography are available only in documents
that belong to a [project](./collections.md). They are not available in
notes, in pieces outside a project, or in the journal.

## Add a footnote

1. Put the cursor where the footnote's number should go.
2. Type `/footnote` and press `Enter`.
3. Write the note in the **Footnote** box and confirm.

A small number, the marker, appears in the text. Poiesis numbers footnotes in
order. If you add a footnote earlier in the document, Poiesis renumbers the ones
after it.

## Read and edit your footnotes

In the text:

- Point at a marker to read its note.
- Click a marker to change the note's text.

The Info panel (`⌘⇧I`), the panel beside your page, also lists every
footnote. Look on **Outline**, under **Footnotes**:

- Type in a note's box (**Footnote text…**) to edit it.
- Click its number (**Jump to marker**) to go to the marker in the text.
- Click the bin (**Delete footnote**) to remove the footnote. Poiesis renumbers
  the others.

## Cite a source

1. Put the cursor where the citation should go.
2. Type `/citation` and press `Enter`. **Cite a source** opens.
3. Pick a source from the list. To find one, type in **Search sources…**.
4. If the source is not in the list, choose **New source**. Fill in
   **Author** (as *Smith, Jane*), **Title**, **Year** and **URL
   (optional)**, then press **Add & cite**.

<img src="/img/app/cite-a-source-light.png" alt="The Cite a source dialog over a chapter, with the search field, a source and New source" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/cite-a-source-dark.png" alt="The Cite a source dialog over a chapter, with the search field, a source and New source" width="1600" height="1000" loading="lazy" decoding="async" />

The citation appears in the text as author and year, such as *(Smith,
2020)*. A source needs only an author or a title.

To change a citation, click it. The dialog opens as **Edit source**. You
can:

- Edit the details and press **Save**. Every citation of that source
  changes too.
- Pick a different source.
- Press **Remove source**.

If a citation's source has been removed, the citation shows as *(?)*, so
you can find it easily.

Each document keeps its own list of sources. When you export the project,
Poiesis combines the lists from all its documents. So a citation finds its
source, even if you added the source in another document of the book.

## Add a bibliography

Type `/bibliography` where the list should go.

- It lists only the sources you have cited.
- The sources are in alphabetical order by surname.
- Each one is written as *Author. (Year). Title. URL*.
- The list updates as you add citations.

In a PDF or a Word file, the bibliography starts on a new page.

## How they export

| Format | Footnotes |
| --- | --- |
| **Printed book and PDF** | At the foot of the page their marker is on. |
| **Word** and **Rich Text** | Real footnotes, placed and numbered by the word processor. |
| **Ebook** | Notes that reading apps open when the marker is tapped. |
| **Web page** | Gathered at the end, each linked back to its marker. |
| **Markdown** | Written in the text as `^[the note]`. |

## See also

- [Formatting & blocks](./formatting-and-blocks.md)
- [Projects](./collections.md)
- [How exporting works](./exporting.md)
