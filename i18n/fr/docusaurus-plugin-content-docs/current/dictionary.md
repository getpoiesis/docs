---
title: Dictionnaire et thésaurus
---

# Dictionnaire et thésaurus

φ peut chercher un mot pour vous, pour son sens ou pour en trouver un meilleur,
sans quitter la page ni aller en ligne. Cela fonctionne comme le dictionnaire
d'une liseuse : vous installez des *packs* de dictionnaire, et chaque recherche
se fait sur votre ordinateur.

<img src="/img/app/dictionary-light.png" alt="Le dictionnaire, ouvert à côté du document" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/dictionary-dark.png" alt="Le dictionnaire, ouvert à côté du document" width="1600" height="1000" loading="lazy" decoding="async" />

## Chercher un mot {#looking-up-a-word}

Le dictionnaire s'ouvre sous forme d'onglet **Dictionnaire** dans le
[Panneau d’infos](./finding-your-way.md), à côté de Plan, Liens, Notes et
Historique. Il ne rejoint le panneau que pendant que vous l'utilisez, et
seulement quand un document est ouvert : un tableau, une liste ou la corbeille
ne vous présentent aucun mot à chercher.

Il y a plusieurs façons d'y accéder :

- **Depuis une sélection.** Sélectionnez un mot dans l'éditeur. Dans la petite
  barre d'outils qui apparaît, cliquez sur **›** (**Plus d’outils**), puis sur
  **Rechercher le mot** (l'icône du livre).
- **Depuis le clavier.** Appuyez sur `⌘⇧D`, ou choisissez **Affichage →
  Dictionnaire**. C'est pratique quand vous voulez vérifier un mot *avant* de
  l'écrire. Appuyez de nouveau sur `⌘⇧D` et le panneau revient à son Plan.
- **Depuis le document.** Ouvrez le menu ⋮ du document en haut à droite et
  choisissez **Ouvrir le dictionnaire**. La même commande se trouve dans la
  palette de commandes (`⌘P`).
- **Depuis la zone de recherche.** Avec l'onglet Dictionnaire ouvert, tapez
  n'importe quel mot dans **Rechercher un mot…** et appuyez sur Entrée.

Les résultats affichent la définition et, quand le dictionnaire en fournit, des
synonymes. Chaque résultat porte le nom du pack dont il provient. **Cliquez sur
n'importe quel renvoi ou synonyme** d'une définition pour chercher ce mot à son
tour ; vous restez dans le panneau.

### Mots fléchis {#inflected-words}

Vous n'avez pas à taper la forme exacte du dictionnaire. Cherchez *running*,
*changes* ou *cities* et φ trouvera *run*, *change* et *city*. Beaucoup de
dictionnaires comportent aussi leur propre liste de formes alternatives, que φ
utilise automatiquement : ainsi, avec un dictionnaire espagnol, *corriendo*
renvoie à *correr*.

## Installer un dictionnaire {#installing-a-dictionary}

φ n'est livré avec aucun dictionnaire : la première fois que vous ouvrez
l'onglet, il indique **Aucun dictionnaire installé.** En ajouter un prend une
minute. φ lit le format **StarDict**, très répandu :

1. Téléchargez un pack de dictionnaire. De bonnes sources gratuites sont
   [freedict.org](https://freedict.org) et [wikdict.com](https://www.wikdict.com).
   Pour des définitions en anglais avec synonymes, un pack StarDict **WordNet**
   convient bien.
2. Décompressez-le. Vous obtiendrez un dossier contenant des fichiers comme
   `.ifo`, `.idx` et `.dict` (parfois compressés en `.idx.gz` ou `.dict.dz` ;
   les deux conviennent).
3. Dans φ, ouvrez **Réglages** → **Langue** → **Dictionnaire et thésaurus**,
   cliquez sur **Installer un pack de dictionnaire…** et sélectionnez le
   dossier.

Le pack apparaît aussitôt dans la liste et est prêt à l'emploi. Installez-en
autant que vous voulez : une recherche les consulte tous.

### Langues {#languages}

Comme les packs ne sont que des fichiers que vous choisissez, φ ne se limite pas
à l'anglais. Installez un dictionnaire espagnol ou français pour chercher des
mots dans cette langue, ou un pack bilingue (anglais→espagnol, par exemple) pour
traduire pendant que vous écrivez.

## Gérer les packs {#managing-packs}

**Réglages → Langue → Dictionnaire et thésaurus** liste chaque pack installé
avec le nombre de mots qu'il contient. Pour en retirer un, cliquez sur l'icône
de corbeille à côté et confirmez **Retirer le dictionnaire ?**.

## Confidentialité {#privacy}

Tout est local ici. Les dictionnaires installés sont conservés dans le dossier
de données de l'application φ, et aucune recherche ne passe jamais par le
réseau.
