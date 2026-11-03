---
title: AI agents and merging vaults
description: Connect Claude, Claude Code, Codex or Gemini CLI, and merge vaults from a plan.
---

# AI agents and merging vaults

An AI app on your computer can work with your vaults through φ Poiesis. Read [AI and your privacy](./ai-and-your-privacy.md) first: these apps are separate from φ Poiesis, and their own terms apply.

## Connect an app

1. Open **Settings → AI**.
2. Choose **Connect AI agents**. It lists the apps it found (Claude, Claude Code, Codex and Gemini CLI) and the settings file each one changes.
3. Tick the ones you want and choose **Connect**. φ Poiesis keeps a backup of each file.
4. Restart those apps.

For another app, choose **Copy setup for another app**.

<img src="/img/app/ai-connect-light.png" alt="The Connect AI agents sheet, listing each app and the file it changes." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-connect-dark.png" alt="The Connect AI agents sheet, listing each app and the file it changes." width="1600" height="1000" loading="lazy" decoding="async" />

## Choose what agents may do

Everything is off until you turn it on. **Settings → AI** lists your vaults, and each has four levels, one click away:

- **Off**: agents can't see the vault.
- **Read**: they can look, and change nothing.
- **Assist**: they can also leave margin notes, build the story bible, write new notes to your Inbox and propose merges.
- **Full**: every switch below, including editing notes, the Trash and applying plans.

Changes apply on an agent's next call, with no restart. **All vaults** sets them all at once, and asks first if you choose **Full**. For single switches, choose **Fine-tune** beside a vault. **Default permissions for other vaults** applies to any vault that hasn't set its own.

| Switch | What it allows |
|---|---|
| **Let AI agents read this vault** | Search and read, except the journal and Morning Pages. The others need this one. |
| **Organize** | Tag and file documents, and reorder projects. |
| **Update tasks and cards** | Mark them done, set due dates and priority, move and archive cards. |
| **Edit notes** | Change notes' text. Each edit saves a version labelled **AI edited**. |
| **Leave margin notes** | Comment on a passage, in a piece too, marked **From an agent**. The words never change. |
| **Build the story bible** | Fill in characters, world entries and chapter synopses. What you've written yourself stays as it is. |
| **Fill in book details** | Subtitle, series, keywords, language and description, where they're empty. Never the title, people, rights or ISBNs. |
| **Edit cards** | Change a card's title and notes. |
| **Move notes to the Trash** | One note at a time, and you can restore it. |
| **Create** | Each of notes, folders, boards, cards and empty outlines has its own switch. |
| **Propose merges** | Plan merging vaults or repeated notes. |
| **Let agents apply plans** | Approve a plan in the agent's chat. |

Agents can never change the words of a piece, see the journal or Morning Pages, or delete anything for good. Nothing is removed in bulk, except through a merge plan you approve.

<img src="/img/app/ai-vault-light.png" alt="The vault list in Settings → AI, with Off, Read, Assist and Full beside each vault, and one vault's switches open." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-vault-dark.png" alt="The vault list in Settings → AI, with Off, Read, Assist and Full beside each vault, and one vault's switches open." width="1600" height="1000" loading="lazy" decoding="async" />

## What agents can look at

With **Read** on, an agent can read a whole project in order, a character's sheet and every chapter that names them, your places, lore and events, your highlights and margin notes, and past versions of a document. It can also see your words by day, count overused words and repeated phrases, and find loose ends such as broken links and missing synopses. It can preview what exporting a project would meet, but only you can export.

Many task changes can go in one plan, which you apply in one click.

Some apps also offer ready-made workflows, such as a continuity pass or an editor's letter. They use the same switches.

## Merge vaults from a plan

Ask an agent or Ariadne to plan a merge. Nothing changes until you approve it. The source vaults aren't changed, and when merging into an existing vault, a version of it is saved first.

- **In Ariadne**, the plan appears in the chat. Make your choices and choose **Apply** or **Discard**.
- **In an outside agent**, it shows you the plan in its own chat. You can apply it from the plans list in the Ariadne panel, which appears even if Ariadne isn't set up.
- **To approve it in the agent's chat**, turn on **Let agents apply plans** for every vault involved. φ Poiesis needs to be open, and a new vault goes beside the first vault it comes from.

:::caution
With **Let agents apply plans** on, the app's own permission prompt is your only check. Don't set that tool to always allow.
:::

<img src="/img/app/ariadne-plan-light.png" alt="A merge plan in the chat, with its counts, Discard and Apply." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-plan-dark.png" alt="A merge plan in the chat, with its counts, Discard and Apply." width="1600" height="1000" loading="lazy" decoding="async" />
