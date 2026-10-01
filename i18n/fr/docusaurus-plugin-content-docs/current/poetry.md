---
title: Poésie et vers
description: Des vers qui gardent leurs lignes, leurs strophes, leurs épigraphes et leurs exergues, un recueil de poèmes, et la maquette Poésie.
---

# Poésie et vers

Les vers d’un poème sont le poème, alors φ les garde exactement tels que vous
les écrivez. **Vers** place vos lignes à la marge même du texte, avec vos
retours à la ligne, vos strophes et vos retraits, et chaque export les imprime
de la même façon.

<img src="/img/app/poem-light.png" alt="Un poème sur la page : une épigraphe avec sa source, deux strophes en vers à la marge du texte, un saut de scène entre elles et un exergue en dessous" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/poem-dark.png" alt="Un poème sur la page : une épigraphe avec sa source, deux strophes en vers à la marge du texte, un saut de scène entre elles et un exergue en dessous" width="1600" height="1000" loading="lazy" decoding="async" />

## Écrire un poème {#write-a-poem}

1. Ouvrez un poème dans un [projet](./collections), ou commencez-en un avec
   **Nouveau poème** depuis le **+** au-dessus de la liste.
2. Tapez `/verse` et appuyez sur `Enter`, ou appuyez sur `⌥⌘V`.
3. Écrivez. `Enter` commence une nouvelle ligne dans les vers.
4. Appuyez deux fois sur `Enter` pour une ligne vide entre les strophes.
5. Appuyez sur `⌘↩` pour sortir des vers vers un paragraphe ordinaire en
   dessous.

Les vers, les épigraphes, les exergues et les sauts de scène sont proposés dans
les documents qui appartiennent à un projet.

## Comment les vers sont composés {#how-verse-is-set}

Les vers ne sont pas un encadré. Ils se placent à la même marge que le reste du
texte, sans filet à côté ni retrait, et chaque ligne reste là où vous l’avez
coupée.

- **Vos retraits sont conservés.** Commencez une ligne par des espaces ou une
  `Tab` et elle garde ce retrait, sur la page et dans chaque export.
- **Rien n’est justifié ni coupé par des traits d’union**, donc aucune ligne
  n’est étirée ni scindée.
- **Une ligne trop longue pour la page imprimée** continue en dessous, en
  retrait, comme les éditeurs composent les vers.
- **Une ligne vide** sépare les strophes.

L’italique et les autres mises en forme fonctionnent dans les vers comme
partout ailleurs.

## Transformer de la prose en vers, et inversement {#turn-prose-into-verse-and-back}

Vous avez déjà écrit le poème en paragraphes ? Sélectionnez-les et choisissez
**Vers** (`/verse` ou `⌥⌘V`). Chaque paragraphe devient une ligne, et un
paragraphe vide devient un saut de strophe. Recommencez dans les vers et chaque
ligne redevient un paragraphe à part entière.

## Ouvrir sur une épigraphe {#open-with-an-epigraph}

Tapez `/epigraph` pour une citation d’ouverture. Écrivez la citation, puis sa
source dans le champ d’attribution en dessous ; `↓` depuis la dernière ligne de
la citation vous y amène.

Une épigraphe pour tout le livre a sa place dans les
[Détails du livre](./book-details) du projet, qui la placent sur une page à
part.

## Mettre une ligne en valeur {#set-a-line-apart}

- **Exergue** (`/pull-quote`) : une ligne composée en grand, pour une phrase
  sur laquelle vous voulez que le lecteur s’arrête.
- **Saut de scène** (`/scene`) : un ornement centré entre les sections :
  **Astérisme** ⁂, **Étoiles** \* \* \*, **Fleuron** ❧ ou **Espace vide**.
  Pointez-le pour en changer. Dans un livre exporté, chaque saut prend
  l’ornement de la maquette, que vous pouvez changer sous **Ajuster la
  maquette → Entre les scènes**.

| Bloc | Insérer avec |
| --- | --- |
| **Vers** | `/verse` ou `⌥⌘V` |
| **Épigraphe** | `/epigraph` |
| **Exergue** | `/pull-quote` |
| **Saut de scène** | `/scene` |

## Créer un recueil de poèmes {#make-a-collection-of-poems}

Donnez à un projet le type **Poésie** et il sera fait de **Poèmes**, groupés en
**Parties**. Réglez-le sous **Réglages → Type** sur la page du projet, ou
choisissez **Poésie** quand l’Accueil d’Écrire propose **Commencer un projet**.
Tout le reste fonctionne comme pour n’importe quel projet : organisez les
poèmes dans **Sommaire**, placez une dédicace dans les pages liminaires, fixez
un objectif.

## Exporter avec la maquette Poésie {#export-with-the-poetry-design}

Sur la page **Exporter** du projet, sous **Livre imprimé** ou **Livre
numérique**, choisissez la maquette **Poésie**. Elle compose les vers en vers :
lignes conservées, rien de justifié ni de coupé, pas de retrait de première
ligne, chaque poème commençant sur une nouvelle page avec de l’espace autour.

:::tip Un format pour les poèmes
**Digest — 5,5 × 8,5 po** est un format courant pour un recueil de poésie
imprimé.
:::

## Voir aussi {#see-also}

- [Les maquettes et leurs ajustements](./designs)
- [Imprimer un livre](./print-a-book)
- [Mise en forme et blocs](./formatting-and-blocks)
- [Projets](./collections)
