---
title: Focus & writing modes
sidebar_position: 14
---

# Focus & writing modes

When it's time to write, the interface should disappear. φ has a few ways to
quiet the page — use as much or as little as you like.

![Focus mode: the words, and nothing around them](/img/app/focus-light.png)
![Focus mode: the words, and nothing around them](/img/app/focus-dark.png)

## Focus mode

Focus mode hides every piece of chrome — sidebar, panels, status bar — leaving
just the page. Toggle it with `⌘⇧F` (or **Toggle focus mode** in the command
palette, `⌘P`). Press it again to bring everything back.

## Sanctuary

Sanctuary is the deepest setting: chrome hidden *and* the window taken to full
screen, so nothing else is visible. Toggle it with `⌘⇧↩`. It lasts for the
session — leave it the same way you entered.

## Typewriter scrolling

Typewriter scrolling keeps the caret centered on screen, so the line you're
writing stays put and the text rises to meet it. Turn it on in **Settings →
Editor → Typewriter scrolling**, or with **Toggle typewriter scrolling** in the
command palette.

## Focus typing

Focus typing dims everything except where you're working, so your eye rests on
the current thought. Choose the scope:

- **Sentence** — only the current sentence stays bright.
- **Paragraph** — the current paragraph stays bright.
- **Off** — everything is fully lit.

Set it in **Settings → Editor → Focus typing**, the **View → Focus Typing** menu,
or from the command palette.

## Reading mode

When you want to read rather than edit, reading mode opens the document
read-only — a deliberate way to revisit a draft without risk of stray
keystrokes. Toggle it with `⌘E`. Press it again to return to editing.

## Writing sessions

A writing session tracks the effort of one sitting. Start one from the **play**
button at the right of the status bar (or just begin typing), and it shows:

```
active time · words · wpm
```

- **Active time** counts only while you're actually writing. It **auto-pauses**
  when you go idle, when the window loses focus, and when you leave the editor
  (for Settings, the graph, or reading mode).
- **Words** is gross words written this session — deletions don't subtract — so a
  revision-heavy sitting still reflects the work.
- **wpm** is your pace over the active time.

Use the **pause/resume** and **stop** buttons in the status bar to control the
session by hand. Sessions live for the run of the app; quitting ends them. Your
**longest session** and **most words in a session** are kept as personal bests.

## Writing stats

Click the word count in the status bar for the document stats popover: words,
characters, sentences, reading time, readability (reading ease and grade level),
a small word-count-over-time sparkline, your vault-wide totals, and your session
bests.

## Word goals

Set a per-document target with **Set word goal**. When a goal is set, the status
bar shows your progress as `words / goal` with a small bar that fills as you
write and marks the goal as met when you reach it.
