---
title: Search & replace
description: Find words in the page you're on or across every document, and change them in one go.
---

# Search & replace

φ Poiesis has two searches. `⌘F` searches the document you have open. `⇧⌘F`
searches every document in the [vault](./vaults), the folder that holds
your writing. Both can replace what they find, so you can rename a
character or correct a word everywhere at once.

<img src="/img/app/search-light.png" alt="The Search page in the list column: a query and a replacement field, then matches grouped by document with the words in context" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="The Search page in the list column: a query and a replacement field, then matches grouped by document with the words in context" width="1600" height="1000" loading="lazy" decoding="async" />

## Change a name everywhere

1. Press `⇧⌘F` to open **Search**.
2. Type the old name in **Find in every document…**.
3. Check the matches. They are grouped by document.
4. Type the new name in **Replace**.
5. Press **Replace in all documents…**. Poiesis tells you how many matches it
   will change, and in how many documents.
6. Press **Replace everywhere** to confirm.

If versioning is on, Poiesis first saves a version of the whole vault, named
after what you replaced. You can go back to that version later. If
versioning is off, the change can't be undone, and Poiesis tells you so before
you confirm. See [Versions & backup](./versions-and-backup).

## Find in this document

1. Press `⌘F` (**Edit → Find in Document**). A bar opens above your text.
   If you had words selected, they are already in the bar.
2. Type what you want to find. Poiesis highlights every match as you type.

<img src="/img/app/find-bar-light.png" alt="The find bar above a chapter, with the matches highlighted, the match counter and the replace field" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/find-bar-dark.png" alt="The find bar above a chapter, with the matches highlighted, the match counter and the replace field" width="1600" height="1000" loading="lazy" decoding="async" />

On the bar:

- The counter shows which match you are on, such as **3 of 12**, or **No
  results**.
- Return goes to the next match, and `⇧`Return goes to the previous one.
  The arrow buttons do the same.
- **Match case** (the Aa button) finds only words with the same capital
  and small letters as you typed.
- **Regular expression** lets you search with a pattern.
- `Esc` closes the bar and removes the highlights.

When no document is open, `⌘F` opens the Search page instead.

### Replace in this document

1. Press **Replace** on the bar. Or press `⌥⌘F` (**Edit → Find & Replace
   in Document**), which opens the bar with the replacement field showing.
2. Type the replacement.
3. Press **Replace** to change the current match and move to the next one.
   Or press **All in document** to change every match in this document.

`⌘Z` undoes a replacement here, like any other edit.

## Search every document

1. Press `⇧⌘F` (**Edit → Find in All Documents…**). **Search** opens in
   the list column.
2. Type at least two characters.
3. Click a document, or one of its matches. The document opens beside the
   list with that match selected.

The search stays open in the list, so you can open the next result.

Poiesis searches every document in the vault, including morning pages. It lists
the documents that match, starting with the one that has the most matches.
Under each document you see its matches with the words around them. If the
match is in a document's title, the document is marked **in the name**.
**Match case** and **Regular expression** work the same way as on the bar.

## Other ways to find things

| To find | Use |
| --- | --- |
| A document, project or character by name | `⌘K`. See [Finding your way](./finding-your-way). |
| Something in the list you're looking at | The search field under the list's title. It filters by title, opening text and tags. |
| A command | `⌘P`. |

## See also

- [Finding your way](./finding-your-way)
- [Organizing](./organizing)
- [Versions & backup](./versions-and-backup)
