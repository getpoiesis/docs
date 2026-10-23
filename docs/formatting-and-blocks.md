---
title: Formatting & blocks
description: Every kind of formatting and block φ Poiesis has, and the ways to insert each one.
---

# Formatting & blocks

This page lists every kind of formatting and every block in φ Poiesis. For each
one, it says what it is for and how to add it.

A block is a piece of the page that is not plain text, such as a heading, a
list, a quote or a table. Poiesis also has blocks for books and poems: verse,
scene breaks, epigraphs and footnotes.

## Format as you write

There are four ways to format. Use the one you like.

- **The toolbar.** Select some words and click a button in the toolbar
  that appears above them.
- **A shortcut.** Select some words and press a shortcut such as `⌘B`.
- **The slash menu.** Type `/` on an empty line, then a word, for example
  `/quote`, `/scene` or `/verse`. Press `Enter`.
- **Markdown.** Type the Markdown you already know. `## ` makes a heading
  and `**word**` makes a word bold.

The same commands are in the **Format** menu in the menu bar.

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

**To stop bold or italic.** Finish the word and press the space bar twice.
The first space is still formatted. The second space ends the formatting,
so the next word is plain.

**Links.**

- When you type or paste a web address, Poiesis makes it a link.
- To change a link, select the linked words and choose **Link** again.
  Type a new address.
- To remove a link, select the linked words, choose **Link**, and clear the
  field.
- Links open in your browser. While you are editing, hold `⌘` and click the
  link.
- To link to another document in your [vault](./vaults.md) (the folder where
  Poiesis keeps your documents), use a wiki link. See
  [Links & the graph](./links-and-graph.md).

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
| **Quote** | `/quote` | `⇧⌘B` | `> ` |
| **Divider** | `/divider` | | `---` |
| **Code Block** | `/code` | | ` ``` ` |
| **Table** | `/table` | | |
| **Toggle** | `/toggle` | | |
| **Math block** | `/math` | | |

**Headings.** The headings make the document's outline, which you can see
in the Info panel (`⌘⇧I`). A **Table of contents** block also lists them.

**Alignment.** **Align Left**, **Align Center** (`⌘⇧E`), **Align Right**
(`⌘⇧R`) and **Justify** (`⌘⇧J`) are in the **Format** menu. They are also
under **More tools** in the toolbar.

**Lists.** Press `Tab` to indent an item and `⇧Tab` to outdent it. Backspace
at the start of an item deletes it, or joins it to the line above, and the
list stays whole: the numbers carry on and the bullets keep their level.
`Delete` at the end of an item pulls the next one up.

**Task lists.** Each item has three states: todo, doing and done. Click the
box to change an item to the next state. The slash menu offers task lists
in Notes and on research pages. To have them in another mode, open
**Settings → Setup → Modes** and turn on **Checklists** for that mode.

**Tables.** A new table has three columns and three rows, and the first row
is a header. Drag the edge of a column to make it wider. Press `Tab` to go
to the next cell.

When the cursor is in a table, a toolbar appears above it. It says which
row and column you are in, for example *Row 2 of 3 · Column 1 of 3*. Its
buttons:

- **Add a row above**, **Add a row below** and **Delete row**.
- **Add a column to the left**, **Add a column to the right** and **Delete
  column**.
- **Header row** and **Header column** turn the header on or off.
- **Merge cells** joins the cells you selected. **Split cell** splits a
  merged cell again.
- **Delete table** removes the whole table.

A table always keeps at least one row and one column. To remove the last
one, use **Delete table**.

**Code blocks.** Poiesis colours the code for the language it recognises. To
choose the language yourself, type its name after the opening fence, for
example ` ```python `. Press `Tab` to indent and `⇧Tab` to outdent. To
change the indent, open **Settings → Editor → Code** and set **Indent
using** (**Spaces** or **Tabs**) and **Indent width**.

## Toggles: sections that fold away

A toggle folds blocks away under a line you name. Use it for a spoiler, an
aside, or notes to yourself inside a draft.

1. Type `/toggle` and press `Enter`.
2. Type the line that names the section (**Name what’s folded here**).
3. Press `Enter` at the end of that line to write inside the section.

| To | Do this |
| --- | --- |
| Fold or unfold the section | Click the arrow, or press `⌘⌥↩`. |
| Go into the section | Press `Enter` at the end of the named line. A folded section opens. |
| Leave the section | Press `Enter` on an empty last line, `⌘↩` anywhere in it, or `↓` at its end. |
| Skip a folded section | Press `↓` on its named line. |
| Undo the toggle | Press `Backspace` in an empty named line. Its blocks go back into the page. |

Folded text still counts in the word count, in search and in exports.
When you print, the section prints in full. In read mode, the arrow folds
and unfolds the section without changing the document.

## Math

Formulas are written in LaTeX and set by KaTeX.

- **A formula on its own line.** Type `/math` and choose **Math block**.
  With the cursor in the block, its source opens above the formula, and the
  formula changes as you type. Press `⌘↩` or `Esc` to leave the block.
- **A formula inside a line.** Type `$$E = mc^2$$`, or type `/inline`,
  choose **Inline math** and type the formula. Double-click an inline
  formula to change it.

If a formula can't be read, Poiesis says why instead of hiding it. When you
print, formulas are set as real math. An export format that can't set math
yet keeps a math block's LaTeX as text. Nothing in a formula can link to,
load or run anything.

## Blocks for books and poems

The slash menu offers these blocks in the documents of **Write**: the
chapters, poems and essays of a [project](./collections.md), and pieces that
are not in a project yet. A project is a book or other long work made of
several documents. **Verse** is offered in every document except morning
pages.

If a document already has one of these blocks, the block still shows when
the document is somewhere else.

| Block | What it's for | Insert with |
| --- | --- | --- |
| **Verse** | The lines of a poem. Poiesis keeps the lines as you write them, at the same margin as the rest of the text. | `/verse` or `⌥⌘V` |
| **Scene break** | A centred ornament between scenes: **Asterism** ⁂, **Stars** \* \* \*, **Fleuron** ❧ or **Blank space**. Point at it to choose another. | `/scene` |
| **Epigraph** | A quotation at the start, with its source on a line below. | `/epigraph` |
| **Pull-quote** | A line in large type, for emphasis. | `/pull-quote` |
| **Drop cap** | A large first letter for the paragraph. Choose it again to remove it. | `/drop` |
| **Table of contents** | A list of the document's headings that updates by itself. Click a heading to go there. | `/toc` |
| **Footnote** | A numbered note. | `/footnote` |
| **Citation** | A reference to a source, shown as author and year. | `/citation` |
| **Bibliography** | A list of the sources you have cited. | `/bibliography` |

To learn more:

- [Poetry & verse](./poetry.md) explains verse, epigraphs and scene breaks.
- [Footnotes & citations](./footnotes-and-citations.md) explains footnotes,
  citations and the bibliography.

## Pictures, callouts and dates

| Block | What it's for | Insert with |
| --- | --- | --- |
| **Image** | A picture with a caption. Use its toolbar to place it left, centre, right or full width. Drag its edge to resize it. Poiesis copies the file into your vault. | `/image`, or `![alt](https://…)` |
| **Callout** | A box for a side note: info, tip, warning or danger. Point at it to choose another kind. | `/callout`, or `> [!tip] ` |
| **Date** | Today's date, shown as a chip. The chip links the document to that day in the [calendar](./calendar.md). | `/date` |
| **Date & time** | The same as **Date**, with the time. | `/datetime` |
| **Time** | The time now, as plain text. | `/time` |

Click a date chip to open that day in the calendar. Click the pencil beside
the chip (**Edit date & time**) to change the date or the time.

The slash menu does not offer callouts, tables or code blocks in journal
entries.

You can also add two things inside a line of text:

- **@-mentions.** Type `@` and choose a
  [character](./characters-and-authors.md). To make a new character from the
  name you typed, choose **Create @name**.
- **Wiki links.** Type `[[` and choose a document. See
  [Links & the graph](./links-and-graph.md).

## Writing in Markdown

When you type Markdown, Poiesis changes it into formatting. The tables above show
the Markdown for each kind of formatting.

**Seeing the Markdown.** Turn on **Settings → Editor → Show Markdown**. The
markers (`**`, `#`, `[ ]( )`) then show faintly around the formatting in
the line you are on. The markers are never part of your text.

**Pasting Markdown.** When you paste text copied from a Markdown editor or
a notes app, Poiesis formats it. It formats headings, checklists, tables, quotes,
callouts, code, links, pictures and footnotes. Footnotes can be written
`^[the note]`, or `[^1]` with a `[^1]: the note` line.

Poiesis also understands the Markdown that other notes apps write:

- `~text~` becomes underlined text.
- `==🟢text==` becomes a green highlight.
- `[[Note|shown text]]` becomes a wiki link.
- `#tags` become the document's tags.

To paste the text exactly as it is, without formatting, press `⇧⌘V`.

A paste keeps only the blocks that the document offers. For example, a
checklist pasted into a chapter becomes a normal list, and each item keeps
its `[ ]`.

**Copying as Markdown.** Open the command palette (`⌘P`) and choose **Copy
as Markdown**. It copies the selection. If nothing is selected, it copies
the whole document. You can also right-click a document in the list and
choose **Copy as Markdown**.

## See also

- [The editor](./the-editor.md): the toolbar and the slash menu.
- [Poetry & verse](./poetry.md)
- [Footnotes & citations](./footnotes-and-citations.md)
- [Templates](./templates.md)
