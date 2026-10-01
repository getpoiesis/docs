---
title: Footnotes & citations
description: Notes at the foot of the page, sources credited in the text, and a bibliography built from them.
---

# Footnotes & citations

When a book needs an apparatus (an aside at the foot of the page, a source
credited in the text, a list of works cited), φ has it built in. Footnotes
and citations are part of the document, so they reach every export and land
where a reader expects them.

<img src="/img/app/footnotes-light.png" alt="A chapter with a footnote marker in its text, and the Info panel's Outline listing the chapter's two footnotes" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="A chapter with a footnote marker in its text, and the Info panel's Outline listing the chapter's two footnotes" width="1600" height="1000" loading="lazy" decoding="async" />

## Add a footnote

1. Put the cursor where the marker should go.
2. Type `/footnote` and press `Enter`.
3. Write the note in the **Footnote** box and confirm.

A small number appears in the text. φ numbers footnotes in order: add one
earlier in the document and the ones after it renumber themselves.

Footnotes, citations and the bibliography are offered in documents that
belong to a [project](./collections), not in notes, pieces outside a
project, or the journal.

## Read and edit your footnotes

Point at a marker to read its note, and click it to change the text.

Every footnote is also listed in the Info panel (`⌘⇧I`), on **Outline**,
under **Footnotes**:

- Type in a note's box (**Footnote text…**) to edit it.
- Click its number (**Jump to marker**) to go to it in the text.
- The bin (**Delete footnote**) removes it, and the rest renumber.

## Cite a source

1. Type `/citation` and press `Enter`. **Cite a source** opens.
2. Pick a source from the list, or search it with **Search sources…**.
3. For a new one, choose **New source**, fill in **Author** (as *Smith,
   Jane*), **Title**, **Year** and **URL (optional)**, then **Add & cite**.

The citation appears in the text in author–year form, such as *(Smith,
2020)*. A source needs only an author or a title.

Click a citation to change it. The dialog opens as **Edit source**: edit
the details and **Save** (every citation of that source follows), pick a
different source, or **Remove source**. A citation whose source is gone
shows as *(?)*, so it's easy to find.

Each document keeps its own list of sources. When you export the project,
the lists of all its documents are gathered, so a citation finds its source
wherever in the book that source was added.

## Add a bibliography

Type `/bibliography` where the list should go. It lists only the sources
you've cited, in alphabetical order by surname, each as *Author. (Year).
Title. URL*, and it updates as you cite. In a PDF or a Word file, the
bibliography starts on a page of its own.

## How they export

| Format | Footnotes |
| --- | --- |
| **Printed book and PDF** | At the foot of the page their marker is on. |
| **Word** and **Rich Text** | Real footnotes, placed and numbered by the word processor. |
| **Ebook** | Notes that reading apps open when the marker is tapped. |
| **Web page** | Gathered at the end, each linked back to its marker. |
| **Markdown** | Written in the text as `^[the note]`. |

## See also

- [Formatting & blocks](./formatting-and-blocks)
- [Projects](./collections)
- [How exporting works](./exporting)
