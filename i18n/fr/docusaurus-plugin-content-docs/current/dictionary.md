---
title: Dictionnaire et thésaurus
description: Cherchez le sens d’un mot, ou un mot plus juste, sans quitter la page ni passer par Internet.
---

# Dictionnaire et thésaurus

φ peut afficher, à côté de la page que vous écrivez, le sens d’un mot ou
d’autres mots de sens proche. Il faut d’abord installer un ou plusieurs packs
de dictionnaire. Ensuite, toutes les recherches se font sur votre ordinateur.

<img src="/img/app/dictionary-light.png" alt="Un mot sélectionné dans un chapitre, avec ses définitions et ses synonymes dans l’onglet Dictionnaire du panneau Infos" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/dictionary-dark.png" alt="Un mot sélectionné dans un chapitre, avec ses définitions et ses synonymes dans l’onglet Dictionnaire du panneau Infos" width="1600" height="1000" loading="lazy" decoding="async" />

## Chercher un mot {#look-up-a-word}

Pour chercher un mot de votre texte :

1. Sélectionnez le mot sur la page.
2. Dans la barre d’outils qui apparaît au-dessus, cliquez sur **Plus
   d’outils** (›), puis sur **Rechercher le mot**.
3. Lisez la définition dans l’onglet **Dictionnaire** du panneau Infos, le
   panneau situé à côté de votre page.

Pour chercher un mot que vous n’avez pas écrit :

1. Appuyez sur `⌘⇧D`. Vous pouvez aussi choisir **Affichage → Dictionnaire**,
   ou **Ouvrir le dictionnaire** dans le menu ⋮ du document ou dans la palette
   de commandes.
2. Tapez le mot dans **Rechercher un mot…** et appuyez sur `Enter`.
3. Appuyez de nouveau sur `⌘⇧D` pour que le panneau revienne à son onglet
   **Plan**.

Chaque résultat donne la définition et le nom du pack dont elle provient. Si
le pack contient des synonymes, ils s’affichent aussi. Cliquez sur un synonyme
ou sur un renvoi pour chercher ce mot à son tour.

Inutile de taper le mot sous la forme qui figure dans le dictionnaire.
*Running*, *ledgers* et *cities* mènent à *run*, *ledger* et *city*. Beaucoup
de packs ont en outre leur propre liste de formes : un dictionnaire d’espagnol
retrouve ainsi *correr* à partir de *corriendo*.

L’onglet **Dictionnaire** n’apparaît dans le panneau Infos que pendant que
vous vous en servez, et seulement si un document est ouvert.

## Installer un dictionnaire {#install-a-dictionary}

φ est livré sans dictionnaire. La première fois que vous ouvrez l’onglet, il
affiche **Aucun dictionnaire installé.** φ lit les packs de dictionnaire au
format **StarDict**, très répandu. Pour en installer un :

1. Téléchargez un pack. Vous en trouverez de bons, gratuits, sur
   [freedict.org](https://freedict.org) et
   [wikdict.com](https://www.wikdict.com). Pour des définitions en anglais
   avec synonymes, un pack StarDict **WordNet** convient bien.
2. Décompressez-le. Vous obtenez un dossier dont les fichiers se terminent
   par `.ifo`, `.idx` et `.dict`. Ils se terminent parfois par `.idx.gz` ou
   `.dict.dz`, ce qui fonctionne aussi.
3. Ouvrez **Réglages → Langue → Dictionnaire et thésaurus**.
4. Cliquez sur **Installer un pack de dictionnaire…** et choisissez le
   dossier.

Le pack est utilisable tout de suite. Installez autant de packs que vous
voulez : chaque recherche les consulte tous. Un pack peut être dans n’importe
quelle langue. Avec un pack bilingue, vous pouvez traduire tout en écrivant.

## Gérer vos packs {#manage-your-packs}

**Réglages → Langue → Dictionnaire et thésaurus** donne la liste des packs et
le nombre de mots de chacun. Pour retirer un pack, cliquez sur la corbeille à
côté de lui et confirmez **Retirer le dictionnaire ?**

:::note Rien ne quitte votre ordinateur
φ conserve les packs installés dans son propre dossier d’application. Aucune
recherche ne passe par Internet.
:::

## Voir aussi {#see-also}

- [Orthographe](./spelling)
- [L’éditeur](./the-editor) : la barre d’outils de sélection.
- [Thèmes et langues](./themes-and-languages)
