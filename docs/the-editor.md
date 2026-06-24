---
title: The editor
sidebar_position: 4
---

# The editor

The editor is a calm, full-bleed page. Most of the time it's just you and the
text — the controls appear when you reach for them and step back when you don't.
This page covers the basics of writing: the page itself, saving, the selection
toolbar, the slash menu, tabs, and moving between documents.

## Title and description

Above the page sits the document's **title** and an optional **description**.
Both are plain text fields that grow as you type. The title names the document
(and is what shows in tabs, search, and links); the description is a short line
of context for yourself. Leave either blank if you don't need it.

## Autosave

You never have to save. As you type, φ saves your work automatically a moment
after you stop — debounced so it isn't writing on every keystroke. Each save is
**atomic and verified**: φ writes to a temporary file, reads it back to confirm
the bytes landed, and only then swaps it into place. A crash or a full disk can't
leave you with a half-written document.

If you want to save *right now* — for instance just before stepping away — press
`⌘S`. That flushes the current document immediately and also writes a version
checkpoint, so you have an explicit point to return to.

## The bubble toolbar

Select any text and a small toolbar floats above it. It holds the formatting you
reach for mid-sentence:

- **Bold** (`⌘B`), **Italic** (`⌘I`), **Underline** (`⌘U`), **Strikethrough**,
  and **Inline code**.
- **Link** — turns the selection into a link and asks for the URL. (See
  [Links](formatting-and-blocks.md#links).)
- **Alignment** — left, center, right, justify.
- **Look up word** (the book icon) — opens the offline dictionary on your
  selection. See [Dictionary & thesaurus](dictionary.md).
- **Highlight & comment** (the highlighter) — opens a small palette: pick a color
  to highlight the selection, choose a custom color, add a **comment** without a
  highlight, or **remove** an existing highlight. Highlights and comments become
  margin annotations. See [Annotations](annotations.md).

Press `Esc` to dismiss the toolbar.

The toolbar is for prose documents. On the stripped-down journal / morning-pages
surface it doesn't appear — that page is deliberately bare.

## The slash menu

To insert a block — a heading, a list, a quote, an image, and more — type **`/`**
at the start of an empty line (or anywhere on a line). A menu opens; keep typing
to filter it, then press `Enter` or click to insert. For example, `/quote`,
`/table`, `/image`.

Two more ways to reach it:

- **The + button.** Hover near the left edge of any block and a **+** appears.
  Click it to open the slash menu and insert a block below.
- Both routes open the same menu. Which blocks are offered depends on the kind of
  document — manuscript blocks like verse and footnotes are hidden on the journal
  surface.

The full catalogue is in [Formatting & blocks](formatting-and-blocks.md).

## Tabs

Documents open in tabs along the top, the way a browser works.

- **New document** — `⌘N`, or the **+** at the end of the tab strip.
- **Switch tabs** — click any tab. When there are more tabs than fit, a **▾** menu
  lists them all.
- **Close a tab** — the **✕** on the tab, or `⌘W` to close the current one.

Some full-area views — the graph, characters, the calendar, and others — also
open as tabs you can close the same way.

## Going back and forward

Following a link or opening a document remembers where you were. Use the **back**
and **forward** arrows at the top of the page to retrace your steps, the same as
in a browser — handy when you've jumped down a chain of
[wiki-links](links-and-graph.md) and want to return.

## Smart typography

As you type, φ tidies common punctuation for you: straight quotes become curly
`"smart quotes"`, two hyphens become an em dash, three dots become an ellipsis,
and so on. You write naturally and the text comes out typeset.

## Reading mode

When you'd rather read than edit, **View → Reading mode** (`⌘E`) makes the page
read-only and lets a plain click follow links. Toggle it off to edit again.
