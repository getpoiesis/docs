---
title: Importing
description: Bring work into φ from Markdown, other apps and your own copies.
---

# Importing

φ reads work from other writing tools and from copies you've made yourself.
Imported writing becomes ordinary φ documents, with their dates, links and
pictures kept.

## Import Markdown files

1. Open the command palette (`⌘P`) and choose **Import Markdown file(s)…**.
   It's also under **Import…** in the vault menu at the top of the sidebar.
2. Pick the `.md` or `.txt` files.

φ reads front matter, headings, lists and tasks, callouts, highlights,
footnotes and wiki links.

## Import a folder of notes

Moving from another notes app, like Obsidian or Logseq? Bring the whole
folder:

1. In the command palette, choose **Import Markdown folder → into current
   vault…** or **Import Markdown folder → as a new vault…**.
2. Pick the folder.

φ keeps the folder's structure, and:

- **each note's original creation date**, from a date in the file, a
  daily-note file name (like `2022_11_11`), or the folder's git history;
- **the links between notes**: it decodes encoded file names, honours
  `title::` and `alias::` properties, and treats `#tags` as page links, so
  backlinks and the graph work straight away.

## Import a φ document or project

A `.poiesis` file made with **Save a Copy** or **Project copy** opens with
its pictures:

- choose **Import a φ document (.poiesis)…** in the command palette, or
  **File → Import φ Document…**; or
- drag the file onto the φ window.

## See also

- [Vaults](./vaults): where imported work lands.
- [Share a copy](./share-a-copy): making a project copy.
