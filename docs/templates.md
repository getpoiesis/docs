---
title: Templates
description: Reusable blocks you build once and drop into any document with a slash.
---

# Templates

A **template** is a block you reuse: a scene heading, a poem's skeleton, a
daily log, a letter. Build the structure once, then put it wherever you need
it with `/`. Templates can fill in today's date and put the caret where you'll
start typing.

## Use a template

1. Put the caret where the template should go.
2. Type `/` and the template's name, or `/template` to see them all.
3. Pick it from the menu. Each template is marked **Insert a saved template**
   (every vault) or **Insert a vault template** (this vault only).

The block goes in at the caret, with any variables filled in.

## Save something as a template

| To save | Do this | Where it's kept |
| --- | --- | --- |
| The whole document | `⌘P` → **Save document as template…**, then name it. | Every vault. |
| Part of a document | Select it, press **›** (**More tools**) in the toolbar that appears, then **Save selection as template…**. Name it, then choose **All vaults** or **This vault only**. | Your choice. |

Templates for every vault are kept by φ itself, so adding or removing one
never touches your vault's files. Templates for one vault are kept inside its
folder, so they travel with the vault.

## The Templates page

In **Notes**, open **Templates** under **Places** in the sidebar, or press
`⌘K` and type *Templates*. The list shows every template this vault can use,
marked **This vault** or **On every vault**. Pick one to see what it writes.

- **+** (**New template**) makes an empty one for this vault, called
  **Untitled template**.
- **Edit template** opens it in the template editor.
- **Remove template** deletes one of this vault's templates. Templates for
  every vault are removed in Settings (below).

## Edit a template

The template editor is a writing surface of its own: editing a template there
never disturbs the document you have open. Change the name and the content,
then press **Save**. A reminder of the variables sits under it.

**Settings → Templates** lists them too, under **This vault** and **Global
templates**, each with a pencil to edit and a bin to remove. Below the lists:

- **Install a template…** adds a template file someone gave you.
- **Open templates folder** shows where the templates for every vault are
  kept.

## Fill in dates and the caret

A template can carry variables that fill in the moment you insert it. Because
they're filled in each time, the same template gives today's date today and
tomorrow's tomorrow. Type them as plain text in the template:

| Variable | Fills in with |
| --- | --- |
| `<% today %>` | Today's date. |
| `<% tomorrow %>` | Tomorrow's date. |
| `<% yesterday %>` | Yesterday's date. |
| `<% time %>` | The time now. |
| `<% cursor %>` | Nothing: it's where the caret lands, so you can start typing. |

In plain text, the dates become date chips you can click. Inside a link or
other formatting they become plain text.

:::tip A template for each kind of day

A daily log with `<% today %>` as its heading and `<% cursor %>` underneath
gives you a dated page, ready to write in, with one slash.

:::

## See also

- [Formatting & blocks](./formatting-and-blocks): the `/` menu.
- [Journal & morning pages](./journal-and-morning-pages)
- [Settings](./settings)
