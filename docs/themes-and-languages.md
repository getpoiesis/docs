---
title: Themes & languages
sidebar_position: 19
---

# Themes & languages

φ should feel like *your* writing room — in the light or the dark, tinted the
way you like, in the language you think in. All of this lives under
**Settings** (`⌘,`) → **Appearance**.

## Light, dark, or system

Under **Theme**, set **Appearance** to **Light**, **Dark**, or **System**.
System follows your Mac's appearance and switches with it — light by day, dark
by night, automatically.

You can also flip the current mode without opening Settings: open the command
palette (`⌘P`) and choose **Cycle theme (system / light / dark)**, or use
**Toggle Theme** in the View menu.

## Color themes

A *color theme* tints the interface — backgrounds, text, accents, the wiki-link
color, code syntax colors, and so on. The light/dark mode above decides which
side of a theme applies; the color theme decides the palette.

### The built-in φ theme

φ ships with one official theme, **Phi**: neutral grays with a pure white or
black page. It's the default and is marked **Official** in the list. It can't
be removed.

### Installing a community theme

Every theme other than Phi is a *community theme* — a small JSON file you
install. It lives outside the app, in your themes folder, so adding or removing
one never touches the application itself.

To install one:

1. In **Settings → Appearance → Color theme**, click **Install theme…**.
2. Select the theme's `.json` file.

The theme appears in the list right away and applies when you select it. To see
where themes are kept (for example to drop a file in by hand, or to back them
up), click **Open themes folder**. Files you place there are picked up the next
time you open Settings.

Remove a community theme with the trash icon next to it; its file is deleted
from the themes folder.

### How themes work (and why they're safe)

A theme supplies a `light` and/or a `dark` set of colors. Any color a theme
leaves out falls back to the built-in Phi value, so a partial theme is perfectly
fine. Themes can only set **colors** — fonts, spacing, and layout aren't
themeable — and every value is validated as a safe CSS color when the file is
installed, so an untrusted theme file can't do anything beyond changing a color.

### The themes gallery

Officially supported community themes live in the **φ themes gallery**:

> **[github.com/getpoiesis/themes](https://github.com/getpoiesis/themes)**

It's the home for ready-made palettes — Nord, Dracula, and friends — packaged as
installable theme files. Browse it for a palette you like, download the `.json`,
and install it as above.

**Contributions are welcome.** Made a theme you're proud of? Open a pull request
to the gallery and share it — well-made themes are added for everyone. The repo's
README has the (small) theme-file format and the contribution guidelines.

## Languages

φ's interface can run in different languages.

### Switching language

Under **Settings → Appearance → Language**, set **Interface language**.
**System default** follows your Mac; otherwise pick a language from the list.

The built-in languages are:

- **English** (English)
- **Spanish** (Español)
- **French** (Français)

### Community language packs

Like themes, additional languages are installable JSON files kept in your own
locales folder, outside the app.

- **Install a language…** — select a language `.json` file to add it. It appears
  under **Community** in the language list.
- **Export English template…** — saves a file with every interface string in
  English. Translate the values and install the result to run φ in your language
   — or share it so it can ship for everyone.
- **Open folder** — reveals where installed languages live.

Remove a community language with the trash icon beside it.

### Missing translations fall back to English

A translation doesn't have to be complete to be useful. Any string a language
pack doesn't translate falls back to English, so φ is always fully labeled even
with a partial translation in place.
