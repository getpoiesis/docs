---
title: Vaults
---

# Vaults

A **vault** is where your writing lives. It is an ordinary folder on your computer
that holds your documents, the images you've added, and a version history. There
is no database and no cloud — just files in a folder you chose.

Because a vault is plain files, your work is yours: you can back it up, move it to
another machine, open it in twenty years, or peek inside the folder in your file
manager. Nothing leaves your computer unless you set up backup yourself.

## What's inside a vault

Open a vault folder and you'll see:

- **`.poiesis` files** — one per document. Each is a small JSON file holding your
  text and its metadata (title, tags, created date, and so on).
- **`assets/`** — images you insert are copied here, so a vault is
  self-contained. Move the folder and your pictures move with it.
- **`.trash/`** — documents you delete wait here. You can restore them from the
  **Trash** at the foot of the sidebar; anything left there is deleted for good
  after 30 days.
- **The version history** — every change is checkpointed so you can step back to
  an earlier draft. It lives in `.poiesis-history/`, or in a `.git` repository if
  you switch the vault to git. (See [Versions & backup](versions-and-backup.md).)
- **`.poiesis-vault.json`** — a small marker file that names the vault and
  remembers its spaces.

The names starting with a dot are hidden by default in most file managers. You
never have to manage any of this by hand; φ creates and maintains it for you.

## Creating or opening a vault

The first time you launch φ, it asks you to choose where your writing lives, with
two buttons: **Create a vault** and **Open a folder**. Both open your system's
folder picker (**Choose a vault folder**), where you can pick an existing folder
or make a new one — so a vault can sit anywhere you like: `~/Documents`, a synced
folder, an external drive, wherever suits you.

What happens next depends on the folder:

- **A folder that is already a vault** (it has a `.poiesis-vault.json`) opens as
  it is.
- **Any other folder** — empty or not — becomes a vault. φ adds `assets/`,
  `.trash/` and the marker file, and puts in a **Welcome to φ** note and a small
  sample project, **The Grey Morning**. Any `.poiesis` files already in the
  folder appear alongside them. Nothing that's already there is changed.

You can do the same later:

- The **vault's name** at the top of the sidebar → **Open another vault…** or
  **New vault…**.
- **File → Open Vault…** (`⇧⌘O`).
- **Settings** (`⌘,`) → **Vault** → **Manage** → **Open vault…** or **Create
  vault…**.

## Multiple vaults and switching

You can keep more than one vault — say, one for a novel and one for daily notes —
and move between them freely. Only one is open at a time.

**The vault menu.** Click the vault's name at the top of the sidebar. It lists
every vault you've added (a check marks the one you're in, and each says where it
lives — **Local**, or iCloud, Dropbox, Google Drive or OneDrive), then **Open
another vault…**, **New vault…**, **Show in Finder** and **Import…**.

**The vault switcher.** **File → Switch Vault…** (`⌥⌘O`) opens a small palette,
**Switch to a vault…**: type to narrow the list, and press Enter. The vault
you're in is marked **here now**; **Open another vault…** and **New vault…** sit
at the end.

Switching vaults reloads the sidebar, search, and everything else for that
folder. Each vault is independent — its own documents, its own history, its own
[setup](setup.md).

## Spaces: which modes a vault has

Not every vault needs all three modes. In **Settings → Vault → Spaces**, tick the
ones this vault uses — **Write**, **Notes**, **Journal** (at least one stays on).
A vault with only one mode shows no mode switch at all.

**Opens on** chooses where the vault starts: its **Home**, or one of its modes.

## Removing a vault

To take a vault out of φ, open it, then go to **Settings → Vault → Manage →
Remove vault…**. φ asks what you mean:

- **Unlink (keep folder)** — φ forgets the vault, and the folder stays exactly
  where it is, untouched. You can open it again any time.
- **Move to Trash** — φ forgets the vault **and moves the whole folder to your
  system's trash**, where you can still recover it until you empty the trash.

If it was the last vault, φ returns to the welcome screen.

## Vaults in a synced folder

A vault can live in iCloud Drive, Dropbox, Google Drive or OneDrive, and φ for
iPhone and iPad can open the same vault. Your documents are one file each and
sync safely. If you use git for version history, φ keeps a synced vault's git
repository on your computer, outside the vault, because a sync service copying a
repository file by file is how repositories break. See
[Versions & backup](versions-and-backup.md).

## Using a vault on several devices

Put the vault in a folder your devices share — iCloud Drive, Dropbox, Google
Drive, Mega, OneDrive, or a network drive — and open it everywhere, including in
φ on your iPhone or iPad. φ notices changes made on the other devices (usually
within a second) and updates the list, the open document and everything else on
its own.

- **Nothing is written over.** If the same document changed on two devices
  before they caught up with each other, both versions are kept: yours becomes a
  new document named “*title* (conflicted copy)” beside the original. Compare
  them, keep what you want, and delete the other.
- **Offline folders.** If the vault's folder goes away — a drive unplugged, a
  cloud folder offline — φ says so and keeps what you type, saving it as soon as
  the folder is back.
- **iCloud on a Mac.** Documents macOS keeps only in the cloud are downloaded
  when φ sees them, so they may take a moment to appear.

## Backing up and moving

Since a vault is just a folder, the simplest backup is the one you already know:
copy the folder. Time Machine, a synced drive, or a manual copy all work, because
there's nothing special to export.

To move a vault, move or copy the folder, then point φ at the new location with
**Open another vault…**. Your documents, images, and history travel together
(for a git vault in a synced folder, the repository stays on the computer that
made it).

:::tip Back up off-machine with git
φ can also back a vault's version history up to your own git remote on a
schedule, entirely under your control. That's covered in
[Versions & backup](versions-and-backup.md).
:::
