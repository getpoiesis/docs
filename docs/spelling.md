---
title: Spelling
description: Spelling checked as you write, and one calm pass over a whole document.
---

# Spelling

φ checks your spelling as you write. A misspelled word gets a soft wavy
underline that you can fix from the right-click menu, or you can leave them
all for one deliberate pass when the draft is done. Nothing is ever
corrected for you.

## Check a whole document

1. Open the document.
2. Press `⌘;`, or choose **Edit → Check Spelling…**, **Check spelling…** in
   the document's ⋮ menu, or **Check spelling…** in the command palette.
3. For each word φ stops at, choose what to do (below).
4. When φ says it's all done, there's nothing left to review.

The word under review is highlighted in the text, so you see it where it
sits, and a counter shows how many are left.

| Choice | What it does |
| --- | --- |
| **Change** | Replaces this word with the suggestion, or with what you typed in **Correction**. |
| **Change all** | Replaces every occurrence in the document. |
| **Ignore** | Skips this one. |
| **Ignore all** | Skips every occurrence, for the rest of this pass. |
| **Add to dictionary** | Keeps the word, here and in every other document. |

When φ has nothing to suggest it says **No suggestions**, and you can type
the correction yourself.

The whole-document check uses φ's own dictionaries: English, Spanish,
Spanish (Mexico) and French. If none of the languages you check has one, φ
says so and offers **Open settings**, so you can choose a language it has.

## Fix a word as you go

Right-click an underlined word. φ's suggestions are at the top of the menu:
pick one to replace the word, or choose **Add to Dictionary** to keep it
and stop it being flagged.

## Choose how φ checks

Under **Settings → Language → Spelling**:

- **Check spelling**: underlining on or off.
- **Engine**: how φ checks as you type.
  - **Native**, the default, uses your computer's own spell-checker.
  - **Enhanced** uses φ's dictionaries, for the same results on every
    computer.
- **Languages**: which languages to check. Pick more than one and a word
  that's right in any of them isn't flagged, so a document in two languages
  reads clean. With **Native** on a Mac, the system works out the language
  for itself.

One vault can check differently from the rest: under **Settings → Language
→ This vault**, set **Default for this vault** to **Use global**,
**Native** or **Enhanced**. With **Enhanced**, you can choose that vault's
languages too.

## Your personal dictionary

Where a kept word goes depends on the engine:

- With **Enhanced**, and from the whole-document check, **Add to
  dictionary** keeps the word in φ's own list. Review it, and remove words,
  under **Settings → Language → Personal dictionary**. A word you remove is
  flagged again.
- With **Native**, **Add to Dictionary** in the right-click menu gives the
  word to your computer's spell-checker, so it isn't in φ's list.

## See also

- [Dictionary & thesaurus](./dictionary)
- [Themes & languages](./themes-and-languages)
- [Settings](./settings)
