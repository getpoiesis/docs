---
title: Modèles
sidebar_position: 15
---

# Modèles

Les modèles sont des blocs réutilisables que vous insérez dans n’importe quel
document — un en-tête de scène, une trame de poème, une disposition de journal de
bord, un format de lettre. Construisez la structure une fois, puis insérez-la
chaque fois que vous en avez besoin.

## Insérer un modèle

Deux façons, toutes deux là où se trouve votre curseur :

- **Menu slash** — tapez `/` dans l’éditeur, puis le nom du modèle (ou le mot
  `template`), et choisissez-le dans la liste.
- **Palette de commandes** — ouvrez-la avec `⌘P` et recherchez le modèle.

Le bloc est inséré au curseur, avec ses variables remplies (voir ci-dessous).

## Enregistrer un modèle

Créez ce que vous voulez réutiliser, puis enregistrez-le :

- **Enregistrer le document entier** — **Enregistrer le document comme modèle…**
  dans la palette de commandes, ou le bouton d’enregistrement dans la liste des
  modèles. Donnez-lui un nom.
- **Enregistrer une sélection** — sélectionnez la partie voulue et utilisez
  **Enregistrer la sélection comme modèle…**, pour ne garder que ce fragment.

## Modèles globaux ou de coffre

Lorsque vous enregistrez, φ vous demande où il doit vivre :

- **Tous les coffres (global)** — disponible partout. Les modèles globaux sont
  stockés au niveau de l’app, partagés entre tous les coffres, donc en ajouter ou
  en retirer un ne touche jamais aux fichiers de votre coffre.
- **Ce coffre uniquement** — disponible seulement dans le coffre actuel, et il le
  suit.

Dans la liste des modèles, les deux sont présentés sous les sections **Modèles
globaux** et **Ce coffre**.

## L’éditeur de modèle

Pour modifier un modèle, ouvrez l’éditeur **Modifier le modèle**. C’est une
surface d’écriture autonome — modifier un modèle ici ne perturbe jamais votre
document ouvert. Modifiez le contenu et le nom, puis enregistrez. Vous pouvez
aussi renommer, retirer, installer un fichier de modèle, ou ouvrir le dossier des
modèles depuis la liste.

## Variables de modèle

Un modèle peut inclure des variables qui se remplissent au moment où vous
l’insérez (elles ne sont jamais stockées déjà résolues). Tapez-les comme du texte
littéral :

| Variable        | Se remplit avec                                |
| --------------- | ---------------------------------------------- |
| `<% today %>`   | la date du jour                                |
| `<% tomorrow %>`| la date de demain                              |
| `<% yesterday %>`| la date d’hier                                |
| `<% time %>`    | l’heure actuelle                               |
| `<% cursor %>`  | rien — c’est là que le curseur se place        |

Les variables fonctionnent dans le texte brut et à l’intérieur des liens. Les
variables de date deviennent des pastilles de date interactives dans le texte
brut ; à l’intérieur d’un lien ou avec d’autres mises en forme, elles se résolvent
en texte brut. Après l’insertion, votre curseur saute là où vous avez placé
`<% cursor %>`, pour que vous puissiez commencer à taper aussitôt.
