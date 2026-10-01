---
title: Annotations
---

# Annotations

Les annotations vous permettent de marquer un passage et d'en dire quelque
chose : un surlignage pour le signaler, un commentaire pour vous rappeler
pourquoi. Elles vivent avec le document, si bien que vos notes pour vous-même
voyagent avec le brouillon.

<img src="/img/app/annotations-light.png" alt="Un chapitre avec deux surlignages et leurs notes, à côté d'une note en marge" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/annotations-dark.png" alt="Un chapitre avec deux surlignages et leurs notes, à côté d'une note en marge" width="1600" height="1000" loading="lazy" decoding="async" />

## Surligner un passage {#highlighting-a-passage}

Sélectionnez du texte. La barre d'outils contextuelle apparaît ; cliquez sur la
pastille de couleur (**Surligner et commenter**) pour ouvrir son menu, puis
choisissez une couleur. Le texte sélectionné reçoit un surlignage doux de cette
couleur.

Il y a cinq couleurs prédéfinies : **Jaune**, **Vert**, **Bleu**, **Violet** et
**Orange**. Elles sont translucides, et se lisent donc bien avec les thèmes
clairs comme sombres. À côté, **Couleur personnalisée** ouvre le sélecteur de
couleur du système pour que vous choisissiez la couleur de votre choix.

Pour retirer un surlignage, sélectionnez le texte surligné, ouvrez le même menu
et choisissez **Retirer le surlignage**.

## Un commentaire sans surlignage {#a-comment-without-a-highlight}

Parfois, vous voulez noter quelque chose sans colorer le texte. Sélectionnez-le
et cliquez sur **Commenter (sans surlignage)** dans la barre d'outils
contextuelle. φ attache un commentaire à la sélection sans la teinter.

Dans les deux cas, le Panneau d’infos s'ouvre sur son onglet **Notes** avec la
nouvelle annotation prête à recevoir votre texte. Chaque surlignage peut aussi
porter un commentaire ; les deux fonctionnent ensemble.

## L'onglet Notes {#the-notes-tab}

Toutes les notes d'un document pour lui-même se trouvent dans l'onglet
**Notes** du Panneau d’infos. Ouvrez-le avec `⇧⌘A`, depuis **Notes** dans le
menu ⋮ du document, ou en ouvrant le Panneau d’infos (`⇧⌘I`) et en choisissant
l'onglet. Vous pouvez aussi y accéder par un clic droit dans le texte en
choisissant **Annotations**.

L'onglet comporte trois sections : notes en marge, annotations et actions.

### Notes en marge {#margin-notes}

Les notes en marge portent sur le document entier plutôt que sur une phrase
précise : un rappel de ce qui manque encore au chapitre, une question pour le
prochain brouillon. Cliquez sur **Ajouter une note en marge** et écrivez dans la
zone (**Écrivez une note sur ce document…**). Chacune dispose d'un bouton
**Supprimer la note en marge**.

### Annotations {#annotations}

Chaque annotation apparaît sous forme de carte avec le texte cité, sa couleur et
une zone pour votre commentaire. Depuis une carte, vous pouvez :

- **Aller au texte** : cliquez sur la citation pour faire défiler l'éditeur
  jusqu'à ce passage et le sélectionner.
- **Écrire ou modifier le commentaire** : tapez dans la zone de note de la
  carte.
- **Changer la couleur** : choisissez une autre couleur prédéfinie, une
  **Couleur personnalisée** ou **Sans surlignage (commentaire)**.
- **Résoudre** : cliquez sur la coche pour **Marquer comme résolue**. Les
  annotations résolues sont estompées mais conservées ; **Marquer comme non
  résolue** en fait revenir une.
- **Supprimer** : l'icône de corbeille (**Supprimer l’annotation**).

Dès qu'un document comporte des annotations, une zone de recherche
(**Rechercher des annotations…**) les filtre selon le texte cité ou votre
commentaire, et un menu à côté affiche **Toutes**, **Surlignages**,
**Commentaires**, **Ouvertes** ou **Résolues**.

#### Annotations détachées {#detached-annotations}

Si le texte visé par une annotation disparaît au fil des modifications,
l'annotation est conservée et marquée **Détachée du texte**. Sélectionnez un
nouveau passage et cliquez sur **Relier à la sélection** pour l'y ancrer.

### Actions {#action-items}

La dernière section liste les éléments de liste de tâches du document qui
peuvent être suivis sur un tableau, pour qu'une tâche écrite dans une note
puisse devenir une carte. Voir [Tableaux](boards.md).

## Comment les annotations sont stockées {#how-annotations-are-stored}

Les annotations font partie du document. Le surlignage est une marque dans le
texte du document, et le commentaire, la couleur et l'état de résolution sont
enregistrés dans le même fichier `.poiesis`, avec vos notes en marge. Rien
n'est stocké à part et rien ne quitte votre ordinateur : copiez ou sauvegardez
le fichier, et ses annotations l'accompagnent.
