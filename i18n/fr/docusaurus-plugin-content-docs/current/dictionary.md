---
title: Dictionnaire et thésaurus
description: Cherchez un mot, pour son sens ou pour en trouver un meilleur, sans quitter la page ni aller en ligne.
---

# Dictionnaire et thésaurus

φ peut chercher un mot pour son sens, ou pour en trouver un meilleur, à côté de
la page que vous écrivez. Cela fonctionne comme le dictionnaire d’une liseuse :
vous installez des packs de dictionnaire, et chaque recherche se fait sur votre
ordinateur.

<img src="/img/app/dictionary-light.png" alt="Un mot sélectionné dans un chapitre, et ses définitions et synonymes dans l’onglet Dictionnaire du panneau Infos" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/dictionary-dark.png" alt="Un mot sélectionné dans un chapitre, et ses définitions et synonymes dans l’onglet Dictionnaire du panneau Infos" width="1600" height="1000" loading="lazy" decoding="async" />

## Chercher un mot {#look-up-a-word}

1. Sélectionnez le mot sur la page.
2. Dans la barre d’outils au-dessus, cliquez sur **Plus d’outils** (›), puis
   sur **Rechercher le mot**.
3. Lisez la définition dans l’onglet **Dictionnaire** du panneau Infos.

Pour chercher un mot que vous n’avez pas encore écrit, appuyez sur `⌘⇧D` (ou
choisissez **Affichage → Dictionnaire**, ou **Ouvrir le dictionnaire** dans le
menu ⋮ du document ou dans la palette de commandes), tapez-le dans
**Rechercher un mot…** et appuyez sur `Enter`. Appuyez de nouveau sur `⌘⇧D`
pour rendre le panneau à son **Plan**.

Chaque résultat affiche la définition et, quand le pack en a, des synonymes,
avec le nom du pack dont il provient. Cliquez sur n’importe quel synonyme ou
renvoi pour chercher ce mot à son tour.

Vous n’avez pas besoin de la forme exacte du dictionnaire : *running*,
*ledgers* et *cities* trouvent *run*, *ledger* et *city*. Beaucoup de packs
comportent aussi leur propre liste de formes, si bien qu’un dictionnaire
espagnol trouve *correr* à partir de *corriendo*.

L’onglet **Dictionnaire** ne rejoint le panneau Infos que pendant que vous
l’utilisez, et seulement quand un document est ouvert.

## Installer un dictionnaire {#install-a-dictionary}

φ n’est livré avec aucun dictionnaire : la première fois que vous ouvrez
l’onglet, il indique **Aucun dictionnaire installé.** Il lit le format
**StarDict**, très répandu :

1. Téléchargez un pack. De bonnes sources gratuites sont
   [freedict.org](https://freedict.org) et
   [wikdict.com](https://www.wikdict.com). Pour des définitions en anglais avec
   synonymes, un pack StarDict **WordNet** convient bien.
2. Décompressez-le. Vous obtiendrez un dossier avec des fichiers se terminant
   par `.ifo`, `.idx` et `.dict` (parfois `.idx.gz` ou `.dict.dz` ; les deux
   conviennent).
3. Ouvrez **Réglages → Langue → Dictionnaire et thésaurus**, cliquez sur
   **Installer un pack de dictionnaire…** et choisissez le dossier.

Le pack est prêt aussitôt. Installez-en autant que vous voulez : une recherche
les consulte tous. Comme les packs sont des fichiers que vous choisissez, ils
peuvent être dans n’importe quelle langue, ou bilingues, pour traduire pendant
que vous écrivez.

## Gérer vos packs {#manage-your-packs}

**Réglages → Langue → Dictionnaire et thésaurus** liste chaque pack avec le
nombre de mots qu’il contient. Pour en retirer un, cliquez sur la corbeille à
côté et confirmez **Retirer le dictionnaire ?**

:::note Rien ne quitte votre ordinateur
Les packs installés sont conservés dans le dossier d’application propre à φ, et
aucune recherche ne passe jamais par Internet.
:::

## Voir aussi {#see-also}

- [Orthographe](./spelling)
- [L’éditeur](./the-editor) : la barre d’outils de sélection.
- [Thèmes et langues](./themes-and-languages)
