---
title: Modèles
description: Des blocs réutilisables que vous construisez une fois et insérez dans n’importe quel document avec une barre oblique.
---

# Modèles

Un **modèle** est un bloc que vous réutilisez : un en-tête de scène, le
squelette d’un poème, un journal de bord quotidien, une lettre. Construisez la
structure une fois, puis placez-la où vous en avez besoin avec `/`. Les
modèles peuvent inscrire la date du jour et placer le curseur là où vous
commencerez à taper.

## Utiliser un modèle {#use-a-template}

1. Placez le curseur là où le modèle doit aller.
2. Tapez `/` et le nom du modèle, ou `/template` pour les voir tous.
3. Choisissez-le dans le menu. Chaque modèle est marqué **Insérer un modèle
   enregistré** (tous les coffres) ou **Insérer un modèle du coffre** (ce
   coffre uniquement).

Le bloc est inséré au curseur, avec ses variables remplies.

## Enregistrer quelque chose comme modèle {#save-something-as-a-template}

| Pour enregistrer | Faites ceci | Où il est gardé |
| --- | --- | --- |
| Le document entier | `⌘P` → **Enregistrer le document comme modèle…**, puis nommez-le. | Tous les coffres. |
| Une partie d’un document | Sélectionnez-la, appuyez sur **›** (**Plus d’outils**) dans la barre d’outils qui apparaît, puis sur **Enregistrer la sélection comme modèle…**. Nommez-le, puis choisissez **Tous les coffres** ou **Ce coffre uniquement**. | Selon votre choix. |

Les modèles pour tous les coffres sont gardés par φ lui-même, si bien qu’en
ajouter ou en retirer un ne touche jamais aux fichiers de votre coffre. Les
modèles d’un seul coffre sont gardés dans son dossier, et voyagent donc avec
le coffre.

## La page Modèles {#the-templates-page}

Dans **Notes**, ouvrez **Modèles** sous **Lieux** dans la barre latérale, ou
appuyez sur `⌘K` et tapez *Modèles*. La liste montre chaque modèle que ce
coffre peut utiliser, marqué **Ce coffre** ou **Dans tous les coffres**.
Choisissez-en un pour voir ce qu’il écrit.

- **+** (**Nouveau modèle**) en crée un vide pour ce coffre, appelé **Modèle
  sans titre**.
- **Modifier le modèle** l’ouvre dans l’éditeur de modèles.
- **Retirer le modèle** supprime l’un des modèles de ce coffre. Les modèles
  pour tous les coffres se retirent dans les Réglages (voir plus bas).

## Modifier un modèle {#edit-a-template}

L’éditeur de modèles est une surface d’écriture à part entière : y modifier
un modèle ne dérange jamais le document que vous avez ouvert. Changez le nom
et le contenu, puis appuyez sur **Enregistrer**. Un rappel des variables se
trouve en dessous.

**Réglages → Modèles** les liste aussi, sous **Ce coffre** et **Modèles
globaux**, chacun avec un crayon pour le modifier et une corbeille pour le
retirer. Sous les listes :

- **Installer un modèle…** ajoute un fichier de modèle que quelqu’un vous a
  donné.
- **Ouvrir le dossier des modèles** montre où sont gardés les modèles pour
  tous les coffres.

## Remplir les dates et le curseur {#fill-in-dates-and-the-caret}

Un modèle peut porter des variables qui se remplissent au moment où vous
l’insérez. Comme elles sont remplies à chaque fois, le même modèle donne la
date d’aujourd’hui aujourd’hui et celle de demain demain. Tapez-les en texte
simple dans le modèle :

| Variable | Se remplit avec |
| --- | --- |
| `<% today %>` | La date d’aujourd’hui. |
| `<% tomorrow %>` | La date de demain. |
| `<% yesterday %>` | La date d’hier. |
| `<% time %>` | L’heure actuelle. |
| `<% cursor %>` | Rien : c’est là que se place le curseur, pour que vous puissiez commencer à taper. |

Dans du texte simple, les dates deviennent des pastilles de date sur
lesquelles vous pouvez cliquer. Dans un lien ou une autre mise en forme, elles
deviennent du texte simple.

:::tip Un modèle pour chaque sorte de journée

Un journal de bord quotidien avec `<% today %>` comme titre et `<% cursor %>`
en dessous vous donne une page datée, prête à écrire, d’une seule barre
oblique.

:::

## Voir aussi {#see-also}

- [Mise en forme et blocs](./formatting-and-blocks) : le menu `/`.
- [Journal et pages du matin](./journal-and-morning-pages)
- [Réglages](./settings)
