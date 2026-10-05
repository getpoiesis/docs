---
title: Poésie et vers
description: Des vers qui gardent leurs lignes, des strophes, des épigraphes et des exergues, un recueil de poèmes et la maquette Poésie.
---

# Poésie et vers

Pour écrire un poème, utilisez un bloc **Vers**. φ garde vos retours à la
ligne, vos strophes et vos retraits exactement tels que vous les écrivez, et
chaque export les imprime à l’identique.

<img src="/img/app/poem-light.png" alt="Un poème sur la page : une épigraphe avec sa source, deux strophes alignées sur la marge du texte, un saut de scène entre elles et un exergue en dessous" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/poem-dark.png" alt="Un poème sur la page : une épigraphe avec sa source, deux strophes alignées sur la marge du texte, un saut de scène entre elles et un exergue en dessous" width="1600" height="1000" loading="lazy" decoding="async" />

## Écrire un poème {#write-a-poem}

1. Ouvrez un poème dans un [projet](./collections). Pour en commencer un
   nouveau, cliquez sur le **+** au-dessus de la liste et choisissez
   **Ajouter poème**.
2. Tapez `/verse` et appuyez sur `Enter`, ou appuyez sur `⌥⌘V`. Un bloc de
   vers commence.
3. Écrivez. Appuyez sur `Enter` pour passer au vers suivant.
4. Appuyez deux fois sur `Enter` pour laisser une ligne vide entre deux
   strophes.
5. Appuyez sur `⌘↩` pour sortir des vers et commencer un paragraphe ordinaire
   en dessous.

Un projet est un livre, ou tout autre texte long composé de plusieurs
documents. Vous pouvez aussi écrire un poème à part, en brouillon dans
Écrire, ou dans une note ou un jour du journal : les vers sont proposés dans
tous les documents, sauf les pages du matin. Les épigraphes, les exergues et
les sauts de scène sont réservés aux documents d’Écrire, dans un projet ou
non.

## Comment les vers sont composés {#how-verse-is-set}

Les vers n’ont ni cadre ni filet sur le côté. Ils partent de la même marge que
le reste du texte, sans retrait, et chaque vers s’arrête là où vous l’avez
arrêté.

- **Les retraits sont conservés.** Si vous commencez un vers par des espaces
  ou par `Tab`, il garde ce retrait sur la page et dans tous les exports.
- **Les vers ne sont ni justifiés ni coupés.** φ n’étire pas une ligne et ne
  coupe pas un mot.
- **Un vers trop long pour la page imprimée** se poursuit sur la ligne
  suivante, en retrait. C’est ainsi que les éditeurs impriment la poésie.
- **Une ligne vide** sépare deux strophes.

L’italique et les autres mises en forme fonctionnent dans les vers comme dans
le reste du texte.

## Passer de la prose aux vers, et inversement {#turn-prose-into-verse-and-back}

Si vous avez déjà écrit le poème sous forme de paragraphes, vous pouvez les
transformer en vers :

1. Sélectionnez les paragraphes.
2. Choisissez **Vers** : tapez `/verse` ou appuyez sur `⌥⌘V`.

Chaque paragraphe devient un vers, et chaque paragraphe vide devient un saut
de strophe.

Pour retransformer des vers en paragraphes, placez le curseur dans les vers et
choisissez de nouveau **Vers**. Chaque vers devient un paragraphe à part
entière.

## Ouvrir sur une épigraphe {#open-with-an-epigraph}

Une épigraphe est une citation placée en tête d’un texte.

1. Tapez `/epigraph` et appuyez sur `Enter`.
2. Écrivez la citation.
3. Appuyez sur `↓` à la dernière ligne de la citation. Le curseur passe dans
   le champ d’attribution, juste en dessous.
4. Indiquez-y la source.

Pour placer une épigraphe en ouverture du livre entier, ajoutez-la dans les
[Détails du livre](./book-details) du projet. φ l’imprime alors sur une page
à part.

## Détacher une ligne {#set-a-line-apart}

- **Exergue** (`/pull-quote`) : affiche une phrase en grands caractères.
  Réservez-le à une formule que vous voulez faire remarquer au lecteur.
- **Saut de scène** (`/scene`) : place un ornement centré entre deux sections.
  L’ornement peut être **Astérisme** ⁂, **Étoiles** \* \* \*, **Fleuron** ❧ ou
  **Espace vide**. Placez le pointeur sur le saut de scène pour en choisir un
  autre.

Dans un livre exporté, tous les sauts de scène prennent l’ornement de la
maquette du livre. Pour changer cet ornement, allez dans **Ajuster la
maquette → Entre les scènes**.

| Bloc | Pour l’insérer |
| --- | --- |
| **Vers** | `/verse` ou `⌥⌘V` |
| **Épigraphe** | `/epigraph` |
| **Exergue** | `/pull-quote` |
| **Saut de scène** | `/scene` |

## Composer un recueil de poèmes {#make-a-collection-of-poems}

Un projet de type **Poésie** se compose de **Poèmes**, regroupés en
**Parties**. Il y a deux façons de définir ce type :

- Pour un projet existant, ouvrez la page du projet et allez dans
  **Réglages → Type**.
- Pour un nouveau projet, choisissez **Poésie** quand l’Accueil d’Écrire vous
  propose **Commencer un projet**.

Un projet Poésie fonctionne comme n’importe quel autre projet. Vous pouvez
ordonner les poèmes dans **Sommaire**, ajouter une dédicace dans les pages
liminaires et fixer un objectif.

## Exporter avec la maquette Poésie {#export-with-the-poetry-design}

1. Ouvrez la page **Exporter** du projet.
2. Sous **Livre imprimé** ou **Livre numérique**, choisissez la maquette
   **Poésie**.

La maquette Poésie imprime les vers comme il se doit. Elle garde vos lignes,
sans les justifier ni couper les mots, et ne met pas de retrait à la première
ligne. Chaque poème commence sur une nouvelle page, avec de l’espace autour.

:::tip Un format pour les poèmes
**Digest — 5,5 × 8,5 po** est un format courant pour un recueil de poésie
imprimé.
:::

## Voir aussi {#see-also}

- [Maquettes et ajustements](./designs)
- [Imprimer un livre](./print-a-book)
- [Mise en forme et blocs](./formatting-and-blocks)
- [Projets](./collections)
