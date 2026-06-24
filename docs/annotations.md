---
title: Annotations
sidebar_position: 9
---

# Annotations

Annotations let you mark a passage and say something about it — a highlight to
flag it, a margin comment to remember why. They live with the document, so your
notes to yourself travel with the draft.

## Highlighting a passage

Select some text. The bubble toolbar appears; click the **highlighter** icon
(**Highlight & comment**) to open its menu, then pick a color. The selected text
gets a soft highlight in that color.

There are five preset colors — **Yellow**, **Green**, **Blue**, **Purple**, and
**Orange**. They're translucent, so they read well in both light and dark themes.

### A custom color

Next to the presets is a **custom color** swatch. Click it to open the system
color picker and choose any color you like for the highlight.

## A comment without a highlight

Sometimes you want to note something without coloring the text. In the
highlighter menu, choose **Comment (no highlight)**. φ attaches a comment to the
selection without tinting it — you write the note itself in the Annotations panel.
Every highlight can carry a comment too; the two work together.

To remove a highlight, select the highlighted text and choose **Remove highlight**
from the same menu.

## The Annotations panel

Open the right panel (`⌘]` toggles it) and choose the **Annotations** tab to see
every annotation in the current document. Each card shows the quoted text, its
color, and a box for your comment.

From the panel you can:

- **Jump to the text** — click a card's quote to scroll to and select that passage
  in the editor. (Clicking a highlight in the editor works the other way: it opens
  that annotation in the panel.)
- **Write or edit a comment** — type in the card's note box.
- **Recolor** — pick a different preset, a custom color, or **No highlight
  (comment)**.
- **Resolve** — click the check to mark an annotation done; resolved ones are
  dimmed but kept.
- **Remove** — click the trash icon to delete the annotation.

### Finding annotations

When a document has several annotations, use the **search** box to filter by the
quoted text or your comment, and the **filter** menu to show only Highlights,
Comments, Open, or Resolved annotations.

### Detached annotations

If the text an annotation pointed to is edited away, the annotation becomes
**detached** — it's kept in the panel and marked, with a **Reattach to selection**
action so you can re-anchor it to a new passage.

## How annotations are stored

Annotations are part of the document. The colored highlight is a mark in the
document's content (a small `annotationId` tag on the text), and the comment,
color, and resolved state are saved in the document's metadata inside the same
`.poiesis` file. Nothing is stored separately and nothing leaves your Mac — copy
or back up the file and its annotations come with it.
