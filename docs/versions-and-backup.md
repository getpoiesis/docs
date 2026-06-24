---
title: Versions & backup
sidebar_position: 13
---

# Versions & backup

Your writing is saved continuously, and φ keeps a history so you can step back to
any earlier draft. Nothing leaves your Mac unless you set up a remote yourself.

## How saving works

Every edit autosaves and is verified after each write — you never press Save to
keep your work. (`⌘S` is there if you want it, but it's rarely needed.) The
status bar shows **Saved** when the file is on disk.

On top of saving, φ records **versions**: point-in-time copies you can browse and
restore.

## Two kinds of version

- **Checkpoints** — created automatically as you write: on a regular interval,
  when you go idle, and when you switch away from a document. These capture
  progress without any effort on your part.
- **Snapshots** — named versions you create on purpose to mark a milestone
  (the end of a chapter, a finished draft). Press `⌘⇧S`, or use **Save
  version…** from the command palette (`⌘P`), and give it a name.

## The version history panel

Open it with `⌘]` (or the clock icon in the top bar) to see this document's
history, grouped by day — Today, Yesterday, and so on.

- **Browse** — click any version to preview its full content in the editor area.
  Filter by type (All, Snapshots, Checkpoints, Restores) or search by name.
- **See what changed** — with a version open, choose **Show changes** to view a
  diff against the current version. You can tune how precisely changes are
  highlighted in **Settings → Editor → Versions**.
- **Restore** — bring an older version back as the live document. Your current
  content is saved as a new version first, so nothing is ever lost.

## Native snapshots vs git

Each vault has its own versioning **backend**, chosen in **Settings →
Versioning**:

- **Native** — local snapshots stored alongside your vault. No git required;
  works out of the box. There's a per-document history limit (older snapshots are
  pruned to keep disk use bounded), which you can adjust.
- **Git** — full, unlimited history plus the option to back up off-machine.
  Choose this if you're comfortable with git.

**If git isn't installed**, φ stays on Native and tells you so — versioning keeps
working, you simply don't get git's unlimited history or remote backup. The
status bar shows **git unavailable** in that case. Install git to unlock those
features.

> Switching a vault to git runs `git init` and commits on a schedule. To return
> to Native later you must remove the `.git` folder in Finder yourself. See the
> notes in the convert dialog before you switch.

## Off-machine backup with a git remote

On the git backend you can push your history to your own remote (GitHub, GitLab,
or any git host) so a copy lives somewhere other than your Mac. In **Settings →
Versioning → Git backup**:

- Set a **Backup remote URL** to push to.
- Turn on **Auto-push backups** to push new commits on an interval, or press
  **Backup now** (also **Back up now** in the command palette) to push on demand.
- Optionally set a dedicated **commit name/email** and an **SSH key path** so this
  work stays off your main account, and **sign commits** for a Verified badge.

Use a private repository and a dedicated identity for this.

## A vault is just files

Because a vault is a plain folder of `.poiesis` files (with an `assets/` folder
and the version history), any backup method you already trust works too — Time
Machine, a cloud-synced folder, or a manual copy. φ's versioning is one option,
not the only one.
