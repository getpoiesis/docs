---
title: Versions & backup
description: How φ saves as you write, keeps earlier versions you can compare and restore, and backs your history up to a place of your own.
---

# Versions & backup

φ saves as you write, and keeps a history of each document so you can go
back to any earlier draft. If you want a copy away from your computer, it can
also send that history to a backup of your own. Nothing leaves your computer
unless you set that up.

<img src="/img/app/versions-light.png" alt="A chapter open with the History tab beside it: Auto-saved, Save snapshot, and named snapshots and checkpoints grouped by day" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="A chapter open with the History tab beside it: Auto-saved, Save snapshot, and named snapshots and checkpoints grouped by day" width="1600" height="1000" loading="lazy" decoding="async" />

## Save a snapshot

A snapshot is a version you name, to mark a milestone: the end of a chapter,
a finished draft, the moment before a big cut.

1. Open the document.
2. Press `⌘⇧S`, or choose **Save version…** in the document's **⋮** menu.
3. Give it a name, such as "Second draft, Part Two".

It appears in the document's **History** tab, marked **Snapshot**.

## How φ keeps your work

- **Every edit saves itself** a moment after you stop typing. While it's
  saving, the foot of the sidebar says **Saving…**. There is no Save button
  to remember.
- **Checkpoints are made for you**: every five minutes while you work, when
  you close the window, and when φ updates your documents to a new file
  format. Change how often in **Settings** (`⌘,`) → **Versioning** →
  **Auto-checkpoint every**.
- **`⌘S`** saves at once and makes a checkpoint, if you like a point of your
  own to come back to.
- **Before a change across the vault.** When you replace a word in every
  document (see [Search & replace](./search-and-replace)), φ first saves a
  version of the whole vault, so the change can be undone.

## Find an old version

A document's history is in the **History** tab of the Info panel. To open
it:

- press `⇧⌘I` for the Info panel, then click **History**;
- choose **Version history** in the document's **⋮** menu; or
- right-click the document in a list and choose **Version history**.

**Auto-saved** at the top is a reminder that your edits are already safe, and
**Save snapshot** names a new version. Below, versions are grouped by day.
Each day's checkpoints fold into one line you can open, so snapshots stand
out. You can search versions by name, show **All**, **Snapshots**,
**Checkpoints** or **Restores**, and fold or unfold every day at once.

## Compare and restore

Click any version to open it in place of the document, read-only, under a
**Previewing version** bar.

| Button | What it does |
| --- | --- |
| **Show changes** | Marks what differs from the document now. Switch between **Side by side** and **In content**. In content, **Metadata changes** also lists changes to the title, tags, status and the like. **Hide changes** turns the marks off. |
| **Restore** | Makes this version the document again. What you have now is saved as a new version first, so nothing is lost. |
| **Back to current** | Returns to the document as it is now. `Esc` does the same. |

Changes are marked letter by letter. To mark whole words instead, choose
**Word** under **Settings** → **Editor** → **Version diff detail**.

## Choose where history is kept

Each vault keeps its history in one of two ways, chosen in **Settings** →
**Versioning** → **Backend**.

| Backend | What it gives you |
| --- | --- |
| **Native** | The default. It needs nothing installed. It keeps up to 50 versions of each document and clears out the oldest; change that in **Local history limit**. |
| **Git** | Unlimited history, and a backup to a place of your own. It's offered once git is installed on your computer; until then it reads **Git (needs git)**. |

Moving a vault to git is a one-way step, and φ explains it first in **Convert
this vault to git?**. Your existing history comes across. To go back to
**Native** later, you'd have to delete the vault's `.git` folder yourself.

If the vault is in a cloud folder such as iCloud Drive or Dropbox, φ keeps
its git history on this computer, outside the vault. Sync services copy
files one at a time in any order, which can break a git history; your
documents are one file each and travel safely. φ on iPhone and iPad uses the
same vault but never runs git: versions made there are kept in the vault's
`.poiesis-history` folder, which both apps share.

## Back up your history with git

With git, φ can send your history to a private repository on a service such
as GitHub or GitLab, so there's a copy somewhere other than your computer.
φ sends it in the background: a slow or unreachable service never holds up
your writing, and if a send stalls, φ gives up after two minutes and tries
again next time.

1. Make a private, empty repository on GitHub, GitLab or another git host.
   Copy its address (it looks like `git@github.com:you/novel.git`).
2. In φ, switch the vault to **Git** under **Settings** → **Versioning**.
3. Under **Git backup**, paste the address into **Backup remote URL**.
4. Turn on **Auto-push backups** and choose **Push every** (it starts at 15
   minutes).
5. Press **Push now** to send the first copy.

**Backup now** tells you whether you're **Up to date with the remote**, have
unpushed commits, or have no remote yet. You can also push from `⌘P` →
**Back up now (git push to remote)**.

The other settings under **Git backup** are for anyone who wants this work
kept apart from their main git account:

| Setting | What it's for |
| --- | --- |
| **Commit name** and **Commit email** | Who the history is recorded as. Blank uses your computer's git identity. |
| **SSH key path** | The private key φ pushes with, such as `~/.ssh/id_ed25519`, so it can push as a different account. The key file must be readable only by you (`chmod 600`). |
| **Backup remote URL** | Blank uses the repository's existing `origin`. |
| **Sign commits** | Signs each commit with an **SSH** or **GPG** key so the host shows it as verified. |

:::tip Use a private repository

Your history holds every draft. Back it up to a private repository, ideally
under an identity you use only for this.

:::

## A vault is plain files

A vault is an ordinary folder of `.poiesis` files, with an `assets` folder
for images and its version history, so any backup you already trust works
too: Time Machine, a synced folder, or a copy on a drive.

## See also

- [Vaults](./vaults): vaults on several devices, and what happens when two
  of them change the same document.
- [Search & replace](./search-and-replace)
- [Settings](./settings)
