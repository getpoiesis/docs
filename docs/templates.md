---
title: Templates
sidebar_position: 15
---

# Templates

Templates are reusable blocks you drop into any document — a scene heading, a
poem skeleton, a daily-log layout, a letter format. Build the structure once,
then insert it whenever you need it.

## Inserting a template

Two ways, both wherever your caret is:

- **Slash menu** — type `/` in the editor, then the template's name (or the word
  `template`), and pick it from the list.
- **Command palette** — open it with `⌘P` and search for the template.

The block is inserted at the cursor, with any variables filled in (see below).

## Saving a template

Make the thing you want to reuse, then save it:

- **Save the whole document** — **Save document as template…** in the command
  palette, or the save button in the templates list. Give it a name.
- **Save a selection** — select the part you want and use **Save selection as
  template…**, so you keep just that fragment.

## Global vs vault templates

When you save, φ asks where it should live:

- **All vaults (global)** — available everywhere. Global templates are stored at
  the app level, shared across every vault, so adding or removing one never
  touches your vault files.
- **This vault only** — available just in the current vault, and travels with it.

In the templates list, the two are shown under **Global templates** and **This
vault** sections.

## The template editor

To change a template, open the **Edit template** editor. It's a standalone
writing surface — editing a template here never disturbs your open document. Edit
the content and the name, then save. You can also rename, remove, install a
template file, or open the templates folder from the list.

## Template variables

A template can include variables that fill in the moment you insert it (they're
never stored already-resolved). Type them as literal text:

| Variable        | Fills in with                                  |
| --------------- | ---------------------------------------------- |
| `<% today %>`   | today's date                                   |
| `<% tomorrow %>`| tomorrow's date                                |
| `<% yesterday %>`| yesterday's date                              |
| `<% time %>`    | the current time                               |
| `<% cursor %>`  | nothing — this is where the caret lands        |

Variables work in plain text and inside links. The date variables become
interactive date chips in plain text; inside a link or alongside other
formatting they resolve to plain text. After insertion, your caret jumps to
wherever you placed `<% cursor %>`, so you can start typing right away.
