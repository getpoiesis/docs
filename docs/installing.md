---
title: Install φ
description: Download φ for macOS, Windows or Linux, and keep it up to date.
---

# Install φ

φ runs on macOS, Windows and Linux. After you install it, φ tells you when
there is a new version.

## Install φ

1. Open the [download page](https://getpoiesis.com/download). It offers the
   right file for the computer you are using. The files for other systems
   are on the same page.
2. Download the file.
3. Install it. The steps for your system are below.
4. Open φ. Your system lists it as **φ Poiesis**. To find it, type "poiesis"
   in Spotlight or the Start menu.
5. [Create your first vault](./getting-started).

## What you need

| System | Version |
| --- | --- |
| **macOS** | 13 (Ventura) or later, on Apple Silicon or Intel |
| **Windows** | 10 or 11, 64-bit |
| **Linux** | A modern 64-bit distribution. The AppImage runs almost anywhere; the `.deb` is for Debian and Ubuntu. |

## On a Mac

1. Download the `.dmg` for your Mac: **Apple Silicon** or **Intel**. To
   check which one you have, open the Apple menu and choose **About This
   Mac**. A chip named "Apple M…" is Apple Silicon.
2. Open the `.dmg`.
3. Drag φ into **Applications**.
4. Open φ from Applications or Spotlight.

The Mac versions are signed and notarised by Apple. They open without an
"unidentified developer" warning.

## On Windows

1. Download the installer (`.exe`).
2. Run it. You can choose where φ is installed.
3. Windows SmartScreen may say that φ is from an unrecognised publisher.
   This is because φ isn't code-signed yet. Click **More info**, then **Run
   anyway**. You only need to do this once. The download comes directly from
   φ's own releases.
4. Open φ from the Start menu.

## On Linux

There are two files to choose from:

- The **AppImage** is simpler, and it updates itself.
- The **`.deb`** installs like other Debian and Ubuntu packages. To update
  it, you install the newer `.deb` yourself.

**AppImage.** Make the file executable, then double-click it:

```bash
chmod +x poiesis-*.AppImage
./poiesis-*.AppImage
```

You can also do this without a terminal: right-click the file →
**Properties** → **Permissions** → **Allow executing file as program**.

**`.deb`.** Install it with:

```bash
sudo dpkg -i poiesis-*.deb
```

Then open **φ Poiesis** from your applications menu.

## Keep φ up to date

φ checks for a new version a few seconds after it opens, and every six hours
after that. It never downloads an update without asking you. When there is
an update, a small banner appears:

1. The banner says **A new version (…) is available.** Click **Download**
   when you are ready.
2. The banner shows **Downloading update… %** while the download runs.
3. The banner says **Update … ready to install.** Click **Restart &
   install**. Or close the banner and keep writing: φ installs the update
   the next time you quit.

This works on macOS, on Windows and with the Linux AppImage. If you use the
`.deb`, download and install the newer version yourself.

To check for an update now:

- **On a Mac:** open the **φ Poiesis** menu and choose **Check for
  Updates…**.
- **On Windows and Linux:** press `Ctrl+P` and run **Check for updates…**.

φ shows **Checking for updates…**. Then one of three things happens:

- φ offers the update.
- φ says **φ is up to date.**
- φ says **Couldn't check for updates.** This means it can't reach the
  download server, for example because you're offline.

:::note Still on 0.8.2 or older? Download φ again

Version 0.9.0 changed how your system identifies φ. Because of this, version
0.8.2 and older can't update themselves. They keep saying that φ is up to
date. Download the current version from the
[download page](https://getpoiesis.com/download) and install it over the one
you have. You only need to do this once.

Your vaults, settings, dictionaries and history are not changed. On a Mac,
macOS asks one more time for access to the folder your vault is in. On
Windows, the new φ is listed as a separate program, so uninstall the old one
from **Add or remove programs**.

:::

## See also

- [Your first vault](./getting-started)
- [Settings](./settings)
- [Vaults](./vaults)
