---
title: Modèles
---

# Modèles

Les modèles sont des blocs réutilisables que vous insérez dans n’importe quel
document : un en-tête de scène, une trame de poème, une mise en page de journal
de bord, un format de lettre. Construisez la structure une fois, puis insérez-la
partout où vous en avez besoin.

## Insérer un modèle {#inserting-a-template}

Placez le curseur là où le modèle doit aller, tapez `/`, puis le nom du modèle
(ou le mot `template` pour les voir tous), et choisissez-le dans la liste. Le
menu slash indique pour chacun s’il s’agit d’un modèle enregistré ou d’un modèle
du coffre.

Le bloc est inséré au curseur, avec ses variables remplies (voir ci-dessous).

## Enregistrer un modèle {#saving-a-template}

Créez ce que vous voulez réutiliser, puis enregistrez-le :

- **Le document entier.** Ouvrez la palette de commandes (`⌘P`) et choisissez
  **Enregistrer le document comme modèle…**, puis donnez-lui un nom. Un modèle
  enregistré ainsi est disponible dans tous les coffres.
- **Seulement une sélection.** Sélectionnez la partie voulue, cliquez sur **›**
  (**Plus d’outils**) dans la barre qui apparaît, puis sur l’icône **Enregistrer
  la sélection comme modèle…**. Nommez-le, et φ vous demande où il doit vivre :
  - **Tous les coffres** : disponible partout. Ces modèles sont conservés par
    l’app elle-même, donc en ajouter ou en retirer un ne touche jamais aux
    fichiers de votre coffre.
  - **Ce coffre uniquement** : disponible seulement dans le coffre actuel, et
    conservé dans son dossier, donc il suit le coffre.

## Le lieu Modèles {#the-templates-place}

Chaque modèle que ce coffre peut utiliser a son propre lieu. Dans **Notes**,
trouvez **Modèles** sous **Lieux** dans la barre latérale, ou appuyez sur `⌘K` et
tapez *Modèles*.

La liste affiche d’abord les modèles propres à ce coffre, puis ceux enregistrés
pour tous les coffres (marqués **Dans tous les coffres**). Choisissez-en un pour
voir ce qu’il écrit sur la page.

- **+** (ou **Nouveau modèle**) crée un modèle de coffre vide appelé **Modèle
  sans titre**, prêt à être modifié.
- **Modifier le modèle** ouvre l’éditeur de modèle.
- **Retirer le modèle** supprime un modèle de coffre. (Les modèles enregistrés
  pour tous les coffres se retirent dans les Réglages, ci-dessous.)

## L’éditeur de modèle {#the-template-editor}

L’éditeur de modèle est une surface d’écriture à part entière. Y modifier un
modèle ne perturbe jamais le document que vous avez ouvert. Changez le nom et le
contenu, puis **Enregistrer**. Un rappel des variables se trouve en dessous.

## Les modèles dans les Réglages {#templates-in-settings}

**Réglages → Modèles** les rassemble aussi, en deux listes : **Ce coffre** et
**Modèles globaux**. Chacun a un crayon pour le modifier et une corbeille pour le
retirer. Sous les listes :

- **Installer un modèle…** ajoute un fichier de modèle que quelqu’un vous a
  donné.
- **Ouvrir le dossier des modèles** montre où sont conservés les modèles de tous
  les coffres.

## Variables de modèle {#template-variables}

Un modèle peut inclure des variables qui se remplissent au moment où vous
l’insérez. Elles ne sont jamais stockées déjà remplies, donc le même modèle donne
la date d’aujourd’hui aujourd’hui et celle de demain demain. Tapez-les comme du
texte brut :

| Variable | Se remplit avec |
| --- | --- |
| `<% today %>` | la date du jour |
| `<% tomorrow %>` | la date de demain |
| `<% yesterday %>` | la date d’hier |
| `<% time %>` | l’heure actuelle |
| `<% cursor %>` | rien ; c’est là que le curseur se place |

Les variables fonctionnent dans le texte brut et à l’intérieur des liens. Dans le
texte brut, les variables de date deviennent des pastilles de date sur lesquelles
vous pouvez cliquer ; dans un lien ou une autre mise en forme, elles deviennent
du texte brut. Après l’insertion, le curseur saute là où vous avez placé
`<% cursor %>`, pour que vous puissiez commencer à taper aussitôt.
