---
title: Links & the graph
sidebar_position: 8
---

# Links & the graph

Ideas connect. φ lets you link one document to another the moment you mention it,
then shows you those connections two ways — as a list beside the page, and as a
graph of the whole vault. Nothing leaves your Mac; the link index is built and
queried locally.

## Linking with `[[wiki-links]]`

To link to another document, type `[[` anywhere in the text. A small menu opens
and filters as you keep typing — pick the document you want with the arrow keys
and `Enter`, or click it.

Links are by identity, not by title: once you've linked to a document, renaming
it later won't break the link.

### Linking to something that doesn't exist yet

If no document matches what you typed, the menu offers **Create "…"** at the top.
Choose it and φ makes a new document with that title and links to it — a quick way
to capture an idea before you've written the page for it. You can also follow an
unresolved link later from the Links panel (below).

Hold `⌘` and click any wiki-link in the editor to open the document it points to.
If that document doesn't exist yet, `⌘`-clicking creates it.

## The Links panel

Open the right panel (`⌘]` toggles it) and choose the **Links** tab. It always
reflects the document you're reading — including edits you haven't saved yet — and
has three sections:

- **Outgoing links** — every document this one links to. Click any entry to jump
  there.
- **Unresolved links** appear in the same list, marked with a **+** icon. These
  are `[[titles]]` you've written that don't match a document yet. Click one to
  create that document and open it.
- **Backlinks** — every document that links *to* this one. This is how you find
  what references the page you're on, even though you never linked outward from
  it.
- **Linked dates** — any dates you've referenced with `/date`, each linking to its
  day in the calendar.

## The graph view

The graph is a map of how your vault hangs together. Open it from
**View → Go to → Graph** (`⌘G` then `G`).

Each **dot** is a document, and each **line** is a link between two documents. A
dot grows a little as more links point to it, so your hubs stand out. Documents
with no links at all (orphans) appear dimmed. Private morning pages never appear
in the graph.

### Reading and moving around

- **Click a dot** to open that document.
- **Scroll** to zoom; **drag** the background to pan. Zoom out for an overview —
  labels fade away so you see the shape; zoom back in and titles return.
- The layout arranges itself live and frames the whole graph for you until you
  pan or zoom, after which it stays put.
- The toolbar has **Fit graph to view** to re-frame everything, **Refresh links**
  to rebuild from the latest content, and **Graph options** to tune the layout
  (link distance, forces, node size, whether orphans show, and more).

### Finding where you are

The graph shows the whole vault. To orient yourself within it, open a document
first, then open the graph — the document you're in is marked as the active dot,
so you can spot it and explore its neighbors outward from there.
