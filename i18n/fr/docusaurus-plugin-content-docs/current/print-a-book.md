---
title: Imprimer un livre
description: Le PDF de l’intérieur et la couverture complète pour KDP, IngramSpark et les autres services d’impression à la demande.
---

# Imprimer un livre

L’onglet **Livre imprimé** crée les deux fichiers que demande un service
d’impression à la demande : l’intérieur, en PDF prêt à imprimer, et la
couverture, avec la première, le dos et la quatrième sur une seule page. φ
calcule les marges, les pages blanches avant les chapitres et le dos d’après le
nombre de pages.

<img src="/img/app/export-light.png" alt="L’onglet Livre imprimé : maquette, format, papier et encre, la vérification, et Exporter la couverture et Exporter le PDF d’impression" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/export-dark.png" alt="L’onglet Livre imprimé : maquette, format, papier et encre, la vérification, et Exporter la couverture et Exporter le PDF d’impression" width="1600" height="1000" loading="lazy" decoding="async" />

## Créer les fichiers {#make-the-files}

1. Ouvrez la page **Exporter** du projet et choisissez **Livre imprimé**.
2. Choisissez les quatre éléments que demande un service d’impression :
   - **Maquette** : la composition du livre (voir [Maquettes](./designs)).
   - **Format** : la taille de la page imprimée.
   - **Papier** : **Blanc** ou **Crème**.
   - **Encre** : **Noire**, ou garder la couleur de φ.
3. Lisez la vérification sous les choix, et corrigez ce qu’elle signale.
4. Appuyez sur **Exporter le PDF d’impression** pour l’intérieur.
5. Appuyez sur **Exporter la couverture** pour la couverture complète.
6. Envoyez les deux fichiers séparément à votre service d’impression.

## Choisir le format {#choosing-the-trim-size}

| Format | Courant pour |
| --- | --- |
| **5 × 8 in (12,7 × 20,3 cm)** | Les livres de poche grand public |
| **5,25 × 8 in (13,3 × 20,3 cm)** | Les romans plus courts |
| **Digest — 5,5 × 8,5 po** | Romans, mémoires, poésie |
| **Trade — 6 × 9 po** | La plupart des œuvres de fiction et des essais ; le choix sûr |
| **6,14 × 9,21 in (15,6 × 23,4 cm)** | Les essais de plus grand format |
| **7 × 10 in (17,8 × 25,4 cm)** | Cahiers d’exercices et livres illustrés |
| **Letter — 8,5 × 11 po** | Manuels et livres grand format |

Ce sont les formats qu’impriment KDP et IngramSpark. Si un projet est réglé sur
un papier qu’ils n’impriment pas (A4, par exemple), l’onglet le signale et vous
demande d’en choisir un.

## Papier et encre {#paper-and-ink}

Le **Crème** est courant en fiction et le **Blanc** pour les essais. Le crème
est un peu plus épais : le même livre a donc un dos plus large.

Les liens et les citations s’impriment en noir par défaut, pour qu’aucune
couleur d’écran n’atteigne une page imprimée. Les images gardent leur couleur
dans les deux cas. Ne choisissez **Garder la couleur de φ** que si vous payez
une impression en couleur.

## Ce dont φ s’occupe {#what-φ-takes-care-of}

- **Les chapitres s’ouvrent en belle page.** φ ajoute la page blanche qui les
  précède quand une maquette le demande. Vous pouvez désactiver cela dans
  **Ajuster la maquette**.
- **Des marges pour la reliure.** La marge intérieure augmente avec le nombre
  de pages, comme l’exigent les services d’impression, pour que le texte ne
  disparaisse pas dans le dos.
- **Les limites de pagination.** Un broché demande au moins 24 pages et en
  contient au plus 828 ; la vérification vous prévient si le livre sort de ces
  limites.
- **Pas de couverture dans l’intérieur.** La couverture est un fichier à part.
- **Les notes en bas de leur page**, ainsi que les titres courants et les
  numéros de page tels que la maquette les définit, sans aucun sur les
  ouvertures de chapitre.

## La couverture {#the-cover}

**Exporter la couverture** crée un seul PDF avec la quatrième, le dos et la
première de couverture, plus le huitième de pouce de fond perdu que les
services d’impression rognent.

- **La première de couverture** est votre illustration de couverture, définie
  en haut de la page du projet.
- **La quatrième et le dos** prennent leur couleur de l’illustration de
  couverture. La quatrième porte la description du livre et la courte
  biographie du premier auteur, et laisse libre le coin où va le code-barres.
- **Le dos** est dimensionné d’après le nombre de pages et le papier. À partir
  de 80 pages, il porte le titre et l’auteur ; en dessous, il est trop étroit et
  reste nu.

La vérification vous avertit quand l’illustration de couverture est trop petite
pour s’imprimer nettement : une couverture imprimée demande environ 300 pixels
par pouce.

:::tip Commandez un exemplaire d’épreuve

Avant de publier, commandez une épreuve imprimée à votre service d’impression.
C’est le seul moyen de voir les couleurs, les marges et le dos tels qu’un
lecteur les verra.

:::

## Voir aussi {#see-also}

- [Aperçu](./preview) : chaque page du livre, en doubles pages.
- [Maquettes et ajustements](./designs)
- [Détails du livre](./book-details) : la page de titre, la page de copyright et
  l’ISBN.
- [Créer un livre numérique](./make-an-ebook) : le même livre pour les
  applications de lecture.
