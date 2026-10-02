---
title: Importer
description: Faites entrer votre travail dans φ depuis Markdown, d’autres applications et vos propres copies.
---

# Importer

φ lit le travail venu d’autres outils d’écriture et des copies que vous avez
faites vous-même. Ce que vous importez devient des documents φ ordinaires, avec
leurs dates, leurs liens et leurs images conservés.

## Importer des fichiers Markdown {#import-markdown-files}

1. Ouvrez la palette de commandes (`⌘P`) et choisissez **Importer des fichiers
   Markdown…**. La commande se trouve aussi sous **Importer…** dans le menu du
   coffre, en haut de la barre latérale.
2. Choisissez les fichiers `.md` ou `.txt`.

φ lit le front matter, les titres, les listes et les tâches, les encadrés, les
surlignages, les notes de bas de page et les liens wiki.

## Importer un dossier de notes {#import-a-folder-of-notes}

Vous venez d’une autre application de notes ? Apportez le dossier entier :

1. Dans la palette de commandes, choisissez **Importer un dossier Markdown →
   dans le coffre actuel…** ou **Importer un dossier Markdown → comme nouveau
   coffre…**.
2. Choisissez le dossier.

φ conserve la structure du dossier, et :

- **la date de création d’origine de chaque note**, à partir d’une date dans le
  fichier, d’un nom de fichier de note quotidienne (comme `2022_11_11`) ou de
  l’historique git du dossier ;
- **les liens entre les notes** : il décode les noms de fichiers encodés,
  respecte les propriétés `title::` et `alias::`, et traite les `#tags` comme
  des liens vers des pages, si bien que les rétroliens et le graphe
  fonctionnent tout de suite.

## Importer un document ou un projet φ {#import-a-φ-document-or-project}

Un fichier `.poiesis` créé avec **Enregistrer une copie** ou **Copie du
projet** s’ouvre avec ses images :

- choisissez **Importer un document φ (`.poiesis`)…** dans la palette de
  commandes, ou **Fichier → Importer un document φ…** ; ou
- faites glisser le fichier sur la fenêtre de φ.

## Voir aussi {#see-also}

- [Coffres](./vaults) : où arrive le travail importé.
- [Partager une copie](./share-a-copy) : créer une copie du projet.
