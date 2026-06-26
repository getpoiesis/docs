---
title: Formatting & blocks
sidebar_position: 5
---

# Formatting & blocks

φ gives you the everyday formatting you'd expect — headings, lists, quotes, code,
links — plus a set of richer blocks built for manuscripts and poetry. Reach for
inline formatting from the [bubble toolbar](the-editor.md#the-bubble-toolbar) or
the Format menu, and insert blocks from the [slash menu](the-editor.md#the-slash-menu)
(type `/`).

## Inline formatting

Select text and apply:

- **Bold** — `⌘B`
- **Italic** — `⌘I`
- **Underline** — `⌘U`
- **Strikethrough** — from the toolbar or Format menu
- **Inline code** — for short snippets within a sentence

These also live in the **Format** menu, and many have keyboard shortcuts there.

:::tip Type your way out of bold or italic
When you turn on **bold** or *italic* and keep typing, you don't have to reach
back for the toolbar to stop. Finish the word, then press the space bar a second
time — the first space stays part of the formatted word, and the next one drops
the formatting so the following word is plain text.
:::

## Headings and paragraphs

Three heading levels structure a document:

- **Heading 1** — `⌘⌥1`
- **Heading 2** — `⌘⌥2`
- **Heading 3** — `⌘⌥3`
- **Body text** (plain paragraph) — `⌘⌥0`

You can also type `/heading 1`, `/heading 2`, or `/heading 3`. Headings feed the
document outline and the [Table of contents](#richer-blocks) block.

## Lists

- **Bullet list** — `⌘⇧8`, or `/bullet list`
- **Numbered list** — `⌘⇧7`, or `/ordered list`
- **Task list** — `/task list`. A checklist with three states: todo, doing, done.

## Quotes and dividers

- **Blockquote** — `⌘⇧9`, or `/quote`. For a quoted passage set off from the
  surrounding text.
- **Divider** — `/divider`. A horizontal rule to separate sections.

## Code blocks

For multi-line code, insert a **code block** with `/code block`. It's
syntax-highlighted, and you can set the language so the highlighting matches.
(For a few words of code inside a sentence, use inline code instead.)

## Links

- **Add a link** — select text and use the link button in the bubble toolbar
  (`⌘⇧K` from the Format menu), then enter the URL.
- **Auto-detect** — paste or type a web address and φ recognizes it as a link.
- **Edit or remove** — select a linked word and open the link control again. To
  edit, type a new URL; to remove the link, clear the field and confirm.

Links open in your default browser. To follow a link from inside the editor,
hold `⌘` and click (in [reading mode](the-editor.md#reading-mode) a plain click
follows it).

## Tables

Insert a starter table with `/table` — a 3×3 grid with a header row that you can
edit and grow from there.

## Richer blocks

Beyond standard prose, φ ships blocks built for books, essays, and poetry. Insert
them from the slash menu. Some are **manuscript** tools that appear in writing and
book documents but are hidden on the minimal journal / morning-pages page — if you
don't see one, check the kind of document you're in.

| Block | What it's for | Insert with |
|---|---|---|
| **Callout** | An info / tip / warning / danger box for asides and notes. | `/callout` |
| **Verse** | A poem or verse block that keeps your hard line breaks and indentation, so poetry holds its shape. | `/verse` |
| **Scene break** | A centered divider between scenes in fiction — asterism, stars, fleuron, or a blank gap. | `/scene break` |
| **Epigraph** | An opening quotation with an attribution line, for the start of a chapter or book. | `/epigraph` |
| **Pull-quote** | A large, prominent excerpt pulled out for emphasis. | `/pull-quote` |
| **Drop cap** | A decorative oversized first letter. | `/drop cap` |
| **Image** | A picture with an editable caption, alignment, and drag-to-resize width. The file is copied into your vault's `assets/`. | `/image` |
| **Table of contents** | A live, clickable outline of this document's headings. It regenerates as you edit. | `/table of contents` |
| **Bibliography** | An auto-generated reference list of the sources cited in the document. | `/bibliography` |

You can also drop or paste an image straight onto the page to insert it without a
caption.

### Inline elements

A few elements sit inside a line rather than as their own block:

| Element | What it's for | Insert with |
|---|---|---|
| **Footnote** | A numbered note. The marker is a small superscript; on export the notes are collected at the end (or as native footnotes in Word). | `/footnote` |
| **Citation** | An inline author–year reference pointing to a source in the document's library. Edit the source once and every citation updates. | `/citation` |
| **Date chip** | A date (optionally with a time) that links the document to a calendar day. | `/date` or `/date & time` |
| **@-mention** | A reference to a character by name. | Type `@` |
| **Wiki link** | A `[[Note title]]` cross-link to another note in your vault. | Type `[[` |

For more on these elements and how they behave, see the related guides:
[Footnotes & citations](footnotes-and-citations.md),
[Annotations](annotations.md), and [Links & the graph](links-and-graph.md).
