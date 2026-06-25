---
title: Premiers pas
sidebar_position: 2
---

# Premiers pas

Cette page vous mène d'une installation neuve à votre première page écrite.

## Installation

φ est une application macOS, native sur Apple Silicon et Intel.
**[Téléchargez la dernière version](https://getpoiesis.com/download)**, ouvrez le
fichier `.dmg`, et glissez φ dans votre dossier Applications. Lancez-la depuis
Applications (ou Spotlight).

Les versions sont **signées et notariées par Apple**, elles s'ouvrent donc sans
l'avertissement Gatekeeper « développeur non identifié ».

:::warning φ est en alpha
Vous utilisez un logiciel à un stade précoce — attendez-vous à quelques aspérités.
Votre écriture, elle, est toujours en sécurité : ce sont des fichiers simples sur
votre Mac, enregistrés en continu et versionnés. Voir l'[introduction](intro.md)
pour ce qui est solide et ce qui se stabilise encore.
:::

## Premier lancement

La première fois que vous ouvrez φ, l'application vous demande de choisir où votre
écriture doit vivre. Un **coffre** est simplement un dossier qui contient vos
documents — choisissez un dossier existant ou créez-en un nouveau (par exemple
`~/Documents/Mon Livre`).

:::note macOS demandera l'accès au dossier
Quand votre coffre se trouve dans un emplacement protégé — **Documents, Bureau,
Téléchargements ou iCloud Drive** — macOS affiche une invite du type *« φ
souhaite accéder à des fichiers de votre dossier Documents. »* Cliquez sur **OK**
pour l'autoriser. φ en a besoin pour lire et enregistrer vos documents ; c'est une
invite de confidentialité standard de macOS, qui n'apparaît qu'une fois par
emplacement. Vous pouvez la revoir ou la modifier ensuite dans **Réglages Système
→ Confidentialité et sécurité → Fichiers et dossiers**.
:::

C'est la seule étape de configuration ; une fois votre choix fait, vous êtes prêt
à écrire.

## Ouvrir ou créer un autre coffre

Vous pouvez garder plusieurs coffres — un par projet, par exemple — et passer de
l'un à l'autre à tout moment :

1. Utilisez le sélecteur de coffre dans la barre d'état (en bas à gauche), ou
   ouvrez les **Réglages** (`⌘,`) → **Coffre**.
2. Choisissez **Ouvrir** pour pointer φ vers un dossier existant, ou **Créer**
   pour créer un nouveau coffre où vous le souhaitez.

Voyez [Coffres](vaults.md) pour les détails.

## Écrivez votre premier document

1. Appuyez sur `⌘N` (ou cliquez sur **Nouveau document**).
2. Tapez un **titre** en haut, puis appuyez sur Entrée et commencez à écrire dans
   le corps.
3. C'est tout — φ **enregistre automatiquement** au fil de la frappe. Pas de
   bouton d'enregistrement à chercher (même si `⌘S` force un enregistrement
   immédiat si vous le souhaitez).

### Quelques choses à essayer

- **Sélectionnez du texte** pour faire apparaître la barre d'outils contextuelle —
  gras, italique, liens, surlignages, et une recherche dans le dictionnaire.
  Voyez [L'éditeur](the-editor.md).
- **Tapez `/`** au début d'une ligne pour ouvrir le menu slash et insérer des
  titres, des listes, des citations, des blocs de code, et plus encore.
- **Tapez `[[`** pour créer un lien vers un autre document par son nom. Les liens
  forment une toile navigable que vous pouvez voir dans le
  [graphe](links-and-graph.md).

## Repérez-vous

- **Rail de gauche** — passez d'un espace à l'autre : Notes (arborescence de
  dossiers), Écrire (collections) et Journal (calendrier), plus des lanceurs pour
  le graphe, les personnages, et plus.
- **Barre latérale** — la liste de l'espace actuel ; affichez-la ou masquez-la
  avec `⌘[`.
- **Panneau droit** — le contexte du document actuel : liens, plan, annotations,
  historique des versions et dictionnaire. Affichez-le ou masquez-le avec `⌘]`.
- **Barre d'état** — état de l'enregistrement, statut de version, une horloge en
  direct, la session d'écriture et le nombre de mots.

## Sauvegardez votre travail

Parce qu'un coffre est un simple dossier, n'importe quel outil de sauvegarde
(Time Machine, un dossier synchronisé, une copie sur un disque externe) le
protège. Pour l'historique par document et une sauvegarde optionnelle hors
machine, voyez [Versions et sauvegarde](versions-and-backup.md).

## Étapes suivantes

- [L'éditeur](the-editor.md) — gagnez en aisance pour écrire et mettre en forme.
- [Collections](collections.md) — structurez un livre ou un manuscrit.
- [Raccourcis clavier](keyboard-shortcuts.md) — travaillez plus vite.
