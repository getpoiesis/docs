---
title: Liens et graphe
---

# Liens et graphe

Les idées se relient. φ vous permet de lier un document à un autre dès que vous
le mentionnez, puis vous montre ces connexions de deux façons : sous forme de
liste à côté de la page, et sous forme de graphe de tout le coffre. Rien ne
quitte votre ordinateur ; l'index des liens est construit et lu localement.

<img src="/img/app/graph-light.png" alt="Le graphe d'un coffre : les documents et les liens entre eux" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="Le graphe d'un coffre : les documents et les liens entre eux" width="1600" height="1000" loading="lazy" decoding="async" />

## Lier avec des `[[wiki-links]]` {#linking-with-wiki-links}

Pour créer un lien vers un autre document, tapez `[[` n'importe où dans le
texte. Un petit menu s'ouvre et se resserre à mesure que vous tapez. Choisissez
le document voulu avec les flèches et `Enter`, ou cliquez dessus.

Un lien choisi dans le menu pointe vers le document lui-même, si bien que
renommer le document plus tard ne le cassera pas. Un `[[Titre]]` que vous tapez
en entier ou que vous collez retrouve son document par le titre.

Pour ouvrir le document vers lequel pointe un lien, maintenez `⌘` et cliquez sur
le lien (en [mode lecture](the-editor.md#reading-mode), un simple clic suffit).

### Lier vers quelque chose qui n'existe pas encore {#linking-to-something-that-doesnt-exist-yet}

Si aucun document ne porte exactement le titre que vous avez tapé, la dernière
entrée du menu est **Créer « … »**. Choisissez-la et φ écrit le lien, même s'il
n'y a encore rien à l'autre bout. C'est une façon rapide de noter une idée
avant d'avoir écrit sa page.

Le document lui-même est créé quand vous suivez le lien : `⌘`-cliquez dessus,
ou cliquez dessus dans le panneau Liens (ci-dessous). φ crée un document portant
ce titre et l'ouvre.

## Le panneau Liens {#the-links-panel}

Ouvrez le Panneau d’infos (`⇧⌘I`) et choisissez l'onglet **Liens**, ou
choisissez **Liens et rétroliens** dans le menu ⋮ du document. Il reflète
toujours le document que vous lisez, y compris les modifications que vous
n'avez pas encore enregistrées :

- **Dans ce document** : les personnages que vous avez mentionnés ici avec @.
  Cliquez sur l'un d'eux pour ouvrir sa page. (Affiché seulement s'il y en a.)
- **Liens sortants** : tous les documents vers lesquels celui-ci pointe.
  Cliquez sur une entrée pour y aller. Les liens qui ne mènent encore nulle part
  sont aussi listés, marqués d'un **+** ; cliquez sur l'un d'eux pour créer ce
  document et l'ouvrir.
- **Rétroliens** : tous les documents qui pointent *vers* celui-ci. C'est ainsi
  que vous trouvez ce qui fait référence à la page où vous êtes, même si vous
  n'avez jamais créé de lien sortant depuis elle.
- **Dates liées** : les dates que vous avez insérées avec `/date`. Cliquez sur
  l'une d'elles pour afficher ce jour dans le [calendrier](calendar.md).
- **Notes à ce sujet** : les notes et pages de recherche liées à ce document.
  Utilisez **Nouvelle note à ce sujet**, **Lier une note…** ou **Nouvelle page de
  recherche** pour en ajouter une. Voir [Recherche](research.md).

En bas, **Graphe local** ouvre le graphe centré sur ce document.

## Le graphe {#the-graph}

Le graphe est une carte de la façon dont votre coffre tient ensemble.
Ouvrez-le depuis **Graphe** sous **Lieux** dans la barre latérale (dans Écrire
et Notes), depuis `⌘K`, ou avec **Affichage → Aller à → Graphe** (`⌘G` puis
`G`).

Chaque **point** est un document, et chaque **trait** est un lien entre deux
documents. Un point grossit avec le nombre de liens qu'il possède, si bien que
vos pivots ressortent. Les documents sans aucun lien (orphelins) sont dessinés
plus pâles. Les pages du matin, les journées du journal et les pages de
recherche n'apparaissent jamais dans le graphe : c'est la forme de votre travail
relié, pas un relevé de chaque fichier.

### Lire et se déplacer {#reading-and-moving-around}

- **Cliquez sur un point** pour ouvrir ce document.
- **Survolez un point** pour le mettre en évidence : le reste du graphe
  s'estompe, les liens du document s'allument, et les documents auxquels il se
  relie restent nets. C'est une façon rapide de voir tout ce que touche une
  page.
- **Faites défiler** pour zoomer ; **faites glisser** le fond pour vous
  déplacer. Dézoomez pour une vue d'ensemble et les étiquettes s'effacent pour
  laisser voir la forme ; rezoomez et les titres reviennent.
- Le document ouvert est marqué dans la couleur d'accent, pour que vous
  retrouviez votre place et exploriez à partir de lui.

Le graphe se cadre de lui-même pour tenir à l'écran. Sa petite barre d'outils
indique combien de documents sont dessinés, et propose **Animer** (rejouer la
mise en place de la disposition), **Actualiser les liens** (reconstruire à
partir du contenu le plus récent) et **Réglages du graphe**.

Appuyez sur `⌘.` pour passer en [Sanctuaire](focus-and-writing-modes.md) et
masquer tout sauf le graphe.

### Réglages du graphe {#graph-settings}

Les réglages se trouvent dans la colonne de liste à côté du graphe, et
**Réglages du graphe** dans la barre d'outils (`⇧⌘I`) les affiche aussi dans le
panneau de droite :

- **Quel graphe** : **Tout le coffre**, ou **Local**, qui montre le dernier
  document ouvert et tout ce qui se trouve à deux liens ou moins de lui.
- **Afficher** : **Orphelins** (documents sans liens) et **Flèches** (le sens de
  chaque lien).
- **Affichage** : **Taille des nœuds**, **Épaisseur des liens**, **Estomper le
  texte** (la facilité avec laquelle les titres s'effacent quand vous dézoomez)
  et **Taille des étiquettes**.
- **Forces** : **Force de répulsion**, **Distance des liens**, **Force
  centrale** et **Force des liens**, qui étalent ou resserrent la disposition.
- **Réinitialiser** revient à l'apparence standard.

Sous les réglages, une ligne compte les documents, les liens et les documents
sans liens, et **Les plus liés** liste vos principaux pivots. Cliquez sur l'un
d'eux pour l'ouvrir.
