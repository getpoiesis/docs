---
title: Créer un livre numérique
description: Un EPUB pour Apple Books, Kindle, Kobo et Google Play.
---

# Créer un livre numérique

Pour vendre ou partager votre livre en version numérique, il vous faut un
fichier EPUB. Toutes les librairies en ligne l’acceptent : Apple Books, Kindle
(KDP), Kobo et Google Play. Vous le créez dans l’onglet **Livre numérique** de
la page **Exporter** du projet.

L’EPUB contient votre couverture, les pages propres au livre et une table des
matières dont se servent les applications de lecture. Il reprend la maquette du
livre imprimé.

## Créer le fichier {#make-the-file}

1. Ouvrez la page **Exporter** du projet.
2. Choisissez **Livre numérique**.
3. Choisissez la **Maquette**. Le livre imprimé utilise la même : les deux
   versions sont donc assorties.
4. Lisez la vérification. Elle dresse la liste de ce qu’il faut corriger avant
   d’exporter. Corrigez chaque point.
5. Choisissez **Aperçu**, puis **Livre numérique**. Le livre s’affiche comme
   dans une application de lecture.
6. Appuyez sur **Exporter l’EPUB**.
7. Choisissez où enregistrer le fichier.

## Ce qui distingue un livre numérique d’un livre imprimé {#how-an-ebook-differs-from-print}

Dans un livre numérique, c’est le lecteur qui choisit la taille du texte, la
police et l’écran. Le texte **se recompose** donc : il s’adapte à l’écran,
quel qu’il soit. Un livre numérique n’a ni pages fixes, ni numéros de page, ni
titres courants.

Voici ce qui est conservé de la maquette :

- les polices, que φ Poiesis intègre au fichier ;
- l’ouverture des chapitres : le numéro et le titre ensemble, puis une
  lettrine ou les premiers mots en petites capitales ;
- l’ornement entre les scènes ;
- la page de titre, la page de copyright, la dédicace, l’épigraphe et la page
  « À propos de l’auteur ».

## Ce que vérifient les librairies {#what-the-stores-look-for}

Une librairie peut refuser un livre s’il lui manque quelque chose. La
vérification contrôle les points suivants :

- **Une couverture.** Les librairies l’affichent dans leur catalogue. Son grand
  côté doit mesurer au moins 1600 pixels ; l’idéal est 2560. Vous la
  définissez en haut de la page du projet.
- **Une description pour chaque image** (texte alternatif). Elle est destinée
  aux lecteurs qui ne peuvent pas voir les images.
- **Un ISBN**, si vous en avez un pour le livre numérique. Saisissez-le dans
  **ISBN (numérique)**, dans les [Détails du livre](./book-details.md). KDP et
  Google Play n’en exigent pas.

Pendant qu’il crée le fichier, Poiesis vérifie aussi que l’EPUB respecte la norme
EPUB.

## Voir aussi {#see-also}

- [Aperçu](./preview.md) : pour voir le livre numérique sur un téléphone, une
  tablette ou un écran.
- [Maquettes et ajustements](./designs.md)
- [Imprimer un livre](./print-a-book.md)
