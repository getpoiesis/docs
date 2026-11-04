---
title: Ariadne
description: An assistant beside your writing, on your own key or a local model.
---

# Ariadne

Ariadne is an assistant that sits beside whatever you have open. It reads your work with you, answers questions about it, checks continuity and gives feedback in margin notes. It also keeps your story bible and your vault in order. It never writes your pieces, and it asks before it changes anything. Read [AI and your privacy](./ai-and-your-privacy.md) before you turn it on.

## Turn it on

1. Open **Settings → AI** and choose **Set up Ariadne**.
2. Choose a provider. You can read its privacy policy from the list.
3. Read the sheet that appears and choose **Turn on Ariadne**.
4. Add your API key if the provider needs one, then choose a model.

With Ollama, you need it running on this computer with a model that can use tools.

Each vault can use these settings or its own. Under **This vault** in **Settings → AI**, pick the vault and choose **Its own**.

<img src="/img/app/ai-consent-light.png" alt="The sheet to read before turning on Ariadne, with the provider's privacy policy." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-consent-dark.png" alt="The sheet to read before turning on Ariadne, with the provider's privacy policy." width="1600" height="1000" loading="lazy" decoding="async" />

## Open it

Use the bot button on the page's toolbar, or press **⌘G** then **A**. It stays open as you move around.

<img src="/img/app/ariadne-panel-light.png" alt="Ariadne open beside a chapter, with suggestions to start from." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-panel-dark.png" alt="Ariadne open beside a chapter, with suggestions to start from." width="1600" height="1000" loading="lazy" decoding="async" />

## Ask it about your work

Start from a suggestion in the panel, or ask in your own words:

- **What should I work on today?** It looks at your recent writing, your tasks and your open notes.
- **Check a project for continuity problems.** It compares the text with your characters and world, and quotes both passages so you can check.
- **Write me an editor's letter on a project.** What works, where it drags, and what it would ask you first.
- **Build a story bible from my manuscript.** It fills in characters, places, events and chapter synopses from what the text says.

With **Leave margin notes** on, it can comment on a passage, in a piece too. These notes are marked **From an agent** in your annotations, and they never change a word.

You can also ask it how φ Poiesis works. It answers from this guide, which it downloads the first time you ask and keeps on your computer, and it links you to the page.

## It remembers, if you agree

Tell Ariadne something lasting, such as how you work or a decision about the book, and she can offer to keep it for later chats. She asks before adding anything. You can read and change what she keeps under **What Ariadne remembers** in **Settings → AI**. It's stored in the vault.

## Sort your notes

Ask her to sort your Inbox, and she gives you one plan: file this here, tag this, star that. Untick what you don't want and choose **Apply**. Nothing moves until you do, and **Undo** on the card puts it back.

<img src="/img/app/ariadne-inbox-light.png" alt="One plan to sort the Inbox, with a tick beside each change, Discard and Apply." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-inbox-dark.png" alt="One plan to sort the Inbox, with a tick beside each change, Discard and Apply." width="1600" height="1000" loading="lazy" decoding="async" />

## Search the web

With Anthropic, Ariadne can search the web when a question needs it, with her sources linked. Anthropic runs the searches on your key. This can cost extra, so check Anthropic's own pricing and terms first. It's off until you turn on **Search the web** in **Settings → AI**. Your journal and Morning Pages stay out of it.

Other providers and local models don't search the web. Ariadne can look things up on Wikipedia instead, and says that's all she checked. It's off until you turn on **Look things up on Wikipedia** under **Advanced** in **Settings → AI**. Then only the words she looks up leave your computer, and only to Wikipedia.

<img src="/img/app/ai-web-search-light.png" alt="The Look things up on Wikipedia setting in Settings → AI, under Advanced, turned off." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-web-search-dark.png" alt="The Look things up on Wikipedia setting in Settings → AI, under Advanced, turned off." width="1600" height="1000" loading="lazy" decoding="async" />

To keep what she found, choose **Save as a research page** under her reply. The sources go with it.

## Use it on your selection

Select some text and click the bot on the toolbar. A small menu opens on the page, and the chat stays closed.

- For a word's meaning and synonyms from your dictionaries, without AI, use the [book beside this button](./dictionary.md).
- **Find synonyms** and **Find antonyms** ask Ariadne, using the sentence around the word. With a longer selection, you get **Find a replacement**.
- **Say it another way**, **Make it shorter** and **Check spelling and grammar** work within one paragraph.
- **Ask in the chat** takes the selection to the panel.

Click a word to use it. For a sentence, she asks first and nothing changes until you choose **Replace**. Undo takes it back. Only the selection and its paragraph are sent. The journal doesn't have this menu.

<img src="/img/app/ariadne-selection-light.png" alt="Replace your selection with this?, with Keep mine and Replace, over a selected sentence." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-selection-dark.png" alt="Replace your selection with this?, with Keep mine and Replace, over a selected sentence." width="1600" height="1000" loading="lazy" decoding="async" />

## Show me on screen

With **Control what's on screen** on, ask for something and Ariadne opens it: "show me the research for chapter three". It can close what's open too. When there are several, it lists them as links you can click.

## Keep typing while it works

You can send another message while Ariadne is busy, and it reads it at its next step. **Stop** keeps what it has said so far. Type `/` for commands, such as `/continuity`, `/timeline`, `/voices`, `/new` or `/help`.

<img src="/img/app/ariadne-timeline-light.png" alt="Ariadne pointing out a chapter set in February that comes after one set in March, and asking whether it is meant." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-timeline-dark.png" alt="Ariadne pointing out a chapter set in February that comes after one set in March, and asking whether it is meant." width="1600" height="1000" loading="lazy" decoding="async" />

## What each message sends

Models remember nothing between messages, so each one sends the whole chat again, and each step of a reply is a request of its own. That's why input is far larger than output.

The count in the panel's header shows new tokens. What your provider reused from its cache is listed separately when you hover over it. Your provider's own pricing says what each costs. Old results are shortened as a chat grows, and a long chat suggests starting a new one.

## Give it permission

Ariadne can only do what the vault's switches allow. They're all off until you turn them on, in the vault list in **Settings → AI**. Pick **Read**, **Assist** or **Full** for a vault in one click, or **Fine-tune** its switches. See [AI agents](./ai-agents.md). Each change also waits for you to choose **Allow** or **Not now**.

<img src="/img/app/ariadne-ask-light.png" alt="Ariadne asking to mark a card done, with its plan above." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-ask-dark.png" alt="Ariadne asking to mark a card done, with its plan above." width="1600" height="1000" loading="lazy" decoding="async" />

## Link a document

Type `[[` in your message and pick a document. The link stays in your sentence, as in the editor.

<img src="/img/app/ariadne-link-light.png" alt="A document linked inside a message." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-link-dark.png" alt="A document linked inside a message." width="1600" height="1000" loading="lazy" decoding="async" />

## When you're stuck

Choose **Stuck?** in the message box for questions about your piece, prompts, angles to try, an outline of what could come next, or what your own notes already say. You can also start a 5, 10 or 15 minute freewrite timer, which doesn't use AI.

Suggestions stay in the panel. To keep a reply, hover over it and choose **Save to a note**, and it goes to your Inbox. A note saved this way, or written by an agent, doesn't count toward your words.

<img src="/img/app/ariadne-stuck-light.png" alt="The Stuck? menu, with its questions, prompts and freewrite timer." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-stuck-dark.png" alt="The Stuck? menu, with its questions, prompts and freewrite timer." width="1600" height="1000" loading="lazy" decoding="async" />

## Past chats

The speech-bubbles button lists past chats. You can search, rename and delete them.
