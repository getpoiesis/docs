---
title: Vaults
description: The folders your writing lives in, how to move between them, and how to use one vault on several devices.
---

# Vaults

A **vault** is where your writing lives: an ordinary folder on your computer,
holding your documents, the images you've added and their history. There's
no database and no account. Because a vault is plain files, your work stays
yours: you can back it up, move it, sync it to your other devices, or open it
in twenty years.

## Make a vault

1. The first time you open φ, choose **Create a vault** or **Open a folder**.
   Later, click the vault's name at the top of the sidebar and choose **New
   vault…** or **Open another vault…**.
2. Pick a folder, or make a new one, in the window that opens. It can be
   anywhere: Documents, a synced folder, an external drive.
3. φ opens it. A folder that's already a vault opens as it is. Any other
   folder becomes one, with a **Welcome to φ** note and a small sample
   project, **The Grey Morning**. Nothing already in the folder is changed,
   and any `.poiesis` files in it appear in φ.

## What's in a vault folder

| In the folder | What it is |
| --- | --- |
| `.poiesis` files | Your documents, one file each. |
| `assets` | Images you add are copied here, so the vault is complete on its own. |
| `.trash` | Documents you delete, until you restore them from **Trash** at the foot of the sidebar. Anything left there is deleted for good after 30 days. |
| `.poiesis-history` or `.git` | The version history (see [Versions & backup](./versions-and-backup)). |
| `.poiesis-vault.json` | A small file that names the vault and remembers its settings. |

Names starting with a dot are hidden in most file managers. You never have to
touch any of this: φ looks after it.

## Switch between vaults

You can keep several vaults, say one for a novel and one for daily notes.
One is open at a time, and each has its own documents, history and
[setup](./setup).

- **The vault menu.** Click the vault's name at the top of the sidebar. It
  lists your vaults, each with where it lives (**Local**, iCloud, Dropbox,
  Google Drive or OneDrive), then **Open another vault…**, **New vault…**,
  **Show in Finder** and **Import…**.
- **The vault switcher.** **File** → **Switch Vault…** (`⌥⌘O`) opens a short
  list: type to narrow it and press Return. The vault you're in is marked
  **here now**.
- **File** → **Open Vault…** (`⇧⌘O`) opens a folder as a vault.

To choose which modes a vault has, go to **Settings** (`⌘,`) → **Vault** →
**Spaces** and tick **Write**, **Notes** or **Journal**; at least one stays
on. A vault with one mode shows no mode switch. **Opens on** chooses where
the vault starts: its **Home**, or one of its modes.

## Move work to another vault

**A document.** Choose **Move to vault…** in the document's **⋮** menu, or
right-click it in a list. Pick the vault; one that lacks the document's mode
is shown but can't be chosen. φ lists the documents connected to it (its
research, what it links to, what links to it), ticked to move along. Before
you move, it tells you what stays behind: the project it leaves, its cards on
boards, the characters it mentions (their names stay in the text) and its
version history.

**A project.** Choose **Move to vault…** in the project's **⋮** menu. The
project goes whole, with its parts and chapters in order, its goal, cover and
icon, and the characters kept for it alone. Tick whether its research pages,
its boards, and other characters its chapters mention (as copies) go too.

Afterwards a summary lists what moved. Nothing in the other vault is written
over: a file with a name already taken there is renamed. The originals go to
this vault's **Trash**, so you can change your mind.

**A whole vault.** To fold this vault into another, choose **Merge into
another vault…** in the vault menu. Every document, project, board,
character, author and template goes, with their images. Folders keep their
place; one whose name is already taken there gets this vault's name after
its own. Nothing here is removed. When it's done, you can keep the old vault
or choose **Remove "…"**. Its version history stays with its folder.

## Use a vault on several devices

1. Put the vault in a folder your devices share: iCloud Drive, Dropbox,
   Google Drive, Mega, OneDrive or a network drive. To move an existing
   vault, quit φ, move its folder there, then open it again with **Open
   another vault…**.
2. On each computer, open that folder with **Open another vault…**. On
   iPhone and iPad, open it in φ there.
3. Write anywhere. φ notices changes from your other devices within moments
   and updates the list and the open document on its own.

If the vault's folder goes away, because a drive is unplugged or a cloud
folder is offline, φ says **Can't reach** the vault and keeps what you type,
saving it as soon as the folder is back. On a Mac, documents iCloud keeps
only in the cloud are downloaded when φ sees them, so they may take a moment
to appear.

### When two devices change the same document

φ never writes one device's changes over another's. If a document changed on
two devices before they caught up, the document keeps one version and the
other is set aside. A line above the page says **A version from** that
device **is waiting**, and the document's row in the list carries a small
mark.

1. Press **Compare**. The waiting version opens beside the document as it is
   now, with the differences marked; switch between **Side by side** and
   **In content**.
2. Choose **Keep this one** to make the waiting version the document,
   **Keep the current** to let it go, or **Keep both** to keep it as a
   separate document named "*title* (conflicted copy)".

If several versions are waiting, they come one at a time, oldest first. Any
of your devices can settle them, including φ on iPhone and iPad.

:::note Git history stays on each computer

If the vault uses git for its history, φ keeps the git history on each
computer, outside the synced folder, because a sync service copying it file
by file can break it. See [Versions & backup](./versions-and-backup).

:::

## Remove a vault

Open the vault, then go to **Settings** → **Vault** → **Manage** → **Remove
vault…** and choose:

- **Unlink (keep folder)**: φ forgets the vault and leaves the folder exactly
  where it is. You can open it again any time.
- **Move to Trash**: φ forgets the vault and moves the whole folder to your
  computer's trash, where you can still recover it until you empty it.

If it was your last vault, φ goes back to the welcome screen.

## See also

- [Versions & backup](./versions-and-backup)
- [Importing](./importing): bring in writing from other apps.
- [Setup](./setup): what each vault shows.
