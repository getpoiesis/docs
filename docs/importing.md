---
title: Importing
description: Bring work into φ Poiesis from Markdown, other apps and your own copies.
---

# Importing

You can bring writing into φ Poiesis from other writing apps, and from copies you
made in Poiesis. Imported writing becomes ordinary Poiesis documents. Their dates, links
and pictures are kept.

Imported documents go into a [vault](./vaults.md), the folder where Poiesis keeps your
work.

## Import Markdown files

1. Open the command palette (`⌘P`).
2. Choose **Import Markdown file(s)…**.
3. Pick the `.md` or `.txt` files.

You can also start from the vault menu at the top of the sidebar: choose
**Import…**.

Poiesis reads front matter, headings, lists and tasks, callouts, highlights,
footnotes and wiki links.

## Import a folder of notes

If you are moving from another notes app, such as Obsidian or Logseq, you can
import the whole folder.

1. Open the command palette (`⌘P`).
2. Choose **Import Markdown folder → into current vault…** or **Import
   Markdown folder → as a new vault…**.
3. Pick the folder.

Poiesis keeps the structure of the folder. It also keeps:

- **The date each note was first created.** Poiesis takes it from a date in the
  file, from a daily-note file name (like `2022_11_11`), or from the folder's
  git history.
- **The links between notes.** Poiesis decodes encoded file names, reads `title::`
  and `alias::` properties, and treats `#tags` as links to pages. Backlinks
  and the graph work as soon as the import ends.

## Import a Poiesis document or project

A `.poiesis` file made with **Save a Copy** or **Project copy** opens with its
pictures. There are three ways to import it:

- In the command palette, choose **Import a Poiesis document (`.poiesis`)…**.
- Choose **File → Import φ Document…**.
- Drag the file onto the Poiesis window.

## See also

- [Vaults](./vaults.md): where imported work goes.
- [Share a copy](./share-a-copy.md): making a project copy.
