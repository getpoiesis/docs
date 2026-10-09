---
title: Modèles
description: Des blocs réutilisables que vous préparez une fois et que vous insérez dans n’importe quel document avec une barre oblique.
---

# Modèles

Un **modèle** est un bloc de texte que vous enregistrez une fois et que vous
réutilisez à volonté : un en-tête de scène, la structure d’un poème, un
journal de bord quotidien, une lettre. Vous l’insérez dans n’importe quel
document avec `/`. Un modèle peut aussi inscrire la date du jour et placer le
curseur (le trait clignotant qui marque l’endroit où vous écrivez) là où vous
voulez commencer à taper.

## Utiliser un modèle {#use-a-template}

1. Placez le curseur à l’endroit où le modèle doit aller.
2. Tapez `/` puis le nom du modèle. Ou tapez `/template` pour voir tous vos
   modèles.
3. Choisissez le modèle dans le menu des blocs.

φ Poiesis insère le modèle à l’emplacement du curseur et remplit ses variables (voir
[Remplir les dates et placer le curseur](#fill-in-dates-and-the-caret)).

Dans le menu, chaque modèle porte l’une de ces deux mentions :

- **Insérer un modèle enregistré** : le modèle est disponible dans tous les
  [coffres](./vaults). Un coffre est le dossier qui contient vos textes.
- **Insérer un modèle du coffre** : le modèle n’est disponible que dans ce
  coffre.

## Enregistrer quelque chose comme modèle {#save-something-as-a-template}

| Pour enregistrer | Faites ceci | Où il est conservé |
| --- | --- | --- |
| Le document entier | Appuyez sur `⌘P`, choisissez **Enregistrer le document comme modèle…**, puis donnez-lui un nom. | Tous les coffres. |
| Une partie d’un document | Sélectionnez cette partie. Dans la barre d’outils qui apparaît, cliquez sur **›** (**Plus d’outils**), puis sur **Enregistrer la sélection comme modèle…**. Donnez-lui un nom, puis choisissez **Tous les coffres** ou **Ce coffre uniquement**. | Au choix. |

Les modèles valables pour tous les coffres sont conservés par Poiesis, en dehors de
vos coffres. En ajouter ou en supprimer un ne change rien aux fichiers de
votre coffre. Les modèles propres à un coffre sont conservés dans le dossier
de ce coffre. Si vous copiez ou déplacez le coffre, ils le suivent.

## La page Modèles {#the-templates-page}

Pour l’ouvrir, allez dans **Notes** et cliquez sur **Modèles** sous
**Lieux**, dans la barre latérale. Ou appuyez sur `⌘K` et tapez *Modèles*.

<img src="/img/app/templates-page-light.png" alt="La page Modèles dans Notes, avec trois modèles dans la liste et « Daily log » sélectionné" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/templates-page-dark.png" alt="La page Modèles dans Notes, avec trois modèles dans la liste et « Daily log » sélectionné" width="1600" height="1000" loading="lazy" decoding="async" />

La liste contient tous les modèles utilisables dans ce coffre. Chacun porte
la mention **Ce coffre** ou **Dans tous les coffres**. Cliquez sur un modèle
pour voir son contenu.

- **+** (**Nouveau modèle**) crée un modèle vide pour ce coffre, nommé
  **Modèle sans titre**.
- **Modifier le modèle** ouvre le modèle dans l’éditeur de modèles.
- **Retirer le modèle** supprime un modèle de ce coffre. Pour supprimer un
  modèle valable pour tous les coffres, passez par les Réglages (voir la
  section suivante).

## Modifier un modèle {#edit-a-template}

L’éditeur de modèles est séparé de vos documents. Modifier un modèle ne
change pas le document que vous avez ouvert.

<img src="/img/app/template-editor-light.png" alt="L’éditeur de modèles ouvert sur un journal de bord qui utilise les variables de date et de curseur" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/template-editor-dark.png" alt="L’éditeur de modèles ouvert sur un journal de bord qui utilise les variables de date et de curseur" width="1600" height="1000" loading="lazy" decoding="async" />

1. Modifiez le nom et le contenu.
2. Cliquez sur **Enregistrer**.

Un rappel des variables est affiché sous l’éditeur.

**Réglages → Modèles** présente aussi vos modèles, sous **Ce coffre** et
**Modèles globaux**. Chacun a un crayon pour le modifier et une corbeille
pour le supprimer. Sous les listes :

- **Installer un modèle…** ajoute un fichier de modèle que quelqu’un vous a
  donné.
- **Ouvrir le dossier des modèles** ouvre le dossier qui contient les modèles
  valables pour tous les coffres.

## Remplir les dates et placer le curseur {#fill-in-dates-and-the-caret}

Une variable est un code court placé dans un modèle. Poiesis la remplace chaque
fois que vous insérez le modèle. Le même modèle donne ainsi
toujours la date du jour où vous l’insérez.

Tapez une variable comme du texte ordinaire dans le modèle :

| Variable | Est remplacée par |
| --- | --- |
| `<% today %>` | La date du jour. |
| `<% tomorrow %>` | La date de demain. |
| `<% yesterday %>` | La date d’hier. |
| `<% time %>` | L’heure qu’il est. |
| `<% cursor %>` | Rien. Elle marque l’endroit où se place le curseur, pour que vous puissiez commencer à taper là. |

Dans du texte ordinaire, une date devient une pastille de date sur laquelle
vous pouvez cliquer. À l’intérieur d’un lien ou d’une autre mise en forme,
elle devient du texte simple.

:::tip Un modèle pour chaque type de journée

Créez un modèle de journal de bord quotidien avec `<% today %>` pour titre et
`<% cursor %>` au-dessous. Insérez-le, et vous obtenez une page à la date du
jour, prête à recevoir votre texte.

:::

## Voir aussi {#see-also}

- [Mise en forme et blocs](./formatting-and-blocks) : le menu des blocs (`/`).
- [Journal et pages du matin](./journal-and-morning-pages)
- [Réglages](./settings)
