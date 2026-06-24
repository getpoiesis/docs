---
title: Liens et graphe
sidebar_position: 8
---

# Liens et graphe

Les idées se relient. φ vous permet de lier un document à un autre dès l’instant
où vous le mentionnez, puis vous montre ces connexions de deux façons — sous
forme de liste à côté de la page, et sous forme de graphe de tout le coffre. Rien
ne quitte votre Mac ; l’index des liens est construit et interrogé localement.

## Lier avec les `[[liens wiki]]`

Pour lier à un autre document, tapez `[[` n’importe où dans le texte. Un petit
menu s’ouvre et filtre à mesure que vous continuez à taper — choisissez le
document voulu avec les flèches et `Entrée`, ou cliquez dessus.

Les liens reposent sur l’identité, pas sur le titre : une fois que vous avez lié
un document, le renommer plus tard ne casse pas le lien.

### Lier vers quelque chose qui n’existe pas encore

Si aucun document ne correspond à ce que vous avez tapé, le menu propose
**Créer « … »** en haut. Choisissez-le et φ crée un nouveau document portant ce
titre et y établit un lien — une façon rapide de capter une idée avant même
d’avoir écrit la page correspondante. Vous pouvez aussi suivre un lien non résolu
plus tard depuis le panneau Liens (ci-dessous).

Maintenez `⌘` et cliquez sur n’importe quel lien wiki dans l’éditeur pour ouvrir
le document vers lequel il pointe. Si ce document n’existe pas encore, le
`⌘`-clic le crée.

## Le panneau Liens

Ouvrez le panneau de droite (`⌘]` l’affiche ou le masque) et choisissez l’onglet
**Liens**. Il reflète toujours le document que vous lisez — y compris les
modifications que vous n’avez pas encore enregistrées — et comporte trois
sections :

- **Liens sortants** — chaque document vers lequel celui-ci renvoie. Cliquez sur
  une entrée pour vous y rendre.
- **Liens non résolus** apparaissent dans la même liste, marqués d’une icône
  **+**. Ce sont des `[[titres]]` que vous avez écrits et qui ne correspondent pas
  encore à un document. Cliquez sur l’un d’eux pour créer ce document et l’ouvrir.
- **Rétroliens** — chaque document qui renvoie *vers* celui-ci. C’est ainsi que
  vous trouvez ce qui référence la page où vous êtes, même si vous n’avez jamais
  établi de lien sortant vous-même.
- **Dates liées** — toutes les dates que vous avez référencées avec `/date`,
  chacune renvoyant à son jour dans le calendrier.

## La vue graphe

Le graphe est une carte de la manière dont votre coffre tient ensemble.
Ouvrez-le depuis **Affichage → Aller à → Graphe** (`⌘G` puis `G`).

Chaque **point** est un document, et chaque **trait** est un lien entre deux
documents. Un point grossit légèrement à mesure que davantage de liens pointent
vers lui, de sorte que vos pôles ressortent. Les documents sans aucun lien
(orphelins) apparaissent estompés. Les pages du matin privées n’apparaissent
jamais dans le graphe.

### Lire et se déplacer

- **Cliquez sur un point** pour ouvrir ce document.
- **Faites défiler** pour zoomer ; **glissez** l’arrière-plan pour vous déplacer.
  Dézoomez pour une vue d’ensemble — les étiquettes s’effacent pour que vous
  voyiez la forme ; rezoomez et les titres reviennent.
- La disposition s’organise en direct et cadre l’ensemble du graphe pour vous
  jusqu’à ce que vous vous déplaciez ou zoomiez, après quoi elle reste en place.
- La barre d’outils propose **Ajuster le graphe à la vue** pour tout recadrer,
  **Actualiser les liens** pour reconstruire à partir du contenu le plus récent,
  et **Options du graphe** pour ajuster la disposition (distance des liens,
  forces, taille des nœuds, affichage ou non des orphelins, et plus encore).

### Vous situer

Le graphe montre l’ensemble du coffre. Pour vous y repérer, ouvrez d’abord un
document, puis ouvrez le graphe — le document dans lequel vous êtes est marqué
comme le point actif, ce qui vous permet de le repérer et d’explorer ses voisins
à partir de là.
