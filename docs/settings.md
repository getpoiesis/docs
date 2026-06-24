---
title: Settings
sidebar_position: 18
---

# Settings

φ keeps its settings in one place, grouped so you rarely have to hunt. Open
Settings with `⌘,` (or **Preferences…** in the app menu). A column on the left
lists six categories; pick one and its options appear on the right.

The categories are **Appearance**, **Editor**, **Versioning**, **Vault**,
**Templates**, and **Data**.

Most settings apply to the whole app and take effect immediately. The exception
is **Versioning**, which is configured *per vault* — see below.

## Appearance

How φ looks: light or dark, how large the interface is, which color theme it
uses, and what language it speaks. Color themes and languages have their own
page — see [Themes & languages](themes-and-languages.md).

### Theme

- **Appearance** — choose **System**, **Light**, or **Dark**. System follows
  your Mac's setting and switches with it.
- **Interface size** — scales the whole UI, including icons, between **100%**,
  **115%**, **130%**, and **150%**. Use this if the app feels too small (or too
  large) on your display.

### Color theme

A list of installed color themes. The built-in **Phi** theme is marked
**Official**; community themes you install appear below it and can be removed
with the trash icon. **Install theme…** adds a theme JSON file, and **Open
themes folder** reveals where they live. Full details on the
[Themes & languages](themes-and-languages.md) page.

### Language

The **Interface language** of the app. Built-in languages are English, Spanish,
and French; **System default** follows your Mac. You can **Install a language…**
(a community translation file), **Export English template…** to start your own,
and **Open folder** to see where languages are kept. Missing translations fall
back to English.

### Sidebar

- **Show recent documents** — show or hide the Recent section at the top of the
  file sidebar.

## Editor

Everything about the writing surface itself.

### Writing

- **Body font** — the typeface for your text, grouped into Serif, Sans, and
  Mono. Bundled fonts embed in EPUB exports; system fonts are marked.
- **Font size** — editor body text, from 14 to 26 px. **Reset** returns it to
  the default.
- **Line height** — the space between lines, from 1.3 to 2.2. **Reset** returns
  it to the default.
- **Focus typing** — dim everything but the line you're on: **Off**,
  **Sentence**, or **Paragraph**.
- **Typewriter scrolling** — keep the caret vertically centered as you type.
- **Date format** — how dates display across the app. The stored day never
  changes; this only affects how it's shown. Choosing **Custom** reveals a
  **Custom pattern** field that uses date-fns tokens (`yyyy`, `MMM`, `d`,
  `EEEE`…), with today's date shown as a live preview.

### Writing streak

- **Minimum words / day** — a day counts toward your writing streak once you
  write this many words. The minimum is 50.

### Code

For code blocks.

- **Indent using** — **Spaces** or **Tabs**.
- **Indent width** — spaces per indent (and the display width of a tab), 1 to 8.
  2 and 4 are common.

### Versions & import

- **Version diff detail** — how precisely changes are highlighted when you
  preview a version: by **Word** or by **Character**.
- **Imported images** — when you bring in an image, either **Copy to vault**
  (into the vault's `assets/` folder) or keep it **Inline** as a data URI
  (self-contained, but larger documents).

### Dictionary & Thesaurus

Install and manage offline dictionary packs. This section has its own page —
see [Dictionary & thesaurus](dictionary.md).

## Versioning

**These settings apply to the active vault.** Each vault is its own repository
with its own backend, remote, and identity — so the name of the vault you're
configuring is shown at the top.

### Backend

Choose how history is kept:

- **Native** — local snapshots, no git required. This is the default.
- **Git** — full git history plus optional remote backup. Available only when
  git is installed on your Mac.

Switching to git is a power-user step: φ runs `git init` in the vault, commits
automatically on a schedule, and migrates your existing native history into git.
A confirmation dialog spells out the caveats first. Once a vault is a git
repository, φ keeps it on git; to go back to native you remove the `.git` folder
yourself.

### History

- **Auto-checkpoint every** — how often edits are committed as an automatic
  version. Set a number of minutes, pick a preset (1 / 5 / 10 / 30), or turn it
  **Off**. Manual snapshots and on-close saves are unaffected.
- **Local history limit** (native only) — the maximum number of versions kept
  per document. Older snapshots are pruned to bound disk use. Install git for
  unlimited history.

### Git backup (git backend only)

When a vault uses git, you can also configure how φ commits and where it backs
up:

- **Commit name** / **Commit email** — the identity φ commits as. Leave blank to
  use your machine's git user. A dedicated email keeps this work off your main
  GitHub graph.
- **SSH key path** — the private key φ uses to push (for example
  `~/.ssh/id_ed25519`). The key file must be `chmod 600`.
- **Backup remote URL** — the GitHub/GitLab/… remote to push to. Blank uses the
  repo's existing origin.
- **Auto-push backups** — push new commits to the remote on a regular interval.
  When on, set **Push every** (minutes).
- **Sign commits** — cryptographically sign commits so they show as *Verified*.
  Choose a **Signing method** (SSH or GPG) and a **Signing key**.
- **Backup now** — push immediately with **Push now**. The hint tells you
  whether you're up to date, have unpushed commits, or have no remote yet.

For more on versions and backup, see
[Versions & backup](versions-and-backup.md).

## Vault

About the vault you're working in.

- **Active vault** — the current vault's name and folder path.
- **Manage** — **Open vault…** and **Create vault…** to switch or add vaults,
  and **Remove vault…** to drop the active vault from φ. Removing a vault only
  forgets it; your files on disk are untouched.

See [Vaults](vaults.md) for the full picture.

## Templates

Reusable snippets with variables. This section lists your **vault templates**
(specific to the active vault) and **global templates** (available everywhere).
Edit one with the pencil icon or remove it with the trash icon. **Install a
template…** adds a template file, and **Open folder** reveals where global
templates are stored.

See [Templates](templates.md) for how variables work.

## Data

The health of your `.poiesis` files, migration backups, and a settings reset.

### Vault health

φ checks whether your documents are on the current schema. When everything is
up to date, it says so (with the schema and document versions). If some
documents use an older schema, **Migrate all notes** updates them — and a backup
is saved automatically before any document is migrated.

### Backups

Appears once a migration has run. Shows how many backup files exist and their
total size. **Open backups folder** reveals them; **Clear old backups** removes
older ones.

### Reset

**Reset all settings…** restores every app setting — theme, editor, layout,
dates, and so on — to its factory default. Your notes, vaults, and writing
records are not affected.
