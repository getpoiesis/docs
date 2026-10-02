---
title: Links & the graph
description: Link one document to another as you write, see what links where, and map the whole vault.
---

# Links & the graph

A link connects one document to another. Type `[[` and the name of a
document to make one. φ records each link in both directions, so every
document can show the documents it links to and the documents that link to
it. The **graph** is a picture of all the links in your
[vault](./vaults), the folder that holds your writing.

<img src="/img/app/links-light.png" alt="A research page with a wiki-link in its text, and the Info panel's Links tab listing its outgoing links, backlinks and linked dates" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/links-dark.png" alt="A research page with a wiki-link in its text, and the Info panel's Links tab listing its outgoing links, backlinks and linked dates" width="1600" height="1000" loading="lazy" decoding="async" />

## Link to another document

1. Type `[[` anywhere in the text. A menu of documents opens.
2. Keep typing to shorten the menu.
3. Choose the document with the arrow keys and Return, or click it.

<img src="/img/app/link-menu-light.png" alt="A note with two square brackets and a few letters typed, and the menu of matching documents open" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/link-menu-dark.png" alt="A note with two square brackets and a few letters typed, and the menu of matching documents open" width="1600" height="1000" loading="lazy" decoding="async" />

To follow a link, hold `⌘` and click it. In
[reading mode](./the-editor), a plain click is enough.

To open the linked document beside the one you are in, `⌥⌘`-click the link
(see [Side by side](./side-by-side)).

A link chosen from the menu points to the document itself. If you rename the
document later, the link still works. A `[[Title]]` that you type in full or
paste finds its document by title instead.

## Link to a page you haven't written yet

1. Type `[[` and the title you want.
2. If no document has that title, the last entry in the menu is
   **Create "…"**. Choose it.

φ writes the link, but the document does not exist yet. The link is shown as
a broken link until it does.

The document is made when you follow the link. `⌘`-click the link, or click
it under **Outgoing links** (see the next section). φ creates a document with
that title and opens it.

## See what links where

The **Links** tab of the [Info panel](./finding-your-way#the-info-panel)
lists a document's links. There are three ways to open it:

- Open the Info panel (`⇧⌘I`) and choose **Links**.
- Click the document's **⋮**, then **Links and backlinks**.
- Right-click the document's row in a list, then **Wiki links**.

The tab shows the document you are reading, including changes you have not
saved yet.

| Section | What it lists |
| --- | --- |
| **In this document** | The characters you have @-mentioned here. Shown only when there are some. |
| **Outgoing links** | Every document this one links to. Links to documents that do not exist yet are listed too, with a create icon. Click one to make that document. |
| **Backlinks** | Every document that links *to* this one. |
| **Linked dates** | The dates you added with `/date`. Click one to show that day in the [calendar](./calendar). |
| **Research** and **Notes** | Research pages (in Write) and notes linked to this document. You can add more here. See [Research](./research). |

Click any entry to open it. **Local graph**, at the bottom of the tab, opens
the graph around this document.

## Explore the graph

There are three ways to open the graph:

- Click **Graph** under **Places** in the sidebar (in Write and Notes).
- Press `⌘K` and choose it.
- Press `⌘G`, then `G`.

<img src="/img/app/graph-light.png" alt="The graph of a vault: linked documents drawn as larger dots joined by lines, unlinked ones as small faint dots" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="The graph of a vault: linked documents drawn as larger dots joined by lines, unlinked ones as small faint dots" width="1600" height="1000" loading="lazy" decoding="async" />

Each dot is a document. Each line is a link. A dot with more links is larger,
so your most linked documents are easy to see. Documents with no links are
fainter. Morning pages, journal days and research pages never appear in the
graph.

- **Click a dot** to open that document. When you close it, you return to
  the graph.
- **Hover over a dot** to see it clearly. Its links and the dots it is linked
  to stay clear, and everything else fades.
- **Scroll** to zoom. **Drag** the background to move around. When you zoom
  out, the titles fade so that you can see the overall shape.
- The document you have open is shown in the accent colour.

The bar at the top shows the number of documents in the graph. It has two
buttons:

- **Animate** arranges the dots again while you watch.
- **Refresh links** rebuilds the graph from your latest text.

## Change what the graph shows

Press the panel button at the top right of the graph (`⇧⌘I`). **Graph
settings** opens:

<img src="/img/app/graph-settings-light.png" alt="The graph with Graph settings open beside it" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-settings-dark.png" alt="The graph with Graph settings open beside it" width="1600" height="1000" loading="lazy" decoding="async" />

| Group | Settings |
| --- | --- |
| **Which graph** | **Whole vault**, or **Local**: the last document you opened and everything within two links of it. |
| **Show** | **Orphans** (documents with no links) and **Arrows** (the direction of each link). |
| **Display** | **Node size**, **Link thickness**, **Text fade** and **Label size**. |
| **Forces** | **Repel force**, **Link distance**, **Center force** and **Link force**. These push the dots apart or pull them together. |

**Reset to defaults** restores the original settings.

Below the settings, one line shows the number of documents, links, and
documents with no links. **Most linked** lists the documents with the most
links. Click one to open it.

:::tip Find notes with no links

**Unlinked**, in the Notes sidebar, lists the notes that have no links to
them and no links from them. See [Notes & capture](./notes).

:::

## See also

- [Research](./research): notes and research linked to a chapter, project or
  character.
- [Characters & authors](./characters-and-authors): @-mentions.
- [Calendar](./calendar)
- [Side by side](./side-by-side)
