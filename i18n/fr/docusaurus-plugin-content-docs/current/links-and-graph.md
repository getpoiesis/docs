---
title: Liens et graphe
description: Liez un document à un autre en écrivant, voyez ce qui pointe vers quoi, et cartographiez tout le coffre.
---

# Liens et graphe

Tapez `[[` puis le nom d’un autre document, et les deux sont liés. φ suit
chaque lien dans les deux sens : depuis n’importe quelle page, vous voyez vers
quoi elle pointe et ce qui pointe vers elle. Le graphe dessine toute la toile
d’un coup.

<img src="/img/app/links-light.png" alt="Une page de recherche avec un wiki-lien dans son texte, et l’onglet Liens du panneau Infos qui liste ses liens sortants, ses rétroliens et ses dates liées" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/links-dark.png" alt="Une page de recherche avec un wiki-lien dans son texte, et l’onglet Liens du panneau Infos qui liste ses liens sortants, ses rétroliens et ses dates liées" width="1600" height="1000" loading="lazy" decoding="async" />

## Lier vers un autre document {#link-to-another-document}

1. Tapez `[[` n’importe où dans le texte. Un menu de documents s’ouvre.
2. Continuez à taper pour le resserrer.
3. Choisissez le document avec les flèches et Entrée, ou cliquez dessus.
4. Pour suivre le lien, maintenez `⌘` et cliquez dessus. En
   [mode lecture](./the-editor), un simple clic suffit.

Un lien choisi dans le menu pointe vers le document lui-même : renommer le
document plus tard ne le cassera pas. Un `[[Titre]]` que vous tapez en entier
ou que vous collez retrouve plutôt son document par le titre.

`⌥⌘`-cliquez sur un lien pour ouvrir son document à côté de celui où vous êtes
(voir [Côte à côte](./side-by-side)).

## Lier vers une page pas encore écrite {#link-to-a-page-you-havent-written-yet}

Si aucun document ne porte le titre que vous avez tapé, la dernière entrée du
menu est **Créer «  …  »**. Choisissez-la et φ écrit le lien, sans rien encore à
l’autre bout. Il s’affiche comme un lien cassé jusqu’à ce que la page existe.

La page est créée quand vous suivez le lien : `⌘`-cliquez dessus, ou cliquez
dessus sous **Liens sortants** (ci-dessous). φ crée un document portant ce
titre et l’ouvre.

## Voir ce qui pointe vers quoi {#see-what-links-where}

Ouvrez le panneau Infos (`⇧⌘I`) et choisissez **Liens**. Vous pouvez aussi
choisir **Liens et rétroliens** dans le **⋮** du document, ou **Liens wiki**
dans le menu contextuel d’une ligne. L’onglet suit le document que vous lisez,
y compris les modifications pas encore enregistrées :

| Section | Ce qu’elle liste |
| --- | --- |
| **Dans ce document** | Les personnages que vous avez mentionnés ici avec @. Affichée seulement s’il y en a. |
| **Liens sortants** | Tous les documents vers lesquels celui-ci pointe. Les liens qui ne mènent encore nulle part y figurent aussi, avec une icône de création ; cliquez sur l’un d’eux pour créer ce document. |
| **Rétroliens** | Tous les documents qui pointent *vers* celui-ci, même si vous n’avez jamais créé de lien sortant depuis lui. |
| **Dates liées** | Les dates que vous avez insérées avec `/date`. Cliquez sur l’une d’elles pour afficher ce jour dans le [calendrier](./calendar). |
| **Recherches** et **Notes** | Les pages de recherche (dans Écrire) et les notes liées à ce document, avec de quoi en ajouter d’autres. Voir [Recherche](./research). |

Cliquez sur n’importe quelle entrée pour l’ouvrir. **Graphe local**, au pied de
l’onglet, ouvre le graphe autour de ce document.

## Explorer le graphe {#explore-the-graph}

Ouvrez le graphe depuis **Graphe** sous **Lieux** dans la barre latérale (dans
Écrire et Notes), depuis `⌘K`, ou avec `⌘G` puis `G`.

<img src="/img/app/graph-light.png" alt="Le graphe d’un coffre : les documents liés dessinés en points plus gros reliés par des traits, les documents sans lien en petits points pâles" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="Le graphe d’un coffre : les documents liés dessinés en points plus gros reliés par des traits, les documents sans lien en petits points pâles" width="1600" height="1000" loading="lazy" decoding="async" />

Chaque point est un document et chaque trait un lien. Un point grossit avec le
nombre de liens qu’il possède, si bien que vos pivots ressortent, et les
documents sans aucun lien sont dessinés plus pâles. Les pages du matin, les
journées du journal et les pages de recherche n’apparaissent jamais : le graphe
est la forme de votre écriture reliée, pas une liste de chaque fichier.

- **Cliquez sur un point** pour ouvrir ce document. Le refermer vous ramène au
  graphe.
- **Survolez un point** pour le mettre en avant. Tout le reste s’estompe, et ses
  liens et ses voisins restent nets.
- **Faites défiler** pour zoomer et **faites glisser** le fond pour vous
  déplacer. En vue éloignée, les titres s’effacent pour laisser voir la forme.
- Le document ouvert est marqué dans la couleur d’accent.

La barre du haut compte les documents dessinés et propose **Animer**, qui
rejoue la mise en place de la disposition, et **Actualiser les liens**, qui la
reconstruit à partir du texte le plus récent.

## Changer ce que montre le graphe {#change-what-the-graph-shows}

Appuyez sur le bouton de panneau en haut à droite du graphe (`⇧⌘I`) pour ouvrir
les **Réglages du graphe** :

| Groupe | Réglages |
| --- | --- |
| **Quel graphe** | **Tout le coffre**, ou **Local** : le dernier document que vous avez ouvert et tout ce qui se trouve à deux liens ou moins de lui. |
| **Afficher** | **Orphelins** (documents sans liens) et **Flèches** (le sens de chaque lien). |
| **Affichage** | **Taille des nœuds**, **Épaisseur des liens**, **Estomper le texte** et **Taille des étiquettes**. |
| **Forces** | **Force de répulsion**, **Distance des liens**, **Force centrale** et **Force des liens**, qui étalent ou resserrent la disposition. |

**Réinitialiser** rétablit l’apparence par défaut. Sous les réglages, une ligne
compte les documents, les liens et les documents sans liens, et **Les plus
liés** liste vos principaux pivots ; cliquez sur l’un d’eux pour l’ouvrir.

:::tip Retrouver les fils qui traînent

**Non liées**, dans la barre latérale de Notes, liste les notes vers lesquelles
rien ne pointe et qui ne pointent vers rien. Voir [Notes et capture](./notes).

:::

## Voir aussi {#see-also}

- [Recherche](./research) : notes et recherches liées à un chapitre, un projet
  ou un personnage.
- [Personnages et auteurs](./characters-and-authors) : les mentions avec @.
- [Le calendrier](./calendar)
- [Documents côte à côte](./side-by-side)
