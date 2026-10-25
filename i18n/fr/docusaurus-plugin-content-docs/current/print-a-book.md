---
title: Imprimer un livre
description: Le PDF de l’intérieur et la couverture complète pour KDP, IngramSpark et les autres services d’impression à la demande.
---

# Imprimer un livre

Un service d’impression à la demande réclame deux fichiers. L’onglet **Livre
imprimé** produit les deux :

- l’**intérieur** : les pages du livre, dans un PDF prêt à imprimer ;
- la **couverture** : le premier plat, le dos et la quatrième de couverture
  sur une seule page.

φ Poiesis calcule les marges et les pages blanches à placer avant les chapitres. Il
calcule aussi la largeur du dos d’après le nombre de pages.

<img src="/img/app/print-book-light.png" alt="L’onglet Livre imprimé : maquette, format, papier et encre, la vérification et les deux boutons d’export" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/print-book-dark.png" alt="L’onglet Livre imprimé : maquette, format, papier et encre, la vérification et les deux boutons d’export" width="1600" height="1000" loading="lazy" decoding="async" />

## Produire les fichiers {#make-the-files}

1. Ouvrez la page **Exporter** du projet (voir
   [Comment fonctionne l’export](./exporting.md)) et choisissez **Livre
   imprimé**.
2. Réglez les quatre points que demande un imprimeur :
   - **Maquette** : l’allure du livre (voir [Maquettes et ajustements](./designs.md)).
   - **Format** : les dimensions de la page imprimée.
   - **Papier** : **Blanc** ou **Crème**.
   - **Encre** : **Noire**, ou **Garder la couleur de φ**.
3. Si vous le souhaitez, changez l’allure des pages avec **Mettre en page…**
   (voir [Maquettes](./designs.md#design-the-book)), et réglez la quatrième de
   couverture et le dos sous **Couverture** (voir [La couverture](#the-cover)).
4. Lisez la vérification affichée sous ces choix et corrigez ce qu’elle
   signale.
5. Appuyez sur **Exporter le PDF d’impression** pour produire l’intérieur.
6. Appuyez sur **Exporter la couverture** pour produire la couverture.
7. Envoyez les deux fichiers à votre service d’impression. Ils se déposent
   séparément.

## Choisir le format {#choosing-the-trim-size}

| Format | Courant pour |
| --- | --- |
| **5 × 8 in (12,7 × 20,3 cm)** | Les livres de poche grand public |
| **5,25 × 8 in (13,3 × 20,3 cm)** | Les romans courts |
| **Digest — 5,5 × 8,5 po** | Les romans, les mémoires, la poésie |
| **Trade — 6 × 9 po** | La plupart des romans et des essais ; le choix sûr |
| **6,14 × 9,21 in (15,6 × 23,4 cm)** | Les essais et documents de plus grand format |
| **7 × 10 in (17,8 × 25,4 cm)** | Les cahiers d’exercices et les livres illustrés |
| **Letter — 8,5 × 11 po** | Les manuels et les livres grand format |

Ce sont les formats qu’impriment KDP et IngramSpark. Il arrive qu’un projet
soit réglé sur un format de papier qu’ils n’impriment pas, comme l’A4. L’onglet
vous le signale alors et vous demande de choisir l’un de ces formats.

## Le papier et l’encre {#paper-and-ink}

Le papier **Crème** est courant pour la fiction, le papier **Blanc** pour les
essais et les documents. Le papier crème est un peu plus épais : le même livre
a donc un dos plus large sur papier crème.

Par défaut, les liens et les citations s’impriment en noir. Aucune couleur de
votre écran ne se retrouve ainsi sur une page imprimée. Les images, elles,
gardent toujours leurs couleurs. Ne choisissez **Garder la couleur de φ** que
si vous payez une impression en couleur.

## Ce dont Poiesis s’occupe {#what-Poiesis-takes-care-of}

- **Les chapitres commencent en belle page**, c’est-à-dire sur une page de
  droite. Quand la maquette le demande, Poiesis ajoute une page blanche avant le
  chapitre là où il en faut une. Vous pouvez désactiver cela dans **Mettre
  en page…**, sous **Les chapitres commencent**.
- **Des marges adaptées à la reliure.** Plus le livre a de pages, plus la
  marge intérieure est large, pour que le texte ne se perde pas dans la
  reliure. Les services d’impression l’exigent.
- **Les limites du nombre de pages.** Un livre broché doit compter au moins
  24 pages et au plus 828. La vérification vous prévient si votre livre en a
  moins ou plus.
- **Pas de couverture dans l’intérieur.** La couverture est un fichier à part.
- **Les notes** se placent en bas de leur page.
- **Les titres courants et les numéros de page** suivent la maquette. La
  première page d’un chapitre n’en porte pas.

## La couverture {#the-cover}

**Exporter la couverture** produit un seul PDF avec la quatrième de
couverture, le dos et le premier plat. Il y ajoute le fond perdu : un huitième
de pouce en plus sur tout le pourtour, que le service d’impression coupe. Le
PDF indique où la page est massicotée, pour que le service d’impression lise
correctement le fond perdu.

- **Le premier plat**, c’est votre illustration de couverture. Elle se choisit
  en haut de la page du projet.
- **La quatrième de couverture** porte la description du livre et la courte
  biographie du premier auteur.
- **Le dos** est dimensionné d’après le nombre de pages et le papier. À partir
  de 80 pages, il porte le titre et l’auteur. En dessous de 80 pages, il est
  trop étroit pour du texte et reste uni.

Ouvrez **Couverture**, sous **Options**, pour régler le reste :

| Choix | Ce qu’il fait |
| --- | --- |
| **Quatrième et dos** | Leur couleur : **D’après l’illustration**, ou **Une couleur choisie**, avec un sélecteur de couleur. |
| **Code-barres ISBN** | **Laisser libre (KDP)** : KDP ajoute son propre code-barres, la zone reste donc vide. **D’après l’ISBN** : Poiesis dessine le code-barres à partir de l’**ISBN (imprimé)** des [Détails du livre](./book-details.md). IngramSpark et la plupart des imprimeurs le demandent. |
| **Largeur du dos (in)** | Laissez ce champ vide, et Poiesis calcule le dos d’après le nombre de pages et le papier. Si le calculateur de couverture de votre imprimeur donne un autre chiffre, tapez le sien ici. |
| **Image de la quatrième** | Votre propre image pour la quatrième, du dos au bord, avec le fond perdu. Pour un livre de 6 × 9 po, environ 1840 × 2775 pixels. |
| **Texte sur la quatrième** | Avec une image : **Description et biographie** les place sur votre image, dans une couleur lisible dessus, et l’image sert de fond. **Aucun** les retire quand votre image a déjà son propre texte. |
| **Image du dos** | Votre propre image pour le dos. Elle remplace le titre et l’auteur que Poiesis y place. |

**Vérifier la couverture** montre toute la couverture à plat : la quatrième,
le dos et le premier plat. Des lignes rouges indiquent ce que l’imprimeur
coupe et où le dos se plie. Gardez le texte à l’intérieur des lignes bleues.
La zone du code-barres est aussi signalée. C’est le fichier que produit
Poiesis, pas une photo du livre imprimé.

<img src="/img/app/check-cover-light.png" alt="Vérifier la couverture : la quatrième, le dos et le premier plat à plat, avec la coupe, le pli et la zone du code-barres signalés" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/check-cover-dark.png" alt="Vérifier la couverture : la quatrième, le dos et le premier plat à plat, avec la coupe, le pli et la zone du code-barres signalés" width="1600" height="1000" loading="lazy" decoding="async" />

La vérification vous avertit quand l’illustration de couverture est trop
petite pour une impression nette. Une couverture imprimée demande environ
300 pixels par pouce. Elle vous avertit aussi quand la largeur du dos que vous
avez tapée s’éloigne beaucoup de celle que donne le nombre de pages, ou quand
vous avez choisi un code-barres alors que le livre n’a pas d’ISBN imprimé.

:::tip Commandez une épreuve

Avant de publier, commandez un exemplaire d’épreuve à votre service
d’impression. C’est le seul moyen de voir les couleurs, les marges et le dos
tels qu’un lecteur les verra.

:::

## Voir aussi {#see-also}

- [Aperçu](./preview.md) : toutes les pages du livre, en doubles pages.
- [Maquettes et ajustements](./designs.md)
- [Détails du livre](./book-details.md) : la page de titre, la page de copyright
  et l’ISBN.
- [Créer un livre numérique](./make-an-ebook.md) : le même livre pour les
  applications de lecture.
