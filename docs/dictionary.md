---
title: Dictionary & thesaurus
sidebar_position: 12
---

# Dictionary & thesaurus

φ includes an offline dictionary so you can check a word's meaning — or find a
better one — without leaving the page or going online. It works the way an
e-reader's dictionary does: you install dictionary *packs*, and lookups happen
entirely on your Mac.

## Looking up a word

There are three ways to look something up:

- **From a selection** — select a word in the editor and click the **book**
  icon in the bubble toolbar.
- **From the command** — press `⌘⇧D`, or open the command palette (`⌘P`) and
  choose **Open dictionary**. This opens the Dictionary panel no matter which
  right-panel tab you were on — handy when you want to check a word *before* you
  write it.
- **From the search box** — with the Dictionary panel open, type any word and
  press Enter.

Results show the definition and, where the dictionary provides them, synonyms.
**Click any cross-reference or synonym** in a definition to look that word up in
turn — navigation stays inside the panel.

### Inflected words

You don't have to type the exact dictionary form. Look up *running*, *changes*,
or *cities* and φ will find *run*, *change*, and *city*. Many dictionaries also
carry their own list of alternate forms, which φ uses automatically — so for a
Spanish dictionary, *corriendo* resolves to *correr*.

## Installing a dictionary

φ reads the widely-used **StarDict** format. To add one:

1. Download a dictionary pack — good free sources are
   [freedict.org](https://freedict.org) and [wikdict.com](https://www.wikdict.com).
   For English definitions with synonyms, a **WordNet** StarDict pack works well.
2. Unzip it. You'll get a folder containing files such as `.ifo`, `.idx`, and
   `.dict` (sometimes compressed as `.idx.gz` or `.dict.dz` — both are fine).
3. In φ, open **Settings** (`⌘,`) → **Editor** → **Dictionary & Thesaurus** →
   **Install dictionary pack…**, and select the folder.

The pack appears in the list immediately and is ready to use. You can install as
many as you like — lookups search all of them, and results are labeled with their
source.

### Languages

Because packs are just files you choose, φ isn't limited to English. Install a
monolingual Spanish or French dictionary to look up words in that language, or a
bilingual pack (for example English→Spanish) to translate as you write.

## Managing packs

In **Settings → Editor → Dictionary & Thesaurus** you'll see every installed
pack with its word count. Remove one with the trash icon. A dictionary that
shipped with φ is marked **Built-in** and is kept in place.

## Privacy

Everything here is local. Installed dictionaries are stored in φ's application
data folder, and no lookup ever touches the network.
