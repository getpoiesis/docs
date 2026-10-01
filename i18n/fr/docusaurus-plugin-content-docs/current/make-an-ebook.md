---
title: Créer un livre numérique
description: Un EPUB pour Apple Books, Kindle, Kobo et Google Play.
---

# Créer un livre numérique

L’onglet **Livre numérique** crée un EPUB, le fichier qu’accepte chaque
librairie numérique : Apple Books, Kindle (KDP), Kobo et Google Play. Il
contient votre couverture, les pages propres au livre et une table des matières
que les applications de lecture savent utiliser, le tout composé dans la même
maquette que le livre imprimé.

## Créer le fichier {#make-the-file}

1. Ouvrez la page **Exporter** du projet et choisissez **Livre numérique**.
2. Choisissez la **Maquette**. C’est la même que celle du livre imprimé : les
   deux concordent.
3. Lisez la vérification, et corrigez ce qu’elle signale.
4. Choisissez **Aperçu**, puis **Livre numérique**, pour le feuilleter comme le
   ferait une application de lecture.
5. Appuyez sur **Exporter l’EPUB** et choisissez où l’enregistrer.

## En quoi un livre numérique diffère de l’imprimé {#how-an-ebook-differs-from-print}

Les lecteurs choisissent leur taille de texte, leur police et leur écran : un
livre numérique **se recompose**. Il n’y a ni pages fixes, ni numéros de page,
ni titres courants. Ce que la maquette transmet, c’est tout ce qui n’est pas la
page :

- les polices, que φ intègre au fichier ;
- l’ouverture des chapitres : le numéro et le titre du chapitre ensemble, puis
  une lettrine ou les premiers mots en petites capitales ;
- l’ornement entre les scènes ;
- la page de titre, la page de copyright, la dédicace, l’épigraphe et « À
  propos de l’auteur ».

## Ce que regardent les librairies {#what-the-stores-look-for}

La vérification couvre ce pour quoi les librairies refusent un livre :

- **Une couverture.** Les librairies présentent le livre avec elle. Elle doit
  mesurer au moins 1600 pixels sur son grand côté ; 2560, c’est l’idéal.
  Définissez-la en haut de la page du projet.
- **Des descriptions pour les images** (texte alternatif), pour les lecteurs
  qui ne peuvent pas les voir.
- **Un ISBN**, si vous en avez un pour le livre numérique : ajoutez-le dans
  **ISBN (numérique)** dans les [Détails du livre](./book-details). KDP et
  Google Play n’en ont pas besoin.

L’EPUB est vérifié selon la norme EPUB au moment où il est créé.

## Voir aussi {#see-also}

- [Aperçu](./preview) : feuilletez le livre numérique sur un téléphone, une
  tablette ou un écran.
- [Maquettes et ajustements](./designs)
- [Imprimer un livre](./print-a-book)
