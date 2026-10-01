---
title: Install φ
description: Download φ for macOS, Windows or Linux, and keep it up to date.
---

# Install φ

φ runs on macOS, Windows and Linux. The
[download page](https://getpoiesis.com/download) offers the right file for the
computer you're visiting from, with every other option a click away. Once it's
installed, φ tells you when there's a new version.

## Install φ

1. Open the [download page](https://getpoiesis.com/download) and download the
   file it offers.
2. Install it the way your system expects (see below).
3. Open φ. Your system lists it as **φ Poiesis**, so typing "poiesis" in
   Spotlight or the Start menu finds it.
4. [Create your first vault](./getting-started).

## What you need

| System | Version |
| --- | --- |
| **macOS** | 12 (Monterey) or later, on Apple Silicon or Intel |
| **Windows** | 10 or 11, 64-bit |
| **Linux** | A modern 64-bit distribution. The AppImage runs almost anywhere; the `.deb` is for Debian and Ubuntu. |

## On a Mac

1. Download the `.dmg` for your Mac: **Apple Silicon** or **Intel**. Not sure
   which? Apple menu → **About This Mac**: a chip named "Apple M…" is Apple
   Silicon.
2. Open the `.dmg` and drag φ into **Applications**.
3. Open it from Applications or Spotlight.

The Mac builds are signed and notarised by Apple, so they open without an
"unidentified developer" warning.

## On Windows

1. Download the installer (`.exe`) and run it. You can choose where φ is
   installed.
2. φ isn't code-signed yet, so Windows SmartScreen may say it's from an
   unrecognised publisher. Click **More info**, then **Run anyway**. You only
   need to do this once, and the download comes straight from φ's own
   releases.
3. Open φ from the Start menu.

## On Linux

The **AppImage** is the simpler choice and updates itself. The **`.deb`** fits
in with Debian and Ubuntu, but you update it by installing the newer `.deb`.

For the AppImage, make the file executable, then double-click it:

```bash
chmod +x poiesis-*.AppImage
./poiesis-*.AppImage
```

Or right-click the file → **Properties** → **Permissions** → **Allow executing
file as program**.

For the `.deb`:

```bash
sudo dpkg -i poiesis-*.deb
```

Then open **φ Poiesis** from your applications menu.

## Keep φ up to date

φ looks for a new version a few seconds after it opens, and every six hours
after that. It never downloads one without asking. When there's an update, a
small banner says so:

1. **A new version (…) is available.** Click **Download** when it suits you.
2. **Downloading update… %** shows how far it has got.
3. **Update … ready to install.** Click **Restart & install**, or close the
   banner and carry on: a downloaded update is installed the next time you
   quit φ.

This works on macOS, Windows and the Linux AppImage. For the `.deb`, download
and install the newer version yourself.

To check now:

- **On a Mac:** the **φ Poiesis** menu → **Check for Updates…**.
- **On Windows and Linux:** press `Ctrl+P` and run **Check for updates…**.

φ shows **Checking for updates…**, then offers the update, says **φ is up to
date.**, or says **Couldn't check for updates.** when it can't reach the
download server, for example when you're offline.

:::note Still on 0.8.2 or older? Download φ again

Version 0.9.0 changed how your system identifies φ, and that broke the update
an older copy would offer: it will keep saying it's up to date. Download the
current version from the [download page](https://getpoiesis.com/download) and
install it over the one you have. You only need to do this once.

Your vaults, settings, dictionaries and history are untouched. On a Mac,
macOS asks once more for access to the folder your vault is in. On Windows,
the new φ is listed as a separate program, so uninstall the old one from
**Add or remove programs**.

:::

## See also

- [Your first vault](./getting-started)
- [Settings](./settings)
- [Vaults](./vaults)
