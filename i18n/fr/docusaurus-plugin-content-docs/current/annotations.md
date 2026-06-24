---
title: Annotations
sidebar_position: 9
---

# Annotations

Les annotations vous permettent de marquer un passage et d’en dire quelque
chose — un surlignage pour le signaler, un commentaire en marge pour vous
rappeler pourquoi. Elles vivent avec le document, de sorte que vos notes pour
vous-même voyagent avec le brouillon.

## Surligner un passage

Sélectionnez du texte. La barre d’outils flottante apparaît ; cliquez sur l’icône
de **surligneur** (**Surligner et commenter**) pour ouvrir son menu, puis
choisissez une couleur. Le texte sélectionné reçoit un surlignage doux dans cette
couleur.

Il y a cinq couleurs prédéfinies — **Jaune**, **Vert**, **Bleu**, **Violet** et
**Orange**. Elles sont translucides, si bien qu’elles se lisent bien dans les
thèmes clairs comme sombres.

### Une couleur personnalisée

À côté des couleurs prédéfinies se trouve une pastille de **couleur
personnalisée**. Cliquez dessus pour ouvrir le sélecteur de couleurs du système
et choisir la couleur de votre choix pour le surlignage.

## Un commentaire sans surlignage

Parfois, vous voulez noter quelque chose sans colorer le texte. Dans le menu du
surligneur, choisissez **Sans surlignage (commentaire)**. φ attache un
commentaire à la sélection sans la teinter — vous écrivez la note elle-même dans
le panneau Annotations. Chaque surlignage peut aussi porter un commentaire ; les
deux fonctionnent ensemble.

Pour retirer un surlignage, sélectionnez le texte surligné et choisissez
**Retirer le surlignage** dans le même menu.

## Le panneau Annotations

Ouvrez le panneau de droite (`⌘]` l’affiche ou le masque) et choisissez l’onglet
**Annotations** pour voir chaque annotation du document en cours. Chaque carte
affiche le texte cité, sa couleur et un champ pour votre commentaire.

Depuis le panneau, vous pouvez :

- **Aller au texte** — cliquez sur la citation d’une carte pour faire défiler
  jusqu’à ce passage et le sélectionner dans l’éditeur. (Cliquer sur un
  surlignage dans l’éditeur fonctionne dans l’autre sens : cela ouvre cette
  annotation dans le panneau.)
- **Écrire ou modifier un commentaire** — tapez dans le champ de note de la
  carte.
- **Recolorer** — choisissez une autre couleur prédéfinie, une couleur
  personnalisée, ou **Sans surlignage (commentaire)**.
- **Résoudre** — cliquez sur la coche pour marquer une annotation comme faite ;
  les annotations résolues sont estompées mais conservées.
- **Supprimer** — cliquez sur l’icône de corbeille pour supprimer l’annotation.

### Retrouver des annotations

Lorsqu’un document comporte plusieurs annotations, utilisez le champ de
**recherche** pour filtrer par le texte cité ou votre commentaire, et le menu de
**filtre** pour n’afficher que les Surlignages, les Commentaires, les
annotations Ouvertes ou Résolues.

### Annotations détachées

Si le texte vers lequel pointait une annotation est modifié et disparaît,
l’annotation devient **détachée** — elle est conservée dans le panneau et
marquée, avec une action **Relier à la sélection** pour que vous puissiez la
réancrer à un nouveau passage.

## Comment les annotations sont stockées

Les annotations font partie du document. Le surlignage coloré est une marque dans
le contenu du document (une petite étiquette `annotationId` sur le texte), et le
commentaire, la couleur et l’état résolu sont enregistrés dans les métadonnées du
document, au sein du même fichier `.poiesis`. Rien n’est stocké séparément et
rien ne quitte votre Mac — copiez ou sauvegardez le fichier et ses annotations
suivent.
