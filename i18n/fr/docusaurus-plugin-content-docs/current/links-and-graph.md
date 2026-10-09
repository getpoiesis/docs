---
title: Liens et graphe
description: Liez un document à un autre en écrivant, voyez quels documents sont liés entre eux et dessinez la carte de tout le coffre.
---

# Liens et graphe

Un lien relie un document à un autre. Pour en créer un, tapez `[[` puis le
nom d’un document. φ Poiesis enregistre chaque lien dans les deux sens : chaque
document peut donc montrer ceux vers lesquels il pointe et ceux qui pointent
vers lui. Le **graphe** est une image de tous les liens de votre
[coffre](./vaults), le dossier qui contient vos textes.

<img src="/img/app/links-light.png" alt="Une page de recherche avec un lien wiki dans son texte, et l’onglet Liens du panneau Infos, qui affiche ses liens sortants, ses rétroliens et ses dates liées" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/links-dark.png" alt="Une page de recherche avec un lien wiki dans son texte, et l’onglet Liens du panneau Infos, qui affiche ses liens sortants, ses rétroliens et ses dates liées" width="1600" height="1000" loading="lazy" decoding="async" />

## Créer un lien vers un autre document {#link-to-another-document}

1. Tapez `[[` n’importe où dans le texte. Un menu de documents s’ouvre.
2. Continuez à taper pour réduire la liste.
3. Choisissez le document avec les flèches et Entrée, ou cliquez dessus.

<img src="/img/app/link-menu-light.png" alt="Une note avec deux crochets et quelques lettres tapés, et le menu des documents correspondants ouvert" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/link-menu-dark.png" alt="Une note avec deux crochets et quelques lettres tapés, et le menu des documents correspondants ouvert" width="1600" height="1000" loading="lazy" decoding="async" />

Pour suivre un lien, cliquez dessus en maintenant `⌘`. En
[mode lecture](./the-editor), un simple clic suffit.

Pour ouvrir le document lié à côté de celui où vous êtes, cliquez sur le lien
en maintenant `⌥⌘` (voir [Documents côte à côte](./side-by-side)).

Un lien choisi dans le menu pointe vers le document lui-même : si vous
renommez ce document par la suite, le lien fonctionne toujours. En revanche,
un `[[Titre]]` que vous tapez en entier ou que vous collez retrouve son
document d’après le titre.

## Créer un lien vers une page qui n’existe pas encore {#link-to-a-page-you-havent-written-yet}

1. Tapez `[[` puis le titre voulu.
2. Si aucun document ne porte ce titre, la dernière entrée du menu est
   **Créer « … »**. Choisissez-la.

Poiesis écrit le lien, mais le document n’existe pas encore. En attendant, le lien
s’affiche comme un lien rompu.

Le document est créé quand vous suivez le lien : cliquez dessus en maintenant
`⌘`, ou cliquez dessus sous **Liens sortants** (voir la section suivante). Poiesis
crée alors un document portant ce titre et l’ouvre.

## Voir quels documents sont liés {#see-what-links-where}

L’onglet **Liens** du [panneau Infos](./finding-your-way#the-info-panel)
réunit les liens d’un document. Il y a trois façons de l’ouvrir :

- Ouvrez le panneau Infos (`⇧⌘I`) et choisissez **Liens**.
- Cliquez sur le **⋮** du document, puis sur **Liens et rétroliens**.
- Faites un clic droit sur la ligne du document dans une liste, puis
  choisissez **Liens wiki**.

L’onglet reflète le document que vous lisez, y compris les modifications que
vous n’avez pas encore enregistrées.

| Section | Ce qu’elle contient |
| --- | --- |
| **Dans ce document** | Les personnages que vous avez mentionnés ici avec @. N’apparaît que s’il y en a. |
| **Liens sortants** | Tous les documents vers lesquels celui-ci pointe. Les liens vers des documents qui n’existent pas encore y figurent aussi, avec une icône de création. Cliquez sur l’un d’eux pour créer le document. |
| **Rétroliens** | Tous les documents qui pointent *vers* celui-ci. |
| **Dates liées** | Les dates que vous avez ajoutées avec `/date`. Cliquez sur l’une d’elles pour afficher ce jour dans le [calendrier](./calendar). |
| **Recherche** et **Notes** | Les pages de recherche (dans Écrire) et les notes liées à ce document. Vous pouvez en ajouter ici. Voir [Recherche](./research). |

Cliquez sur une entrée pour l’ouvrir. **Graphe local**, en bas de l’onglet,
ouvre le graphe autour de ce document.

## Explorer le graphe {#explore-the-graph}

Il y a trois façons d’ouvrir le graphe :

- Cliquez sur **Graphe** sous **Lieux**, dans la barre latérale (dans Écrire
  et dans Notes).
- Appuyez sur `⌘K` et choisissez-le.
- Appuyez sur `⌘G`, puis sur `G`.

<img src="/img/app/graph-light.png" alt="Le graphe d’un coffre : les documents liés sont de gros points reliés par des traits, les documents sans lien de petits points pâles" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="Le graphe d’un coffre : les documents liés sont de gros points reliés par des traits, les documents sans lien de petits points pâles" width="1600" height="1000" loading="lazy" decoding="async" />

Chaque point est un document. Chaque trait est un lien. Plus un document a de
liens, plus son point est gros : vos documents les plus liés se repèrent donc
facilement. Les documents sans lien sont plus pâles. Les pages du matin, les
jours du journal et les pages de recherche n’apparaissent jamais dans le
graphe.

- **Cliquez sur un point** pour ouvrir le document. Quand vous le fermez,
  vous revenez au graphe.
- **Survolez un point** pour le mettre en évidence. Ses liens et les points
  auxquels il est relié restent nets, et tout le reste s’estompe.
- **Faites défiler** pour zoomer. **Faites glisser** le fond pour vous
  déplacer. Quand vous dézoomez, les titres s’estompent pour laisser voir la
  forme d’ensemble.
- Le document que vous avez ouvert est affiché dans la couleur d’accent.

La barre du haut indique le nombre de documents présents dans le graphe.
Elle comporte deux boutons :

- **Animer** redispose les points sous vos yeux.
- **Actualiser les liens** reconstruit le graphe à partir de votre texte le
  plus récent.

## Choisir ce que le graphe affiche {#change-what-the-graph-shows}

Cliquez sur le bouton du panneau, en haut à droite du graphe (`⇧⌘I`). Les
**Réglages du graphe** s’ouvrent :

<img src="/img/app/graph-settings-light.png" alt="Le graphe avec ses réglages ouverts à côté" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-settings-dark.png" alt="Le graphe avec ses réglages ouverts à côté" width="1600" height="1000" loading="lazy" decoding="async" />

| Groupe | Réglages |
| --- | --- |
| **Quel graphe** | **Tout le coffre**, ou **Local** : le dernier document que vous avez ouvert et tout ce qui se trouve à deux liens de lui au plus. |
| **Afficher** | **Orphelins** (les documents sans lien) et **Flèches** (le sens de chaque lien). |
| **Affichage** | **Taille des nœuds**, **Épaisseur des liens**, **Estomper le texte** et **Taille des étiquettes**. |
| **Forces** | **Force de répulsion**, **Distance des liens**, **Force centrale** et **Force des liens**. Elles écartent les points ou les rapprochent. |

**Réinitialiser** rétablit les réglages d’origine.

Sous les réglages, une ligne indique le nombre de documents, de liens et de
documents sans lien. **Les plus liés** donne les documents qui ont le plus de
liens. Cliquez sur l’un d’eux pour l’ouvrir.

:::tip Retrouver les notes sans lien

**Non liées**, dans la barre latérale de Notes, réunit les notes qu’aucun
lien ne relie au reste : rien ne pointe vers elles et elles ne pointent vers
rien. Voir [Notes et capture rapide](./notes).

:::

## Voir aussi {#see-also}

- [Recherche](./research) : les notes et les recherches liées à un chapitre,
  à un projet ou à un personnage.
- [Personnages et auteurs](./characters-and-authors) : les mentions avec @.
- [Le calendrier](./calendar)
- [Documents côte à côte](./side-by-side)
