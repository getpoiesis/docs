---
title: Settings
description: Every section of φ's Settings, and what each setting changes.
---

# Settings

φ keeps its settings in one window: the sections down the left, the settings
of the one you pick beside them. Changes take effect straight away; there's
nothing to save.

<img src="/img/app/settings-light.png" alt="Settings open on Appearance: theme, interface size, colour theme and sidebar" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Settings open on Appearance: theme, interface size, colour theme and sidebar" width="1600" height="1000" loading="lazy" decoding="async" />

## Open Settings

- Click the sliders button at the top of the sidebar, beside the vault's name.
- Press `⌘P` and choose **Open settings**.
- On a Mac, press `⌘,`, or choose **Preferences…** in the app menu.

| Section | What it holds | Applies to |
| --- | --- | --- |
| **Appearance** | Light or dark, interface size, colour theme, the sidebar | The whole app |
| **Editor** | The writing surface: font, size, focus, dates, streak, code, versions | The whole app |
| **Setup** | The signals φ gives back and the places each mode offers | The open vault |
| **Language** | The app's language, spelling, your dictionary | The whole app, plus a **This vault** part |
| **Versioning** | How history is kept and backed up | The open vault |
| **Vault** | Which modes the vault has, and adding or removing vaults | The open vault |
| **Templates** | Your templates and their variables | This vault and every vault |
| **Shortcuts** | The main keyboard shortcuts | — |
| **Data** | The health of your files, migration backups, a reset | The whole app |

## Appearance

How φ looks. More on colour themes in
[Themes & languages](./themes-and-languages).

| Setting | What it does |
| --- | --- |
| **Appearance** | **System**, **Light** or **Dark**. System follows your computer and switches with it. |
| **Interface size** | **100%**, **115%**, **130%** or **150%**. Scales everything, icons included. |
| **Colour theme** | The installed themes, each with a small preview. **Install theme…**, **Open themes folder** and **Browse official themes…** add more. |
| **Sidebar in light theme** | **Dark** (the default, so the page is the brightest thing on screen) or **Light**. In the dark theme the sidebar is always dark. |
| **Sanctuary dims the rest** | In [Sanctuary](./focus-and-writing-modes), only the sentence you're in stays at full strength, or the paragraph if **Focus typing** says so. Turn it off to keep everything lit. |

## Editor

The writing surface.

| Setting | What it does |
| --- | --- |
| **Body font** | The typeface you write in, grouped into Serif, Sans and Mono. Fonts marked *system* come from your computer; the others come with φ and are embedded in ebooks. |
| **Font size** | 14 to 26 px. **Reset** goes back to the default. |
| **Line height** | 1.3 to 2.2. **Reset** goes back to the default. |
| **Focus typing** | **Off**, **Sentence** or **Paragraph**: dims everything but the sentence or paragraph you're in. |
| **Show Markdown** | Shows the `**`, `#` and `[ ]( )` marks faintly around the formatting in the line you're writing. Your documents don't change. |
| **Typewriter scrolling** | Keeps the line you're writing in the middle of the window. |
| **Date format** | How dates read across the app: *June 11, 2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026*, or **Custom…**. Only the display changes, never the stored day. |
| **Custom pattern** | Appears with **Custom…**. Takes date-fns tokens (`yyyy`, `MMM`, `d`, `EEEE`…) and shows today's date as you type. |
| **Minimum words / day** | Under **Writing streak**: how many words make a day count towards your streak (50 or more). |
| **Indent using** | Under **Code**: **Spaces** or **Tabs** in code blocks. |
| **Indent width** | Under **Code**: spaces per indent, 1 to 8, and how wide a tab shows. |
| **Version diff detail** | Under **Versions & import**: when you preview an old version, mark changes by **Word** or by **Character**. |
| **Imported images** | Under **Versions & import**: **Copy to vault** puts images you bring in in the vault's `assets/` folder; **Inline** keeps them inside the document, which makes it larger. |

## Setup

What φ shows you in this vault. Turning something off hides it, never your
work. [Setup](./setup) covers it in full.

| Setting | What it does |
| --- | --- |
| **Start sessions automatically** | The clock starts at your first keystroke. Off, it runs only when you start it. |
| **Readability statistics** | Reading grade and sentence length in a document's statistics. |
| **Streak** | **Flame and count**, **Plain days** or **Off**. |
| **Week starts on** | Any day of the week: the first column of the calendar and the heatmap, and the week your pace is counted in. |
| **Weekly pace** | **None**, or a number of days a week to aim for. A missed day never resets it. |
| **Modes** | Open **Write**, **Notes** or **Journal** to choose the places it offers (Characters, Authors, Research, Boards, Graph, Calendar, morning pages), change the signals for that mode only, and turn **Checklists** on or off. Each reads **Follows the vault** or **Differs**; **Follow the vault again** undoes the difference. |
| **Saved setups** | **Save as…** keeps this setup under a name. **Use in this vault** or **Use in another vault…** puts it on a vault; you can also rename or delete it. |

## Language

| Setting | What it does |
| --- | --- |
| **Interface language** | The language φ speaks: **System default**, a language that comes with φ, or one you installed. **Install a language…**, **Export English template…** and **Open folder** sit below it. |
| **Check spelling** | Underlines misspelled words as you write. |
| **Engine** | **Native** uses your computer's spell-checker; **Enhanced** uses φ's own dictionaries, so results are the same on every system. |
| **Languages** | Which languages to check. With **Native** on a Mac, the system picks the language by itself. |
| **Default for this vault** | Under **This vault**: **Use global**, **Native** or **Enhanced** for this vault only. With **Enhanced**, you can also pick its languages. |
| **Personal dictionary** | Words you've added, each with a trash button to remove it. |
| **Dictionary & Thesaurus** | **Install dictionary pack…**, and the packs you have with their word counts. |

See [Themes & languages](./themes-and-languages), [Spelling](./spelling) and
[Dictionary & thesaurus](./dictionary).

## Versioning

These settings belong to the open vault, and its name is shown at the top.
Each vault keeps its own history.

| Setting | What it does |
| --- | --- |
| **Backend** | **Native**: local snapshots, nothing to install. **Git**: full history and optional backup to a remote. Until git is installed the choice reads **Git (needs git)**. Switching to git asks first and brings your history across; to go back, you'd remove the vault's `.git` folder yourself. |
| **Auto-checkpoint every** | How often your edits become an automatic version: type a number of minutes, pick **1**, **5**, **10** or **30**, or **Off**. Versions you save by hand aren't affected. |
| **Local history limit** | Native only: the most versions kept per document. Older ones are removed. |

With **Git**, a **Git backup** group appears:

| Setting | What it does |
| --- | --- |
| **Commit name** · **Commit email** | Who φ commits as. Blank uses your computer's git user. |
| **SSH key path** | The private key φ pushes with, with **Browse…**. The key file must be `chmod 600`. |
| **Backup remote URL** | Where to push. Blank uses the repository's existing remote. |
| **Auto-push backups** | Pushes new commits on a schedule, every **Push every** minutes. |
| **Sign commits** | Signs commits so they show as verified, with a **Signing method** (SSH or GPG) and a **Signing key**. |
| **Backup now** | Says whether you're up to date, have commits waiting, or have no remote yet. **Push now** pushes straight away. |

If the vault is in a cloud folder, φ keeps its git repository on this computer
instead of inside the vault. φ on iPhone and iPad (coming soon) never runs git; it keeps
versions in the vault's `.poiesis-history`. More in
[Versions & backup](./versions-and-backup).

## Vault

| Setting | What it does |
| --- | --- |
| **Active vault** | The open vault's name and folder. |
| **Spaces** | Which of **Write**, **Notes** and **Journal** the vault shows (at least one), and where it **Opens on**: **Home** or one of its modes. |
| **Manage** | **Open vault…** and **Create vault…** add a vault. **Remove vault…** asks how: **Unlink (keep folder)** takes it out of φ and leaves the folder alone; **Move to Trash** moves the whole folder to your computer's Trash, where you can still get it back. |

See [Vaults](./vaults).

## Templates

The variables a template can use, shown as chips: `<% today %>`,
`<% tomorrow %>`, `<% yesterday %>`, `<% time %>` and `<% cursor %>` (where
the caret lands). Below them, two lists, **This vault** and **Global
templates**, each template with a pencil to edit it and a trash button to
remove it. **Install a template…** adds a template file; **Open templates
folder** shows where they're kept. See [Templates](./templates).

## Shortcuts

The main keyboard shortcuts, grouped as **Move around**, **Documents**,
**Writing** and **Format**: the same card `⌘/` shows. Type in **Search
commands…** to narrow the list. Every shortcut is on
[Keyboard shortcuts](./keyboard-shortcuts).

## Data

| Setting | What it does |
| --- | --- |
| **Vault health** | Whether your documents use the current file format. If some are older, **Migrate all notes** updates them, saving a backup of each first. |
| **Backups** | Appears once something has been migrated: how many backups there are and their size, with **Open backups folder** and **Clear old backups**. |
| **Reset all settings…** | Puts every app setting (theme, editor, layout, graph, dates) back to its default, after asking. Your documents, vaults and writing records are kept. |

## See also

- [Setup](./setup): signals, places and modes in full.
- [Themes & languages](./themes-and-languages)
- [Keyboard shortcuts](./keyboard-shortcuts)
- [Versions & backup](./versions-and-backup)
