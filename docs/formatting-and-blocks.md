---
title: Formatting & blocks
description: Every kind of formatting and block φ has, and the ways to insert each one.
---

# Formatting & blocks

φ has the formatting you'd expect (headings, lists, quotes, links) and a set
of blocks made for books and poems: verse, scene breaks, epigraphs,
footnotes. This page is the reference: what each one is for, and every way
to make it.

## Format as you write

1. Select words and choose from the toolbar above them, or use a shortcut
   such as `⌘B`.
2. For a block, type `/` on an empty line, then a word: `/quote`, `/scene`,
   `/verse`.
3. Or write the Markdown you're used to: `## ` makes a heading, `**word**`
   makes it bold.
4. The same commands are in the **Format** menu in the menu bar.

## Words and phrases

| Formatting | Shortcut | Toolbar | Markdown |
| --- | --- | --- | --- |
| **Bold** | `⌘B` | **Bold** | `**bold**` |
| **Italic** | `⌘I` | **Italic** | `*italic*` |
| **Underline** | `⌘U` | **Underline** | `~underline~` |
| **Strikethrough** | **Format → Strikethrough** | **More tools** › **Strikethrough** | `~~strike~~` |
| **Inline code** | **Format → Inline Code** | **More tools** › **Inline code** | `` `code` `` |
| **Highlight** | | **Highlight & comment** | `==highlight==` |
| **Link** | `⌘⇧K` | **Link** | `[text](https://…)` |

**Getting out of bold or italic.** Finish the word and press the space bar
twice. The first space stays with the formatted word; the second ends the
formatting, so the next word is plain.

**Links.** Typing or pasting a web address makes it a link by itself. To
change or remove one, select the linked words and choose **Link** again:
type a new address, or clear the field. Links open in your browser; while
editing, hold `⌘` and click. To link to another document in the vault, use
a wiki link instead ([Links & the graph](./links-and-graph)).

## Headings, lists and quotes

| Block | Slash command | Shortcut | Markdown |
| --- | --- | --- | --- |
| **Text** (a plain paragraph) | `/text` | `⌘⌥0` | |
| **Heading 1** | `/h1` | `⌘⌥1` | `# ` |
| **Heading 2** | `/h2` | `⌘⌥2` | `## ` |
| **Heading 3** | `/h3` | `⌘⌥3` | `### ` (`####` and deeper too) |
| **Bullet List** | `/bullet` | `⌘⇧8` | `- ` or `* ` |
| **Ordered List** | `/numbered` | `⌘⇧7` | `1. ` |
| **Task List** | `/task` or `/checklist` | | `[] ` or `- [ ] ` (`- [x] ` starts it ticked) |
| **Quote** | `/quote` | `⌘⇧9` | `> ` |
| **Divider** | `/divider` | | `---` |
| **Code Block** | `/code` | | ` ``` ` |
| **Table** | `/table` | | |

Headings build the document's outline in the Info panel and feed a
**Table of contents** block.

**Alignment.** **Align Left**, **Align Center** (`⌘⇧E`), **Align Right**
(`⌘⇧R`) and **Justify** (`⌘⇧J`) are in the **Format** menu and under the
toolbar's **More tools**.

**Task lists** have three states, todo, doing and done; click the box to
move an item on. They're offered in Notes and on research pages. To offer
them elsewhere, turn on **Checklists** for that mode in **Settings → Setup
→ Modes**.

**Tables** start as three columns and three rows with a header. Drag a
column's edge to widen it. `Tab` moves to the next cell.

**Code blocks** highlight the language they recognise, or the one you name
after the opening fence (` ```python `). `Tab` indents and `⇧Tab` outdents;
set **Indent using** (**Spaces** or **Tabs**) and **Indent width** under
**Settings → Editor → Code**.

## Blocks for books and poems

These are offered in documents that belong to a [project](./collections):
chapters, poems, essays. A document that already has one shows it wherever
it lives.

| Block | What it's for | Insert with |
| --- | --- | --- |
| **Verse** | A poem's lines, kept as you write them, at the text's own margin. | `/verse` or `⌥⌘V` |
| **Scene break** | A centred ornament between scenes: **Asterism** ⁂, **Stars** \* \* \*, **Fleuron** ❧ or **Blank space**. Point at it to switch. | `/scene` |
| **Epigraph** | An opening quotation, with its source on a line below. | `/epigraph` |
| **Pull-quote** | A line set large, for emphasis. | `/pull-quote` |
| **Drop cap** | An enlarged first letter for the paragraph. Choose it again to take it off. | `/drop` |
| **Table of contents** | A live list of the document's headings; click one to go there. | `/toc` |
| **Footnote** | A numbered note. | `/footnote` |
| **Citation** | An author–year reference to a source. | `/citation` |
| **Bibliography** | The sources you've cited, listed. | `/bibliography` |

Verse, epigraphs and scene breaks are covered in
[Poetry & verse](./poetry); footnotes, citations and the bibliography in
[Footnotes & citations](./footnotes-and-citations).

## Pictures, callouts and dates

| Block | What it's for | Insert with |
| --- | --- | --- |
| **Image** | A picture with a caption. Choose left, centre, right or full width from its toolbar, and drag its edge to resize. The file is copied into your vault. | `/image`, or `![alt](https://…)` |
| **Callout** | A box for an aside: info, tip, warning or danger. Point at it to switch. | `/callout`, or `> [!tip] ` |
| **Date** | Today's date as a chip that links the document to that day in the [calendar](./calendar). | `/date` |
| **Date & time** | The same, with the time. | `/datetime` |
| **Time** | The time now, as plain text. | `/time` |

Click a date chip to open its day in the calendar; the pencil beside it
(**Edit date & time**) changes the date or the time. Callouts aren't offered
in journal entries.

Two more things sit inside a line:

- **@-mentions**: type `@` and pick a [character](./characters-and-authors),
  or choose **Create @name** to make one from what you typed.
- **Wiki links**: type `[[` and pick a document
  ([Links & the graph](./links-and-graph)).

## Writing in Markdown

φ turns Markdown into formatting as you type, using the patterns in the
tables above. You can also see it as you write: turn on **Settings → Editor
→ Show Markdown**, and the markers (`**`, `#`, `[ ]( )`) show faintly around
the formatting in the line you're on. They're never part of your text.

**Pasting Markdown.** Text copied from a Markdown editor or notes app
arrives formatted: headings, checklists, tables, quotes, callouts, code,
links, pictures and footnotes (`^[the note]`, or `[^1]` with its
`[^1]: the note` line). It understands the variations other notes apps
write, too: `~text~` underlines, `==🟢text==` is a green highlight,
`[[Note|shown text]]` is a wiki link, and `#tags` become the document's
tags. To paste the text exactly as it is, use `⇧⌘V`.

A paste brings only what the document offers: a checklist pasted into a
chapter arrives as a list with its `[ ]` kept.

**Copying as Markdown.** **Copy as Markdown**, in the command palette
(`⌘P`), copies the selection, or the whole document when nothing is
selected. It's also on a document's right-click menu in the list.

## See also

- [The editor](./the-editor): the toolbar and the slash menu.
- [Poetry & verse](./poetry)
- [Footnotes & citations](./footnotes-and-citations)
- [Templates](./templates)
