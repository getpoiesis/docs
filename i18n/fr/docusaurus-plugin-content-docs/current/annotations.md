---
title: Annotations et notes en marge
description: Surlignez un passage, commentez-le et gardez à côté du texte vos notes sur l’ensemble du document.
---

# Annotations et notes en marge

φ Poiesis vous offre deux façons de prendre des notes pour vous-même sur un
document :

- Une **annotation** porte sur un passage. Vous pouvez surligner le passage,
  le commenter, ou les deux.
- Une **note en marge** porte sur le document entier. Par exemple, un rappel
  de ce qui manque encore au chapitre.

Les unes comme les autres sont enregistrées avec le document.

<img src="/img/app/annotations-light.png" alt="Un chapitre avec un passage surligné, et l’onglet Notes du panneau Infos, qui affiche une note en marge et deux annotations avec leurs commentaires" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/annotations-dark.png" alt="Un chapitre avec un passage surligné, et l’onglet Notes du panneau Infos, qui affiche une note en marge et deux annotations avec leurs commentaires" width="1600" height="1000" loading="lazy" decoding="async" />

## Annoter un passage {#annotate-a-passage}

1. Sélectionnez le texte. Une barre d’outils apparaît.
2. Cliquez sur la pastille de couleur (**Surligner et commenter**) et
   choisissez une couleur. Ou cliquez sur **Commenter (sans surlignage)**
   pour laisser le texte sans couleur.
3. Le [panneau Infos](./finding-your-way.md#the-info-panel) s’ouvre sur son
   onglet **Notes**, où la nouvelle annotation vous attend. Écrivez votre
   commentaire dans sa zone de texte.

Cinq couleurs sont proposées : **Jaune**, **Vert**, **Bleu**, **Violet** et
**Orange**. Elles sont douces : le texte reste facile à lire, en thème clair
comme en thème sombre. **Couleur personnalisée** ouvre le sélecteur de
couleurs du système, où vous pouvez choisir n’importe quelle autre couleur.

Pour retirer un surlignage :

1. Sélectionnez le texte.
2. Rouvrez le menu de la pastille.
3. Choisissez **Retirer le surlignage**.

## Retrouver vos notes {#find-your-notes}

Toutes les annotations et les notes en marge d’un document se trouvent dans
l’onglet **Notes** du panneau Infos. Il y a deux façons de l’ouvrir :

- Appuyez sur `⇧⌘A`.
- Ouvrez le panneau Infos (`⇧⌘I`) et cliquez sur son onglet **Notes**.

L’onglet comporte deux parties : les **Notes en marge** en haut, puis les
**Annotations**.

## Travailler avec une annotation {#work-with-an-annotation}

Chaque annotation est une carte, qui montre le passage, sa couleur et votre
commentaire.

| Pour | Faites ceci |
| --- | --- |
| Aller au passage | Cliquez sur le passage cité. Poiesis fait défiler le texte jusqu’à lui et le sélectionne. |
| Écrire ou modifier le commentaire | Tapez dans la zone de texte de la carte (**Ajouter une note…**). |
| Changer sa couleur | Choisissez une autre couleur ou **Couleur personnalisée**. Choisissez **Sans surlignage (commentaire)** pour ne garder que le commentaire. |
| La marquer comme terminée | Cliquez sur la coche (**Marquer comme résolue**). Une annotation résolue est estompée, mais conservée. **Marquer comme non résolue** la rouvre. |
| La supprimer | Cliquez sur la corbeille (**Supprimer l’annotation**). |

Quand un document a des annotations, deux outils supplémentaires
apparaissent :

- **Rechercher des annotations…** retrouve des annotations d’après le passage
  ou d’après votre commentaire.
- Le menu situé à côté filtre la liste : **Toutes**, **Surlignages**,
  **Commentaires**, **Ouvertes** ou **Résolues**.

### Quand le texte a disparu {#when-the-text-is-gone}

Si vous supprimez ou réécrivez le passage d’une annotation, l’annotation est
conservée. Elle porte alors la mention **Détachée du texte**.

Pour la rattacher à un nouveau passage :

1. Sélectionnez le nouveau passage.
2. Cliquez sur **Relier à la sélection**.

## Chercher dans tous les surlignages et commentaires {#search-every-highlight-and-comment}

En haut de l’onglet **Notes**, passez de **Ce document** à **Tous les
documents**. Poiesis affiche alors les surlignages et les commentaires de
tous les documents du coffre.

- Tapez dans **Chercher dans chaque surlignage et commentaire…**. Poiesis
  cherche dans les mots que couvre chacun d’eux et dans vos commentaires. Les
  majuscules et les accents n’ont pas d’importance.
- Le filtre n’affiche que les **Surlignages**, les **Commentaires**, les
  **Ouvertes** ou les **Résolues**.
- Cliquez sur l’un d’eux pour ouvrir son document.

Vous pouvez aussi y accéder depuis la palette de commandes (`⌘P`) : choisissez
**Chercher dans tous les surlignages et commentaires**.

## Les rassembler dans un document {#gather-them-into-a-document}

Pour réunir les annotations d’un document en un seul endroit, ouvrez l’onglet
**Notes** et cliquez sur **Rassembler dans un document**, en haut. Poiesis
crée un nouveau document, *Notes sur* suivi du titre du document. Il contient
chaque surlignage et chaque commentaire dans l’ordre de lecture : les mots
couverts, en citation, avec votre commentaire en dessous. Les notes en marge
viennent ensuite.

- Les annotations résolues portent la mention **résolue**.
- Une annotation dont le texte a été supprimé garde les mots sur lesquels
  elle a été faite.

Pour faire de même avec tout un livre, faites un clic droit sur le projet dans
la barre latérale et choisissez **Rassembler notes et surlignages**. Le
nouveau document avance chapitre par chapitre, sous le titre de chaque
chapitre.

Dans la palette de commandes, **Rassembler les notes et surlignages de ce
document** fait de même pour le document ouvert.

## Écrire une note en marge {#write-a-margin-note}

1. Ouvrez l’onglet **Notes** (`⇧⌘A`).
2. Cliquez sur le **+** à côté de **Notes en marge** (**Ajouter une note en
   marge**).
3. Écrivez dans la zone de texte (**Écrivez une note sur ce document…**).

Chaque note en marge indique quand vous l’avez écrite. Son icône de corbeille
(**Supprimer la note en marge**) la supprime.

:::note Où elles sont conservées

Les annotations et les notes en marge sont enregistrées dans le fichier même
du document. Quand vous copiez ou sauvegardez ce fichier, elles sont copiées
avec lui. Rien ne quitte votre ordinateur.

:::

## Voir aussi {#see-also}

- [Tableaux](./boards.md) : les éléments de liste de tâches que vous pouvez
  suivre sur un tableau se trouvent dans l’onglet **Tâches**.
- [L’éditeur](./the-editor.md)
- [Versions et sauvegarde](./versions-and-backup.md)
