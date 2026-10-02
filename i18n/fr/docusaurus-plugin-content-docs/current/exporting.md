---
title: Comment fonctionne l’export
description: Où votre travail peut aller depuis φ, et comment l’y amener.
---

# Comment fonctionne l’export

φ transforme un projet en fichiers que le monde accepte : un livre prêt à
imprimer et sa couverture, un livre numérique, un manuscrit pour un agent, ou
une copie à partager. Commencez par l’endroit où va le livre, et φ ne vous
montre que ce dont cette destination a besoin.

<img src="/img/app/export-light.png" alt="L’onglet Exporter d’un livre : les quatre destinations, la maquette et le format, la vérification et les boutons d’export" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/export-dark.png" alt="L’onglet Exporter d’un livre : les quatre destinations, la maquette et le format, la vérification et les boutons d’export" width="1600" height="1000" loading="lazy" decoding="async" />

## Exporter un projet {#export-a-project}

1. Ouvrez le projet dans **Écrire**, puis choisissez **Exporter** sous celui-ci
   dans la barre latérale.
2. Choisissez sa destination : **Livre imprimé**, **Livre numérique**,
   **Agent ou éditeur** ou **Partager une copie**.
3. Faites les quelques choix que demande cet onglet. φ vérifie le livre au fur
   et à mesure et liste ce qu’il faut corriger.
4. Choisissez **Aperçu** pour voir chaque page avant d’exporter, si vous le
   souhaitez.
5. Appuyez sur le bouton d’export et choisissez où enregistrer le fichier.

Tout est fabriqué sur votre ordinateur, et l’export ne modifie jamais vos
documents : vous pouvez donc exporter aussi souvent que vous le voulez.

## Les quatre destinations {#the-four-destinations}

| Destination | Ce que vous obtenez | Pour en savoir plus |
| --- | --- | --- |
| **Livre imprimé** | Le PDF de l’intérieur et la couverture complète pour KDP, IngramSpark, Lulu et les autres services d’impression à la demande. | [Imprimer un livre](./print-a-book) |
| **Livre numérique** | Un EPUB pour Apple Books, Kindle, Kobo et Google Play. | [Créer un livre numérique](./make-an-ebook) |
| **Agent ou éditeur** | Votre manuscrit au format manuscrit standard, en Word ou en PDF. | [Envoyer à un agent ou un éditeur](./send-to-an-agent) |
| **Partager une copie** | Un PDF à lire, un Word pour continuer à modifier, une page web, du Markdown, du texte enrichi, ou une copie du projet entier. | [Partager une copie](./share-a-copy) |

φ retient la destination et vos choix pour chaque projet.

## Vérifier avant d’exporter {#check-before-you-export}

Pendant que vous faites vos réglages, φ construit le livre en arrière-plan sans
rien enregistrer, et l’onglet indique ce qu’il a trouvé :

- le nombre de pages et la largeur du dos, pour un livre imprimé ;
- ce qu’il faut corriger, comme une couverture manquante, une image de
  couverture trop petite pour s’imprimer nettement, une image sans
  description, ou des coordonnées manquantes dans votre profil d’auteur ;
- ou **Rien à corriger : c’est prêt.**

Certaines remarques sont seulement là pour vous informer, comme un dos trop
étroit pour son titre. Ce qui gâcherait un fichier publié (une image
manquante, par exemple) bloque l’export jusqu’à ce que ce soit corrigé.

## Les pages propres au livre {#the-books-own-pages}

La page de titre, la page de copyright, la dédicace, l’épigraphe, la page
«  Du même auteur  » et «  À propos de l’auteur  » viennent de votre projet, et non
d’un document où vous les auriez tapées :

- la couverture et la description se règlent en haut de la page du projet ;
- tout le reste se trouve dans les [Détails du livre](./book-details), sur la
  même page ;
- «  À propos de l’auteur  » vient du [profil](./characters-and-authors) du
  premier auteur.

## Exporter un seul document {#export-a-single-document}

Pour exporter un seul document plutôt qu’un projet entier, ouvrez-le et
utilisez la palette de commandes (`⌘P`, **Exporter le document en…**) ou le
menu **⋮** du document. Les formats sont PDF, Word, Markdown, une page HTML, un
fragment HTML (seulement le corps, à coller dans un site), le texte enrichi, le
texte brut et TextPack.

**Copier en Markdown** (dans la palette de commandes et le menu du document)
place le texte du document, ou votre sélection, dans le presse-papiers en
Markdown, sans titre ni front matter.

Les liens entre vos propres documents (`[[liens wiki]]`) sortent en texte brut
dans tous les formats : un lecteur qui n’a pas votre coffre n’a rien à suivre.

## Voir aussi {#see-also}

- [Aperçu](./preview) : chaque page avant l’export.
- [Maquettes et ajustements](./designs) : comment le livre est composé.
- [Détails du livre](./book-details) : ce que portent la page de titre et la
  page de copyright.
- [Importer](./importing) : faire entrer votre travail dans φ.
