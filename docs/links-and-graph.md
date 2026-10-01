---
title: Links & the graph
description: Link one document to another as you write, see what links where, and map the whole vault.
---

# Links & the graph

Type `[[` and the name of another document, and the two are linked. φ keeps
track of every link both ways, so from any page you can see what it points to
and what points back at it. The graph draws the whole web at once.

<img src="/img/app/links-light.png" alt="A research page with a wiki-link in its text, and the Info panel's Links tab listing its outgoing links, backlinks and linked dates" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/links-dark.png" alt="A research page with a wiki-link in its text, and the Info panel's Links tab listing its outgoing links, backlinks and linked dates" width="1600" height="1000" loading="lazy" decoding="async" />

## Link to another document

1. Type `[[` anywhere in the text. A menu of documents opens.
2. Keep typing to narrow it.
3. Pick the document with the arrow keys and Return, or click it.
4. To follow the link, hold `⌘` and click it. In
   [reading mode](./the-editor) a plain click is enough.

A link you pick from the menu points at that document itself, so renaming the
document later won't break it. A `[[Title]]` you type out in full or paste in
finds its document by title instead.

`⌥⌘`-click a link to open its document beside the one you're in (see
[Side by side](./side-by-side)).

## Link to a page you haven't written yet

If no document has the title you typed, the last entry in the menu is
**Create "…"**. Choose it and φ writes the link, with nothing at the other end
yet. It shows as a broken link until the page exists.

The page is made when you follow the link: `⌘`-click it, or click it under
**Outgoing links** (below). φ creates a document with that title and opens it.

## See what links where

Open the Info panel (`⇧⌘I`) and choose **Links**. You can also pick **Links
and backlinks** from the document's **⋮**, or **Wiki links** from a row's
right-click menu. The tab follows the document you're reading, edits you
haven't saved included:

| Section | What it lists |
| --- | --- |
| **In this document** | The characters you've @-mentioned here. Shown only when there are some. |
| **Outgoing links** | Every document this one links to. Links that lead nowhere yet are listed too, with a create icon; click one to make that document. |
| **Backlinks** | Every document that links *to* this one, even though you never linked outward from it. |
| **Linked dates** | The dates you've put in with `/date`. Click one to show that day in the [calendar](./calendar). |
| **Research** and **Notes** | Research pages (in Write) and notes linked to this document, with ways to add more. See [Research](./research). |

Click any entry to open it. **Local graph**, at the foot of the tab, opens
the graph around this document.

## Explore the graph

Open the graph from **Graph** under **Places** in the sidebar (in Write and
Notes), from `⌘K`, or with `⌘G` then `G`.

<img src="/img/app/graph-light.png" alt="The graph of a vault: linked documents drawn as larger dots joined by lines, unlinked ones as small faint dots" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="The graph of a vault: linked documents drawn as larger dots joined by lines, unlinked ones as small faint dots" width="1600" height="1000" loading="lazy" decoding="async" />

Each dot is a document and each line a link. A dot grows with the number of
links it has, so your hubs stand out, and documents with no links are drawn
fainter. Morning pages, journal days and research pages never appear: the
graph is the shape of your linked writing, not a list of every file.

- **Click a dot** to open that document. Closing it brings you back to the
  graph.
- **Hover a dot** to focus it. Everything else fades, and its links and
  neighbours stay clear.
- **Scroll** to zoom and **drag** the background to move about. Zoomed out,
  the titles fade so you see the shape.
- The document you have open is marked in the accent colour.

The bar at the top counts the documents drawn and has **Animate**, which
replays the layout settling, and **Refresh links**, which rebuilds it from
the latest text.

## Change what the graph shows

Press the panel button at the top right of the graph (`⇧⌘I`) to open **Graph
settings**:

| Group | Settings |
| --- | --- |
| **Which graph** | **Whole vault**, or **Local**: the last document you opened and everything within two links of it. |
| **Show** | **Orphans** (documents with no links) and **Arrows** (which way each link points). |
| **Display** | **Node size**, **Link thickness**, **Text fade** and **Label size**. |
| **Forces** | **Repel force**, **Link distance**, **Center force** and **Link force**, which spread or gather the layout. |

**Reset to defaults** puts the look back. Below the settings, a line counts
documents, links and documents with no links, and **Most linked** lists your
biggest hubs; click one to open it.

:::tip Finding loose threads

**Unlinked**, in the Notes sidebar, lists the notes that nothing links to and
that link to nothing. See [Notes & capture](./notes).

:::

## See also

- [Research](./research): notes and research linked to a chapter, project or
  character.
- [Characters & authors](./characters-and-authors): @-mentions.
- [Calendar](./calendar)
- [Side by side](./side-by-side)
