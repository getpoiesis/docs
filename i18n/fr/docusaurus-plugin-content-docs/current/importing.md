---
title: Importer
description: Faites entrer dans φ vos textes en Markdown, ceux d’autres applications et vos propres copies.
---

# Importer

Vous pouvez faire entrer dans φ des textes écrits dans d’autres applications,
ainsi que des copies créées dans φ. Une fois importés, ces textes sont des
documents φ comme les autres. Leurs dates, leurs liens et leurs images sont
conservés.

Les documents importés sont rangés dans un [coffre](./vaults), le dossier où φ
garde votre travail.

## Importer des fichiers Markdown {#import-markdown-files}

1. Ouvrez la palette de commandes (`⌘P`).
2. Choisissez **Importer des fichiers Markdown…**.
3. Sélectionnez les fichiers `.md` ou `.txt`.

Vous pouvez aussi passer par le menu du coffre, en haut de la barre latérale :
choisissez **Importer…**.

φ lit l’en-tête (front matter), les titres, les listes et les tâches, les
encadrés, les surlignages, les notes de bas de page et les liens wiki.

## Importer un dossier de notes {#import-a-folder-of-notes}

Si vous venez d’une autre application de notes, comme Obsidian ou Logseq, vous
pouvez importer le dossier entier.

1. Ouvrez la palette de commandes (`⌘P`).
2. Choisissez **Importer un dossier Markdown → dans le coffre actuel…** ou
   **Importer un dossier Markdown → comme nouveau coffre…**.
3. Sélectionnez le dossier.

φ conserve l’organisation du dossier. Il conserve aussi :

- **La date de création de chaque note.** φ la trouve dans une date inscrite
  dans le fichier, dans le nom d’une note quotidienne (comme `2022_11_11`) ou
  dans l’historique git du dossier.
- **Les liens entre les notes.** φ décode les noms de fichiers encodés, lit les
  propriétés `title::` et `alias::`, et traite les `#tags` comme des liens vers
  des pages. Les rétroliens et le graphe fonctionnent dès la fin de l’import.

## Importer un document ou un projet φ {#import-a-φ-document-or-project}

Un fichier `.poiesis` créé avec **Enregistrer une copie** ou **Copie du
projet** s’ouvre avec ses images. Vous pouvez l’importer de trois façons :

- Dans la palette de commandes, choisissez **Importer un document φ
  (`.poiesis`)…**.
- Choisissez **Fichier → Importer un document φ…**.
- Faites glisser le fichier sur la fenêtre de φ.

## Voir aussi {#see-also}

- [Coffres](./vaults) : là où va ce que vous importez.
- [Partager une copie](./share-a-copy) : créer une copie du projet.
