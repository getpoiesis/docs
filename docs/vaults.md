---
title: Vaults
sidebar_position: 3
---

# Vaults

A **vault** is where your writing lives. It is an ordinary folder on your Mac
that holds your documents, the images you've added, and a version history. There
is no database and no cloud — just files in a folder you chose.

Because a vault is plain files, your work is yours: you can back it up, move it to
another machine, open it in twenty years, or peek inside the folder with Finder.
Nothing leaves your computer unless you set up backup yourself.

## What's inside a vault

Open a vault folder in Finder and you'll see:

- **`.poiesis` files** — one per document. Each is a small JSON file holding your
  text and its metadata (title, tags, created date, and so on).
- **`assets/`** — images you insert are copied here, so a vault is
  self-contained. Move the folder and your pictures move with it.
- **A version history** — every change is checkpointed so you can step back to an
  earlier draft. (See [Versions & backup](versions-and-backup.md).)
- A small marker file that names the vault.

You never have to manage these by hand. φ creates and maintains them for you.

## Creating or opening a vault

The first time you launch φ, it asks you to choose where your writing lives. You
have two options:

- **Create a vault** — pick (or make) an empty folder, and φ sets up the vault
  structure inside it and drops in a short welcome note to get you started.
- **Open a folder** — point φ at any folder. If it already holds `.poiesis`
  files, they appear; if not, it becomes a fresh vault.

You choose the location with the standard macOS folder picker, so a vault can sit
anywhere you like — `~/Documents`, an iCloud-synced folder, an external drive,
wherever suits you.

You can do the same later from the menu:

- **File → Open Vault…** (`⌘⇧O`) to add and switch to another folder.
- **File → Switch Vault…** to jump between vaults you've already added.

## Multiple vaults and switching

You can keep more than one vault — say, one for a novel and one for daily notes —
and move between them freely. Only one is active at a time.

**Status bar switcher.** The active vault's name appears as a switcher in the
interface. Click it to see all your vaults, switch to one (a check marks the
active vault), or add a new one with **Open vault…** or **Create vault…**.
**Remove vault** (the trash icon) takes a vault out of the list — it does **not**
delete any files on disk; the folder stays exactly where it is.

**Settings.** The same controls live in **Settings → Vault** (`⌘,`), which also
shows the active vault's full path on disk and lets you open, create, or remove a
vault.

Switching vaults reloads the sidebar, search, and everything else for that
folder. Each vault is independent — its own documents, its own history.

## Backing up and moving

Since a vault is just a folder, the simplest backup is the one you already know:
copy the folder. Time Machine, a synced drive, or a manual copy all work, because
there's nothing special to export.

To move a vault, move or copy the folder, then point φ at the new location with
**Open Vault…**. Your documents, images, and history travel together.

> φ can also back a vault's version history up to your own git remote on a
> schedule, entirely under your control. That's covered in
> [Versions & backup](versions-and-backup.md).
