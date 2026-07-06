---
title: Spelling
sidebar_position: 6
---

# Spelling

φ checks your spelling as you write. Misspelled words get a subtle wavy
underline, and you can correct them straight from the **right-click menu** —
pick a suggestion, or choose **Add to Dictionary** to keep the word.

Everything lives in **Settings → Language**.

## Check the whole document

When you'd rather review a finished draft in one deliberate pass, run
**Check spelling**. φ walks every misspelling in order and, for each one, shows a
small panel with suggestions and your choices — nothing is ever corrected
automatically:

- **Change** — replace this word with the suggestion (or type your own in the box).
- **Change all** — fix every occurrence of the word in the document.
- **Ignore** / **Ignore all** — skip this one, or every occurrence, for the rest of
  the pass.
- **Add to dictionary** — keep the word everywhere, now and in future documents.

The word under review is highlighted in the text so you always see it in context,
and a counter shows how many are left. Start the pass any way you like:

- the **command palette** (`⌘P`) → **Check spelling…**
- **Edit → Check Spelling…** in the menu
- the shortcut **⌘⇧L**
- the spell-check button in the **status bar**

The whole-document check uses φ's bundled dictionaries (English, Spanish, and
French are built in), so it works even when your everyday engine is your operating
system's checker. If the document's language has no dictionary installed, φ points
you to **Settings → Language → Spelling** to add one.

## Choosing an engine

Under **Settings → Language → Spelling** you pick how φ checks spelling:

- **Native** (default) — uses your operating system's spell-checker. It's light
  and leaves your system's writing tools untouched. On macOS the language is
  detected automatically; on Windows and Linux you choose the languages below.
- **Enhanced** — uses φ's own bundled dictionaries, so you get the same
  high-quality checking on every operating system. English, Spanish,
  Spanish (Mexico) and French are built in.

Turn the whole feature off with the **Check spelling** toggle.

## Languages

Choose which languages to check under **Settings → Language → Spelling →
Languages**. You can pick more than one — a document is checked against all of
them, so a word that's correct in *any* chosen language isn't flagged. This is
what makes multilingual documents work.

### Installing more languages

The Enhanced engine can use any Hunspell dictionary. To add one:

1. Download a Hunspell dictionary (a folder with an `.aff` and a `.dic` file).
2. **Settings → Language → Spelling → Install language…** and select the folder.

## Per-document and per-vault overrides

Spelling settings cascade: **document → vault → global**. A more specific level
wins, and anything you don't set falls back to the level above.

- **For one document:** click the spell-check chip in the **status bar** (bottom
  of the window) to set this document's engine and languages. Choose **Use
  default** to clear the override and follow the vault/global setting again.
- **For a vault:** **Settings → Language → This vault** sets a default for every
  document in the current vault. Choose **Use global** to clear it.

## Personal dictionary

Words you add with **Add to Dictionary** are remembered across documents. Review
or remove them under **Settings → Language → Personal dictionary** — removing a
word makes φ flag it again.
