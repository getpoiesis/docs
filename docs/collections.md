---
title: Collections (books & manuscripts)
sidebar_position: 7
---

# Collections (books & manuscripts)

A **collection** gathers documents into an ordered sequence — the structure of a
book, a poetry volume, a set of essays, a screenplay. It's how φ becomes a
manuscript editor rather than just a notebook.

A collection *references* documents; it doesn't contain them. The same document
can appear in more than one collection, and **deleting a collection never
deletes its documents** — they stay in your library. The collection holds the
order, the structure, and the cover; the writing stays where it lives.

Open the **Write** space (the book icon on the left rail) to work with
collections.

## Creating a collection

In the Write space, click the **+** in the Collections header to make a new one.
Each collection shows its type, author byline, document count, and word count
(against its goal, if set). Click a collection's name to open it.

Use the **⋯** menu on a collection to add the current document, rename it, open
it for editing, or delete it.

## Collection types

A collection's **type** tints its vocabulary — what φ calls the items inside it —
and shapes its exports. The types are:

- **Book** — structured in *Chapters* (grouped into *Parts*).
- **Series** — multiple books.
- **Poetry** — *Poems*.
- **Essay collection** — *Essays*.
- **Research** — research material.
- **Journal** — dated *Entries*.
- **Screenplay** — *Scenes* (grouped into *Acts*).
- **Custom** — generic *Sections* and *Groups*.

Change the type any time from the collection page. The structure you built is
preserved; only the labels change.

## The structure tree

A collection is a **recursive tree** with no depth limit. A book might be:

```
Book
 └─ Part
     └─ Chapter
         └─ (a deeper sub-section, if you want one)
```

The tree has two kinds of items: **documents** (the leaves — your actual
writing) and **groups** (the branches — Parts, Acts, and so on). Group items
exist only to organize; they hold no prose of their own.

### Numbers are computed, never stored

φ derives "Part I", "Chapter 3", "Scene 1.2" from each item's position in the
tree. Reorder anything and everything renumbers instantly. You never type a
chapter number, and you never have to fix one.

## The collection panel

When a collection is open, the panel beside the rail is its primary navigation —
the structure tree, with the combined word count and goal progress at the top.

Three tabs sit above the tree:

- **Chapters** (labeled by type — *Poems*, *Scenes*, etc.) — the editable
  structure tree.
- **Outline** — a flat list with each item's synopsis and status.
- **Index** — the generated table of contents (see below).

### Adding and editing items

Use the **+** to add a document or a group. Right-click any item (or use its
menu) for the full set of actions:

- **Add below** — a new document or group after this one.
- **Rename**, **Duplicate**.
- **Status** — Draft, Revised, Final, or Todo.
- **Color** — a label swatch.
- **Front / back matter** — mark the item *unnumbered* (see below).
- **Open** the referenced document.
- **Remove from collection** — takes the item out of the structure; the document
  itself is **not** deleted. Removing a group also unfiles everything inside it,
  and again deletes none of the documents.
- **Move to top** / **Move to bottom**.

### Reorder by dragging

Drag any item to a new place — up, down, into a group, out of a group. The tree
re-nests and renumbers as you drop. You can also work from the keyboard when the
tree is focused: arrow keys to move and expand/collapse, Enter to open, `F2` to
rename, Delete to remove, `⌘D` to duplicate, and `⌘[` / `⌘]` to nudge an item up
or down within its group.

## Moving between chapters while writing

When you open a document that belongs to a collection, a chapter navigator
appears with its position — "Chapter 3 / 12" — and previous/next controls.
Navigation follows the full reading order of the book, descending into groups,
not just the current level. Use the controls, or `⌘⌥←` and `⌘⌥→`.

## The collection page

With a collection open and no document selected, you get its **page** — the cover
and overview, all edited inline:

- **Cover image** — click the cover well to choose one; remove it from the form
  below.
- **Title** — edit it in place.
- **Author profile** — pick a profile to set the byline, or create a new one.
  Author profiles carry a name, pen name, bio, photo, and links, and appear in
  your exports.
- **Type** — change the collection type here.
- **Description** — a short summary of the work.
- **Word goal** — see below.

From the page you can also **Compile** the whole collection to a single HTML
document, or export it as **PDF**, **EPUB**, or **DOCX**, and **Save a Copy** as
a portable `.poiesis` file with images embedded.

## Front and back matter

Some pages of a book aren't chapters — a dedication, a foreword, an
acknowledgments page, an appendix. Mark any item as **Front / back matter** to
make it *unnumbered*: it shows by its own name and takes no number, so your real
chapters still start at 1. Marking a group as unnumbered cascades to everything
inside it. Exports honor this — front matter appears unnumbered in the table of
contents and the compiled document.

## Table of contents

The **Index** tab generates a table of contents from the structure — depth-aware,
following the tree and its computed numbering, with front and back matter shown
unnumbered. It updates as you reorganize, and the same tree-aware contents is
embedded when you export to HTML, PDF, EPUB, or DOCX.

## Word goals

You can set a **word goal** for a collection from its page. The panel header and
the collection's listing show a progress bar against the combined word count of
every document in the collection. Individual documents can carry their own goals
too (set from the document header), so you can track a single chapter and the
whole book at once.
