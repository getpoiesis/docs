---
title: Dictionnaire et thésaurus
sidebar_position: 12
---

# Dictionnaire et thésaurus

φ intègre un dictionnaire hors ligne pour que vous puissiez vérifier le sens d’un
mot — ou en trouver un meilleur — sans quitter la page ni passer en ligne. Il
fonctionne comme le dictionnaire d’une liseuse : vous installez des *packs* de
dictionnaire, et les recherches se font entièrement sur votre ordinateur.

## Rechercher un mot

Il y a trois façons de rechercher quelque chose :

- **Depuis une sélection** — sélectionnez un mot dans l’éditeur et cliquez sur
  l’icône **livre** dans la barre d’outils flottante.
- **Depuis la commande** — appuyez sur `⌘⇧D`, ou ouvrez la palette de commandes
  (`⌘P`) et choisissez **Ouvrir le dictionnaire**. Cela ouvre le panneau
  Dictionnaire quel que soit l’onglet du panneau droit où vous étiez — pratique
  quand vous voulez vérifier un mot *avant* de l’écrire.
- **Depuis le champ de recherche** — le panneau Dictionnaire ouvert, tapez
  n’importe quel mot et appuyez sur Entrée.

Les résultats affichent la définition et, lorsque le dictionnaire les fournit, des
synonymes. **Cliquez sur n’importe quel renvoi ou synonyme** dans une définition
pour rechercher ce mot à son tour — la navigation reste à l’intérieur du panneau.

### Mots fléchis

Vous n’avez pas à taper la forme exacte du dictionnaire. Recherchez *courant*,
*changements* ou *villes* et φ trouvera *courir*, *changement* et *ville*. De
nombreux dictionnaires portent aussi leur propre liste de formes alternatives, que
φ utilise automatiquement — ainsi, pour un dictionnaire espagnol, *corriendo* se
résout en *correr*.

## Installer un dictionnaire

φ lit le format **StarDict**, largement répandu. Pour en ajouter un :

1. Téléchargez un pack de dictionnaire — de bonnes sources gratuites sont
   [freedict.org](https://freedict.org) et [wikdict.com](https://www.wikdict.com).
   Pour des définitions anglaises avec synonymes, un pack StarDict **WordNet**
   fonctionne bien.
2. Décompressez-le. Vous obtiendrez un dossier contenant des fichiers tels que
   `.ifo`, `.idx` et `.dict` (parfois compressés en `.idx.gz` ou `.dict.dz` — les
   deux conviennent).
3. Dans φ, ouvrez **Réglages** (`⌘,`) → **Éditeur** → **Dictionnaire et
   thésaurus** → **Installer un pack de dictionnaire…**, et sélectionnez le
   dossier.

Le pack apparaît immédiatement dans la liste et est prêt à l’emploi. Vous pouvez
en installer autant que vous le souhaitez — les recherches les parcourent tous, et
les résultats sont étiquetés avec leur source.

### Langues

Comme les packs sont de simples fichiers que vous choisissez, φ ne se limite pas à
l’anglais. Installez un dictionnaire monolingue espagnol ou français pour
rechercher des mots dans cette langue, ou un pack bilingue (par exemple
anglais→espagnol) pour traduire au fil de l’écriture.

## Gérer les packs

Dans **Réglages → Éditeur → Dictionnaire et thésaurus**, vous verrez chaque pack
installé avec son nombre de mots. Retirez-en un avec l’icône corbeille. Un
dictionnaire livré avec φ est marqué **Intégré** et reste en place.

## Confidentialité

Tout ici est local. Les dictionnaires installés sont stockés dans le dossier de
données d’application de φ, et aucune recherche ne touche jamais le réseau.
