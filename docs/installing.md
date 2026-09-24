---
title: Installing φ
sidebar_position: 1
---

# Installing φ

φ runs on **macOS, Windows, and Linux**. Get the build for your system from the
**[download page](https://getpoiesis.com/download)** — it offers the right file
for the computer you're visiting from, with every other option a click away.

:::warning φ is in alpha
You're using early software — expect rough edges. Your writing itself is always
safe: it's plain files on your computer, saved continuously and versioned.
:::

:::danger Already running 0.8.2 or older? Download φ again
**0.9.0 changed how your operating system identifies φ**, and that broke the
update you would normally be offered. An older copy will keep telling you it is
up to date, forever. Download the current version from the
[download page](https://getpoiesis.com/download) and install it over the one you
have — once. Updates work normally again from 0.9.0 onward.

Your work is untouched: vaults, settings, dictionaries and history are all keyed
to the app's name, not its identifier. Two things reset once — **macOS** asks
again for access to the folder your vault is in, and **Windows** treats this as a
separate program, so uninstall the earlier φ or it sits beside this one in Add or
remove programs.
:::

## System requirements

- **macOS** 12 (Monterey) or later — Apple Silicon or Intel.
- **Windows** 10 or 11 (64-bit).
- **Linux** — a modern 64-bit distribution. The AppImage runs almost anywhere; a
  `.deb` is provided for Debian and Ubuntu.

## macOS

1. Download the `.dmg` — **Apple Silicon** or **Intel** to match your Mac. (Not
   sure which you have? Apple menu → **About This Mac**; a chip listed as "Apple
   M-series" is Apple Silicon.)
2. Open the `.dmg` and drag **φ** into your **Applications** folder.
3. Launch it from Applications or Spotlight.

The macOS builds are **signed and notarized by Apple**, so they open without a
Gatekeeper "unidentified developer" warning.

## Windows

1. Download the installer (`.exe`) and run it. You can choose the install
   location during setup.
2. φ isn't code-signed yet, so Windows **SmartScreen** may warn that it's from an
   unrecognized publisher. Click **More info → Run anyway** to continue — you only
   need to do this once.
3. Launch φ from the Start menu.

:::note Why the SmartScreen prompt?
A code-signing certificate is something we'll add later. Until then the prompt is
expected; the download comes straight from our own releases.
:::

## Linux

φ ships in two formats. The **AppImage** is the simplest and **updates itself**;
the **`.deb`** integrates with Debian and Ubuntu but is updated by reinstalling.

### AppImage (recommended)

1. Download the `.AppImage`.
2. Make it executable — in a terminal:
   ```bash
   chmod +x poiesis-*.AppImage
   ```
   …or right-click the file → **Properties → Permissions → Allow executing file
   as program**.
3. Double-click it, or run `./poiesis-*.AppImage`.

### Debian / Ubuntu (`.deb`)

```bash
sudo dpkg -i poiesis-*.deb
```

Then launch **φ** from your applications menu.

## Staying up to date

φ checks for updates on its own and installs them quietly in the background:

- **macOS**, **Windows**, and the **Linux AppImage** update themselves — you're
  prompted to restart when a new version is ready.
- The **Linux `.deb`** does **not** auto-update. Download and install the newer
  `.deb` when you want to upgrade, or switch to the AppImage.

You can also check on demand — **Help → Check for updates** (on macOS, the **φ**
app menu).

## Next steps

With φ installed, [Getting started](getting-started.md) walks you through your
first vault and first page.
