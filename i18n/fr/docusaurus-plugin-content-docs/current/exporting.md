---
title: Comment fonctionne l’export
description: Où votre travail peut aller en sortant de φ Poiesis, et comment l’y amener.
---

# Comment fonctionne l’export

Exporter, c’est tirer de votre texte un fichier utilisable en dehors de φ Poiesis. À
partir d’un projet, un livre par exemple, Poiesis peut produire :

- un livre prêt à imprimer et sa couverture ;
- un livre numérique ;
- un manuscrit pour un agent ou un éditeur ;
- une copie à partager.

Vous commencez par dire où va le livre. Poiesis ne vous montre ensuite que les choix
utiles pour cette destination.

<img src="/img/app/export-light.png" alt="L’onglet Exporter d’un livre : les quatre destinations, la maquette et le format, la vérification et les boutons d’export" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/export-dark.png" alt="L’onglet Exporter d’un livre : les quatre destinations, la maquette et le format, la vérification et les boutons d’export" width="1600" height="1000" loading="lazy" decoding="async" />

## Exporter un projet {#export-a-project}

1. Ouvrez le projet dans **Écrire**.
2. Choisissez **Exporter**, sous le projet, dans la barre latérale.
3. Choisissez la destination : **Livre imprimé**, **Livre numérique**, **Agent
   ou éditeur** ou **Partager une copie**.
4. Faites les choix que l’onglet vous propose. Pendant ce temps, Poiesis vérifie le
   livre et vous signale tout ce qu’il faut corriger.
5. Si vous voulez d’abord voir toutes les pages, choisissez **Aperçu**.
6. Appuyez sur le bouton d’export et choisissez où enregistrer le fichier.

Poiesis fabrique tous les fichiers sur votre ordinateur. L’export ne modifie jamais
vos documents : vous pouvez donc exporter aussi souvent que vous le voulez.

## Les quatre destinations {#the-four-destinations}

| Destination | Ce que vous obtenez | Pour en savoir plus |
| --- | --- | --- |
| **Livre imprimé** | Le PDF de l’intérieur et la couverture complète pour KDP, IngramSpark, Lulu et les autres services d’impression à la demande. | [Imprimer un livre](./print-a-book) |
| **Livre numérique** | Un EPUB pour Apple Books, Kindle, Kobo et Google Play. | [Créer un livre numérique](./make-an-ebook) |
| **Agent ou éditeur** | Votre manuscrit au format standard de manuscrit (Standard Manuscript Format), en Word ou en PDF. | [Envoyer à un agent ou un éditeur](./send-to-an-agent) |
| **Partager une copie** | Un PDF à lire, un fichier Word pour continuer à modifier le texte, une page web, du Markdown, du texte enrichi, ou une copie du projet entier. | [Partager une copie](./share-a-copy) |

Poiesis retient la destination et vos choix pour chaque projet.

## Vérifier avant d’exporter {#check-before-you-export}

Pendant que vous faites vos choix, Poiesis monte le livre en arrière-plan, sans rien
enregistrer. L’onglet affiche ensuite ce qu’il a relevé :

- le nombre de pages et la largeur du dos, pour un livre imprimé ;
- ce qu’il faut corriger. Par exemple : une couverture manquante, une
  illustration de couverture trop petite pour une impression nette, une image
  sans description, ou des coordonnées absentes de votre profil d’auteur ;
- ou bien **Rien à corriger : c’est prêt.**

Les remarques sont de deux sortes :

- Certaines sont là pour information seulement. Par exemple : le dos est trop
  étroit pour porter le titre. Vous pouvez exporter quand même.
- D’autres signalent un problème qui gâcherait un fichier publié. Par
  exemple : une image manquante. Tant qu’il n’est pas corrigé, vous ne pouvez
  pas exporter.

## Les pages propres au livre {#the-books-own-pages}

Ce sont la page de titre, la page de copyright, la dédicace, l’épigraphe, la
page « Du même auteur » et « À propos de l’auteur ». Vous ne les tapez pas dans
un document : Poiesis les compose à partir de ce que vous indiquez dans le projet.

- La couverture et la description se règlent en haut de la page du projet.
- Tout le reste se trouve dans [Détails du livre](./book-details), sur la même
  page.
- « À propos de l’auteur » vient du [profil](./characters-and-authors) du
  premier auteur.

## Exporter un seul document {#export-a-single-document}

Pour exporter un document et non un projet entier :

1. Ouvrez le document.
2. Appuyez sur `⌘P` et choisissez **Exporter le document en…**, ou ouvrez le
   menu ⋮ du document.
3. Choisissez un format.

Les formats sont :

- PDF
- Word
- Markdown
- une page HTML
- un fragment HTML (le corps seul, à coller dans un site web)
- texte enrichi
- texte brut
- TextPack

**Copier en Markdown** copie le texte du document, ou votre sélection, dans le
presse-papiers au format Markdown. La copie ne comporte ni titre ni
en-tête (front matter). Cette commande se trouve dans la palette de
commandes (`⌘P`) et dans le menu ⋮ du document.

Les liens entre vos propres documents (`[[liens wiki]]`) deviennent du texte
simple dans tous les formats : un lecteur extérieur à votre coffre ne pourrait
pas les suivre.

## Voir aussi {#see-also}

- [Aperçu](./preview) : toutes les pages avant d’exporter.
- [Maquettes et ajustements](./designs) : l’allure du livre.
- [Détails du livre](./book-details) : ce qu’affichent la page de titre et la
  page de copyright.
- [Importer](./importing) : faire entrer vos textes dans Poiesis.
