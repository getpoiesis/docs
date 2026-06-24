---
title: Introduction
sidebar_position: 1
slug: /
---

# Welcome to φ

φ is a writing app for the long haul — manuscripts, poetry, essays, and the
notes that feed them. It is built first for the **craft of writing**: a calm,
full-bleed page, a serif you can live in, and structure that stays out of your
way until you reach for it.

:::warning φ is in alpha

You're using early software. The core — writing, organizing, versioning, and
keeping your work safe in plain files — is solid and in daily use. But expect
rough edges, occasional bugs, and features that are still settling.

**The weakest area today is export** — turning your work into EPUB, PDF, or Word
files. It's under active development and the part most likely to need cleanup in
the target app. Treat exported files as drafts and proofread them. See
[Exporting & printing](exporting.md) for what to expect.

Your writing itself is never at risk: documents are plain files, saved
continuously and verified, with version history you can roll back.

:::

## What makes φ different

**Your writing is yours.** Everything lives in plain files on your own Mac, in a
folder you choose. There is no account, no cloud, and no network required to
write, edit, search, or export. Close the app, open the folder, and your work is
right there.

**Local-first, durable by design.** Every document is saved automatically and
verified after each write. φ keeps a version history so you can step back to any
earlier draft, and it can back that history up to your own git remote if you want
it off-machine — but nothing leaves your computer unless you set that up.

**One tool, two modes.** φ is a manuscript editor first and a note-taking app
second, and the two share the same foundation. Write a book in *Collections*,
keep a daily journal, link ideas with `[[wiki-links]]`, and watch them connect in
the graph — all in one place, one vault.

**Quiet by default.** Focus mode hides every piece of chrome. Typewriter
scrolling keeps your line centered. The interface gets out of the way so the page
is the thing.

## What φ is not

- **Not a cloud service.** There are no servers and no sync accounts. Backup and
  portability are file- and git-based, under your control.
- **Not a real-time collaboration tool.** φ is a single-writer app by design.
- **Not Markdown-native.** Documents are stored as structured content
  (ProseMirror JSON) so rich elements — annotations, footnotes, citations,
  custom blocks — survive round-trips. You can still *import* and *export*
  Markdown freely.

## How writing is stored

Each document is a `.poiesis` file: a small JSON wrapper around your text and its
metadata. A **vault** is just a folder of these files (plus an `assets/` folder
for images and a version history). Because it's all plain files in a normal
folder, your writing is easy to back up, move, and keep for decades.

## Where to go next

New here? Start with [Getting started](getting-started.md) — you'll install φ,
create your first vault, and write your first page in a few minutes.
